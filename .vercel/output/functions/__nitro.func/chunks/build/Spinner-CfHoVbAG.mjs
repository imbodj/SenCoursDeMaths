import { BSpinner } from 'bootstrap-vue-next/components/BSpinner';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_b_spinner = BSpinner;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-5 text-center" }, _attrs))} data-v-d273290a>`);
  _push(ssrRenderComponent(_component_b_spinner, {
    variant: "primary",
    label: "Chargement..."
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Spinner.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d273290a"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Spinner-CfHoVbAG.mjs.map
