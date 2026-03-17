(() => {
  var e = {};
  ((e.id = 197),
    (e.ids = [197]),
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
      42394: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => u,
            pages: () => c,
            routeModule: () => m,
            tree: () => l,
          }));
        var a = r(70260),
          s = r(28203),
          n = r(25155),
          o = r.n(n),
          i = r(67292),
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
        r.d(t, d);
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
                        "announcement",
                        {
                          children: [
                            "__PAGE__",
                            {},
                            {
                              page: [
                                () => Promise.resolve().then(r.bind(r, 28358)),
                                "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/announcement/page.tsx",
                              ],
                            },
                          ],
                        },
                        {},
                      ],
                    },
                    {
                      layout: [
                        () => Promise.resolve().then(r.bind(r, 82697)),
                        "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/layout.tsx",
                      ],
                    },
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(r.bind(r, 96038)),
                    "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/layout.tsx",
                  ],
                  metadata: {
                    icon: [
                      async (e) =>
                        (
                          await Promise.resolve().then(r.bind(r, 70440))
                        ).default(e),
                    ],
                    apple: [],
                    openGraph: [
                      async (e) =>
                        (
                          await Promise.resolve().then(r.bind(r, 93634))
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
                () => Promise.resolve().then(r.bind(r, 71354)),
                "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/layout.tsx",
              ],
              loading: [
                () => Promise.resolve().then(r.bind(r, 21154)),
                "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/loading.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.bind(r, 50042)),
                "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/not-found.tsx",
              ],
              forbidden: [
                () => Promise.resolve().then(r.t.bind(r, 69116, 23)),
                "next/dist/client/components/forbidden-error",
              ],
              unauthorized: [
                () => Promise.resolve().then(r.t.bind(r, 41485, 23)),
                "next/dist/client/components/unauthorized-error",
              ],
              metadata: {
                icon: [
                  async (e) =>
                    (await Promise.resolve().then(r.bind(r, 70440))).default(e),
                ],
                apple: [],
                openGraph: [
                  async (e) =>
                    (await Promise.resolve().then(r.bind(r, 93634))).default(e),
                ],
                twitter: [],
                manifest: void 0,
              },
            },
          ],
          c = [
            "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/announcement/page.tsx",
          ],
          u = { require: r, loadChunk: () => Promise.resolve() },
          m = new a.AppPageRouteModule({
            definition: {
              kind: s.RouteKind.APP_PAGE,
              page: "/admin/dashboard/announcement/page",
              pathname: "/admin/dashboard/announcement",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      17439: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 28358));
      },
      77687: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 87098));
      },
      89209: (e, t, r) => {
        (Promise.resolve().then(r.bind(r, 5303)),
          Promise.resolve().then(r.bind(r, 18483)));
      },
      25657: (e, t, r) => {
        (Promise.resolve().then(r.bind(r, 54659)),
          Promise.resolve().then(r.bind(r, 75623)));
      },
      96487: () => {},
      78335: () => {},
      87098: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => o }));
        var a = r(45512),
          s = r(58009);
        let n = {
          show: !1,
          text: "",
          backgroundColor: "#003B5C",
          textColor: "#FFFFFF",
          link: "",
          linkText: "",
          showLink: !1,
        };
        function o() {
          let [e, t] = (0, s.useState)(n),
            [r, o] = (0, s.useState)(!1),
            [i, d] = (0, s.useState)(!1),
            l = async () => {
              (o(!0), d(!1));
              try {
                (await fetch("/api/admin/announcement", {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(e),
                }),
                  d(!0),
                  setTimeout(() => d(!1), 2e3));
              } catch {
              } finally {
                o(!1);
              }
            };
          return (0, a.jsxs)("div", {
            children: [
              (0, a.jsx)("h1", {
                className: "text-2xl font-bold text-gray-900 mb-6",
                children: "Duyuru Yonetimi",
              }),
              e.show &&
                (0, a.jsxs)("div", {
                  className: "mb-6 p-3 rounded-lg text-center text-sm",
                  style: {
                    backgroundColor: e.backgroundColor,
                    color: e.textColor,
                  },
                  children: [
                    e.text,
                    e.showLink &&
                      e.link &&
                      (0, a.jsx)("a", {
                        href: e.link,
                        className: "ml-2 underline",
                        children: e.linkText || "Daha fazla",
                      }),
                  ],
                }),
              (0, a.jsxs)("div", {
                className:
                  "bg-white rounded-lg border border-gray-200 p-6 space-y-4",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, a.jsx)("label", {
                        className: "text-sm font-medium text-gray-700",
                        children: "Goster",
                      }),
                      (0, a.jsx)("input", {
                        type: "checkbox",
                        checked: e.show,
                        onChange: (r) => t({ ...e, show: r.target.checked }),
                        className: "rounded",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("label", {
                        className:
                          "block text-sm font-medium text-gray-700 mb-1",
                        children: "Metin",
                      }),
                      (0, a.jsx)("textarea", {
                        value: e.text,
                        onChange: (r) => t({ ...e, text: r.target.value }),
                        className:
                          "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                        rows: 3,
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "Arka Plan Rengi",
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex gap-2",
                            children: [
                              (0, a.jsx)("input", {
                                type: "color",
                                value: e.backgroundColor,
                                onChange: (r) =>
                                  t({ ...e, backgroundColor: r.target.value }),
                                className: "h-10 w-10 rounded cursor-pointer",
                              }),
                              (0, a.jsx)("input", {
                                type: "text",
                                value: e.backgroundColor,
                                onChange: (r) =>
                                  t({ ...e, backgroundColor: r.target.value }),
                                className:
                                  "flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        children: [
                          (0, a.jsx)("label", {
                            className:
                              "block text-sm font-medium text-gray-700 mb-1",
                            children: "Yazi Rengi",
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex gap-2",
                            children: [
                              (0, a.jsx)("input", {
                                type: "color",
                                value: e.textColor,
                                onChange: (r) =>
                                  t({ ...e, textColor: r.target.value }),
                                className: "h-10 w-10 rounded cursor-pointer",
                              }),
                              (0, a.jsx)("input", {
                                type: "text",
                                value: e.textColor,
                                onChange: (r) =>
                                  t({ ...e, textColor: r.target.value }),
                                className:
                                  "flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-3",
                    children: [
                      (0, a.jsx)("label", {
                        className: "text-sm font-medium text-gray-700",
                        children: "Link Goster",
                      }),
                      (0, a.jsx)("input", {
                        type: "checkbox",
                        checked: e.showLink,
                        onChange: (r) =>
                          t({ ...e, showLink: r.target.checked }),
                        className: "rounded",
                      }),
                    ],
                  }),
                  e.showLink &&
                    (0, a.jsxs)("div", {
                      className: "grid grid-cols-2 gap-4",
                      children: [
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-1",
                              children: "Link URL",
                            }),
                            (0, a.jsx)("input", {
                              type: "url",
                              value: e.link,
                              onChange: (r) =>
                                t({ ...e, link: r.target.value }),
                              className:
                                "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          children: [
                            (0, a.jsx)("label", {
                              className:
                                "block text-sm font-medium text-gray-700 mb-1",
                              children: "Link Metni",
                            }),
                            (0, a.jsx)("input", {
                              type: "text",
                              value: e.linkText,
                              onChange: (r) =>
                                t({ ...e, linkText: r.target.value }),
                              className:
                                "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm",
                            }),
                          ],
                        }),
                      ],
                    }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-3 pt-4",
                    children: [
                      (0, a.jsx)("button", {
                        onClick: l,
                        disabled: r,
                        className:
                          "bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-50 transition-colors",
                        children: r ? "Kaydediliyor..." : "Kaydet",
                      }),
                      i &&
                        (0, a.jsx)("span", {
                          className: "text-sm text-green-600",
                          children: "Kaydedildi!",
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      },
      54659: (e, t, r) => {
        "use strict";
        r.d(t, { AdminSidebar: () => i });
        var a = r(45512),
          s = r(28531),
          n = r.n(s),
          o = r(79334);
        function i() {
          let e = (0, o.usePathname)(),
            t = (0, o.useRouter)(),
            r = async () => {
              (await fetch("/api/admin/auth", { method: "DELETE" }),
                t.push("/admin"));
            };
          return (0, a.jsxs)("aside", {
            className:
              "w-60 bg-white border-r border-gray-200 min-h-screen flex flex-col",
            children: [
              (0, a.jsx)("div", {
                className: "p-6 border-b border-gray-200",
                children: (0, a.jsx)("h1", {
                  className: "text-lg font-bold text-gray-900",
                  children: "DMG Admin",
                }),
              }),
              (0, a.jsx)("nav", {
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
                ].map((t) => {
                  let r = e === t.href;
                  return (0, a.jsx)(
                    n(),
                    {
                      href: t.href,
                      prefetch: !1,
                      className: `block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${r ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"}`,
                      children: t.label,
                    },
                    t.href,
                  );
                }),
              }),
              (0, a.jsx)("div", {
                className: "p-4 border-t border-gray-200",
                children: (0, a.jsx)("button", {
                  onClick: r,
                  className:
                    "w-full px-4 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors text-left",
                  children: "Cikis",
                }),
              }),
            ],
          });
        }
      },
      75623: (e, t, r) => {
        "use strict";
        r.d(t, { AuthGuard: () => o });
        var a = r(45512),
          s = r(58009),
          n = r(79334);
        function o({ children: e }) {
          let [t, r] = (0, s.useState)(null);
          return ((0, n.useRouter)(), null === t)
            ? (0, a.jsx)("div", {
                className:
                  "min-h-screen flex items-center justify-center bg-gray-50",
                children: (0, a.jsx)("div", {
                  className:
                    "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900",
                }),
              })
            : t
              ? (0, a.jsx)(a.Fragment, { children: e })
              : null;
        }
      },
      28358: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => a }));
        let a = (0, r(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call the default export of \"/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/announcement/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/admin/dashboard/announcement/page.tsx",
          "default",
        );
      },
      82697: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => o }));
        var a = r(62740),
          s = r(18483),
          n = r(5303);
        function o({ children: e }) {
          return (0, a.jsx)(s.AuthGuard, {
            children: (0, a.jsxs)("div", {
              className: "flex min-h-screen",
              children: [
                (0, a.jsx)(n.AdminSidebar, {}),
                (0, a.jsx)("main", { className: "flex-1 p-6", children: e }),
              ],
            }),
          });
        }
      },
      96038: (e, t, r) => {
        "use strict";
        (r.r(t), r.d(t, { default: () => s }));
        var a = r(62740);
        function s({ children: e }) {
          return (0, a.jsx)("div", {
            className: "min-h-screen bg-gray-50",
            children: e,
          });
        }
      },
      5303: (e, t, r) => {
        "use strict";
        r.d(t, { AdminSidebar: () => a });
        let a = (0, r(46760).registerClientReference)(
          function () {
            throw Error(
              "Attempted to call AdminSidebar() from the server but AdminSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.",
            );
          },
          "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/components/admin/admin-sidebar.tsx",
          "AdminSidebar",
        );
      },
      18483: (e, t, r) => {
        "use strict";
        r.d(t, { AuthGuard: () => a });
        let a = (0, r(46760).registerClientReference)(
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
  var t = require("../../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [994, 405, 531, 434], () => r(42394));
  module.exports = a;
})();
