(() => {
  var e = {};
  ((e.id = 698),
    (e.ids = [698]),
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
      62304: (e, r, t) => {
        "use strict";
        (t.r(r),
          t.d(r, {
            GlobalError: () => i.a,
            __next_app__: () => u,
            pages: () => c,
            routeModule: () => p,
            tree: () => l,
          }));
        var a = t(70260),
          s = t(28203),
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
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(t.bind(t, 17949)),
                        "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/page.tsx",
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
            "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/page.tsx",
          ],
          u = { require: t, loadChunk: () => Promise.resolve() },
          p = new a.AppPageRouteModule({
            definition: {
              kind: s.RouteKind.APP_PAGE,
              page: "/admin/page",
              pathname: "/admin",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      83752: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 17949));
      },
      70600: (e, r, t) => {
        Promise.resolve().then(t.bind(t, 96185));
      },
      96487: () => {},
      78335: () => {},
      96185: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => i }));
        var a = t(45512),
          s = t(58009),
          n = t(79334);
        function i() {
          let [e, r] = (0, s.useState)(""),
            [t, i] = (0, s.useState)(""),
            [o, d] = (0, s.useState)(!1),
            l = (0, n.useRouter)(),
            c = async (r) => {
              (r.preventDefault(), i(""), d(!0));
              try {
                if (
                  !(
                    await fetch("/api/admin/auth", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ key: e }),
                    })
                  ).ok
                ) {
                  i("Gecersiz anahtar");
                  return;
                }
                l.push("/admin/dashboard");
              } catch {
                i("Bir hata olustu");
              } finally {
                d(!1);
              }
            };
          return (0, a.jsx)("div", {
            className:
              "min-h-screen flex items-center justify-center bg-gray-50",
            children: (0, a.jsx)("div", {
              className: "w-full max-w-sm",
              children: (0, a.jsxs)("div", {
                className:
                  "bg-white rounded-xl shadow-sm border border-gray-200 p-8",
                children: [
                  (0, a.jsxs)("div", {
                    className: "text-center mb-8",
                    children: [
                      (0, a.jsx)("h1", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "Developer MultiGroup",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-gray-500 mt-1",
                        children: "Admin Panel",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("form", {
                    onSubmit: c,
                    className: "space-y-4",
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("label", {
                            htmlFor: "key",
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "Admin Anahtari",
                          }),
                          (0, a.jsx)("input", {
                            id: "key",
                            type: "password",
                            value: e,
                            onChange: (e) => r(e.target.value),
                            className:
                              "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent",
                            placeholder: "Anahtarinizi girin",
                            required: !0,
                          }),
                        ],
                      }),
                      t &&
                        (0, a.jsx)("p", {
                          className: "text-sm text-red-600",
                          children: t,
                        }),
                      (0, a.jsx)("button", {
                        type: "submit",
                        disabled: o,
                        className:
                          "w-full bg-gray-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors",
                        children: o ? "Giris yapiliyor..." : "Giris Yap",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          });
        }
      },
      96038: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => s }));
        var a = t(62740);
        function s({ children: e }) {
          return (0, a.jsx)("div", {
            className: "min-h-screen bg-gray-50",
            children: e,
          });
        }
      },
      17949: (e, r, t) => {
        "use strict";
        (t.r(r), t.d(r, { default: () => a }));
        let a = (0, t(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/page.tsx",
          "default",
        );
      },
    }));
  var r = require("../../webpack-runtime.js");
  r.C(e);
  var t = (e) => r((r.s = e)),
    a = r.X(0, [994, 405, 434], () => t(62304));
  module.exports = a;
})();
