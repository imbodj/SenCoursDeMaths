import { BRow, BCol } from 'bootstrap-vue-next/components/BContainer';
import { BButtonGroup, BButton } from 'bootstrap-vue-next/components/BButton';
import __nuxt_component_5 from './index-C9yR7Kjj.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, unref, createVNode, createBlock, openBlock, Fragment, renderList, createCommentVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';
import { BFormInput } from 'bootstrap-vue-next/components/BFormInput';
import { n as normalizeString } from './utils-B9tdQQnS.mjs';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Category",
  __ssrInlineRender: true,
  props: {
    category: {}
  },
  setup(__props) {
    const props = __props;
    const name = computed(() => {
      switch (props.category) {
        case void 0:
          return "Toutes les cat\xE9gories";
        case "algebra":
          return "Terminale";
        case "analysis":
          return "Premi\xE8re";
        default:
          return props.category;
      }
    });
    const iconId = computed(() => {
      switch (props.category) {
        case void 0:
          return "list";
        case "algebra":
          return "bezier";
        case "analysis":
          return "option";
        default:
          return "bezier2";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon = __nuxt_component_5;
      _push(`<span${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_icon, {
        name: `bi:${unref(iconId)}`
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(name))}</span>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Category.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Cards",
  __ssrInlineRender: true,
  props: {
    inputId: {},
    items: {},
    searchFields: {},
    sortFunction: { type: Function, default: (items) => items.sort() }
  },
  setup(__props) {
    const props = __props;
    const currentCategory = ref();
    const search = ref("");
    const categories = computed(() => {
      let result = [];
      for (const item of props.items) {
        if (item.categories) {
          result = result.concat(item.categories);
        }
      }
      result = Array.from(new Set(result)).sort();
      result.unshift(void 0);
      return result;
    });
    const itemsToDisplay = computed(() => props.sortFunction(props.items.filter(filter)));
    const filter = (item) => {
      var _a;
      let result = true;
      if (currentCategory.value) {
        result = result && item.categories.includes(currentCategory.value);
      }
      if (search.value.length > 0) {
        const normalizedSearch = normalizeString(search.value);
        let searchResult = false;
        for (const searchField of (_a = props.searchFields) != null ? _a : []) {
          const value = item[searchField];
          if (value) {
            searchResult = searchResult || normalizeString(value.toString()).includes(normalizedSearch);
          }
        }
        result = result && searchResult;
      }
      return result;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_row = BRow;
      const _component_b_col = BCol;
      const _component_b_button_group = BButtonGroup;
      const _component_b_button = BButton;
      const _component_category = _sfc_main$1;
      const _component_b_form_input = BFormInput;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cards" }, _attrs))} data-v-b982b448>`);
      _push(ssrRenderComponent(_component_b_row, { class: "header" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_b_col, {
              cols: "12",
              lg: _ctx.searchFields ? "9" : void 0
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(categories).length > 1) {
                    _push3(ssrRenderComponent(_component_b_button_group, { class: "categories mb-3 mb-lg-0" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(categories), (category) => {
                            _push4(ssrRenderComponent(_component_b_button, {
                              key: category,
                              variant: "link",
                              class: ["category-button", { active: unref(currentCategory) === category }],
                              onClick: ($event) => currentCategory.value = category
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_category, {
                                    class: "category",
                                    category
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_category, {
                                      class: "category",
                                      category
                                    }, null, 8, ["category"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                              return openBlock(), createBlock(_component_b_button, {
                                key: category,
                                variant: "link",
                                class: ["category-button", { active: unref(currentCategory) === category }],
                                onClick: ($event) => currentCategory.value = category
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_category, {
                                    class: "category",
                                    category
                                  }, null, 8, ["category"])
                                ]),
                                _: 2
                              }, 1032, ["class", "onClick"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(categories).length > 1 ? (openBlock(), createBlock(_component_b_button_group, {
                      key: 0,
                      class: "categories mb-3 mb-lg-0"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                          return openBlock(), createBlock(_component_b_button, {
                            key: category,
                            variant: "link",
                            class: ["category-button", { active: unref(currentCategory) === category }],
                            onClick: ($event) => currentCategory.value = category
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_category, {
                                class: "category",
                                category
                              }, null, 8, ["category"])
                            ]),
                            _: 2
                          }, 1032, ["class", "onClick"]);
                        }), 128))
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.searchFields) {
              _push2(ssrRenderComponent(_component_b_col, {
                cols: "12",
                lg: "3",
                class: "d-flex align-items-center"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_b_form_input, {
                      id: _ctx.inputId,
                      modelValue: unref(search),
                      "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                      placeholder: "Chercher dans la liste",
                      class: "form-control-sm"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_b_form_input, {
                        id: _ctx.inputId,
                        modelValue: unref(search),
                        "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                        placeholder: "Chercher dans la liste",
                        class: "form-control-sm"
                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode(_component_b_col, {
                cols: "12",
                lg: _ctx.searchFields ? "9" : void 0
              }, {
                default: withCtx(() => [
                  unref(categories).length > 1 ? (openBlock(), createBlock(_component_b_button_group, {
                    key: 0,
                    class: "categories mb-3 mb-lg-0"
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(categories), (category) => {
                        return openBlock(), createBlock(_component_b_button, {
                          key: category,
                          variant: "link",
                          class: ["category-button", { active: unref(currentCategory) === category }],
                          onClick: ($event) => currentCategory.value = category
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_category, {
                              class: "category",
                              category
                            }, null, 8, ["category"])
                          ]),
                          _: 2
                        }, 1032, ["class", "onClick"]);
                      }), 128))
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["lg"]),
              _ctx.searchFields ? (openBlock(), createBlock(_component_b_col, {
                key: 0,
                cols: "12",
                lg: "3",
                class: "d-flex align-items-center"
              }, {
                default: withCtx(() => [
                  createVNode(_component_b_form_input, {
                    id: _ctx.inputId,
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : null,
                    placeholder: "Chercher dans la liste",
                    class: "form-control-sm"
                  }, null, 8, ["id", "modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(itemsToDisplay), (item, position) => {
        _push(`<div class="mt-4 item-card p-3" data-v-b982b448>`);
        ssrRenderSlot(_ctx.$slots, "default", { item }, null, _push, _parent);
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      if (unref(itemsToDisplay).length === 0) {
        _push(`<em class="d-block mt-5 text-muted text-center" data-v-b982b448> Aucun contenu \xE0 afficher. </em>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards/Cards.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b982b448"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Cards-CEvwt4yD.mjs.map
