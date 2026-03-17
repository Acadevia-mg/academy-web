(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [209],
  {
    3123: (e, t, c) => {
      Promise.resolve().then(c.bind(c, 3388));
    },
    3388: (e, t, c) => {
      "use strict";
      (c.r(t), c.d(t, { default: () => n }));
      var a = c(5155),
        s = c(7847);
      function n() {
        return (0, a.jsxs)("div", {
          className:
            "min-h-screen flex flex-col items-center justify-center bg-black",
          children: [
            (0, a.jsx)("img", {
              src: (0, s.b8)("/images/logo/logo-small-white.webp"),
              alt: "Logo",
              className: "mb-8 w-16",
            }),
            (0, a.jsx)("div", {
              className:
                "w-48 h-px bg-gray-600 rounded-full overflow-hidden relative",
              children: (0, a.jsx)("div", {
                className: "h-full bg-white animate-loading",
              }),
            }),
          ],
        });
      }
    },
    7847: (e, t, c) => {
      "use strict";
      c.d(t, { AL: () => o, J_: () => n, b8: () => s, vw: () => a });
      let a = "https://academy-assets.devmultigroup.com";
      function s(e) {
        let t = e.replace(/^\/images\//, "");
        return t.startsWith("logo/")
          ? "".concat(a, "/shared/").concat(t)
          : "".concat(a, "/").concat(t);
      }
      function n(e, t, c) {
        return "".concat(a, "/").concat(e, "/").concat(t, "/").concat(c);
      }
      function o(e, t) {
        let c = t.split("/").pop() || t;
        return ""
          .concat(a, "/")
          .concat(e, "/")
          .concat(c.startsWith("organizers") ? "" : "organizers/")
          .concat(c);
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [441, 517, 358], () => t(3123)), (_N_E = e.O()));
  },
]);
