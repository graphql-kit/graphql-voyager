import * as _ from 'lodash';
import { stringifyWrappers } from './utils'

export function getDot(typeGraph, displayOptions): string {
  let result = (
    typeGraph &&
    `
    digraph {
      graph [
        rankdir = "LR"
      ];
      node [
        fontsize = "16"
        fontname = "helvetica, open-sans"
        shape = "plaintext"
      ];
      edge [
      ];
      ranksep = 2.0
      ${objectValues(
        typeGraph.nodes,
        node,
      )};
      ${nodeEdges(typeGraph.edges)};
    }
  `
  );
  
  console.log(result)
  //result = result.replace(/::/g, '__')
  
  return result
  
  function node(node) {
    return `
        "${node.id}" [
          id = "${node.id}"
          label = <${nodeLabel(node)}>
        ]
        ${array(
      node.possibleTypes,
      ({ id, type }) => `
          "${node.name}":"${type.name}" -> "${type.name}" [
            id = "${id} => ${type.id}"
            style = "dashed"
          ]
        `,
    )}
        ${array(
      node.derivedTypes,
      ({ id, type }) => `
          "${node.name}":"${type.name}" -> "${type.name}" [
            id = "${id} => ${type.id}"
            style = "dotted"
          ]
        `,
    )}
      `
  }

  function nodeEdges(edges) {
    return Object.entries(edges).reduce((result, [from, to]) => {
      return result + `
          "TYPE::${from.split('::')[1]}":"${port(from)}" -> "TYPE::${(to as string).split('::')[1]}":"${port(to)}" [
            id = "${from} => ${to}"
            label = "${from.split('::').splice(-2).join('.')}"
          ]
    `
    }, "");
  }
  
  function nodeLabel(node) {
    const htmlID = HtmlId('TYPE_TITLE::' + node.id);
    const kindLabel =
      !['OBJECT', 'EMBEDDED'].includes(node.kind)
        ? '&lt;&lt;' + node.kind.toLowerCase() + '&gt;&gt;'
        : '';

    return `
      <TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="1" CELLSPACING="0" CELLPADDING="0">
        <TR>
          <TD  ${htmlID} PORT="${port(node.id)}"><FONT POINT-SIZE="18">${
      node.name
    }</FONT><BR/>${kindLabel}</TD>
        </TR>
        ${objectValues(node.fields, nodeField)}
        ${possibleTypes(node)}
        ${derivedTypes(node)}
      </TABLE>
    `;
  }

  function canDisplayRow(type) {
    if (type.kind === 'SCALAR' || type.kind === 'ENUM') {
      return displayOptions.showLeafFields;
    }
    return true;
  }

  function nodeField(field) {
    const relayIcon = field.relayType ? TEXT('{R}') : '';
    const deprecatedIcon = field.isDeprecated ? TEXT('{D}') : '';
    const parts = stringifyWrappers(field.typeWrappers).map(TEXT);
    if (field.type.kind === 'EMBEDDED') {
      //debugger
      return `
      <TR>
        <TD ${HtmlId(field.id)} ALIGN="LEFT" PORT="${port(field.id)}">
          <TABLE CELLPADDING="5" CELLSPACING="0" BORDER="0">
            <TR>
              <TD ALIGN="LEFT">${field.name}<FONT>  </FONT></TD>
              <TD ALIGN="RIGHT">${deprecatedIcon}${relayIcon}${parts[0]}${
        field.type.name
      }${parts[1]}</TD>
            </TR>
            <TR>
              <TD ${HtmlId(field.type.id)} CELLPADDING="10" colspan="2">${nodeLabel(field.type)}</TD>
            </TR>
          </TABLE>
        </TD>
      </TR>
    `
    }
    
    return canDisplayRow(field.type)
      ? `
      <TR>
        <TD ${HtmlId(field.id)} ALIGN="LEFT" PORT="${port(field.id)}">
          <TABLE CELLPADDING="5" CELLSPACING="0" BORDER="0">
            <TR>
              <TD ALIGN="LEFT">${field.name}<FONT>  </FONT></TD>
              <TD ALIGN="RIGHT">${deprecatedIcon}${relayIcon}${parts[0]}${
          field.type.name
        }${parts[1]}</TD>
            </TR>
          </TABLE>
        </TD>
      </TR>
    `
      : '';
  }
}

function possibleTypes(node) {
  const possibleTypes = node.possibleTypes;
  if (_.isEmpty(possibleTypes)) {
    return '';
  }
  return `
    <TR>
      <TD>possible types</TD>
    </TR>
    ${array(
      possibleTypes,
      ({ id, type }) => `
      <TR>
        <TD ${HtmlId(id)} ALIGN="LEFT" PORT="${port(id)}">${type.name}</TD>
      </TR>
    `,
    )}
  `;
}

function derivedTypes(node) {
  const derivedTypes = node.derivedTypes;
  if (_.isEmpty(derivedTypes)) {
    return '';
  }
  return `
    <TR>
      <TD>implementations</TD>
    </TR>
    ${array(
      derivedTypes,
      ({ id, type }) => `
      <TR>
        <TD ${HtmlId(id)} ALIGN="LEFT" PORT="${port(id)}">${type.name}</TD>
      </TR>
    `,
    )}
  `;
}

function objectValues<X>(
  object: { [key: string]: X },
  stringify: (X) => string,
): string {
  return _.values(object).map(stringify).join('\n');
}

function array<X>(array: [X], stringify: (X) => string): string {
  return array ? array.map(stringify).join('\n') : '';
}

function HtmlId(id) {
  return 'HREF="remove_me_url" ID="' + id + '"';
}

function TEXT(str) {
  if (str === '') return '';
  str = str.replace(/]/, '&#93;');
  return '<FONT>' + str + '</FONT>';
}

function port(id) {
  //return id
  return id.replace(/::/g, '__')
}
