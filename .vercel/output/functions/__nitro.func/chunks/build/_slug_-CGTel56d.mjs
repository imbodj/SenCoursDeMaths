import { _ as __nuxt_component_0 } from './Spinner-CfHoVbAG.mjs';
import { T as Title, _ as __nuxt_component_2 } from './MathDocument-CBMPjWc4.mjs';
import { b as useRoute, c as usePdfBanner, d as useCaveatsBanner, s as siteMeta, u as usePageHead, a as _sfc_main$2, i as injectHead, e as useRequestEvent, f as useRuntimeConfig, g as useHead } from './server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, getCurrentInstance, computed, toValue, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useFetch } from './fetch-c1PABlO6.mjs';
import { r as removeTrailingSlashIfPossible } from './utils-B9tdQQnS.mjs';
import { A as setHeader } from '../nitro/nitro.mjs';
import 'bootstrap-vue-next/components/BSpinner';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue';
import 'bootstrap-vue-next/directives';
import 'bootstrap-vue-next/plugins/createBootstrap';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
import '@iconify/utils';
import './asyncData-BU6fKU2G.mjs';

function useRobotsRule(rule) {
  const head = injectHead();
  getCurrentInstance();
  const config = useRuntimeConfig();
  const event = useRequestEvent();
  function setRobotsRule(rule2) {
    let _rule = toValue(rule2);
    if (!event || typeof _rule === "undefined")
      return;
    if (typeof _rule === "boolean" || !_rule) {
      _rule = _rule ? config["nuxt-robots"].robotsEnabledValue : config["nuxt-robots"].robotsDisabledValue;
    }
    event.context.robots.rule = _rule;
    if (config["nuxt-robots"].header) {
      setHeader(event, "X-Robots-Tag", _rule);
    }
    useHead({
      meta: [
        {
          "name": "robots",
          "content": _rule,
          "data-hint": void 0
        }
      ]
    }, {
      head
    });
  }
  setRobotsRule(rule);
  return computed({
    set(val) {
      setRobotsRule(val);
    },
    get() {
      var _a, _b;
      return (_b = (_a = event == null ? void 0 : event.context) == null ? void 0 : _a.robots) == null ? void 0 : _b.rule;
    }
  });
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: ranking, status, error } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/_api/latex/historique/${route.params.slug}.json`, "$KVgMQloiuA")), __temp = await __temp, __restore(), __temp);
    const path = removeTrailingSlashIfPossible(route.path);
    usePdfBanner(`/pdf${path}.pdf`);
    useCaveatsBanner(`https://github.com/${siteMeta.github.username}/${siteMeta.github.repository}/edit/main/content/latex${path}.tex`);
    usePageHead({ title: "Affichage d'un classement" });
    const rule = useRobotsRule();
    rule.value = "noindex, nofollow";
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
      } else if (unref(ranking)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Title, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(ranking)["page-title"])}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(ranking)["page-title"]), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<main>`);
        _push(ssrRenderComponent(_component_math_document, {
          body: unref(ranking).body
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/historique/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-CGTel56d.mjs.map
