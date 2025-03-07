import { _ as __nuxt_component_0 } from './Spinner-CfHoVbAG.mjs';
import { _ as __nuxt_component_2 } from './Cards-CEvwt4yD.mjs';
import { b as useRoute, c as usePdfBanner, u as usePageHead, a as _sfc_main$2 } from './server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { L as LatexContentCard } from './LatexContentCard-CQqAAePt.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RankingCard",
  __ssrInlineRender: true,
  props: {
    ranking: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(LatexContentCard, mergeProps({
        "btn-check": "Consulter l'entr\xE9e",
        "link-prefix": "historique",
        object: _ctx.ranking
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards/RankingCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: rankings, status, error } = ([__temp, __restore] = withAsyncContext(() => useFetch("/_api/latex/historique/", "$gxo2eEFMYj")), __temp = await __temp, __restore(), __temp);
    const route = useRoute();
    const path = removeTrailingSlashIfPossible(route.path);
    usePdfBanner(`/pdf${path}.pdf`);
    usePageHead({ title: "Historique des admissions" });
    const sortFunction = (rankings2) => rankings2.sort((a, b) => b.slug.localeCompare(a.slug));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spinner = __nuxt_component_0;
      const _component_cards = __nuxt_component_2;
      const _component_error_display = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(status) === "pending") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_spinner, null, null, _parent));
        _push(`</div>`);
      } else if (unref(rankings)) {
        _push(`<div><h1>Historique des admis \xE0 l&#39;agr\xE9gation externe</h1>`);
        _push(ssrRenderComponent(_component_cards, {
          "input-id": "rankings-search-field",
          items: unref(rankings),
          "search-fields": ["name", "summary"],
          "sort-function": sortFunction
        }, {
          default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                ranking: slotProps.item
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$1, {
                  ranking: slotProps.item
                }, null, 8, ["ranking"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/historique/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index--J0-WR_i.mjs.map
