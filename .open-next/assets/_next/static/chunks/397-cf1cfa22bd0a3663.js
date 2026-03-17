"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [397],
  {
    3610: (e, t, n) => {
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      (n.d(t, { mK: () => r }),
        "undefined" != typeof window &&
          window.document &&
          window.document.createElement);
    },
    1295: (e, t, n) => {
      function r(e, t, n) {
        if (!t.has(e))
          throw TypeError(
            "attempted to " + n + " private field on non-instance",
          );
        return t.get(e);
      }
      n.d(t, { N: () => d });
      var l,
        o = n(2115),
        i = n(8166),
        u = n(8068),
        a = n(5155);
      function c(e) {
        let t = (function (e) {
            let t = o.forwardRef((e, t) => {
              let { children: n, ...r } = e;
              if (o.isValidElement(n)) {
                let e, l;
                let i =
                    (e = Object.getOwnPropertyDescriptor(
                      n.props,
                      "ref",
                    )?.get) &&
                    "isReactWarning" in e &&
                    e.isReactWarning
                      ? n.ref
                      : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                          "isReactWarning" in e &&
                          e.isReactWarning
                        ? n.props.ref
                        : n.props.ref || n.ref,
                  a = (function (e, t) {
                    let n = { ...t };
                    for (let r in t) {
                      let l = e[r],
                        o = t[r];
                      /^on[A-Z]/.test(r)
                        ? l && o
                          ? (n[r] = (...e) => {
                              let t = o(...e);
                              return (l(...e), t);
                            })
                          : l && (n[r] = l)
                        : "style" === r
                          ? (n[r] = { ...l, ...o })
                          : "className" === r &&
                            (n[r] = [l, o].filter(Boolean).join(" "));
                    }
                    return { ...e, ...n };
                  })(r, n.props);
                return (
                  n.type !== o.Fragment && (a.ref = t ? (0, u.t)(t, i) : i),
                  o.cloneElement(n, a)
                );
              }
              return o.Children.count(n) > 1 ? o.Children.only(null) : null;
            });
            return ((t.displayName = `${e}.SlotClone`), t);
          })(e),
          n = o.forwardRef((e, n) => {
            let { children: r, ...l } = e,
              i = o.Children.toArray(r),
              u = i.find(f);
            if (u) {
              let e = u.props.children,
                r = i.map((t) =>
                  t !== u
                    ? t
                    : o.Children.count(e) > 1
                      ? o.Children.only(null)
                      : o.isValidElement(e)
                        ? e.props.children
                        : null,
                );
              return (0, a.jsx)(t, {
                ...l,
                ref: n,
                children: o.isValidElement(e)
                  ? o.cloneElement(e, void 0, r)
                  : null,
              });
            }
            return (0, a.jsx)(t, { ...l, ref: n, children: r });
          });
        return ((n.displayName = `${e}.Slot`), n);
      }
      var s = Symbol("radix.slottable");
      function f(e) {
        return (
          o.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === s
        );
      }
      function d(e) {
        let t = e + "CollectionProvider",
          [n, r] = (0, i.A)(t),
          [l, s] = n(t, {
            collectionRef: { current: null },
            itemMap: new Map(),
          }),
          f = (e) => {
            let { scope: t, children: n } = e,
              r = o.useRef(null),
              i = o.useRef(new Map()).current;
            return (0, a.jsx)(l, {
              scope: t,
              itemMap: i,
              collectionRef: r,
              children: n,
            });
          };
        f.displayName = t;
        let d = e + "CollectionSlot",
          m = c(d),
          p = o.forwardRef((e, t) => {
            let { scope: n, children: r } = e,
              l = s(d, n),
              o = (0, u.s)(t, l.collectionRef);
            return (0, a.jsx)(m, { ref: o, children: r });
          });
        p.displayName = d;
        let y = e + "CollectionItemSlot",
          v = "data-radix-collection-item",
          N = c(y),
          g = o.forwardRef((e, t) => {
            let { scope: n, children: r, ...l } = e,
              i = o.useRef(null),
              c = (0, u.s)(t, i),
              f = s(y, n);
            return (
              o.useEffect(
                () => (
                  f.itemMap.set(i, { ref: i, ...l }),
                  () => void f.itemMap.delete(i)
                ),
              ),
              (0, a.jsx)(N, { [v]: "", ref: c, children: r })
            );
          });
        return (
          (g.displayName = y),
          [
            { Provider: f, Slot: p, ItemSlot: g },
            function (t) {
              let n = s(e + "CollectionConsumer", t);
              return o.useCallback(() => {
                let e = n.collectionRef.current;
                if (!e) return [];
                let t = Array.from(e.querySelectorAll("[".concat(v, "]")));
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current),
                );
              }, [n.collectionRef, n.itemMap]);
            },
            r,
          ]
        );
      }
    },
    8166: (e, t, n) => {
      n.d(t, { A: () => o });
      var r = n(2115),
        l = n(5155);
      function o(e, t = []) {
        let n = [],
          i = () => {
            let t = n.map((e) => r.createContext(e));
            return function (n) {
              let l = n?.[e] || t;
              return r.useMemo(
                () => ({ [`__scope${e}`]: { ...n, [e]: l } }),
                [n, l],
              );
            };
          };
        return (
          (i.scopeName = e),
          [
            function (t, o) {
              let i = r.createContext(o),
                u = n.length;
              n = [...n, o];
              let a = (t) => {
                let { scope: n, children: o, ...a } = t,
                  c = n?.[e]?.[u] || i,
                  s = r.useMemo(() => a, Object.values(a));
                return (0, l.jsx)(c.Provider, { value: s, children: o });
              };
              return (
                (a.displayName = t + "Provider"),
                [
                  a,
                  function (n, l) {
                    let a = l?.[e]?.[u] || i,
                      c = r.useContext(a);
                    if (c) return c;
                    if (void 0 !== o) return o;
                    throw Error(`\`${n}\` must be used within \`${t}\``);
                  },
                ]
              );
            },
            (function (...e) {
              let t = e[0];
              if (1 === e.length) return t;
              let n = () => {
                let n = e.map((e) => ({
                  useScope: e(),
                  scopeName: e.scopeName,
                }));
                return function (e) {
                  let l = n.reduce((t, { useScope: n, scopeName: r }) => {
                    let l = n(e)[`__scope${r}`];
                    return { ...t, ...l };
                  }, {});
                  return r.useMemo(
                    () => ({ [`__scope${t.scopeName}`]: l }),
                    [l],
                  );
                };
              };
              return ((n.scopeName = t.scopeName), n);
            })(i, ...t),
          ]
        );
      }
    },
    7028: (e, t, n) => {
      n.d(t, { C: () => i });
      var r = n(2115),
        l = n(8068),
        o = n(6611),
        i = (e) => {
          let { present: t, children: n } = e,
            i = (function (e) {
              var t, n;
              let [l, i] = r.useState(),
                a = r.useRef(null),
                c = r.useRef(e),
                s = r.useRef("none"),
                [f, d] =
                  ((t = e ? "mounted" : "unmounted"),
                  (n = {
                    mounted: {
                      UNMOUNT: "unmounted",
                      ANIMATION_OUT: "unmountSuspended",
                    },
                    unmountSuspended: {
                      MOUNT: "mounted",
                      ANIMATION_END: "unmounted",
                    },
                    unmounted: { MOUNT: "mounted" },
                  }),
                  r.useReducer((e, t) => {
                    let r = n[e][t];
                    return null != r ? r : e;
                  }, t));
              return (
                r.useEffect(() => {
                  let e = u(a.current);
                  s.current = "mounted" === f ? e : "none";
                }, [f]),
                (0, o.N)(() => {
                  let t = a.current,
                    n = c.current;
                  if (n !== e) {
                    let r = s.current,
                      l = u(t);
                    (e
                      ? d("MOUNT")
                      : "none" === l ||
                          (null == t ? void 0 : t.display) === "none"
                        ? d("UNMOUNT")
                        : n && r !== l
                          ? d("ANIMATION_OUT")
                          : d("UNMOUNT"),
                      (c.current = e));
                  }
                }, [e, d]),
                (0, o.N)(() => {
                  if (l) {
                    var e;
                    let t;
                    let n =
                        null !== (e = l.ownerDocument.defaultView) &&
                        void 0 !== e
                          ? e
                          : window,
                      r = (e) => {
                        let r = u(a.current).includes(
                          CSS.escape(e.animationName),
                        );
                        if (
                          e.target === l &&
                          r &&
                          (d("ANIMATION_END"), !c.current)
                        ) {
                          let e = l.style.animationFillMode;
                          ((l.style.animationFillMode = "forwards"),
                            (t = n.setTimeout(() => {
                              "forwards" === l.style.animationFillMode &&
                                (l.style.animationFillMode = e);
                            })));
                        }
                      },
                      o = (e) => {
                        e.target === l && (s.current = u(a.current));
                      };
                    return (
                      l.addEventListener("animationstart", o),
                      l.addEventListener("animationcancel", r),
                      l.addEventListener("animationend", r),
                      () => {
                        (n.clearTimeout(t),
                          l.removeEventListener("animationstart", o),
                          l.removeEventListener("animationcancel", r),
                          l.removeEventListener("animationend", r));
                      }
                    );
                  }
                  d("ANIMATION_END");
                }, [l, d]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(f),
                  ref: r.useCallback((e) => {
                    ((a.current = e ? getComputedStyle(e) : null), i(e));
                  }, []),
                }
              );
            })(t),
            a =
              "function" == typeof n
                ? n({ present: i.isPresent })
                : r.Children.only(n),
            c = (0, l.s)(
              i.ref,
              (function (e) {
                var t, n;
                let r =
                    null ===
                      (t = Object.getOwnPropertyDescriptor(e.props, "ref")) ||
                    void 0 === t
                      ? void 0
                      : t.get,
                  l = r && "isReactWarning" in r && r.isReactWarning;
                return l
                  ? e.ref
                  : (l =
                        (r =
                          null ===
                            (n = Object.getOwnPropertyDescriptor(e, "ref")) ||
                          void 0 === n
                            ? void 0
                            : n.get) &&
                        "isReactWarning" in r &&
                        r.isReactWarning)
                    ? e.props.ref
                    : e.props.ref || e.ref;
              })(a),
            );
          return "function" == typeof n || i.isPresent
            ? r.cloneElement(a, { ref: c })
            : null;
        };
      function u(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      i.displayName = "Presence";
    },
    9997: (e, t, n) => {
      n.d(t, { sG: () => c, hO: () => s });
      var r = n(2115),
        l = n(7650),
        o = n(8068),
        i = n(5155),
        u = Symbol("radix.slottable");
      function a(e) {
        return (
          r.isValidElement(e) &&
          "function" == typeof e.type &&
          "__radixId" in e.type &&
          e.type.__radixId === u
        );
      }
      var c = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
      ].reduce((e, t) => {
        let n = (function (e) {
            let t = (function (e) {
                let t = r.forwardRef((e, t) => {
                  let { children: n, ...l } = e;
                  if (r.isValidElement(n)) {
                    let e, i;
                    let u =
                        (e = Object.getOwnPropertyDescriptor(
                          n.props,
                          "ref",
                        )?.get) &&
                        "isReactWarning" in e &&
                        e.isReactWarning
                          ? n.ref
                          : (e = Object.getOwnPropertyDescriptor(
                                n,
                                "ref",
                              )?.get) &&
                              "isReactWarning" in e &&
                              e.isReactWarning
                            ? n.props.ref
                            : n.props.ref || n.ref,
                      a = (function (e, t) {
                        let n = { ...t };
                        for (let r in t) {
                          let l = e[r],
                            o = t[r];
                          /^on[A-Z]/.test(r)
                            ? l && o
                              ? (n[r] = (...e) => {
                                  let t = o(...e);
                                  return (l(...e), t);
                                })
                              : l && (n[r] = l)
                            : "style" === r
                              ? (n[r] = { ...l, ...o })
                              : "className" === r &&
                                (n[r] = [l, o].filter(Boolean).join(" "));
                        }
                        return { ...e, ...n };
                      })(l, n.props);
                    return (
                      n.type !== r.Fragment && (a.ref = t ? (0, o.t)(t, u) : u),
                      r.cloneElement(n, a)
                    );
                  }
                  return r.Children.count(n) > 1 ? r.Children.only(null) : null;
                });
                return ((t.displayName = `${e}.SlotClone`), t);
              })(e),
              n = r.forwardRef((e, n) => {
                let { children: l, ...o } = e,
                  u = r.Children.toArray(l),
                  c = u.find(a);
                if (c) {
                  let e = c.props.children,
                    l = u.map((t) =>
                      t !== c
                        ? t
                        : r.Children.count(e) > 1
                          ? r.Children.only(null)
                          : r.isValidElement(e)
                            ? e.props.children
                            : null,
                    );
                  return (0, i.jsx)(t, {
                    ...o,
                    ref: n,
                    children: r.isValidElement(e)
                      ? r.cloneElement(e, void 0, l)
                      : null,
                  });
                }
                return (0, i.jsx)(t, { ...o, ref: n, children: l });
              });
            return ((n.displayName = `${e}.Slot`), n);
          })(`Primitive.${t}`),
          l = r.forwardRef((e, r) => {
            let { asChild: l, ...o } = e,
              u = l ? n : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, i.jsx)(u, { ...o, ref: r })
            );
          });
        return ((l.displayName = `Primitive.${t}`), { ...e, [t]: l });
      }, {});
      function s(e, t) {
        e && l.flushSync(() => e.dispatchEvent(t));
      }
    },
    1524: (e, t, n) => {
      n.d(t, { c: () => l });
      var r = n(2115);
      function l(e) {
        let t = r.useRef(e);
        return (
          r.useEffect(() => {
            t.current = e;
          }),
          r.useMemo(
            () =>
              (...e) =>
                t.current?.(...e),
            [],
          )
        );
      }
    },
    1488: (e, t, n) => {
      n.d(t, { i: () => u });
      var r,
        l = n(2115),
        o = n(6611),
        i =
          (r || (r = n.t(l, 2)))[" useInsertionEffect ".trim().toString()] ||
          o.N;
      function u({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r,
      }) {
        let [o, u, a] = (function ({ defaultProp: e, onChange: t }) {
            let [n, r] = l.useState(e),
              o = l.useRef(n),
              u = l.useRef(t);
            return (
              i(() => {
                u.current = t;
              }, [t]),
              l.useEffect(() => {
                o.current !== n && (u.current?.(n), (o.current = n));
              }, [n, o]),
              [n, r, u]
            );
          })({ defaultProp: t, onChange: n }),
          c = void 0 !== e,
          s = c ? e : o;
        {
          let t = l.useRef(void 0 !== e);
          l.useEffect(() => {
            let e = t.current;
            if (e !== c) {
              let t = c ? "controlled" : "uncontrolled";
              console.warn(
                `${r} is changing from ${e ? "controlled" : "uncontrolled"} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
              );
            }
            t.current = c;
          }, [c, r]);
        }
        return [
          s,
          l.useCallback(
            (t) => {
              if (c) {
                let n = "function" == typeof t ? t(e) : t;
                n !== e && a.current?.(n);
              } else u(t);
            },
            [c, e, u, a],
          ),
        ];
      }
      Symbol("RADIX:SYNC_STATE");
    },
    6611: (e, t, n) => {
      n.d(t, { N: () => l });
      var r = n(2115),
        l = globalThis?.document ? r.useLayoutEffect : () => {};
    },
  },
]);
