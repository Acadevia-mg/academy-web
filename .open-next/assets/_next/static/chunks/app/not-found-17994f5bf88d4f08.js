(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [345],
  {
    6779: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 5128));
    },
    6046: (e, t, a) => {
      "use strict";
      var n = a(6658);
      (a.o(n, "notFound") &&
        a.d(t, {
          notFound: function () {
            return n.notFound;
          },
        }),
        a.o(n, "usePathname") &&
          a.d(t, {
            usePathname: function () {
              return n.usePathname;
            },
          }),
        a.o(n, "useRouter") &&
          a.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }));
    },
    5128: (e, t, a) => {
      "use strict";
      (a.r(t), a.d(t, { default: () => p }));
      var n = a(5155),
        r = a(2115),
        l = a(3312),
        s = a(6046);
      function i(e) {
        let t = new Date().getTime(),
          a = e.getTime() - t;
        if (a <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        let n = Math.floor(a / 864e5);
        return {
          days: n,
          hours: Math.floor((a % 864e5) / 36e5),
          minutes: Math.floor((a % 36e5) / 6e4),
          seconds: Math.floor((a % 6e4) / 1e3),
        };
      }
      function o(e) {
        let { targetDate: t, center: a = !1 } = e,
          [l, s] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
          s(!0);
        }, []);
        let {
          days: o,
          hours: c,
          minutes: d,
          seconds: m,
        } = (function (e) {
          let [t, a] = (0, r.useState)(i(e));
          return (
            (0, r.useEffect)(() => {
              let t = setInterval(() => {
                a(i(e));
              }, 1e3);
              return () => clearInterval(t);
            }, [e]),
            t
          );
        })(new Date(t));
        return l
          ? (0, n.jsx)("div", {
              className: "flex ".concat(
                a ? "justify-center" : "justify-center lg:justify-start",
                " items-center",
              ),
              children:
                0 === o && 0 === c && 0 === d && 0 === m
                  ? (0, n.jsx)("p", {
                      className: "text-4xl font-extrabold ".concat(
                        a ? "text-center" : "text-center md:text-right",
                      ),
                      children: "Katıldığınız i\xe7in teşekk\xfcrler",
                    })
                  : (0, n.jsxs)(n.Fragment, {
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex flex-col items-center mx-1 md:mx-2",
                          children: [
                            (0, n.jsx)("span", {
                              className: "text-3xl md:text-5xl",
                              children: o,
                            }),
                            (0, n.jsx)("span", {
                              className: "text-base md:text-xl",
                              children: "G\xfcn",
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: "mx-1 md:mx-2",
                          children: (0, n.jsx)("div", {
                            className: "w-px bg-color-text",
                            style: { height: "3rem", marginTop: "0.5rem" },
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "flex flex-col items-center mx-1 md:mx-2",
                          children: [
                            (0, n.jsx)("span", {
                              className: "text-3xl md:text-5xl",
                              children: c,
                            }),
                            (0, n.jsx)("span", {
                              className: "text-base md:text-xl",
                              children: "Saat",
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: "mx-1 md:mx-2",
                          children: (0, n.jsx)("div", {
                            className: "w-px bg-color-text",
                            style: { height: "3rem", marginTop: "0.5rem" },
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "flex flex-col items-center mx-1 md:mx-2",
                          children: [
                            (0, n.jsx)("span", {
                              className: "text-3xl md:text-5xl",
                              children: d,
                            }),
                            (0, n.jsx)("span", {
                              className: "text-base md:text-xl",
                              children: "Dakika",
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: "mx-1 md:mx-2",
                          children: (0, n.jsx)("div", {
                            className: "w-px bg-color-text",
                            style: { height: "3rem", marginTop: "0.5rem" },
                          }),
                        }),
                        (0, n.jsxs)("div", {
                          className: "flex flex-col items-center mx-1 md:mx-2",
                          children: [
                            (0, n.jsx)("span", {
                              className: "text-3xl md:text-5xl",
                              children: m,
                            }),
                            (0, n.jsx)("span", {
                              className: "text-base md:text-xl",
                              children: "Saniye",
                            }),
                          ],
                        }),
                      ],
                    }),
            })
          : (0, n.jsx)("p", {
              className: "text-2xl",
              children: "Y\xfckleniyor...",
            });
      }
      var c = a(4130),
        d = a(4057);
      let m = (0, d.A)("Ghost", [
          ["path", { d: "M9 10h.01", key: "qbtxuw" }],
          ["path", { d: "M15 10h.01", key: "1qmjsl" }],
          [
            "path",
            {
              d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
              key: "uwwb07",
            },
          ],
        ]),
        x = (0, d.A)("Sparkles", [
          [
            "path",
            {
              d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
              key: "4pj2yx",
            },
          ],
          ["path", { d: "M20 3v4", key: "1olli1" }],
          ["path", { d: "M22 5h-4", key: "1gvqau" }],
          ["path", { d: "M4 17v2", key: "vumght" }],
          ["path", { d: "M5 18H3", key: "zchphs" }],
        ]),
        u = (0, d.A)("House", [
          [
            "path",
            { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
          ],
          [
            "path",
            {
              d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
              key: "1d0kgt",
            },
          ],
        ]),
        h = (0, d.A)("Coffee", [
          ["path", { d: "M10 2v2", key: "7u0qdc" }],
          ["path", { d: "M14 2v2", key: "6buw04" }],
          [
            "path",
            {
              d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
              key: "pwadti",
            },
          ],
          ["path", { d: "M6 2v2", key: "colzsn" }],
        ]);
      function p() {
        var e;
        let t = (0, s.useRouter)(),
          [a, i] = (0, r.useState)(null),
          [d, p] = (0, r.useState)(0),
          [f, g] = (0, r.useState)(!1),
          [y, v] = (0, r.useState)([]);
        return (
          (0, r.useEffect)(() => {
            fetch("/api/events")
              .then((e) => e.json())
              .then((e) => {
                e.length > 0 && i((0, c.WU)(e));
              })
              .catch(() => {});
          }, []),
          (0, r.useEffect)(() => {
            v(
              Array.from({ length: 50 }, (e, t) => ({
                id: t,
                x: 100 * Math.random(),
                y: 100 * Math.random(),
                size: 3 * Math.random() + 1,
                opacity: 0.8 * Math.random() + 0.2,
              })),
            );
          }, []),
          (0, n.jsxs)("div", {
            className:
              "relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-color-background pt-[25vh] pb-8",
            children: [
              y.map((e) =>
                (0, n.jsx)(
                  "div",
                  {
                    className:
                      "absolute rounded-full animate-pulse text-color-text",
                    style: {
                      left: "".concat(e.x, "%"),
                      top: "".concat(e.y, "%"),
                      width: "".concat(e.size, "px"),
                      height: "".concat(e.size, "px"),
                      backgroundColor: "currentColor",
                      opacity: e.opacity,
                      animationDuration: "".concat(3 * Math.random() + 2, "s"),
                    },
                  },
                  e.id,
                ),
              ),
              (0, n.jsxs)("div", {
                className:
                  "absolute animate-bounce duration-1000 opacity-20 top-30 md:top-40 right-10 md:right-20",
                children: [
                  (0, n.jsx)(m, {
                    size: 40,
                    className: "text-color-text md:hidden",
                  }),
                  (0, n.jsx)(m, {
                    size: 80,
                    className: "text-color-text hidden md:block",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                onClick: () => {
                  (p((e) => e + 1), 4 === d && g(!0));
                },
                className:
                  "relative cursor-pointer transition-all duration-300 hover:scale-105",
                children: [
                  (0, n.jsx)("p", {
                    style: { fontFamily: "TanNimbus" },
                    className:
                      "select-none flex justify-center align-middle text-color-text text-7xl md:text-9xl text-center leading-relaxed",
                    children: "404",
                  }),
                  d > 0 &&
                    5 - d > 0 &&
                    (0, n.jsx)("div", {
                      className:
                        "absolute -top-4 -right-4 bg-color-accent rounded-full w-8 h-8 flex items-center justify-center text-color-primary text-xs font-bold",
                      children: 5 - d,
                    }),
                  (0, n.jsx)(x, {
                    className:
                      "absolute -top-6 -left-6 text-color-accent animate-spin",
                    style: { animationDuration: "8s" },
                  }),
                  (0, n.jsx)(x, {
                    className:
                      "absolute -bottom-6 -right-6 text-color-accent animate-spin",
                    style: {
                      animationDuration: "8s",
                      animationDirection: "reverse",
                    },
                  }),
                ],
              }),
              (0, n.jsx)("p", {
                className:
                  "text-2xl md:text-4xl py-4 md:py-6 text-color-text font-extrabold text-center max-w-xl mx-auto px-4",
                children: "\xd6yle bir etkinlik olsa da gitsek!",
              }),
              (0, n.jsxs)("div", {
                className:
                  "mt-6 md:mt-8 text-color-text bg-color-primary p-4 md:p-6 rounded-xl backdrop-blur-sm mx-4 w-[90%] max-w-md",
                children: [
                  (0, n.jsx)("p", {
                    className:
                      "text-center mb-2 text-color-accent font-semibold text-sm md:text-base",
                    children: "Bir sonraki etkinliğe kalan s\xfcre:",
                  }),
                  (0, n.jsx)(o, {
                    center: !0,
                    targetDate:
                      null !== (e = null == a ? void 0 : a.date) && void 0 !== e
                        ? e
                        : new Date().toISOString(),
                  }),
                ],
              }),
              (0, n.jsxs)(l.$, {
                onClick: () => {
                  t.push("/");
                },
                className:
                  "mt-5 md:mt-8 mb-12 bg-color-accent hover:bg-color-accent/80 text-color-text px-6 md:px-8 py-5 md:py-6 text-base md:text-lg flex items-center gap-2 animate-pulse",
                style: { animationDuration: "3s" },
                children: [(0, n.jsx)(u, { size: 18 }), "Anasayfaya D\xf6n"],
              }),
              f &&
                (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsxs)("div", {
                    className:
                      "fixed inset-0 bg-color-background/90 z-10 flex items-center justify-center flex-col gap-4",
                    onClick: () => g(!1),
                    children: [
                      (0, n.jsx)("div", {
                        className: "relative",
                        children: (0, n.jsx)(h, {
                          size: 100,
                          className: "text-color-accent animate-bounce",
                          style: { animationDuration: "2s" },
                        }),
                      }),
                      (0, n.jsx)("p", {
                        className:
                          "text-2xl md:text-4xl text-color-text font-bold mt-8 text-center px-4",
                        children: "Kahve molası verelim mi? \uD83E\uDD2B",
                      }),
                      (0, n.jsx)("p", {
                        className:
                          "text-base md:text-xl text-color-accent mt-4 text-center max-w-md px-6",
                        children:
                          "404 sayfasını buldun, gizli easter egg'i keşfettin... Şimdi bir kave molası vermeyi hak ettin!",
                      }),
                      (0, n.jsx)(l.$, {
                        onClick: (e) => {
                          (e.stopPropagation(), g(!1));
                        },
                        className:
                          "mt-8 bg-color-accent hover:bg-color-accent/80 text-color-primary",
                        children: "Geri D\xf6n",
                      }),
                    ],
                  }),
                }),
              (0, n.jsx)("p", {
                className:
                  "text-color-text/30 text-[10px] md:text-xs px-4 text-center w-full",
                children:
                  d > 0 && d < 5
                    ? "Devam et, neredeyse başardın..."
                    : "Psst... 404'e tıklamayı dene",
              }),
            ],
          })
        );
      }
    },
    3312: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => c });
      var n = a(5155),
        r = a(2115),
        l = a(2317),
        s = a(1027),
        i = a(1567);
      let o = (0, s.F)(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive:
                  "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline:
                  "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded-md px-3 text-xs",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          },
        ),
        c = r.forwardRef((e, t) => {
          let { className: a, variant: r, size: s, asChild: c = !1, ...d } = e,
            m = c ? l.DX : "button";
          return (0, n.jsx)(m, {
            className: (0, i.cn)(o({ variant: r, size: s, className: a })),
            ref: t,
            ...d,
          });
        });
      c.displayName = "Button";
    },
    4130: (e, t, a) => {
      "use strict";
      function n(e) {
        return new Date(e).toLocaleDateString("tr-TR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      }
      function r(e) {
        return e
          .slice()
          .sort(
            (e, t) => new Date(e.date).getTime() - new Date(t.date).getTime(),
          );
      }
      function l(e) {
        let t = r(e);
        return t[t.length - 1];
      }
      function s(e) {
        let t = (function (e) {
          let t = new Date();
          return (
            e
              .filter((e) => new Date(e.date) > t)
              .sort(
                (e, t) =>
                  new Date(e.date).getTime() - new Date(t.date).getTime(),
              )[0] || null
          );
        })(e);
        return t
          ? t.registerLink
          : "https://togather.lodos.io/communities/multiacademy-94761667282726876508";
      }
      function i(e) {
        let t = r(e);
        return t[t.length - 2];
      }
      function o(e) {
        let t = e.filter((e) => !1 !== e.navigable);
        return 0 === t.length
          ? null
          : t.sort(
              (e, t) => new Date(t.date).getTime() - new Date(e.date).getTime(),
            )[0];
      }
      function c(e, t, a) {
        let n = t
          .trim()
          .toLowerCase()
          .replace(/[-\s]+/g, "-");
        return (
          e.find((e) => {
            var t;
            let r = e.name.trim().toLowerCase(),
              l = r.replace(/[-\s]?\d{4}$/, "").replace(/[-\s]+/g, "-"),
              s =
                null === (t = r.match(/(\d{4})$/)) || void 0 === t
                  ? void 0
                  : t[1];
            return l === n && s === a;
          }) || null
        );
      }
      a.d(t, {
        Cv: () => c,
        FX: () => o,
        Go: () => s,
        SG: () => i,
        WU: () => l,
        po: () => n,
      });
    },
    1567: (e, t, a) => {
      "use strict";
      a.d(t, { cn: () => l });
      var n = a(3463),
        r = a(9795);
      function l() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, r.QP)((0, n.$)(t));
      }
    },
    2317: (e, t, a) => {
      "use strict";
      a.d(t, { DX: () => d });
      var n,
        r = a(2115),
        l = a(8068),
        s = a(5155),
        i = Symbol.for("react.lazy"),
        o = (n || (n = a.t(r, 2)))[" use ".trim().toString()];
      function c(e) {
        var t;
        return (
          null != e &&
          "object" == typeof e &&
          "$$typeof" in e &&
          e.$$typeof === i &&
          "_payload" in e &&
          "object" == typeof (t = e._payload) &&
          null !== t &&
          "then" in t
        );
      }
      var d = (function (e) {
          let t = (function (e) {
              let t = r.forwardRef((e, t) => {
                let { children: a, ...n } = e;
                if (
                  (c(a) && "function" == typeof o && (a = o(a._payload)),
                  r.isValidElement(a))
                ) {
                  var s;
                  let e, i;
                  let o =
                      ((s = a),
                      (e = Object.getOwnPropertyDescriptor(
                        s.props,
                        "ref",
                      )?.get) &&
                      "isReactWarning" in e &&
                      e.isReactWarning
                        ? s.ref
                        : (e = Object.getOwnPropertyDescriptor(
                              s,
                              "ref",
                            )?.get) &&
                            "isReactWarning" in e &&
                            e.isReactWarning
                          ? s.props.ref
                          : s.props.ref || s.ref),
                    c = (function (e, t) {
                      let a = { ...t };
                      for (let n in t) {
                        let r = e[n],
                          l = t[n];
                        /^on[A-Z]/.test(n)
                          ? r && l
                            ? (a[n] = (...e) => {
                                let t = l(...e);
                                return (r(...e), t);
                              })
                            : r && (a[n] = r)
                          : "style" === n
                            ? (a[n] = { ...r, ...l })
                            : "className" === n &&
                              (a[n] = [r, l].filter(Boolean).join(" "));
                      }
                      return { ...e, ...a };
                    })(n, a.props);
                  return (
                    a.type !== r.Fragment && (c.ref = t ? (0, l.t)(t, o) : o),
                    r.cloneElement(a, c)
                  );
                }
                return r.Children.count(a) > 1 ? r.Children.only(null) : null;
              });
              return ((t.displayName = `${e}.SlotClone`), t);
            })(e),
            a = r.forwardRef((e, a) => {
              let { children: n, ...l } = e;
              c(n) && "function" == typeof o && (n = o(n._payload));
              let i = r.Children.toArray(n),
                d = i.find(x);
              if (d) {
                let e = d.props.children,
                  n = i.map((t) =>
                    t !== d
                      ? t
                      : r.Children.count(e) > 1
                        ? r.Children.only(null)
                        : r.isValidElement(e)
                          ? e.props.children
                          : null,
                  );
                return (0, s.jsx)(t, {
                  ...l,
                  ref: a,
                  children: r.isValidElement(e)
                    ? r.cloneElement(e, void 0, n)
                    : null,
                });
              }
              return (0, s.jsx)(t, { ...l, ref: a, children: n });
            });
          return ((a.displayName = `${e}.Slot`), a);
        })("Slot"),
        m = Symbol("radix.slottable");
      function x(e) {
        return (
          r.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === m
        );
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [346, 441, 517, 358], () => t(6779)), (_N_E = e.O()));
  },
]);
