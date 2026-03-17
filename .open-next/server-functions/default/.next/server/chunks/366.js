((exports.id = 366),
  (exports.ids = [366]),
  (exports.modules = {
    89209: (e, a, s) => {
      (Promise.resolve().then(s.bind(s, 5303)),
        Promise.resolve().then(s.bind(s, 18483)));
    },
    25657: (e, a, s) => {
      (Promise.resolve().then(s.bind(s, 54659)),
        Promise.resolve().then(s.bind(s, 75623)));
    },
    96487: () => {},
    78335: () => {},
    54659: (e, a, s) => {
      "use strict";
      s.d(a, { AdminSidebar: () => n });
      var t = s(45512),
        l = s(28531),
        r = s.n(l),
        i = s(79334);
      function n() {
        let e = (0, i.usePathname)(),
          a = (0, i.useRouter)(),
          s = async () => {
            (await fetch("/api/admin/auth", { method: "DELETE" }),
              a.push("/admin"));
          };
        return (0, t.jsxs)("aside", {
          className:
            "w-60 bg-white border-r border-gray-200 min-h-screen flex flex-col",
          children: [
            (0, t.jsx)("div", {
              className: "p-6 border-b border-gray-200",
              children: (0, t.jsx)("h1", {
                className: "text-lg font-bold text-gray-900",
                children: "DMG Admin",
              }),
            }),
            (0, t.jsx)("nav", {
              className: "flex-1 p-4 space-y-1",
              children: [
                {
                  href: "/admin/dashboard",
                  label: "Etkinlikler",
                  icon: "list",
                },
                {
                  href: "/admin/dashboard/announcement",
                  label: "Duyuru",
                  icon: "megaphone",
                },
              ].map((a) => {
                let s = e === a.href;
                return (0, t.jsx)(
                  r(),
                  {
                    href: a.href,
                    prefetch: !1,
                    className: `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${s ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"}`,
                    children: a.label,
                  },
                  a.href,
                );
              }),
            }),
            (0, t.jsx)("div", {
              className: "p-4 border-t border-gray-200",
              children: (0, t.jsx)("button", {
                onClick: s,
                className:
                  "w-full px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left",
                children: "Cikis",
              }),
            }),
          ],
        });
      }
    },
    75623: (e, a, s) => {
      "use strict";
      s.d(a, { AuthGuard: () => i });
      var t = s(45512),
        l = s(58009),
        r = s(79334);
      function i({ children: e }) {
        let [a, s] = (0, l.useState)(null);
        return ((0, r.useRouter)(), null === a)
          ? (0, t.jsx)("div", {
              className:
                "min-h-screen flex items-center justify-center bg-gray-50",
              children: (0, t.jsx)("div", {
                className:
                  "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900",
              }),
            })
          : a
            ? (0, t.jsx)(t.Fragment, { children: e })
            : null;
      }
    },
    50061: (e, a, s) => {
      "use strict";
      s.d(a, { B: () => c });
      var t = s(45512),
        l = s(58009),
        r = s(79334),
        i = s(56380);
      function n({
        open: e,
        onClose: a,
        onCropped: s,
        aspectRatio: r,
        outputWidth: n,
        outputHeight: d,
        uploadPath: c,
      }) {
        let [o, u] = (0, l.useState)(null),
          [m, x] = (0, l.useState)(),
          [h, p] = (0, l.useState)(),
          [g, v] = (0, l.useState)(!1),
          j = (0, l.useRef)(null),
          b = (0, l.useRef)(null),
          N = (0, l.useCallback)(
            (e) => {
              let { width: a, height: s } = e.currentTarget,
                t = Math.min(a, s / r, a);
              x({
                unit: "px",
                x: (a - t) / 2,
                y: (s - t * r) / 2,
                width: t,
                height: t / r,
              });
            },
            [r],
          ),
          y = async () => {
            if (j.current && h) {
              v(!0);
              try {
                let e = document.createElement("canvas");
                ((e.width = n), (e.height = d));
                let a = e.getContext("2d"),
                  t = j.current.naturalWidth / j.current.width,
                  l = j.current.naturalHeight / j.current.height;
                a.drawImage(
                  j.current,
                  h.x * t,
                  h.y * l,
                  h.width * t,
                  h.height * l,
                  0,
                  0,
                  n,
                  d,
                );
                let r = await new Promise((a) =>
                    e.toBlob((e) => a(e), "image/webp", 0.85),
                  ),
                  i = new FormData();
                (i.append("file", r, c.split("/").pop()), i.append("path", c));
                let o = await fetch("/api/admin/upload", {
                    method: "POST",
                    body: i,
                  }),
                  { url: u } = await o.json();
                (s(u), f());
              } catch (e) {
                console.error("Upload failed:", e);
              } finally {
                v(!1);
              }
            }
          },
          f = () => {
            (u(null), x(void 0), p(void 0), a());
          };
        return e
          ? (0, t.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
              children: (0, t.jsxs)("div", {
                className:
                  "bg-white rounded-xl shadow-xl max-w-lg w-full mx-4 p-6",
                children: [
                  (0, t.jsx)("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "Gorsel Kirp ve Yukle",
                  }),
                  o
                    ? (0, t.jsx)("div", {
                        className: "space-y-4",
                        children: (0, t.jsx)(i.Ay, {
                          crop: m,
                          onChange: (e) => x(e),
                          onComplete: (e) => p(e),
                          aspect: r,
                          className: "max-h-96",
                          children: (0, t.jsx)("img", {
                            ref: j,
                            src: o,
                            onLoad: N,
                            alt: "Crop preview",
                            className: "max-h-96",
                          }),
                        }),
                      })
                    : (0, t.jsx)("div", {
                        children: (0, t.jsx)("input", {
                          ref: b,
                          type: "file",
                          accept: "image/*",
                          onChange: (e) => {
                            let a = e.target.files?.[0];
                            if (!a) return;
                            let s = new FileReader();
                            ((s.onload = () => u(s.result)),
                              s.readAsDataURL(a));
                          },
                          className:
                            "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200",
                        }),
                      }),
                  (0, t.jsxs)("div", {
                    className: "flex justify-end gap-3 mt-4",
                    children: [
                      (0, t.jsx)("button", {
                        onClick: f,
                        className:
                          "px-4 py-2 text-sm text-gray-600 hover:text-gray-900",
                        children: "Iptal",
                      }),
                      o &&
                        (0, t.jsx)("button", {
                          onClick: y,
                          disabled: !h || g,
                          className:
                            "px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 disabled:opacity-50",
                          children: g ? "Yukleniyor..." : "Kirp ve Yukle",
                        }),
                    ],
                  }),
                ],
              }),
            })
          : null;
      }
      s(44140);
      var d = s(83529);
      function c({ initialData: e }) {
        let a = (0, r.useRouter)(),
          [s, i] = (0, l.useState)(!1),
          [c, o] = (0, l.useState)(e?.name ?? ""),
          [u, m] = (0, l.useState)(e?.heroDescription ?? ""),
          [x, h] = (0, l.useState)(e?.cardDescription ?? ""),
          [p, g] = (0, l.useState)(e?.navigable !== !1),
          [v, j] = (0, l.useState)(e?.registerLink ?? ""),
          [b, N] = (0, l.useState)(e?.videoUrl ?? ""),
          [y, f] = (0, l.useState)(e?.date ?? ""),
          [k, C] = (0, l.useState)(e?.location.name ?? ""),
          [S, w] = (0, l.useState)(e?.location.subtext ?? ""),
          [A, T] = (0, l.useState)(e?.location.latitude?.toString() ?? ""),
          [P, q] = (0, l.useState)(e?.location.longitude?.toString() ?? ""),
          [R, E] = (0, l.useState)(e?.colorPalette.primary ?? "0 0% 100%"),
          [G, K] = (0, l.useState)(e?.colorPalette.secondary ?? "0 0% 20%"),
          [B, D] = (0, l.useState)(e?.colorPalette.accent ?? "200 80% 50%"),
          [L, M] = (0, l.useState)(e?.colorPalette.background ?? "0 0% 98%"),
          [U, Y] = (0, l.useState)(e?.colorPalette.text ?? "0 0% 10%"),
          [I, O] = (0, l.useState)(
            e?.speakers.map((e) => ({
              fullName: e.fullName,
              title: e.title,
              company: e.company ?? "",
              instagram: e.instagram ?? "",
              linkedin: e.linkedin ?? "",
              twitter: e.twitter ?? "",
            })) ?? [],
          ),
          [F, $] = (0, l.useState)(
            e?.organizers.map((e) => ({
              name: e.name,
              designation: e.designation,
              image: e.image,
            })) ?? [],
          ),
          [H, z] = (0, l.useState)(
            e?.sessions.map((e) => ({
              room: e.room,
              speakerName: e.speakerName,
              topic: e.topic ?? "",
              startTime: e.startTime ?? "",
              endTime: e.endTime ?? "",
            })) ?? [],
          ),
          [W, X] = (0, l.useState)(
            e?.sponsors.map((e) => ({
              tier: e.tier,
              sponsorSlug: e.sponsorSlug,
            })) ?? [],
          ),
          [J, V] = (0, l.useState)(!!e?.tickets?.length),
          [Q, Z] = (0, l.useState)(
            e?.tickets?.map((e) => ({
              type: e.type,
              description: e.description,
              price: e.price,
              link: e.link,
              perks: e.perks,
            })) ?? [],
          ),
          [_, ee] = (0, l.useState)(
            e?.initialMetrics.map((e) => ({
              title: e.title,
              value: e.value,
            })) ?? [{ title: "", value: 0 }],
          ),
          [ea, es] = (0, l.useState)(!!e?.afterMetrics),
          [et, el] = (0, l.useState)(
            e?.afterMetrics ?? {
              applications: "",
              vipGuests: "",
              supporter: "",
              speakers: "",
              workingParticipant: "",
              jobSeeker: "",
              jobProvider: "",
              satisfaction: "",
            },
          ),
          [er, ei] = (0, l.useState)(e?.images ?? []),
          [en, ed] = (0, l.useState)(null),
          ec = (0, d.Y)(c),
          eo = async (s) => {
            (s.preventDefault(), i(!0));
            let t = {
              name: c,
              heroDescription: u,
              cardDescription: x,
              navigable: p,
              registerLink: v,
              videoUrl: b || void 0,
              date: y,
              location: {
                name: k,
                subtext: S,
                latitude: A ? parseFloat(A) : void 0,
                longitude: P ? parseFloat(P) : void 0,
              },
              colorPalette: {
                primary: R,
                secondary: G,
                accent: B,
                background: L,
                text: U,
              },
              speakers: I.map((e) => ({
                fullName: e.fullName,
                title: e.title,
                company: e.company || void 0,
                instagram: e.instagram || void 0,
                linkedin: e.linkedin || void 0,
                twitter: e.twitter || void 0,
              })),
              organizers: F,
              sessions: H.map((e) => ({
                room: e.room,
                speakerName: e.speakerName,
                topic: e.topic || void 0,
                startTime: e.startTime || void 0,
                endTime: e.endTime || void 0,
              })),
              sponsors: W,
              tickets: J ? Q : void 0,
              images: er,
              initialMetrics: _,
              afterMetrics: ea ? et : void 0,
            };
            try {
              let s = e ? `/api/admin/events/${e.id}` : "/api/admin/events",
                l = e ? "PUT" : "POST";
              (
                await fetch(s, {
                  method: l,
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(t),
                })
              ).ok && a.push("/admin/dashboard");
            } catch {
            } finally {
              i(!1);
            }
          },
          eu = (e, a, s) => {
            let t = [...I];
            ((t[e] = { ...t[e], [a]: s }), O(t));
          },
          em = (e, a, s) => {
            let t = [...F];
            ((t[e] = { ...t[e], [a]: s }), $(t));
          },
          ex = (e, a, s) => {
            let t = [...H];
            ((t[e] = { ...t[e], [a]: s }), z(t));
          },
          eh = (e, a, s) => {
            let t = [...W];
            ((t[e] = { ...t[e], [a]: s }), X(t));
          },
          ep = (e, a, s) => {
            let t = [...Q];
            ((t[e] = { ...t[e], [a]: s }), Z(t));
          },
          eg =
            "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent",
          ev = "block text-sm font-medium text-gray-700 mb-1",
          ej = "bg-white rounded-lg border border-gray-200 p-6 space-y-4";
        return (0, t.jsxs)("form", {
          onSubmit: eo,
          className: "space-y-6 max-w-4xl",
          children: [
            (0, t.jsxs)("div", {
              className: ej,
              children: [
                (0, t.jsx)("h2", {
                  className: "text-lg font-semibold",
                  children: "Temel Bilgiler",
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("label", {
                      className: ev,
                      children: "Etkinlik Adi",
                    }),
                    (0, t.jsx)("input", {
                      className: eg,
                      value: c,
                      onChange: (e) => o(e.target.value),
                      required: !0,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("label", {
                      className: ev,
                      children: "Hero Aciklamasi",
                    }),
                    (0, t.jsx)("textarea", {
                      className: eg,
                      value: u,
                      onChange: (e) => m(e.target.value),
                      rows: 3,
                      required: !0,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("label", {
                      className: ev,
                      children: "Kart Aciklamasi",
                    }),
                    (0, t.jsx)("textarea", {
                      className: eg,
                      value: x,
                      onChange: (e) => h(e.target.value),
                      rows: 3,
                      required: !0,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, t.jsx)("input", {
                      type: "checkbox",
                      checked: p,
                      onChange: (e) => g(e.target.checked),
                      className: "rounded",
                    }),
                    (0, t.jsx)("label", {
                      className: "text-sm text-gray-700",
                      children: "Navigable (gorunur etkinlik)",
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("label", {
                      className: ev,
                      children: "Kayit Linki",
                    }),
                    (0, t.jsx)("input", {
                      type: "url",
                      className: eg,
                      value: v,
                      onChange: (e) => j(e.target.value),
                      required: !0,
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("label", {
                      className: ev,
                      children: "Video URL",
                    }),
                    (0, t.jsx)("input", {
                      type: "url",
                      className: eg,
                      value: b,
                      onChange: (e) => N(e.target.value),
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  children: [
                    (0, t.jsx)("label", { className: ev, children: "Tarih" }),
                    (0, t.jsx)("input", {
                      type: "datetime-local",
                      className: eg,
                      value: y ? y.slice(0, 16) : "",
                      onChange: (e) =>
                        f(new Date(e.target.value).toISOString()),
                      required: !0,
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: ej,
              children: [
                (0, t.jsx)("h2", {
                  className: "text-lg font-semibold",
                  children: "Konum",
                }),
                (0, t.jsxs)("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("label", {
                          className: ev,
                          children: "Konum Adi",
                        }),
                        (0, t.jsx)("input", {
                          className: eg,
                          value: k,
                          onChange: (e) => C(e.target.value),
                          required: !0,
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("label", {
                          className: ev,
                          children: "Alt Metin",
                        }),
                        (0, t.jsx)("input", {
                          className: eg,
                          value: S,
                          onChange: (e) => w(e.target.value),
                          required: !0,
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("label", {
                          className: ev,
                          children: "Enlem",
                        }),
                        (0, t.jsx)("input", {
                          type: "number",
                          step: "any",
                          className: eg,
                          value: A,
                          onChange: (e) => T(e.target.value),
                        }),
                      ],
                    }),
                    (0, t.jsxs)("div", {
                      children: [
                        (0, t.jsx)("label", {
                          className: ev,
                          children: "Boylam",
                        }),
                        (0, t.jsx)("input", {
                          type: "number",
                          step: "any",
                          className: eg,
                          value: P,
                          onChange: (e) => q(e.target.value),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: ej,
              children: [
                (0, t.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, t.jsx)("h2", {
                      className: "text-lg font-semibold",
                      children: "Konusmacilar",
                    }),
                    (0, t.jsx)("button", {
                      type: "button",
                      onClick: () =>
                        O([
                          ...I,
                          {
                            fullName: "",
                            title: "",
                            company: "",
                            instagram: "",
                            linkedin: "",
                            twitter: "",
                          },
                        ]),
                      className:
                        "text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg",
                      children: "+ Ekle",
                    }),
                  ],
                }),
                I.map((e, a) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className:
                        "border border-gray-100 rounded-lg p-4 space-y-3",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex justify-between items-start",
                          children: [
                            (0, t.jsxs)("span", {
                              className: "text-sm font-medium text-gray-500",
                              children: ["#", a + 1],
                            }),
                            (0, t.jsx)("button", {
                              type: "button",
                              onClick: () => O(I.filter((e, s) => s !== a)),
                              className:
                                "text-red-500 text-sm hover:text-red-700",
                              children: "Kaldir",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: [
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: "Ad Soyad",
                                }),
                                (0, t.jsx)("input", {
                                  className: eg,
                                  value: e.fullName,
                                  onChange: (e) =>
                                    eu(a, "fullName", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: "Unvan",
                                }),
                                (0, t.jsx)("input", {
                                  className: eg,
                                  value: e.title,
                                  onChange: (e) =>
                                    eu(a, "title", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: "Sirket",
                                }),
                                (0, t.jsx)("input", {
                                  className: eg,
                                  value: e.company,
                                  onChange: (e) =>
                                    eu(a, "company", e.target.value),
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: "LinkedIn",
                                }),
                                (0, t.jsx)("input", {
                                  className: eg,
                                  value: e.linkedin,
                                  onChange: (e) =>
                                    eu(a, "linkedin", e.target.value),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.fullName &&
                          (0, t.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                              (0, t.jsxs)("span", {
                                className: "text-xs text-gray-400",
                                children: [
                                  "Gorsel: ",
                                  (0, d.Y)(e.fullName),
                                  ".webp",
                                ],
                              }),
                              (0, t.jsx)("button", {
                                type: "button",
                                onClick: () =>
                                  ed({
                                    aspectRatio: 1,
                                    outputWidth: 400,
                                    outputHeight: 400,
                                    uploadPath: `${ec}/speakers/${(0, d.Y)(e.fullName)}.webp`,
                                    onCropped: () => {},
                                  }),
                                className:
                                  "text-xs text-blue-600 hover:text-blue-800",
                                children: "Gorsel Yukle",
                              }),
                            ],
                          }),
                      ],
                    },
                    a,
                  ),
                ),
              ],
            }),
            (0, t.jsxs)("div", {
              className: ej,
              children: [
                (0, t.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, t.jsx)("h2", {
                      className: "text-lg font-semibold",
                      children: "Organizatorler",
                    }),
                    (0, t.jsx)("button", {
                      type: "button",
                      onClick: () =>
                        $([...F, { name: "", designation: "", image: "" }]),
                      className:
                        "text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg",
                      children: "+ Ekle",
                    }),
                  ],
                }),
                F.map((e, a) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className:
                        "border border-gray-100 rounded-lg p-4 space-y-3",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, t.jsxs)("span", {
                              className: "text-sm font-medium text-gray-500",
                              children: ["#", a + 1],
                            }),
                            (0, t.jsx)("button", {
                              type: "button",
                              onClick: () => $(F.filter((e, s) => s !== a)),
                              className:
                                "text-red-500 text-sm hover:text-red-700",
                              children: "Kaldir",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "grid grid-cols-3 gap-3",
                          children: [
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: "Ad",
                                }),
                                (0, t.jsx)("input", {
                                  className: eg,
                                  value: e.name,
                                  onChange: (e) =>
                                    em(a, "name", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: "Gorev",
                                }),
                                (0, t.jsx)("input", {
                                  className: eg,
                                  value: e.designation,
                                  onChange: (e) =>
                                    em(a, "designation", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: "Gorsel URL",
                                }),
                                (0, t.jsx)("input", {
                                  className: eg,
                                  value: e.image,
                                  onChange: (e) =>
                                    em(a, "image", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    a,
                  ),
                ),
              ],
            }),
            (0, t.jsxs)("div", {
              className: ej,
              children: [
                (0, t.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, t.jsx)("h2", {
                      className: "text-lg font-semibold",
                      children: "Oturumlar",
                    }),
                    (0, t.jsx)("button", {
                      type: "button",
                      onClick: () =>
                        z([
                          ...H,
                          {
                            room: "Ana Salon",
                            speakerName: "",
                            topic: "",
                            startTime: "",
                            endTime: "",
                          },
                        ]),
                      className:
                        "text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg",
                      children: "+ Ekle",
                    }),
                  ],
                }),
                H.map((e, a) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className:
                        "border border-gray-100 rounded-lg p-4 space-y-3",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, t.jsxs)("span", {
                              className: "text-sm font-medium text-gray-500",
                              children: ["#", a + 1],
                            }),
                            (0, t.jsx)("button", {
                              type: "button",
                              onClick: () => z(H.filter((e, s) => s !== a)),
                              className:
                                "text-red-500 text-sm hover:text-red-700",
                              children: "Kaldir",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: [
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: "Salon",
                                }),
                                (0, t.jsx)("input", {
                                  className: eg,
                                  value: e.room,
                                  onChange: (e) =>
                                    ex(a, "room", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: "Konusmaci",
                                }),
                                (0, t.jsx)("input", {
                                  className: eg,
                                  value: e.speakerName,
                                  onChange: (e) =>
                                    ex(a, "speakerName", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: "Konu",
                                }),
                                (0, t.jsx)("input", {
                                  className: eg,
                                  value: e.topic,
                                  onChange: (e) =>
                                    ex(a, "topic", e.target.value),
                                  disabled: "Network" === e.room,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "grid grid-cols-2 gap-2",
                              children: [
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("label", {
                                      className: ev,
                                      children: "Baslangic",
                                    }),
                                    (0, t.jsx)("input", {
                                      className: eg,
                                      value: e.startTime,
                                      onChange: (e) =>
                                        ex(a, "startTime", e.target.value),
                                      placeholder: "13.00",
                                      disabled: "Network" === e.room,
                                    }),
                                  ],
                                }),
                                (0, t.jsxs)("div", {
                                  children: [
                                    (0, t.jsx)("label", {
                                      className: ev,
                                      children: "Bitis",
                                    }),
                                    (0, t.jsx)("input", {
                                      className: eg,
                                      value: e.endTime,
                                      onChange: (e) =>
                                        ex(a, "endTime", e.target.value),
                                      placeholder: "14.00",
                                      disabled: "Network" === e.room,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    a,
                  ),
                ),
              ],
            }),
            (0, t.jsxs)("div", {
              className: ej,
              children: [
                (0, t.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, t.jsx)("h2", {
                      className: "text-lg font-semibold",
                      children: "Sponsorlar",
                    }),
                    (0, t.jsx)("button", {
                      type: "button",
                      onClick: () => X([...W, { tier: "", sponsorSlug: "" }]),
                      className:
                        "text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg",
                      children: "+ Ekle",
                    }),
                  ],
                }),
                W.map((e, a) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className:
                        "border border-gray-100 rounded-lg p-4 space-y-3",
                      children: [
                        (0, t.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, t.jsxs)("span", {
                              className: "text-sm font-medium text-gray-500",
                              children: ["#", a + 1],
                            }),
                            (0, t.jsx)("button", {
                              type: "button",
                              onClick: () => X(W.filter((e, s) => s !== a)),
                              className:
                                "text-red-500 text-sm hover:text-red-700",
                              children: "Kaldir",
                            }),
                          ],
                        }),
                        (0, t.jsxs)("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: [
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: "Slug",
                                }),
                                (0, t.jsx)("input", {
                                  className: eg,
                                  value: e.sponsorSlug,
                                  onChange: (e) =>
                                    eh(a, "sponsorSlug", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: "Tier",
                                }),
                                (0, t.jsxs)("select", {
                                  className: eg,
                                  value: e.tier,
                                  onChange: (e) =>
                                    eh(a, "tier", e.target.value),
                                  children: [
                                    (0, t.jsx)("option", {
                                      value: "",
                                      children: "Tier yok",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "platin",
                                      children: "Platin",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "altin",
                                      children: "Altin",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "gumus",
                                      children: "Gumus",
                                    }),
                                    (0, t.jsx)("option", {
                                      value: "bronz",
                                      children: "Bronz",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.sponsorSlug &&
                          (0, t.jsx)("button", {
                            type: "button",
                            onClick: () =>
                              ed({
                                aspectRatio: 2.5,
                                outputWidth: 500,
                                outputHeight: 200,
                                uploadPath: `${ec}/sponsors/${e.sponsorSlug}.webp`,
                                onCropped: () => {},
                              }),
                            className:
                              "text-xs text-blue-600 hover:text-blue-800",
                            children: "Logo Yukle",
                          }),
                      ],
                    },
                    a,
                  ),
                ),
              ],
            }),
            (0, t.jsxs)("div", {
              className: ej,
              children: [
                (0, t.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, t.jsx)("h2", {
                      className: "text-lg font-semibold",
                      children: "Biletler",
                    }),
                    (0, t.jsx)("input", {
                      type: "checkbox",
                      checked: J,
                      onChange: (e) => V(e.target.checked),
                      className: "rounded",
                    }),
                  ],
                }),
                J &&
                  (0, t.jsxs)(t.Fragment, {
                    children: [
                      (0, t.jsx)("button", {
                        type: "button",
                        onClick: () =>
                          Z([
                            ...Q,
                            {
                              type: "",
                              description: "",
                              price: 0,
                              link: "",
                              perks: [],
                            },
                          ]),
                        className:
                          "text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg",
                        children: "+ Bilet Ekle",
                      }),
                      Q.map((e, a) =>
                        (0, t.jsxs)(
                          "div",
                          {
                            className:
                              "border border-gray-100 rounded-lg p-4 space-y-3",
                            children: [
                              (0, t.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                  (0, t.jsxs)("span", {
                                    className:
                                      "text-sm font-medium text-gray-500",
                                    children: ["Bilet #", a + 1],
                                  }),
                                  (0, t.jsx)("button", {
                                    type: "button",
                                    onClick: () =>
                                      Z(Q.filter((e, s) => s !== a)),
                                    className:
                                      "text-red-500 text-sm hover:text-red-700",
                                    children: "Kaldir",
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                  (0, t.jsxs)("div", {
                                    children: [
                                      (0, t.jsx)("label", {
                                        className: ev,
                                        children: "Tip",
                                      }),
                                      (0, t.jsx)("input", {
                                        className: eg,
                                        value: e.type,
                                        onChange: (e) =>
                                          ep(a, "type", e.target.value),
                                        required: !0,
                                      }),
                                    ],
                                  }),
                                  (0, t.jsxs)("div", {
                                    children: [
                                      (0, t.jsx)("label", {
                                        className: ev,
                                        children: "Fiyat (TRY)",
                                      }),
                                      (0, t.jsx)("input", {
                                        type: "number",
                                        className: eg,
                                        value: e.price,
                                        onChange: (e) =>
                                          ep(
                                            a,
                                            "price",
                                            parseFloat(e.target.value),
                                          ),
                                        required: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsx)("label", {
                                    className: ev,
                                    children: "Aciklama",
                                  }),
                                  (0, t.jsx)("textarea", {
                                    className: eg,
                                    value: e.description,
                                    onChange: (e) =>
                                      ep(a, "description", e.target.value),
                                    rows: 2,
                                    required: !0,
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsx)("label", {
                                    className: ev,
                                    children: "Link",
                                  }),
                                  (0, t.jsx)("input", {
                                    type: "url",
                                    className: eg,
                                    value: e.link,
                                    onChange: (e) =>
                                      ep(a, "link", e.target.value),
                                    required: !0,
                                  }),
                                ],
                              }),
                              (0, t.jsxs)("div", {
                                children: [
                                  (0, t.jsx)("label", {
                                    className: ev,
                                    children: "Avantajlar",
                                  }),
                                  e.perks.map((s, l) =>
                                    (0, t.jsxs)(
                                      "div",
                                      {
                                        className: "flex gap-2 mb-2",
                                        children: [
                                          (0, t.jsx)("input", {
                                            className: eg,
                                            value: s,
                                            onChange: (s) => {
                                              let t = [...e.perks];
                                              ((t[l] = s.target.value),
                                                ep(a, "perks", t));
                                            },
                                          }),
                                          (0, t.jsx)("button", {
                                            type: "button",
                                            onClick: () => {
                                              ep(
                                                a,
                                                "perks",
                                                e.perks.filter(
                                                  (e, a) => a !== l,
                                                ),
                                              );
                                            },
                                            className:
                                              "text-red-500 text-sm shrink-0",
                                            children: "X",
                                          }),
                                        ],
                                      },
                                      l,
                                    ),
                                  ),
                                  (0, t.jsx)("button", {
                                    type: "button",
                                    onClick: () =>
                                      ep(a, "perks", [...e.perks, ""]),
                                    className:
                                      "text-xs text-gray-500 hover:text-gray-700",
                                    children: "+ Avantaj Ekle",
                                  }),
                                ],
                              }),
                            ],
                          },
                          a,
                        ),
                      ),
                    ],
                  }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: ej,
              children: [
                (0, t.jsx)("h2", {
                  className: "text-lg font-semibold",
                  children: "Metrikler",
                }),
                (0, t.jsxs)("div", {
                  className: "space-y-3",
                  children: [
                    (0, t.jsx)("h3", {
                      className: "text-sm font-medium text-gray-600",
                      children: "Baslangic Metrikleri (maks 3)",
                    }),
                    _.map((e, a) =>
                      (0, t.jsxs)(
                        "div",
                        {
                          className: "flex gap-3 items-end",
                          children: [
                            (0, t.jsxs)("div", {
                              className: "flex-1",
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: "Baslik",
                                }),
                                (0, t.jsx)("input", {
                                  className: eg,
                                  value: e.title,
                                  onChange: (e) => {
                                    let s = [..._];
                                    ((s[a] = {
                                      ...s[a],
                                      title: e.target.value,
                                    }),
                                      ee(s));
                                  },
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, t.jsxs)("div", {
                              className: "w-32",
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: "Deger",
                                }),
                                (0, t.jsx)("input", {
                                  type: "number",
                                  className: eg,
                                  value: e.value,
                                  onChange: (e) => {
                                    let s = [..._];
                                    ((s[a] = {
                                      ...s[a],
                                      value: parseInt(e.target.value),
                                    }),
                                      ee(s));
                                  },
                                  required: !0,
                                }),
                              ],
                            }),
                            _.length > 1 &&
                              (0, t.jsx)("button", {
                                type: "button",
                                onClick: () => ee(_.filter((e, s) => s !== a)),
                                className: "text-red-500 text-sm pb-2",
                                children: "X",
                              }),
                          ],
                        },
                        a,
                      ),
                    ),
                    _.length < 3 &&
                      (0, t.jsx)("button", {
                        type: "button",
                        onClick: () => ee([..._, { title: "", value: 0 }]),
                        className:
                          "text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg",
                        children: "+ Metrik Ekle",
                      }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "border-t border-gray-100 pt-4 mt-4",
                  children: [
                    (0, t.jsxs)("div", {
                      className: "flex items-center gap-3 mb-3",
                      children: [
                        (0, t.jsx)("h3", {
                          className: "text-sm font-medium text-gray-600",
                          children: "Sonras Metrikleri",
                        }),
                        (0, t.jsx)("input", {
                          type: "checkbox",
                          checked: ea,
                          onChange: (e) => es(e.target.checked),
                          className: "rounded",
                        }),
                      ],
                    }),
                    ea &&
                      (0, t.jsx)("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: Object.keys(et).map((e) =>
                          (0, t.jsxs)(
                            "div",
                            {
                              children: [
                                (0, t.jsx)("label", {
                                  className: ev,
                                  children: e,
                                }),
                                (0, t.jsx)("input", {
                                  className: eg,
                                  value: et[e],
                                  onChange: (a) =>
                                    el({ ...et, [e]: a.target.value }),
                                }),
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                  ],
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: ej,
              children: [
                (0, t.jsx)("h2", {
                  className: "text-lg font-semibold",
                  children: "Renkler (HSL)",
                }),
                (0, t.jsx)("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    { label: "Primary", value: R, setter: E },
                    { label: "Secondary", value: G, setter: K },
                    { label: "Accent", value: B, setter: D },
                    { label: "Background", value: L, setter: M },
                    { label: "Text", value: U, setter: Y },
                  ].map(({ label: e, value: a, setter: s }) =>
                    (0, t.jsxs)(
                      "div",
                      {
                        className: "flex items-center gap-3",
                        children: [
                          (0, t.jsx)("div", {
                            className:
                              "w-10 h-10 rounded border border-gray-200 shrink-0",
                            style: { backgroundColor: `hsl(${a})` },
                          }),
                          (0, t.jsxs)("div", {
                            className: "flex-1",
                            children: [
                              (0, t.jsx)("label", {
                                className: ev,
                                children: e,
                              }),
                              (0, t.jsx)("input", {
                                className: eg,
                                value: a,
                                onChange: (e) => s(e.target.value),
                                placeholder: "210 40% 98%",
                                required: !0,
                              }),
                            ],
                          }),
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              className: "flex items-center gap-4",
              children: [
                (0, t.jsx)("button", {
                  type: "submit",
                  disabled: s,
                  className:
                    "bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors",
                  children: s ? "Kaydediliyor..." : e ? "Guncelle" : "Olustur",
                }),
                (0, t.jsx)("button", {
                  type: "button",
                  onClick: () => a.push("/admin/dashboard"),
                  className: "text-gray-600 hover:text-gray-900 px-4 py-3",
                  children: "Iptal",
                }),
              ],
            }),
            en &&
              (0, t.jsx)(n, {
                open: !!en,
                onClose: () => ed(null),
                onCropped: en.onCropped,
                aspectRatio: en.aspectRatio,
                outputWidth: en.outputWidth,
                outputHeight: en.outputHeight,
                uploadPath: en.uploadPath,
              }),
          ],
        });
      }
    },
    83529: (e, a, s) => {
      "use strict";
      function t(e) {
        let a = {
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
          .map((e) => a[e] || e)
          .join("")
          .toLowerCase()
          .replace(/[^a-z0-9-]+/g, "-")
          .replace(/^-+|-+$/g, "")
          .replace(/--+/g, "-");
      }
      s.d(a, { Y: () => t });
    },
    82697: (e, a, s) => {
      "use strict";
      (s.r(a), s.d(a, { default: () => i }));
      var t = s(62740),
        l = s(18483),
        r = s(5303);
      function i({ children: e }) {
        return (0, t.jsx)(l.AuthGuard, {
          children: (0, t.jsxs)("div", {
            className: "flex min-h-screen",
            children: [
              (0, t.jsx)(r.AdminSidebar, {}),
              (0, t.jsx)("main", { className: "flex-1 p-6", children: e }),
            ],
          }),
        });
      }
    },
    96038: (e, a, s) => {
      "use strict";
      (s.r(a), s.d(a, { default: () => l }));
      var t = s(62740);
      function l({ children: e }) {
        return (0, t.jsx)("div", {
          className: "min-h-screen bg-gray-50",
          children: e,
        });
      }
    },
    5303: (e, a, s) => {
      "use strict";
      s.d(a, { AdminSidebar: () => t });
      let t = (0, s(46760).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call AdminSidebar() from the server but AdminSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/components/admin/admin-sidebar.tsx",
        "AdminSidebar",
      );
    },
    18483: (e, a, s) => {
      "use strict";
      s.d(a, { AuthGuard: () => t });
      let t = (0, s(46760).registerClientReference)(
        function () {
          throw Error(
            "Attempted to call AuthGuard() from the server but AuthGuard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
          );
        },
        "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/components/admin/auth-guard.tsx",
        "AuthGuard",
      );
    },
  }));
