(() => {
  var e = {};
  ((e.id = 371),
    (e.ids = [371]),
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
      33554: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, {
            GlobalError: () => o.a,
            __next_app__: () => c,
            pages: () => p,
            routeModule: () => u,
            tree: () => l,
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
        let l = [
            "",
            {
              children: [
                "(pages)",
                {
                  children: [
                    "etkinlikler",
                    {
                      children: [
                        "[eventName]",
                        {
                          children: [
                            "__PAGE__",
                            {},
                            {
                              page: [
                                () => Promise.resolve().then(t.bind(t, 15944)),
                                "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/(pages)/etkinlikler/[eventName]/page.tsx",
                              ],
                            },
                          ],
                        },
                        {},
                      ],
                    },
                    {},
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
          p = [
            "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/(pages)/etkinlikler/[eventName]/page.tsx",
          ],
          c = { require: t, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/(pages)/etkinlikler/[eventName]/page",
              pathname: "/etkinlikler/[eventName]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      65929: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 15944));
      },
      56201: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 24500));
      },
      24500: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => l }));
        var s = t(45512),
          a = t(58009),
          n = t(79334),
          o = t(56584),
          i = t(8388),
          d = t(86278);
        function l({ params: e }) {
          (0, a.use)(e);
          let { setCurrentEvent: r } = (0, o.j)(),
            [t, l] = (0, a.useState)(void 0);
          return void 0 === t
            ? (0, s.jsx)(d.default, {})
            : ((t && !1 !== t.navigable) || (0, n.notFound)(),
              (0, s.jsx)(i.A, { event: t, hero: !1 }));
        }
      },
      15944: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => s }));
        let s = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/(pages)/etkinlikler/[eventName]/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/(pages)/etkinlikler/[eventName]/page.tsx",
          "default",
        );
      },
    }));
  var r = require("../../../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [994, 405, 531, 212, 738, 434, 969, 388], () => t(33554));
  module.exports = s;
})();
