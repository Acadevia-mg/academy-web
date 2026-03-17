(() => {
  var e = {};
  ((e.id = 404),
    (e.ids = [404]),
    (e.modules = {
      10846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      44870: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");
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
      6627: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            patchFetch: () => w,
            routeModule: () => l,
            serverHooks: () => h,
            workAsyncStorage: () => m,
            workUnitAsyncStorage: () => x,
          }));
        var n = {};
        (r.r(n), r.d(n, { DELETE: () => d, GET: () => p, POST: () => c }));
        var s = r(42706),
          a = r(28203),
          o = r(45994),
          i = r(39187),
          u = r(12072);
        async function c(e) {
          let { key: t } = await e.json();
          if (!t || t !== process.env.ADMIN_SECRET_KEY)
            return i.NextResponse.json(
              { error: "Invalid key" },
              { status: 401 },
            );
          let r = await (0, u.e)(),
            n = i.NextResponse.json({ success: !0 });
          return (
            n.cookies.set("admin_session", r, {
              httpOnly: !0,
              secure: !0,
              sameSite: "strict",
              maxAge: 86400,
              path: "/",
            }),
            n
          );
        }
        async function p(e) {
          return (await (0, u.g)(e))
            ? i.NextResponse.json({ authenticated: !0 })
            : i.NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        async function d() {
          let e = i.NextResponse.json({ success: !0 });
          return (
            e.cookies.set("admin_session", "", {
              httpOnly: !0,
              secure: !0,
              sameSite: "strict",
              maxAge: 0,
              path: "/",
            }),
            e
          );
        }
        let l = new s.AppRouteRouteModule({
            definition: {
              kind: a.RouteKind.APP_ROUTE,
              page: "/api/admin/auth/route",
              pathname: "/api/admin/auth",
              filename: "route",
              bundlePath: "app/api/admin/auth/route",
            },
            resolvedPagePath:
              "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/api/admin/auth/route.ts",
            nextConfigOutput: "standalone",
            userland: n,
          }),
          { workAsyncStorage: m, workUnitAsyncStorage: x, serverHooks: h } = l;
        function w() {
          return (0, o.patchFetch)({
            workAsyncStorage: m,
            workUnitAsyncStorage: x,
          });
        }
      },
      96487: () => {},
      78335: () => {},
      12072: (e, t, r) => {
        "use strict";
        function n(e) {
          return Array.from(new Uint8Array(e))
            .map((e) => e.toString(16).padStart(2, "0"))
            .join("");
        }
        async function s() {
          let e = Date.now().toString(),
            t = process.env.ADMIN_SECRET_KEY;
          if (!t) throw Error("ADMIN_SECRET_KEY not configured");
          let r = await crypto.subtle.importKey(
              "raw",
              new TextEncoder().encode(t),
              { name: "HMAC", hash: "SHA-256" },
              !1,
              ["sign"],
            ),
            s = await crypto.subtle.sign(
              "HMAC",
              r,
              new TextEncoder().encode(e),
            );
          return btoa(`${e}:${n(s)}`);
        }
        async function a(e) {
          let t = (function (e) {
            let t = {};
            return (
              e.split(";").forEach((e) => {
                let [r, ...n] = e.trim().split("=");
                r && (t[r] = n.join("="));
              }),
              t
            );
          })(e.headers.get("cookie") || "").admin_session;
          if (!t) return !1;
          try {
            let e = atob(t),
              r = e.indexOf(":");
            if (-1 === r) return !1;
            let s = e.substring(0, r),
              a = e.substring(r + 1);
            if (Date.now() - parseInt(s) > 864e5) return !1;
            let o = process.env.ADMIN_SECRET_KEY;
            if (!o) return !1;
            let i = await crypto.subtle.importKey(
                "raw",
                new TextEncoder().encode(o),
                { name: "HMAC", hash: "SHA-256" },
                !1,
                ["sign"],
              ),
              u = await crypto.subtle.sign(
                "HMAC",
                i,
                new TextEncoder().encode(s),
              );
            return a === n(u);
          } catch {
            return !1;
          }
        }
        r.d(t, { e: () => s, g: () => a });
      },
    }));
  var t = require("../../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [994, 452], () => r(6627));
  module.exports = n;
})();
