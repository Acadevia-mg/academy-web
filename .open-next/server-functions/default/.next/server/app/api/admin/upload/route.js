(() => {
  var e = {};
  ((e.id = 805),
    (e.ids = [805]),
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
      42249: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            patchFetch: () => h,
            routeModule: () => p,
            serverHooks: () => x,
            workAsyncStorage: () => d,
            workUnitAsyncStorage: () => f,
          }));
        var n = {};
        (r.r(n), r.d(n, { POST: () => c }));
        var o = r(42706),
          a = r(28203),
          s = r(45994),
          i = r(39187),
          u = r(12072),
          l = r(56535);
        async function c(e) {
          if (!(await (0, u.g)(e)))
            return i.NextResponse.json(
              { error: "Unauthorized" },
              { status: 401 },
            );
          let t = await e.formData(),
            r = t.get("file"),
            n = t.get("path");
          if (!r || !n)
            return i.NextResponse.json(
              { error: "File and path are required" },
              { status: 400 },
            );
          if (!/^[\w-]+\/[\w-]+\/[\w.-]+$/.test(n))
            return i.NextResponse.json(
              { error: "Invalid path format" },
              { status: 400 },
            );
          if (r.size > 5242880)
            return i.NextResponse.json(
              { error: "File too large (max 5MB)" },
              { status: 400 },
            );
          let { env: o } = await (0, l.DM)(),
            a = o.ASSETS_BUCKET;
          await a.put(n, await r.arrayBuffer(), {
            httpMetadata: { contentType: r.type },
          });
          let s = "https://academy-assets.devmultigroup.com",
            c = s ? `${s}/${n}` : `/${n}`;
          return i.NextResponse.json({ url: c });
        }
        let p = new o.AppRouteRouteModule({
            definition: {
              kind: a.RouteKind.APP_ROUTE,
              page: "/api/admin/upload/route",
              pathname: "/api/admin/upload",
              filename: "route",
              bundlePath: "app/api/admin/upload/route",
            },
            resolvedPagePath:
              "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/api/admin/upload/route.ts",
            nextConfigOutput: "standalone",
            userland: n,
          }),
          { workAsyncStorage: d, workUnitAsyncStorage: f, serverHooks: x } = p;
        function h() {
          return (0, s.patchFetch)({
            workAsyncStorage: d,
            workUnitAsyncStorage: f,
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
        async function o() {
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
            o = await crypto.subtle.sign(
              "HMAC",
              r,
              new TextEncoder().encode(e),
            );
          return btoa(`${e}:${n(o)}`);
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
            let o = e.substring(0, r),
              a = e.substring(r + 1);
            if (Date.now() - parseInt(o) > 864e5) return !1;
            let s = process.env.ADMIN_SECRET_KEY;
            if (!s) return !1;
            let i = await crypto.subtle.importKey(
                "raw",
                new TextEncoder().encode(s),
                { name: "HMAC", hash: "SHA-256" },
                !1,
                ["sign"],
              ),
              u = await crypto.subtle.sign(
                "HMAC",
                i,
                new TextEncoder().encode(o),
              );
            return a === n(u);
          } catch {
            return !1;
          }
        }
        r.d(t, { e: () => o, g: () => a });
      },
      56535: (e, t, r) => {
        "use strict";
        r.d(t, { DM: () => o });
        let n = Symbol.for("__cloudflare-context__");
        function o(e = { async: !1 }) {
          return e.async
            ? s()
            : (function () {
                let e = a();
                if (e) return e;
                if (
                  (function () {
                    let e = globalThis;
                    return e.__NEXT_DATA__?.nextExport === !0;
                  })()
                )
                  throw Error(
                    "\n\nERROR: `getCloudflareContext` has been called in sync mode in either a static route or at the top level of a non-static one, both cases are not allowed but can be solved by either:\n  - make sure that the call is not at the top level and that the route is not static\n  - call `getCloudflareContext({async: true})` to use the `async` mode\n  - avoid calling `getCloudflareContext` in the route\n",
                  );
                throw Error(u);
              })();
        }
        function a() {
          return globalThis[n];
        }
        async function s() {
          let e = a();
          if (e) return e;
          {
            var t;
            let e = await i();
            return ((t = e), (globalThis[n] = t), e);
          }
        }
        async function i(e) {
          let { getPlatformProxy: t } = await import(
              `${"__wrangler".replaceAll("_", "")}`
            ),
            r = e?.environment ?? process.env.NEXT_DEV_WRANGLER_ENV,
            {
              env: n,
              cf: o,
              ctx: a,
            } = await t({ ...e, envFiles: [], environment: r });
          return { env: n, cf: o, ctx: a };
        }
        let u =
          '\n\nERROR: `getCloudflareContext` has been called without having called `initOpenNextCloudflareForDev` from the Next.js config file.\nYou should update your Next.js config file as shown below:\n\n   ```\n   // next.config.mjs\n\n   import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";\n\n   initOpenNextCloudflareForDev();\n\n   const nextConfig = { ... };\n   export default nextConfig;\n   ```\n\n';
      },
    }));
  var t = require("../../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [994, 452], () => r(42249));
  module.exports = n;
})();
