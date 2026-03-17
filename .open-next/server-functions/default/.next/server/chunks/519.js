"use strict";
((exports.id = 519),
  (exports.ids = [519]),
  (exports.modules = {
    56535: (e, t, i) => {
      i.d(t, { DM: () => r });
      let s = Symbol.for("__cloudflare-context__");
      function r(e = { async: !1 }) {
        return e.async
          ? l()
          : (function () {
              let e = n();
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
              throw Error(o);
            })();
      }
      function n() {
        return globalThis[s];
      }
      async function l() {
        let e = n();
        if (e) return e;
        {
          var t;
          let e = await a();
          return ((t = e), (globalThis[s] = t), e);
        }
      }
      async function a(e) {
        let { getPlatformProxy: t } = await import(
            `${"__wrangler".replaceAll("_", "")}`
          ),
          i = e?.environment ?? process.env.NEXT_DEV_WRANGLER_ENV,
          {
            env: s,
            cf: r,
            ctx: n,
          } = await t({ ...e, envFiles: [], environment: i });
        return { env: s, cf: r, ctx: n };
      }
      let o =
        '\n\nERROR: `getCloudflareContext` has been called without having called `initOpenNextCloudflareForDev` from the Next.js config file.\nYou should update your Next.js config file as shown below:\n\n   ```\n   // next.config.mjs\n\n   import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";\n\n   initOpenNextCloudflareForDev();\n\n   const nextConfig = { ... };\n   export default nextConfig;\n   ```\n\n';
    },
    67768: (e, t, i) => {
      i.d(t, { Q: () => r });
      var s = i(77799);
      class r {
        static [s.i] = "ColumnBuilder";
        config;
        constructor(e, t, i) {
          this.config = {
            name: e,
            keyAsName: "" === e,
            notNull: !1,
            default: void 0,
            hasDefault: !1,
            primaryKey: !1,
            isUnique: !1,
            uniqueName: void 0,
            uniqueType: void 0,
            dataType: t,
            columnType: i,
            generated: void 0,
          };
        }
        $type() {
          return this;
        }
        notNull() {
          return ((this.config.notNull = !0), this);
        }
        default(e) {
          return (
            (this.config.default = e),
            (this.config.hasDefault = !0),
            this
          );
        }
        $defaultFn(e) {
          return (
            (this.config.defaultFn = e),
            (this.config.hasDefault = !0),
            this
          );
        }
        $default = this.$defaultFn;
        $onUpdateFn(e) {
          return (
            (this.config.onUpdateFn = e),
            (this.config.hasDefault = !0),
            this
          );
        }
        $onUpdate = this.$onUpdateFn;
        primaryKey() {
          return (
            (this.config.primaryKey = !0),
            (this.config.notNull = !0),
            this
          );
        }
        setName(e) {
          "" === this.config.name && (this.config.name = e);
        }
      }
    },
    7078: (e, t, i) => {
      i.d(t, { V: () => r });
      var s = i(77799);
      class r {
        constructor(e, t) {
          ((this.table = e),
            (this.config = t),
            (this.name = t.name),
            (this.keyAsName = t.keyAsName),
            (this.notNull = t.notNull),
            (this.default = t.default),
            (this.defaultFn = t.defaultFn),
            (this.onUpdateFn = t.onUpdateFn),
            (this.hasDefault = t.hasDefault),
            (this.primary = t.primaryKey),
            (this.isUnique = t.isUnique),
            (this.uniqueName = t.uniqueName),
            (this.uniqueType = t.uniqueType),
            (this.dataType = t.dataType),
            (this.columnType = t.columnType),
            (this.generated = t.generated),
            (this.generatedIdentity = t.generatedIdentity));
        }
        static [s.i] = "Column";
        name;
        keyAsName;
        primary;
        notNull;
        default;
        defaultFn;
        onUpdateFn;
        hasDefault;
        isUnique;
        uniqueName;
        uniqueType;
        dataType;
        columnType;
        enumValues = void 0;
        generated = void 0;
        generatedIdentity = void 0;
        config;
        mapFromDriverValue(e) {
          return e;
        }
        mapToDriverValue(e) {
          return e;
        }
        shouldDisableInsert() {
          return (
            void 0 !== this.config.generated &&
            "byDefault" !== this.config.generated.type
          );
        }
      }
    },
    57517: (e, t, i) => {
      i.d(t, { f: () => eL });
      var s = i(77799);
      class r {
        static [s.i] = "ConsoleLogWriter";
        write(e) {
          console.log(e);
        }
      }
      class n {
        static [s.i] = "DefaultLogger";
        writer;
        constructor(e) {
          this.writer = e?.writer ?? new r();
        }
        logQuery(e, t) {
          let i = t.map((e) => {
              try {
                return JSON.stringify(e);
              } catch {
                return String(e);
              }
            }),
            s = i.length ? ` -- params: [${i.join(", ")}]` : "";
          this.writer.write(`Query: ${e}${s}`);
        }
      }
      class l {
        static [s.i] = "NoopLogger";
        logQuery() {}
      }
      var a = i(65258),
        o = i(7078);
      let u = Symbol.for("drizzle:PgInlineForeignKeys"),
        c = Symbol.for("drizzle:EnableRLS");
      class h extends a.XI {
        static [s.i] = "PgTable";
        static Symbol = Object.assign({}, a.XI.Symbol, {
          InlineForeignKeys: u,
          EnableRLS: c,
        });
        [u] = [];
        [c] = !1;
        [a.XI.Symbol.ExtraConfigBuilder] = void 0;
        [a.XI.Symbol.ExtraConfigColumns] = {};
      }
      class f {
        static [s.i] = "PgPrimaryKeyBuilder";
        columns;
        name;
        constructor(e, t) {
          ((this.columns = e), (this.name = t));
        }
        build(e) {
          return new d(e, this.columns, this.name);
        }
      }
      class d {
        constructor(e, t, i) {
          ((this.table = e), (this.columns = t), (this.name = i));
        }
        static [s.i] = "PgPrimaryKey";
        columns;
        name;
        getName() {
          return (
            this.name ??
            `${this.table[h.Symbol.Name]}_${this.columns.map((e) => e.name).join("_")}_pk`
          );
        }
      }
      var m = i(47579),
        p = i(17081);
      function g(e) {
        return (0, p.ll)`${e} asc`;
      }
      function y(e) {
        return (0, p.ll)`${e} desc`;
      }
      class b {
        constructor(e, t, i) {
          ((this.sourceTable = e),
            (this.referencedTable = t),
            (this.relationName = i),
            (this.referencedTableName = t[a.XI.Symbol.Name]));
        }
        static [s.i] = "Relation";
        referencedTableName;
        fieldName;
      }
      class w {
        constructor(e, t) {
          ((this.table = e), (this.config = t));
        }
        static [s.i] = "Relations";
      }
      class S extends b {
        constructor(e, t, i, s) {
          (super(e, t, i?.relationName),
            (this.config = i),
            (this.isNullable = s));
        }
        static [s.i] = "One";
        withFieldName(e) {
          let t = new S(
            this.sourceTable,
            this.referencedTable,
            this.config,
            this.isNullable,
          );
          return ((t.fieldName = e), t);
        }
      }
      class v extends b {
        constructor(e, t, i) {
          (super(e, t, i?.relationName), (this.config = i));
        }
        static [s.i] = "Many";
        withFieldName(e) {
          let t = new v(this.sourceTable, this.referencedTable, this.config);
          return ((t.fieldName = e), t);
        }
      }
      function $(e) {
        return {
          one: function (t, i) {
            return new S(
              e,
              t,
              i,
              i?.fields.reduce((e, t) => e && t.notNull, !0) ?? !1,
            );
          },
          many: function (t, i) {
            return new v(e, t, i);
          },
        };
      }
      var C = i(18611);
      class N {
        constructor(e) {
          this.table = e;
        }
        static [s.i] = "ColumnAliasProxyHandler";
        get(e, t) {
          return "table" === t ? this.table : e[t];
        }
      }
      class Q {
        constructor(e, t) {
          ((this.alias = e), (this.replaceOriginalName = t));
        }
        static [s.i] = "TableAliasProxyHandler";
        get(e, t) {
          if (t === a.XI.Symbol.IsAlias) return !0;
          if (
            t === a.XI.Symbol.Name ||
            (this.replaceOriginalName && t === a.XI.Symbol.OriginalName)
          )
            return this.alias;
          if (t === C.n) return { ...e[C.n], name: this.alias, isAlias: !0 };
          if (t === a.XI.Symbol.Columns) {
            let t = e[a.XI.Symbol.Columns];
            if (!t) return t;
            let i = {};
            return (
              Object.keys(t).map((s) => {
                i[s] = new Proxy(t[s], new N(new Proxy(e, this)));
              }),
              i
            );
          }
          let i = e[t];
          return (0, s.is)(i, o.V)
            ? new Proxy(i, new N(new Proxy(e, this)))
            : i;
        }
      }
      class q {
        constructor(e) {
          this.alias = e;
        }
        static [s.i] = null;
        get(e, t) {
          return "sourceTable" === t ? x(e.sourceTable, this.alias) : e[t];
        }
      }
      function x(e, t) {
        return new Proxy(e, new Q(t, !1));
      }
      function T(e, t) {
        return new Proxy(e, new N(new Proxy(e.table, new Q(t, !1))));
      }
      function L(e, t) {
        return new p.Xs.Aliased(I(e.sql, t), e.fieldAlias);
      }
      function I(e, t) {
        return p.ll.join(
          e.queryChunks.map((e) =>
            (0, s.is)(e, o.V)
              ? T(e, t)
              : (0, s.is)(e, p.Xs)
                ? I(e, t)
                : (0, s.is)(e, p.Xs.Aliased)
                  ? L(e, t)
                  : e,
          ),
        );
      }
      var B = i(73322);
      class O {
        static [s.i] = "SelectionProxyHandler";
        config;
        constructor(e) {
          this.config = { ...e };
        }
        get(e, t) {
          if ("_" === t)
            return {
              ...e._,
              selectedFields: new Proxy(e._.selectedFields, this),
            };
          if (t === C.n)
            return {
              ...e[C.n],
              selectedFields: new Proxy(e[C.n].selectedFields, this),
            };
          if ("symbol" == typeof t) return e[t];
          let i = (
            (0, s.is)(e, B.n)
              ? e._.selectedFields
              : (0, s.is)(e, p.Ss)
                ? e[C.n].selectedFields
                : e
          )[t];
          if ((0, s.is)(i, p.Xs.Aliased)) {
            if ("sql" === this.config.sqlAliasedBehavior && !i.isSelectionField)
              return i.sql;
            let e = i.clone();
            return ((e.isSelectionField = !0), e);
          }
          if ((0, s.is)(i, p.Xs)) {
            if ("sql" === this.config.sqlBehavior) return i;
            throw Error(
              `You tried to reference "${t}" field from a subquery, which is a raw SQL field, but it doesn't have an alias declared. Please add an alias to the field using ".as('alias')" method.`,
            );
          }
          return (0, s.is)(i, o.V)
            ? this.config.alias
              ? new Proxy(
                  i,
                  new N(
                    new Proxy(
                      i.table,
                      new Q(
                        this.config.alias,
                        this.config.replaceOriginalName ?? !1,
                      ),
                    ),
                  ),
                )
              : i
            : "object" != typeof i || null === i
              ? i
              : new Proxy(i, new O(this.config));
        }
      }
      function j(e) {
        return (
          e
            .replace(/['\u2019]/g, "")
            .match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []
        )
          .map((e) => e.toLowerCase())
          .join("_");
      }
      function _(e) {
        return (
          e
            .replace(/['\u2019]/g, "")
            .match(/[\da-z]+|[A-Z]+(?![a-z])|[A-Z][\da-z]+/g) ?? []
        ).reduce(
          (e, t, i) =>
            e +
            (0 === i ? t.toLowerCase() : `${t[0].toUpperCase()}${t.slice(1)}`),
          "",
        );
      }
      function A(e) {
        return e;
      }
      class D {
        static [s.i] = "CasingCache";
        cache = {};
        cachedTables = {};
        convert;
        constructor(e) {
          this.convert = "snake_case" === e ? j : "camelCase" === e ? _ : A;
        }
        getColumnCasing(e) {
          if (!e.keyAsName) return e.name;
          let t = e.table[a.XI.Symbol.Schema] ?? "public",
            i = e.table[a.XI.Symbol.OriginalName],
            s = `${t}.${i}.${e.name}`;
          return (this.cache[s] || this.cacheTable(e.table), this.cache[s]);
        }
        cacheTable(e) {
          let t = e[a.XI.Symbol.Schema] ?? "public",
            i = e[a.XI.Symbol.OriginalName],
            s = `${t}.${i}`;
          if (!this.cachedTables[s]) {
            for (let t of Object.values(e[a.XI.Symbol.Columns])) {
              let e = `${s}.${t.name}`;
              this.cache[e] = this.convert(t.name);
            }
            this.cachedTables[s] = !0;
          }
        }
        clearCache() {
          ((this.cache = {}), (this.cachedTables = {}));
        }
      }
      class E extends Error {
        static [s.i] = "DrizzleError";
        constructor({ message: e, cause: t }) {
          (super(e), (this.name = "DrizzleError"), (this.cause = t));
        }
      }
      class F extends Error {
        constructor(e, t, i) {
          (super(`Failed query: ${e}
params: ${t}`),
            (this.query = e),
            (this.params = t),
            (this.cause = i),
            Error.captureStackTrace(this, F),
            i && (this.cause = i));
        }
      }
      class X extends E {
        static [s.i] = "TransactionRollbackError";
        constructor() {
          super({ message: "Rollback" });
        }
      }
      var R = i(55251),
        P = i(72319),
        V = i(78199);
      class z extends p.Ss {
        static [s.i] = "SQLiteViewBase";
      }
      class M {
        static [s.i] = "SQLiteDialect";
        casing;
        constructor(e) {
          this.casing = new D(e?.casing);
        }
        escapeName(e) {
          return `"${e}"`;
        }
        escapeParam(e) {
          return "?";
        }
        escapeString(e) {
          return `'${e.replace(/'/g, "''")}'`;
        }
        buildWithCTE(e) {
          if (!e?.length) return;
          let t = [(0, p.ll)`with `];
          for (let [i, s] of e.entries())
            (t.push((0, p.ll)`${p.ll.identifier(s._.alias)} as (${s._.sql})`),
              i < e.length - 1 && t.push((0, p.ll)`, `));
          return (t.push((0, p.ll)` `), p.ll.join(t));
        }
        buildDeleteQuery({
          table: e,
          where: t,
          returning: i,
          withList: s,
          limit: r,
          orderBy: n,
        }) {
          let l = this.buildWithCTE(s),
            a = i
              ? (0,
                p.ll)` returning ${this.buildSelection(i, { isSingleTable: !0 })}`
              : void 0,
            o = t ? (0, p.ll)` where ${t}` : void 0,
            u = this.buildOrderBy(n),
            c = this.buildLimit(r);
          return (0, p.ll)`${l}delete from ${e}${o}${a}${u}${c}`;
        }
        buildUpdateSet(e, t) {
          let i = e[a.XI.Symbol.Columns],
            r = Object.keys(i).filter(
              (e) => void 0 !== t[e] || i[e]?.onUpdateFn !== void 0,
            ),
            n = r.length;
          return p.ll.join(
            r.flatMap((e, r) => {
              let l = i[e],
                a = l.onUpdateFn?.(),
                o = t[e] ?? ((0, s.is)(a, p.Xs) ? a : p.ll.param(a, l)),
                u = (0,
                p.ll)`${p.ll.identifier(this.casing.getColumnCasing(l))} = ${o}`;
              return r < n - 1 ? [u, p.ll.raw(", ")] : [u];
            }),
          );
        }
        buildUpdateQuery({
          table: e,
          set: t,
          where: i,
          returning: s,
          withList: r,
          joins: n,
          from: l,
          limit: a,
          orderBy: o,
        }) {
          let u = this.buildWithCTE(r),
            c = this.buildUpdateSet(e, t),
            h = l && p.ll.join([p.ll.raw(" from "), this.buildFromTable(l)]),
            f = this.buildJoins(n),
            d = s
              ? (0,
                p.ll)` returning ${this.buildSelection(s, { isSingleTable: !0 })}`
              : void 0,
            m = i ? (0, p.ll)` where ${i}` : void 0,
            g = this.buildOrderBy(o),
            y = this.buildLimit(a);
          return (0, p.ll)`${u}update ${e} set ${c}${h}${f}${m}${d}${g}${y}`;
        }
        buildSelection(e, { isSingleTable: t = !1 } = {}) {
          let i = e.length,
            r = e.flatMap(({ field: e }, r) => {
              let n = [];
              if ((0, s.is)(e, p.Xs.Aliased) && e.isSelectionField)
                n.push(p.ll.identifier(e.fieldAlias));
              else if ((0, s.is)(e, p.Xs.Aliased) || (0, s.is)(e, p.Xs)) {
                let i = (0, s.is)(e, p.Xs.Aliased) ? e.sql : e;
                (t
                  ? n.push(
                      new p.Xs(
                        i.queryChunks.map((e) =>
                          (0, s.is)(e, o.V)
                            ? p.ll.identifier(this.casing.getColumnCasing(e))
                            : e,
                        ),
                      ),
                    )
                  : n.push(i),
                  (0, s.is)(e, p.Xs.Aliased) &&
                    n.push((0, p.ll)` as ${p.ll.identifier(e.fieldAlias)}`));
              } else if ((0, s.is)(e, o.V)) {
                let i = e.table[a.XI.Symbol.Name];
                "SQLiteNumericBigInt" === e.columnType
                  ? t
                    ? n.push(
                        (0,
                        p.ll)`cast(${p.ll.identifier(this.casing.getColumnCasing(e))} as text)`,
                      )
                    : n.push(
                        (0,
                        p.ll)`cast(${p.ll.identifier(i)}.${p.ll.identifier(this.casing.getColumnCasing(e))} as text)`,
                      )
                  : t
                    ? n.push(p.ll.identifier(this.casing.getColumnCasing(e)))
                    : n.push(
                        (0,
                        p.ll)`${p.ll.identifier(i)}.${p.ll.identifier(this.casing.getColumnCasing(e))}`,
                      );
              } else if ((0, s.is)(e, B.n)) {
                let t = Object.entries(e._.selectedFields);
                if (1 === t.length) {
                  let i = t[0][1],
                    r = (0, s.is)(i, p.Xs)
                      ? i.decoder
                      : (0, s.is)(i, o.V)
                        ? { mapFromDriverValue: (e) => i.mapFromDriverValue(e) }
                        : i.sql.decoder;
                  r && (e._.sql.decoder = r);
                }
                n.push(e);
              }
              return (r < i - 1 && n.push((0, p.ll)`, `), n);
            });
          return p.ll.join(r);
        }
        buildJoins(e) {
          if (!e || 0 === e.length) return;
          let t = [];
          if (e)
            for (let [i, r] of e.entries()) {
              0 === i && t.push((0, p.ll)` `);
              let n = r.table,
                l = r.on ? (0, p.ll)` on ${r.on}` : void 0;
              if ((0, s.is)(n, P.jo)) {
                let e = n[P.jo.Symbol.Name],
                  i = n[P.jo.Symbol.Schema],
                  s = n[P.jo.Symbol.OriginalName],
                  a = e === s ? void 0 : r.alias;
                t.push(
                  (0,
                  p.ll)`${p.ll.raw(r.joinType)} join ${i ? (0, p.ll)`${p.ll.identifier(i)}.` : void 0}${p.ll.identifier(s)}${a && (0, p.ll)` ${p.ll.identifier(a)}`}${l}`,
                );
              } else t.push((0, p.ll)`${p.ll.raw(r.joinType)} join ${n}${l}`);
              i < e.length - 1 && t.push((0, p.ll)` `);
            }
          return p.ll.join(t);
        }
        buildLimit(e) {
          return "object" == typeof e || ("number" == typeof e && e >= 0)
            ? (0, p.ll)` limit ${e}`
            : void 0;
        }
        buildOrderBy(e) {
          let t = [];
          if (e)
            for (let [i, s] of e.entries())
              (t.push(s), i < e.length - 1 && t.push((0, p.ll)`, `));
          return t.length > 0 ? (0, p.ll)` order by ${p.ll.join(t)}` : void 0;
        }
        buildFromTable(e) {
          return (0, s.is)(e, a.XI) && e[a.XI.Symbol.IsAlias]
            ? (0,
              p.ll)`${(0, p.ll)`${p.ll.identifier(e[a.XI.Symbol.Schema] ?? "")}.`.if(e[a.XI.Symbol.Schema])}${p.ll.identifier(e[a.XI.Symbol.OriginalName])} ${p.ll.identifier(e[a.XI.Symbol.Name])}`
            : e;
        }
        buildSelectQuery({
          withList: e,
          fields: t,
          fieldsFlat: i,
          where: r,
          having: n,
          table: l,
          joins: u,
          orderBy: c,
          groupBy: h,
          limit: f,
          offset: d,
          distinct: m,
          setOperators: g,
        }) {
          let y = i ?? (0, V.He)(t);
          for (let e of y) {
            let t;
            if (
              (0, s.is)(e.field, o.V) &&
              (0, a.Io)(e.field.table) !==
                ((0, s.is)(l, B.n)
                  ? l._.alias
                  : (0, s.is)(l, z)
                    ? l[C.n].name
                    : (0, s.is)(l, p.Xs)
                      ? void 0
                      : (0, a.Io)(l)) &&
              ((t = e.field.table),
              !u?.some(
                ({ alias: e }) =>
                  e ===
                  (t[a.XI.Symbol.IsAlias] ? a.Io(t) : t[a.XI.Symbol.BaseName]),
              ))
            ) {
              let t = (0, a.Io)(e.field.table);
              throw Error(
                `Your "${e.path.join("->")}" field references a column "${t}"."${e.field.name}", but the table "${t}" is not part of the query! Did you forget to join it?`,
              );
            }
          }
          let b = !u || 0 === u.length,
            w = this.buildWithCTE(e),
            S = m ? (0, p.ll)` distinct` : void 0,
            v = this.buildSelection(y, { isSingleTable: b }),
            $ = this.buildFromTable(l),
            N = this.buildJoins(u),
            Q = r ? (0, p.ll)` where ${r}` : void 0,
            q = n ? (0, p.ll)` having ${n}` : void 0,
            x = [];
          if (h)
            for (let [e, t] of h.entries())
              (x.push(t), e < h.length - 1 && x.push((0, p.ll)`, `));
          let T = x.length > 0 ? (0, p.ll)` group by ${p.ll.join(x)}` : void 0,
            L = this.buildOrderBy(c),
            I = this.buildLimit(f),
            O = d ? (0, p.ll)` offset ${d}` : void 0,
            j = (0,
            p.ll)`${w}select${S} ${v} from ${$}${N}${Q}${T}${q}${L}${I}${O}`;
          return g.length > 0 ? this.buildSetOperations(j, g) : j;
        }
        buildSetOperations(e, t) {
          let [i, ...s] = t;
          if (!i)
            throw Error("Cannot pass undefined values to any set operator");
          return 0 === s.length
            ? this.buildSetOperationQuery({ leftSelect: e, setOperator: i })
            : this.buildSetOperations(
                this.buildSetOperationQuery({ leftSelect: e, setOperator: i }),
                s,
              );
        }
        buildSetOperationQuery({
          leftSelect: e,
          setOperator: {
            type: t,
            isAll: i,
            rightSelect: r,
            limit: n,
            orderBy: l,
            offset: a,
          },
        }) {
          let o;
          let u = (0, p.ll)`${e.getSQL()} `,
            c = (0, p.ll)`${r.getSQL()}`;
          if (l && l.length > 0) {
            let e = [];
            for (let t of l)
              if ((0, s.is)(t, R.v)) e.push(p.ll.identifier(t.name));
              else if ((0, s.is)(t, p.Xs)) {
                for (let e = 0; e < t.queryChunks.length; e++) {
                  let i = t.queryChunks[e];
                  (0, s.is)(i, R.v) &&
                    (t.queryChunks[e] = p.ll.identifier(
                      this.casing.getColumnCasing(i),
                    ));
                }
                e.push((0, p.ll)`${t}`);
              } else e.push((0, p.ll)`${t}`);
            o = (0, p.ll)` order by ${p.ll.join(e, (0, p.ll)`, `)}`;
          }
          let h =
              "object" == typeof n || ("number" == typeof n && n >= 0)
                ? (0, p.ll)` limit ${n}`
                : void 0,
            f = p.ll.raw(`${t} ${i ? "all " : ""}`),
            d = a ? (0, p.ll)` offset ${a}` : void 0;
          return (0, p.ll)`${u}${f}${c}${o}${h}${d}`;
        }
        buildInsertQuery({
          table: e,
          values: t,
          onConflict: i,
          returning: r,
          withList: n,
          select: l,
        }) {
          let o = [],
            u = Object.entries(e[a.XI.Symbol.Columns]).filter(
              ([e, t]) => !t.shouldDisableInsert(),
            ),
            c = u.map(([, e]) =>
              p.ll.identifier(this.casing.getColumnCasing(e)),
            );
          if (l) (0, s.is)(t, p.Xs) ? o.push(t) : o.push(t.getSQL());
          else
            for (let [e, i] of (o.push(p.ll.raw("values ")), t.entries())) {
              let r = [];
              for (let [e, t] of u) {
                let n = i[e];
                if (
                  void 0 === n ||
                  ((0, s.is)(n, p.Iw) && void 0 === n.value)
                ) {
                  let e;
                  if (null !== t.default && void 0 !== t.default)
                    e = (0, s.is)(t.default, p.Xs)
                      ? t.default
                      : p.ll.param(t.default, t);
                  else if (void 0 !== t.defaultFn) {
                    let i = t.defaultFn();
                    e = (0, s.is)(i, p.Xs) ? i : p.ll.param(i, t);
                  } else if (t.default || void 0 === t.onUpdateFn)
                    e = (0, p.ll)`null`;
                  else {
                    let i = t.onUpdateFn();
                    e = (0, s.is)(i, p.Xs) ? i : p.ll.param(i, t);
                  }
                  r.push(e);
                } else r.push(n);
              }
              (o.push(r), e < t.length - 1 && o.push((0, p.ll)`, `));
            }
          let h = this.buildWithCTE(n),
            f = p.ll.join(o),
            d = r
              ? (0,
                p.ll)` returning ${this.buildSelection(r, { isSingleTable: !0 })}`
              : void 0,
            m = i?.length ? p.ll.join(i) : void 0;
          return (0, p.ll)`${h}insert into ${e} ${c} ${f}${m}${d}`;
        }
        sqlToQuery(e, t) {
          return e.toQuery({
            casing: this.casing,
            escapeName: this.escapeName,
            escapeParam: this.escapeParam,
            escapeString: this.escapeString,
            invokeSource: t,
          });
        }
        buildRelationalQuery({
          fullSchema: e,
          schema: t,
          tableNamesMap: i,
          table: r,
          tableConfig: n,
          queryConfig: l,
          tableAlias: u,
          nestedQueryRelation: c,
          joinOn: h,
        }) {
          let f,
            d = [],
            b,
            w,
            $ = [],
            C,
            N = [];
          if (!0 === l)
            d = Object.entries(n.columns).map(([e, t]) => ({
              dbKey: t.name,
              tsKey: e,
              field: T(t, u),
              relationTableTsKey: void 0,
              isJson: !1,
              selection: [],
            }));
          else {
            let r = Object.fromEntries(
              Object.entries(n.columns).map(([e, t]) => [e, T(t, u)]),
            );
            if (l.where) {
              let e =
                "function" == typeof l.where
                  ? l.where(r, {
                      and: m.Uo,
                      between: m.Tq,
                      eq: m.eq,
                      exists: m.t2,
                      gt: m.gt,
                      gte: m.RO,
                      ilike: m.B3,
                      inArray: m.RV,
                      isNull: m.kZ,
                      isNotNull: m.Pe,
                      like: m.mj,
                      lt: m.lt,
                      lte: m.wJ,
                      ne: m.ne,
                      not: m.AU,
                      notBetween: m.o8,
                      notExists: m.KJ,
                      notLike: m.RK,
                      notIlike: m.q1,
                      notInArray: m.KL,
                      or: m.or,
                      sql: p.ll,
                    })
                  : l.where;
              C = e && I(e, u);
            }
            let c = [],
              h = [];
            if (l.columns) {
              let e = !1;
              for (let [t, i] of Object.entries(l.columns))
                void 0 !== i &&
                  t in n.columns &&
                  (e || !0 !== i || (e = !0), h.push(t));
              h.length > 0 &&
                (h = e
                  ? h.filter((e) => l.columns?.[e] === !0)
                  : Object.keys(n.columns).filter((e) => !h.includes(e)));
            } else h = Object.keys(n.columns);
            for (let e of h) {
              let t = n.columns[e];
              c.push({ tsKey: e, value: t });
            }
            let f = [];
            if (
              (l.with &&
                (f = Object.entries(l.with)
                  .filter((e) => !!e[1])
                  .map(([e, t]) => ({
                    tsKey: e,
                    queryConfig: t,
                    relation: n.relations[e],
                  }))),
              l.extras)
            )
              for (let [e, t] of Object.entries(
                "function" == typeof l.extras
                  ? l.extras(r, { sql: p.ll })
                  : l.extras,
              ))
                c.push({ tsKey: e, value: L(t, u) });
            for (let { tsKey: e, value: t } of c)
              d.push({
                dbKey: (0, s.is)(t, p.Xs.Aliased)
                  ? t.fieldAlias
                  : n.columns[e].name,
                tsKey: e,
                field: (0, s.is)(t, o.V) ? T(t, u) : t,
                relationTableTsKey: void 0,
                isJson: !1,
                selection: [],
              });
            let v =
              "function" == typeof l.orderBy
                ? l.orderBy(r, { sql: p.ll, asc: g, desc: y })
                : (l.orderBy ?? []);
            for (let {
              tsKey: r,
              queryConfig: n,
              relation: c,
            } of (Array.isArray(v) || (v = [v]),
            ($ = v.map((e) => ((0, s.is)(e, o.V) ? T(e, u) : I(e, u)))),
            (b = l.limit),
            (w = l.offset),
            f)) {
              let l = (function (e, t, i) {
                  if ((0, s.is)(i, S) && i.config)
                    return {
                      fields: i.config.fields,
                      references: i.config.references,
                    };
                  let r = t[(0, a.Lf)(i.referencedTable)];
                  if (!r)
                    throw Error(
                      `Table "${i.referencedTable[a.XI.Symbol.Name]}" not found in schema`,
                    );
                  let n = e[r];
                  if (!n) throw Error(`Table "${r}" not found in schema`);
                  let l = i.sourceTable,
                    o = t[(0, a.Lf)(l)];
                  if (!o)
                    throw Error(
                      `Table "${l[a.XI.Symbol.Name]}" not found in schema`,
                    );
                  let u = [];
                  for (let e of Object.values(n.relations))
                    ((i.relationName &&
                      i !== e &&
                      e.relationName === i.relationName) ||
                      (!i.relationName &&
                        e.referencedTable === i.sourceTable)) &&
                      u.push(e);
                  if (u.length > 1)
                    throw i.relationName
                      ? Error(
                          `There are multiple relations with name "${i.relationName}" in table "${r}"`,
                        )
                      : Error(
                          `There are multiple relations between "${r}" and "${i.sourceTable[a.XI.Symbol.Name]}". Please specify relation name`,
                        );
                  if (u[0] && (0, s.is)(u[0], S) && u[0].config)
                    return {
                      fields: u[0].config.references,
                      references: u[0].config.fields,
                    };
                  throw Error(
                    `There is not enough information to infer relation "${o}.${i.fieldName}"`,
                  );
                })(t, i, c),
                o = i[(0, a.Lf)(c.referencedTable)],
                h = `${u}_${r}`,
                f = (0, m.Uo)(
                  ...l.fields.map((e, t) =>
                    (0, m.eq)(T(l.references[t], h), T(e, u)),
                  ),
                ),
                g = this.buildRelationalQuery({
                  fullSchema: e,
                  schema: t,
                  tableNamesMap: i,
                  table: e[o],
                  tableConfig: t[o],
                  queryConfig: (0, s.is)(c, S)
                    ? !0 === n
                      ? { limit: 1 }
                      : { ...n, limit: 1 }
                    : n,
                  tableAlias: h,
                  joinOn: f,
                  nestedQueryRelation: c,
                }),
                y = (0, p.ll)`(${g.sql})`.as(r);
              d.push({
                dbKey: r,
                tsKey: r,
                field: y,
                relationTableTsKey: o,
                isJson: !0,
                selection: g.selection,
              });
            }
          }
          if (0 === d.length)
            throw new E({
              message: `No fields selected for table "${n.tsName}" ("${u}"). You need to have at least one item in "columns", "with" or "extras". If you need to select all columns, omit the "columns" key or set it to undefined.`,
            });
          if (((C = (0, m.Uo)(h, C)), c)) {
            let e = (0, p.ll)`json_array(${p.ll.join(
              d.map(({ field: e }) =>
                (0, s.is)(e, R.v)
                  ? p.ll.identifier(this.casing.getColumnCasing(e))
                  : (0, s.is)(e, p.Xs.Aliased)
                    ? e.sql
                    : e,
              ),
              (0, p.ll)`, `,
            )})`;
            (0, s.is)(c, v) &&
              (e = (0, p.ll)`coalesce(json_group_array(${e}), json_array())`);
            let t = [
              {
                dbKey: "data",
                tsKey: "data",
                field: e.as("data"),
                isJson: !0,
                relationTableTsKey: n.tsName,
                selection: d,
              },
            ];
            (void 0 !== b || void 0 !== w || $.length > 0
              ? ((f = this.buildSelectQuery({
                  table: x(r, u),
                  fields: {},
                  fieldsFlat: [{ path: [], field: p.ll.raw("*") }],
                  where: C,
                  limit: b,
                  offset: w,
                  orderBy: $,
                  setOperators: [],
                })),
                (C = void 0),
                (b = void 0),
                (w = void 0),
                ($ = void 0))
              : (f = x(r, u)),
              (f = this.buildSelectQuery({
                table: (0, s.is)(f, P.jo) ? f : new B.n(f, {}, u),
                fields: {},
                fieldsFlat: t.map(({ field: e }) => ({
                  path: [],
                  field: (0, s.is)(e, o.V) ? T(e, u) : e,
                })),
                joins: N,
                where: C,
                limit: b,
                offset: w,
                orderBy: $,
                setOperators: [],
              })));
          } else
            f = this.buildSelectQuery({
              table: x(r, u),
              fields: {},
              fieldsFlat: d.map(({ field: e }) => ({
                path: [],
                field: (0, s.is)(e, o.V) ? T(e, u) : e,
              })),
              joins: N,
              where: C,
              limit: b,
              offset: w,
              orderBy: $,
              setOperators: [],
            });
          return { tableTsKey: n.tsName, sql: f, selection: d };
        }
      }
      class K extends M {
        static [s.i] = "SQLiteSyncDialect";
        migrate(e, t, i) {
          let s =
              void 0 === i
                ? "__drizzle_migrations"
                : "string" == typeof i
                  ? "__drizzle_migrations"
                  : (i.migrationsTable ?? "__drizzle_migrations"),
            r = (0, p.ll)`
			CREATE TABLE IF NOT EXISTS ${p.ll.identifier(s)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			)
		`;
          t.run(r);
          let n =
            t.values(
              (0,
              p.ll)`SELECT id, hash, created_at FROM ${p.ll.identifier(s)} ORDER BY created_at DESC LIMIT 1`,
            )[0] ?? void 0;
          t.run((0, p.ll)`BEGIN`);
          try {
            for (let i of e)
              if (!n || Number(n[2]) < i.folderMillis) {
                for (let e of i.sql) t.run(p.ll.raw(e));
                t.run(
                  (0,
                  p.ll)`INSERT INTO ${p.ll.identifier(s)} ("hash", "created_at") VALUES(${i.hash}, ${i.folderMillis})`,
                );
              }
            t.run((0, p.ll)`COMMIT`);
          } catch (e) {
            throw (t.run((0, p.ll)`ROLLBACK`), e);
          }
        }
      }
      class U extends M {
        static [s.i] = "SQLiteAsyncDialect";
        async migrate(e, t, i) {
          let s =
              void 0 === i
                ? "__drizzle_migrations"
                : "string" == typeof i
                  ? "__drizzle_migrations"
                  : (i.migrationsTable ?? "__drizzle_migrations"),
            r = (0, p.ll)`
			CREATE TABLE IF NOT EXISTS ${p.ll.identifier(s)} (
				id SERIAL PRIMARY KEY,
				hash text NOT NULL,
				created_at numeric
			)
		`;
          await t.run(r);
          let n =
            (
              await t.values(
                (0,
                p.ll)`SELECT id, hash, created_at FROM ${p.ll.identifier(s)} ORDER BY created_at DESC LIMIT 1`,
              )
            )[0] ?? void 0;
          await t.transaction(async (t) => {
            for (let i of e)
              if (!n || Number(n[2]) < i.folderMillis) {
                for (let e of i.sql) await t.run(p.ll.raw(e));
                await t.run(
                  (0,
                  p.ll)`INSERT INTO ${p.ll.identifier(s)} ("hash", "created_at") VALUES(${i.hash}, ${i.folderMillis})`,
                );
              }
          });
        }
      }
      class k {
        static [s.i] = "TypedQueryBuilder";
        getSelectedFields() {
          return this._.selectedFields;
        }
      }
      class J {
        static [s.i] = "QueryPromise";
        [Symbol.toStringTag] = "QueryPromise";
        catch(e) {
          return this.then(void 0, e);
        }
        finally(e) {
          return this.then(
            (t) => (e?.(), t),
            (t) => {
              throw (e?.(), t);
            },
          );
        }
        then(e, t) {
          return this.execute().then(e, t);
        }
      }
      function W(e) {
        return (0, s.is)(e, P.jo)
          ? [`${e[a.XI.Symbol.BaseName]}`]
          : (0, s.is)(e, B.n)
            ? (e._.usedTables ?? [])
            : (0, s.is)(e, p.Xs)
              ? (e.usedTables ?? [])
              : [];
      }
      class H {
        static [s.i] = "SQLiteSelectBuilder";
        fields;
        session;
        dialect;
        withList;
        distinct;
        constructor(e) {
          ((this.fields = e.fields),
            (this.session = e.session),
            (this.dialect = e.dialect),
            (this.withList = e.withList),
            (this.distinct = e.distinct));
        }
        from(e) {
          let t;
          let i = !!this.fields;
          return (
            (t = this.fields
              ? this.fields
              : (0, s.is)(e, B.n)
                ? Object.fromEntries(
                    Object.keys(e._.selectedFields).map((t) => [t, e[t]]),
                  )
                : (0, s.is)(e, z)
                  ? e[C.n].selectedFields
                  : (0, s.is)(e, p.Xs)
                    ? {}
                    : (0, V.YD)(e)),
            new G({
              table: e,
              fields: t,
              isPartialSelect: i,
              session: this.session,
              dialect: this.dialect,
              withList: this.withList,
              distinct: this.distinct,
            })
          );
        }
      }
      class Y extends k {
        static [s.i] = "SQLiteSelectQueryBuilder";
        _;
        config;
        joinsNotNullableMap;
        tableName;
        isPartialSelect;
        session;
        dialect;
        cacheConfig = void 0;
        usedTables = new Set();
        constructor({
          table: e,
          fields: t,
          isPartialSelect: i,
          session: s,
          dialect: r,
          withList: n,
          distinct: l,
        }) {
          for (let a of (super(),
          (this.config = {
            withList: n,
            table: e,
            fields: { ...t },
            distinct: l,
            setOperators: [],
          }),
          (this.isPartialSelect = i),
          (this.session = s),
          (this.dialect = r),
          (this._ = { selectedFields: t, config: this.config }),
          (this.tableName = (0, V.zN)(e)),
          (this.joinsNotNullableMap =
            "string" == typeof this.tableName ? { [this.tableName]: !0 } : {}),
          W(e)))
            this.usedTables.add(a);
        }
        getUsedTables() {
          return [...this.usedTables];
        }
        createJoin(e) {
          return (t, i) => {
            let r = this.tableName,
              n = (0, V.zN)(t);
            for (let e of W(t)) this.usedTables.add(e);
            if (
              "string" == typeof n &&
              this.config.joins?.some((e) => e.alias === n)
            )
              throw Error(`Alias "${n}" is already used in this query`);
            if (
              !this.isPartialSelect &&
              (1 === Object.keys(this.joinsNotNullableMap).length &&
                "string" == typeof r &&
                (this.config.fields = { [r]: this.config.fields }),
              "string" == typeof n && !(0, s.is)(t, p.Xs))
            ) {
              let e = (0, s.is)(t, B.n)
                ? t._.selectedFields
                : (0, s.is)(t, p.Ss)
                  ? t[C.n].selectedFields
                  : t[a.XI.Symbol.Columns];
              this.config.fields[n] = e;
            }
            if (
              ("function" == typeof i &&
                (i = i(
                  new Proxy(
                    this.config.fields,
                    new O({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
                  ),
                )),
              this.config.joins || (this.config.joins = []),
              this.config.joins.push({
                on: i,
                table: t,
                joinType: e,
                alias: n,
              }),
              "string" == typeof n)
            )
              switch (e) {
                case "left":
                  this.joinsNotNullableMap[n] = !1;
                  break;
                case "right":
                  ((this.joinsNotNullableMap = Object.fromEntries(
                    Object.entries(this.joinsNotNullableMap).map(([e]) => [
                      e,
                      !1,
                    ]),
                  )),
                    (this.joinsNotNullableMap[n] = !0));
                  break;
                case "cross":
                case "inner":
                  this.joinsNotNullableMap[n] = !0;
                  break;
                case "full":
                  ((this.joinsNotNullableMap = Object.fromEntries(
                    Object.entries(this.joinsNotNullableMap).map(([e]) => [
                      e,
                      !1,
                    ]),
                  )),
                    (this.joinsNotNullableMap[n] = !1));
              }
            return this;
          };
        }
        leftJoin = this.createJoin("left");
        rightJoin = this.createJoin("right");
        innerJoin = this.createJoin("inner");
        fullJoin = this.createJoin("full");
        crossJoin = this.createJoin("cross");
        createSetOperator(e, t) {
          return (i) => {
            let s = "function" == typeof i ? i(ee()) : i;
            if (!(0, V.DV)(this.getSelectedFields(), s.getSelectedFields()))
              throw Error(
                "Set operator error (union / intersect / except): selected fields are not the same or are in a different order",
              );
            return (
              this.config.setOperators.push({
                type: e,
                isAll: t,
                rightSelect: s,
              }),
              this
            );
          };
        }
        union = this.createSetOperator("union", !1);
        unionAll = this.createSetOperator("union", !0);
        intersect = this.createSetOperator("intersect", !1);
        except = this.createSetOperator("except", !1);
        addSetOperators(e) {
          return (this.config.setOperators.push(...e), this);
        }
        where(e) {
          return (
            "function" == typeof e &&
              (e = e(
                new Proxy(
                  this.config.fields,
                  new O({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
                ),
              )),
            (this.config.where = e),
            this
          );
        }
        having(e) {
          return (
            "function" == typeof e &&
              (e = e(
                new Proxy(
                  this.config.fields,
                  new O({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
                ),
              )),
            (this.config.having = e),
            this
          );
        }
        groupBy(...e) {
          if ("function" == typeof e[0]) {
            let t = e[0](
              new Proxy(
                this.config.fields,
                new O({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" }),
              ),
            );
            this.config.groupBy = Array.isArray(t) ? t : [t];
          } else this.config.groupBy = e;
          return this;
        }
        orderBy(...e) {
          if ("function" == typeof e[0]) {
            let t = e[0](
                new Proxy(
                  this.config.fields,
                  new O({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" }),
                ),
              ),
              i = Array.isArray(t) ? t : [t];
            this.config.setOperators.length > 0
              ? (this.config.setOperators.at(-1).orderBy = i)
              : (this.config.orderBy = i);
          } else
            this.config.setOperators.length > 0
              ? (this.config.setOperators.at(-1).orderBy = e)
              : (this.config.orderBy = e);
          return this;
        }
        limit(e) {
          return (
            this.config.setOperators.length > 0
              ? (this.config.setOperators.at(-1).limit = e)
              : (this.config.limit = e),
            this
          );
        }
        offset(e) {
          return (
            this.config.setOperators.length > 0
              ? (this.config.setOperators.at(-1).offset = e)
              : (this.config.offset = e),
            this
          );
        }
        getSQL() {
          return this.dialect.buildSelectQuery(this.config);
        }
        toSQL() {
          let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
          return t;
        }
        as(e) {
          let t = [];
          if ((t.push(...W(this.config.table)), this.config.joins))
            for (let e of this.config.joins) t.push(...W(e.table));
          return new Proxy(
            new B.n(this.getSQL(), this.config.fields, e, !1, [...new Set(t)]),
            new O({
              alias: e,
              sqlAliasedBehavior: "alias",
              sqlBehavior: "error",
            }),
          );
        }
        getSelectedFields() {
          return new Proxy(
            this.config.fields,
            new O({
              alias: this.tableName,
              sqlAliasedBehavior: "alias",
              sqlBehavior: "error",
            }),
          );
        }
        $dynamic() {
          return this;
        }
      }
      class G extends Y {
        static [s.i] = "SQLiteSelect";
        _prepare(e = !0) {
          if (!this.session)
            throw Error(
              "Cannot execute a query on a query builder. Please use a database instance instead.",
            );
          let t = (0, V.He)(this.config.fields),
            i = this.session[e ? "prepareOneTimeQuery" : "prepareQuery"](
              this.dialect.sqlToQuery(this.getSQL()),
              t,
              "all",
              !0,
              void 0,
              { type: "select", tables: [...this.usedTables] },
              this.cacheConfig,
            );
          return ((i.joinsNotNullableMap = this.joinsNotNullableMap), i);
        }
        $withCache(e) {
          return (
            (this.cacheConfig =
              void 0 === e
                ? { config: {}, enable: !0, autoInvalidate: !0 }
                : !1 === e
                  ? { enable: !1 }
                  : { enable: !0, autoInvalidate: !0, ...e }),
            this
          );
        }
        prepare() {
          return this._prepare(!1);
        }
        run = (e) => this._prepare().run(e);
        all = (e) => this._prepare().all(e);
        get = (e) => this._prepare().get(e);
        values = (e) => this._prepare().values(e);
        async execute() {
          return this.all();
        }
      }
      function Z(e, t) {
        return (i, s, ...r) => {
          let n = [s, ...r].map((i) => ({ type: e, isAll: t, rightSelect: i }));
          for (let e of n)
            if (
              !(0, V.DV)(
                i.getSelectedFields(),
                e.rightSelect.getSelectedFields(),
              )
            )
              throw Error(
                "Set operator error (union / intersect / except): selected fields are not the same or are in a different order",
              );
          return i.addSetOperators(n);
        };
      }
      (0, V.XJ)(G, [J]);
      let ee = () => ({ union: et, unionAll: ei, intersect: es, except: er }),
        et = Z("union", !1),
        ei = Z("union", !0),
        es = Z("intersect", !1),
        er = Z("except", !1);
      class en {
        static [s.i] = "SQLiteQueryBuilder";
        dialect;
        dialectConfig;
        constructor(e) {
          ((this.dialect = (0, s.is)(e, M) ? e : void 0),
            (this.dialectConfig = (0, s.is)(e, M) ? void 0 : e));
        }
        $with = (e, t) => {
          let i = this;
          return {
            as: (s) => (
              "function" == typeof s && (s = s(i)),
              new Proxy(
                new B.J(
                  s.getSQL(),
                  t ??
                    ("getSelectedFields" in s
                      ? (s.getSelectedFields() ?? {})
                      : {}),
                  e,
                  !0,
                ),
                new O({
                  alias: e,
                  sqlAliasedBehavior: "alias",
                  sqlBehavior: "error",
                }),
              )
            ),
          };
        };
        with(...e) {
          let t = this;
          return {
            select: function (i) {
              return new H({
                fields: i ?? void 0,
                session: void 0,
                dialect: t.getDialect(),
                withList: e,
              });
            },
            selectDistinct: function (i) {
              return new H({
                fields: i ?? void 0,
                session: void 0,
                dialect: t.getDialect(),
                withList: e,
                distinct: !0,
              });
            },
          };
        }
        select(e) {
          return new H({
            fields: e ?? void 0,
            session: void 0,
            dialect: this.getDialect(),
          });
        }
        selectDistinct(e) {
          return new H({
            fields: e ?? void 0,
            session: void 0,
            dialect: this.getDialect(),
            distinct: !0,
          });
        }
        getDialect() {
          return (
            this.dialect || (this.dialect = new K(this.dialectConfig)),
            this.dialect
          );
        }
      }
      class el {
        constructor(e, t, i, s) {
          ((this.table = e),
            (this.session = t),
            (this.dialect = i),
            (this.withList = s));
        }
        static [s.i] = "SQLiteUpdateBuilder";
        set(e) {
          return new ea(
            this.table,
            (0, V.q)(this.table, e),
            this.session,
            this.dialect,
            this.withList,
          );
        }
      }
      class ea extends J {
        constructor(e, t, i, s, r) {
          (super(),
            (this.session = i),
            (this.dialect = s),
            (this.config = { set: t, table: e, withList: r, joins: [] }));
        }
        static [s.i] = "SQLiteUpdate";
        config;
        from(e) {
          return ((this.config.from = e), this);
        }
        createJoin(e) {
          return (t, i) => {
            let r = (0, V.zN)(t);
            if (
              "string" == typeof r &&
              this.config.joins.some((e) => e.alias === r)
            )
              throw Error(`Alias "${r}" is already used in this query`);
            if ("function" == typeof i) {
              let e = this.config.from
                ? (0, s.is)(t, P.jo)
                  ? t[a.XI.Symbol.Columns]
                  : (0, s.is)(t, B.n)
                    ? t._.selectedFields
                    : (0, s.is)(t, z)
                      ? t[C.n].selectedFields
                      : void 0
                : void 0;
              i = i(
                new Proxy(
                  this.config.table[a.XI.Symbol.Columns],
                  new O({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
                ),
                e &&
                  new Proxy(
                    e,
                    new O({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" }),
                  ),
              );
            }
            return (
              this.config.joins.push({
                on: i,
                table: t,
                joinType: e,
                alias: r,
              }),
              this
            );
          };
        }
        leftJoin = this.createJoin("left");
        rightJoin = this.createJoin("right");
        innerJoin = this.createJoin("inner");
        fullJoin = this.createJoin("full");
        where(e) {
          return ((this.config.where = e), this);
        }
        orderBy(...e) {
          if ("function" == typeof e[0]) {
            let t = e[0](
                new Proxy(
                  this.config.table[a.XI.Symbol.Columns],
                  new O({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" }),
                ),
              ),
              i = Array.isArray(t) ? t : [t];
            this.config.orderBy = i;
          } else this.config.orderBy = e;
          return this;
        }
        limit(e) {
          return ((this.config.limit = e), this);
        }
        returning(e = this.config.table[P.jo.Symbol.Columns]) {
          return ((this.config.returning = (0, V.He)(e)), this);
        }
        getSQL() {
          return this.dialect.buildUpdateQuery(this.config);
        }
        toSQL() {
          let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
          return t;
        }
        _prepare(e = !0) {
          return this.session[e ? "prepareOneTimeQuery" : "prepareQuery"](
            this.dialect.sqlToQuery(this.getSQL()),
            this.config.returning,
            this.config.returning ? "all" : "run",
            !0,
            void 0,
            { type: "insert", tables: W(this.config.table) },
          );
        }
        prepare() {
          return this._prepare(!1);
        }
        run = (e) => this._prepare().run(e);
        all = (e) => this._prepare().all(e);
        get = (e) => this._prepare().get(e);
        values = (e) => this._prepare().values(e);
        async execute() {
          return this.config.returning ? this.all() : this.run();
        }
        $dynamic() {
          return this;
        }
      }
      class eo {
        constructor(e, t, i, s) {
          ((this.table = e),
            (this.session = t),
            (this.dialect = i),
            (this.withList = s));
        }
        static [s.i] = "SQLiteInsertBuilder";
        values(e) {
          if (0 === (e = Array.isArray(e) ? e : [e]).length)
            throw Error("values() must be called with at least one value");
          let t = e.map((e) => {
            let t = {},
              i = this.table[a.XI.Symbol.Columns];
            for (let r of Object.keys(e)) {
              let n = e[r];
              t[r] = (0, s.is)(n, p.Xs) ? n : new p.Iw(n, i[r]);
            }
            return t;
          });
          return new eu(
            this.table,
            t,
            this.session,
            this.dialect,
            this.withList,
          );
        }
        select(e) {
          let t = "function" == typeof e ? e(new en()) : e;
          if (
            !(0, s.is)(t, p.Xs) &&
            !(0, V.DV)(this.table[a.e], t._.selectedFields)
          )
            throw Error(
              "Insert select error: selected fields are not the same or are in a different order compared to the table definition",
            );
          return new eu(
            this.table,
            t,
            this.session,
            this.dialect,
            this.withList,
            !0,
          );
        }
      }
      class eu extends J {
        constructor(e, t, i, s, r, n) {
          (super(),
            (this.session = i),
            (this.dialect = s),
            (this.config = { table: e, values: t, withList: r, select: n }));
        }
        static [s.i] = "SQLiteInsert";
        config;
        returning(e = this.config.table[P.jo.Symbol.Columns]) {
          return ((this.config.returning = (0, V.He)(e)), this);
        }
        onConflictDoNothing(e = {}) {
          if (
            (this.config.onConflict || (this.config.onConflict = []),
            void 0 === e.target)
          )
            this.config.onConflict.push((0, p.ll)` on conflict do nothing`);
          else {
            let t = Array.isArray(e.target)
                ? (0, p.ll)`${e.target}`
                : (0, p.ll)`${[e.target]}`,
              i = e.where ? (0, p.ll)` where ${e.where}` : (0, p.ll)``;
            this.config.onConflict.push(
              (0, p.ll)` on conflict ${t} do nothing${i}`,
            );
          }
          return this;
        }
        onConflictDoUpdate(e) {
          if (e.where && (e.targetWhere || e.setWhere))
            throw Error(
              'You cannot use both "where" and "targetWhere"/"setWhere" at the same time - "where" is deprecated, use "targetWhere" or "setWhere" instead.',
            );
          this.config.onConflict || (this.config.onConflict = []);
          let t = e.where ? (0, p.ll)` where ${e.where}` : void 0,
            i = e.targetWhere ? (0, p.ll)` where ${e.targetWhere}` : void 0,
            s = e.setWhere ? (0, p.ll)` where ${e.setWhere}` : void 0,
            r = Array.isArray(e.target)
              ? (0, p.ll)`${e.target}`
              : (0, p.ll)`${[e.target]}`,
            n = this.dialect.buildUpdateSet(
              this.config.table,
              (0, V.q)(this.config.table, e.set),
            );
          return (
            this.config.onConflict.push(
              (0, p.ll)` on conflict ${r}${i} do update set ${n}${t}${s}`,
            ),
            this
          );
        }
        getSQL() {
          return this.dialect.buildInsertQuery(this.config);
        }
        toSQL() {
          let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
          return t;
        }
        _prepare(e = !0) {
          return this.session[e ? "prepareOneTimeQuery" : "prepareQuery"](
            this.dialect.sqlToQuery(this.getSQL()),
            this.config.returning,
            this.config.returning ? "all" : "run",
            !0,
            void 0,
            { type: "insert", tables: W(this.config.table) },
          );
        }
        prepare() {
          return this._prepare(!1);
        }
        run = (e) => this._prepare().run(e);
        all = (e) => this._prepare().all(e);
        get = (e) => this._prepare().get(e);
        values = (e) => this._prepare().values(e);
        async execute() {
          return this.config.returning ? this.all() : this.run();
        }
        $dynamic() {
          return this;
        }
      }
      class ec extends J {
        constructor(e, t, i, s) {
          (super(),
            (this.table = e),
            (this.session = t),
            (this.dialect = i),
            (this.config = { table: e, withList: s }));
        }
        static [s.i] = "SQLiteDelete";
        config;
        where(e) {
          return ((this.config.where = e), this);
        }
        orderBy(...e) {
          if ("function" == typeof e[0]) {
            let t = e[0](
                new Proxy(
                  this.config.table[a.XI.Symbol.Columns],
                  new O({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" }),
                ),
              ),
              i = Array.isArray(t) ? t : [t];
            this.config.orderBy = i;
          } else this.config.orderBy = e;
          return this;
        }
        limit(e) {
          return ((this.config.limit = e), this);
        }
        returning(e = this.table[P.jo.Symbol.Columns]) {
          return ((this.config.returning = (0, V.He)(e)), this);
        }
        getSQL() {
          return this.dialect.buildDeleteQuery(this.config);
        }
        toSQL() {
          let { typings: e, ...t } = this.dialect.sqlToQuery(this.getSQL());
          return t;
        }
        _prepare(e = !0) {
          return this.session[e ? "prepareOneTimeQuery" : "prepareQuery"](
            this.dialect.sqlToQuery(this.getSQL()),
            this.config.returning,
            this.config.returning ? "all" : "run",
            !0,
            void 0,
            { type: "delete", tables: W(this.config.table) },
          );
        }
        prepare() {
          return this._prepare(!1);
        }
        run = (e) => this._prepare().run(e);
        all = (e) => this._prepare().all(e);
        get = (e) => this._prepare().get(e);
        values = (e) => this._prepare().values(e);
        async execute(e) {
          return this._prepare().execute(e);
        }
        $dynamic() {
          return this;
        }
      }
      class eh extends p.Xs {
        constructor(e) {
          (super(eh.buildEmbeddedCount(e.source, e.filters).queryChunks),
            (this.params = e),
            (this.session = e.session),
            (this.sql = eh.buildCount(e.source, e.filters)));
        }
        sql;
        static [s.i] = "SQLiteCountBuilderAsync";
        [Symbol.toStringTag] = "SQLiteCountBuilderAsync";
        session;
        static buildEmbeddedCount(e, t) {
          return (0,
          p.ll)`(select count(*) from ${e}${p.ll.raw(" where ").if(t)}${t})`;
        }
        static buildCount(e, t) {
          return (0,
          p.ll)`select count(*) from ${e}${p.ll.raw(" where ").if(t)}${t}`;
        }
        then(e, t) {
          return Promise.resolve(this.session.count(this.sql)).then(e, t);
        }
        catch(e) {
          return this.then(void 0, e);
        }
        finally(e) {
          return this.then(
            (t) => (e?.(), t),
            (t) => {
              throw (e?.(), t);
            },
          );
        }
      }
      class ef {
        constructor(e, t, i, s, r, n, l, a) {
          ((this.mode = e),
            (this.fullSchema = t),
            (this.schema = i),
            (this.tableNamesMap = s),
            (this.table = r),
            (this.tableConfig = n),
            (this.dialect = l),
            (this.session = a));
        }
        static [s.i] = "SQLiteAsyncRelationalQueryBuilder";
        findMany(e) {
          return "sync" === this.mode
            ? new em(
                this.fullSchema,
                this.schema,
                this.tableNamesMap,
                this.table,
                this.tableConfig,
                this.dialect,
                this.session,
                e || {},
                "many",
              )
            : new ed(
                this.fullSchema,
                this.schema,
                this.tableNamesMap,
                this.table,
                this.tableConfig,
                this.dialect,
                this.session,
                e || {},
                "many",
              );
        }
        findFirst(e) {
          return "sync" === this.mode
            ? new em(
                this.fullSchema,
                this.schema,
                this.tableNamesMap,
                this.table,
                this.tableConfig,
                this.dialect,
                this.session,
                e ? { ...e, limit: 1 } : { limit: 1 },
                "first",
              )
            : new ed(
                this.fullSchema,
                this.schema,
                this.tableNamesMap,
                this.table,
                this.tableConfig,
                this.dialect,
                this.session,
                e ? { ...e, limit: 1 } : { limit: 1 },
                "first",
              );
        }
      }
      class ed extends J {
        constructor(e, t, i, s, r, n, l, a, o) {
          (super(),
            (this.fullSchema = e),
            (this.schema = t),
            (this.tableNamesMap = i),
            (this.table = s),
            (this.tableConfig = r),
            (this.dialect = n),
            (this.session = l),
            (this.config = a),
            (this.mode = o));
        }
        static [s.i] = "SQLiteAsyncRelationalQuery";
        mode;
        getSQL() {
          return this.dialect.buildRelationalQuery({
            fullSchema: this.fullSchema,
            schema: this.schema,
            tableNamesMap: this.tableNamesMap,
            table: this.table,
            tableConfig: this.tableConfig,
            queryConfig: this.config,
            tableAlias: this.tableConfig.tsName,
          }).sql;
        }
        _prepare(e = !1) {
          let { query: t, builtQuery: i } = this._toSQL();
          return this.session[e ? "prepareOneTimeQuery" : "prepareQuery"](
            i,
            void 0,
            "first" === this.mode ? "get" : "all",
            !0,
            (e, i) => {
              let r = e.map((e) =>
                (function e(t, i, r, n, l = (e) => e) {
                  let a = {};
                  for (let [u, c] of n.entries())
                    if (c.isJson) {
                      let n = i.relations[c.tsKey],
                        o = r[u],
                        h = "string" == typeof o ? JSON.parse(o) : o;
                      a[c.tsKey] = (0, s.is)(n, S)
                        ? h && e(t, t[c.relationTableTsKey], h, c.selection, l)
                        : h.map((i) =>
                            e(t, t[c.relationTableTsKey], i, c.selection, l),
                          );
                    } else {
                      let e;
                      let t = l(r[u]),
                        i = c.field;
                      ((e = (0, s.is)(i, o.V)
                        ? i
                        : (0, s.is)(i, p.Xs)
                          ? i.decoder
                          : i.sql.decoder),
                        (a[c.tsKey] =
                          null === t ? null : e.mapFromDriverValue(t)));
                    }
                  return a;
                })(this.schema, this.tableConfig, e, t.selection, i),
              );
              return "first" === this.mode ? r[0] : r;
            },
          );
        }
        prepare() {
          return this._prepare(!1);
        }
        _toSQL() {
          let e = this.dialect.buildRelationalQuery({
              fullSchema: this.fullSchema,
              schema: this.schema,
              tableNamesMap: this.tableNamesMap,
              table: this.table,
              tableConfig: this.tableConfig,
              queryConfig: this.config,
              tableAlias: this.tableConfig.tsName,
            }),
            t = this.dialect.sqlToQuery(e.sql);
          return { query: e, builtQuery: t };
        }
        toSQL() {
          return this._toSQL().builtQuery;
        }
        executeRaw() {
          return "first" === this.mode
            ? this._prepare(!1).get()
            : this._prepare(!1).all();
        }
        async execute() {
          return this.executeRaw();
        }
      }
      class em extends ed {
        static [s.i] = "SQLiteSyncRelationalQuery";
        sync() {
          return this.executeRaw();
        }
      }
      class ep extends J {
        constructor(e, t, i, s, r) {
          (super(),
            (this.execute = e),
            (this.getSQL = t),
            (this.dialect = s),
            (this.mapBatchResult = r),
            (this.config = { action: i }));
        }
        static [s.i] = "SQLiteRaw";
        config;
        getQuery() {
          return {
            ...this.dialect.sqlToQuery(this.getSQL()),
            method: this.config.action,
          };
        }
        mapResult(e, t) {
          return t ? this.mapBatchResult(e) : e;
        }
        _prepare() {
          return this;
        }
        isResponseInArrayMode() {
          return !1;
        }
      }
      class eg {
        constructor(e, t, i, s) {
          ((this.resultKind = e),
            (this.dialect = t),
            (this.session = i),
            (this._ = s
              ? {
                  schema: s.schema,
                  fullSchema: s.fullSchema,
                  tableNamesMap: s.tableNamesMap,
                }
              : { schema: void 0, fullSchema: {}, tableNamesMap: {} }),
            (this.query = {}));
          let r = this.query;
          if (this._.schema)
            for (let [n, l] of Object.entries(this._.schema))
              r[n] = new ef(
                e,
                s.fullSchema,
                this._.schema,
                this._.tableNamesMap,
                s.fullSchema[n],
                l,
                t,
                i,
              );
          this.$cache = { invalidate: async (e) => {} };
        }
        static [s.i] = "BaseSQLiteDatabase";
        query;
        $with = (e, t) => {
          let i = this;
          return {
            as: (s) => (
              "function" == typeof s && (s = s(new en(i.dialect))),
              new Proxy(
                new B.J(
                  s.getSQL(),
                  t ??
                    ("getSelectedFields" in s
                      ? (s.getSelectedFields() ?? {})
                      : {}),
                  e,
                  !0,
                ),
                new O({
                  alias: e,
                  sqlAliasedBehavior: "alias",
                  sqlBehavior: "error",
                }),
              )
            ),
          };
        };
        $count(e, t) {
          return new eh({ source: e, filters: t, session: this.session });
        }
        with(...e) {
          let t = this;
          return {
            select: function (i) {
              return new H({
                fields: i ?? void 0,
                session: t.session,
                dialect: t.dialect,
                withList: e,
              });
            },
            selectDistinct: function (i) {
              return new H({
                fields: i ?? void 0,
                session: t.session,
                dialect: t.dialect,
                withList: e,
                distinct: !0,
              });
            },
            update: function (i) {
              return new el(i, t.session, t.dialect, e);
            },
            insert: function (i) {
              return new eo(i, t.session, t.dialect, e);
            },
            delete: function (i) {
              return new ec(i, t.session, t.dialect, e);
            },
          };
        }
        select(e) {
          return new H({
            fields: e ?? void 0,
            session: this.session,
            dialect: this.dialect,
          });
        }
        selectDistinct(e) {
          return new H({
            fields: e ?? void 0,
            session: this.session,
            dialect: this.dialect,
            distinct: !0,
          });
        }
        update(e) {
          return new el(e, this.session, this.dialect);
        }
        $cache;
        insert(e) {
          return new eo(e, this.session, this.dialect);
        }
        delete(e) {
          return new ec(e, this.session, this.dialect);
        }
        run(e) {
          let t = "string" == typeof e ? p.ll.raw(e) : e.getSQL();
          return "async" === this.resultKind
            ? new ep(
                async () => this.session.run(t),
                () => t,
                "run",
                this.dialect,
                this.session.extractRawRunValueFromBatchResult.bind(
                  this.session,
                ),
              )
            : this.session.run(t);
        }
        all(e) {
          let t = "string" == typeof e ? p.ll.raw(e) : e.getSQL();
          return "async" === this.resultKind
            ? new ep(
                async () => this.session.all(t),
                () => t,
                "all",
                this.dialect,
                this.session.extractRawAllValueFromBatchResult.bind(
                  this.session,
                ),
              )
            : this.session.all(t);
        }
        get(e) {
          let t = "string" == typeof e ? p.ll.raw(e) : e.getSQL();
          return "async" === this.resultKind
            ? new ep(
                async () => this.session.get(t),
                () => t,
                "get",
                this.dialect,
                this.session.extractRawGetValueFromBatchResult.bind(
                  this.session,
                ),
              )
            : this.session.get(t);
        }
        values(e) {
          let t = "string" == typeof e ? p.ll.raw(e) : e.getSQL();
          return "async" === this.resultKind
            ? new ep(
                async () => this.session.values(t),
                () => t,
                "values",
                this.dialect,
                this.session.extractRawValuesValueFromBatchResult.bind(
                  this.session,
                ),
              )
            : this.session.values(t);
        }
        transaction(e, t) {
          return this.session.transaction(e, t);
        }
      }
      class ey {
        static [s.i] = "Cache";
      }
      class eb extends ey {
        strategy() {
          return "all";
        }
        static [s.i] = "NoopCache";
        async get(e) {}
        async put(e, t, i, s) {}
        async onMutate(e) {}
      }
      async function ew(e, t) {
        let i = `${e}-${JSON.stringify(t)}`,
          s = new TextEncoder().encode(i);
        return [...new Uint8Array(await crypto.subtle.digest("SHA-256", s))]
          .map((e) => e.toString(16).padStart(2, "0"))
          .join("");
      }
      class eS extends J {
        constructor(e) {
          (super(), (this.resultCb = e));
        }
        static [s.i] = "ExecuteResultSync";
        async execute() {
          return this.resultCb();
        }
        sync() {
          return this.resultCb();
        }
      }
      class ev {
        constructor(e, t, i, s, r, n) {
          ((this.mode = e),
            (this.executeMethod = t),
            (this.query = i),
            (this.cache = s),
            (this.queryMetadata = r),
            (this.cacheConfig = n),
            s &&
              "all" === s.strategy() &&
              void 0 === n &&
              (this.cacheConfig = { enable: !0, autoInvalidate: !0 }),
            this.cacheConfig?.enable || (this.cacheConfig = void 0));
        }
        static [s.i] = "PreparedQuery";
        joinsNotNullableMap;
        async queryWithCache(e, t, i) {
          if (
            void 0 === this.cache ||
            (0, s.is)(this.cache, eb) ||
            void 0 === this.queryMetadata ||
            (this.cacheConfig && !this.cacheConfig.enable)
          )
            try {
              return await i();
            } catch (i) {
              throw new F(e, t, i);
            }
          if (
            ("insert" === this.queryMetadata.type ||
              "update" === this.queryMetadata.type ||
              "delete" === this.queryMetadata.type) &&
            this.queryMetadata.tables.length > 0
          )
            try {
              let [e] = await Promise.all([
                i(),
                this.cache.onMutate({ tables: this.queryMetadata.tables }),
              ]);
              return e;
            } catch (i) {
              throw new F(e, t, i);
            }
          if (!this.cacheConfig)
            try {
              return await i();
            } catch (i) {
              throw new F(e, t, i);
            }
          if ("select" === this.queryMetadata.type) {
            let s = await this.cache.get(
              this.cacheConfig.tag ?? (await ew(e, t)),
              this.queryMetadata.tables,
              void 0 !== this.cacheConfig.tag,
              this.cacheConfig.autoInvalidate,
            );
            if (void 0 === s) {
              let s;
              try {
                s = await i();
              } catch (i) {
                throw new F(e, t, i);
              }
              return (
                await this.cache.put(
                  this.cacheConfig.tag ?? (await ew(e, t)),
                  s,
                  this.cacheConfig.autoInvalidate
                    ? this.queryMetadata.tables
                    : [],
                  void 0 !== this.cacheConfig.tag,
                  this.cacheConfig.config,
                ),
                s
              );
            }
            return s;
          }
          try {
            return await i();
          } catch (i) {
            throw new F(e, t, i);
          }
        }
        getQuery() {
          return this.query;
        }
        mapRunResult(e, t) {
          return e;
        }
        mapAllResult(e, t) {
          throw Error("Not implemented");
        }
        mapGetResult(e, t) {
          throw Error("Not implemented");
        }
        execute(e) {
          return "async" === this.mode
            ? this[this.executeMethod](e)
            : new eS(() => this[this.executeMethod](e));
        }
        mapResult(e, t) {
          switch (this.executeMethod) {
            case "run":
              return this.mapRunResult(e, t);
            case "all":
              return this.mapAllResult(e, t);
            case "get":
              return this.mapGetResult(e, t);
          }
        }
      }
      class e$ {
        constructor(e) {
          this.dialect = e;
        }
        static [s.i] = "SQLiteSession";
        prepareOneTimeQuery(e, t, i, s, r, n, l) {
          return this.prepareQuery(e, t, i, s, r, n, l);
        }
        run(e) {
          let t = this.dialect.sqlToQuery(e);
          try {
            return this.prepareOneTimeQuery(t, void 0, "run", !1).run();
          } catch (e) {
            throw new E({
              cause: e,
              message: `Failed to run the query '${t.sql}'`,
            });
          }
        }
        extractRawRunValueFromBatchResult(e) {
          return e;
        }
        all(e) {
          return this.prepareOneTimeQuery(
            this.dialect.sqlToQuery(e),
            void 0,
            "run",
            !1,
          ).all();
        }
        extractRawAllValueFromBatchResult(e) {
          throw Error("Not implemented");
        }
        get(e) {
          return this.prepareOneTimeQuery(
            this.dialect.sqlToQuery(e),
            void 0,
            "run",
            !1,
          ).get();
        }
        extractRawGetValueFromBatchResult(e) {
          throw Error("Not implemented");
        }
        values(e) {
          return this.prepareOneTimeQuery(
            this.dialect.sqlToQuery(e),
            void 0,
            "run",
            !1,
          ).values();
        }
        async count(e) {
          return (await this.values(e))[0][0];
        }
        extractRawValuesValueFromBatchResult(e) {
          throw Error("Not implemented");
        }
      }
      class eC extends eg {
        constructor(e, t, i, s, r = 0) {
          (super(e, t, i, s), (this.schema = s), (this.nestedIndex = r));
        }
        static [s.i] = "SQLiteTransaction";
        rollback() {
          throw new X();
        }
      }
      class eN extends e$ {
        constructor(e, t, i, s = {}) {
          (super(t),
            (this.client = e),
            (this.schema = i),
            (this.options = s),
            (this.logger = s.logger ?? new l()),
            (this.cache = s.cache ?? new eb()));
        }
        static [s.i] = "SQLiteD1Session";
        logger;
        cache;
        prepareQuery(e, t, i, s, r, n, l) {
          return new ex(
            this.client.prepare(e.sql),
            e,
            this.logger,
            this.cache,
            n,
            l,
            t,
            i,
            s,
            r,
          );
        }
        async batch(e) {
          let t = [],
            i = [];
          for (let s of e) {
            let e = s._prepare(),
              r = e.getQuery();
            if ((t.push(e), r.params.length > 0))
              i.push(e.stmt.bind(...r.params));
            else {
              let t = e.getQuery();
              i.push(this.client.prepare(t.sql).bind(...t.params));
            }
          }
          return (await this.client.batch(i)).map((e, i) =>
            t[i].mapResult(e, !0),
          );
        }
        extractRawAllValueFromBatchResult(e) {
          return e.results;
        }
        extractRawGetValueFromBatchResult(e) {
          return e.results[0];
        }
        extractRawValuesValueFromBatchResult(e) {
          return eq(e.results);
        }
        async transaction(e, t) {
          let i = new eQ("async", this.dialect, this, this.schema);
          await this.run(
            p.ll.raw(`begin${t?.behavior ? " " + t.behavior : ""}`),
          );
          try {
            let t = await e(i);
            return (await this.run((0, p.ll)`commit`), t);
          } catch (e) {
            throw (await this.run((0, p.ll)`rollback`), e);
          }
        }
      }
      class eQ extends eC {
        static [s.i] = "D1Transaction";
        async transaction(e) {
          let t = `sp${this.nestedIndex}`,
            i = new eQ(
              "async",
              this.dialect,
              this.session,
              this.schema,
              this.nestedIndex + 1,
            );
          await this.session.run(p.ll.raw(`savepoint ${t}`));
          try {
            let s = await e(i);
            return (
              await this.session.run(p.ll.raw(`release savepoint ${t}`)),
              s
            );
          } catch (e) {
            throw (
              await this.session.run(p.ll.raw(`rollback to savepoint ${t}`)),
              e
            );
          }
        }
      }
      function eq(e) {
        let t = [];
        for (let i of e) {
          let e = Object.keys(i).map((e) => i[e]);
          t.push(e);
        }
        return t;
      }
      class ex extends ev {
        constructor(e, t, i, s, r, n, l, a, o, u) {
          (super("async", a, t, s, r, n),
            (this.logger = i),
            (this._isResponseInArrayMode = o),
            (this.customResultMapper = u),
            (this.fields = l),
            (this.stmt = e));
        }
        static [s.i] = "D1PreparedQuery";
        customResultMapper;
        fields;
        stmt;
        async run(e) {
          let t = (0, p.Ct)(this.query.params, e ?? {});
          return (
            this.logger.logQuery(this.query.sql, t),
            await this.queryWithCache(this.query.sql, t, async () =>
              this.stmt.bind(...t).run(),
            )
          );
        }
        async all(e) {
          let {
            fields: t,
            query: i,
            logger: s,
            stmt: r,
            customResultMapper: n,
          } = this;
          if (!t && !n) {
            let t = (0, p.Ct)(i.params, e ?? {});
            return (
              s.logQuery(i.sql, t),
              await this.queryWithCache(i.sql, t, async () =>
                r
                  .bind(...t)
                  .all()
                  .then(({ results: e }) => this.mapAllResult(e)),
              )
            );
          }
          let l = await this.values(e);
          return this.mapAllResult(l);
        }
        mapAllResult(e, t) {
          return (t && (e = eq(e.results)),
          this.fields || this.customResultMapper)
            ? this.customResultMapper
              ? this.customResultMapper(e)
              : e.map((e) =>
                  (0, V.a6)(this.fields, e, this.joinsNotNullableMap),
                )
            : e;
        }
        async get(e) {
          let {
            fields: t,
            joinsNotNullableMap: i,
            query: s,
            logger: r,
            stmt: n,
            customResultMapper: l,
          } = this;
          if (!t && !l) {
            let t = (0, p.Ct)(s.params, e ?? {});
            return (
              r.logQuery(s.sql, t),
              await this.queryWithCache(s.sql, t, async () =>
                n
                  .bind(...t)
                  .all()
                  .then(({ results: e }) => e[0]),
              )
            );
          }
          let a = await this.values(e);
          return a[0] ? (l ? l(a) : (0, V.a6)(t, a[0], i)) : void 0;
        }
        mapGetResult(e, t) {
          return (t && (e = eq(e.results)[0]),
          this.fields || this.customResultMapper)
            ? this.customResultMapper
              ? this.customResultMapper([e])
              : (0, V.a6)(this.fields, e, this.joinsNotNullableMap)
            : e;
        }
        async values(e) {
          let t = (0, p.Ct)(this.query.params, e ?? {});
          return (
            this.logger.logQuery(this.query.sql, t),
            await this.queryWithCache(this.query.sql, t, async () =>
              this.stmt.bind(...t).raw(),
            )
          );
        }
        isResponseInArrayMode() {
          return this._isResponseInArrayMode;
        }
      }
      class eT extends eg {
        static [s.i] = "D1Database";
        async batch(e) {
          return this.session.batch(e);
        }
      }
      function eL(e, t = {}) {
        let i, r;
        let l = new U({ casing: t.casing });
        if (
          (!0 === t.logger ? (i = new n()) : !1 !== t.logger && (i = t.logger),
          t.schema)
        ) {
          let e = (function (e, t) {
            1 === Object.keys(e).length &&
              "default" in e &&
              !(0, s.is)(e.default, a.XI) &&
              (e = e.default);
            let i = {},
              r = {},
              n = {};
            for (let [l, o] of Object.entries(e))
              if ((0, s.is)(o, a.XI)) {
                let e = (0, a.Lf)(o),
                  t = r[e];
                for (let s of ((i[e] = l),
                (n[l] = {
                  tsName: l,
                  dbName: o[a.XI.Symbol.Name],
                  schema: o[a.XI.Symbol.Schema],
                  columns: o[a.XI.Symbol.Columns],
                  relations: t?.relations ?? {},
                  primaryKey: t?.primaryKey ?? [],
                }),
                Object.values(o[a.XI.Symbol.Columns])))
                  s.primary && n[l].primaryKey.push(s);
                let u = o[a.XI.Symbol.ExtraConfigBuilder]?.(
                  o[a.XI.Symbol.ExtraConfigColumns],
                );
                if (u)
                  for (let e of Object.values(u))
                    (0, s.is)(e, f) && n[l].primaryKey.push(...e.columns);
              } else if ((0, s.is)(o, w)) {
                let e;
                let s = (0, a.Lf)(o.table),
                  l = i[s];
                for (let [i, a] of Object.entries(o.config(t(o.table))))
                  if (l) {
                    let t = n[l];
                    ((t.relations[i] = a), e && t.primaryKey.push(...e));
                  } else
                    (s in r || (r[s] = { relations: {}, primaryKey: e }),
                      (r[s].relations[i] = a));
              }
            return { tables: n, tableNamesMap: i };
          })(t.schema, $);
          r = {
            fullSchema: t.schema,
            schema: e.tables,
            tableNamesMap: e.tableNamesMap,
          };
        }
        let o = new eN(e, l, r, { logger: i, cache: t.cache }),
          u = new eT("async", l, o, r);
        return (
          (u.$client = e),
          (u.$cache = t.cache),
          u.$cache && (u.$cache.invalidate = t.cache?.onMutate),
          u
        );
      }
    },
    77799: (e, t, i) => {
      i.d(t, { i: () => s, is: () => r });
      let s = Symbol.for("drizzle:entityKind");
      function r(e, t) {
        if (!e || "object" != typeof e) return !1;
        if (e instanceof t) return !0;
        if (!Object.prototype.hasOwnProperty.call(t, s))
          throw Error(
            `Class "${t.name ?? "<unknown>"}" doesn't look like a Drizzle entity. If this is incorrect and the class is provided by Drizzle, please report this as a bug.`,
          );
        let i = Object.getPrototypeOf(e).constructor;
        if (i)
          for (; i; ) {
            if (s in i && i[s] === t[s]) return !0;
            i = Object.getPrototypeOf(i);
          }
        return !1;
      }
      Symbol.for("drizzle:hasOwnEntityKind");
    },
    47579: (e, t, i) => {
      i.d(t, {
        AU: () => f,
        B3: () => x,
        KJ: () => $,
        KL: () => b,
        Pe: () => S,
        RK: () => q,
        RO: () => m,
        RV: () => y,
        Tq: () => C,
        Uo: () => c,
        eq: () => o,
        gt: () => d,
        kZ: () => w,
        lt: () => p,
        mj: () => Q,
        ne: () => u,
        o8: () => N,
        or: () => h,
        q1: () => T,
        t2: () => v,
        wJ: () => g,
      });
      var s = i(7078),
        r = i(77799),
        n = i(65258),
        l = i(17081);
      function a(e, t) {
        return !(0, l.eG)(t) ||
          (0, l.qt)(e) ||
          (0, r.is)(e, l.Iw) ||
          (0, r.is)(e, l.Or) ||
          (0, r.is)(e, s.V) ||
          (0, r.is)(e, n.XI) ||
          (0, r.is)(e, l.Ss)
          ? e
          : new l.Iw(e, t);
      }
      let o = (e, t) => (0, l.ll)`${e} = ${a(t, e)}`,
        u = (e, t) => (0, l.ll)`${e} <> ${a(t, e)}`;
      function c(...e) {
        let t = e.filter((e) => void 0 !== e);
        return 0 === t.length
          ? void 0
          : new l.Xs(
              1 === t.length
                ? t
                : [
                    new l.DJ("("),
                    l.ll.join(t, new l.DJ(" and ")),
                    new l.DJ(")"),
                  ],
            );
      }
      function h(...e) {
        let t = e.filter((e) => void 0 !== e);
        return 0 === t.length
          ? void 0
          : new l.Xs(
              1 === t.length
                ? t
                : [
                    new l.DJ("("),
                    l.ll.join(t, new l.DJ(" or ")),
                    new l.DJ(")"),
                  ],
            );
      }
      function f(e) {
        return (0, l.ll)`not ${e}`;
      }
      let d = (e, t) => (0, l.ll)`${e} > ${a(t, e)}`,
        m = (e, t) => (0, l.ll)`${e} >= ${a(t, e)}`,
        p = (e, t) => (0, l.ll)`${e} < ${a(t, e)}`,
        g = (e, t) => (0, l.ll)`${e} <= ${a(t, e)}`;
      function y(e, t) {
        return Array.isArray(t)
          ? 0 === t.length
            ? (0, l.ll)`false`
            : (0, l.ll)`${e} in ${t.map((t) => a(t, e))}`
          : (0, l.ll)`${e} in ${a(t, e)}`;
      }
      function b(e, t) {
        return Array.isArray(t)
          ? 0 === t.length
            ? (0, l.ll)`true`
            : (0, l.ll)`${e} not in ${t.map((t) => a(t, e))}`
          : (0, l.ll)`${e} not in ${a(t, e)}`;
      }
      function w(e) {
        return (0, l.ll)`${e} is null`;
      }
      function S(e) {
        return (0, l.ll)`${e} is not null`;
      }
      function v(e) {
        return (0, l.ll)`exists ${e}`;
      }
      function $(e) {
        return (0, l.ll)`not exists ${e}`;
      }
      function C(e, t, i) {
        return (0, l.ll)`${e} between ${a(t, e)} and ${a(i, e)}`;
      }
      function N(e, t, i) {
        return (0, l.ll)`${e} not between ${a(t, e)} and ${a(i, e)}`;
      }
      function Q(e, t) {
        return (0, l.ll)`${e} like ${t}`;
      }
      function q(e, t) {
        return (0, l.ll)`${e} not like ${t}`;
      }
      function x(e, t) {
        return (0, l.ll)`${e} ilike ${t}`;
      }
      function T(e, t) {
        return (0, l.ll)`${e} not ilike ${t}`;
      }
    },
    17081: (e, t, i) => {
      let s, r;
      i.d(t, {
        Iw: () => R,
        Or: () => V,
        Xs: () => A,
        DJ: () => _,
        Ss: () => K,
        Ct: () => z,
        eG: () => E,
        qt: () => j,
        ll: () => P,
      });
      var n = i(77799),
        l = i(67768),
        a = i(7078),
        o = i(25957);
      class u {
        static [n.i] = "PgForeignKeyBuilder";
        reference;
        _onUpdate = "no action";
        _onDelete = "no action";
        constructor(e, t) {
          ((this.reference = () => {
            let { name: t, columns: i, foreignColumns: s } = e();
            return {
              name: t,
              columns: i,
              foreignTable: s[0].table,
              foreignColumns: s,
            };
          }),
            t &&
              ((this._onUpdate = t.onUpdate), (this._onDelete = t.onDelete)));
        }
        onUpdate(e) {
          return ((this._onUpdate = void 0 === e ? "no action" : e), this);
        }
        onDelete(e) {
          return ((this._onDelete = void 0 === e ? "no action" : e), this);
        }
        build(e) {
          return new c(e, this);
        }
      }
      class c {
        constructor(e, t) {
          ((this.table = e),
            (this.reference = t.reference),
            (this.onUpdate = t._onUpdate),
            (this.onDelete = t._onDelete));
        }
        static [n.i] = "PgForeignKey";
        reference;
        onUpdate;
        onDelete;
        getName() {
          let { name: e, columns: t, foreignColumns: i } = this.reference(),
            s = t.map((e) => e.name),
            r = i.map((e) => e.name),
            n = [this.table[o.E], ...s, i[0].table[o.E], ...r];
          return e ?? `${n.join("_")}_fk`;
        }
      }
      function h(e, ...t) {
        return e(...t);
      }
      function f(e, t) {
        return `${e[o.E]}_${t.join("_")}_unique`;
      }
      class d {
        constructor(e, t) {
          ((this.name = t), (this.columns = e));
        }
        static [n.i] = null;
        columns;
        nullsNotDistinctConfig = !1;
        nullsNotDistinct() {
          return ((this.nullsNotDistinctConfig = !0), this);
        }
        build(e) {
          return new p(e, this.columns, this.nullsNotDistinctConfig, this.name);
        }
      }
      class m {
        static [n.i] = null;
        name;
        constructor(e) {
          this.name = e;
        }
        on(...e) {
          return new d(e, this.name);
        }
      }
      class p {
        constructor(e, t, i, s) {
          ((this.table = e),
            (this.columns = t),
            (this.name =
              s ??
              f(
                this.table,
                this.columns.map((e) => e.name),
              )),
            (this.nullsNotDistinct = i));
        }
        static [n.i] = null;
        columns;
        name;
        nullsNotDistinct = !1;
        getName() {
          return this.name;
        }
      }
      function g(e, t, i) {
        for (let s = t; s < e.length; s++) {
          let r = e[s];
          if ("\\" === r) {
            s++;
            continue;
          }
          if ('"' === r) return [e.slice(t, s).replace(/\\/g, ""), s + 1];
          if (!i && ("," === r || "}" === r))
            return [e.slice(t, s).replace(/\\/g, ""), s];
        }
        return [e.slice(t).replace(/\\/g, ""), e.length];
      }
      class y extends l.Q {
        foreignKeyConfigs = [];
        static [n.i] = "PgColumnBuilder";
        array(e) {
          return new v(this.config.name, this, e);
        }
        references(e, t = {}) {
          return (this.foreignKeyConfigs.push({ ref: e, actions: t }), this);
        }
        unique(e, t) {
          return (
            (this.config.isUnique = !0),
            (this.config.uniqueName = e),
            (this.config.uniqueType = t?.nulls),
            this
          );
        }
        generatedAlwaysAs(e) {
          return (
            (this.config.generated = { as: e, type: "always", mode: "stored" }),
            this
          );
        }
        buildForeignKeys(e, t) {
          return this.foreignKeyConfigs.map(({ ref: i, actions: s }) =>
            h(
              (i, s) => {
                let r = new u(() => ({ columns: [e], foreignColumns: [i()] }));
                return (
                  s.onUpdate && r.onUpdate(s.onUpdate),
                  s.onDelete && r.onDelete(s.onDelete),
                  r.build(t)
                );
              },
              i,
              s,
            ),
          );
        }
        buildExtraConfigColumn(e) {
          return new w(e, this.config);
        }
      }
      class b extends a.V {
        constructor(e, t) {
          (t.uniqueName || (t.uniqueName = f(e, [t.name])),
            super(e, t),
            (this.table = e));
        }
        static [n.i] = "PgColumn";
      }
      class w extends b {
        static [n.i] = "ExtraConfigColumn";
        getSQLType() {
          return this.getSQLType();
        }
        indexConfig = {
          order: this.config.order ?? "asc",
          nulls: this.config.nulls ?? "last",
          opClass: this.config.opClass,
        };
        defaultConfig = { order: "asc", nulls: "last", opClass: void 0 };
        asc() {
          return ((this.indexConfig.order = "asc"), this);
        }
        desc() {
          return ((this.indexConfig.order = "desc"), this);
        }
        nullsFirst() {
          return ((this.indexConfig.nulls = "first"), this);
        }
        nullsLast() {
          return ((this.indexConfig.nulls = "last"), this);
        }
        op(e) {
          return ((this.indexConfig.opClass = e), this);
        }
      }
      class S {
        static [n.i] = null;
        constructor(e, t, i, s) {
          ((this.name = e),
            (this.keyAsName = t),
            (this.type = i),
            (this.indexConfig = s));
        }
        name;
        keyAsName;
        type;
        indexConfig;
      }
      class v extends y {
        static [n.i] = "PgArrayBuilder";
        constructor(e, t, i) {
          (super(e, "array", "PgArray"),
            (this.config.baseBuilder = t),
            (this.config.size = i));
        }
        build(e) {
          let t = this.config.baseBuilder.build(e);
          return new $(e, this.config, t);
        }
      }
      class $ extends b {
        constructor(e, t, i, s) {
          (super(e, t),
            (this.baseColumn = i),
            (this.range = s),
            (this.size = t.size));
        }
        size;
        static [n.i] = "PgArray";
        getSQLType() {
          return `${this.baseColumn.getSQLType()}[${"number" == typeof this.size ? this.size : ""}]`;
        }
        mapFromDriverValue(e) {
          return (
            "string" == typeof e &&
              (e = (function (e) {
                let [t] = (function e(t, i = 0) {
                  let s = [],
                    r = i,
                    n = !1;
                  for (; r < t.length; ) {
                    let l = t[r];
                    if ("," === l) {
                      ((n || r === i) && s.push(""), (n = !0), r++);
                      continue;
                    }
                    if (((n = !1), "\\" === l)) {
                      r += 2;
                      continue;
                    }
                    if ('"' === l) {
                      let [e, i] = g(t, r + 1, !0);
                      (s.push(e), (r = i));
                      continue;
                    }
                    if ("}" === l) return [s, r + 1];
                    if ("{" === l) {
                      let [i, n] = e(t, r + 1);
                      (s.push(i), (r = n));
                      continue;
                    }
                    let [a, o] = g(t, r, !1);
                    (s.push(a), (r = o));
                  }
                  return [s, r];
                })(e, 1);
                return t;
              })(e)),
            e.map((e) => this.baseColumn.mapFromDriverValue(e))
          );
        }
        mapToDriverValue(e, t = !1) {
          let i = e.map((e) =>
            null === e
              ? null
              : (0, n.is)(this.baseColumn, $)
                ? this.baseColumn.mapToDriverValue(e, !0)
                : this.baseColumn.mapToDriverValue(e),
          );
          return t
            ? i
            : (function e(t) {
                return `{${t.map((t) => (Array.isArray(t) ? e(t) : "string" == typeof t ? `"${t.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"` : `${t}`)).join(",")}}`;
              })(i);
        }
      }
      class C extends y {
        static [n.i] = "PgEnumObjectColumnBuilder";
        constructor(e, t) {
          (super(e, "string", "PgEnumObjectColumn"), (this.config.enum = t));
        }
        build(e) {
          return new N(e, this.config);
        }
      }
      class N extends b {
        static [n.i] = "PgEnumObjectColumn";
        enum;
        enumValues = this.config.enum.enumValues;
        constructor(e, t) {
          (super(e, t), (this.enum = t.enum));
        }
        getSQLType() {
          return this.enum.enumName;
        }
      }
      let Q = Symbol.for("drizzle:isPgEnum");
      class q extends y {
        static [n.i] = "PgEnumColumnBuilder";
        constructor(e, t) {
          (super(e, "string", "PgEnumColumn"), (this.config.enum = t));
        }
        build(e) {
          return new x(e, this.config);
        }
      }
      class x extends b {
        static [n.i] = "PgEnumColumn";
        enum = this.config.enum;
        enumValues = this.config.enum.enumValues;
        constructor(e, t) {
          (super(e, t), (this.enum = t.enum));
        }
        getSQLType() {
          return this.enum.enumName;
        }
      }
      var T = i(73322);
      let L = {
        startActiveSpan: (e, t) =>
          s
            ? (r || (r = s.trace.getTracer("drizzle-orm", "0.45.1")),
              h(
                (i, s) =>
                  s.startActiveSpan(e, (e) => {
                    try {
                      return t(e);
                    } catch (t) {
                      throw (
                        e.setStatus({
                          code: i.SpanStatusCode.ERROR,
                          message:
                            t instanceof Error ? t.message : "Unknown error",
                        }),
                        t
                      );
                    } finally {
                      e.end();
                    }
                  }),
                s,
                r,
              ))
            : t(),
      };
      var I = i(18611),
        B = i(65258);
      class O {
        static [n.i] = null;
      }
      function j(e) {
        return null != e && "function" == typeof e.getSQL;
      }
      class _ {
        static [n.i] = "StringChunk";
        value;
        constructor(e) {
          this.value = Array.isArray(e) ? e : [e];
        }
        getSQL() {
          return new A([this]);
        }
      }
      class A {
        constructor(e) {
          for (let t of ((this.queryChunks = e), e))
            if ((0, n.is)(t, B.XI)) {
              let e = t[B.XI.Symbol.Schema];
              this.usedTables.push(
                void 0 === e
                  ? t[B.XI.Symbol.Name]
                  : e + "." + t[B.XI.Symbol.Name],
              );
            }
        }
        static [n.i] = "SQL";
        decoder = F;
        shouldInlineParams = !1;
        usedTables = [];
        append(e) {
          return (this.queryChunks.push(...e.queryChunks), this);
        }
        toQuery(e) {
          return L.startActiveSpan("drizzle.buildSQL", (t) => {
            let i = this.buildQueryFromSourceParams(this.queryChunks, e);
            return (
              t?.setAttributes({
                "drizzle.query.text": i.sql,
                "drizzle.query.params": JSON.stringify(i.params),
              }),
              i
            );
          });
        }
        buildQueryFromSourceParams(e, t) {
          let i = Object.assign({}, t, {
              inlineParams: t.inlineParams || this.shouldInlineParams,
              paramStartIndex: t.paramStartIndex || { value: 0 },
            }),
            {
              casing: s,
              escapeName: r,
              escapeParam: l,
              prepareTyping: o,
              inlineParams: u,
              paramStartIndex: c,
            } = i;
          return (function (e) {
            let t = { sql: "", params: [] };
            for (let i of e)
              ((t.sql += i.sql),
                t.params.push(...i.params),
                i.typings?.length &&
                  (t.typings || (t.typings = []),
                  t.typings.push(...i.typings)));
            return t;
          })(
            e.map((e) => {
              if ((0, n.is)(e, _)) return { sql: e.value.join(""), params: [] };
              if ((0, n.is)(e, D)) return { sql: r(e.value), params: [] };
              if (void 0 === e) return { sql: "", params: [] };
              if (Array.isArray(e)) {
                let t = [new _("(")];
                for (let [i, s] of e.entries())
                  (t.push(s), i < e.length - 1 && t.push(new _(", ")));
                return (
                  t.push(new _(")")),
                  this.buildQueryFromSourceParams(t, i)
                );
              }
              if ((0, n.is)(e, A))
                return this.buildQueryFromSourceParams(e.queryChunks, {
                  ...i,
                  inlineParams: u || e.shouldInlineParams,
                });
              if ((0, n.is)(e, B.XI)) {
                let t = e[B.XI.Symbol.Schema],
                  i = e[B.XI.Symbol.Name];
                return {
                  sql: void 0 === t || e[B.HE] ? r(i) : r(t) + "." + r(i),
                  params: [],
                };
              }
              if ((0, n.is)(e, a.V)) {
                let i = s.getColumnCasing(e);
                if ("indexes" === t.invokeSource)
                  return { sql: r(i), params: [] };
                let n = e.table[B.XI.Symbol.Schema];
                return {
                  sql:
                    e.table[B.HE] || void 0 === n
                      ? r(e.table[B.XI.Symbol.Name]) + "." + r(i)
                      : r(n) + "." + r(e.table[B.XI.Symbol.Name]) + "." + r(i),
                  params: [],
                };
              }
              if ((0, n.is)(e, K)) {
                let t = e[I.n].schema,
                  i = e[I.n].name;
                return {
                  sql:
                    void 0 === t || e[I.n].isAlias ? r(i) : r(t) + "." + r(i),
                  params: [],
                };
              }
              if ((0, n.is)(e, R)) {
                if ((0, n.is)(e.value, V))
                  return {
                    sql: l(c.value++, e),
                    params: [e],
                    typings: ["none"],
                  };
                let t =
                  null === e.value ? null : e.encoder.mapToDriverValue(e.value);
                if ((0, n.is)(t, A))
                  return this.buildQueryFromSourceParams([t], i);
                if (u) return { sql: this.mapInlineParam(t, i), params: [] };
                let s = ["none"];
                return (
                  o && (s = [o(e.encoder)]),
                  { sql: l(c.value++, t), params: [t], typings: s }
                );
              }
              return (0, n.is)(e, V)
                ? { sql: l(c.value++, e), params: [e], typings: ["none"] }
                : (0, n.is)(e, A.Aliased) && void 0 !== e.fieldAlias
                  ? { sql: r(e.fieldAlias), params: [] }
                  : (0, n.is)(e, T.n)
                    ? e._.isWith
                      ? { sql: r(e._.alias), params: [] }
                      : this.buildQueryFromSourceParams(
                          [new _("("), e._.sql, new _(") "), new D(e._.alias)],
                          i,
                        )
                    : e && "function" == typeof e && Q in e && !0 === e[Q]
                      ? e.schema
                        ? { sql: r(e.schema) + "." + r(e.enumName), params: [] }
                        : { sql: r(e.enumName), params: [] }
                      : j(e)
                        ? e.shouldOmitSQLParens?.()
                          ? this.buildQueryFromSourceParams([e.getSQL()], i)
                          : this.buildQueryFromSourceParams(
                              [new _("("), e.getSQL(), new _(")")],
                              i,
                            )
                        : u
                          ? { sql: this.mapInlineParam(e, i), params: [] }
                          : {
                              sql: l(c.value++, e),
                              params: [e],
                              typings: ["none"],
                            };
            }),
          );
        }
        mapInlineParam(e, { escapeString: t }) {
          if (null === e) return "null";
          if ("number" == typeof e || "boolean" == typeof e)
            return e.toString();
          if ("string" == typeof e) return t(e);
          if ("object" == typeof e) {
            let i = e.toString();
            return "[object Object]" === i ? t(JSON.stringify(e)) : t(i);
          }
          throw Error("Unexpected param value: " + e);
        }
        getSQL() {
          return this;
        }
        as(e) {
          return void 0 === e ? this : new A.Aliased(this, e);
        }
        mapWith(e) {
          return (
            (this.decoder =
              "function" == typeof e ? { mapFromDriverValue: e } : e),
            this
          );
        }
        inlineParams() {
          return ((this.shouldInlineParams = !0), this);
        }
        if(e) {
          return e ? this : void 0;
        }
      }
      class D {
        constructor(e) {
          this.value = e;
        }
        static [n.i] = "Name";
        brand;
        getSQL() {
          return new A([this]);
        }
      }
      function E(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          "mapToDriverValue" in e &&
          "function" == typeof e.mapToDriverValue
        );
      }
      let F = { mapFromDriverValue: (e) => e },
        X = { mapToDriverValue: (e) => e };
      ({ ...F, ...X });
      class R {
        constructor(e, t = X) {
          ((this.value = e), (this.encoder = t));
        }
        static [n.i] = "Param";
        brand;
        getSQL() {
          return new A([this]);
        }
      }
      function P(e, ...t) {
        let i = [];
        for (let [s, r] of ((t.length > 0 || (e.length > 0 && "" !== e[0])) &&
          i.push(new _(e[0])),
        t.entries()))
          i.push(r, new _(e[s + 1]));
        return new A(i);
      }
      (((e) => {
        ((e.empty = function () {
          return new A([]);
        }),
          (e.fromList = function (e) {
            return new A(e);
          }),
          (e.raw = function (e) {
            return new A([new _(e)]);
          }),
          (e.join = function (e, t) {
            let i = [];
            for (let [s, r] of e.entries())
              (s > 0 && void 0 !== t && i.push(t), i.push(r));
            return new A(i);
          }),
          (e.identifier = function (e) {
            return new D(e);
          }),
          (e.placeholder = function (e) {
            return new V(e);
          }),
          (e.param = function (e, t) {
            return new R(e, t);
          }));
      })(P || (P = {})),
        ((e) => {
          class t {
            constructor(e, t) {
              ((this.sql = e), (this.fieldAlias = t));
            }
            static [n.i] = "SQL.Aliased";
            isSelectionField = !1;
            getSQL() {
              return this.sql;
            }
            clone() {
              return new t(this.sql, this.fieldAlias);
            }
          }
          e.Aliased = t;
        })(A || (A = {})));
      class V {
        constructor(e) {
          this.name = e;
        }
        static [n.i] = "Placeholder";
        getSQL() {
          return new A([this]);
        }
      }
      function z(e, t) {
        return e.map((e) => {
          if ((0, n.is)(e, V)) {
            if (!(e.name in t))
              throw Error(`No value for placeholder "${e.name}" was provided`);
            return t[e.name];
          }
          if ((0, n.is)(e, R) && (0, n.is)(e.value, V)) {
            if (!(e.value.name in t))
              throw Error(
                `No value for placeholder "${e.value.name}" was provided`,
              );
            return e.encoder.mapToDriverValue(t[e.value.name]);
          }
          return e;
        });
      }
      let M = Symbol.for("drizzle:IsDrizzleView");
      class K {
        static [n.i] = "View";
        [I.n];
        [M] = !0;
        constructor({ name: e, schema: t, selectedFields: i, query: s }) {
          this[I.n] = {
            name: e,
            originalName: e,
            schema: t,
            selectedFields: i,
            query: s,
            isExisting: !s,
            isAlias: !1,
          };
        }
        getSQL() {
          return new A([this]);
        }
      }
      ((a.V.prototype.getSQL = function () {
        return new A([this]);
      }),
        (B.XI.prototype.getSQL = function () {
          return new A([this]);
        }),
        (T.n.prototype.getSQL = function () {
          return new A([this]);
        }));
    },
    55251: (e, t, i) => {
      i.d(t, { v: () => m, o: () => d });
      var s = i(67768),
        r = i(7078),
        n = i(77799),
        l = i(25957);
      class a {
        static [n.i] = "SQLiteForeignKeyBuilder";
        reference;
        _onUpdate;
        _onDelete;
        constructor(e, t) {
          ((this.reference = () => {
            let { name: t, columns: i, foreignColumns: s } = e();
            return {
              name: t,
              columns: i,
              foreignTable: s[0].table,
              foreignColumns: s,
            };
          }),
            t &&
              ((this._onUpdate = t.onUpdate), (this._onDelete = t.onDelete)));
        }
        onUpdate(e) {
          return ((this._onUpdate = e), this);
        }
        onDelete(e) {
          return ((this._onDelete = e), this);
        }
        build(e) {
          return new o(e, this);
        }
      }
      class o {
        constructor(e, t) {
          ((this.table = e),
            (this.reference = t.reference),
            (this.onUpdate = t._onUpdate),
            (this.onDelete = t._onDelete));
        }
        static [n.i] = "SQLiteForeignKey";
        reference;
        onUpdate;
        onDelete;
        getName() {
          let { name: e, columns: t, foreignColumns: i } = this.reference(),
            s = t.map((e) => e.name),
            r = i.map((e) => e.name),
            n = [this.table[l.E], ...s, i[0].table[l.E], ...r];
          return e ?? `${n.join("_")}_fk`;
        }
      }
      function u(e, t) {
        return `${e[l.E]}_${t.join("_")}_unique`;
      }
      class c {
        constructor(e, t) {
          ((this.name = t), (this.columns = e));
        }
        static [n.i] = null;
        columns;
        build(e) {
          return new f(e, this.columns, this.name);
        }
      }
      class h {
        static [n.i] = null;
        name;
        constructor(e) {
          this.name = e;
        }
        on(...e) {
          return new c(e, this.name);
        }
      }
      class f {
        constructor(e, t, i) {
          ((this.table = e),
            (this.columns = t),
            (this.name =
              i ??
              u(
                this.table,
                this.columns.map((e) => e.name),
              )));
        }
        static [n.i] = null;
        columns;
        name;
        getName() {
          return this.name;
        }
      }
      class d extends s.Q {
        static [n.i] = "SQLiteColumnBuilder";
        foreignKeyConfigs = [];
        references(e, t = {}) {
          return (this.foreignKeyConfigs.push({ ref: e, actions: t }), this);
        }
        unique(e) {
          return (
            (this.config.isUnique = !0),
            (this.config.uniqueName = e),
            this
          );
        }
        generatedAlwaysAs(e, t) {
          return (
            (this.config.generated = {
              as: e,
              type: "always",
              mode: t?.mode ?? "virtual",
            }),
            this
          );
        }
        buildForeignKeys(e, t) {
          return this.foreignKeyConfigs.map(({ ref: i, actions: s }) =>
            ((i, s) => {
              let r = new a(() => ({ columns: [e], foreignColumns: [i()] }));
              return (
                s.onUpdate && r.onUpdate(s.onUpdate),
                s.onDelete && r.onDelete(s.onDelete),
                r.build(t)
              );
            })(i, s),
          );
        }
      }
      class m extends r.V {
        constructor(e, t) {
          (t.uniqueName || (t.uniqueName = u(e, [t.name])),
            super(e, t),
            (this.table = e));
        }
        static [n.i] = "SQLiteColumn";
      }
    },
    47095: (e, t, i) => {
      i.d(t, { nd: () => p });
      var s = i(77799),
        r = i(17081),
        n = i(78199),
        l = i(55251);
      class a extends l.o {
        static [s.i] = "SQLiteBaseIntegerBuilder";
        constructor(e, t, i) {
          (super(e, t, i), (this.config.autoIncrement = !1));
        }
        primaryKey(e) {
          return (
            e?.autoIncrement && (this.config.autoIncrement = !0),
            (this.config.hasDefault = !0),
            super.primaryKey()
          );
        }
      }
      class o extends l.v {
        static [s.i] = "SQLiteBaseInteger";
        autoIncrement = this.config.autoIncrement;
        getSQLType() {
          return "integer";
        }
      }
      class u extends a {
        static [s.i] = "SQLiteIntegerBuilder";
        constructor(e) {
          super(e, "number", "SQLiteInteger");
        }
        build(e) {
          return new c(e, this.config);
        }
      }
      class c extends o {
        static [s.i] = "SQLiteInteger";
      }
      class h extends a {
        static [s.i] = "SQLiteTimestampBuilder";
        constructor(e, t) {
          (super(e, "date", "SQLiteTimestamp"), (this.config.mode = t));
        }
        defaultNow() {
          return this.default(
            (0,
            r.ll)`(cast((julianday('now') - 2440587.5)*86400000 as integer))`,
          );
        }
        build(e) {
          return new f(e, this.config);
        }
      }
      class f extends o {
        static [s.i] = "SQLiteTimestamp";
        mode = this.config.mode;
        mapFromDriverValue(e) {
          return new Date("timestamp" === this.config.mode ? 1e3 * e : e);
        }
        mapToDriverValue(e) {
          let t = e.getTime();
          return "timestamp" === this.config.mode ? Math.floor(t / 1e3) : t;
        }
      }
      class d extends a {
        static [s.i] = "SQLiteBooleanBuilder";
        constructor(e, t) {
          (super(e, "boolean", "SQLiteBoolean"), (this.config.mode = t));
        }
        build(e) {
          return new m(e, this.config);
        }
      }
      class m extends o {
        static [s.i] = "SQLiteBoolean";
        mode = this.config.mode;
        mapFromDriverValue(e) {
          return 1 === Number(e);
        }
        mapToDriverValue(e) {
          return e ? 1 : 0;
        }
      }
      function p(e, t) {
        let { name: i, config: s } = (0, n.Ll)(e, t);
        return s?.mode === "timestamp" || s?.mode === "timestamp_ms"
          ? new h(i, s.mode)
          : s?.mode === "boolean"
            ? new d(i, s.mode)
            : new u(i);
      }
    },
    61917: (e, t, i) => {
      i.d(t, { x: () => a });
      var s = i(77799),
        r = i(55251);
      class n extends r.o {
        static [s.i] = "SQLiteRealBuilder";
        constructor(e) {
          super(e, "number", "SQLiteReal");
        }
        build(e) {
          return new l(e, this.config);
        }
      }
      class l extends r.v {
        static [s.i] = "SQLiteReal";
        getSQLType() {
          return "real";
        }
      }
      function a(e) {
        return new n(e ?? "");
      }
    },
    49190: (e, t, i) => {
      i.d(t, { Qq: () => c });
      var s = i(77799),
        r = i(78199),
        n = i(55251);
      class l extends n.o {
        static [s.i] = "SQLiteTextBuilder";
        constructor(e, t) {
          (super(e, "string", "SQLiteText"),
            (this.config.enumValues = t.enum),
            (this.config.length = t.length));
        }
        build(e) {
          return new a(e, this.config);
        }
      }
      class a extends n.v {
        static [s.i] = "SQLiteText";
        enumValues = this.config.enumValues;
        length = this.config.length;
        constructor(e, t) {
          super(e, t);
        }
        getSQLType() {
          return `text${this.config.length ? `(${this.config.length})` : ""}`;
        }
      }
      class o extends n.o {
        static [s.i] = "SQLiteTextJsonBuilder";
        constructor(e) {
          super(e, "json", "SQLiteTextJson");
        }
        build(e) {
          return new u(e, this.config);
        }
      }
      class u extends n.v {
        static [s.i] = "SQLiteTextJson";
        getSQLType() {
          return "text";
        }
        mapFromDriverValue(e) {
          return JSON.parse(e);
        }
        mapToDriverValue(e) {
          return JSON.stringify(e);
        }
      }
      function c(e, t = {}) {
        let { name: i, config: s } = (0, r.Ll)(e, t);
        return "json" === s.mode ? new o(i) : new l(i, s);
      }
    },
    72319: (e, t, i) => {
      i.d(t, { jo: () => T, D: () => L });
      var s = i(77799),
        r = i(65258),
        n = i(78199),
        l = i(55251);
      class a extends l.o {
        static [s.i] = "SQLiteBigIntBuilder";
        constructor(e) {
          super(e, "bigint", "SQLiteBigInt");
        }
        build(e) {
          return new o(e, this.config);
        }
      }
      class o extends l.v {
        static [s.i] = "SQLiteBigInt";
        getSQLType() {
          return "blob";
        }
        mapFromDriverValue(e) {
          return "undefined" != typeof Buffer && Buffer.from
            ? BigInt(
                (Buffer.isBuffer(e)
                  ? e
                  : e instanceof ArrayBuffer
                    ? Buffer.from(e)
                    : e.buffer
                      ? Buffer.from(e.buffer, e.byteOffset, e.byteLength)
                      : Buffer.from(e)
                ).toString("utf8"),
              )
            : BigInt(n.su.decode(e));
        }
        mapToDriverValue(e) {
          return Buffer.from(e.toString());
        }
      }
      class u extends l.o {
        static [s.i] = "SQLiteBlobJsonBuilder";
        constructor(e) {
          super(e, "json", "SQLiteBlobJson");
        }
        build(e) {
          return new c(e, this.config);
        }
      }
      class c extends l.v {
        static [s.i] = "SQLiteBlobJson";
        getSQLType() {
          return "blob";
        }
        mapFromDriverValue(e) {
          return "undefined" != typeof Buffer && Buffer.from
            ? JSON.parse(
                (Buffer.isBuffer(e)
                  ? e
                  : e instanceof ArrayBuffer
                    ? Buffer.from(e)
                    : e.buffer
                      ? Buffer.from(e.buffer, e.byteOffset, e.byteLength)
                      : Buffer.from(e)
                ).toString("utf8"),
              )
            : JSON.parse(n.su.decode(e));
        }
        mapToDriverValue(e) {
          return Buffer.from(JSON.stringify(e));
        }
      }
      class h extends l.o {
        static [s.i] = "SQLiteBlobBufferBuilder";
        constructor(e) {
          super(e, "buffer", "SQLiteBlobBuffer");
        }
        build(e) {
          return new f(e, this.config);
        }
      }
      class f extends l.v {
        static [s.i] = "SQLiteBlobBuffer";
        mapFromDriverValue(e) {
          return Buffer.isBuffer(e) ? e : Buffer.from(e);
        }
        getSQLType() {
          return "blob";
        }
      }
      function d(e, t) {
        let { name: i, config: s } = (0, n.Ll)(e, t);
        return s?.mode === "json"
          ? new u(i)
          : s?.mode === "bigint"
            ? new a(i)
            : new h(i);
      }
      class m extends l.o {
        static [s.i] = "SQLiteCustomColumnBuilder";
        constructor(e, t, i) {
          (super(e, "custom", "SQLiteCustomColumn"),
            (this.config.fieldConfig = t),
            (this.config.customTypeParams = i));
        }
        build(e) {
          return new p(e, this.config);
        }
      }
      class p extends l.v {
        static [s.i] = "SQLiteCustomColumn";
        sqlName;
        mapTo;
        mapFrom;
        constructor(e, t) {
          (super(e, t),
            (this.sqlName = t.customTypeParams.dataType(t.fieldConfig)),
            (this.mapTo = t.customTypeParams.toDriver),
            (this.mapFrom = t.customTypeParams.fromDriver));
        }
        getSQLType() {
          return this.sqlName;
        }
        mapFromDriverValue(e) {
          return "function" == typeof this.mapFrom ? this.mapFrom(e) : e;
        }
        mapToDriverValue(e) {
          return "function" == typeof this.mapTo ? this.mapTo(e) : e;
        }
      }
      function g(e) {
        return (t, i) => {
          let { name: s, config: r } = (0, n.Ll)(t, i);
          return new m(s, r, e);
        };
      }
      var y = i(47095);
      class b extends l.o {
        static [s.i] = "SQLiteNumericBuilder";
        constructor(e) {
          super(e, "string", "SQLiteNumeric");
        }
        build(e) {
          return new w(e, this.config);
        }
      }
      class w extends l.v {
        static [s.i] = "SQLiteNumeric";
        mapFromDriverValue(e) {
          return "string" == typeof e ? e : String(e);
        }
        getSQLType() {
          return "numeric";
        }
      }
      class S extends l.o {
        static [s.i] = "SQLiteNumericNumberBuilder";
        constructor(e) {
          super(e, "number", "SQLiteNumericNumber");
        }
        build(e) {
          return new v(e, this.config);
        }
      }
      class v extends l.v {
        static [s.i] = "SQLiteNumericNumber";
        mapFromDriverValue(e) {
          return "number" == typeof e ? e : Number(e);
        }
        mapToDriverValue = String;
        getSQLType() {
          return "numeric";
        }
      }
      class $ extends l.o {
        static [s.i] = "SQLiteNumericBigIntBuilder";
        constructor(e) {
          super(e, "bigint", "SQLiteNumericBigInt");
        }
        build(e) {
          return new C(e, this.config);
        }
      }
      class C extends l.v {
        static [s.i] = "SQLiteNumericBigInt";
        mapFromDriverValue = BigInt;
        mapToDriverValue = String;
        getSQLType() {
          return "numeric";
        }
      }
      function N(e, t) {
        let { name: i, config: s } = (0, n.Ll)(e, t),
          r = s?.mode;
        return "number" === r ? new S(i) : "bigint" === r ? new $(i) : new b(i);
      }
      var Q = i(61917),
        q = i(49190);
      let x = Symbol.for("drizzle:SQLiteInlineForeignKeys");
      class T extends r.XI {
        static [s.i] = "SQLiteTable";
        static Symbol = Object.assign({}, r.XI.Symbol, {
          InlineForeignKeys: x,
        });
        [r.XI.Symbol.Columns];
        [x] = [];
        [r.XI.Symbol.ExtraConfigBuilder] = void 0;
      }
      let L = (e, t, i) =>
        (function (e, t, i, s, n = e) {
          let l = new T(e, void 0, n),
            a = Object.fromEntries(
              Object.entries(
                "function" == typeof t
                  ? t({
                      blob: d,
                      customType: g,
                      integer: y.nd,
                      numeric: N,
                      real: Q.x,
                      text: q.Qq,
                    })
                  : t,
              ).map(([e, t]) => {
                t.setName(e);
                let i = t.build(l);
                return (l[x].push(...t.buildForeignKeys(i, l)), [e, i]);
              }),
            ),
            o = Object.assign(l, a);
          return (
            (o[r.XI.Symbol.Columns] = a),
            (o[r.XI.Symbol.ExtraConfigColumns] = a),
            i && (o[T.Symbol.ExtraConfigBuilder] = i),
            o
          );
        })(e, t, i);
    },
    73322: (e, t, i) => {
      i.d(t, { J: () => n, n: () => r });
      var s = i(77799);
      class r {
        static [s.i] = "Subquery";
        constructor(e, t, i, s = !1, r = []) {
          this._ = {
            brand: "Subquery",
            sql: e,
            selectedFields: t,
            alias: i,
            isWith: s,
            usedTables: r,
          };
        }
      }
      class n extends r {
        static [s.i] = "WithSubquery";
      }
    },
    65258: (e, t, i) => {
      i.d(t, {
        HE: () => c,
        Io: () => m,
        Lf: () => p,
        XI: () => d,
        e: () => l,
      });
      var s = i(77799),
        r = i(25957);
      let n = Symbol.for("drizzle:Schema"),
        l = Symbol.for("drizzle:Columns"),
        a = Symbol.for("drizzle:ExtraConfigColumns"),
        o = Symbol.for("drizzle:OriginalName"),
        u = Symbol.for("drizzle:BaseName"),
        c = Symbol.for("drizzle:IsAlias"),
        h = Symbol.for("drizzle:ExtraConfigBuilder"),
        f = Symbol.for("drizzle:IsDrizzleTable");
      class d {
        static [s.i] = "Table";
        static Symbol = {
          Name: r.E,
          Schema: n,
          OriginalName: o,
          Columns: l,
          ExtraConfigColumns: a,
          BaseName: u,
          IsAlias: c,
          ExtraConfigBuilder: h,
        };
        [r.E];
        [o];
        [n];
        [l];
        [a];
        [u];
        [c] = !1;
        [f] = !0;
        [h] = void 0;
        constructor(e, t, i) {
          ((this[r.E] = this[o] = e), (this[n] = t), (this[u] = i));
        }
      }
      function m(e) {
        return e[r.E];
      }
      function p(e) {
        return `${e[n] ?? "public"}.${e[r.E]}`;
      }
    },
    25957: (e, t, i) => {
      i.d(t, { E: () => s });
      let s = Symbol.for("drizzle:Name");
    },
    78199: (e, t, i) => {
      i.d(t, {
        DV: () => c,
        He: () =>
          function e(t, i) {
            return Object.entries(t).reduce((t, [o, u]) => {
              if ("string" != typeof o) return t;
              let c = i ? [...i, o] : [o];
              return (
                (0, r.is)(u, s.V) ||
                (0, r.is)(u, n.Xs) ||
                (0, r.is)(u, n.Xs.Aliased) ||
                (0, r.is)(u, l.n)
                  ? t.push({ path: c, field: u })
                  : (0, r.is)(u, a.XI)
                    ? t.push(...e(u[a.XI.Symbol.Columns], c))
                    : t.push(...e(u, c)),
                t
              );
            }, []);
          },
        Ll: () => p,
        XJ: () => f,
        YD: () => d,
        a6: () => u,
        q: () => h,
        su: () => g,
        zN: () => m,
      });
      var s = i(7078),
        r = i(77799),
        n = i(17081),
        l = i(73322),
        a = i(65258),
        o = i(18611);
      function u(e, t, i) {
        let o = {},
          u = e.reduce((e, { path: u, field: c }, h) => {
            let f;
            f = (0, r.is)(c, s.V)
              ? c
              : (0, r.is)(c, n.Xs)
                ? c.decoder
                : (0, r.is)(c, l.n)
                  ? c._.sql.decoder
                  : c.sql.decoder;
            let d = e;
            for (let [e, n] of u.entries())
              if (e < u.length - 1) (n in d || (d[n] = {}), (d = d[n]));
              else {
                let e = t[h],
                  l = (d[n] = null === e ? null : f.mapFromDriverValue(e));
                if (i && (0, r.is)(c, s.V) && 2 === u.length) {
                  let e = u[0];
                  e in o
                    ? "string" == typeof o[e] &&
                      o[e] !== (0, a.Io)(c.table) &&
                      (o[e] = !1)
                    : (o[e] = null === l && (0, a.Io)(c.table));
                }
              }
            return e;
          }, {});
        if (i && Object.keys(o).length > 0)
          for (let [e, t] of Object.entries(o))
            "string" != typeof t || i[t] || (u[e] = null);
        return u;
      }
      function c(e, t) {
        let i = Object.keys(e),
          s = Object.keys(t);
        if (i.length !== s.length) return !1;
        for (let [e, t] of i.entries()) if (t !== s[e]) return !1;
        return !0;
      }
      function h(e, t) {
        let i = Object.entries(t)
          .filter(([, e]) => void 0 !== e)
          .map(([t, i]) =>
            (0, r.is)(i, n.Xs) || (0, r.is)(i, s.V)
              ? [t, i]
              : [t, new n.Iw(i, e[a.XI.Symbol.Columns][t])],
          );
        if (0 === i.length) throw Error("No values to set");
        return Object.fromEntries(i);
      }
      function f(e, t) {
        for (let i of t)
          for (let t of Object.getOwnPropertyNames(i.prototype))
            "constructor" !== t &&
              Object.defineProperty(
                e.prototype,
                t,
                Object.getOwnPropertyDescriptor(i.prototype, t) ||
                  Object.create(null),
              );
      }
      function d(e) {
        return e[a.XI.Symbol.Columns];
      }
      function m(e) {
        return (0, r.is)(e, l.n)
          ? e._.alias
          : (0, r.is)(e, n.Ss)
            ? e[o.n].name
            : (0, r.is)(e, n.Xs)
              ? void 0
              : e[a.XI.Symbol.IsAlias]
                ? e[a.XI.Symbol.Name]
                : e[a.XI.Symbol.BaseName];
      }
      function p(e, t) {
        return {
          name: "string" == typeof e && e.length > 0 ? e : "",
          config: "object" == typeof e ? e : t,
        };
      }
      let g = "undefined" == typeof TextDecoder ? null : new TextDecoder();
    },
    18611: (e, t, i) => {
      i.d(t, { n: () => s });
      let s = Symbol.for("drizzle:ViewBaseConfig");
    },
  }));
