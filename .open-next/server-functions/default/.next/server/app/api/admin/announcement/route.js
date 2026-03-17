(() => {
  var e = {};
  ((e.id = 83),
    (e.ids = [83]),
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
      28688: (e, t, n) => {
        "use strict";
        (n.r(t),
          n.d(t, {
            patchFetch: () => _,
            routeModule: () => m,
            serverHooks: () => q,
            workAsyncStorage: () => N,
            workUnitAsyncStorage: () => k,
          }));
        var r = {};
        (n.r(r), n.d(r, { PUT: () => p }));
        var o = n(42706),
          i = n(28203),
          l = n(45994),
          a = n(39187),
          s = n(12072),
          d = n(43345),
          u = n(28474),
          c = n(47579);
        async function p(e) {
          if (!(await (0, s.g)(e)))
            return a.NextResponse.json(
              { error: "Unauthorized" },
              { status: 401 },
            );
          let t = await e.json(),
            n = await (0, d.L)(),
            r = await n.select().from(u.announcements).limit(1);
          return (
            r[0]
              ? await n
                  .update(u.announcements)
                  .set({
                    show: t.show,
                    text: t.text,
                    backgroundColor: t.backgroundColor,
                    textColor: t.textColor,
                    link: t.link || null,
                    linkText: t.linkText || null,
                    showLink: t.showLink,
                  })
                  .where((0, c.eq)(u.announcements.id, r[0].id))
              : await n
                  .insert(u.announcements)
                  .values({
                    show: t.show,
                    text: t.text,
                    backgroundColor: t.backgroundColor,
                    textColor: t.textColor,
                    link: t.link || null,
                    linkText: t.linkText || null,
                    showLink: t.showLink,
                  }),
            a.NextResponse.json({ success: !0 })
          );
        }
        let m = new o.AppRouteRouteModule({
            definition: {
              kind: i.RouteKind.APP_ROUTE,
              page: "/api/admin/announcement/route",
              pathname: "/api/admin/announcement",
              filename: "route",
              bundlePath: "app/api/admin/announcement/route",
            },
            resolvedPagePath:
              "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/api/admin/announcement/route.ts",
            nextConfigOutput: "standalone",
            userland: r,
          }),
          { workAsyncStorage: N, workUnitAsyncStorage: k, serverHooks: q } = m;
        function _() {
          return (0, l.patchFetch)({
            workAsyncStorage: N,
            workUnitAsyncStorage: k,
          });
        }
      },
      96487: () => {},
      78335: () => {},
      43345: (e, t, n) => {
        "use strict";
        n.d(t, { L: () => l });
        var r = n(57517),
          o = n(56535),
          i = n(28474);
        async function l() {
          let { env: e } = await (0, o.DM)();
          return (0, r.f)(e.DB, { schema: i });
        }
      },
      28474: (e, t, n) => {
        "use strict";
        (n.r(t),
          n.d(t, {
            afterMetrics: () => k,
            announcements: () => q,
            eventImages: () => m,
            events: () => a,
            initialMetrics: () => N,
            organizers: () => d,
            sessions: () => u,
            speakers: () => s,
            sponsors: () => c,
            tickets: () => p,
          }));
        var r = n(72319),
          o = n(47095),
          i = n(49190),
          l = n(61917);
        let a = (0, r.D)("events", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            navigable: (0, o.nd)("navigable", { mode: "boolean" }).default(!0),
            name: (0, i.Qq)("name").notNull(),
            heroDescription: (0, i.Qq)("hero_description").notNull(),
            cardDescription: (0, i.Qq)("card_description").notNull(),
            registerLink: (0, i.Qq)("register_link").notNull(),
            videoUrl: (0, i.Qq)("video_url"),
            date: (0, i.Qq)("date").notNull(),
            locationName: (0, i.Qq)("location_name").notNull(),
            locationSubtext: (0, i.Qq)("location_subtext").notNull(),
            locationLatitude: (0, l.x)("location_latitude"),
            locationLongitude: (0, l.x)("location_longitude"),
            colorPrimary: (0, i.Qq)("color_primary").notNull(),
            colorSecondary: (0, i.Qq)("color_secondary").notNull(),
            colorAccent: (0, i.Qq)("color_accent").notNull(),
            colorBackground: (0, i.Qq)("color_background").notNull(),
            colorText: (0, i.Qq)("color_text").notNull(),
          }),
          s = (0, r.D)("speakers", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => a.id, { onDelete: "cascade" }),
            fullName: (0, i.Qq)("full_name").notNull(),
            title: (0, i.Qq)("title").notNull(),
            company: (0, i.Qq)("company"),
            instagram: (0, i.Qq)("instagram"),
            linkedin: (0, i.Qq)("linkedin"),
            twitter: (0, i.Qq)("twitter"),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          d = (0, r.D)("organizers", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => a.id, { onDelete: "cascade" }),
            name: (0, i.Qq)("name").notNull(),
            designation: (0, i.Qq)("designation").notNull(),
            image: (0, i.Qq)("image").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          u = (0, r.D)("sessions", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => a.id, { onDelete: "cascade" }),
            room: (0, i.Qq)("room").notNull(),
            speakerName: (0, i.Qq)("speaker_name").notNull(),
            topic: (0, i.Qq)("topic"),
            startTime: (0, i.Qq)("start_time"),
            endTime: (0, i.Qq)("end_time"),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          c = (0, r.D)("sponsors", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => a.id, { onDelete: "cascade" }),
            tier: (0, i.Qq)("tier").notNull(),
            sponsorSlug: (0, i.Qq)("sponsor_slug").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          p = (0, r.D)("tickets", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => a.id, { onDelete: "cascade" }),
            type: (0, i.Qq)("type").notNull(),
            description: (0, i.Qq)("description").notNull(),
            price: (0, l.x)("price").notNull(),
            link: (0, i.Qq)("link").notNull(),
            perks: (0, i.Qq)("perks").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          m = (0, r.D)("event_images", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => a.id, { onDelete: "cascade" }),
            url: (0, i.Qq)("url").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          N = (0, r.D)("initial_metrics", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => a.id, { onDelete: "cascade" }),
            title: (0, i.Qq)("title").notNull(),
            value: (0, o.nd)("value").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          k = (0, r.D)("after_metrics", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => a.id, { onDelete: "cascade" }),
            applications: (0, i.Qq)("applications").notNull(),
            vipGuests: (0, i.Qq)("vip_guests").notNull(),
            supporter: (0, i.Qq)("supporter").notNull(),
            speakers: (0, i.Qq)("speakers_count").notNull(),
            workingParticipant: (0, i.Qq)("working_participant").notNull(),
            jobSeeker: (0, i.Qq)("job_seeker").notNull(),
            jobProvider: (0, i.Qq)("job_provider").notNull(),
            satisfaction: (0, i.Qq)("satisfaction").notNull(),
          }),
          q = (0, r.D)("announcements", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            show: (0, o.nd)("show", { mode: "boolean" }).notNull().default(!1),
            text: (0, i.Qq)("text").notNull(),
            backgroundColor: (0, i.Qq)("background_color").notNull(),
            textColor: (0, i.Qq)("text_color").notNull(),
            link: (0, i.Qq)("link"),
            linkText: (0, i.Qq)("link_text"),
            showLink: (0, o.nd)("show_link", { mode: "boolean" })
              .notNull()
              .default(!1),
          });
      },
      12072: (e, t, n) => {
        "use strict";
        function r(e) {
          return Array.from(new Uint8Array(e))
            .map((e) => e.toString(16).padStart(2, "0"))
            .join("");
        }
        async function o() {
          let e = Date.now().toString(),
            t = process.env.ADMIN_SECRET_KEY;
          if (!t) throw Error("ADMIN_SECRET_KEY not configured");
          let n = await crypto.subtle.importKey(
              "raw",
              new TextEncoder().encode(t),
              { name: "HMAC", hash: "SHA-256" },
              !1,
              ["sign"],
            ),
            o = await crypto.subtle.sign(
              "HMAC",
              n,
              new TextEncoder().encode(e),
            );
          return btoa(`${e}:${r(o)}`);
        }
        async function i(e) {
          let t = (function (e) {
            let t = {};
            return (
              e.split(";").forEach((e) => {
                let [n, ...r] = e.trim().split("=");
                n && (t[n] = r.join("="));
              }),
              t
            );
          })(e.headers.get("cookie") || "").admin_session;
          if (!t) return !1;
          try {
            let e = atob(t),
              n = e.indexOf(":");
            if (-1 === n) return !1;
            let o = e.substring(0, n),
              i = e.substring(n + 1);
            if (Date.now() - parseInt(o) > 864e5) return !1;
            let l = process.env.ADMIN_SECRET_KEY;
            if (!l) return !1;
            let a = await crypto.subtle.importKey(
                "raw",
                new TextEncoder().encode(l),
                { name: "HMAC", hash: "SHA-256" },
                !1,
                ["sign"],
              ),
              s = await crypto.subtle.sign(
                "HMAC",
                a,
                new TextEncoder().encode(o),
              );
            return i === r(s);
          } catch {
            return !1;
          }
        }
        n.d(t, { e: () => o, g: () => i });
      },
    }));
  var t = require("../../../../webpack-runtime.js");
  t.C(e);
  var n = (e) => t((t.s = e)),
    r = t.X(0, [994, 452, 519], () => n(28688));
  module.exports = r;
})();
