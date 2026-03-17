(() => {
  var e = {};
  ((e.id = 676),
    (e.ids = [676]),
    (e.modules = {
      10846: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      44870: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-route.runtime.prod.js");
      },
      29294: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-async-storage.external.js");
      },
      63033: (e) => {
        "use strict";
        e.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");
      },
      83725: (e) => {
        "use strict";
        e.exports = import("next/dist/compiled/@vercel/og/index.edge.js");
      },
      70225: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            patchFetch: () => m,
            routeModule: () => d,
            serverHooks: () => g,
            workAsyncStorage: () => l,
            workUnitAsyncStorage: () => p,
          }));
        var s = {};
        (r.r(s), r.d(s, { GET: () => u }));
        var o = r(42706),
          i = r(28203),
          n = r(45994),
          a = r(62740),
          c = r(693);
        async function u(e) {
          try {
            let { searchParams: t } = new URL(e.url),
              r = t.get("name") || "Event Name",
              s = t.get("location") || "Location",
              o = t.get("time") || "Event Time",
              i = t.get("color") || "#3b82f6",
              n = t.get("image") || "";
            return new c.f(
              (0, a.jsxs)("div", {
                style: {
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: i,
                  position: "relative",
                },
                children: [
                  (0, a.jsx)("div", {
                    style: {
                      position: "absolute",
                      top: 60,
                      left: 60,
                      fontSize: 60,
                      fontWeight: "bold",
                      color: "white",
                      maxWidth: "70%",
                      wordWrap: "break-word",
                    },
                    children: r,
                  }),
                  (0, a.jsx)("div", {
                    style: {
                      position: "absolute",
                      bottom: 60,
                      left: 60,
                      fontSize: 32,
                      color: "white",
                    },
                    children: s,
                  }),
                  (0, a.jsx)("div", {
                    style: {
                      position: "absolute",
                      top: 60,
                      right: 60,
                      fontSize: 32,
                      color: "white",
                    },
                    children: o,
                  }),
                  n &&
                    (0, a.jsx)("img", {
                      src: n,
                      style: {
                        position: "absolute",
                        bottom: 60,
                        right: 60,
                        width: 200,
                        height: 200,
                        objectFit: "cover",
                        borderRadius: 8,
                      },
                      alt: "Event image",
                    }),
                ],
              }),
              { width: 1200, height: 630 },
            );
          } catch (e) {
            return (
              console.error(`Error generating OG image: ${e.message}`),
              new Response("Failed to generate image", { status: 500 })
            );
          }
        }
        let d = new o.AppRouteRouteModule({
            definition: {
              kind: i.RouteKind.APP_ROUTE,
              page: "/api/og/route",
              pathname: "/api/og",
              filename: "route",
              bundlePath: "app/api/og/route",
            },
            resolvedPagePath:
              "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/api/og/route.tsx",
            nextConfigOutput: "standalone",
            userland: s,
          }),
          { workAsyncStorage: l, workUnitAsyncStorage: p, serverHooks: g } = d;
        function m() {
          return (0, n.patchFetch)({
            workAsyncStorage: l,
            workUnitAsyncStorage: p,
          });
        }
      },
      96487: () => {},
      78335: () => {},
      693: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "f", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
        class s extends Response {
          static #e = (this.displayName = "ImageResponse");
          constructor(...e) {
            let t = new ReadableStream({
                async start(t) {
                  let s = new (
                    await Promise.resolve().then(r.bind(r, 83725))
                  ).ImageResponse(...e);
                  if (!s.body) return t.close();
                  let o = s.body.getReader();
                  for (;;) {
                    let { done: e, value: r } = await o.read();
                    if (e) return t.close();
                    t.enqueue(r);
                  }
                },
              }),
              s = e[1] || {},
              o = new Headers({
                "content-type": "image/png",
                "cache-control":
                  "public, immutable, no-transform, max-age=31536000",
              });
            (s.headers && new Headers(s.headers).forEach((e, t) => o.set(t, e)),
              super(t, {
                headers: o,
                status: s.status,
                statusText: s.statusText,
              }));
          }
        }
      },
      62740: (e, t, r) => {
        "use strict";
        e.exports = r(70260).vendored["react-rsc"].ReactJsxRuntime;
      },
      42706: (e, t, r) => {
        "use strict";
        e.exports = r(44870);
      },
    }));
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [994], () => r(70225));
  module.exports = s;
})();
