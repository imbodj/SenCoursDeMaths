import { defineComponent, withCtx, renderSlot, h, mergeProps, createVNode, ref, resolveDirective, createTextVNode, unref, isRef, computed, withAsyncContext, useSSRContext } from 'vue';
import { j as useBanners, _ as _export_sfc, h as useNuxtApp, b as useRoute, s as siteMeta } from './server.mjs';
import { BContainer, BRow, BCol } from 'bootstrap-vue-next/components/BContainer';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrGetDirectiveProps, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { BNavbar, BNavbarToggle, BNavbarNav } from 'bootstrap-vue-next/components/BNavbar';
import { BCollapse } from 'bootstrap-vue-next/components/BCollapse';
import { BNavItem, BNavForm } from 'bootstrap-vue-next/components/BNav';
import __nuxt_component_5$1 from './index-C9yR7Kjj.mjs';
import { BInputGroup } from 'bootstrap-vue-next/components/BInputGroup';
import { BFormInput } from 'bootstrap-vue-next/components/BFormInput';
import { BButton } from 'bootstrap-vue-next/components/BButton';
import { _ as __nuxt_component_3 } from './client-only-BTi8mZAI.mjs';
import { u as useFetch } from './fetch-c1PABlO6.mjs';
import { p as publicAssetsURL } from '../nitro/nitro.mjs';
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
import '@iconify/utils/lib/css/icon';
import './asyncData-BU6fKU2G.mjs';

function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200, hideDelay = 500, resetDelay = 400 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  const error = ref(false);
  const start = () => {
    error.value = false;
    set(0);
  };
  function set(at = 0) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish();
    }
    progress.value = at < 0 ? 0 : at;
    {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.error) {
      error.value = true;
    }
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    start,
    set,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator = nuxtApp._loadingIndicator || createLoadingIndicator(opts);
  return indicator;
}
const __nuxt_component_0 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    errorColor: {
      type: String,
      default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, error, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      error,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: error.value ? props.errorColor : props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_b_container = BContainer;
  _push(`<header${ssrRenderAttrs(mergeProps({ id: "page-header" }, _attrs))} data-v-63fc53cd>`);
  _push(ssrRenderComponent(_component_b_container, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h1 data-v-63fc53cd${_scopeId}>Sen Cours De Maths</h1><hr data-v-63fc53cd${_scopeId}><p class="mb-0" data-v-63fc53cd${_scopeId}> Plans, fiches et exercices pour les math\xE9matiques au lyc\xE9e. </p>`);
      } else {
        return [
          createVNode("h1", null, "Sen Cours De Maths"),
          createVNode("hr"),
          createVNode("p", { class: "mb-0" }, " Plans, fiches et exercices pour les math\xE9matiques au lyc\xE9e. ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</header>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/PageHeader.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-63fc53cd"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PageNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const formRef = ref();
    const doSearch = () => {
      const form = formRef.value.$el.querySelector("form");
      if (form) {
        form.submit();
      }
    };
    const route = useRoute();
    const searchValue = ref((_a = route.query.requete) == null ? void 0 : _a.toString());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_navbar = BNavbar;
      const _component_b_navbar_toggle = BNavbarToggle;
      const _component_b_collapse = BCollapse;
      const _component_b_navbar_nav = BNavbarNav;
      const _component_b_nav_item = BNavItem;
      const _component_icon = __nuxt_component_5$1;
      const _component_b_nav_form = BNavForm;
      const _component_b_input_group = BInputGroup;
      const _component_b_form_input = BFormInput;
      const _component_b_button = BButton;
      const _directive_b_color_mode = resolveDirective("b-color-mode");
      _push(ssrRenderComponent(_component_b_navbar, mergeProps({
        "data-bs-theme": "dark",
        variant: "dark",
        toggleable: "lg"
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_b_color_mode, "dark")), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_b_navbar_toggle, { target: "page-navbar-collapse" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_b_collapse, {
              id: "page-navbar-collapse",
              "is-nav": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_b_navbar_nav, { class: "me-auto" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_b_nav_item, {
                          to: "/",
                          active: _ctx.$route.path === "/"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_icon, { name: "bi:house-door-fill" }, null, _parent5, _scopeId4));
                              _push5(` Accueil `);
                            } else {
                              return [
                                createVNode(_component_icon, { name: "bi:house-door-fill" }),
                                createTextVNode(" Accueil ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_b_nav_item, {
                          to: "/lecons/",
                          active: _ctx.$route.path.startsWith("/lecons")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_icon, { name: "bi:file-text-fill" }, null, _parent5, _scopeId4));
                              _push5(` Le\xE7ons `);
                            } else {
                              return [
                                createVNode(_component_icon, { name: "bi:file-text-fill" }),
                                createTextVNode(" Le\xE7ons ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_b_nav_item, {
                          to: "/developpements/",
                          active: _ctx.$route.path.startsWith("/developpements")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_icon, { name: "bi:pencil-fill" }, null, _parent5, _scopeId4));
                              _push5(` D\xE9veloppements `);
                            } else {
                              return [
                                createVNode(_component_icon, { name: "bi:pencil-fill" }),
                                createTextVNode(" D\xE9veloppements ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_b_nav_item, {
                          to: "/fiches/",
                          active: _ctx.$route.path.startsWith("/fiches")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_icon, { name: "bi:backpack-fill" }, null, _parent5, _scopeId4));
                              _push5(` Fiches `);
                            } else {
                              return [
                                createVNode(_component_icon, { name: "bi:backpack-fill" }),
                                createTextVNode(" Fiches ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_b_nav_item, {
                          to: "/bibliographie/",
                          active: _ctx.$route.path.startsWith("/bibliographie")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_icon, { name: "bi:book-fill" }, null, _parent5, _scopeId4));
                              _push5(` Bibliographie `);
                            } else {
                              return [
                                createVNode(_component_icon, { name: "bi:book-fill" }),
                                createTextVNode(" Bibliographie ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_b_nav_item, {
                          class: "d-none",
                          to: "/recherche/",
                          active: _ctx.$route.path.startsWith("/recherche")
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_icon, { name: "bi:search" }, null, _parent5, _scopeId4));
                              _push5(` Recherche `);
                            } else {
                              return [
                                createVNode(_component_icon, { name: "bi:search" }),
                                createTextVNode(" Recherche ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_b_nav_item, {
                            to: "/",
                            active: _ctx.$route.path === "/"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_icon, { name: "bi:house-door-fill" }),
                              createTextVNode(" Accueil ")
                            ]),
                            _: 1
                          }, 8, ["active"]),
                          createVNode(_component_b_nav_item, {
                            to: "/lecons/",
                            active: _ctx.$route.path.startsWith("/lecons")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_icon, { name: "bi:file-text-fill" }),
                              createTextVNode(" Le\xE7ons ")
                            ]),
                            _: 1
                          }, 8, ["active"]),
                          createVNode(_component_b_nav_item, {
                            to: "/developpements/",
                            active: _ctx.$route.path.startsWith("/developpements")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_icon, { name: "bi:pencil-fill" }),
                              createTextVNode(" D\xE9veloppements ")
                            ]),
                            _: 1
                          }, 8, ["active"]),
                          createVNode(_component_b_nav_item, {
                            to: "/fiches/",
                            active: _ctx.$route.path.startsWith("/fiches")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_icon, { name: "bi:backpack-fill" }),
                              createTextVNode(" Fiches ")
                            ]),
                            _: 1
                          }, 8, ["active"]),
                          createVNode(_component_b_nav_item, {
                            to: "/bibliographie/",
                            active: _ctx.$route.path.startsWith("/bibliographie")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_icon, { name: "bi:book-fill" }),
                              createTextVNode(" Bibliographie ")
                            ]),
                            _: 1
                          }, 8, ["active"]),
                          createVNode(_component_b_nav_item, {
                            class: "d-none",
                            to: "/recherche/",
                            active: _ctx.$route.path.startsWith("/recherche")
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_icon, { name: "bi:search" }),
                              createTextVNode(" Recherche ")
                            ]),
                            _: 1
                          }, 8, ["active"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_b_navbar_nav, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_b_nav_form, {
                          ref_key: "formRef",
                          ref: formRef,
                          action: "/recherche/",
                          method: "get",
                          class: "mt-2 mt-lg-0 w-100"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_b_input_group, {
                                size: "sm",
                                "data-bs-theme": "light"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_b_form_input, {
                                      id: "page-search-input",
                                      modelValue: unref(searchValue),
                                      "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                      placeholder: "Rechercher",
                                      name: "requete"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_b_button, {
                                      type: "submit",
                                      variant: "secondary",
                                      onClick: doSearch
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_icon, { name: "bi:search" }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_icon, { name: "bi:search" })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_b_form_input, {
                                        id: "page-search-input",
                                        modelValue: unref(searchValue),
                                        "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                        placeholder: "Rechercher",
                                        name: "requete"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(_component_b_button, {
                                        type: "submit",
                                        variant: "secondary",
                                        onClick: doSearch
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_icon, { name: "bi:search" })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_b_input_group, {
                                  size: "sm",
                                  "data-bs-theme": "light"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_b_form_input, {
                                      id: "page-search-input",
                                      modelValue: unref(searchValue),
                                      "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                      placeholder: "Rechercher",
                                      name: "requete"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(_component_b_button, {
                                      type: "submit",
                                      variant: "secondary",
                                      onClick: doSearch
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_icon, { name: "bi:search" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_b_nav_form, {
                            ref_key: "formRef",
                            ref: formRef,
                            action: "/recherche/",
                            method: "get",
                            class: "mt-2 mt-lg-0 w-100"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_b_input_group, {
                                size: "sm",
                                "data-bs-theme": "light"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_b_form_input, {
                                    id: "page-search-input",
                                    modelValue: unref(searchValue),
                                    "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                    placeholder: "Rechercher",
                                    name: "requete"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(_component_b_button, {
                                    type: "submit",
                                    variant: "secondary",
                                    onClick: doSearch
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_icon, { name: "bi:search" })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 512)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_b_navbar_nav, { class: "me-auto" }, {
                      default: withCtx(() => [
                        createVNode(_component_b_nav_item, {
                          to: "/",
                          active: _ctx.$route.path === "/"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_icon, { name: "bi:house-door-fill" }),
                            createTextVNode(" Accueil ")
                          ]),
                          _: 1
                        }, 8, ["active"]),
                        createVNode(_component_b_nav_item, {
                          to: "/lecons/",
                          active: _ctx.$route.path.startsWith("/lecons")
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_icon, { name: "bi:file-text-fill" }),
                            createTextVNode(" Le\xE7ons ")
                          ]),
                          _: 1
                        }, 8, ["active"]),
                        createVNode(_component_b_nav_item, {
                          to: "/developpements/",
                          active: _ctx.$route.path.startsWith("/developpements")
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_icon, { name: "bi:pencil-fill" }),
                            createTextVNode(" D\xE9veloppements ")
                          ]),
                          _: 1
                        }, 8, ["active"]),
                        createVNode(_component_b_nav_item, {
                          to: "/fiches/",
                          active: _ctx.$route.path.startsWith("/fiches")
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_icon, { name: "bi:backpack-fill" }),
                            createTextVNode(" Fiches ")
                          ]),
                          _: 1
                        }, 8, ["active"]),
                        createVNode(_component_b_nav_item, {
                          to: "/bibliographie/",
                          active: _ctx.$route.path.startsWith("/bibliographie")
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_icon, { name: "bi:book-fill" }),
                            createTextVNode(" Bibliographie ")
                          ]),
                          _: 1
                        }, 8, ["active"]),
                        createVNode(_component_b_nav_item, {
                          class: "d-none",
                          to: "/recherche/",
                          active: _ctx.$route.path.startsWith("/recherche")
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_icon, { name: "bi:search" }),
                            createTextVNode(" Recherche ")
                          ]),
                          _: 1
                        }, 8, ["active"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_navbar_nav, null, {
                      default: withCtx(() => [
                        createVNode(_component_b_nav_form, {
                          ref_key: "formRef",
                          ref: formRef,
                          action: "/recherche/",
                          method: "get",
                          class: "mt-2 mt-lg-0 w-100"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_b_input_group, {
                              size: "sm",
                              "data-bs-theme": "light"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_b_form_input, {
                                  id: "page-search-input",
                                  modelValue: unref(searchValue),
                                  "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                  placeholder: "Rechercher",
                                  name: "requete"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_b_button, {
                                  type: "submit",
                                  variant: "secondary",
                                  onClick: doSearch
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_icon, { name: "bi:search" })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 512)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_b_navbar_toggle, { target: "page-navbar-collapse" }),
              createVNode(_component_b_collapse, {
                id: "page-navbar-collapse",
                "is-nav": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_b_navbar_nav, { class: "me-auto" }, {
                    default: withCtx(() => [
                      createVNode(_component_b_nav_item, {
                        to: "/",
                        active: _ctx.$route.path === "/"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_icon, { name: "bi:house-door-fill" }),
                          createTextVNode(" Accueil ")
                        ]),
                        _: 1
                      }, 8, ["active"]),
                      createVNode(_component_b_nav_item, {
                        to: "/lecons/",
                        active: _ctx.$route.path.startsWith("/lecons")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_icon, { name: "bi:file-text-fill" }),
                          createTextVNode(" Le\xE7ons ")
                        ]),
                        _: 1
                      }, 8, ["active"]),
                      createVNode(_component_b_nav_item, {
                        to: "/developpements/",
                        active: _ctx.$route.path.startsWith("/developpements")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_icon, { name: "bi:pencil-fill" }),
                          createTextVNode(" D\xE9veloppements ")
                        ]),
                        _: 1
                      }, 8, ["active"]),
                      createVNode(_component_b_nav_item, {
                        to: "/fiches/",
                        active: _ctx.$route.path.startsWith("/fiches")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_icon, { name: "bi:backpack-fill" }),
                          createTextVNode(" Fiches ")
                        ]),
                        _: 1
                      }, 8, ["active"]),
                      createVNode(_component_b_nav_item, {
                        to: "/bibliographie/",
                        active: _ctx.$route.path.startsWith("/bibliographie")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_icon, { name: "bi:book-fill" }),
                          createTextVNode(" Bibliographie ")
                        ]),
                        _: 1
                      }, 8, ["active"]),
                      createVNode(_component_b_nav_item, {
                        class: "d-none",
                        to: "/recherche/",
                        active: _ctx.$route.path.startsWith("/recherche")
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_icon, { name: "bi:search" }),
                          createTextVNode(" Recherche ")
                        ]),
                        _: 1
                      }, 8, ["active"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_navbar_nav, null, {
                    default: withCtx(() => [
                      createVNode(_component_b_nav_form, {
                        ref_key: "formRef",
                        ref: formRef,
                        action: "/recherche/",
                        method: "get",
                        class: "mt-2 mt-lg-0 w-100"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_input_group, {
                            size: "sm",
                            "data-bs-theme": "light"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_b_form_input, {
                                id: "page-search-input",
                                modelValue: unref(searchValue),
                                "onUpdate:modelValue": ($event) => isRef(searchValue) ? searchValue.value = $event : null,
                                placeholder: "Rechercher",
                                name: "requete"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_b_button, {
                                type: "submit",
                                variant: "secondary",
                                onClick: doSearch
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_icon, { name: "bi:search" })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 512)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/PageNavbar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-566a8dbf"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_b_container = BContainer;
  _push(ssrRenderComponent(_component_b_container, mergeProps({ class: "pt-5 pb-5" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/PageContent.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CurrentCommitSha",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: commitSha } = ([__temp, __restore] = withAsyncContext(() => useFetch("/_api/latest-commit/", "$gOX1Ve7bY4")), __temp = await __temp, __restore(), __temp);
    const githubRepo = `https://github.com/${siteMeta.github.username}/${siteMeta.github.repository}`;
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(commitSha)) {
        _push(`<span${ssrRenderAttrs(_attrs)}> R\xE9vision <a${ssrRenderAttr("href", `${githubRepo}/commit/${unref(commitSha).long}`)}>#${ssrInterpolate(unref(commitSha).short)}</a>. </span>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CurrentCommitSha.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/technologies/latex.svg");
const _imports_1 = publicAssetsURL("/images/technologies/thatlatexlib.svg");
const _imports_2 = publicAssetsURL("/images/technologies/vue.svg");
const _imports_3 = publicAssetsURL("/images/technologies/nuxt.svg");
const _imports_4 = publicAssetsURL("/images/technologies/github.svg");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PageFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_container = BContainer;
      const _component_b_row = BRow;
      const _component_b_col = BCol;
      const _component_current_commit_sha = _sfc_main$2;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        id: "page-footer",
        class: "bg-dark"
      }, _attrs))} data-v-044e6f4b>`);
      _push(ssrRenderComponent(_component_b_container, { class: "pt-4 pb-4" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_b_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_b_col, {
                    cols: "12",
                    md: "6",
                    class: "mb-4 mb-md-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 data-v-044e6f4b${_scopeId3}>Copyright</h2><p data-v-044e6f4b${_scopeId3}> Copyright \xA9 2025 - <a href="https://imbodj.github.io/SenCoursDeMaths" data-v-044e6f4b${_scopeId3}>Hugo Delaunay</a>. Tous droits r\xE9serv\xE9s. `);
                        _push4(ssrRenderComponent(_component_current_commit_sha, null, null, _parent4, _scopeId3));
                        _push4(`</p><p class="mb-0" data-v-044e6f4b${_scopeId3}> Les contenus de ce site sont disponibles sous licence <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr" data-v-044e6f4b${_scopeId3}>CC BY-NC-SA 4.0</a>. Le site en lui-m\xEAme est totalement <a${ssrRenderAttr("href", `https://github.com/${unref(siteMeta).github.username}/${unref(siteMeta).github.repository}/blob/main/LICENSE`)} data-v-044e6f4b${_scopeId3}>open-source</a>, vous pouvez aller voir \xE7a sur <a${ssrRenderAttr("href", `https://github.com/${unref(siteMeta).github.username}/${unref(siteMeta).github.repository}`)} data-v-044e6f4b${_scopeId3}>Github</a>. </p><ul class="logos" data-v-044e6f4b${_scopeId3}><li data-v-044e6f4b${_scopeId3}><a href="https://www.latex-project.org/" data-v-044e6f4b${_scopeId3}><img${ssrRenderAttr("src", _imports_0)} alt="LaTeX" title="LaTeX" data-v-044e6f4b${_scopeId3}></a></li><li data-v-044e6f4b${_scopeId3}><a href="https://github.com/Skyost/ThatLatexLib" data-v-044e6f4b${_scopeId3}><img${ssrRenderAttr("src", _imports_1)} alt="ThatLatexLib" title="ThatLatexLib" data-v-044e6f4b${_scopeId3}></a></li><li data-v-044e6f4b${_scopeId3}><a href="https://vuejs.org/" data-v-044e6f4b${_scopeId3}><img${ssrRenderAttr("src", _imports_2)} alt="Vue" title="Vue" data-v-044e6f4b${_scopeId3}></a></li><li data-v-044e6f4b${_scopeId3}><a href="https://nuxtjs.org/" data-v-044e6f4b${_scopeId3}><img${ssrRenderAttr("src", _imports_3)} alt="Nuxt" title="Nuxt" data-v-044e6f4b${_scopeId3}></a></li><li data-v-044e6f4b${_scopeId3}><a href="https://github.com" data-v-044e6f4b${_scopeId3}><img${ssrRenderAttr("src", _imports_4)} alt="Github" title="Github" data-v-044e6f4b${_scopeId3}></a></li></ul>`);
                      } else {
                        return [
                          createVNode("h2", null, "Copyright"),
                          createVNode("p", null, [
                            createTextVNode(" Copyright \xA9 2025 - "),
                            createVNode("a", { href: "https://imbodj.github.io/SenCoursDeMaths" }, "Hugo Delaunay"),
                            createTextVNode(". Tous droits r\xE9serv\xE9s. "),
                            createVNode(_component_current_commit_sha)
                          ]),
                          createVNode("p", { class: "mb-0" }, [
                            createTextVNode(" Les contenus de ce site sont disponibles sous licence "),
                            createVNode("a", { href: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr" }, "CC BY-NC-SA 4.0"),
                            createTextVNode(". Le site en lui-m\xEAme est totalement "),
                            createVNode("a", {
                              href: `https://github.com/${unref(siteMeta).github.username}/${unref(siteMeta).github.repository}/blob/main/LICENSE`
                            }, "open-source", 8, ["href"]),
                            createTextVNode(", vous pouvez aller voir \xE7a sur "),
                            createVNode("a", {
                              href: `https://github.com/${unref(siteMeta).github.username}/${unref(siteMeta).github.repository}`
                            }, "Github", 8, ["href"]),
                            createTextVNode(". ")
                          ]),
                          createVNode("ul", { class: "logos" }, [
                            createVNode("li", null, [
                              createVNode("a", { href: "https://www.latex-project.org/" }, [
                                createVNode("img", {
                                  src: _imports_0,
                                  alt: "LaTeX",
                                  title: "LaTeX"
                                })
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("a", { href: "https://github.com/Skyost/ThatLatexLib" }, [
                                createVNode("img", {
                                  src: _imports_1,
                                  alt: "ThatLatexLib",
                                  title: "ThatLatexLib"
                                })
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("a", { href: "https://vuejs.org/" }, [
                                createVNode("img", {
                                  src: _imports_2,
                                  alt: "Vue",
                                  title: "Vue"
                                })
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("a", { href: "https://nuxtjs.org/" }, [
                                createVNode("img", {
                                  src: _imports_3,
                                  alt: "Nuxt",
                                  title: "Nuxt"
                                })
                              ])
                            ]),
                            createVNode("li", null, [
                              createVNode("a", { href: "https://github.com" }, [
                                createVNode("img", {
                                  src: _imports_4,
                                  alt: "Github",
                                  title: "Github"
                                })
                              ])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_b_col, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h2 data-v-044e6f4b${_scopeId3}>PDFs</h2><p data-v-044e6f4b${_scopeId3}> Les contenus du site ont \xE9t\xE9 \xE9crits en <a href="https://fr.wikipedia.org/wiki/LaTeX" data-v-044e6f4b${_scopeId3}>LaTeX</a>, et sont par cons\xE9quent t\xE9l\xE9chargeables au format PDF. </p><ul class="mb-0" data-v-044e6f4b${_scopeId3}><li data-v-044e6f4b${_scopeId3}><a href="/pdf/lecons.pdf" data-v-044e6f4b${_scopeId3}>Plans de le\xE7ons</a></li><li data-v-044e6f4b${_scopeId3}><a href="/pdf/developpements.pdf" data-v-044e6f4b${_scopeId3}>D\xE9veloppements</a></li><li data-v-044e6f4b${_scopeId3}><a href="/pdf/lecons-developpements.pdf" data-v-044e6f4b${_scopeId3}>Plans de le\xE7ons &amp; d\xE9veloppements</a></li></ul>`);
                      } else {
                        return [
                          createVNode("h2", null, "PDFs"),
                          createVNode("p", null, [
                            createTextVNode(" Les contenus du site ont \xE9t\xE9 \xE9crits en "),
                            createVNode("a", { href: "https://fr.wikipedia.org/wiki/LaTeX" }, "LaTeX"),
                            createTextVNode(", et sont par cons\xE9quent t\xE9l\xE9chargeables au format PDF. ")
                          ]),
                          createVNode("ul", { class: "mb-0" }, [
                            createVNode("li", null, [
                              createVNode("a", { href: "/pdf/lecons.pdf" }, "Plans de le\xE7ons")
                            ]),
                            createVNode("li", null, [
                              createVNode("a", { href: "/pdf/developpements.pdf" }, "D\xE9veloppements")
                            ]),
                            createVNode("li", null, [
                              createVNode("a", { href: "/pdf/lecons-developpements.pdf" }, "Plans de le\xE7ons & d\xE9veloppements")
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_b_col, {
                      cols: "12",
                      md: "6",
                      class: "mb-4 mb-md-0"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", null, "Copyright"),
                        createVNode("p", null, [
                          createTextVNode(" Copyright \xA9 2025 - "),
                          createVNode("a", { href: "https://imbodj.github.io/SenCoursDeMaths" }, "Hugo Delaunay"),
                          createTextVNode(". Tous droits r\xE9serv\xE9s. "),
                          createVNode(_component_current_commit_sha)
                        ]),
                        createVNode("p", { class: "mb-0" }, [
                          createTextVNode(" Les contenus de ce site sont disponibles sous licence "),
                          createVNode("a", { href: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr" }, "CC BY-NC-SA 4.0"),
                          createTextVNode(". Le site en lui-m\xEAme est totalement "),
                          createVNode("a", {
                            href: `https://github.com/${unref(siteMeta).github.username}/${unref(siteMeta).github.repository}/blob/main/LICENSE`
                          }, "open-source", 8, ["href"]),
                          createTextVNode(", vous pouvez aller voir \xE7a sur "),
                          createVNode("a", {
                            href: `https://github.com/${unref(siteMeta).github.username}/${unref(siteMeta).github.repository}`
                          }, "Github", 8, ["href"]),
                          createTextVNode(". ")
                        ]),
                        createVNode("ul", { class: "logos" }, [
                          createVNode("li", null, [
                            createVNode("a", { href: "https://www.latex-project.org/" }, [
                              createVNode("img", {
                                src: _imports_0,
                                alt: "LaTeX",
                                title: "LaTeX"
                              })
                            ])
                          ]),
                          createVNode("li", null, [
                            createVNode("a", { href: "https://github.com/Skyost/ThatLatexLib" }, [
                              createVNode("img", {
                                src: _imports_1,
                                alt: "ThatLatexLib",
                                title: "ThatLatexLib"
                              })
                            ])
                          ]),
                          createVNode("li", null, [
                            createVNode("a", { href: "https://vuejs.org/" }, [
                              createVNode("img", {
                                src: _imports_2,
                                alt: "Vue",
                                title: "Vue"
                              })
                            ])
                          ]),
                          createVNode("li", null, [
                            createVNode("a", { href: "https://nuxtjs.org/" }, [
                              createVNode("img", {
                                src: _imports_3,
                                alt: "Nuxt",
                                title: "Nuxt"
                              })
                            ])
                          ]),
                          createVNode("li", null, [
                            createVNode("a", { href: "https://github.com" }, [
                              createVNode("img", {
                                src: _imports_4,
                                alt: "Github",
                                title: "Github"
                              })
                            ])
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_col, {
                      cols: "12",
                      md: "6"
                    }, {
                      default: withCtx(() => [
                        createVNode("h2", null, "PDFs"),
                        createVNode("p", null, [
                          createTextVNode(" Les contenus du site ont \xE9t\xE9 \xE9crits en "),
                          createVNode("a", { href: "https://fr.wikipedia.org/wiki/LaTeX" }, "LaTeX"),
                          createTextVNode(", et sont par cons\xE9quent t\xE9l\xE9chargeables au format PDF. ")
                        ]),
                        createVNode("ul", { class: "mb-0" }, [
                          createVNode("li", null, [
                            createVNode("a", { href: "/pdf/lecons.pdf" }, "Plans de le\xE7ons")
                          ]),
                          createVNode("li", null, [
                            createVNode("a", { href: "/pdf/developpements.pdf" }, "D\xE9veloppements")
                          ]),
                          createVNode("li", null, [
                            createVNode("a", { href: "/pdf/lecons-developpements.pdf" }, "Plans de le\xE7ons & d\xE9veloppements")
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_b_row, null, {
                default: withCtx(() => [
                  createVNode(_component_b_col, {
                    cols: "12",
                    md: "6",
                    class: "mb-4 mb-md-0"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", null, "Copyright"),
                      createVNode("p", null, [
                        createTextVNode(" Copyright \xA9 2025 - "),
                        createVNode("a", { href: "https://imbodj.github.io/SenCoursDeMaths" }, "Hugo Delaunay"),
                        createTextVNode(". Tous droits r\xE9serv\xE9s. "),
                        createVNode(_component_current_commit_sha)
                      ]),
                      createVNode("p", { class: "mb-0" }, [
                        createTextVNode(" Les contenus de ce site sont disponibles sous licence "),
                        createVNode("a", { href: "https://creativecommons.org/licenses/by-nc-sa/4.0/deed.fr" }, "CC BY-NC-SA 4.0"),
                        createTextVNode(". Le site en lui-m\xEAme est totalement "),
                        createVNode("a", {
                          href: `https://github.com/${unref(siteMeta).github.username}/${unref(siteMeta).github.repository}/blob/main/LICENSE`
                        }, "open-source", 8, ["href"]),
                        createTextVNode(", vous pouvez aller voir \xE7a sur "),
                        createVNode("a", {
                          href: `https://github.com/${unref(siteMeta).github.username}/${unref(siteMeta).github.repository}`
                        }, "Github", 8, ["href"]),
                        createTextVNode(". ")
                      ]),
                      createVNode("ul", { class: "logos" }, [
                        createVNode("li", null, [
                          createVNode("a", { href: "https://www.latex-project.org/" }, [
                            createVNode("img", {
                              src: _imports_0,
                              alt: "LaTeX",
                              title: "LaTeX"
                            })
                          ])
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "https://github.com/Skyost/ThatLatexLib" }, [
                            createVNode("img", {
                              src: _imports_1,
                              alt: "ThatLatexLib",
                              title: "ThatLatexLib"
                            })
                          ])
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "https://vuejs.org/" }, [
                            createVNode("img", {
                              src: _imports_2,
                              alt: "Vue",
                              title: "Vue"
                            })
                          ])
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "https://nuxtjs.org/" }, [
                            createVNode("img", {
                              src: _imports_3,
                              alt: "Nuxt",
                              title: "Nuxt"
                            })
                          ])
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "https://github.com" }, [
                            createVNode("img", {
                              src: _imports_4,
                              alt: "Github",
                              title: "Github"
                            })
                          ])
                        ])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_col, {
                    cols: "12",
                    md: "6"
                  }, {
                    default: withCtx(() => [
                      createVNode("h2", null, "PDFs"),
                      createVNode("p", null, [
                        createTextVNode(" Les contenus du site ont \xE9t\xE9 \xE9crits en "),
                        createVNode("a", { href: "https://fr.wikipedia.org/wiki/LaTeX" }, "LaTeX"),
                        createTextVNode(", et sont par cons\xE9quent t\xE9l\xE9chargeables au format PDF. ")
                      ]),
                      createVNode("ul", { class: "mb-0" }, [
                        createVNode("li", null, [
                          createVNode("a", { href: "/pdf/lecons.pdf" }, "Plans de le\xE7ons")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "/pdf/developpements.pdf" }, "D\xE9veloppements")
                        ]),
                        createVNode("li", null, [
                          createVNode("a", { href: "/pdf/lecons-developpements.pdf" }, "Plans de le\xE7ons & d\xE9veloppements")
                        ])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/PageFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-044e6f4b"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useBanners();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_loading_indicator = __nuxt_component_0;
      const _component_page_header = __nuxt_component_1;
      const _component_page_navbar = __nuxt_component_2;
      const _component_client_only = __nuxt_component_3;
      const _component_page_content = __nuxt_component_4;
      const _component_page_footer = __nuxt_component_5;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_nuxt_loading_indicator, { color: "white" }, null, _parent));
      _push(ssrRenderComponent(_component_page_header, null, null, _parent));
      _push(ssrRenderComponent(_component_page_navbar, null, null, _parent));
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(ssrRenderComponent(_component_page_content, { id: "page-content" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(ssrRenderComponent(_component_page_footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-CT2zQAGw.mjs.map
