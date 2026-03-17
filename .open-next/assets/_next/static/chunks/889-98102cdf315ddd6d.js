"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [889],
  {
    3388: (e, t, a) => {
      (a.r(t), a.d(t, { default: () => l }));
      var r = a(5155),
        s = a(7847);
      function l() {
        return (0, r.jsxs)("div", {
          className:
            "min-h-screen flex flex-col items-center justify-center bg-black",
          children: [
            (0, r.jsx)("img", {
              src: (0, s.b8)("/images/logo/logo-small-white.webp"),
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
    1397: (e, t, a) => {
      a.d(t, { A: () => et });
      var r = a(5155),
        s = a(2979),
        l = a(2115),
        n = a(6793),
        i = a.n(n),
        o = a(8003);
      function c(e, t) {
        try {
          let a = new Date(t);
          if (isNaN(a.getTime())) throw Error("Invalid base date");
          let [r, s] = e.split(":").map(Number),
            l = new Date(a);
          l.setHours(r, s, 0, 0);
          let n = l.getUTCFullYear(),
            i = (l.getUTCMonth() + 1).toString().padStart(2, "0"),
            o = l.getUTCDate().toString().padStart(2, "0"),
            c = l.getUTCHours().toString().padStart(2, "0"),
            d = l.getUTCMinutes().toString().padStart(2, "0");
          return ""
            .concat(n)
            .concat(i)
            .concat(o, "T")
            .concat(c)
            .concat(d, "00Z");
        } catch (e) {
          throw (console.error("Error formatting date:", e), e);
        }
      }
      function d(e) {
        return e
          ? e
              .replace(/[\\,;]/g, "\\$&")
              .replace(/\n/g, "\\n")
              .replace(/[\r\t]/g, "")
              .trim()
          : "";
      }
      var m = a(3312),
        x = a(1567);
      let u = l.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)("div", {
          ref: t,
          className: (0, x.cn)(
            "rounded-xl border bg-card text-card-foreground shadow",
            a,
          ),
          ...s,
        });
      });
      ((u.displayName = "Card"),
        (l.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)("div", {
            ref: t,
            className: (0, x.cn)("flex flex-col space-y-1.5 p-6", a),
            ...s,
          });
        }).displayName = "CardHeader"),
        (l.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)("div", {
            ref: t,
            className: (0, x.cn)(
              "font-semibold leading-none tracking-tight",
              a,
            ),
            ...s,
          });
        }).displayName = "CardTitle"),
        (l.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)("div", {
            ref: t,
            className: (0, x.cn)("text-sm text-muted-foreground", a),
            ...s,
          });
        }).displayName = "CardDescription"),
        (l.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)("div", {
            ref: t,
            className: (0, x.cn)("p-6 pt-0", a),
            ...s,
          });
        }).displayName = "CardContent"),
        (l.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)("div", {
            ref: t,
            className: (0, x.cn)("flex items-center p-6 pt-0", a),
            ...s,
          });
        }).displayName = "CardFooter"));
      var p = a(2056),
        h = (a(8016), a(9645)),
        f = a(7847),
        g = a(5564),
        b = a(1346),
        v = a(7193);
      let j = l.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)(b.bL, {
          ref: t,
          className: (0, x.cn)(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            a,
          ),
          ...s,
          children: (0, r.jsx)(b.C1, {
            className: (0, x.cn)(
              "flex items-center justify-center text-current",
            ),
            children: (0, r.jsx)(v.A, { className: "h-4 w-4" }),
          }),
        });
      });
      j.displayName = b.bL.displayName;
      let w = (0, a(1027).F)(
        "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          variants: {
            variant: {
              default:
                "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
              secondary:
                "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
              destructive:
                "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
              outline: "text-foreground",
            },
          },
          defaultVariants: { variant: "default" },
        },
      );
      function N(e) {
        let { className: t, variant: a, ...s } = e;
        return (0, r.jsx)("div", {
          className: (0, x.cn)(w({ variant: a }), t),
          ...s,
        });
      }
      var y = a(5565),
        k = a(8633),
        S = a(6046),
        z = a(8217);
      let T = z.bL,
        E = l.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)(z.B8, {
            ref: t,
            className: (0, x.cn)(
              "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
              a,
            ),
            ...s,
          });
        });
      E.displayName = z.B8.displayName;
      let C = l.forwardRef((e, t) => {
        let { className: a, ...s } = e;
        return (0, r.jsx)(z.l9, {
          ref: t,
          className: (0, x.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
            a,
          ),
          ...s,
        });
      });
      function A(e) {
        let { event: t, color: a, eventSlug: n } = e,
          { toast: i } = (0, g.dj)();
        (0, S.useRouter)();
        let [x, b] = (0, l.useState)([]),
          [v, w] = (0, l.useState)([]),
          [z, A] = (0, l.useState)(""),
          D = a.split(" "),
          _ = D[0],
          I = D[1],
          R = D[2],
          P = "hsl(".concat(_, " ").concat(I, " ").concat(R, ")"),
          L = "hsl(".concat(_, " ").concat(I, " 90%)"),
          O = "hsl("
            .concat(_, " ")
            .concat(I, " ")
            .concat(0.7 * parseInt(R), "%)");
        "hsl("
          .concat(_, " ")
          .concat(I, " ")
          .concat(0.5 * parseInt(R), "%)");
        let M = "hsl(".concat(_, " ").concat(I, " 95%)"),
          F = "hsl(".concat(_, " ").concat(I, " 25%)"),
          Y = new Date(t.date) < new Date();
        (0, l.useEffect)(() => {
          if (t.sessions && t.sessions.length > 0) {
            let e = Array.from(
              new Set(t.sessions.map((e) => e.room || "Main")),
            );
            (w(e), e.length > 0 && !z && A(e[0]));
          }
        }, [t.sessions, z]);
        let B = async (e) => {
            if (0 === e.length) return;
            let a = new Date();
            if ((a.setHours(0, 0, 0, 0), new Date(t.date) < a)) {
              i({
                title: "Bilgi",
                description:
                  "Bu etkinlik ge\xe7miş bir tarihte ger\xe7ekleşmiştir.",
                className: "bg-yellow-500 text-white",
                duration: 3e3,
              });
              return;
            }
            let r = {
              ...t,
              location: {
                ...t.location,
                name:
                  1 === e.length
                    ? ""
                        .concat(t.location.name, " - ")
                        .concat(e[0].room || "Main")
                    : t.location.name,
              },
              sessions: e,
            };
            (await (function (e) {
              try {
                var t;
                if (
                  !(null == e ? void 0 : e.name) ||
                  !(null == e ? void 0 : e.location) ||
                  !(null == e
                    ? void 0
                    : null === (t = e.sessions) || void 0 === t
                      ? void 0
                      : t.length) ||
                  !(null == e ? void 0 : e.date)
                )
                  throw Error("Missing required event data");
                let a = [
                    "BEGIN:VCALENDAR",
                    "VERSION:2.0",
                    "PRODID:-//MyEventApp//EN",
                    "CALSCALE:GREGORIAN",
                    "METHOD:PUBLISH",
                  ],
                  r = new Date(),
                  s = c(
                    ""
                      .concat(r.getHours().toString().padStart(2, "0"), ":")
                      .concat(r.getMinutes().toString().padStart(2, "0")),
                    r.toISOString(),
                  );
                (e.sessions.forEach((t) => {
                  if ("Network" !== t.room) {
                    if (!t.topic || !t.startTime || !t.endTime) {
                      console.error(
                        'Skipping session "'.concat(
                          t.topic,
                          '" - missing required fields for non-network room.',
                        ),
                      );
                      return;
                    }
                  } else if (!t.topic || !t.startTime || !t.endTime) {
                    console.warn(
                      "Skipping network session (speaker: ".concat(
                        t.speakerName,
                        ") due to missing fields.",
                      ),
                    );
                    return;
                  }
                  try {
                    let r = c(t.startTime, e.date),
                      l = c(t.endTime, e.date),
                      n = (t.topic || "network").replace(/\W+/g, "");
                    (a.push("BEGIN:VEVENT"),
                      a.push(
                        "UID:"
                          .concat(e.id, "-")
                          .concat(n, "-")
                          .concat(Date.now(), "@myeventapp.com"),
                      ),
                      a.push("DTSTAMP:".concat(s)),
                      a.push("DTSTART:".concat(r)),
                      a.push("DTEND:".concat(l)),
                      a.push("SUMMARY:".concat(d(t.topic || "Session"))),
                      a.push(
                        "DESCRIPTION:".concat(
                          d(
                            "Konuşmacı: "
                              .concat(t.speakerName, "\n\n")
                              .concat(e.cardDescription || ""),
                          ),
                        ),
                      ),
                      a.push("LOCATION:".concat(d(t.room))),
                      a.push(
                        "GEO:"
                          .concat(e.location.latitude, ";")
                          .concat(e.location.longitude),
                      ),
                      a.push("END:VEVENT"));
                  } catch (e) {
                    console.error(
                      "Error creating event for session: ".concat(
                        t.topic || "Session",
                      ),
                      e,
                    );
                  }
                }),
                  a.push("END:VCALENDAR"));
                let l = a.join("\r\n"),
                  n = new Blob([l], { type: "text/calendar;charset=utf-8" }),
                  i = "".concat(
                    e.name.replace(/[^a-z0-9]/gi, "_").toLowerCase(),
                    ".ics",
                  );
                (0, o.saveAs)(n, i);
              } catch (e) {
                throw (
                  console.error("Failed to generate calendar file:", e),
                  Error("Failed to generate calendar file")
                );
              }
            })(r),
              i({
                title: "Takvim dosyası indirildi",
                description: "".concat(
                  e.length,
                  " etkinlik takviminize eklendi.",
                ),
                className: "bg-green-500 text-white",
                duration: 3e3,
              }));
          },
          V = (e) => !1,
          G = (e) => {
            Y ||
              (x.some(
                (t) =>
                  t.speakerName === e.speakerName &&
                  t.topic === e.topic &&
                  (t.room === e.room || (!t.room && !e.room)),
              )
                ? b(
                    x.filter(
                      (t) =>
                        !(
                          t.speakerName === e.speakerName &&
                          t.topic === e.topic &&
                          (t.room === e.room || (!t.room && !e.room))
                        ),
                    ),
                  )
                : (V(e) &&
                    i({
                      title: "Zaman \xc7akışması",
                      description:
                        "Bu oturum, se\xe7tiğiniz diğer oturumlarla \xe7akışıyor.",
                      variant: "destructive",
                      duration: 3e3,
                    }),
                  b([...x, e])));
          },
          H = z
            ? t.sessions.filter((e) => (e.room || "Main") === z)
            : t.sessions,
          U =
            "Network" === z ||
            H.every((e) => {
              var t;
              return (
                "Network" === e.room ||
                (null === (t = e.topic) || void 0 === t
                  ? void 0
                  : t.toLowerCase().includes("network")) ||
                e.speakerName.toLowerCase().includes("network")
              );
            }),
          J = {
            hidden: { opacity: 0, scale: 0.8 },
            show: {
              opacity: 1,
              scale: 1,
              transition: { type: "spring", stiffness: 200, damping: 15 },
            },
            exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
          };
        return (0, r.jsxs)("div", {
          className:
            " mx-auto w-full md:w-5/6 2xl:w-2/3 pb-16 md:px-0 px-4 pt-[30px]",
          children: [
            v.length > 1 &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("h2", {
                    className:
                      "font-extrabold text-3xl sm:text-4xl md:text-5xl mb-2 text-center text-color-text",
                    children: "Seni bekleyen",
                  }),
                  (0, r.jsx)(T, {
                    value: z,
                    onValueChange: (e) => {
                      A(e);
                    },
                    className: "mb-2 mt-4 flex flex-col items-center",
                    children: (0, r.jsx)(E, {
                      className:
                        "border border-blue-200 rounded-lg p-1 gap-x-2 overflow-hidden bg-color-accent shadow-sm h-auto",
                      children: [
                        ...v.filter((e) => "Network" !== e).sort(),
                        ...v.filter((e) => "Network" === e),
                      ].map((e, t) =>
                        (0, r.jsx)(
                          C,
                          {
                            value: e,
                            className:
                              "px-8 py-1 text-xl sm:text-2xl md:text-4xl font-bold rounded-lg transition-all duration-200 ".concat(
                                e === z
                                  ? "bg-color-white text-white"
                                  : "bg-color-white text-gray-800 hover:bg-gray-100/90",
                              ),
                            children: e,
                          },
                          "room-tab-".concat(e),
                        ),
                      ),
                    }),
                  }),
                  (0, r.jsx)("h2", {
                    className:
                      "font-extrabold text-3xl sm:text-4xl md:text-5xl mb-2 text-center text-color-text",
                    children: "Konuşmaları",
                  }),
                  (0, r.jsx)("p", {
                    className:
                      "text-lg max-w-4xl w-5/6 mx-auto text-center pb-16",
                    children:
                      "Sekt\xf6r\xfcn \xf6nde gelen şirketleri hangi teknolojileri kullanıyor, kararlarını neye g\xf6re alıyor, geleceği nasıl g\xf6r\xfcyor? Gelin, doğrudan onların ağzından dinleyelim",
                  }),
                ],
              }),
            (0, r.jsx)(k.N, {
              children:
                !Y &&
                x.length > 0 &&
                (0, r.jsx)(s.P.div, {
                  initial: { opacity: 0, height: 0, marginBottom: 0 },
                  animate: { opacity: 1, height: "auto", marginBottom: 32 },
                  exit: { opacity: 0, height: 0, marginBottom: 0 },
                  transition: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] },
                  className: "overflow-hidden",
                  children: (0, r.jsxs)(s.P.div, {
                    style: { backgroundColor: M, borderColor: L },
                    className: "p-4 rounded-lg border",
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.3, delay: 0.1 },
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "flex flex-col md:flex-row justify-between items-start gap-2 md:items-center mb-4",
                        children: [
                          (0, r.jsxs)("h3", {
                            className: "text-lg font-bold",
                            style: { color: F },
                            children: ["Se\xe7ilen Oturumlar (", x.length, ")"],
                          }),
                          (0, r.jsxs)(m.$, {
                            onClick: () => B(x),
                            style: {
                              backgroundColor: P,
                              color: "white",
                              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            },
                            className:
                              "hover:opacity-90 active:opacity-80 shadow-md",
                            children: [
                              (0, r.jsx)(p.V, { className: "mr-2", size: 16 }),
                              "Se\xe7ilenleri Ekle",
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)(s.P.div, {
                        className: "flex flex-wrap gap-2",
                        variants: {
                          hidden: { opacity: 0 },
                          show: {
                            opacity: 1,
                            transition: {
                              staggerChildren: 0.08,
                              delayChildren: 0.2,
                            },
                          },
                        },
                        initial: "hidden",
                        animate: "show",
                        children: (0, r.jsx)(k.N, {
                          children: x.map((e) =>
                            (0, r.jsx)(
                              s.P.div,
                              {
                                variants: J,
                                initial: "hidden",
                                animate: "show",
                                exit: "exit",
                                layout: !0,
                                children: (0, r.jsxs)(N, {
                                  style: { backgroundColor: L, color: F },
                                  className:
                                    "cursor-pointer flex items-center gap-1 p-2 hover:opacity-90",
                                  onClick: () => G(e),
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "font-medium",
                                      children: e.startTime,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "mx-1",
                                      children: "-",
                                    }),
                                    (0, r.jsx)("span", {
                                      children: e.speakerName,
                                    }),
                                    e.room &&
                                      (0, r.jsxs)("span", {
                                        className: "text-xs ml-1",
                                        children: ["(", e.room, ")"],
                                      }),
                                    (0, r.jsx)("button", {
                                      className: "ml-1",
                                      style: { color: O },
                                      children: "\xd7",
                                    }),
                                  ],
                                }),
                              },
                              "selected-"
                                .concat(e.speakerName, "-")
                                .concat(e.topic, "-")
                                .concat(e.room || ""),
                            ),
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
            }),
            U
              ? (0, r.jsx)("div", {
                  className:
                    "flex flex-wrap justify-center gap-6 max-w-5/6 mx-auto bg-color-primary p-8 rounded-2xl",
                  children: H.map((e) => {
                    let a = t.speakers.find(
                      (t) => t.fullName === e.speakerName,
                    );
                    return (0, r.jsxs)(
                      "div",
                      {
                        className:
                          "flex flex-col items-center w-[calc(100%/2-1.5rem)] sm:w-[calc(100%/3-1.5rem)] md:w-[calc(100%/4-1.5rem)] lg:w-[calc(100%/5-1.5rem)]",
                        children: [
                          (0, r.jsx)("div", {
                            className: "relative",
                            children: (0, r.jsx)(y.default, {
                              src: (0, f.J_)(
                                n,
                                "speakers",
                                "".concat((0, h.Y)(e.speakerName), ".webp"),
                              ),
                              alt: e.speakerName,
                              width: 128,
                              height: 128,
                              className:
                                "rounded-full object-cover mx-auto shadow-lg",
                              loading: "lazy",
                            }),
                          }),
                          (0, r.jsx)("p", {
                            className: "text-lg font-bold text-center mt-3",
                            children: e.speakerName,
                          }),
                          a &&
                            (0, r.jsx)("p", {
                              className: "text-sm text-gray-600 text-center",
                              children: a.title,
                            }),
                        ],
                      },
                      "network-speaker-"
                        .concat(e.speakerName, "-")
                        .concat(e.topic || ""),
                    );
                  }),
                })
              : (0, r.jsx)("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-6 w-full",
                  children: H.map((e) => {
                    let t = x.some(
                      (t) =>
                        t.speakerName === e.speakerName &&
                        t.topic === e.topic &&
                        (t.room === e.room || (!t.room && !e.room)),
                    );
                    return (0, r.jsxs)(
                      u,
                      {
                        className:
                          "w-full mx-auto p-4 py-6 rounded-2xl select-none transition-all overflow-hidden ".concat(
                            t
                              ? "border-2 border-color-accent outline outline-2 outline-color-accent outline-offset-0"
                              : "",
                            " bg-color-primary",
                          ),
                        children: [
                          (0, r.jsxs)("div", {
                            className: "flex flex-col sm:hidden gap-3",
                            onClick: () => {
                              Y || G(e);
                            },
                            children: [
                              (0, r.jsxs)("div", {
                                className: "flex items-start gap-4",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "relative w-16 aspect-square rounded-full overflow-hidden border-4 border-white shadow-md shrink-0 row-span-2",
                                    children: (0, r.jsx)(y.default, {
                                      src: (0, f.J_)(
                                        n,
                                        "speakers",
                                        "".concat(
                                          (0, h.Y)(e.speakerName),
                                          ".webp",
                                        ),
                                      ),
                                      alt: e.speakerName,
                                      fill: !0,
                                      className: "object-cover",
                                      loading: "lazy",
                                    }),
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "flex flex-col flex-1 gap-1",
                                    children: [
                                      (0, r.jsx)("p", {
                                        className:
                                          "font-bold text-color-text text-lg",
                                        children: e.speakerName,
                                      }),
                                      (0, r.jsxs)("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          (0, r.jsxs)("p", {
                                            className:
                                              "text-sm font-semibold text-color-text whitespace-nowrap",
                                            children: [
                                              e.startTime,
                                              " - ",
                                              e.endTime,
                                            ],
                                          }),
                                          !Y &&
                                            (0, r.jsxs)("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                !1,
                                                (0, r.jsx)(j, {
                                                  "aria-label": "checkbox",
                                                  checked: t,
                                                  onCheckedChange: () => G(e),
                                                  className: "border rounded "
                                                    .concat(
                                                      t
                                                        ? "bg-color-accent text-white"
                                                        : "bg-transparent text-transparent",
                                                      " ",
                                                    )
                                                    .concat(
                                                      "border-color-accent",
                                                    ),
                                                }),
                                              ],
                                            }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className: "text-left",
                                children: (0, r.jsx)("p", {
                                  className: "text-color-text text-sm",
                                  children: e.topic,
                                }),
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "hidden sm:flex flex-row items-center justify-between gap-4",
                            onClick: () => {
                              Y || G(e);
                            },
                            children: [
                              (0, r.jsxs)("div", {
                                className:
                                  "flex items-center gap-4 flex-1 min-w-0",
                                children: [
                                  (0, r.jsx)("div", {
                                    className:
                                      "relative w-[60px] aspect-square rounded-full overflow-hidden border-4 border-white shadow-md shrink-0",
                                    children: (0, r.jsx)(y.default, {
                                      src: (0, f.J_)(
                                        n,
                                        "speakers",
                                        "".concat(
                                          (0, h.Y)(e.speakerName),
                                          ".webp",
                                        ),
                                      ),
                                      alt: e.speakerName,
                                      fill: !0,
                                      className: "object-cover",
                                      loading: "lazy",
                                    }),
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                      (0, r.jsx)("p", {
                                        className:
                                          "font-bold text-color-text text-lg",
                                        children: e.speakerName,
                                      }),
                                      (0, r.jsx)("p", {
                                        className: "text-color-text text-sm",
                                        children: e.topic,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "flex flex-col items-end gap-2 shrink-0",
                                children: [
                                  (0, r.jsxs)("p", {
                                    className:
                                      "text-sm font-semibold text-color-text whitespace-nowrap",
                                    children: [e.startTime, " - ", e.endTime],
                                  }),
                                  !Y &&
                                    (0, r.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        !1,
                                        (0, r.jsx)(j, {
                                          "aria-label": "checkbox",
                                          checked: t,
                                          onCheckedChange: () => G(e),
                                          className: "border rounded "
                                            .concat(
                                              t
                                                ? "bg-color-accent text-white"
                                                : "bg-transparent text-transparent",
                                              " ",
                                            )
                                            .concat("border-color-accent"),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      "session-card-"
                        .concat(e.speakerName, "-")
                        .concat(e.topic, "-")
                        .concat(e.room || ""),
                    );
                  }),
                }),
          ],
        });
      }
      ((C.displayName = z.l9.displayName),
        (l.forwardRef((e, t) => {
          let { className: a, ...s } = e;
          return (0, r.jsx)(z.UC, {
            ref: t,
            className: (0, x.cn)(
              "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              a,
            ),
            ...s,
          });
        }).displayName = z.UC.displayName));
      var D = a(169),
        _ = a(6153),
        I = a(446);
      let R = (e) => {
          let { speakers: t, eventSlug: a } = e,
            [s, n] = (0, l.useState)({}),
            i = (e) => {
              n((t) => ({ ...t, [e]: !t[e] }));
            };
          return (0, r.jsx)("section", {
            className: "w-5/6 2xl:w-2/3 mx-auto md:px-0 px-4",
            children: (0, r.jsx)("div", {
              className: "flex flex-wrap justify-center gap-4",
              children: t.map((e) =>
                (0, r.jsx)(
                  "div",
                  {
                    className:
                      "h-[250px] w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-13px)] cursor-pointer group [perspective:1000px] ".concat(
                        s[e.fullName] ? "flip-active" : "",
                      ),
                    onClick: () => i(e.fullName),
                    children: (0, r.jsxs)("div", {
                      className:
                        "relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ".concat(
                          s[e.fullName] ? "[transform:rotateY(180deg)]" : "",
                          " group-hover:[transform:rotateY(180deg)]",
                        ),
                      children: [
                        (0, r.jsx)(u, {
                          className:
                            "absolute w-full h-full overflow-hidden [backface-visibility:hidden]",
                          children: (0, r.jsx)("div", {
                            className: "relative w-full h-full",
                            children: (0, r.jsx)(y.default, {
                              src: (0, f.J_)(
                                a,
                                "speakers",
                                "".concat((0, h.Y)(e.fullName), ".webp"),
                              ),
                              alt: e.fullName,
                              className: "object-cover object-[50%_25%]",
                              fill: !0,
                              sizes:
                                "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw",
                              loading: "lazy",
                            }),
                          }),
                        }),
                        (0, r.jsxs)(u, {
                          className:
                            "absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col p-4",
                          children: [
                            (0, r.jsx)("h3", {
                              className:
                                "text-lg font-semibold text-center mt-2",
                              children: e.fullName,
                            }),
                            (0, r.jsx)("div", {
                              className:
                                "flex-grow flex items-center justify-center",
                              children: (0, r.jsx)("p", {
                                className: "text-sm text-gray-500 text-center",
                                children: e.title,
                              }),
                            }),
                            e.company &&
                              (0, r.jsx)("div", {
                                className: "flex justify-center w-full h-16",
                                children: (0, r.jsx)("div", {
                                  className: "relative w-24 h-16",
                                  children: (0, r.jsx)(y.default, {
                                    src: (0, f.J_)(
                                      a,
                                      "sponsors",
                                      "".concat((0, h.Y)(e.company), ".webp"),
                                    ),
                                    alt: "".concat(e.company, " logo"),
                                    className: "object-contain",
                                    fill: !0,
                                    sizes: "96px",
                                    loading: "lazy",
                                  }),
                                }),
                              }),
                            (0, r.jsxs)("div", {
                              className: "flex justify-center space-x-3 mb-2",
                              children: [
                                e.instagram &&
                                  (0, r.jsx)("a", {
                                    href: e.instagram,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: (e) => e.stopPropagation(),
                                    className:
                                      "text-pink-600 hover:text-pink-700 transition-colors",
                                    "aria-label": "Speaker Instagram account",
                                    children: (0, r.jsx)(D.M, {
                                      size: 28,
                                      weight: "fill",
                                    }),
                                  }),
                                e.linkedin &&
                                  (0, r.jsx)("a", {
                                    href: e.linkedin,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: (e) => e.stopPropagation(),
                                    className:
                                      "text-blue-600 hover:text-blue-700 transition-colors",
                                    "aria-label": "Speaker LinkedIn account",
                                    children: (0, r.jsx)(_.C, {
                                      size: 28,
                                      weight: "fill",
                                    }),
                                  }),
                                e.twitter &&
                                  (0, r.jsx)("a", {
                                    href: e.twitter,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onClick: (e) => e.stopPropagation(),
                                    className:
                                      "text-black hover:text-gray-700 transition-colors",
                                    "aria-label": "Speaker Twitter account",
                                    children: (0, r.jsx)(I.g, { size: 28 }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  },
                  e.fullName,
                ),
              ),
            }),
          });
        },
        P = (e) => {
          let { sponsors: t, eventSlug: a, reverse: s = !1, speed: n = 1 } = e,
            i = (0, l.useRef)(null),
            o = (0, l.useRef)(null),
            [c, d] = (0, l.useState)(!1);
          ((0, l.useEffect)(() => {
            let e = i.current,
              a = o.current;
            if (!e || !a || 0 === t.length) return;
            let r = setTimeout(() => {
              d(!0);
            }, 100);
            return () => clearTimeout(r);
          }, [t]),
            (0, l.useEffect)(() => {
              if (!c) return;
              let e = i.current,
                a = o.current;
              if (!e || !a || 0 === t.length) return;
              let r = Array.from(a.querySelectorAll(".sponsor-item"));
              if (0 === r.length) return;
              let l = r.slice(0, t.length).reduce((e, t) => {
                  let a = window.getComputedStyle(t),
                    r = Number.parseFloat(a.marginLeft || "0"),
                    s = Number.parseFloat(a.marginRight || "0");
                  return e + t.getBoundingClientRect().width + r + s;
                }, 0),
                d = 0,
                m = () => {
                  ((d += s ? n : -n),
                    !s && d <= -l ? (d += l) : s && d >= l && (d -= l),
                    (a.style.transform = "translateX(".concat(d, "px)")),
                    requestAnimationFrame(m));
                },
                x = requestAnimationFrame(m);
              return () => {
                cancelAnimationFrame(x);
              };
            }, [t, s, n, c]));
          let m = [
            ...t,
            ...t,
            ...t,
            ...t,
            ...t,
            ...t,
            ...t,
            ...t,
            ...t,
            ...t,
            ...t,
            ...t,
            ...t,
            ...t,
            ...t,
          ];
          return (0, r.jsx)("div", {
            className:
              "w-full flex justify-center bg-color-background overflow-hidden",
            children: (0, r.jsxs)("div", {
              className: "w-2/3 relative",
              children: [
                (0, r.jsx)("div", {
                  className:
                    "absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-color-background to-transparent z-10",
                }),
                (0, r.jsx)("div", {
                  ref: i,
                  className: "relative h-40 overflow-hidden",
                  children: (0, r.jsx)("div", {
                    ref: o,
                    className: "flex items-center absolute h-full",
                    style: { willChange: "transform" },
                    children: m.map((e, t) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className: "mx-8 flex-shrink-0 sponsor-item",
                          children: (0, r.jsx)(y.default, {
                            src: (0, f.J_)(
                              a,
                              "sponsors",
                              "".concat(e.sponsorSlug, ".webp"),
                            ),
                            alt: "".concat(e.sponsorSlug, " logo"),
                            width: 160,
                            height: 56,
                            className:
                              "object-contain opacity-80 filter transition-all duration-200 ease-in-out grayscale brightness-[15%] contrast-[100%] hover:opacity-100 hover:grayscale-0 hover:brightness-110 hover:contrast-100",
                            draggable: !1,
                            loading: "lazy",
                          }),
                        },
                        "".concat(e.sponsorSlug, "-").concat(t),
                      ),
                    ),
                  }),
                }),
                (0, r.jsx)("div", {
                  className:
                    "absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-color-background to-transparent z-10",
                }),
              ],
            }),
          });
        };
      var L = a(4420),
        O = a(1325),
        M = a(1891);
      let F = (e) => {
        let { items: t } = e,
          [a, n] = (0, l.useState)(null),
          i = { stiffness: 100, damping: 5 },
          o = (0, L.d)(0),
          c = (0, O.z)((0, M.G)(o, [-100, 100], [-45, 45]), i),
          d = (0, O.z)((0, M.G)(o, [-100, 100], [-50, 50]), i),
          m = (e) => {
            let t = e.target.offsetWidth / 2;
            o.set(e.nativeEvent.offsetX - t);
          };
        return (0, r.jsx)(r.Fragment, {
          children: t.map((e, t) =>
            (0, r.jsxs)(
              "div",
              {
                className: "group relative -mr-4",
                onMouseEnter: () => n(e.id),
                onMouseLeave: () => n(null),
                children: [
                  (0, r.jsx)(k.N, {
                    mode: "popLayout",
                    children:
                      a === e.id &&
                      (0, r.jsxs)(s.P.div, {
                        initial: { opacity: 0, y: 20, scale: 0.6 },
                        animate: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 10,
                          },
                        },
                        exit: { opacity: 0, y: 20, scale: 0.6 },
                        style: {
                          translateX: d,
                          rotate: c,
                          whiteSpace: "nowrap",
                        },
                        className:
                          "absolute -left-1/2 -top-16 z-50 flex flex-col items-center justify-center rounded-md bg-color-accent px-2  py-2 text-xs shadow-xl",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "relative z-30 text-base font-bold text-color-text",
                            children: e.name,
                          }),
                          (0, r.jsx)("div", {
                            className: "text-xs text-color-text",
                            children: e.designation,
                          }),
                        ],
                      }),
                  }),
                  (0, r.jsx)("img", {
                    onMouseMove: m,
                    height: 100,
                    width: 100,
                    src: e.image,
                    alt: e.name,
                    className:
                      "relative !m-0 h-14 w-14 rounded-full border-4 border-color-accent object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105",
                  }),
                ],
              },
              e.name,
            ),
          ),
        });
      };
      var Y = a(9443);
      function B(e) {
        let { tickets: t } = e;
        return (0, r.jsx)("div", {
          className:
            "w-5/6 2xl:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: t.map((e, t) =>
            (0, r.jsxs)(
              "div",
              {
                className: "bg-color-primary rounded-xl p-8 shadow-md",
                children: [
                  (0, r.jsx)("h2", {
                    className: "text-color-text text-2xl font-bold mb-2",
                    children: e.type,
                  }),
                  (0, r.jsx)("p", {
                    className: "text-color-text mb-6 text-base",
                    children: e.description,
                  }),
                  (0, r.jsxs)("div", {
                    className: "mb-6",
                    children: [
                      (0, r.jsxs)("span", {
                        className: "text-color-text text-3xl font-bold",
                        children: ["₺", e.price],
                      }),
                      (0, r.jsx)("span", {
                        className: "text-color-text ml-1 text-sm",
                        children: "TRY",
                      }),
                    ],
                  }),
                  (0, r.jsx)("a", {
                    href: e.link,
                    className:
                      "block w-full text-center bg-color-background text-color-text py-4 px-4 rounded-xl border-2 border-color-accent hover:border-color-secondary hover:bg-color-secondary hover:text-color-background transition-all duration-300 mb-6 text-xl font-medium",
                    target: "_blank",
                    rel: "noreferrer",
                    children: "Destek Olun",
                  }),
                  (0, r.jsx)("div", {
                    className: "pt-4",
                    children: e.perks.map((e, t) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          className:
                            "flex items-center border-t border-color-accent py-4 gap-x-4",
                          children: [
                            (0, r.jsx)(Y.J, {
                              size: 20,
                              className: "text-color-text",
                            }),
                            (0, r.jsx)("span", {
                              className: "text-color-text",
                              children: e,
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              },
              t,
            ),
          ),
        });
      }
      var V = a(3463);
      let G = (e) => {
        let {
            className: t,
            dark: a,
            beforeHighlight: s = "",
            highlightText: l = "",
            afterHighlight: n = "",
            children: i,
          } = e,
          o = s || l || n;
        return (0, r.jsxs)("div", {
          className: "py-16 px-4 sm:px-6",
          children: [
            (0, r.jsx)("h2", {
              className: (0, V.A)(
                "font-extrabold text-2xl sm:text-3xl md:text-4xl leading-snug sm:leading-relaxed mb-4 max-w-2xl mx-auto text-center break-words",
                t,
              ),
              children: o
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      s && (0, r.jsxs)("span", { children: [s, " "] }),
                      l &&
                        (0, r.jsx)("span", {
                          className:
                            "bg-color-accent px-2 sm:px-4 py-1 rounded-lg inline-block",
                          children: l,
                        }),
                      n && (0, r.jsxs)("span", { children: [" ", n] }),
                    ],
                  })
                : "",
            }),
            i &&
              (0, r.jsx)("div", {
                className: "max-w-4xl mx-auto w-5/6",
                children: (0, r.jsx)("p", {
                  className: (0, V.A)(
                    "text-base sm:text-lg text-center text-color-text",
                    a && "text-white/80",
                  ),
                  children: i,
                }),
              }),
          ],
        });
      };
      var H = a(698),
        U = a(1838),
        J = a(913);
      function q() {
        let e = (0, H._)([
          "translateX(",
          "px) translateY(",
          "px) translateX(-50%) translateY(-50%)",
        ]);
        return (
          (q = function () {
            return e;
          }),
          e
        );
      }
      function K(e) {
        let {
          borderRadius: t = "1.75rem",
          children: a,
          as: s = "button",
          containerClassName: l,
          borderClassName: n,
          duration: i,
          className: o,
          ...c
        } = e;
        return (0, r.jsxs)(s, {
          className: (0, x.cn)(
            "relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl",
            l,
          ),
          style: { borderRadius: t },
          ...c,
          children: [
            (0, r.jsx)("div", {
              className: "absolute inset-0",
              style: { borderRadius: "calc(".concat(t, " * 0.96)") },
              children: (0, r.jsx)(X, {
                duration: i,
                rx: "30%",
                ry: "30%",
                children: (0, r.jsx)("div", {
                  className: (0, x.cn)(
                    "h-20 w-20 bg-[radial-gradient(hsl(var(--color-accent))_40%,transparent_60%)] opacity-[0.8]",
                    n,
                  ),
                }),
              }),
            }),
            (0, r.jsx)("div", {
              className: (0, x.cn)(
                "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
                o,
              ),
              style: { borderRadius: "calc(".concat(t, " * 0.96)") },
              children: a,
            }),
          ],
        });
      }
      let X = (e) => {
          let { children: t, duration: a = 3e3, rx: n, ry: i, ...o } = e,
            c = (0, l.useRef)(null),
            d = (0, L.d)(0);
          (0, U.N)((e) => {
            var t;
            let r =
              null === (t = c.current) || void 0 === t
                ? void 0
                : t.getTotalLength();
            r && d.set(((r / a) * e) % r);
          });
          let m = (0, M.G)(d, (e) => {
              var t;
              return null === (t = c.current) || void 0 === t
                ? void 0
                : t.getPointAtLength(e).x;
            }),
            x = (0, M.G)(d, (e) => {
              var t;
              return null === (t = c.current) || void 0 === t
                ? void 0
                : t.getPointAtLength(e).y;
            }),
            u = (0, J.E)(q(), m, x);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                preserveAspectRatio: "none",
                className: "absolute h-full w-full",
                width: "100%",
                height: "100%",
                ...o,
                children: (0, r.jsx)("rect", {
                  fill: "none",
                  width: "100%",
                  height: "100%",
                  rx: n,
                  ry: i,
                  ref: c,
                }),
              }),
              (0, r.jsx)(s.P.div, {
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: "inline-block",
                  transform: u,
                },
                children: t,
              }),
            ],
          });
        },
        $ = (e) => {
          let {
              variant: t,
              name: a,
              description: s,
              title: l,
              buttonLabel: n,
              buttonLink: i,
              image: o,
            } = e,
            c = new Date().getFullYear();
          return (0, r.jsx)("section", {
            className:
              "w-5/6 2xl:w-2/3 mx-auto flex flex-col lg:flex-row items-center justify-between bg-color-primary rounded-3xl px-6 lg:px-12",
            children:
              "right-image" === t
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "w-full lg:w-1/2 text-center lg:text-left space-y-4",
                        children: [
                          (0, r.jsxs)("h2", {
                            className:
                              "text-3xl lg:text-4xl font-bold text-gray-900 lg:pt-0 pt-8",
                            children: [a, " Yaklaşıyor!"],
                          }),
                          (0, r.jsx)("p", {
                            className: "text-gray-700 text-base lg:text-lg",
                            children: s,
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "flex justify-center lg:justify-start space-x-4 pt-2",
                            children: [
                              (0, r.jsx)("span", {
                                className: "text-lg font-bold text-[#4d002f]",
                                children: c,
                              }),
                              (0, r.jsx)("span", {
                                className:
                                  "text-lg font-semibold text-gray-400",
                                children: c - 1,
                              }),
                              (0, r.jsx)("span", {
                                className:
                                  "text-lg font-semibold text-gray-300",
                                children: c - 2,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "w-full lg:w-1/2 mt-8 lg:mt-0 pt-6 lg:pt-12",
                        children: (0, r.jsx)("img", {
                          src: o,
                          alt: "Image",
                          className:
                            "w-2/3 md:w-1/2 h-auto bottom-0 rounded-md mx-auto",
                        }),
                      }),
                    ],
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        className:
                          "w-full lg:w-1/2 mt-0 order-first flex items-start justify-center pb-6 lg:pb-12",
                        children: (0, r.jsx)("img", {
                          src: o,
                          alt: "Image",
                          className: "w-2/3 md:w-1/2 mx-auto h-auto rounded-md",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "w-full lg:w-1/2 text-center lg:text-left space-y-4 p-6 lg:p-12",
                        children: [
                          (0, r.jsx)("h2", {
                            className:
                              "text-3xl lg:text-4xl font-bold text-gray-900",
                            children: l,
                          }),
                          (0, r.jsx)("p", {
                            className: "text-gray-700 text-base lg:text-lg",
                            children: s,
                          }),
                          n &&
                            i &&
                            (0, r.jsxs)(m.$, {
                              variant: "outline",
                              className:
                                "relative h-11 px-6 text-color-text group transition-all duration-300 ease-in-out",
                              children: [
                                (0, r.jsxs)("a", {
                                  href: i,
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
                                        className:
                                          "relative z-10 font-medium text-sm",
                                        children: n,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("span", {
                                  className: "invisible font-medium text-sm",
                                  children: n,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
          });
        };
      var W = a(1579),
        Z = a(1176);
      function Q() {
        return (0, r.jsx)("section", {
          className: "w-5/6 2xl:w-2/3 mx-auto py-12",
          children: (0, r.jsxs)("div", {
            className:
              "border-t border-b border-color-accent py-12 flex flex-col gap-10 md:flex-row md:justify-between md:items-center text-color-text",
            children: [
              (0, r.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "p-4 rounded-xl border border-color-accent shadow-xl bg-white",
                    children: (0, r.jsx)(W.t, {
                      size: 24,
                      weight: "fill",
                      className: "text-color-text",
                    }),
                  }),
                  (0, r.jsx)("h3", {
                    className: "text-lg font-bold",
                    children: "Alanında Uzman Konuşmacılar",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "p-4 rounded-xl border border-color-accent shadow-xl bg-white",
                    children: (0, r.jsx)(Z.k, {
                      size: 24,
                      weight: "fill",
                      className: "text-color-text",
                    }),
                  }),
                  (0, r.jsx)("h3", {
                    className: "text-lg font-bold",
                    children: "Etkileşim Odaklı Network Alanları",
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "flex items-center gap-4",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "p-4 rounded-xl border border-color-accent shadow-xl bg-white",
                    children: (0, r.jsx)(y.default, {
                      src: "/icons/northern-star.svg",
                      alt: "Northern Star Icon",
                      width: 32,
                      height: 32,
                      className: "text-color-text",
                    }),
                  }),
                  (0, r.jsx)("h3", {
                    className: "text-lg font-bold",
                    children:
                      "Sekt\xf6r\xfcn \xd6nde Gelen Şirketleriyle Birebir",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function ee() {
        let e = [
          {
            title: "Network'\xfcn\xfc genişlet",
            text: "Network alanımıza katıl ve network\xfcn\xfc genişletmek i\xe7in ilk adımı at",
          },
          {
            title: "İş Ve Staj İmkanları Yakala",
            text: "Etkinlik alanımızı gez ve potansiyel iş ve staj imkanlarından haberdar ol",
          },
          {
            title: "Sekt\xf6r\xfc Tanı",
            text: "Katılım g\xf6steren şirketlerle tanış ve geleceğin ihtiya\xe7larını ilk ağızdan dinle",
          },
          {
            title: "Harika Teknik Oturumlara Katıl",
            text: "Teknik oturumlarımıza katı ve teknik ekiplerin yenilik\xe7i yaklaşımlarını, nasıl d\xfcş\xfcnd\xfcklerini dinlel",
          },
        ];
        return (0, r.jsx)("section", {
          className: "w-5/6 2xl:w-2/3 mx-auto py-12",
          children: (0, r.jsxs)("div", {
            className: "border-t border-b border-color-accent py-12",
            children: [
              (0, r.jsxs)("div", {
                className: "hidden lg:flex justify-between items-center",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "flex flex-col gap-12 text-color-text font-medium w-1/3 text-left",
                    children: e
                      .slice(0, 2)
                      .map((e, t) =>
                        (0, r.jsxs)(
                          "div",
                          {
                            children: [
                              (0, r.jsx)("h3", {
                                className: "text-xl font-bold",
                                children: e.title,
                              }),
                              (0, r.jsx)("p", { children: e.text }),
                            ],
                          },
                          t,
                        ),
                      ),
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "p-6 rounded-xl border border-color-accent shadow-xl bg-white relative",
                    children: (0, r.jsx)("div", {
                      className:
                        "w-10 h-10 rounded-md flex items-center justify-center",
                      children: (0, r.jsx)("img", {
                        src: (0, f.b8)("/images/logo/logo-small.webp"),
                        alt: "Image",
                        className:
                          "w-[50px] h-auto bottom-0 rounded-md mx-auto",
                      }),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "flex flex-col gap-12 text-color-text font-medium w-1/3 text-right",
                    children: e
                      .slice(2)
                      .map((e, t) =>
                        (0, r.jsxs)(
                          "div",
                          {
                            children: [
                              (0, r.jsx)("h3", {
                                className: "text-xl font-bold",
                                children: e.title,
                              }),
                              (0, r.jsx)("p", { children: e.text }),
                            ],
                          },
                          t,
                        ),
                      ),
                  }),
                ],
              }),
              (0, r.jsxs)("div", {
                className: "lg:hidden flex flex-col items-center gap-8",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "p-6 rounded-xl border border-color-accent shadow-xl bg-white mb-6",
                    children: (0, r.jsx)("div", {
                      className:
                        "w-10 h-10 rounded-md flex items-center justify-center",
                      children: (0, r.jsx)("img", {
                        src: (0, f.b8)("/images/logo/logo-small.webp"),
                        alt: "Image",
                        className:
                          "w-[50px] h-auto bottom-0 rounded-md mx-auto",
                      }),
                    }),
                  }),
                  e.map((e, t) =>
                    (0, r.jsxs)(
                      "div",
                      {
                        className:
                          "w-full text-center text-color-text font-medium",
                        children: [
                          (0, r.jsx)("h3", {
                            className: "text-xl font-bold",
                            children: e.title,
                          }),
                          (0, r.jsx)("p", { children: e.text }),
                        ],
                      },
                      t,
                    ),
                  ),
                ],
              }),
            ],
          }),
        });
      }
      function et(e) {
        let { event: t, previousEvent: a, hero: n } = e,
          [o, c] = (0, l.useState)("100vh"),
          d = (0, h.Y)(t.name);
        (0, l.useEffect)(() => {
          let e = () => {
            window.innerHeight < 700 ? c("600px") : c("100vh");
          };
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []);
        let m = {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
        };
        return (0, r.jsxs)("div", {
          className: "bg-color-background",
          children: [
            (0, r.jsx)(i(), {
              children: (0, r.jsx)("link", {
                rel: "preload",
                href: "/fonts/TanNimbus.woff2",
                as: "font",
                type: "font/woff2",
                crossOrigin: "anonymous",
              }),
            }),
            (0, r.jsxs)("div", {
              className:
                "flex flex-col items-center justify-between bg-color-background w-5/6 mx-auto py-24 min-h-screen",
              children: [
                (0, r.jsx)("div", {
                  className: "w-full",
                  children: (0, r.jsxs)(s.P.div, {
                    className:
                      "select-none text-color-text text-4xl sm:text-6xl font-extrabold px-2 pt-24 md:pt-32 max-w-lg sm:max-w-2xl leading-snug sm:leading-[64px] text-center lg:text-left",
                    initial: { opacity: 0, x: -50 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.4 },
                    children: [
                      t.name,
                      (0, r.jsxs)("div", {
                        className: "text-xl font-normal pt-8",
                        children: [
                          t.heroDescription,
                          (0, r.jsx)("br", {}),
                          (0, r.jsx)("br", {}),
                          (0, r.jsx)("div", {
                            className:
                              "flex justify-center items-center lg:justify-start lg:items-start text-color-text w-full gap-x-6",
                            children: (0, r.jsx)("span", {
                              children: t.location.name,
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(s.P.div, {
                        className: "mt-10",
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                        transition: { duration: 0.5, delay: 0.2 },
                        children: (0, r.jsx)("a", {
                          href: t.registerLink,
                          target: "_blank",
                          children: (0, r.jsx)(K, {
                            borderRadius: "0.75rem",
                            className: "bg-transparent text-color-text",
                            children:
                              new Date(t.date) < new Date()
                                ? "Etkinliği G\xf6r\xfcnt\xfcle"
                                : "Yerinizi Ayırtın",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, r.jsxs)(s.P.div, {
                  className:
                    "select-none w-full flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 mt-8",
                  variants: {
                    animate: { transition: { staggerChildren: 0.15 } },
                  },
                  initial: "initial",
                  animate: "animate",
                  children: [
                    (0, r.jsx)(s.P.div, {
                      className:
                        "select-none text-color-text text-xl sm:text-4xl py-4 md:py-1 rounded-lg text-center lg:text-left w-full font-extrabold",
                      variants: m,
                      children: (0, r.jsx)("div", {
                        className:
                          "flex justify-center items-center lg:justify-start lg:items-start text-color-text w-full gap-x-6",
                        children: t.initialMetrics.map((e, a) =>
                          (0, r.jsxs)(
                            "div",
                            {
                              className:
                                "flex flex-col items-left justify-left text-center md:text-left ".concat(
                                  a < t.initialMetrics.length - 1
                                    ? "pr-6 border-r-2 border-color-accent"
                                    : "",
                                ),
                              children: [
                                (0, r.jsxs)("span", {
                                  className: "text-2xl sm:text-4xl font-bold",
                                  children: [e.value, "+"],
                                }),
                                (0, r.jsx)("span", {
                                  className:
                                    "text-sm sm:text-base font-medium mt-1",
                                  children: e.title,
                                }),
                              ],
                            },
                            "metric-".concat(a),
                          ),
                        ),
                      }),
                    }),
                    (0, r.jsx)(s.P.div, {
                      className:
                        "flex flex-row justify-center items-center lg:justify-end mb-10 w-full",
                      variants: m,
                      children: (0, r.jsx)(F, {
                        items: t.organizers.map((e) => ({
                          ...e,
                          image: (0, f.AL)(d, e.image),
                        })),
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("p", {
              className:
                "text-center w-2/3 mx-auto md:w-full bg-color-background text-lg md:text-2xl font-semibold",
              children:
                "Sekt\xf6r\xfcn \xf6nde gelen şirketleri bu etkinlikte yerlerini aldı",
            }),
            (0, r.jsx)(P, { sponsors: t.sponsors, eventSlug: d }),
            (0, r.jsxs)("div", {
              className: "bg-color-background pt-16",
              children: [
                (0, r.jsx)($, {
                  variant: "right-image",
                  name: t.name,
                  description: t.cardDescription,
                  image: "".concat(f.vw, "/").concat(d, "/mockup.webp"),
                }),
                (0, r.jsx)(Q, {}),
                (0, r.jsxs)(s.P.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.6 },
                  children: [
                    (0, r.jsx)("span", { id: "etkinlik-akisi" }),
                    (0, r.jsx)(A, {
                      event: t,
                      color: t.colorPalette.accent,
                      eventSlug: d,
                    }),
                  ],
                }),
                (0, r.jsx)("span", { id: "konusmacilar" }),
                (0, r.jsxs)(s.P.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.6 },
                  children: [
                    (0, r.jsx)(G, {
                      beforeHighlight: "Etkinlik",
                      highlightText: "Konuşmacılarımızla",
                      afterHighlight: "Tanışın!",
                      children:
                        "İşte konuklarımız hakkında biraz daha bilgi. Biz onları tanıdığımız ve bu etkinlikte ağırladığımız i\xe7in \xe7ok mutluyuz, siz de mutlaka bir g\xf6z atın!",
                    }),
                    (0, r.jsx)(R, { speakers: t.speakers, eventSlug: d }),
                  ],
                }),
                t.tickets &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("span", { id: "biletler" }),
                      (0, r.jsx)(G, {
                        beforeHighlight: "Bize",
                        highlightText: "Destek Olmak",
                        afterHighlight: "İster misiniz?",
                        children:
                          "Her zaman hayalimizdeki ilham verici etkinlikler i\xe7in sponsor bulamıyoruz, ama şimdiye dek etkinliklerimize katılmış ve memnun kalmış 500'den fazla destek\xe7imiz sayesinde hayalimize biraz daha yakınız.",
                      }),
                      (0, r.jsx)(B, { tickets: t.tickets }),
                    ],
                  }),
                (0, r.jsx)(ee, {}),
                (0, r.jsx)($, {
                  variant: "left-image",
                  title: "Sizi aramızda g\xf6rmek i\xe7in can atıyoruz!",
                  description:
                    "Eğer hala yerini ayırtmadıysan bu harika deneyimin bir par\xe7ası olmak 1 tık uzağında. Seni etkinlik sayfamıza alalım!",
                  buttonLabel: "Aramıza Katıl",
                  buttonLink: t.registerLink,
                  image: "".concat(f.vw, "/shared/mockups/reserved.webp"),
                }),
              ],
            }),
          ],
        });
      }
    },
    3312: (e, t, a) => {
      a.d(t, { $: () => c });
      var r = a(5155),
        s = a(2115),
        l = a(2317),
        n = a(1027),
        i = a(1567);
      let o = (0, n.F)(
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
        c = s.forwardRef((e, t) => {
          let { className: a, variant: s, size: n, asChild: c = !1, ...d } = e,
            m = c ? l.DX : "button";
          return (0, r.jsx)(m, {
            className: (0, i.cn)(o({ variant: s, size: n, className: a })),
            ref: t,
            ...d,
          });
        });
      c.displayName = "Button";
    },
    54: (e, t, a) => {
      a.d(t, { D: () => o, j: () => c });
      var r = a(5155),
        s = a(2115),
        l = a(6046);
      let n = (0, s.createContext)({
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
        o = (e) => {
          var t;
          let { children: a, events: o = [] } = e,
            [c, d] = (0, s.useState)(
              null !== (t = o[0]) && void 0 !== t ? t : null,
            ),
            m = (0, l.usePathname)();
          return (
            s.useEffect(() => {
              o.length > 0 && !c && d(o[0]);
            }, [o, c]),
            s.useEffect(() => {
              let e =
                "/404" === m || "/not-found" === m
                  ? i
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
            (0, r.jsx)(n.Provider, {
              value: { currentEvent: c, setCurrentEvent: d },
              children: a,
            })
          );
        },
        c = () => (0, s.useContext)(n);
    },
    5564: (e, t, a) => {
      a.d(t, { dj: () => x });
      var r = a(2115);
      let s = 0,
        l = new Map(),
        n = (e) => {
          if (l.has(e)) return;
          let t = setTimeout(() => {
            (l.delete(e), d({ type: "REMOVE_TOAST", toastId: e }));
          }, 1e6);
          l.set(e, t);
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
              let { toastId: a } = t;
              return (
                a
                  ? n(a)
                  : e.toasts.forEach((e) => {
                      n(e.id);
                    }),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === a || void 0 === a ? { ...e, open: !1 } : e,
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
        o = [],
        c = { toasts: [] };
      function d(e) {
        ((c = i(c, e)),
          o.forEach((e) => {
            e(c);
          }));
      }
      function m(e) {
        let { ...t } = e,
          a = (s = (s + 1) % Number.MAX_SAFE_INTEGER).toString(),
          r = () => d({ type: "DISMISS_TOAST", toastId: a });
        return (
          d({
            type: "ADD_TOAST",
            toast: {
              ...t,
              id: a,
              open: !0,
              onOpenChange: (e) => {
                e || r();
              },
            },
          }),
          {
            id: a,
            dismiss: r,
            update: (e) => d({ type: "UPDATE_TOAST", toast: { ...e, id: a } }),
          }
        );
      }
      function x() {
        let [e, t] = r.useState(c);
        return (
          r.useEffect(
            () => (
              o.push(t),
              () => {
                let e = o.indexOf(t);
                e > -1 && o.splice(e, 1);
              }
            ),
            [e],
          ),
          {
            ...e,
            toast: m,
            dismiss: (e) => d({ type: "DISMISS_TOAST", toastId: e }),
          }
        );
      }
    },
    7847: (e, t, a) => {
      a.d(t, { AL: () => n, J_: () => l, b8: () => s, vw: () => r });
      let r = "https://academy-assets.devmultigroup.com";
      function s(e) {
        let t = e.replace(/^\/images\//, "");
        return t.startsWith("logo/")
          ? "".concat(r, "/shared/").concat(t)
          : "".concat(r, "/").concat(t);
      }
      function l(e, t, a) {
        return "".concat(r, "/").concat(e, "/").concat(t, "/").concat(a);
      }
      function n(e, t) {
        let a = t.split("/").pop() || t;
        return ""
          .concat(r, "/")
          .concat(e, "/")
          .concat(a.startsWith("organizers") ? "" : "organizers/")
          .concat(a);
      }
    },
    9645: (e, t, a) => {
      a.d(t, { Y: () => r });
      function r(e) {
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
    },
    1567: (e, t, a) => {
      a.d(t, { cn: () => l });
      var r = a(3463),
        s = a(9795);
      function l() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, s.QP)((0, r.$)(t));
      }
    },
  },
]);
