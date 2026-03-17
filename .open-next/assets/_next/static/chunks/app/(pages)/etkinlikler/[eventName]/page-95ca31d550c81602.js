(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [371],
  {
    7431: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 1384));
    },
    1384: (e, t, n) => {
      "use strict";
      (n.r(t), n.d(t, { default: () => r }));
      var a = n(5155),
        s = n(2115),
        u = n(6046),
        l = n(54),
        o = n(1397),
        c = n(3388);
      function r(e) {
        let { params: t } = e,
          n = (0, s.use)(t),
          { setCurrentEvent: r } = (0, l.j)(),
          [v, h] = (0, s.useState)(void 0);
        return ((0, s.useEffect)(() => {
          fetch("/api/events/".concat(n.eventName))
            .then((e) => (e.ok ? e.json() : null))
            .then((e) => {
              (h(e), e && r(e));
            })
            .catch(() => h(null));
        }, [n.eventName]),
        void 0 === v)
          ? (0, a.jsx)(c.default, {})
          : ((v && !1 !== v.navigable) || (0, u.notFound)(),
            (0, a.jsx)(o.A, { event: v, hero: !1 }));
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [346, 112, 397, 308, 889, 441, 517, 358], () => t(7431)),
      (_N_E = e.O()));
  },
]);
