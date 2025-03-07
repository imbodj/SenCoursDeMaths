import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { L as LatexContentCard } from './LatexContentCard-CQqAAePt.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LessonCard",
  __ssrInlineRender: true,
  props: {
    lesson: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(LatexContentCard, mergeProps({
        "btn-check": "Consulter le plan",
        "link-prefix": "lecons",
        object: _ctx.lesson
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards/LessonCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=LessonCard-BAeNLVQz.mjs.map
