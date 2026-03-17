(() => {
  var e = {};
  ((e.id = 90),
    (e.ids = [90]),
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
      41968: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, {
            GlobalError: () => o.a,
            __next_app__: () => l,
            pages: () => u,
            routeModule: () => p,
            tree: () => c,
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
        let c = [
            "",
            {
              children: [
                "admin",
                {
                  children: [
                    "dashboard",
                    {
                      children: [
                        "events",
                        {
                          children: [
                            "new",
                            {
                              children: [
                                "__PAGE__",
                                {},
                                {
                                  page: [
                                    () =>
                                      Promise.resolve().then(t.bind(t, 57021)),
                                    "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/events/new/page.tsx",
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
                        () => Promise.resolve().then(t.bind(t, 82697)),
                        "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/layout.tsx",
                      ],
                    },
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(t.bind(t, 96038)),
                    "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/layout.tsx",
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
          u = [
            "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/events/new/page.tsx",
          ],
          l = { require: t, loadChunk: () => Promise.resolve() },
          p = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/admin/dashboard/events/new/page",
              pathname: "/admin/dashboard/events/new",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      13042: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 57021));
      },
      52954: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 33121));
      },
      33121: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => n }));
        var s = t(45512),
          a = t(50061);
        function n() {
          return (0, s.jsxs)("div", {
            children: [
              (0, s.jsx)("h1", {
                className: "text-2xl font-bold text-gray-900 mb-6",
                children: "Yeni Etkinlik Olustur",
              }),
              (0, s.jsx)(a.B, {}),
            ],
          });
        }
      },
      57021: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => s }));
        let s = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/events/new/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/events/new/page.tsx",
          "default",
        );
      },
    }));
  var r = require("../../../../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [994, 405, 531, 581, 434, 366], () => t(41968));
  module.exports = s;
})();
