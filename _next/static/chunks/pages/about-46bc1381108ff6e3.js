(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [521], {
        8273: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CountUp: function() {
                    return i
                }
            });
            var s = function() {
                    return (s = Object.assign || function(e) {
                        for (var t, n = 1, s = arguments.length; n < s; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                i = function() {
                    function e(e, t, n) {
                        var i = this;
                        this.endVal = t, this.options = n, this.version = "2.3.2", this.defaults = {
                            startVal: 0,
                            decimalPlaces: 0,
                            duration: 2,
                            useEasing: !0,
                            useGrouping: !0,
                            smartEasingThreshold: 999,
                            smartEasingAmount: 333,
                            separator: ",",
                            decimal: ".",
                            prefix: "",
                            suffix: "",
                            enableScrollSpy: !1,
                            scrollSpyDelay: 200,
                            scrollSpyOnce: !1
                        }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(e) {
                            i.startTime || (i.startTime = e);
                            var t = e - i.startTime;
                            i.remaining = i.duration - t, i.useEasing ? i.countDown ? i.frameVal = i.startVal - i.easingFn(t, 0, i.startVal - i.endVal, i.duration) : i.frameVal = i.easingFn(t, i.startVal, i.endVal - i.startVal, i.duration) : i.frameVal = i.startVal + (i.endVal - i.startVal) * (t / i.duration);
                            var n = i.countDown ? i.frameVal < i.endVal : i.frameVal > i.endVal;
                            i.frameVal = n ? i.endVal : i.frameVal, i.frameVal = Number(i.frameVal.toFixed(i.options.decimalPlaces)), i.printValue(i.frameVal), t < i.duration ? i.rAF = requestAnimationFrame(i.count) : null !== i.finalEndVal ? i.update(i.finalEndVal) : i.callback && i.callback()
                        }, this.formatNumber = function(e) {
                            var t, n, s, r = (Math.abs(e).toFixed(i.options.decimalPlaces) + "").split(".");
                            if (t = r[0], n = r.length > 1 ? i.options.decimal + r[1] : "", i.options.useGrouping) {
                                s = "";
                                for (var a = 0, o = t.length; a < o; ++a) 0 !== a && a % 3 == 0 && (s = i.options.separator + s), s = t[o - a - 1] + s;
                                t = s
                            }
                            return i.options.numerals && i.options.numerals.length && (t = t.replace(/[0-9]/g, function(e) {
                                return i.options.numerals[+e]
                            }), n = n.replace(/[0-9]/g, function(e) {
                                return i.options.numerals[+e]
                            })), (e < 0 ? "-" : "") + i.options.prefix + t + n + i.options.suffix
                        }, this.easeOutExpo = function(e, t, n, s) {
                            return n * (1 - Math.pow(2, -10 * e / s)) * 1024 / 1023 + t
                        }, this.options = s(s({}, this.defaults), n), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(t), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof e ? document.getElementById(e) : e, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, e) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
                            return i.handleScroll(i)
                        }), window.onscroll = function() {
                            window.onScrollFns.forEach(function(e) {
                                return e()
                            })
                        }, this.handleScroll(this)))
                    }
                    return e.prototype.handleScroll = function(e) {
                        if (e && window && !e.once) {
                            var t = window.innerHeight + window.scrollY,
                                n = e.el.getBoundingClientRect(),
                                s = n.top + n.height + window.pageYOffset;
                            s < t && s > window.scrollY && e.paused ? (e.paused = !1, setTimeout(function() {
                                return e.start()
                            }, e.options.scrollSpyDelay), e.options.scrollSpyOnce && (e.once = !0)) : window.scrollY > s && !e.paused && e.reset()
                        }
                    }, e.prototype.determineDirectionAndSmartEasing = function() {
                        var e = this.finalEndVal ? this.finalEndVal : this.endVal;
                        if (this.countDown = this.startVal > e, Math.abs(e - this.startVal) > this.options.smartEasingThreshold && this.options.useEasing) {
                            this.finalEndVal = e;
                            var t = this.countDown ? 1 : -1;
                            this.endVal = e + t * this.options.smartEasingAmount, this.duration = this.duration / 2
                        } else this.endVal = e, this.finalEndVal = null;
                        null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
                    }, e.prototype.start = function(e) {
                        this.error || (this.callback = e, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
                    }, e.prototype.pauseResume = function() {
                        this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
                    }, e.prototype.reset = function() {
                        cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
                    }, e.prototype.update = function(e) {
                        cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(e), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
                    }, e.prototype.printValue = function(e) {
                        var t = this.formattingFn(e);
                        "INPUT" === this.el.tagName ? this.el.value = t : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = t : this.el.innerHTML = t
                    }, e.prototype.ensureNumber = function(e) {
                        return "number" == typeof e && !isNaN(e)
                    }, e.prototype.validateValue = function(e) {
                        var t = Number(e);
                        return this.ensureNumber(t) ? t : (this.error = "[CountUp] invalid start or end value: ".concat(e), null)
                    }, e.prototype.resetDuration = function() {
                        this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
                    }, e
                }()
        },
        512: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function() {
                return n(3370)
            }])
        },
        2796: function(e, t, n) {
            "use strict";
            var s = n(5893),
                i = n(1664),
                r = n.n(i);
            n(7294), t.Z = function(e) {
                let {
                    pageTitle: t,
                    pageName: n
                } = e;
                return (0, s.jsxs)("div", {
                    className: "breadcrumb-section",
                    children: [(0, s.jsx)("div", {
                        className: "breadcrumb-left-vec",
                        children: (0, s.jsx)("img", {
                            src: "assets/images/icon/breadcumb-left-vec.svg",
                            alt: "breadcumb-left-vec"
                        })
                    }), (0, s.jsx)("div", {
                        className: "breadcrumb-right-vec",
                        children: (0, s.jsx)("img", {
                            src: "assets/images/icon/breadcumb-right-vec.svg",
                            alt: "breadcumb-right-vec"
                        })
                    }), (0, s.jsx)("div", {
                        className: "container",
                        children: (0, s.jsx)("div", {
                            className: "row d-flex justify-content-center align-items-center",
                            children: (0, s.jsxs)("div", {
                                className: "col-lg-12",
                                children: [(0, s.jsx)("h2", {
                                    className: "breadcrumb-title",
                                    children: t
                                }), (0, s.jsx)("nav", {
                                    "aria-label": "breadcrumb",
                                    children: (0, s.jsxs)("ol", {
                                        className: "breadcrumb d-flex",
                                        children: [(0, s.jsx)("li", {
                                            className: "breadcrumb-item",
                                            children: (0, s.jsx)(r(), {
                                                legacyBehavior: !0,
                                                href: "/",
                                                children: "Home"
                                            })
                                        }), (0, s.jsx)("li", {
                                            className: "breadcrumb-item active",
                                            "aria-current": "page",
                                            children: n
                                        })]
                                    })
                                })]
                            })
                        })
                    })]
                })
            }
        },
        1988: function(e, t, n) {
            "use strict";
            var s = n(5893),
                i = n(9008),
                r = n.n(i);
            n(7294);
            var a = n(8004),
                o = n(6282);
            t.Z = function(e) {
                let {
                    children: t
                } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)(r(), {
                        children: [(0, s.jsx)("title", {
                            children: "Restho - Resturent React Template"
                        }), (0, s.jsx)("meta", {
                            name: "description",
                            content: "Generated by create next app"
                        }), (0, s.jsx)("link", {
                            rel: "icon",
                            href: "assets/images/icon/logo-icon.svg"
                        })]
                    }), (0, s.jsx)(o.Z, {}), t, (0, s.jsx)(a.Z, {})]
                })
            }
        },
        3370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var s = n(5893);
            n(7294);
            var i = n(8633),
                r = n(7857),
                a = function() {
                    return (0, s.jsx)("div", {
                        className: "about-counter mb-120",
                        children: (0, s.jsx)("div", {
                            className: "container",
                            children: (0, s.jsxs)("div", {
                                className: "row justify-content-center g-md-4 gy-5",
                                children: [(0, s.jsx)("div", {
                                    className: "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6",
                                    children: (0, s.jsxs)("div", {
                                        className: "counter-single",
                                        children: [(0, s.jsx)("div", {
                                            className: "counter-icon",
                                            children: (0, s.jsx)("img", {
                                                src: "assets/images/icon/chef.svg",
                                                alt: "image"
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "coundown",
                                            children: [(0, s.jsx)("div", {
                                                className: "d-flex align-items-center gap-2",
                                                children: (0, s.jsx)("h3", {
                                                    className: "odometer",
                                                    "data-odometer-final": 100,
                                                    children: (0, s.jsx)(r.ZP, {
                                                        end: 100
                                                    })
                                                })
                                            }), (0, s.jsx)("p", {
                                                children: "Professional Chef"
                                            })]
                                        })]
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6",
                                    children: (0, s.jsxs)("div", {
                                        className: "counter-single",
                                        children: [(0, s.jsx)("div", {
                                            className: "counter-icon",
                                            children: (0, s.jsx)("img", {
                                                src: "assets/images/icon/food.svg",
                                                alt: "image"
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "coundown",
                                            children: [(0, s.jsx)("div", {
                                                className: "d-flex align-items-center gap-2",
                                                children: (0, s.jsx)("h3", {
                                                    className: "odometer",
                                                    "data-odometer-final": 250,
                                                    children: (0, s.jsx)(r.ZP, {
                                                        end: 120
                                                    })
                                                })
                                            }), (0, s.jsx)("p", {
                                                children: "Food Category"
                                            })]
                                        })]
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6",
                                    children: (0, s.jsxs)("div", {
                                        className: "counter-single",
                                        children: [(0, s.jsx)("div", {
                                            className: "counter-icon",
                                            children: (0, s.jsx)("img", {
                                                src: "assets/images/icon/customer.svg",
                                                alt: "image"
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "coundown",
                                            children: [(0, s.jsxs)("div", {
                                                className: "d-flex align-items-center gap-2",
                                                children: [(0, s.jsx)("h3", {
                                                    className: "odometer",
                                                    "data-odometer-final": 10,
                                                    children: (0, s.jsx)(r.ZP, {
                                                        end: 109
                                                    })
                                                }), (0, s.jsx)("span", {
                                                    children: "k"
                                                })]
                                            }), (0, s.jsx)("p", {
                                                children: "Customer Satisfy"
                                            })]
                                        })]
                                    })
                                }), (0, s.jsx)("div", {
                                    className: "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6",
                                    children: (0, s.jsxs)("div", {
                                        className: "counter-single",
                                        children: [(0, s.jsx)("div", {
                                            className: "counter-icon",
                                            children: (0, s.jsx)("img", {
                                                src: "assets/images/icon/award.svg",
                                                alt: "image"
                                            })
                                        }), (0, s.jsxs)("div", {
                                            className: "coundown",
                                            children: [(0, s.jsx)("div", {
                                                className: "d-flex align-items-center gap-2",
                                                children: (0, s.jsx)("h3", {
                                                    className: "odometer",
                                                    "data-odometer-final": 100,
                                                    children: (0, s.jsx)(r.ZP, {
                                                        end: 150
                                                    })
                                                })
                                            }), (0, s.jsx)("p", {
                                                children: "Award Wining"
                                            })]
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                o = n(2796),
                l = n(435),
                c = n(6236),
                u = n(3663),
                d = n(6384),
                f = n(1988),
                h = function() {
                    return (0, s.jsxs)(f.Z, {
                        children: [(0, s.jsx)(o.Z, {
                            pageName: "About Us",
                            pageTitle: "About Us"
                        }), (0, s.jsx)(i.Z, {}), (0, s.jsx)(a, {}), (0, s.jsx)(d.Z, {}), (0, s.jsx)(u.Z, {}), (0, s.jsx)(l.Z, {}), (0, s.jsx)(c.Z, {})]
                    })
                }
        },
        7857: function(e, t, n) {
            "use strict";
            var s = n(7294),
                i = n(8273);

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    t && (s = s.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, s)
                }
                return n
            }

            function a(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        var s, i;
                        s = e, i = n[t], t in s ? Object.defineProperty(s, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : s[t] = i
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
                    }
                    return e
                }).apply(this, arguments)
            }

            function l(e, t) {
                if (null == e) return {};
                var n, s, i = function(e, t) {
                    if (null == e) return {};
                    var n, s, i = {},
                        r = Object.keys(e);
                    for (s = 0; s < r.length; s++) n = r[s], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (s = 0; s < r.length; s++) n = r[s], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }
            var c = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? s.useLayoutEffect : s.useEffect;

            function u(e) {
                var t = s.useRef(e);
                return c(function() {
                    t.current = e
                }), s.useCallback(function() {
                    for (var e = arguments.length, n = Array(e), s = 0; s < e; s++) n[s] = arguments[s];
                    return t.current.apply(void 0, n)
                }, [])
            }
            var d = function(e, t) {
                    var n = t.decimal,
                        s = t.decimals,
                        r = t.duration,
                        a = t.easingFn,
                        o = t.end,
                        l = t.formattingFn,
                        c = t.numerals,
                        u = t.prefix,
                        d = t.separator,
                        f = t.start,
                        h = t.suffix,
                        m = t.useEasing,
                        p = t.enableScrollSpy,
                        g = t.scrollSpyDelay,
                        x = t.scrollSpyOnce;
                    return new i.CountUp(e, o, {
                        startVal: f,
                        duration: r,
                        decimal: n,
                        decimalPlaces: s,
                        easingFn: a,
                        formattingFn: l,
                        numerals: c,
                        separator: d,
                        prefix: u,
                        suffix: h,
                        useEasing: m,
                        useGrouping: !!d,
                        enableScrollSpy: p,
                        scrollSpyDelay: g,
                        scrollSpyOnce: x
                    })
                },
                f = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"],
                h = {
                    decimal: ".",
                    delay: null,
                    prefix: "",
                    suffix: "",
                    duration: 2,
                    start: 0,
                    startOnMount: !0,
                    enableReinitialize: !0
                },
                m = function(e) {
                    var t = s.useMemo(function() {
                            return a(a({}, h), e)
                        }, [e]),
                        n = t.ref,
                        i = t.startOnMount,
                        r = t.enableReinitialize,
                        o = t.delay,
                        c = t.onEnd,
                        m = t.onStart,
                        p = t.onPauseResume,
                        g = t.onReset,
                        x = t.onUpdate,
                        v = l(t, f),
                        j = s.useRef(),
                        b = s.useRef(),
                        y = s.useRef(!1),
                        V = u(function() {
                            return d("string" == typeof n ? n : n.current, v)
                        }),
                        w = u(function(e) {
                            var t = j.current;
                            if (t && !e) return t;
                            var n = V();
                            return j.current = n, n
                        }),
                        N = u(function() {
                            var e = function() {
                                return w(!0).start(function() {
                                    null == c || c({
                                        pauseResume: E,
                                        reset: O,
                                        start: S,
                                        update: F
                                    })
                                })
                            };
                            o && o > 0 ? b.current = setTimeout(e, 1e3 * o) : e(), null == m || m({
                                pauseResume: E,
                                reset: O,
                                update: F
                            })
                        }),
                        E = u(function() {
                            w().pauseResume(), null == p || p({
                                reset: O,
                                start: S,
                                update: F
                            })
                        }),
                        O = u(function() {
                            w().el && (b.current && clearTimeout(b.current), w().reset(), null == g || g({
                                pauseResume: E,
                                start: S,
                                update: F
                            }))
                        }),
                        F = u(function(e) {
                            w().update(e), null == x || x({
                                pauseResume: E,
                                reset: O,
                                start: S
                            })
                        }),
                        S = u(function() {
                            O(), N()
                        }),
                        P = u(function(e) {
                            i && (e && O(), N())
                        });
                    return s.useEffect(function() {
                        y.current ? r && P(!0) : (y.current = !0, P())
                    }, [r, y, P, o, e.start, e.suffix, e.prefix, e.duration, e.separator, e.decimals, e.decimal, e.formattingFn]), s.useEffect(function() {
                        return function() {
                            O()
                        }
                    }, [O]), {
                        start: S,
                        pauseResume: E,
                        reset: O,
                        update: F,
                        getCountUp: w
                    }
                },
                p = ["className", "redraw", "containerProps", "children", "style"];
            t.ZP = function(e) {
                var t = e.className,
                    n = e.redraw,
                    i = e.containerProps,
                    r = e.children,
                    c = e.style,
                    d = l(e, p),
                    f = s.useRef(null),
                    h = s.useRef(!1),
                    g = m(a(a({}, d), {}, {
                        ref: f,
                        startOnMount: "function" != typeof r || 0 === e.delay,
                        enableReinitialize: !1
                    })),
                    x = g.start,
                    v = g.reset,
                    j = g.update,
                    b = g.pauseResume,
                    y = g.getCountUp,
                    V = u(function() {
                        x()
                    }),
                    w = u(function(t) {
                        e.preserveValue || v(), j(t)
                    }),
                    N = u(function() {
                        if ("function" == typeof e.children && !(f.current instanceof Element)) {
                            console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');
                            return
                        }
                        y()
                    });
                return (s.useEffect(function() {
                    N()
                }, [N]), s.useEffect(function() {
                    h.current && w(e.end)
                }, [e.end, w]), s.useEffect(function() {
                    n && h.current && V()
                }, [V, n, n && e]), s.useEffect(function() {
                    !n && h.current && V()
                }, [V, n, e.start, e.suffix, e.prefix, e.duration, e.separator, e.decimals, e.decimal, e.className, e.formattingFn]), s.useEffect(function() {
                    h.current = !0
                }, []), "function" == typeof r) ? r({
                    countUpRef: f,
                    start: x,
                    reset: v,
                    update: j,
                    pauseResume: b,
                    getCountUp: y
                }) : s.createElement("span", o({
                    className: t,
                    ref: f,
                    style: c
                }, i), void 0 !== e.start ? y().formattingFn(e.start) : "")
            }
        }
    },
    function(e) {
        e.O(0, [664, 89, 369, 122, 4, 282, 610, 774, 888, 179], function() {
            return e(e.s = 512)
        }), _N_E = e.O()
    }
]);