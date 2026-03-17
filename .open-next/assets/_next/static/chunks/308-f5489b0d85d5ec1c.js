(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [308],
  {
    8003: function (t, e, i) {
      var n, r, s;
      ((r = []),
        void 0 !==
          (s =
            "function" ==
            typeof (n = function () {
              "use strict";
              function e(t, e, i) {
                var n = new XMLHttpRequest();
                (n.open("GET", t),
                  (n.responseType = "blob"),
                  (n.onload = function () {
                    o(n.response, e, i);
                  }),
                  (n.onerror = function () {
                    console.error("could not download file");
                  }),
                  n.send());
              }
              function n(t) {
                var e = new XMLHttpRequest();
                e.open("HEAD", t, !1);
                try {
                  e.send();
                } catch (t) {}
                return 200 <= e.status && 299 >= e.status;
              }
              function r(t) {
                try {
                  t.dispatchEvent(new MouseEvent("click"));
                } catch (i) {
                  var e = document.createEvent("MouseEvents");
                  (e.initMouseEvent(
                    "click",
                    !0,
                    !0,
                    window,
                    0,
                    0,
                    0,
                    80,
                    20,
                    !1,
                    !1,
                    !1,
                    !1,
                    0,
                    null,
                  ),
                    t.dispatchEvent(e));
                }
              }
              var s =
                  "object" == typeof window && window.window === window
                    ? window
                    : "object" == typeof self && self.self === self
                      ? self
                      : "object" == typeof i.g && i.g.global === i.g
                        ? i.g
                        : void 0,
                a =
                  s.navigator &&
                  /Macintosh/.test(navigator.userAgent) &&
                  /AppleWebKit/.test(navigator.userAgent) &&
                  !/Safari/.test(navigator.userAgent),
                o =
                  s.saveAs ||
                  ("object" != typeof window || window !== s
                    ? function () {}
                    : "download" in HTMLAnchorElement.prototype && !a
                      ? function (t, i, a) {
                          var o = s.URL || s.webkitURL,
                            l = document.createElement("a");
                          ((i = i || t.name || "download"),
                            (l.download = i),
                            (l.rel = "noopener"),
                            "string" == typeof t
                              ? ((l.href = t),
                                l.origin === location.origin
                                  ? r(l)
                                  : n(l.href)
                                    ? e(t, i, a)
                                    : r(l, (l.target = "_blank")))
                              : ((l.href = o.createObjectURL(t)),
                                setTimeout(function () {
                                  o.revokeObjectURL(l.href);
                                }, 4e4),
                                setTimeout(function () {
                                  r(l);
                                }, 0)));
                        }
                      : "msSaveOrOpenBlob" in navigator
                        ? function (t, i, s) {
                            if (
                              ((i = i || t.name || "download"),
                              "string" != typeof t)
                            ) {
                              var a;
                              navigator.msSaveOrOpenBlob(
                                (void 0 === (a = s)
                                  ? (a = { autoBom: !1 })
                                  : "object" != typeof a &&
                                    (console.warn(
                                      "Deprecated: Expected third argument to be a object",
                                    ),
                                    (a = { autoBom: !a })),
                                a.autoBom &&
                                /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                                  t.type,
                                )
                                  ? new Blob(["\uFEFF", t], { type: t.type })
                                  : t),
                                i,
                              );
                            } else if (n(t)) e(t, i, s);
                            else {
                              var o = document.createElement("a");
                              ((o.href = t),
                                (o.target = "_blank"),
                                setTimeout(function () {
                                  r(o);
                                }));
                            }
                          }
                        : function (t, i, n, r) {
                            if (
                              ((r = r || open("", "_blank")) &&
                                (r.document.title = r.document.body.innerText =
                                  "downloading..."),
                              "string" == typeof t)
                            )
                              return e(t, i, n);
                            var o = "application/octet-stream" === t.type,
                              l =
                                /constructor/i.test(s.HTMLElement) || s.safari,
                              u = /CriOS\/[\d]+/.test(navigator.userAgent);
                            if (
                              (u || (o && l) || a) &&
                              "undefined" != typeof FileReader
                            ) {
                              var h = new FileReader();
                              ((h.onloadend = function () {
                                var t = h.result;
                                ((t = u
                                  ? t
                                  : t.replace(
                                      /^data:[^;]*;/,
                                      "data:attachment/file;",
                                    )),
                                  r ? (r.location.href = t) : (location = t),
                                  (r = null));
                              }),
                                h.readAsDataURL(t));
                            } else {
                              var c = s.URL || s.webkitURL,
                                d = c.createObjectURL(t);
                              (r ? (r.location = d) : (location.href = d),
                                (r = null),
                                setTimeout(function () {
                                  c.revokeObjectURL(d);
                                }, 4e4));
                            }
                          });
              ((s.saveAs = o.saveAs = o), (t.exports = o));
            })
              ? n.apply(e, r)
              : n) && (t.exports = s));
    },
    6793: (t, e) => {
      "use strict";
      function i() {
        return null;
      }
      (Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "default", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        ("function" == typeof e.default ||
          ("object" == typeof e.default && null !== e.default)) &&
          void 0 === e.default.__esModule &&
          (Object.defineProperty(e.default, "__esModule", { value: !0 }),
          Object.assign(e.default, e),
          (t.exports = e.default)));
    },
    2056: (t, e, i) => {
      "use strict";
      i.d(e, { V: () => o });
      var n = i(2115),
        r = i(2288);
      let s = new Map([
          [
            "bold",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Zm60-80v56a12,12,0,0,1-24,0V143.32a12,12,0,0,1-9.37-22l16-8A12,12,0,0,1,112,124Zm61.49,33.88L163.9,168H168a12,12,0,0,1,0,24H136a12,12,0,0,1-8.71-20.25L155.45,142a4,4,0,0,0,.55-2,4,4,0,0,0-7.47-2,12,12,0,0,1-20.78-12A28,28,0,0,1,180,140a27.77,27.77,0,0,1-5.64,16.86A10.63,10.63,0,0,1,173.49,157.88Z",
              }),
            ),
          ],
          [
            "duotone",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
                opacity: "0.2",
              }),
              n.createElement("path", {
                d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z",
              }),
            ),
          ],
          [
            "fill",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM112,184a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm56-8a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136a23.76,23.76,0,0,1-4.84,14.45L152,176ZM48,80V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80Z",
              }),
            ),
          ],
          [
            "light",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Zm-98-90v64a6,6,0,0,1-12,0V129.71l-7.32,3.66a6,6,0,1,1-5.36-10.74l16-8A6,6,0,0,1,110,120Zm59.57,29.25L148,178h20a6,6,0,0,1,0,12H136a6,6,0,0,1-4.8-9.6L160,142a10,10,0,1,0-16.65-11A6,6,0,1,1,133,125a22,22,0,1,1,36.62,24.26Z",
              }),
            ),
          ],
          [
            "regular",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z",
              }),
            ),
          ],
          [
            "thin",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212ZM108,120v64a4,4,0,0,1-8,0V126.47l-10.21,5.11a4,4,0,0,1-3.58-7.16l16-8A4,4,0,0,1,108,120Zm60,28-24,32h24a4,4,0,0,1,0,8H136a4,4,0,0,1-3.2-6.4l28.78-38.37A11.88,11.88,0,0,0,164,136a12,12,0,0,0-22.4-6,4,4,0,0,1-6.92-4A20,20,0,0,1,172,136,19.79,19.79,0,0,1,168,148Z",
              }),
            ),
          ],
        ]),
        a = n.forwardRef((t, e) =>
          n.createElement(r.A, { ref: e, ...t, weights: s }),
        );
      a.displayName = "CalendarIcon";
      let o = a;
    },
    1176: (t, e, i) => {
      "use strict";
      i.d(e, { k: () => o });
      var n = i(2115),
        r = i(2288);
      let s = new Map([
          [
            "bold",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M216,76H188V48a20,20,0,0,0-20-20H40A20,20,0,0,0,20,48V176a12,12,0,0,0,19.54,9.33l28.46-23V184a20,20,0,0,0,20,20h92.17l36.29,29.33A12,12,0,0,0,236,224V96A20,20,0,0,0,216,76ZM44,150.87V52H164v80H71.58A12,12,0,0,0,64,134.67Zm168,48-20-16.2a12,12,0,0,0-7.54-2.67H92V156h76a20,20,0,0,0,20-20V100h24Z",
              }),
            ),
          ],
          [
            "duotone",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M224,96V224l-39.58-32H88a8,8,0,0,1-8-8V144h88a8,8,0,0,0,8-8V88h40A8,8,0,0,1,224,96Z",
                opacity: "0.2",
              }),
              n.createElement("path", {
                d: "M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z",
              }),
            ),
          ],
          [
            "fill",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M232,96a16,16,0,0,0-16-16H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8Zm-42.55,89.78a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32V207.25Z",
              }),
            ),
          ],
          [
            "light",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M216,82H182V48a14,14,0,0,0-14-14H40A14,14,0,0,0,26,48V176a6,6,0,0,0,3.42,5.41A5.86,5.86,0,0,0,32,182a6,6,0,0,0,3.77-1.33L73.71,150H74v34a14,14,0,0,0,14,14h94.29l37.94,30.67A6,6,0,0,0,224,230a5.86,5.86,0,0,0,2.58-.59A6,6,0,0,0,230,224V96A14,14,0,0,0,216,82ZM71.58,138a6,6,0,0,0-3.77,1.33L38,163.43V48a2,2,0,0,1,2-2H168a2,2,0,0,1,2,2v88a2,2,0,0,1-2,2ZM218,211.43l-29.81-24.1a6,6,0,0,0-3.77-1.33H88a2,2,0,0,1-2-2V150h82a14,14,0,0,0,14-14V94h34a2,2,0,0,1,2,2Z",
              }),
            ),
          ],
          [
            "regular",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z",
              }),
            ),
          ],
          [
            "thin",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M216,84H180V48a12,12,0,0,0-12-12H40A12,12,0,0,0,28,48V176a4,4,0,0,0,4,4,4,4,0,0,0,2.51-.89L73,148h3v36a12,12,0,0,0,12,12h95l38.49,31.11A4,4,0,0,0,224,228a4,4,0,0,0,4-4V96A12,12,0,0,0,216,84ZM71.58,140a4,4,0,0,0-2.51.89L36,167.62V48a4,4,0,0,1,4-4H168a4,4,0,0,1,4,4v88a4,4,0,0,1-4,4ZM220,215.62l-33.07-26.73a4,4,0,0,0-2.51-.89H88a4,4,0,0,1-4-4V148h84a12,12,0,0,0,12-12V92h36a4,4,0,0,1,4,4Z",
              }),
            ),
          ],
        ]),
        a = n.forwardRef((t, e) =>
          n.createElement(r.A, { ref: e, ...t, weights: s }),
        );
      a.displayName = "ChatsIcon";
      let o = a;
    },
    9443: (t, e, i) => {
      "use strict";
      i.d(e, { J: () => o });
      var n = i(2115),
        r = i(2288);
      let s = new Map([
          [
            "bold",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z",
              }),
            ),
          ],
          [
            "duotone",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
                opacity: "0.2",
              }),
              n.createElement("path", {
                d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
              }),
            ),
          ],
          [
            "fill",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z",
              }),
            ),
          ],
          [
            "light",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z",
              }),
            ),
          ],
          [
            "regular",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z",
              }),
            ),
          ],
          [
            "thin",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z",
              }),
            ),
          ],
        ]),
        a = n.forwardRef((t, e) =>
          n.createElement(r.A, { ref: e, ...t, weights: s }),
        );
      a.displayName = "CheckIcon";
      let o = a;
    },
    169: (t, e, i) => {
      "use strict";
      i.d(e, { M: () => o });
      var n = i(2115),
        r = i(2288);
      let s = new Map([
          [
            "bold",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z",
              }),
            ),
          ],
          [
            "duotone",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",
                opacity: "0.2",
              }),
              n.createElement("path", {
                d: "M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
              }),
            ),
          ],
          [
            "fill",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z",
              }),
            ),
          ],
          [
            "light",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z",
              }),
            ),
          ],
          [
            "regular",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z",
              }),
            ),
          ],
          [
            "thin",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164ZM176,28H80A52.06,52.06,0,0,0,28,80v96a52.06,52.06,0,0,0,52,52h96a52.06,52.06,0,0,0,52-52V80A52.06,52.06,0,0,0,176,28Zm44,148a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V80A44.05,44.05,0,0,1,80,36h96a44.05,44.05,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z",
              }),
            ),
          ],
        ]),
        a = n.forwardRef((t, e) =>
          n.createElement(r.A, { ref: e, ...t, weights: s }),
        );
      a.displayName = "InstagramLogoIcon";
      let o = a;
    },
    6153: (t, e, i) => {
      "use strict";
      i.d(e, { C: () => o });
      var n = i(2115),
        r = i(2288);
      let s = new Map([
          [
            "bold",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V120a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,148v28a12,12,0,0,1-24,0V148a16,16,0,0,0-32,0v28a12,12,0,0,1-24,0ZM96,120v56a12,12,0,0,1-24,0V120a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z",
              }),
            ),
          ],
          [
            "duotone",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z",
                opacity: "0.2",
              }),
              n.createElement("path", {
                d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
              }),
            ),
          ],
          [
            "fill",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0ZM88,96a12,12,0,1,1,12-12A12,12,0,0,1,88,96Zm96,80a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z",
              }),
            ),
          ],
          [
            "light",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M216,26H40A14,14,0,0,0,26,40V216a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V40A14,14,0,0,0,216,26Zm2,190a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM94,112v64a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0Zm88,28v36a6,6,0,0,1-12,0V140a22,22,0,0,0-44,0v36a6,6,0,0,1-12,0V112a6,6,0,0,1,12,0v2.11A34,34,0,0,1,182,140ZM98,84A10,10,0,1,1,88,74,10,10,0,0,1,98,84Z",
              }),
            ),
          ],
          [
            "regular",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z",
              }),
            ),
          ],
          [
            "thin",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M216,28H40A12,12,0,0,0,28,40V216a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28Zm4,188a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H216a4,4,0,0,1,4,4ZM92,112v64a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0Zm88,28v36a4,4,0,0,1-8,0V140a24,24,0,0,0-48,0v36a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0v6.87A32,32,0,0,1,180,140ZM96,84a8,8,0,1,1-8-8A8,8,0,0,1,96,84Z",
              }),
            ),
          ],
        ]),
        a = n.forwardRef((t, e) =>
          n.createElement(r.A, { ref: e, ...t, weights: s }),
        );
      a.displayName = "LinkedinLogoIcon";
      let o = a;
    },
    1579: (t, e, i) => {
      "use strict";
      i.d(e, { t: () => o });
      var n = i(2115),
        r = i(2288);
      let s = new Map([
          [
            "bold",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M128,180a52.06,52.06,0,0,0,52-52V64A52,52,0,0,0,76,64v64A52.06,52.06,0,0,0,128,180ZM100,64a28,28,0,0,1,56,0v64a28,28,0,0,1-56,0Zm40,155.22V240a12,12,0,0,1-24,0V219.22A92.14,92.14,0,0,1,36,128a12,12,0,0,1,24,0,68,68,0,0,0,136,0,12,12,0,0,1,24,0A92.14,92.14,0,0,1,140,219.22Z",
              }),
            ),
          ],
          [
            "duotone",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M168,64v64a40,40,0,0,1-40,40h0a40,40,0,0,1-40-40V64a40,40,0,0,1,40-40h0A40,40,0,0,1,168,64Z",
                opacity: "0.2",
              }),
              n.createElement("path", {
                d: "M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V240a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z",
              }),
            ),
          ],
          [
            "fill",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M80,128V64a48,48,0,0,1,96,0v64a48,48,0,0,1-96,0Zm128,0a8,8,0,0,0-16,0,64,64,0,0,1-128,0,8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V240a8,8,0,0,0,16,0V207.6A80.11,80.11,0,0,0,208,128Z",
              }),
            ),
          ],
          [
            "light",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M128,174a46.06,46.06,0,0,0,46-46V64a46,46,0,0,0-92,0v64A46.06,46.06,0,0,0,128,174ZM94,64a34,34,0,0,1,68,0v64a34,34,0,0,1-68,0Zm40,141.75V240a6,6,0,0,1-12,0V205.75A78.09,78.09,0,0,1,50,128a6,6,0,0,1,12,0,66,66,0,0,0,132,0,6,6,0,0,1,12,0A78.09,78.09,0,0,1,134,205.75Z",
              }),
            ),
          ],
          [
            "regular",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V240a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z",
              }),
            ),
          ],
          [
            "thin",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M128,172a44.05,44.05,0,0,0,44-44V64a44,44,0,0,0-88,0v64A44.05,44.05,0,0,0,128,172ZM92,64a36,36,0,0,1,72,0v64a36,36,0,0,1-72,0Zm40,139.89V240a4,4,0,0,1-8,0V203.89A76.09,76.09,0,0,1,52,128a4,4,0,0,1,8,0,68,68,0,0,0,136,0,4,4,0,0,1,8,0A76.09,76.09,0,0,1,132,203.89Z",
              }),
            ),
          ],
        ]),
        a = n.forwardRef((t, e) =>
          n.createElement(r.A, { ref: e, ...t, weights: s }),
        );
      a.displayName = "MicrophoneIcon";
      let o = a;
    },
    8016: (t, e, i) => {
      "use strict";
      i.d(e, { N: () => o });
      var n = i(2115),
        r = i(2288);
      let s = new Map([
          [
            "bold",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z",
              }),
            ),
          ],
          [
            "duotone",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z",
                opacity: "0.2",
              }),
              n.createElement("path", {
                d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z",
              }),
            ),
          ],
          [
            "fill",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z",
              }),
            ),
          ],
          [
            "light",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z",
              }),
            ),
          ],
          [
            "regular",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z",
              }),
            ),
          ],
          [
            "thin",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z",
              }),
            ),
          ],
        ]),
        a = n.forwardRef((t, e) =>
          n.createElement(r.A, { ref: e, ...t, weights: s }),
        );
      a.displayName = "WarningIcon";
      let o = a;
    },
    446: (t, e, i) => {
      "use strict";
      i.d(e, { g: () => o });
      var n = i(2115),
        r = i(2288);
      let s = new Map([
          [
            "bold",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M218.12,209.56l-61-95.8,59.72-65.69a12,12,0,0,0-17.76-16.14L143.81,92.77,106.12,33.56A12,12,0,0,0,96,28H48A12,12,0,0,0,37.88,46.44l61,95.8L39.12,207.93a12,12,0,1,0,17.76,16.14l55.31-60.84,37.69,59.21A12,12,0,0,0,160,228h48a12,12,0,0,0,10.12-18.44ZM166.59,204,69.86,52H89.41l96.73,152Z",
              }),
            ),
          ],
          [
            "duotone",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M208,216H160L48,40H96Z",
                opacity: "0.2",
              }),
              n.createElement("path", {
                d: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z",
              }),
            ),
          ],
          [
            "fill",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z",
              }),
            ),
          ],
          [
            "light",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M213.06,212.78l-63.42-99.66L212.44,44A6,6,0,1,0,203.56,36L143,102.62l-41.9-65.84A6,6,0,0,0,96,34H48a6,6,0,0,0-5.06,9.22l63.42,99.66L43.56,212A6,6,0,0,0,52.44,220L113,153.38l41.9,65.84A6,6,0,0,0,160,222h48a6,6,0,0,0,5.06-9.22ZM163.29,210,58.93,46H92.71L197.07,210Z",
              }),
            ),
          ],
          [
            "regular",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z",
              }),
            ),
          ],
          [
            "thin",
            n.createElement(
              n.Fragment,
              null,
              n.createElement("path", {
                d: "M211.37,213.85,147.13,112.9,211,42.69A4,4,0,0,0,205,37.31L142.68,105.9,99.38,37.85A4,4,0,0,0,96,36H48a4,4,0,0,0-3.37,6.15L108.87,143.1,45,213.31A4,4,0,1,0,51,218.69l62.36-68.59,43.3,68.05A4,4,0,0,0,160,220h48a4,4,0,0,0,3.37-6.15ZM162.2,212,55.29,44H93.8L200.71,212Z",
              }),
            ),
          ],
        ]),
        a = n.forwardRef((t, e) =>
          n.createElement(r.A, { ref: e, ...t, weights: s }),
        );
      a.displayName = "XLogoIcon";
      let o = a;
    },
    1346: (t, e, i) => {
      "use strict";
      i.d(e, { C1: () => b, bL: () => w });
      var n = i(2115),
        r = i(8068),
        s = i(8166),
        a = i(3610),
        o = i(1488),
        l = i(858),
        u = i(6611),
        h = i(7028),
        c = i(9997),
        d = i(5155),
        p = "Checkbox",
        [m, f] = (0, s.A)(p),
        [v, g] = m(p);
      function y(t) {
        let {
            __scopeCheckbox: e,
            checked: i,
            children: r,
            defaultChecked: s,
            disabled: a,
            form: l,
            name: u,
            onCheckedChange: h,
            required: c,
            value: m = "on",
            internal_do_not_use_render: f,
          } = t,
          [g, y] = (0, o.i)({
            prop: i,
            defaultProp: null != s && s,
            onChange: h,
            caller: p,
          }),
          [x, A] = n.useState(null),
          [w, V] = n.useState(null),
          b = n.useRef(!1),
          E = !x || !!l || !!x.closest("form"),
          M = {
            checked: g,
            disabled: a,
            setChecked: y,
            control: x,
            setControl: A,
            name: u,
            form: l,
            value: m,
            hasConsumerStoppedPropagationRef: b,
            required: c,
            defaultChecked: !T(s) && s,
            isFormControl: E,
            bubbleInput: w,
            setBubbleInput: V,
          };
        return (0, d.jsx)(v, {
          scope: e,
          ...M,
          children: "function" == typeof f ? f(M) : r,
        });
      }
      var x = "CheckboxTrigger",
        A = n.forwardRef((t, e) => {
          let { __scopeCheckbox: i, onKeyDown: s, onClick: o, ...l } = t,
            {
              control: u,
              value: h,
              disabled: p,
              checked: m,
              required: f,
              setControl: v,
              setChecked: y,
              hasConsumerStoppedPropagationRef: A,
              isFormControl: w,
              bubbleInput: V,
            } = g(x, i),
            b = (0, r.s)(e, v),
            E = n.useRef(m);
          return (
            n.useEffect(() => {
              let t = null == u ? void 0 : u.form;
              if (t) {
                let e = () => y(E.current);
                return (
                  t.addEventListener("reset", e),
                  () => t.removeEventListener("reset", e)
                );
              }
            }, [u, y]),
            (0, d.jsx)(c.sG.button, {
              type: "button",
              role: "checkbox",
              "aria-checked": T(m) ? "mixed" : m,
              "aria-required": f,
              "data-state": S(m),
              "data-disabled": p ? "" : void 0,
              disabled: p,
              value: h,
              ...l,
              ref: b,
              onKeyDown: (0, a.mK)(s, (t) => {
                "Enter" === t.key && t.preventDefault();
              }),
              onClick: (0, a.mK)(o, (t) => {
                (y((t) => !!T(t) || !t),
                  V &&
                    w &&
                    ((A.current = t.isPropagationStopped()),
                    A.current || t.stopPropagation()));
              }),
            })
          );
        });
      A.displayName = x;
      var w = n.forwardRef((t, e) => {
        let {
          __scopeCheckbox: i,
          name: n,
          checked: r,
          defaultChecked: s,
          required: a,
          disabled: o,
          value: l,
          onCheckedChange: u,
          form: h,
          ...c
        } = t;
        return (0, d.jsx)(y, {
          __scopeCheckbox: i,
          checked: r,
          defaultChecked: s,
          disabled: o,
          required: a,
          onCheckedChange: u,
          name: n,
          form: h,
          value: l,
          internal_do_not_use_render: (t) => {
            let { isFormControl: n } = t;
            return (0, d.jsxs)(d.Fragment, {
              children: [
                (0, d.jsx)(A, { ...c, ref: e, __scopeCheckbox: i }),
                n && (0, d.jsx)(M, { __scopeCheckbox: i }),
              ],
            });
          },
        });
      });
      w.displayName = p;
      var V = "CheckboxIndicator",
        b = n.forwardRef((t, e) => {
          let { __scopeCheckbox: i, forceMount: n, ...r } = t,
            s = g(V, i);
          return (0, d.jsx)(h.C, {
            present: n || T(s.checked) || !0 === s.checked,
            children: (0, d.jsx)(c.sG.span, {
              "data-state": S(s.checked),
              "data-disabled": s.disabled ? "" : void 0,
              ...r,
              ref: e,
              style: { pointerEvents: "none", ...t.style },
            }),
          });
        });
      b.displayName = V;
      var E = "CheckboxBubbleInput",
        M = n.forwardRef((t, e) => {
          let { __scopeCheckbox: i, ...s } = t,
            {
              control: a,
              hasConsumerStoppedPropagationRef: o,
              checked: h,
              defaultChecked: p,
              required: m,
              disabled: f,
              name: v,
              value: y,
              form: x,
              bubbleInput: A,
              setBubbleInput: w,
            } = g(E, i),
            V = (0, r.s)(e, w),
            b = (0, l.Z)(h),
            M = (function (t) {
              let [e, i] = n.useState(void 0);
              return (
                (0, u.N)(() => {
                  if (t) {
                    i({ width: t.offsetWidth, height: t.offsetHeight });
                    let e = new ResizeObserver((e) => {
                      let n, r;
                      if (!Array.isArray(e) || !e.length) return;
                      let s = e[0];
                      if ("borderBoxSize" in s) {
                        let t = s.borderBoxSize,
                          e = Array.isArray(t) ? t[0] : t;
                        ((n = e.inlineSize), (r = e.blockSize));
                      } else ((n = t.offsetWidth), (r = t.offsetHeight));
                      i({ width: n, height: r });
                    });
                    return (
                      e.observe(t, { box: "border-box" }),
                      () => e.unobserve(t)
                    );
                  }
                  i(void 0);
                }, [t]),
                e
              );
            })(a);
          n.useEffect(() => {
            if (!A) return;
            let t = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "checked",
              ).set,
              e = !o.current;
            if (b !== h && t) {
              let i = new Event("click", { bubbles: e });
              ((A.indeterminate = T(h)),
                t.call(A, !T(h) && h),
                A.dispatchEvent(i));
            }
          }, [A, b, h, o]);
          let S = n.useRef(!T(h) && h);
          return (0, d.jsx)(c.sG.input, {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: null != p ? p : S.current,
            required: m,
            disabled: f,
            name: v,
            value: y,
            form: x,
            ...s,
            tabIndex: -1,
            ref: V,
            style: {
              ...s.style,
              ...M,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
              transform: "translateX(-100%)",
            },
          });
        });
      function T(t) {
        return "indeterminate" === t;
      }
      function S(t) {
        return T(t) ? "indeterminate" : t ? "checked" : "unchecked";
      }
      M.displayName = E;
    },
    4256: (t, e, i) => {
      "use strict";
      i.d(e, { jH: () => s });
      var n = i(2115);
      i(5155);
      var r = n.createContext(void 0);
      function s(t) {
        let e = n.useContext(r);
        return t || e || "ltr";
      }
    },
    7668: (t, e, i) => {
      "use strict";
      i.d(e, { B: () => l });
      var n,
        r = i(2115),
        s = i(6611),
        a =
          (n || (n = i.t(r, 2)))[" useId ".trim().toString()] || (() => void 0),
        o = 0;
      function l(t) {
        let [e, i] = r.useState(a());
        return (
          (0, s.N)(() => {
            t || i((t) => t ?? String(o++));
          }, [t]),
          t || (e ? `radix-${e}` : "")
        );
      }
    },
    8217: (t, e, i) => {
      "use strict";
      i.d(e, { UC: () => z, B8: () => K, bL: () => X, l9: () => q });
      var n = i(2115),
        r = i(3610),
        s = i(8166),
        a = i(1295),
        o = i(8068),
        l = i(7668),
        u = i(9997),
        h = i(1524),
        c = i(1488),
        d = i(4256),
        p = i(5155),
        m = "rovingFocusGroup.onEntryFocus",
        f = { bubbles: !1, cancelable: !0 },
        v = "RovingFocusGroup",
        [g, y, x] = (0, a.N)(v),
        [A, w] = (0, s.A)(v, [x]),
        [V, b] = A(v),
        E = n.forwardRef((t, e) =>
          (0, p.jsx)(g.Provider, {
            scope: t.__scopeRovingFocusGroup,
            children: (0, p.jsx)(g.Slot, {
              scope: t.__scopeRovingFocusGroup,
              children: (0, p.jsx)(M, { ...t, ref: e }),
            }),
          }),
        );
      E.displayName = v;
      var M = n.forwardRef((t, e) => {
          let {
              __scopeRovingFocusGroup: i,
              orientation: s,
              loop: a = !1,
              dir: l,
              currentTabStopId: g,
              defaultCurrentTabStopId: x,
              onCurrentTabStopIdChange: A,
              onEntryFocus: w,
              preventScrollOnEntryFocus: b = !1,
              ...E
            } = t,
            M = n.useRef(null),
            T = (0, o.s)(e, M),
            S = (0, d.jH)(l),
            [P, C] = (0, c.i)({
              prop: g,
              defaultProp: null != x ? x : null,
              onChange: A,
              caller: v,
            }),
            [L, R] = n.useState(!1),
            D = (0, h.c)(w),
            j = y(i),
            F = n.useRef(!1),
            [Z, H] = n.useState(0);
          return (
            n.useEffect(() => {
              let t = M.current;
              if (t)
                return (
                  t.addEventListener(m, D),
                  () => t.removeEventListener(m, D)
                );
            }, [D]),
            (0, p.jsx)(V, {
              scope: i,
              orientation: s,
              dir: S,
              loop: a,
              currentTabStopId: P,
              onItemFocus: n.useCallback((t) => C(t), [C]),
              onItemShiftTab: n.useCallback(() => R(!0), []),
              onFocusableItemAdd: n.useCallback(() => H((t) => t + 1), []),
              onFocusableItemRemove: n.useCallback(() => H((t) => t - 1), []),
              children: (0, p.jsx)(u.sG.div, {
                tabIndex: L || 0 === Z ? -1 : 0,
                "data-orientation": s,
                ...E,
                ref: T,
                style: { outline: "none", ...t.style },
                onMouseDown: (0, r.mK)(t.onMouseDown, () => {
                  F.current = !0;
                }),
                onFocus: (0, r.mK)(t.onFocus, (t) => {
                  let e = !F.current;
                  if (t.target === t.currentTarget && e && !L) {
                    let e = new CustomEvent(m, f);
                    if (
                      (t.currentTarget.dispatchEvent(e), !e.defaultPrevented)
                    ) {
                      let t = j().filter((t) => t.focusable);
                      k(
                        [
                          t.find((t) => t.active),
                          t.find((t) => t.id === P),
                          ...t,
                        ]
                          .filter(Boolean)
                          .map((t) => t.ref.current),
                        b,
                      );
                    }
                  }
                  F.current = !1;
                }),
                onBlur: (0, r.mK)(t.onBlur, () => R(!1)),
              }),
            })
          );
        }),
        T = "RovingFocusGroupItem",
        S = n.forwardRef((t, e) => {
          let {
              __scopeRovingFocusGroup: i,
              focusable: s = !0,
              active: a = !1,
              tabStopId: o,
              children: h,
              ...c
            } = t,
            d = (0, l.B)(),
            m = o || d,
            f = b(T, i),
            v = f.currentTabStopId === m,
            x = y(i),
            {
              onFocusableItemAdd: A,
              onFocusableItemRemove: w,
              currentTabStopId: V,
            } = f;
          return (
            n.useEffect(() => {
              if (s) return (A(), () => w());
            }, [s, A, w]),
            (0, p.jsx)(g.ItemSlot, {
              scope: i,
              id: m,
              focusable: s,
              active: a,
              children: (0, p.jsx)(u.sG.span, {
                tabIndex: v ? 0 : -1,
                "data-orientation": f.orientation,
                ...c,
                ref: e,
                onMouseDown: (0, r.mK)(t.onMouseDown, (t) => {
                  s ? f.onItemFocus(m) : t.preventDefault();
                }),
                onFocus: (0, r.mK)(t.onFocus, () => f.onItemFocus(m)),
                onKeyDown: (0, r.mK)(t.onKeyDown, (t) => {
                  if ("Tab" === t.key && t.shiftKey) {
                    f.onItemShiftTab();
                    return;
                  }
                  if (t.target !== t.currentTarget) return;
                  let e = (function (t, e, i) {
                    var n;
                    let r =
                      ((n = t.key),
                      "rtl" !== i
                        ? n
                        : "ArrowLeft" === n
                          ? "ArrowRight"
                          : "ArrowRight" === n
                            ? "ArrowLeft"
                            : n);
                    if (
                      !(
                        "vertical" === e &&
                        ["ArrowLeft", "ArrowRight"].includes(r)
                      ) &&
                      !(
                        "horizontal" === e &&
                        ["ArrowUp", "ArrowDown"].includes(r)
                      )
                    )
                      return P[r];
                  })(t, f.orientation, f.dir);
                  if (void 0 !== e) {
                    if (t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
                      return;
                    t.preventDefault();
                    let i = x()
                      .filter((t) => t.focusable)
                      .map((t) => t.ref.current);
                    if ("last" === e) i.reverse();
                    else if ("prev" === e || "next" === e) {
                      "prev" === e && i.reverse();
                      let n = i.indexOf(t.currentTarget);
                      i = f.loop
                        ? (function (t, e) {
                            return t.map((i, n) => t[(e + n) % t.length]);
                          })(i, n + 1)
                        : i.slice(n + 1);
                    }
                    setTimeout(() => k(i));
                  }
                }),
                children:
                  "function" == typeof h
                    ? h({ isCurrentTabStop: v, hasTabStop: null != V })
                    : h,
              }),
            })
          );
        });
      S.displayName = T;
      var P = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function k(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = document.activeElement;
        for (let n of t)
          if (
            n === i ||
            (n.focus({ preventScroll: e }), document.activeElement !== i)
          )
            return;
      }
      var C = i(7028),
        L = "Tabs",
        [R, D] = (0, s.A)(L, [w]),
        j = w(),
        [F, Z] = R(L),
        H = n.forwardRef((t, e) => {
          let {
              __scopeTabs: i,
              value: n,
              onValueChange: r,
              defaultValue: s,
              orientation: a = "horizontal",
              dir: o,
              activationMode: h = "automatic",
              ...m
            } = t,
            f = (0, d.jH)(o),
            [v, g] = (0, c.i)({
              prop: n,
              onChange: r,
              defaultProp: null != s ? s : "",
              caller: L,
            });
          return (0, p.jsx)(F, {
            scope: i,
            baseId: (0, l.B)(),
            value: v,
            onValueChange: g,
            orientation: a,
            dir: f,
            activationMode: h,
            children: (0, p.jsx)(u.sG.div, {
              dir: f,
              "data-orientation": a,
              ...m,
              ref: e,
            }),
          });
        });
      H.displayName = L;
      var B = "TabsList",
        I = n.forwardRef((t, e) => {
          let { __scopeTabs: i, loop: n = !0, ...r } = t,
            s = Z(B, i),
            a = j(i);
          return (0, p.jsx)(E, {
            asChild: !0,
            ...a,
            orientation: s.orientation,
            dir: s.dir,
            loop: n,
            children: (0, p.jsx)(u.sG.div, {
              role: "tablist",
              "aria-orientation": s.orientation,
              ...r,
              ref: e,
            }),
          });
        });
      I.displayName = B;
      var O = "TabsTrigger",
        N = n.forwardRef((t, e) => {
          let { __scopeTabs: i, value: n, disabled: s = !1, ...a } = t,
            o = Z(O, i),
            l = j(i),
            h = W(o.baseId, n),
            c = $(o.baseId, n),
            d = n === o.value;
          return (0, p.jsx)(S, {
            asChild: !0,
            ...l,
            focusable: !s,
            active: d,
            children: (0, p.jsx)(u.sG.button, {
              type: "button",
              role: "tab",
              "aria-selected": d,
              "aria-controls": c,
              "data-state": d ? "active" : "inactive",
              "data-disabled": s ? "" : void 0,
              disabled: s,
              id: h,
              ...a,
              ref: e,
              onMouseDown: (0, r.mK)(t.onMouseDown, (t) => {
                s || 0 !== t.button || !1 !== t.ctrlKey
                  ? t.preventDefault()
                  : o.onValueChange(n);
              }),
              onKeyDown: (0, r.mK)(t.onKeyDown, (t) => {
                [" ", "Enter"].includes(t.key) && o.onValueChange(n);
              }),
              onFocus: (0, r.mK)(t.onFocus, () => {
                let t = "manual" !== o.activationMode;
                d || s || !t || o.onValueChange(n);
              }),
            }),
          });
        });
      N.displayName = O;
      var U = "TabsContent",
        G = n.forwardRef((t, e) => {
          let {
              __scopeTabs: i,
              value: r,
              forceMount: s,
              children: a,
              ...o
            } = t,
            l = Z(U, i),
            h = W(l.baseId, r),
            c = $(l.baseId, r),
            d = r === l.value,
            m = n.useRef(d);
          return (
            n.useEffect(() => {
              let t = requestAnimationFrame(() => (m.current = !1));
              return () => cancelAnimationFrame(t);
            }, []),
            (0, p.jsx)(C.C, {
              present: s || d,
              children: (i) => {
                let { present: n } = i;
                return (0, p.jsx)(u.sG.div, {
                  "data-state": d ? "active" : "inactive",
                  "data-orientation": l.orientation,
                  role: "tabpanel",
                  "aria-labelledby": h,
                  hidden: !n,
                  id: c,
                  tabIndex: 0,
                  ...o,
                  ref: e,
                  style: {
                    ...t.style,
                    animationDuration: m.current ? "0s" : void 0,
                  },
                  children: n && a,
                });
              },
            })
          );
        });
      function W(t, e) {
        return "".concat(t, "-trigger-").concat(e);
      }
      function $(t, e) {
        return "".concat(t, "-content-").concat(e);
      }
      G.displayName = U;
      var X = H,
        K = I,
        q = N,
        z = G;
    },
    858: (t, e, i) => {
      "use strict";
      i.d(e, { Z: () => r });
      var n = i(2115);
      function r(t) {
        let e = n.useRef({ value: t, previous: t });
        return n.useMemo(
          () => (
            e.current.value !== t &&
              ((e.current.previous = e.current.value), (e.current.value = t)),
            e.current.previous
          ),
          [t],
        );
      }
    },
    698: (t, e, i) => {
      "use strict";
      function n(t, e) {
        return (
          e || (e = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } }),
          )
        );
      }
      i.d(e, { _: () => n });
    },
    8633: (t, e, i) => {
      "use strict";
      i.d(e, { N: () => x });
      var n = i(5155),
        r = i(2115),
        s = i(4710),
        a = i(9234),
        o = i(5403),
        l = i(9656),
        u = i(2804),
        h = i(7249);
      function c(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e);
      }
      class d extends r.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = e.offsetParent,
              i = ((0, u.s)(t) && t.offsetWidth) || 0,
              n = ((0, u.s)(t) && t.offsetHeight) || 0,
              r = this.props.sizeRef.current;
            ((r.height = e.offsetHeight || 0),
              (r.width = e.offsetWidth || 0),
              (r.top = e.offsetTop),
              (r.left = e.offsetLeft),
              (r.right = i - r.width - r.left),
              (r.bottom = n - r.height - r.top));
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function p(t) {
        var e, i;
        let { children: s, isPresent: a, anchorX: o, anchorY: l, root: u } = t,
          p = (0, r.useId)(),
          m = (0, r.useRef)(null),
          f = (0, r.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }),
          { nonce: v } = (0, r.useContext)(h.Q),
          g = (function (...t) {
            return r.useCallback(
              (function (...t) {
                return (e) => {
                  let i = !1,
                    n = t.map((t) => {
                      let n = c(t, e);
                      return (i || "function" != typeof n || (i = !0), n);
                    });
                  if (i)
                    return () => {
                      for (let e = 0; e < n.length; e++) {
                        let i = n[e];
                        "function" == typeof i ? i() : c(t[e], null);
                      }
                    };
                };
              })(...t),
              t,
            );
          })(
            m,
            null !==
              (i = null === (e = s.props) || void 0 === e ? void 0 : e.ref) &&
              void 0 !== i
              ? i
              : null == s
                ? void 0
                : s.ref,
          );
        return (
          (0, r.useInsertionEffect)(() => {
            let {
              width: t,
              height: e,
              top: i,
              left: n,
              right: r,
              bottom: s,
            } = f.current;
            if (a || !m.current || !t || !e) return;
            m.current.dataset.motionPopId = p;
            let h = document.createElement("style");
            v && (h.nonce = v);
            let c = null != u ? u : document.head;
            return (
              c.appendChild(h),
              h.sheet &&
                h.sheet.insertRule(
                  '\n          [data-motion-pop-id="'
                    .concat(
                      p,
                      '"] {\n            position: absolute !important;\n            width: ',
                    )
                    .concat(t, "px !important;\n            height: ")
                    .concat(e, "px !important;\n            ")
                    .concat(
                      "left" === o ? "left: ".concat(n) : "right: ".concat(r),
                      "px !important;\n            ",
                    )
                    .concat(
                      "bottom" === l ? "bottom: ".concat(s) : "top: ".concat(i),
                      "px !important;\n          }\n        ",
                    ),
                ),
              () => {
                c.contains(h) && c.removeChild(h);
              }
            );
          }, [a]),
          (0, n.jsx)(d, {
            isPresent: a,
            childRef: m,
            sizeRef: f,
            children: r.cloneElement(s, { ref: g }),
          })
        );
      }
      let m = (t) => {
        let {
            children: e,
            initial: i,
            isPresent: s,
            onExitComplete: o,
            custom: u,
            presenceAffectsLayout: h,
            mode: c,
            anchorX: d,
            anchorY: m,
            root: v,
          } = t,
          g = (0, a.M)(f),
          y = (0, r.useId)(),
          x = !0,
          A = (0, r.useMemo)(
            () => (
              (x = !1),
              {
                id: y,
                initial: i,
                isPresent: s,
                custom: u,
                onExitComplete: (t) => {
                  for (let e of (g.set(t, !0), g.values())) if (!e) return;
                  o && o();
                },
                register: (t) => (g.set(t, !1), () => g.delete(t)),
              }
            ),
            [s, g, o],
          );
        return (
          h && x && (A = { ...A }),
          (0, r.useMemo)(() => {
            g.forEach((t, e) => g.set(e, !1));
          }, [s]),
          r.useEffect(() => {
            s || g.size || !o || o();
          }, [s]),
          "popLayout" === c &&
            (e = (0, n.jsx)(p, {
              isPresent: s,
              anchorX: d,
              anchorY: m,
              root: v,
              children: e,
            })),
          (0, n.jsx)(l.t.Provider, { value: A, children: e })
        );
      };
      function f() {
        return new Map();
      }
      var v = i(5087);
      let g = (t) => t.key || "";
      function y(t) {
        let e = [];
        return (
          r.Children.forEach(t, (t) => {
            (0, r.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      let x = (t) => {
        let {
            children: e,
            custom: i,
            initial: l = !0,
            onExitComplete: u,
            presenceAffectsLayout: h = !0,
            mode: c = "sync",
            propagate: d = !1,
            anchorX: p = "left",
            anchorY: f = "top",
            root: x,
          } = t,
          [A, w] = (0, v.xQ)(d),
          V = (0, r.useMemo)(() => y(e), [e]),
          b = d && !A ? [] : V.map(g),
          E = (0, r.useRef)(!0),
          M = (0, r.useRef)(V),
          T = (0, a.M)(() => new Map()),
          S = (0, r.useRef)(new Set()),
          [P, k] = (0, r.useState)(V),
          [C, L] = (0, r.useState)(V);
        (0, o.E)(() => {
          ((E.current = !1), (M.current = V));
          for (let t = 0; t < C.length; t++) {
            let e = g(C[t]);
            b.includes(e)
              ? (T.delete(e), S.current.delete(e))
              : !0 !== T.get(e) && T.set(e, !1);
          }
        }, [C, b.length, b.join("-")]);
        let R = [];
        if (V !== P) {
          let t = [...V];
          for (let e = 0; e < C.length; e++) {
            let i = C[e],
              n = g(i);
            b.includes(n) || (t.splice(e, 0, i), R.push(i));
          }
          return ("wait" === c && R.length && (t = R), L(y(t)), k(V), null);
        }
        let { forceRender: D } = (0, r.useContext)(s.L);
        return (0, n.jsx)(n.Fragment, {
          children: C.map((t) => {
            let e = g(t),
              r = (!d || !!A) && (V === C || b.includes(e));
            return (0, n.jsx)(
              m,
              {
                isPresent: r,
                initial: (!E.current || !!l) && void 0,
                custom: i,
                presenceAffectsLayout: h,
                mode: c,
                root: x,
                onExitComplete: r
                  ? void 0
                  : () => {
                      if (S.current.has(e) || (S.current.add(e), !T.has(e)))
                        return;
                      T.set(e, !0);
                      let t = !0;
                      (T.forEach((e) => {
                        e || (t = !1);
                      }),
                        t &&
                          (null == D || D(),
                          L(M.current),
                          d && (null == w || w()),
                          u && u()));
                    },
                anchorX: p,
                anchorY: f,
                children: t,
              },
              e,
            );
          }),
        });
      };
    },
    5087: (t, e, i) => {
      "use strict";
      i.d(e, { xQ: () => s });
      var n = i(2115),
        r = i(9656);
      function s() {
        let t =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          e = (0, n.useContext)(r.t);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: s, register: a } = e,
          o = (0, n.useId)();
        (0, n.useEffect)(() => {
          if (t) return a(o);
        }, [t]);
        let l = (0, n.useCallback)(() => t && s && s(o), [o, s, t]);
        return !i && s ? [!1, l] : [!0];
      }
    },
    4710: (t, e, i) => {
      "use strict";
      i.d(e, { L: () => n });
      let n = (0, i(2115).createContext)({});
    },
    7249: (t, e, i) => {
      "use strict";
      i.d(e, { Q: () => n });
      let n = (0, i(2115).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    9656: (t, e, i) => {
      "use strict";
      i.d(e, { t: () => n });
      let n = (0, i(2115).createContext)(null);
    },
    2979: (t, e, i) => {
      "use strict";
      i.d(e, { P: () => rh });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        r = new Set(n);
      var s = i(8207),
        a = i(663),
        o = i(4885);
      let l = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function u(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(o.S) || [];
        if (!n) return t;
        let r = i.replace(n, ""),
          s = l.has(e) ? 1 : 0;
        return (n !== i && (s *= 100), e + "(" + s + r + ")");
      }
      let h = /\b([a-z-]*)\(.*?\)/gu,
        c = {
          ...a.f,
          getAnimatableNone: (t) => {
            let e = t.match(h);
            return e ? e.map(u).join(" ") : t;
          },
        };
      var d = i(2264);
      let p = { ...d.ai, transform: Math.round };
      var m = i(3137);
      let f = {
          rotate: m.uj,
          rotateX: m.uj,
          rotateY: m.uj,
          rotateZ: m.uj,
          scale: d.hs,
          scaleX: d.hs,
          scaleY: d.hs,
          scaleZ: d.hs,
          skew: m.uj,
          skewX: m.uj,
          skewY: m.uj,
          distance: m.px,
          translateX: m.px,
          translateY: m.px,
          translateZ: m.px,
          x: m.px,
          y: m.px,
          z: m.px,
          perspective: m.px,
          transformPerspective: m.px,
          opacity: d.X4,
          originX: m.gQ,
          originY: m.gQ,
          originZ: m.px,
        },
        v = {
          borderWidth: m.px,
          borderTopWidth: m.px,
          borderRightWidth: m.px,
          borderBottomWidth: m.px,
          borderLeftWidth: m.px,
          borderRadius: m.px,
          borderTopLeftRadius: m.px,
          borderTopRightRadius: m.px,
          borderBottomRightRadius: m.px,
          borderBottomLeftRadius: m.px,
          width: m.px,
          maxWidth: m.px,
          height: m.px,
          maxHeight: m.px,
          top: m.px,
          right: m.px,
          bottom: m.px,
          left: m.px,
          inset: m.px,
          insetBlock: m.px,
          insetBlockStart: m.px,
          insetBlockEnd: m.px,
          insetInline: m.px,
          insetInlineStart: m.px,
          insetInlineEnd: m.px,
          padding: m.px,
          paddingTop: m.px,
          paddingRight: m.px,
          paddingBottom: m.px,
          paddingLeft: m.px,
          paddingBlock: m.px,
          paddingBlockStart: m.px,
          paddingBlockEnd: m.px,
          paddingInline: m.px,
          paddingInlineStart: m.px,
          paddingInlineEnd: m.px,
          margin: m.px,
          marginTop: m.px,
          marginRight: m.px,
          marginBottom: m.px,
          marginLeft: m.px,
          marginBlock: m.px,
          marginBlockStart: m.px,
          marginBlockEnd: m.px,
          marginInline: m.px,
          marginInlineStart: m.px,
          marginInlineEnd: m.px,
          fontSize: m.px,
          backgroundPositionX: m.px,
          backgroundPositionY: m.px,
          ...f,
          zIndex: p,
          fillOpacity: d.X4,
          strokeOpacity: d.X4,
          numOctaves: p,
        },
        g = {
          ...v,
          color: s.y,
          backgroundColor: s.y,
          outlineColor: s.y,
          fill: s.y,
          stroke: s.y,
          borderColor: s.y,
          borderTopColor: s.y,
          borderRightColor: s.y,
          borderBottomColor: s.y,
          borderLeftColor: s.y,
          filter: c,
          WebkitFilter: c,
        },
        y = (t) => g[t],
        x = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        A = () => ({ x: x(), y: x() }),
        w = () => ({ min: 0, max: 0 }),
        V = () => ({ x: w(), y: w() });
      var b = i(9356);
      let E = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...n,
        ]),
        M = (t) => (e) => e.test(t),
        T = [
          d.ai,
          m.px,
          m.KN,
          m.uj,
          m.vw,
          m.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        S = (t) => T.find(M(t));
      var P = i(5107);
      let k = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
      var C = i(7309);
      let L = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        R = (t) => (180 * t) / Math.PI,
        D = (t) => F(R(Math.atan2(t[1], t[0]))),
        j = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: D,
          rotateZ: D,
          skewX: (t) => R(Math.atan(t[1])),
          skewY: (t) => R(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        F = (t) => ((t %= 360) < 0 && (t += 360), t),
        Z = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        H = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        B = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: Z,
          scaleY: H,
          scale: (t) => (Z(t) + H(t)) / 2,
          rotateX: (t) => F(R(Math.atan2(t[6], t[5]))),
          rotateY: (t) => F(R(Math.atan2(-t[2], t[0]))),
          rotateZ: D,
          rotate: D,
          skewX: (t) => R(Math.atan(t[4])),
          skewY: (t) => R(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function I(t) {
        return t.includes("scale") ? 1 : 0;
      }
      function O(t, e) {
        let i, n;
        if (!t || "none" === t) return I(e);
        let r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (r) ((i = B), (n = r));
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          ((i = j), (n = e));
        }
        if (!n) return I(e);
        let s = i[e],
          a = n[1].split(",").map(U);
        return "function" == typeof s ? s(a) : a[s];
      }
      let N = (t, e) => {
        let { transform: i = "none" } = getComputedStyle(t);
        return O(i, e);
      };
      function U(t) {
        return parseFloat(t.trim());
      }
      let G = (t) => t === d.ai || t === m.px,
        W = new Set(["x", "y", "z"]),
        $ = n.filter((t) => !W.has(t)),
        X = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: (t, { transform: e }) => O(e, "x"),
          y: (t, { transform: e }) => O(e, "y"),
        };
      ((X.translateX = X.x), (X.translateY = X.y));
      var K = i(3932);
      let q = new Set(),
        z = !1,
        Y = !1,
        _ = !1;
      function Q() {
        if (Y) {
          let t = Array.from(q).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          (e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                $.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  t.getValue(e)?.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            }));
        }
        ((Y = !1), (z = !1), q.forEach((t) => t.complete(_)), q.clear());
      }
      function J() {
        q.forEach((t) => {
          (t.readKeyframes(), t.needsMeasurement && (Y = !0));
        });
      }
      class tt {
        constructor(t, e, i, n, r, s = !1) {
          ((this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = r),
            (this.isAsync = s));
        }
        scheduleResolve() {
          ((this.state = "scheduled"),
            this.isAsync
              ? (q.add(this),
                z || ((z = !0), K.Gt.read(J), K.Gt.resolveKeyframes(Q)))
              : (this.readKeyframes(), this.complete()));
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          if (null === t[0]) {
            let r = n?.get(),
              s = t[t.length - 1];
            if (void 0 !== r) t[0] = r;
            else if (i && e) {
              let n = i.readValue(e, s);
              null != n && (t[0] = n);
            }
            (void 0 === t[0] && (t[0] = s), n && void 0 === r && n.set(t[0]));
          }
          !(function (t) {
            for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
          })(t);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          ((this.state = "complete"),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            q.delete(this));
        }
        cancel() {
          "scheduled" === this.state &&
            (q.delete(this), (this.state = "pending"));
        }
        resume() {
          "pending" === this.state && this.scheduleResolve();
        }
      }
      let te = (t) => /^0[^.\s]+$/u.test(t);
      function ti(t, e) {
        let i = y(t);
        return (
          i !== c && (i = a.f),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let tn = new Set(["auto", "none", "0"]);
      class tr extends tt {
        constructor(t, e, i, n, r) {
          super(t, e, i, n, r, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && ((n = n.trim()), (0, C.pG)(n))) {
              let r = (function t(e, i, n = 1) {
                (0, P.V)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                  "max-css-var-depth",
                );
                let [r, s] = (function (t) {
                  let e = L.exec(t);
                  if (!e) return [,];
                  let [, i, n, r] = e;
                  return [`--${i ?? n}`, r];
                })(e);
                if (!r) return;
                let a = window.getComputedStyle(i).getPropertyValue(r);
                if (a) {
                  let t = a.trim();
                  return k(t) ? parseFloat(t) : t;
                }
                return (0, C.pG)(s) ? t(s, i, n + 1) : s;
              })(n, e.current);
              (void 0 !== r && (t[i] = r),
                i === t.length - 1 && (this.finalKeyframe = n));
            }
          }
          if ((this.resolveNoneKeyframes(), !E.has(i) || 2 !== t.length))
            return;
          let [n, r] = t,
            s = S(n),
            a = S(r);
          if ((0, C.rm)(n) !== (0, C.rm)(r) && X[i]) {
            this.needsMeasurement = !0;
            return;
          }
          if (s !== a) {
            if (G(s) && G(a))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else X[i] && (this.needsMeasurement = !0);
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            (null === t[e] ||
              ("number" == typeof (n = t[e])
                ? 0 === n
                : null === n || "none" === n || "0" === n || te(n))) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                r = 0;
              for (; r < t.length && !n; ) {
                let e = t[r];
                ("string" == typeof e &&
                  !tn.has(e) &&
                  (0, a.V)(e).values.length &&
                  (n = t[r]),
                  r++);
              }
              if (n && i) for (let r of e) t[r] = ti(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          ("height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = X[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current),
            )),
            (e[0] = this.measuredOrigin));
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          let { element: t, name: e, unresolvedKeyframes: i } = this;
          if (!t || !t.current) return;
          let n = t.getValue(e);
          n && n.jump(this.measuredOrigin, !1);
          let r = i.length - 1,
            s = i[r];
          ((i[r] = X[e](
            t.measureViewportBox(),
            window.getComputedStyle(t.current),
          )),
            null !== s &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = s),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i);
              }),
            this.resolveNoneKeyframes());
        }
      }
      var ts = i(2539);
      let { schedule: ta } = (0, i(506).I)(queueMicrotask, !1);
      var to = i(5850),
        tl = i(9421);
      let tu = [...T, s.y, a.f],
        th = (t) => tu.find(M(t)),
        tc = { current: null },
        td = { current: !1 },
        tp = "undefined" != typeof window,
        tm = new WeakMap();
      function tf(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function tv(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let tg = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        ty = ["initial", ...tg];
      function tx(t) {
        return tf(t.animate) || ty.some((e) => tv(t[e]));
      }
      function tA(t) {
        return !!(tx(t) || t.variants);
      }
      function tw(t, e, i, n) {
        if (
          "function" == typeof e ||
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [r, s] = (function (t) {
            let e = [{}, {}];
            return (
              t?.values.forEach((t, i) => {
                ((e[0][i] = t.get()), (e[1][i] = t.getVelocity()));
              }),
              e
            );
          })(n);
          e = e(void 0 !== i ? i : t.custom, r, s);
        }
        return e;
      }
      let tV = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        tb = {};
      class tE {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: r,
            visualState: s,
          },
          a = {},
        ) {
          ((this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tt),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection,
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = to.k.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t),
                K.Gt.render(this.render, !1, !0));
            }));
          let { latestValues: o, renderState: l } = s;
          ((this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = a),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = tx(e)),
            (this.isVariantNode = tA(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current)));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== o[t] && (0, b.S)(e) && e.set(o[t]);
          }
        }
        mount(t) {
          ((this.current = t),
            tm.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            "never" === this.reducedMotionConfig
              ? (this.shouldReduceMotion = !1)
              : "always" === this.reducedMotionConfig
                ? (this.shouldReduceMotion = !0)
                : (td.current ||
                    (function () {
                      if (((td.current = !0), tp)) {
                        if (window.matchMedia) {
                          let t = window.matchMedia("(prefers-reduced-motion)"),
                            e = () => (tc.current = t.matches);
                          (t.addEventListener("change", e), e());
                        } else tc.current = !1;
                      }
                    })(),
                  (this.shouldReduceMotion = tc.current)),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext));
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          (0, K.WG)(this.notifyUpdate),
          (0, K.WG)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent?.removeChild(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        addChild(t) {
          (this.children.add(t),
            this.enteringChildren ?? (this.enteringChildren = new Set()),
            this.enteringChildren.add(t));
        }
        removeChild(t) {
          (this.children.delete(t),
            this.enteringChildren && this.enteringChildren.delete(t));
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = r.has(t);
          n && this.onBindTransform && this.onBindTransform();
          let s = e.on("change", (e) => {
            ((this.latestValues[t] = e),
              this.props.onUpdate && K.Gt.preRender(this.notifyUpdate),
              n && this.projection && (this.projection.isTransformDirty = !0),
              this.scheduleRender());
          });
          ("undefined" != typeof window &&
            window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              (s(), i && i(), e.owner && e.stop());
            }));
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in tb) {
            let e = tb[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : V();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          ((t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e));
          for (let e = 0; e < tV.length; e++) {
            let i = tV[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          ((this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let r = e[n],
                s = i[n];
              if ((0, b.S)(r)) t.addValue(n, r);
              else if ((0, b.S)(s)) t.addValue(n, (0, tl.OQ)(r, { owner: t }));
              else if (s !== r) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(r) : e.hasAnimated || e.set(r);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, (0, tl.OQ)(void 0 !== e ? e : r, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
            this.prevMotionValues,
          )),
            this.handleChildMotionValue && this.handleChildMotionValue());
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          (e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState));
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = (0, tl.OQ)(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          let i =
            void 0 === this.latestValues[t] && this.current
              ? (this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options))
              : this.latestValues[t];
          return (
            null != i &&
              ("string" == typeof i && (k(i) || te(i))
                ? (i = parseFloat(i))
                : !th(i) && a.f.test(e) && (i = ti(t, e)),
              this.setBaseTarget(t, (0, b.S)(i) ? i.get() : i)),
            (0, b.S)(i) ? i.get() : i
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          let e;
          let { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let n = tw(this.props, i, this.presenceContext?.custom);
            n && (e = n[t]);
          }
          if (i && void 0 !== e) return e;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || (0, b.S)(n)
            ? void 0 !== this.initialValues[t] && void 0 === e
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new ts.v()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
        scheduleRenderMicrotask() {
          ta.render(this.render);
        }
      }
      class tM extends tE {
        constructor() {
          (super(...arguments), (this.KeyframeResolver = tr));
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          let i = t.style;
          return i ? i[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          (delete e[t], delete i[t]);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, b.S)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      function tT(t) {
        return t.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
      }
      let tS = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        tP = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        tk = n.length;
      function tC(t, e, i) {
        let { style: s, vars: a, transformOrigin: o } = t,
          l = !1,
          u = !1;
        for (let t in e) {
          let i = e[t];
          if (r.has(t)) {
            l = !0;
            continue;
          }
          if ((0, C.j4)(t)) {
            a[t] = i;
            continue;
          }
          {
            let e = tS(i, v[t]);
            t.startsWith("origin") ? ((u = !0), (o[t] = e)) : (s[t] = e);
          }
        }
        if (
          (!e.transform &&
            (l || i
              ? (s.transform = (function (t, e, i) {
                  let r = "",
                    s = !0;
                  for (let a = 0; a < tk; a++) {
                    let o = n[a],
                      l = t[o];
                    if (void 0 === l) continue;
                    let u = !0;
                    if ("number" == typeof l)
                      u = l === (o.startsWith("scale") ? 1 : 0);
                    else {
                      let t = parseFloat(l);
                      u = o.startsWith("scale") ? 1 === t : 0 === t;
                    }
                    if (!u || i) {
                      let t = tS(l, v[o]);
                      if (!u) {
                        s = !1;
                        let e = tP[o] || o;
                        r += `${e}(${t}) `;
                      }
                      i && (e[o] = t);
                    }
                  }
                  return (
                    (r = r.trim()),
                    i ? (r = i(e, s ? "" : r)) : s && (r = "none"),
                    r
                  );
                })(e, t.transform, i))
              : s.transform && (s.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = o;
          s.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let tL = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tR = { offset: "strokeDashoffset", array: "strokeDasharray" },
        tD = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
      function tj(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          pathLength: r,
          pathSpacing: s = 1,
          pathOffset: a = 0,
          ...o
        },
        l,
        u,
        h,
      ) {
        if ((tC(t, o, u), l)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        ((t.attrs = t.style), (t.style = {}));
        let { attrs: c, style: d } = t;
        for (let t of (c.transform &&
          ((d.transform = c.transform), delete c.transform),
        (d.transform || c.transformOrigin) &&
          ((d.transformOrigin = c.transformOrigin ?? "50% 50%"),
          delete c.transformOrigin),
        d.transform &&
          ((d.transformBox = h?.transformBox ?? "fill-box"),
          delete c.transformBox),
        tD))
          void 0 !== c[t] && ((d[t] = c[t]), delete c[t]);
        (void 0 !== e && (c.x = e),
          void 0 !== i && (c.y = i),
          void 0 !== n && (c.scale = n),
          void 0 !== r &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? tL : tR;
              ((t[s.offset] = `${-n}`), (t[s.array] = `${e} ${i}`));
            })(c, r, s, a, !1));
      }
      let tF = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
          "startOffset",
          "textLength",
          "lengthAdjust",
        ]),
        tZ = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tH(t, { style: e, vars: i }, n, r) {
        let s;
        let a = t.style;
        for (s in e) a[s] = e[s];
        for (s in (r?.applyProjectionStyles(a, n), i)) a.setProperty(s, i[s]);
      }
      function tB(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let tI = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!m.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = tB(t, e.target.x),
            n = tB(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      var tO = i(1607);
      let tN = {
        borderRadius: {
          ...tI,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tI,
        borderTopRightRadius: tI,
        borderBottomLeftRadius: tI,
        borderBottomRightRadius: tI,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = a.f.parse(t);
            if (n.length > 5) return t;
            let r = a.f.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              l = i.y.scale * e.y;
            ((n[0 + s] /= o), (n[1 + s] /= l));
            let u = (0, tO.k)(o, l, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= u),
              "number" == typeof n[3 + s] && (n[3 + s] /= u),
              r(n)
            );
          },
        },
      };
      function tU(t, { layout: e, layoutId: i }) {
        return (
          r.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!tN[t] || "opacity" === t))
        );
      }
      function tG(t, e, i) {
        let n = t.style,
          r = e?.style,
          s = {};
        if (!n) return s;
        for (let e in n)
          ((0, b.S)(n[e]) ||
            (r && (0, b.S)(r[e])) ||
            tU(e, t) ||
            i?.getValue(e)?.liveStyle !== void 0) &&
            (s[e] = n[e]);
        return s;
      }
      function tW(t, e, i) {
        let r = tG(t, e, i);
        for (let i in t)
          ((0, b.S)(t[i]) || (0, b.S)(e[i])) &&
            (r[
              -1 !== n.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return r;
      }
      class t$ extends tM {
        constructor() {
          (super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = V));
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (r.has(e)) {
            let t = y(e);
            return (t && t.default) || 0;
          }
          return ((e = tF.has(e) ? e : tT(e)), t.getAttribute(e));
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tW(t, e, i);
        }
        build(t, e, i) {
          tj(t, e, this.isSVGTag, i.transformTemplate, i.style);
        }
        renderInstance(t, e, i, n) {
          !(function (t, e, i, n) {
            for (let i in (tH(t, e, void 0, n), e.attrs))
              t.setAttribute(tF.has(i) ? i : tT(i), e.attrs[i]);
          })(t, e, 0, n);
        }
        mount(t) {
          ((this.isSVGTag = tZ(t.tagName)), super.mount(t));
        }
      }
      function tX({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function tK(t) {
        return void 0 === t || 1 === t;
      }
      function tq({ scale: t, scaleX: e, scaleY: i }) {
        return !tK(t) || !tK(e) || !tK(i);
      }
      function tz(t) {
        return (
          tq(t) ||
          tY(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function tY(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function t_(t, e, i, n, r) {
        return (void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e);
      }
      function tQ(t, e = 0, i = 1, n, r) {
        ((t.min = t_(t.min, e, i, n, r)), (t.max = t_(t.max, e, i, n, r)));
      }
      function tJ(t, { x: e, y: i }) {
        (tQ(t.x, e.translate, e.scale, e.originPoint),
          tQ(t.y, i.translate, i.scale, i.originPoint));
      }
      function t0(t, e) {
        ((t.min = t.min + e), (t.max = t.max + e));
      }
      function t1(t, e, i, n, r = 0.5) {
        let s = (0, tO.k)(t.min, t.max, r);
        tQ(t, e, i, s, n);
      }
      function t2(t, e) {
        (t1(t.x, e.x, e.scaleX, e.scale, e.originX),
          t1(t.y, e.y, e.scaleY, e.scale, e.originY));
      }
      function t4(t, e) {
        return tX(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e),
        );
      }
      class t6 extends tM {
        constructor() {
          (super(...arguments),
            (this.type = "html"),
            (this.renderInstance = tH));
        }
        readValueFromInstance(t, e) {
          if (r.has(e)) return this.projection?.isProjecting ? I(e) : N(t, e);
          {
            let i = window.getComputedStyle(t),
              n = ((0, C.j4)(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return t4(t, e);
        }
        build(t, e, i) {
          tC(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tG(t, e, i);
        }
      }
      var t8 = i(2115);
      let t5 = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function t3(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (t5.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var t7 = i(5155),
        t9 = i(4710);
      let et = (0, t8.createContext)({ strict: !1 });
      var ee = i(7249);
      let ei = (0, t8.createContext)({});
      function en(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let er = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function es(t, e, i) {
        for (let n in e) (0, b.S)(e[n]) || tU(n, i) || (t[n] = e[n]);
      }
      let ea = () => ({ ...er(), attrs: {} }),
        eo = new Set([
          "animate",
          "exit",
          "variants",
          "initial",
          "style",
          "values",
          "variants",
          "transition",
          "transformTemplate",
          "custom",
          "inherit",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "_dragX",
          "_dragY",
          "onHoverStart",
          "onHoverEnd",
          "onViewportEnter",
          "onViewportLeave",
          "globalTapTarget",
          "ignoreStrict",
          "viewport",
        ]);
      function el(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          eo.has(t)
        );
      }
      let eu = (t) => !el(t);
      try {
        !(function (t) {
          "function" == typeof t &&
            (eu = (e) => (e.startsWith("on") ? !el(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch {}
      function eh(t) {
        return (0, b.S)(t) ? t.get() : t;
      }
      var ec = i(9656),
        ed = i(9234);
      let ep = (t) => (e, i) => {
          let n = (0, t8.useContext)(ei),
            r = (0, t8.useContext)(ec.t),
            s = () =>
              (function (t, e, i, n) {
                let { scrapeMotionValuesFromProps: r, createRenderState: s } =
                  t;
                return {
                  latestValues: (function (t, e, i, n) {
                    let r = {},
                      s = n(t, {});
                    for (let t in s) r[t] = eh(s[t]);
                    let { initial: a, animate: o } = t,
                      l = tx(t),
                      u = tA(t);
                    e &&
                      u &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial),
                      void 0 === o && (o = e.animate));
                    let h = !!i && !1 === i.initial,
                      c = (h = h || !1 === a) ? o : a;
                    if (c && "boolean" != typeof c && !tf(c)) {
                      let e = Array.isArray(c) ? c : [c];
                      for (let i = 0; i < e.length; i++) {
                        let n = tw(t, e[i]);
                        if (n) {
                          let { transitionEnd: t, transition: e, ...i } = n;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = h ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (r[t] = e);
                          }
                          for (let e in t) r[e] = t[e];
                        }
                      }
                    }
                    return r;
                  })(e, i, n, r),
                  renderState: s(),
                };
              })(t, e, n, r);
          return i ? s() : (0, ed.M)(s);
        },
        em = ep({ scrapeMotionValuesFromProps: tG, createRenderState: er }),
        ef = ep({ scrapeMotionValuesFromProps: tW, createRenderState: ea });
      var ev = i(5687);
      let eg = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        ey = !1;
      function ex() {
        return (
          !(function () {
            if (ey) return;
            let t = {};
            for (let e in eg)
              t[e] = { isEnabled: (t) => eg[e].some((e) => !!t[e]) };
            ((tb = t), (ey = !0));
          })(),
          tb
        );
      }
      let eA = Symbol.for("motionComponentSymbol"),
        ew = "data-" + tT("framerAppearId"),
        eV = (0, t8.createContext)({});
      function eb(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var eE = i(5403);
      function eM(t) {
        var e, i;
        let { forwardMotionProps: n = !1, type: r } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = arguments.length > 2 ? arguments[2] : void 0,
          a = arguments.length > 3 ? arguments[3] : void 0;
        s &&
          (function (t) {
            let e = ex();
            for (let i in t) e[i] = { ...e[i], ...t[i] };
            tb = e;
          })(s);
        let o = r ? "svg" === r : t3(t),
          l = o ? ef : em;
        function u(e, i) {
          let r;
          let s = {
              ...(0, t8.useContext)(ee.Q),
              ...e,
              layoutId: (function (t) {
                let { layoutId: e } = t,
                  i = (0, t8.useContext)(t9.L).id;
                return i && void 0 !== e ? i + "-" + e : e;
              })(e),
            },
            { isStatic: u } = s,
            h = (function (t) {
              let { initial: e, animate: i } = (function (t, e) {
                if (tx(t)) {
                  let { initial: e, animate: i } = t;
                  return {
                    initial: !1 === e || tv(e) ? e : void 0,
                    animate: tv(i) ? i : void 0,
                  };
                }
                return !1 !== t.inherit ? e : {};
              })(t, (0, t8.useContext)(ei));
              return (0, t8.useMemo)(
                () => ({ initial: e, animate: i }),
                [en(e), en(i)],
              );
            })(e),
            c = l(e, u);
          if (!u && ev.B) {
            (0, t8.useContext)(et).strict;
            let e = (function (t) {
              let { drag: e, layout: i } = ex();
              if (!e && !i) return {};
              let n = { ...e, ...i };
              return {
                MeasureLayout:
                  (null == e ? void 0 : e.isEnabled(t)) ||
                  (null == i ? void 0 : i.isEnabled(t))
                    ? n.MeasureLayout
                    : void 0,
                ProjectionNode: n.ProjectionNode,
              };
            })(s);
            ((r = e.MeasureLayout),
              (h.visualElement = (function (t, e, i, n, r, s) {
                var a, o, l, u;
                let { visualElement: h } = (0, t8.useContext)(ei),
                  c = (0, t8.useContext)(et),
                  d = (0, t8.useContext)(ec.t),
                  p = (0, t8.useContext)(ee.Q).reducedMotion,
                  m = (0, t8.useRef)(null),
                  f = (0, t8.useRef)(!1);
                ((n = n || c.renderer),
                  !m.current &&
                    n &&
                    ((m.current = n(t, {
                      visualState: e,
                      parent: h,
                      props: i,
                      presenceContext: d,
                      blockInitialAnimation: !!d && !1 === d.initial,
                      reducedMotionConfig: p,
                      isSVG: s,
                    })),
                    f.current &&
                      m.current &&
                      (m.current.manuallyAnimateOnMount = !0)));
                let v = m.current,
                  g = (0, t8.useContext)(eV);
                v &&
                  !v.projection &&
                  r &&
                  ("html" === v.type || "svg" === v.type) &&
                  (function (t, e, i, n) {
                    let {
                      layoutId: r,
                      layout: s,
                      drag: a,
                      dragConstraints: o,
                      layoutScroll: l,
                      layoutRoot: u,
                      layoutCrossfade: h,
                    } = e;
                    ((t.projection = new i(
                      t.latestValues,
                      e["data-framer-portal-id"]
                        ? void 0
                        : (function t(e) {
                            if (e)
                              return !1 !== e.options.allowProjection
                                ? e.projection
                                : t(e.parent);
                          })(t.parent),
                    )),
                      t.projection.setOptions({
                        layoutId: r,
                        layout: s,
                        alwaysMeasureLayout: !!a || (o && eb(o)),
                        visualElement: t,
                        animationType: "string" == typeof s ? s : "both",
                        initialPromotionConfig: n,
                        crossfade: h,
                        layoutScroll: l,
                        layoutRoot: u,
                      }));
                  })(m.current, i, r, g);
                let y = (0, t8.useRef)(!1);
                (0, t8.useInsertionEffect)(() => {
                  v && y.current && v.update(i, d);
                });
                let x = i[ew],
                  A = (0, t8.useRef)(
                    !!x &&
                      !(null === (a = (o = window).MotionHandoffIsComplete) ||
                      void 0 === a
                        ? void 0
                        : a.call(o, x)) &&
                      (null ===
                        (l = (u = window).MotionHasOptimisedAnimation) ||
                      void 0 === l
                        ? void 0
                        : l.call(u, x)),
                  );
                return (
                  (0, eE.E)(() => {
                    ((f.current = !0),
                      v &&
                        ((y.current = !0),
                        (window.MotionIsMounted = !0),
                        v.updateFeatures(),
                        v.scheduleRenderMicrotask(),
                        A.current &&
                          v.animationState &&
                          v.animationState.animateChanges()));
                  }),
                  (0, t8.useEffect)(() => {
                    v &&
                      (!A.current &&
                        v.animationState &&
                        v.animationState.animateChanges(),
                      A.current &&
                        (queueMicrotask(() => {
                          var t, e;
                          null ===
                            (t = (e = window).MotionHandoffMarkAsComplete) ||
                            void 0 === t ||
                            t.call(e, x);
                        }),
                        (A.current = !1)),
                      (v.enteringChildren = void 0));
                  }),
                  v
                );
              })(t, c, s, a, e.ProjectionNode, o)));
          }
          return (0, t7.jsxs)(ei.Provider, {
            value: h,
            children: [
              r && h.visualElement
                ? (0, t7.jsx)(r, { visualElement: h.visualElement, ...s })
                : null,
              (function (t, e, i, n, r) {
                let { latestValues: s } = n,
                  a =
                    arguments.length > 5 &&
                    void 0 !== arguments[5] &&
                    arguments[5],
                  o = arguments.length > 6 ? arguments[6] : void 0,
                  l = (
                    (null != o ? o : t3(t))
                      ? function (t, e, i, n) {
                          let r = (0, t8.useMemo)(() => {
                            let i = ea();
                            return (
                              tj(i, e, tZ(n), t.transformTemplate, t.style),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            (es(e, t.style, t),
                              (r.style = { ...e, ...r.style }));
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                es(n, i, t),
                                Object.assign(
                                  n,
                                  (function (t, e) {
                                    let { transformTemplate: i } = t;
                                    return (0, t8.useMemo)(() => {
                                      let t = er();
                                      return (
                                        tC(t, e, i),
                                        Object.assign({}, t.vars, t.style)
                                      );
                                    }, [e]);
                                  })(t, e),
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : "pan-".concat("x" === t.drag ? "y" : "x"))),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(e, s, r, t),
                  u = (function (t, e, i) {
                    let n = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (eu(r) ||
                          (!0 === i && el(r)) ||
                          (!e && !el(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (n[r] = t[r]);
                    return n;
                  })(e, "string" == typeof t, a),
                  h = t !== t8.Fragment ? { ...u, ...l, ref: i } : {},
                  { children: c } = e,
                  d = (0, t8.useMemo)(() => ((0, b.S)(c) ? c.get() : c), [c]);
                return (0, t8.createElement)(t, { ...h, children: d });
              })(
                t,
                e,
                (function (t, e, i) {
                  let n = (0, t8.useRef)(i);
                  (0, t8.useInsertionEffect)(() => {
                    n.current = i;
                  });
                  let r = (0, t8.useRef)(null);
                  return (0, t8.useCallback)(
                    (i) => {
                      if (i) {
                        var s;
                        null === (s = t.onMount) ||
                          void 0 === s ||
                          s.call(t, i);
                      }
                      e && (i ? e.mount(i) : e.unmount());
                      let a = n.current;
                      if ("function" == typeof a) {
                        if (i) {
                          let t = a(i);
                          "function" == typeof t && (r.current = t);
                        } else
                          r.current ? (r.current(), (r.current = null)) : a(i);
                      } else a && (a.current = i);
                    },
                    [e],
                  );
                })(c, h.visualElement, i),
                c,
                u,
                n,
                o,
              ),
            ],
          });
        }
        u.displayName = "motion.".concat(
          "string" == typeof t
            ? t
            : "create(".concat(
                null !==
                  (i =
                    null !== (e = t.displayName) && void 0 !== e
                      ? e
                      : t.name) && void 0 !== i
                  ? i
                  : "",
                ")",
              ),
        );
        let h = (0, t8.forwardRef)(u);
        return ((h[eA] = t), h);
      }
      class eT {
        constructor(t) {
          ((this.isMounted = !1), (this.node = t));
        }
        update() {}
      }
      function eS(t, e, i) {
        let n = t.getProps();
        return tw(n, e, void 0 !== i ? i : n.custom, t);
      }
      function eP(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
      let ek = (t) => Array.isArray(t);
      var eC = i(4148);
      function eL(t, e) {
        let i = t.getValue("willChange");
        if ((0, b.S)(i) && i.add) return i.add(e);
        if (!i && eC.W.WillChange) {
          let i = new eC.W.WillChange("auto");
          (t.addValue("willChange", i), i.add(e));
        }
      }
      var eR = i(300),
        eD = i(6054),
        ej = i(1604),
        eF = i(6881),
        eZ = i(5821);
      let eH = (t) => t.startsWith("--");
      function eB(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let eI = eB(() => void 0 !== window.ScrollTimeline);
      var eO = i(4537),
        eN = i(7971),
        eU = i(5853),
        eG = i(6430);
      let eW = {},
        e$ = (function (t, e) {
          let i = eB(t);
          return () => eW[e] ?? i();
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing");
      var eX = i(9051);
      let eK = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        eq = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: eK([0, 0.65, 0.55, 1]),
          circOut: eK([0.55, 0, 1, 0.45]),
          backIn: eK([0.31, 0.01, 0.66, -0.59]),
          backOut: eK([0.33, 1.53, 0.69, 0.99]),
        };
      function ez(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
      class eY extends eO.q {
        constructor(t) {
          if (
            (super(),
            (this.finishedTime = null),
            (this.isStopped = !1),
            (this.manualStartTime = null),
            !t)
          )
            return;
          let {
            element: e,
            name: i,
            keyframes: n,
            pseudoElement: r,
            allowFlatten: s = !1,
            finalKeyframe: a,
            onComplete: o,
          } = t;
          ((this.isPseudoElement = !!r),
            (this.allowFlatten = s),
            (this.options = t),
            (0, P.V)(
              "string" != typeof t.type,
              'Mini animate() doesn\'t support "type" as a string.',
              "mini-spring",
            ));
          let l = (function ({ type: t, ...e }) {
            return ez(t) && e$()
              ? t.applyToOptions(e)
              : (e.duration ?? (e.duration = 300),
                e.ease ?? (e.ease = "easeOut"),
                e);
          })(t);
          ((this.animation = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: r = 300,
              repeat: s = 0,
              repeatType: a = "loop",
              ease: o = "easeOut",
              times: l,
            } = {},
            u,
          ) {
            let h = { [e]: i };
            l && (h.offset = l);
            let c = (function t(e, i) {
              if (e)
                return "function" == typeof e
                  ? e$()
                    ? (0, eX.K)(e, i)
                    : "ease-out"
                  : (0, eG.D)(e)
                    ? eK(e)
                    : Array.isArray(e)
                      ? e.map((e) => t(e, i) || eq.easeOut)
                      : eq[e];
            })(o, r);
            (Array.isArray(c) && (h.easing = c), eU.Q.value && eN.q.waapi++);
            let d = {
              delay: n,
              duration: r,
              easing: Array.isArray(c) ? "linear" : c,
              fill: "both",
              iterations: s + 1,
              direction: "reverse" === a ? "alternate" : "normal",
            };
            u && (d.pseudoElement = u);
            let p = t.animate(h, d);
            return (
              eU.Q.value &&
                p.finished.finally(() => {
                  eN.q.waapi--;
                }),
              p
            );
          })(e, i, n, l, r)),
            !1 === l.autoplay && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !r)) {
                let t = (0, eF.X)(n, this.options, a, this.speed);
                (this.updateMotionValue
                  ? this.updateMotionValue(t)
                  : (function (t, e, i) {
                      eH(e) ? t.style.setProperty(e, i) : (t.style[e] = i);
                    })(e, i, t),
                  this.animation.cancel());
              }
              (o?.(), this.notifyFinished());
            }));
        }
        play() {
          this.isStopped ||
            ((this.manualStartTime = null),
            this.animation.play(),
            "finished" === this.state && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: t } = this;
          "idle" !== t &&
            "finished" !== t &&
            (this.updateMotionValue
              ? this.updateMotionValue()
              : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          this.isPseudoElement || this.animation.commitStyles?.();
        }
        get duration() {
          let t = this.animation.effect?.getComputedTiming?.().duration || 0;
          return (0, eR.X)(Number(t));
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + (0, eR.X)(t);
        }
        get time() {
          return (0, eR.X)(Number(this.animation.currentTime) || 0);
        }
        set time(t) {
          ((this.manualStartTime = null),
            (this.finishedTime = null),
            (this.animation.currentTime = (0, eR.f)(t)));
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(t) {
          (t < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = t));
        }
        get state() {
          return null !== this.finishedTime
            ? "finished"
            : this.animation.playState;
        }
        get startTime() {
          return this.manualStartTime ?? Number(this.animation.startTime);
        }
        set startTime(t) {
          this.manualStartTime = this.animation.startTime = t;
        }
        attachTimeline({ timeline: t, observe: e }) {
          return (this.allowFlatten &&
            this.animation.effect?.updateTiming({ easing: "linear" }),
          (this.animation.onfinish = null),
          t && eI())
            ? ((this.animation.timeline = t), eD.l)
            : e(this);
        }
      }
      var e_ = i(4407),
        eQ = i(4162),
        eJ = i(9707),
        e0 = i(1679);
      let e1 = { anticipate: eQ.b, backInOut: eJ.ZZ, circInOut: e0.tn };
      class e2 extends eY {
        constructor(t) {
          (!(function (t) {
            "string" == typeof t.ease && t.ease in e1 && (t.ease = e1[t.ease]);
          })(t),
            (0, e_.E)(t),
            super(t),
            void 0 !== t.startTime && (this.startTime = t.startTime),
            (this.options = t));
        }
        updateMotionValue(t) {
          let {
            motionValue: e,
            onUpdate: i,
            onComplete: n,
            element: r,
            ...s
          } = this.options;
          if (!e) return;
          if (void 0 !== t) {
            e.set(t);
            return;
          }
          let a = new ej.s({ ...s, autoplay: !1 }),
            o = Math.max(10, to.k.now() - this.startTime),
            l = (0, eZ.q)(0, 10, o - 10);
          (e.setWithVelocity(
            a.sample(Math.max(0, o - l)).value,
            a.sample(o).value,
            l,
          ),
            a.stop());
        }
      }
      let e4 = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (a.f.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      function e6(t) {
        ((t.duration = 0), (t.type = "keyframes"));
      }
      let e8 = new Set(["opacity", "clipPath", "filter", "transform"]),
        e5 = eB(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      class e3 extends eO.q {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: r = 0,
          repeatType: s = "loop",
          keyframes: a,
          name: o,
          motionValue: l,
          element: u,
          ...h
        }) {
          (super(),
            (this.stop = () => {
              (this._animation &&
                (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel());
            }),
            (this.createdAt = to.k.now()));
          let c = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: r,
              repeatType: s,
              name: o,
              motionValue: l,
              element: u,
              ...h,
            },
            d = u?.KeyframeResolver || tt;
          ((this.keyframeResolver = new d(
            a,
            (t, e, i) => this.onKeyframesResolved(t, e, c, !i),
            o,
            l,
            u,
          )),
            this.keyframeResolver?.scheduleResolve());
        }
        onKeyframesResolved(t, e, i, n) {
          this.keyframeResolver = void 0;
          let {
            name: r,
            type: s,
            velocity: a,
            delay: o,
            isHandoff: l,
            onUpdate: u,
          } = i;
          ((this.resolvedAt = to.k.now()),
            !(function (t, e, i, n) {
              let r = t[0];
              if (null === r) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let s = t[t.length - 1],
                a = e4(r, e),
                o = e4(s, e);
              return (
                (0, P.$)(
                  a === o,
                  `You are trying to animate ${e} from "${r}" to "${s}". "${a ? s : r}" is not an animatable value.`,
                  "value-not-animatable",
                ),
                !!a &&
                  !!o &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || ez(i)) && n))
              );
            })(t, r, s, a) &&
              ((eC.W.instantAnimations || !o) && u?.(eF.X(t, i, e)),
              (t[0] = t[t.length - 1]),
              e6(i),
              (i.repeat = 0)));
          let h = {
              startTime: n
                ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: e,
              ...i,
              keyframes: t,
            },
            c =
              !l &&
              (function (t) {
                let {
                  motionValue: e,
                  name: i,
                  repeatDelay: n,
                  repeatType: r,
                  damping: s,
                  type: a,
                } = t;
                if (!(e?.owner?.current instanceof HTMLElement)) return !1;
                let { onUpdate: o, transformTemplate: l } = e.owner.getProps();
                return (
                  e5() &&
                  i &&
                  e8.has(i) &&
                  ("transform" !== i || !l) &&
                  !o &&
                  !n &&
                  "mirror" !== r &&
                  0 !== s &&
                  "inertia" !== a
                );
              })(h),
            d = h.motionValue?.owner?.current,
            p = c ? new e2({ ...h, element: d }) : new ej.s(h);
          (p.finished
            .then(() => {
              this.notifyFinished();
            })
            .catch(eD.l),
            this.pendingTimeline &&
              ((this.stopTimeline = p.attachTimeline(this.pendingTimeline)),
              (this.pendingTimeline = void 0)),
            (this._animation = p));
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished;
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
        get animation() {
          return (
            this._animation ||
              (this.keyframeResolver?.resume(), (_ = !0), J(), Q(), (_ = !1)),
            this._animation
          );
        }
        get duration() {
          return this.animation.duration;
        }
        get iterationDuration() {
          return this.animation.iterationDuration;
        }
        get time() {
          return this.animation.time;
        }
        set time(t) {
          this.animation.time = t;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(t) {
          this.animation.speed = t;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(t) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(t))
              : (this.pendingTimeline = t),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          (this._animation && this.animation.cancel(),
            this.keyframeResolver?.cancel());
        }
      }
      let e7 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        e9 = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        it = { type: "keyframes", duration: 0.8 },
        ie = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        ii = (t, { keyframes: e }) =>
          e.length > 2
            ? it
            : r.has(t)
              ? t.startsWith("scale")
                ? e9(e[1])
                : e7
              : ie,
        ir = (t) => null !== t,
        is =
          (t, e, i, n = {}, r, s) =>
          (a) => {
            let o = eP(n, t) || {},
              l = o.delay || n.delay || 0,
              { elapsed: u = 0 } = n;
            u -= (0, eR.f)(l);
            let h = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...o,
              delay: -u,
              onUpdate: (t) => {
                (e.set(t), o.onUpdate && o.onUpdate(t));
              },
              onComplete: () => {
                (a(), o.onComplete && o.onComplete());
              },
              name: t,
              motionValue: e,
              element: s ? void 0 : r,
            };
            (!(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: r,
              repeat: s,
              repeatType: a,
              repeatDelay: o,
              from: l,
              elapsed: u,
              ...h
            }) {
              return !!Object.keys(h).length;
            })(o) && Object.assign(h, ii(t, h)),
              h.duration && (h.duration = (0, eR.f)(h.duration)),
              h.repeatDelay && (h.repeatDelay = (0, eR.f)(h.repeatDelay)),
              void 0 !== h.from && (h.keyframes[0] = h.from));
            let c = !1;
            if (
              ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
                (e6(h), 0 !== h.delay || (c = !0)),
              (eC.W.instantAnimations || eC.W.skipAnimations) &&
                ((c = !0), e6(h), (h.delay = 0)),
              (h.allowFlatten = !o.type && !o.ease),
              c && !s && void 0 !== e.get())
            ) {
              let t = (function (t, { repeat: e, repeatType: i = "loop" }, n) {
                let r = t.filter(ir),
                  s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
                return r[s];
              })(h.keyframes, o);
              if (void 0 !== t) {
                K.Gt.update(() => {
                  (h.onUpdate(t), h.onComplete());
                });
                return;
              }
            }
            return o.isSync ? new ej.s(h) : new e3(h);
          };
      function ia(t, e, { delay: i = 0, transitionOverride: n, type: r } = {}) {
        let {
          transition: s = t.getDefaultTransition(),
          transitionEnd: a,
          ...o
        } = e;
        n && (s = n);
        let l = [],
          u = r && t.animationState && t.animationState.getState()[r];
        for (let e in o) {
          let n = t.getValue(e, t.latestValues[e] ?? null),
            r = o[e];
          if (
            void 0 === r ||
            (u &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return ((e[i] = !1), n);
              })(u, e))
          )
            continue;
          let a = { delay: i, ...eP(s || {}, e) },
            h = n.get();
          if (
            void 0 !== h &&
            !n.isAnimating &&
            !Array.isArray(r) &&
            r === h &&
            !a.velocity
          )
            continue;
          let c = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[ew];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, K.Gt);
              null !== t && ((a.startTime = t), (c = !0));
            }
          }
          (eL(t, e),
            n.start(
              is(
                e,
                n,
                r,
                t.shouldReduceMotion && E.has(e) ? { type: !1 } : a,
                t,
                c,
              ),
            ));
          let d = n.animation;
          d && l.push(d);
        }
        return (
          a &&
            Promise.all(l).then(() => {
              K.Gt.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = eS(t, e) || {};
                    for (let e in (r = { ...r, ...i })) {
                      var s;
                      let i = ek((s = r[e])) ? s[s.length - 1] || 0 : s;
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, (0, tl.OQ)(i));
                    }
                  })(t, a);
              });
            }),
          l
        );
      }
      function io(t, e, i, n = 0, r = 1) {
        let s = Array.from(t)
            .sort((t, e) => t.sortNodePosition(e))
            .indexOf(e),
          a = t.size,
          o = (a - 1) * n;
        return "function" == typeof i ? i(s, a) : 1 === r ? s * n : o - s * n;
      }
      function il(t, e, i = {}) {
        let n = eS(
            t,
            e,
            "exit" === i.type ? t.presenceContext?.custom : void 0,
          ),
          { transition: r = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (r = i.transitionOverride);
        let s = n ? () => Promise.all(ia(t, n, i)) : () => Promise.resolve(),
          a =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: a,
                    staggerDirection: o,
                  } = r;
                  return (function (t, e, i = 0, n = 0, r = 0, s = 1, a) {
                    let o = [];
                    for (let l of t.variantChildren)
                      (l.notify("AnimationStart", e),
                        o.push(
                          il(l, e, {
                            ...a,
                            delay:
                              i +
                              ("function" == typeof n ? 0 : n) +
                              io(t.variantChildren, l, n, r, s),
                          }).then(() => l.notify("AnimationComplete", e)),
                        ));
                    return Promise.all(o);
                  })(t, e, n, s, a, o, i);
                }
              : () => Promise.resolve(),
          { when: o } = r;
        if (!o) return Promise.all([s(), a(i.delay)]);
        {
          let [t, e] = "beforeChildren" === o ? [s, a] : [a, s];
          return t().then(() => e());
        }
      }
      let iu = ty.length;
      function ih(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      let ic = [...tg].reverse(),
        id = tg.length;
      function ip(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function im() {
        return {
          animate: ip(!0),
          whileInView: ip(),
          whileHover: ip(),
          whileTap: ip(),
          whileDrag: ip(),
          whileFocus: ip(),
          exit: ip(),
        };
      }
      class iv extends eT {
        constructor(t) {
          (super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => il(t, e, i)));
                          else if ("string" == typeof e) n = il(t, e, i);
                          else {
                            let r =
                              "function" == typeof e ? eS(t, e, i.custom) : e;
                            n = Promise.all(ia(t, r, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i),
                      ),
                    ),
                  i = im(),
                  n = !0,
                  r = (e) => (i, n) => {
                    let r = eS(
                      t,
                      n,
                      "exit" === e ? t.presenceContext?.custom : void 0,
                    );
                    if (r) {
                      let { transition: t, transitionEnd: e, ...n } = r;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function s(s) {
                  let { props: a } = t,
                    o =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < iu; t++) {
                          let n = ty[t],
                            r = e.props[n];
                          (tv(r) || !1 === r) && (i[n] = r);
                        }
                        return i;
                      })(t.parent) || {},
                    l = [],
                    u = new Set(),
                    h = {},
                    c = 1 / 0;
                  for (let e = 0; e < id; e++) {
                    var d;
                    let p = ic[e],
                      m = i[p],
                      f = void 0 !== a[p] ? a[p] : o[p],
                      v = tv(f),
                      g = p === s ? m.isActive : null;
                    !1 === g && (c = e);
                    let y = f === o[p] && f !== a[p] && v;
                    if (
                      (y && n && t.manuallyAnimateOnMount && (y = !1),
                      (m.protectedKeys = { ...h }),
                      (!m.isActive && null === g) ||
                        (!f && !m.prevProp) ||
                        tf(f) ||
                        "boolean" == typeof f)
                    )
                      continue;
                    let x =
                        ((d = m.prevProp),
                        "string" == typeof f
                          ? f !== d
                          : !!Array.isArray(f) && !ih(f, d)),
                      A =
                        x || (p === s && m.isActive && !y && v) || (e > c && v),
                      w = !1,
                      V = Array.isArray(f) ? f : [f],
                      b = V.reduce(r(p), {});
                    !1 === g && (b = {});
                    let { prevResolvedValues: E = {} } = m,
                      M = { ...E, ...b },
                      T = (e) => {
                        ((A = !0),
                          u.has(e) && ((w = !0), u.delete(e)),
                          (m.needsAnimating[e] = !0));
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in M) {
                      let e = b[t],
                        i = E[t];
                      if (!h.hasOwnProperty(t))
                        (ek(e) && ek(i) ? ih(e, i) : e === i)
                          ? void 0 !== e && u.has(t)
                            ? T(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                            ? T(t)
                            : u.add(t);
                    }
                    ((m.prevProp = f),
                      (m.prevResolvedValues = b),
                      m.isActive && (h = { ...h, ...b }),
                      n && t.blockInitialAnimation && (A = !1));
                    let S = y && x,
                      P = !S || w;
                    A &&
                      P &&
                      l.push(
                        ...V.map((e) => {
                          let i = { type: p };
                          if (
                            "string" == typeof e &&
                            n &&
                            !S &&
                            t.manuallyAnimateOnMount &&
                            t.parent
                          ) {
                            let { parent: n } = t,
                              r = eS(n, e);
                            if (n.enteringChildren && r) {
                              let { delayChildren: e } = r.transition || {};
                              i.delay = io(n.enteringChildren, t, e);
                            }
                          }
                          return { animation: e, options: i };
                        }),
                      );
                  }
                  if (u.size) {
                    let e = {};
                    if ("boolean" != typeof a.initial) {
                      let i = eS(
                        t,
                        Array.isArray(a.initial) ? a.initial[0] : a.initial,
                      );
                      i && i.transition && (e.transition = i.transition);
                    }
                    (u.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        r = t.getValue(i);
                      (r && (r.liveStyle = !0), (e[i] = n ?? null));
                    }),
                      l.push({ animation: e }));
                  }
                  let p = !!l.length;
                  return (
                    n &&
                      (!1 === a.initial || a.initial === a.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (n = !1),
                    p ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: s,
                  setActive: function (e, n) {
                    if (i[e].isActive === n) return Promise.resolve();
                    (t.variantChildren?.forEach((t) =>
                      t.animationState?.setActive(e, n),
                    ),
                      (i[e].isActive = n));
                    let r = s(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return r;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    i = im();
                  },
                };
              })(t)));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          tf(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          (this.node.animationState.reset(), this.unmountControls?.());
        }
      }
      let ig = 0;
      class iy extends eT {
        constructor() {
          (super(...arguments), (this.id = ig++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            n.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          (e && e(this.id), t && (this.unmount = t(this.id)));
        }
        unmount() {}
      }
      let ix = { x: !1, y: !1 };
      function iA(t) {
        return [t("x"), t("y")];
      }
      function iw(t) {
        return t.max - t.min;
      }
      function iV(t, e, i, n = 0.5) {
        ((t.origin = n),
          (t.originPoint = (0, tO.k)(e.min, e.max, t.origin)),
          (t.scale = iw(i) / iw(e)),
          (t.translate = (0, tO.k)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0));
      }
      function ib(t, e, i, n) {
        (iV(t.x, e.x, i.x, n ? n.originX : void 0),
          iV(t.y, e.y, i.y, n ? n.originY : void 0));
      }
      function iE(t, e, i) {
        ((t.min = i.min + e.min), (t.max = t.min + iw(e)));
      }
      function iM(t, e, i) {
        ((t.min = e.min - i.min), (t.max = t.min + iw(e)));
      }
      function iT(t, e, i) {
        (iM(t.x, e.x, i.x), iM(t.y, e.y, i.y));
      }
      let iS = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
      function iP(t) {
        return iS.has(t.tagName) || !0 === t.isContentEditable;
      }
      function ik(t, e, i, n = { passive: !0 }) {
        return (t.addEventListener(e, i, n), () => t.removeEventListener(e, i));
      }
      let iC = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function iL(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let iR = (t) => (e) => iC(e) && t(e, iL(e));
      function iD(t, e, i, n) {
        return ik(t, e, iR(i), n);
      }
      let ij = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var iF = i(1046);
      let iZ = (t, e) => Math.abs(t - e),
        iH = new Set(["auto", "scroll"]);
      class iB {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n = window,
            dragSnapToOrigin: r = !1,
            distanceThreshold: s = 3,
            element: a,
          } = {},
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.scrollPositions = new Map()),
            (this.removeScrollListeners = null),
            (this.onElementScroll = (t) => {
              this.handleScroll(t.target);
            }),
            (this.onWindowScroll = () => {
              this.handleScroll(window);
            }),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = iN(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                i =
                  (function (t, e) {
                    return Math.sqrt(iZ(t.x, e.x) ** 2 + iZ(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
              if (!e && !i) return;
              let { point: n } = t,
                { timestamp: r } = K.uv;
              this.history.push({ ...n, timestamp: r });
              let { onStart: s, onMove: a } = this.handlers;
              (e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                a && a(this.lastMoveEvent, t));
            }),
            (this.handlePointerMove = (t, e) => {
              ((this.lastMoveEvent = t),
                (this.lastMoveEventInfo = iI(e, this.transformPagePoint)),
                K.Gt.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: r,
              } = this.handlers;
              if (
                ((this.dragSnapToOrigin || !this.startEvent) && r && r(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let s = iN(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : iI(e, this.transformPagePoint),
                this.history,
              );
              (this.startEvent && i && i(t, s), n && n(t, s));
            }),
            !iC(t))
          )
            return;
          ((this.dragSnapToOrigin = r),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.distanceThreshold = s),
            (this.contextWindow = n || window));
          let o = iI(iL(t), this.transformPagePoint),
            { point: l } = o,
            { timestamp: u } = K.uv;
          this.history = [{ ...l, timestamp: u }];
          let { onSessionStart: h } = e;
          (h && h(t, iN(o, this.history)),
            (this.removeListeners = (0, iF.F)(
              iD(this.contextWindow, "pointermove", this.handlePointerMove),
              iD(this.contextWindow, "pointerup", this.handlePointerUp),
              iD(this.contextWindow, "pointercancel", this.handlePointerUp),
            )),
            a && this.startScrollTracking(a));
        }
        startScrollTracking(t) {
          let e = t.parentElement;
          for (; e; ) {
            let t = getComputedStyle(e);
            ((iH.has(t.overflowX) || iH.has(t.overflowY)) &&
              this.scrollPositions.set(e, { x: e.scrollLeft, y: e.scrollTop }),
              (e = e.parentElement));
          }
          (this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY,
          }),
            window.addEventListener("scroll", this.onElementScroll, {
              capture: !0,
              passive: !0,
            }),
            window.addEventListener("scroll", this.onWindowScroll, {
              passive: !0,
            }),
            (this.removeScrollListeners = () => {
              (window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0,
              }),
                window.removeEventListener("scroll", this.onWindowScroll));
            }));
        }
        handleScroll(t) {
          let e = this.scrollPositions.get(t);
          if (!e) return;
          let i = t === window,
            n = i
              ? { x: window.scrollX, y: window.scrollY }
              : { x: t.scrollLeft, y: t.scrollTop },
            r = { x: n.x - e.x, y: n.y - e.y };
          (0 !== r.x || 0 !== r.y) &&
            (i
              ? this.lastMoveEventInfo &&
                ((this.lastMoveEventInfo.point.x += r.x),
                (this.lastMoveEventInfo.point.y += r.y))
              : this.history.length > 0 &&
                ((this.history[0].x -= r.x), (this.history[0].y -= r.y)),
            this.scrollPositions.set(t, n),
            K.Gt.update(this.updatePoint, !0));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            (0, K.WG)(this.updatePoint));
        }
      }
      function iI(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function iO(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function iN({ point: t }, e) {
        return {
          point: t,
          delta: iO(t, iU(e)),
          offset: iO(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = iU(t);
            for (
              ;
              i >= 0 &&
              ((n = t[i]), !(r.timestamp - n.timestamp > (0, eR.f)(0.1)));
            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let s = (0, eR.X)(r.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let a = { x: (r.x - n.x) / s, y: (r.y - n.y) / s };
            return (a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a);
          })(e, 0),
        };
      }
      function iU(t) {
        return t[t.length - 1];
      }
      var iG = i(9615);
      function iW(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function i$(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]),
          { min: i, max: n }
        );
      }
      function iX(t, e, i) {
        return { min: iK(t, e), max: iK(t, i) };
      }
      function iK(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let iq = new WeakMap();
      class iz {
        constructor(t) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = V()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = t));
        }
        start(t, { snapToCursor: e = !1, distanceThreshold: i } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new iB(
            t,
            {
              onSessionStart: (t) => {
                e
                  ? (this.stopAnimation(), this.snapToCursor(iL(t).point))
                  : this.pauseAnimation();
              },
              onStart: (t, e) => {
                this.stopAnimation();
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: r,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    "x" === i || "y" === i
                      ? ix[i]
                        ? null
                        : ((ix[i] = !0),
                          () => {
                            ix[i] = !1;
                          })
                      : ix.x || ix.y
                        ? null
                        : ((ix.x = ix.y = !0),
                          () => {
                            ix.x = ix.y = !1;
                          })),
                  !this.openDragLock)
                )
                  return;
                ((this.latestPointerEvent = t),
                  (this.latestPanInfo = e),
                  (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  iA((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (m.KN.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        n && (e = iw(n) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && K.Gt.postRender(() => r(t, e)),
                  eL(this.visualElement, "transform"));
                let { animationState: s } = this.visualElement;
                s && s.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                ((this.latestPointerEvent = t), (this.latestPanInfo = e));
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: r,
                  onDrag: s,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: a } = e;
                if (n && null === this.currentDirection) {
                  ((this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(a)),
                    null !== this.currentDirection &&
                      r &&
                      r(this.currentDirection));
                  return;
                }
                (this.updateAxis("x", e.point, a),
                  this.updateAxis("y", e.point, a),
                  this.visualElement.render(),
                  s && s(t, e));
              },
              onSessionEnd: (t, e) => {
                ((this.latestPointerEvent = t),
                  (this.latestPanInfo = e),
                  this.stop(t, e),
                  (this.latestPointerEvent = null),
                  (this.latestPanInfo = null));
              },
              resumeAnimation: () =>
                iA(
                  (t) =>
                    "paused" === this.getAnimationState(t) &&
                    this.getAxisMotionValue(t).animation?.play(),
                ),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: r,
              distanceThreshold: i,
              contextWindow: ij(this.visualElement),
              element: this.visualElement.current,
            },
          );
        }
        stop(t, e) {
          let i = t || this.latestPointerEvent,
            n = e || this.latestPanInfo,
            r = this.isDragging;
          if ((this.cancel(), !r || !n || !i)) return;
          let { velocity: s } = n;
          this.startAnimation(s);
          let { onDragEnd: a } = this.getProps();
          a && K.Gt.postRender(() => a(i, n));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          (t && (t.isAnimationBlocked = !1), this.endPanSession());
          let { dragPropagation: i } = this.getProps();
          (!i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1));
        }
        endPanSession() {
          (this.panSession && this.panSession.end(),
            (this.panSession = void 0));
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !iY(t, n, this.currentDirection)) return;
          let r = this.getAxisMotionValue(t),
            s = this.originPoint[t] + i[t];
          (this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, tO.k)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, tO.k)(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            r.set(s));
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            n = this.constraints;
          (t && eb(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: n, right: r },
                ) {
                  return { x: iW(t.x, i, r), y: iW(t.y, e, n) };
                })(i.layoutBox, t))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: iX(t, "left", "right"), y: iX(t, "top", "bottom") }
              );
            })(e)),
            n !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              iA((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              }));
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !eb(e)) return !1;
          let n = e.current;
          (0, P.V)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
            "drag-constraints-ref",
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let s = (function (t, e, i) {
              let n = t4(t, i),
                { scroll: r } = e;
              return (r && (t0(n.x, r.offset.x), t0(n.y, r.offset.y)), n);
            })(n, r.root, this.visualElement.getTransformPagePoint()),
            a = { x: i$((t = r.layout.layoutBox).x, s.x), y: i$(t.y, s.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(a),
            );
            ((this.hasMutatedConstraints = !!t), t && (a = tX(t)));
          }
          return a;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: r,
              dragSnapToOrigin: s,
              onDragTransitionEnd: a,
            } = this.getProps(),
            o = this.constraints || {};
          return Promise.all(
            iA((a) => {
              if (!iY(a, e, this.currentDirection)) return;
              let l = (o && o[a]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: i ? t[a] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...r,
                ...l,
              };
              return this.startAxisValueAnimation(a, u);
            }),
          ).then(a);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            eL(this.visualElement, t),
            i.start(is(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          iA((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          iA((t) => this.getAxisMotionValue(t).animation?.pause());
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0,
            )
          );
        }
        snapToCursor(t) {
          iA((e) => {
            let { drag: i } = this.getProps();
            if (!iY(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e],
                a = r.get() || 0;
              r.set(t[e] - (0, tO.k)(i, s, 0.5) + a);
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!eb(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          iA((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = iw(t),
                  r = iw(e);
                return (
                  r > n
                    ? (i = (0, iG.q)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, iG.q)(t.min, t.max - r, e.min)),
                  (0, eZ.q)(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = r
            ? r({}, "")
            : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            iA((e) => {
              if (!iY(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, tO.k)(r, s, n[e]));
            }));
        }
        addListeners() {
          if (!this.visualElement.current) return;
          iq.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = iD(t, "pointerdown", (e) => {
              let { drag: i, dragListener: n = !0 } = this.getProps(),
                r = e.target,
                s = r !== t && iP(r);
              i && n && !s && this.start(e);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              eb(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", i);
          (n &&
            !n.layout &&
            (n.root && n.root.updateScroll(), n.updateLayout()),
            K.Gt.read(i));
          let s = ik(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            a = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (iA((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              },
            );
          return () => {
            (s(), e(), r(), a && a());
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: r = !1,
              dragElastic: s = 0.35,
              dragMomentum: a = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: r,
            dragElastic: s,
            dragMomentum: a,
          };
        }
      }
      function iY(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class i_ extends eT {
        constructor(t) {
          (super(t),
            (this.removeGroupControls = eD.l),
            (this.removeListeners = eD.l),
            (this.controls = new iz(t)));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          (t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || eD.l));
        }
        update() {
          let { dragControls: t } = this.node.getProps(),
            { dragControls: e } = this.node.prevProps || {};
          t !== e &&
            (this.removeGroupControls(),
            t && (this.removeGroupControls = t.subscribe(this.controls)));
        }
        unmount() {
          (this.removeGroupControls(),
            this.removeListeners(),
            this.controls.isDragging || this.controls.endPanSession());
        }
      }
      let iQ = (t) => (e, i) => {
        t && K.Gt.postRender(() => t(e, i));
      };
      class iJ extends eT {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = eD.l));
        }
        onPointerDown(t) {
          this.session = new iB(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: ij(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: iQ(t),
            onStart: iQ(e),
            onMove: i,
            onEnd: (t, e) => {
              (delete this.session, n && K.Gt.postRender(() => n(t, e)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = iD(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t),
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          (this.removePointerDownListener(),
            this.session && this.session.end());
        }
      }
      let i0 = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      var i1 = i(5087);
      let i2 = !1;
      class i4 extends t8.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: r } = t;
          (r &&
            (e.group && e.group.add(r),
            i && i.register && n && i.register(r),
            i2 && r.root.didUpdate(),
            r.addEventListener("animationComplete", () => {
              this.safeToRemove();
            }),
            r.setOptions({
              ...r.options,
              layoutDependency: this.props.layoutDependency,
              onExitComplete: () => this.safeToRemove(),
            })),
            (i0.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: r,
            } = this.props,
            { projection: s } = i;
          return (
            s &&
              ((s.isPresent = r),
              t.layoutDependency !== e &&
                s.setOptions({ ...s.options, layoutDependency: e }),
              (i2 = !0),
              n || t.layoutDependency !== e || void 0 === e || t.isPresent !== r
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === r ||
                (r
                  ? s.promote()
                  : s.relegate() ||
                    K.Gt.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            ta.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          ((i2 = !0),
            n &&
              (n.scheduleCheckAfterUnmount(),
              e && e.group && e.group.remove(n),
              i && i.deregister && i.deregister(n)));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function i6(t) {
        let [e, i] = (0, i1.xQ)(),
          n = (0, t8.useContext)(t9.L);
        return (0, t7.jsx)(i4, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, t8.useContext)(eV),
          isPresent: e,
          safeToRemove: i,
        });
      }
      function i8(t, e, i, n, r) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== r && (t = n + (1 / r) * (t - n)),
          t
        );
      }
      function i5(t, e, [i, n, r], s, a) {
        !(function (t, e = 0, i = 1, n = 0.5, r, s = t, a = t) {
          if (
            (m.KN.test(e) &&
              ((e = parseFloat(e)),
              (e = (0, tO.k)(a.min, a.max, e / 100) - a.min)),
            "number" != typeof e)
          )
            return;
          let o = (0, tO.k)(s.min, s.max, n);
          (t === s && (o -= e),
            (t.min = i8(t.min, e, i, o, r)),
            (t.max = i8(t.max, e, i, o, r)));
        })(t, e[i], e[n], e[r], e.scale, s, a);
      }
      let i3 = ["x", "scaleX", "originX"],
        i7 = ["y", "scaleY", "originY"];
      function i9(t, e, i, n) {
        (i5(t.x, e, i3, i ? i.x : void 0, n ? n.x : void 0),
          i5(t.y, e, i7, i ? i.y : void 0, n ? n.y : void 0));
      }
      function nt(t, e) {
        ((t.min = e.min), (t.max = e.max));
      }
      function ne(t, e) {
        (nt(t.x, e.x), nt(t.y, e.y));
      }
      function ni(t, e) {
        ((t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin));
      }
      function nn(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nr(t) {
        return nn(t.x) && nn(t.y);
      }
      function ns(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function na(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function no(t, e) {
        return na(t.x, e.x) && na(t.y, e.y);
      }
      function nl(t) {
        return iw(t.x) / iw(t.y);
      }
      function nu(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      let nh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nc = nh.length,
        nd = (t) => ("string" == typeof t ? parseFloat(t) : t),
        np = (t) => "number" == typeof t || m.px.test(t);
      function nm(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nf = ng(0, 0.5, e0.yT),
        nv = ng(0.5, 0.95, eD.l);
      function ng(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, iG.q)(t, e, n)));
      }
      var ny = i(8180);
      function nx(t) {
        return (0, ny.G)(t) && "ownerSVGElement" in t;
      }
      var nA = i(1555);
      let nw = (t, e) => t.depth - e.depth;
      class nV {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(t) {
          ((0, nA.Kq)(this.children, t), (this.isDirty = !0));
        }
        remove(t) {
          ((0, nA.Ai)(this.children, t), (this.isDirty = !0));
        }
        forEach(t) {
          (this.isDirty && this.children.sort(nw),
            (this.isDirty = !1),
            this.children.forEach(t));
        }
      }
      class nb {
        constructor() {
          this.members = [];
        }
        add(t) {
          ((0, nA.Kq)(this.members, t), t.scheduleRender());
        }
        remove(t) {
          if (
            ((0, nA.Ai)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            (i.instance && i.scheduleRender(), t.scheduleRender());
            let n = i.options.layoutDependency,
              r = t.options.layoutDependency;
            !(void 0 !== n && void 0 !== r && n === r) &&
              ((t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
            let { crossfade: s } = t.options;
            !1 === s && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            (e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete());
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let nE = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        nM = ["", "X", "Y", "Z"],
        nT = 0;
      function nS(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function nP({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = e?.()) {
            ((this.id = nT++),
              (this.animationId = 0),
              (this.animationCommitId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.layoutVersion = 0),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                ((this.projectionUpdateScheduled = !1),
                  eU.Q.value &&
                    (nE.nodes =
                      nE.calculatedTargetDeltas =
                      nE.calculatedProjections =
                        0),
                  this.nodes.forEach(nL),
                  this.nodes.forEach(nB),
                  this.nodes.forEach(nI),
                  this.nodes.forEach(nR),
                  eU.Q.addProjectionMetrics && eU.Q.addProjectionMetrics(nE));
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.linkedParentVersion = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0));
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nV());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new ts.v()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e) {
            if (this.instance) return;
            ((this.isSVG = nx(e) && !(nx(e) && "svg" === e.tagName)),
              (this.instance = e));
            let { layoutId: i, layout: n, visualElement: r } = this.options;
            if (
              (r && !r.current && r.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              this.root.hasTreeAnimated &&
                (n || i) &&
                (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = 0,
                r = () => (this.root.updateBlockedByResize = !1);
              (K.Gt.read(() => {
                n = window.innerWidth;
              }),
                t(e, () => {
                  let t = window.innerWidth;
                  t !== n &&
                    ((n = t),
                    (this.root.updateBlockedByResize = !0),
                    i && i(),
                    (i = (function (t, e) {
                      let i = to.k.now(),
                        n = ({ timestamp: e }) => {
                          let r = e - i;
                          r >= 250 && ((0, K.WG)(n), t(r - 250));
                        };
                      return (K.Gt.setup(n, !0), () => (0, K.WG)(n));
                    })(r, 250)),
                    i0.hasAnimatedSinceResize &&
                      ((i0.hasAnimatedSinceResize = !1),
                      this.nodes.forEach(nH)));
                }));
            }
            (i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                r &&
                (i || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      ((this.target = void 0), (this.relativeTarget = void 0));
                      return;
                    }
                    let s =
                        this.options.transition ||
                        r.getDefaultTransition() ||
                        n$,
                      {
                        onLayoutAnimationStart: a,
                        onLayoutAnimationComplete: o,
                      } = r.getProps(),
                      l = !this.targetLayout || !no(this.targetLayout, n),
                      u = !e && i;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0));
                      let e = { ...eP(s, "layout"), onPlay: a, onComplete: o };
                      ((r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e),
                        this.setAnimationOrigin(t, u));
                    } else
                      (e || nH(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete());
                    this.targetLayout = n;
                  },
                ));
          }
          unmount() {
            (this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this));
            let t = this.getStack();
            (t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              this.eventHandlers.clear(),
              (0, K.WG)(this.updateProjection));
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(nO),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = i.props[ew];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      K.Gt,
                      !(t || i),
                    );
                  }
                  let { parent: r } = e;
                  r && !r.hasCheckedOptimisedAppear && t(r);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              ((e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1));
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            ((this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate"));
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              (this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nj));
              return;
            }
            if (this.animationId <= this.animationCommitId) {
              this.nodes.forEach(nF);
              return;
            }
            ((this.animationCommitId = this.animationId),
              this.isUpdating
                ? ((this.isUpdating = !1),
                  this.nodes.forEach(nZ),
                  this.nodes.forEach(nk),
                  this.nodes.forEach(nC))
                : this.nodes.forEach(nF),
              this.clearAllSnapshots());
            let t = to.k.now();
            ((K.uv.delta = (0, eZ.q)(0, 1e3 / 60, t - K.uv.timestamp)),
              (K.uv.timestamp = t),
              (K.uv.isProcessing = !0),
              K.PP.update.process(K.uv),
              K.PP.preRender.process(K.uv),
              K.PP.render.process(K.uv),
              (K.uv.isProcessing = !1));
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), ta.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            (this.nodes.forEach(nD), this.sharedNodes.forEach(nN));
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              K.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            K.Gt.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            this.snapshot ||
              !this.instance ||
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                iw(this.snapshot.measuredBox.x) ||
                iw(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            ((this.layout = this.measure(!1)),
              this.layoutVersion++,
              (this.layoutCorrected = V()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox));
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0,
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e && this.instance)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!r) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !nr(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              this.instance &&
              (e || tz(this.latestValues) || s) &&
              (r(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              nq((e = n).x),
              nq(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return V();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(nY))) {
              let { scroll: t } = this.root;
              t && (t0(e.x, t.offset.x), t0(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = V();
            if ((ne(e, t), this.scroll?.wasRoot)) return e;
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: r, options: s } = n;
              n !== this.root &&
                r &&
                s.layoutScroll &&
                (r.wasRoot && ne(e, t),
                t0(e.x, r.offset.x),
                t0(e.y, r.offset.y));
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = V();
            ne(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              (!e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                t2(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                tz(n.latestValues) && t2(i, n.latestValues));
            }
            return (tz(this.latestValues) && t2(i, this.latestValues), i);
          }
          removeTransform(t) {
            let e = V();
            ne(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !tz(i.latestValues)) continue;
              tq(i.latestValues) && i.updateSnapshot();
              let n = V();
              (ne(n, i.measurePageBox()),
                i9(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n,
                ));
            }
            return (tz(this.latestValues) && i9(e, this.latestValues), e);
          }
          setTargetDelta(t) {
            ((this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0));
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            ((this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1));
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== K.uv.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            (this.isProjectionDirty ||
              (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = e.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = e.isSharedProjectionDirty));
            let i = !!this.resumingFrom || this !== e;
            if (
              !(
                t ||
                (i && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                this.parent?.isProjectionDirty ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (!this.layout || !(n || r)) return;
            this.resolvedRelativeTargetAt = K.uv.timestamp;
            let s = this.getClosestProjectingParent();
            if (
              (s &&
                this.linkedParentVersion !== s.layoutVersion &&
                !s.options.layoutRoot &&
                this.removeRelativeTarget(),
              this.targetDelta ||
                this.relativeTarget ||
                (s && s.layout
                  ? this.createRelativeTarget(
                      s,
                      this.layout.layoutBox,
                      s.layout.layoutBox,
                    )
                  : this.removeRelativeTarget()),
              this.relativeTarget || this.targetDelta)
            ) {
              if (
                (this.target ||
                  ((this.target = V()), (this.targetWithTransforms = V())),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.relativeParent &&
                  this.relativeParent.target)
              ) {
                var a, o, l;
                (this.forceRelativeParentToResolveTarget(),
                  (a = this.target),
                  (o = this.relativeTarget),
                  (l = this.relativeParent.target),
                  iE(a.x, o.x, l.x),
                  iE(a.y, o.y, l.y));
              } else
                this.targetDelta
                  ? (this.resumingFrom
                      ? (this.target = this.applyTransform(
                          this.layout.layoutBox,
                        ))
                      : ne(this.target, this.layout.layoutBox),
                    tJ(this.target, this.targetDelta))
                  : ne(this.target, this.layout.layoutBox);
              (this.attemptToResolveRelativeTarget &&
                ((this.attemptToResolveRelativeTarget = !1),
                s &&
                !!s.resumingFrom == !!this.resumingFrom &&
                !s.options.layoutScroll &&
                s.target &&
                1 !== this.animationProgress
                  ? this.createRelativeTarget(s, this.target, s.target)
                  : (this.relativeParent = this.relativeTarget = void 0)),
                eU.Q.value && nE.calculatedTargetDeltas++);
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              tq(this.parent.latestValues) ||
              tY(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
                ? this.parent
                : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          createRelativeTarget(t, e, i) {
            ((this.relativeParent = t),
              (this.linkedParentVersion = t.layoutVersion),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = V()),
              (this.relativeTargetOrigin = V()),
              iT(this.relativeTargetOrigin, e, i),
              ne(this.relativeTarget, this.relativeTargetOrigin));
          }
          removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0;
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
                (i = !1),
              e &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === K.uv.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: n, layoutId: r } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || r))
            )
              return;
            ne(this.layoutCorrected, this.layout.layoutBox);
            let s = this.treeScale.x,
              a = this.treeScale.y;
            (!(function (t, e, i, n = !1) {
              let r, s;
              let a = i.length;
              if (a) {
                e.x = e.y = 1;
                for (let o = 0; o < a; o++) {
                  s = (r = i[o]).projectionDelta;
                  let { visualElement: a } = r.options;
                  (!a ||
                    !a.props.style ||
                    "contents" !== a.props.style.display) &&
                    (n &&
                      r.options.layoutScroll &&
                      r.scroll &&
                      r !== r.root &&
                      t2(t, { x: -r.scroll.offset.x, y: -r.scroll.offset.y }),
                    s && ((e.x *= s.x.scale), (e.y *= s.y.scale), tJ(t, s)),
                    n && tz(r.latestValues) && t2(t, r.latestValues));
                }
                (e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1));
              }
            })(this.layoutCorrected, this.treeScale, this.path, e),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = V())));
            let { target: o } = t;
            if (!o) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            (this.projectionDelta && this.prevProjectionDelta
              ? (ni(this.prevProjectionDelta.x, this.projectionDelta.x),
                ni(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              ib(
                this.projectionDelta,
                this.layoutCorrected,
                o,
                this.latestValues,
              ),
              (this.treeScale.x === s &&
                this.treeScale.y === a &&
                nu(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                nu(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", o)),
              eU.Q.value && nE.calculatedProjections++);
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if ((this.options.visualElement?.scheduleRender(), t)) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            ((this.prevProjectionDelta = A()),
              (this.projectionDelta = A()),
              (this.projectionDeltaWithTransform = A()));
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              a = A();
            ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e));
            let o = V(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              c = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(nW)
              );
            ((this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (nU(a.x, t.x, n),
                  nU(a.y, t.y, n),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, d, p, f;
                  (iT(
                    o,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox,
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    nG(p.x, f.x, o.x, n),
                    nG(p.y, f.y, o.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (d = i),
                      ns(u.x, d.x) && ns(u.y, d.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = V()),
                    ne(i, this.relativeTarget));
                }
                (l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, tO.k)(0, i.opacity ?? 1, nf(n))),
                        (t.opacityExit = (0, tO.k)(e.opacity ?? 1, 0, nv(n))))
                      : s &&
                        (t.opacity = (0, tO.k)(
                          e.opacity ?? 1,
                          i.opacity ?? 1,
                          n,
                        ));
                    for (let r = 0; r < nc; r++) {
                      let s = `border${nh[r]}Radius`,
                        a = nm(e, s),
                        o = nm(i, s);
                      (void 0 !== a || void 0 !== o) &&
                        (a || (a = 0),
                        o || (o = 0),
                        0 === a || 0 === o || np(a) === np(o)
                          ? ((t[s] = Math.max((0, tO.k)(nd(a), nd(o), n), 0)),
                            (m.KN.test(o) || m.KN.test(a)) && (t[s] += "%"))
                          : (t[s] = o));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, tO.k)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, c, h)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n));
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
          }
          startAnimation(t) {
            (this.notifyListeners("animationStart"),
              this.currentAnimation?.stop(),
              this.resumingFrom?.currentAnimation?.stop(),
              this.pendingAnimation &&
                ((0, K.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = K.Gt.update(() => {
                ((i0.hasAnimatedSinceResize = !0),
                  eN.q.layout++,
                  this.motionValue || (this.motionValue = (0, tl.OQ)(0)),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = (0, b.S)(t) ? t : (0, tl.OQ)(t);
                    return (n.start(is("", n, e, i)), n.animation);
                  })(this.motionValue, [0, 1e3], {
                    ...t,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: (e) => {
                      (this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e));
                    },
                    onStop: () => {
                      eN.q.layout--;
                    },
                    onComplete: () => {
                      (eN.q.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation());
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0));
              })));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            (t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete"));
          }
          finishAnimation() {
            (this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation());
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: r,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                nz(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox,
                )
              ) {
                i = this.target || V();
                let e = iw(this.layout.layoutBox.x);
                ((i.x.min = t.target.x.min), (i.x.max = i.x.min + e));
                let n = iw(this.layout.layoutBox.y);
                ((i.y.min = t.target.y.min), (i.y.max = i.y.min + n));
              }
              (ne(e, i),
                t2(e, r),
                ib(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r,
                ));
            }
          }
          registerSharedNode(t, e) {
            (this.sharedNodes.has(t) || this.sharedNodes.set(t, new nb()),
              this.sharedNodes.get(t).add(e));
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            let { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            let { layoutId: t } = this.options;
            return t ? this.getStack()?.prevLead : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            (n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e }));
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && nS("z", t, n, this.animationValues);
            for (let e = 0; e < nM.length; e++)
              (nS(`rotate${nM[e]}`, t, n, this.animationValues),
                nS(`skew${nM[e]}`, t, n, this.animationValues));
            for (let e in (t.render(), n))
              (t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]));
            t.scheduleRender();
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
              t.visibility = "hidden";
              return;
            }
            let i = this.getTransformTemplate();
            if (this.needsReset) {
              ((this.needsReset = !1),
                (t.visibility = ""),
                (t.opacity = ""),
                (t.pointerEvents = eh(e?.pointerEvents) || ""),
                (t.transform = i ? i(this.latestValues, "") : "none"));
              return;
            }
            let n = this.getLead();
            if (!this.projectionDelta || !this.layout || !n.target) {
              (this.options.layoutId &&
                ((t.opacity =
                  void 0 !== this.latestValues.opacity
                    ? this.latestValues.opacity
                    : 1),
                (t.pointerEvents = eh(e?.pointerEvents) || "")),
                this.hasProjected &&
                  !tz(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)));
              return;
            }
            t.visibility = "";
            let r = n.animationValues || n.latestValues;
            this.applyTransformsToTarget();
            let s = (function (t, e, i) {
              let n = "",
                r = t.x.translate / e.x,
                s = t.y.translate / e.y,
                a = i?.z || 0;
              if (
                ((r || s || a) && (n = `translate3d(${r}px, ${s}px, ${a}px) `),
                (1 !== e.x || 1 !== e.y) &&
                  (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                i)
              ) {
                let {
                  transformPerspective: t,
                  rotate: e,
                  rotateX: r,
                  rotateY: s,
                  skewX: a,
                  skewY: o,
                } = i;
                (t && (n = `perspective(${t}px) ${n}`),
                  e && (n += `rotate(${e}deg) `),
                  r && (n += `rotateX(${r}deg) `),
                  s && (n += `rotateY(${s}deg) `),
                  a && (n += `skewX(${a}deg) `),
                  o && (n += `skewY(${o}deg) `));
              }
              let o = t.x.scale * e.x,
                l = t.y.scale * e.y;
              return (
                (1 !== o || 1 !== l) && (n += `scale(${o}, ${l})`),
                n || "none"
              );
            })(this.projectionDeltaWithTransform, this.treeScale, r);
            (i && (s = i(r, s)), (t.transform = s));
            let { x: a, y: o } = this.projectionDelta;
            for (let e in ((t.transformOrigin = `${100 * a.origin}% ${100 * o.origin}% 0`),
            n.animationValues
              ? (t.opacity =
                  n === this
                    ? (r.opacity ?? this.latestValues.opacity ?? 1)
                    : this.preserveOpacity
                      ? this.latestValues.opacity
                      : r.opacityExit)
              : (t.opacity =
                  n === this
                    ? void 0 !== r.opacity
                      ? r.opacity
                      : ""
                    : void 0 !== r.opacityExit
                      ? r.opacityExit
                      : 0),
            tN)) {
              if (void 0 === r[e]) continue;
              let { correct: i, applyTo: a, isCSSVariable: o } = tN[e],
                l = "none" === s ? r[e] : i(r[e], n);
              if (a) {
                let e = a.length;
                for (let i = 0; i < e; i++) t[a[i]] = l;
              } else
                o
                  ? (this.options.visualElement.renderState.vars[e] = l)
                  : (t[e] = l);
            }
            this.options.layoutId &&
              (t.pointerEvents =
                n === this ? eh(e?.pointerEvents) || "" : "none");
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            (this.root.nodes.forEach((t) => t.currentAnimation?.stop()),
              this.root.nodes.forEach(nj),
              this.root.sharedNodes.clear());
          }
        };
      }
      function nk(t) {
        t.updateLayout();
      }
      function nC(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let { layoutBox: i, measuredBox: n } = t.layout,
            { animationType: r } = t.options,
            s = e.source !== t.layout.source;
          "size" === r
            ? iA((t) => {
                let n = s ? e.measuredBox[t] : e.layoutBox[t],
                  r = iw(n);
                ((n.min = i[t].min), (n.max = n.min + r));
              })
            : nz(r, e.layoutBox, i) &&
              iA((n) => {
                let r = s ? e.measuredBox[n] : e.layoutBox[n],
                  a = iw(i[n]);
                ((r.max = r.min + a),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + a)));
              });
          let a = A();
          ib(a, i, e.layoutBox);
          let o = A();
          s
            ? ib(o, t.applyTransform(n, !0), e.measuredBox)
            : ib(o, i, e.layoutBox);
          let l = !nr(a),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let a = V();
                iT(a, e.layoutBox, r.layoutBox);
                let o = V();
                (iT(o, i, s.layoutBox),
                  no(a, o) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = o),
                    (t.relativeTargetOrigin = a),
                    (t.relativeParent = n)));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: e,
            delta: o,
            layoutDelta: a,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function nL(t) {
        (eU.Q.value && nE.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty)));
      }
      function nR(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nD(t) {
        t.clearSnapshot();
      }
      function nj(t) {
        t.clearMeasurements();
      }
      function nF(t) {
        t.isLayoutDirty = !1;
      }
      function nZ(t) {
        let { visualElement: e } = t.options;
        (e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform());
      }
      function nH(t) {
        (t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0));
      }
      function nB(t) {
        t.resolveTargetDelta();
      }
      function nI(t) {
        t.calcProjection();
      }
      function nO(t) {
        t.resetSkewAndRotation();
      }
      function nN(t) {
        t.removeLeadSnapshot();
      }
      function nU(t, e, i) {
        ((t.translate = (0, tO.k)(e.translate, 0, i)),
          (t.scale = (0, tO.k)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint));
      }
      function nG(t, e, i, n) {
        ((t.min = (0, tO.k)(e.min, i.min, n)),
          (t.max = (0, tO.k)(e.max, i.max, n)));
      }
      function nW(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let n$ = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nX = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nK = nX("applewebkit/") && !nX("chrome/") ? Math.round : eD.l;
      function nq(t) {
        ((t.min = nK(t.min)), (t.max = nK(t.max)));
      }
      function nz(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(nl(e) - nl(i))))
        );
      }
      function nY(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      let n_ = nP({
          attachResizeListener: (t, e) => ik(t, "resize", e),
          measureScroll: () => ({
            x:
              document.documentElement.scrollLeft ||
              document.body?.scrollLeft ||
              0,
            y:
              document.documentElement.scrollTop ||
              document.body?.scrollTop ||
              0,
          }),
          checkIsScrollRoot: () => !0,
        }),
        nQ = { current: void 0 },
        nJ = nP({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!nQ.current) {
              let t = new n_({});
              (t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (nQ.current = t));
            }
            return nQ.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function n0(t, e) {
        let i = (function (t, e, i) {
            if (null == t) return [];
            if (t instanceof EventTarget) return [t];
            if ("string" == typeof t) {
              let e = document,
                i = void 0 ?? e.querySelectorAll(t);
              return i ? Array.from(i) : [];
            }
            return Array.from(t).filter((t) => null != t);
          })(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function n1(t) {
        return !("touch" === t.pointerType || ix.x || ix.y);
      }
      function n2(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let r = n["onHover" + i];
        r && K.Gt.postRender(() => r(e, iL(e)));
      }
      class n4 extends eT {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = n0(t, i),
                a = (t) => {
                  if (!n1(t)) return;
                  let { target: i } = t,
                    n = e(i, t);
                  if ("function" != typeof n || !i) return;
                  let s = (t) => {
                    n1(t) && (n(t), i.removeEventListener("pointerleave", s));
                  };
                  i.addEventListener("pointerleave", s, r);
                };
              return (
                n.forEach((t) => {
                  t.addEventListener("pointerenter", a, r);
                }),
                s
              );
            })(
              t,
              (t, e) => (
                n2(this.node, e, "Start"),
                (t) => n2(this.node, t, "End")
              ),
            ));
        }
        unmount() {}
      }
      class n6 extends eT {
        constructor() {
          (super(...arguments), (this.isActive = !1));
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = (0, iF.F)(
            ik(this.node.current, "focus", () => this.onFocus()),
            ik(this.node.current, "blur", () => this.onBlur()),
          );
        }
        unmount() {}
      }
      var n8 = i(2804);
      let n5 = (t, e) => !!e && (t === e || n5(t, e.parentElement)),
        n3 = new WeakSet();
      function n7(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function n9(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
        );
      }
      let rt = (t, e) => {
        let i = t.currentTarget;
        if (!i) return;
        let n = n7(() => {
          if (n3.has(i)) return;
          n9(i, "down");
          let t = n7(() => {
            n9(i, "up");
          });
          (i.addEventListener("keyup", t, e),
            i.addEventListener("blur", () => n9(i, "cancel"), e));
        });
        (i.addEventListener("keydown", n, e),
          i.addEventListener(
            "blur",
            () => i.removeEventListener("keydown", n),
            e,
          ));
      };
      function re(t) {
        return iC(t) && !(ix.x || ix.y);
      }
      function ri(t, e, i) {
        let { props: n } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let r = n["onTap" + ("End" === i ? "" : i)];
        r && K.Gt.postRender(() => r(e, iL(e)));
      }
      class rn extends eT {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, r, s] = n0(t, i),
                a = (t) => {
                  let n = t.currentTarget;
                  if (!re(t)) return;
                  n3.add(n);
                  let s = e(n, t),
                    a = (t, e) => {
                      (window.removeEventListener("pointerup", o),
                        window.removeEventListener("pointercancel", l),
                        n3.has(n) && n3.delete(n),
                        re(t) &&
                          "function" == typeof s &&
                          s(t, { success: e }));
                    },
                    o = (t) => {
                      a(
                        t,
                        n === window ||
                          n === document ||
                          i.useGlobalTarget ||
                          n5(n, t.target),
                      );
                    },
                    l = (t) => {
                      a(t, !1);
                    };
                  (window.addEventListener("pointerup", o, r),
                    window.addEventListener("pointercancel", l, r));
                };
              return (
                n.forEach((t) => {
                  ((i.useGlobalTarget ? window : t).addEventListener(
                    "pointerdown",
                    a,
                    r,
                  ),
                    !(0, n8.s)(t) ||
                      (t.addEventListener("focus", (t) => rt(t, r)),
                      iP(t) || t.hasAttribute("tabindex") || (t.tabIndex = 0)));
                }),
                s
              );
            })(
              t,
              (t, e) => (
                ri(this.node, e, "Start"),
                (t, { success: e }) => ri(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget },
            ));
        }
        unmount() {}
      }
      let rr = new WeakMap(),
        rs = new WeakMap(),
        ra = (t) => {
          let e = rr.get(t.target);
          e && e(t);
        },
        ro = (t) => {
          t.forEach(ra);
        },
        rl = { some: 0, all: 1 };
      class ru extends eT {
        constructor() {
          (super(...arguments),
            (this.hasEnteredView = !1),
            (this.isInView = !1));
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: r } = t,
            s = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : rl[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              rs.has(i) || rs.set(i, {});
              let n = rs.get(i),
                r = JSON.stringify(e);
              return (
                n[r] ||
                  (n[r] = new IntersectionObserver(ro, { root: t, ...e })),
                n[r]
              );
            })(e);
            return (
              rr.set(t, i),
              n.observe(t),
              () => {
                (rr.delete(t), n.unobserve(t));
              }
            );
          })(this.node.current, s, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), r && !e && this.hasEnteredView)
            )
              return;
            (e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e));
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              s = e ? i : n;
            s && s(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e),
          ) && this.startObserver();
        }
        unmount() {}
      }
      let rh = (function (t, e) {
        if ("undefined" == typeof Proxy) return eM;
        let i = new Map(),
          n = (i, n) => eM(i, n, t, e);
        return new Proxy((t, e) => n(t, e), {
          get: (r, s) =>
            "create" === s
              ? n
              : (i.has(s) || i.set(s, eM(s, void 0, t, e)), i.get(s)),
        });
      })(
        {
          animation: { Feature: iv },
          exit: { Feature: iy },
          inView: { Feature: ru },
          tap: { Feature: rn },
          focus: { Feature: n6 },
          hover: { Feature: n4 },
          pan: { Feature: iJ },
          drag: { Feature: i_, ProjectionNode: nJ, MeasureLayout: i6 },
          layout: { ProjectionNode: nJ, MeasureLayout: i6 },
        },
        (t, e) =>
          (e.isSVG ?? t3(t))
            ? new t$(e)
            : new t6(e, { allowProjection: t !== t8.Fragment }),
      );
    },
    5687: (t, e, i) => {
      "use strict";
      i.d(e, { B: () => n });
      let n = "undefined" != typeof window;
    },
    1838: (t, e, i) => {
      "use strict";
      i.d(e, { N: () => a });
      var n = i(3932),
        r = i(2115),
        s = i(7249);
      function a(t) {
        let e = (0, r.useRef)(0),
          { isStatic: i } = (0, r.useContext)(s.Q);
        (0, r.useEffect)(() => {
          if (i) return;
          let r = (i) => {
            let { timestamp: n, delta: r } = i;
            (e.current || (e.current = n), t(n - e.current, r));
          };
          return (n.Gt.update(r, !0), () => (0, n.WG)(r));
        }, [t]);
      }
    },
    9234: (t, e, i) => {
      "use strict";
      i.d(e, { M: () => r });
      var n = i(2115);
      function r(t) {
        let e = (0, n.useRef)(null);
        return (null === e.current && (e.current = t()), e.current);
      }
    },
    5403: (t, e, i) => {
      "use strict";
      i.d(e, { E: () => r });
      var n = i(2115);
      let r = i(5687).B ? n.useLayoutEffect : n.useEffect;
    },
    8432: (t, e, i) => {
      "use strict";
      i.d(e, { j: () => a });
      var n = i(3932),
        r = i(5403),
        s = i(4420);
      function a(t, e) {
        let i = (0, s.d)(e()),
          a = () => i.set(e());
        return (
          a(),
          (0, r.E)(() => {
            let e = () => n.Gt.preRender(a, !1, !0),
              i = t.map((t) => t.on("change", e));
            return () => {
              (i.forEach((t) => t()), (0, n.WG)(a));
            };
          }),
          i
        );
      }
    },
    913: (t, e, i) => {
      "use strict";
      i.d(e, { E: () => s });
      var n = i(9356),
        r = i(8432);
      function s(t) {
        for (
          var e = arguments.length, i = Array(e > 1 ? e - 1 : 0), s = 1;
          s < e;
          s++
        )
          i[s - 1] = arguments[s];
        let a = t.length;
        return (0, r.j)(i.filter(n.S), function () {
          let e = "";
          for (let r = 0; r < a; r++) {
            e += t[r];
            let s = i[r];
            s && (e += (0, n.S)(s) ? s.get() : s);
          }
          return e;
        });
      }
    },
    4420: (t, e, i) => {
      "use strict";
      i.d(e, { d: () => o });
      var n = i(9421),
        r = i(2115),
        s = i(7249),
        a = i(9234);
      function o(t) {
        let e = (0, a.M)(() => (0, n.OQ)(t)),
          { isStatic: i } = (0, r.useContext)(s.Q);
        if (i) {
          let [, i] = (0, r.useState)(t);
          (0, r.useEffect)(() => e.on("change", i), []);
        }
        return e;
      }
    },
    1325: (t, e, i) => {
      "use strict";
      i.d(e, { z: () => c });
      var n = i(9356),
        r = i(1604),
        s = i(3932);
      function a(t) {
        return "number" == typeof t ? t : parseFloat(t);
      }
      var o = i(2115),
        l = i(7249),
        u = i(4420),
        h = i(1891);
      function c(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (function (t) {
          let e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            { isStatic: i } = (0, o.useContext)(l.Q),
            c = () => ((0, n.S)(t) ? t.get() : t);
          if (i) return (0, h.G)(c);
          let d = (0, u.d)(c());
          return (
            (0, o.useInsertionEffect)(
              () =>
                (function (t, e, i = {}) {
                  let o;
                  let l = t.get(),
                    u = null,
                    h = l,
                    c =
                      "string" == typeof l ? l.replace(/[\d.-]/g, "") : void 0,
                    d = () => {
                      u && (u.stop(), (u = null));
                    },
                    p = () => {
                      d();
                      let e = a(t.get()),
                        n = a(h);
                      e !== n &&
                        (u = new r.s({
                          keyframes: [e, n],
                          velocity: t.getVelocity(),
                          type: "spring",
                          restDelta: 0.001,
                          restSpeed: 0.01,
                          ...i,
                          onUpdate: o,
                        }));
                    };
                  if (
                    (t.attach((e, i) => {
                      ((h = e),
                        (o = (t) => i(c ? t + c : t)),
                        s.Gt.postRender(() => {
                          (p(),
                            t.events.animationStart?.notify(),
                            u?.then(() => {
                              t.events.animationComplete?.notify();
                            }));
                        }));
                    }, d),
                    (0, n.S)(e))
                  ) {
                    let i = e.on("change", (e) => t.set(c ? e + c : e)),
                      n = t.on("destroy", i);
                    return () => {
                      (i(), n());
                    };
                  }
                  return d;
                })(d, t, e),
              [d, JSON.stringify(e)],
            ),
            d
          );
        })(t, { type: "spring", ...e });
      }
    },
    1891: (t, e, i) => {
      "use strict";
      i.d(e, {
        G: () =>
          function t(e, i, l, u) {
            if ("function" == typeof e)
              return (function (t) {
                ((a.bt.current = []), t());
                let e = (0, s.j)(a.bt.current, t);
                return ((a.bt.current = void 0), e);
              })(e);
            if (void 0 !== l && !Array.isArray(l) && "function" != typeof i)
              return (function (e, i, n, s) {
                let a = (0, r.M)(() => Object.keys(n)),
                  o = (0, r.M)(() => ({}));
                for (let r of a) o[r] = t(e, i, n[r], s);
                return o;
              })(e, i, l, u);
            let h =
              "function" == typeof i
                ? i
                : (function (...t) {
                    let e = !Array.isArray(t[0]),
                      i = e ? 0 : -1,
                      r = t[0 + i],
                      s = t[1 + i],
                      a = t[2 + i],
                      o = t[3 + i],
                      l = (0, n.G)(s, a, o);
                    return e ? l(r) : l;
                  })(i, l, u);
            return Array.isArray(e)
              ? o(e, h)
              : o([e], (t) => {
                  let [e] = t;
                  return h(e);
                });
          },
      });
      var n = i(1136),
        r = i(9234),
        s = i(8432),
        a = i(9421);
      function o(t, e) {
        let i = (0, r.M)(() => []);
        return (0, s.j)(t, () => {
          i.length = 0;
          let n = t.length;
          for (let e = 0; e < n; e++) i[e] = t[e].get();
          return e(i);
        });
      }
    },
    7193: (t, e, i) => {
      "use strict";
      i.d(e, { A: () => n });
      let n = (0, i(4057).A)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    1604: (t, e, i) => {
      "use strict";
      i.d(e, { s: () => y });
      var n = i(1046),
        r = i(5821),
        s = i(300),
        a = i(5850),
        o = i(7971),
        l = i(9674),
        u = i(3932);
      let h = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: (t = !0) => u.Gt.update(e, t),
          stop: () => (0, u.WG)(e),
          now: () => (u.uv.isProcessing ? u.uv.timestamp : a.k.now()),
        };
      };
      var c = i(1592),
        d = i(8524),
        p = i(5431),
        m = i(6881),
        f = i(4407),
        v = i(4537);
      let g = (t) => t / 100;
      class y extends v.q {
        constructor(t) {
          (super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.stop = () => {
              let { motionValue: t } = this.options;
              (t && t.updatedAt !== a.k.now() && this.tick(a.k.now()),
                (this.isStopped = !0),
                "idle" !== this.state &&
                  (this.teardown(), this.options.onStop?.()));
            }),
            o.q.mainThread++,
            (this.options = t),
            this.initAnimation(),
            this.play(),
            !1 === t.autoplay && this.pause());
        }
        initAnimation() {
          let { options: t } = this;
          (0, f.E)(t);
          let {
              type: e = d.i,
              repeat: i = 0,
              repeatDelay: r = 0,
              repeatType: s,
              velocity: a = 0,
            } = t,
            { keyframes: o } = t,
            u = e || d.i;
          u !== d.i &&
            "number" != typeof o[0] &&
            ((this.mixKeyframes = (0, n.F)(g, (0, l.j)(o[0], o[1]))),
            (o = [0, 100]));
          let h = u({ ...t, keyframes: o });
          ("mirror" === s &&
            (this.mirroredGenerator = u({
              ...t,
              keyframes: [...o].reverse(),
              velocity: -a,
            })),
            null === h.calculatedDuration &&
              (h.calculatedDuration = (0, p.t)(h)));
          let { calculatedDuration: c } = h;
          ((this.calculatedDuration = c),
            (this.resolvedDuration = c + r),
            (this.totalDuration = this.resolvedDuration * (i + 1) - r),
            (this.generator = h));
        }
        updateTime(t) {
          let e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = e);
        }
        tick(t, e = !1) {
          let {
            generator: i,
            totalDuration: n,
            mixKeyframes: s,
            mirroredGenerator: a,
            resolvedDuration: o,
            calculatedDuration: l,
          } = this;
          if (null === this.startTime) return i.next(0);
          let {
            delay: u = 0,
            keyframes: h,
            repeat: d,
            repeatType: p,
            repeatDelay: f,
            type: v,
            onUpdate: g,
            finalKeyframe: y,
          } = this.options;
          (this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - n / this.speed, this.startTime)),
            e ? (this.currentTime = t) : this.updateTime(t));
          let x = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
            A = this.playbackSpeed >= 0 ? x < 0 : x > n;
          ((this.currentTime = Math.max(x, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = n));
          let w = this.currentTime,
            V = i;
          if (d) {
            let t = Math.min(this.currentTime, n) / o,
              e = Math.floor(t),
              i = t % 1;
            (!i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, d + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), f && (i -= f / o))
                  : "mirror" === p && (V = a)),
              (w = (0, r.q)(0, 1, i) * o));
          }
          let b = A ? { done: !1, value: h[0] } : V.next(w);
          s && (b.value = s(b.value));
          let { done: E } = b;
          A ||
            null === l ||
            (E =
              this.playbackSpeed >= 0
                ? this.currentTime >= n
                : this.currentTime <= 0);
          let M =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && E));
          return (
            M &&
              v !== c.B &&
              (b.value = (0, m.X)(h, this.options, y, this.speed)),
            g && g(b.value),
            M && this.finish(),
            b
          );
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return (0, s.X)(this.calculatedDuration);
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + (0, s.X)(t);
        }
        get time() {
          return (0, s.X)(this.currentTime);
        }
        set time(t) {
          ((t = (0, s.f)(t)),
            (this.currentTime = t),
            null === this.startTime ||
            null !== this.holdTime ||
            0 === this.playbackSpeed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.playbackSpeed),
            this.driver?.start(!1));
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          this.updateTime(a.k.now());
          let e = this.playbackSpeed !== t;
          ((this.playbackSpeed = t),
            e && (this.time = (0, s.X)(this.currentTime)));
        }
        play() {
          if (this.isStopped) return;
          let { driver: t = h, startTime: e } = this.options;
          (this.driver || (this.driver = t((t) => this.tick(t))),
            this.options.onPlay?.());
          let i = this.driver.now();
          ("finished" === this.state
            ? (this.updateFinished(), (this.startTime = i))
            : null !== this.holdTime
              ? (this.startTime = i - this.holdTime)
              : this.startTime || (this.startTime = e ?? i),
            "finished" === this.state &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start());
        }
        pause() {
          ((this.state = "paused"),
            this.updateTime(a.k.now()),
            (this.holdTime = this.currentTime));
        }
        complete() {
          ("running" !== this.state && this.play(),
            (this.state = "finished"),
            (this.holdTime = null));
        }
        finish() {
          (this.notifyFinished(),
            this.teardown(),
            (this.state = "finished"),
            this.options.onComplete?.());
        }
        cancel() {
          ((this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.());
        }
        teardown() {
          ((this.state = "idle"),
            this.stopDriver(),
            (this.startTime = this.holdTime = null),
            o.q.mainThread--);
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return ((this.startTime = 0), this.tick(t, !0));
        }
        attachTimeline(t) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = "keyframes"),
              (this.options.ease = "linear"),
              this.initAnimation()),
            this.driver?.stop(),
            t.observe(this)
          );
        }
      }
    },
    1592: (t, e, i) => {
      "use strict";
      i.d(e, { B: () => s });
      var n = i(7468),
        r = i(262);
      function s({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: s = 325,
        bounceDamping: a = 10,
        bounceStiffness: o = 500,
        modifyTarget: l,
        min: u,
        max: h,
        restDelta: c = 0.5,
        restSpeed: d,
      }) {
        let p, m;
        let f = t[0],
          v = { done: !1, value: f },
          g = (t) => (void 0 !== u && t < u) || (void 0 !== h && t > h),
          y = (t) =>
            void 0 === u
              ? h
              : void 0 === h
                ? u
                : Math.abs(u - t) < Math.abs(h - t)
                  ? u
                  : h,
          x = i * e,
          A = f + x,
          w = void 0 === l ? A : l(A);
        w !== A && (x = w - f);
        let V = (t) => -x * Math.exp(-t / s),
          b = (t) => w + V(t),
          E = (t) => {
            let e = V(t),
              i = b(t);
            ((v.done = Math.abs(e) <= c), (v.value = v.done ? w : i));
          },
          M = (t) => {
            g(v.value) &&
              ((p = t),
              (m = (0, n.o)({
                keyframes: [v.value, y(v.value)],
                velocity: (0, r.Y)(b, t, v.value),
                damping: a,
                stiffness: o,
                restDelta: c,
                restSpeed: d,
              })));
          };
        return (
          M(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (m || void 0 !== p || ((e = !0), E(t), M(t)),
              void 0 !== p && t >= p)
                ? m.next(t - p)
                : (e || E(t), v);
            },
          }
        );
      }
    },
    8524: (t, e, i) => {
      "use strict";
      i.d(e, { i: () => A });
      var n = i(5768);
      let r = (0, n.A)(0.42, 0, 1, 1),
        s = (0, n.A)(0, 0, 0.58, 1),
        a = (0, n.A)(0.42, 0, 0.58, 1),
        o = (t) => Array.isArray(t) && "number" != typeof t[0];
      var l = i(5107),
        u = i(6054),
        h = i(4162),
        c = i(9707),
        d = i(1679),
        p = i(6430);
      let m = {
          linear: u.l,
          easeIn: r,
          easeInOut: a,
          easeOut: s,
          circIn: d.po,
          circInOut: d.tn,
          circOut: d.yT,
          backIn: c.dg,
          backInOut: c.ZZ,
          backOut: c.Sz,
          anticipate: h.b,
        },
        f = (t) => "string" == typeof t,
        v = (t) => {
          if ((0, p.D)(t)) {
            (0, l.V)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
              "cubic-bezier-length",
            );
            let [e, i, r, s] = t;
            return (0, n.A)(e, i, r, s);
          }
          return f(t)
            ? ((0, l.V)(
                void 0 !== m[t],
                `Invalid easing type '${t}'`,
                "invalid-easing-type",
              ),
              m[t])
            : t;
        };
      var g = i(1136),
        y = i(9615),
        x = i(1607);
      function A({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let r = o(n) ? n.map(v) : v(n),
          s = { done: !1, value: e[0] },
          l = (
            i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let r = (0, y.q)(0, e, n);
                        t.push((0, x.k)(i, 1, r));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
          ).map((e) => e * t),
          u = (0, g.G)(l, e, {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || a).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = u(e)), (s.done = e >= t), s),
        };
      }
    },
    7468: (t, e, i) => {
      "use strict";
      i.d(e, { o: () => m });
      var n = i(5821),
        r = i(300),
        s = i(9051),
        a = i(5431),
        o = i(262);
      let l = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      var u = i(5107);
      function h(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let c = ["duration", "bounce"],
        d = ["stiffness", "damping", "mass"];
      function p(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function m(t = l.visualDuration, e = l.bounce) {
        let i;
        let f =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: v, restDelta: g } = f,
          y = f.keyframes[0],
          x = f.keyframes[f.keyframes.length - 1],
          A = { done: !1, value: y },
          {
            stiffness: w,
            damping: V,
            mass: b,
            duration: E,
            velocity: M,
            isResolvedFromDuration: T,
          } = (function (t) {
            let e = {
              velocity: l.velocity,
              stiffness: l.stiffness,
              damping: l.damping,
              mass: l.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!p(t, d) && p(t, c)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  r = i * i,
                  s = 2 * (0, n.q)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(r);
                e = { ...e, mass: l.mass, stiffness: r, damping: s };
              } else {
                let i = (function ({
                  duration: t = l.duration,
                  bounce: e = l.bounce,
                  velocity: i = l.velocity,
                  mass: s = l.mass,
                }) {
                  let a, o;
                  (0, u.$)(
                    t <= (0, r.f)(l.maxDuration),
                    "Spring duration must be 10 seconds or less",
                    "spring-duration-limit",
                  );
                  let c = 1 - e;
                  ((c = (0, n.q)(l.minDamping, l.maxDamping, c)),
                    (t = (0, n.q)(l.minDuration, l.maxDuration, (0, r.X)(t))),
                    c < 1
                      ? ((a = (e) => {
                          let n = e * c,
                            r = n * t;
                          return 0.001 - ((n - i) / h(e, c)) * Math.exp(-r);
                        }),
                        (o = (e) => {
                          let n = e * c * t,
                            r = Math.pow(c, 2) * Math.pow(e, 2) * t,
                            s = Math.exp(-n),
                            o = h(Math.pow(e, 2), c);
                          return (
                            ((n * i + i - r) *
                              s *
                              (-a(e) + 0.001 > 0 ? -1 : 1)) /
                            o
                          );
                        }))
                      : ((a = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (o = (e) => t * t * (i - e) * Math.exp(-e * t))));
                  let d = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(a, o, 5 / t);
                  if (((t = (0, r.f)(t)), isNaN(d)))
                    return {
                      stiffness: l.stiffness,
                      damping: l.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(d, 2) * s;
                    return {
                      stiffness: e,
                      damping: 2 * c * Math.sqrt(s * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: l.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...f, velocity: -(0, r.X)(f.velocity || 0) }),
          S = M || 0,
          P = V / (2 * Math.sqrt(w * b)),
          k = x - y,
          C = (0, r.X)(Math.sqrt(w / b)),
          L = 5 > Math.abs(k);
        if (
          (v || (v = L ? l.restSpeed.granular : l.restSpeed.default),
          g || (g = L ? l.restDelta.granular : l.restDelta.default),
          P < 1)
        ) {
          let t = h(C, P);
          i = (e) =>
            x -
            Math.exp(-P * C * e) *
              (((S + P * C * k) / t) * Math.sin(t * e) + k * Math.cos(t * e));
        } else if (1 === P)
          i = (t) => x - Math.exp(-C * t) * (k + (S + C * k) * t);
        else {
          let t = C * Math.sqrt(P * P - 1);
          i = (e) => {
            let i = Math.exp(-P * C * e),
              n = Math.min(t * e, 300);
            return (
              x -
              (i * ((S + P * C * k) * Math.sinh(n) + t * k * Math.cosh(n))) / t
            );
          };
        }
        let R = {
          calculatedDuration: (T && E) || null,
          next: (t) => {
            let e = i(t);
            if (T) A.done = t >= E;
            else {
              let n = 0 === t ? S : 0;
              P < 1 && (n = 0 === t ? (0, r.f)(S) : (0, o.Y)(i, t, e));
              let s = Math.abs(n) <= v,
                a = Math.abs(x - e) <= g;
              A.done = s && a;
            }
            return ((A.value = A.done ? x : e), A);
          },
          toString: () => {
            let t = Math.min((0, a.t)(R), a.Y),
              e = (0, s.K)((e) => R.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
        return R;
      }
      m.applyToOptions = (t) => {
        let e = (function (t, e = 100, i) {
          let n = i({ ...t, keyframes: [0, e] }),
            s = Math.min((0, a.t)(n), a.Y);
          return {
            type: "keyframes",
            ease: (t) => n.next(s * t).value / e,
            duration: (0, r.X)(s),
          };
        })(t, 100, m);
        return (
          (t.ease = e.ease),
          (t.duration = (0, r.f)(e.duration)),
          (t.type = "keyframes"),
          t
        );
      };
    },
    5431: (t, e, i) => {
      "use strict";
      i.d(e, { Y: () => n, t: () => r });
      let n = 2e4;
      function r(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < n; ) ((e += 50), (i = t.next(e)));
        return e >= n ? 1 / 0 : e;
      }
    },
    262: (t, e, i) => {
      "use strict";
      i.d(e, { Y: () => r });
      var n = i(3700);
      function r(t, e, i) {
        let r = Math.max(e - 5, 0);
        return (0, n.f)(i - t(r), e - r);
      }
    },
    6881: (t, e, i) => {
      "use strict";
      i.d(e, { X: () => r });
      let n = (t) => null !== t;
      function r(t, { repeat: e, repeatType: i = "loop" }, s, a = 1) {
        let o = t.filter(n),
          l = a < 0 || (e && "loop" !== i && e % 2 == 1) ? 0 : o.length - 1;
        return l && void 0 !== s ? s : o[l];
      }
    },
    4537: (t, e, i) => {
      "use strict";
      i.d(e, { q: () => n });
      class n {
        constructor() {
          this.updateFinished();
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          this._finished = new Promise((t) => {
            this.resolve = t;
          });
        }
        notifyFinished() {
          this.resolve();
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
      }
    },
    7309: (t, e, i) => {
      "use strict";
      i.d(e, { j4: () => r, pG: () => a, rm: () => l });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        r = n("--"),
        s = n("var(--"),
        a = (t) => !!s(t) && o.test(t.split("/*")[0].trim()),
        o =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
      function l(t) {
        return "string" == typeof t && t.split("/*")[0].includes("var(--");
      }
    },
    4407: (t, e, i) => {
      "use strict";
      i.d(e, { E: () => o });
      var n = i(1592),
        r = i(8524),
        s = i(7468);
      let a = {
        decay: n.B,
        inertia: n.B,
        tween: r.i,
        keyframes: r.i,
        spring: s.o,
      };
      function o(t) {
        "string" == typeof t.type && (t.type = a[t.type]);
      }
    },
    9051: (t, e, i) => {
      "use strict";
      i.d(e, { K: () => n });
      let n = (t, e, i = 10) => {
        let n = "",
          r = Math.max(Math.round(e / i), 2);
        for (let e = 0; e < r; e++)
          n += Math.round(1e4 * t(e / (r - 1))) / 1e4 + ", ";
        return `linear(${n.substring(0, n.length - 2)})`;
      };
    },
    506: (t, e, i) => {
      "use strict";
      i.d(e, { I: () => a });
      var n = i(4148);
      let r = [
        "setup",
        "read",
        "resolveKeyframes",
        "preUpdate",
        "update",
        "preRender",
        "render",
        "postRender",
      ];
      var s = i(5853);
      function a(t, e) {
        let i = !1,
          a = !0,
          o = { delta: 0, timestamp: 0, isProcessing: !1 },
          l = () => (i = !0),
          u = r.reduce(
            (t, i) => (
              (t[i] = (function (t, e) {
                let i = new Set(),
                  n = new Set(),
                  r = !1,
                  a = !1,
                  o = new WeakSet(),
                  l = { delta: 0, timestamp: 0, isProcessing: !1 },
                  u = 0;
                function h(e) {
                  (o.has(e) && (c.schedule(e), t()), u++, e(l));
                }
                let c = {
                  schedule: (t, e = !1, s = !1) => {
                    let a = s && r ? i : n;
                    return (e && o.add(t), a.has(t) || a.add(t), t);
                  },
                  cancel: (t) => {
                    (n.delete(t), o.delete(t));
                  },
                  process: (t) => {
                    if (((l = t), r)) {
                      a = !0;
                      return;
                    }
                    ((r = !0),
                      ([i, n] = [n, i]),
                      i.forEach(h),
                      e && s.Q.value && s.Q.value.frameloop[e].push(u),
                      (u = 0),
                      i.clear(),
                      (r = !1),
                      a && ((a = !1), c.process(t)));
                  },
                };
                return c;
              })(l, e ? i : void 0)),
              t
            ),
            {},
          ),
          {
            setup: h,
            read: c,
            resolveKeyframes: d,
            preUpdate: p,
            update: m,
            preRender: f,
            render: v,
            postRender: g,
          } = u,
          y = () => {
            let r = n.W.useManualTiming ? o.timestamp : performance.now();
            ((i = !1),
              n.W.useManualTiming ||
                (o.delta = a
                  ? 1e3 / 60
                  : Math.max(Math.min(r - o.timestamp, 40), 1)),
              (o.timestamp = r),
              (o.isProcessing = !0),
              h.process(o),
              c.process(o),
              d.process(o),
              p.process(o),
              m.process(o),
              f.process(o),
              v.process(o),
              g.process(o),
              (o.isProcessing = !1),
              i && e && ((a = !1), t(y)));
          },
          x = () => {
            ((i = !0), (a = !0), o.isProcessing || t(y));
          };
        return {
          schedule: r.reduce((t, e) => {
            let n = u[e];
            return (
              (t[e] = (t, e = !1, r = !1) => (i || x(), n.schedule(t, e, r))),
              t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < r.length; e++) u[r[e]].cancel(t);
          },
          state: o,
          steps: u,
        };
      }
    },
    3932: (t, e, i) => {
      "use strict";
      i.d(e, { Gt: () => r, PP: () => o, WG: () => s, uv: () => a });
      var n = i(6054);
      let {
        schedule: r,
        cancel: s,
        state: a,
        steps: o,
      } = (0, i(506).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.l,
        !0,
      );
    },
    5850: (t, e, i) => {
      "use strict";
      let n;
      i.d(e, { k: () => o });
      var r = i(4148),
        s = i(3932);
      function a() {
        n = void 0;
      }
      let o = {
        now: () => (
          void 0 === n &&
            o.set(
              s.uv.isProcessing || r.W.useManualTiming
                ? s.uv.timestamp
                : performance.now(),
            ),
          n
        ),
        set: (t) => {
          ((n = t), queueMicrotask(a));
        },
      };
    },
    7971: (t, e, i) => {
      "use strict";
      i.d(e, { q: () => n });
      let n = { layout: 0, mainThread: 0, waapi: 0 };
    },
    5853: (t, e, i) => {
      "use strict";
      i.d(e, { Q: () => n });
      let n = { value: null, addProjectionMetrics: null };
    },
    1136: (t, e, i) => {
      "use strict";
      i.d(e, { G: () => h });
      var n = i(4148),
        r = i(6054),
        s = i(1046),
        a = i(5107),
        o = i(9615),
        l = i(5821),
        u = i(9674);
      function h(t, e, { clamp: i = !0, ease: c, mixer: d } = {}) {
        let p = t.length;
        if (
          ((0, a.V)(
            p === e.length,
            "Both input and output ranges must be the same length",
            "range-length",
          ),
          1 === p)
        )
          return () => e[0];
        if (2 === p && e[0] === e[1]) return () => e[1];
        let m = t[0] === t[1];
        t[0] > t[p - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let f = (function (t, e, i) {
            let a = [],
              o = i || n.W.mix || u.j,
              l = t.length - 1;
            for (let i = 0; i < l; i++) {
              let n = o(t[i], t[i + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[i] || r.l : e;
                n = (0, s.F)(t, n);
              }
              a.push(n);
            }
            return a;
          })(e, c, d),
          v = f.length,
          g = (i) => {
            if (m && i < t[0]) return e[0];
            let n = 0;
            if (v > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
            let r = (0, o.q)(t[n], t[n + 1], i);
            return f[n](r);
          };
        return i ? (e) => g((0, l.q)(t[0], t[p - 1], e)) : g;
      }
    },
    2804: (t, e, i) => {
      "use strict";
      i.d(e, { s: () => r });
      var n = i(8180);
      function r(t) {
        return (0, n.G)(t) && "offsetHeight" in t;
      }
    },
    9674: (t, e, i) => {
      "use strict";
      i.d(e, { j: () => M });
      var n = i(1046),
        r = i(5107),
        s = i(7309),
        a = i(8207),
        o = i(663),
        l = i(4964),
        u = i(1965);
      function h(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      var c = i(6822);
      function d(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      var p = i(1607);
      let m = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        f = [l.u, c.B, u.V],
        v = (t) => f.find((e) => e.test(t));
      function g(t) {
        let e = v(t);
        if (
          ((0, r.$)(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`,
            "color-not-animatable",
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === u.V &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              ((t /= 360), (i /= 100));
              let r = 0,
                s = 0,
                a = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  o = 2 * i - n;
                ((r = h(o, n, t + 1 / 3)),
                  (s = h(o, n, t)),
                  (a = h(o, n, t - 1 / 3)));
              } else r = s = a = i;
              return {
                red: Math.round(255 * r),
                green: Math.round(255 * s),
                blue: Math.round(255 * a),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let y = (t, e) => {
          let i = g(t),
            n = g(e);
          if (!i || !n) return d(t, e);
          let r = { ...i };
          return (t) => (
            (r.red = m(i.red, n.red, t)),
            (r.green = m(i.green, n.green, t)),
            (r.blue = m(i.blue, n.blue, t)),
            (r.alpha = (0, p.k)(i.alpha, n.alpha, t)),
            c.B.transform(r)
          );
        },
        x = new Set(["none", "hidden"]);
      function A(t, e) {
        return (i) => (0, p.k)(t, e, i);
      }
      function w(t) {
        return "number" == typeof t
          ? A
          : "string" == typeof t
            ? (0, s.pG)(t)
              ? d
              : a.y.test(t)
                ? y
                : E
            : Array.isArray(t)
              ? V
              : "object" == typeof t
                ? a.y.test(t)
                  ? y
                  : b
                : d;
      }
      function V(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => w(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function b(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = w(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let E = (t, e) => {
        let i = o.f.createTransformer(e),
          s = (0, o.V)(t),
          a = (0, o.V)(e);
        return s.indexes.var.length === a.indexes.var.length &&
          s.indexes.color.length === a.indexes.color.length &&
          s.indexes.number.length >= a.indexes.number.length
          ? (x.has(t) && !a.values.length) || (x.has(e) && !s.values.length)
            ? (function (t, e) {
                return x.has(t)
                  ? (i) => (i <= 0 ? t : e)
                  : (i) => (i >= 1 ? e : t);
              })(t, e)
            : (0, n.F)(
                V(
                  (function (t, e) {
                    let i = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let r = 0; r < e.values.length; r++) {
                      let s = e.types[r],
                        a = t.indexes[s][n[s]],
                        o = t.values[a] ?? 0;
                      ((i[r] = o), n[s]++);
                    }
                    return i;
                  })(s, a),
                  a.values,
                ),
                i,
              )
          : ((0, r.$)(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              "complex-values-different",
            ),
            d(t, e));
      };
      function M(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, p.k)(t, e, i)
          : w(t)(t, e);
      }
    },
    1607: (t, e, i) => {
      "use strict";
      i.d(e, { k: () => n });
      let n = (t, e, i) => t + (e - t) * i;
    },
    9421: (t, e, i) => {
      "use strict";
      i.d(e, { OQ: () => h, bt: () => l });
      var n = i(2539),
        r = i(3700),
        s = i(5850),
        a = i(3932);
      let o = (t) => !isNaN(parseFloat(t)),
        l = { current: void 0 };
      class u {
        constructor(t, e = {}) {
          ((this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t) => {
              let e = s.k.now();
              if (
                (this.updatedAt !== e && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  (this.events.change?.notify(this.current), this.dependents))
              )
                for (let t of this.dependents) t.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner));
        }
        setCurrent(t) {
          ((this.current = t),
            (this.updatedAt = s.k.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = o(this.current)));
        }
        setPrevFrameValue(t = this.current) {
          ((this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt));
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.v());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                (i(),
                  a.Gt.read(() => {
                    this.events.change.getSize() || this.stop();
                  }));
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          ((this.passiveEffect = t), (this.stopPassiveEffect = e));
        }
        set(t) {
          this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t);
        }
        setWithVelocity(t, e, i) {
          (this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i));
        }
        jump(t, e = !0) {
          (this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
        dirty() {
          this.events.change?.notify(this.current);
        }
        addDependent(t) {
          (this.dependents || (this.dependents = new Set()),
            this.dependents.add(t));
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t);
        }
        get() {
          return (l.current && l.current.push(this), this.current);
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = s.k.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (0, r.f)(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e,
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              ((this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify());
            }).then(() => {
              (this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation());
            })
          );
        }
        stop() {
          (this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation());
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          (this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect());
        }
      }
      function h(t, e) {
        return new u(t, e);
      }
    },
    4964: (t, e, i) => {
      "use strict";
      i.d(e, { u: () => r });
      var n = i(6822);
      let r = {
        test: (0, i(8196).$)("#"),
        parse: function (t) {
          let e = "",
            i = "",
            n = "",
            r = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (i = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (r = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (i = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (r = t.substring(4, 5)),
                (e += e),
                (i += i),
                (n += n),
                (r += r)),
            {
              red: parseInt(e, 16),
              green: parseInt(i, 16),
              blue: parseInt(n, 16),
              alpha: r ? parseInt(r, 16) / 255 : 1,
            }
          );
        },
        transform: n.B.transform,
      };
    },
    1965: (t, e, i) => {
      "use strict";
      i.d(e, { V: () => o });
      var n = i(2264),
        r = i(3137),
        s = i(8480),
        a = i(8196);
      let o = {
        test: (0, a.$)("hsl", "hue"),
        parse: (0, a.q)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: i, alpha: a = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          r.KN.transform((0, s.a)(e)) +
          ", " +
          r.KN.transform((0, s.a)(i)) +
          ", " +
          (0, s.a)(n.X4.transform(a)) +
          ")",
      };
    },
    8207: (t, e, i) => {
      "use strict";
      i.d(e, { y: () => a });
      var n = i(4964),
        r = i(1965),
        s = i(6822);
      let a = {
        test: (t) => s.B.test(t) || n.u.test(t) || r.V.test(t),
        parse: (t) =>
          s.B.test(t)
            ? s.B.parse(t)
            : r.V.test(t)
              ? r.V.parse(t)
              : n.u.parse(t),
        transform: (t) =>
          "string" == typeof t
            ? t
            : t.hasOwnProperty("red")
              ? s.B.transform(t)
              : r.V.transform(t),
        getAnimatableNone: (t) => {
          let e = a.parse(t);
          return ((e.alpha = 0), a.transform(e));
        },
      };
    },
    6822: (t, e, i) => {
      "use strict";
      i.d(e, { B: () => u });
      var n = i(5821),
        r = i(2264),
        s = i(8480),
        a = i(8196);
      let o = (t) => (0, n.q)(0, 255, t),
        l = { ...r.ai, transform: (t) => Math.round(o(t)) },
        u = {
          test: (0, a.$)("rgb", "red"),
          parse: (0, a.q)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(i) +
            ", " +
            (0, s.a)(r.X4.transform(n)) +
            ")",
        };
    },
    8196: (t, e, i) => {
      "use strict";
      i.d(e, { $: () => s, q: () => a });
      var n = i(4885);
      let r =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        s = (t, e) => (i) =>
          !!(
            ("string" == typeof i && r.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        a = (t, e, i) => (r) => {
          if ("string" != typeof r) return r;
          let [s, a, o, l] = r.match(n.S);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(a),
            [i]: parseFloat(o),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    663: (t, e, i) => {
      "use strict";
      i.d(e, { V: () => h, f: () => m });
      var n = i(8207);
      let r =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var s = i(4885),
        a = i(8480);
      let o = "number",
        l = "color",
        u =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function h(t) {
        let e = t.toString(),
          i = [],
          r = { color: [], number: [], var: [] },
          s = [],
          a = 0,
          h = e
            .replace(
              u,
              (t) => (
                n.y.test(t)
                  ? (r.color.push(a), s.push(l), i.push(n.y.parse(t)))
                  : t.startsWith("var(")
                    ? (r.var.push(a), s.push("var"), i.push(t))
                    : (r.number.push(a), s.push(o), i.push(parseFloat(t))),
                ++a,
                "${}"
              ),
            )
            .split("${}");
        return { values: i, split: h, indexes: r, types: s };
      }
      function c(t) {
        return h(t).values;
      }
      function d(t) {
        let { split: e, types: i } = h(t),
          r = e.length;
        return (t) => {
          let s = "";
          for (let u = 0; u < r; u++)
            if (((s += e[u]), void 0 !== t[u])) {
              let e = i[u];
              e === o
                ? (s += (0, a.a)(t[u]))
                : e === l
                  ? (s += n.y.transform(t[u]))
                  : (s += t[u]);
            }
          return s;
        };
      }
      let p = (t) =>
          "number" == typeof t ? 0 : n.y.test(t) ? n.y.getAnimatableNone(t) : t,
        m = {
          test: function (t) {
            return (
              isNaN(t) &&
              "string" == typeof t &&
              (t.match(s.S)?.length || 0) + (t.match(r)?.length || 0) > 0
            );
          },
          parse: c,
          createTransformer: d,
          getAnimatableNone: function (t) {
            let e = c(t);
            return d(t)(e.map(p));
          },
        };
    },
    2264: (t, e, i) => {
      "use strict";
      i.d(e, { X4: () => s, ai: () => r, hs: () => a });
      var n = i(5821);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.q)(0, 1, t) },
        a = { ...r, default: 1 };
    },
    3137: (t, e, i) => {
      "use strict";
      i.d(e, {
        KN: () => s,
        gQ: () => u,
        px: () => a,
        uj: () => r,
        vh: () => o,
        vw: () => l,
      });
      let n = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        r = n("deg"),
        s = n("%"),
        a = n("px"),
        o = n("vh"),
        l = n("vw"),
        u = {
          ...s,
          parse: (t) => s.parse(t) / 100,
          transform: (t) => s.transform(100 * t),
        };
    },
    4885: (t, e, i) => {
      "use strict";
      i.d(e, { S: () => n });
      let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    8480: (t, e, i) => {
      "use strict";
      i.d(e, { a: () => n });
      let n = (t) => Math.round(1e5 * t) / 1e5;
    },
    9356: (t, e, i) => {
      "use strict";
      i.d(e, { S: () => n });
      let n = (t) => !!(t && t.getVelocity);
    },
    1555: (t, e, i) => {
      "use strict";
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function r(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      i.d(e, { Ai: () => r, Kq: () => n });
    },
    5821: (t, e, i) => {
      "use strict";
      i.d(e, { q: () => n });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    4162: (t, e, i) => {
      "use strict";
      i.d(e, { b: () => r });
      var n = i(9707);
      let r = (t) =>
        (t *= 2) < 1
          ? 0.5 * (0, n.dg)(t)
          : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
    },
    9707: (t, e, i) => {
      "use strict";
      i.d(e, { Sz: () => a, ZZ: () => l, dg: () => o });
      var n = i(5768),
        r = i(8890),
        s = i(4641);
      let a = (0, n.A)(0.33, 1.53, 0.69, 0.99),
        o = (0, s.G)(a),
        l = (0, r.V)(o);
    },
    1679: (t, e, i) => {
      "use strict";
      i.d(e, { po: () => s, tn: () => o, yT: () => a });
      var n = i(8890),
        r = i(4641);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        a = (0, r.G)(s),
        o = (0, n.V)(s);
    },
    5768: (t, e, i) => {
      "use strict";
      i.d(e, { A: () => s });
      var n = i(6054);
      let r = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function s(t, e, i, s) {
        if (t === e && i === s) return n.l;
        let a = (e) =>
          (function (t, e, i, n, s) {
            let a, o;
            let l = 0;
            do (a = r((o = e + (i - e) / 2), n, s) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(a) > 1e-7 && ++l < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : r(a(t), e, s));
      }
    },
    8890: (t, e, i) => {
      "use strict";
      i.d(e, { V: () => n });
      let n = (t) => (e) =>
        e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    4641: (t, e, i) => {
      "use strict";
      i.d(e, { G: () => n });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    6430: (t, e, i) => {
      "use strict";
      i.d(e, { D: () => n });
      let n = (t) => Array.isArray(t) && "number" == typeof t[0];
    },
    5107: (t, e, i) => {
      "use strict";
      (i.d(e, { $: () => n, V: () => r }), i(2818));
      let n = () => {},
        r = () => {};
    },
    4148: (t, e, i) => {
      "use strict";
      i.d(e, { W: () => n });
      let n = {};
    },
    8180: (t, e, i) => {
      "use strict";
      function n(t) {
        return "object" == typeof t && null !== t;
      }
      i.d(e, { G: () => n });
    },
    6054: (t, e, i) => {
      "use strict";
      i.d(e, { l: () => n });
      let n = (t) => t;
    },
    1046: (t, e, i) => {
      "use strict";
      i.d(e, { F: () => r });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    9615: (t, e, i) => {
      "use strict";
      i.d(e, { q: () => n });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    2539: (t, e, i) => {
      "use strict";
      i.d(e, { v: () => r });
      var n = i(1555);
      class r {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.Kq)(this.subscriptions, t),
            () => (0, n.Ai)(this.subscriptions, t)
          );
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let r = 0; r < n; r++) {
                let n = this.subscriptions[r];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    300: (t, e, i) => {
      "use strict";
      i.d(e, { X: () => r, f: () => n });
      let n = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    3700: (t, e, i) => {
      "use strict";
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
      i.d(e, { f: () => n });
    },
  },
]);
