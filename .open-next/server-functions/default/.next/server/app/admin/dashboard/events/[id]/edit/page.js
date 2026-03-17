(() => {
  var e = {};
  ((e.id = 236),
    (e.ids = [236]),
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
      18976: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => u,
            pages: () => l,
            routeModule: () => p,
            tree: () => c,
          }));
        var a = t(70260),
          s = t(28203),
          n = t(25155),
          i = t.n(n),
          d = t(67292),
          o = {};
        for (let e in d)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (o[e] = () => d[e]);
        t.d(r, o);
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
                            "[id]",
                            {
                              children: [
                                "edit",
                                {
                                  children: [
                                    "__PAGE__",
                                    {},
                                    {
                                      page: [
                                        () =>
                                          Promise.resolve().then(
                                            t.bind(t, 68483),
                                          ),
                                        "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/events/[id]/edit/page.tsx",
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
          l = [
            "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/events/[id]/edit/page.tsx",
          ],
          u = { require: t, loadChunk: () => Promise.resolve() },
          p = new a.AppPageRouteModule({
            definition: {
              kind: s.RouteKind.APP_PAGE,
              page: "/admin/dashboard/events/[id]/edit/page",
              pathname: "/admin/dashboard/events/[id]/edit",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      73272: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 68483));
      },
      83e3: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 54711));
      },
      54711: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => i }));
        var a = t(45512),
          s = t(58009),
          n = t(50061);
        function i({ params: e }) {
          (0, s.use)(e);
          let [r, t] = (0, s.useState)(null),
            [i, d] = (0, s.useState)(!0);
          return i
            ? (0, a.jsx)("div", {
                className: "flex items-center justify-center h-64",
                children: (0, a.jsx)("div", {
                  className:
                    "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900",
                }),
              })
            : r
              ? (0, a.jsxs)("div", {
                  children: [
                    (0, a.jsxs)("h1", {
                      className: "text-2xl font-bold text-gray-900 mb-6",
                      children: ["Etkinlik Duzenle: ", r.name],
                    }),
                    (0, a.jsx)(n.B, { initialData: r }),
                  ],
                })
              : (0, a.jsx)("p", {
                  className: "text-gray-500",
                  children: "Etkinlik bulunamadi.",
                });
        }
      },
      68483: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => a }));
        let a = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/events/[id]/edit/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/events/[id]/edit/page.tsx",
          "default",
        );
      },
    }));
  var r = require("../../../../../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    a = r.X(0, [994, 405, 531, 581, 434, 366], () => t(18976));
  module.exports = a;
})();
