import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { L as LatexContentCard } from './LatexContentCard-CQqAAePt.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DevelopmentCard",
  __ssrInlineRender: true,
  props: {
    development: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(LatexContentCard, mergeProps({
        "btn-check": "Consulter le d\xE9veloppement",
        "link-prefix": "developpements",
        object: _ctx.development
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a;
          if (_push2) {
            _push2(`<p${_scopeId}>${(_a = _ctx.development.summary) != null ? _a : ""}</p>`);
          } else {
            return [
              createVNode("p", {
                innerHTML: _ctx.development.summary
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards/DevelopmentCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DevelopmentCard-C6CuXv1N.mjs.map
