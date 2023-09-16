(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [906], {
        8273: function(s, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                CountUp: function() {
                    return l
                }
            });
            var a = function() {
                    return (a = Object.assign || function(s) {
                        for (var e, i = 1, a = arguments.length; i < a; i++)
                            for (var l in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, l) && (s[l] = e[l]);
                        return s
                    }).apply(this, arguments)
                },
                l = function() {
                    function s(s, e, i) {
                        var l = this;
                        this.endVal = e, this.options = i, this.version = "2.3.2", this.defaults = {
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
                        }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.once = !1, this.count = function(s) {
                            l.startTime || (l.startTime = s);
                            var e = s - l.startTime;
                            l.remaining = l.duration - e, l.useEasing ? l.countDown ? l.frameVal = l.startVal - l.easingFn(e, 0, l.startVal - l.endVal, l.duration) : l.frameVal = l.easingFn(e, l.startVal, l.endVal - l.startVal, l.duration) : l.frameVal = l.startVal + (l.endVal - l.startVal) * (e / l.duration);
                            var i = l.countDown ? l.frameVal < l.endVal : l.frameVal > l.endVal;
                            l.frameVal = i ? l.endVal : l.frameVal, l.frameVal = Number(l.frameVal.toFixed(l.options.decimalPlaces)), l.printValue(l.frameVal), e < l.duration ? l.rAF = requestAnimationFrame(l.count) : null !== l.finalEndVal ? l.update(l.finalEndVal) : l.callback && l.callback()
                        }, this.formatNumber = function(s) {
                            var e, i, a, c = (Math.abs(s).toFixed(l.options.decimalPlaces) + "").split(".");
                            if (e = c[0], i = c.length > 1 ? l.options.decimal + c[1] : "", l.options.useGrouping) {
                                a = "";
                                for (var n = 0, r = e.length; n < r; ++n) 0 !== n && n % 3 == 0 && (a = l.options.separator + a), a = e[r - n - 1] + a;
                                e = a
                            }
                            return l.options.numerals && l.options.numerals.length && (e = e.replace(/[0-9]/g, function(s) {
                                return l.options.numerals[+s]
                            }), i = i.replace(/[0-9]/g, function(s) {
                                return l.options.numerals[+s]
                            })), (s < 0 ? "-" : "") + l.options.prefix + e + i + l.options.suffix
                        }, this.easeOutExpo = function(s, e, i, a) {
                            return i * (1 - Math.pow(2, -10 * s / a)) * 1024 / 1023 + e
                        }, this.options = a(a({}, this.defaults), i), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(e), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof s ? document.getElementById(s) : s, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", "undefined" != typeof window && this.options.enableScrollSpy && (this.error ? console.error(this.error, s) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push(function() {
                            return l.handleScroll(l)
                        }), window.onscroll = function() {
                            window.onScrollFns.forEach(function(s) {
                                return s()
                            })
                        }, this.handleScroll(this)))
                    }
                    return s.prototype.handleScroll = function(s) {
                        if (s && window && !s.once) {
                            var e = window.innerHeight + window.scrollY,
                                i = s.el.getBoundingClientRect(),
                                a = i.top + i.height + window.pageYOffset;
                            a < e && a > window.scrollY && s.paused ? (s.paused = !1, setTimeout(function() {
                                return s.start()
                            }, s.options.scrollSpyDelay), s.options.scrollSpyOnce && (s.once = !0)) : window.scrollY > a && !s.paused && s.reset()
                        }
                    }, s.prototype.determineDirectionAndSmartEasing = function() {
                        var s = this.finalEndVal ? this.finalEndVal : this.endVal;
                        if (this.countDown = this.startVal > s, Math.abs(s - this.startVal) > this.options.smartEasingThreshold && this.options.useEasing) {
                            this.finalEndVal = s;
                            var e = this.countDown ? 1 : -1;
                            this.endVal = s + e * this.options.smartEasingAmount, this.duration = this.duration / 2
                        } else this.endVal = s, this.finalEndVal = null;
                        null !== this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
                    }, s.prototype.start = function(s) {
                        this.error || (this.callback = s, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
                    }, s.prototype.pauseResume = function() {
                        this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
                    }, s.prototype.reset = function() {
                        cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
                    }, s.prototype.update = function(s) {
                        cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(s), this.endVal !== this.frameVal && (this.startVal = this.frameVal, null == this.finalEndVal && this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
                    }, s.prototype.printValue = function(s) {
                        var e = this.formattingFn(s);
                        "INPUT" === this.el.tagName ? this.el.value = e : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = e : this.el.innerHTML = e
                    }, s.prototype.ensureNumber = function(s) {
                        return "number" == typeof s && !isNaN(s)
                    }, s.prototype.validateValue = function(s) {
                        var e = Number(s);
                        return this.ensureNumber(e) ? e : (this.error = "[CountUp] invalid start or end value: ".concat(s), null)
                    }, s.prototype.resetDuration = function() {
                        this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
                    }, s
                }()
        },
        163: function(s, e, i) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/index3", function() {
                return i(8085)
            }])
        },
        4200: function(s, e, i) {
            "use strict";
            var a = i(5893),
                l = i(7294);

            function c() {
                let [s, e] = (0, l.useState)(0);
                return (0, l.useEffect)(() => {
                    let i = setInterval(() => {
                        e(s => s + 1)
                    }, 40);
                    return 100 === s && clearInterval(i), () => clearInterval(i)
                }, [s]), (0, a.jsx)("div", {
                    className: 100 === s ? "preloader active" : "preloader",
                    children: (0, a.jsx)("div", {
                        className: 100 === s ? "hide" : "",
                        children: (0, a.jsx)("span", {
                            className: "counter",
                            children: s
                        })
                    })
                })
            }
            e.Z = function(s) {
                let {} = s;
                return (0, a.jsx)(c, {})
            }
        },
        8085: function(s, e, i) {
            "use strict";
            i.r(e), i.d(e, {
                default: function() {
                    return P
                }
            });
            var a = i(5893),
                l = i(9008),
                c = i.n(l),
                n = i(7294),
                r = i(1664),
                t = i.n(r),
                d = function() {
                    return (0, a.jsx)("div", {
                        className: "introduction-area pt-120 mb-120",
                        children: (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsxs)("div", {
                                className: "row align-items-end gy-5",
                                children: [(0, a.jsxs)("div", {
                                    className: "col-lg-7",
                                    children: [(0, a.jsxs)("div", {
                                        className: "section-title3",
                                        children: [(0, a.jsxs)("span", {
                                            children: [" ", (0, a.jsx)("img", {
                                                className: "left-vec",
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: ""
                                            }), " ", "Restho Introduction", " ", (0, a.jsx)("img", {
                                                className: "right-vec",
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: ""
                                            })]
                                        }), (0, a.jsx)("h2", {
                                            children: "To Take Healthy Food."
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "introduction-content",
                                        children: [(0, a.jsx)("p", {
                                            children: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
                                        }), (0, a.jsxs)("div", {
                                            className: "about-features",
                                            children: [(0, a.jsxs)("ul", {
                                                children: [(0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("i", {
                                                        className: "bi bi-chevron-double-right"
                                                    }), "Delicious Food"]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("i", {
                                                        className: "bi bi-chevron-double-right"
                                                    }), "Cost Effective"]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("i", {
                                                        className: "bi bi-chevron-double-right"
                                                    }), "Quality Food"]
                                                })]
                                            }), (0, a.jsxs)("ul", {
                                                children: [(0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("i", {
                                                        className: "bi bi-chevron-double-right"
                                                    }), "Expert Chef"]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("i", {
                                                        className: "bi bi-chevron-double-right"
                                                    }), "Letraset Sheets"]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("i", {
                                                        className: "bi bi-chevron-double-right"
                                                    }), "Quality Food"]
                                                })]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "achievement",
                                            children: [(0, a.jsx)("h5", {
                                                children: "Our Achievement:"
                                            }), (0, a.jsxs)("ul", {
                                                children: [(0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("img", {
                                                        src: "assets/images/icon/Award-01.svg",
                                                        alt: "Award-01"
                                                    }), (0, a.jsx)("div", {
                                                        className: "award-name",
                                                        children: (0, a.jsx)("a", {
                                                            href: "#",
                                                            children: "National Award"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("img", {
                                                        src: "assets/images/icon/Award-02.svg",
                                                        alt: "Award-02"
                                                    }), (0, a.jsx)("div", {
                                                        className: "award-name",
                                                        children: (0, a.jsx)("a", {
                                                            href: "#",
                                                            children: "National Award"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("img", {
                                                        src: "assets/images/icon/Award-03.svg",
                                                        alt: "Award-03"
                                                    }), (0, a.jsx)("div", {
                                                        className: "award-name",
                                                        children: (0, a.jsx)("a", {
                                                            href: "#",
                                                            children: "National Award"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("img", {
                                                        src: "assets/images/icon/Award-04.svg",
                                                        alt: "Award-04"
                                                    }), (0, a.jsx)("div", {
                                                        className: "award-name",
                                                        children: (0, a.jsx)("a", {
                                                            href: "#",
                                                            children: "National Award"
                                                        })
                                                    })]
                                                })]
                                            })]
                                        }), (0, a.jsx)("div", {
                                            className: "discover-btn",
                                            children: (0, a.jsx)(t(), {
                                                legacyBehavior: !0,
                                                href: "/about",
                                                children: (0, a.jsxs)("a", {
                                                    className: "primary-btn7 btn-md2",
                                                    children: [(0, a.jsx)("i", {
                                                        className: "bi bi-arrow-up-right-circle"
                                                    }), "Discover More"]
                                                })
                                            })
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "col-lg-5",
                                    children: (0, a.jsxs)("div", {
                                        className: "h3-into-img-big",
                                        children: [(0, a.jsx)("img", {
                                            className: "img-fluid",
                                            src: "assets/images/bg/h3-intro-big.png",
                                            alt: "h3-intro-big"
                                        }), (0, a.jsx)("div", {
                                            className: "h3-into-img-sm magnetic-wrap",
                                            children: (0, a.jsx)("img", {
                                                className: "img-fluid magnetic-item",
                                                src: "assets/images/bg/h3-intro-sm.png",
                                                alt: "h3-intro-sm"
                                            })
                                        })]
                                    })
                                })]
                            })
                        })
                    })
                },
                o = function() {
                    return (0, a.jsxs)("div", {
                        className: "home3-banner",
                        children: [(0, a.jsx)("div", {
                            className: "social-area",
                            children: (0, a.jsxs)("ul", {
                                children: [(0, a.jsx)("li", {
                                    children: (0, a.jsx)("a", {
                                        href: "https://www.facebook.com/",
                                        children: (0, a.jsx)("i", {
                                            className: "bx bxl-facebook"
                                        })
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)("a", {
                                        href: "https://www.instagram.com/",
                                        children: (0, a.jsx)("i", {
                                            className: "bx bxl-instagram-alt"
                                        })
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)("a", {
                                        href: "https://www.pinterest.com/",
                                        children: (0, a.jsx)("i", {
                                            className: "bx bxl-linkedin"
                                        })
                                    })
                                }), (0, a.jsx)("li", {
                                    children: (0, a.jsx)("a", {
                                        href: "https://twitter.com/",
                                        children: (0, a.jsx)("i", {
                                            className: "bx bxl-twitter"
                                        })
                                    })
                                })]
                            })
                        }), (0, a.jsxs)("div", {
                            className: "open-time",
                            children: [(0, a.jsx)("div", {
                                className: "left-vect",
                                children: (0, a.jsx)("img", {
                                    src: "assets/images/bg/open-vec-left.png",
                                    alt: ""
                                })
                            }), (0, a.jsx)("div", {
                                className: "right-vect",
                                children: (0, a.jsx)("img", {
                                    src: "assets/images/bg/open-vec-right.png",
                                    alt: ""
                                })
                            }), (0, a.jsxs)("p", {
                                children: [(0, a.jsx)("img", {
                                    className: "left-vec",
                                    src: "assets/images/icon/h3-open-vec.svg",
                                    alt: ""
                                }), "Our Restho Restaurant is Opening Hour 9:30 AM to 9.00 PM", (0, a.jsx)("img", {
                                    className: "right-vec",
                                    src: "assets/images/icon/h3-open-vec.svg",
                                    alt: ""
                                })]
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "video-wrap d-flex align-items-center justify-content-center",
                            children: [(0, a.jsx)("video", {
                                autoPlay: !0,
                                loop: "loop",
                                muted: !0,
                                preload: "auto",
                                children: (0, a.jsx)("source", {
                                    src: "assets/video/v1.mp4",
                                    type: "video/mp4"
                                })
                            }), (0, a.jsxs)("div", {
                                className: "banner-content text-center",
                                children: [(0, a.jsxs)("span", {
                                    children: [" ", (0, a.jsx)("img", {
                                        className: "left-vec",
                                        src: "assets/images/icon/h3-sub-title-vec.svg",
                                        alt: ""
                                    }), " ", "Welcome To Restho", " ", (0, a.jsx)("img", {
                                        className: "right-vec",
                                        src: "assets/images/icon/h3-sub-title-vec.svg",
                                        alt: ""
                                    })]
                                }), (0, a.jsx)("h1", {
                                    children: "Find Your Best Healthy & Tasty Food."
                                }), (0, a.jsx)(t(), {
                                    legacyBehavior: !0,
                                    href: "/about",
                                    children: (0, a.jsxs)("a", {
                                        className: "primary-btn7 btn-md2",
                                        children: [(0, a.jsx)("i", {
                                            className: "bi bi-arrow-up-right-circle"
                                        }), " Discover More"]
                                    })
                                })]
                            })]
                        })]
                    })
                },
                h = i(8116),
                m = i(719);
            h.ZP.use([h.W_, h.pt, h.tl, h.xW]);
            var x = function() {
                    return (0, a.jsx)("div", {
                        className: "h3-spacial-offer-area mb-120 ",
                        children: (0, a.jsxs)("div", {
                            className: "container",
                            children: [(0, a.jsx)("div", {
                                className: "row justify-content-center mb-45",
                                children: (0, a.jsx)("div", {
                                    className: "col-lg-8",
                                    children: (0, a.jsxs)("div", {
                                        className: "section-title3 text-center",
                                        children: [(0, a.jsxs)("span", {
                                            children: [" ", (0, a.jsx)("img", {
                                                className: "left-vec",
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: ""
                                            }), "Special Combo Offer", (0, a.jsx)("img", {
                                                className: "right-vec",
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: ""
                                            })]
                                        }), (0, a.jsx)("h2", {
                                            children: "Special Combo Offer"
                                        })]
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: "row mb-40",
                                children: (0, a.jsx)(m.tq, {
                                    slidesPerView: 1,
                                    effect: "fade",
                                    fadeEffect: {
                                        crossFade: !0
                                    },
                                    speed: 1500,
                                    autoplay: {
                                        delay: 2e3
                                    },
                                    loop: !0,
                                    pagination: {
                                        el: ".swiper-pagination-i",
                                        clickable: !0
                                    },
                                    className: "swiper h3-spacial-offer-slider",
                                    children: (0, a.jsxs)("div", {
                                        className: "swiper-wrapper",
                                        children: [(0, a.jsx)(m.o5, {
                                            className: "swiper-slide",
                                            children: (0, a.jsxs)("div", {
                                                className: "row position-relative g-lg-5 g-4",
                                                children: [(0, a.jsx)("div", {
                                                    className: "divider"
                                                }), (0, a.jsx)("div", {
                                                    className: "col-lg-6",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "single-offer-card",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "offer-img",
                                                            children: [(0, a.jsx)("img", {
                                                                src: "assets/images/bg/h3-special-01.png",
                                                                alt: "h3-special-01"
                                                            }), (0, a.jsx)("div", {
                                                                className: "sm-img",
                                                                children: (0, a.jsx)("img", {
                                                                    src: "assets/images/bg/h3-special-01-sm.png",
                                                                    alt: "h3-special-01-sm"
                                                                })
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "offer-content",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "price-sl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "price-tag",
                                                                    children: (0, a.jsxs)("span", {
                                                                        children: ["$60 ", (0, a.jsx)("del", {
                                                                            children: "$75"
                                                                        })]
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "sl-no",
                                                                    children: (0, a.jsx)("span", {
                                                                        children: "01"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("h3", {
                                                                children: (0, a.jsx)(t(), {
                                                                    legacyBehavior: !0,
                                                                    href: "/shop-details",
                                                                    children: (0, a.jsx)("a", {
                                                                        children: "Chicken with Drinks."
                                                                    })
                                                                })
                                                            }), (0, a.jsxs)("p", {
                                                                children: ["It’s so tasty and delicious for creating our customer. So visit our restaurant.", " "]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "col-lg-6 d-flex justify-content-lg-end",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "single-offer-card",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "offer-img",
                                                            children: [(0, a.jsx)("img", {
                                                                src: "assets/images/bg/h3-special-02.png",
                                                                alt: "h3-special-01"
                                                            }), (0, a.jsx)("div", {
                                                                className: "sm-img",
                                                                children: (0, a.jsx)("img", {
                                                                    src: "assets/images/bg/h3-special-02-sm.png",
                                                                    alt: "h3-special-01-sm"
                                                                })
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "offer-content",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "price-sl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "price-tag",
                                                                    children: (0, a.jsxs)("span", {
                                                                        children: ["$40 ", (0, a.jsx)("del", {
                                                                            children: "$55"
                                                                        })]
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "sl-no",
                                                                    children: (0, a.jsx)("span", {
                                                                        children: "02"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("h3", {
                                                                children: (0, a.jsx)(t(), {
                                                                    legacyBehavior: !0,
                                                                    href: "/shop-details",
                                                                    children: "Burger with Drinks."
                                                                })
                                                            }), (0, a.jsxs)("p", {
                                                                children: ["It’s so tasty and delicious for creating our customer. So visit our restaurant.", " "]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "col-lg-6",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "single-offer-card",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "offer-img",
                                                            children: [(0, a.jsx)("img", {
                                                                src: "assets/images/bg/h3-special-03.png",
                                                                alt: "h3-special-03"
                                                            }), (0, a.jsx)("div", {
                                                                className: "sm-img",
                                                                children: (0, a.jsx)("img", {
                                                                    src: "assets/images/bg/h3-special-03-sm.png",
                                                                    alt: "h3-special-03-sm"
                                                                })
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "offer-content",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "price-sl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "price-tag",
                                                                    children: (0, a.jsxs)("span", {
                                                                        children: ["$90 ", (0, a.jsx)("del", {
                                                                            children: "$95"
                                                                        })]
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "sl-no",
                                                                    children: (0, a.jsx)("span", {
                                                                        children: "03"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("h3", {
                                                                children: (0, a.jsx)(t(), {
                                                                    legacyBehavior: !0,
                                                                    href: "/shop-details",
                                                                    children: "Soup with Kabab."
                                                                })
                                                            }), (0, a.jsxs)("p", {
                                                                children: ["It’s so tasty and delicious for creating our customer. So visit our restaurant.", " "]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "col-lg-6 d-flex justify-content-lg-end",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "single-offer-card",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "offer-img",
                                                            children: [(0, a.jsx)("img", {
                                                                src: "assets/images/bg/h3-special-04.png",
                                                                alt: "h3-special-04"
                                                            }), (0, a.jsx)("div", {
                                                                className: "sm-img",
                                                                children: (0, a.jsx)("img", {
                                                                    src: "assets/images/bg/h3-special-04-sm.png",
                                                                    alt: "h3-special-04-sm"
                                                                })
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "offer-content",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "price-sl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "price-tag",
                                                                    children: (0, a.jsxs)("span", {
                                                                        children: ["$75 ", (0, a.jsx)("del", {
                                                                            children: "$85"
                                                                        })]
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "sl-no",
                                                                    children: (0, a.jsx)("span", {
                                                                        children: "04"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("h3", {
                                                                children: (0, a.jsx)(t(), {
                                                                    legacyBehavior: !0,
                                                                    href: "/shop-details",
                                                                    children: "Pizza with Pasta."
                                                                })
                                                            }), (0, a.jsxs)("p", {
                                                                children: ["It’s so tasty and delicious for creating our customer. So visit our restaurant.", " "]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, a.jsx)(m.o5, {
                                            className: "swiper-slide",
                                            children: (0, a.jsxs)("div", {
                                                className: "row position-relative g-lg-5 g-4",
                                                children: [(0, a.jsx)("div", {
                                                    className: "divider"
                                                }), (0, a.jsx)("div", {
                                                    className: "col-lg-6",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "single-offer-card",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "offer-img",
                                                            children: [(0, a.jsx)("img", {
                                                                src: "assets/images/bg/h3-special-05.png",
                                                                alt: "h3-special-01"
                                                            }), (0, a.jsx)("div", {
                                                                className: "sm-img",
                                                                children: (0, a.jsx)("img", {
                                                                    src: "assets/images/bg/h3-special-01-sm.png",
                                                                    alt: "h3-special-01-sm"
                                                                })
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "offer-content",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "price-sl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "price-tag",
                                                                    children: (0, a.jsxs)("span", {
                                                                        children: ["$60 ", (0, a.jsx)("del", {
                                                                            children: "$75"
                                                                        })]
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "sl-no",
                                                                    children: (0, a.jsx)("span", {
                                                                        children: "05"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("h3", {
                                                                children: (0, a.jsx)(t(), {
                                                                    legacyBehavior: !0,
                                                                    href: "/shop-details",
                                                                    children: "Beef with Drinks."
                                                                })
                                                            }), (0, a.jsxs)("p", {
                                                                children: ["It’s so tasty and delicious for creating our customer. So visit our restaurant.", " "]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "col-lg-6 d-flex justify-content-lg-end",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "single-offer-card",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "offer-img",
                                                            children: [(0, a.jsx)("img", {
                                                                src: "assets/images/bg/h3-special-06.png",
                                                                alt: "h3-special-01"
                                                            }), (0, a.jsx)("div", {
                                                                className: "sm-img",
                                                                children: (0, a.jsx)("img", {
                                                                    src: "assets/images/bg/h3-special-02-sm.png",
                                                                    alt: "h3-special-01-sm"
                                                                })
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "offer-content",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "price-sl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "price-tag",
                                                                    children: (0, a.jsxs)("span", {
                                                                        children: ["$45 ", (0, a.jsx)("del", {
                                                                            children: "$55"
                                                                        })]
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "sl-no",
                                                                    children: (0, a.jsx)("span", {
                                                                        children: "06"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("h3", {
                                                                children: (0, a.jsx)(t(), {
                                                                    legacyBehavior: !0,
                                                                    href: "/shop-details",
                                                                    children: "Fish with Drinks."
                                                                })
                                                            }), (0, a.jsxs)("p", {
                                                                children: ["It’s so tasty and delicious for creating our customer. So visit our restaurant.", " "]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "col-lg-6",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "single-offer-card",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "offer-img",
                                                            children: [(0, a.jsx)("img", {
                                                                src: "assets/images/bg/h3-special-07.png",
                                                                alt: "h3-special-03"
                                                            }), (0, a.jsx)("div", {
                                                                className: "sm-img",
                                                                children: (0, a.jsx)("img", {
                                                                    src: "assets/images/bg/h3-special-03-sm.png",
                                                                    alt: "h3-special-03-sm"
                                                                })
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "offer-content",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "price-sl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "price-tag",
                                                                    children: (0, a.jsxs)("span", {
                                                                        children: ["$55 ", (0, a.jsx)("del", {
                                                                            children: "$75"
                                                                        })]
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "sl-no",
                                                                    children: (0, a.jsx)("span", {
                                                                        children: "07"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("h3", {
                                                                children: (0, a.jsx)(t(), {
                                                                    legacyBehavior: !0,
                                                                    href: "/shop-details",
                                                                    children: "Prwan with Kabab."
                                                                })
                                                            }), (0, a.jsxs)("p", {
                                                                children: ["It’s so tasty and delicious for creating our customer. So visit our restaurant.", " "]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "col-lg-6 d-flex justify-content-lg-end",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "single-offer-card",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "offer-img",
                                                            children: [(0, a.jsx)("img", {
                                                                src: "assets/images/bg/h3-special-08.png",
                                                                alt: "h3-special-04"
                                                            }), (0, a.jsx)("div", {
                                                                className: "sm-img",
                                                                children: (0, a.jsx)("img", {
                                                                    src: "assets/images/bg/h3-special-04-sm.png",
                                                                    alt: "h3-special-04-sm"
                                                                })
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "offer-content",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "price-sl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "price-tag",
                                                                    children: (0, a.jsxs)("span", {
                                                                        children: ["$45 ", (0, a.jsx)("del", {
                                                                            children: "$65"
                                                                        })]
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "sl-no",
                                                                    children: (0, a.jsx)("span", {
                                                                        children: "08"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("h3", {
                                                                children: (0, a.jsx)(t(), {
                                                                    legacyBehavior: !0,
                                                                    href: "/shop-details",
                                                                    children: "Mutton with Pasta."
                                                                })
                                                            }), (0, a.jsxs)("p", {
                                                                children: ["It’s so tasty and delicious for creating our customer. So visit our restaurant.", " "]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        }), (0, a.jsx)(m.o5, {
                                            className: "swiper-slide",
                                            children: (0, a.jsxs)("div", {
                                                className: "row position-relative g-lg-5 g-4",
                                                children: [(0, a.jsx)("div", {
                                                    className: "divider"
                                                }), (0, a.jsx)("div", {
                                                    className: "col-lg-6",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "single-offer-card",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "offer-img",
                                                            children: [(0, a.jsx)("img", {
                                                                src: "assets/images/bg/h3-special-01.png",
                                                                alt: "h3-special-01"
                                                            }), (0, a.jsx)("div", {
                                                                className: "sm-img",
                                                                children: (0, a.jsx)("img", {
                                                                    src: "assets/images/bg/h3-special-01-sm.png",
                                                                    alt: "h3-special-01-sm"
                                                                })
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "offer-content",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "price-sl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "price-tag",
                                                                    children: (0, a.jsxs)("span", {
                                                                        children: ["$60 ", (0, a.jsx)("del", {
                                                                            children: "$75"
                                                                        })]
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "sl-no",
                                                                    children: (0, a.jsx)("span", {
                                                                        children: "09"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("h3", {
                                                                children: (0, a.jsx)(t(), {
                                                                    legacyBehavior: !0,
                                                                    href: "/shop-details",
                                                                    children: "Chicken with Drinks."
                                                                })
                                                            }), (0, a.jsxs)("p", {
                                                                children: ["It’s so tasty and delicious for creating our customer. So visit our restaurant.", " "]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "col-lg-6 d-flex justify-content-lg-end",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "single-offer-card",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "offer-img",
                                                            children: [(0, a.jsx)("img", {
                                                                src: "assets/images/bg/h3-special-02.png",
                                                                alt: "h3-special-01"
                                                            }), (0, a.jsx)("div", {
                                                                className: "sm-img",
                                                                children: (0, a.jsx)("img", {
                                                                    src: "assets/images/bg/h3-special-02-sm.png",
                                                                    alt: "h3-special-01-sm"
                                                                })
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "offer-content",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "price-sl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "price-tag",
                                                                    children: (0, a.jsxs)("span", {
                                                                        children: ["$40 ", (0, a.jsx)("del", {
                                                                            children: "$55"
                                                                        })]
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "sl-no",
                                                                    children: (0, a.jsx)("span", {
                                                                        children: "10"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("h3", {
                                                                children: (0, a.jsx)(t(), {
                                                                    legacyBehavior: !0,
                                                                    href: "/shop-details",
                                                                    children: "Burger with Drinks."
                                                                })
                                                            }), (0, a.jsxs)("p", {
                                                                children: ["It’s so tasty and delicious for creating our customer. So visit our restaurant.", " "]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "col-lg-6",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "single-offer-card",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "offer-img",
                                                            children: [(0, a.jsx)("img", {
                                                                src: "assets/images/bg/h3-special-03.png",
                                                                alt: "h3-special-03"
                                                            }), (0, a.jsx)("div", {
                                                                className: "sm-img",
                                                                children: (0, a.jsx)("img", {
                                                                    src: "assets/images/bg/h3-special-03-sm.png",
                                                                    alt: "h3-special-03-sm"
                                                                })
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "offer-content",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "price-sl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "price-tag",
                                                                    children: (0, a.jsxs)("span", {
                                                                        children: ["$90 ", (0, a.jsx)("del", {
                                                                            children: "$95"
                                                                        })]
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "sl-no",
                                                                    children: (0, a.jsx)("span", {
                                                                        children: "11"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("h3", {
                                                                children: (0, a.jsx)(t(), {
                                                                    legacyBehavior: !0,
                                                                    href: "/shop-details",
                                                                    children: "Soup with Kabab."
                                                                })
                                                            }), (0, a.jsxs)("p", {
                                                                children: ["It’s so tasty and delicious for creating our customer. So visit our restaurant.", " "]
                                                            })]
                                                        })]
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "col-lg-6 d-flex justify-content-lg-end",
                                                    children: (0, a.jsxs)("div", {
                                                        className: "single-offer-card",
                                                        children: [(0, a.jsxs)("div", {
                                                            className: "offer-img",
                                                            children: [(0, a.jsx)("img", {
                                                                src: "assets/images/bg/h3-special-04.png",
                                                                alt: "h3-special-04"
                                                            }), (0, a.jsx)("div", {
                                                                className: "sm-img",
                                                                children: (0, a.jsx)("img", {
                                                                    src: "assets/images/bg/h3-special-04-sm.png",
                                                                    alt: "h3-special-04-sm"
                                                                })
                                                            })]
                                                        }), (0, a.jsxs)("div", {
                                                            className: "offer-content",
                                                            children: [(0, a.jsxs)("div", {
                                                                className: "price-sl",
                                                                children: [(0, a.jsx)("div", {
                                                                    className: "price-tag",
                                                                    children: (0, a.jsxs)("span", {
                                                                        children: ["$75 ", (0, a.jsx)("del", {
                                                                            children: "$85"
                                                                        })]
                                                                    })
                                                                }), (0, a.jsx)("div", {
                                                                    className: "sl-no",
                                                                    children: (0, a.jsx)("span", {
                                                                        children: "12"
                                                                    })
                                                                })]
                                                            }), (0, a.jsx)("h3", {
                                                                children: (0, a.jsx)(t(), {
                                                                    legacyBehavior: !0,
                                                                    href: "/shop-details",
                                                                    children: "Pizza with Pasta."
                                                                })
                                                            }), (0, a.jsxs)("p", {
                                                                children: ["It’s so tasty and delicious for creating our customer. So visit our restaurant.", " "]
                                                            })]
                                                        })]
                                                    })
                                                })]
                                            })
                                        })]
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: "row position-relative",
                                children: (0, a.jsx)("div", {
                                    className: "col-lg-12 d-flex justify-content-center",
                                    children: (0, a.jsx)("div", {
                                        className: "swiper-pagination-i"
                                    })
                                })
                            })]
                        })
                    })
                },
                j = function() {
                    return (0, a.jsx)("div", {
                        className: "home3-blog-area mb-120",
                        children: (0, a.jsxs)("div", {
                            className: "container",
                            children: [(0, a.jsx)("div", {
                                className: "row justify-content-center mb-45",
                                children: (0, a.jsx)("div", {
                                    className: "col-lg-8",
                                    children: (0, a.jsxs)("div", {
                                        className: "section-title3 text-center",
                                        children: [(0, a.jsxs)("span", {
                                            children: [" ", (0, a.jsx)("img", {
                                                className: "left-vec",
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: ""
                                            }), "Recent Blog", (0, a.jsx)("img", {
                                                className: "right-vec",
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: ""
                                            })]
                                        }), (0, a.jsx)("h2", {
                                            children: "Our Recently News & Events"
                                        })]
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: "row g-4 justify-content-center",
                                children: [(0, a.jsx)("div", {
                                    className: "col-xxl-6 col-xl-5 col-lg-9",
                                    children: (0, a.jsxs)("div", {
                                        className: "h3-blog-wrap-1",
                                        children: [(0, a.jsxs)("div", {
                                            className: "blog-img",
                                            children: [(0, a.jsx)("img", {
                                                className: "img-fluid",
                                                src: "assets/images/blog/h3-blog-1.png",
                                                alt: ""
                                            }), (0, a.jsx)("div", {
                                                className: "batch",
                                                children: (0, a.jsx)(t(), {
                                                    legacyBehavior: !0,
                                                    href: "/blog-grid",
                                                    children: (0, a.jsx)("a", {
                                                        children: "22 June,2022"
                                                    })
                                                })
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "blog-content",
                                            children: [(0, a.jsx)("div", {
                                                className: "blog-meta",
                                                children: (0, a.jsxs)("ul", {
                                                    children: [(0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            href: "/blog-grid",
                                                            legacyBehavior: !0,
                                                            children: (0, a.jsxs)("a", {
                                                                children: [(0, a.jsx)("img", {
                                                                    src: "assets/images/icon/User2.svg",
                                                                    alt: "User2"
                                                                }), "By Admin"]
                                                            })
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)(t(), {
                                                            legacyBehavior: !0,
                                                            href: "/blog-grid",
                                                            children: (0, a.jsxs)("a", {
                                                                children: [(0, a.jsx)("img", {
                                                                    src: "assets/images/icon/Comment2.svg",
                                                                    alt: "Comment2"
                                                                }), "Comment(10)"]
                                                            })
                                                        })
                                                    })]
                                                })
                                            }), (0, a.jsx)("h3", {
                                                children: (0, a.jsx)(t(), {
                                                    legacyBehavior: !0,
                                                    href: "/blog-details",
                                                    children: (0, a.jsx)("a", {
                                                        children: "Food is bring to happy & healthy life"
                                                    })
                                                })
                                            }), (0, a.jsx)("p", {
                                                children: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
                                            }), (0, a.jsx)("div", {
                                                className: "continue-btn",
                                                children: (0, a.jsx)(t(), {
                                                    href: "/blog-details",
                                                    legacyBehavior: !0,
                                                    children: (0, a.jsxs)("a", {
                                                        children: ["Continue Reading ", (0, a.jsx)("i", {
                                                            className: "bi bi-arrow-right"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-xxl-6 col-xl-7 col-lg-12",
                                    children: (0, a.jsxs)("div", {
                                        className: "row",
                                        children: [(0, a.jsx)("div", {
                                            className: "col-xxl-12 col-xl-6 col-lg-6 col-sm-6 ",
                                            children: (0, a.jsxs)("div", {
                                                className: "blog-card-alfa one",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "blog-content",
                                                    children: [(0, a.jsx)("h3", {
                                                        children: (0, a.jsx)(t(), {
                                                            legacyBehavior: !0,
                                                            href: "/blog-details",
                                                            children: (0, a.jsx)("a", {
                                                                children: "Food is everywhere, Food is enjoyable zone."
                                                            })
                                                        })
                                                    }), (0, a.jsx)("p", {
                                                        children: "Many desktop publishing packages web. "
                                                    }), (0, a.jsx)("div", {
                                                        className: "continue-btn",
                                                        children: (0, a.jsx)(t(), {
                                                            legacyBehavior: !0,
                                                            href: "/blog-details",
                                                            children: (0, a.jsxs)("a", {
                                                                children: ["Continue Reading ", (0, a.jsx)("i", {
                                                                    className: "bi bi-arrow-right"
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "blog-img",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/blog/h3-blog-2.png",
                                                        alt: "h3-blog-2"
                                                    })
                                                })]
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "col-xxl-12 col-xl-6 col-lg-6 col-sm-6 ",
                                            children: (0, a.jsxs)("div", {
                                                className: "blog-card-alfa",
                                                children: [(0, a.jsx)("div", {
                                                    className: "blog-img",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/blog/h3-blog-3.png",
                                                        alt: "h3-blog-3"
                                                    })
                                                }), (0, a.jsxs)("div", {
                                                    className: "blog-content",
                                                    children: [(0, a.jsx)("h3", {
                                                        children: (0, a.jsx)(t(), {
                                                            legacyBehavior: !0,
                                                            href: "/blog-details",
                                                            children: (0, a.jsx)("a", {
                                                                children: "Eat Tasty Food, Food is enjoyable zone."
                                                            })
                                                        })
                                                    }), (0, a.jsx)("p", {
                                                        children: "Many desktop publishing packages editors."
                                                    }), (0, a.jsx)("div", {
                                                        className: "continue-btn",
                                                        children: (0, a.jsx)(t(), {
                                                            legacyBehavior: !0,
                                                            href: "/blog-details",
                                                            children: (0, a.jsxs)("a", {
                                                                children: ["Continue Reading ", (0, a.jsx)("i", {
                                                                    className: "bi bi-arrow-right"
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "col-lg-12 d-flex justify-content-center",
                                            children: (0, a.jsx)("div", {
                                                className: "view-btn",
                                                children: (0, a.jsx)(t(), {
                                                    legacyBehavior: !0,
                                                    href: "/blog-grid",
                                                    children: (0, a.jsxs)("a", {
                                                        className: "primary-btn7 btn-md2",
                                                        children: [(0, a.jsx)("i", {
                                                            className: "bi bi-arrow-up-right-circle"
                                                        }), " View More"]
                                                    })
                                                })
                                            })
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                g = i(4200),
                u = function() {
                    return (0, a.jsx)("div", {
                        className: "home3-chef mb-120",
                        children: (0, a.jsxs)("div", {
                            className: "container",
                            children: [(0, a.jsx)("div", {
                                className: "row justify-content-center mb-45",
                                children: (0, a.jsx)("div", {
                                    className: "col-lg-8",
                                    children: (0, a.jsxs)("div", {
                                        className: "section-title3 text-center",
                                        children: [(0, a.jsxs)("span", {
                                            children: [" ", (0, a.jsx)("img", {
                                                className: "left-vec",
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: ""
                                            }), "Experties", (0, a.jsx)("img", {
                                                className: "right-vec",
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: ""
                                            })]
                                        }), (0, a.jsx)("h2", {
                                            children: "Our Experties Chef"
                                        })]
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: "row justify-content-center g-4",
                                children: [(0, a.jsx)("div", {
                                    className: "col-lg-4 col-md-6 col-sm-10",
                                    children: (0, a.jsxs)("div", {
                                        className: "cooking-expart-wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "exparts-img",
                                            children: [(0, a.jsx)("img", {
                                                className: "img-fluid",
                                                src: "assets/images/bg/h3-chef-01.png",
                                                alt: ""
                                            }), (0, a.jsxs)("div", {
                                                className: "social-area",
                                                children: [(0, a.jsx)("div", {
                                                    className: "share-icon",
                                                    children: (0, a.jsx)("i", {
                                                        className: "bi bi-plus-lg"
                                                    })
                                                }), (0, a.jsxs)("ul", {
                                                    children: [(0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "https://www.facebook.com/",
                                                            children: (0, a.jsx)("i", {
                                                                className: "bx bxl-facebook"
                                                            })
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "https://www.instagram.com/",
                                                            children: (0, a.jsx)("i", {
                                                                className: "bx bxl-instagram-alt"
                                                            })
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "https://twitter.com/",
                                                            children: (0, a.jsx)("i", {
                                                                className: "bx bxl-twitter"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "exparts-content text-center",
                                            children: [(0, a.jsx)("h3", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "/chef-details",
                                                    legacyBehavior: !0,
                                                    children: (0, a.jsx)("a", {
                                                        children: "Josef Harry"
                                                    })
                                                })
                                            }), (0, a.jsx)("p", {
                                                children: "Senior Chef"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-lg-4 col-md-6 col-sm-10",
                                    children: (0, a.jsxs)("div", {
                                        className: "cooking-expart-wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "exparts-img",
                                            children: [(0, a.jsx)("img", {
                                                className: "img-fluid",
                                                src: "assets/images/bg/h3-chef-02.png",
                                                alt: ""
                                            }), (0, a.jsxs)("div", {
                                                className: "social-area",
                                                children: [(0, a.jsx)("div", {
                                                    className: "share-icon",
                                                    children: (0, a.jsx)("i", {
                                                        className: "bi bi-plus-lg"
                                                    })
                                                }), (0, a.jsxs)("ul", {
                                                    children: [(0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "https://www.facebook.com/",
                                                            children: (0, a.jsx)("i", {
                                                                className: "bx bxl-facebook"
                                                            })
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "https://www.instagram.com/",
                                                            children: (0, a.jsx)("i", {
                                                                className: "bx bxl-instagram-alt"
                                                            })
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "https://twitter.com/",
                                                            children: (0, a.jsx)("i", {
                                                                className: "bx bxl-twitter"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "exparts-content text-center",
                                            children: [(0, a.jsx)("h3", {
                                                children: (0, a.jsx)(t(), {
                                                    legacyBehavior: !0,
                                                    href: "/chef-details",
                                                    children: (0, a.jsx)("a", {
                                                        children: "Hony Harry"
                                                    })
                                                })
                                            }), (0, a.jsx)("p", {
                                                children: "Junior Chef"
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-lg-4 col-md-6 col-sm-10",
                                    children: (0, a.jsxs)("div", {
                                        className: "cooking-expart-wrap",
                                        children: [(0, a.jsxs)("div", {
                                            className: "exparts-img",
                                            children: [(0, a.jsx)("img", {
                                                className: "img-fluid",
                                                src: "assets/images/bg/h3-chef-03.png",
                                                alt: ""
                                            }), (0, a.jsxs)("div", {
                                                className: "social-area",
                                                children: [(0, a.jsx)("div", {
                                                    className: "share-icon",
                                                    children: (0, a.jsx)("i", {
                                                        className: "bi bi-plus-lg"
                                                    })
                                                }), (0, a.jsxs)("ul", {
                                                    children: [(0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "https://www.facebook.com/",
                                                            children: (0, a.jsx)("i", {
                                                                className: "bx bxl-facebook"
                                                            })
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "https://www.instagram.com/",
                                                            children: (0, a.jsx)("i", {
                                                                className: "bx bxl-instagram-alt"
                                                            })
                                                        })
                                                    }), (0, a.jsx)("li", {
                                                        children: (0, a.jsx)("a", {
                                                            href: "https://twitter.com/",
                                                            children: (0, a.jsx)("i", {
                                                                className: "bx bxl-twitter"
                                                            })
                                                        })
                                                    })]
                                                })]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "exparts-content text-center",
                                            children: [(0, a.jsx)("h3", {
                                                children: (0, a.jsx)(t(), {
                                                    href: "/chef-details",
                                                    legacyBehavior: !0,
                                                    children: (0, a.jsx)("a", {
                                                        children: "Smith Robert"
                                                    })
                                                })
                                            }), (0, a.jsx)("p", {
                                                children: "Head of Chef"
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                v = function() {
                    return (0, a.jsx)("div", {
                        className: "h3-facilities mb-120",
                        children: (0, a.jsxs)("div", {
                            className: "container",
                            children: [(0, a.jsx)("div", {
                                className: "row justify-content-center mb-45",
                                children: (0, a.jsx)("div", {
                                    className: "col-lg-8",
                                    children: (0, a.jsxs)("div", {
                                        className: "section-title3 text-center",
                                        children: [(0, a.jsxs)("span", {
                                            children: [" ", (0, a.jsx)("img", {
                                                className: "left-vec",
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: ""
                                            }), " ", "Our Facilities", " ", (0, a.jsx)("img", {
                                                className: "right-vec",
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: ""
                                            })]
                                        }), (0, a.jsx)("h2", {
                                            children: "Restho's Facilities"
                                        })]
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: "row justify-content-center g-4",
                                children: [(0, a.jsx)("div", {
                                    className: "col-lg-3 col-md-4 col-sm-6 col-10",
                                    children: (0, a.jsxs)("div", {
                                        className: "h3-facilities-card text-center",
                                        children: [(0, a.jsx)("div", {
                                            className: "icon",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: "h3-sub-title-vec"
                                            })
                                        }), (0, a.jsx)("h3", {
                                            children: "Our Capacity"
                                        }), (0, a.jsx)("div", {
                                            className: "facilities-img",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/bg/capacity.png",
                                                alt: "capacity"
                                            })
                                        }), (0, a.jsx)("p", {
                                            children: "Almost 300 peoples could eating in our restaurant. "
                                        }), (0, a.jsxs)("div", {
                                            className: "overlay",
                                            children: [(0, a.jsx)("div", {
                                                className: "overlay-img",
                                                children: (0, a.jsx)("img", {
                                                    className: "img-fluid",
                                                    src: "assets/images/bg/capacity2.png",
                                                    alt: ""
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "overlay-content",
                                                children: [(0, a.jsx)("h3", {
                                                    children: "Our Capacity"
                                                }), (0, a.jsx)("p", {
                                                    children: "Standard Parking Space"
                                                }), (0, a.jsxs)("ul", {
                                                    children: [(0, a.jsx)("li", {
                                                        children: "Parralel Parking."
                                                    }), (0, a.jsx)("li", {
                                                        children: "Angle Parking."
                                                    }), (0, a.jsx)("li", {
                                                        children: "Almost 300 Car Parking"
                                                    }), (0, a.jsx)("li", {
                                                        children: "Width 25 & Length 40 feet"
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-lg-3 col-md-4 col-sm-6 col-10",
                                    children: (0, a.jsxs)("div", {
                                        className: "h3-facilities-card text-center",
                                        children: [(0, a.jsx)("div", {
                                            className: "icon",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: "h3-sub-title-vec"
                                            })
                                        }), (0, a.jsx)("h3", {
                                            children: "Car Parking"
                                        }), (0, a.jsx)("div", {
                                            className: "facilities-img",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/bg/car-park2.png",
                                                alt: "car-park2"
                                            })
                                        }), (0, a.jsx)("p", {
                                            children: "Almost 300 peoples could eating in our restaurant. "
                                        }), (0, a.jsxs)("div", {
                                            className: "overlay",
                                            children: [(0, a.jsx)("div", {
                                                className: "overlay-img",
                                                children: (0, a.jsx)("img", {
                                                    className: "img-fluid",
                                                    src: "assets/images/bg/car-park.png",
                                                    alt: ""
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "overlay-content",
                                                children: [(0, a.jsx)("h3", {
                                                    children: "Car Parking"
                                                }), (0, a.jsx)("p", {
                                                    children: "Standard Parking Space"
                                                }), (0, a.jsxs)("ul", {
                                                    children: [(0, a.jsx)("li", {
                                                        children: "Parralel Parking."
                                                    }), (0, a.jsx)("li", {
                                                        children: "Angle Parking."
                                                    }), (0, a.jsx)("li", {
                                                        children: "Almost 300 Car Parking"
                                                    }), (0, a.jsx)("li", {
                                                        children: "Width 25 & Length 40 feet"
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-lg-3 col-md-4 col-sm-6 col-10",
                                    children: (0, a.jsxs)("div", {
                                        className: "h3-facilities-card text-center",
                                        children: [(0, a.jsx)("div", {
                                            className: "icon",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: "h3-sub-title-vec"
                                            })
                                        }), (0, a.jsx)("h3", {
                                            children: "Play Zone"
                                        }), (0, a.jsx)("div", {
                                            className: "facilities-img",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/bg/play-zone.png",
                                                alt: "capacity"
                                            })
                                        }), (0, a.jsx)("p", {
                                            children: "Almost 300 peoples could eating in our restaurant. "
                                        }), (0, a.jsxs)("div", {
                                            className: "overlay",
                                            children: [(0, a.jsx)("div", {
                                                className: "overlay-img",
                                                children: (0, a.jsx)("img", {
                                                    className: "img-fluid",
                                                    src: "assets/images/bg/play-zone2.png",
                                                    alt: ""
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "overlay-content",
                                                children: [(0, a.jsx)("h3", {
                                                    children: "Play Zone"
                                                }), (0, a.jsx)("p", {
                                                    children: "Standard Parking Space"
                                                }), (0, a.jsxs)("ul", {
                                                    children: [(0, a.jsx)("li", {
                                                        children: "Parralel Parking."
                                                    }), (0, a.jsx)("li", {
                                                        children: "Angle Parking."
                                                    }), (0, a.jsx)("li", {
                                                        children: "Almost 300 Car Parking"
                                                    }), (0, a.jsx)("li", {
                                                        children: "Width 25 & Length 40 feet"
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-lg-3 col-md-4 col-sm-6 col-10",
                                    children: (0, a.jsxs)("div", {
                                        className: "h3-facilities-card text-center",
                                        children: [(0, a.jsx)("div", {
                                            className: "icon",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: "h3-sub-title-vec"
                                            })
                                        }), (0, a.jsx)("h3", {
                                            children: "Free Wifi"
                                        }), (0, a.jsx)("div", {
                                            className: "facilities-img",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/bg/wifi.png",
                                                alt: "capacity"
                                            })
                                        }), (0, a.jsx)("p", {
                                            children: "Almost 300 peoples could eating in our restaurant. "
                                        }), (0, a.jsxs)("div", {
                                            className: "overlay",
                                            children: [(0, a.jsx)("div", {
                                                className: "overlay-img",
                                                children: (0, a.jsx)("img", {
                                                    className: "img-fluid",
                                                    src: "assets/images/bg/wifi2.png",
                                                    alt: ""
                                                })
                                            }), (0, a.jsxs)("div", {
                                                className: "overlay-content",
                                                children: [(0, a.jsx)("h3", {
                                                    children: "Free Wifi"
                                                }), (0, a.jsx)("p", {
                                                    children: "Standard Parking Space"
                                                }), (0, a.jsxs)("ul", {
                                                    children: [(0, a.jsx)("li", {
                                                        children: "Parralel Parking."
                                                    }), (0, a.jsx)("li", {
                                                        children: "Angle Parking."
                                                    }), (0, a.jsx)("li", {
                                                        children: "Almost 300 Car Parking"
                                                    }), (0, a.jsx)("li", {
                                                        children: "Width 25 & Length 40 feet"
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                p = i(8004),
                f = i(1163);
            let N = {
                activeMenu: "",
                mobileMenuState: !1,
                navState: !1,
                scrollY: 0
            };

            function b(s, e) {
                switch (e.type) {
                    case "homeOne":
                        return { ...s,
                            activeMenu: "homeOne"
                        };
                    case "suits":
                        return { ...s,
                            activeMenu: "suits"
                        };
                    case "blog":
                        return { ...s,
                            activeMenu: "blog"
                        };
                    case "menu":
                        return { ...s,
                            activeMenu: "menu"
                        };
                    case "gallary":
                        return { ...s,
                            activeMenu: "gallary"
                        };
                    case "shop":
                        return { ...s,
                            activeMenu: "shop"
                        };
                    case "chef":
                        return { ...s,
                            activeMenu: "chef"
                        };
                    case "pages":
                        return { ...s,
                            activeMenu: "pages"
                        };
                    case "mobileMenu":
                        return { ...s,
                            mobileMenuState: e.isMobileMenu
                        };
                    case "setScrollY":
                        return { ...s,
                            scrollY: e.payload
                        };
                    default:
                        throw Error()
                }
            }
            var w = function() {
                    let s = (0, f.useRouter)().pathname,
                        [e, i] = (0, n.useReducer)(b, N),
                        l = (0, n.useRef)(null),
                        c = () => {
                            let {
                                scrollY: s
                            } = window;
                            i({
                                type: "setScrollY",
                                payload: s
                            })
                        };
                    return (0, n.useEffect)(() => (window.addEventListener("scroll", c), () => {
                        window.removeEventListener("scroll", c)
                    }), []), (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "top-bar three",
                            children: (0, a.jsx)("div", {
                                className: "container-lg container-fluid bg-white",
                                children: (0, a.jsxs)("div", {
                                    className: "row p-12 align-items-center position-relative",
                                    children: [(0, a.jsxs)("div", {
                                        className: "col-lg-5 d-flex align-items-center justify-content-md-start justify-content-center",
                                        children: [(0, a.jsx)("div", {
                                            className: "vector-left",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/bg/topbar-vec-left.png",
                                                alt: ""
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "welcome-note",
                                            children: (0, a.jsxs)("p", {
                                                children: ["Welcome Our Restho Restaurant!", " ", (0, a.jsx)(t(), {
                                                    legacyBehavior: !0,
                                                    href: "/reservation",
                                                    children: (0, a.jsx)("a", {
                                                        children: "For Private Event"
                                                    })
                                                })]
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "col-lg-7 d-flex justify-content-lg-end justify-content-center align-items-center",
                                        children: [(0, a.jsx)("div", {
                                            className: "vector-right",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/bg/topbar-vec-right.png",
                                                alt: ""
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "contact-info",
                                            children: (0, a.jsxs)("ul", {
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsxs)("a", {
                                                        href: "mailto:info@example.com",
                                                        children: [(0, a.jsx)("i", {
                                                            className: "bi bi-envelope"
                                                        }), " info@example.com"]
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsxs)("a", {
                                                        children: [(0, a.jsx)("i", {
                                                            className: "bi bi-geo-alt"
                                                        }), "Road-01, Block-B, West London City"]
                                                    })
                                                })]
                                            })
                                        })]
                                    })]
                                })
                            })
                        }), (0, a.jsx)("header", {
                            ref: l,
                            className: e.scrollY > 10 ? "sticky header-area style-3" : "header-area style-3",
                            children: (0, a.jsxs)("div", {
                                className: "container-fluid d-flex justify-content-between align-items-center",
                                children: [(0, a.jsx)("div", {
                                    className: "header-logo",
                                    children: (0, a.jsx)(t(), {
                                        legacyBehavior: !0,
                                        href: "/",
                                        children: (0, a.jsx)("a", {
                                            children: (0, a.jsx)("img", {
                                                alt: "image",
                                                className: "img-fluid",
                                                src: "assets/images/header2-logo.svg"
                                            })
                                        })
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: !0 == e.mobileMenuState ? "main-menu show-menu" : "main-menu",
                                    children: [(0, a.jsxs)("div", {
                                        className: "mobile-logo-area d-lg-none d-flex justify-content-between align-items-center",
                                        children: [(0, a.jsx)("div", {
                                            className: "mobile-logo-wrap",
                                            children: (0, a.jsx)(t(), {
                                                href: "/",
                                                legacyBehavior: !0,
                                                children: (0, a.jsx)("a", {
                                                    children: (0, a.jsx)("img", {
                                                        alt: "image",
                                                        src: "assets/images/header2-logo.svg"
                                                    })
                                                })
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "menu-close-btn",
                                            onClick: () => i({
                                                type: "mobileMenu",
                                                isMobileMenu: !1
                                            }),
                                            children: (0, a.jsx)("i", {
                                                className: "bi bi-x-lg"
                                            })
                                        })]
                                    }), (0, a.jsxs)("ul", {
                                        className: "menu-list",
                                        children: [(0, a.jsxs)("li", {
                                            className: "menu-item-has-children",
                                            children: [(0, a.jsx)("a", {
                                                href: "#",
                                                className: "/" === s ? "drop-down active" : "drop-down",
                                                children: "Home"
                                            }), (0, a.jsx)("i", {
                                                onClick: () => i({
                                                    type: "homeOne"
                                                }),
                                                className: "homeOne" === e.activeMenu ? "bi bi-plus dropdown-icon active" : "bi bi-plus dropdown-icon"
                                            }), (0, a.jsxs)("ul", {
                                                className: "homeOne" === e.activeMenu ? "sub-menu  d-block" : "sub-menu d-xl-block d-none",
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/",
                                                        className: "/" === s ? "active" : "disable",
                                                        children: "Home One"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/index2",
                                                        className: "/index2" === s ? "active" : "disable",
                                                        children: "Home Two"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/index3",
                                                        className: "/index3" === s ? "active" : "disable",
                                                        children: "Home Three"
                                                    })
                                                })]
                                            })]
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "/about",
                                                className: "/about" === s ? "active" : "",
                                                children: "About"
                                            })
                                        }), (0, a.jsxs)("li", {
                                            className: "menu-item-has-children",
                                            children: [(0, a.jsx)(t(), {
                                                href: "/menu1",
                                                className: "/menu1" === s || "/menu2" === s || "/3col-menu" === s ? "drop-down active" : "drop-down",
                                                children: "Menu"
                                            }), (0, a.jsx)("i", {
                                                onClick: () => i({
                                                    type: "menu"
                                                }),
                                                className: "menu" === e.activeMenu ? "bi bi-plus dropdown-icon active" : "bi bi-plus dropdown-icon"
                                            }), (0, a.jsxs)("ul", {
                                                className: "menu" === e.activeMenu ? "sub-menu  d-block" : "sub-menu d-xl-block d-none",
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/menu1",
                                                        className: "/menu1" === s ? "active" : "disable",
                                                        children: "Menu List-01"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/menu2",
                                                        className: "/menu2" === s ? "active" : "disable",
                                                        children: "Menu List-02"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/3col-menu",
                                                        className: "/3col-menu" === s ? "active" : "disable",
                                                        children: "3 Columns Menu"
                                                    })
                                                })]
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            className: "menu-item-has-children",
                                            children: [(0, a.jsx)("a", {
                                                href: "#",
                                                className: "drop-down",
                                                children: "Pages"
                                            }), (0, a.jsx)("i", {
                                                onClick: () => i({
                                                    type: "pages"
                                                }),
                                                className: "pages" === e.activeMenu ? "bi bi-plus dropdown-icon active" : "bi bi-plus dropdown-icon"
                                            }), (0, a.jsxs)("ul", {
                                                className: "pages" === e.activeMenu ? "sub-menu  d-block" : "gallary" === e.activeMenu || "chef" === e.activeMenu || "shop" === e.activeMenu ? "sub-menu  d-block" : "sub-menu d-xl-block d-none",
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/category",
                                                        className: "/category" === s ? "active" : "disable",
                                                        children: "Food Category"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/reservation",
                                                        className: "/reservation" === s ? "active" : "disable",
                                                        children: "Reservation"
                                                    })
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)(t(), {
                                                        href: "#",
                                                        className: "#" === s ? "active" : "disable",
                                                        children: "Gallery"
                                                    }), (0, a.jsx)("i", {
                                                        className: "d-lg-flex d-none bi bi-chevron-right dropdown-icon"
                                                    }), (0, a.jsx)("i", {
                                                        className: "d-lg-none d-flex bi bi-chevron-down dropdown-icon",
                                                        onClick: () => i({
                                                            type: "gallary"
                                                        })
                                                    }), (0, a.jsxs)("ul", {
                                                        className: "gallary" === e.activeMenu ? "sub-menu d-block" : "sub-menu d-none",
                                                        children: [(0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "/2col-gallery",
                                                                className: "/2col-gallery" === s ? "active" : "disable",
                                                                children: "2 Columns Gallery"
                                                            })
                                                        }), (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "/3col-gallery",
                                                                className: "/3col-gallery" === s ? "active" : "disable",
                                                                children: "3 Columns Gallery"
                                                            })
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)("a", {
                                                        href: "#",
                                                        className: "/chef-expertis" === s ? "active" : "disable",
                                                        children: "Chef"
                                                    }), (0, a.jsx)("i", {
                                                        className: "d-lg-flex d-none bi bi-chevron-right dropdown-icon"
                                                    }), (0, a.jsx)("i", {
                                                        className: "d-lg-none d-flex bi bi-chevron-down dropdown-icon",
                                                        onClick: () => i({
                                                            type: "chef"
                                                        })
                                                    }), (0, a.jsxs)("ul", {
                                                        className: "chef" === e.activeMenu ? "sub-menu d-block" : "sub-menu d-none",
                                                        children: [(0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "/chef-expertis",
                                                                className: "/chef-expertis" === s ? "active" : "disable",
                                                                children: "Chef Experties"
                                                            })
                                                        }), (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "/chef-details",
                                                                className: "/chef-details" === s ? "active" : "disable",
                                                                children: "Chef Details"
                                                            })
                                                        })]
                                                    })]
                                                }), (0, a.jsxs)("li", {
                                                    children: [(0, a.jsx)(t(), {
                                                        href: "/shop",
                                                        className: "/shop" === s ? "active" : "disable",
                                                        children: "Shop"
                                                    }), (0, a.jsx)("i", {
                                                        className: "d-lg-flex d-none bi bi-chevron-right dropdown-icon"
                                                    }), (0, a.jsx)("i", {
                                                        className: "d-lg-none d-flex bi bi-chevron-down dropdown-icon",
                                                        onClick: () => i({
                                                            type: "shop"
                                                        })
                                                    }), (0, a.jsxs)("ul", {
                                                        className: "shop" === e.activeMenu ? "sub-menu d-block" : "sub-menu d-none",
                                                        children: [(0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "/shop",
                                                                className: "/shop" === s ? "active" : "disable",
                                                                children: "Shop"
                                                            })
                                                        }), (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "/shop-details",
                                                                className: "/shop-details" === s ? "active" : "disable",
                                                                children: "Shop Details"
                                                            })
                                                        }), (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "/cart",
                                                                className: "/cart" === s ? "active" : "disable",
                                                                children: "Cart"
                                                            })
                                                        }), (0, a.jsx)("li", {
                                                            children: (0, a.jsx)(t(), {
                                                                href: "/check-out",
                                                                className: "/check-out" === s ? "active" : "disable",
                                                                children: "Checkout"
                                                            })
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/faq",
                                                        children: "Faq"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/error",
                                                        children: "Error"
                                                    })
                                                })]
                                            })]
                                        }), (0, a.jsxs)("li", {
                                            className: "menu-item-has-children",
                                            children: [(0, a.jsx)("a", {
                                                href: "#",
                                                children: "Blog"
                                            }), (0, a.jsx)("i", {
                                                onClick: () => i({
                                                    type: "blog"
                                                }),
                                                className: "blog" === e.activeMenu ? "bi bi-plus dropdown-icon active" : "bi bi-plus dropdown-icon"
                                            }), (0, a.jsxs)("ul", {
                                                className: "blog" === e.activeMenu ? "sub-menu  d-block" : "sub-menu d-xl-block d-none",
                                                children: [(0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/blog-grid",
                                                        children: "Blog Grid"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/blog-standard",
                                                        children: "Blog Standard"
                                                    })
                                                }), (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(t(), {
                                                        href: "/blog-details",
                                                        children: "Blog Details"
                                                    })
                                                })]
                                            })]
                                        }), (0, a.jsx)("li", {
                                            children: (0, a.jsx)(t(), {
                                                href: "/contact",
                                                className: "/contact" === s ? "active" : "disable",
                                                children: "Contact"
                                            })
                                        })]
                                    }), (0, a.jsxs)("div", {
                                        className: "hotline d-lg-none d-flex mb-30",
                                        children: [(0, a.jsx)("div", {
                                            className: "hotline-icon",
                                            children: (0, a.jsxs)("svg", {
                                                width: 26,
                                                height: 26,
                                                viewBox: "0 0 26 26",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0, a.jsx)("path", {
                                                    d: "M20.5488 16.106C20.0165 15.5518 19.3745 15.2554 18.694 15.2554C18.0191 15.2554 17.3716 15.5463 16.8173 16.1005L15.0833 17.8291C14.9406 17.7522 14.7979 17.6809 14.6608 17.6096C14.4632 17.5108 14.2766 17.4175 14.1175 17.3187C12.4932 16.2871 11.0171 14.9426 9.6013 13.2031C8.91536 12.3361 8.45441 11.6063 8.11968 10.8655C8.56965 10.4539 8.9867 10.0259 9.39277 9.61431C9.54642 9.46066 9.70007 9.30152 9.85372 9.14787C11.0061 7.9955 11.0061 6.50291 9.85372 5.35054L8.35564 3.85246C8.18553 3.68234 8.00993 3.50674 7.8453 3.33115C7.51606 2.99092 7.17034 2.63972 6.81366 2.31047C6.28137 1.78368 5.64483 1.50381 4.97535 1.50381C4.30588 1.50381 3.65836 1.78368 3.10961 2.31047C3.10412 2.31596 3.10412 2.31596 3.09864 2.32145L1.23289 4.20365C0.530497 4.90605 0.129911 5.7621 0.0421114 6.75533C-0.089588 8.35768 0.382335 9.85027 0.744508 10.827C1.63348 13.2251 2.96145 15.4475 4.94243 17.8291C7.34594 20.699 10.2378 22.9653 13.5413 24.5622C14.8034 25.1603 16.4881 25.8682 18.3703 25.9889C18.4855 25.9944 18.6062 25.9999 18.716 25.9999C19.9836 25.9999 21.0482 25.5445 21.8823 24.639C21.8878 24.628 21.8987 24.6226 21.9042 24.6116C22.1896 24.2659 22.5188 23.9531 22.8645 23.6184C23.1005 23.3934 23.3419 23.1574 23.5779 22.9105C24.1212 22.3453 24.4065 21.6868 24.4065 21.0118C24.4065 20.3314 24.1157 19.6783 23.5614 19.1296L20.5488 16.106ZM22.5133 21.8843C22.5078 21.8843 22.5078 21.8898 22.5133 21.8843C22.2993 22.1148 22.0798 22.3233 21.8439 22.5538C21.4872 22.894 21.125 23.2507 20.7848 23.6513C20.2305 24.2439 19.5775 24.5238 18.7215 24.5238C18.6392 24.5238 18.5514 24.5238 18.4691 24.5183C16.8393 24.414 15.3247 23.7775 14.1888 23.2342C11.0829 21.7307 8.35564 19.596 6.08931 16.8907C4.21808 14.6354 2.96694 12.5501 2.13833 10.3112C1.62799 8.94484 1.44142 7.88026 1.52373 6.87606C1.57861 6.23402 1.82554 5.70174 2.281 5.24628L4.15223 3.37504C4.42112 3.12262 4.70647 2.98543 4.98633 2.98543C5.33204 2.98543 5.6119 3.19396 5.7875 3.36956C5.79299 3.37504 5.79847 3.38053 5.80396 3.38602C6.1387 3.69881 6.45697 4.02257 6.79171 4.36828C6.96182 4.54388 7.13742 4.71948 7.31302 4.90056L8.8111 6.39865C9.39277 6.98032 9.39277 7.51809 8.8111 8.09976C8.65196 8.2589 8.49831 8.41804 8.33918 8.57169C7.87823 9.04361 7.43923 9.48261 6.96182 9.91063C6.95085 9.92161 6.93987 9.92709 6.93438 9.93807C6.46246 10.41 6.55026 10.8709 6.64903 11.1837C6.65452 11.2002 6.66001 11.2167 6.6655 11.2331C7.05511 12.177 7.60385 13.0659 8.43795 14.125L8.44344 14.1305C9.95798 15.9962 11.5548 17.4504 13.3163 18.5644C13.5413 18.7071 13.7718 18.8223 13.9913 18.932C14.1888 19.0308 14.3754 19.1241 14.5345 19.2229C14.5565 19.2339 14.5784 19.2503 14.6004 19.2613C14.787 19.3546 14.9626 19.3985 15.1436 19.3985C15.5991 19.3985 15.8845 19.1131 15.9777 19.0198L17.8545 17.1431C18.041 16.9566 18.3374 16.7316 18.6831 16.7316C19.0233 16.7316 19.3032 16.9456 19.4733 17.1322C19.4788 17.1376 19.4788 17.1376 19.4842 17.1431L22.5078 20.1667C23.0731 20.7265 23.0731 21.3026 22.5133 21.8843Z"
                                                }), (0, a.jsx)("path", {
                                                    d: "M14.0512 6.18495C15.4889 6.4264 16.7949 7.10685 17.8375 8.14947C18.8802 9.19209 19.5551 10.4981 19.8021 11.9358C19.8624 12.298 20.1752 12.5504 20.5319 12.5504C20.5758 12.5504 20.6142 12.5449 20.6581 12.5395C21.0642 12.4736 21.3331 12.0895 21.2672 11.6834C20.9709 9.94387 20.1478 8.35799 18.8911 7.10136C17.6345 5.84473 16.0486 5.0216 14.3091 4.72528C13.903 4.65943 13.5244 4.92832 13.4531 5.3289C13.3817 5.72949 13.6451 6.1191 14.0512 6.18495Z"
                                                }), (0, a.jsx)("path", {
                                                    d: "M25.9707 11.4691C25.4823 8.60468 24.1324 5.99813 22.0581 3.92387C19.9838 1.8496 17.3773 0.49968 14.5128 0.011294C14.1122 -0.0600432 13.7336 0.214331 13.6623 0.614917C13.5964 1.02099 13.8653 1.39963 14.2714 1.47096C16.8285 1.90447 19.1607 3.11721 21.0155 4.96649C22.8702 6.82125 24.0775 9.15343 24.511 11.7106C24.5714 12.0728 24.8841 12.3252 25.2408 12.3252C25.2847 12.3252 25.3231 12.3197 25.367 12.3142C25.7676 12.2539 26.042 11.8697 25.9707 11.4691Z"
                                                })]
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "hotline-info",
                                            children: [(0, a.jsx)("span", {
                                                children: "Call Now"
                                            }), (0, a.jsx)("h6", {
                                                children: (0, a.jsx)("a", {
                                                    href: "tel:+998-8776345",
                                                    children: "+998-8776345"
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsx)("div", {
                                        className: "reservation-btn d-lg-none d-flex",
                                        children: (0, a.jsx)(t(), {
                                            href: "/reservation",
                                            className: "primary-btn4 btn-md",
                                            children: "Find Reservation"
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "nav-right d-flex jsutify-content-end align-items-center",
                                    children: [(0, a.jsxs)("div", {
                                        className: "hotline d-flex",
                                        children: [(0, a.jsx)("div", {
                                            className: "hotline-icon",
                                            children: (0, a.jsxs)("svg", {
                                                width: 26,
                                                height: 26,
                                                viewBox: "0 0 26 26",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [(0, a.jsx)("path", {
                                                    d: "M20.5488 16.106C20.0165 15.5518 19.3745 15.2554 18.694 15.2554C18.0191 15.2554 17.3716 15.5463 16.8173 16.1005L15.0833 17.8291C14.9406 17.7522 14.7979 17.6809 14.6608 17.6096C14.4632 17.5108 14.2766 17.4175 14.1175 17.3187C12.4932 16.2871 11.0171 14.9426 9.6013 13.2031C8.91536 12.3361 8.45441 11.6063 8.11968 10.8655C8.56965 10.4539 8.9867 10.0259 9.39277 9.61431C9.54642 9.46066 9.70007 9.30152 9.85372 9.14787C11.0061 7.9955 11.0061 6.50291 9.85372 5.35054L8.35564 3.85246C8.18553 3.68234 8.00993 3.50674 7.8453 3.33115C7.51606 2.99092 7.17034 2.63972 6.81366 2.31047C6.28137 1.78368 5.64483 1.50381 4.97535 1.50381C4.30588 1.50381 3.65836 1.78368 3.10961 2.31047C3.10412 2.31596 3.10412 2.31596 3.09864 2.32145L1.23289 4.20365C0.530497 4.90605 0.129911 5.7621 0.0421114 6.75533C-0.089588 8.35768 0.382335 9.85027 0.744508 10.827C1.63348 13.2251 2.96145 15.4475 4.94243 17.8291C7.34594 20.699 10.2378 22.9653 13.5413 24.5622C14.8034 25.1603 16.4881 25.8682 18.3703 25.9889C18.4855 25.9944 18.6062 25.9999 18.716 25.9999C19.9836 25.9999 21.0482 25.5445 21.8823 24.639C21.8878 24.628 21.8987 24.6226 21.9042 24.6116C22.1896 24.2659 22.5188 23.9531 22.8645 23.6184C23.1005 23.3934 23.3419 23.1574 23.5779 22.9105C24.1212 22.3453 24.4065 21.6868 24.4065 21.0118C24.4065 20.3314 24.1157 19.6783 23.5614 19.1296L20.5488 16.106ZM22.5133 21.8843C22.5078 21.8843 22.5078 21.8898 22.5133 21.8843C22.2993 22.1148 22.0798 22.3233 21.8439 22.5538C21.4872 22.894 21.125 23.2507 20.7848 23.6513C20.2305 24.2439 19.5775 24.5238 18.7215 24.5238C18.6392 24.5238 18.5514 24.5238 18.4691 24.5183C16.8393 24.414 15.3247 23.7775 14.1888 23.2342C11.0829 21.7307 8.35564 19.596 6.08931 16.8907C4.21808 14.6354 2.96694 12.5501 2.13833 10.3112C1.62799 8.94484 1.44142 7.88026 1.52373 6.87606C1.57861 6.23402 1.82554 5.70174 2.281 5.24628L4.15223 3.37504C4.42112 3.12262 4.70647 2.98543 4.98633 2.98543C5.33204 2.98543 5.6119 3.19396 5.7875 3.36956C5.79299 3.37504 5.79847 3.38053 5.80396 3.38602C6.1387 3.69881 6.45697 4.02257 6.79171 4.36828C6.96182 4.54388 7.13742 4.71948 7.31302 4.90056L8.8111 6.39865C9.39277 6.98032 9.39277 7.51809 8.8111 8.09976C8.65196 8.2589 8.49831 8.41804 8.33918 8.57169C7.87823 9.04361 7.43923 9.48261 6.96182 9.91063C6.95085 9.92161 6.93987 9.92709 6.93438 9.93807C6.46246 10.41 6.55026 10.8709 6.64903 11.1837C6.65452 11.2002 6.66001 11.2167 6.6655 11.2331C7.05511 12.177 7.60385 13.0659 8.43795 14.125L8.44344 14.1305C9.95798 15.9962 11.5548 17.4504 13.3163 18.5644C13.5413 18.7071 13.7718 18.8223 13.9913 18.932C14.1888 19.0308 14.3754 19.1241 14.5345 19.2229C14.5565 19.2339 14.5784 19.2503 14.6004 19.2613C14.787 19.3546 14.9626 19.3985 15.1436 19.3985C15.5991 19.3985 15.8845 19.1131 15.9777 19.0198L17.8545 17.1431C18.041 16.9566 18.3374 16.7316 18.6831 16.7316C19.0233 16.7316 19.3032 16.9456 19.4733 17.1322C19.4788 17.1376 19.4788 17.1376 19.4842 17.1431L22.5078 20.1667C23.0731 20.7265 23.0731 21.3026 22.5133 21.8843Z"
                                                }), (0, a.jsx)("path", {
                                                    d: "M14.0512 6.18495C15.4889 6.4264 16.7949 7.10685 17.8375 8.14947C18.8802 9.19209 19.5551 10.4981 19.8021 11.9358C19.8624 12.298 20.1752 12.5504 20.5319 12.5504C20.5758 12.5504 20.6142 12.5449 20.6581 12.5395C21.0642 12.4736 21.3331 12.0895 21.2672 11.6834C20.9709 9.94387 20.1478 8.35799 18.8911 7.10136C17.6345 5.84473 16.0486 5.0216 14.3091 4.72528C13.903 4.65943 13.5244 4.92832 13.4531 5.3289C13.3817 5.72949 13.6451 6.1191 14.0512 6.18495Z"
                                                }), (0, a.jsx)("path", {
                                                    d: "M25.9707 11.4691C25.4823 8.60468 24.1324 5.99813 22.0581 3.92387C19.9838 1.8496 17.3773 0.49968 14.5128 0.011294C14.1122 -0.0600432 13.7336 0.214331 13.6623 0.614917C13.5964 1.02099 13.8653 1.39963 14.2714 1.47096C16.8285 1.90447 19.1607 3.11721 21.0155 4.96649C22.8702 6.82125 24.0775 9.15343 24.511 11.7106C24.5714 12.0728 24.8841 12.3252 25.2408 12.3252C25.2847 12.3252 25.3231 12.3197 25.367 12.3142C25.7676 12.2539 26.042 11.8697 25.9707 11.4691Z"
                                                })]
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "hotline-info",
                                            children: [(0, a.jsx)("span", {
                                                children: "Call Now"
                                            }), (0, a.jsx)("h6", {
                                                children: (0, a.jsx)("a", {
                                                    href: "tel:+998-8776345",
                                                    children: "+998-8776345"
                                                })
                                            })]
                                        })]
                                    }), (0, a.jsx)(t(), {
                                        href: "/reservation",
                                        legacyBehavior: !0,
                                        children: (0, a.jsx)("a", {
                                            className: "primary-btn6 btn-md",
                                            children: "Find Reservation"
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "sidebar-button mobile-menu-btn ",
                                        onClick: () => i({
                                            type: "mobileMenu",
                                            isMobileMenu: !0
                                        }),
                                        children: (0, a.jsx)("i", {
                                            className: "bi bi-list"
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                },
                y = function() {
                    return (0, a.jsx)("div", {
                        className: "h3-menu-area mb-240",
                        children: (0, a.jsxs)("div", {
                            className: "container",
                            children: [(0, a.jsx)("div", {
                                className: "row justify-content-center mb-45",
                                children: (0, a.jsx)("div", {
                                    className: "col-lg-8",
                                    children: (0, a.jsxs)("div", {
                                        className: "section-title3 text-center",
                                        children: [(0, a.jsxs)("span", {
                                            children: [" ", (0, a.jsx)("img", {
                                                className: "left-vec",
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: ""
                                            }), " ", "Menu List", " ", (0, a.jsx)("img", {
                                                className: "right-vec",
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: ""
                                            })]
                                        }), (0, a.jsx)("h2", {
                                            children: "Super Menu List"
                                        })]
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: "row g-4",
                                children: [(0, a.jsx)("div", {
                                    className: "col-lg-6",
                                    children: (0, a.jsxs)("div", {
                                        className: "home3-menu-wrap",
                                        children: [(0, a.jsx)("div", {
                                            className: "left-vector",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-menu-vec-left.svg",
                                                alt: "h3-menu-vec-left"
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "right-vector",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-menu-vec-right.svg",
                                                alt: "h3-menu-vec-right"
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "menu-title text-center",
                                            children: [(0, a.jsx)("h2", {
                                                children: "Break-fast"
                                            }), (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-menu-tt-bg.svg",
                                                alt: "h3-menu-tt-bg"
                                            })]
                                        }), (0, a.jsxs)("ul", {
                                            children: [(0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-1.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Breakfast Bar"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$45"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-2.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Frittata Muffins"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$45"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-3.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Muffins"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$45"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-4.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Smoothies"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$45"
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-lg-6",
                                    children: (0, a.jsxs)("div", {
                                        className: "home3-menu-wrap",
                                        children: [(0, a.jsx)("div", {
                                            className: "left-vector",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-menu-vec-left.svg",
                                                alt: "h3-menu-vec-left"
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "right-vector",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-menu-vec-right.svg",
                                                alt: "h3-menu-vec-right"
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "menu-title text-center",
                                            children: [(0, a.jsx)("h2", {
                                                children: "Lunch"
                                            }), (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-menu-tt-bg.svg",
                                                alt: "h3-menu-tt-bg"
                                            })]
                                        }), (0, a.jsxs)("ul", {
                                            children: [(0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-5.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Lemon Rice"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$55"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-6.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Pasta Salad"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$45"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-7.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Masala Poha"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$40"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-8.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Mongdal Khichdi"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$48"
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-lg-6",
                                    children: (0, a.jsxs)("div", {
                                        className: "home3-menu-wrap",
                                        children: [(0, a.jsx)("div", {
                                            className: "left-vector",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-menu-vec-left.svg",
                                                alt: "h3-menu-vec-left"
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "right-vector",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-menu-vec-right.svg",
                                                alt: "h3-menu-vec-right"
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "menu-title text-center",
                                            children: [(0, a.jsx)("h2", {
                                                children: "Dinner"
                                            }), (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-menu-tt-bg.svg",
                                                alt: "h3-menu-tt-bg"
                                            })]
                                        }), (0, a.jsxs)("ul", {
                                            children: [(0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-9.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Burgers or Hotdogs"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$25"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-10.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Meatballs and Rice"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$35"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-11.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Stir fry"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$55"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-12.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Quesadillas"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$45"
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "col-lg-6",
                                    children: (0, a.jsxs)("div", {
                                        className: "home3-menu-wrap",
                                        children: [(0, a.jsx)("div", {
                                            className: "left-vector",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-menu-vec-left.svg",
                                                alt: "h3-menu-vec-left"
                                            })
                                        }), (0, a.jsx)("div", {
                                            className: "right-vector",
                                            children: (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-menu-vec-right.svg",
                                                alt: "h3-menu-vec-right"
                                            })
                                        }), (0, a.jsxs)("div", {
                                            className: "menu-title text-center",
                                            children: [(0, a.jsx)("h2", {
                                                children: "Beverage"
                                            }), (0, a.jsx)("img", {
                                                src: "assets/images/icon/h3-menu-tt-bg.svg",
                                                alt: "h3-menu-tt-bg"
                                            })]
                                        }), (0, a.jsxs)("ul", {
                                            children: [(0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-13.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Sparkling Drinks"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$65"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-14.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Milkshakes"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$25"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-15.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Energy Drink"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$15"
                                                    })
                                                })]
                                            }), (0, a.jsxs)("li", {
                                                children: [(0, a.jsxs)("div", {
                                                    className: "item-name",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "item-img",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/bg/h3-menu-food-16.png",
                                                            alt: ""
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "content",
                                                        children: [(0, a.jsx)("h3", {
                                                            children: "Coffee"
                                                        }), (0, a.jsx)("p", {
                                                            children: "Special Breakfast to make for our customer."
                                                        })]
                                                    })]
                                                }), (0, a.jsx)("div", {
                                                    className: "divider",
                                                    children: (0, a.jsx)("img", {
                                                        src: "assets/images/icon/h3-menu-divider.svg",
                                                        alt: ""
                                                    })
                                                }), (0, a.jsx)("div", {
                                                    className: "price",
                                                    children: (0, a.jsx)("span", {
                                                        children: "$20"
                                                    })
                                                })]
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        })
                    })
                },
                C = i(7857);
            h.ZP.use([h.W_, h.tl, h.pt, h.xW]);
            var k = function() {
                    return (0, a.jsx)("div", {
                        className: "populer-food-area mb-120",
                        children: (0, a.jsxs)("div", {
                            className: "container",
                            children: [(0, a.jsx)("div", {
                                className: "row",
                                children: (0, a.jsx)("div", {
                                    className: "col-lg-12",
                                    children: (0, a.jsx)("div", {
                                        className: "counter-area",
                                        children: (0, a.jsxs)("div", {
                                            className: "row justify-content-center g-md-4 gy-5",
                                            children: [(0, a.jsx)("div", {
                                                className: "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6",
                                                children: (0, a.jsxs)("div", {
                                                    className: "counter-single",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "counter-icon",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/icon/chef.svg",
                                                            alt: "image"
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "coundown",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "d-flex align-items-center gap-2",
                                                            children: (0, a.jsx)("h3", {
                                                                className: "odometer",
                                                                children: (0, a.jsx)(C.ZP, {
                                                                    end: 100
                                                                })
                                                            })
                                                        }), (0, a.jsx)("p", {
                                                            children: "Professional Chef"
                                                        })]
                                                    })]
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6",
                                                children: (0, a.jsxs)("div", {
                                                    className: "counter-single",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "counter-icon",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/icon/food.svg",
                                                            alt: "image"
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "coundown",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "d-flex align-items-center gap-2",
                                                            children: (0, a.jsx)("h3", {
                                                                className: "odometer",
                                                                children: (0, a.jsx)(C.ZP, {
                                                                    end: 180
                                                                })
                                                            })
                                                        }), (0, a.jsx)("p", {
                                                            children: "Food Category"
                                                        })]
                                                    })]
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6",
                                                children: (0, a.jsxs)("div", {
                                                    className: "counter-single",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "counter-icon",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/icon/customer.svg",
                                                            alt: "image"
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "coundown",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "d-flex align-items-center gap-2",
                                                            children: (0, a.jsxs)("h3", {
                                                                className: "odometer",
                                                                children: [(0, a.jsx)(C.ZP, {
                                                                    end: 30
                                                                }), "K"]
                                                            })
                                                        }), (0, a.jsx)("p", {
                                                            children: "Customer Satisfy"
                                                        })]
                                                    })]
                                                })
                                            }), (0, a.jsx)("div", {
                                                className: "col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6",
                                                children: (0, a.jsxs)("div", {
                                                    className: "counter-single",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "counter-icon",
                                                        children: (0, a.jsx)("img", {
                                                            src: "assets/images/icon/award.svg",
                                                            alt: "image"
                                                        })
                                                    }), (0, a.jsxs)("div", {
                                                        className: "coundown",
                                                        children: [(0, a.jsx)("div", {
                                                            className: "d-flex align-items-center gap-2",
                                                            children: (0, a.jsx)("h3", {
                                                                className: "odometer",
                                                                children: (0, a.jsx)(C.ZP, {
                                                                    end: 150
                                                                })
                                                            })
                                                        }), (0, a.jsx)("p", {
                                                            children: "Award Wining"
                                                        })]
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                })
                            }), (0, a.jsx)("div", {
                                className: "row justify-content-center mb-45",
                                children: (0, a.jsx)("div", {
                                    className: "col-lg-8",
                                    children: (0, a.jsxs)("div", {
                                        className: "section-title3 text-center",
                                        children: [(0, a.jsxs)("span", {
                                            children: [" ", (0, a.jsx)("img", {
                                                className: "left-vec",
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: ""
                                            }), "Popular Item", (0, a.jsx)("img", {
                                                className: "right-vec",
                                                src: "assets/images/icon/h3-sub-title-vec.svg",
                                                alt: ""
                                            })]
                                        }), (0, a.jsx)("h2", {
                                            children: "Popular Food Item"
                                        })]
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: "row justify-content-center position-relative",
                                children: [(0, a.jsx)(m.tq, {
                                    slidesPerView: "auto",
                                    spaceBetween: 55,
                                    loop: !0,
                                    speed: 1500,
                                    autoplay: {
                                        delay: 2e3
                                    },
                                    navigation: {
                                        nextEl: ".next-btn-3",
                                        prevEl: ".prev-btn-3"
                                    },
                                    breakpoints: {
                                        280: {
                                            slidesPerView: 1,
                                            spaceBetween: 15
                                        },
                                        480: {
                                            slidesPerView: 2,
                                            spaceBetween: 15
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 20
                                        },
                                        992: {
                                            slidesPerView: 3,
                                            spaceBetween: 20
                                        },
                                        1200: {
                                            slidesPerView: 3,
                                            spaceBetween: 20
                                        },
                                        1400: {
                                            slidesPerView: 3,
                                            spaceBetween: 15
                                        },
                                        1600: {
                                            slidesPerView: 3
                                        }
                                    },
                                    className: "swiper h3-popular-food-slider",
                                    children: (0, a.jsxs)("div", {
                                        className: "swiper-wrapper",
                                        children: [(0, a.jsx)(m.o5, {
                                            className: "swiper-slide",
                                            children: (0, a.jsxs)("div", {
                                                className: "h3-popular-food-card",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "food-img",
                                                    children: [(0, a.jsx)("img", {
                                                        className: "img-fluid",
                                                        src: "assets/images/bg/h3-popular-items-1.png",
                                                        alt: ""
                                                    }), (0, a.jsx)("div", {
                                                        className: "food-price",
                                                        children: (0, a.jsx)("span", {
                                                            children: "$49"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "food-content",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "food-cetagory",
                                                        children: (0, a.jsx)("a", {
                                                            children: "Meat & Poultry"
                                                        })
                                                    }), (0, a.jsx)("h3", {
                                                        children: (0, a.jsx)(t(), {
                                                            legacyBehavior: !0,
                                                            href: "/shop-details",
                                                            children: "Chicken Fry"
                                                        })
                                                    }), (0, a.jsx)("p", {
                                                        children: "It’s so tasty and delicious for creating our customer, get This."
                                                    })]
                                                })]
                                            })
                                        }), (0, a.jsx)(m.o5, {
                                            className: "swiper-slide",
                                            children: (0, a.jsxs)("div", {
                                                className: "h3-popular-food-card",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "food-img",
                                                    children: [(0, a.jsx)("img", {
                                                        className: "img-fluid",
                                                        src: "assets/images/bg/h3-popular-items-2.png",
                                                        alt: ""
                                                    }), (0, a.jsx)("div", {
                                                        className: "food-price",
                                                        children: (0, a.jsx)("span", {
                                                            children: "$39"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "food-content",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "food-cetagory",
                                                        children: (0, a.jsx)("a", {
                                                            children: "Sea-Fish Food"
                                                        })
                                                    }), (0, a.jsx)("h3", {
                                                        children: (0, a.jsx)(t(), {
                                                            legacyBehavior: !0,
                                                            href: "/shop-details",
                                                            children: (0, a.jsx)("a", {
                                                                children: "Sea-Fish Food"
                                                            })
                                                        })
                                                    }), (0, a.jsx)("p", {
                                                        children: "It’s so tasty and delicious for creating our customer, get This."
                                                    })]
                                                })]
                                            })
                                        }), (0, a.jsx)(m.o5, {
                                            className: "swiper-slide",
                                            children: (0, a.jsxs)("div", {
                                                className: "h3-popular-food-card",
                                                children: [(0, a.jsxs)("div", {
                                                    className: "food-img",
                                                    children: [(0, a.jsx)("img", {
                                                        className: "img-fluid",
                                                        src: "assets/images/bg/h3-popular-items-3.png",
                                                        alt: ""
                                                    }), (0, a.jsx)("div", {
                                                        className: "food-price",
                                                        children: (0, a.jsx)("span", {
                                                            children: "$29"
                                                        })
                                                    })]
                                                }), (0, a.jsxs)("div", {
                                                    className: "food-content",
                                                    children: [(0, a.jsx)("div", {
                                                        className: "food-cetagory",
                                                        children: (0, a.jsx)("a", {
                                                            children: "Pasta Salad"
                                                        })
                                                    }), (0, a.jsx)("h3", {
                                                        children: (0, a.jsx)(t(), {
                                                            legacyBehavior: !0,
                                                            href: "/shop-details",
                                                            children: (0, a.jsx)("a", {
                                                                children: "Vegetable"
                                                            })
                                                        })
                                                    }), (0, a.jsx)("p", {
                                                        children: "It’s so tasty and delicious for creating our customer, get This."
                                                    })]
                                                })]
                                            })
                                        })]
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "slider-btn",
                                    children: [(0, a.jsx)("div", {
                                        className: "prev-btn-3",
                                        children: (0, a.jsx)("i", {
                                            className: "bi bi-arrow-left-short",
                                            style: {
                                                cursor: "pointer"
                                            }
                                        })
                                    }), (0, a.jsx)("div", {
                                        className: "next-btn-3",
                                        children: (0, a.jsx)("i", {
                                            className: "bi bi-arrow-right-short",
                                            style: {
                                                cursor: "pointer"
                                            }
                                        })
                                    })]
                                })]
                            })]
                        })
                    })
                },
                S = i(6153),
                P = function() {
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)(c(), {
                            children: [(0, a.jsx)("title", {
                                children: "Restho - Resturent React Template"
                            }), (0, a.jsx)("meta", {
                                name: "description",
                                content: "Generated by create next app"
                            }), (0, a.jsx)("link", {
                                rel: "icon",
                                href: "assets/images/icon/logo-icon.svg"
                            })]
                        }), (0, a.jsx)(g.Z, {}), (0, a.jsx)(w, {}), (0, a.jsx)(o, {}), (0, a.jsx)(d, {}), (0, a.jsx)(v, {}), (0, a.jsx)(x, {}), (0, a.jsx)(y, {}), (0, a.jsx)(k, {}), (0, a.jsx)(S.Z, {}), (0, a.jsx)(u, {}), (0, a.jsx)(j, {}), (0, a.jsx)(p.Z, {})]
                    })
                }
        },
        7857: function(s, e, i) {
            "use strict";
            var a = i(7294),
                l = i(8273);

            function c(s, e) {
                var i = Object.keys(s);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(s);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(s, e).enumerable
                    })), i.push.apply(i, a)
                }
                return i
            }

            function n(s) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(i), !0).forEach(function(e) {
                        var a, l;
                        a = s, l = i[e], e in a ? Object.defineProperty(a, e, {
                            value: l,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : a[e] = l
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach(function(e) {
                        Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(i, e))
                    })
                }
                return s
            }

            function r() {
                return (r = Object.assign ? Object.assign.bind() : function(s) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = arguments[e];
                        for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (s[a] = i[a])
                    }
                    return s
                }).apply(this, arguments)
            }

            function t(s, e) {
                if (null == s) return {};
                var i, a, l = function(s, e) {
                    if (null == s) return {};
                    var i, a, l = {},
                        c = Object.keys(s);
                    for (a = 0; a < c.length; a++) i = c[a], e.indexOf(i) >= 0 || (l[i] = s[i]);
                    return l
                }(s, e);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(s);
                    for (a = 0; a < c.length; a++) i = c[a], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(s, i) && (l[i] = s[i])
                }
                return l
            }
            var d = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? a.useLayoutEffect : a.useEffect;

            function o(s) {
                var e = a.useRef(s);
                return d(function() {
                    e.current = s
                }), a.useCallback(function() {
                    for (var s = arguments.length, i = Array(s), a = 0; a < s; a++) i[a] = arguments[a];
                    return e.current.apply(void 0, i)
                }, [])
            }
            var h = function(s, e) {
                    var i = e.decimal,
                        a = e.decimals,
                        c = e.duration,
                        n = e.easingFn,
                        r = e.end,
                        t = e.formattingFn,
                        d = e.numerals,
                        o = e.prefix,
                        h = e.separator,
                        m = e.start,
                        x = e.suffix,
                        j = e.useEasing,
                        g = e.enableScrollSpy,
                        u = e.scrollSpyDelay,
                        v = e.scrollSpyOnce;
                    return new l.CountUp(s, r, {
                        startVal: m,
                        duration: c,
                        decimal: i,
                        decimalPlaces: a,
                        easingFn: n,
                        formattingFn: t,
                        numerals: d,
                        separator: h,
                        prefix: o,
                        suffix: x,
                        useEasing: j,
                        useGrouping: !!h,
                        enableScrollSpy: g,
                        scrollSpyDelay: u,
                        scrollSpyOnce: v
                    })
                },
                m = ["ref", "startOnMount", "enableReinitialize", "delay", "onEnd", "onStart", "onPauseResume", "onReset", "onUpdate"],
                x = {
                    decimal: ".",
                    delay: null,
                    prefix: "",
                    suffix: "",
                    duration: 2,
                    start: 0,
                    startOnMount: !0,
                    enableReinitialize: !0
                },
                j = function(s) {
                    var e = a.useMemo(function() {
                            return n(n({}, x), s)
                        }, [s]),
                        i = e.ref,
                        l = e.startOnMount,
                        c = e.enableReinitialize,
                        r = e.delay,
                        d = e.onEnd,
                        j = e.onStart,
                        g = e.onPauseResume,
                        u = e.onReset,
                        v = e.onUpdate,
                        p = t(e, m),
                        f = a.useRef(),
                        N = a.useRef(),
                        b = a.useRef(!1),
                        w = o(function() {
                            return h("string" == typeof i ? i : i.current, p)
                        }),
                        y = o(function(s) {
                            var e = f.current;
                            if (e && !s) return e;
                            var i = w();
                            return f.current = i, i
                        }),
                        C = o(function() {
                            var s = function() {
                                return y(!0).start(function() {
                                    null == d || d({
                                        pauseResume: k,
                                        reset: S,
                                        start: V,
                                        update: P
                                    })
                                })
                            };
                            r && r > 0 ? N.current = setTimeout(s, 1e3 * r) : s(), null == j || j({
                                pauseResume: k,
                                reset: S,
                                update: P
                            })
                        }),
                        k = o(function() {
                            y().pauseResume(), null == g || g({
                                reset: S,
                                start: V,
                                update: P
                            })
                        }),
                        S = o(function() {
                            y().el && (N.current && clearTimeout(N.current), y().reset(), null == u || u({
                                pauseResume: k,
                                start: V,
                                update: P
                            }))
                        }),
                        P = o(function(s) {
                            y().update(s), null == v || v({
                                pauseResume: k,
                                reset: S,
                                start: V
                            })
                        }),
                        V = o(function() {
                            S(), C()
                        }),
                        B = o(function(s) {
                            l && (s && S(), C())
                        });
                    return a.useEffect(function() {
                        b.current ? c && B(!0) : (b.current = !0, B())
                    }, [c, b, B, r, s.start, s.suffix, s.prefix, s.duration, s.separator, s.decimals, s.decimal, s.formattingFn]), a.useEffect(function() {
                        return function() {
                            S()
                        }
                    }, [S]), {
                        start: V,
                        pauseResume: k,
                        reset: S,
                        update: P,
                        getCountUp: y
                    }
                },
                g = ["className", "redraw", "containerProps", "children", "style"];
            e.ZP = function(s) {
                var e = s.className,
                    i = s.redraw,
                    l = s.containerProps,
                    c = s.children,
                    d = s.style,
                    h = t(s, g),
                    m = a.useRef(null),
                    x = a.useRef(!1),
                    u = j(n(n({}, h), {}, {
                        ref: m,
                        startOnMount: "function" != typeof c || 0 === s.delay,
                        enableReinitialize: !1
                    })),
                    v = u.start,
                    p = u.reset,
                    f = u.update,
                    N = u.pauseResume,
                    b = u.getCountUp,
                    w = o(function() {
                        v()
                    }),
                    y = o(function(e) {
                        s.preserveValue || p(), f(e)
                    }),
                    C = o(function() {
                        if ("function" == typeof s.children && !(m.current instanceof Element)) {
                            console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.');
                            return
                        }
                        b()
                    });
                return (a.useEffect(function() {
                    C()
                }, [C]), a.useEffect(function() {
                    x.current && y(s.end)
                }, [s.end, y]), a.useEffect(function() {
                    i && x.current && w()
                }, [w, i, i && s]), a.useEffect(function() {
                    !i && x.current && w()
                }, [w, i, s.start, s.suffix, s.prefix, s.duration, s.separator, s.decimals, s.decimal, s.className, s.formattingFn]), a.useEffect(function() {
                    x.current = !0
                }, []), "function" == typeof c) ? c({
                    countUpRef: m,
                    start: v,
                    reset: p,
                    update: f,
                    pauseResume: N,
                    getCountUp: b
                }) : a.createElement("span", r({
                    className: e,
                    ref: m,
                    style: d
                }, l), void 0 !== s.start ? b().formattingFn(s.start) : "")
            }
        }
    },
    function(s) {
        s.O(0, [664, 89, 4, 153, 774, 888, 179], function() {
            return s(s.s = 163)
        }), _N_E = s.O()
    }
]);