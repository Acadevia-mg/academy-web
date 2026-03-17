(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [197],
  {
    9681: (e, t, l) => {
      Promise.resolve().then(l.bind(l, 184));
    },
    184: (e, t, l) => {
      "use strict";
      (l.r(t), l.d(t, { default: () => r }));
      var a = l(5155),
        s = l(2115);
      let n = {
        show: !1,
        text: "",
        backgroundColor: "#003B5C",
        textColor: "#FFFFFF",
        link: "",
        linkText: "",
        showLink: !1,
      };
      function r() {
        let [e, t] = (0, s.useState)(n),
          [l, r] = (0, s.useState)(!1),
          [o, i] = (0, s.useState)(!1);
        (0, s.useEffect)(() => {
          fetch("/api/announcement")
            .then((e) => e.json())
            .then((e) => {
              if (e) {
                var l, a, s, n, r, o, i;
                t({
                  show: null !== (l = e.show) && void 0 !== l && l,
                  text: null !== (a = e.text) && void 0 !== a ? a : "",
                  backgroundColor:
                    null !== (s = e.backgroundColor) && void 0 !== s
                      ? s
                      : "#003B5C",
                  textColor:
                    null !== (n = e.textColor) && void 0 !== n ? n : "#FFFFFF",
                  link: null !== (r = e.link) && void 0 !== r ? r : "",
                  linkText: null !== (o = e.linkText) && void 0 !== o ? o : "",
                  showLink: null !== (i = e.showLink) && void 0 !== i && i,
                });
              }
            })
            .catch(() => {});
        }, []);
        let d = async () => {
          (r(!0), i(!1));
          try {
            (await fetch("/api/admin/announcement", {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(e),
            }),
              i(!0),
              setTimeout(() => i(!1), 2e3));
          } catch (e) {
          } finally {
            r(!1);
          }
        };
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsx)("h1", {
              className: "text-2xl font-bold text-gray-900 mb-6",
              children: "Duyuru Yonetimi",
            }),
            e.show &&
              (0, a.jsxs)("div", {
                className: "mb-6 p-3 rounded-lg text-center text-sm",
                style: {
                  backgroundColor: e.backgroundColor,
                  color: e.textColor,
                },
                children: [
                  e.text,
                  e.showLink &&
                    e.link &&
                    (0, a.jsx)("a", {
                      href: e.link,
                      className: "ml-2 underline",
                      children: e.linkText || "Daha fazla",
                    }),
                ],
              }),
            (0, a.jsxs)("div", {
              className:
                "bg-white rounded-lg border border-gray-200 p-6 space-y-4",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, a.jsx)("label", {
                      className: "text-sm font-medium text-gray-700",
                      children: "Goster",
                    }),
                    (0, a.jsx)("input", {
                      type: "checkbox",
                      checked: e.show,
                      onChange: (l) => t({ ...e, show: l.target.checked }),
                      className: "rounded",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsx)("label", {
                      className: "block text-sm font-medium text-gray-700 mb-1",
                      children: "Metin",
                    }),
                    (0, a.jsx)("textarea", {
                      value: e.text,
                      onChange: (l) => t({ ...e, text: l.target.value }),
                      className:
                        "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                      rows: 3,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-1",
                          children: "Arka Plan Rengi",
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex gap-2",
                          children: [
                            (0, a.jsx)("input", {
                              type: "color",
                              value: e.backgroundColor,
                              onChange: (l) =>
                                t({ ...e, backgroundColor: l.target.value }),
                              className: "h-10 w-10 rounded cursor-pointer",
                            }),
                            (0, a.jsx)("input", {
                              type: "text",
                              value: e.backgroundColor,
                              onChange: (l) =>
                                t({ ...e, backgroundColor: l.target.value }),
                              className:
                                "flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("label", {
                          className:
                            "block text-sm font-medium text-gray-700 mb-1",
                          children: "Yazi Rengi",
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex gap-2",
                          children: [
                            (0, a.jsx)("input", {
                              type: "color",
                              value: e.textColor,
                              onChange: (l) =>
                                t({ ...e, textColor: l.target.value }),
                              className: "h-10 w-10 rounded cursor-pointer",
                            }),
                            (0, a.jsx)("input", {
                              type: "text",
                              value: e.textColor,
                              onChange: (l) =>
                                t({ ...e, textColor: l.target.value }),
                              className:
                                "flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, a.jsx)("label", {
                      className: "text-sm font-medium text-gray-700",
                      children: "Link Goster",
                    }),
                    (0, a.jsx)("input", {
                      type: "checkbox",
                      checked: e.showLink,
                      onChange: (l) => t({ ...e, showLink: l.target.checked }),
                      className: "rounded",
                    }),
                  ],
                }),
                e.showLink &&
                  (0, a.jsxs)("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "Link URL",
                          }),
                          (0, a.jsx)("input", {
                            type: "url",
                            value: e.link,
                            onChange: (l) => t({ ...e, link: l.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "Link Metni",
                          }),
                          (0, a.jsx)("input", {
                            type: "text",
                            value: e.linkText,
                            onChange: (l) =>
                              t({ ...e, linkText: l.target.value }),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-3 pt-4",
                  children: [
                    (0, a.jsx)("button", {
                      onClick: d,
                      disabled: l,
                      className:
                        "bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors",
                      children: l ? "Kaydediliyor..." : "Kaydet",
                    }),
                    o &&
                      (0, a.jsx)("span", {
                        className: "text-sm text-green-600",
                        children: "Kaydedildi!",
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [441, 517, 358], () => t(9681)), (_N_E = e.O()));
  },
]);
