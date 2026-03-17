(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [236],
  {
    1504: (e, a, n) => {
      Promise.resolve().then(n.bind(n, 4981));
    },
    4981: (e, a, n) => {
      "use strict";
      (n.r(a), n.d(a, { default: () => l }));
      var t = n(5155),
        s = n(2115),
        i = n(9442);
      function l(e) {
        let { params: a } = e,
          n = (0, s.use)(a),
          [l, r] = (0, s.useState)(null),
          [d, c] = (0, s.useState)(!0);
        return ((0, s.useEffect)(() => {
          fetch("/api/admin/events/".concat(n.id))
            .then(
              async (e) =>
                (e.ok &&
                  (await fetch("/api/admin/events").then((e) => e.json())).find(
                    (e) => e.id === parseInt(n.id),
                  )) ||
                null,
            )
            .then((e) => r(e))
            .catch(() => r(null))
            .finally(() => c(!1));
        }, [n.id]),
        d)
          ? (0, t.jsx)("div", {
              className: "flex items-center justify-center h-64",
              children: (0, t.jsx)("div", {
                className:
                  "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900",
              }),
            })
          : l
            ? (0, t.jsxs)("div", {
                children: [
                  (0, t.jsxs)("h1", {
                    className: "text-2xl font-bold text-gray-900 mb-6",
                    children: ["Etkinlik Duzenle: ", l.name],
                  }),
                  (0, t.jsx)(i.B, { initialData: l }),
                ],
              })
            : (0, t.jsx)("p", {
                className: "text-gray-500",
                children: "Etkinlik bulunamadi.",
              });
      }
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    (e.O(0, [111, 998, 442, 441, 517, 358], () => a(1504)), (_N_E = e.O()));
  },
]);
