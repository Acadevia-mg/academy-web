((exports.id = 434),
  (exports.ids = [434]),
  (exports.modules = {
    41077: (e, t, s) => {
      (Promise.resolve().then(s.t.bind(s, 13219, 23)),
        Promise.resolve().then(s.t.bind(s, 34863, 23)),
        Promise.resolve().then(s.t.bind(s, 25155, 23)),
        Promise.resolve().then(s.t.bind(s, 40802, 23)),
        Promise.resolve().then(s.t.bind(s, 9350, 23)),
        Promise.resolve().then(s.t.bind(s, 48530, 23)),
        Promise.resolve().then(s.t.bind(s, 88921, 23)));
    },
    54645: (e, t, s) => {
      (Promise.resolve().then(s.t.bind(s, 66959, 23)),
        Promise.resolve().then(s.t.bind(s, 33875, 23)),
        Promise.resolve().then(s.t.bind(s, 88903, 23)),
        Promise.resolve().then(s.t.bind(s, 57174, 23)),
        Promise.resolve().then(s.t.bind(s, 84178, 23)),
        Promise.resolve().then(s.t.bind(s, 87190, 23)),
        Promise.resolve().then(s.t.bind(s, 61365, 23)));
    },
    70953: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 17490));
    },
    61225: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 82124));
    },
    27477: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 21154));
    },
    17749: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 86278));
    },
    96797: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 50042));
    },
    66941: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 6089));
    },
    86278: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => n }));
      var r = s(45512),
        a = s(34883);
      function n() {
        return (0, r.jsxs)("div", {
          className:
            "min-h-screen flex flex-col items-center justify-center bg-black",
          children: [
            (0, r.jsx)("img", {
              src: (0, a.b8)("/images/logo/logo-small-white.webp"),
              alt: "Logo",
              className: "mb-8 w-16",
            }),
            (0, r.jsx)("div", {
              className:
                "w-48 h-px bg-gray-600 rounded-full overflow-hidden relative",
              children: (0, r.jsx)("div", {
                className: "h-full bg-white animate-loading",
              }),
            }),
          ],
        });
      }
    },
    6089: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => u }));
      var r = s(45512),
        a = s(58009),
        n = s(39400),
        o = s(79334);
      function i({ targetDate: e, center: t = !1 }) {
        let [s, n] = (0, a.useState)(!1),
          {
            days: o,
            hours: i,
            minutes: l,
            seconds: d,
          } = (function (e) {
            let [t, s] = (0, a.useState)(
              (function (e) {
                let t = new Date().getTime(),
                  s = e.getTime() - t;
                if (s <= 0)
                  return { days: 0, hours: 0, minutes: 0, seconds: 0 };
                let r = Math.floor(s / 864e5);
                return {
                  days: r,
                  hours: Math.floor((s % 864e5) / 36e5),
                  minutes: Math.floor((s % 36e5) / 6e4),
                  seconds: Math.floor((s % 6e4) / 1e3),
                };
              })(e),
            );
            return t;
          })(new Date(e));
        if (!s)
          return (0, r.jsx)("p", {
            className: "text-2xl",
            children: "Y\xfckleniyor...",
          });
        let c = `flex ${t ? "justify-center" : "justify-center lg:justify-start"} items-center`;
        return (0, r.jsx)("div", {
          className: c,
          children:
            0 === o && 0 === i && 0 === l && 0 === d
              ? (0, r.jsx)("p", {
                  className: `text-4xl font-extrabold ${t ? "text-center" : "text-center md:text-right"}`,
                  children: "Katıldığınız i\xe7in teşekk\xfcrler",
                })
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsxs)("div", {
                      className: "flex flex-col items-center mx-1 md:mx-2",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-3xl md:text-5xl",
                          children: o,
                        }),
                        (0, r.jsx)("span", {
                          className: "text-base md:text-xl",
                          children: "G\xfcn",
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "mx-1 md:mx-2",
                      children: (0, r.jsx)("div", {
                        className: "w-px bg-color-text",
                        style: { height: "3rem", marginTop: "0.5rem" },
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex flex-col items-center mx-1 md:mx-2",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-3xl md:text-5xl",
                          children: i,
                        }),
                        (0, r.jsx)("span", {
                          className: "text-base md:text-xl",
                          children: "Saat",
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "mx-1 md:mx-2",
                      children: (0, r.jsx)("div", {
                        className: "w-px bg-color-text",
                        style: { height: "3rem", marginTop: "0.5rem" },
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex flex-col items-center mx-1 md:mx-2",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-3xl md:text-5xl",
                          children: l,
                        }),
                        (0, r.jsx)("span", {
                          className: "text-base md:text-xl",
                          children: "Dakika",
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "mx-1 md:mx-2",
                      children: (0, r.jsx)("div", {
                        className: "w-px bg-color-text",
                        style: { height: "3rem", marginTop: "0.5rem" },
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className: "flex flex-col items-center mx-1 md:mx-2",
                      children: [
                        (0, r.jsx)("span", {
                          className: "text-3xl md:text-5xl",
                          children: d,
                        }),
                        (0, r.jsx)("span", {
                          className: "text-base md:text-xl",
                          children: "Saniye",
                        }),
                      ],
                    }),
                  ],
                }),
        });
      }
      s(9030);
      var l = s(70360),
        d = s(93452),
        c = s(85763),
        m = s(16763);
      function u() {
        let e = (0, o.useRouter)(),
          [t, s] = (0, a.useState)(null),
          [u, x] = (0, a.useState)(0),
          [p, f] = (0, a.useState)(!1),
          [h, v] = (0, a.useState)([]);
        return (0, r.jsxs)("div", {
          className:
            "relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-color-background pt-[25vh] pb-8",
          children: [
            h.map((e) =>
              (0, r.jsx)(
                "div",
                {
                  className:
                    "absolute rounded-full animate-pulse text-color-text",
                  style: {
                    left: `${e.x}%`,
                    top: `${e.y}%`,
                    width: `${e.size}px`,
                    height: `${e.size}px`,
                    backgroundColor: "currentColor",
                    opacity: e.opacity,
                    animationDuration: `${3 * Math.random() + 2}s`,
                  },
                },
                e.id,
              ),
            ),
            (0, r.jsxs)("div", {
              className:
                "absolute animate-bounce duration-1000 opacity-20 top-30 md:top-40 right-10 md:right-20",
              children: [
                (0, r.jsx)(l.A, {
                  size: 40,
                  className: "text-color-text md:hidden",
                }),
                (0, r.jsx)(l.A, {
                  size: 80,
                  className: "text-color-text hidden md:block",
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              onClick: () => {
                (x((e) => e + 1), 4 === u && f(!0));
              },
              className:
                "relative cursor-pointer transition-all duration-300 hover:scale-105",
              children: [
                (0, r.jsx)("p", {
                  style: { fontFamily: "TanNimbus" },
                  className:
                    "select-none flex justify-center align-middle text-color-text text-7xl md:text-9xl text-center leading-relaxed",
                  children: "404",
                }),
                u > 0 &&
                  5 - u > 0 &&
                  (0, r.jsx)("div", {
                    className:
                      "absolute -top-4 -right-4 bg-color-accent rounded-full w-8 h-8 flex items-center justify-center text-color-primary text-xs font-bold",
                    children: 5 - u,
                  }),
                (0, r.jsx)(d.A, {
                  className:
                    "absolute -top-6 -left-6 text-color-accent animate-spin",
                  style: { animationDuration: "8s" },
                }),
                (0, r.jsx)(d.A, {
                  className:
                    "absolute -bottom-6 -right-6 text-color-accent animate-spin",
                  style: {
                    animationDuration: "8s",
                    animationDirection: "reverse",
                  },
                }),
              ],
            }),
            (0, r.jsx)("p", {
              className:
                "text-2xl md:text-4xl py-4 md:py-6 text-color-text font-extrabold text-center max-w-xl mx-auto px-4",
              children: "\xd6yle bir etkinlik olsa da gitsek!",
            }),
            (0, r.jsxs)("div", {
              className:
                "mt-6 md:mt-8 text-color-text bg-color-primary p-4 md:p-6 rounded-xl backdrop-blur-sm mx-4 w-[90%] max-w-md",
              children: [
                (0, r.jsx)("p", {
                  className:
                    "text-center mb-2 text-color-accent font-semibold text-sm md:text-base",
                  children: "Bir sonraki etkinliğe kalan s\xfcre:",
                }),
                (0, r.jsx)(i, {
                  center: !0,
                  targetDate: t?.date ?? new Date().toISOString(),
                }),
              ],
            }),
            (0, r.jsxs)(n.$, {
              onClick: () => {
                e.push("/");
              },
              className:
                "mt-5 md:mt-8 mb-12 bg-color-accent hover:bg-color-accent/80 text-color-text px-6 md:px-8 py-5 md:py-6 text-base md:text-lg flex items-center gap-2 animate-pulse",
              style: { animationDuration: "3s" },
              children: [(0, r.jsx)(c.A, { size: 18 }), "Anasayfaya D\xf6n"],
            }),
            p &&
              (0, r.jsx)(r.Fragment, {
                children: (0, r.jsxs)("div", {
                  className:
                    "fixed inset-0 bg-color-background/90 z-10 flex items-center justify-center flex-col gap-4",
                  onClick: () => f(!1),
                  children: [
                    (0, r.jsx)("div", {
                      className: "relative",
                      children: (0, r.jsx)(m.A, {
                        size: 100,
                        className: "text-color-accent animate-bounce",
                        style: { animationDuration: "2s" },
                      }),
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "text-2xl md:text-4xl text-color-text font-bold mt-8 text-center px-4",
                      children: "Kahve molası verelim mi? \uD83E\uDD2B",
                    }),
                    (0, r.jsx)("p", {
                      className:
                        "text-base md:text-xl text-color-accent mt-4 text-center max-w-md px-6",
                      children:
                        "404 sayfasını buldun, gizli easter egg'i keşfettin... Şimdi bir kave molası vermeyi hak ettin!",
                    }),
                    (0, r.jsx)(n.$, {
                      onClick: (e) => {
                        (e.stopPropagation(), f(!1));
                      },
                      className:
                        "mt-8 bg-color-accent hover:bg-color-accent/80 text-color-primary",
                      children: "Geri D\xf6n",
                    }),
                  ],
                }),
              }),
            (0, r.jsx)("p", {
              className:
                "text-color-text/30 text-[10px] md:text-xs px-4 text-center w-full",
              children:
                u > 0 && u < 5
                  ? "Devam et, neredeyse başardın..."
                  : "Psst... 404'e tıklamayı dene",
            }),
          ],
        });
      }
    },
    39400: (e, t, s) => {
      "use strict";
      s.d(t, { $: () => d });
      var r = s(45512),
        a = s(58009),
        n = s(12705),
        o = s(21643),
        i = s(44195);
      let l = (0, o.F)(
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
        d = a.forwardRef(
          ({ className: e, variant: t, size: s, asChild: a = !1, ...o }, d) => {
            let c = a ? n.DX : "button";
            return (0, r.jsx)(c, {
              className: (0, i.cn)(l({ variant: t, size: s, className: e })),
              ref: d,
              ...o,
            });
          },
        );
      d.displayName = "Button";
    },
    82124: (e, t, s) => {
      "use strict";
      s.d(t, { Toaster: () => v });
      var r = s(45512),
        a = s(54716),
        n = s(58009),
        o = s(12220),
        i = s(21643),
        l = s(51255),
        d = s(44195);
      let c = o.Kq,
        m = n.forwardRef(({ className: e, ...t }, s) =>
          (0, r.jsx)(o.LM, {
            ref: s,
            className: (0, d.cn)(
              "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
              e,
            ),
            ...t,
          }),
        );
      m.displayName = o.LM.displayName;
      let u = (0, i.F)(
          "group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
          {
            variants: {
              variant: {
                default: "border bg-background text-foreground",
                destructive:
                  "destructive group border-destructive bg-destructive text-destructive-foreground",
              },
            },
            defaultVariants: { variant: "default" },
          },
        ),
        x = n.forwardRef(({ className: e, variant: t, ...s }, a) =>
          (0, r.jsx)(o.bL, {
            ref: a,
            className: (0, d.cn)(u({ variant: t }), e),
            ...s,
          }),
        );
      ((x.displayName = o.bL.displayName),
        (n.forwardRef(({ className: e, ...t }, s) =>
          (0, r.jsx)(o.rc, {
            ref: s,
            className: (0, d.cn)(
              "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
              e,
            ),
            ...t,
          }),
        ).displayName = o.rc.displayName));
      let p = n.forwardRef(({ className: e, ...t }, s) =>
        (0, r.jsx)(o.bm, {
          ref: s,
          className: (0, d.cn)(
            "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            e,
          ),
          "toast-close": "",
          ...t,
          children: (0, r.jsx)(l.A, { className: "h-4 w-4" }),
        }),
      );
      p.displayName = o.bm.displayName;
      let f = n.forwardRef(({ className: e, ...t }, s) =>
        (0, r.jsx)(o.hE, {
          ref: s,
          className: (0, d.cn)("text-sm font-semibold [&+div]:text-xs", e),
          ...t,
        }),
      );
      f.displayName = o.hE.displayName;
      let h = n.forwardRef(({ className: e, ...t }, s) =>
        (0, r.jsx)(o.VY, {
          ref: s,
          className: (0, d.cn)("text-sm opacity-90", e),
          ...t,
        }),
      );
      function v() {
        let { toasts: e } = (0, a.dj)();
        return (0, r.jsxs)(c, {
          children: [
            e.map(function ({
              id: e,
              title: t,
              description: s,
              action: a,
              ...n
            }) {
              return (0, r.jsxs)(
                x,
                {
                  ...n,
                  children: [
                    (0, r.jsxs)("div", {
                      className: "grid gap-1",
                      children: [
                        t && (0, r.jsx)(f, { children: t }),
                        s && (0, r.jsx)(h, { children: s }),
                      ],
                    }),
                    a,
                    (0, r.jsx)(p, {}),
                  ],
                },
                e,
              );
            }),
            (0, r.jsx)(m, {}),
          ],
        });
      }
      h.displayName = o.VY.displayName;
    },
    54716: (e, t, s) => {
      "use strict";
      s.d(t, { dj: () => u });
      var r = s(58009);
      let a = 0,
        n = new Map(),
        o = (e) => {
          if (n.has(e)) return;
          let t = setTimeout(() => {
            (n.delete(e), c({ type: "REMOVE_TOAST", toastId: e }));
          }, 1e6);
          n.set(e, t);
        },
        i = (e, t) => {
          switch (t.type) {
            case "ADD_TOAST":
              return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 1) };
            case "UPDATE_TOAST":
              return {
                ...e,
                toasts: e.toasts.map((e) =>
                  e.id === t.toast.id ? { ...e, ...t.toast } : e,
                ),
              };
            case "DISMISS_TOAST": {
              let { toastId: s } = t;
              return (
                s
                  ? o(s)
                  : e.toasts.forEach((e) => {
                      o(e.id);
                    }),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === s || void 0 === s ? { ...e, open: !1 } : e,
                  ),
                }
              );
            }
            case "REMOVE_TOAST":
              if (void 0 === t.toastId) return { ...e, toasts: [] };
              return {
                ...e,
                toasts: e.toasts.filter((e) => e.id !== t.toastId),
              };
          }
        },
        l = [],
        d = { toasts: [] };
      function c(e) {
        ((d = i(d, e)),
          l.forEach((e) => {
            e(d);
          }));
      }
      function m({ ...e }) {
        let t = (a = (a + 1) % Number.MAX_SAFE_INTEGER).toString(),
          s = () => c({ type: "DISMISS_TOAST", toastId: t });
        return (
          c({
            type: "ADD_TOAST",
            toast: {
              ...e,
              id: t,
              open: !0,
              onOpenChange: (e) => {
                e || s();
              },
            },
          }),
          {
            id: t,
            dismiss: s,
            update: (e) => c({ type: "UPDATE_TOAST", toast: { ...e, id: t } }),
          }
        );
      }
      function u() {
        let [e, t] = r.useState(d);
        return (
          r.useEffect(
            () => (
              l.push(t),
              () => {
                let e = l.indexOf(t);
                e > -1 && l.splice(e, 1);
              }
            ),
            [e],
          ),
          {
            ...e,
            toast: m,
            dismiss: (e) => c({ type: "DISMISS_TOAST", toastId: e }),
          }
        );
      }
    },
    9030: (e, t, s) => {
      "use strict";
      function r(e) {
        return new Date(e).toLocaleDateString("tr-TR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      }
      function a(e) {
        return e
          .slice()
          .sort(
            (e, t) => new Date(e.date).getTime() - new Date(t.date).getTime(),
          );
      }
      function n(e) {
        let t = a(e);
        return t[t.length - 1];
      }
      function o(e) {
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
        let t = a(e);
        return t[t.length - 2];
      }
      function l(e) {
        let t = e.filter((e) => !1 !== e.navigable);
        return 0 === t.length
          ? null
          : t.sort(
              (e, t) => new Date(t.date).getTime() - new Date(e.date).getTime(),
            )[0];
      }
      function d(e, t, s) {
        let r = t
          .trim()
          .toLowerCase()
          .replace(/[-\s]+/g, "-");
        return (
          e.find((e) => {
            let t = e.name.trim().toLowerCase(),
              a = t.replace(/[-\s]?\d{4}$/, "").replace(/[-\s]+/g, "-"),
              n = t.match(/(\d{4})$/)?.[1];
            return a === r && n === s;
          }) || null
        );
      }
      s.d(t, {
        Cv: () => d,
        FX: () => l,
        Go: () => o,
        SG: () => i,
        WU: () => n,
        po: () => r,
      });
    },
    34883: (e, t, s) => {
      "use strict";
      s.d(t, { AL: () => o, J_: () => n, b8: () => a, vw: () => r });
      let r = "https://academy-assets.devmultigroup.com";
      function a(e) {
        let t = e.replace(/^\/images\//, "");
        return t.startsWith("logo/") ? `${r}/shared/${t}` : `${r}/${t}`;
      }
      function n(e, t, s) {
        return `${r}/${e}/${t}/${s}`;
      }
      function o(e, t) {
        let s = t.split("/").pop() || t;
        return `${r}/${e}/${s.startsWith("organizers") ? "" : "organizers/"}${s}`;
      }
    },
    44195: (e, t, s) => {
      "use strict";
      s.d(t, { cn: () => n });
      var r = s(82281),
        a = s(94805);
      function n(...e) {
        return (0, a.QP)((0, r.$)(e));
      }
    },
    71354: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => l, metadata: () => i }));
      var r = s(62740),
        a = s(79159),
        n = s.n(a);
      s(61135);
      var o = s(17490);
      let i = {
        title: "Developer MultiGroup",
        description:
          "Official event page of Developer MultiGroup where you can discover and attend insightful events every month! ",
        robots: { index: !0, follow: !0 },
        keywords: [
          "Developer",
          "MultiGroup",
          "Developer MultiGroup",
          "DMG",
          "Etkinlik",
          "Yazılım",
          "Yazılım Etkinliği",
          "Topluluk",
          "Yazılım Topluluğu",
        ],
      };
      function l({ children: e }) {
        return (0, r.jsx)("html", {
          lang: "en",
          children: (0, r.jsxs)("body", {
            className: `${n().variable} bg-color-background`,
            children: [e, (0, r.jsx)(o.Toaster, {})],
          }),
        });
      }
    },
    21154: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => r }));
      let r = (0, s(46760).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call the default export of \"/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/loading.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/loading.tsx",
        "default",
      );
    },
    50042: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => r }));
      let r = (0, s(46760).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call the default export of \"/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/not-found.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/not-found.tsx",
        "default",
      );
    },
    17490: (e, t, s) => {
      "use strict";
      s.d(t, { Toaster: () => r });
      let r = (0, s(46760).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/components/ui/toaster.tsx",
        "Toaster",
      );
    },
    70440: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => a }));
      var r = s(88077);
      let a = async (e) => [
        {
          type: "image/x-icon",
          sizes: "16x16",
          url:
            (0, r.fillMetadataSegment)(".", await e.params, "favicon.ico") + "",
        },
      ];
    },
    93634: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => a }));
      var r = s(88077);
      let a = async (e) => [
        {
          type: "image/png",
          width: 1200,
          height: 630,
          url:
            (0, r.fillMetadataSegment)(
              ".",
              await e.params,
              "opengraph-image.png",
            ) + "?a73085a423807d29",
        },
      ];
    },
    61135: () => {},
  }));
