import { _ as __nuxt_component_0 } from './Spinner-CfHoVbAG.mjs';
import { _ as __nuxt_component_2 } from './Cards-CEvwt4yD.mjs';
import { b as useRoute, c as usePdfBanner, u as usePageHead, a as _sfc_main$2 } from './server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './SheetCard-BYMROyWp.mjs';
import { u as useFetch } from './fetch-c1PABlO6.mjs';
import { r as removeTrailingSlashIfPossible } from './utils-B9tdQQnS.mjs';
import 'bootstrap-vue-next/components/BSpinner';
import 'bootstrap-vue-next/components/BContainer';
import 'bootstrap-vue-next/components/BButton';
import './index-C9yR7Kjj.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import './asyncData-BU6fKU2G.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import '@iconify/utils';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'bootstrap-vue-next/directives';
import 'bootstrap-vue-next/plugins/createBootstrap';
import 'bootstrap-vue-next/components/BFormInput';
import './LatexContentCard-CQqAAePt.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: sheets, status, error } = ([__temp, __restore] = withAsyncContext(() => useFetch("/_api/latex/fiches/", "$OpJwMRSkSs")), __temp = await __temp, __restore(), __temp);
    const route = useRoute();
    const path = removeTrailingSlashIfPossible(route.path);
    usePdfBanner(`/pdf${path}.pdf`);
    usePageHead({ title: "Liste des fiches" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spinner = __nuxt_component_0;
      const _component_cards = __nuxt_component_2;
      const _component_error_display = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(status) === "pending") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_spinner, null, null, _parent));
        _push(`</div>`);
      } else if (unref(sheets)) {
        _push(`<div><h1>Liste des fiches</h1>`);
        _push(ssrRenderComponent(_component_cards, {
          "input-id": "sheet-search-field",
          items: unref(sheets),
          "search-fields": ["name", "summary"]
        }, {
          default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                sheet: slotProps.item
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$1, {
                  sheet: slotProps.item
                }, null, 8, ["sheet"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_error_display, { error: unref(error) }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/fiches/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BX4_IQJf.mjs.map
