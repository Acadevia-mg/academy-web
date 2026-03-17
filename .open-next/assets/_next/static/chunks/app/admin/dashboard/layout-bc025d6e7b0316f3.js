(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [894],
  {
    6519: (e, t, r) => {
      (Promise.resolve().then(r.bind(r, 9215)),
        Promise.resolve().then(r.bind(r, 33)));
    },
    6046: (e, t, r) => {
      "use strict";
      var n = r(6658);
      (r.o(n, "notFound") &&
        r.d(t, {
          notFound: function () {
            return n.notFound;
          },
        }),
        r.o(n, "usePathname") &&
          r.d(t, {
            usePathname: function () {
              return n.usePathname;
            },
          }),
        r.o(n, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }));
    },
    5353: (e, t, r) => {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }));
      let n = r(2115);
      function u(e, t) {
        let r = (0, n.useRef)(() => {}),
          u = (0, n.useRef)(() => {});
        return (0, n.useMemo)(
          () =>
            e && t
              ? (n) => {
                  null === n
                    ? (r.current(), u.current())
                    : ((r.current = a(e, n)), (u.current = a(t, n)));
                }
              : e || t,
          [e, t],
        );
      }
      function a(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9215: (e, t, r) => {
      "use strict";
      r.d(t, { AdminSidebar: () => l });
      var n = r(5155),
        u = r(8173),
        a = r.n(u),
        s = r(6046);
      function l() {
        let e = (0, s.usePathname)(),
          t = (0, s.useRouter)(),
          r = async () => {
            (await fetch("/api/admin/auth", { method: "DELETE" }),
              t.push("/admin"));
          };
        return (0, n.jsxs)("aside", {
          className:
            "w-60 bg-white border-r border-gray-200 min-h-screen flex flex-col",
          children: [
            (0, n.jsx)("div", {
              className: "p-6 border-b border-gray-200",
              children: (0, n.jsx)("h1", {
                className: "text-lg font-bold text-gray-900",
                children: "DMG Admin",
              }),
            }),
            (0, n.jsx)("nav", {
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
                return (0, n.jsx)(
                  a(),
                  {
                    href: t.href,
                    prefetch: !1,
                    className:
                      "block px-4 py-2 rounded-lg text-sm font-medium transition-colors ".concat(
                        r
                          ? "bg-gray-900 text-white"
                          : "text-gray-600 hover:bg-gray-100",
                      ),
                    children: t.label,
                  },
                  t.href,
                );
              }),
            }),
            (0, n.jsx)("div", {
              className: "p-4 border-t border-gray-200",
              children: (0, n.jsx)("button", {
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
    33: (e, t, r) => {
      "use strict";
      r.d(t, { AuthGuard: () => s });
      var n = r(5155),
        u = r(2115),
        a = r(6046);
      function s(e) {
        let { children: t } = e,
          [r, s] = (0, u.useState)(null),
          l = (0, a.useRouter)();
        return ((0, u.useEffect)(() => {
          fetch("/api/admin/auth")
            .then((e) => {
              if (!e.ok) throw Error();
              s(!0);
            })
            .catch(() => l.push("/admin"));
        }, [l]),
        null === r)
          ? (0, n.jsx)("div", {
              className:
                "min-h-screen flex items-center justify-center bg-gray-50",
              children: (0, n.jsx)("div", {
                className:
                  "animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900",
              }),
            })
          : r
            ? (0, n.jsx)(n.Fragment, { children: t })
            : null;
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [173, 441, 517, 358], () => t(6519)), (_N_E = e.O()));
  },
]);
