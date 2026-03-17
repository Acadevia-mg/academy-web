(() => {
  var e = {};
  ((e.id = 957),
    (e.ids = [957]),
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
      26850: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => u,
            pages: () => c,
            routeModule: () => m,
            tree: () => l,
          }));
        var s = t(70260),
          a = t(28203),
          n = t(25155),
          i = t.n(n),
          o = t(67292),
          d = {};
        for (let e in o)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (d[e] = () => o[e]);
        t.d(r, d);
        let l = [
            "",
            {
              children: [
                "admin",
                {
                  children: [
                    "dashboard",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(t.bind(t, 18142)),
                            "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/page.tsx",
                          ],
                        },
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
          c = [
            "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/page.tsx",
          ],
          u = { require: t, loadChunk: () => Promise.resolve() },
          m = new s.AppPageRouteModule({
            definition: {
              kind: a.RouteKind.APP_PAGE,
              page: "/admin/dashboard/page",
              pathname: "/admin/dashboard",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      85829: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 18142));
      },
      15333: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 50130));
      },
      89209: (e, r, t) => {
        (Promise.resolve().then(t.bind(t, 5303)),
          Promise.resolve().then(t.bind(t, 18483)));
      },
      25657: (e, r, t) => {
        (Promise.resolve().then(t.bind(t, 54659)),
          Promise.resolve().then(t.bind(t, 75623)));
      },
      96487: () => {},
      78335: () => {},
      50130: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => i }));
        var s = t(45512),
          a = t(58009),
          n = t(79334);
        function i() {
          let [e, r] = (0, a.useState)([]),
            [t, i] = (0, a.useState)(!0),
            o = (0, n.useRouter)();
          return t
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
                        onClick: () => o.push("/admin/dashboard/events/new"),
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
                                o.push(`/admin/dashboard/events/${e.id}/edit`),
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
      54659: (e, r, t) => {
        "use strict";
        t.d(r, { AdminSidebar: () => o });
        var s = t(45512),
          a = t(28531),
          n = t.n(a),
          i = t(79334);
        function o() {
          let e = (0, i.usePathname)(),
            r = (0, i.useRouter)(),
            t = async () => {
              (await fetch("/api/admin/auth", { method: "DELETE" }),
                r.push("/admin"));
            };
          return (0, s.jsxs)("aside", {
            className:
              "w-60 bg-white border-r border-gray-200 min-h-screen flex flex-col",
            children: [
              (0, s.jsx)("div", {
                className: "p-6 border-b border-gray-200",
                children: (0, s.jsx)("h1", {
                  className: "text-lg font-bold text-gray-900",
                  children: "DMG Admin",
                }),
              }),
              (0, s.jsx)("nav", {
                className: "flex-1 p-4 space-y-1",
                children: [
                  {
                    href: "/admin/dashboard",
                    label: "Etkinlikler",
                    icon: "list",
                  },
                  {
                    href: "/admin/dashboard/announcement",
                    label: "Duyuru",
                    icon: "megaphone",
                  },
                ].map((r) => {
                  let t = e === r.href;
                  return (0, s.jsx)(
                    n(),
                    {
                      href: r.href,
                      prefetch: !1,
                      className: `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${t ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"}`,
                      children: r.label,
                    },
                    r.href,
                  );
                }),
              }),
              (0, s.jsx)("div", {
                className: "p-4 border-t border-gray-200",
                children: (0, s.jsx)("button", {
                  onClick: t,
                  className:
                    "w-full px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left",
                  children: "Cikis",
                }),
              }),
            ],
          });
        }
      },
      75623: (e, r, t) => {
        "use strict";
        t.d(r, { AuthGuard: () => i });
        var s = t(45512),
          a = t(58009),
          n = t(79334);
        function i({ children: e }) {
          let [r, t] = (0, a.useState)(null);
          return ((0, n.useRouter)(), null === r)
            ? (0, s.jsx)("div", {
                className:
                  "min-h-screen flex items-center justify-center bg-gray-50",
                children: (0, s.jsx)("div", {
                  className:
                    "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900",
                }),
              })
            : r
              ? (0, s.jsx)(s.Fragment, { children: e })
              : null;
        }
      },
      82697: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => i }));
        var s = t(62740),
          a = t(18483),
          n = t(5303);
        function i({ children: e }) {
          return (0, s.jsx)(a.AuthGuard, {
            children: (0, s.jsxs)("div", {
              className: "flex min-h-screen",
              children: [
                (0, s.jsx)(n.AdminSidebar, {}),
                (0, s.jsx)("main", { className: "flex-1 p-6", children: e }),
              ],
            }),
          });
        }
      },
      18142: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => s }));
        let s = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/page.tsx",
          "default",
        );
      },
      96038: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => a }));
        var s = t(62740);
        function a({ children: e }) {
          return (0, s.jsx)("div", {
            className: "min-h-screen bg-gray-50",
            children: e,
          });
        }
      },
      5303: (e, r, t) => {
        "use strict";
        t.d(r, { AdminSidebar: () => s });
        let s = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call AdminSidebar() from the server but AdminSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/components/admin/admin-sidebar.tsx",
          "AdminSidebar",
        );
      },
      18483: (e, r, t) => {
        "use strict";
        t.d(r, { AuthGuard: () => s });
        let s = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call AuthGuard() from the server but AuthGuard is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/components/admin/auth-guard.tsx",
          "AuthGuard",
        );
      },
    }));
  var r = require("../../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    s = r.X(0, [994, 405, 531, 434], () => t(26850));
  module.exports = s;
})();
