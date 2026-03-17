(() => {
  var e = {};
  ((e.id = 797),
    (e.ids = [797]),
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
      10955: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            patchFetch: () => w,
            routeModule: () => g,
            serverHooks: () => k,
            workAsyncStorage: () => N,
            workUnitAsyncStorage: () => f,
          }));
        var n = {};
        (r.r(n), r.d(n, { DELETE: () => v, GET: () => p, PUT: () => m }));
        var o = r(42706),
          i = r(28203),
          s = r(45994),
          a = r(39187),
          l = r(12072),
          d = r(43345),
          c = r(28474),
          u = r(47579);
        async function p(e, { params: t }) {
          if (!(await (0, l.g)(e)))
            return a.NextResponse.json(
              { error: "Unauthorized" },
              { status: 401 },
            );
          let { id: r } = await t,
            n = parseInt(r),
            o = await (0, d.L)(),
            i = await o
              .select()
              .from(c.events)
              .where((0, u.eq)(c.events.id, n))
              .limit(1);
          return i[0]
            ? a.NextResponse.json(i[0])
            : a.NextResponse.json({ error: "Not found" }, { status: 404 });
        }
        async function m(e, { params: t }) {
          if (!(await (0, l.g)(e)))
            return a.NextResponse.json(
              { error: "Unauthorized" },
              { status: 401 },
            );
          let { id: r } = await t,
            n = parseInt(r),
            o = await e.json(),
            i = await (0, d.L)();
          return (
            await i
              .update(c.events)
              .set({
                navigable: o.navigable ?? !0,
                name: o.name,
                heroDescription: o.heroDescription,
                cardDescription: o.cardDescription,
                registerLink: o.registerLink,
                videoUrl: o.videoUrl || null,
                date: o.date,
                locationName: o.location.name,
                locationSubtext: o.location.subtext,
                locationLatitude: o.location.latitude || null,
                locationLongitude: o.location.longitude || null,
                colorPrimary: o.colorPalette.primary,
                colorSecondary: o.colorPalette.secondary,
                colorAccent: o.colorPalette.accent,
                colorBackground: o.colorPalette.background,
                colorText: o.colorPalette.text,
              })
              .where((0, u.eq)(c.events.id, n)),
            await Promise.all([
              i.delete(c.speakers).where((0, u.eq)(c.speakers.eventId, n)),
              i.delete(c.organizers).where((0, u.eq)(c.organizers.eventId, n)),
              i.delete(c.sessions).where((0, u.eq)(c.sessions.eventId, n)),
              i.delete(c.sponsors).where((0, u.eq)(c.sponsors.eventId, n)),
              i.delete(c.tickets).where((0, u.eq)(c.tickets.eventId, n)),
              i
                .delete(c.eventImages)
                .where((0, u.eq)(c.eventImages.eventId, n)),
              i
                .delete(c.initialMetrics)
                .where((0, u.eq)(c.initialMetrics.eventId, n)),
              i
                .delete(c.afterMetrics)
                .where((0, u.eq)(c.afterMetrics.eventId, n)),
            ]),
            o.speakers?.length &&
              (await i
                .insert(c.speakers)
                .values(
                  o.speakers.map((e, t) => ({
                    eventId: n,
                    fullName: e.fullName,
                    title: e.title,
                    company: e.company || null,
                    instagram: e.instagram || null,
                    linkedin: e.linkedin || null,
                    twitter: e.twitter || null,
                    sortOrder: t,
                  })),
                )),
            o.organizers?.length &&
              (await i
                .insert(c.organizers)
                .values(
                  o.organizers.map((e, t) => ({
                    eventId: n,
                    name: e.name,
                    designation: e.designation,
                    image: e.image,
                    sortOrder: t,
                  })),
                )),
            o.sessions?.length &&
              (await i
                .insert(c.sessions)
                .values(
                  o.sessions.map((e, t) => ({
                    eventId: n,
                    room: e.room,
                    speakerName: e.speakerName,
                    topic: e.topic || null,
                    startTime: e.startTime || null,
                    endTime: e.endTime || null,
                    sortOrder: t,
                  })),
                )),
            o.sponsors?.length &&
              (await i
                .insert(c.sponsors)
                .values(
                  o.sponsors.map((e, t) => ({
                    eventId: n,
                    tier: e.tier,
                    sponsorSlug: e.sponsorSlug,
                    sortOrder: t,
                  })),
                )),
            o.tickets?.length &&
              (await i
                .insert(c.tickets)
                .values(
                  o.tickets.map((e, t) => ({
                    eventId: n,
                    type: e.type,
                    description: e.description,
                    price: e.price,
                    link: e.link,
                    perks: JSON.stringify(e.perks),
                    sortOrder: t,
                  })),
                )),
            o.images?.length &&
              (await i
                .insert(c.eventImages)
                .values(
                  o.images.map((e, t) => ({
                    eventId: n,
                    url: e,
                    sortOrder: t,
                  })),
                )),
            o.initialMetrics?.length &&
              (await i
                .insert(c.initialMetrics)
                .values(
                  o.initialMetrics.map((e, t) => ({
                    eventId: n,
                    title: e.title,
                    value: e.value,
                    sortOrder: t,
                  })),
                )),
            o.afterMetrics &&
              (await i
                .insert(c.afterMetrics)
                .values({
                  eventId: n,
                  applications: o.afterMetrics.applications,
                  vipGuests: o.afterMetrics.vipGuests,
                  supporter: o.afterMetrics.supporter,
                  speakers: o.afterMetrics.speakers,
                  workingParticipant: o.afterMetrics.workingParticipant,
                  jobSeeker: o.afterMetrics.jobSeeker,
                  jobProvider: o.afterMetrics.jobProvider,
                  satisfaction: o.afterMetrics.satisfaction,
                })),
            a.NextResponse.json({ success: !0 })
          );
        }
        async function v(e, { params: t }) {
          if (!(await (0, l.g)(e)))
            return a.NextResponse.json(
              { error: "Unauthorized" },
              { status: 401 },
            );
          let { id: r } = await t,
            n = parseInt(r),
            o = await (0, d.L)();
          return (
            await o.delete(c.events).where((0, u.eq)(c.events.id, n)),
            a.NextResponse.json({ success: !0 })
          );
        }
        let g = new o.AppRouteRouteModule({
            definition: {
              kind: i.RouteKind.APP_ROUTE,
              page: "/api/admin/events/[id]/route",
              pathname: "/api/admin/events/[id]",
              filename: "route",
              bundlePath: "app/api/admin/events/[id]/route",
            },
            resolvedPagePath:
              "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/api/admin/events/[id]/route.ts",
            nextConfigOutput: "standalone",
            userland: n,
          }),
          { workAsyncStorage: N, workUnitAsyncStorage: f, serverHooks: k } = g;
        function w() {
          return (0, s.patchFetch)({
            workAsyncStorage: N,
            workUnitAsyncStorage: f,
          });
        }
      },
      96487: () => {},
      78335: () => {},
      43345: (e, t, r) => {
        "use strict";
        r.d(t, { L: () => s });
        var n = r(57517),
          o = r(56535),
          i = r(28474);
        async function s() {
          let { env: e } = await (0, o.DM)();
          return (0, n.f)(e.DB, { schema: i });
        }
      },
      28474: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            afterMetrics: () => g,
            announcements: () => N,
            eventImages: () => m,
            events: () => a,
            initialMetrics: () => v,
            organizers: () => d,
            sessions: () => c,
            speakers: () => l,
            sponsors: () => u,
            tickets: () => p,
          }));
        var n = r(72319),
          o = r(47095),
          i = r(49190),
          s = r(61917);
        let a = (0, n.D)("events", {
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
            locationLatitude: (0, s.x)("location_latitude"),
            locationLongitude: (0, s.x)("location_longitude"),
            colorPrimary: (0, i.Qq)("color_primary").notNull(),
            colorSecondary: (0, i.Qq)("color_secondary").notNull(),
            colorAccent: (0, i.Qq)("color_accent").notNull(),
            colorBackground: (0, i.Qq)("color_background").notNull(),
            colorText: (0, i.Qq)("color_text").notNull(),
          }),
          l = (0, n.D)("speakers", {
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
          d = (0, n.D)("organizers", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => a.id, { onDelete: "cascade" }),
            name: (0, i.Qq)("name").notNull(),
            designation: (0, i.Qq)("designation").notNull(),
            image: (0, i.Qq)("image").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          c = (0, n.D)("sessions", {
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
          u = (0, n.D)("sponsors", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => a.id, { onDelete: "cascade" }),
            tier: (0, i.Qq)("tier").notNull(),
            sponsorSlug: (0, i.Qq)("sponsor_slug").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          p = (0, n.D)("tickets", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => a.id, { onDelete: "cascade" }),
            type: (0, i.Qq)("type").notNull(),
            description: (0, i.Qq)("description").notNull(),
            price: (0, s.x)("price").notNull(),
            link: (0, i.Qq)("link").notNull(),
            perks: (0, i.Qq)("perks").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          m = (0, n.D)("event_images", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => a.id, { onDelete: "cascade" }),
            url: (0, i.Qq)("url").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          v = (0, n.D)("initial_metrics", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => a.id, { onDelete: "cascade" }),
            title: (0, i.Qq)("title").notNull(),
            value: (0, o.nd)("value").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          g = (0, n.D)("after_metrics", {
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
          N = (0, n.D)("announcements", {
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
        async function i(e) {
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
              i = e.substring(r + 1);
            if (Date.now() - parseInt(o) > 864e5) return !1;
            let s = process.env.ADMIN_SECRET_KEY;
            if (!s) return !1;
            let a = await crypto.subtle.importKey(
                "raw",
                new TextEncoder().encode(s),
                { name: "HMAC", hash: "SHA-256" },
                !1,
                ["sign"],
              ),
              l = await crypto.subtle.sign(
                "HMAC",
                a,
                new TextEncoder().encode(o),
              );
            return i === n(l);
          } catch {
            return !1;
          }
        }
        r.d(t, { e: () => o, g: () => i });
      },
    }));
  var t = require("../../../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [994, 452, 519], () => r(10955));
  module.exports = n;
})();
