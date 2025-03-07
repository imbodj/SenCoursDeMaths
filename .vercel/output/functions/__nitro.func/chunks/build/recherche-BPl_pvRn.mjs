import { _ as __nuxt_component_0 } from './Spinner-CfHoVbAG.mjs';
import { _ as __nuxt_component_3 } from './client-only-BTi8mZAI.mjs';
import { _ as __nuxt_component_2 } from './Cards-CEvwt4yD.mjs';
import { b as useRoute, u as usePageHead, a as _sfc_main$2$1 } from './server.mjs';
import { defineComponent, computed, withAsyncContext, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './LessonCard-BAeNLVQz.mjs';
import { _ as _sfc_main$2 } from './DevelopmentCard-C6CuXv1N.mjs';
import { _ as _sfc_main$3 } from './SheetCard-BYMROyWp.mjs';
import { n as normalizeString } from './utils-B9tdQQnS.mjs';
import { u as useFetch } from './fetch-c1PABlO6.mjs';
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
  __name: "recherche",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const request = (_a = route.query.requete) == null ? void 0 : _a.toString();
    const regexPattern = computed(() => request ? normalizeString(request) : ".*");
    const { status: lessonsQueryStatus, data: allLessons } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/_api/latex/lecons/index.json`, "$pgXyRN3ryA")), __temp = await __temp, __restore(), __temp);
    const { status: developmentsQueryStatus, data: allDevelopments } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/_api/latex/developpements/index.json`, "$jiSZtd4AdF")), __temp = await __temp, __restore(), __temp);
    const { status: sheetsQueryStatus, data: allSheets } = ([__temp, __restore] = withAsyncContext(() => useFetch(`/_api/latex/fiches/index.json`, "$l8XJ0jLjUE")), __temp = await __temp, __restore(), __temp);
    const doSearch = (list) => {
      const result = [];
      if (!list.value) {
        return result;
      }
      for (const value of list.value) {
        const regex = RegExp(regexPattern.value, "ig");
        const latexObject = value;
        if (regex.test(latexObject["page-name-search"])) {
          result.push(latexObject);
        }
      }
      return result;
    };
    const lessons = computed(() => doSearch(allLessons));
    const developments = computed(() => doSearch(allDevelopments));
    const sheets = computed(() => doSearch(allSheets));
    const isEmpty = computed(() => lessons.value.length === 0 && developments.value.length === 0 && sheets.value.length === 0);
    usePageHead({ title: "Recherche" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spinner = __nuxt_component_0;
      const _component_client_only = __nuxt_component_3;
      const _component_cards = __nuxt_component_2;
      const _component_error_display = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(lessonsQueryStatus) === "pending" || unref(developmentsQueryStatus) === "pending" || unref(sheetsQueryStatus) === "pending") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_spinner, null, null, _parent));
        _push(`</div>`);
      } else if (unref(lessons) && unref(developments) && unref(sheets)) {
        _push(`<div><h2>Recherche</h2>`);
        if (unref(isEmpty)) {
          _push(`<p> Votre recherche n&#39;a donn\xE9 aucun r\xE9sultat. </p>`);
        } else {
          _push(`<p class="mb-0">`);
          _push(ssrRenderComponent(_component_client_only, { fallback: "Voici les r\xE9sultats pour votre recherche." }, {}, _parent));
          _push(`</p>`);
        }
        if (unref(lessons) && !unref(isEmpty)) {
          _push(`<div class="mt-4"><h3>Le\xE7ons</h3>`);
          if (unref(lessons).length === 0) {
            _push(`<p class="mb-0"> Aucun plan de le\xE7on trouv\xE9 pour cette recherche. </p>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(lessons).length > 0) {
            _push(ssrRenderComponent(_component_cards, {
              "input-id": "lesson-search-field",
              items: unref(lessons)
            }, {
              default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_sfc_main$1, {
                    lesson: slotProps.item
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_sfc_main$1, {
                      lesson: slotProps.item
                    }, null, 8, ["lesson"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(developments) && !unref(isEmpty)) {
          _push(`<div class="mt-4"><h3>D\xE9veloppements</h3>`);
          if (unref(developments).length === 0) {
            _push(`<p class="mb-0"> Aucun d\xE9veloppement trouv\xE9 pour cette recherche. </p>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(developments).length > 0) {
            _push(ssrRenderComponent(_component_cards, {
              "input-id": "development-search-field",
              items: unref(developments)
            }, {
              default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_sfc_main$2, {
                    development: slotProps.item
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_sfc_main$2, {
                      development: slotProps.item
                    }, null, 8, ["development"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(sheets) && !unref(isEmpty)) {
          _push(`<div class="mt-4"><h3>Fiches</h3>`);
          if (unref(sheets).length === 0) {
            _push(`<p class="mb-0"> Aucune fiche trouv\xE9e pour cette recherche. </p>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(sheets).length > 0) {
            _push(ssrRenderComponent(_component_cards, {
              "input-id": "sheet-search-field",
              items: unref(sheets)
            }, {
              default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_sfc_main$3, {
                    sheet: slotProps.item
                  }, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      sheet: slotProps.item
                    }, null, 8, ["sheet"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_error_display, { error: "500" }, null, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/recherche.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=recherche-BPl_pvRn.mjs.map
