(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [133],
  {
    2213: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 9630));
    },
    9630: (e, t, a) => {
      "use strict";
      (a.r(t), a.d(t, { default: () => T }));
      var r = a(5155),
        l = a(2115),
        n = a(6046),
        s = a(3312),
        o = a(1119),
        i = a(1027),
        c = a(2645),
        d = a(1567);
      let m = l.forwardRef((e, t) => {
        let { className: a, children: l, ...n } = e;
        return (0, r.jsxs)(o.bL, {
          ref: t,
          className: (0, d.cn)(
            "relative z-10 flex max-w-max flex-1 items-center justify-center",
            a,
          ),
          ...n,
          children: [l, (0, r.jsx)(f, {})],
        });
      });
      m.displayName = o.bL.displayName;
      let u = l.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)(o.B8, {
          ref: t,
          className: (0, d.cn)(
            "group flex flex-1 list-none items-center justify-center space-x-1",
            a,
          ),
          ...l,
        });
      });
      u.displayName = o.B8.displayName;
      let h = o.q7,
        x = (0, i.F)(
          "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
        );
      ((l.forwardRef((e, t) => {
        let { className: a, children: l, ...n } = e;
        return (0, r.jsxs)(o.l9, {
          ref: t,
          className: (0, d.cn)(x(), "group", a),
          ...n,
          children: [
            l,
            " ",
            (0, r.jsx)(c.A, {
              className:
                "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
              "aria-hidden": "true",
            }),
          ],
        });
      }).displayName = o.l9.displayName),
        (l.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, r.jsx)(o.UC, {
            ref: t,
            className: (0, d.cn)(
              "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
              a,
            ),
            ...l,
          });
        }).displayName = o.UC.displayName),
        o.N_);
      let f = l.forwardRef((e, t) => {
        let { className: a, ...l } = e;
        return (0, r.jsx)("div", {
          className: (0, d.cn)("absolute left-0 top-full flex justify-center"),
          children: (0, r.jsx)(o.LM, {
            className: (0, d.cn)(
              "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
              a,
            ),
            ref: t,
            ...l,
          }),
        });
      });
      ((f.displayName = o.LM.displayName),
        (l.forwardRef((e, t) => {
          let { className: a, ...l } = e;
          return (0, r.jsx)(o.C1, {
            ref: t,
            className: (0, d.cn)(
              "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
              a,
            ),
            ...l,
            children: (0, r.jsx)("div", {
              className:
                "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md",
            }),
          });
        }).displayName = o.C1.displayName));
      var p = a(4747),
        g = a(6521),
        v = a(5565);
      let b = () => {
        let e = (0, l.useRef)(null),
          [t, a] = (0, l.useState)(null);
        return ((0, l.useEffect)(() => {
          fetch("/api/announcement")
            .then((e) => e.json())
            .then((e) => {
              e && e.show && a(e);
            })
            .catch(() => {});
        }, []),
        (0, l.useEffect)(() => {
          if (!(null == t ? void 0 : t.show)) return;
          let a = e.current;
          if (!a) return;
          let r = () => {
            let e = a.querySelector(".scroll-content");
            if (!e) return;
            let t = e.offsetWidth;
            e.style.animationDuration = "".concat(0.005 * t, "s");
          };
          return (
            r(),
            window.addEventListener("resize", r),
            () => window.removeEventListener("resize", r)
          );
        }, [t]),
        null == t ? void 0 : t.show)
          ? (0, r.jsx)("div", {
              className: "w-full py-3 overflow-hidden",
              style: { backgroundColor: t.backgroundColor, color: t.textColor },
              ref: e,
              children: (0, r.jsx)("div", {
                className: "scroll-container relative",
                children: (0, r.jsx)("div", {
                  className:
                    "scroll-content whitespace-nowrap inline-block animate-scroll",
                  children: [void 0, void 0, void 0, void 0, void 0].map(
                    (e, a) =>
                      (0, r.jsxs)(
                        "span",
                        {
                          className: "inline-block px-8",
                          children: [
                            t.text,
                            t.showLink &&
                              t.link &&
                              (0, r.jsx)("a", {
                                href: t.link,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "ml-2 underline hover:no-underline",
                                children: t.linkText || "Daha fazla",
                              }),
                          ],
                        },
                        a,
                      ),
                  ),
                }),
              }),
            })
          : null;
      };
      var j = a(7847);
      let w = (e) => {
        let { eventLink: t } = e,
          a = (0, n.usePathname)(),
          o = (0, n.useRouter)(),
          [i, c] = (0, l.useState)(!1),
          d = (e) => {
            if ("/etkinlikler" === a && e.startsWith("#"))
              o.push("/".concat(e));
            else {
              let t = e.split("#")[1],
                a = document.getElementById(t);
              a ? a.scrollIntoView({ behavior: "smooth" }) : o.push(e);
            }
            c(!1);
          },
          x = [
            { href: "/", label: "Anasayfa" },
            { href: "/etkinlikler", label: "Etkinlikler" },
            { href: "#konusmacilar", label: "Konuşmacılar", isScroll: !0 },
            { href: "#biletler", label: "Biletler", isScroll: !0 },
          ];
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(b, {}),
            (0, r.jsx)("header", {
              className:
                "top-0 absolute w-5/6 mt-[34px] rounded-lg z-50 px-4 sm:px-4 bg-color-primary py-2 left-1/2 -translate-x-1/2",
              children: (0, r.jsxs)("div", {
                className:
                  "relative w-full h-20 flex items-center justify-center",
                children: [
                  (0, r.jsx)("div", {
                    className: "absolute left-0 pl-4 flex items-center",
                    children: (0, r.jsx)("a", {
                      href: "/",
                      children: (0, r.jsx)(v.default, {
                        src: (0, j.b8)("/images/logo/logo-wide-dark.webp"),
                        alt: "DMG Logo",
                        width: 196,
                        height: 196,
                        priority: !0,
                        className: "object-contain my-auto",
                      }),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "hidden lg:flex items-center justify-center",
                    children: (0, r.jsx)(m, {
                      children: (0, r.jsx)(u, {
                        className: "flex gap-4 xl:gap-8 group",
                        children: x.map((e) =>
                          (0, r.jsx)(
                            h,
                            {
                              className:
                                "transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100",
                              children: (0, r.jsx)("button", {
                                onClick: () => d(e.href),
                                className:
                                  "text-lg font-bold text-color-text transition-colors",
                                children: e.label,
                              }),
                            },
                            e.href,
                          ),
                        ),
                      }),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "absolute right-0 pr-4 hidden lg:flex",
                    children: (0, r.jsxs)(s.$, {
                      variant: "outline",
                      className:
                        "relative h-11 px-6 text-color-black group transition-all duration-300 ease-in-out",
                      children: [
                        (0, r.jsxs)("a", {
                          href: t,
                          target: "_blank",
                          rel: "noreferrer",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "absolute inset-0 bg-color-accent transition-transform duration-300 ease-in-out rounded-md",
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "absolute inset-0 bg-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 ease-in-out rounded-md flex items-center justify-center",
                              children: (0, r.jsx)("span", {
                                className: "relative z-10 font-medium text-sm",
                                children: "Aramıza Katıl",
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsx)("span", {
                          className: "invisible font-medium text-sm",
                          children: "Aramıza Katıl",
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "lg:hidden absolute right-4",
                    children: (0, r.jsx)(s.$, {
                      className: "text-black",
                      variant: "ghost",
                      size: "icon",
                      "aria-label": "Open menu",
                      onClick: () => c(!i),
                      children: (0, r.jsx)(p.B, {
                        className: "h-6 w-6 hover:bg-none",
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, r.jsxs)("div", {
              className:
                "fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center transition-all duration-300 ".concat(
                  i
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-full opacity-0",
                ),
              children: [
                (0, r.jsx)("button", {
                  className: "absolute top-12 right-16 text-black text-3xl",
                  onClick: () => c(!1),
                  children: (0, r.jsx)(g.X, { size: 24, weight: "bold" }),
                }),
                (0, r.jsxs)("div", {
                  className: "flex flex-col items-center space-y-6",
                  children: [
                    x.map((e) =>
                      (0, r.jsx)(
                        "a",
                        {
                          href: e.href,
                          className:
                            "text-2xl font-medium text-black transition-colors",
                          onClick: (t) => {
                            (t.preventDefault(), d(e.href));
                          },
                          children: e.label,
                        },
                        e.href,
                      ),
                    ),
                    (0, r.jsx)(s.$, {
                      variant: "outline",
                      className:
                        "mt-6 rounded-lg text-lg text-black border-black px-8 py-3",
                      children: (0, r.jsx)("a", {
                        href: t,
                        target: "_blank",
                        rel: "noreferrer",
                        children: "Aramıza Katıl",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      var y = a(54),
        N = a(169),
        k = a(446),
        E = a(6153),
        D = a(4527),
        C = a(8173),
        L = a.n(C),
        _ = a(8908),
        z = a(8672),
        G = a(9054);
      let S = (e) => {
        let { alwaysShow: t } = e,
          [a, n] = (0, l.useState)(!1),
          [s, o] = (0, l.useState)(t),
          i = (0, l.useRef)(null),
          c = [
            {
              icon: N.M,
              label: "Instagram",
              link: "https://instagram.com/devmultigroup",
            },
            { icon: k.g, label: "X", link: "https://x.com/devmultigroup" },
            {
              icon: E.C,
              label: "Linkedin",
              link: "https://www.linkedin.com/company/devmultigroup/",
            },
            {
              icon: _.b,
              label: "Youtube",
              link: "https://www.youtube.com/@devmultigroup",
            },
            {
              icon: z.n,
              label: "ToGather",
              link: "https://togather.lodos.io/communities/multiacademy-94761667282726876508",
            },
            {
              icon: D.f,
              label: "GitHub",
              link: "https://github.com/Developer-MultiGroup",
            },
            {
              icon: G.v,
              label: "Buy Me a Coffee",
              link: "https://buymeacoffee.com/multigroup",
            },
          ];
        return (
          (0, l.useEffect)(() => {
            let e = () => {
                o(!!t || window.scrollY > 0.2 * window.innerHeight);
              },
              a = (() => {
                let t = !1;
                return () => {
                  t ||
                    (window.requestAnimationFrame(() => {
                      (e(), (t = !1));
                    }),
                    (t = !0));
                };
              })();
            return (
              window.addEventListener("scroll", a),
              () => window.removeEventListener("scroll", a)
            );
          }, [t]),
          (0, l.useEffect)(() => {
            let e = (e) => {
              i.current && !i.current.contains(e.target) && n(!1);
            };
            return (
              document.addEventListener("mousedown", e),
              () => document.removeEventListener("mousedown", e)
            );
          }, []),
          (0, r.jsx)("div", {
            ref: i,
            className:
              "fixed bottom-6 right-6 z-50 transition-all duration-300 font-montserrat-mid ".concat(
                s ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
              ),
            children: (0, r.jsxs)("div", {
              className:
                "relative w-12 h-12 sm:w-14 sm:h-14 bg-color-accent rounded-full shadow-lg cursor-pointer transition-all duration-300 ".concat(
                  a ? "scale-105 shadow-xl" : "shadow-md",
                ),
              onClick: () => n(!a),
              role: "button",
              tabIndex: 0,
              "aria-expanded": a,
              children: [
                (0, r.jsx)("img", {
                  src: (0, j.b8)("/images/logo/logo-small.webp"),
                  alt: "Toggle Button Icon",
                  className:
                    "select-none absolute inset-0 w-1/2 h-1/2 object-contain transition-transform duration-300 mx-auto my-auto ".concat(
                      a ? "rotate-180" : "",
                    ),
                }),
                (0, r.jsx)("ul", {
                  className:
                    "absolute bottom-14 sm:bottom-16 right-0 bg-[#1f2226] border-2 border-color-accent rounded-xl shadow-2xl p-3 sm:p-4 space-y-2 sm:space-y-3 min-w-[180px] sm:min-w-[220px] transition-all duration-300 ".concat(
                      a
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-2",
                    ),
                  children: c.map((e, t) => {
                    let a = e.icon;
                    return (0, r.jsx)(
                      "a",
                      {
                        href: e.link,
                        children: (0, r.jsxs)("li", {
                          className:
                            "flex items-center py-1.5 px-2 sm:py-2 sm:px-3 hover:bg-[#ffffff15] rounded-lg transition-all duration-200 group",
                          children: [
                            (0, r.jsx)(a, {
                              color: "white",
                              className:
                                "w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 transition-transform duration-200 group-hover:scale-110",
                            }),
                            (0, r.jsx)("span", {
                              className:
                                "text-[#ffffffdd] text-xs sm:text-sm group-hover:text-color-accent transition-colors duration-200",
                              children: e.label,
                            }),
                          ],
                        }),
                      },
                      t,
                    );
                  }),
                }),
              ],
            }),
          })
        );
      };
      function A() {
        let [e, t] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            let e = () => {
              t(window.scrollY > 300);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, r.jsxs)("footer", {
            className:
              "relative text-color-background py-6 px-6 md:px-12 md:py-12 flex flex-col items-center justify-center min-h-60 bg-color-secondary w-5/6 2xl:w-2/3 mx-auto mb-12 mt-12 rounded-2xl",
            children: [
              (0, r.jsxs)("div", {
                className: "w-full flex flex-col gap-12",
                children: [
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row justify-between items-center text-center md:text-left w-full gap-6",
                    children: [
                      (0, r.jsx)("div", {
                        className: "flex items-center justify-center gap-2",
                        children: (0, r.jsx)(v.default, {
                          src: (0, j.b8)("/images/logo/dmg-logo.webp"),
                          alt: "MultiGroup Logo",
                          width: 240,
                          height: 40,
                        }),
                      }),
                      (0, r.jsx)("p", {
                        className: "italic text-sm text-gray-300",
                        children: "“Where Developers Become Together”",
                      }),
                    ],
                  }),
                  (0, r.jsx)("hr", { className: "border-gray-600 mb-2" }),
                  (0, r.jsxs)("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-4 gap-8 text-sm w-full text-center md:text-left",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex flex-col items-center md:items-start",
                        children: [
                          (0, r.jsx)("h3", {
                            className:
                              "text-xl font-semibold text-gray-400 mb-3",
                            children: "Hızlı Linkler",
                          }),
                          (0, r.jsxs)("ul", {
                            className: "space-y-2",
                            children: [
                              (0, r.jsx)("li", {
                                children: (0, r.jsx)(L(), {
                                  href: "/",
                                  prefetch: !1,
                                  className:
                                    "hover:text-color-accent transition-all duration-300",
                                  children: "Anasayfa",
                                }),
                              }),
                              (0, r.jsx)("li", {
                                children: (0, r.jsx)(L(), {
                                  href: "/etkinlikler",
                                  prefetch: !1,
                                  className:
                                    "hover:text-color-accent transition-all duration-300",
                                  children: "Etkinlikler",
                                }),
                              }),
                              (0, r.jsx)("li", {
                                children: (0, r.jsx)(L(), {
                                  href: "#konusmacilar",
                                  className:
                                    "hover:text-color-accent transition-all duration-300",
                                  children: "Konuşmacılar",
                                }),
                              }),
                              (0, r.jsx)("li", {
                                children: (0, r.jsx)(L(), {
                                  href: "#biletler",
                                  className:
                                    "hover:text-color-accent transition-all duration-300",
                                  children: "Biletler",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex flex-col items-center md:items-start",
                        children: [
                          (0, r.jsx)("h3", {
                            className:
                              "text-xl font-semibold text-gray-400 mb-3",
                            children: "Topluluk",
                          }),
                          (0, r.jsxs)("ul", {
                            className: "space-y-2",
                            children: [
                              (0, r.jsx)("li", {
                                children: (0, r.jsx)(L(), {
                                  href: "https://togather.lodos.io/communities/multiacademy-94761667282726876508",
                                  target: "_blank",
                                  className:
                                    "hover:text-color-accent transition-all duration-300",
                                  children: "ToGather",
                                }),
                              }),
                              (0, r.jsx)("li", {
                                children: (0, r.jsx)(L(), {
                                  href: "https://github.com/Developer-MultiGroup",
                                  target: "_blank",
                                  className:
                                    "hover:text-color-accent transition-all duration-300",
                                  children: "Github",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex flex-col items-center md:items-start",
                        children: [
                          (0, r.jsx)("h3", {
                            className:
                              "text-xl font-semibold text-gray-400 mb-3",
                            children: "Projeler",
                          }),
                          (0, r.jsxs)("ul", {
                            className: "space-y-2",
                            children: [
                              (0, r.jsx)("li", {
                                children: (0, r.jsx)(L(), {
                                  href: "https://android-blast-off.devmultigroup.com",
                                  target: "_blank",
                                  className:
                                    "hover:text-color-accent transition-all duration-300",
                                  children: "Android Blast-Off",
                                }),
                              }),
                              (0, r.jsx)("li", {
                                children: (0, r.jsx)(L(), {
                                  href: "https://genai.devmultigroup.com",
                                  target: "_blank",
                                  className:
                                    "hover:text-color-accent transition-all duration-300",
                                  children: "GenAI Fundamentals",
                                }),
                              }),
                              (0, r.jsx)("li", {
                                children: (0, r.jsx)(L(), {
                                  href: "https://github.com/Developer-MultiGroup/DMG-Data-Science-Awesome",
                                  target: "_blank",
                                  className:
                                    "hover:text-color-accent transition-all duration-300",
                                  children: "Data Science Awesome",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex flex-col items-center md:items-start",
                        children: [
                          (0, r.jsx)("h3", {
                            className:
                              "text-xl font-semibold text-gray-400 mb-3",
                            children: "Hala Kayıt Yapmadın Mı?",
                          }),
                          (0, r.jsx)("p", {
                            className: "text-sm mb-4",
                            children:
                              "Etkinliklerden geri kalmamak i\xe7in hemen aramıza katıl!",
                          }),
                          (0, r.jsx)(L(), {
                            href: "https://togather.lodos.io/communities/multiacademy-94761667282726876508",
                            target: "_blank",
                            className:
                              "inline-block border border-color-accent px-4 py-2 rounded-md hover:bg-color-accent transition",
                            children: "Yerini Ayırt",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsx)("hr", { className: "border-gray-600 mt-2" }),
                  (0, r.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 w-full text-center md:text-left",
                    children: [
                      (0, r.jsx)("p", {
                        children:
                          "\xa9 Copyright Developer MultiGroup 2020–2025",
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "flex gap-4 justify-center text-white text-xl",
                        children: [
                          (0, r.jsx)(L(), {
                            href: "https://www.instagram.com/devmultigroup/",
                            "aria-label": "Instagram",
                            target: "_blank",
                            className:
                              "hover:text-color-accent transition-all duration-300",
                            children: (0, r.jsx)(N.M, {}),
                          }),
                          (0, r.jsx)(L(), {
                            href: "https://x.com/devmultigroup",
                            "aria-label": "X",
                            target: "_blank",
                            className:
                              "hover:text-color-accent transition-all duration-300",
                            children: (0, r.jsx)(k.g, {}),
                          }),
                          (0, r.jsx)(L(), {
                            href: "https://www.linkedin.com/company/devmultigroup/",
                            "aria-label": "LinkedIn",
                            target: "_blank",
                            className:
                              "hover:text-color-accent transition-all duration-300",
                            children: (0, r.jsx)(E.C, {}),
                          }),
                          (0, r.jsx)(L(), {
                            href: "https://github.com/Developer-MultiGroup",
                            "aria-label": "Github",
                            target: "_blank",
                            className:
                              "hover:text-color-accent transition-all duration-300",
                            children: (0, r.jsx)(D.f, {}),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(S, { alwaysShow: !1 }),
            ],
          })
        );
      }
      var M = a(4130);
      function T(e) {
        let { children: t } = e,
          [a, n] = (0, l.useState)([]),
          [s, o] = (0, l.useState)(
            "https://togather.lodos.io/communities/multiacademy-94761667282726876508",
          );
        return (
          (0, l.useEffect)(() => {
            fetch("/api/events")
              .then((e) => e.json())
              .then((e) => {
                (n(e), o((0, M.Go)(e)));
              })
              .catch(() => {});
          }, []),
          (0, r.jsxs)(y.D, {
            events: a,
            children: [(0, r.jsx)(w, { eventLink: s }), t, (0, r.jsx)(A, {})],
          })
        );
      }
    },
    3312: (e, t, a) => {
      "use strict";
      a.d(t, { $: () => c });
      var r = a(5155),
        l = a(2115),
        n = a(2317),
        s = a(1027),
        o = a(1567);
      let i = (0, s.F)(
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
        c = l.forwardRef((e, t) => {
          let { className: a, variant: l, size: s, asChild: c = !1, ...d } = e,
            m = c ? n.DX : "button";
          return (0, r.jsx)(m, {
            className: (0, o.cn)(i({ variant: l, size: s, className: a })),
            ref: t,
            ...d,
          });
        });
      c.displayName = "Button";
    },
    54: (e, t, a) => {
      "use strict";
      a.d(t, { D: () => i, j: () => c });
      var r = a(5155),
        l = a(2115),
        n = a(6046);
      let s = (0, l.createContext)({
          currentEvent: null,
          setCurrentEvent: () => {},
        }),
        o = {
          primary: "348 83% 47%",
          secondary: "348 83% 47%",
          accent: "348 83% 47%",
          background: "0 0% 6%",
          text: "0 0% 100%",
        },
        i = (e) => {
          var t;
          let { children: a, events: i = [] } = e,
            [c, d] = (0, l.useState)(
              null !== (t = i[0]) && void 0 !== t ? t : null,
            ),
            m = (0, n.usePathname)();
          return (
            l.useEffect(() => {
              i.length > 0 && !c && d(i[0]);
            }, [i, c]),
            l.useEffect(() => {
              let e =
                "/404" === m || "/not-found" === m
                  ? o
                  : null == c
                    ? void 0
                    : c.colorPalette;
              e &&
                (document.documentElement.style.setProperty(
                  "--color-primary",
                  e.primary,
                ),
                document.documentElement.style.setProperty(
                  "--color-secondary",
                  e.secondary,
                ),
                document.documentElement.style.setProperty(
                  "--color-accent",
                  e.accent,
                ),
                document.documentElement.style.setProperty(
                  "--color-background",
                  e.background,
                ),
                document.documentElement.style.setProperty(
                  "--color-text",
                  e.text,
                ));
            }, [c, m]),
            (0, r.jsx)(s.Provider, {
              value: { currentEvent: c, setCurrentEvent: d },
              children: a,
            })
          );
        },
        c = () => (0, l.useContext)(s);
    },
    4130: (e, t, a) => {
      "use strict";
      function r(e) {
        return new Date(e).toLocaleDateString("tr-TR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      }
      function l(e) {
        return e
          .slice()
          .sort(
            (e, t) => new Date(e.date).getTime() - new Date(t.date).getTime(),
          );
      }
      function n(e) {
        let t = l(e);
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
      function o(e) {
        let t = l(e);
        return t[t.length - 2];
      }
      function i(e) {
        let t = e.filter((e) => !1 !== e.navigable);
        return 0 === t.length
          ? null
          : t.sort(
              (e, t) => new Date(t.date).getTime() - new Date(e.date).getTime(),
            )[0];
      }
      function c(e, t, a) {
        let r = t
          .trim()
          .toLowerCase()
          .replace(/[-\s]+/g, "-");
        return (
          e.find((e) => {
            var t;
            let l = e.name.trim().toLowerCase(),
              n = l.replace(/[-\s]?\d{4}$/, "").replace(/[-\s]+/g, "-"),
              s =
                null === (t = l.match(/(\d{4})$/)) || void 0 === t
                  ? void 0
                  : t[1];
            return n === r && s === a;
          }) || null
        );
      }
      a.d(t, {
        Cv: () => c,
        FX: () => i,
        Go: () => s,
        SG: () => o,
        WU: () => n,
        po: () => r,
      });
    },
    7847: (e, t, a) => {
      "use strict";
      a.d(t, { AL: () => s, J_: () => n, b8: () => l, vw: () => r });
      let r = "https://academy-assets.devmultigroup.com";
      function l(e) {
        let t = e.replace(/^\/images\//, "");
        return t.startsWith("logo/")
          ? "".concat(r, "/shared/").concat(t)
          : "".concat(r, "/").concat(t);
      }
      function n(e, t, a) {
        return "".concat(r, "/").concat(e, "/").concat(t, "/").concat(a);
      }
      function s(e, t) {
        let a = t.split("/").pop() || t;
        return ""
          .concat(r, "/")
          .concat(e, "/")
          .concat(a.startsWith("organizers") ? "" : "organizers/")
          .concat(a);
      }
    },
    1567: (e, t, a) => {
      "use strict";
      a.d(t, { cn: () => n });
      var r = a(3463),
        l = a(9795);
      function n() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, l.QP)((0, r.$)(t));
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [346, 112, 397, 173, 771, 441, 517, 358], () => t(2213)),
      (_N_E = e.O()));
  },
]);
