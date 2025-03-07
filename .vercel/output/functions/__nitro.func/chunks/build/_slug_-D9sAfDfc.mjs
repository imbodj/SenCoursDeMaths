import { _ as __nuxt_component_0 } from './Spinner-CfHoVbAG.mjs';
import { T as Title, _ as __nuxt_component_2 } from './MathDocument-CBMPjWc4.mjs';
import { b as useRoute, c as usePdfBanner, d as useCaveatsBanner, s as siteMeta, u as usePageHead, a as _sfc_main$2 } from './server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch } from './fetch-c1PABlO6.mjs';
import { r as removeTrailingSlashIfPossible } from './utils-B9tdQQnS.mjs';
import 'bootstrap-vue-next/components/BSpinner';
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
import '@iconify/vue';
import 'bootstrap-vue-next/directives';
import 'bootstrap-vue-next/plugins/createBootstrap';
import './asyncData-BU6fKU2G.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: lesson, status, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/_api/latex/lecons/${route.params.slug}.json`, "$4sfGQK4qOM")), __temp = await __temp, __restore(), __temp);
    const path = removeTrailingSlashIfPossible(route.path);
    usePdfBanner(`/pdf${path}.pdf`);
    useCaveatsBanner(`https://github.com/${siteMeta.github.username}/${siteMeta.github.repository}/edit/main/content/latex${path}.tex`);
    usePageHead({ title: "Affichage d'une le\xE7on" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spinner = __nuxt_component_0;
      const _component_Title = Title;
      const _component_math_document = __nuxt_component_2;
      const _component_error_display = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(status) === "pending") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_spinner, null, null, _parent));
        _push(`</div>`);
      } else if (unref(lesson)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Le\xE7on ${ssrInterpolate(unref(lesson).slug)} : ${ssrInterpolate(unref(lesson)["page-title"])}`);
            } else {
              return [
                createTextVNode("Le\xE7on " + toDisplayString(unref(lesson).slug) + " : " + toDisplayString(unref(lesson)["page-title"]), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<main>`);
        _push(ssrRenderComponent(_component_math_document, {
          body: unref(lesson).body
        }, null, _parent));
        _push(`</main></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/lecons/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-D9sAfDfc.mjs.map
