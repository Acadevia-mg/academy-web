(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [998],
  {
    6046: (e, t, i) => {
      "use strict";
      var n = i(6658);
      (i.o(n, "notFound") &&
        i.d(t, {
          notFound: function () {
            return n.notFound;
          },
        }),
        i.o(n, "usePathname") &&
          i.d(t, {
            usePathname: function () {
              return n.usePathname;
            },
          }),
        i.o(n, "useRouter") &&
          i.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }));
    },
    4534: () => {},
    6698: (e, t, i) => {
      "use strict";
      i.d(t, { Ay: () => y });
      var n = i(2115),
        r = Object.defineProperty,
        o = (e, t, i) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (e[t] = i),
        h = (e, t, i) => o(e, "symbol" != typeof t ? t + "" : t, i);
      let a = { x: 0, y: 0, width: 0, height: 0, unit: "px" },
        s = (e, t, i) => Math.min(Math.max(e, t), i),
        d = (...e) => e.filter((e) => e && "string" == typeof e).join(" "),
        l = (e, t) =>
          e === t ||
          (e.width === t.width &&
            e.height === t.height &&
            e.x === t.x &&
            e.y === t.y &&
            e.unit === t.unit);
      function c(e, t, i) {
        return "%" === e.unit
          ? { ...a, ...e, unit: "%" }
          : {
              unit: "%",
              x: e.x ? (e.x / t) * 100 : 0,
              y: e.y ? (e.y / i) * 100 : 0,
              width: e.width ? (e.width / t) * 100 : 0,
              height: e.height ? (e.height / i) * 100 : 0,
            };
      }
      function w(e, t, i) {
        return e.unit
          ? "px" === e.unit
            ? { ...a, ...e, unit: "px" }
            : {
                unit: "px",
                x: e.x ? (e.x * t) / 100 : 0,
                y: e.y ? (e.y * i) / 100 : 0,
                width: e.width ? (e.width * t) / 100 : 0,
                height: e.height ? (e.height * i) / 100 : 0,
              }
          : { ...a, ...e, unit: "px" };
      }
      function p(e, t, i, n, r, o = 0, h = 0, a = n, s = r) {
        let d = { ...e },
          l = Math.min(o, n),
          c = Math.min(h, r),
          w = Math.min(a, n),
          g = Math.min(s, r);
        (t &&
          (t > 1
            ? ((c = (l = h ? h * t : l) / t), (w = a * t))
            : ((l = (c = o ? o / t : c) * t), (g = s / t))),
          d.y < 0 && ((d.height = Math.max(d.height + d.y, c)), (d.y = 0)),
          d.x < 0 && ((d.width = Math.max(d.width + d.x, l)), (d.x = 0)));
        let u = n - (d.x + d.width);
        u < 0 && ((d.x = Math.min(d.x, n - l)), (d.width += u));
        let m = r - (d.y + d.height);
        if (
          (m < 0 && ((d.y = Math.min(d.y, r - c)), (d.height += m)),
          d.width < l &&
            (("sw" === i || "nw" == i) && (d.x -= l - d.width), (d.width = l)),
          d.height < c &&
            (("nw" === i || "ne" == i) && (d.y -= c - d.height),
            (d.height = c)),
          d.width > w &&
            (("sw" === i || "nw" == i) && (d.x -= w - d.width), (d.width = w)),
          d.height > g &&
            (("nw" === i || "ne" == i) && (d.y -= g - d.height),
            (d.height = g)),
          t)
        ) {
          let e = d.width / d.height;
          if (e < t) {
            let e = Math.max(d.width / t, c);
            (("nw" === i || "ne" == i) && (d.y -= e - d.height),
              (d.height = e));
          } else if (e > t) {
            let e = Math.max(d.height * t, l);
            (("sw" === i || "nw" == i) && (d.x -= e - d.width), (d.width = e));
          }
        }
        return d;
      }
      let g = { capture: !0, passive: !1 },
        u = 0,
        m = class e extends n.PureComponent {
          constructor() {
            (super(...arguments),
              h(this, "docMoveBound", !1),
              h(this, "mouseDownOnCrop", !1),
              h(this, "dragStarted", !1),
              h(this, "evData", {
                startClientX: 0,
                startClientY: 0,
                startCropX: 0,
                startCropY: 0,
                clientX: 0,
                clientY: 0,
                isResize: !0,
              }),
              h(this, "componentRef", (0, n.createRef)()),
              h(this, "mediaRef", (0, n.createRef)()),
              h(this, "resizeObserver"),
              h(this, "initChangeCalled", !1),
              h(this, "instanceId", `rc-${u++}`),
              h(this, "state", { cropIsActive: !1, newCropIsBeingDrawn: !1 }),
              h(this, "onCropPointerDown", (e) => {
                let { crop: t, disabled: i } = this.props,
                  n = this.getBox();
                if (!t) return;
                let r = w(t, n.width, n.height);
                if (i) return;
                (e.cancelable && e.preventDefault(),
                  this.bindDocMove(),
                  this.componentRef.current.focus({ preventScroll: !0 }));
                let o = e.target.dataset.ord,
                  h = e.clientX,
                  a = e.clientY,
                  s = r.x,
                  d = r.y;
                if (o) {
                  let t = e.clientX - n.x,
                    i = e.clientY - n.y,
                    l = 0,
                    c = 0;
                  ("ne" === o || "e" == o
                    ? ((l = t - (r.x + r.width)),
                      (c = i - r.y),
                      (s = r.x),
                      (d = r.y + r.height))
                    : "se" === o || "s" === o
                      ? ((l = t - (r.x + r.width)),
                        (c = i - (r.y + r.height)),
                        (s = r.x),
                        (d = r.y))
                      : "sw" === o || "w" == o
                        ? ((l = t - r.x),
                          (c = i - (r.y + r.height)),
                          (s = r.x + r.width),
                          (d = r.y))
                        : ("nw" === o || "n" == o) &&
                          ((l = t - r.x),
                          (c = i - r.y),
                          (s = r.x + r.width),
                          (d = r.y + r.height)),
                    (h = s + n.x + l),
                    (a = d + n.y + c));
                }
                ((this.evData = {
                  startClientX: h,
                  startClientY: a,
                  startCropX: s,
                  startCropY: d,
                  clientX: e.clientX,
                  clientY: e.clientY,
                  isResize: !!o,
                  ord: o,
                }),
                  (this.mouseDownOnCrop = !0),
                  this.setState({ cropIsActive: !0 }));
              }),
              h(this, "onComponentPointerDown", (e) => {
                let {
                    crop: t,
                    disabled: i,
                    locked: n,
                    keepSelection: r,
                    onChange: o,
                  } = this.props,
                  h = this.getBox();
                if (i || n || (r && t)) return;
                (e.cancelable && e.preventDefault(),
                  this.bindDocMove(),
                  this.componentRef.current.focus({ preventScroll: !0 }));
                let a = e.clientX - h.x,
                  s = e.clientY - h.y,
                  d = { unit: "px", x: a, y: s, width: 0, height: 0 };
                ((this.evData = {
                  startClientX: e.clientX,
                  startClientY: e.clientY,
                  startCropX: a,
                  startCropY: s,
                  clientX: e.clientX,
                  clientY: e.clientY,
                  isResize: !0,
                }),
                  (this.mouseDownOnCrop = !0),
                  o(w(d, h.width, h.height), c(d, h.width, h.height)),
                  this.setState({ cropIsActive: !0, newCropIsBeingDrawn: !0 }));
              }),
              h(this, "onDocPointerMove", (e) => {
                let t;
                let {
                    crop: i,
                    disabled: n,
                    onChange: r,
                    onDragStart: o,
                  } = this.props,
                  h = this.getBox();
                if (n || !i || !this.mouseDownOnCrop) return;
                (e.cancelable && e.preventDefault(),
                  this.dragStarted || ((this.dragStarted = !0), o && o(e)));
                let { evData: a } = this;
                ((a.clientX = e.clientX),
                  (a.clientY = e.clientY),
                  l(
                    i,
                    (t = a.isResize ? this.resizeCrop() : this.dragCrop()),
                  ) || r(w(t, h.width, h.height), c(t, h.width, h.height)));
              }),
              h(this, "onComponentKeyDown", (t) => {
                let {
                  crop: i,
                  disabled: n,
                  onChange: r,
                  onComplete: o,
                } = this.props;
                if (n) return;
                let h = t.key,
                  a = !1;
                if (!i) return;
                let d = this.getBox(),
                  l = this.makePixelCrop(d),
                  p = (navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey)
                    ? e.nudgeStepLarge
                    : t.shiftKey
                      ? e.nudgeStepMedium
                      : e.nudgeStep;
                if (
                  ("ArrowLeft" === h
                    ? ((l.x -= p), (a = !0))
                    : "ArrowRight" === h
                      ? ((l.x += p), (a = !0))
                      : "ArrowUp" === h
                        ? ((l.y -= p), (a = !0))
                        : "ArrowDown" === h && ((l.y += p), (a = !0)),
                  a)
                ) {
                  (t.cancelable && t.preventDefault(),
                    (l.x = s(l.x, 0, d.width - l.width)),
                    (l.y = s(l.y, 0, d.height - l.height)));
                  let e = w(l, d.width, d.height),
                    i = c(l, d.width, d.height);
                  (r(e, i), o && o(e, i));
                }
              }),
              h(this, "onHandlerKeyDown", (t, i) => {
                let {
                    aspect: n = 0,
                    crop: r,
                    disabled: o,
                    minWidth: h = 0,
                    minHeight: a = 0,
                    maxWidth: s,
                    maxHeight: d,
                    onChange: g,
                    onComplete: u,
                  } = this.props,
                  m = this.getBox();
                if (
                  o ||
                  !r ||
                  ("ArrowUp" !== t.key &&
                    "ArrowDown" !== t.key &&
                    "ArrowLeft" !== t.key &&
                    "ArrowRight" !== t.key)
                )
                  return;
                (t.stopPropagation(), t.preventDefault());
                let y = (
                    navigator.platform.match("Mac") ? t.metaKey : t.ctrlKey
                  )
                    ? e.nudgeStepLarge
                    : t.shiftKey
                      ? e.nudgeStepMedium
                      : e.nudgeStep,
                  x = p(
                    (function (e, t, i, n) {
                      let r = { ...e };
                      return (
                        "ArrowLeft" === t
                          ? "nw" === n
                            ? ((r.x -= i),
                              (r.y -= i),
                              (r.width += i),
                              (r.height += i))
                            : "w" === n
                              ? ((r.x -= i), (r.width += i))
                              : "sw" === n
                                ? ((r.x -= i), (r.width += i), (r.height += i))
                                : "ne" === n
                                  ? ((r.y += i),
                                    (r.width -= i),
                                    (r.height -= i))
                                  : "e" === n
                                    ? (r.width -= i)
                                    : "se" === n &&
                                      ((r.width -= i), (r.height -= i))
                          : "ArrowRight" === t &&
                            ("nw" === n
                              ? ((r.x += i),
                                (r.y += i),
                                (r.width -= i),
                                (r.height -= i))
                              : "w" === n
                                ? ((r.x += i), (r.width -= i))
                                : "sw" === n
                                  ? ((r.x += i),
                                    (r.width -= i),
                                    (r.height -= i))
                                  : "ne" === n
                                    ? ((r.y -= i),
                                      (r.width += i),
                                      (r.height += i))
                                    : "e" === n
                                      ? (r.width += i)
                                      : "se" === n &&
                                        ((r.width += i), (r.height += i))),
                        "ArrowUp" === t
                          ? "nw" === n
                            ? ((r.x -= i),
                              (r.y -= i),
                              (r.width += i),
                              (r.height += i))
                            : "n" === n
                              ? ((r.y -= i), (r.height += i))
                              : "ne" === n
                                ? ((r.y -= i), (r.width += i), (r.height += i))
                                : "sw" === n
                                  ? ((r.x += i),
                                    (r.width -= i),
                                    (r.height -= i))
                                  : "s" === n
                                    ? (r.height -= i)
                                    : "se" === n &&
                                      ((r.width -= i), (r.height -= i))
                          : "ArrowDown" === t &&
                            ("nw" === n
                              ? ((r.x += i),
                                (r.y += i),
                                (r.width -= i),
                                (r.height -= i))
                              : "n" === n
                                ? ((r.y += i), (r.height -= i))
                                : "ne" === n
                                  ? ((r.y += i),
                                    (r.width -= i),
                                    (r.height -= i))
                                  : "sw" === n
                                    ? ((r.x -= i),
                                      (r.width += i),
                                      (r.height += i))
                                    : "s" === n
                                      ? (r.height += i)
                                      : "se" === n &&
                                        ((r.width += i), (r.height += i))),
                        r
                      );
                    })(w(r, m.width, m.height), t.key, y, i),
                    n,
                    i,
                    m.width,
                    m.height,
                    h,
                    a,
                    s,
                    d,
                  );
                if (!l(r, x)) {
                  let e = c(x, m.width, m.height);
                  (g(x, e), u && u(x, e));
                }
              }),
              h(this, "onDocPointerDone", (e) => {
                let {
                    crop: t,
                    disabled: i,
                    onComplete: n,
                    onDragEnd: r,
                  } = this.props,
                  o = this.getBox();
                (this.unbindDocMove(),
                  !(i || !t) &&
                    this.mouseDownOnCrop &&
                    ((this.mouseDownOnCrop = !1),
                    (this.dragStarted = !1),
                    r && r(e),
                    n && n(w(t, o.width, o.height), c(t, o.width, o.height)),
                    this.setState({
                      cropIsActive: !1,
                      newCropIsBeingDrawn: !1,
                    })));
              }),
              h(this, "onDragFocus", () => {
                var e;
                null == (e = this.componentRef.current) || e.scrollTo(0, 0);
              }));
          }
          get document() {
            return document;
          }
          getBox() {
            let e = this.mediaRef.current;
            if (!e) return { x: 0, y: 0, width: 0, height: 0 };
            let { x: t, y: i, width: n, height: r } = e.getBoundingClientRect();
            return { x: t, y: i, width: n, height: r };
          }
          componentDidUpdate(e) {
            let { crop: t, onComplete: i } = this.props;
            if (i && !e.crop && t) {
              let { width: e, height: n } = this.getBox();
              e && n && i(w(t, e, n), c(t, e, n));
            }
          }
          componentWillUnmount() {
            (this.resizeObserver && this.resizeObserver.disconnect(),
              this.unbindDocMove());
          }
          bindDocMove() {
            this.docMoveBound ||
              (this.document.addEventListener(
                "pointermove",
                this.onDocPointerMove,
                g,
              ),
              this.document.addEventListener(
                "pointerup",
                this.onDocPointerDone,
                g,
              ),
              this.document.addEventListener(
                "pointercancel",
                this.onDocPointerDone,
                g,
              ),
              (this.docMoveBound = !0));
          }
          unbindDocMove() {
            this.docMoveBound &&
              (this.document.removeEventListener(
                "pointermove",
                this.onDocPointerMove,
                g,
              ),
              this.document.removeEventListener(
                "pointerup",
                this.onDocPointerDone,
                g,
              ),
              this.document.removeEventListener(
                "pointercancel",
                this.onDocPointerDone,
                g,
              ),
              (this.docMoveBound = !1));
          }
          getCropStyle() {
            let { crop: e } = this.props;
            if (e)
              return {
                top: `${e.y}${e.unit}`,
                left: `${e.x}${e.unit}`,
                width: `${e.width}${e.unit}`,
                height: `${e.height}${e.unit}`,
              };
          }
          dragCrop() {
            let { evData: e } = this,
              t = this.getBox(),
              i = this.makePixelCrop(t),
              n = e.clientX - e.startClientX,
              r = e.clientY - e.startClientY;
            return (
              (i.x = s(e.startCropX + n, 0, t.width - i.width)),
              (i.y = s(e.startCropY + r, 0, t.height - i.height)),
              i
            );
          }
          getPointRegion(e, t, i, n) {
            let r;
            let { evData: o } = this,
              h = o.clientX - e.x,
              a = o.clientY - e.y;
            return (
              (r =
                n && t
                  ? "nw" === t || "n" === t || "ne" === t
                  : a < o.startCropY),
              (
                i && t
                  ? "nw" === t || "w" === t || "sw" === t
                  : h < o.startCropX
              )
                ? r
                  ? "nw"
                  : "sw"
                : r
                  ? "ne"
                  : "se"
            );
          }
          resolveMinDimensions(e, t, i = 0, n = 0) {
            let r = Math.min(i, e.width),
              o = Math.min(n, e.height);
            return t && (r || o)
              ? t > 1
                ? r
                  ? [r, r / t]
                  : [o * t, o]
                : o
                  ? [o * t, o]
                  : [r, r / t]
              : [r, o];
          }
          resizeCrop() {
            let { evData: t } = this,
              { aspect: i = 0, maxWidth: n, maxHeight: r } = this.props,
              o = this.getBox(),
              [h, a] = this.resolveMinDimensions(
                o,
                i,
                this.props.minWidth,
                this.props.minHeight,
              ),
              d = this.makePixelCrop(o),
              l = this.getPointRegion(o, t.ord, h, a),
              c = t.ord || l,
              w = t.clientX - t.startClientX,
              g = t.clientY - t.startClientY;
            (((h && "nw" === c) || "w" === c || "sw" === c) &&
              (w = Math.min(w, -h)),
              ((a && "nw" === c) || "n" === c || "ne" === c) &&
                (g = Math.min(g, -a)));
            let u = { unit: "px", x: 0, y: 0, width: 0, height: 0 };
            "ne" === l
              ? ((u.x = t.startCropX),
                (u.width = w),
                i ? (u.height = u.width / i) : (u.height = Math.abs(g)),
                (u.y = t.startCropY - u.height))
              : "se" === l
                ? ((u.x = t.startCropX),
                  (u.y = t.startCropY),
                  (u.width = w),
                  i ? (u.height = u.width / i) : (u.height = g))
                : "sw" === l
                  ? ((u.x = t.startCropX + w),
                    (u.y = t.startCropY),
                    (u.width = Math.abs(w)),
                    i ? (u.height = u.width / i) : (u.height = g))
                  : "nw" === l &&
                    ((u.x = t.startCropX + w),
                    (u.width = Math.abs(w)),
                    i
                      ? ((u.height = u.width / i),
                        (u.y = t.startCropY - u.height))
                      : ((u.height = Math.abs(g)), (u.y = t.startCropY + g)));
            let m = p(u, i, l, o.width, o.height, h, a, n, r);
            return (
              i || e.xyOrds.indexOf(c) > -1
                ? (d = m)
                : e.xOrds.indexOf(c) > -1
                  ? ((d.x = m.x), (d.width = m.width))
                  : e.yOrds.indexOf(c) > -1 &&
                    ((d.y = m.y), (d.height = m.height)),
              (d.x = s(d.x, 0, o.width - d.width)),
              (d.y = s(d.y, 0, o.height - d.height)),
              d
            );
          }
          renderCropSelection() {
            let {
                ariaLabels: t = e.defaultProps.ariaLabels,
                disabled: i,
                locked: r,
                renderSelectionAddon: o,
                ruleOfThirds: h,
                crop: a,
              } = this.props,
              s = this.getCropStyle();
            if (a)
              return n.createElement(
                "div",
                {
                  style: s,
                  className: "ReactCrop__crop-selection",
                  onPointerDown: this.onCropPointerDown,
                  "aria-label": t.cropArea,
                  tabIndex: 0,
                  onKeyDown: this.onComponentKeyDown,
                  role: "group",
                },
                !i &&
                  !r &&
                  n.createElement(
                    "div",
                    {
                      className: "ReactCrop__drag-elements",
                      onFocus: this.onDragFocus,
                    },
                    n.createElement("div", {
                      className: "ReactCrop__drag-bar ord-n",
                      "data-ord": "n",
                    }),
                    n.createElement("div", {
                      className: "ReactCrop__drag-bar ord-e",
                      "data-ord": "e",
                    }),
                    n.createElement("div", {
                      className: "ReactCrop__drag-bar ord-s",
                      "data-ord": "s",
                    }),
                    n.createElement("div", {
                      className: "ReactCrop__drag-bar ord-w",
                      "data-ord": "w",
                    }),
                    n.createElement("div", {
                      className: "ReactCrop__drag-handle ord-nw",
                      "data-ord": "nw",
                      tabIndex: 0,
                      "aria-label": t.nwDragHandle,
                      onKeyDown: (e) => this.onHandlerKeyDown(e, "nw"),
                      role: "button",
                    }),
                    n.createElement("div", {
                      className: "ReactCrop__drag-handle ord-n",
                      "data-ord": "n",
                      tabIndex: 0,
                      "aria-label": t.nDragHandle,
                      onKeyDown: (e) => this.onHandlerKeyDown(e, "n"),
                      role: "button",
                    }),
                    n.createElement("div", {
                      className: "ReactCrop__drag-handle ord-ne",
                      "data-ord": "ne",
                      tabIndex: 0,
                      "aria-label": t.neDragHandle,
                      onKeyDown: (e) => this.onHandlerKeyDown(e, "ne"),
                      role: "button",
                    }),
                    n.createElement("div", {
                      className: "ReactCrop__drag-handle ord-e",
                      "data-ord": "e",
                      tabIndex: 0,
                      "aria-label": t.eDragHandle,
                      onKeyDown: (e) => this.onHandlerKeyDown(e, "e"),
                      role: "button",
                    }),
                    n.createElement("div", {
                      className: "ReactCrop__drag-handle ord-se",
                      "data-ord": "se",
                      tabIndex: 0,
                      "aria-label": t.seDragHandle,
                      onKeyDown: (e) => this.onHandlerKeyDown(e, "se"),
                      role: "button",
                    }),
                    n.createElement("div", {
                      className: "ReactCrop__drag-handle ord-s",
                      "data-ord": "s",
                      tabIndex: 0,
                      "aria-label": t.sDragHandle,
                      onKeyDown: (e) => this.onHandlerKeyDown(e, "s"),
                      role: "button",
                    }),
                    n.createElement("div", {
                      className: "ReactCrop__drag-handle ord-sw",
                      "data-ord": "sw",
                      tabIndex: 0,
                      "aria-label": t.swDragHandle,
                      onKeyDown: (e) => this.onHandlerKeyDown(e, "sw"),
                      role: "button",
                    }),
                    n.createElement("div", {
                      className: "ReactCrop__drag-handle ord-w",
                      "data-ord": "w",
                      tabIndex: 0,
                      "aria-label": t.wDragHandle,
                      onKeyDown: (e) => this.onHandlerKeyDown(e, "w"),
                      role: "button",
                    }),
                  ),
                o &&
                  n.createElement(
                    "div",
                    {
                      className: "ReactCrop__selection-addon",
                      onPointerDown: (e) => e.stopPropagation(),
                    },
                    o(this.state),
                  ),
                h &&
                  n.createElement(
                    n.Fragment,
                    null,
                    n.createElement("div", {
                      className: "ReactCrop__rule-of-thirds-hz",
                    }),
                    n.createElement("div", {
                      className: "ReactCrop__rule-of-thirds-vt",
                    }),
                  ),
              );
          }
          makePixelCrop(e) {
            return w({ ...a, ...(this.props.crop || {}) }, e.width, e.height);
          }
          render() {
            let {
                aspect: e,
                children: t,
                circularCrop: i,
                className: r,
                crop: o,
                disabled: h,
                locked: a,
                style: s,
                ruleOfThirds: l,
              } = this.props,
              { cropIsActive: c, newCropIsBeingDrawn: w } = this.state,
              p = o ? this.renderCropSelection() : null,
              g = d(
                "ReactCrop",
                r,
                c && "ReactCrop--active",
                h && "ReactCrop--disabled",
                a && "ReactCrop--locked",
                w && "ReactCrop--new-crop",
                o && e && "ReactCrop--fixed-aspect",
                o && i && "ReactCrop--circular-crop",
                o && l && "ReactCrop--rule-of-thirds",
                !this.dragStarted &&
                  o &&
                  !o.width &&
                  !o.height &&
                  "ReactCrop--invisible-crop",
                i && "ReactCrop--no-animate",
              );
            return n.createElement(
              "div",
              { ref: this.componentRef, className: g, style: s },
              n.createElement(
                "div",
                {
                  ref: this.mediaRef,
                  className: "ReactCrop__child-wrapper",
                  onPointerDown: this.onComponentPointerDown,
                },
                t,
              ),
              o
                ? n.createElement(
                    "svg",
                    {
                      className: "ReactCrop__crop-mask",
                      width: "100%",
                      height: "100%",
                    },
                    n.createElement(
                      "defs",
                      null,
                      n.createElement(
                        "mask",
                        { id: `hole-${this.instanceId}` },
                        n.createElement("rect", {
                          width: "100%",
                          height: "100%",
                          fill: "white",
                        }),
                        i
                          ? n.createElement("ellipse", {
                              cx: `${o.x + o.width / 2}${o.unit}`,
                              cy: `${o.y + o.height / 2}${o.unit}`,
                              rx: `${o.width / 2}${o.unit}`,
                              ry: `${o.height / 2}${o.unit}`,
                              fill: "black",
                            })
                          : n.createElement("rect", {
                              x: `${o.x}${o.unit}`,
                              y: `${o.y}${o.unit}`,
                              width: `${o.width}${o.unit}`,
                              height: `${o.height}${o.unit}`,
                              fill: "black",
                            }),
                      ),
                    ),
                    n.createElement("rect", {
                      fill: "black",
                      fillOpacity: 0.5,
                      width: "100%",
                      height: "100%",
                      mask: `url(#hole-${this.instanceId})`,
                    }),
                  )
                : void 0,
              p,
            );
          }
        };
      (h(m, "xOrds", ["e", "w"]),
        h(m, "yOrds", ["n", "s"]),
        h(m, "xyOrds", ["nw", "ne", "se", "sw"]),
        h(m, "nudgeStep", 1),
        h(m, "nudgeStepMedium", 10),
        h(m, "nudgeStepLarge", 100),
        h(m, "defaultProps", {
          ariaLabels: {
            cropArea: "Use the arrow keys to move the crop selection area",
            nwDragHandle:
              "Use the arrow keys to move the north west drag handle to change the crop selection area",
            nDragHandle:
              "Use the up and down arrow keys to move the north drag handle to change the crop selection area",
            neDragHandle:
              "Use the arrow keys to move the north east drag handle to change the crop selection area",
            eDragHandle:
              "Use the up and down arrow keys to move the east drag handle to change the crop selection area",
            seDragHandle:
              "Use the arrow keys to move the south east drag handle to change the crop selection area",
            sDragHandle:
              "Use the up and down arrow keys to move the south drag handle to change the crop selection area",
            swDragHandle:
              "Use the arrow keys to move the south west drag handle to change the crop selection area",
            wDragHandle:
              "Use the up and down arrow keys to move the west drag handle to change the crop selection area",
          },
        }));
      let y = m;
    },
  },
]);
