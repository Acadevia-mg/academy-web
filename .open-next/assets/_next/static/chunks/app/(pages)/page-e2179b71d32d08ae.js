(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [562],
  {
    5208: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 6193));
    },
    6193: (e, t, n) => {
      "use strict";
      (n.r(t), n.d(t, { default: () => o }));
      var r = n(5155),
        i = n(4130),
        a = n(2115),
        l = n(54),
        u = n(1397),
        s = n(3388);
      function o() {
        let [e, t] = (0, a.useState)(null),
          { setCurrentEvent: n } = (0, l.j)();
        (0, a.useEffect)(() => {
          fetch("/api/events")
            .then((e) => e.json())
            .then((e) => t(e))
            .catch(() => t([]));
        }, []);
        let o = (0, a.useMemo)(() => (e ? (0, i.FX)(e) : null), [e]),
          c = (0, a.useMemo)(
            () => (e && e.length >= 2 ? (0, i.SG)(e) : void 0),
            [e],
          );
        return ((0, a.useEffect)(() => {
          o && n(o);
        }, [o, n]),
        e)
          ? o
            ? (0, r.jsx)(u.A, { event: o, previousEvent: c, hero: !0 })
            : (0, r.jsx)("div", {
                className:
                  "min-h-screen flex items-center justify-center bg-gray-900 text-white",
                children: (0, r.jsx)("p", { children: "Etkinlik bulunamadı." }),
              })
          : (0, r.jsx)(s.default, {});
      }
    },
    4130: (e, t, n) => {
      "use strict";
      function r(e) {
        return new Date(e).toLocaleDateString("tr-TR", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
      }
      function i(e) {
        return e
          .slice()
          .sort(
            (e, t) => new Date(e.date).getTime() - new Date(t.date).getTime(),
          );
      }
      function a(e) {
        let t = i(e);
        return t[t.length - 1];
      }
      function l(e) {
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
      function u(e) {
        let t = i(e);
        return t[t.length - 2];
      }
      function s(e) {
        let t = e.filter((e) => !1 !== e.navigable);
        return 0 === t.length
          ? null
          : t.sort(
              (e, t) => new Date(t.date).getTime() - new Date(e.date).getTime(),
            )[0];
      }
      function o(e, t, n) {
        let r = t
          .trim()
          .toLowerCase()
          .replace(/[-\s]+/g, "-");
        return (
          e.find((e) => {
            var t;
            let i = e.name.trim().toLowerCase(),
              a = i.replace(/[-\s]?\d{4}$/, "").replace(/[-\s]+/g, "-"),
              l =
                null === (t = i.match(/(\d{4})$/)) || void 0 === t
                  ? void 0
                  : t[1];
            return a === r && l === n;
          }) || null
        );
      }
      n.d(t, {
        Cv: () => o,
        FX: () => s,
        Go: () => l,
        SG: () => u,
        WU: () => a,
        po: () => r,
      });
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [346, 112, 397, 308, 889, 441, 517, 358], () => t(5208)),
      (_N_E = e.O()));
  },
]);
