(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [698],
  {
    7056: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 7929));
    },
    6046: (e, t, s) => {
      "use strict";
      var r = s(6658);
      (s.o(r, "notFound") &&
        s.d(t, {
          notFound: function () {
            return r.notFound;
          },
        }),
        s.o(r, "usePathname") &&
          s.d(t, {
            usePathname: function () {
              return r.usePathname;
            },
          }),
        s.o(r, "useRouter") &&
          s.d(t, {
            useRouter: function () {
              return r.useRouter;
            },
          }));
    },
    7929: (e, t, s) => {
      "use strict";
      (s.r(t), s.d(t, { default: () => i }));
      var r = s(5155),
        a = s(2115),
        n = s(6046);
      function i() {
        let [e, t] = (0, a.useState)(""),
          [s, i] = (0, a.useState)(""),
          [o, l] = (0, a.useState)(!1),
          u = (0, n.useRouter)(),
          d = async (t) => {
            (t.preventDefault(), i(""), l(!0));
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
              u.push("/admin/dashboard");
            } catch (e) {
              i("Bir hata olustu");
            } finally {
              l(!1);
            }
          };
        return (0, r.jsx)("div", {
          className: "min-h-screen flex items-center justify-center bg-gray-50",
          children: (0, r.jsx)("div", {
            className: "w-full max-w-sm",
            children: (0, r.jsxs)("div", {
              className:
                "bg-white rounded-xl shadow-sm border border-gray-200 p-8",
              children: [
                (0, r.jsxs)("div", {
                  className: "text-center mb-8",
                  children: [
                    (0, r.jsx)("h1", {
                      className: "text-2xl font-bold text-gray-900",
                      children: "Developer MultiGroup",
                    }),
                    (0, r.jsx)("p", {
                      className: "text-gray-500 mt-1",
                      children: "Admin Panel",
                    }),
                  ],
                }),
                (0, r.jsxs)("form", {
                  onSubmit: d,
                  className: "space-y-4",
                  children: [
                    (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("label", {
                          htmlFor: "key",
                          className:
                            "block text-sm font-medium text-gray-700 mb-1",
                          children: "Admin Anahtari",
                        }),
                        (0, r.jsx)("input", {
                          id: "key",
                          type: "password",
                          value: e,
                          onChange: (e) => t(e.target.value),
                          className:
                            "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent",
                          placeholder: "Anahtarinizi girin",
                          required: !0,
                        }),
                      ],
                    }),
                    s &&
                      (0, r.jsx)("p", {
                        className: "text-sm text-red-600",
                        children: s,
                      }),
                    (0, r.jsx)("button", {
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
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(0, [441, 517, 358], () => t(7056)), (_N_E = e.O()));
  },
]);
