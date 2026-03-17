((exports.id = 969),
  (exports.ids = [969]),
  (exports.modules = {
    2947: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 67686));
    },
    68603: (e, t, a) => {
      Promise.resolve().then(a.bind(a, 47400));
    },
    47400: (e, t, a) => {
      "use strict";
      (a.r(t), a.d(t, { default: () => P }));
      var l = a(45512),
        r = a(58009),
        s = a(79334),
        n = a(39400),
        o = a(19125),
        i = a(21643),
        c = a(7833),
        d = a(44195);
      let m = r.forwardRef(({ className: e, children: t, ...a }, r) =>
        (0, l.jsxs)(o.bL, {
          ref: r,
          className: (0, d.cn)(
            "relative z-10 flex max-w-max flex-1 items-center justify-center",
            e,
          ),
          ...a,
          children: [t, (0, l.jsx)(f, {})],
        }),
      );
      m.displayName = o.bL.displayName;
      let u = r.forwardRef(({ className: e, ...t }, a) =>
        (0, l.jsx)(o.B8, {
          ref: a,
          className: (0, d.cn)(
            "group flex flex-1 list-none items-center justify-center space-x-1",
            e,
          ),
          ...t,
        }),
      );
      u.displayName = o.B8.displayName;
      let x = o.q7,
        h = (0, i.F)(
          "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
        );
      ((r.forwardRef(({ className: e, children: t, ...a }, r) =>
        (0, l.jsxs)(o.l9, {
          ref: r,
          className: (0, d.cn)(h(), "group", e),
          ...a,
          children: [
            t,
            " ",
            (0, l.jsx)(c.A, {
              className:
                "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
              "aria-hidden": "true",
            }),
          ],
        }),
      ).displayName = o.l9.displayName),
        (r.forwardRef(({ className: e, ...t }, a) =>
          (0, l.jsx)(o.UC, {
            ref: a,
            className: (0, d.cn)(
              "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto ",
              e,
            ),
            ...t,
          }),
        ).displayName = o.UC.displayName),
        o.N_);
      let f = r.forwardRef(({ className: e, ...t }, a) =>
        (0, l.jsx)("div", {
          className: (0, d.cn)("absolute left-0 top-full flex justify-center"),
          children: (0, l.jsx)(o.LM, {
            className: (0, d.cn)(
              "origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]",
              e,
            ),
            ref: a,
            ...t,
          }),
        }),
      );
      ((f.displayName = o.LM.displayName),
        (r.forwardRef(({ className: e, ...t }, a) =>
          (0, l.jsx)(o.C1, {
            ref: a,
            className: (0, d.cn)(
              "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in",
              e,
            ),
            ...t,
            children: (0, l.jsx)("div", {
              className:
                "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md",
            }),
          }),
        ).displayName = o.C1.displayName));
      var p = a(5668),
        g = a(82890),
        b = a(45103);
      let v = () => {
        let e = (0, r.useRef)(null),
          [t, a] = (0, r.useState)(null);
        return ((0, r.useEffect)(() => {
          fetch("/api/announcement")
            .then((e) => e.json())
            .then((e) => {
              e && e.show && a(e);
            })
            .catch(() => {});
        }, []),
        (0, r.useEffect)(() => {
          if (!t?.show) return;
          let a = e.current;
          if (!a) return;
          let l = () => {
            let e = a.querySelector(".scroll-content");
            if (!e) return;
            let t = e.offsetWidth;
            e.style.animationDuration = `${0.005 * t}s`;
          };
          return (
            l(),
            window.addEventListener("resize", l),
            () => window.removeEventListener("resize", l)
          );
        }, [t]),
        t?.show)
          ? (0, l.jsx)("div", {
              className: "w-full py-3 overflow-hidden",
              style: { backgroundColor: t.backgroundColor, color: t.textColor },
              ref: e,
              children: (0, l.jsx)("div", {
                className: "scroll-container relative",
                children: (0, l.jsx)("div", {
                  className:
                    "scroll-content whitespace-nowrap inline-block animate-scroll",
                  children: [void 0, void 0, void 0, void 0, void 0].map(
                    (e, a) =>
                      (0, l.jsxs)(
                        "span",
                        {
                          className: "inline-block px-8",
                          children: [
                            t.text,
                            t.showLink &&
                              t.link &&
                              (0, l.jsx)("a", {
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
      var j = a(34883);
      let y = ({ eventLink: e }) => {
        let t = (0, s.usePathname)(),
          a = (0, s.useRouter)(),
          [o, i] = (0, r.useState)(!1),
          c = (e) => {
            if ("/etkinlikler" === t && e.startsWith("#")) a.push(`/${e}`);
            else {
              let t = e.split("#")[1],
                l = document.getElementById(t);
              l ? l.scrollIntoView({ behavior: "smooth" }) : a.push(e);
            }
            i(!1);
          },
          d = [
            { href: "/", label: "Anasayfa" },
            { href: "/etkinlikler", label: "Etkinlikler" },
            { href: "#konusmacilar", label: "Konuşmacılar", isScroll: !0 },
            { href: "#biletler", label: "Biletler", isScroll: !0 },
          ];
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(v, {}),
            (0, l.jsx)("header", {
              className:
                "top-0 absolute w-5/6 mt-[34px] rounded-lg z-50 px-4 sm:px-4 bg-color-primary py-2 left-1/2 -translate-x-1/2",
              children: (0, l.jsxs)("div", {
                className:
                  "relative w-full h-20 flex items-center justify-center",
                children: [
                  (0, l.jsx)("div", {
                    className: "absolute left-0 pl-4 flex items-center",
                    children: (0, l.jsx)("a", {
                      href: "/",
                      children: (0, l.jsx)(b.default, {
                        src: (0, j.b8)("/images/logo/logo-wide-dark.webp"),
                        alt: "DMG Logo",
                        width: 196,
                        height: 196,
                        priority: !0,
                        className: "object-contain my-auto",
                      }),
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "hidden lg:flex items-center justify-center",
                    children: (0, l.jsx)(m, {
                      children: (0, l.jsx)(u, {
                        className: "flex gap-4 xl:gap-8 group",
                        children: d.map((e) =>
                          (0, l.jsx)(
                            x,
                            {
                              className:
                                "transition-opacity duration-300 group-hover:opacity-50 hover:!opacity-100",
                              children: (0, l.jsx)("button", {
                                onClick: () => c(e.href),
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
                  (0, l.jsx)("div", {
                    className: "absolute right-0 pr-4 hidden lg:flex",
                    children: (0, l.jsxs)(n.$, {
                      variant: "outline",
                      className:
                        "relative h-11 px-6 text-color-black group transition-all duration-300 ease-in-out",
                      children: [
                        (0, l.jsxs)("a", {
                          href: e,
                          target: "_blank",
                          rel: "noreferrer",
                          children: [
                            (0, l.jsx)("div", {
                              className:
                                "absolute inset-0 bg-color-accent transition-transform duration-300 ease-in-out rounded-md",
                            }),
                            (0, l.jsx)("div", {
                              className:
                                "absolute inset-0 bg-white group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300 ease-in-out rounded-md flex items-center justify-center",
                              children: (0, l.jsx)("span", {
                                className: "relative z-10 font-medium text-sm",
                                children: "Aramıza Katıl",
                              }),
                            }),
                          ],
                        }),
                        (0, l.jsx)("span", {
                          className: "invisible font-medium text-sm",
                          children: "Aramıza Katıl",
                        }),
                      ],
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "lg:hidden absolute right-4",
                    children: (0, l.jsx)(n.$, {
                      className: "text-black",
                      variant: "ghost",
                      size: "icon",
                      "aria-label": "Open menu",
                      onClick: () => i(!o),
                      children: (0, l.jsx)(p.B, {
                        className: "h-6 w-6 hover:bg-none",
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, l.jsxs)("div", {
              className: `fixed inset-0 bg-white z-[999] flex flex-col items-center justify-center transition-all duration-300 ${o ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`,
              children: [
                (0, l.jsx)("button", {
                  className: "absolute top-12 right-16 text-black text-3xl",
                  onClick: () => i(!1),
                  children: (0, l.jsx)(g.X, { size: 24, weight: "bold" }),
                }),
                (0, l.jsxs)("div", {
                  className: "flex flex-col items-center space-y-6",
                  children: [
                    d.map((e) =>
                      (0, l.jsx)(
                        "a",
                        {
                          href: e.href,
                          className:
                            "text-2xl font-medium text-black transition-colors",
                          onClick: (t) => {
                            (t.preventDefault(), c(e.href));
                          },
                          children: e.label,
                        },
                        e.href,
                      ),
                    ),
                    (0, l.jsx)(n.$, {
                      variant: "outline",
                      className:
                        "mt-6 rounded-lg text-lg text-black border-black px-8 py-3",
                      children: (0, l.jsx)("a", {
                        href: e,
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
      var w = a(56584),
        N = a(73197),
        k = a(95125),
        C = a(23993),
        E = a(98996),
        z = a(28531),
        L = a.n(z),
        D = a(69028),
        A = a(17400),
        G = a(14444);
      let S = ({ alwaysShow: e }) => {
        let [t, a] = (0, r.useState)(!1),
          [s, n] = (0, r.useState)(e),
          o = (0, r.useRef)(null),
          i = [
            {
              icon: N.M,
              label: "Instagram",
              link: "https://instagram.com/devmultigroup",
            },
            { icon: k.g, label: "X", link: "https://x.com/devmultigroup" },
            {
              icon: C.C,
              label: "Linkedin",
              link: "https://www.linkedin.com/company/devmultigroup/",
            },
            {
              icon: D.b,
              label: "Youtube",
              link: "https://www.youtube.com/@devmultigroup",
            },
            {
              icon: A.n,
              label: "ToGather",
              link: "https://togather.lodos.io/communities/multiacademy-94761667282726876508",
            },
            {
              icon: E.f,
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
          (0, r.useEffect)(() => {
            let t = () => {
                n(!!e || window.scrollY > 0.2 * window.innerHeight);
              },
              a = (() => {
                let e = !1;
                return () => {
                  e ||
                    (window.requestAnimationFrame(() => {
                      (t(), (e = !1));
                    }),
                    (e = !0));
                };
              })();
            return (
              window.addEventListener("scroll", a),
              () => window.removeEventListener("scroll", a)
            );
          }, [e]),
          (0, r.useEffect)(() => {
            let e = (e) => {
              o.current && !o.current.contains(e.target) && a(!1);
            };
            return (
              document.addEventListener("mousedown", e),
              () => document.removeEventListener("mousedown", e)
            );
          }, []),
          (0, l.jsx)("div", {
            ref: o,
            className: `fixed bottom-6 right-6 z-50 transition-all duration-300 font-montserrat-mid ${s ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`,
            children: (0, l.jsxs)("div", {
              className: `relative w-12 h-12 sm:w-14 sm:h-14 bg-color-accent rounded-full shadow-lg cursor-pointer transition-all duration-300 ${t ? "scale-105 shadow-xl" : "shadow-md"}`,
              onClick: () => a(!t),
              role: "button",
              tabIndex: 0,
              "aria-expanded": t,
              children: [
                (0, l.jsx)("img", {
                  src: (0, j.b8)("/images/logo/logo-small.webp"),
                  alt: "Toggle Button Icon",
                  className: `select-none absolute inset-0 w-1/2 h-1/2 object-contain transition-transform duration-300 mx-auto my-auto ${t ? "rotate-180" : ""}`,
                }),
                (0, l.jsx)("ul", {
                  className: `absolute bottom-14 sm:bottom-16 right-0 bg-[#1f2226] border-2 border-color-accent rounded-xl shadow-2xl p-3 sm:p-4 space-y-2 sm:space-y-3 min-w-[180px] sm:min-w-[220px] transition-all duration-300 ${t ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2"}`,
                  children: i.map((e, t) => {
                    let a = e.icon;
                    return (0, l.jsx)(
                      "a",
                      {
                        href: e.link,
                        children: (0, l.jsxs)("li", {
                          className:
                            "flex items-center py-1.5 px-2 sm:py-2 sm:px-3 hover:bg-[#ffffff15] rounded-lg transition-all duration-200 group",
                          children: [
                            (0, l.jsx)(a, {
                              color: "white",
                              className:
                                "w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 transition-transform duration-200 group-hover:scale-110",
                            }),
                            (0, l.jsx)("span", {
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
      function M() {
        let [e, t] = (0, r.useState)(!1);
        return (0, l.jsxs)("footer", {
          className:
            "relative text-color-background py-6 px-6 md:px-12 md:py-12 flex flex-col items-center justify-center min-h-60 bg-color-secondary w-5/6 2xl:w-2/3 mx-auto mb-12 mt-12 rounded-2xl",
          children: [
            (0, l.jsxs)("div", {
              className: "w-full flex flex-col gap-12",
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row justify-between items-center text-center md:text-left w-full gap-6",
                  children: [
                    (0, l.jsx)("div", {
                      className: "flex items-center justify-center gap-2",
                      children: (0, l.jsx)(b.default, {
                        src: (0, j.b8)("/images/logo/dmg-logo.webp"),
                        alt: "MultiGroup Logo",
                        width: 240,
                        height: 40,
                      }),
                    }),
                    (0, l.jsx)("p", {
                      className: "italic text-sm text-gray-300",
                      children: "“Where Developers Become Together”",
                    }),
                  ],
                }),
                (0, l.jsx)("hr", { className: "border-gray-600 mb-2" }),
                (0, l.jsxs)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-4 gap-8 text-sm w-full text-center md:text-left",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "flex flex-col items-center md:items-start",
                      children: [
                        (0, l.jsx)("h3", {
                          className: "text-xl font-semibold text-gray-400 mb-3",
                          children: "Hızlı Linkler",
                        }),
                        (0, l.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(L(), {
                                href: "/",
                                prefetch: !1,
                                className:
                                  "hover:text-color-accent transition-all duration-300",
                                children: "Anasayfa",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(L(), {
                                href: "/etkinlikler",
                                prefetch: !1,
                                className:
                                  "hover:text-color-accent transition-all duration-300",
                                children: "Etkinlikler",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(L(), {
                                href: "#konusmacilar",
                                className:
                                  "hover:text-color-accent transition-all duration-300",
                                children: "Konuşmacılar",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(L(), {
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
                    (0, l.jsxs)("div", {
                      className: "flex flex-col items-center md:items-start",
                      children: [
                        (0, l.jsx)("h3", {
                          className: "text-xl font-semibold text-gray-400 mb-3",
                          children: "Topluluk",
                        }),
                        (0, l.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(L(), {
                                href: "https://togather.lodos.io/communities/multiacademy-94761667282726876508",
                                target: "_blank",
                                className:
                                  "hover:text-color-accent transition-all duration-300",
                                children: "ToGather",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(L(), {
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
                    (0, l.jsxs)("div", {
                      className: "flex flex-col items-center md:items-start",
                      children: [
                        (0, l.jsx)("h3", {
                          className: "text-xl font-semibold text-gray-400 mb-3",
                          children: "Projeler",
                        }),
                        (0, l.jsxs)("ul", {
                          className: "space-y-2",
                          children: [
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(L(), {
                                href: "https://android-blast-off.devmultigroup.com",
                                target: "_blank",
                                className:
                                  "hover:text-color-accent transition-all duration-300",
                                children: "Android Blast-Off",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(L(), {
                                href: "https://genai.devmultigroup.com",
                                target: "_blank",
                                className:
                                  "hover:text-color-accent transition-all duration-300",
                                children: "GenAI Fundamentals",
                              }),
                            }),
                            (0, l.jsx)("li", {
                              children: (0, l.jsx)(L(), {
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
                    (0, l.jsxs)("div", {
                      className: "flex flex-col items-center md:items-start",
                      children: [
                        (0, l.jsx)("h3", {
                          className: "text-xl font-semibold text-gray-400 mb-3",
                          children: "Hala Kayıt Yapmadın Mı?",
                        }),
                        (0, l.jsx)("p", {
                          className: "text-sm mb-4",
                          children:
                            "Etkinliklerden geri kalmamak i\xe7in hemen aramıza katıl!",
                        }),
                        (0, l.jsx)(L(), {
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
                (0, l.jsx)("hr", { className: "border-gray-600 mt-2" }),
                (0, l.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4 w-full text-center md:text-left",
                  children: [
                    (0, l.jsx)("p", {
                      children: "\xa9 Copyright Developer MultiGroup 2020–2025",
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex gap-4 justify-center text-white text-xl",
                      children: [
                        (0, l.jsx)(L(), {
                          href: "https://www.instagram.com/devmultigroup/",
                          "aria-label": "Instagram",
                          target: "_blank",
                          className:
                            "hover:text-color-accent transition-all duration-300",
                          children: (0, l.jsx)(N.M, {}),
                        }),
                        (0, l.jsx)(L(), {
                          href: "https://x.com/devmultigroup",
                          "aria-label": "X",
                          target: "_blank",
                          className:
                            "hover:text-color-accent transition-all duration-300",
                          children: (0, l.jsx)(k.g, {}),
                        }),
                        (0, l.jsx)(L(), {
                          href: "https://www.linkedin.com/company/devmultigroup/",
                          "aria-label": "LinkedIn",
                          target: "_blank",
                          className:
                            "hover:text-color-accent transition-all duration-300",
                          children: (0, l.jsx)(C.C, {}),
                        }),
                        (0, l.jsx)(L(), {
                          href: "https://github.com/Developer-MultiGroup",
                          "aria-label": "Github",
                          target: "_blank",
                          className:
                            "hover:text-color-accent transition-all duration-300",
                          children: (0, l.jsx)(E.f, {}),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)(S, { alwaysShow: !1 }),
          ],
        });
      }
      function P({ children: e }) {
        let [t, a] = (0, r.useState)([]),
          [s, n] = (0, r.useState)(
            "https://togather.lodos.io/communities/multiacademy-94761667282726876508",
          );
        return (0, l.jsxs)(w.D, {
          events: t,
          children: [(0, l.jsx)(y, { eventLink: s }), e, (0, l.jsx)(M, {})],
        });
      }
      a(9030);
    },
    56584: (e, t, a) => {
      "use strict";
      a.d(t, { D: () => c, j: () => d });
      var l = a(45512),
        r = a(58009),
        s = a.n(r),
        n = a(79334);
      let o = (0, r.createContext)({
          currentEvent: null,
          setCurrentEvent: () => {},
        }),
        i = {
          primary: "348 83% 47%",
          secondary: "348 83% 47%",
          accent: "348 83% 47%",
          background: "0 0% 6%",
          text: "0 0% 100%",
        },
        c = ({ children: e, events: t = [] }) => {
          let [a, c] = (0, r.useState)(t[0] ?? null),
            d = (0, n.usePathname)();
          return (
            s().useEffect(() => {
              t.length > 0 && !a && c(t[0]);
            }, [t, a]),
            s().useEffect(() => {
              let e = "/404" === d || "/not-found" === d ? i : a?.colorPalette;
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
            }, [a, d]),
            (0, l.jsx)(o.Provider, {
              value: { currentEvent: a, setCurrentEvent: c },
              children: e,
            })
          );
        },
        d = () => (0, r.useContext)(o);
    },
    83529: (e, t, a) => {
      "use strict";
      function l(e) {
        let t = {
          ç: "c",
          ğ: "g",
          ı: "i",
          ö: "o",
          ş: "s",
          ü: "u",
          Ç: "C",
          Ğ: "G",
          İ: "I",
          Ö: "O",
          Ş: "S",
          Ü: "U",
        };
        return e
          .split("")
          .map((e) => t[e] || e)
          .join("")
          .toLowerCase()
          .replace(/[^a-z0-9-]+/g, "-")
          .replace(/^-+|-+$/g, "")
          .replace(/--+/g, "-");
      }
      a.d(t, { Y: () => l });
    },
    67686: (e, t, a) => {
      "use strict";
      (a.r(t), a.d(t, { default: () => l }));
      let l = (0, a(46760).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call the default export of \"/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/(pages)/layout.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/(pages)/layout.tsx",
        "default",
      );
    },
  }));
