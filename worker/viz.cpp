#include <emscripten.h>
#include <emscripten/bind.h>
#include <gvc.h>

using namespace emscripten;

extern gvplugin_library_t gvplugin_core_LTX_library;
extern gvplugin_library_t gvplugin_dot_layout_LTX_library;

static std::string errorMessages;

int vizErrorf(char *buf) {
  errorMessages.append(buf);
  return 0;
}

std::string vizLastErrorMessage() {
  if (agreseterrors() == 0) return "";
  std::string str(errorMessages);
  errorMessages.clear();
  return str;
}

std::string vizRenderFromString(std::string src) {
  GVC_t *context;
  Agraph_t *graph;
  const char *input = src.c_str();
  char *output = NULL;
  std::string result;
  unsigned int length;

  context = gvContext();
  gvAddLibrary(context, &gvplugin_core_LTX_library);
  gvAddLibrary(context, &gvplugin_dot_layout_LTX_library);

  agseterr(AGERR);
  agseterrf(vizErrorf);

  agreadline(1);

  while ((graph = agmemread(input))) {
    if (output == NULL) {
      gvLayout(context, graph, "dot");
      gvRenderData(context, graph, "svg", &output, &length);
      gvFreeLayout(context, graph);
    }

    agclose(graph);

    input = "";
  }

  result.assign(output, length);
  gvFreeRenderData(output);

  return result;
}

EMSCRIPTEN_BINDINGS(viz_js) {
  function("vizRenderFromString", &vizRenderFromString);
  function("vizLastErrorMessage", &vizLastErrorMessage);
}
