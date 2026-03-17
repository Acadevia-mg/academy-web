(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [957],
  {
    3491: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 2606));
    },
    6046: (e, t, n) => {
      "use strict";
      var s = n(6658);
      (n.o(s, "notFound") &&
        n.d(t, {
          notFound: function () {
            return s.notFound;
          },
        }),
        n.o(s, "usePathname") &&
          n.d(t, {
            usePathname: function () {
              return s.usePathname;
            },
          }),
        n.o(s, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return s.useRouter;
            },
          }));
    },
    2606: (e, t, n) => {
      "use strict";
      (n.r(t), n.d(t, { default: () => i }));
      var s = n(5155),
        r = n(2115),
        a = n(6046);
      function i() {
        let [e, t] = (0, r.useState)([]),
          [n, i] = (0, r.useState)(!0),
          d = (0, a.useRouter)();
        return ((0, r.useEffect)(() => {
          fetch("/api/admin/events")
            .then((e) => e.json())
            .then((e) => {
              t(
                e.sort(
                  (e, t) =>
                    new Date(t.date).getTime() - new Date(e.date).getTime(),
                ),
              );
            })
            .catch(() => {})
            .finally(() => i(!1));
        }, []),
        n)
          ? (0, s.jsx)("div", {
              className: "flex items-center justify-center h-64",
              children: (0, s.jsx)("div", {
                className:
                  "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900",
              }),
            })
          : (0, s.jsxs)("div", {
              children: [
                (0, s.jsxs)("div", {
                  className: "flex items-center justify-between mb-6",
                  children: [
                    (0, s.jsx)("h1", {
                      className: "text-2xl font-bold text-gray-900",
                      children: "Etkinlikler",
                    }),
                    (0, s.jsx)("button", {
                      onClick: () => d.push("/admin/dashboard/events/new"),
                      className:
                        "bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors",
                      children: "+ Yeni Etkinlik",
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className: "space-y-3",
                  children: e.map((e) =>
                    (0, s.jsxs)(
                      "div",
                      {
                        className:
                          "bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between hover:shadow-sm transition-shadow",
                        children: [
                          (0, s.jsxs)("div", {
                            children: [
                              (0, s.jsx)("h3", {
                                className: "font-medium text-gray-900",
                                children: e.name,
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  "flex items-center gap-3 mt-1 text-sm text-gray-500",
                                children: [
                                  (0, s.jsx)("span", {
                                    children: new Date(
                                      e.date,
                                    ).toLocaleDateString("tr-TR", {
                                      day: "numeric",
                                      month: "long",
                                      year: "numeric",
                                    }),
                                  }),
                                  (0, s.jsx)("span", {
                                    children: e.location.name,
                                  }),
                                  !1 !== e.navigable &&
                                    (0, s.jsx)("span", {
                                      className:
                                        "bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs",
                                      children: "navigable",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsx)("button", {
                            onClick: () =>
                              d.push(
                                "/admin/dashboard/events/".concat(
                                  e.id,
                                  "/edit",
                                ),
                              ),
                            className:
                              "text-sm text-gray-600 hover:text-gray-900 font-medium px-3 py-1 rounded border border-gray-200 hover:border-gray-300 transition-colors",
                            children: "Duzenle",
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [441, 517, 358], () => t(3491)), (_N_E = e.O()));
  },
]);
