((exports.id = 738),
  (exports.ids = [738]),
  (exports.modules = {
    35625: function (t, e) {
      var i, n, r;
      ((n = []),
        void 0 !==
          (r =
            "function" ==
            typeof (i = function () {
              "use strict";
              function e(t, e, i) {
                var n = new XMLHttpRequest();
                (n.open("GET", t),
                  (n.responseType = "blob"),
                  (n.onload = function () {
                    a(n.response, e, i);
                  }),
                  (n.onerror = function () {
                    console.error("could not download file");
                  }),
                  n.send());
              }
              function i(t) {
                var e = new XMLHttpRequest();
                e.open("HEAD", t, !1);
                try {
                  e.send();
                } catch (t) {}
                return 200 <= e.status && 299 >= e.status;
              }
              function n(t) {
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
              var r =
                  "object" == typeof window && window.window === window
                    ? window
                    : "object" == typeof self && self.self === self
                      ? self
                      : "object" == typeof global && global.global === global
                        ? global
                        : void 0,
                s =
                  r.navigator &&
                  /Macintosh/.test(navigator.userAgent) &&
                  /AppleWebKit/.test(navigator.userAgent) &&
                  !/Safari/.test(navigator.userAgent),
                a =
                  r.saveAs ||
                  ("object" != typeof window || window !== r
                    ? function () {}
                    : "download" in HTMLAnchorElement.prototype && !s
                      ? function (t, s, a) {
                          var o = r.URL || r.webkitURL,
                            l = document.createElement("a");
                          ((s = s || t.name || "download"),
                            (l.download = s),
                            (l.rel = "noopener"),
                            "string" == typeof t
                              ? ((l.href = t),
                                l.origin === location.origin
                                  ? n(l)
                                  : i(l.href)
                                    ? e(t, s, a)
                                    : n(l, (l.target = "_blank")))
                              : ((l.href = o.createObjectURL(t)),
                                setTimeout(function () {
                                  o.revokeObjectURL(l.href);
                                }, 4e4),
                                setTimeout(function () {
                                  n(l);
                                }, 0)));
                        }
                      : "msSaveOrOpenBlob" in navigator
                        ? function (t, r, s) {
                            if (
                              ((r = r || t.name || "download"),
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
                                r,
                              );
                            } else if (i(t)) e(t, r, s);
                            else {
                              var o = document.createElement("a");
                              ((o.href = t),
                                (o.target = "_blank"),
                                setTimeout(function () {
                                  n(o);
                                }));
                            }
                          }
                        : function (t, i, n, a) {
                            if (
                              ((a = a || open("", "_blank")) &&
                                (a.document.title = a.document.body.innerText =
                                  "downloading..."),
                              "string" == typeof t)
                            )
                              return e(t, i, n);
                            var o = "application/octet-stream" === t.type,
                              l =
                                /constructor/i.test(r.HTMLElement) || r.safari,
                              u = /CriOS\/[\d]+/.test(navigator.userAgent);
                            if (
                              (u || (o && l) || s) &&
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
                                  a ? (a.location.href = t) : (location = t),
                                  (a = null));
                              }),
                                h.readAsDataURL(t));
                            } else {
                              var d = r.URL || r.webkitURL,
                                c = d.createObjectURL(t);
                              (a ? (a.location = c) : (location.href = c),
                                (a = null),
                                setTimeout(function () {
                                  d.revokeObjectURL(c);
                                }, 4e4));
                            }
                          });
              ((r.saveAs = a.saveAs = a), (t.exports = a));
            })
              ? i.apply(e, n)
              : i) && (t.exports = r));
    },
    6095: (t, e) => {
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
    6288: (t, e, i) => {
      "use strict";
      i.d(e, { k: () => o });
      var n = i(58009),
        r = i(60349);
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
    64385: (t, e, i) => {
      "use strict";
      i.d(e, { J: () => o });
      var n = i(58009),
        r = i(60349);
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
    23944: (t, e, i) => {
      "use strict";
      i.d(e, { t: () => o });
      var n = i(58009),
        r = i(60349);
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
    9943: (t, e, i) => {
      "use strict";
      i.d(e, { N: () => o });
      var n = i(58009),
        r = i(60349);
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
    64520: (t, e, i) => {
      "use strict";
      i.d(e, { C1: () => T, bL: () => b });
      var n = i(58009),
        r = i(29952),
        s = i(6004),
        a = i(31412),
        o = i(13024),
        l = i(66582),
        u = i(49397),
        h = i(98060),
        d = i(18055),
        c = i(45512),
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
            required: d,
            value: m = "on",
            internal_do_not_use_render: f,
          } = t,
          [g, y] = (0, o.i)({
            prop: i,
            defaultProp: s ?? !1,
            onChange: h,
            caller: p,
          }),
          [x, w] = n.useState(null),
          [b, A] = n.useState(null),
          T = n.useRef(!1),
          S = !x || !!l || !!x.closest("form"),
          P = {
            checked: g,
            disabled: a,
            setChecked: y,
            control: x,
            setControl: w,
            name: u,
            form: l,
            value: m,
            hasConsumerStoppedPropagationRef: T,
            required: d,
            defaultChecked: !E(s) && s,
            isFormControl: S,
            bubbleInput: b,
            setBubbleInput: A,
          };
        return (0, c.jsx)(v, {
          scope: e,
          ...P,
          children: "function" == typeof f ? f(P) : r,
        });
      }
      var x = "CheckboxTrigger",
        w = n.forwardRef(
          ({ __scopeCheckbox: t, onKeyDown: e, onClick: i, ...s }, o) => {
            let {
                control: l,
                value: u,
                disabled: h,
                checked: p,
                required: m,
                setControl: f,
                setChecked: v,
                hasConsumerStoppedPropagationRef: y,
                isFormControl: w,
                bubbleInput: b,
              } = g(x, t),
              A = (0, r.s)(o, f),
              T = n.useRef(p);
            return (
              n.useEffect(() => {
                let t = l?.form;
                if (t) {
                  let e = () => v(T.current);
                  return (
                    t.addEventListener("reset", e),
                    () => t.removeEventListener("reset", e)
                  );
                }
              }, [l, v]),
              (0, c.jsx)(d.sG.button, {
                type: "button",
                role: "checkbox",
                "aria-checked": E(p) ? "mixed" : p,
                "aria-required": m,
                "data-state": M(p),
                "data-disabled": h ? "" : void 0,
                disabled: h,
                value: u,
                ...s,
                ref: A,
                onKeyDown: (0, a.mK)(e, (t) => {
                  "Enter" === t.key && t.preventDefault();
                }),
                onClick: (0, a.mK)(i, (t) => {
                  (v((t) => !!E(t) || !t),
                    b &&
                      w &&
                      ((y.current = t.isPropagationStopped()),
                      y.current || t.stopPropagation()));
                }),
              })
            );
          },
        );
      w.displayName = x;
      var b = n.forwardRef((t, e) => {
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
          ...d
        } = t;
        return (0, c.jsx)(y, {
          __scopeCheckbox: i,
          checked: r,
          defaultChecked: s,
          disabled: o,
          required: a,
          onCheckedChange: u,
          name: n,
          form: h,
          value: l,
          internal_do_not_use_render: ({ isFormControl: t }) =>
            (0, c.jsxs)(c.Fragment, {
              children: [
                (0, c.jsx)(w, { ...d, ref: e, __scopeCheckbox: i }),
                t && (0, c.jsx)(P, { __scopeCheckbox: i }),
              ],
            }),
        });
      });
      b.displayName = p;
      var A = "CheckboxIndicator",
        T = n.forwardRef((t, e) => {
          let { __scopeCheckbox: i, forceMount: n, ...r } = t,
            s = g(A, i);
          return (0, c.jsx)(h.C, {
            present: n || E(s.checked) || !0 === s.checked,
            children: (0, c.jsx)(d.sG.span, {
              "data-state": M(s.checked),
              "data-disabled": s.disabled ? "" : void 0,
              ...r,
              ref: e,
              style: { pointerEvents: "none", ...t.style },
            }),
          });
        });
      T.displayName = A;
      var S = "CheckboxBubbleInput",
        P = n.forwardRef(({ __scopeCheckbox: t, ...e }, i) => {
          let {
              control: s,
              hasConsumerStoppedPropagationRef: a,
              checked: o,
              defaultChecked: h,
              required: p,
              disabled: m,
              name: f,
              value: v,
              form: y,
              bubbleInput: x,
              setBubbleInput: w,
            } = g(S, t),
            b = (0, r.s)(i, w),
            A = (0, l.Z)(o),
            T = (function (t) {
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
            })(s);
          n.useEffect(() => {
            if (!x) return;
            let t = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype,
                "checked",
              ).set,
              e = !a.current;
            if (A !== o && t) {
              let i = new Event("click", { bubbles: e });
              ((x.indeterminate = E(o)),
                t.call(x, !E(o) && o),
                x.dispatchEvent(i));
            }
          }, [x, A, o, a]);
          let P = n.useRef(!E(o) && o);
          return (0, c.jsx)(d.sG.input, {
            type: "checkbox",
            "aria-hidden": !0,
            defaultChecked: h ?? P.current,
            required: p,
            disabled: m,
            name: f,
            value: v,
            form: y,
            ...e,
            tabIndex: -1,
            ref: b,
            style: {
              ...e.style,
              ...T,
              position: "absolute",
              pointerEvents: "none",
              opacity: 0,
              margin: 0,
              transform: "translateX(-100%)",
            },
          });
        });
      function E(t) {
        return "indeterminate" === t;
      }
      function M(t) {
        return E(t) ? "indeterminate" : t ? "checked" : "unchecked";
      }
      P.displayName = S;
    },
    29248: (t, e, i) => {
      "use strict";
      i.d(e, { UC: () => z, B8: () => X, bL: () => K, l9: () => q });
      var n = i(58009),
        r = i(31412),
        s = i(6004),
        a = i(31954),
        o = i(29952),
        l = i(30096),
        u = i(18055),
        h = i(92828),
        d = i(13024),
        c = i(59018),
        p = i(45512),
        m = "rovingFocusGroup.onEntryFocus",
        f = { bubbles: !1, cancelable: !0 },
        v = "RovingFocusGroup",
        [g, y, x] = (0, a.N)(v),
        [w, b] = (0, s.A)(v, [x]),
        [A, T] = w(v),
        S = n.forwardRef((t, e) =>
          (0, p.jsx)(g.Provider, {
            scope: t.__scopeRovingFocusGroup,
            children: (0, p.jsx)(g.Slot, {
              scope: t.__scopeRovingFocusGroup,
              children: (0, p.jsx)(P, { ...t, ref: e }),
            }),
          }),
        );
      S.displayName = v;
      var P = n.forwardRef((t, e) => {
          let {
              __scopeRovingFocusGroup: i,
              orientation: s,
              loop: a = !1,
              dir: l,
              currentTabStopId: g,
              defaultCurrentTabStopId: x,
              onCurrentTabStopIdChange: w,
              onEntryFocus: b,
              preventScrollOnEntryFocus: T = !1,
              ...S
            } = t,
            P = n.useRef(null),
            E = (0, o.s)(e, P),
            M = (0, c.jH)(l),
            [V, C] = (0, d.i)({
              prop: g,
              defaultProp: x ?? null,
              onChange: w,
              caller: v,
            }),
            [D, R] = n.useState(!1),
            L = (0, h.c)(b),
            j = y(i),
            F = n.useRef(!1),
            [B, I] = n.useState(0);
          return (
            n.useEffect(() => {
              let t = P.current;
              if (t)
                return (
                  t.addEventListener(m, L),
                  () => t.removeEventListener(m, L)
                );
            }, [L]),
            (0, p.jsx)(A, {
              scope: i,
              orientation: s,
              dir: M,
              loop: a,
              currentTabStopId: V,
              onItemFocus: n.useCallback((t) => C(t), [C]),
              onItemShiftTab: n.useCallback(() => R(!0), []),
              onFocusableItemAdd: n.useCallback(() => I((t) => t + 1), []),
              onFocusableItemRemove: n.useCallback(() => I((t) => t - 1), []),
              children: (0, p.jsx)(u.sG.div, {
                tabIndex: D || 0 === B ? -1 : 0,
                "data-orientation": s,
                ...S,
                ref: E,
                style: { outline: "none", ...t.style },
                onMouseDown: (0, r.mK)(t.onMouseDown, () => {
                  F.current = !0;
                }),
                onFocus: (0, r.mK)(t.onFocus, (t) => {
                  let e = !F.current;
                  if (t.target === t.currentTarget && e && !D) {
                    let e = new CustomEvent(m, f);
                    if (
                      (t.currentTarget.dispatchEvent(e), !e.defaultPrevented)
                    ) {
                      let t = j().filter((t) => t.focusable);
                      k(
                        [
                          t.find((t) => t.active),
                          t.find((t) => t.id === V),
                          ...t,
                        ]
                          .filter(Boolean)
                          .map((t) => t.ref.current),
                        T,
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
        E = "RovingFocusGroupItem",
        M = n.forwardRef((t, e) => {
          let {
              __scopeRovingFocusGroup: i,
              focusable: s = !0,
              active: a = !1,
              tabStopId: o,
              children: h,
              ...d
            } = t,
            c = (0, l.B)(),
            m = o || c,
            f = T(E, i),
            v = f.currentTabStopId === m,
            x = y(i),
            {
              onFocusableItemAdd: w,
              onFocusableItemRemove: b,
              currentTabStopId: A,
            } = f;
          return (
            n.useEffect(() => {
              if (s) return (w(), () => b());
            }, [s, w, b]),
            (0, p.jsx)(g.ItemSlot, {
              scope: i,
              id: m,
              focusable: s,
              active: a,
              children: (0, p.jsx)(u.sG.span, {
                tabIndex: v ? 0 : -1,
                "data-orientation": f.orientation,
                ...d,
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
                      return V[r];
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
                    ? h({ isCurrentTabStop: v, hasTabStop: null != A })
                    : h,
              }),
            })
          );
        });
      M.displayName = E;
      var V = {
        ArrowLeft: "prev",
        ArrowUp: "prev",
        ArrowRight: "next",
        ArrowDown: "next",
        PageUp: "first",
        Home: "first",
        PageDown: "last",
        End: "last",
      };
      function k(t, e = !1) {
        let i = document.activeElement;
        for (let n of t)
          if (
            n === i ||
            (n.focus({ preventScroll: e }), document.activeElement !== i)
          )
            return;
      }
      var C = i(98060),
        D = "Tabs",
        [R, L] = (0, s.A)(D, [b]),
        j = b(),
        [F, B] = R(D),
        I = n.forwardRef((t, e) => {
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
            f = (0, c.jH)(o),
            [v, g] = (0, d.i)({
              prop: n,
              onChange: r,
              defaultProp: s ?? "",
              caller: D,
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
      I.displayName = D;
      var O = "TabsList",
        U = n.forwardRef((t, e) => {
          let { __scopeTabs: i, loop: n = !0, ...r } = t,
            s = B(O, i),
            a = j(i);
          return (0, p.jsx)(S, {
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
      U.displayName = O;
      var Z = "TabsTrigger",
        N = n.forwardRef((t, e) => {
          let { __scopeTabs: i, value: n, disabled: s = !1, ...a } = t,
            o = B(Z, i),
            l = j(i),
            h = H(o.baseId, n),
            d = $(o.baseId, n),
            c = n === o.value;
          return (0, p.jsx)(M, {
            asChild: !0,
            ...l,
            focusable: !s,
            active: c,
            children: (0, p.jsx)(u.sG.button, {
              type: "button",
              role: "tab",
              "aria-selected": c,
              "aria-controls": d,
              "data-state": c ? "active" : "inactive",
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
                c || s || !t || o.onValueChange(n);
              }),
            }),
          });
        });
      N.displayName = Z;
      var G = "TabsContent",
        W = n.forwardRef((t, e) => {
          let {
              __scopeTabs: i,
              value: r,
              forceMount: s,
              children: a,
              ...o
            } = t,
            l = B(G, i),
            h = H(l.baseId, r),
            d = $(l.baseId, r),
            c = r === l.value,
            m = n.useRef(c);
          return (
            n.useEffect(() => {
              let t = requestAnimationFrame(() => (m.current = !1));
              return () => cancelAnimationFrame(t);
            }, []),
            (0, p.jsx)(C.C, {
              present: s || c,
              children: ({ present: i }) =>
                (0, p.jsx)(u.sG.div, {
                  "data-state": c ? "active" : "inactive",
                  "data-orientation": l.orientation,
                  role: "tabpanel",
                  "aria-labelledby": h,
                  hidden: !i,
                  id: d,
                  tabIndex: 0,
                  ...o,
                  ref: e,
                  style: {
                    ...t.style,
                    animationDuration: m.current ? "0s" : void 0,
                  },
                  children: i && a,
                }),
            })
          );
        });
      function H(t, e) {
        return `${t}-trigger-${e}`;
      }
      function $(t, e) {
        return `${t}-content-${e}`;
      }
      W.displayName = G;
      var K = I,
        X = U,
        q = N,
        z = W;
    },
    63205: (t, e, i) => {
      "use strict";
      i.d(e, { N: () => x });
      var n = i(45512),
        r = i(58009),
        s = i(39872),
        a = i(15248),
        o = i(13607),
        l = i(29e3),
        u = i(45342),
        h = i(55785);
      function d(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e);
      }
      class c extends r.Component {
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
      function p({
        children: t,
        isPresent: e,
        anchorX: i,
        anchorY: s,
        root: a,
      }) {
        let o = (0, r.useId)(),
          l = (0, r.useRef)(null),
          u = (0, r.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }),
          { nonce: p } = (0, r.useContext)(h.Q),
          m = (function (...t) {
            return r.useCallback(
              (function (...t) {
                return (e) => {
                  let i = !1,
                    n = t.map((t) => {
                      let n = d(t, e);
                      return (i || "function" != typeof n || (i = !0), n);
                    });
                  if (i)
                    return () => {
                      for (let e = 0; e < n.length; e++) {
                        let i = n[e];
                        "function" == typeof i ? i() : d(t[e], null);
                      }
                    };
                };
              })(...t),
              t,
            );
          })(l, t.props?.ref ?? t?.ref);
        return (
          (0, r.useInsertionEffect)(() => {
            let {
              width: t,
              height: n,
              top: r,
              left: h,
              right: d,
              bottom: c,
            } = u.current;
            if (e || !l.current || !t || !n) return;
            let m = "left" === i ? `left: ${h}` : `right: ${d}`,
              f = "bottom" === s ? `bottom: ${c}` : `top: ${r}`;
            l.current.dataset.motionPopId = o;
            let v = document.createElement("style");
            p && (v.nonce = p);
            let g = a ?? document.head;
            return (
              g.appendChild(v),
              v.sheet &&
                v.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${n}px !important;
            ${m}px !important;
            ${f}px !important;
          }
        `),
              () => {
                g.contains(v) && g.removeChild(v);
              }
            );
          }, [e]),
          (0, n.jsx)(c, {
            isPresent: e,
            childRef: l,
            sizeRef: u,
            children: r.cloneElement(t, { ref: m }),
          })
        );
      }
      let m = ({
        children: t,
        initial: e,
        isPresent: i,
        onExitComplete: s,
        custom: o,
        presenceAffectsLayout: u,
        mode: h,
        anchorX: d,
        anchorY: c,
        root: m,
      }) => {
        let v = (0, a.M)(f),
          g = (0, r.useId)(),
          y = !0,
          x = (0, r.useMemo)(
            () => (
              (y = !1),
              {
                id: g,
                initial: e,
                isPresent: i,
                custom: o,
                onExitComplete: (t) => {
                  for (let e of (v.set(t, !0), v.values())) if (!e) return;
                  s && s();
                },
                register: (t) => (v.set(t, !1), () => v.delete(t)),
              }
            ),
            [i, v, s],
          );
        return (
          u && y && (x = { ...x }),
          (0, r.useMemo)(() => {
            v.forEach((t, e) => v.set(e, !1));
          }, [i]),
          r.useEffect(() => {
            i || v.size || !s || s();
          }, [i]),
          "popLayout" === h &&
            (t = (0, n.jsx)(p, {
              isPresent: i,
              anchorX: d,
              anchorY: c,
              root: m,
              children: t,
            })),
          (0, n.jsx)(l.t.Provider, { value: x, children: t })
        );
      };
      function f() {
        return new Map();
      }
      var v = i(45883);
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
      let x = ({
        children: t,
        custom: e,
        initial: i = !0,
        onExitComplete: l,
        presenceAffectsLayout: u = !0,
        mode: h = "sync",
        propagate: d = !1,
        anchorX: c = "left",
        anchorY: p = "top",
        root: f,
      }) => {
        let [x, w] = (0, v.xQ)(d),
          b = (0, r.useMemo)(() => y(t), [t]),
          A = d && !x ? [] : b.map(g),
          T = (0, r.useRef)(!0),
          S = (0, r.useRef)(b),
          P = (0, a.M)(() => new Map()),
          E = (0, r.useRef)(new Set()),
          [M, V] = (0, r.useState)(b),
          [k, C] = (0, r.useState)(b);
        (0, o.E)(() => {
          ((T.current = !1), (S.current = b));
          for (let t = 0; t < k.length; t++) {
            let e = g(k[t]);
            A.includes(e)
              ? (P.delete(e), E.current.delete(e))
              : !0 !== P.get(e) && P.set(e, !1);
          }
        }, [k, A.length, A.join("-")]);
        let D = [];
        if (b !== M) {
          let t = [...b];
          for (let e = 0; e < k.length; e++) {
            let i = k[e],
              n = g(i);
            A.includes(n) || (t.splice(e, 0, i), D.push(i));
          }
          return ("wait" === h && D.length && (t = D), C(y(t)), V(b), null);
        }
        let { forceRender: R } = (0, r.useContext)(s.L);
        return (0, n.jsx)(n.Fragment, {
          children: k.map((t) => {
            let r = g(t),
              s = (!d || !!x) && (b === k || A.includes(r));
            return (0, n.jsx)(
              m,
              {
                isPresent: s,
                initial: (!T.current || !!i) && void 0,
                custom: e,
                presenceAffectsLayout: u,
                mode: h,
                root: f,
                onExitComplete: s
                  ? void 0
                  : () => {
                      if (E.current.has(r) || (E.current.add(r), !P.has(r)))
                        return;
                      P.set(r, !0);
                      let t = !0;
                      (P.forEach((e) => {
                        e || (t = !1);
                      }),
                        t && (R?.(), C(S.current), d && w?.(), l && l()));
                    },
                anchorX: c,
                anchorY: p,
                children: t,
              },
              r,
            );
          }),
        });
      };
    },
    45883: (t, e, i) => {
      "use strict";
      i.d(e, { xQ: () => s });
      var n = i(58009),
        r = i(29e3);
      function s(t = !0) {
        let e = (0, n.useContext)(r.t);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: a, register: o } = e,
          l = (0, n.useId)(),
          u = (0, n.useCallback)(() => t && a && a(l), [l, a, t]);
        return !i && a ? [!1, u] : [!0];
      }
    },
    39872: (t, e, i) => {
      "use strict";
      i.d(e, { L: () => n });
      let n = (0, i(58009).createContext)({});
    },
    55785: (t, e, i) => {
      "use strict";
      i.d(e, { Q: () => n });
      let n = (0, i(58009).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    29e3: (t, e, i) => {
      "use strict";
      i.d(e, { t: () => n });
      let n = (0, i(58009).createContext)(null);
    },
    66549: (t, e, i) => {
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
      var s = i(19117),
        a = i(140),
        o = i(28263);
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
        d = {
          ...a.f,
          getAnimatableNone: (t) => {
            let e = t.match(h);
            return e ? e.map(u).join(" ") : t;
          },
        };
      var c = i(53942);
      let p = { ...c.ai, transform: Math.round };
      var m = i(3983);
      let f = {
          rotate: m.uj,
          rotateX: m.uj,
          rotateY: m.uj,
          rotateZ: m.uj,
          scale: c.hs,
          scaleX: c.hs,
          scaleY: c.hs,
          scaleZ: c.hs,
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
          opacity: c.X4,
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
          fillOpacity: c.X4,
          strokeOpacity: c.X4,
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
          filter: d,
          WebkitFilter: d,
        },
        y = (t) => g[t],
        x = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        w = () => ({ x: x(), y: x() }),
        b = () => ({ min: 0, max: 0 }),
        A = () => ({ x: b(), y: b() });
      var T = i(8882);
      let S = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...n,
        ]),
        P = (t) => (e) => e.test(t),
        E = [
          c.ai,
          m.px,
          m.KN,
          m.uj,
          m.vw,
          m.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        M = (t) => E.find(P(t));
      var V = i(33967);
      let k = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
      var C = i(10895);
      let D = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        R = (t) => (180 * t) / Math.PI,
        L = (t) => F(R(Math.atan2(t[1], t[0]))),
        j = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: L,
          rotateZ: L,
          skewX: (t) => R(Math.atan(t[1])),
          skewY: (t) => R(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        F = (t) => ((t %= 360) < 0 && (t += 360), t),
        B = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        I = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        O = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: B,
          scaleY: I,
          scale: (t) => (B(t) + I(t)) / 2,
          rotateX: (t) => F(R(Math.atan2(t[6], t[5]))),
          rotateY: (t) => F(R(Math.atan2(-t[2], t[0]))),
          rotateZ: L,
          rotate: L,
          skewX: (t) => R(Math.atan(t[4])),
          skewY: (t) => R(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function U(t) {
        return t.includes("scale") ? 1 : 0;
      }
      function Z(t, e) {
        let i, n;
        if (!t || "none" === t) return U(e);
        let r = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (r) ((i = O), (n = r));
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          ((i = j), (n = e));
        }
        if (!n) return U(e);
        let s = i[e],
          a = n[1].split(",").map(G);
        return "function" == typeof s ? s(a) : a[s];
      }
      let N = (t, e) => {
        let { transform: i = "none" } = getComputedStyle(t);
        return Z(i, e);
      };
      function G(t) {
        return parseFloat(t.trim());
      }
      let W = (t) => t === c.ai || t === m.px,
        H = new Set(["x", "y", "z"]),
        $ = n.filter((t) => !H.has(t)),
        K = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: (t, { transform: e }) => Z(e, "x"),
          y: (t, { transform: e }) => Z(e, "y"),
        };
      ((K.translateX = K.x), (K.translateY = K.y));
      var X = i(60330);
      let q = new Set(),
        z = !1,
        Y = !1,
        Q = !1;
      function _() {
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
        ((Y = !1), (z = !1), q.forEach((t) => t.complete(Q)), q.clear());
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
                z || ((z = !0), X.Gt.read(J), X.Gt.resolveKeyframes(_)))
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
          i !== d && (i = a.f),
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
                (0, V.V)(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                  "max-css-var-depth",
                );
                let [r, s] = (function (t) {
                  let e = D.exec(t);
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
          if ((this.resolveNoneKeyframes(), !S.has(i) || 2 !== t.length))
            return;
          let [n, r] = t,
            s = M(n),
            a = M(r);
          if ((0, C.rm)(n) !== (0, C.rm)(r) && K[i]) {
            this.needsMeasurement = !0;
            return;
          }
          if (s !== a) {
            if (W(s) && W(a))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else K[i] && (this.needsMeasurement = !0);
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
            (this.measuredOrigin = K[i](
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
          ((i[r] = K[e](
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
      var ts = i(13891);
      let { schedule: ta } = (0, i(56131).I)(queueMicrotask, !1);
      var to = i(50560),
        tl = i(21547);
      let tu = [...E, s.y, a.f],
        th = (t) => tu.find(P(t)),
        td = { current: null },
        tc = { current: !1 },
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
      function tw(t) {
        return !!(tx(t) || t.variants);
      }
      function tb(t, e, i, n) {
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
      let tA = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        tT = {};
      class tS {
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
                X.Gt.render(this.render, !1, !0));
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
            (this.isVariantNode = tw(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current)));
          let { willChange: u, ...h } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this,
          );
          for (let t in h) {
            let e = h[t];
            void 0 !== o[t] && (0, T.S)(e) && e.set(o[t]);
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
                : (tc.current ||
                    (function () {
                      if (((tc.current = !0), tp)) {
                        if (window.matchMedia) {
                          let t = window.matchMedia("(prefers-reduced-motion)"),
                            e = () => (td.current = t.matches);
                          (t.addEventListener("change", e), e());
                        } else td.current = !1;
                      }
                    })(),
                  (this.shouldReduceMotion = td.current)),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext));
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          (0, X.WG)(this.notifyUpdate),
          (0, X.WG)(this.render),
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
              this.props.onUpdate && X.Gt.preRender(this.notifyUpdate),
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
          for (t in tT) {
            let e = tT[t];
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
            : A();
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
          for (let e = 0; e < tA.length; e++) {
            let i = tA[e];
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
              if ((0, T.S)(r)) t.addValue(n, r);
              else if ((0, T.S)(s)) t.addValue(n, (0, tl.OQ)(r, { owner: t }));
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
              this.setBaseTarget(t, (0, T.S)(i) ? i.get() : i)),
            (0, T.S)(i) ? i.get() : i
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          let e;
          let { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let n = tb(this.props, i, this.presenceContext?.custom);
            n && (e = n[t]);
          }
          if (i && void 0 !== e) return e;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || (0, T.S)(n)
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
      class tP extends tS {
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
          (0, T.S)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      function tE(t) {
        return t.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
      }
      let tM = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        tV = {
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
            let e = tM(i, v[t]);
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
                      let t = tM(l, v[o]);
                      if (!u) {
                        s = !1;
                        let e = tV[o] || o;
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
      let tD = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        tR = { offset: "strokeDashoffset", array: "strokeDasharray" },
        tL = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
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
        let { attrs: d, style: c } = t;
        for (let t of (d.transform &&
          ((c.transform = d.transform), delete d.transform),
        (c.transform || d.transformOrigin) &&
          ((c.transformOrigin = d.transformOrigin ?? "50% 50%"),
          delete d.transformOrigin),
        c.transform &&
          ((c.transformBox = h?.transformBox ?? "fill-box"),
          delete d.transformBox),
        tL))
          void 0 !== d[t] && ((c[t] = d[t]), delete d[t]);
        (void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== n && (d.scale = n),
          void 0 !== r &&
            (function (t, e, i = 1, n = 0, r = !0) {
              t.pathLength = 1;
              let s = r ? tD : tR;
              ((t[s.offset] = `${-n}`), (t[s.array] = `${e} ${i}`));
            })(d, r, s, a, !1));
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
        tB = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function tI(t, { style: e, vars: i }, n, r) {
        let s;
        let a = t.style;
        for (s in e) a[s] = e[s];
        for (s in (r?.applyProjectionStyles(a, n), i)) a.setProperty(s, i[s]);
      }
      function tO(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let tU = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!m.px.test(t)) return t;
            t = parseFloat(t);
          }
          let i = tO(t, e.target.x),
            n = tO(t, e.target.y);
          return `${i}% ${n}%`;
        },
      };
      var tZ = i(73619);
      let tN = {
        borderRadius: {
          ...tU,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: tU,
        borderTopRightRadius: tU,
        borderBottomLeftRadius: tU,
        borderBottomRightRadius: tU,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = a.f.parse(t);
            if (n.length > 5) return t;
            let r = a.f.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              l = i.y.scale * e.y;
            ((n[0 + s] /= o), (n[1 + s] /= l));
            let u = (0, tZ.k)(o, l, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= u),
              "number" == typeof n[3 + s] && (n[3 + s] /= u),
              r(n)
            );
          },
        },
      };
      function tG(t, { layout: e, layoutId: i }) {
        return (
          r.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!tN[t] || "opacity" === t))
        );
      }
      function tW(t, e, i) {
        let n = t.style,
          r = e?.style,
          s = {};
        if (!n) return s;
        for (let e in n)
          ((0, T.S)(n[e]) ||
            (r && (0, T.S)(r[e])) ||
            tG(e, t) ||
            i?.getValue(e)?.liveStyle !== void 0) &&
            (s[e] = n[e]);
        return s;
      }
      function tH(t, e, i) {
        let r = tW(t, e, i);
        for (let i in t)
          ((0, T.S)(t[i]) || (0, T.S)(e[i])) &&
            (r[
              -1 !== n.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return r;
      }
      class t$ extends tP {
        constructor() {
          (super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = A));
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (r.has(e)) {
            let t = y(e);
            return (t && t.default) || 0;
          }
          return ((e = tF.has(e) ? e : tE(e)), t.getAttribute(e));
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return tH(t, e, i);
        }
        build(t, e, i) {
          tj(t, e, this.isSVGTag, i.transformTemplate, i.style);
        }
        renderInstance(t, e, i, n) {
          !(function (t, e, i, n) {
            for (let i in (tI(t, e, void 0, n), e.attrs))
              t.setAttribute(tF.has(i) ? i : tE(i), e.attrs[i]);
          })(t, e, 0, n);
        }
        mount(t) {
          ((this.isSVGTag = tB(t.tagName)), super.mount(t));
        }
      }
      function tK({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      function tX(t) {
        return void 0 === t || 1 === t;
      }
      function tq({ scale: t, scaleX: e, scaleY: i }) {
        return !tX(t) || !tX(e) || !tX(i);
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
      function tQ(t, e, i, n, r) {
        return (void 0 !== r && (t = n + r * (t - n)), n + i * (t - n) + e);
      }
      function t_(t, e = 0, i = 1, n, r) {
        ((t.min = tQ(t.min, e, i, n, r)), (t.max = tQ(t.max, e, i, n, r)));
      }
      function tJ(t, { x: e, y: i }) {
        (t_(t.x, e.translate, e.scale, e.originPoint),
          t_(t.y, i.translate, i.scale, i.originPoint));
      }
      function t0(t, e) {
        ((t.min = t.min + e), (t.max = t.max + e));
      }
      function t1(t, e, i, n, r = 0.5) {
        let s = (0, tZ.k)(t.min, t.max, r);
        t_(t, e, i, s, n);
      }
      function t2(t, e) {
        (t1(t.x, e.x, e.scaleX, e.scale, e.originX),
          t1(t.y, e.y, e.scaleY, e.scale, e.originY));
      }
      function t4(t, e) {
        return tK(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e),
        );
      }
      class t6 extends tP {
        constructor() {
          (super(...arguments),
            (this.type = "html"),
            (this.renderInstance = tI));
        }
        readValueFromInstance(t, e) {
          if (r.has(e)) return this.projection?.isProjecting ? U(e) : N(t, e);
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
          return tW(t, e, i);
        }
      }
      var t8 = i(58009);
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
      var t9 = i(45512),
        t7 = i(39872);
      let et = (0, t8.createContext)({ strict: !1 });
      var ee = i(55785);
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
        for (let n in e) (0, T.S)(e[n]) || tG(n, i) || (t[n] = e[n]);
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
        return (0, T.S)(t) ? t.get() : t;
      }
      var ed = i(29e3),
        ec = i(15248);
      let ep = (t) => (e, i) => {
          let n = (0, t8.useContext)(ei),
            r = (0, t8.useContext)(ed.t),
            s = () =>
              (function (
                { scrapeMotionValuesFromProps: t, createRenderState: e },
                i,
                n,
                r,
              ) {
                return {
                  latestValues: (function (t, e, i, n) {
                    let r = {},
                      s = n(t, {});
                    for (let t in s) r[t] = eh(s[t]);
                    let { initial: a, animate: o } = t,
                      l = tx(t),
                      u = tw(t);
                    e &&
                      u &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === a && (a = e.initial),
                      void 0 === o && (o = e.animate));
                    let h = !!i && !1 === i.initial,
                      d = (h = h || !1 === a) ? o : a;
                    if (d && "boolean" != typeof d && !tf(d)) {
                      let e = Array.isArray(d) ? d : [d];
                      for (let i = 0; i < e.length; i++) {
                        let n = tb(t, e[i]);
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
                  })(i, n, r, t),
                  renderState: e(),
                };
              })(t, e, n, r);
          return i ? s() : (0, ec.M)(s);
        },
        em = ep({ scrapeMotionValuesFromProps: tW, createRenderState: er }),
        ef = ep({ scrapeMotionValuesFromProps: tH, createRenderState: ea });
      var ev = i(13969);
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
          (function () {
            if (ey) return;
            let t = {};
            for (let e in eg)
              t[e] = { isEnabled: (t) => eg[e].some((e) => !!t[e]) };
            ((tT = t), (ey = !0));
          })(),
          tT
        );
      }
      let ew = Symbol.for("motionComponentSymbol"),
        eb = "data-" + tE("framerAppearId"),
        eA = (0, t8.createContext)({});
      function eT(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      var eS = i(13607);
      function eP(t, { forwardMotionProps: e = !1, type: i } = {}, n, r) {
        n &&
          (function (t) {
            let e = ex();
            for (let i in t) e[i] = { ...e[i], ...t[i] };
            tT = e;
          })(n);
        let s = i ? "svg" === i : t3(t),
          a = s ? ef : em;
        function o(i, n) {
          let o;
          let l = {
              ...(0, t8.useContext)(ee.Q),
              ...i,
              layoutId: (function ({ layoutId: t }) {
                let e = (0, t8.useContext)(t7.L).id;
                return e && void 0 !== t ? e + "-" + t : t;
              })(i),
            },
            { isStatic: u } = l,
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
            })(i),
            d = a(i, u);
          if (!u && ev.B) {
            (0, t8.useContext)(et).strict;
            let e = (function (t) {
              let { drag: e, layout: i } = ex();
              if (!e && !i) return {};
              let n = { ...e, ...i };
              return {
                MeasureLayout:
                  e?.isEnabled(t) || i?.isEnabled(t) ? n.MeasureLayout : void 0,
                ProjectionNode: n.ProjectionNode,
              };
            })(l);
            ((o = e.MeasureLayout),
              (h.visualElement = (function (t, e, i, n, r, s) {
                let { visualElement: a } = (0, t8.useContext)(ei),
                  o = (0, t8.useContext)(et),
                  l = (0, t8.useContext)(ed.t),
                  u = (0, t8.useContext)(ee.Q).reducedMotion,
                  h = (0, t8.useRef)(null),
                  d = (0, t8.useRef)(!1);
                ((n = n || o.renderer),
                  !h.current &&
                    n &&
                    ((h.current = n(t, {
                      visualState: e,
                      parent: a,
                      props: i,
                      presenceContext: l,
                      blockInitialAnimation: !!l && !1 === l.initial,
                      reducedMotionConfig: u,
                      isSVG: s,
                    })),
                    d.current &&
                      h.current &&
                      (h.current.manuallyAnimateOnMount = !0)));
                let c = h.current,
                  p = (0, t8.useContext)(eA);
                c &&
                  !c.projection &&
                  r &&
                  ("html" === c.type || "svg" === c.type) &&
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
                        alwaysMeasureLayout: !!a || (o && eT(o)),
                        visualElement: t,
                        animationType: "string" == typeof s ? s : "both",
                        initialPromotionConfig: n,
                        crossfade: h,
                        layoutScroll: l,
                        layoutRoot: u,
                      }));
                  })(h.current, i, r, p);
                let m = (0, t8.useRef)(!1);
                (0, t8.useInsertionEffect)(() => {
                  c && m.current && c.update(i, l);
                });
                let f = i[eb],
                  v = (0, t8.useRef)(
                    !!f &&
                      !window.MotionHandoffIsComplete?.(f) &&
                      window.MotionHasOptimisedAnimation?.(f),
                  );
                return (
                  (0, eS.E)(() => {
                    ((d.current = !0),
                      c &&
                        ((m.current = !0),
                        (window.MotionIsMounted = !0),
                        c.updateFeatures(),
                        c.scheduleRenderMicrotask(),
                        v.current &&
                          c.animationState &&
                          c.animationState.animateChanges()));
                  }),
                  c
                );
              })(t, d, l, r, e.ProjectionNode, s)));
          }
          return (0, t9.jsxs)(ei.Provider, {
            value: h,
            children: [
              o && h.visualElement
                ? (0, t9.jsx)(o, { visualElement: h.visualElement, ...l })
                : null,
              (function (t, e, i, { latestValues: n }, r, s = !1, a) {
                let o = (
                    (a ?? t3(t))
                      ? function (t, e, i, n) {
                          let r = (0, t8.useMemo)(() => {
                            let i = ea();
                            return (
                              tj(i, e, tB(n), t.transformTemplate, t.style),
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
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, t8.useMemo)(() => {
                                      let i = er();
                                      return (
                                        tC(i, e, t),
                                        Object.assign({}, i.vars, i.style)
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
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(e, n, r, t),
                  l = (function (t, e, i) {
                    let n = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        (eu(r) ||
                          (!0 === i && el(r)) ||
                          (!e && !el(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (n[r] = t[r]);
                    return n;
                  })(e, "string" == typeof t, s),
                  u = t !== t8.Fragment ? { ...l, ...o, ref: i } : {},
                  { children: h } = e,
                  d = (0, t8.useMemo)(() => ((0, T.S)(h) ? h.get() : h), [h]);
                return (0, t8.createElement)(t, { ...u, children: d });
              })(
                t,
                i,
                (function (t, e, i) {
                  let n = (0, t8.useRef)(i);
                  (0, t8.useInsertionEffect)(() => {
                    n.current = i;
                  });
                  let r = (0, t8.useRef)(null);
                  return (0, t8.useCallback)(
                    (i) => {
                      (i && t.onMount?.(i),
                        e && (i ? e.mount(i) : e.unmount()));
                      let s = n.current;
                      if ("function" == typeof s) {
                        if (i) {
                          let t = s(i);
                          "function" == typeof t && (r.current = t);
                        } else
                          r.current ? (r.current(), (r.current = null)) : s(i);
                      } else s && (s.current = i);
                    },
                    [e],
                  );
                })(d, h.visualElement, n),
                d,
                u,
                e,
                s,
              ),
            ],
          });
        }
        o.displayName = `motion.${"string" == typeof t ? t : `create(${t.displayName ?? t.name ?? ""})`}`;
        let l = (0, t8.forwardRef)(o);
        return ((l[ew] = t), l);
      }
      class eE {
        constructor(t) {
          ((this.isMounted = !1), (this.node = t));
        }
        update() {}
      }
      function eM(t, e, i) {
        let n = t.getProps();
        return tb(n, e, void 0 !== i ? i : n.custom, t);
      }
      function eV(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
      let ek = (t) => Array.isArray(t);
      var eC = i(65722);
      function eD(t, e) {
        let i = t.getValue("willChange");
        if ((0, T.S)(i) && i.add) return i.add(e);
        if (!i && eC.W.WillChange) {
          let i = new eC.W.WillChange("auto");
          (t.addValue("willChange", i), i.add(e));
        }
      }
      var eR = i(35686),
        eL = i(43362),
        ej = i(44521),
        eF = i(22787),
        eB = i(90607);
      let eI = (t) => t.startsWith("--");
      function eO(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let eU = eO(() => void 0 !== window.ScrollTimeline);
      var eZ = i(1383),
        eN = i(15749),
        eG = i(19381),
        eW = i(60232);
      let eH = {},
        e$ = (function (t, e) {
          let i = eO(t);
          return () => eH[e] ?? i();
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
      var eK = i(13084);
      let eX = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        eq = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: eX([0, 0.65, 0.55, 1]),
          circOut: eX([0.55, 0, 1, 0.45]),
          backIn: eX([0.31, 0.01, 0.66, -0.59]),
          backOut: eX([0.33, 1.53, 0.69, 0.99]),
        };
      function ez(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
      class eY extends eZ.q {
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
            (0, V.V)(
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
            let d = (function t(e, i) {
              if (e)
                return "function" == typeof e
                  ? e$()
                    ? (0, eK.K)(e, i)
                    : "ease-out"
                  : (0, eW.D)(e)
                    ? eX(e)
                    : Array.isArray(e)
                      ? e.map((e) => t(e, i) || eq.easeOut)
                      : eq[e];
            })(o, r);
            (Array.isArray(d) && (h.easing = d), eG.Q.value && eN.q.waapi++);
            let c = {
              delay: n,
              duration: r,
              easing: Array.isArray(d) ? "linear" : d,
              fill: "both",
              iterations: s + 1,
              direction: "reverse" === a ? "alternate" : "normal",
            };
            u && (c.pseudoElement = u);
            let p = t.animate(h, c);
            return (
              eG.Q.value &&
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
                      eI(e) ? t.style.setProperty(e, i) : (t.style[e] = i);
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
          t && eU())
            ? ((this.animation.timeline = t), eL.l)
            : e(this);
        }
      }
      var eQ = i(94013),
        e_ = i(93628),
        eJ = i(41545),
        e0 = i(68189);
      let e1 = { anticipate: e_.b, backInOut: eJ.ZZ, circInOut: e0.tn };
      class e2 extends eY {
        constructor(t) {
          ((function (t) {
            "string" == typeof t.ease && t.ease in e1 && (t.ease = e1[t.ease]);
          })(t),
            (0, eQ.E)(t),
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
            l = (0, eB.q)(0, 10, o - 10);
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
        e5 = eO(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      class e3 extends eZ.q {
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
          let d = {
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
            c = u?.KeyframeResolver || tt;
          ((this.keyframeResolver = new c(
            a,
            (t, e, i) => this.onKeyframesResolved(t, e, d, !i),
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
                (0, V.$)(
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
            d =
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
            c = h.motionValue?.owner?.current,
            p = d ? new e2({ ...h, element: c }) : new ej.s(h);
          (p.finished
            .then(() => {
              this.notifyFinished();
            })
            .catch(eL.l),
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
              (this.keyframeResolver?.resume(), (Q = !0), J(), _(), (Q = !1)),
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
      let e9 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        e7 = (t) => ({
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
                ? e7(e[1])
                : e9
              : ie,
        ir = (t) => null !== t,
        is =
          (t, e, i, n = {}, r, s) =>
          (a) => {
            let o = eV(n, t) || {},
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
            let d = !1;
            if (
              ((!1 !== h.type && (0 !== h.duration || h.repeatDelay)) ||
                (e6(h), 0 !== h.delay || (d = !0)),
              (eC.W.instantAnimations || eC.W.skipAnimations) &&
                ((d = !0), e6(h), (h.delay = 0)),
              (h.allowFlatten = !o.type && !o.ease),
              d && !s && void 0 !== e.get())
            ) {
              let t = (function (t, { repeat: e, repeatType: i = "loop" }, n) {
                let r = t.filter(ir),
                  s = e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
                return r[s];
              })(h.keyframes, o);
              if (void 0 !== t) {
                X.Gt.update(() => {
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
          let a = { delay: i, ...eV(s || {}, e) },
            h = n.get();
          if (
            void 0 !== h &&
            !n.isAnimating &&
            !Array.isArray(r) &&
            r === h &&
            !a.velocity
          )
            continue;
          let d = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[eb];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, X.Gt);
              null !== t && ((a.startTime = t), (d = !0));
            }
          }
          (eD(t, e),
            n.start(
              is(
                e,
                n,
                r,
                t.shouldReduceMotion && S.has(e) ? { type: !1 } : a,
                t,
                d,
              ),
            ));
          let c = n.animation;
          c && l.push(c);
        }
        return (
          a &&
            Promise.all(l).then(() => {
              X.Gt.update(() => {
                a &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...r
                    } = eM(t, e) || {};
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
        let n = eM(
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
      let id = [...tg].reverse(),
        ic = tg.length;
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
      class iv extends eE {
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
                              "function" == typeof e ? eM(t, e, i.custom) : e;
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
                    let r = eM(
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
                    d = 1 / 0;
                  for (let e = 0; e < ic; e++) {
                    var c;
                    let p = id[e],
                      m = i[p],
                      f = void 0 !== a[p] ? a[p] : o[p],
                      v = tv(f),
                      g = p === s ? m.isActive : null;
                    !1 === g && (d = e);
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
                        ((c = m.prevProp),
                        "string" == typeof f
                          ? f !== c
                          : !!Array.isArray(f) && !ih(f, c)),
                      w =
                        x || (p === s && m.isActive && !y && v) || (e > d && v),
                      b = !1,
                      A = Array.isArray(f) ? f : [f],
                      T = A.reduce(r(p), {});
                    !1 === g && (T = {});
                    let { prevResolvedValues: S = {} } = m,
                      P = { ...S, ...T },
                      E = (e) => {
                        ((w = !0),
                          u.has(e) && ((b = !0), u.delete(e)),
                          (m.needsAnimating[e] = !0));
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in P) {
                      let e = T[t],
                        i = S[t];
                      if (!h.hasOwnProperty(t))
                        (ek(e) && ek(i) ? ih(e, i) : e === i)
                          ? void 0 !== e && u.has(t)
                            ? E(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                            ? E(t)
                            : u.add(t);
                    }
                    ((m.prevProp = f),
                      (m.prevResolvedValues = T),
                      m.isActive && (h = { ...h, ...T }),
                      n && t.blockInitialAnimation && (w = !1));
                    let M = y && x,
                      V = !M || b;
                    w &&
                      V &&
                      l.push(
                        ...A.map((e) => {
                          let i = { type: p };
                          if (
                            "string" == typeof e &&
                            n &&
                            !M &&
                            t.manuallyAnimateOnMount &&
                            t.parent
                          ) {
                            let { parent: n } = t,
                              r = eM(n, e);
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
                      let i = eM(
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
      class iy extends eE {
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
      function iw(t) {
        return [t("x"), t("y")];
      }
      function ib(t) {
        return t.max - t.min;
      }
      function iA(t, e, i, n = 0.5) {
        ((t.origin = n),
          (t.originPoint = (0, tZ.k)(e.min, e.max, t.origin)),
          (t.scale = ib(i) / ib(e)),
          (t.translate = (0, tZ.k)(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0));
      }
      function iT(t, e, i, n) {
        (iA(t.x, e.x, i.x, n ? n.originX : void 0),
          iA(t.y, e.y, i.y, n ? n.originY : void 0));
      }
      function iS(t, e, i) {
        ((t.min = i.min + e.min), (t.max = t.min + ib(e)));
      }
      function iP(t, e, i) {
        ((t.min = e.min - i.min), (t.max = t.min + ib(e)));
      }
      function iE(t, e, i) {
        (iP(t.x, e.x, i.x), iP(t.y, e.y, i.y));
      }
      let iM = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
      function iV(t) {
        return iM.has(t.tagName) || !0 === t.isContentEditable;
      }
      function ik(t, e, i, n = { passive: !0 }) {
        return (t.addEventListener(e, i, n), () => t.removeEventListener(e, i));
      }
      let iC = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function iD(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let iR = (t) => (e) => iC(e) && t(e, iD(e));
      function iL(t, e, i, n) {
        return ik(t, e, iR(i), n);
      }
      let ij = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
      var iF = i(26190);
      let iB = (t, e) => Math.abs(t - e),
        iI = new Set(["auto", "scroll"]);
      class iO {
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
                    return Math.sqrt(iB(t.x, e.x) ** 2 + iB(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
              if (!e && !i) return;
              let { point: n } = t,
                { timestamp: r } = X.uv;
              this.history.push({ ...n, timestamp: r });
              let { onStart: s, onMove: a } = this.handlers;
              (e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                a && a(this.lastMoveEvent, t));
            }),
            (this.handlePointerMove = (t, e) => {
              ((this.lastMoveEvent = t),
                (this.lastMoveEventInfo = iU(e, this.transformPagePoint)),
                X.Gt.update(this.updatePoint, !0));
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
                  : iU(e, this.transformPagePoint),
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
          let o = iU(iD(t), this.transformPagePoint),
            { point: l } = o,
            { timestamp: u } = X.uv;
          this.history = [{ ...l, timestamp: u }];
          let { onSessionStart: h } = e;
          (h && h(t, iN(o, this.history)),
            (this.removeListeners = (0, iF.F)(
              iL(this.contextWindow, "pointermove", this.handlePointerMove),
              iL(this.contextWindow, "pointerup", this.handlePointerUp),
              iL(this.contextWindow, "pointercancel", this.handlePointerUp),
            )),
            a && this.startScrollTracking(a));
        }
        startScrollTracking(t) {
          let e = t.parentElement;
          for (; e; ) {
            let t = getComputedStyle(e);
            ((iI.has(t.overflowX) || iI.has(t.overflowY)) &&
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
            X.Gt.update(this.updatePoint, !0));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            (0, X.WG)(this.updatePoint));
        }
      }
      function iU(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function iZ(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function iN({ point: t }, e) {
        return {
          point: t,
          delta: iZ(t, iG(e)),
          offset: iZ(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              r = iG(t);
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
      function iG(t) {
        return t[t.length - 1];
      }
      var iW = i(98899);
      function iH(t, e, i) {
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
      function iK(t, e, i) {
        return { min: iX(t, e), max: iX(t, i) };
      }
      function iX(t, e) {
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
            (this.elastic = A()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = t));
        }
        start(t, { snapToCursor: e = !1, distanceThreshold: i } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: r } = this.getProps();
          this.panSession = new iO(
            t,
            {
              onSessionStart: (t) => {
                e
                  ? (this.stopAnimation(), this.snapToCursor(iD(t).point))
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
                  iw((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (m.KN.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        n && (e = ib(n) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  r && X.Gt.postRender(() => r(t, e)),
                  eD(this.visualElement, "transform"));
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
                iw(
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
          a && X.Gt.postRender(() => a(i, n));
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
                  ? (t = n ? (0, tZ.k)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? (0, tZ.k)(i, t, n.max) : Math.min(t, i)),
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
          (t && eT(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
              ? (this.constraints = (function (
                  t,
                  { top: e, left: i, bottom: n, right: r },
                ) {
                  return { x: iH(t.x, i, r), y: iH(t.y, e, n) };
                })(i.layoutBox, t))
              : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: iK(t, "left", "right"), y: iK(t, "top", "bottom") }
              );
            })(e)),
            n !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              iw((t) => {
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
          if (!e || !eT(e)) return !1;
          let n = e.current;
          (0, V.V)(
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
            ((this.hasMutatedConstraints = !!t), t && (a = tK(t)));
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
            iw((a) => {
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
            eD(this.visualElement, t),
            i.start(is(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          iw((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          iw((t) => this.getAxisMotionValue(t).animation?.pause());
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
          iw((e) => {
            let { drag: i } = this.getProps();
            if (!iY(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              r = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: s } = n.layout.layoutBox[e],
                a = r.get() || 0;
              r.set(t[e] - (0, tZ.k)(i, s, 0.5) + a);
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!eT(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          iw((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = ib(t),
                  r = ib(e);
                return (
                  r > n
                    ? (i = (0, iW.q)(e.min, e.max - n, t.min))
                    : n > r && (i = (0, iW.q)(t.min, t.max - r, e.min)),
                  (0, eB.q)(0, 1, i)
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
            iw((e) => {
              if (!iY(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: r, max: s } = this.constraints[e];
              i.set((0, tZ.k)(r, s, n[e]));
            }));
        }
        addListeners() {
          if (!this.visualElement.current) return;
          iq.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = iL(t, "pointerdown", (e) => {
              let { drag: i, dragListener: n = !0 } = this.getProps(),
                r = e.target,
                s = r !== t && iV(r);
              i && n && !s && this.start(e);
            }),
            i = () => {
              let { dragConstraints: t } = this.getProps();
              eT(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", i);
          (n &&
            !n.layout &&
            (n.root && n.root.updateScroll(), n.updateLayout()),
            X.Gt.read(i));
          let s = ik(window, "resize", () =>
              this.scalePositionWithinConstraints(),
            ),
            a = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (iw((e) => {
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
      class iQ extends eE {
        constructor(t) {
          (super(t),
            (this.removeGroupControls = eL.l),
            (this.removeListeners = eL.l),
            (this.controls = new iz(t)));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          (t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || eL.l));
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
      let i_ = (t) => (e, i) => {
        t && X.Gt.postRender(() => t(e, i));
      };
      class iJ extends eE {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = eL.l));
        }
        onPointerDown(t) {
          this.session = new iO(t, this.createPanHandlers(), {
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
            onSessionStart: i_(t),
            onStart: i_(e),
            onMove: i,
            onEnd: (t, e) => {
              (delete this.session, n && X.Gt.postRender(() => n(t, e)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = iL(
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
      var i1 = i(45883);
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
                    X.Gt.postRender(() => {
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
          n = (0, t8.useContext)(t7.L);
        return (0, t9.jsx)(i4, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, t8.useContext)(eA),
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
              (e = (0, tZ.k)(a.min, a.max, e / 100) - a.min)),
            "number" != typeof e)
          )
            return;
          let o = (0, tZ.k)(s.min, s.max, n);
          (t === s && (o -= e),
            (t.min = i8(t.min, e, i, o, r)),
            (t.max = i8(t.max, e, i, o, r)));
        })(t, e[i], e[n], e[r], e.scale, s, a);
      }
      let i3 = ["x", "scaleX", "originX"],
        i9 = ["y", "scaleY", "originY"];
      function i7(t, e, i, n) {
        (i5(t.x, e, i3, i ? i.x : void 0, n ? n.x : void 0),
          i5(t.y, e, i9, i ? i.y : void 0, n ? n.y : void 0));
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
        return ib(t.x) / ib(t.y);
      }
      function nu(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      let nh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nd = nh.length,
        nc = (t) => ("string" == typeof t ? parseFloat(t) : t),
        np = (t) => "number" == typeof t || m.px.test(t);
      function nm(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nf = ng(0, 0.5, e0.yT),
        nv = ng(0.5, 0.95, eL.l);
      function ng(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i((0, iW.q)(t, e, n)));
      }
      var ny = i(70094);
      function nx(t) {
        return (0, ny.G)(t) && "ownerSVGElement" in t;
      }
      var nw = i(70625);
      let nb = (t, e) => t.depth - e.depth;
      class nA {
        constructor() {
          ((this.children = []), (this.isDirty = !1));
        }
        add(t) {
          ((0, nw.Kq)(this.children, t), (this.isDirty = !0));
        }
        remove(t) {
          ((0, nw.Ai)(this.children, t), (this.isDirty = !0));
        }
        forEach(t) {
          (this.isDirty && this.children.sort(nb),
            (this.isDirty = !1),
            this.children.forEach(t));
        }
      }
      class nT {
        constructor() {
          this.members = [];
        }
        add(t) {
          ((0, nw.Kq)(this.members, t), t.scheduleRender());
        }
        remove(t) {
          if (
            ((0, nw.Ai)(this.members, t),
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
      let nS = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        nP = ["", "X", "Y", "Z"],
        nE = 0;
      function nM(t, e, i, n) {
        let { latestValues: r } = e;
        r[t] && ((i[t] = r[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function nV({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: r,
      }) {
        return class {
          constructor(t = {}, i = e?.()) {
            ((this.id = nE++),
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
                  eG.Q.value &&
                    (nS.nodes =
                      nS.calculatedTargetDeltas =
                      nS.calculatedProjections =
                        0),
                  this.nodes.forEach(nD),
                  this.nodes.forEach(nO),
                  this.nodes.forEach(nU),
                  this.nodes.forEach(nR),
                  eG.Q.addProjectionMetrics && eG.Q.addProjectionMetrics(nS));
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
            this.root === this && (this.nodes = new nA());
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
              (X.Gt.read(() => {
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
                          r >= 250 && ((0, X.WG)(n), t(r - 250));
                        };
                      return (X.Gt.setup(n, !0), () => (0, X.WG)(n));
                    })(r, 250)),
                    i0.hasAnimatedSinceResize &&
                      ((i0.hasAnimatedSinceResize = !1),
                      this.nodes.forEach(nI)));
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
                      let e = { ...eV(s, "layout"), onPlay: a, onComplete: o };
                      ((r.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e),
                        this.setAnimationOrigin(t, u));
                    } else
                      (e || nI(this),
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
              (0, X.WG)(this.updateProjection));
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
              this.nodes && this.nodes.forEach(nZ),
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
                  let n = i.props[eb];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      X.Gt,
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
                  this.nodes.forEach(nB),
                  this.nodes.forEach(nk),
                  this.nodes.forEach(nC))
                : this.nodes.forEach(nF),
              this.clearAllSnapshots());
            let t = to.k.now();
            ((X.uv.delta = (0, eB.q)(0, 1e3 / 60, t - X.uv.timestamp)),
              (X.uv.timestamp = t),
              (X.uv.isProcessing = !0),
              X.PP.update.process(X.uv),
              X.PP.preRender.process(X.uv),
              X.PP.render.process(X.uv),
              (X.uv.isProcessing = !1));
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), ta.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            (this.nodes.forEach(nL), this.sharedNodes.forEach(nN));
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              X.Gt.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            X.Gt.postRender(() => {
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
                ib(this.snapshot.measuredBox.x) ||
                ib(this.snapshot.measuredBox.y) ||
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
              (this.layoutCorrected = A()),
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
            if (!t) return A();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(nY))) {
              let { scroll: t } = this.root;
              t && (t0(e.x, t.offset.x), t0(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = A();
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
            let i = A();
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
            let e = A();
            ne(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !tz(i.latestValues)) continue;
              tq(i.latestValues) && i.updateSnapshot();
              let n = A();
              (ne(n, i.measurePageBox()),
                i7(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n,
                ));
            }
            return (tz(this.latestValues) && i7(e, this.latestValues), e);
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
              this.relativeParent.resolvedRelativeTargetAt !== X.uv.timestamp &&
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
            this.resolvedRelativeTargetAt = X.uv.timestamp;
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
                  ((this.target = A()), (this.targetWithTransforms = A())),
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
                  iS(a.x, o.x, l.x),
                  iS(a.y, o.y, l.y));
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
                eG.Q.value && nS.calculatedTargetDeltas++);
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
              (this.relativeTarget = A()),
              (this.relativeTargetOrigin = A()),
              iE(this.relativeTargetOrigin, e, i),
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
              this.resolvedRelativeTargetAt === X.uv.timestamp && (i = !1),
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
            ((function (t, e, i, n = !1) {
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
                (t.targetWithTransforms = A())));
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
              iT(
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
              eG.Q.value && nS.calculatedProjections++);
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
            ((this.prevProjectionDelta = w()),
              (this.projectionDelta = w()),
              (this.projectionDeltaWithTransform = w()));
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              r = n ? n.latestValues : {},
              s = { ...this.latestValues },
              a = w();
            ((this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e));
            let o = A(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              h = !u || u.members.length <= 1,
              d = !!(
                l &&
                !h &&
                !0 === this.options.crossfade &&
                !this.path.some(nH)
              );
            ((this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (nG(a.x, t.x, n),
                  nG(a.y, t.y, n),
                  this.setTargetDelta(a),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, c, p, f;
                  (iE(
                    o,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox,
                  ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    nW(p.x, f.x, o.x, n),
                    nW(p.y, f.y, o.y, n),
                    i &&
                      ((u = this.relativeTarget),
                      (c = i),
                      ns(u.x, c.x) && ns(u.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = A()),
                    ne(i, this.relativeTarget));
                }
                (l &&
                  ((this.animationValues = s),
                  (function (t, e, i, n, r, s) {
                    r
                      ? ((t.opacity = (0, tZ.k)(0, i.opacity ?? 1, nf(n))),
                        (t.opacityExit = (0, tZ.k)(e.opacity ?? 1, 0, nv(n))))
                      : s &&
                        (t.opacity = (0, tZ.k)(
                          e.opacity ?? 1,
                          i.opacity ?? 1,
                          n,
                        ));
                    for (let r = 0; r < nd; r++) {
                      let s = `border${nh[r]}Radius`,
                        a = nm(e, s),
                        o = nm(i, s);
                      (void 0 !== a || void 0 !== o) &&
                        (a || (a = 0),
                        o || (o = 0),
                        0 === a || 0 === o || np(a) === np(o)
                          ? ((t[s] = Math.max((0, tZ.k)(nc(a), nc(o), n), 0)),
                            (m.KN.test(o) || m.KN.test(a)) && (t[s] += "%"))
                          : (t[s] = o));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = (0, tZ.k)(e.rotate || 0, i.rotate || 0, n));
                  })(s, r, this.latestValues, n, d, h)),
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
                ((0, X.WG)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = X.Gt.update(() => {
                ((i0.hasAnimatedSinceResize = !0),
                  eN.q.layout++,
                  this.motionValue || (this.motionValue = (0, tl.OQ)(0)),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = (0, T.S)(t) ? t : (0, tl.OQ)(t);
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
                i = this.target || A();
                let e = ib(this.layout.layoutBox.x);
                ((i.x.min = t.target.x.min), (i.x.max = i.x.min + e));
                let n = ib(this.layout.layoutBox.y);
                ((i.y.min = t.target.y.min), (i.y.max = i.y.min + n));
              }
              (ne(e, i),
                t2(e, r),
                iT(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  r,
                ));
            }
          }
          registerSharedNode(t, e) {
            (this.sharedNodes.has(t) || this.sharedNodes.set(t, new nT()),
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
            i.z && nM("z", t, n, this.animationValues);
            for (let e = 0; e < nP.length; e++)
              (nM(`rotate${nP[e]}`, t, n, this.animationValues),
                nM(`skew${nP[e]}`, t, n, this.animationValues));
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
            ? iw((t) => {
                let n = s ? e.measuredBox[t] : e.layoutBox[t],
                  r = ib(n);
                ((n.min = i[t].min), (n.max = n.min + r));
              })
            : nz(r, e.layoutBox, i) &&
              iw((n) => {
                let r = s ? e.measuredBox[n] : e.layoutBox[n],
                  a = ib(i[n]);
                ((r.max = r.min + a),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + a)));
              });
          let a = w();
          iT(a, i, e.layoutBox);
          let o = w();
          s
            ? iT(o, t.applyTransform(n, !0), e.measuredBox)
            : iT(o, i, e.layoutBox);
          let l = !nr(a),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: r, layout: s } = n;
              if (r && s) {
                let a = A();
                iE(a, e.layoutBox, r.layoutBox);
                let o = A();
                (iE(o, i, s.layoutBox),
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
      function nD(t) {
        (eG.Q.value && nS.nodes++,
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
      function nL(t) {
        t.clearSnapshot();
      }
      function nj(t) {
        t.clearMeasurements();
      }
      function nF(t) {
        t.isLayoutDirty = !1;
      }
      function nB(t) {
        let { visualElement: e } = t.options;
        (e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform());
      }
      function nI(t) {
        (t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0));
      }
      function nO(t) {
        t.resolveTargetDelta();
      }
      function nU(t) {
        t.calcProjection();
      }
      function nZ(t) {
        t.resetSkewAndRotation();
      }
      function nN(t) {
        t.removeLeadSnapshot();
      }
      function nG(t, e, i) {
        ((t.translate = (0, tZ.k)(e.translate, 0, i)),
          (t.scale = (0, tZ.k)(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint));
      }
      function nW(t, e, i, n) {
        ((t.min = (0, tZ.k)(e.min, i.min, n)),
          (t.max = (0, tZ.k)(e.max, i.max, n)));
      }
      function nH(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let n$ = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        nK = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        nX = nK("applewebkit/") && !nK("chrome/") ? Math.round : eL.l;
      function nq(t) {
        ((t.min = nX(t.min)), (t.max = nX(t.max)));
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
      let nQ = nV({
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
        n_ = { current: void 0 },
        nJ = nV({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!n_.current) {
              let t = new nQ({});
              (t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (n_.current = t));
            }
            return n_.current;
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
        r && X.Gt.postRender(() => r(e, iD(e)));
      }
      class n4 extends eE {
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
      class n6 extends eE {
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
      var n8 = i(45342);
      let n5 = (t, e) => !!e && (t === e || n5(t, e.parentElement)),
        n3 = new WeakSet();
      function n9(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function n7(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }),
        );
      }
      let rt = (t, e) => {
        let i = t.currentTarget;
        if (!i) return;
        let n = n9(() => {
          if (n3.has(i)) return;
          n7(i, "down");
          let t = n9(() => {
            n7(i, "up");
          });
          (i.addEventListener("keyup", t, e),
            i.addEventListener("blur", () => n7(i, "cancel"), e));
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
        r && X.Gt.postRender(() => r(e, iD(e)));
      }
      class rn extends eE {
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
                      iV(t) || t.hasAttribute("tabindex") || (t.tabIndex = 0)));
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
      class ru extends eE {
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
        if ("undefined" == typeof Proxy) return eP;
        let i = new Map(),
          n = (i, n) => eP(i, n, t, e);
        return new Proxy((t, e) => n(t, e), {
          get: (r, s) =>
            "create" === s
              ? n
              : (i.has(s) || i.set(s, eP(s, void 0, t, e)), i.get(s)),
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
          drag: { Feature: iQ, ProjectionNode: nJ, MeasureLayout: i6 },
          layout: { ProjectionNode: nJ, MeasureLayout: i6 },
        },
        (t, e) =>
          (e.isSVG ?? t3(t))
            ? new t$(e)
            : new t6(e, { allowProjection: t !== t8.Fragment }),
      );
    },
    13969: (t, e, i) => {
      "use strict";
      i.d(e, { B: () => n });
      let n = "undefined" != typeof window;
    },
    10990: (t, e, i) => {
      "use strict";
      (i.d(e, { N: () => s }), i(60330));
      var n = i(58009),
        r = i(55785);
      function s(t) {
        (0, n.useRef)(0);
        let { isStatic: e } = (0, n.useContext)(r.Q);
      }
    },
    15248: (t, e, i) => {
      "use strict";
      i.d(e, { M: () => r });
      var n = i(58009);
      function r(t) {
        let e = (0, n.useRef)(null);
        return (null === e.current && (e.current = t()), e.current);
      }
    },
    13607: (t, e, i) => {
      "use strict";
      i.d(e, { E: () => r });
      var n = i(58009);
      let r = i(13969).B ? n.useLayoutEffect : n.useEffect;
    },
    55714: (t, e, i) => {
      "use strict";
      i.d(e, { j: () => a });
      var n = i(60330),
        r = i(13607),
        s = i(58986);
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
    8413: (t, e, i) => {
      "use strict";
      i.d(e, { E: () => s });
      var n = i(8882),
        r = i(55714);
      function s(t, ...e) {
        let i = t.length;
        return (0, r.j)(e.filter(n.S), function () {
          let r = "";
          for (let s = 0; s < i; s++) {
            r += t[s];
            let i = e[s];
            i && (r += (0, n.S)(i) ? i.get() : i);
          }
          return r;
        });
      }
    },
    58986: (t, e, i) => {
      "use strict";
      i.d(e, { d: () => o });
      var n = i(21547),
        r = i(58009),
        s = i(55785),
        a = i(15248);
      function o(t) {
        let e = (0, a.M)(() => (0, n.OQ)(t)),
          { isStatic: i } = (0, r.useContext)(s.Q);
        if (i) {
          let [, e] = (0, r.useState)(t);
        }
        return e;
      }
    },
    43313: (t, e, i) => {
      "use strict";
      i.d(e, { z: () => d });
      var n = i(8882),
        r = i(44521),
        s = i(60330);
      function a(t) {
        return "number" == typeof t ? t : parseFloat(t);
      }
      var o = i(58009),
        l = i(55785),
        u = i(58986),
        h = i(64159);
      function d(t, e = {}) {
        return (function (t, e = {}) {
          let { isStatic: i } = (0, o.useContext)(l.Q),
            d = () => ((0, n.S)(t) ? t.get() : t);
          if (i) return (0, h.G)(d);
          let c = (0, u.d)(d());
          return (
            (0, o.useInsertionEffect)(
              () =>
                (function (t, e, i = {}) {
                  let o;
                  let l = t.get(),
                    u = null,
                    h = l,
                    d =
                      "string" == typeof l ? l.replace(/[\d.-]/g, "") : void 0,
                    c = () => {
                      u && (u.stop(), (u = null));
                    },
                    p = () => {
                      c();
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
                        (o = (t) => i(d ? t + d : t)),
                        s.Gt.postRender(() => {
                          (p(),
                            t.events.animationStart?.notify(),
                            u?.then(() => {
                              t.events.animationComplete?.notify();
                            }));
                        }));
                    }, c),
                    (0, n.S)(e))
                  ) {
                    let i = e.on("change", (e) => t.set(d ? e + d : e)),
                      n = t.on("destroy", i);
                    return () => {
                      (i(), n());
                    };
                  }
                  return c;
                })(c, t, e),
              [c, JSON.stringify(e)],
            ),
            c
          );
        })(t, { type: "spring", ...e });
      }
    },
    64159: (t, e, i) => {
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
            return Array.isArray(e) ? o(e, h) : o([e], ([t]) => h(t));
          },
      });
      var n = i(89022),
        r = i(15248),
        s = i(55714),
        a = i(21547);
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
    24999: (t, e, i) => {
      "use strict";
      i.d(e, { A: () => n });
      let n = (0, i(94825).A)("Check", [
        ["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }],
      ]);
    },
    44521: (t, e, i) => {
      "use strict";
      i.d(e, { s: () => y });
      var n = i(26190),
        r = i(90607),
        s = i(35686),
        a = i(50560),
        o = i(15749),
        l = i(56944),
        u = i(60330);
      let h = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: (t = !0) => u.Gt.update(e, t),
          stop: () => (0, u.WG)(e),
          now: () => (u.uv.isProcessing ? u.uv.timestamp : a.k.now()),
        };
      };
      var d = i(26211),
        c = i(2642),
        p = i(8867),
        m = i(22787),
        f = i(94013),
        v = i(1383);
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
              type: e = c.i,
              repeat: i = 0,
              repeatDelay: r = 0,
              repeatType: s,
              velocity: a = 0,
            } = t,
            { keyframes: o } = t,
            u = e || c.i;
          u !== c.i &&
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
          let { calculatedDuration: d } = h;
          ((this.calculatedDuration = d),
            (this.resolvedDuration = d + r),
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
            repeat: c,
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
            w = this.playbackSpeed >= 0 ? x < 0 : x > n;
          ((this.currentTime = Math.max(x, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = n));
          let b = this.currentTime,
            A = i;
          if (c) {
            let t = Math.min(this.currentTime, n) / o,
              e = Math.floor(t),
              i = t % 1;
            (!i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === p
                  ? ((i = 1 - i), f && (i -= f / o))
                  : "mirror" === p && (A = a)),
              (b = (0, r.q)(0, 1, i) * o));
          }
          let T = w ? { done: !1, value: h[0] } : A.next(b);
          s && (T.value = s(T.value));
          let { done: S } = T;
          w ||
            null === l ||
            (S =
              this.playbackSpeed >= 0
                ? this.currentTime >= n
                : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && S));
          return (
            P &&
              v !== d.B &&
              (T.value = (0, m.X)(h, this.options, y, this.speed)),
            g && g(T.value),
            P && this.finish(),
            T
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
    26211: (t, e, i) => {
      "use strict";
      i.d(e, { B: () => s });
      var n = i(95158),
        r = i(82076);
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
        restDelta: d = 0.5,
        restSpeed: c,
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
          w = f + x,
          b = void 0 === l ? w : l(w);
        b !== w && (x = b - f);
        let A = (t) => -x * Math.exp(-t / s),
          T = (t) => b + A(t),
          S = (t) => {
            let e = A(t),
              i = T(t);
            ((v.done = Math.abs(e) <= d), (v.value = v.done ? b : i));
          },
          P = (t) => {
            g(v.value) &&
              ((p = t),
              (m = (0, n.o)({
                keyframes: [v.value, y(v.value)],
                velocity: (0, r.Y)(T, t, v.value),
                damping: a,
                stiffness: o,
                restDelta: d,
                restSpeed: c,
              })));
          };
        return (
          P(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (m || void 0 !== p || ((e = !0), S(t), P(t)),
              void 0 !== p && t >= p)
                ? m.next(t - p)
                : (e || S(t), v);
            },
          }
        );
      }
    },
    2642: (t, e, i) => {
      "use strict";
      i.d(e, { i: () => w });
      var n = i(40738);
      let r = (0, n.A)(0.42, 0, 1, 1),
        s = (0, n.A)(0, 0, 0.58, 1),
        a = (0, n.A)(0.42, 0, 0.58, 1),
        o = (t) => Array.isArray(t) && "number" != typeof t[0];
      var l = i(33967),
        u = i(43362),
        h = i(93628),
        d = i(41545),
        c = i(68189),
        p = i(60232);
      let m = {
          linear: u.l,
          easeIn: r,
          easeInOut: a,
          easeOut: s,
          circIn: c.po,
          circInOut: c.tn,
          circOut: c.yT,
          backIn: d.dg,
          backInOut: d.ZZ,
          backOut: d.Sz,
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
      var g = i(89022),
        y = i(98899),
        x = i(73619);
      function w({
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
    95158: (t, e, i) => {
      "use strict";
      i.d(e, { o: () => m });
      var n = i(90607),
        r = i(35686),
        s = i(13084),
        a = i(8867),
        o = i(82076);
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
      var u = i(33967);
      function h(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let d = ["duration", "bounce"],
        c = ["stiffness", "damping", "mass"];
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
          w = { done: !1, value: y },
          {
            stiffness: b,
            damping: A,
            mass: T,
            duration: S,
            velocity: P,
            isResolvedFromDuration: E,
          } = (function (t) {
            let e = {
              velocity: l.velocity,
              stiffness: l.stiffness,
              damping: l.damping,
              mass: l.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!p(t, c) && p(t, d)) {
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
                  let d = 1 - e;
                  ((d = (0, n.q)(l.minDamping, l.maxDamping, d)),
                    (t = (0, n.q)(l.minDuration, l.maxDuration, (0, r.X)(t))),
                    d < 1
                      ? ((a = (e) => {
                          let n = e * d,
                            r = n * t;
                          return 0.001 - ((n - i) / h(e, d)) * Math.exp(-r);
                        }),
                        (o = (e) => {
                          let n = e * d * t,
                            r = Math.pow(d, 2) * Math.pow(e, 2) * t,
                            s = Math.exp(-n),
                            o = h(Math.pow(e, 2), d);
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
                  let c = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(a, o, 5 / t);
                  if (((t = (0, r.f)(t)), isNaN(c)))
                    return {
                      stiffness: l.stiffness,
                      damping: l.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(c, 2) * s;
                    return {
                      stiffness: e,
                      damping: 2 * d * Math.sqrt(s * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: l.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...f, velocity: -(0, r.X)(f.velocity || 0) }),
          M = P || 0,
          V = A / (2 * Math.sqrt(b * T)),
          k = x - y,
          C = (0, r.X)(Math.sqrt(b / T)),
          D = 5 > Math.abs(k);
        if (
          (v || (v = D ? l.restSpeed.granular : l.restSpeed.default),
          g || (g = D ? l.restDelta.granular : l.restDelta.default),
          V < 1)
        ) {
          let t = h(C, V);
          i = (e) =>
            x -
            Math.exp(-V * C * e) *
              (((M + V * C * k) / t) * Math.sin(t * e) + k * Math.cos(t * e));
        } else if (1 === V)
          i = (t) => x - Math.exp(-C * t) * (k + (M + C * k) * t);
        else {
          let t = C * Math.sqrt(V * V - 1);
          i = (e) => {
            let i = Math.exp(-V * C * e),
              n = Math.min(t * e, 300);
            return (
              x -
              (i * ((M + V * C * k) * Math.sinh(n) + t * k * Math.cosh(n))) / t
            );
          };
        }
        let R = {
          calculatedDuration: (E && S) || null,
          next: (t) => {
            let e = i(t);
            if (E) w.done = t >= S;
            else {
              let n = 0 === t ? M : 0;
              V < 1 && (n = 0 === t ? (0, r.f)(M) : (0, o.Y)(i, t, e));
              let s = Math.abs(n) <= v,
                a = Math.abs(x - e) <= g;
              w.done = s && a;
            }
            return ((w.value = w.done ? x : e), w);
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
    8867: (t, e, i) => {
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
    82076: (t, e, i) => {
      "use strict";
      i.d(e, { Y: () => r });
      var n = i(29290);
      function r(t, e, i) {
        let r = Math.max(e - 5, 0);
        return (0, n.f)(i - t(r), e - r);
      }
    },
    22787: (t, e, i) => {
      "use strict";
      i.d(e, { X: () => r });
      let n = (t) => null !== t;
      function r(t, { repeat: e, repeatType: i = "loop" }, s, a = 1) {
        let o = t.filter(n),
          l = a < 0 || (e && "loop" !== i && e % 2 == 1) ? 0 : o.length - 1;
        return l && void 0 !== s ? s : o[l];
      }
    },
    1383: (t, e, i) => {
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
    10895: (t, e, i) => {
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
    94013: (t, e, i) => {
      "use strict";
      i.d(e, { E: () => o });
      var n = i(26211),
        r = i(2642),
        s = i(95158);
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
    13084: (t, e, i) => {
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
    56131: (t, e, i) => {
      "use strict";
      i.d(e, { I: () => a });
      var n = i(65722);
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
      var s = i(19381);
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
                  (o.has(e) && (d.schedule(e), t()), u++, e(l));
                }
                let d = {
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
                      a && ((a = !1), d.process(t)));
                  },
                };
                return d;
              })(l, e ? i : void 0)),
              t
            ),
            {},
          ),
          {
            setup: h,
            read: d,
            resolveKeyframes: c,
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
              d.process(o),
              c.process(o),
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
    60330: (t, e, i) => {
      "use strict";
      i.d(e, { Gt: () => r, PP: () => o, WG: () => s, uv: () => a });
      var n = i(43362);
      let {
        schedule: r,
        cancel: s,
        state: a,
        steps: o,
      } = (0, i(56131).I)(
        "undefined" != typeof requestAnimationFrame
          ? requestAnimationFrame
          : n.l,
        !0,
      );
    },
    50560: (t, e, i) => {
      "use strict";
      let n;
      i.d(e, { k: () => o });
      var r = i(65722),
        s = i(60330);
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
    15749: (t, e, i) => {
      "use strict";
      i.d(e, { q: () => n });
      let n = { layout: 0, mainThread: 0, waapi: 0 };
    },
    19381: (t, e, i) => {
      "use strict";
      i.d(e, { Q: () => n });
      let n = { value: null, addProjectionMetrics: null };
    },
    89022: (t, e, i) => {
      "use strict";
      i.d(e, { G: () => h });
      var n = i(65722),
        r = i(43362),
        s = i(26190),
        a = i(33967),
        o = i(98899),
        l = i(90607),
        u = i(56944);
      function h(t, e, { clamp: i = !0, ease: d, mixer: c } = {}) {
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
          })(e, d, c),
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
    45342: (t, e, i) => {
      "use strict";
      i.d(e, { s: () => r });
      var n = i(70094);
      function r(t) {
        return (0, n.G)(t) && "offsetHeight" in t;
      }
    },
    56944: (t, e, i) => {
      "use strict";
      i.d(e, { j: () => P });
      var n = i(26190),
        r = i(33967),
        s = i(10895),
        a = i(19117),
        o = i(140),
        l = i(7422),
        u = i(25265);
      function h(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
            ? e
            : i < 2 / 3
              ? t + (e - t) * (2 / 3 - i) * 6
              : t;
      }
      var d = i(65525);
      function c(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      var p = i(73619);
      let m = (t, e, i) => {
          let n = t * t,
            r = i * (e * e - n) + n;
          return r < 0 ? 0 : Math.sqrt(r);
        },
        f = [l.u, d.B, u.V],
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
          if (!i || !n) return c(t, e);
          let r = { ...i };
          return (t) => (
            (r.red = m(i.red, n.red, t)),
            (r.green = m(i.green, n.green, t)),
            (r.blue = m(i.blue, n.blue, t)),
            (r.alpha = (0, p.k)(i.alpha, n.alpha, t)),
            d.B.transform(r)
          );
        },
        x = new Set(["none", "hidden"]);
      function w(t, e) {
        return (i) => (0, p.k)(t, e, i);
      }
      function b(t) {
        return "number" == typeof t
          ? w
          : "string" == typeof t
            ? (0, s.pG)(t)
              ? c
              : a.y.test(t)
                ? y
                : S
            : Array.isArray(t)
              ? A
              : "object" == typeof t
                ? a.y.test(t)
                  ? y
                  : T
                : c;
      }
      function A(t, e) {
        let i = [...t],
          n = i.length,
          r = t.map((t, i) => b(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = r[e](t);
          return i;
        };
      }
      function T(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let r in i)
          void 0 !== t[r] && void 0 !== e[r] && (n[r] = b(t[r])(t[r], e[r]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let S = (t, e) => {
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
                A(
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
            c(t, e));
      };
      function P(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? (0, p.k)(t, e, i)
          : b(t)(t, e);
      }
    },
    73619: (t, e, i) => {
      "use strict";
      i.d(e, { k: () => n });
      let n = (t, e, i) => t + (e - t) * i;
    },
    21547: (t, e, i) => {
      "use strict";
      i.d(e, { OQ: () => h, bt: () => l });
      var n = i(13891),
        r = i(29290),
        s = i(50560),
        a = i(60330);
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
    7422: (t, e, i) => {
      "use strict";
      i.d(e, { u: () => r });
      var n = i(65525);
      let r = {
        test: (0, i(81648).$)("#"),
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
    25265: (t, e, i) => {
      "use strict";
      i.d(e, { V: () => o });
      var n = i(53942),
        r = i(3983),
        s = i(58160),
        a = i(81648);
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
    19117: (t, e, i) => {
      "use strict";
      i.d(e, { y: () => a });
      var n = i(7422),
        r = i(25265),
        s = i(65525);
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
    65525: (t, e, i) => {
      "use strict";
      i.d(e, { B: () => u });
      var n = i(90607),
        r = i(53942),
        s = i(58160),
        a = i(81648);
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
    81648: (t, e, i) => {
      "use strict";
      i.d(e, { $: () => s, q: () => a });
      var n = i(28263);
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
    140: (t, e, i) => {
      "use strict";
      i.d(e, { V: () => h, f: () => m });
      var n = i(19117);
      let r =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
      var s = i(28263),
        a = i(58160);
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
      function d(t) {
        return h(t).values;
      }
      function c(t) {
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
          parse: d,
          createTransformer: c,
          getAnimatableNone: function (t) {
            let e = d(t);
            return c(t)(e.map(p));
          },
        };
    },
    53942: (t, e, i) => {
      "use strict";
      i.d(e, { X4: () => s, ai: () => r, hs: () => a });
      var n = i(90607);
      let r = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...r, transform: (t) => (0, n.q)(0, 1, t) },
        a = { ...r, default: 1 };
    },
    3983: (t, e, i) => {
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
    28263: (t, e, i) => {
      "use strict";
      i.d(e, { S: () => n });
      let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    },
    58160: (t, e, i) => {
      "use strict";
      i.d(e, { a: () => n });
      let n = (t) => Math.round(1e5 * t) / 1e5;
    },
    8882: (t, e, i) => {
      "use strict";
      i.d(e, { S: () => n });
      let n = (t) => !!(t && t.getVelocity);
    },
    70625: (t, e, i) => {
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
    90607: (t, e, i) => {
      "use strict";
      i.d(e, { q: () => n });
      let n = (t, e, i) => (i > e ? e : i < t ? t : i);
    },
    93628: (t, e, i) => {
      "use strict";
      i.d(e, { b: () => r });
      var n = i(41545);
      let r = (t) =>
        (t *= 2) < 1
          ? 0.5 * (0, n.dg)(t)
          : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
    },
    41545: (t, e, i) => {
      "use strict";
      i.d(e, { Sz: () => a, ZZ: () => l, dg: () => o });
      var n = i(40738),
        r = i(53376),
        s = i(92985);
      let a = (0, n.A)(0.33, 1.53, 0.69, 0.99),
        o = (0, s.G)(a),
        l = (0, r.V)(o);
    },
    68189: (t, e, i) => {
      "use strict";
      i.d(e, { po: () => s, tn: () => o, yT: () => a });
      var n = i(53376),
        r = i(92985);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        a = (0, r.G)(s),
        o = (0, n.V)(s);
    },
    40738: (t, e, i) => {
      "use strict";
      i.d(e, { A: () => s });
      var n = i(43362);
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
    53376: (t, e, i) => {
      "use strict";
      i.d(e, { V: () => n });
      let n = (t) => (e) =>
        e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    92985: (t, e, i) => {
      "use strict";
      i.d(e, { G: () => n });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    60232: (t, e, i) => {
      "use strict";
      i.d(e, { D: () => n });
      let n = (t) => Array.isArray(t) && "number" == typeof t[0];
    },
    33967: (t, e, i) => {
      "use strict";
      i.d(e, { $: () => n, V: () => r });
      let n = () => {},
        r = () => {};
    },
    65722: (t, e, i) => {
      "use strict";
      i.d(e, { W: () => n });
      let n = {};
    },
    70094: (t, e, i) => {
      "use strict";
      function n(t) {
        return "object" == typeof t && null !== t;
      }
      i.d(e, { G: () => n });
    },
    43362: (t, e, i) => {
      "use strict";
      i.d(e, { l: () => n });
      let n = (t) => t;
    },
    26190: (t, e, i) => {
      "use strict";
      i.d(e, { F: () => r });
      let n = (t, e) => (i) => e(t(i)),
        r = (...t) => t.reduce(n);
    },
    98899: (t, e, i) => {
      "use strict";
      i.d(e, { q: () => n });
      let n = (t, e, i) => {
        let n = e - t;
        return 0 === n ? 1 : (i - t) / n;
      };
    },
    13891: (t, e, i) => {
      "use strict";
      i.d(e, { v: () => r });
      var n = i(70625);
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
    35686: (t, e, i) => {
      "use strict";
      i.d(e, { X: () => r, f: () => n });
      let n = (t) => 1e3 * t,
        r = (t) => t / 1e3;
    },
    29290: (t, e, i) => {
      "use strict";
      function n(t, e) {
        return e ? (1e3 / e) * t : 0;
      }
      i.d(e, { f: () => n });
    },
  }));
