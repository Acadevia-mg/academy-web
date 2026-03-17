(() => {
  var e = {};
  ((e.id = 301),
    (e.ids = [301]),
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
      9481: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            patchFetch: () => v,
            routeModule: () => c,
            serverHooks: () => m,
            workAsyncStorage: () => u,
            workUnitAsyncStorage: () => p,
          }));
        var n = {};
        (r.r(n), r.d(n, { GET: () => d }));
        var o = r(42706),
          i = r(28203),
          a = r(45994),
          s = r(61995),
          l = r(39187);
        async function d() {
          let e = await (0, s.l$)();
          return l.NextResponse.json(e);
        }
        let c = new o.AppRouteRouteModule({
            definition: {
              kind: i.RouteKind.APP_ROUTE,
              page: "/api/events/route",
              pathname: "/api/events",
              filename: "route",
              bundlePath: "app/api/events/route",
            },
            resolvedPagePath:
              "/Users/furkan/Documents/01 Projects/Acadevia/academy-web/src/app/api/events/route.ts",
            nextConfigOutput: "standalone",
            userland: n,
          }),
          { workAsyncStorage: u, workUnitAsyncStorage: p, serverHooks: m } = c;
        function v() {
          return (0, a.patchFetch)({
            workAsyncStorage: u,
            workUnitAsyncStorage: p,
          });
        }
      },
      96487: () => {},
      78335: () => {},
      43345: (e, t, r) => {
        "use strict";
        r.d(t, { L: () => a });
        var n = r(57517),
          o = r(56535),
          i = r(28474);
        async function a() {
          let { env: e } = await (0, o.DM)();
          return (0, n.f)(e.DB, { schema: i });
        }
      },
      61995: (e, t, r) => {
        "use strict";
        r.d(t, { l$: () => a, c$: () => l, j6: () => s });
        var n = r(43345),
          o = r(47579),
          i = r(28474);
        async function a() {
          let e = await (0, n.L)();
          return Promise.all(
            (await e.select().from(i.events)).map(async (t) => {
              let [r, n, a, s, l, d, c, u] = await Promise.all([
                e
                  .select()
                  .from(i.speakers)
                  .where((0, o.eq)(i.speakers.eventId, t.id))
                  .orderBy(i.speakers.sortOrder),
                e
                  .select()
                  .from(i.organizers)
                  .where((0, o.eq)(i.organizers.eventId, t.id))
                  .orderBy(i.organizers.sortOrder),
                e
                  .select()
                  .from(i.sessions)
                  .where((0, o.eq)(i.sessions.eventId, t.id))
                  .orderBy(i.sessions.sortOrder),
                e
                  .select()
                  .from(i.sponsors)
                  .where((0, o.eq)(i.sponsors.eventId, t.id))
                  .orderBy(i.sponsors.sortOrder),
                e
                  .select()
                  .from(i.tickets)
                  .where((0, o.eq)(i.tickets.eventId, t.id))
                  .orderBy(i.tickets.sortOrder),
                e
                  .select()
                  .from(i.eventImages)
                  .where((0, o.eq)(i.eventImages.eventId, t.id))
                  .orderBy(i.eventImages.sortOrder),
                e
                  .select()
                  .from(i.initialMetrics)
                  .where((0, o.eq)(i.initialMetrics.eventId, t.id))
                  .orderBy(i.initialMetrics.sortOrder),
                e
                  .select()
                  .from(i.afterMetrics)
                  .where((0, o.eq)(i.afterMetrics.eventId, t.id)),
              ]);
              return (function (e, t, r, n, o, i, a, s, l) {
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
                  p = o.map((e) => ({
                    tier: e.tier,
                    sponsorSlug: e.sponsorSlug,
                  })),
                  m =
                    i.length > 0
                      ? i.map((e) => ({
                          type: e.type,
                          description: e.description,
                          price: e.price,
                          link: e.link,
                          perks: JSON.parse(e.perks),
                        }))
                      : void 0,
                  v = s.map((e) => ({ title: e.title, value: e.value })),
                  N = l
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
                  initialMetrics: v,
                  afterMetrics: N,
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
          return (await e.select().from(i.announcements).limit(1))[0] || null;
        }
      },
      28474: (e, t, r) => {
        "use strict";
        (r.r(t),
          r.d(t, {
            afterMetrics: () => N,
            announcements: () => k,
            eventImages: () => m,
            events: () => s,
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
          a = r(61917);
        let s = (0, n.D)("events", {
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
            locationLatitude: (0, a.x)("location_latitude"),
            locationLongitude: (0, a.x)("location_longitude"),
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
              .references(() => s.id, { onDelete: "cascade" }),
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
              .references(() => s.id, { onDelete: "cascade" }),
            name: (0, i.Qq)("name").notNull(),
            designation: (0, i.Qq)("designation").notNull(),
            image: (0, i.Qq)("image").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          c = (0, n.D)("sessions", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
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
              .references(() => s.id, { onDelete: "cascade" }),
            tier: (0, i.Qq)("tier").notNull(),
            sponsorSlug: (0, i.Qq)("sponsor_slug").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          p = (0, n.D)("tickets", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
            type: (0, i.Qq)("type").notNull(),
            description: (0, i.Qq)("description").notNull(),
            price: (0, a.x)("price").notNull(),
            link: (0, i.Qq)("link").notNull(),
            perks: (0, i.Qq)("perks").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          m = (0, n.D)("event_images", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
            url: (0, i.Qq)("url").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          v = (0, n.D)("initial_metrics", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
            title: (0, i.Qq)("title").notNull(),
            value: (0, o.nd)("value").notNull(),
            sortOrder: (0, o.nd)("sort_order").notNull().default(0),
          }),
          N = (0, n.D)("after_metrics", {
            id: (0, o.nd)("id").primaryKey({ autoIncrement: !0 }),
            eventId: (0, o.nd)("event_id")
              .notNull()
              .references(() => s.id, { onDelete: "cascade" }),
            applications: (0, i.Qq)("applications").notNull(),
            vipGuests: (0, i.Qq)("vip_guests").notNull(),
            supporter: (0, i.Qq)("supporter").notNull(),
            speakers: (0, i.Qq)("speakers_count").notNull(),
            workingParticipant: (0, i.Qq)("working_participant").notNull(),
            jobSeeker: (0, i.Qq)("job_seeker").notNull(),
            jobProvider: (0, i.Qq)("job_provider").notNull(),
            satisfaction: (0, i.Qq)("satisfaction").notNull(),
          }),
          k = (0, n.D)("announcements", {
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
    }));
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    n = t.X(0, [994, 452, 519], () => r(9481));
  module.exports = n;
})();
