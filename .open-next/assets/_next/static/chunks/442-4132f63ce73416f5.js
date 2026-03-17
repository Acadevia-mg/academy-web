"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [442],
  {
    9442: (e, l, a) => {
      a.d(l, { B: () => o });
      var s = a(5155),
        t = a(2115),
        i = a(6046),
        r = a(6698);
      function n(e) {
        let {
            open: l,
            onClose: a,
            onCropped: i,
            aspectRatio: n,
            outputWidth: d,
            outputHeight: o,
            uploadPath: c,
          } = e,
          [u, m] = (0, t.useState)(null),
          [x, p] = (0, t.useState)(),
          [h, v] = (0, t.useState)(),
          [g, j] = (0, t.useState)(!1),
          b = (0, t.useRef)(null),
          N = (0, t.useRef)(null),
          y = (0, t.useCallback)(
            (e) => {
              let { width: l, height: a } = e.currentTarget,
                s = Math.min(l, a / n, l);
              p({
                unit: "px",
                x: (l - s) / 2,
                y: (a - s * n) / 2,
                width: s,
                height: s / n,
              });
            },
            [n],
          ),
          k = async () => {
            if (b.current && h) {
              j(!0);
              try {
                let e = document.createElement("canvas");
                ((e.width = d), (e.height = o));
                let l = e.getContext("2d"),
                  a = b.current.naturalWidth / b.current.width,
                  s = b.current.naturalHeight / b.current.height;
                l.drawImage(
                  b.current,
                  h.x * a,
                  h.y * s,
                  h.width * a,
                  h.height * s,
                  0,
                  0,
                  d,
                  o,
                );
                let t = await new Promise((l) =>
                    e.toBlob((e) => l(e), "image/webp", 0.85),
                  ),
                  r = new FormData();
                (r.append("file", t, c.split("/").pop()), r.append("path", c));
                let n = await fetch("/api/admin/upload", {
                    method: "POST",
                    body: r,
                  }),
                  { url: u } = await n.json();
                (i(u), f());
              } catch (e) {
                console.error("Upload failed:", e);
              } finally {
                j(!1);
              }
            }
          },
          f = () => {
            (m(null), p(void 0), v(void 0), a());
          };
        return l
          ? (0, s.jsx)("div", {
              className:
                "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
              children: (0, s.jsxs)("div", {
                className:
                  "bg-white rounded-xl shadow-xl max-w-lg w-full mx-4 p-6",
                children: [
                  (0, s.jsx)("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "Gorsel Kirp ve Yukle",
                  }),
                  u
                    ? (0, s.jsx)("div", {
                        className: "space-y-4",
                        children: (0, s.jsx)(r.Ay, {
                          crop: x,
                          onChange: (e) => p(e),
                          onComplete: (e) => v(e),
                          aspect: n,
                          className: "max-h-96",
                          children: (0, s.jsx)("img", {
                            ref: b,
                            src: u,
                            onLoad: y,
                            alt: "Crop preview",
                            className: "max-h-96",
                          }),
                        }),
                      })
                    : (0, s.jsx)("div", {
                        children: (0, s.jsx)("input", {
                          ref: N,
                          type: "file",
                          accept: "image/*",
                          onChange: (e) => {
                            var l;
                            let a =
                              null === (l = e.target.files) || void 0 === l
                                ? void 0
                                : l[0];
                            if (!a) return;
                            let s = new FileReader();
                            ((s.onload = () => m(s.result)),
                              s.readAsDataURL(a));
                          },
                          className:
                            "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200",
                        }),
                      }),
                  (0, s.jsxs)("div", {
                    className: "flex justify-end gap-3 mt-4",
                    children: [
                      (0, s.jsx)("button", {
                        onClick: f,
                        className:
                          "px-4 py-2 text-sm text-gray-600 hover:text-gray-900",
                        children: "Iptal",
                      }),
                      u &&
                        (0, s.jsx)("button", {
                          onClick: k,
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
      a(4534);
      var d = a(9645);
      function o(e) {
        var l,
          a,
          r,
          o,
          c,
          u,
          m,
          x,
          p,
          h,
          v,
          g,
          j,
          b,
          N,
          y,
          k,
          f,
          C,
          S,
          w,
          T,
          q,
          P,
          A,
          K,
          B;
        let { initialData: R } = e,
          E = (0, i.useRouter)(),
          [L, M] = (0, t.useState)(!1),
          [Y, G] = (0, t.useState)(
            null !== (c = null == R ? void 0 : R.name) && void 0 !== c ? c : "",
          ),
          [O, U] = (0, t.useState)(
            null !== (u = null == R ? void 0 : R.heroDescription) &&
              void 0 !== u
              ? u
              : "",
          ),
          [D, F] = (0, t.useState)(
            null !== (m = null == R ? void 0 : R.cardDescription) &&
              void 0 !== m
              ? m
              : "",
          ),
          [H, I] = (0, t.useState)((null == R ? void 0 : R.navigable) !== !1),
          [z, W] = (0, t.useState)(
            null !== (x = null == R ? void 0 : R.registerLink) && void 0 !== x
              ? x
              : "",
          ),
          [_, X] = (0, t.useState)(
            null !== (p = null == R ? void 0 : R.videoUrl) && void 0 !== p
              ? p
              : "",
          ),
          [J, V] = (0, t.useState)(
            null !== (h = null == R ? void 0 : R.date) && void 0 !== h ? h : "",
          ),
          [$, Q] = (0, t.useState)(
            null !== (v = null == R ? void 0 : R.location.name) && void 0 !== v
              ? v
              : "",
          ),
          [Z, ee] = (0, t.useState)(
            null !== (g = null == R ? void 0 : R.location.subtext) &&
              void 0 !== g
              ? g
              : "",
          ),
          [el, ea] = (0, t.useState)(
            null !==
              (j =
                null == R
                  ? void 0
                  : null === (l = R.location.latitude) || void 0 === l
                    ? void 0
                    : l.toString()) && void 0 !== j
              ? j
              : "",
          ),
          [es, et] = (0, t.useState)(
            null !==
              (b =
                null == R
                  ? void 0
                  : null === (a = R.location.longitude) || void 0 === a
                    ? void 0
                    : a.toString()) && void 0 !== b
              ? b
              : "",
          ),
          [ei, er] = (0, t.useState)(
            null !== (N = null == R ? void 0 : R.colorPalette.primary) &&
              void 0 !== N
              ? N
              : "0 0% 100%",
          ),
          [en, ed] = (0, t.useState)(
            null !== (y = null == R ? void 0 : R.colorPalette.secondary) &&
              void 0 !== y
              ? y
              : "0 0% 20%",
          ),
          [eo, ec] = (0, t.useState)(
            null !== (k = null == R ? void 0 : R.colorPalette.accent) &&
              void 0 !== k
              ? k
              : "200 80% 50%",
          ),
          [eu, em] = (0, t.useState)(
            null !== (f = null == R ? void 0 : R.colorPalette.background) &&
              void 0 !== f
              ? f
              : "0 0% 98%",
          ),
          [ex, ep] = (0, t.useState)(
            null !== (C = null == R ? void 0 : R.colorPalette.text) &&
              void 0 !== C
              ? C
              : "0 0% 10%",
          ),
          [eh, ev] = (0, t.useState)(
            null !==
              (S =
                null == R
                  ? void 0
                  : R.speakers.map((e) => {
                      var l, a, s, t;
                      return {
                        fullName: e.fullName,
                        title: e.title,
                        company:
                          null !== (l = e.company) && void 0 !== l ? l : "",
                        instagram:
                          null !== (a = e.instagram) && void 0 !== a ? a : "",
                        linkedin:
                          null !== (s = e.linkedin) && void 0 !== s ? s : "",
                        twitter:
                          null !== (t = e.twitter) && void 0 !== t ? t : "",
                      };
                    })) && void 0 !== S
              ? S
              : [],
          ),
          [eg, ej] = (0, t.useState)(
            null !==
              (w =
                null == R
                  ? void 0
                  : R.organizers.map((e) => ({
                      name: e.name,
                      designation: e.designation,
                      image: e.image,
                    }))) && void 0 !== w
              ? w
              : [],
          ),
          [eb, eN] = (0, t.useState)(
            null !==
              (T =
                null == R
                  ? void 0
                  : R.sessions.map((e) => {
                      var l, a, s;
                      return {
                        room: e.room,
                        speakerName: e.speakerName,
                        topic: null !== (l = e.topic) && void 0 !== l ? l : "",
                        startTime:
                          null !== (a = e.startTime) && void 0 !== a ? a : "",
                        endTime:
                          null !== (s = e.endTime) && void 0 !== s ? s : "",
                      };
                    })) && void 0 !== T
              ? T
              : [],
          ),
          [ey, ek] = (0, t.useState)(
            null !==
              (q =
                null == R
                  ? void 0
                  : R.sponsors.map((e) => ({
                      tier: e.tier,
                      sponsorSlug: e.sponsorSlug,
                    }))) && void 0 !== q
              ? q
              : [],
          ),
          [ef, eC] = (0, t.useState)(
            !!(null == R
              ? void 0
              : null === (r = R.tickets) || void 0 === r
                ? void 0
                : r.length),
          ),
          [eS, ew] = (0, t.useState)(
            null !==
              (P =
                null == R
                  ? void 0
                  : null === (o = R.tickets) || void 0 === o
                    ? void 0
                    : o.map((e) => ({
                        type: e.type,
                        description: e.description,
                        price: e.price,
                        link: e.link,
                        perks: e.perks,
                      }))) && void 0 !== P
              ? P
              : [],
          ),
          [eT, eq] = (0, t.useState)(
            null !==
              (A =
                null == R
                  ? void 0
                  : R.initialMetrics.map((e) => ({
                      title: e.title,
                      value: e.value,
                    }))) && void 0 !== A
              ? A
              : [{ title: "", value: 0 }],
          ),
          [eP, eA] = (0, t.useState)(!!(null == R ? void 0 : R.afterMetrics)),
          [eK, eB] = (0, t.useState)(
            null !== (K = null == R ? void 0 : R.afterMetrics) && void 0 !== K
              ? K
              : {
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
          [eR, eE] = (0, t.useState)(
            null !== (B = null == R ? void 0 : R.images) && void 0 !== B
              ? B
              : [],
          ),
          [eL, eM] = (0, t.useState)(null),
          eY = (0, d.Y)(Y),
          eG = async (e) => {
            (e.preventDefault(), M(!0));
            let l = {
              name: Y,
              heroDescription: O,
              cardDescription: D,
              navigable: H,
              registerLink: z,
              videoUrl: _ || void 0,
              date: J,
              location: {
                name: $,
                subtext: Z,
                latitude: el ? parseFloat(el) : void 0,
                longitude: es ? parseFloat(es) : void 0,
              },
              colorPalette: {
                primary: ei,
                secondary: en,
                accent: eo,
                background: eu,
                text: ex,
              },
              speakers: eh.map((e) => ({
                fullName: e.fullName,
                title: e.title,
                company: e.company || void 0,
                instagram: e.instagram || void 0,
                linkedin: e.linkedin || void 0,
                twitter: e.twitter || void 0,
              })),
              organizers: eg,
              sessions: eb.map((e) => ({
                room: e.room,
                speakerName: e.speakerName,
                topic: e.topic || void 0,
                startTime: e.startTime || void 0,
                endTime: e.endTime || void 0,
              })),
              sponsors: ey,
              tickets: ef ? eS : void 0,
              images: eR,
              initialMetrics: eT,
              afterMetrics: eP ? eK : void 0,
            };
            try {
              let e = R
                  ? "/api/admin/events/".concat(R.id)
                  : "/api/admin/events",
                a = R ? "PUT" : "POST";
              (
                await fetch(e, {
                  method: a,
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(l),
                })
              ).ok && E.push("/admin/dashboard");
            } catch (e) {
            } finally {
              M(!1);
            }
          },
          eO = (e, l, a) => {
            let s = [...eh];
            ((s[e] = { ...s[e], [l]: a }), ev(s));
          },
          eU = (e, l, a) => {
            let s = [...eg];
            ((s[e] = { ...s[e], [l]: a }), ej(s));
          },
          eD = (e, l, a) => {
            let s = [...eb];
            ((s[e] = { ...s[e], [l]: a }), eN(s));
          },
          eF = (e, l, a) => {
            let s = [...ey];
            ((s[e] = { ...s[e], [l]: a }), ek(s));
          },
          eH = (e, l, a) => {
            let s = [...eS];
            ((s[e] = { ...s[e], [l]: a }), ew(s));
          },
          eI =
            "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent",
          ez = "block text-sm font-medium text-gray-700 mb-1",
          eW = "bg-white rounded-lg border border-gray-200 p-6 space-y-4";
        return (0, s.jsxs)("form", {
          onSubmit: eG,
          className: "space-y-6 max-w-4xl",
          children: [
            (0, s.jsxs)("div", {
              className: eW,
              children: [
                (0, s.jsx)("h2", {
                  className: "text-lg font-semibold",
                  children: "Temel Bilgiler",
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("label", {
                      className: ez,
                      children: "Etkinlik Adi",
                    }),
                    (0, s.jsx)("input", {
                      className: eI,
                      value: Y,
                      onChange: (e) => G(e.target.value),
                      required: !0,
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("label", {
                      className: ez,
                      children: "Hero Aciklamasi",
                    }),
                    (0, s.jsx)("textarea", {
                      className: eI,
                      value: O,
                      onChange: (e) => U(e.target.value),
                      rows: 3,
                      required: !0,
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("label", {
                      className: ez,
                      children: "Kart Aciklamasi",
                    }),
                    (0, s.jsx)("textarea", {
                      className: eI,
                      value: D,
                      onChange: (e) => F(e.target.value),
                      rows: 3,
                      required: !0,
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, s.jsx)("input", {
                      type: "checkbox",
                      checked: H,
                      onChange: (e) => I(e.target.checked),
                      className: "rounded",
                    }),
                    (0, s.jsx)("label", {
                      className: "text-sm text-gray-700",
                      children: "Navigable (gorunur etkinlik)",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("label", {
                      className: ez,
                      children: "Kayit Linki",
                    }),
                    (0, s.jsx)("input", {
                      type: "url",
                      className: eI,
                      value: z,
                      onChange: (e) => W(e.target.value),
                      required: !0,
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("label", {
                      className: ez,
                      children: "Video URL",
                    }),
                    (0, s.jsx)("input", {
                      type: "url",
                      className: eI,
                      value: _,
                      onChange: (e) => X(e.target.value),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  children: [
                    (0, s.jsx)("label", { className: ez, children: "Tarih" }),
                    (0, s.jsx)("input", {
                      type: "datetime-local",
                      className: eI,
                      value: J ? J.slice(0, 16) : "",
                      onChange: (e) =>
                        V(new Date(e.target.value).toISOString()),
                      required: !0,
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: eW,
              children: [
                (0, s.jsx)("h2", {
                  className: "text-lg font-semibold",
                  children: "Konum",
                }),
                (0, s.jsxs)("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("label", {
                          className: ez,
                          children: "Konum Adi",
                        }),
                        (0, s.jsx)("input", {
                          className: eI,
                          value: $,
                          onChange: (e) => Q(e.target.value),
                          required: !0,
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("label", {
                          className: ez,
                          children: "Alt Metin",
                        }),
                        (0, s.jsx)("input", {
                          className: eI,
                          value: Z,
                          onChange: (e) => ee(e.target.value),
                          required: !0,
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("label", {
                          className: ez,
                          children: "Enlem",
                        }),
                        (0, s.jsx)("input", {
                          type: "number",
                          step: "any",
                          className: eI,
                          value: el,
                          onChange: (e) => ea(e.target.value),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("label", {
                          className: ez,
                          children: "Boylam",
                        }),
                        (0, s.jsx)("input", {
                          type: "number",
                          step: "any",
                          className: eI,
                          value: es,
                          onChange: (e) => et(e.target.value),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: eW,
              children: [
                (0, s.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, s.jsx)("h2", {
                      className: "text-lg font-semibold",
                      children: "Konusmacilar",
                    }),
                    (0, s.jsx)("button", {
                      type: "button",
                      onClick: () =>
                        ev([
                          ...eh,
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
                eh.map((e, l) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      className:
                        "border border-gray-100 rounded-lg p-4 space-y-3",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex justify-between items-start",
                          children: [
                            (0, s.jsxs)("span", {
                              className: "text-sm font-medium text-gray-500",
                              children: ["#", l + 1],
                            }),
                            (0, s.jsx)("button", {
                              type: "button",
                              onClick: () => ev(eh.filter((e, a) => a !== l)),
                              className:
                                "text-red-500 text-sm hover:text-red-700",
                              children: "Kaldir",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: [
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: "Ad Soyad",
                                }),
                                (0, s.jsx)("input", {
                                  className: eI,
                                  value: e.fullName,
                                  onChange: (e) =>
                                    eO(l, "fullName", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: "Unvan",
                                }),
                                (0, s.jsx)("input", {
                                  className: eI,
                                  value: e.title,
                                  onChange: (e) =>
                                    eO(l, "title", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: "Sirket",
                                }),
                                (0, s.jsx)("input", {
                                  className: eI,
                                  value: e.company,
                                  onChange: (e) =>
                                    eO(l, "company", e.target.value),
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: "LinkedIn",
                                }),
                                (0, s.jsx)("input", {
                                  className: eI,
                                  value: e.linkedin,
                                  onChange: (e) =>
                                    eO(l, "linkedin", e.target.value),
                                }),
                              ],
                            }),
                          ],
                        }),
                        e.fullName &&
                          (0, s.jsxs)("div", {
                            className: "flex items-center gap-3",
                            children: [
                              (0, s.jsxs)("span", {
                                className: "text-xs text-gray-400",
                                children: [
                                  "Gorsel: ",
                                  (0, d.Y)(e.fullName),
                                  ".webp",
                                ],
                              }),
                              (0, s.jsx)("button", {
                                type: "button",
                                onClick: () =>
                                  eM({
                                    aspectRatio: 1,
                                    outputWidth: 400,
                                    outputHeight: 400,
                                    uploadPath: ""
                                      .concat(eY, "/speakers/")
                                      .concat((0, d.Y)(e.fullName), ".webp"),
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
                    l,
                  ),
                ),
              ],
            }),
            (0, s.jsxs)("div", {
              className: eW,
              children: [
                (0, s.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, s.jsx)("h2", {
                      className: "text-lg font-semibold",
                      children: "Organizatorler",
                    }),
                    (0, s.jsx)("button", {
                      type: "button",
                      onClick: () =>
                        ej([...eg, { name: "", designation: "", image: "" }]),
                      className:
                        "text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg",
                      children: "+ Ekle",
                    }),
                  ],
                }),
                eg.map((e, l) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      className:
                        "border border-gray-100 rounded-lg p-4 space-y-3",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, s.jsxs)("span", {
                              className: "text-sm font-medium text-gray-500",
                              children: ["#", l + 1],
                            }),
                            (0, s.jsx)("button", {
                              type: "button",
                              onClick: () => ej(eg.filter((e, a) => a !== l)),
                              className:
                                "text-red-500 text-sm hover:text-red-700",
                              children: "Kaldir",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "grid grid-cols-3 gap-3",
                          children: [
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: "Ad",
                                }),
                                (0, s.jsx)("input", {
                                  className: eI,
                                  value: e.name,
                                  onChange: (e) =>
                                    eU(l, "name", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: "Gorev",
                                }),
                                (0, s.jsx)("input", {
                                  className: eI,
                                  value: e.designation,
                                  onChange: (e) =>
                                    eU(l, "designation", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: "Gorsel URL",
                                }),
                                (0, s.jsx)("input", {
                                  className: eI,
                                  value: e.image,
                                  onChange: (e) =>
                                    eU(l, "image", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    l,
                  ),
                ),
              ],
            }),
            (0, s.jsxs)("div", {
              className: eW,
              children: [
                (0, s.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, s.jsx)("h2", {
                      className: "text-lg font-semibold",
                      children: "Oturumlar",
                    }),
                    (0, s.jsx)("button", {
                      type: "button",
                      onClick: () =>
                        eN([
                          ...eb,
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
                eb.map((e, l) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      className:
                        "border border-gray-100 rounded-lg p-4 space-y-3",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, s.jsxs)("span", {
                              className: "text-sm font-medium text-gray-500",
                              children: ["#", l + 1],
                            }),
                            (0, s.jsx)("button", {
                              type: "button",
                              onClick: () => eN(eb.filter((e, a) => a !== l)),
                              className:
                                "text-red-500 text-sm hover:text-red-700",
                              children: "Kaldir",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: [
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: "Salon",
                                }),
                                (0, s.jsx)("input", {
                                  className: eI,
                                  value: e.room,
                                  onChange: (e) =>
                                    eD(l, "room", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: "Konusmaci",
                                }),
                                (0, s.jsx)("input", {
                                  className: eI,
                                  value: e.speakerName,
                                  onChange: (e) =>
                                    eD(l, "speakerName", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: "Konu",
                                }),
                                (0, s.jsx)("input", {
                                  className: eI,
                                  value: e.topic,
                                  onChange: (e) =>
                                    eD(l, "topic", e.target.value),
                                  disabled: "Network" === e.room,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "grid grid-cols-2 gap-2",
                              children: [
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("label", {
                                      className: ez,
                                      children: "Baslangic",
                                    }),
                                    (0, s.jsx)("input", {
                                      className: eI,
                                      value: e.startTime,
                                      onChange: (e) =>
                                        eD(l, "startTime", e.target.value),
                                      placeholder: "13.00",
                                      disabled: "Network" === e.room,
                                    }),
                                  ],
                                }),
                                (0, s.jsxs)("div", {
                                  children: [
                                    (0, s.jsx)("label", {
                                      className: ez,
                                      children: "Bitis",
                                    }),
                                    (0, s.jsx)("input", {
                                      className: eI,
                                      value: e.endTime,
                                      onChange: (e) =>
                                        eD(l, "endTime", e.target.value),
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
                    l,
                  ),
                ),
              ],
            }),
            (0, s.jsxs)("div", {
              className: eW,
              children: [
                (0, s.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    (0, s.jsx)("h2", {
                      className: "text-lg font-semibold",
                      children: "Sponsorlar",
                    }),
                    (0, s.jsx)("button", {
                      type: "button",
                      onClick: () => ek([...ey, { tier: "", sponsorSlug: "" }]),
                      className:
                        "text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg",
                      children: "+ Ekle",
                    }),
                  ],
                }),
                ey.map((e, l) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      className:
                        "border border-gray-100 rounded-lg p-4 space-y-3",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            (0, s.jsxs)("span", {
                              className: "text-sm font-medium text-gray-500",
                              children: ["#", l + 1],
                            }),
                            (0, s.jsx)("button", {
                              type: "button",
                              onClick: () => ek(ey.filter((e, a) => a !== l)),
                              className:
                                "text-red-500 text-sm hover:text-red-700",
                              children: "Kaldir",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className: "grid grid-cols-2 gap-3",
                          children: [
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: "Slug",
                                }),
                                (0, s.jsx)("input", {
                                  className: eI,
                                  value: e.sponsorSlug,
                                  onChange: (e) =>
                                    eF(l, "sponsorSlug", e.target.value),
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: "Tier",
                                }),
                                (0, s.jsxs)("select", {
                                  className: eI,
                                  value: e.tier,
                                  onChange: (e) =>
                                    eF(l, "tier", e.target.value),
                                  children: [
                                    (0, s.jsx)("option", {
                                      value: "",
                                      children: "Tier yok",
                                    }),
                                    (0, s.jsx)("option", {
                                      value: "platin",
                                      children: "Platin",
                                    }),
                                    (0, s.jsx)("option", {
                                      value: "altin",
                                      children: "Altin",
                                    }),
                                    (0, s.jsx)("option", {
                                      value: "gumus",
                                      children: "Gumus",
                                    }),
                                    (0, s.jsx)("option", {
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
                          (0, s.jsx)("button", {
                            type: "button",
                            onClick: () =>
                              eM({
                                aspectRatio: 2.5,
                                outputWidth: 500,
                                outputHeight: 200,
                                uploadPath: ""
                                  .concat(eY, "/sponsors/")
                                  .concat(e.sponsorSlug, ".webp"),
                                onCropped: () => {},
                              }),
                            className:
                              "text-xs text-blue-600 hover:text-blue-800",
                            children: "Logo Yukle",
                          }),
                      ],
                    },
                    l,
                  ),
                ),
              ],
            }),
            (0, s.jsxs)("div", {
              className: eW,
              children: [
                (0, s.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, s.jsx)("h2", {
                      className: "text-lg font-semibold",
                      children: "Biletler",
                    }),
                    (0, s.jsx)("input", {
                      type: "checkbox",
                      checked: ef,
                      onChange: (e) => eC(e.target.checked),
                      className: "rounded",
                    }),
                  ],
                }),
                ef &&
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("button", {
                        type: "button",
                        onClick: () =>
                          ew([
                            ...eS,
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
                      eS.map((e, l) =>
                        (0, s.jsxs)(
                          "div",
                          {
                            className:
                              "border border-gray-100 rounded-lg p-4 space-y-3",
                            children: [
                              (0, s.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                  (0, s.jsxs)("span", {
                                    className:
                                      "text-sm font-medium text-gray-500",
                                    children: ["Bilet #", l + 1],
                                  }),
                                  (0, s.jsx)("button", {
                                    type: "button",
                                    onClick: () =>
                                      ew(eS.filter((e, a) => a !== l)),
                                    className:
                                      "text-red-500 text-sm hover:text-red-700",
                                    children: "Kaldir",
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className: "grid grid-cols-2 gap-3",
                                children: [
                                  (0, s.jsxs)("div", {
                                    children: [
                                      (0, s.jsx)("label", {
                                        className: ez,
                                        children: "Tip",
                                      }),
                                      (0, s.jsx)("input", {
                                        className: eI,
                                        value: e.type,
                                        onChange: (e) =>
                                          eH(l, "type", e.target.value),
                                        required: !0,
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    children: [
                                      (0, s.jsx)("label", {
                                        className: ez,
                                        children: "Fiyat (TRY)",
                                      }),
                                      (0, s.jsx)("input", {
                                        type: "number",
                                        className: eI,
                                        value: e.price,
                                        onChange: (e) =>
                                          eH(
                                            l,
                                            "price",
                                            parseFloat(e.target.value),
                                          ),
                                        required: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                children: [
                                  (0, s.jsx)("label", {
                                    className: ez,
                                    children: "Aciklama",
                                  }),
                                  (0, s.jsx)("textarea", {
                                    className: eI,
                                    value: e.description,
                                    onChange: (e) =>
                                      eH(l, "description", e.target.value),
                                    rows: 2,
                                    required: !0,
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                children: [
                                  (0, s.jsx)("label", {
                                    className: ez,
                                    children: "Link",
                                  }),
                                  (0, s.jsx)("input", {
                                    type: "url",
                                    className: eI,
                                    value: e.link,
                                    onChange: (e) =>
                                      eH(l, "link", e.target.value),
                                    required: !0,
                                  }),
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                children: [
                                  (0, s.jsx)("label", {
                                    className: ez,
                                    children: "Avantajlar",
                                  }),
                                  e.perks.map((a, t) =>
                                    (0, s.jsxs)(
                                      "div",
                                      {
                                        className: "flex gap-2 mb-2",
                                        children: [
                                          (0, s.jsx)("input", {
                                            className: eI,
                                            value: a,
                                            onChange: (a) => {
                                              let s = [...e.perks];
                                              ((s[t] = a.target.value),
                                                eH(l, "perks", s));
                                            },
                                          }),
                                          (0, s.jsx)("button", {
                                            type: "button",
                                            onClick: () => {
                                              eH(
                                                l,
                                                "perks",
                                                e.perks.filter(
                                                  (e, l) => l !== t,
                                                ),
                                              );
                                            },
                                            className:
                                              "text-red-500 text-sm shrink-0",
                                            children: "X",
                                          }),
                                        ],
                                      },
                                      t,
                                    ),
                                  ),
                                  (0, s.jsx)("button", {
                                    type: "button",
                                    onClick: () =>
                                      eH(l, "perks", [...e.perks, ""]),
                                    className:
                                      "text-xs text-gray-500 hover:text-gray-700",
                                    children: "+ Avantaj Ekle",
                                  }),
                                ],
                              }),
                            ],
                          },
                          l,
                        ),
                      ),
                    ],
                  }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: eW,
              children: [
                (0, s.jsx)("h2", {
                  className: "text-lg font-semibold",
                  children: "Metrikler",
                }),
                (0, s.jsxs)("div", {
                  className: "space-y-3",
                  children: [
                    (0, s.jsx)("h3", {
                      className: "text-sm font-medium text-gray-600",
                      children: "Baslangic Metrikleri (maks 3)",
                    }),
                    eT.map((e, l) =>
                      (0, s.jsxs)(
                        "div",
                        {
                          className: "flex gap-3 items-end",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "flex-1",
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: "Baslik",
                                }),
                                (0, s.jsx)("input", {
                                  className: eI,
                                  value: e.title,
                                  onChange: (e) => {
                                    let a = [...eT];
                                    ((a[l] = {
                                      ...a[l],
                                      title: e.target.value,
                                    }),
                                      eq(a));
                                  },
                                  required: !0,
                                }),
                              ],
                            }),
                            (0, s.jsxs)("div", {
                              className: "w-32",
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: "Deger",
                                }),
                                (0, s.jsx)("input", {
                                  type: "number",
                                  className: eI,
                                  value: e.value,
                                  onChange: (e) => {
                                    let a = [...eT];
                                    ((a[l] = {
                                      ...a[l],
                                      value: parseInt(e.target.value),
                                    }),
                                      eq(a));
                                  },
                                  required: !0,
                                }),
                              ],
                            }),
                            eT.length > 1 &&
                              (0, s.jsx)("button", {
                                type: "button",
                                onClick: () => eq(eT.filter((e, a) => a !== l)),
                                className: "text-red-500 text-sm pb-2",
                                children: "X",
                              }),
                          ],
                        },
                        l,
                      ),
                    ),
                    eT.length < 3 &&
                      (0, s.jsx)("button", {
                        type: "button",
                        onClick: () => eq([...eT, { title: "", value: 0 }]),
                        className:
                          "text-sm text-gray-600 hover:text-gray-900 px-3 py-1 border border-gray-200 rounded-lg",
                        children: "+ Metrik Ekle",
                      }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "border-t border-gray-100 pt-4 mt-4",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-3 mb-3",
                      children: [
                        (0, s.jsx)("h3", {
                          className: "text-sm font-medium text-gray-600",
                          children: "Sonras Metrikleri",
                        }),
                        (0, s.jsx)("input", {
                          type: "checkbox",
                          checked: eP,
                          onChange: (e) => eA(e.target.checked),
                          className: "rounded",
                        }),
                      ],
                    }),
                    eP &&
                      (0, s.jsx)("div", {
                        className: "grid grid-cols-2 gap-3",
                        children: Object.keys(eK).map((e) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              children: [
                                (0, s.jsx)("label", {
                                  className: ez,
                                  children: e,
                                }),
                                (0, s.jsx)("input", {
                                  className: eI,
                                  value: eK[e],
                                  onChange: (l) =>
                                    eB({ ...eK, [e]: l.target.value }),
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
            (0, s.jsxs)("div", {
              className: eW,
              children: [
                (0, s.jsx)("h2", {
                  className: "text-lg font-semibold",
                  children: "Renkler (HSL)",
                }),
                (0, s.jsx)("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    { label: "Primary", value: ei, setter: er },
                    { label: "Secondary", value: en, setter: ed },
                    { label: "Accent", value: eo, setter: ec },
                    { label: "Background", value: eu, setter: em },
                    { label: "Text", value: ex, setter: ep },
                  ].map((e) => {
                    let { label: l, value: a, setter: t } = e;
                    return (0, s.jsxs)(
                      "div",
                      {
                        className: "flex items-center gap-3",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-10 h-10 rounded border border-gray-200 shrink-0",
                            style: { backgroundColor: "hsl(".concat(a, ")") },
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex-1",
                            children: [
                              (0, s.jsx)("label", {
                                className: ez,
                                children: l,
                              }),
                              (0, s.jsx)("input", {
                                className: eI,
                                value: a,
                                onChange: (e) => t(e.target.value),
                                placeholder: "210 40% 98%",
                                required: !0,
                              }),
                            ],
                          }),
                        ],
                      },
                      l,
                    );
                  }),
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "flex items-center gap-4",
              children: [
                (0, s.jsx)("button", {
                  type: "submit",
                  disabled: L,
                  className:
                    "bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors",
                  children: L ? "Kaydediliyor..." : R ? "Guncelle" : "Olustur",
                }),
                (0, s.jsx)("button", {
                  type: "button",
                  onClick: () => E.push("/admin/dashboard"),
                  className: "text-gray-600 hover:text-gray-900 px-4 py-3",
                  children: "Iptal",
                }),
              ],
            }),
            eL &&
              (0, s.jsx)(n, {
                open: !!eL,
                onClose: () => eM(null),
                onCropped: eL.onCropped,
                aspectRatio: eL.aspectRatio,
                outputWidth: eL.outputWidth,
                outputHeight: eL.outputHeight,
                uploadPath: eL.uploadPath,
              }),
          ],
        });
      }
    },
    9645: (e, l, a) => {
      a.d(l, { Y: () => s });
      function s(e) {
        let l = {
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
          .map((e) => l[e] || e)
          .join("")
          .toLowerCase()
          .replace(/[^a-z0-9-]+/g, "-")
          .replace(/^-+|-+$/g, "")
          .replace(/--+/g, "-");
      }
    },
  },
]);
