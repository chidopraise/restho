(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [89], {
        9008: function(e, t, i) {
            e.exports = i(3121)
        },
        1163: function(e, t, i) {
            e.exports = i(880)
        },
        719: function(e, t, i) {
            "use strict";
            i.d(t, {
                tq: function() {
                    return w
                },
                o5: function() {
                    return y
                }
            });
            var s = i(7294),
                r = i(8116);

            function a(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function n(e, t) {
                let i = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : a(t[i]) && a(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : n(e[i], t[i]) : e[i] = t[i]
                })
            }

            function l(e = {}) {
                return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
            }

            function o(e = {}) {
                return e.pagination && void 0 === e.pagination.el
            }

            function d(e = {}) {
                return e.scrollbar && void 0 === e.scrollbar.el
            }

            function p(e = "") {
                let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
                    i = [];
                return t.forEach(e => {
                    0 > i.indexOf(e) && i.push(e)
                }), i.join(" ")
            }
            let u = ["modules", "init", "_direction", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_preloadImages", "updateOnImagesReady", "_loop", "_loopAdditionalSlides", "_loopedSlides", "_loopedSlidesLimit", "_loopFillGroupWithBlank", "loopPreventsSlide", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideBlankClass", "slideActiveClass", "slideDuplicateActiveClass", "slideVisibleClass", "slideDuplicateClass", "slideNextClass", "slideDuplicateNextClass", "slidePrevClass", "slideDuplicatePrevClass", "wrapperClass", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "lazy", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom"],
                c = (e, t) => {
                    let i = t.slidesPerView;
                    if (t.breakpoints) {
                        let s = r.ZP.prototype.getBreakpoint(t.breakpoints),
                            a = s in t.breakpoints ? t.breakpoints[s] : void 0;
                        a && a.slidesPerView && (i = a.slidesPerView)
                    }
                    let n = Math.ceil(parseFloat(t.loopedSlides || i, 10));
                    return (n += t.loopAdditionalSlides) > e.length && t.loopedSlidesLimit && (n = e.length), n
                };

            function h(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }
            let f = e => {
                e && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.lazy && e.params.lazy.enabled && e.lazy.load(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            };

            function m(e, t) {
                return "undefined" == typeof window ? (0, s.useEffect)(e, t) : (0, s.useLayoutEffect)(e, t)
            }
            let g = (0, s.createContext)(null),
                v = (0, s.createContext)(null);

            function b() {
                return (b = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            let w = (0, s.forwardRef)(function(e, t) {
                let {
                    className: i,
                    tag: g = "div",
                    wrapperTag: w = "div",
                    children: C,
                    onSwiper: y,
                    ...S
                } = void 0 === e ? {} : e, T = !1, [E, x] = (0, s.useState)("swiper"), [M, k] = (0, s.useState)(null), [P, $] = (0, s.useState)(!1), O = (0, s.useRef)(!1), L = (0, s.useRef)(null), _ = (0, s.useRef)(null), A = (0, s.useRef)(null), z = (0, s.useRef)(null), I = (0, s.useRef)(null), D = (0, s.useRef)(null), N = (0, s.useRef)(null), B = (0, s.useRef)(null), {
                    params: G,
                    passedParams: j,
                    rest: F,
                    events: H
                } = function(e = {}, t = !0) {
                    let i = {
                            on: {}
                        },
                        s = {},
                        l = {};
                    n(i, r.ZP.defaults), n(i, r.ZP.extendedDefaults), i._emitClasses = !0, i.init = !1;
                    let o = {},
                        d = u.map(e => e.replace(/_/, "")),
                        p = Object.assign({}, e);
                    return Object.keys(p).forEach(r => {
                        void 0 !== e[r] && (d.indexOf(r) >= 0 ? a(e[r]) ? (i[r] = {}, l[r] = {}, n(i[r], e[r]), n(l[r], e[r])) : (i[r] = e[r], l[r] = e[r]) : 0 === r.search(/on[A-Z]/) && "function" == typeof e[r] ? t ? s[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r] : i.on[`${r[2].toLowerCase()}${r.substr(3)}`] = e[r] : o[r] = e[r])
                    }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                        !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                    }), {
                        params: i,
                        passedParams: l,
                        rest: o,
                        events: s
                    }
                }(S), {
                    slides: R,
                    slots: V
                } = function(e) {
                    let t = [],
                        i = {
                            "container-start": [],
                            "container-end": [],
                            "wrapper-start": [],
                            "wrapper-end": []
                        };
                    return s.Children.toArray(e).forEach(e => {
                        if (h(e)) t.push(e);
                        else if (e.props && e.props.slot && i[e.props.slot]) i[e.props.slot].push(e);
                        else if (e.props && e.props.children) {
                            let r = function e(t) {
                                let i = [];
                                return s.Children.toArray(t).forEach(t => {
                                    h(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => i.push(e))
                                }), i
                            }(e.props.children);
                            r.length > 0 ? r.forEach(e => t.push(e)) : i["container-end"].push(e)
                        } else i["container-end"].push(e)
                    }), {
                        slides: t,
                        slots: i
                    }
                }(C), q = () => {
                    $(!P)
                };
                Object.assign(G.on, {
                    _containerClasses(e, t) {
                        x(t)
                    }
                });
                let W = () => {
                    if (Object.assign(G.on, H), T = !0, _.current = new r.ZP(G), _.current.loopCreate = () => {}, _.current.loopDestroy = () => {}, G.loop && (_.current.loopedSlides = c(R, G)), _.current.virtual && _.current.params.virtual.enabled) {
                        _.current.virtual.slides = R;
                        let e = {
                            cache: !1,
                            slides: R,
                            renderExternal: k,
                            renderExternalUpdate: !1
                        };
                        n(_.current.params.virtual, e), n(_.current.originalParams.virtual, e)
                    }
                };
                L.current || W(), _.current && _.current.on("_beforeBreakpoint", q);
                let X = () => {
                        !T && H && _.current && Object.keys(H).forEach(e => {
                            _.current.on(e, H[e])
                        })
                    },
                    Y = () => {
                        H && _.current && Object.keys(H).forEach(e => {
                            _.current.off(e, H[e])
                        })
                    };
                return (0, s.useEffect)(() => () => {
                    _.current && _.current.off("_beforeBreakpoint", q)
                }), (0, s.useEffect)(() => {
                    !O.current && _.current && (_.current.emitSlidesClasses(), O.current = !0)
                }), m(() => {
                    if (t && (t.current = L.current), L.current) return _.current.destroyed && W(),
                        function({
                            el: e,
                            nextEl: t,
                            prevEl: i,
                            paginationEl: s,
                            scrollbarEl: r,
                            swiper: a
                        }, n) {
                            l(n) && t && i && (a.params.navigation.nextEl = t, a.originalParams.navigation.nextEl = t, a.params.navigation.prevEl = i, a.originalParams.navigation.prevEl = i), o(n) && s && (a.params.pagination.el = s, a.originalParams.pagination.el = s), d(n) && r && (a.params.scrollbar.el = r, a.originalParams.scrollbar.el = r), a.init(e)
                        }({
                            el: L.current,
                            nextEl: I.current,
                            prevEl: D.current,
                            paginationEl: N.current,
                            scrollbarEl: B.current,
                            swiper: _.current
                        }, G), y && y(_.current), () => {
                            _.current && !_.current.destroyed && _.current.destroy(!0, !1)
                        }
                }, []), m(() => {
                    X();
                    let e = function(e, t, i, s, r) {
                        let n = [];
                        if (!t) return n;
                        let l = e => {
                            0 > n.indexOf(e) && n.push(e)
                        };
                        if (i && s) {
                            let o = s.map(r),
                                d = i.map(r);
                            o.join("") !== d.join("") && l("children"), s.length !== i.length && l("children")
                        }
                        let p = u.filter(e => "_" === e[0]).map(e => e.replace(/_/, ""));
                        return p.forEach(i => {
                            if (i in e && i in t) {
                                if (a(e[i]) && a(t[i])) {
                                    let s = Object.keys(e[i]),
                                        r = Object.keys(t[i]);
                                    s.length !== r.length ? l(i) : (s.forEach(s => {
                                        e[i][s] !== t[i][s] && l(i)
                                    }), r.forEach(s => {
                                        e[i][s] !== t[i][s] && l(i)
                                    }))
                                } else e[i] !== t[i] && l(i)
                            }
                        }), n
                    }(j, A.current, R, z.current, e => e.key);
                    return A.current = j, z.current = R, e.length && _.current && !_.current.destroyed && function({
                        swiper: e,
                        slides: t,
                        passedParams: i,
                        changedParams: s,
                        nextEl: r,
                        prevEl: l,
                        scrollbarEl: o,
                        paginationEl: d
                    }) {
                        let p, u, c, h, f;
                        let m = s.filter(e => "children" !== e && "direction" !== e),
                            {
                                params: g,
                                pagination: v,
                                navigation: b,
                                scrollbar: w,
                                virtual: C,
                                thumbs: y
                            } = e;
                        s.includes("thumbs") && i.thumbs && i.thumbs.swiper && g.thumbs && !g.thumbs.swiper && (p = !0), s.includes("controller") && i.controller && i.controller.control && g.controller && !g.controller.control && (u = !0), s.includes("pagination") && i.pagination && (i.pagination.el || d) && (g.pagination || !1 === g.pagination) && v && !v.el && (c = !0), s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || o) && (g.scrollbar || !1 === g.scrollbar) && w && !w.el && (h = !0), s.includes("navigation") && i.navigation && (i.navigation.prevEl || l) && (i.navigation.nextEl || r) && (g.navigation || !1 === g.navigation) && b && !b.prevEl && !b.nextEl && (f = !0);
                        let S = t => {
                            e[t] && (e[t].destroy(), "navigation" === t ? (g[t].prevEl = void 0, g[t].nextEl = void 0, e[t].prevEl = void 0, e[t].nextEl = void 0) : (g[t].el = void 0, e[t].el = void 0))
                        };
                        if (m.forEach(e => {
                                if (a(g[e]) && a(i[e])) n(g[e], i[e]);
                                else {
                                    let t = i[e];
                                    (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && S(e): g[e] = i[e]
                                }
                            }), m.includes("controller") && !u && e.controller && e.controller.control && g.controller && g.controller.control && (e.controller.control = g.controller.control), s.includes("children") && t && C && g.virtual.enabled ? (C.slides = t, C.update(!0)) : s.includes("children") && e.lazy && e.params.lazy.enabled && e.lazy.load(), p) {
                            let T = y.init();
                            T && y.update(!0)
                        }
                        u && (e.controller.control = g.controller.control), c && (d && (g.pagination.el = d), v.init(), v.render(), v.update()), h && (o && (g.scrollbar.el = o), w.init(), w.updateSize(), w.setTranslate()), f && (r && (g.navigation.nextEl = r), l && (g.navigation.prevEl = l), b.init(), b.update()), s.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext), s.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev), s.includes("direction") && e.changeDirection(i.direction, !1), e.update()
                    }({
                        swiper: _.current,
                        slides: R,
                        passedParams: j,
                        changedParams: e,
                        nextEl: I.current,
                        prevEl: D.current,
                        scrollbarEl: B.current,
                        paginationEl: N.current
                    }), () => {
                        Y()
                    }
                }), m(() => {
                    f(_.current)
                }, [M]), s.createElement(g, b({
                    ref: L,
                    className: p(`${E}${i?` ${i}`:""}`)
                }, F), s.createElement(v.Provider, {
                    value: _.current
                }, V["container-start"], s.createElement(w, {
                    className: "swiper-wrapper"
                }, V["wrapper-start"], G.virtual ? function(e, t, i) {
                    if (!i) return null;
                    let r = e.isHorizontal() ? {
                        [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                    } : {
                        top: `${i.offset}px`
                    };
                    return t.filter((e, t) => t >= i.from && t <= i.to).map(t => s.cloneElement(t, {
                        swiper: e,
                        style: r
                    }))
                }(_.current, R, M) : !G.loop || _.current && _.current.destroyed ? R.map(e => s.cloneElement(e, {
                    swiper: _.current
                })) : function(e, t, i) {
                    let r = t.map((t, i) => s.cloneElement(t, {
                        swiper: e,
                        "data-swiper-slide-index": i
                    }));

                    function a(e, t, r) {
                        return s.cloneElement(e, {
                            key: `${e.key}-duplicate-${t}-${r}`,
                            className: `${e.props.className||""} ${i.slideDuplicateClass}`
                        })
                    }
                    if (i.loopFillGroupWithBlank) {
                        let n = i.slidesPerGroup - r.length % i.slidesPerGroup;
                        if (n !== i.slidesPerGroup)
                            for (let l = 0; l < n; l += 1) {
                                let o = s.createElement("div", {
                                    className: `${i.slideClass} ${i.slideBlankClass}`
                                });
                                r.push(o)
                            }
                    }
                    "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length);
                    let d = c(r, i),
                        p = [],
                        u = [];
                    for (let h = 0; h < d; h += 1) {
                        let f = h - Math.floor(h / r.length) * r.length;
                        u.push(a(r[f], h, "append")), p.unshift(a(r[r.length - f - 1], h, "prepend"))
                    }
                    return e && (e.loopedSlides = d), [...p, ...r, ...u]
                }(_.current, R, G), V["wrapper-end"]), l(G) && s.createElement(s.Fragment, null, s.createElement("div", {
                    ref: D,
                    className: "swiper-button-prev"
                }), s.createElement("div", {
                    ref: I,
                    className: "swiper-button-next"
                })), d(G) && s.createElement("div", {
                    ref: B,
                    className: "swiper-scrollbar"
                }), o(G) && s.createElement("div", {
                    ref: N,
                    className: "swiper-pagination"
                }), V["container-end"]))
            });

            function C() {
                return (C = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }).apply(this, arguments)
            }
            w.displayName = "Swiper";
            let y = (0, s.forwardRef)(function(e, t) {
                let {
                    tag: i = "div",
                    children: r,
                    className: a = "",
                    swiper: n,
                    zoom: l,
                    virtualIndex: o,
                    ...d
                } = void 0 === e ? {} : e, u = (0, s.useRef)(null), [c, h] = (0, s.useState)("swiper-slide");

                function f(e, t, i) {
                    t === u.current && h(i)
                }
                m(() => {
                    if (t && (t.current = u.current), u.current && n) {
                        if (n.destroyed) {
                            "swiper-slide" !== c && h("swiper-slide");
                            return
                        }
                        return n.on("_slideClass", f), () => {
                            n && n.off("_slideClass", f)
                        }
                    }
                }), m(() => {
                    n && u.current && !n.destroyed && h(n.getSlideClasses(u.current))
                }, [n]);
                let v = {
                        isActive: c.indexOf("swiper-slide-active") >= 0 || c.indexOf("swiper-slide-duplicate-active") >= 0,
                        isVisible: c.indexOf("swiper-slide-visible") >= 0,
                        isDuplicate: c.indexOf("swiper-slide-duplicate") >= 0,
                        isPrev: c.indexOf("swiper-slide-prev") >= 0 || c.indexOf("swiper-slide-duplicate-prev") >= 0,
                        isNext: c.indexOf("swiper-slide-next") >= 0 || c.indexOf("swiper-slide-duplicate-next") >= 0
                    },
                    b = () => "function" == typeof r ? r(v) : r;
                return s.createElement(i, C({
                    ref: u,
                    className: p(`${c}${a?` ${a}`:""}`),
                    "data-swiper-slide-index": o
                }, d), s.createElement(g.Provider, {
                    value: v
                }, l ? s.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" == typeof l ? l : void 0
                }, b()) : b()))
            });
            y.displayName = "SwiperSlide"
        },
        8116: function(e, t, i) {
            "use strict";
            let s, r, a;

            function n(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function l(e = {}, t = {}) {
                Object.keys(t).forEach(i => {
                    void 0 === e[i] ? e[i] = t[i] : n(t[i]) && n(e[i]) && Object.keys(t[i]).length > 0 && l(e[i], t[i])
                })
            }
            i.d(t, {
                pt: function() {
                    return W
                },
                xW: function() {
                    return U
                },
                Rv: function() {
                    return Y
                },
                W_: function() {
                    return R
                },
                tl: function() {
                    return q
                },
                o3: function() {
                    return X
                },
                ZP: function() {
                    return F
                }
            });
            let o = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function d() {
                let e = "undefined" != typeof document ? document : {};
                return l(e, o), e
            }
            let p = {
                document: o,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" != typeof setTimeout && clearTimeout(e)
                }
            };

            function u() {
                let e = "undefined" != typeof window ? window : {};
                return l(e, p), e
            }
            class c extends Array {
                constructor(e) {
                    "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                        let t = e.__proto__;
                        Object.defineProperty(e, "__proto__", {
                            get: () => t,
                            set(e) {
                                t.__proto__ = e
                            }
                        })
                    }(this))
                }
            }

            function h(e = []) {
                let t = [];
                return e.forEach(e => {
                    Array.isArray(e) ? t.push(...h(e)) : t.push(e)
                }), t
            }

            function f(e, t) {
                return Array.prototype.filter.call(e, t)
            }

            function m(e, t) {
                let i = u(),
                    s = d(),
                    r = [];
                if (!t && e instanceof c) return e;
                if (!e) return new c(r);
                if ("string" == typeof e) {
                    let a = e.trim();
                    if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
                        let n = "div";
                        0 === a.indexOf("<li") && (n = "ul"), 0 === a.indexOf("<tr") && (n = "tbody"), (0 === a.indexOf("<td") || 0 === a.indexOf("<th")) && (n = "tr"), 0 === a.indexOf("<tbody") && (n = "table"), 0 === a.indexOf("<option") && (n = "select");
                        let l = s.createElement(n);
                        l.innerHTML = a;
                        for (let o = 0; o < l.childNodes.length; o += 1) r.push(l.childNodes[o])
                    } else r = function(e, t) {
                        if ("string" != typeof e) return [e];
                        let i = [],
                            s = t.querySelectorAll(e);
                        for (let r = 0; r < s.length; r += 1) i.push(s[r]);
                        return i
                    }(e.trim(), t || s)
                } else if (e.nodeType || e === i || e === s) r.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof c) return e;
                    r = e
                }
                return new c(function(e) {
                    let t = [];
                    for (let i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                    return t
                }(r))
            }
            m.fn = c.prototype;
            let g = "resize scroll".split(" ");

            function v(e) {
                return function(...t) {
                    if (void 0 === t[0]) {
                        for (let i = 0; i < this.length; i += 1) 0 > g.indexOf(e) && (e in this[i] ? this[i][e]() : m(this[i]).trigger(e));
                        return this
                    }
                    return this.on(e, ...t)
                }
            }
            v("click"), v("blur"), v("focus"), v("focusin"), v("focusout"), v("keyup"), v("keydown"), v("keypress"), v("submit"), v("change"), v("mousedown"), v("mousemove"), v("mouseup"), v("mouseenter"), v("mouseleave"), v("mouseout"), v("mouseover"), v("touchstart"), v("touchend"), v("touchmove"), v("resize"), v("scroll");
            let b = {
                addClass: function(...e) {
                    let t = h(e.map(e => e.split(" ")));
                    return this.forEach(e => {
                        e.classList.add(...t)
                    }), this
                },
                removeClass: function(...e) {
                    let t = h(e.map(e => e.split(" ")));
                    return this.forEach(e => {
                        e.classList.remove(...t)
                    }), this
                },
                hasClass: function(...e) {
                    let t = h(e.map(e => e.split(" ")));
                    return f(this, e => t.filter(t => e.classList.contains(t)).length > 0).length > 0
                },
                toggleClass: function(...e) {
                    let t = h(e.map(e => e.split(" ")));
                    this.forEach(e => {
                        t.forEach(t => {
                            e.classList.toggle(t)
                        })
                    })
                },
                attr: function(e, t) {
                    if (1 == arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (let i = 0; i < this.length; i += 1)
                        if (2 == arguments.length) this[i].setAttribute(e, t);
                        else
                            for (let s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
                    return this
                },
                removeAttr: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                transform: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                    return this
                },
                transition: function(e) {
                    for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                    return this
                },
                on: function(...e) {
                    let t, [i, s, r, a] = e;

                    function n(e) {
                        let t = e.target;
                        if (!t) return;
                        let i = e.target.dom7EventData || [];
                        if (0 > i.indexOf(e) && i.unshift(e), m(t).is(s)) r.apply(t, i);
                        else {
                            let a = m(t).parents();
                            for (let n = 0; n < a.length; n += 1) m(a[n]).is(s) && r.apply(a[n], i)
                        }
                    }

                    function l(e) {
                        let t = e && e.target && e.target.dom7EventData || [];
                        0 > t.indexOf(e) && t.unshift(e), r.apply(this, t)
                    }
                    "function" == typeof e[1] && ([i, r, a] = e, s = void 0), a || (a = !1);
                    let o = i.split(" ");
                    for (let d = 0; d < this.length; d += 1) {
                        let p = this[d];
                        if (s)
                            for (t = 0; t < o.length; t += 1) {
                                let u = o[t];
                                p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[u] || (p.dom7LiveListeners[u] = []), p.dom7LiveListeners[u].push({
                                    listener: r,
                                    proxyListener: n
                                }), p.addEventListener(u, n, a)
                            } else
                                for (t = 0; t < o.length; t += 1) {
                                    let c = o[t];
                                    p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[c] || (p.dom7Listeners[c] = []), p.dom7Listeners[c].push({
                                        listener: r,
                                        proxyListener: l
                                    }), p.addEventListener(c, l, a)
                                }
                    }
                    return this
                },
                off: function(...e) {
                    let [t, i, s, r] = e;
                    "function" == typeof e[1] && ([t, s, r] = e, i = void 0), r || (r = !1);
                    let a = t.split(" ");
                    for (let n = 0; n < a.length; n += 1) {
                        let l = a[n];
                        for (let o = 0; o < this.length; o += 1) {
                            let d;
                            let p = this[o];
                            if (!i && p.dom7Listeners ? d = p.dom7Listeners[l] : i && p.dom7LiveListeners && (d = p.dom7LiveListeners[l]), d && d.length)
                                for (let u = d.length - 1; u >= 0; u -= 1) {
                                    let c = d[u];
                                    s && c.listener === s ? (p.removeEventListener(l, c.proxyListener, r), d.splice(u, 1)) : s && c.listener && c.listener.dom7proxy && c.listener.dom7proxy === s ? (p.removeEventListener(l, c.proxyListener, r), d.splice(u, 1)) : s || (p.removeEventListener(l, c.proxyListener, r), d.splice(u, 1))
                                }
                        }
                    }
                    return this
                },
                trigger: function(...e) {
                    let t = u(),
                        i = e[0].split(" "),
                        s = e[1];
                    for (let r = 0; r < i.length; r += 1) {
                        let a = i[r];
                        for (let n = 0; n < this.length; n += 1) {
                            let l = this[n];
                            if (t.CustomEvent) {
                                let o = new t.CustomEvent(a, {
                                    detail: s,
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                l.dom7EventData = e.filter((e, t) => t > 0), l.dispatchEvent(o), l.dom7EventData = [], delete l.dom7EventData
                            }
                        }
                    }
                    return this
                },
                transitionEnd: function(e) {
                    let t = this;
                    return e && t.on("transitionend", function i(s) {
                        s.target === this && (e.call(this, s), t.off("transitionend", i))
                    }), this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            let t = this.styles();
                            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            let t = this.styles();
                            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                styles: function() {
                    let e = u();
                    return this[0] ? e.getComputedStyle(this[0], null) : {}
                },
                offset: function() {
                    if (this.length > 0) {
                        let e = u(),
                            t = d(),
                            i = this[0],
                            s = i.getBoundingClientRect(),
                            r = t.body,
                            a = i.clientTop || r.clientTop || 0,
                            n = i.clientLeft || r.clientLeft || 0,
                            l = i === e ? e.scrollY : i.scrollTop,
                            o = i === e ? e.scrollX : i.scrollLeft;
                        return {
                            top: s.top + l - a,
                            left: s.left + o - n
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    let i;
                    let s = u();
                    if (1 == arguments.length) {
                        if ("string" == typeof e) {
                            if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e)
                        } else {
                            for (i = 0; i < this.length; i += 1)
                                for (let r in e) this[i].style[r] = e[r];
                            return this
                        }
                    }
                    if (2 == arguments.length && "string" == typeof e)
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                    return this
                },
                each: function(e) {
                    return e && this.forEach((t, i) => {
                        e.apply(t, [t, i])
                    }), this
                },
                html: function(e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                    for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    let t, i;
                    let s = u(),
                        r = d(),
                        a = this[0];
                    if (!a || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (a.matches) return a.matches(e);
                        if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
                        if (a.msMatchesSelector) return a.msMatchesSelector(e);
                        for (i = 0, t = m(e); i < t.length; i += 1)
                            if (t[i] === a) return !0;
                        return !1
                    }
                    if (e === r) return a === r;
                    if (e === s) return a === s;
                    if (e.nodeType || e instanceof c) {
                        for (i = 0, t = e.nodeType ? [e] : e; i < t.length; i += 1)
                            if (t[i] === a) return !0
                    }
                    return !1
                },
                index: function() {
                    let e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    let t = this.length;
                    if (e > t - 1) return m([]);
                    if (e < 0) {
                        let i = t + e;
                        return i < 0 ? m([]) : m([this[i]])
                    }
                    return m([this[e]])
                },
                append: function(...e) {
                    let t;
                    let i = d();
                    for (let s = 0; s < e.length; s += 1) {
                        t = e[s];
                        for (let r = 0; r < this.length; r += 1)
                            if ("string" == typeof t) {
                                let a = i.createElement("div");
                                for (a.innerHTML = t; a.firstChild;) this[r].appendChild(a.firstChild)
                            } else if (t instanceof c)
                            for (let n = 0; n < t.length; n += 1) this[r].appendChild(t[n]);
                        else this[r].appendChild(t)
                    }
                    return this
                },
                prepend: function(e) {
                    let t, i;
                    let s = d();
                    for (t = 0; t < this.length; t += 1)
                        if ("string" == typeof e) {
                            let r = s.createElement("div");
                            for (r.innerHTML = e, i = r.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(r.childNodes[i], this[t].childNodes[0])
                        } else if (e instanceof c)
                        for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                    return this
                },
                next: function(e) {
                    if (this.length > 0) {
                        if (e) return this[0].nextElementSibling && m(this[0].nextElementSibling).is(e) ? m([this[0].nextElementSibling]) : m([]);
                        if (this[0].nextElementSibling) return m([this[0].nextElementSibling])
                    }
                    return m([])
                },
                nextAll: function(e) {
                    let t = [],
                        i = this[0];
                    if (!i) return m([]);
                    for (; i.nextElementSibling;) {
                        let s = i.nextElementSibling;
                        e ? m(s).is(e) && t.push(s) : t.push(s), i = s
                    }
                    return m(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        let t = this[0];
                        if (e) return t.previousElementSibling && m(t.previousElementSibling).is(e) ? m([t.previousElementSibling]) : m([]);
                        if (t.previousElementSibling) return m([t.previousElementSibling])
                    }
                    return m([])
                },
                prevAll: function(e) {
                    let t = [],
                        i = this[0];
                    if (!i) return m([]);
                    for (; i.previousElementSibling;) {
                        let s = i.previousElementSibling;
                        e ? m(s).is(e) && t.push(s) : t.push(s), i = s
                    }
                    return m(t)
                },
                parent: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? m(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                    return m(t)
                },
                parents: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].parentNode;
                        for (; s;) e ? m(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
                    }
                    return m(t)
                },
                closest: function(e) {
                    let t = this;
                    return void 0 === e ? m([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].querySelectorAll(e);
                        for (let r = 0; r < s.length; r += 1) t.push(s[r])
                    }
                    return m(t)
                },
                children: function(e) {
                    let t = [];
                    for (let i = 0; i < this.length; i += 1) {
                        let s = this[i].children;
                        for (let r = 0; r < s.length; r += 1)(!e || m(s[r]).is(e)) && t.push(s[r])
                    }
                    return m(t)
                },
                filter: function(e) {
                    let t = f(this, e);
                    return m(t)
                },
                remove: function() {
                    for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                }
            };

            function w(e, t = 0) {
                return setTimeout(e, t)
            }

            function C() {
                return Date.now()
            }

            function y(e) {
                return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function S(...e) {
                let t = Object(e[0]),
                    i = ["__proto__", "constructor", "prototype"];
                for (let s = 1; s < e.length; s += 1) {
                    let r = e[s];
                    if (null != r && ("undefined" != typeof window && void 0 !== window.HTMLElement ? !(r instanceof HTMLElement) : !r || 1 !== r.nodeType && 11 !== r.nodeType)) {
                        let a = Object.keys(Object(r)).filter(e => 0 > i.indexOf(e));
                        for (let n = 0, l = a.length; n < l; n += 1) {
                            let o = a[n],
                                d = Object.getOwnPropertyDescriptor(r, o);
                            void 0 !== d && d.enumerable && (y(t[o]) && y(r[o]) ? r[o].__swiper__ ? t[o] = r[o] : S(t[o], r[o]) : !y(t[o]) && y(r[o]) ? (t[o] = {}, r[o].__swiper__ ? t[o] = r[o] : S(t[o], r[o])) : t[o] = r[o])
                        }
                    }
                }
                return t
            }

            function T(e, t, i) {
                e.style.setProperty(t, i)
            }

            function E({
                swiper: e,
                targetPosition: t,
                side: i
            }) {
                let s;
                let r = u(),
                    a = -e.translate,
                    n = null,
                    l = e.params.speed;
                e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
                let o = t > a ? "next" : "prev",
                    d = (e, t) => "next" === o && e >= t || "prev" === o && e <= t,
                    p = () => {
                        s = new Date().getTime(), null === n && (n = s);
                        let o = Math.max(Math.min((s - n) / l, 1), 0),
                            u = a + (.5 - Math.cos(o * Math.PI) / 2) * (t - a);
                        if (d(u, t) && (u = t), e.wrapperEl.scrollTo({
                                [i]: u
                            }), d(u, t)) {
                            e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                                e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                                    [i]: u
                                })
                            }), r.cancelAnimationFrame(e.cssModeFrameID);
                            return
                        }
                        e.cssModeFrameID = r.requestAnimationFrame(p)
                    };
                p()
            }

            function x() {
                return s || (s = function() {
                    let e = u(),
                        t = d();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                        passiveListener: function() {
                            let t = !1;
                            try {
                                let i = Object.defineProperty({}, "passive", {
                                    get() {
                                        t = !0
                                    }
                                });
                                e.addEventListener("testPassiveListener", null, i)
                            } catch (s) {}
                            return t
                        }(),
                        gestures: "ongesturestart" in e
                    }
                }()), s
            }

            function M({
                swiper: e,
                runCallbacks: t,
                direction: i,
                step: s
            }) {
                let {
                    activeIndex: r,
                    previousIndex: a
                } = e, n = i;
                if (n || (n = r > a ? "next" : r < a ? "prev" : "reset"), e.emit(`transition${s}`), t && r !== a) {
                    if ("reset" === n) {
                        e.emit(`slideResetTransition${s}`);
                        return
                    }
                    e.emit(`slideChangeTransition${s}`), "next" === n ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`)
                }
            }

            function k(e) {
                let t = this,
                    i = d(),
                    s = u(),
                    r = t.touchEventsData,
                    {
                        params: a,
                        touches: n,
                        enabled: l
                    } = t;
                if (!l || t.animating && a.preventInteractionOnTransition) return;
                !t.animating && a.cssMode && a.loop && t.loopFix();
                let o = e;
                o.originalEvent && (o = o.originalEvent);
                let p = m(o.target);
                if ("wrapper" === a.touchEventsTarget && !p.closest(t.wrapperEl).length || (r.isTouchEvent = "touchstart" === o.type, !r.isTouchEvent && "which" in o && 3 === o.which || !r.isTouchEvent && "button" in o && o.button > 0 || r.isTouched && r.isMoved)) return;
                let c = !!a.noSwipingClass && "" !== a.noSwipingClass,
                    h = e.composedPath ? e.composedPath() : e.path;
                c && o.target && o.target.shadowRoot && h && (p = m(h[0]));
                let f = a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`,
                    g = !!(o.target && o.target.shadowRoot);
                if (a.noSwiping && (g ? function(e, t = this) {
                        return function t(i) {
                            if (!i || i === d() || i === u()) return null;
                            i.assignedSlot && (i = i.assignedSlot);
                            let s = i.closest(e);
                            return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                        }(t)
                    }(f, p[0]) : p.closest(f)[0])) {
                    t.allowClick = !0;
                    return
                }
                if (a.swipeHandler && !p.closest(a.swipeHandler)[0]) return;
                n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
                let v = n.currentX,
                    b = n.currentY,
                    w = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                    y = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                if (w && (v <= y || v >= s.innerWidth - y)) {
                    if ("prevent" !== w) return;
                    e.preventDefault()
                }
                if (Object.assign(r, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), n.startX = v, n.startY = b, r.touchStartTime = C(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== o.type) {
                    let S = !0;
                    p.is(r.focusableElements) && (S = !1, "SELECT" === p[0].nodeName && (r.isTouched = !1)), i.activeElement && m(i.activeElement).is(r.focusableElements) && i.activeElement !== p[0] && i.activeElement.blur();
                    let T = S && t.allowTouchMove && a.touchStartPreventDefault;
                    (a.touchStartForcePreventDefault || T) && !p[0].isContentEditable && o.preventDefault()
                }
                t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !a.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", o)
            }

            function P(e) {
                let t = d(),
                    i = this,
                    s = i.touchEventsData,
                    {
                        params: r,
                        touches: a,
                        rtlTranslate: n,
                        enabled: l
                    } = i;
                if (!l) return;
                let o = e;
                if (o.originalEvent && (o = o.originalEvent), !s.isTouched) {
                    s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", o);
                    return
                }
                if (s.isTouchEvent && "touchmove" !== o.type) return;
                let p = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
                    u = "touchmove" === o.type ? p.pageX : o.pageX,
                    c = "touchmove" === o.type ? p.pageY : o.pageY;
                if (o.preventedByNestedSwiper) {
                    a.startX = u, a.startY = c;
                    return
                }
                if (!i.allowTouchMove) {
                    m(o.target).is(s.focusableElements) || (i.allowClick = !1), s.isTouched && (Object.assign(a, {
                        startX: u,
                        startY: c,
                        currentX: u,
                        currentY: c
                    }), s.touchStartTime = C());
                    return
                }
                if (s.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
                    if (i.isVertical()) {
                        if (c < a.startY && i.translate <= i.maxTranslate() || c > a.startY && i.translate >= i.minTranslate()) {
                            s.isTouched = !1, s.isMoved = !1;
                            return
                        }
                    } else if (u < a.startX && i.translate <= i.maxTranslate() || u > a.startX && i.translate >= i.minTranslate()) return
                }
                if (s.isTouchEvent && t.activeElement && o.target === t.activeElement && m(o.target).is(s.focusableElements)) {
                    s.isMoved = !0, i.allowClick = !1;
                    return
                }
                if (s.allowTouchCallbacks && i.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
                a.currentX = u, a.currentY = c;
                let h = a.currentX - a.startX,
                    f = a.currentY - a.startY;
                if (i.params.threshold && Math.sqrt(h ** 2 + f ** 2) < i.params.threshold) return;
                if (void 0 === s.isScrolling) {
                    let g;
                    i.isHorizontal() && a.currentY === a.startY || i.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : h * h + f * f >= 25 && (g = 180 * Math.atan2(Math.abs(f), Math.abs(h)) / Math.PI, s.isScrolling = i.isHorizontal() ? g > r.touchAngle : 90 - g > r.touchAngle)
                }
                if (s.isScrolling && i.emit("touchMoveOpposite", o), void 0 === s.startMoving && (a.currentX !== a.startX || a.currentY !== a.startY) && (s.startMoving = !0), s.isScrolling) {
                    s.isTouched = !1;
                    return
                }
                if (!s.startMoving) return;
                i.allowClick = !1, !r.cssMode && o.cancelable && o.preventDefault(), r.touchMoveStopPropagation && !r.nested && o.stopPropagation(), s.isMoved || (r.loop && !r.cssMode && i.loopFix(), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, r.grabCursor && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!0), i.emit("sliderFirstMove", o)), i.emit("sliderMove", o), s.isMoved = !0;
                let v = i.isHorizontal() ? h : f;
                a.diff = v, v *= r.touchRatio, n && (v = -v), i.swipeDirection = v > 0 ? "prev" : "next", s.currentTranslate = v + s.startTranslate;
                let b = !0,
                    w = r.resistanceRatio;
                if (r.touchReleaseOnEdges && (w = 0), v > 0 && s.currentTranslate > i.minTranslate() ? (b = !1, r.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + v) ** w)) : v < 0 && s.currentTranslate < i.maxTranslate() && (b = !1, r.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - v) ** w)), b && (o.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate), r.threshold > 0) {
                    if (Math.abs(v) > r.threshold || s.allowThresholdMove) {
                        if (!s.allowThresholdMove) {
                            s.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, s.currentTranslate = s.startTranslate, a.diff = i.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY;
                            return
                        }
                    } else {
                        s.currentTranslate = s.startTranslate;
                        return
                    }
                }
                r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && i.freeMode || r.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), i.params.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
            }

            function $(e) {
                let t;
                let i = this,
                    s = i.touchEventsData,
                    {
                        params: r,
                        touches: a,
                        rtlTranslate: n,
                        slidesGrid: l,
                        enabled: o
                    } = i;
                if (!o) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), s.allowTouchCallbacks && i.emit("touchEnd", d), s.allowTouchCallbacks = !1, !s.isTouched) {
                    s.isMoved && r.grabCursor && i.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
                    return
                }
                r.grabCursor && s.isMoved && s.isTouched && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!1);
                let p = C(),
                    u = p - s.touchStartTime;
                if (i.allowClick) {
                    let c = d.path || d.composedPath && d.composedPath();
                    i.updateClickedSlide(c && c[0] || d.target), i.emit("tap click", d), u < 300 && p - s.lastClickTime < 300 && i.emit("doubleTap doubleClick", d)
                }
                if (s.lastClickTime = C(), w(() => {
                        i.destroyed || (i.allowClick = !0)
                    }), !s.isTouched || !s.isMoved || !i.swipeDirection || 0 === a.diff || s.currentTranslate === s.startTranslate) {
                    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
                    return
                }
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, t = r.followFinger ? n ? i.translate : -i.translate : -s.currentTranslate, r.cssMode) return;
                if (i.params.freeMode && r.freeMode.enabled) {
                    i.freeMode.onTouchEnd({
                        currentPos: t
                    });
                    return
                }
                let h = 0,
                    f = i.slidesSizesGrid[0];
                for (let m = 0; m < l.length; m += m < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
                    let g = m < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                    void 0 !== l[m + g] ? t >= l[m] && t < l[m + g] && (h = m, f = l[m + g] - l[m]) : t >= l[m] && (h = m, f = l[l.length - 1] - l[l.length - 2])
                }
                let v = null,
                    b = null;
                r.rewind && (i.isBeginning ? b = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : i.isEnd && (v = 0));
                let y = (t - l[h]) / f,
                    S = h < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
                if (u > r.longSwipesMs) {
                    if (!r.longSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    "next" === i.swipeDirection && (y >= r.longSwipesRatio ? i.slideTo(r.rewind && i.isEnd ? v : h + S) : i.slideTo(h)), "prev" === i.swipeDirection && (y > 1 - r.longSwipesRatio ? i.slideTo(h + S) : null !== b && y < 0 && Math.abs(y) > r.longSwipesRatio ? i.slideTo(b) : i.slideTo(h))
                } else {
                    if (!r.shortSwipes) {
                        i.slideTo(i.activeIndex);
                        return
                    }
                    let T = i.navigation && (d.target === i.navigation.nextEl || d.target === i.navigation.prevEl);
                    T ? d.target === i.navigation.nextEl ? i.slideTo(h + S) : i.slideTo(h) : ("next" === i.swipeDirection && i.slideTo(null !== v ? v : h + S), "prev" === i.swipeDirection && i.slideTo(null !== b ? b : h))
                }
            }

            function O() {
                let e = this,
                    {
                        params: t,
                        el: i
                    } = e;
                if (i && 0 === i.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                let {
                    allowSlideNext: s,
                    allowSlidePrev: r,
                    snapGrid: a
                } = e;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
            }

            function L(e) {
                this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function _() {
                let e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: i,
                        enabled: s
                    } = e;
                if (!s) return;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                let r = e.maxTranslate() - e.minTranslate();
                (0 === r ? 0 : (e.translate - e.minTranslate()) / r) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            Object.keys(b).forEach(e => {
                Object.defineProperty(m.fn, e, {
                    value: b[e],
                    writable: !0
                })
            });
            let A = !1;

            function z() {}
            let I = (e, t) => {
                    let i = d(),
                        {
                            params: s,
                            touchEvents: r,
                            el: a,
                            wrapperEl: n,
                            device: l,
                            support: o
                        } = e,
                        p = !!s.nested,
                        u = "on" === t ? "addEventListener" : "removeEventListener";
                    if (o.touch) {
                        let c = "touchstart" === r.start && !!o.passiveListener && !!s.passiveListeners && {
                            passive: !0,
                            capture: !1
                        };
                        a[u](r.start, e.onTouchStart, c), a[u](r.move, e.onTouchMove, o.passiveListener ? {
                            passive: !1,
                            capture: p
                        } : p), a[u](r.end, e.onTouchEnd, c), r.cancel && a[u](r.cancel, e.onTouchEnd, c)
                    } else a[u](r.start, e.onTouchStart, !1), i[u](r.move, e.onTouchMove, p), i[u](r.end, e.onTouchEnd, !1);
                    (s.preventClicks || s.preventClicksPropagation) && a[u]("click", e.onClick, !0), s.cssMode && n[u]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O, !0) : e[t]("observerUpdate", O, !0)
                },
                D = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var N = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopedSlidesLimit: !0,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };
            let B = {
                    eventsEmitter: {
                        on(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                            let r = i ? "unshift" : "push";
                            return e.split(" ").forEach(e => {
                                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                            }), s
                        },
                        once(e, t, i) {
                            let s = this;
                            if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

                            function r(...i) {
                                s.off(e, r), r.__emitterProxy && delete r.__emitterProxy, t.apply(s, i)
                            }
                            return r.__emitterProxy = t, s.on(e, r, i)
                        },
                        onAny(e, t) {
                            return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                        },
                        offAny(e) {
                            if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                            let t = this.eventsAnyListeners.indexOf(e);
                            return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                        },
                        off(e, t) {
                            let i = this;
                            return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, r) => {
                                    (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                                })
                            }), i
                        },
                        emit(...e) {
                            let t, i, s;
                            let r = this;
                            if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
                            "string" == typeof e[0] || Array.isArray(e[0]) ? (t = e[0], i = e.slice(1, e.length), s = r) : (t = e[0].events, i = e[0].data, s = e[0].context || r), i.unshift(s);
                            let a = Array.isArray(t) ? t : t.split(" ");
                            return a.forEach(e => {
                                r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(t => {
                                    t.apply(s, [e, ...i])
                                }), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach(e => {
                                    e.apply(s, i)
                                })
                            }), r
                        }
                    },
                    update: {
                        updateSize: function() {
                            let e, t;
                            let i = this.$el;
                            e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                                width: e,
                                height: t,
                                size: this.isHorizontal() ? e : t
                            }))
                        },
                        updateSlides: function() {
                            let e;
                            let t = this;

                            function i(e) {
                                return t.isHorizontal() ? e : ({
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                })[e]
                            }

                            function s(e, t) {
                                return parseFloat(e.getPropertyValue(i(t)) || 0)
                            }
                            let r = t.params,
                                {
                                    $wrapperEl: a,
                                    size: n,
                                    rtlTranslate: l,
                                    wrongRTL: o
                                } = t,
                                d = t.virtual && r.virtual.enabled,
                                p = d ? t.virtual.slides.length : t.slides.length,
                                u = a.children(`.${t.params.slideClass}`),
                                c = d ? t.virtual.slides.length : u.length,
                                h = [],
                                f = [],
                                m = [],
                                g = r.slidesOffsetBefore;
                            "function" == typeof g && (g = r.slidesOffsetBefore.call(t));
                            let v = r.slidesOffsetAfter;
                            "function" == typeof v && (v = r.slidesOffsetAfter.call(t));
                            let b = t.snapGrid.length,
                                w = t.slidesGrid.length,
                                C = r.spaceBetween,
                                y = -g,
                                S = 0,
                                E = 0;
                            if (void 0 === n) return;
                            "string" == typeof C && C.indexOf("%") >= 0 && (C = parseFloat(C.replace("%", "")) / 100 * n), t.virtualSize = -C, l ? u.css({
                                marginLeft: "",
                                marginBottom: "",
                                marginTop: ""
                            }) : u.css({
                                marginRight: "",
                                marginBottom: "",
                                marginTop: ""
                            }), r.centeredSlides && r.cssMode && (T(t.wrapperEl, "--swiper-centered-offset-before", ""), T(t.wrapperEl, "--swiper-centered-offset-after", ""));
                            let x = r.grid && r.grid.rows > 1 && t.grid;
                            x && t.grid.initSlides(c);
                            let M = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter(e => void 0 !== r.breakpoints[e].slidesPerView).length > 0;
                            for (let k = 0; k < c; k += 1) {
                                e = 0;
                                let P = u.eq(k);
                                if (x && t.grid.updateSlide(k, P, c, i), "none" !== P.css("display")) {
                                    if ("auto" === r.slidesPerView) {
                                        M && (u[k].style[i("width")] = "");
                                        let $ = getComputedStyle(P[0]),
                                            O = P[0].style.transform,
                                            L = P[0].style.webkitTransform;
                                        if (O && (P[0].style.transform = "none"), L && (P[0].style.webkitTransform = "none"), r.roundLengths) e = t.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                                        else {
                                            let _ = s($, "width"),
                                                A = s($, "padding-left"),
                                                z = s($, "padding-right"),
                                                I = s($, "margin-left"),
                                                D = s($, "margin-right"),
                                                N = $.getPropertyValue("box-sizing");
                                            if (N && "border-box" === N) e = _ + I + D;
                                            else {
                                                let {
                                                    clientWidth: B,
                                                    offsetWidth: G
                                                } = P[0];
                                                e = _ + A + z + I + D + (G - B)
                                            }
                                        }
                                        O && (P[0].style.transform = O), L && (P[0].style.webkitTransform = L), r.roundLengths && (e = Math.floor(e))
                                    } else e = (n - (r.slidesPerView - 1) * C) / r.slidesPerView, r.roundLengths && (e = Math.floor(e)), u[k] && (u[k].style[i("width")] = `${e}px`);
                                    u[k] && (u[k].swiperSlideSize = e), m.push(e), r.centeredSlides ? (y = y + e / 2 + S / 2 + C, 0 === S && 0 !== k && (y = y - n / 2 - C), 0 === k && (y = y - n / 2 - C), .001 > Math.abs(y) && (y = 0), r.roundLengths && (y = Math.floor(y)), E % r.slidesPerGroup == 0 && h.push(y), f.push(y)) : (r.roundLengths && (y = Math.floor(y)), (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup == 0 && h.push(y), f.push(y), y = y + e + C), t.virtualSize += e + C, S = e, E += 1
                                }
                            }
                            if (t.virtualSize = Math.max(t.virtualSize, n) + v, l && o && ("slide" === r.effect || "coverflow" === r.effect) && a.css({
                                    width: `${t.virtualSize+r.spaceBetween}px`
                                }), r.setWrapperSize && a.css({
                                    [i("width")]: `${t.virtualSize+r.spaceBetween}px`
                                }), x && t.grid.updateWrapperSize(e, h, i), !r.centeredSlides) {
                                let j = [];
                                for (let F = 0; F < h.length; F += 1) {
                                    let H = h[F];
                                    r.roundLengths && (H = Math.floor(H)), h[F] <= t.virtualSize - n && j.push(H)
                                }
                                h = j, Math.floor(t.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 && h.push(t.virtualSize - n)
                            }
                            if (0 === h.length && (h = [0]), 0 !== r.spaceBetween) {
                                let R = t.isHorizontal() && l ? "marginLeft" : i("marginRight");
                                u.filter((e, t) => !r.cssMode || t !== u.length - 1).css({
                                    [R]: `${C}px`
                                })
                            }
                            if (r.centeredSlides && r.centeredSlidesBounds) {
                                let V = 0;
                                m.forEach(e => {
                                    V += e + (r.spaceBetween ? r.spaceBetween : 0)
                                }), V -= r.spaceBetween;
                                let q = V - n;
                                h = h.map(e => e < 0 ? -g : e > q ? q + v : e)
                            }
                            if (r.centerInsufficientSlides) {
                                let W = 0;
                                if (m.forEach(e => {
                                        W += e + (r.spaceBetween ? r.spaceBetween : 0)
                                    }), (W -= r.spaceBetween) < n) {
                                    let X = (n - W) / 2;
                                    h.forEach((e, t) => {
                                        h[t] = e - X
                                    }), f.forEach((e, t) => {
                                        f[t] = e + X
                                    })
                                }
                            }
                            if (Object.assign(t, {
                                    slides: u,
                                    snapGrid: h,
                                    slidesGrid: f,
                                    slidesSizesGrid: m
                                }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
                                T(t.wrapperEl, "--swiper-centered-offset-before", `${-h[0]}px`), T(t.wrapperEl, "--swiper-centered-offset-after", `${t.size/2-m[m.length-1]/2}px`);
                                let Y = -t.snapGrid[0],
                                    U = -t.slidesGrid[0];
                                t.snapGrid = t.snapGrid.map(e => e + Y), t.slidesGrid = t.slidesGrid.map(e => e + U)
                            }
                            if (c !== p && t.emit("slidesLengthChange"), h.length !== b && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), f.length !== w && t.emit("slidesGridLengthChange"), r.watchSlidesProgress && t.updateSlidesOffset(), !d && !r.cssMode && ("slide" === r.effect || "fade" === r.effect)) {
                                let Z = `${r.containerModifierClass}backface-hidden`,
                                    K = t.$el.hasClass(Z);
                                c <= r.maxBackfaceHiddenSlides ? K || t.$el.addClass(Z) : K && t.$el.removeClass(Z)
                            }
                        },
                        updateAutoHeight: function(e) {
                            let t;
                            let i = this,
                                s = [],
                                r = i.virtual && i.params.virtual.enabled,
                                a = 0;
                            "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                            let n = e => r ? i.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : i.slides.eq(e)[0];
                            if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1) {
                                if (i.params.centeredSlides)(i.visibleSlides || m([])).each(e => {
                                    s.push(e)
                                });
                                else
                                    for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                        let l = i.activeIndex + t;
                                        if (l > i.slides.length && !r) break;
                                        s.push(n(l))
                                    }
                            } else s.push(n(i.activeIndex));
                            for (t = 0; t < s.length; t += 1)
                                if (void 0 !== s[t]) {
                                    let o = s[t].offsetHeight;
                                    a = o > a ? o : a
                                }(a || 0 === a) && i.$wrapperEl.css("height", `${a}px`)
                        },
                        updateSlidesOffset: function() {
                            let e = this.slides;
                            for (let t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                        },
                        updateSlidesProgress: function(e = this && this.translate || 0) {
                            let t = this,
                                i = t.params,
                                {
                                    slides: s,
                                    rtlTranslate: r,
                                    snapGrid: a
                                } = t;
                            if (0 === s.length) return;
                            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
                            let n = -e;
                            r && (n = e), s.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                            for (let l = 0; l < s.length; l += 1) {
                                let o = s[l],
                                    d = o.swiperSlideOffset;
                                i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
                                let p = (n + (i.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + i.spaceBetween),
                                    u = (n - a[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) / (o.swiperSlideSize + i.spaceBetween),
                                    c = -(n - d),
                                    h = c + t.slidesSizesGrid[l],
                                    f = c >= 0 && c < t.size - 1 || h > 1 && h <= t.size || c <= 0 && h >= t.size;
                                f && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(l), s.eq(l).addClass(i.slideVisibleClass)), o.progress = r ? -p : p, o.originalProgress = r ? -u : u
                            }
                            t.visibleSlides = m(t.visibleSlides)
                        },
                        updateProgress: function(e) {
                            if (void 0 === e) {
                                let t = this.rtlTranslate ? -1 : 1;
                                e = this && this.translate && this.translate * t || 0
                            }
                            let i = this.params,
                                s = this.maxTranslate() - this.minTranslate(),
                                {
                                    progress: r,
                                    isBeginning: a,
                                    isEnd: n
                                } = this,
                                l = a,
                                o = n;
                            0 === s ? (r = 0, a = !0, n = !0) : (a = (r = (e - this.minTranslate()) / s) <= 0, n = r >= 1), Object.assign(this, {
                                progress: r,
                                isBeginning: a,
                                isEnd: n
                            }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), a && !l && this.emit("reachBeginning toEdge"), n && !o && this.emit("reachEnd toEdge"), (l && !a || o && !n) && this.emit("fromEdge"), this.emit("progress", r)
                        },
                        updateSlidesClasses: function() {
                            let e;
                            let {
                                slides: t,
                                params: i,
                                $wrapperEl: s,
                                activeIndex: r,
                                realIndex: a
                            } = this, n = this.virtual && i.virtual.enabled;
                            t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`), (e = n ? this.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${r}"]`) : t.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(i.slideDuplicateActiveClass));
                            let l = e.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
                            i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
                            let o = e.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
                            i.loop && 0 === o.length && (o = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass), o.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)), this.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            let t;
                            let i = this,
                                s = i.rtlTranslate ? i.translate : -i.translate,
                                {
                                    slidesGrid: r,
                                    snapGrid: a,
                                    params: n,
                                    activeIndex: l,
                                    realIndex: o,
                                    snapIndex: d
                                } = i,
                                p = e;
                            if (void 0 === p) {
                                for (let u = 0; u < r.length; u += 1) void 0 !== r[u + 1] ? s >= r[u] && s < r[u + 1] - (r[u + 1] - r[u]) / 2 ? p = u : s >= r[u] && s < r[u + 1] && (p = u + 1) : s >= r[u] && (p = u);
                                n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
                            }
                            if (a.indexOf(s) >= 0) t = a.indexOf(s);
                            else {
                                let c = Math.min(n.slidesPerGroupSkip, p);
                                t = c + Math.floor((p - c) / n.slidesPerGroup)
                            }
                            if (t >= a.length && (t = a.length - 1), p === l) {
                                t !== d && (i.snapIndex = t, i.emit("snapIndexChange"));
                                return
                            }
                            let h = parseInt(i.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                            Object.assign(i, {
                                snapIndex: t,
                                realIndex: h,
                                previousIndex: l,
                                activeIndex: p
                            }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), o !== h && i.emit("realIndexChange"), (i.initialized || i.params.runCallbacksOnInit) && i.emit("slideChange")
                        },
                        updateClickedSlide: function(e) {
                            let t;
                            let i = this,
                                s = i.params,
                                r = m(e).closest(`.${s.slideClass}`)[0],
                                a = !1;
                            if (r) {
                                for (let n = 0; n < i.slides.length; n += 1)
                                    if (i.slides[n] === r) {
                                        a = !0, t = n;
                                        break
                                    }
                            }
                            if (r && a) i.clickedSlide = r, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(m(r).attr("data-swiper-slide-index"), 10) : i.clickedIndex = t;
                            else {
                                i.clickedSlide = void 0, i.clickedIndex = void 0;
                                return
                            }
                            s.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
                            let {
                                params: t,
                                rtlTranslate: i,
                                translate: s,
                                $wrapperEl: r
                            } = this;
                            if (t.virtualTranslate) return i ? -s : s;
                            if (t.cssMode) return s;
                            let a = function(e, t = "x") {
                                let i, s, r;
                                let a = u(),
                                    n = function(e) {
                                        let t;
                                        let i = u();
                                        return i.getComputedStyle && (t = i.getComputedStyle(e, null)), !t && e.currentStyle && (t = e.currentStyle), t || (t = e.style), t
                                    }(e, null);
                                return a.WebKitCSSMatrix ? ((s = n.transform || n.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), r = new a.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = a.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = a.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
                            }(r[0], e);
                            return i && (a = -a), a || 0
                        },
                        setTranslate: function(e, t) {
                            let i = this,
                                {
                                    rtlTranslate: s,
                                    params: r,
                                    $wrapperEl: a,
                                    wrapperEl: n,
                                    progress: l
                                } = i,
                                o = 0,
                                d = 0;
                            i.isHorizontal() ? o = s ? -e : e : d = e, r.roundLengths && (o = Math.floor(o), d = Math.floor(d)), r.cssMode ? n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -d : r.virtualTranslate || a.transform(`translate3d(${o}px, ${d}px, 0px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : d;
                            let p = i.maxTranslate() - i.minTranslate();
                            (0 === p ? 0 : (e - i.minTranslate()) / p) !== l && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e = 0, t = this.params.speed, i = !0, s = !0, r) {
                            let a;
                            let n = this,
                                {
                                    params: l,
                                    wrapperEl: o
                                } = n;
                            if (n.animating && l.preventInteractionOnTransition) return !1;
                            let d = n.minTranslate(),
                                p = n.maxTranslate();
                            if (a = s && e > d ? d : s && e < p ? p : e, n.updateProgress(a), l.cssMode) {
                                let u = n.isHorizontal();
                                if (0 === t) o[u ? "scrollLeft" : "scrollTop"] = -a;
                                else {
                                    if (!n.support.smoothScroll) return E({
                                        swiper: n,
                                        targetPosition: -a,
                                        side: u ? "left" : "top"
                                    }), !0;
                                    o.scrollTo({
                                        [u ? "left" : "top"]: -a,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (n.setTransition(0), n.setTranslate(a), i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(a), i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
                            }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                        },
                        transitionStart: function(e = !0, t) {
                            let {
                                params: i
                            } = this;
                            i.cssMode || (i.autoHeight && this.updateAutoHeight(), M({
                                swiper: this,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e = !0, t) {
                            let i = this,
                                {
                                    params: s
                                } = i;
                            i.animating = !1, s.cssMode || (i.setTransition(0), M({
                                swiper: i,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e = 0, t = this.params.speed, i = !0, s, r) {
                            let a;
                            if ("number" != typeof e && "string" != typeof e) throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                            if ("string" == typeof e) {
                                let n = parseInt(e, 10),
                                    l = isFinite(n);
                                if (!l) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                                e = n
                            }
                            let o = this,
                                d = e;
                            d < 0 && (d = 0);
                            let {
                                params: p,
                                snapGrid: u,
                                slidesGrid: c,
                                previousIndex: h,
                                activeIndex: f,
                                rtlTranslate: m,
                                wrapperEl: g,
                                enabled: v
                            } = o;
                            if (o.animating && p.preventInteractionOnTransition || !v && !s && !r) return !1;
                            let b = Math.min(o.params.slidesPerGroupSkip, d),
                                w = b + Math.floor((d - b) / o.params.slidesPerGroup);
                            w >= u.length && (w = u.length - 1);
                            let C = -u[w];
                            if (p.normalizeSlideIndex)
                                for (let y = 0; y < c.length; y += 1) {
                                    let S = -Math.floor(100 * C),
                                        T = Math.floor(100 * c[y]),
                                        x = Math.floor(100 * c[y + 1]);
                                    void 0 !== c[y + 1] ? S >= T && S < x - (x - T) / 2 ? d = y : S >= T && S < x && (d = y + 1) : S >= T && (d = y)
                                }
                            if (o.initialized && d !== f && (!o.allowSlideNext && C < o.translate && C < o.minTranslate() || !o.allowSlidePrev && C > o.translate && C > o.maxTranslate() && (f || 0) !== d)) return !1;
                            if (d !== (h || 0) && i && o.emit("beforeSlideChangeStart"), o.updateProgress(C), a = d > f ? "next" : d < f ? "prev" : "reset", m && -C === o.translate || !m && C === o.translate) return o.updateActiveIndex(d), p.autoHeight && o.updateAutoHeight(), o.updateSlidesClasses(), "slide" !== p.effect && o.setTranslate(C), "reset" !== a && (o.transitionStart(i, a), o.transitionEnd(i, a)), !1;
                            if (p.cssMode) {
                                let M = o.isHorizontal(),
                                    k = m ? C : -C;
                                if (0 === t) {
                                    let P = o.virtual && o.params.virtual.enabled;
                                    P && (o.wrapperEl.style.scrollSnapType = "none", o._immediateVirtual = !0), g[M ? "scrollLeft" : "scrollTop"] = k, P && requestAnimationFrame(() => {
                                        o.wrapperEl.style.scrollSnapType = "", o._swiperImmediateVirtual = !1
                                    })
                                } else {
                                    if (!o.support.smoothScroll) return E({
                                        swiper: o,
                                        targetPosition: k,
                                        side: M ? "left" : "top"
                                    }), !0;
                                    g.scrollTo({
                                        [M ? "left" : "top"]: k,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return o.setTransition(t), o.setTranslate(C), o.updateActiveIndex(d), o.updateSlidesClasses(), o.emit("beforeTransitionStart", t, s), o.transitionStart(i, a), 0 === t ? o.transitionEnd(i, a) : o.animating || (o.animating = !0, o.onSlideToWrapperTransitionEnd || (o.onSlideToWrapperTransitionEnd = function(e) {
                                o && !o.destroyed && e.target === this && (o.$wrapperEl[0].removeEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].removeEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd), o.onSlideToWrapperTransitionEnd = null, delete o.onSlideToWrapperTransitionEnd, o.transitionEnd(i, a))
                            }), o.$wrapperEl[0].addEventListener("transitionend", o.onSlideToWrapperTransitionEnd), o.$wrapperEl[0].addEventListener("webkitTransitionEnd", o.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e = 0, t = this.params.speed, i = !0, s) {
                            if ("string" == typeof e) {
                                let r = parseInt(e, 10),
                                    a = isFinite(r);
                                if (!a) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                                e = r
                            }
                            let n = e;
                            return this.params.loop && (n += this.loopedSlides), this.slideTo(n, t, i, s)
                        },
                        slideNext: function(e = this.params.speed, t = !0, i) {
                            let s = this,
                                {
                                    animating: r,
                                    enabled: a,
                                    params: n
                                } = s;
                            if (!a) return s;
                            let l = n.slidesPerGroup;
                            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                            let o = s.activeIndex < n.slidesPerGroupSkip ? 1 : l;
                            if (n.loop) {
                                if (r && n.loopPreventsSlide) return !1;
                                s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                            }
                            return n.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                        },
                        slidePrev: function(e = this.params.speed, t = !0, i) {
                            let s = this,
                                {
                                    params: r,
                                    animating: a,
                                    snapGrid: n,
                                    slidesGrid: l,
                                    rtlTranslate: o,
                                    enabled: d
                                } = s;
                            if (!d) return s;
                            if (r.loop) {
                                if (a && r.loopPreventsSlide) return !1;
                                s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
                            }
                            let p = o ? s.translate : -s.translate;

                            function u(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            let c = u(p),
                                h = n.map(e => u(e)),
                                f = n[h.indexOf(c) - 1];
                            if (void 0 === f && r.cssMode) {
                                let m;
                                n.forEach((e, t) => {
                                    c >= e && (m = t)
                                }), void 0 !== m && (f = n[m > 0 ? m - 1 : m])
                            }
                            let g = 0;
                            if (void 0 !== f && ((g = l.indexOf(f)) < 0 && (g = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (g = Math.max(g = g - s.slidesPerViewDynamic("previous", !0) + 1, 0))), r.rewind && s.isBeginning) {
                                let v = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                                return s.slideTo(v, e, t, i)
                            }
                            return s.slideTo(g, e, t, i)
                        },
                        slideReset: function(e = this.params.speed, t = !0, i) {
                            return this.slideTo(this.activeIndex, e, t, i)
                        },
                        slideToClosest: function(e = this.params.speed, t = !0, i, s = .5) {
                            let r = this.activeIndex,
                                a = Math.min(this.params.slidesPerGroupSkip, r),
                                n = a + Math.floor((r - a) / this.params.slidesPerGroup),
                                l = this.rtlTranslate ? this.translate : -this.translate;
                            if (l >= this.snapGrid[n]) {
                                let o = this.snapGrid[n],
                                    d = this.snapGrid[n + 1];
                                l - o > (d - o) * s && (r += this.params.slidesPerGroup)
                            } else {
                                let p = this.snapGrid[n - 1],
                                    u = this.snapGrid[n];
                                l - p <= (u - p) * s && (r -= this.params.slidesPerGroup)
                            }
                            return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1), this.slideTo(r, e, t, i)
                        },
                        slideToClickedSlide: function() {
                            let e;
                            let t = this,
                                {
                                    params: i,
                                    $wrapperEl: s
                                } = t,
                                r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                                a = t.clickedIndex;
                            if (i.loop) {
                                if (t.animating) return;
                                e = parseInt(m(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = s.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`).eq(0).index(), w(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = s.children(`.${i.slideClass}[data-swiper-slide-index="${e}"]:not(.${i.slideDuplicateClass})`).eq(0).index(), w(() => {
                                    t.slideTo(a)
                                })) : t.slideTo(a)
                            } else t.slideTo(a)
                        }
                    },
                    loop: {
                        loopCreate: function() {
                            let e = this,
                                t = d(),
                                {
                                    params: i,
                                    $wrapperEl: s
                                } = e,
                                r = s.children().length > 0 ? m(s.children()[0].parentNode) : s;
                            r.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
                            let a = r.children(`.${i.slideClass}`);
                            if (i.loopFillGroupWithBlank) {
                                let n = i.slidesPerGroup - a.length % i.slidesPerGroup;
                                if (n !== i.slidesPerGroup) {
                                    for (let l = 0; l < n; l += 1) {
                                        let o = m(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                                        r.append(o)
                                    }
                                    a = r.children(`.${i.slideClass}`)
                                }
                            }
                            "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = a.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > a.length && e.params.loopedSlidesLimit && (e.loopedSlides = a.length);
                            let p = [],
                                u = [];
                            a.each((e, t) => {
                                let i = m(e);
                                i.attr("data-swiper-slide-index", t)
                            });
                            for (let c = 0; c < e.loopedSlides; c += 1) {
                                let h = c - Math.floor(c / a.length) * a.length;
                                u.push(a.eq(h)[0]), p.unshift(a.eq(a.length - h - 1)[0])
                            }
                            for (let f = 0; f < u.length; f += 1) r.append(m(u[f].cloneNode(!0)).addClass(i.slideDuplicateClass));
                            for (let g = p.length - 1; g >= 0; g -= 1) r.prepend(m(p[g].cloneNode(!0)).addClass(i.slideDuplicateClass))
                        },
                        loopFix: function() {
                            let e;
                            let t = this;
                            t.emit("beforeLoopFix");
                            let {
                                activeIndex: i,
                                slides: s,
                                loopedSlides: r,
                                allowSlidePrev: a,
                                allowSlideNext: n,
                                snapGrid: l,
                                rtlTranslate: o
                            } = t;
                            t.allowSlidePrev = !0, t.allowSlideNext = !0;
                            let d = -l[i],
                                p = d - t.getTranslate();
                            if (i < r) {
                                e = s.length - 3 * r + i + r;
                                let u = t.slideTo(e, 0, !1, !0);
                                u && 0 !== p && t.setTranslate((o ? -t.translate : t.translate) - p)
                            } else if (i >= s.length - r) {
                                e = -s.length + i + r + r;
                                let c = t.slideTo(e, 0, !1, !0);
                                c && 0 !== p && t.setTranslate((o ? -t.translate : t.translate) - p)
                            }
                            t.allowSlidePrev = a, t.allowSlideNext = n, t.emit("loopFix")
                        },
                        loopDestroy: function() {
                            let {
                                $wrapperEl: e,
                                params: t,
                                slides: i
                            } = this;
                            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
                            let t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                            t.style.cursor = "move", t.style.cursor = e ? "grabbing" : "grab"
                        },
                        unsetGrabCursor: function() {
                            let e = this;
                            e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                        }
                    },
                    events: {
                        attachEvents: function() {
                            let e = this,
                                t = d(),
                                {
                                    params: i,
                                    support: s
                                } = e;
                            e.onTouchStart = k.bind(e), e.onTouchMove = P.bind(e), e.onTouchEnd = $.bind(e), i.cssMode && (e.onScroll = _.bind(e)), e.onClick = L.bind(e), s.touch && !A && (t.addEventListener("touchstart", z), A = !0), I(e, "on")
                        },
                        detachEvents: function() {
                            I(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            let e = this,
                                {
                                    activeIndex: t,
                                    initialized: i,
                                    loopedSlides: s = 0,
                                    params: r,
                                    $el: a
                                } = e,
                                n = r.breakpoints;
                            if (!n || n && 0 === Object.keys(n).length) return;
                            let l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                            if (!l || e.currentBreakpoint === l) return;
                            let o = l in n ? n[l] : void 0,
                                d = o || e.originalParams,
                                p = D(e, r),
                                u = D(e, d),
                                c = r.enabled;
                            p && !u ? (a.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`), e.emitContainerClasses()) : !p && u && (a.addClass(`${r.containerModifierClass}grid`), (d.grid.fill && "column" === d.grid.fill || !d.grid.fill && "column" === r.grid.fill) && a.addClass(`${r.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                                let i = r[t] && r[t].enabled,
                                    s = d[t] && d[t].enabled;
                                i && !s && e[t].disable(), !i && s && e[t].enable()
                            });
                            let h = d.direction && d.direction !== r.direction,
                                f = r.loop && (d.slidesPerView !== r.slidesPerView || h);
                            h && i && e.changeDirection(), S(e.params, d);
                            let m = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), c && !m ? e.disable() : !c && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", d), f && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", d)
                        },
                        getBreakpoint: function(e, t = "window", i) {
                            if (!e || "container" === t && !i) return;
                            let s = !1,
                                r = u(),
                                a = "window" === t ? r.innerHeight : i.clientHeight,
                                n = Object.keys(e).map(e => {
                                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                                        let t = parseFloat(e.substr(1));
                                        return {
                                            value: a * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                });
                            n.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                            for (let l = 0; l < n.length; l += 1) {
                                let {
                                    point: o,
                                    value: d
                                } = n[l];
                                "window" === t ? r.matchMedia(`(min-width: ${d}px)`).matches && (s = o) : d <= i.clientWidth && (s = o)
                            }
                            return s || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            let e = this,
                                {
                                    isLocked: t,
                                    params: i
                                } = e,
                                {
                                    slidesOffsetBefore: s
                                } = i;
                            if (s) {
                                let r = e.slides.length - 1,
                                    a = e.slidesGrid[r] + e.slidesSizesGrid[r] + 2 * s;
                                e.isLocked = e.size > a
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            let {
                                classNames: e,
                                params: t,
                                rtl: i,
                                $el: s,
                                device: r,
                                support: a
                            } = this, n = function(e, t) {
                                let i = [];
                                return e.forEach(e => {
                                    "object" == typeof e ? Object.keys(e).forEach(s => {
                                        e[s] && i.push(t + s)
                                    }) : "string" == typeof e && i.push(t + e)
                                }), i
                            }(["initialized", t.direction, {
                                "pointer-events": !a.touch
                            }, {
                                "free-mode": this.params.freeMode && t.freeMode.enabled
                            }, {
                                autoheight: t.autoHeight
                            }, {
                                rtl: i
                            }, {
                                grid: t.grid && t.grid.rows > 1
                            }, {
                                "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                            }, {
                                android: r.android
                            }, {
                                ios: r.ios
                            }, {
                                "css-mode": t.cssMode
                            }, {
                                centered: t.cssMode && t.centeredSlides
                            }, {
                                "watch-progress": t.watchSlidesProgress
                            }], t.containerModifierClass);
                            e.push(...n), s.addClass([...e].join(" ")), this.emitContainerClasses()
                        },
                        removeClasses: function() {
                            let {
                                $el: e,
                                classNames: t
                            } = this;
                            e.removeClass(t.join(" ")), this.emitContainerClasses()
                        }
                    },
                    images: {
                        loadImage: function(e, t, i, s, r, a) {
                            let n;
                            let l = u();

                            function o() {
                                a && a()
                            }
                            let d = m(e).parent("picture")[0];
                            d || e.complete && r ? o() : t ? ((n = new l.Image).onload = o, n.onerror = o, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : o()
                        },
                        preloadImages: function() {
                            let e = this;

                            function t() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                                let s = e.imagesToLoad[i];
                                e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                G = {};
            class j {
                constructor(...e) {
                    let t, i;
                    if (1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? i = e[0] : [t, i] = e, i || (i = {}), i = S({}, i), t && !i.el && (i.el = t), i.el && m(i.el).length > 1) {
                        let s = [];
                        return m(i.el).each(e => {
                            let t = S({}, i, {
                                el: e
                            });
                            s.push(new j(t))
                        }), s
                    }
                    let n = this;
                    n.__swiper__ = !0, n.support = x(), n.device = function(e = {}) {
                        return r || (r = function({
                            userAgent: e
                        } = {}) {
                            let t = x(),
                                i = u(),
                                s = i.navigator.platform,
                                r = e || i.navigator.userAgent,
                                a = {
                                    ios: !1,
                                    android: !1
                                },
                                n = i.screen.width,
                                l = i.screen.height,
                                o = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                                d = r.match(/(iPad).*OS\s([\d_]+)/),
                                p = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                                c = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                                h = "MacIntel" === s;
                            return !d && h && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${n}x${l}`) >= 0 && ((d = r.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), h = !1), o && "Win32" !== s && (a.os = "android", a.android = !0), (d || c || p) && (a.os = "ios", a.ios = !0), a
                        }(e)), r
                    }({
                        userAgent: i.userAgent
                    }), n.browser = (a || (a = function() {
                        let e = u();
                        return {
                            isSafari: function() {
                                let t = e.navigator.userAgent.toLowerCase();
                                return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                            }(),
                            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                        }
                    }()), a), n.eventsListeners = {}, n.eventsAnyListeners = [], n.modules = [...n.__modules__], i.modules && Array.isArray(i.modules) && n.modules.push(...i.modules);
                    let l = {};
                    n.modules.forEach(e => {
                        var t;
                        e({
                            swiper: n,
                            extendParams: (t = i, function(e = {}) {
                                let i = Object.keys(e)[0],
                                    s = e[i];
                                if ("object" != typeof s || null === s || (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === t[i] && (t[i] = {
                                        auto: !0
                                    }), !(i in t && "enabled" in s))) {
                                    S(l, e);
                                    return
                                }!0 === t[i] && (t[i] = {
                                    enabled: !0
                                }), "object" != typeof t[i] || "enabled" in t[i] || (t[i].enabled = !0), t[i] || (t[i] = {
                                    enabled: !1
                                }), S(l, e)
                            }),
                            on: n.on.bind(n),
                            once: n.once.bind(n),
                            off: n.off.bind(n),
                            emit: n.emit.bind(n)
                        })
                    });
                    let o = S({}, N, l);
                    return n.params = S({}, o, G, i), n.originalParams = S({}, n.params), n.passedParams = S({}, i), n.params && n.params.on && Object.keys(n.params.on).forEach(e => {
                        n.on(e, n.params.on[e])
                    }), n.params && n.params.onAny && n.onAny(n.params.onAny), n.$ = m, Object.assign(n, {
                        enabled: n.params.enabled,
                        el: t,
                        classNames: [],
                        slides: m(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === n.params.direction,
                        isVertical: () => "vertical" === n.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: n.params.allowSlideNext,
                        allowSlidePrev: n.params.allowSlidePrev,
                        touchEvents: (n.touchEventsTouch = {
                            start: "touchstart",
                            move: "touchmove",
                            end: "touchend",
                            cancel: "touchcancel"
                        }, n.touchEventsDesktop = {
                            start: "pointerdown",
                            move: "pointermove",
                            end: "pointerup"
                        }, n.support.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: n.params.focusableElements,
                            lastClickTime: C(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: n.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), n.emit("_swiper"), n.params.init && n.init(), n
                }
                enable() {
                    let e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    let e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    e = Math.min(Math.max(e, 0), 1);
                    let i = this.minTranslate(),
                        s = this.maxTranslate(),
                        r = (s - i) * e + i;
                    this.translateTo(r, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
                }
                emitContainerClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    let t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
                }
                emitSlidesClasses() {
                    let e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    let t = [];
                    e.slides.each(i => {
                        let s = e.getSlideClasses(i);
                        t.push({
                            slideEl: i,
                            classNames: s
                        }), e.emit("_slideClass", i, s)
                    }), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e = "current", t = !1) {
                    let {
                        params: i,
                        slides: s,
                        slidesGrid: r,
                        slidesSizesGrid: a,
                        size: n,
                        activeIndex: l
                    } = this, o = 1;
                    if (i.centeredSlides) {
                        let d, p = s[l].swiperSlideSize;
                        for (let u = l + 1; u < s.length; u += 1) s[u] && !d && (p += s[u].swiperSlideSize, o += 1, p > n && (d = !0));
                        for (let c = l - 1; c >= 0; c -= 1) s[c] && !d && (p += s[c].swiperSlideSize, o += 1, p > n && (d = !0))
                    } else if ("current" === e)
                        for (let h = l + 1; h < s.length; h += 1) {
                            let f = t ? r[h] + a[h] - r[l] < n : r[h] - r[l] < n;
                            f && (o += 1)
                        } else
                            for (let m = l - 1; m >= 0; m -= 1) {
                                let g = r[l] - r[m] < n;
                                g && (o += 1)
                            }
                    return o
                }
                update() {
                    let e = this;
                    if (!e || e.destroyed) return;
                    let {
                        snapGrid: t,
                        params: i
                    } = e;

                    function s() {
                        let t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t = !0) {
                    let i = this,
                        s = i.params.direction;
                    return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass(`${i.params.containerModifierClass}${s}`).addClass(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.each(t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    }), i.emit("changeDirection"), t && i.update()), i
                }
                changeLanguageDirection(e) {
                    let t = this;
                    (!t.rtl || "rtl" !== e) && (t.rtl || "ltr" !== e) && (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    let t = this;
                    if (t.mounted) return !0;
                    let i = m(e || t.params.el);
                    if (!(e = i[0])) return !1;
                    e.swiper = t;
                    let s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                        r = (() => {
                            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                                let t = m(e.shadowRoot.querySelector(s()));
                                return t.children = e => i.children(e), t
                            }
                            return i.children ? i.children(s()) : m(i).children(s())
                        })();
                    if (0 === r.length && t.params.createElements) {
                        let a = d(),
                            n = a.createElement("div");
                        r = m(n), n.className = t.params.wrapperClass, i.append(n), i.children(`.${t.params.slideClass}`).each(e => {
                            r.append(e)
                        })
                    }
                    return Object.assign(t, {
                        $el: i,
                        el: e,
                        $wrapperEl: r,
                        wrapperEl: r[0],
                        mounted: !0,
                        rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                        wrongRTL: "-webkit-box" === r.css("display")
                    }), !0
                }
                init(e) {
                    let t = this;
                    if (t.initialized) return t;
                    let i = t.mount(e);
                    return !1 === i || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e = !0, t = !0) {
                    let i = this,
                        {
                            params: s,
                            $el: r,
                            $wrapperEl: a,
                            slides: n
                        } = i;
                    return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                        i.off(e)
                    }), !1 !== e && (i.$el[0].swiper = null, function(e) {
                        let t = e;
                        Object.keys(t).forEach(e => {
                            try {
                                t[e] = null
                            } catch (i) {}
                            try {
                                delete t[e]
                            } catch (s) {}
                        })
                    }(i)), i.destroyed = !0), null
                }
                static extendDefaults(e) {
                    S(G, e)
                }
                static get extendedDefaults() {
                    return G
                }
                static get defaults() {
                    return N
                }
                static installModule(e) {
                    j.prototype.__modules__ || (j.prototype.__modules__ = []);
                    let t = j.prototype.__modules__;
                    "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach(e => j.installModule(e)), j) : (j.installModule(e), j)
                }
            }
            Object.keys(B).forEach(e => {
                Object.keys(B[e]).forEach(t => {
                    j.prototype[t] = B[e][t]
                })
            }), j.use([function({
                swiper: e,
                on: t,
                emit: i
            }) {
                let s = u(),
                    r = null,
                    a = null,
                    n = () => {
                        e && !e.destroyed && e.initialized && (i("beforeResize"), i("resize"))
                    },
                    l = () => {
                        e && !e.destroyed && e.initialized && (r = new ResizeObserver(t => {
                            a = s.requestAnimationFrame(() => {
                                let {
                                    width: i,
                                    height: s
                                } = e, r = i, a = s;
                                t.forEach(({
                                    contentBoxSize: t,
                                    contentRect: i,
                                    target: s
                                }) => {
                                    s && s !== e.el || (r = i ? i.width : (t[0] || t).inlineSize, a = i ? i.height : (t[0] || t).blockSize)
                                }), (r !== i || a !== s) && n()
                            })
                        })).observe(e.el)
                    },
                    o = () => {
                        a && s.cancelAnimationFrame(a), r && r.unobserve && e.el && (r.unobserve(e.el), r = null)
                    },
                    d = () => {
                        e && !e.destroyed && e.initialized && i("orientationchange")
                    };
                t("init", () => {
                    if (e.params.resizeObserver && void 0 !== s.ResizeObserver) {
                        l();
                        return
                    }
                    s.addEventListener("resize", n), s.addEventListener("orientationchange", d)
                }), t("destroy", () => {
                    o(), s.removeEventListener("resize", n), s.removeEventListener("orientationchange", d)
                })
            }, function({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                let r = [],
                    a = u(),
                    n = (e, t = {}) => {
                        let i = a.MutationObserver || a.WebkitMutationObserver,
                            n = new i(e => {
                                if (1 === e.length) {
                                    s("observerUpdate", e[0]);
                                    return
                                }
                                let t = function() {
                                    s("observerUpdate", e[0])
                                };
                                a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0)
                            });
                        n.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData: void 0 === t.characterData || t.characterData
                        }), r.push(n)
                    },
                    l = () => {
                        if (e.params.observer) {
                            if (e.params.observeParents) {
                                let t = e.$el.parents();
                                for (let i = 0; i < t.length; i += 1) n(t[i])
                            }
                            n(e.$el[0], {
                                childList: e.params.observeSlideChildren
                            }), n(e.$wrapperEl[0], {
                                attributes: !1
                            })
                        }
                    },
                    o = () => {
                        r.forEach(e => {
                            e.disconnect()
                        }), r.splice(0, r.length)
                    };
                t({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), i("init", l), i("destroy", o)
            }]);
            var F = j;

            function H(e, t, i, s) {
                let r = d();
                return e.params.createElements && Object.keys(s).forEach(a => {
                    if (!i[a] && !0 === i.auto) {
                        let n = e.$el.children(`.${s[a]}`)[0];
                        n || ((n = r.createElement("div")).className = s[a], e.$el.append(n)), i[a] = n, t[a] = n
                    }
                }), i
            }

            function R({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                function r(t) {
                    let i;
                    return t && (i = m(t), e.params.uniqueNavElements && "string" == typeof t && i.length > 1 && 1 === e.$el.find(t).length && (i = e.$el.find(t))), i
                }

                function a(t, i) {
                    let s = e.params.navigation;
                    t && t.length > 0 && (t[i ? "addClass" : "removeClass"](s.disabledClass), t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = i), e.params.watchOverflow && e.enabled && t[e.isLocked ? "addClass" : "removeClass"](s.lockClass))
                }

                function n() {
                    if (e.params.loop) return;
                    let {
                        $nextEl: t,
                        $prevEl: i
                    } = e.navigation;
                    a(i, e.isBeginning && !e.params.rewind), a(t, e.isEnd && !e.params.rewind)
                }

                function l(t) {
                    t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), s("navigationPrev"))
                }

                function o(t) {
                    t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), s("navigationNext"))
                }

                function d() {
                    let t = e.params.navigation;
                    if (e.params.navigation = H(e, e.originalParams.navigation, e.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !(t.nextEl || t.prevEl)) return;
                    let i = r(t.nextEl),
                        s = r(t.prevEl);
                    i && i.length > 0 && i.on("click", o), s && s.length > 0 && s.on("click", l), Object.assign(e.navigation, {
                        $nextEl: i,
                        nextEl: i && i[0],
                        $prevEl: s,
                        prevEl: s && s[0]
                    }), !e.enabled && (i && i.addClass(t.lockClass), s && s.addClass(t.lockClass))
                }

                function p() {
                    let {
                        $nextEl: t,
                        $prevEl: i
                    } = e.navigation;
                    t && t.length && (t.off("click", o), t.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", l), i.removeClass(e.params.navigation.disabledClass))
                }
                t({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), e.navigation = {
                    nextEl: null,
                    $nextEl: null,
                    prevEl: null,
                    $prevEl: null
                }, i("init", () => {
                    !1 === e.params.navigation.enabled ? c() : (d(), n())
                }), i("toEdge fromEdge lock unlock", () => {
                    n()
                }), i("destroy", () => {
                    p()
                }), i("enable disable", () => {
                    let {
                        $nextEl: t,
                        $prevEl: i
                    } = e.navigation;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), i && i[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
                }), i("click", (t, i) => {
                    let {
                        $nextEl: r,
                        $prevEl: a
                    } = e.navigation, n = i.target;
                    if (e.params.navigation.hideOnClick && !m(n).is(a) && !m(n).is(r)) {
                        let l;
                        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === n || e.pagination.el.contains(n))) return;
                        r ? l = r.hasClass(e.params.navigation.hiddenClass) : a && (l = a.hasClass(e.params.navigation.hiddenClass)), !0 === l ? s("navigationShow") : s("navigationHide"), r && r.toggleClass(e.params.navigation.hiddenClass), a && a.toggleClass(e.params.navigation.hiddenClass)
                    }
                });
                let u = () => {
                        e.$el.removeClass(e.params.navigation.navigationDisabledClass), d(), n()
                    },
                    c = () => {
                        e.$el.addClass(e.params.navigation.navigationDisabledClass), p()
                    };
                Object.assign(e.navigation, {
                    enable: u,
                    disable: c,
                    update: n,
                    init: d,
                    destroy: p
                })
            }

            function V(e = "") {
                return `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
            }

            function q({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                let r;
                let a = "swiper-pagination";
                t({
                    pagination: {
                        el: null,
                        bulletElement: "span",
                        clickable: !1,
                        hideOnClick: !1,
                        renderBullet: null,
                        renderProgressbar: null,
                        renderFraction: null,
                        renderCustom: null,
                        progressbarOpposite: !1,
                        type: "bullets",
                        dynamicBullets: !1,
                        dynamicMainBullets: 1,
                        formatFractionCurrent: e => e,
                        formatFractionTotal: e => e,
                        bulletClass: `${a}-bullet`,
                        bulletActiveClass: `${a}-bullet-active`,
                        modifierClass: `${a}-`,
                        currentClass: `${a}-current`,
                        totalClass: `${a}-total`,
                        hiddenClass: `${a}-hidden`,
                        progressbarFillClass: `${a}-progressbar-fill`,
                        progressbarOppositeClass: `${a}-progressbar-opposite`,
                        clickableClass: `${a}-clickable`,
                        lockClass: `${a}-lock`,
                        horizontalClass: `${a}-horizontal`,
                        verticalClass: `${a}-vertical`,
                        paginationDisabledClass: `${a}-disabled`
                    }
                }), e.pagination = {
                    el: null,
                    $el: null,
                    bullets: []
                };
                let n = 0;

                function l() {
                    return !e.params.pagination.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length
                }

                function o(t, i) {
                    let {
                        bulletActiveClass: s
                    } = e.params.pagination;
                    t[i]().addClass(`${s}-${i}`)[i]().addClass(`${s}-${i}-${i}`)
                }

                function d() {
                    let t;
                    let i = e.rtl,
                        a = e.params.pagination;
                    if (l()) return;
                    let d = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        p = e.pagination.$el,
                        u = e.params.loop ? Math.ceil((d - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((t = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > d - 1 - 2 * e.loopedSlides && (t -= d - 2 * e.loopedSlides), t > u - 1 && (t -= u), t < 0 && "bullets" !== e.params.paginationType && (t = u + t)) : t = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === a.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                        let c, h, f;
                        let g = e.pagination.bullets;
                        if (a.dynamicBullets && (r = g.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), p.css(e.isHorizontal() ? "width" : "height", `${r*(a.dynamicMainBullets+4)}px`), a.dynamicMainBullets > 1 && void 0 !== e.previousIndex && ((n += t - (e.previousIndex - e.loopedSlides || 0)) > a.dynamicMainBullets - 1 ? n = a.dynamicMainBullets - 1 : n < 0 && (n = 0)), f = ((h = (c = Math.max(t - n, 0)) + (Math.min(g.length, a.dynamicMainBullets) - 1)) + c) / 2), g.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${a.bulletActiveClass}${e}`).join(" ")), p.length > 1) g.each(e => {
                            let i = m(e),
                                s = i.index();
                            s === t && i.addClass(a.bulletActiveClass), a.dynamicBullets && (s >= c && s <= h && i.addClass(`${a.bulletActiveClass}-main`), s === c && o(i, "prev"), s === h && o(i, "next"))
                        });
                        else {
                            let v = g.eq(t),
                                b = v.index();
                            if (v.addClass(a.bulletActiveClass), a.dynamicBullets) {
                                let w = g.eq(c),
                                    C = g.eq(h);
                                for (let y = c; y <= h; y += 1) g.eq(y).addClass(`${a.bulletActiveClass}-main`);
                                if (e.params.loop) {
                                    if (b >= g.length) {
                                        for (let S = a.dynamicMainBullets; S >= 0; S -= 1) g.eq(g.length - S).addClass(`${a.bulletActiveClass}-main`);
                                        g.eq(g.length - a.dynamicMainBullets - 1).addClass(`${a.bulletActiveClass}-prev`)
                                    } else o(w, "prev"), o(C, "next")
                                } else o(w, "prev"), o(C, "next")
                            }
                        }
                        if (a.dynamicBullets) {
                            let T = Math.min(g.length, a.dynamicMainBullets + 4);
                            g.css(e.isHorizontal() ? i ? "right" : "left" : "top", `${(r*T-r)/2-f*r}px`)
                        }
                    }
                    if ("fraction" === a.type && (p.find(V(a.currentClass)).text(a.formatFractionCurrent(t + 1)), p.find(V(a.totalClass)).text(a.formatFractionTotal(u))), "progressbar" === a.type) {
                        let E;
                        E = a.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        let x = (t + 1) / u,
                            M = 1,
                            k = 1;
                        "horizontal" === E ? M = x : k = x, p.find(V(a.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${M}) scaleY(${k})`).transition(e.params.speed)
                    }
                    "custom" === a.type && a.renderCustom ? (p.html(a.renderCustom(e, t + 1, u)), s("paginationRender", p[0])) : s("paginationUpdate", p[0]), e.params.watchOverflow && e.enabled && p[e.isLocked ? "addClass" : "removeClass"](a.lockClass)
                }

                function p() {
                    let t = e.params.pagination;
                    if (l()) return;
                    let i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        r = e.pagination.$el,
                        a = "";
                    if ("bullets" === t.type) {
                        let n = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && e.params.freeMode.enabled && !e.params.loop && n > i && (n = i);
                        for (let o = 0; o < n; o += 1) t.renderBullet ? a += t.renderBullet.call(e, o, t.bulletClass) : a += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                        r.html(a), e.pagination.bullets = r.find(V(t.bulletClass))
                    }
                    "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`, r.html(a)), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, r.html(a)), "custom" !== t.type && s("paginationRender", e.pagination.$el[0])
                }

                function u() {
                    e.params.pagination = H(e, e.originalParams.pagination, e.params.pagination, {
                        el: "swiper-pagination"
                    });
                    let t = e.params.pagination;
                    if (!t.el) return;
                    let i = m(t.el);
                    0 === i.length || (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && (i = e.$el.find(t.el)).length > 1 && (i = i.filter(t => m(t).parents(".swiper")[0] === e.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), i.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), "bullets" === t.type && t.dynamicBullets && (i.addClass(`${t.modifierClass}${t.type}-dynamic`), n = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", V(t.bulletClass), function(t) {
                        t.preventDefault();
                        let i = m(this).index() * e.params.slidesPerGroup;
                        e.params.loop && (i += e.loopedSlides), e.slideTo(i)
                    }), Object.assign(e.pagination, {
                        $el: i,
                        el: i[0]
                    }), e.enabled || i.addClass(t.lockClass))
                }

                function c() {
                    let t = e.params.pagination;
                    if (l()) return;
                    let i = e.pagination.$el;
                    i.removeClass(t.hiddenClass), i.removeClass(t.modifierClass + t.type), i.removeClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass), e.pagination.bullets && e.pagination.bullets.removeClass && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && i.off("click", V(t.bulletClass))
                }
                i("init", () => {
                    !1 === e.params.pagination.enabled ? f() : (u(), p(), d())
                }), i("activeIndexChange", () => {
                    e.params.loop ? d() : void 0 === e.snapIndex && d()
                }), i("snapIndexChange", () => {
                    e.params.loop || d()
                }), i("slidesLengthChange", () => {
                    e.params.loop && (p(), d())
                }), i("snapGridLengthChange", () => {
                    e.params.loop || (p(), d())
                }), i("destroy", () => {
                    c()
                }), i("enable disable", () => {
                    let {
                        $el: t
                    } = e.pagination;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
                }), i("lock unlock", () => {
                    d()
                }), i("click", (t, i) => {
                    let r = i.target,
                        {
                            $el: a
                        } = e.pagination;
                    if (e.params.pagination.el && e.params.pagination.hideOnClick && a && a.length > 0 && !m(r).hasClass(e.params.pagination.bulletClass)) {
                        if (e.navigation && (e.navigation.nextEl && r === e.navigation.nextEl || e.navigation.prevEl && r === e.navigation.prevEl)) return;
                        let n = a.hasClass(e.params.pagination.hiddenClass);
                        !0 === n ? s("paginationShow") : s("paginationHide"), a.toggleClass(e.params.pagination.hiddenClass)
                    }
                });
                let h = () => {
                        e.$el.removeClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass), u(), p(), d()
                    },
                    f = () => {
                        e.$el.addClass(e.params.pagination.paginationDisabledClass), e.pagination.$el && e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass), c()
                    };
                Object.assign(e.pagination, {
                    enable: h,
                    disable: f,
                    render: p,
                    update: d,
                    init: u,
                    destroy: c
                })
            }

            function W({
                swiper: e,
                extendParams: t,
                on: i,
                emit: s
            }) {
                let r;

                function a() {
                    if (!e.size) {
                        e.autoplay.running = !1, e.autoplay.paused = !1;
                        return
                    }
                    let t = e.slides.eq(e.activeIndex),
                        i = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(r), r = w(() => {
                        let t;
                        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), t = e.slidePrev(e.params.speed, !0, !0), s("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? l() : (t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), s("autoplay")) : (t = e.slidePrev(e.params.speed, !0, !0), s("autoplay")) : e.params.loop ? (e.loopFix(), t = e.slideNext(e.params.speed, !0, !0), s("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? l() : (t = e.slideTo(0, e.params.speed, !0, !0), s("autoplay")) : (t = e.slideNext(e.params.speed, !0, !0), s("autoplay")), e.params.cssMode && e.autoplay.running ? a() : !1 === t && a()
                    }, i)
                }

                function n() {
                    return void 0 === r && !e.autoplay.running && (e.autoplay.running = !0, s("autoplayStart"), a(), !0)
                }

                function l() {
                    return !!e.autoplay.running && void 0 !== r && (r && (clearTimeout(r), r = void 0), e.autoplay.running = !1, s("autoplayStop"), !0)
                }

                function o(t) {
                    e.autoplay.running && (e.autoplay.paused || (r && clearTimeout(r), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(t => {
                        e.$wrapperEl[0].addEventListener(t, u)
                    }) : (e.autoplay.paused = !1, a())))
                }

                function p() {
                    let t = d();
                    "hidden" === t.visibilityState && e.autoplay.running && o(), "visible" === t.visibilityState && e.autoplay.paused && (a(), e.autoplay.paused = !1)
                }

                function u(t) {
                    e && !e.destroyed && e.$wrapperEl && t.target === e.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(t => {
                        e.$wrapperEl[0].removeEventListener(t, u)
                    }), e.autoplay.paused = !1, e.autoplay.running ? a() : l())
                }

                function c() {
                    e.params.autoplay.disableOnInteraction ? l() : (s("autoplayPause"), o()), ["transitionend", "webkitTransitionEnd"].forEach(t => {
                        e.$wrapperEl[0].removeEventListener(t, u)
                    })
                }

                function h() {
                    e.params.autoplay.disableOnInteraction || (e.autoplay.paused = !1, s("autoplayResume"), a())
                }
                e.autoplay = {
                    running: !1,
                    paused: !1
                }, t({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                }), i("init", () => {
                    if (e.params.autoplay.enabled) {
                        n();
                        let t = d();
                        t.addEventListener("visibilitychange", p), e.params.autoplay.pauseOnMouseEnter && (e.$el.on("mouseenter", c), e.$el.on("mouseleave", h))
                    }
                }), i("beforeTransitionStart", (t, i, s) => {
                    e.autoplay.running && (s || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(i) : l())
                }), i("sliderFirstMove", () => {
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? l() : o())
                }), i("touchEnd", () => {
                    e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && a()
                }), i("destroy", () => {
                    e.$el.off("mouseenter", c), e.$el.off("mouseleave", h), e.autoplay.running && l();
                    let t = d();
                    t.removeEventListener("visibilitychange", p)
                }), Object.assign(e.autoplay, {
                    pause: o,
                    run: a,
                    start: n,
                    stop: l
                })
            }

            function X({
                swiper: e,
                extendParams: t,
                on: i
            }) {
                t({
                    thumbs: {
                        swiper: null,
                        multipleActiveThumbs: !0,
                        autoScrollOffset: 0,
                        slideThumbActiveClass: "swiper-slide-thumb-active",
                        thumbsContainerClass: "swiper-thumbs"
                    }
                });
                let s = !1,
                    r = !1;

                function a() {
                    let t;
                    let i = e.thumbs.swiper;
                    if (!i || i.destroyed) return;
                    let s = i.clickedIndex,
                        r = i.clickedSlide;
                    if (!(r && m(r).hasClass(e.params.thumbs.slideThumbActiveClass)) && null != s) {
                        if (t = i.params.loop ? parseInt(m(i.clickedSlide).attr("data-swiper-slide-index"), 10) : s, e.params.loop) {
                            let a = e.activeIndex;
                            e.slides.eq(a).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, a = e.activeIndex);
                            let n = e.slides.eq(a).prevAll(`[data-swiper-slide-index="${t}"]`).eq(0).index(),
                                l = e.slides.eq(a).nextAll(`[data-swiper-slide-index="${t}"]`).eq(0).index();
                            t = void 0 === n ? l : void 0 === l ? n : l - a < a - n ? l : n
                        }
                        e.slideTo(t)
                    }
                }

                function n() {
                    let {
                        thumbs: t
                    } = e.params;
                    if (s) return !1;
                    s = !0;
                    let i = e.constructor;
                    if (t.swiper instanceof i) e.thumbs.swiper = t.swiper, Object.assign(e.thumbs.swiper.originalParams, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), Object.assign(e.thumbs.swiper.params, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    });
                    else if (y(t.swiper)) {
                        let n = Object.assign({}, t.swiper);
                        Object.assign(n, {
                            watchSlidesProgress: !0,
                            slideToClickedSlide: !1
                        }), e.thumbs.swiper = new i(n), r = !0
                    }
                    return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", a), !0
                }

                function l(t) {
                    let i = e.thumbs.swiper;
                    if (!i || i.destroyed) return;
                    let s = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView,
                        r = 1,
                        a = e.params.thumbs.slideThumbActiveClass;
                    if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (r = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (r = 1), r = Math.floor(r), i.slides.removeClass(a), i.params.loop || i.params.virtual && i.params.virtual.enabled)
                        for (let n = 0; n < r; n += 1) i.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+n}"]`).addClass(a);
                    else
                        for (let l = 0; l < r; l += 1) i.slides.eq(e.realIndex + l).addClass(a);
                    let o = e.params.thumbs.autoScrollOffset,
                        d = o && !i.params.loop;
                    if (e.realIndex !== i.realIndex || d) {
                        let p, u, c = i.activeIndex;
                        if (i.params.loop) {
                            i.slides.eq(c).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, c = i.activeIndex);
                            let h = i.slides.eq(c).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),
                                f = i.slides.eq(c).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();
                            p = void 0 === h ? f : void 0 === f ? h : f - c == c - h ? i.params.slidesPerGroup > 1 ? f : c : f - c < c - h ? f : h, u = e.activeIndex > e.previousIndex ? "next" : "prev"
                        } else u = (p = e.realIndex) > e.previousIndex ? "next" : "prev";
                        d && (p += "next" === u ? o : -1 * o), i.visibleSlidesIndexes && 0 > i.visibleSlidesIndexes.indexOf(p) && (i.params.centeredSlides ? p = p > c ? p - Math.floor(s / 2) + 1 : p + Math.floor(s / 2) - 1 : p > c && i.params.slidesPerGroup, i.slideTo(p, t ? 0 : void 0))
                    }
                }
                e.thumbs = {
                    swiper: null
                }, i("beforeInit", () => {
                    let {
                        thumbs: t
                    } = e.params;
                    t && t.swiper && (n(), l(!0))
                }), i("slideChange update resize observerUpdate", () => {
                    l()
                }), i("setTransition", (t, i) => {
                    let s = e.thumbs.swiper;
                    s && !s.destroyed && s.setTransition(i)
                }), i("beforeDestroy", () => {
                    let t = e.thumbs.swiper;
                    t && !t.destroyed && r && t.destroy()
                }), Object.assign(e.thumbs, {
                    init: n,
                    update: l
                })
            }

            function Y({
                swiper: e,
                extendParams: t,
                emit: i,
                once: s
            }) {
                t({
                    freeMode: {
                        enabled: !1,
                        momentum: !0,
                        momentumRatio: 1,
                        momentumBounce: !0,
                        momentumBounceRatio: 1,
                        momentumVelocityRatio: 1,
                        sticky: !1,
                        minimumVelocity: .02
                    }
                }), Object.assign(e, {
                    freeMode: {
                        onTouchStart: function() {
                            let t = e.getTranslate();
                            e.setTranslate(t), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
                                currentPos: e.rtl ? e.translate : -e.translate
                            })
                        },
                        onTouchMove: function() {
                            let {
                                touchEventsData: t,
                                touches: i
                            } = e;
                            0 === t.velocities.length && t.velocities.push({
                                position: i[e.isHorizontal() ? "startX" : "startY"],
                                time: t.touchStartTime
                            }), t.velocities.push({
                                position: i[e.isHorizontal() ? "currentX" : "currentY"],
                                time: C()
                            })
                        },
                        onTouchEnd: function({
                            currentPos: t
                        }) {
                            let {
                                params: r,
                                $wrapperEl: a,
                                rtlTranslate: n,
                                snapGrid: l,
                                touchEventsData: o
                            } = e, d = C(), p = d - o.touchStartTime;
                            if (t < -e.minTranslate()) {
                                e.slideTo(e.activeIndex);
                                return
                            }
                            if (t > -e.maxTranslate()) {
                                e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1);
                                return
                            }
                            if (r.freeMode.momentum) {
                                let u, c;
                                if (o.velocities.length > 1) {
                                    let h = o.velocities.pop(),
                                        f = o.velocities.pop(),
                                        m = h.position - f.position,
                                        g = h.time - f.time;
                                    e.velocity = m / g, e.velocity /= 2, Math.abs(e.velocity) < r.freeMode.minimumVelocity && (e.velocity = 0), (g > 150 || C() - h.time > 300) && (e.velocity = 0)
                                } else e.velocity = 0;
                                e.velocity *= r.freeMode.momentumVelocityRatio, o.velocities.length = 0;
                                let v = 1e3 * r.freeMode.momentumRatio,
                                    b = e.velocity * v,
                                    w = e.translate + b;
                                n && (w = -w);
                                let y = !1,
                                    S = 20 * Math.abs(e.velocity) * r.freeMode.momentumBounceRatio;
                                if (w < e.maxTranslate()) r.freeMode.momentumBounce ? (w + e.maxTranslate() < -S && (w = e.maxTranslate() - S), u = e.maxTranslate(), y = !0, o.allowMomentumBounce = !0) : w = e.maxTranslate(), r.loop && r.centeredSlides && (c = !0);
                                else if (w > e.minTranslate()) r.freeMode.momentumBounce ? (w - e.minTranslate() > S && (w = e.minTranslate() + S), u = e.minTranslate(), y = !0, o.allowMomentumBounce = !0) : w = e.minTranslate(), r.loop && r.centeredSlides && (c = !0);
                                else if (r.freeMode.sticky) {
                                    let T;
                                    for (let E = 0; E < l.length; E += 1)
                                        if (l[E] > -w) {
                                            T = E;
                                            break
                                        }
                                    w = -(w = Math.abs(l[T] - w) < Math.abs(l[T - 1] - w) || "next" === e.swipeDirection ? l[T] : l[T - 1])
                                }
                                if (c && s("transitionEnd", () => {
                                        e.loopFix()
                                    }), 0 !== e.velocity) {
                                    if (v = n ? Math.abs((-w - e.translate) / e.velocity) : Math.abs((w - e.translate) / e.velocity), r.freeMode.sticky) {
                                        let x = Math.abs((n ? -w : w) - e.translate),
                                            M = e.slidesSizesGrid[e.activeIndex];
                                        v = x < M ? r.speed : x < 2 * M ? 1.5 * r.speed : 2.5 * r.speed
                                    }
                                } else if (r.freeMode.sticky) {
                                    e.slideToClosest();
                                    return
                                }
                                r.freeMode.momentumBounce && y ? (e.updateProgress(u), e.setTransition(v), e.setTranslate(w), e.transitionStart(!0, e.swipeDirection), e.animating = !0, a.transitionEnd(() => {
                                    e && !e.destroyed && o.allowMomentumBounce && (i("momentumBounce"), e.setTransition(r.speed), setTimeout(() => {
                                        e.setTranslate(u), a.transitionEnd(() => {
                                            e && !e.destroyed && e.transitionEnd()
                                        })
                                    }, 0))
                                })) : e.velocity ? (i("_freeModeNoMomentumRelease"), e.updateProgress(w), e.setTransition(v), e.setTranslate(w), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, a.transitionEnd(() => {
                                    e && !e.destroyed && e.transitionEnd()
                                }))) : e.updateProgress(w), e.updateActiveIndex(), e.updateSlidesClasses()
                            } else if (r.freeMode.sticky) {
                                e.slideToClosest();
                                return
                            } else r.freeMode && i("_freeModeNoMomentumRelease");
                            (!r.freeMode.momentum || p >= r.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses())
                        }
                    }
                })
            }

            function U({
                swiper: e,
                extendParams: t,
                on: i
            }) {
                t({
                    fadeEffect: {
                        crossFade: !1,
                        transformEl: null
                    }
                });
                let s = () => {
                        let {
                            slides: t
                        } = e, i = e.params.fadeEffect;
                        for (let s = 0; s < t.length; s += 1) {
                            let r = e.slides.eq(s),
                                a = r[0].swiperSlideOffset,
                                n = -a;
                            e.params.virtualTranslate || (n -= e.translate);
                            let l = 0;
                            e.isHorizontal() || (l = n, n = 0);
                            let o = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(r[0].progress), 0) : 1 + Math.min(Math.max(r[0].progress, -1), 0),
                                d = i.transformEl ? r.find(i.transformEl).css({
                                    "backface-visibility": "hidden",
                                    "-webkit-backface-visibility": "hidden"
                                }) : r;
                            d.css({
                                opacity: o
                            }).transform(`translate3d(${n}px, ${l}px, 0px)`)
                        }
                    },
                    r = t => {
                        let {
                            transformEl: i
                        } = e.params.fadeEffect, s = i ? e.slides.find(i) : e.slides;
                        s.transition(t),
                            function({
                                swiper: e,
                                duration: t,
                                transformEl: i,
                                allSlides: s
                            }) {
                                let {
                                    slides: r,
                                    activeIndex: a,
                                    $wrapperEl: n
                                } = e;
                                if (e.params.virtualTranslate && 0 !== t) {
                                    let l = !1;
                                    (s ? i ? r.find(i) : r : i ? r.eq(a).find(i) : r.eq(a)).transitionEnd(() => {
                                        if (l || !e || e.destroyed) return;
                                        l = !0, e.animating = !1;
                                        let t = ["webkitTransitionEnd", "transitionend"];
                                        for (let i = 0; i < t.length; i += 1) n.trigger(t[i])
                                    })
                                }
                            }({
                                swiper: e,
                                duration: t,
                                transformEl: i,
                                allSlides: !0
                            })
                    };
                ! function(e) {
                    let t;
                    let {
                        effect: i,
                        swiper: s,
                        on: r,
                        setTranslate: a,
                        setTransition: n,
                        overwriteParams: l,
                        perspective: o,
                        recreateShadows: d,
                        getEffectParams: p
                    } = e;
                    r("beforeInit", () => {
                        if (s.params.effect !== i) return;
                        s.classNames.push(`${s.params.containerModifierClass}${i}`), o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                        let e = l ? l() : {};
                        Object.assign(s.params, e), Object.assign(s.originalParams, e)
                    }), r("setTranslate", () => {
                        s.params.effect === i && a()
                    }), r("setTransition", (e, t) => {
                        s.params.effect === i && n(t)
                    }), r("transitionEnd", () => {
                        s.params.effect === i && d && p && p().slideShadows && (s.slides.each(e => {
                            let t = s.$(e);
                            t.find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                        }), d())
                    }), r("virtualUpdate", () => {
                        s.params.effect === i && (s.slides.length || (t = !0), requestAnimationFrame(() => {
                            t && s.slides && s.slides.length && (a(), t = !1)
                        }))
                    })
                }({
                    effect: "fade",
                    swiper: e,
                    on: i,
                    setTranslate: s,
                    setTransition: r,
                    overwriteParams: () => ({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !e.params.cssMode
                    })
                })
            }
        }
    }
]);