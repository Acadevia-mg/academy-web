(() => {
  var e = {};
  ((e.id = 621),
    (e.ids = [621]),
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
      84887: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            patchFetch: () => N,
            routeModule: () => g,
            serverHooks: () => f,
            workAsyncStorage: () => v,
            workUnitAsyncStorage: () => k,
          }));
        var n = {};
        (r.r(n), r.d(n, { GET: () => p, POST: () => m }));
        var i = r(42706),
          o = r(28203),
          a = r(45994),
          s = r(39187),
          l = r(12072),
          d = r(43345),
          c = r(61995),
          u = r(28474);
        async function p(e) {
          if (!(await (0, l.g)(e)))
            return s.NextResponse.json(
              { error: "Unauthorized" },
              { status: 401 },
            );
          let t = await (0, c.l$)();
          return s.NextResponse.json(t);
        }
        async function m(e) {
          if (!(await (0, l.g)(e)))
            return s.NextResponse.json(
              { error: "Unauthorized" },
              { status: 401 },
            );
          let t = await e.json(),
            r = await (0, d.L)(),
            n = (
              await r
                .insert(u.events)
                .values({
                  navigable: t.navigable ?? !0,
                  name: t.name,
                  heroDescription: t.heroDescription,
                  cardDescription: t.cardDescription,
                  registerLink: t.registerLink,
                  videoUrl: t.videoUrl || null,
                  date: t.date,
                  locationName: t.location.name,
                  locationSubtext: t.location.subtext,
                  locationLatitude: t.location.latitude || null,
                  locationLongitude: t.location.longitude || null,
                  colorPrimary: t.colorPalette.primary,
                  colorSecondary: t.colorPalette.secondary,
                  colorAccent: t.colorPalette.accent,
                  colorBackground: t.colorPalette.background,
                  colorText: t.colorPalette.text,
                })
                .returning({ id: u.events.id })
            )[0].id;
          return (
            t.speakers?.length &&
              (await r
                .insert(u.speakers)
                .values(
                  t.speakers.map((e, t) => ({
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
            t.organizers?.length &&
              (await r
                .insert(u.organizers)
                .values(
                  t.organizers.map((e, t) => ({
                    eventId: n,
                    name: e.name,
                    designation: e.designation,
                    image: e.image,
                    sortOrder: t,
                  })),
                )),
            t.sessions?.length &&
              (await r
                .insert(u.sessions)
                .values(
                  t.sessions.map((e, t) => ({
                    eventId: n,
                    room: e.room,
                    speakerName: e.speakerName,
                    topic: e.topic || null,
                    startTime: e.startTime || null,
                    endTime: e.endTime || null,
                    sortOrder: t,
                  })),
                )),
            t.sponsors?.length &&
              (await r
                .insert(u.sponsors)
                .values(
                  t.sponsors.map((e, t) => ({
                    eventId: n,
                    tier: e.tier,
                    sponsorSlug: e.sponsorSlug,
                    sortOrder: t,
                  })),
                )),
            t.tickets?.length &&
              (await r
                .insert(u.tickets)
                .values(
                  t.tickets.map((e, t) => ({
                    eventId: n,
                    type: e.type,
                    description: e.description,
                    price: e.price,
                    link: e.link,
                    perks: JSON.stringify(e.perks),
                    sortOrder: t,
                  })),
                )),
            t.images?.length &&
              (await r
                .insert(u.eventImages)
                .values(
                  t.images.map((e, t) => ({
                    eventId: n,
                    url: e,
                    sortOrder: t,
                  })),
                )),
            t.initialMetrics?.length &&
              (await r
                .insert(u.initialMetrics)
                .values(
                  t.initialMetrics.map((e, t) => ({
                    eventId: n,
                    title: e.title,
                    value: e.value,
                    sortOrder: t,
                  })),
                )),
            t.afterMetrics &&
              (await r
                .insert(u.afterMetrics)
                .values({
                  eventId: n,
                  applications: t.afterMetrics.applications,
                  vipGuests: t.afterMetrics.vipGuests,
                  supporter: t.afterMetrics.supporter,
                  speakers: t.afterMetrics.speakers,
                  workingParticipant: t.afterMetrics.workingParticipant,
                  jobSeeker: t.afterMetrics.jobSeeker,
                  jobProvider: t.afterMetrics.jobProvider,
                  satisfaction: t.afterMetrics.satisfaction,
                })),
            s.NextResponse.json({ id: n })
          );
        }
        let g = new i.AppRouteRouteModule({
            definition: {
              kind: o.RouteKind.APP_ROUTE,
              page: "/api/admin/events/route",
              pathname: "/api/admin/events",
              filename: "route",
              bundlePath: "app/api/admin/events/route",
            },
            resolvedPagePath:
              "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/api/admin/events/route.ts",
            nextConfigOutput: "standalone",
            userland: n,
          }),
          { workAsyncStorage: v, workUnitAsyncStorage: k, serverHooks: f } = g;
        function N() {
          return (0, a.patchFetch)({
            workAsyncStorage: v,
            workUnitAsyncStorage: k,
          });
        }
      },
      96487: () => {},
      78335: () => {},
      43345: (e, t, r) => {
        "use strict";
        r.d(t, { L: () => a });
        var n = r(57517),
          i = r(56535),
          o = r(28474);
        async function a() {
          let { env: e } = await (0, i.DM)();
          return (0, n.f)(e.DB, { schema: o });
        }
      },
      61995: (e, t, r) => {
        "use strict";
        r.d(t, { l$: () => a, c$: () => l, j6: () => s });
        var n = r(43345),
          i = r(47579),
          o = r(28474);
        async function a() {
          let e = await (0, n.L)();
          return Promise.all(
            (await e.select().from(o.events)).map(async (t) => {
              let [r, n, a, s, l, d, c, u] = await Promise.all([
                e
                  .select()
                  .from(o.speakers)
                  .where((0, i.eq)(o.speakers.eventId, t.id))
                  .orderBy(o.speakers.sortOrder),
                e
                  .select()
                  .from(o.organizers)
                  .where((0, i.eq)(o.organizers.eventId, t.id))
                  .orderBy(o.organizers.sortOrder),
                e
                  .select()
                  .from(o.sessions)
                  .where((0, i.eq)(o.sessions.eventId, t.id))
                  .orderBy(o.sessions.sortOrder),
                e
                  .select()
                  .from(o.sponsors)
                  .where((0, i.eq)(o.sponsors.eventId, t.id))
                  .orderBy(o.sponsors.sortOrder),
                e
                  .select()
                  .from(o.tickets)
                  .where((0, i.eq)(o.tickets.eventId, t.id))
                  .orderBy(o.tickets.sortOrder),
                e
                  .select()
                  .from(o.eventImages)
                  .where((0, i.eq)(o.eventImages.eventId, t.id))
                  .orderBy(o.eventImages.sortOrder),
                e
                  .select()
                  .from(o.initialMetrics)
                  .where((0, i.eq)(o.initialMetrics.eventId, t.id))
                  .orderBy(o.initialMetrics.sortOrder),
                e
                  .select()
                  .from(o.afterMetrics)
                  .where((0, i.eq)(o.afterMetrics.eventId, t.id)),
              ]);
              return (function (e, t, r, n, i, o, a, s, l) {
                let d = t.map((e) => ({
                    fullName: e.fullName,
                    title: e.title,
                    company: e.company ?? void 0,
                    instagram: e.instagram ?? void 0,
                    linkedin: e.linkedin ?? void 0,
                    twitter: e.twitter ?? void 0,
                  })),
                  c = r.map((e) => ({
                    id: e.id,
                    name: e.name,
                    designation: e.designation,
                    image: e.image,
                  })),
                  u = n.map((e) =>
                    "Network" === e.room
                      ? {
                          room: "Network",
                          speakerName: e.speakerName,
                          topic: e.topic ?? void 0,
                          startTime: e.startTime ?? void 0,
                          endTime: e.endTime ?? void 0,
                        }
                      : {
                          room: e.room,
                          topic: e.topic,
                          startTime: e.startTime,
                          endTime: e.endTime,
                          speakerName: e.speakerName,
                        },
                  ),
                  p = i.map((e) => ({
                    tier: e.tier,
                    sponsorSlug: e.sponsorSlug,
                  })),
                  m =
                    o.length > 0
                      ? o.map((e) => ({
                          type: e.type,
                          description: e.description,
                          price: e.price,
                          link: e.link,
                          perks: JSON.parse(e.perks),
                        }))
                      : void 0,
                  g = s.map((e) => ({ title: e.title, value: e.value })),
                  v = l
                    ? {
                        applications: l.applications,
                        vipGuests: l.vipGuests,
                        supporter: l.supporter,
                        speakers: l.speakers,
                        workingParticipant: l.workingParticipant,
                        jobSeeker: l.jobSeeker,
                        jobProvider: l.jobProvider,
                        satisfaction: l.satisfaction,
                      }
                    : void 0;
                return {
                  id: e.id,
                  navigable: e.navigable ?? !0,
                  name: e.name,
                  heroDescription: e.heroDescription,
                  cardDescription: e.cardDescription,
                  location: {
                    name: e.locationName,
                    subtext: e.locationSubtext,
                    latitude: e.locationLatitude ?? void 0,
                    longitude: e.locationLongitude ?? void 0,
                  },
                  registerLink: e.registerLink,
                  videoUrl: e.videoUrl ?? void 0,
                  date: e.date,
                  organizers: c,
                  speakers: d,
                  sessions: u,
                  sponsors: p,
                  tickets: m,
                  images: a.map((e) => e.url),
                  initialMetrics: g,
                  afterMetrics: v,
                  colorPalette: {
                    primary: e.colorPrimary,
                    secondary: e.colorSecondary,
                    accent: e.colorAccent,
                    background: e.colorBackground,
                    text: e.colorText,
                  },
                };
              })(t, r, n, a, s, l, d, c, u[0]);
            }),
          );
        }
        async function s(e) {
          return (
            (await a()).find(
              (t) =>
                (function (e) {
                  let t = {
                    ç: "c",
                    ğ: "g",
                    ı: "i",
                    ö: "o",
                    ş: "s",
                    ü: "u",
                    Ç: "C",
                    Ğ: "G",
                    İ: "I",
                    Ö: "O",
                    Ş: "S",
                    Ü: "U",
                  };
                  return e
                    .split("")
                    .map((e) => t[e] || e)
                    .join("")
                    .toLowerCase()
                    .replace(/[^a-z0-9-]+/g, "-")
                    .replace(/^-+|-+$/g, "")
                    .replace(/--+/g, "-");
                })(t.name) === e,
            ) || null
          );
        }
        async function l() {
          let e = await (0, n.L)();
          return (await e.select().from(o.announcements).limit(1))[0] || null;
        }
      },
      28474: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            afterMetrics: () => v,
            announcements: () => k,
            eventImages: () => m,
            events: () => s,
            initialMetrics: () => g,
            organizers: () => d,
            sessions: () => c,
            speakers: () => l,
            sponsors: () => u,
            tickets: () => p,
          }));
        var n = r(72319),
          i = r(47095),
          o = r(49190),
          a = r(61917);
        let s = (0, n.D)("events", {
            id: (0, i.nd)("id").primaryKey({ autoIncrement: !0 }),
            navigable: (0, i.nd)("navigable", { mode: "boolean" }).default(!0),
            name: (0, o.Qq)("name").notNull(),
            heroDescription: (0, o.Qq)("hero_description").notNull(),
            cardDescription: (0, o.Qq)("card_description").notNull(),
            registerLink: (0, o.Qq)("register_link").notNull(),
            videoUrl: (0, o.Qq)("video_url"),
            date: (0, o.Qq)("date").notNull(),
            locationName: (0, o.Qq)("location_name").notNull(),
            locationSubtext: (0, o.Qq)("location_subtext").notNull(),
            locationLatitude: (0, a.x)("location_latitude"),
            locationLongitude: (0, a.x)("location_longitude"),
            colorPrimary: (0, o.Qq)("color_primary").notNull(),
            colorSecondary: (0, o.Qq)("color_secondary").notNull(),
            colorAccent: (0, o.Qq)("color_accent").notNull(),
            colorBackground: (0, o.Qq)("color_background").notNull(),
            colorText: (0, o.Qq)("color_text").notNull(),
          }),
          l = (0, n.D)("speakers", {
            id: (0, i.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, i.nd)("event_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
            fullName: (0, o.Qq)("full_name").notNull(),
            title: (0, o.Qq)("title").notNull(),
            company: (0, o.Qq)("company"),
            instagram: (0, o.Qq)("instagram"),
            linkedin: (0, o.Qq)("linkedin"),
            twitter: (0, o.Qq)("twitter"),
            sortOrder: (0, i.nd)("sort_order").notNull().default(0),
          }),
          d = (0, n.D)("organizers", {
            id: (0, i.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, i.nd)("event_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
            name: (0, o.Qq)("name").notNull(),
            designation: (0, o.Qq)("designation").notNull(),
            image: (0, o.Qq)("image").notNull(),
            sortOrder: (0, i.nd)("sort_order").notNull().default(0),
          }),
          c = (0, n.D)("sessions", {
            id: (0, i.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, i.nd)("event_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
            room: (0, o.Qq)("room").notNull(),
            speakerName: (0, o.Qq)("speaker_name").notNull(),
            topic: (0, o.Qq)("topic"),
            startTime: (0, o.Qq)("start_time"),
            endTime: (0, o.Qq)("end_time"),
            sortOrder: (0, i.nd)("sort_order").notNull().default(0),
          }),
          u = (0, n.D)("sponsors", {
            id: (0, i.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, i.nd)("event_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
            tier: (0, o.Qq)("tier").notNull(),
            sponsorSlug: (0, o.Qq)("sponsor_slug").notNull(),
            sortOrder: (0, i.nd)("sort_order").notNull().default(0),
          }),
          p = (0, n.D)("tickets", {
            id: (0, i.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, i.nd)("event_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
            type: (0, o.Qq)("type").notNull(),
            description: (0, o.Qq)("description").notNull(),
            price: (0, a.x)("price").notNull(),
            link: (0, o.Qq)("link").notNull(),
            perks: (0, o.Qq)("perks").notNull(),
            sortOrder: (0, i.nd)("sort_order").notNull().default(0),
          }),
          m = (0, n.D)("event_images", {
            id: (0, i.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, i.nd)("event_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
            url: (0, o.Qq)("url").notNull(),
            sortOrder: (0, i.nd)("sort_order").notNull().default(0),
          }),
          g = (0, n.D)("initial_metrics", {
            id: (0, i.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, i.nd)("event_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
            title: (0, o.Qq)("title").notNull(),
            value: (0, i.nd)("value").notNull(),
            sortOrder: (0, i.nd)("sort_order").notNull().default(0),
          }),
          v = (0, n.D)("after_metrics", {
            id: (0, i.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, i.nd)("event_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
            applications: (0, o.Qq)("applications").notNull(),
            vipGuests: (0, o.Qq)("vip_guests").notNull(),
            supporter: (0, o.Qq)("supporter").notNull(),
            speakers: (0, o.Qq)("speakers_count").notNull(),
            workingParticipant: (0, o.Qq)("working_participant").notNull(),
            jobSeeker: (0, o.Qq)("job_seeker").notNull(),
            jobProvider: (0, o.Qq)("job_provider").notNull(),
            satisfaction: (0, o.Qq)("satisfaction").notNull(),
          }),
          k = (0, n.D)("announcements", {
            id: (0, i.nd)("id").primaryKey({ autoIncrement: !0 }),
            show: (0, i.nd)("show", { mode: "boolean" }).notNull().default(!1),
            text: (0, o.Qq)("text").notNull(),
            backgroundColor: (0, o.Qq)("background_color").notNull(),
            textColor: (0, o.Qq)("text_color").notNull(),
            link: (0, o.Qq)("link"),
            linkText: (0, o.Qq)("link_text"),
            showLink: (0, i.nd)("show_link", { mode: "boolean" })
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
        async function i() {
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
            i = await crypto.subtle.sign(
              "HMAC",
              r,
              new TextEncoder().encode(e),
            );
          return btoa(`${e}:${n(i)}`);
        }
        async function o(e) {
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
            let i = e.substring(0, r),
              o = e.substring(r + 1);
            if (Date.now() - parseInt(i) > 864e5) return !1;
            let a = process.env.ADMIN_SECRET_KEY;
            if (!a) return !1;
            let s = await crypto.subtle.importKey(
                "raw",
                new TextEncoder().encode(a),
                { name: "HMAC", hash: "SHA-256" },
                !1,
                ["sign"],
              ),
              l = await crypto.subtle.sign(
                "HMAC",
                s,
                new TextEncoder().encode(i),
              );
            return o === n(l);
          } catch {
            return !1;
          }
        }
        r.d(t, { e: () => i, g: () => o });
      },
    }));
  var t = require("../../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [994, 452, 519], () => r(84887));
  module.exports = n;
})();
