import { createSelector } from 'reselect';
import { getTypeGraphSelector, getDisplayOptions } from './type-graph';
import { stringifyWrappers } from '../introspection/';
import * as _ from 'lodash';

export const getDotSelector = createSelector(getTypeGraphSelector, getDisplayOptions, getDot);

function getDot(typeGraph, displayOptions): string {
  function isNode(type) {
    return typeGraph.nodes[type.id] !== undefined;
  }

  return (
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
        node => `
        "${node.name}" [
          id = "${node.id}"
          label = ${nodeLabel(node, displayOptions)}
        ]
        ${objectValues(
          node.fields,
          field =>
            isNode(field.type)
              ? `
          "${node.name}":"${field.name}" -> "${field.type.name}" [
            id = "${field.id} => ${field.type.id}"
            label = "${node.name}:${field.name}"
          ]
        `
              : '',
          displayOptions,
        )};
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
      `,
      displayOptions,
      )}
    }
  `
  );
}

function nodeLabel(node, displayOptions) {
  const htmlID = HtmlId('TYPE_TITLE::' + node.name);
  const kindLabel = node.kind !== 'OBJECT' ? '&lt;&lt;' + node.kind.toLowerCase() + '&gt;&gt;' : '';

  return `
    <<TABLE ALIGN="LEFT" BORDER="0" CELLBORDER="1" CELLSPACING="0" CELLPADDING="5">
      <TR>
        <TD CELLPADDING="4" ${htmlID}><FONT POINT-SIZE="18">${
    node.name
  }</FONT><BR/>${kindLabel}</TD>
      </TR>
      ${objectValues(node.fields, nodeField, displayOptions)}
      ${possibleTypes(node)}
      ${derivedTypes(node)}
    </TABLE>>
  `;
}

function canDisplayRow(type, displayOptions) {
  if(type.kind === 'SCALAR') {
    return displayOptions.displayScalars;
  }
  return true;
}

function nodeField(field, displayOptions) {
  const relayIcon = field.relayType ? TEXT('{R}') : '';
  const parts = stringifyWrappers(field.typeWrappers).map(TEXT);
  return canDisplayRow(field.type, displayOptions) ? `
    <TR>
      <TD ${HtmlId(field.id)} ALIGN="LEFT" PORT="${field.name}">
        <TABLE CELLPADDING="0" CELLSPACING="0" BORDER="0">
          <TR>
            <TD ALIGN="LEFT">${field.name}<FONT>  </FONT></TD>
            <TD ALIGN="RIGHT">${relayIcon}${parts[0]}${field.type.name}${parts[1]}</TD>
          </TR>
        </TABLE>
      </TD>
    </TR>
  `: '';
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
        <TD ${HtmlId(id)} ALIGN="LEFT" PORT="${type.name}">${type.name}</TD>
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
        <TD ${HtmlId(id)} ALIGN="LEFT" PORT="${type.name}">${type.name}</TD>
      </TR>
    `,
    )}
  `;
}

function objectValues<X>(object: { [key: string]: X }, stringify: (X, displayOptions) => string, displayOptions): string {
  return _.values(object)
    .map(object => stringify(object, displayOptions))
    .join('\n');
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
