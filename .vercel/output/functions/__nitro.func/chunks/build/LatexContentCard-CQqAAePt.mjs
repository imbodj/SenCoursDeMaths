import { BButtonGroup, BButton } from 'bootstrap-vue-next/components/BButton';
import __nuxt_component_5 from './index-C9yR7Kjj.mjs';
import { defineComponent, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LatexContentCard",
  __ssrInlineRender: true,
  props: {
    btnCheck: {},
    linkPrefix: {},
    object: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_b_button_group = BButtonGroup;
      const _component_b_button = BButton;
      const _component_icon = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1761677c><h2 class="card-title" data-v-1761677c>${(_a = _ctx.object.name) != null ? _a : ""}</h2>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_b_button_group, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_b_button, {
              to: `/${_ctx.linkPrefix}/${_ctx.object.slug}/`,
              variant: "dark"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_icon, { name: "bi:box-arrow-in-right" }, null, _parent3, _scopeId2));
                  _push3(` ${ssrInterpolate(_ctx.btnCheck)}`);
                } else {
                  return [
                    createVNode(_component_icon, { name: "bi:box-arrow-in-right" }),
                    createTextVNode(" " + toDisplayString(_ctx.btnCheck), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_b_button, {
              href: `/pdf/${_ctx.linkPrefix}/${_ctx.object.slug}.pdf`,
              variant: "secondary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_icon, { name: "bi:file-text" }, null, _parent3, _scopeId2));
                  _push3(` T\xE9l\xE9charger le PDF `);
                } else {
                  return [
                    createVNode(_component_icon, { name: "bi:file-text" }),
                    createTextVNode(" T\xE9l\xE9charger le PDF ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_b_button, {
                to: `/${_ctx.linkPrefix}/${_ctx.object.slug}/`,
                variant: "dark"
              }, {
                default: withCtx(() => [
                  createVNode(_component_icon, { name: "bi:box-arrow-in-right" }),
                  createTextVNode(" " + toDisplayString(_ctx.btnCheck), 1)
                ]),
                _: 1
              }, 8, ["to"]),
              createVNode(_component_b_button, {
                href: `/pdf/${_ctx.linkPrefix}/${_ctx.object.slug}.pdf`,
                variant: "secondary"
              }, {
                default: withCtx(() => [
                  createVNode(_component_icon, { name: "bi:file-text" }),
                  createTextVNode(" T\xE9l\xE9charger le PDF ")
                ]),
                _: 1
              }, 8, ["href"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards/LatexContentCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const LatexContentCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1761677c"]]);

export { LatexContentCard as L };
//# sourceMappingURL=LatexContentCard-CQqAAePt.mjs.map
