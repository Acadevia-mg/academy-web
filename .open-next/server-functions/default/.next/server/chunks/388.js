"use strict";
((exports.id = 388),
  (exports.ids = [388]),
  (exports.modules = {
    8388: (e, t, a) => {
      a.d(t, { A: () => Q });
      var r = a(45512),
        s = a(66549),
        l = a(58009),
        i = a(6095),
        n = a.n(i),
        o = a(35625);
      function c(e, t) {
        try {
          let a = new Date(t);
          if (isNaN(a.getTime())) throw Error("Invalid base date");
          let [r, s] = e.split(":").map(Number),
            l = new Date(a);
          l.setHours(r, s, 0, 0);
          let i = l.getUTCFullYear(),
            n = (l.getUTCMonth() + 1).toString().padStart(2, "0"),
            o = l.getUTCDate().toString().padStart(2, "0"),
            c = l.getUTCHours().toString().padStart(2, "0"),
            d = l.getUTCMinutes().toString().padStart(2, "0");
          return `${i}${n}${o}T${c}${d}00Z`;
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
      var x = a(39400),
        m = a(44195);
      let h = l.forwardRef(({ className: e, ...t }, a) =>
        (0, r.jsx)("div", {
          ref: a,
          className: (0, m.cn)(
            "rounded-xl border bg-card text-card-foreground shadow",
            e,
          ),
          ...t,
        }),
      );
      ((h.displayName = "Card"),
        (l.forwardRef(({ className: e, ...t }, a) =>
          (0, r.jsx)("div", {
            ref: a,
            className: (0, m.cn)("flex flex-col space-y-1.5 p-6", e),
            ...t,
          }),
        ).displayName = "CardHeader"),
        (l.forwardRef(({ className: e, ...t }, a) =>
          (0, r.jsx)("div", {
            ref: a,
            className: (0, m.cn)(
              "font-semibold leading-none tracking-tight",
              e,
            ),
            ...t,
          }),
        ).displayName = "CardTitle"),
        (l.forwardRef(({ className: e, ...t }, a) =>
          (0, r.jsx)("div", {
            ref: a,
            className: (0, m.cn)("text-sm text-muted-foreground", e),
            ...t,
          }),
        ).displayName = "CardDescription"),
        (l.forwardRef(({ className: e, ...t }, a) =>
          (0, r.jsx)("div", {
            ref: a,
            className: (0, m.cn)("p-6 pt-0", e),
            ...t,
          }),
        ).displayName = "CardContent"),
        (l.forwardRef(({ className: e, ...t }, a) =>
          (0, r.jsx)("div", {
            ref: a,
            className: (0, m.cn)("flex items-center p-6 pt-0", e),
            ...t,
          }),
        ).displayName = "CardFooter"));
      var p = a(58842),
        u = (a(9943), a(83529)),
        f = a(34883),
        g = a(54716),
        b = a(64520),
        j = a(24999);
      let N = l.forwardRef(({ className: e, ...t }, a) =>
        (0, r.jsx)(b.bL, {
          ref: a,
          className: (0, m.cn)(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            e,
          ),
          ...t,
          children: (0, r.jsx)(b.C1, {
            className: (0, m.cn)(
              "flex items-center justify-center text-current",
            ),
            children: (0, r.jsx)(j.A, { className: "h-4 w-4" }),
          }),
        }),
      );
      N.displayName = b.bL.displayName;
      let w = (0, a(21643).F)(
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
      function v({ className: e, variant: t, ...a }) {
        return (0, r.jsx)("div", {
          className: (0, m.cn)(w({ variant: t }), e),
          ...a,
        });
      }
      var y = a(45103),
        k = a(63205),
        $ = a(79334),
        z = a(29248);
      let S = z.bL,
        C = l.forwardRef(({ className: e, ...t }, a) =>
          (0, r.jsx)(z.B8, {
            ref: a,
            className: (0, m.cn)(
              "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
              e,
            ),
            ...t,
          }),
        );
      C.displayName = z.B8.displayName;
      let T = l.forwardRef(({ className: e, ...t }, a) =>
        (0, r.jsx)(z.l9, {
          ref: a,
          className: (0, m.cn)(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
            e,
          ),
          ...t,
        }),
      );
      function E({ event: e, color: t, eventSlug: a }) {
        let { toast: i } = (0, g.dj)();
        (0, $.useRouter)();
        let [n, m] = (0, l.useState)([]),
          [b, j] = (0, l.useState)([]),
          [w, z] = (0, l.useState)(""),
          E = t.split(" "),
          D = E[0],
          R = E[1],
          A = E[2],
          L = `hsl(${D} ${R} ${A})`,
          I = `hsl(${D} ${R} 90%)`,
          P = `hsl(${D} ${R} ${0.7 * parseInt(A)}%)`;
        parseInt(A);
        let F = `hsl(${D} ${R} 95%)`,
          M = `hsl(${D} ${R} 25%)`,
          Y = new Date(e.date) < new Date(),
          B = async (t) => {
            if (0 === t.length) return;
            let a = new Date();
            if ((a.setHours(0, 0, 0, 0), new Date(e.date) < a)) {
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
              ...e,
              location: {
                ...e.location,
                name:
                  1 === t.length
                    ? `${e.location.name} - ${t[0].room || "Main"}`
                    : e.location.name,
              },
              sessions: t,
            };
            (await (function (e) {
              try {
                if (
                  !e?.name ||
                  !e?.location ||
                  !e?.sessions?.length ||
                  !e?.date
                )
                  throw Error("Missing required event data");
                let t = [
                    "BEGIN:VCALENDAR",
                    "VERSION:2.0",
                    "PRODID:-//MyEventApp//EN",
                    "CALSCALE:GREGORIAN",
                    "METHOD:PUBLISH",
                  ],
                  a = new Date(),
                  r = c(
                    `${a.getHours().toString().padStart(2, "0")}:${a.getMinutes().toString().padStart(2, "0")}`,
                    a.toISOString(),
                  );
                (e.sessions.forEach((a) => {
                  if ("Network" !== a.room) {
                    if (!a.topic || !a.startTime || !a.endTime) {
                      console.error(
                        `Skipping session "${a.topic}" - missing required fields for non-network room.`,
                      );
                      return;
                    }
                  } else if (!a.topic || !a.startTime || !a.endTime) {
                    console.warn(
                      `Skipping network session (speaker: ${a.speakerName}) due to missing fields.`,
                    );
                    return;
                  }
                  try {
                    let s = c(a.startTime, e.date),
                      l = c(a.endTime, e.date),
                      i = (a.topic || "network").replace(/\W+/g, "");
                    (t.push("BEGIN:VEVENT"),
                      t.push(`UID:${e.id}-${i}-${Date.now()}@myeventapp.com`),
                      t.push(`DTSTAMP:${r}`),
                      t.push(`DTSTART:${s}`),
                      t.push(`DTEND:${l}`),
                      t.push(`SUMMARY:${d(a.topic || "Session")}`),
                      t.push(
                        `DESCRIPTION:${d(`Konuşmacı: ${a.speakerName}

${e.cardDescription || ""}`)}`,
                      ),
                      t.push(`LOCATION:${d(a.room)}`),
                      t.push(
                        `GEO:${e.location.latitude};${e.location.longitude}`,
                      ),
                      t.push("END:VEVENT"));
                  } catch (e) {
                    console.error(
                      `Error creating event for session: ${a.topic || "Session"}`,
                      e,
                    );
                  }
                }),
                  t.push("END:VCALENDAR"));
                let s = t.join("\r\n"),
                  l = new Blob([s], { type: "text/calendar;charset=utf-8" }),
                  i = `${e.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.ics`;
                (0, o.saveAs)(l, i);
              } catch (e) {
                throw (
                  console.error("Failed to generate calendar file:", e),
                  Error("Failed to generate calendar file")
                );
              }
            })(r),
              i({
                title: "Takvim dosyası indirildi",
                description: `${t.length} etkinlik takviminize eklendi.`,
                className: "bg-green-500 text-white",
                duration: 3e3,
              }));
          },
          _ = (e) => !1,
          O = (e) => {
            Y ||
              (n.some(
                (t) =>
                  t.speakerName === e.speakerName &&
                  t.topic === e.topic &&
                  (t.room === e.room || (!t.room && !e.room)),
              )
                ? m(
                    n.filter(
                      (t) =>
                        !(
                          t.speakerName === e.speakerName &&
                          t.topic === e.topic &&
                          (t.room === e.room || (!t.room && !e.room))
                        ),
                    ),
                  )
                : (_(e) &&
                    i({
                      title: "Zaman \xc7akışması",
                      description:
                        "Bu oturum, se\xe7tiğiniz diğer oturumlarla \xe7akışıyor.",
                      variant: "destructive",
                      duration: 3e3,
                    }),
                  m([...n, e])));
          },
          H = w
            ? e.sessions.filter((e) => (e.room || "Main") === w)
            : e.sessions,
          V =
            "Network" === w ||
            H.every(
              (e) =>
                "Network" === e.room ||
                e.topic?.toLowerCase().includes("network") ||
                e.speakerName.toLowerCase().includes("network"),
            ),
          G = {
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
            b.length > 1 &&
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("h2", {
                    className:
                      "font-extrabold text-3xl sm:text-4xl md:text-5xl mb-2 text-center text-color-text",
                    children: "Seni bekleyen",
                  }),
                  (0, r.jsx)(S, {
                    value: w,
                    onValueChange: (e) => {
                      z(e);
                    },
                    className: "mb-2 mt-4 flex flex-col items-center",
                    children: (0, r.jsx)(C, {
                      className:
                        "border border-blue-200 rounded-lg p-1 gap-x-2 overflow-hidden bg-color-accent shadow-sm h-auto",
                      children: [
                        ...b.filter((e) => "Network" !== e).sort(),
                        ...b.filter((e) => "Network" === e),
                      ].map((e, t) =>
                        (0, r.jsx)(
                          T,
                          {
                            value: e,
                            className: `px-8 py-1 text-xl sm:text-2xl md:text-4xl font-bold rounded-lg transition-all duration-200 ${e === w ? "bg-color-white text-white" : "bg-color-white text-gray-800 hover:bg-gray-100/90"}`,
                            children: e,
                          },
                          `room-tab-${e}`,
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
                n.length > 0 &&
                (0, r.jsx)(s.P.div, {
                  initial: { opacity: 0, height: 0, marginBottom: 0 },
                  animate: { opacity: 1, height: "auto", marginBottom: 32 },
                  exit: { opacity: 0, height: 0, marginBottom: 0 },
                  transition: { duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] },
                  className: "overflow-hidden",
                  children: (0, r.jsxs)(s.P.div, {
                    style: { backgroundColor: F, borderColor: I },
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
                            style: { color: M },
                            children: ["Se\xe7ilen Oturumlar (", n.length, ")"],
                          }),
                          (0, r.jsxs)(x.$, {
                            onClick: () => B(n),
                            style: {
                              backgroundColor: L,
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
                          children: n.map((e) =>
                            (0, r.jsx)(
                              s.P.div,
                              {
                                variants: G,
                                initial: "hidden",
                                animate: "show",
                                exit: "exit",
                                layout: !0,
                                children: (0, r.jsxs)(v, {
                                  style: { backgroundColor: I, color: M },
                                  className:
                                    "cursor-pointer flex items-center gap-1 p-2 hover:opacity-90",
                                  onClick: () => O(e),
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
                                      style: { color: P },
                                      children: "\xd7",
                                    }),
                                  ],
                                }),
                              },
                              `selected-${e.speakerName}-${e.topic}-${e.room || ""}`,
                            ),
                          ),
                        }),
                      }),
                    ],
                  }),
                }),
            }),
            V
              ? (0, r.jsx)("div", {
                  className:
                    "flex flex-wrap justify-center gap-6 max-w-5/6 mx-auto bg-color-primary p-8 rounded-2xl",
                  children: H.map((t) => {
                    let s = e.speakers.find(
                      (e) => e.fullName === t.speakerName,
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
                                a,
                                "speakers",
                                `${(0, u.Y)(t.speakerName)}.webp`,
                              ),
                              alt: t.speakerName,
                              width: 128,
                              height: 128,
                              className:
                                "rounded-full object-cover mx-auto shadow-lg",
                              loading: "lazy",
                            }),
                          }),
                          (0, r.jsx)("p", {
                            className: "text-lg font-bold text-center mt-3",
                            children: t.speakerName,
                          }),
                          s &&
                            (0, r.jsx)("p", {
                              className: "text-sm text-gray-600 text-center",
                              children: s.title,
                            }),
                        ],
                      },
                      `network-speaker-${t.speakerName}-${t.topic || ""}`,
                    );
                  }),
                })
              : (0, r.jsx)("div", {
                  className: "grid grid-cols-1 lg:grid-cols-2 gap-6 w-full",
                  children: H.map((e) => {
                    let t = n.some(
                      (t) =>
                        t.speakerName === e.speakerName &&
                        t.topic === e.topic &&
                        (t.room === e.room || (!t.room && !e.room)),
                    );
                    return (0, r.jsxs)(
                      h,
                      {
                        className: `w-full mx-auto p-4 py-6 rounded-2xl select-none transition-all overflow-hidden ${t ? "border-2 border-color-accent outline outline-2 outline-color-accent outline-offset-0" : ""} bg-color-primary`,
                        children: [
                          (0, r.jsxs)("div", {
                            className: "flex flex-col sm:hidden gap-3",
                            onClick: () => {
                              Y || O(e);
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
                                        a,
                                        "speakers",
                                        `${(0, u.Y)(e.speakerName)}.webp`,
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
                                                (0, r.jsx)(N, {
                                                  "aria-label": "checkbox",
                                                  checked: t,
                                                  onCheckedChange: () => O(e),
                                                  className: `border rounded ${t ? "bg-color-accent text-white" : "bg-transparent text-transparent"} border-color-accent`,
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
                              Y || O(e);
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
                                        a,
                                        "speakers",
                                        `${(0, u.Y)(e.speakerName)}.webp`,
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
                                        (0, r.jsx)(N, {
                                          "aria-label": "checkbox",
                                          checked: t,
                                          onCheckedChange: () => O(e),
                                          className: `border rounded ${t ? "bg-color-accent text-white" : "bg-transparent text-transparent"} border-color-accent`,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      `session-card-${e.speakerName}-${e.topic}-${e.room || ""}`,
                    );
                  }),
                }),
          ],
        });
      }
      ((T.displayName = z.l9.displayName),
        (l.forwardRef(({ className: e, ...t }, a) =>
          (0, r.jsx)(z.UC, {
            ref: a,
            className: (0, m.cn)(
              "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
              e,
            ),
            ...t,
          }),
        ).displayName = z.UC.displayName));
      var D = a(73197),
        R = a(23993),
        A = a(95125);
      let L = ({ speakers: e, eventSlug: t }) => {
          let [a, s] = (0, l.useState)({}),
            i = (e) => {
              s((t) => ({ ...t, [e]: !t[e] }));
            };
          return (0, r.jsx)("section", {
            className: "w-5/6 2xl:w-2/3 mx-auto md:px-0 px-4",
            children: (0, r.jsx)("div", {
              className: "flex flex-wrap justify-center gap-4",
              children: e.map((e) =>
                (0, r.jsx)(
                  "div",
                  {
                    className: `h-[250px] w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-13px)] cursor-pointer group [perspective:1000px] ${a[e.fullName] ? "flip-active" : ""}`,
                    onClick: () => i(e.fullName),
                    children: (0, r.jsxs)("div", {
                      className: `relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${a[e.fullName] ? "[transform:rotateY(180deg)]" : ""} group-hover:[transform:rotateY(180deg)]`,
                      children: [
                        (0, r.jsx)(h, {
                          className:
                            "absolute w-full h-full overflow-hidden [backface-visibility:hidden]",
                          children: (0, r.jsx)("div", {
                            className: "relative w-full h-full",
                            children: (0, r.jsx)(y.default, {
                              src: (0, f.J_)(
                                t,
                                "speakers",
                                `${(0, u.Y)(e.fullName)}.webp`,
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
                        (0, r.jsxs)(h, {
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
                                      t,
                                      "sponsors",
                                      `${(0, u.Y)(e.company)}.webp`,
                                    ),
                                    alt: `${e.company} logo`,
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
                                    children: (0, r.jsx)(R.C, {
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
                                    children: (0, r.jsx)(A.g, { size: 28 }),
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
        I = ({ sponsors: e, eventSlug: t, reverse: a = !1, speed: s = 1 }) => {
          let i = (0, l.useRef)(null),
            n = (0, l.useRef)(null),
            [o, c] = (0, l.useState)(!1);
          ((0, l.useEffect)(() => {
            let t = i.current,
              a = n.current;
            if (!t || !a || 0 === e.length) return;
            let r = setTimeout(() => {
              c(!0);
            }, 100);
            return () => clearTimeout(r);
          }, [e]),
            (0, l.useEffect)(() => {
              if (!o) return;
              let t = i.current,
                r = n.current;
              if (!t || !r || 0 === e.length) return;
              let l = Array.from(r.querySelectorAll(".sponsor-item"));
              if (0 === l.length) return;
              let c = l.slice(0, e.length).reduce((e, t) => {
                  let a = window.getComputedStyle(t),
                    r = Number.parseFloat(a.marginLeft || "0"),
                    s = Number.parseFloat(a.marginRight || "0");
                  return e + t.getBoundingClientRect().width + r + s;
                }, 0),
                d = 0,
                x = () => {
                  ((d += a ? s : -s),
                    !a && d <= -c ? (d += c) : a && d >= c && (d -= c),
                    (r.style.transform = `translateX(${d}px)`),
                    requestAnimationFrame(x));
                },
                m = requestAnimationFrame(x);
              return () => {
                cancelAnimationFrame(m);
              };
            }, [e, a, s, o]));
          let d = [
            ...e,
            ...e,
            ...e,
            ...e,
            ...e,
            ...e,
            ...e,
            ...e,
            ...e,
            ...e,
            ...e,
            ...e,
            ...e,
            ...e,
            ...e,
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
                    ref: n,
                    className: "flex items-center absolute h-full",
                    style: { willChange: "transform" },
                    children: d.map((e, a) =>
                      (0, r.jsx)(
                        "div",
                        {
                          className: "mx-8 flex-shrink-0 sponsor-item",
                          children: (0, r.jsx)(y.default, {
                            src: (0, f.J_)(
                              t,
                              "sponsors",
                              `${e.sponsorSlug}.webp`,
                            ),
                            alt: `${e.sponsorSlug} logo`,
                            width: 160,
                            height: 56,
                            className:
                              "object-contain opacity-80 filter transition-all duration-200 ease-in-out grayscale brightness-[15%] contrast-[100%] hover:opacity-100 hover:grayscale-0 hover:brightness-110 hover:contrast-100",
                            draggable: !1,
                            loading: "lazy",
                          }),
                        },
                        `${e.sponsorSlug}-${a}`,
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
      var P = a(58986),
        F = a(43313),
        M = a(64159);
      let Y = ({ items: e }) => {
        let [t, a] = (0, l.useState)(null),
          i = { stiffness: 100, damping: 5 },
          n = (0, P.d)(0),
          o = (0, F.z)((0, M.G)(n, [-100, 100], [-45, 45]), i),
          c = (0, F.z)((0, M.G)(n, [-100, 100], [-50, 50]), i),
          d = (e) => {
            let t = e.target.offsetWidth / 2;
            n.set(e.nativeEvent.offsetX - t);
          };
        return (0, r.jsx)(r.Fragment, {
          children: e.map((e, l) =>
            (0, r.jsxs)(
              "div",
              {
                className: "group relative -mr-4",
                onMouseEnter: () => a(e.id),
                onMouseLeave: () => a(null),
                children: [
                  (0, r.jsx)(k.N, {
                    mode: "popLayout",
                    children:
                      t === e.id &&
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
                          translateX: c,
                          rotate: o,
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
                    onMouseMove: d,
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
      var B = a(64385);
      function _({ tickets: e }) {
        return (0, r.jsx)("div", {
          className:
            "w-5/6 2xl:w-2/3 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: e.map((e, t) =>
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
                            (0, r.jsx)(B.J, {
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
      var O = a(82281);
      let H = ({
        className: e,
        dark: t,
        beforeHighlight: a = "",
        highlightText: s = "",
        afterHighlight: l = "",
        children: i,
      }) => {
        let n = a || s || l;
        return (0, r.jsxs)("div", {
          className: "py-16 px-4 sm:px-6",
          children: [
            (0, r.jsx)("h2", {
              className: (0, O.A)(
                "font-extrabold text-2xl sm:text-3xl md:text-4xl leading-snug sm:leading-relaxed mb-4 max-w-2xl mx-auto text-center break-words",
                e,
              ),
              children: n
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      a && (0, r.jsxs)("span", { children: [a, " "] }),
                      s &&
                        (0, r.jsx)("span", {
                          className:
                            "bg-color-accent px-2 sm:px-4 py-1 rounded-lg inline-block",
                          children: s,
                        }),
                      l && (0, r.jsxs)("span", { children: [" ", l] }),
                    ],
                  })
                : "",
            }),
            i &&
              (0, r.jsx)("div", {
                className: "max-w-4xl mx-auto w-5/6",
                children: (0, r.jsx)("p", {
                  className: (0, O.A)(
                    "text-base sm:text-lg text-center text-color-text",
                    t && "text-white/80",
                  ),
                  children: i,
                }),
              }),
          ],
        });
      };
      var V = a(10990),
        G = a(8413);
      function U({
        borderRadius: e = "1.75rem",
        children: t,
        as: a = "button",
        containerClassName: s,
        borderClassName: l,
        duration: i,
        className: n,
        ...o
      }) {
        return (0, r.jsxs)(a, {
          className: (0, m.cn)(
            "relative h-16 w-40 overflow-hidden bg-transparent p-[1px] text-xl",
            s,
          ),
          style: { borderRadius: e },
          ...o,
          children: [
            (0, r.jsx)("div", {
              className: "absolute inset-0",
              style: { borderRadius: `calc(${e} * 0.96)` },
              children: (0, r.jsx)(q, {
                duration: i,
                rx: "30%",
                ry: "30%",
                children: (0, r.jsx)("div", {
                  className: (0, m.cn)(
                    "h-20 w-20 bg-[radial-gradient(hsl(var(--color-accent))_40%,transparent_60%)] opacity-[0.8]",
                    l,
                  ),
                }),
              }),
            }),
            (0, r.jsx)("div", {
              className: (0, m.cn)(
                "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
                n,
              ),
              style: { borderRadius: `calc(${e} * 0.96)` },
              children: t,
            }),
          ],
        });
      }
      let q = ({ children: e, duration: t = 3e3, rx: a, ry: i, ...n }) => {
          let o = (0, l.useRef)(null),
            c = (0, P.d)(0);
          (0, V.N)((e) => {
            let a = o.current?.getTotalLength();
            a && c.set(((a / t) * e) % a);
          });
          let d = (0, M.G)(c, (e) => o.current?.getPointAtLength(e).x),
            x = (0, M.G)(c, (e) => o.current?.getPointAtLength(e).y),
            m = (0,
            G.E)`translateX(${d}px) translateY(${x}px) translateX(-50%) translateY(-50%)`;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                preserveAspectRatio: "none",
                className: "absolute h-full w-full",
                width: "100%",
                height: "100%",
                ...n,
                children: (0, r.jsx)("rect", {
                  fill: "none",
                  width: "100%",
                  height: "100%",
                  rx: a,
                  ry: i,
                  ref: o,
                }),
              }),
              (0, r.jsx)(s.P.div, {
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  display: "inline-block",
                  transform: m,
                },
                children: e,
              }),
            ],
          });
        },
        J = ({
          variant: e,
          name: t,
          description: a,
          title: s,
          buttonLabel: l,
          buttonLink: i,
          image: n,
        }) => {
          let o = new Date().getFullYear();
          return (0, r.jsx)("section", {
            className:
              "w-5/6 2xl:w-2/3 mx-auto flex flex-col lg:flex-row items-center justify-between bg-color-primary rounded-3xl px-6 lg:px-12",
            children:
              "right-image" === e
                ? (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsxs)("div", {
                        className:
                          "w-full lg:w-1/2 text-center lg:text-left space-y-4",
                        children: [
                          (0, r.jsxs)("h2", {
                            className:
                              "text-3xl lg:text-4xl font-bold text-gray-900 lg:pt-0 pt-8",
                            children: [t, " Yaklaşıyor!"],
                          }),
                          (0, r.jsx)("p", {
                            className: "text-gray-700 text-base lg:text-lg",
                            children: a,
                          }),
                          (0, r.jsxs)("div", {
                            className:
                              "flex justify-center lg:justify-start space-x-4 pt-2",
                            children: [
                              (0, r.jsx)("span", {
                                className: "text-lg font-bold text-[#4d002f]",
                                children: o,
                              }),
                              (0, r.jsx)("span", {
                                className:
                                  "text-lg font-semibold text-gray-400",
                                children: o - 1,
                              }),
                              (0, r.jsx)("span", {
                                className:
                                  "text-lg font-semibold text-gray-300",
                                children: o - 2,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "w-full lg:w-1/2 mt-8 lg:mt-0 pt-6 lg:pt-12",
                        children: (0, r.jsx)("img", {
                          src: n,
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
                          src: n,
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
                            children: s,
                          }),
                          (0, r.jsx)("p", {
                            className: "text-gray-700 text-base lg:text-lg",
                            children: a,
                          }),
                          l &&
                            i &&
                            (0, r.jsxs)(x.$, {
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
                                        children: l,
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("span", {
                                  className: "invisible font-medium text-sm",
                                  children: l,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
          });
        };
      var K = a(23944),
        X = a(6288);
      function W() {
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
                    children: (0, r.jsx)(K.t, {
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
                    children: (0, r.jsx)(X.k, {
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
      function Z() {
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
      function Q({ event: e, previousEvent: t, hero: a }) {
        let [i, o] = (0, l.useState)("100vh"),
          c = (0, u.Y)(e.name),
          d = {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
          };
        return (0, r.jsxs)("div", {
          className: "bg-color-background",
          children: [
            (0, r.jsx)(n(), {
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
                      e.name,
                      (0, r.jsxs)("div", {
                        className: "text-xl font-normal pt-8",
                        children: [
                          e.heroDescription,
                          (0, r.jsx)("br", {}),
                          (0, r.jsx)("br", {}),
                          (0, r.jsx)("div", {
                            className:
                              "flex justify-center items-center lg:justify-start lg:items-start text-color-text w-full gap-x-6",
                            children: (0, r.jsx)("span", {
                              children: e.location.name,
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
                          href: e.registerLink,
                          target: "_blank",
                          children: (0, r.jsx)(U, {
                            borderRadius: "0.75rem",
                            className: "bg-transparent text-color-text",
                            children:
                              new Date(e.date) < new Date()
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
                      variants: d,
                      children: (0, r.jsx)("div", {
                        className:
                          "flex justify-center items-center lg:justify-start lg:items-start text-color-text w-full gap-x-6",
                        children: e.initialMetrics.map((t, a) =>
                          (0, r.jsxs)(
                            "div",
                            {
                              className: `flex flex-col items-left justify-left text-center md:text-left ${a < e.initialMetrics.length - 1 ? "pr-6 border-r-2 border-color-accent" : ""}`,
                              children: [
                                (0, r.jsxs)("span", {
                                  className: "text-2xl sm:text-4xl font-bold",
                                  children: [t.value, "+"],
                                }),
                                (0, r.jsx)("span", {
                                  className:
                                    "text-sm sm:text-base font-medium mt-1",
                                  children: t.title,
                                }),
                              ],
                            },
                            `metric-${a}`,
                          ),
                        ),
                      }),
                    }),
                    (0, r.jsx)(s.P.div, {
                      className:
                        "flex flex-row justify-center items-center lg:justify-end mb-10 w-full",
                      variants: d,
                      children: (0, r.jsx)(Y, {
                        items: e.organizers.map((e) => ({
                          ...e,
                          image: (0, f.AL)(c, e.image),
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
            (0, r.jsx)(I, { sponsors: e.sponsors, eventSlug: c }),
            (0, r.jsxs)("div", {
              className: "bg-color-background pt-16",
              children: [
                (0, r.jsx)(J, {
                  variant: "right-image",
                  name: e.name,
                  description: e.cardDescription,
                  image: `${f.vw}/${c}/mockup.webp`,
                }),
                (0, r.jsx)(W, {}),
                (0, r.jsxs)(s.P.div, {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: !0 },
                  transition: { duration: 0.6 },
                  children: [
                    (0, r.jsx)("span", { id: "etkinlik-akisi" }),
                    (0, r.jsx)(E, {
                      event: e,
                      color: e.colorPalette.accent,
                      eventSlug: c,
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
                    (0, r.jsx)(H, {
                      beforeHighlight: "Etkinlik",
                      highlightText: "Konuşmacılarımızla",
                      afterHighlight: "Tanışın!",
                      children:
                        "İşte konuklarımız hakkında biraz daha bilgi. Biz onları tanıdığımız ve bu etkinlikte ağırladığımız i\xe7in \xe7ok mutluyuz, siz de mutlaka bir g\xf6z atın!",
                    }),
                    (0, r.jsx)(L, { speakers: e.speakers, eventSlug: c }),
                  ],
                }),
                e.tickets &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("span", { id: "biletler" }),
                      (0, r.jsx)(H, {
                        beforeHighlight: "Bize",
                        highlightText: "Destek Olmak",
                        afterHighlight: "İster misiniz?",
                        children:
                          "Her zaman hayalimizdeki ilham verici etkinlikler i\xe7in sponsor bulamıyoruz, ama şimdiye dek etkinliklerimize katılmış ve memnun kalmış 500'den fazla destek\xe7imiz sayesinde hayalimize biraz daha yakınız.",
                      }),
                      (0, r.jsx)(_, { tickets: e.tickets }),
                    ],
                  }),
                (0, r.jsx)(Z, {}),
                (0, r.jsx)(J, {
                  variant: "left-image",
                  title: "Sizi aramızda g\xf6rmek i\xe7in can atıyoruz!",
                  description:
                    "Eğer hala yerini ayırtmadıysan bu harika deneyimin bir par\xe7ası olmak 1 tık uzağında. Seni etkinlik sayfamıza alalım!",
                  buttonLabel: "Aramıza Katıl",
                  buttonLink: e.registerLink,
                  image: `${f.vw}/shared/mockups/reserved.webp`,
                }),
              ],
            }),
          ],
        });
      }
    },
  }));
