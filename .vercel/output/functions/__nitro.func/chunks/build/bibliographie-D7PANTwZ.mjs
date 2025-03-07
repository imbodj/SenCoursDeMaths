import { _ as __nuxt_component_0 } from './Spinner-CfHoVbAG.mjs';
import { _ as __nuxt_component_2 } from './Cards-CEvwt4yD.mjs';
import { u as usePageHead, _ as _export_sfc, a as _sfc_main$2 } from './server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, computed, mergeProps, createTextVNode, toDisplayString, createBlock, createCommentVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { BRow, BCol } from 'bootstrap-vue-next/components/BContainer';
import { BButtonGroup, BButton } from 'bootstrap-vue-next/components/BButton';
import __nuxt_component_5 from './index-C9yR7Kjj.mjs';
import { u as useFetch } from './fetch-c1PABlO6.mjs';
import 'bootstrap-vue-next/components/BSpinner';
import 'bootstrap-vue-next/components/BFormInput';
import './utils-B9tdQQnS.mjs';
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
import '@iconify/utils/lib/css/icon';
import './asyncData-BU6fKU2G.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BookCard",
  __ssrInlineRender: true,
  props: {
    book: {}
  },
  setup(__props) {
    const props = __props;
    const alt = computed(() => {
      let alt2 = props.book.title;
      if (props.book.subtitle) {
        alt2 += ": " + props.book.subtitle;
      }
      return alt2;
    });
    const authors = computed(() => props.book.authors.join(", "));
    const short = computed(() => `[${props.book.short}]`);
    const image = computed(() => `/images/livres/${props.book.isbn10}.jpg`);
    const date = computed(() => {
      const parts = props.book.date.split("-");
      return `${parts[2]}/${parts[1]}/${parts[0]}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_b_row = BRow;
      const _component_b_col = BCol;
      const _component_b_button_group = BButtonGroup;
      const _component_b_button = BButton;
      const _component_icon = __nuxt_component_5;
      _push(ssrRenderComponent(_component_b_row, mergeProps({
        id: _ctx.book.short,
        class: "book"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_b_col, {
              cols: "12",
              md: "4",
              lg: "3",
              class: "d-flex align-items-center justify-content-center pt-3 pb-4 pt-md-0 pb-md-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="preview"${ssrRenderAttr("src", unref(image))}${ssrRenderAttr("alt", unref(alt))} data-v-c39d920c${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "preview",
                      src: unref(image),
                      alt: unref(alt)
                    }, null, 8, ["src", "alt"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_b_col, {
              class: "info",
              cols: "12",
              md: "8",
              lg: "9"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<h2 class="title" data-v-c39d920c${_scopeId2}><strong data-v-c39d920c${_scopeId2}>${ssrInterpolate(_ctx.book.title)}</strong> ${ssrInterpolate(_ctx.book.subtitle)}</h2><span class="text-muted d-block" data-v-c39d920c${_scopeId2}>${ssrInterpolate(unref(authors))} \u2022 ${ssrInterpolate(unref(date))} \u2022 \xC9ditions ${ssrInterpolate(_ctx.book.publisher)} `);
                  if (_ctx.book.edition) {
                    _push3(`<span data-v-c39d920c${_scopeId2}>\u2022 ${ssrInterpolate(_ctx.book.edition)}<sup data-v-c39d920c${_scopeId2}>\xE8me</sup> \xE9dition</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</span><p class="mt-2 comment" data-v-c39d920c${_scopeId2}>${ssrInterpolate(_ctx.book.comment)}</p><small class="text-muted d-block mb-2" data-v-c39d920c${_scopeId2}><u data-v-c39d920c${_scopeId2}>R\xE9f\xE9rence :</u> <strong data-v-c39d920c${_scopeId2}>${ssrInterpolate(unref(short))}</strong>. </small>`);
                  _push3(ssrRenderComponent(_component_b_button_group, { class: "mt-2 align-self-start" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_b_button, {
                          href: `${_ctx.book.buy}`,
                          variant: "dark"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_icon, { name: "bi:cart" }, null, _parent5, _scopeId4));
                              _push5(` Acheter le livre `);
                            } else {
                              return [
                                createVNode(_component_icon, { name: "bi:cart" }),
                                createTextVNode(" Acheter le livre ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_b_button, {
                          href: `${_ctx.book.website}`,
                          variant: "secondary"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_icon, { name: "bi:info-circle" }, null, _parent5, _scopeId4));
                              _push5(` Plus d&#39;informations `);
                            } else {
                              return [
                                createVNode(_component_icon, { name: "bi:info-circle" }),
                                createTextVNode(" Plus d'informations ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_b_button, {
                            href: `${_ctx.book.buy}`,
                            variant: "dark"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_icon, { name: "bi:cart" }),
                              createTextVNode(" Acheter le livre ")
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          createVNode(_component_b_button, {
                            href: `${_ctx.book.website}`,
                            variant: "secondary"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_icon, { name: "bi:info-circle" }),
                              createTextVNode(" Plus d'informations ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("h2", { class: "title" }, [
                      createVNode("strong", {
                        textContent: toDisplayString(_ctx.book.title)
                      }, null, 8, ["textContent"]),
                      createTextVNode(" " + toDisplayString(_ctx.book.subtitle), 1)
                    ]),
                    createVNode("span", { class: "text-muted d-block" }, [
                      createTextVNode(toDisplayString(unref(authors)) + " \u2022 " + toDisplayString(unref(date)) + " \u2022 \xC9ditions " + toDisplayString(_ctx.book.publisher) + " ", 1),
                      _ctx.book.edition ? (openBlock(), createBlock("span", { key: 0 }, [
                        createTextVNode("\u2022 " + toDisplayString(_ctx.book.edition), 1),
                        createVNode("sup", null, "\xE8me"),
                        createTextVNode(" \xE9dition")
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("p", {
                      class: "mt-2 comment",
                      textContent: toDisplayString(_ctx.book.comment)
                    }, null, 8, ["textContent"]),
                    createVNode("small", { class: "text-muted d-block mb-2" }, [
                      createVNode("u", null, "R\xE9f\xE9rence :"),
                      createTextVNode(),
                      createVNode("strong", {
                        textContent: toDisplayString(unref(short))
                      }, null, 8, ["textContent"]),
                      createTextVNode(". ")
                    ]),
                    createVNode(_component_b_button_group, { class: "mt-2 align-self-start" }, {
                      default: withCtx(() => [
                        createVNode(_component_b_button, {
                          href: `${_ctx.book.buy}`,
                          variant: "dark"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_icon, { name: "bi:cart" }),
                            createTextVNode(" Acheter le livre ")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode(_component_b_button, {
                          href: `${_ctx.book.website}`,
                          variant: "secondary"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_icon, { name: "bi:info-circle" }),
                            createTextVNode(" Plus d'informations ")
                          ]),
                          _: 1
                        }, 8, ["href"])
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
              createVNode(_component_b_col, {
                cols: "12",
                md: "4",
                lg: "3",
                class: "d-flex align-items-center justify-content-center pt-3 pb-4 pt-md-0 pb-md-0"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    class: "preview",
                    src: unref(image),
                    alt: unref(alt)
                  }, null, 8, ["src", "alt"])
                ]),
                _: 1
              }),
              createVNode(_component_b_col, {
                class: "info",
                cols: "12",
                md: "8",
                lg: "9"
              }, {
                default: withCtx(() => [
                  createVNode("h2", { class: "title" }, [
                    createVNode("strong", {
                      textContent: toDisplayString(_ctx.book.title)
                    }, null, 8, ["textContent"]),
                    createTextVNode(" " + toDisplayString(_ctx.book.subtitle), 1)
                  ]),
                  createVNode("span", { class: "text-muted d-block" }, [
                    createTextVNode(toDisplayString(unref(authors)) + " \u2022 " + toDisplayString(unref(date)) + " \u2022 \xC9ditions " + toDisplayString(_ctx.book.publisher) + " ", 1),
                    _ctx.book.edition ? (openBlock(), createBlock("span", { key: 0 }, [
                      createTextVNode("\u2022 " + toDisplayString(_ctx.book.edition), 1),
                      createVNode("sup", null, "\xE8me"),
                      createTextVNode(" \xE9dition")
                    ])) : createCommentVNode("", true)
                  ]),
                  createVNode("p", {
                    class: "mt-2 comment",
                    textContent: toDisplayString(_ctx.book.comment)
                  }, null, 8, ["textContent"]),
                  createVNode("small", { class: "text-muted d-block mb-2" }, [
                    createVNode("u", null, "R\xE9f\xE9rence :"),
                    createTextVNode(),
                    createVNode("strong", {
                      textContent: toDisplayString(unref(short))
                    }, null, 8, ["textContent"]),
                    createTextVNode(". ")
                  ]),
                  createVNode(_component_b_button_group, { class: "mt-2 align-self-start" }, {
                    default: withCtx(() => [
                      createVNode(_component_b_button, {
                        href: `${_ctx.book.buy}`,
                        variant: "dark"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_icon, { name: "bi:cart" }),
                          createTextVNode(" Acheter le livre ")
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createVNode(_component_b_button, {
                        href: `${_ctx.book.website}`,
                        variant: "secondary"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_icon, { name: "bi:info-circle" }),
                          createTextVNode(" Plus d'informations ")
                        ]),
                        _: 1
                      }, 8, ["href"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cards/BookCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BookCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c39d920c"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "bibliographie",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: books, status, error } = ([__temp, __restore] = withAsyncContext(() => useFetch("/_api/bibliography/", "$84DR1oFX7v")), __temp = await __temp, __restore(), __temp);
    usePageHead({ title: "Bibliographie" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_spinner = __nuxt_component_0;
      const _component_cards = __nuxt_component_2;
      const _component_error_display = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(status) === "pending") {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_spinner, null, null, _parent));
        _push(`</div>`);
      } else if (unref(books)) {
        _push(`<div><h1>Bibliographie</h1>`);
        _push(ssrRenderComponent(_component_cards, {
          "input-id": "book-search-field",
          items: unref(books),
          "search-fields": ["title", "subtitle", "short", "authors", "publisher"]
        }, {
          default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(BookCard, {
                book: slotProps.item
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(BookCard, {
                  book: slotProps.item
                }, null, 8, ["book"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/bibliographie.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=bibliographie-D7PANTwZ.mjs.map
