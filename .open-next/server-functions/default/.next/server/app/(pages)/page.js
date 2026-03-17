(() => {
  var e = {};
  ((e.id = 562),
    (e.ids = [562]),
    (e.modules = {
      10846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      19121: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/action-async-storage.external.js");
      },
      3295: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");
      },
      29294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      63033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      33873: (e) => {
        "use strict";
        e.exports = require("path");
      },
      79551: (e) => {
        "use strict";
        e.exports = require("url");
      },
      10244: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, {
            GlobalError: () => o.a,
            __next_app__: () => p,
            pages: () => c,
            routeModule: () => l,
            tree: () => u,
          }));
        var s = t(70260),
          a = t(28203),
          n = t(25155),
          o = t.n(n),
          i = t(67292),
          d = {};
        for (let e in i)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (d[e] = () => i[e]);
        t.d(r, d);
        let u = [
            "",
            {
              children: [
                "(pages)",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 97053)),
                        "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/(pages)/page.tsx",
                      ],
                    },
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(t.bind(t, 67686)),
                    "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/(pages)/layout.tsx",
                  ],
                  forbidden: [
                    () => Promise.resolve().then(t.t.bind(t, 69116, 23)),
                    "next/dist/client/components/forbidden-error",
                  ],
                  unauthorized: [
                    () => Promise.resolve().then(t.t.bind(t, 41485, 23)),
                    "next/dist/client/components/unauthorized-error",
                  ],
                  metadata: {
                    icon: [
                      async (e) =>
                        (
                          await Promise.resolve().then(t.bind(t, 70440))
                        ).default(e),
                    ],
                    apple: [],
                    openGraph: [
                      async (e) =>
                        (
                          await Promise.resolve().then(t.bind(t, 93634))
                        ).default(e),
                    ],
                    twitter: [],
                    manifest: void 0,
                  },
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(t.bind(t, 71354)),
                "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/layout.tsx",
              ],
              loading: [
                () => Promise.resolve().then(t.bind(t, 21154)),
                "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/loading.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(t.bind(t, 50042)),
                "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/not-found.tsx",
              ],
              forbidden: [
                () => Promise.resolve().then(t.t.bind(t, 69116, 23)),
                "next/dist/client/components/forbidden-error",
              ],
              unauthorized: [
                () => Promise.resolve().then(t.t.bind(t, 41485, 23)),
                "next/dist/client/components/unauthorized-error",
              ],
              metadata: {
                icon: [
                  async (e) =>
                    (await Promise.resolve().then(t.bind(t, 70440))).default(e),
                ],
                apple: [],
                openGraph: [
                  async (e) =>
                    (await Promise.resolve().then(t.bind(t, 93634))).default(e),
                ],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          c = [
            "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/(pages)/page.tsx",
          ],
          p = { require: t, loadChunk: () => Promise.resolve() },
          l = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/(pages)/page",
              pathname: "/",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: u },
          });
      },
      42624: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 97053));
      },
      6176: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 92209));
      },
      92209: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => u }));
        var s = t(45512),
          a = t(9030),
          n = t(58009),
          o = t(56584),
          i = t(8388),
          d = t(86278);
        function u() {
          let [e, r] = (0, n.useState)(null),
            { setCurrentEvent: t } = (0, o.j)(),
            u = (0, n.useMemo)(() => (e ? (0, a.FX)(e) : null), [e]),
            c = (0, n.useMemo)(
              () => (e && e.length >= 2 ? (0, a.SG)(e) : void 0),
              [e],
            );
          return e
            ? u
              ? (0, s.jsx)(i.A, { event: u, previousEvent: c, hero: !0 })
              : (0, s.jsx)("div", {
                  className:
                    "min-h-screen flex items-center justify-center bg-gray-900 text-white",
                  children: (0, s.jsx)("p", {
                    children: "Etkinlik bulunamadı.",
                  }),
                })
            : (0, s.jsx)(d.default, {});
        }
      },
      97053: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => s }));
        let s = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/(pages)/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/(pages)/page.tsx",
          "default",
        );
      },
    }));
  var r = require("../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [994, 405, 531, 212, 738, 434, 969, 388], () => t(10244));
  module.exports = s;
})();
