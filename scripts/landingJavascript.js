!function (a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto) }(function (a) { var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function () { }, u = !!window.jQuery, v = a(window), w = function (a, c) { b.ev.on(o + a + p, c) }, x = function (b, c, d, e) { var f = document.createElement("div"); return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f }, y = function (c, d) { b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d])) }, z = function (c) { return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn }, A = function () { a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b) }, B = function () { var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"]; if (void 0 !== a.transition) return !0; for (; b.length;) if (b.pop() + "Transition" in a) return !0; return !1 }; t.prototype = { constructor: t, init: function () { var c = navigator.appVersion; b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {} }, open: function (c) { var e; if (c.isObj === !1) { b.items = c.items.toArray(), b.index = 0; var g, h = c.items; for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) { b.index = e; break } } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0; if (b.isOpen) return void b.updateItemHTML(); b.types = [], f = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () { b.close() }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) { b._checkIfClose(a.target) && b.close() }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading)); var i = a.magnificPopup.modules; for (e = 0; e < i.length; e++) { var j = i[e]; j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b) } y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) { c.close_replaceWith = z(d.type) }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? { overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY } : { top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) { 27 === a.keyCode && b.close() }), v.on("resize" + p, function () { b.updateSize() }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f); var k = b.wH = v.height(), n = {}; if (b.fixedContentPos && b._hasScrollBar(k)) { var o = b._getScrollbarSize(); o && (n.marginRight = o) } b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden"); var r = b.st.mainClass; return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () { b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn) }, 16), b.isOpen = !0, b.updateSize(k), y(m), c }, close: function () { b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () { b._close() }, b.st.removalDelay)) : b._close()) }, _close: function () { y(h); var c = r + " " + q + " "; if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) { var e = { marginRight: "" }; b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e) } d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j) }, updateSize: function (a) { if (b.isIOS) { var c = document.documentElement.clientWidth / window.innerWidth, d = window.innerHeight * c; b.wrap.css("height", d), b.wH = d } else b.wH = a || v.height(); b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize") }, updateItemHTML: function () { var c = b.items[b.index]; b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index)); var d = c.type; if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) { var f = b.st[d] ? b.st[d].markup : !1; y("FirstMarkupParse", f), b.currTemplate[d] = f ? a(f) : !0 } e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder"); var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]); b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange") }, appendContent: function (a, c) { b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content) }, parseEl: function (c) { var d, e = b.items[c]; if (e.tagName ? e = { el: a(e) } : (d = e.type, e = { data: e, src: e.src }), e.el) { for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) { d = f[g]; break } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href")) } return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c] }, addGroup: function (a, c) { var d = function (d) { d.mfpEl = this, b._openClick(d, a, c) }; c || (c = {}); var e = "click.magnificPopup"; c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d))) }, _openClick: function (c, d, e) { var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick; if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) { var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn; if (g) if (a.isFunction(g)) { if (!g.call(b)) return !0 } else if (v.width() < g) return !0; c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e) } }, updateStatus: function (a, d) { if (b.preloader) { c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading); var e = { status: a, text: d }; y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) { a.stopImmediatePropagation() }), b.container.addClass("mfp-s-" + a), c = a } }, _checkIfClose: function (c) { if (!a(c).hasClass(s)) { var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick; if (d && e) return !0; if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0; if (c === b.content[0] || a.contains(b.content[0], c)) { if (d) return !0 } else if (e && a.contains(document, c)) return !0; return !1 } }, _addClassToMFP: function (a) { b.bgOverlay.addClass(a), b.wrap.addClass(a) }, _removeClassFromMFP: function (a) { this.bgOverlay.removeClass(a), b.wrap.removeClass(a) }, _hasScrollBar: function (a) { return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height()) }, _setFocus: function () { (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus() }, _onFocusIn: function (c) { return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1) }, _parseMarkup: function (b, c, d) { var e; d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (a, c) { if (void 0 === c || c === !1) return !0; if (e = a.split("_"), e.length > 1) { var d = b.find(p + "-" + e[0]); if (d.length > 0) { var f = e[1]; "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c) } } else b.find(p + "-" + a).html(c) }) }, _getScrollbarSize: function () { if (void 0 === b.scrollbarSize) { var a = document.createElement("div"); a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a) } return b.scrollbarSize } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function (b, c) { return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b) }, close: function () { return a.magnificPopup.instance && a.magnificPopup.instance.close() }, registerModule: function (b, c) { c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b) }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, a.fn.magnificPopup = function (c) { A(); var d = a(this); if ("string" == typeof c) if ("open" === c) { var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup, g = parseInt(arguments[1], 10) || 0; f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({ mfpEl: e }, d, f) } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c); return d }; var C, D, E, F = "inline", G = function () { E && (D.after(E.addClass(C)).detach(), E = null) }; a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () { b.types.push(F), w(h + "." + F, function () { G() }) }, getInline: function (c, d) { if (G(), c.src) { var e = b.st.inline, f = a(c.src); if (f.length) { var g = f[0].parentNode; g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready") } else b.updateStatus("error", e.tNotFound), f = a("<div>"); return c.inlineElement = f, f } return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d } } }); var H, I = "ajax", J = function () { H && a(document.body).removeClass(H) }, K = function () { J(), b.req && b.req.abort() }; a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () { b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K) }, getAjax: function (c) { H && a(document.body).addClass(H), b.updateStatus("loading"); var d = a.extend({ url: c.src, success: function (d, e, f) { var g = { data: d, xhr: f }; y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () { b.wrap.addClass(q) }, 16), b.updateStatus("ready"), y("AjaxContentAdded") }, error: function () { J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src)) } }, b.st.ajax.settings); return b.req = a.ajax(d), "" } } }); var L, M = function (c) { if (c.data && void 0 !== c.data.title) return c.data.title; var d = b.st.image.titleSrc; if (d) { if (a.isFunction(d)) return d.call(b, c); if (c.el) return c.el.attr(d) || "" } return "" }; a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () { var c = b.st.image, d = ".image"; b.types.push("image"), w(m + d, function () { "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor) }), w(h + d, function () { c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p) }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage) }, resizeImage: function () { var a = b.currItem; if (a && a.img && b.st.image.verticalFit) { var c = 0; b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c) } }, _onImageHasSize: function (a) { a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1)) }, findImageSize: function (a) { var c = 0, d = a.img[0], e = function (f) { L && clearInterval(L), L = setInterval(function () { return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500))) }, f) }; e(1) }, getImage: function (c, d) { var e = 0, f = function () { c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g())) }, g = function () { c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0) }, h = b.st.image, i = d.find(".mfp-img"); if (i.length) { var j = document.createElement("img"); j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1) } return b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d) } } }); var N, O = function () { return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N }; a.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (a) { return a.is("img") ? a : a.find("img") } }, proto: { initZoom: function () { var a, c = b.st.zoom, d = ".zoom"; if (c.enabled && b.supportsTransition) { var e, f, g = c.duration, j = function (a) { var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d = "all " + c.duration / 1e3 + "s " + c.easing, e = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f = "transition"; return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b }, k = function () { b.content.css("visibility", "visible") }; w("BuildControls" + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k(); f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () { f.css(b._getOffset(!0)), e = setTimeout(function () { k(), setTimeout(function () { f.remove(), a = f = null, y("ZoomAnimationEnded") }, 16) }, g) }, 16) } }), w(i + d, function () { if (b._allowZoom()) { if (clearTimeout(e), b.st.removalDelay = g, !a) { if (a = b._getItemToZoom(), !a) return; f = j(a) } f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () { f.css(b._getOffset()) }, 16) } }), w(h + d, function () { b._allowZoom() && (k(), f && f.remove(), a = null) }) } }, _allowZoom: function () { return "image" === b.currItem.type }, _getItemToZoom: function () { return b.currItem.hasSize ? b.currItem.img : !1 }, _getOffset: function (c) { var d; d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem); var e = d.offset(), f = parseInt(d.css("padding-top"), 10), g = parseInt(d.css("padding-bottom"), 10); e.top -= a(window).scrollTop() - f; var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f }; return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h } } }); var P = "iframe", Q = "//about:blank", R = function (a) { if (b.currTemplate[P]) { var c = b.currTemplate[P].find("iframe"); c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none")) } }; a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () { b.types.push(P), w("BeforeChange", function (a, b, c) { b !== c && (b === P ? R() : c === P && R(!0)) }), w(h + "." + P, function () { R() }) }, getIframe: function (c, d) { var e = c.src, f = b.st.iframe; a.each(f.patterns, function () { return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0 }); var g = {}; return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d } } }); var S = function (a) { var c = b.items.length; return a > c - 1 ? a - c : 0 > a ? c + a : a }, T = function (a, b, c) { return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c) }; a.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () { var c = b.st.gallery, e = ".mfp-gallery", g = Boolean(a.fn.mfpFastClick); return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () { c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () { return b.items.length > 1 ? (b.next(), !1) : void 0 }), d.on("keydown" + e, function (a) { 37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next() }) }), w("UpdateStatus" + e, function (a, c) { c.text && (c.text = T(c.text, b.currItem.index, b.items.length)) }), w(l + e, function (a, d, e, f) { var g = b.items.length; e.counter = g > 1 ? T(c.tCounter, f.index, g) : "" }), w("BuildControls" + e, function () { if (b.items.length > 1 && c.arrows && !b.arrowLeft) { var d = c.arrowMarkup, e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s), f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s), h = g ? "mfpFastClick" : "click"; e[h](function () { b.prev() }), f[h](function () { b.next() }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f)) } }), w(n + e, function () { b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () { b.preloadNearbyImages(), b._preloadTimeout = null }, 16) }), void w(h + e, function () { d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null })) : !1 }, next: function () { b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML() }, prev: function () { b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML() }, goTo: function (a) { b.direction = a >= b.index, b.index = a, b.updateItemHTML() }, preloadNearbyImages: function () { var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length), e = Math.min(c[1], b.items.length); for (a = 1; a <= (b.direction ? e : d) ; a++) b._preloadItem(b.index + a); for (a = 1; a <= (b.direction ? d : e) ; a++) b._preloadItem(b.index - a) }, _preloadItem: function (c) { if (c = S(c), !b.items[c].preloaded) { var d = b.items[c]; d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () { d.hasSize = !0 }).on("error.mfploader", function () { d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d) }).attr("src", d.src)), d.preloaded = !0 } } } }); var U = "retina"; a.magnificPopup.registerModule(U, { options: { replaceSrc: function (a) { return a.src.replace(/\.\w+$/, function (a) { return "@2x" + a }) }, ratio: 1 }, proto: { initRetina: function () { if (window.devicePixelRatio > 1) { var a = b.st.retina, c = a.ratio; c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) { b.img.css({ "max-width": b.img[0].naturalWidth / c, width: "100%" }) }), w("ElementParse." + U, function (b, d) { d.src = a.replaceSrc(d, c) })) } } } }), function () { var b = 1e3, c = "ontouchstart" in window, d = function () { v.off("touchmove" + f + " touchend" + f) }, e = "mfpFastClick", f = "." + e; a.fn.mfpFastClick = function (e) { return a(this).each(function () { var g, h = a(this); if (c) { var i, j, k, l, m, n; h.on("touchstart" + f, function (a) { l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function (a) { m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d()) }).on("touchend" + f, function (a) { d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () { g = !1 }, b), e()) }) }) } h.on("click" + f, function () { g || e() }) }) }, a.fn.destroyMfpFastClick = function () { a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f) } }(), A() });

; (function ($, window, document, undefined) {

    // our plugin constructor
    var OnePageNav = function (elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data('plugin-options');
        this.$nav = this.$elem.find('a');
        this.$win = $(window);
        this.sections = {};
        this.didScroll = false;
        this.$doc = $(document);
        this.docHeight = this.$doc.height();
    };

    // the plugin prototype
    OnePageNav.prototype = {
        defaults: {
            currentClass: 'current',
            changeHash: false,
            easing: 'swing',
            filter: '',
            scrollSpeed: 750,
            scrollOffset: 0,
            scrollThreshold: 0.5,
            begin: false,
            end: false,
            scrollChange: false
        },

        init: function () {
            var self = this;

            // Introduce defaults that can be extended either
            // globally or using an object literal.
            self.config = $.extend({}, self.defaults, self.options, self.metadata);

            //Filter any links out of the nav
            if (self.config.filter !== '') {
                self.$nav = self.$nav.filter(self.config.filter);
            }

            //Handle clicks on the nav
            self.$nav.on('click.onePageNav', $.proxy(self.handleClick, self));

            //Get the section positions
            self.getPositions();

            //Handle scroll changes
            self.bindInterval();

            //Update the positions on resize too
            self.$win.on('resize.onePageNav', $.proxy(self.getPositions, self));

            return this;
        },

        adjustNav: function (self, $parent) {
            self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
            $parent.addClass(self.config.currentClass);
        },

        bindInterval: function () {
            var self = this;
            var docHeight;

            self.$win.on('scroll.onePageNav', function () {
                self.didScroll = true;
            });

            self.t = setInterval(function () {
                docHeight = self.$doc.height();

                //If it was scrolled
                if (self.didScroll) {
                    self.didScroll = false;
                    self.scrollChange();
                }

                //If the document height changes
                if (docHeight !== self.docHeight) {
                    self.docHeight = docHeight;
                    self.getPositions();
                }
            }, 250);
        },

        getHash: function ($link) {
            return $link.attr('href').split('#')[1];
        },

        getPositions: function () {
            var self = this;
            var linkHref;
            var topPos;
            var $target;

            self.$nav.each(function () {
                linkHref = self.getHash($(this));
                $target = $('#' + linkHref);

                if ($target.length) {
                    topPos = $target.offset().top;
                    self.sections[linkHref] = Math.round(topPos) - self.config.scrollOffset;
                }
            });
        },

        getSection: function (windowPos) {
            var returnValue = null;
            var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

            for (var section in this.sections) {
                if ((this.sections[section] - windowHeight) < windowPos) {
                    returnValue = section;
                }
            }

            return returnValue;
        },

        handleClick: function (e) {
            var self = this;
            var $link = $(e.currentTarget);
            var $parent = $link.parent();
            var newLoc = '#' + self.getHash($link);

            if (!$parent.hasClass(self.config.currentClass)) {
                //Start callback
                if (self.config.begin) {
                    self.config.begin();
                }

                //Change the highlighted nav item
                self.adjustNav(self, $parent);

                //Removing the auto-adjust on scroll
                self.unbindInterval();

                //Scroll to the correct position
                $.scrollTo(newLoc, self.config.scrollSpeed, {
                    axis: 'y',
                    easing: self.config.easing,
                    offset: {
                        top: -self.config.scrollOffset
                    },
                    onAfter: function () {
                        //Do we need to change the hash?
                        if (self.config.changeHash) {
                            window.location.hash = newLoc;
                        }

                        //Add the auto-adjust on scroll back in
                        self.bindInterval();

                        //End callback
                        if (self.config.end) {
                            self.config.end();
                        }
                    }
                });
            }

            e.preventDefault();
        },

        scrollChange: function () {
            var windowTop = this.$win.scrollTop();
            var position = this.getSection(windowTop);
            var $parent;

            //If the position is set
            if (position !== null) {
                $parent = this.$elem.find('a[href$="#' + position + '"]').parent();

                //If it's not already the current section
                if (!$parent.hasClass(this.config.currentClass)) {
                    //Change the highlighted nav item
                    this.adjustNav(this, $parent);

                    //If there is a scrollChange callback
                    if (this.config.scrollChange) {
                        this.config.scrollChange($parent);
                    }
                }
            }
        },

        unbindInterval: function () {
            clearInterval(this.t);
            this.$win.unbind('scroll.onePageNav');
        }
    };

    OnePageNav.defaults = OnePageNav.prototype.defaults;

    $.fn.onePageNav = function (options) {
        return this.each(function () {
            new OnePageNav(this, options).init();
        });
    };

})(jQuery, window, document);

; (function (f) { "use strict"; "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery) })(function ($) { "use strict"; function n(a) { return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]) } function h(a) { return $.isFunction(a) || $.isPlainObject(a) ? a : { top: a, left: a } } var p = $.scrollTo = function (a, d, b) { return $(window).scrollTo(a, d, b) }; p.defaults = { axis: "xy", duration: 0, limit: !0 }; $.fn.scrollTo = function (a, d, b) { "object" === typeof d && (b = d, d = 0); "function" === typeof b && (b = { onAfter: b }); "max" === a && (a = 9E9); b = $.extend({}, p.defaults, b); d = d || b.duration; var u = b.queue && 1 < b.axis.length; u && (d /= 2); b.offset = h(b.offset); b.over = h(b.over); return this.each(function () { function k(a) { var k = $.extend({}, b, { queue: !0, duration: d, complete: a && function () { a.call(q, e, b) } }); r.animate(f, k) } if (null !== a) { var l = n(this), q = l ? this.contentWindow || window : this, r = $(q), e = a, f = {}, t; switch (typeof e) { case "number": case "string": if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) { e = h(e); break } e = l ? $(e) : $(e, q); if (!e.length) return; case "object": if (e.is || e.style) t = (e = $(e)).offset() } var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset; $.each(b.axis.split(""), function (a, c) { var d = "x" === c ? "Left" : "Top", m = d.toLowerCase(), g = "scroll" + d, h = r[g](), n = p.max(q, c); t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d); b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n)); !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {})) }); k(b.onAfter) } }) }; p.max = function (a, d) { var b = "x" === d ? "Width" : "Height", h = "scroll" + b; if (!n(a)) return a[h] - $(a)[b.toLowerCase()](); var b = "client" + b, k = a.ownerDocument || a.document, l = k.documentElement, k = k.body; return Math.max(l[h], k[h]) - Math.min(l[b], k[b]) }; $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = { get: function (a) { return $(a.elem)[a.prop]() }, set: function (a) { var d = this.get(a); if (a.options.interrupt && a._last && a._last !== d) return $(a.elem).stop(); var b = Math.round(a.now); d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a)) } }; return p });

(function () {

    // Scroll Variables (tweakable)
    var defaultOptions = {

        // Scrolling Core
        frameRate: 150, // [Hz]
        animationTime: 400, // [ms]
        stepSize: 100, // [px]

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,

        // Acceleration
        accelerationDelta: 50,  // 50
        accelerationMax: 3,   // 3

        // Keyboard Settings
        keyboardSupport: true,  // option
        arrowScroll: 50,    // [px]

        // Other
        touchpadSupport: false, // ignore touchpad by default
        fixedBackground: true,
        excluded: ''
    };

    var options = defaultOptions;


    // Other Variables
    var isExcluded = false;
    var isFrame = false;
    var direction = { x: 0, y: 0 };
    var initDone = false;
    var root = document.documentElement;
    var activeElement;
    var observer;
    var refreshSize;
    var deltaBuffer = [];
    var isMac = /^Mac/.test(navigator.platform);

    var key = {
        left: 37, up: 38, right: 39, down: 40, spacebar: 32,
        pageup: 33, pagedown: 34, end: 35, home: 36
    };

    function initTest() {
        if (options.keyboardSupport) {
            addEvent('keydown', keydown);
        }
    }

    function init() {

        if (initDone || !document.body) return;

        initDone = true;

        var body = document.body;
        var html = document.documentElement;
        var windowHeight = window.innerHeight;
        var scrollHeight = body.scrollHeight;

        // check compat mode for root element
        root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
        activeElement = body;

        initTest();

        // Checks if this script is running in a frame
        if (top != self) {
            isFrame = true;
        }

            /**
             * Please duplicate this radar for a Safari fix! 
             * rdar://22376037
             * https://openradar.appspot.com/radar?id=4965070979203072
             * 
             * Only applies to Safari now, Chrome fixed it in v45:
             * This fixes a bug where the areas left and right to 
             * the content does not trigger the onmousewheel event
             * on some pages. e.g.: html, body { height: 100% }
             */
        else if (scrollHeight > windowHeight &&
                (body.offsetHeight <= windowHeight ||
                 html.offsetHeight <= windowHeight)) {

            var fullPageElem = document.createElement('div');
            fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' +
                                         'top:0; left:0; right:0; height:' +
                                          root.scrollHeight + 'px';
            document.body.appendChild(fullPageElem);

            // DOM changed (throttled) to fix height
            var pendingRefresh;
            refreshSize = function () {
                if (pendingRefresh) return; // could also be: clearTimeout(pendingRefresh);
                pendingRefresh = setTimeout(function () {
                    if (isExcluded) return; // could be running after cleanup
                    fullPageElem.style.height = '0';
                    fullPageElem.style.height = root.scrollHeight + 'px';
                    pendingRefresh = null;
                }, 500); // act rarely to stay fast
            };

            setTimeout(refreshSize, 10);

            addEvent('resize', refreshSize);

            // TODO: attributeFilter?
            var config = {
                attributes: true,
                childList: true,
                characterData: false
                // subtree: true
            };

            observer = new MutationObserver(refreshSize);
            observer.observe(body, config);

            if (root.offsetHeight <= windowHeight) {
                var clearfix = document.createElement('div');
                clearfix.style.clear = 'both';
                body.appendChild(clearfix);
            }
        }

        // disable fixed background
        if (!options.fixedBackground && !isExcluded) {
            body.style.backgroundAttachment = 'scroll';
            html.style.backgroundAttachment = 'scroll';
        }
    }

    function cleanup() {
        observer && observer.disconnect();
        removeEvent(wheelEvent, wheel);
        removeEvent('mousedown', mousedown);
        removeEvent('keydown', keydown);
        removeEvent('resize', refreshSize);
        removeEvent('load', init);
    }

    var que = [];
    var pending = false;
    var lastScroll = Date.now();

    function scrollArray(elem, left, top) {

        directionCheck(left, top);

        if (options.accelerationMax != 1) {
            var now = Date.now();
            var elapsed = now - lastScroll;
            if (elapsed < options.accelerationDelta) {
                var factor = (1 + (50 / elapsed)) / 2;
                if (factor > 1) {
                    factor = Math.min(factor, options.accelerationMax);
                    left *= factor;
                    top *= factor;
                }
            }
            lastScroll = Date.now();
        }

        // push a scroll command
        que.push({
            x: left,
            y: top,
            lastX: (left < 0) ? 0.99 : -0.99,
            lastY: (top < 0) ? 0.99 : -0.99,
            start: Date.now()
        });

        // don't act if there's a pending queue
        if (pending) {
            return;
        }

        var scrollWindow = (elem === document.body);

        var step = function (time) {

            var now = Date.now();
            var scrollX = 0;
            var scrollY = 0;

            for (var i = 0; i < que.length; i++) {

                var item = que[i];
                var elapsed = now - item.start;
                var finished = (elapsed >= options.animationTime);

                // scroll position: [0, 1]
                var position = (finished) ? 1 : elapsed / options.animationTime;

                // easing [optional]
                if (options.pulseAlgorithm) {
                    position = pulse(position);
                }

                // only need the difference
                var x = (item.x * position - item.lastX) >> 0;
                var y = (item.y * position - item.lastY) >> 0;

                // add this to the total scrolling
                scrollX += x;
                scrollY += y;

                // update last values
                item.lastX += x;
                item.lastY += y;

                // delete and step back if it's over
                if (finished) {
                    que.splice(i, 1); i--;
                }
            }

            // scroll left and top
            if (scrollWindow) {
                window.scrollBy(scrollX, scrollY);
            }
            else {
                if (scrollX) elem.scrollLeft += scrollX;
                if (scrollY) elem.scrollTop += scrollY;
            }

            // clean up if there's nothing left to do
            if (!left && !top) {
                que = [];
            }

            if (que.length) {
                requestFrame(step, elem, (1000 / options.frameRate + 1));
            } else {
                pending = false;
            }
        };

        // start a new queue of actions
        requestFrame(step, elem, 0);
        pending = true;
    }

    function wheel(event) {

        if (!initDone) {
            init();
        }

        var target = event.target;
        var overflowing = overflowingAncestor(target);

        // use default if there's no overflowing
        // element or default action is prevented   
        // or it's a zooming event with CTRL 
        if (!overflowing || event.defaultPrevented || event.ctrlKey) {
            return true;
        }

        // leave embedded content alone (flash & pdf)
        if (isNodeName(activeElement, 'embed') ||
           (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
           isNodeName(activeElement, 'object')) {
            return true;
        }

        var deltaX = -event.wheelDeltaX || event.deltaX || 0;
        var deltaY = -event.wheelDeltaY || event.deltaY || 0;

        if (isMac) {
            if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
                deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
            }
            if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
                deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
            }
        }

        // use wheelDelta if deltaX/Y is not available
        if (!deltaX && !deltaY) {
            deltaY = -event.wheelDelta || 0;
        }

        // line based scrolling (Firefox mostly)
        if (event.deltaMode === 1) {
            deltaX *= 40;
            deltaY *= 40;
        }

        // check if it's a touchpad scroll that should be ignored
        if (!options.touchpadSupport && isTouchpad(deltaY)) {
            return true;
        }

        // scale by step size
        // delta is 120 most of the time
        // synaptics seems to send 1 sometimes
        if (Math.abs(deltaX) > 1.2) {
            deltaX *= options.stepSize / 120;
        }
        if (Math.abs(deltaY) > 1.2) {
            deltaY *= options.stepSize / 120;
        }

        scrollArray(overflowing, deltaX, deltaY);
        event.preventDefault();
        scheduleClearCache();
    }

    function keydown(event) {

        var target = event.target;
        var modifier = event.ctrlKey || event.altKey || event.metaKey ||
                      (event.shiftKey && event.keyCode !== key.spacebar);

        // our own tracked active element could've been removed from the DOM
        if (!document.contains(activeElement)) {
            activeElement = document.activeElement;
        }

        // do nothing if user is editing text
        // or using a modifier key (except shift)
        // or in a dropdown
        // or inside interactive elements
        var inputNodeNames = /^(textarea|select|embed|object)$/i;
        var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
        if (inputNodeNames.test(target.nodeName) ||
             isNodeName(target, 'input') && !buttonTypes.test(target.type) ||
             isNodeName(activeElement, 'video') ||
             isInsideYoutubeVideo(event) ||
             target.isContentEditable ||
             event.defaultPrevented ||
             modifier) {
            return true;
        }

        // spacebar should trigger button press
        if ((isNodeName(target, 'button') ||
             isNodeName(target, 'input') && buttonTypes.test(target.type)) &&
            event.keyCode === key.spacebar) {
            return true;
        }

        var shift, x = 0, y = 0;
        var elem = overflowingAncestor(activeElement);
        var clientHeight = elem.clientHeight;

        if (elem == document.body) {
            clientHeight = window.innerHeight;
        }

        switch (event.keyCode) {
            case key.up:
                y = -options.arrowScroll;
                break;
            case key.down:
                y = options.arrowScroll;
                break;
            case key.spacebar: // (+ shift)
                shift = event.shiftKey ? 1 : -1;
                y = -shift * clientHeight * 0.9;
                break;
            case key.pageup:
                y = -clientHeight * 0.9;
                break;
            case key.pagedown:
                y = clientHeight * 0.9;
                break;
            case key.home:
                y = -elem.scrollTop;
                break;
            case key.end:
                var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
                y = (damt > 0) ? damt + 10 : 0;
                break;
            case key.left:
                x = -options.arrowScroll;
                break;
            case key.right:
                x = options.arrowScroll;
                break;
            default:
                return true; // a key we don't care about
        }

        scrollArray(elem, x, y);
        event.preventDefault();
        scheduleClearCache();
    }
    function mousedown(event) {
        activeElement = event.target;
    }

    var uniqueID = (function () {
        var i = 0;
        return function (el) {
            return el.uniqueID || (el.uniqueID = i++);
        };
    })();

    var cache = {}; // cleared out after a scrolling session
    var clearCacheTimer;

    //setInterval(function () { cache = {}; }, 10 * 1000);

    function scheduleClearCache() {
        clearTimeout(clearCacheTimer);
        clearCacheTimer = setInterval(function () { cache = {}; }, 1 * 1000);
    }

    function setCache(elems, overflowing) {
        for (var i = elems.length; i--;)
            cache[uniqueID(elems[i])] = overflowing;
        return overflowing;
    }

    function overflowingAncestor(el) {
        var elems = [];
        var body = document.body;
        var rootScrollHeight = root.scrollHeight;
        do {
            var cached = cache[uniqueID(el)];
            if (cached) {
                return setCache(elems, cached);
            }
            elems.push(el);
            if (rootScrollHeight === el.scrollHeight) {
                var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
                var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
                if (isFrame && isContentOverflowing(root) ||
                   !isFrame && isOverflowCSS) {
                    return setCache(elems, getScrollRoot());
                }
            } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
                return setCache(elems, el);
            }
        } while (el = el.parentElement);
    }

    function isContentOverflowing(el) {
        return (el.clientHeight + 10 < el.scrollHeight);
    }

    function overflowNotHidden(el) {
        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
        return (overflow !== 'hidden');
    }

    function overflowAutoOrScroll(el) {
        var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
        return (overflow === 'scroll' || overflow === 'auto');
    }

    function addEvent(type, fn) {
        window.addEventListener(type, fn, false);
    }

    function removeEvent(type, fn) {
        window.removeEventListener(type, fn, false);
    }

    function isNodeName(el, tag) {
        return (el.nodeName || '').toLowerCase() === tag.toLowerCase();
    }

    function directionCheck(x, y) {
        x = (x > 0) ? 1 : -1;
        y = (y > 0) ? 1 : -1;
        if (direction.x !== x || direction.y !== y) {
            direction.x = x;
            direction.y = y;
            que = [];
            lastScroll = 0;
        }
    }

    var deltaBufferTimer;

    if (window.localStorage && localStorage.SS_deltaBuffer) {
        deltaBuffer = localStorage.SS_deltaBuffer.split(',');
    }

    function isTouchpad(deltaY) {
        if (!deltaY) return;
        if (!deltaBuffer.length) {
            deltaBuffer = [deltaY, deltaY, deltaY];
        }
        deltaY = Math.abs(deltaY)
        deltaBuffer.push(deltaY);
        deltaBuffer.shift();
        clearTimeout(deltaBufferTimer);
        deltaBufferTimer = setTimeout(function () {
            if (window.localStorage) {
                localStorage.SS_deltaBuffer = deltaBuffer.join(',');
            }
        }, 1000);
        return !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100);
    }

    function isDivisible(n, divisor) {
        return (Math.floor(n / divisor) == n / divisor);
    }

    function allDeltasDivisableBy(divisor) {
        return (isDivisible(deltaBuffer[0], divisor) &&
                isDivisible(deltaBuffer[1], divisor) &&
                isDivisible(deltaBuffer[2], divisor));
    }

    function isInsideYoutubeVideo(event) {
        var elem = event.target;
        var isControl = false;
        if (document.URL.indexOf('www.youtube.com/watch') != -1) {
            do {
                isControl = (elem.classList &&
                             elem.classList.contains('html5-video-controls'));
                if (isControl) break;
            } while (elem = elem.parentNode);
        }
        return isControl;
    }

    var requestFrame = (function () {
        return (window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                function (callback, element, delay) {
                    window.setTimeout(callback, delay || (1000 / 60));
                });
    })();

    var MutationObserver = (window.MutationObserver ||
                            window.WebKitMutationObserver ||
                            window.MozMutationObserver);

    var getScrollRoot = (function () {
        var SCROLL_ROOT;
        return function () {
            if (!SCROLL_ROOT) {
                var dummy = document.createElement('div');
                dummy.style.cssText = 'height:10000px;width:1px;';
                document.body.appendChild(dummy);
                var bodyScrollTop = document.body.scrollTop;
                var docElScrollTop = document.documentElement.scrollTop;
                window.scrollBy(0, 3);
                if (document.body.scrollTop != bodyScrollTop)
                    (SCROLL_ROOT = document.body);
                else 
        (SCROLL_ROOT = document.documentElement);
                window.scrollBy(0, -3);
                document.body.removeChild(dummy);
            }
            return SCROLL_ROOT;
        };
    })();

    function pulse_(x) {
        var val, start, expx;
        // test
        x = x * options.pulseScale;
        if (x < 1) { // acceleartion
            val = x - (1 - Math.exp(-x));
        } else {     // tail
            // the previous animation ended here:
            start = Math.exp(-1);
            // simple viscous drag
            x -= 1;
            expx = 1 - Math.exp(-x);
            val = start + (expx * (1 - start));
        }
        return val * options.pulseNormalize;
    }

    function pulse(x) {
        if (x >= 1) return 1;
        if (x <= 0) return 0;

        if (options.pulseNormalize == 1) {
            options.pulseNormalize /= pulse_(1);
        }
        return pulse_(x);
    }

    var userAgent = window.navigator.userAgent;
    var isEdge = /Edge/.test(userAgent); // thank you MS
    var isChrome = /chrome/i.test(userAgent) && !isEdge;
    var isSafari = /safari/i.test(userAgent) && !isEdge;
    var isMobile = /mobile/i.test(userAgent);
    var isEnabledForBrowser = (isChrome || isSafari) && !isMobile;

    var wheelEvent;
    if ('onwheel' in document.createElement('div'))
        wheelEvent = 'wheel';
    else if ('onmousewheel' in document.createElement('div'))
        wheelEvent = 'mousewheel';

    if (wheelEvent && isEnabledForBrowser) {
        addEvent(wheelEvent, wheel);
        addEvent('mousedown', mousedown);
        addEvent('load', init);
    }


    /***********************************************
     * PUBLIC INTERFACE
     ***********************************************/

    function SmoothScroll(optionsToSet) {
        for (var key in optionsToSet)
            if (defaultOptions.hasOwnProperty(key))
                options[key] = optionsToSet[key];
    }
    SmoothScroll.destroy = cleanup;

    if (window.SmoothScrollOptions) // async API
        SmoothScroll(window.SmoothScrollOptions)

    if (typeof define === 'function' && define.amd)
        define(function () {
            return SmoothScroll;
        });
    else if ('object' == typeof exports)
        module.exports = SmoothScroll;
    else
        window.SmoothScroll = SmoothScroll;

})();

(function () {
    var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
      bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; },
      indexOf = [].indexOf || function (item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

    Util = (function () {
        function Util() { }

        Util.prototype.extend = function (custom, defaults) {
            var key, value;
            for (key in defaults) {
                value = defaults[key];
                if (custom[key] == null) {
                    custom[key] = value;
                }
            }
            return custom;
        };

        Util.prototype.isMobile = function (agent) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
        };

        Util.prototype.createEvent = function (event, bubble, cancel, detail) {
            var customEvent;
            if (bubble == null) {
                bubble = false;
            }
            if (cancel == null) {
                cancel = false;
            }
            if (detail == null) {
                detail = null;
            }
            if (document.createEvent != null) {
                customEvent = document.createEvent('CustomEvent');
                customEvent.initCustomEvent(event, bubble, cancel, detail);
            } else if (document.createEventObject != null) {
                customEvent = document.createEventObject();
                customEvent.eventType = event;
            } else {
                customEvent.eventName = event;
            }
            return customEvent;
        };

        Util.prototype.emitEvent = function (elem, event) {
            if (elem.dispatchEvent != null) {
                return elem.dispatchEvent(event);
            } else if (event in (elem != null)) {
                return elem[event]();
            } else if (("on" + event) in (elem != null)) {
                return elem["on" + event]();
            }
        };

        Util.prototype.addEvent = function (elem, event, fn) {
            if (elem.addEventListener != null) {
                return elem.addEventListener(event, fn, false);
            } else if (elem.attachEvent != null) {
                return elem.attachEvent("on" + event, fn);
            } else {
                return elem[event] = fn;
            }
        };

        Util.prototype.removeEvent = function (elem, event, fn) {
            if (elem.removeEventListener != null) {
                return elem.removeEventListener(event, fn, false);
            } else if (elem.detachEvent != null) {
                return elem.detachEvent("on" + event, fn);
            } else {
                return delete elem[event];
            }
        };

        Util.prototype.innerHeight = function () {
            if ('innerHeight' in window) {
                return window.innerHeight;
            } else {
                return document.documentElement.clientHeight;
            }
        };

        return Util;

    })();

    WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function () {
        function WeakMap() {
            this.keys = [];
            this.values = [];
        }

        WeakMap.prototype.get = function (key) {
            var i, item, j, len, ref;
            ref = this.keys;
            for (i = j = 0, len = ref.length; j < len; i = ++j) {
                item = ref[i];
                if (item === key) {
                    return this.values[i];
                }
            }
        };

        WeakMap.prototype.set = function (key, value) {
            var i, item, j, len, ref;
            ref = this.keys;
            for (i = j = 0, len = ref.length; j < len; i = ++j) {
                item = ref[i];
                if (item === key) {
                    this.values[i] = value;
                    return;
                }
            }
            this.keys.push(key);
            return this.values.push(value);
        };

        return WeakMap;

    })());

    MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function () {
        function MutationObserver() {
            if (typeof console !== "undefined" && console !== null) {
                console.warn('MutationObserver is not supported by your browser.');
            }
            if (typeof console !== "undefined" && console !== null) {
                console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
            }
        }

        MutationObserver.notSupported = true;

        MutationObserver.prototype.observe = function () { };

        return MutationObserver;

    })());

    getComputedStyle = this.getComputedStyle || function (el, pseudo) {
        this.getPropertyValue = function (prop) {
            var ref;
            if (prop === 'float') {
                prop = 'styleFloat';
            }
            if (getComputedStyleRX.test(prop)) {
                prop.replace(getComputedStyleRX, function (_, _char) {
                    return _char.toUpperCase();
                });
            }
            return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
        };
        return this;
    };

    getComputedStyleRX = /(\-([a-z]){1})/g;

    this.WOW = (function () {
        WOW.prototype.defaults = {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: null,
            scrollContainer: null
        };

        function WOW(options) {
            if (options == null) {
                options = {};
            }
            this.scrollCallback = bind(this.scrollCallback, this);
            this.scrollHandler = bind(this.scrollHandler, this);
            this.resetAnimation = bind(this.resetAnimation, this);
            this.start = bind(this.start, this);
            this.scrolled = true;
            this.config = this.util().extend(options, this.defaults);
            if (options.scrollContainer != null) {
                this.config.scrollContainer = document.querySelector(options.scrollContainer);
            }
            this.animationNameCache = new WeakMap();
            this.wowEvent = this.util().createEvent(this.config.boxClass);
        }

        WOW.prototype.init = function () {
            var ref;
            this.element = window.document.documentElement;
            if ((ref = document.readyState) === "interactive" || ref === "complete") {
                this.start();
            } else {
                this.util().addEvent(document, 'DOMContentLoaded', this.start);
            }
            return this.finished = [];
        };

        WOW.prototype.start = function () {
            var box, j, len, ref;
            this.stopped = false;
            this.boxes = (function () {
                var j, len, ref, results;
                ref = this.element.querySelectorAll("." + this.config.boxClass);
                results = [];
                for (j = 0, len = ref.length; j < len; j++) {
                    box = ref[j];
                    results.push(box);
                }
                return results;
            }).call(this);
            this.all = (function () {
                var j, len, ref, results;
                ref = this.boxes;
                results = [];
                for (j = 0, len = ref.length; j < len; j++) {
                    box = ref[j];
                    results.push(box);
                }
                return results;
            }).call(this);
            if (this.boxes.length) {
                if (this.disabled()) {
                    this.resetStyle();
                } else {
                    ref = this.boxes;
                    for (j = 0, len = ref.length; j < len; j++) {
                        box = ref[j];
                        this.applyStyle(box, true);
                    }
                }
            }
            if (!this.disabled()) {
                this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
                this.util().addEvent(window, 'resize', this.scrollHandler);
                this.interval = setInterval(this.scrollCallback, 50);
            }
            if (this.config.live) {
                return new MutationObserver((function (_this) {
                    return function (records) {
                        var k, len1, node, record, results;
                        results = [];
                        for (k = 0, len1 = records.length; k < len1; k++) {
                            record = records[k];
                            results.push((function () {
                                var l, len2, ref1, results1;
                                ref1 = record.addedNodes || [];
                                results1 = [];
                                for (l = 0, len2 = ref1.length; l < len2; l++) {
                                    node = ref1[l];
                                    results1.push(this.doSync(node));
                                }
                                return results1;
                            }).call(_this));
                        }
                        return results;
                    };
                })(this)).observe(document.body, {
                    childList: true,
                    subtree: true
                });
            }
        };

        WOW.prototype.stop = function () {
            this.stopped = true;
            this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
            this.util().removeEvent(window, 'resize', this.scrollHandler);
            if (this.interval != null) {
                return clearInterval(this.interval);
            }
        };

        WOW.prototype.sync = function (element) {
            if (MutationObserver.notSupported) {
                return this.doSync(this.element);
            }
        };

        WOW.prototype.doSync = function (element) {
            var box, j, len, ref, results;
            if (element == null) {
                element = this.element;
            }
            if (element.nodeType !== 1) {
                return;
            }
            element = element.parentNode || element;
            ref = element.querySelectorAll("." + this.config.boxClass);
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
                box = ref[j];
                if (indexOf.call(this.all, box) < 0) {
                    this.boxes.push(box);
                    this.all.push(box);
                    if (this.stopped || this.disabled()) {
                        this.resetStyle();
                    } else {
                        this.applyStyle(box, true);
                    }
                    results.push(this.scrolled = true);
                } else {
                    results.push(void 0);
                }
            }
            return results;
        };

        WOW.prototype.show = function (box) {
            this.applyStyle(box);
            box.className = box.className + " " + this.config.animateClass;
            if (this.config.callback != null) {
                this.config.callback(box);
            }
            this.util().emitEvent(box, this.wowEvent);
            this.util().addEvent(box, 'animationend', this.resetAnimation);
            this.util().addEvent(box, 'oanimationend', this.resetAnimation);
            this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
            this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
            return box;
        };

        WOW.prototype.applyStyle = function (box, hidden) {
            var delay, duration, iteration;
            duration = box.getAttribute('data-wow-duration');
            delay = box.getAttribute('data-wow-delay');
            iteration = box.getAttribute('data-wow-iteration');
            return this.animate((function (_this) {
                return function () {
                    return _this.customStyle(box, hidden, duration, delay, iteration);
                };
            })(this));
        };

        WOW.prototype.animate = (function () {
            if ('requestAnimationFrame' in window) {
                return function (callback) {
                    return window.requestAnimationFrame(callback);
                };
            } else {
                return function (callback) {
                    return callback();
                };
            }
        })();

        WOW.prototype.resetStyle = function () {
            var box, j, len, ref, results;
            ref = this.boxes;
            results = [];
            for (j = 0, len = ref.length; j < len; j++) {
                box = ref[j];
                results.push(box.style.visibility = 'visible');
            }
            return results;
        };

        WOW.prototype.resetAnimation = function (event) {
            var target;
            if (event.type.toLowerCase().indexOf('animationend') >= 0) {
                target = event.target || event.srcElement;
                return target.className = target.className.replace(this.config.animateClass, '').trim();
            }
        };

        WOW.prototype.customStyle = function (box, hidden, duration, delay, iteration) {
            if (hidden) {
                this.cacheAnimationName(box);
            }
            box.style.visibility = hidden ? 'hidden' : 'visible';
            if (duration) {
                this.vendorSet(box.style, {
                    animationDuration: duration
                });
            }
            if (delay) {
                this.vendorSet(box.style, {
                    animationDelay: delay
                });
            }
            if (iteration) {
                this.vendorSet(box.style, {
                    animationIterationCount: iteration
                });
            }
            this.vendorSet(box.style, {
                animationName: hidden ? 'none' : this.cachedAnimationName(box)
            });
            return box;

        };

        WOW.prototype.vendors = ["moz", "webkit"];

        WOW.prototype.vendorSet = function (elem, properties) {
            var name, results, value, vendor;
            results = [];
            for (name in properties) {
                value = properties[name];
                elem["" + name] = value;
                results.push((function () {
                    var j, len, ref, results1;
                    ref = this.vendors;
                    results1 = [];
                    for (j = 0, len = ref.length; j < len; j++) {
                        vendor = ref[j];
                        results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
                    }
                    return results1;
                }).call(this));
            }
            return results;
        };

        WOW.prototype.vendorCSS = function (elem, property) {
            var j, len, ref, result, style, vendor;
            style = getComputedStyle(elem);
            result = style.getPropertyCSSValue(property);
            ref = this.vendors;
            for (j = 0, len = ref.length; j < len; j++) {
                vendor = ref[j];
                result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
            }
            return result;
        };

        WOW.prototype.animationName = function (box) {
            var animationName;
            try {
                animationName = this.vendorCSS(box, 'animation-name').cssText;
            } catch (_error) {
                animationName = getComputedStyle(box).getPropertyValue('animation-name');
            }
            if (animationName === 'none') {
                return '';
            } else {
                return animationName;
            }
        };

        WOW.prototype.cacheAnimationName = function (box) {
            return this.animationNameCache.set(box, this.animationName(box));
        };

        WOW.prototype.cachedAnimationName = function (box) {
            return this.animationNameCache.get(box);
        };

        WOW.prototype.scrollHandler = function () {
            return this.scrolled = true;
        };

        WOW.prototype.scrollCallback = function () {
            var box;
            if (this.scrolled) {
                this.scrolled = false;
                this.boxes = (function () {
                    var j, len, ref, results;
                    ref = this.boxes;
                    results = [];
                    for (j = 0, len = ref.length; j < len; j++) {
                        box = ref[j];
                        if (!(box)) {
                            continue;
                        }
                        if (this.isVisible(box)) {
                            this.show(box);
                            continue;
                        }
                        results.push(box);
                    }
                    return results;
                }).call(this);
                if (!(this.boxes.length || this.config.live)) {
                    return this.stop();
                }
            }
        };

        WOW.prototype.offsetTop = function (element) {
            var top;
            while (element.offsetTop === void 0) {
                element = element.parentNode;
            }
            top = element.offsetTop;
            while (element = element.offsetParent) {
                top += element.offsetTop;
            }
            return top;
        };

        WOW.prototype.isVisible = function (box) {
            var bottom, offset, top, viewBottom, viewTop;
            offset = box.getAttribute('data-wow-offset') || this.config.offset;
            viewTop = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset;
            viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
            top = this.offsetTop(box);
            bottom = top + box.clientHeight;
            return top <= viewBottom && bottom >= viewTop;
        };

        WOW.prototype.util = function () {
            return this._util != null ? this._util : this._util = new Util();
        };

        WOW.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        };

        return WOW;

    })();

}).call(this);

var landingJquery = jQuery.noConflict();
landingJquery(window).load(function () {

    "use strict";

    landingJquery('.popup-gallery').find('a.popup1').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    landingJquery('.popup-gallery').find('a.popup2').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    landingJquery('.popup-gallery').find('a.popup3').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    landingJquery('.popup-gallery').find('a.popup4').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: false
        }
    });

    landingJquery('#navbar-collapse-02').onePageNav({
        filter: ':not(.external)'
    });


    landingJquery(".nav li a, a.scrool").click(function (e) {

        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = landingJquery$("#" + trgt).offset();
        var target_top = target_offset.top;

        $landingJquery('html,body').animate({ scrollTop: target_top - 76 }, 1000);
        return false;
    });

});

; (function ($) { var l = location.href.replace(/#.*/, ''); var g = $.localScroll = function (a) { $('body').localScroll(a) }; g.defaults = { duration: 1e3, axis: 'y', event: 'click', stop: true, target: window, reset: true }; g.hash = function (a) { if (location.hash) { a = $.extend({}, g.defaults, a); a.hash = false; if (a.reset) { var e = a.duration; delete a.duration; $(a.target).scrollTo(0, a); a.duration = e } i(0, location, a) } }; $.fn.localScroll = function (b) { b = $.extend({}, g.defaults, b); return b.lazy ? this.bind(b.event, function (a) { var e = $([a.target, a.target.parentNode]).filter(d)[0]; if (e) i(a, e, b) }) : this.find('a,area').filter(d).bind(b.event, function (a) { i(a, this, b) }).end().end(); function d() { return !!this.href && !!this.hash && this.href.replace(this.hash, '') == l && (!b.filter || $(this).is(b.filter)) } }; function i(a, e, b) { var d = e.hash.slice(1), f = document.getElementById(d) || document.getElementsByName(d)[0]; if (!f) return; if (a) a.preventDefault(); var h = $(b.target); if (b.lock && h.is(':animated') || b.onBefore && b.onBefore.call(b, a, f, h) === false) return; if (b.stop) h.stop(true); if (b.hash) { var j = f.id == d ? 'id' : 'name', k = $('<a> </a>').attr(j, d).css({ position: 'absolute', top: $(window).scrollTop(), left: $(window).scrollLeft() }); f[j] = ''; $('body').prepend(k); location = e.hash; k.remove(); f[j] = d } h.scrollTo(f, b).trigger('notify.serialScroll', [f]) } })(jQuery);


//Validate form Enail Only

function validateForm2017() {
    var email = document.getElementById("email").value;
    var emailNoSpace = email.replace(/^\s+|\s+$/, '');
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var illegalChars = /[\(\)\<\>\,\;\:\\\"' '\[\]]/;

    if (!emailFilter.test(emailNoSpace) || illegalChars.test(emailNoSpace)
        || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("email").focus;
        document.getElementById("newsletter_success_box").style.display = "block";
        document.getElementById('newsletter_success_box').innerHTML = "Please enter a valid email address";
        return false;
    };
    return true;
};


//Validate form with list

function validation(form){
    var firstname = document.getElementById("first_name").value;
    var surname = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("phone").value;
    var e = document.getElementById("CourseCodeSelect");
    var course = e.options[e.selectedIndex].value;

    var emailNoSpace = email.replace(/^\s+|\s+$/, '');
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");

    var illegalChars = /[\(\)\<\>\,\;\:\\\"' '\[\]]/;
    var telNoSpace = telephone.replace(/[\(\)\.\-\ ]/g, '');

    if (firstname.length < 2 || /\d+/g.test(firstname) || !(/^[a-zA-Z\-']*$/.test(firstname))) {
        document.getElementById("first_name").focus;
        document.getElementById("newsletter_success_box").style.display = "block";
        document.getElementById('newsletter_success_box').innerHTML = "Please enter a valid first name";
        return false;
    };

    if (surname.length < 2 || /\d+/g.test(surname) || !(/^[a-zA-Z\-']*$/.test(surname))) {
        document.getElementById("last_name").focus;
        document.getElementById("newsletter_success_box").style.display = "block";
        document.getElementById('newsletter_success_box').innerHTML = "Please enter a valid last name";
        return false;
    };

    if (!emailFilter.test(emailNoSpace) || illegalChars.test(emailNoSpace)
        || atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
        document.getElementById("email").focus;
        document.getElementById("newsletter_success_box").style.display = "block";
        document.getElementById('newsletter_success_box').innerHTML = "Please enter a valid email address";
        return false;
    };

    if (telNoSpace.length < 10 || isNaN(parseInt(telNoSpace))) {
        document.getElementById("phone").focus;
        document.getElementById("newsletter_success_box").style.display = "block";
        document.getElementById('newsletter_success_box').innerHTML = "Please enter a valid mobile number";
        return false;
    };

    if (course == null || course == "0") {
        document.getElementById("newsletter_success_box").style.display = "block";
        document.getElementById('newsletter_success_box').innerHTML = "Please select a course of interest";
        return false;
    };

    var el = document.getElementsByName("phone")[0];
    var val = el.value.replace(/\s/g, "");
    phone.value = val;
    return true;
};

//Validate form with list Footer

function validationFooter() {
    var firstnameFoot = document.getElementById("first_name_Footer").value;
    var surnameFoot = document.getElementById("last_name_Footer").value;
    var emailFoot = document.getElementById("email_Footer").value;
    var telephoneFoot = document.getElementById("phone_Footer").value;
    //var eFoot = document.getElementByName("CourseCodeSelect_Footer");
    //var courseFoot = eFoot.options[eFoot.selectedIndex].value;

    var emailNoSpaceFoot = emailFoot.replace(/^\s+|\s+$/, '');
    var emailFilterFoot = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var atposFoot = emailFoot.indexOf("@");
    var dotposFoot = emailFoot.lastIndexOf(".");

    var illegalCharsFoot = /[\(\)\<\>\,\;\:\\\"' '\[\]]/;
    var telNoSpaceFoot = telephoneFoot.replace(/[\(\)\.\-\ ]/g, '');

    if (firstnameFoot.length < 2 || /\d+/g.test(firstnameFoot) || !(/^[a-zA-Z\-']*$/.test(firstnameFoot))) {
        document.getElementById("first_name_Footer").focus;
        document.getElementById("newsletter_success_box_Footer").style.display = "block";
        document.getElementById('newsletter_success_box_Footer').innerHTML = "Please enter a valid first name";
        return false;
    };

    if (surnameFoot.length < 2 || /\d+/g.test(surnameFoot) || !(/^[a-zA-Z\-']*$/.test(surnameFoot))) {
        document.getElementById("last_name_Footer").focus;
        document.getElementById("newsletter_success_box_Footer").style.display = "block";
        document.getElementById('newsletter_success_box_Footer').innerHTML = "Please enter a valid last name";
        return false;
    };

    if (!emailFilterFoot.test(emailNoSpaceFoot) || illegalCharsFoot.test(emailNoSpaceFoot)
        || atposFoot < 1 || dotposFoot < atposFoot + 2 || dotposFoot + 2 >= emailFoot.length) {
        document.getElementById("email_Footer").focus;
        document.getElementById("newsletter_success_box_Footer").style.display = "block";
        document.getElementById('newsletter_success_box_Footer').innerHTML = "Please enter a valid email address";
        return false;
    };

    if (telNoSpaceFoot.length < 10 || isNaN(parseInt(telNoSpaceFoot))) {
        document.getElementById("phone_Footer").focus;
        document.getElementById("newsletter_success_box_Footer").style.display = "block";
        document.getElementById('newsletter_success_box_Footer').innerHTML = "Please enter a valid mobile number";
        return false;
    };

    //if (courseFoot == null || courseFoot == "0") {
    //    document.getElementById("newsletter_success_box_Footer").style.display = "block";
    //    document.getElementById('newsletter_success_box_Footer').innerHTML = "Please select a course of interest";
    //    return false;
    //};

    var elFoot = document.getElementsByName("phone")[0];
    var valFoot = elFoot.value.replace(/\s/g, "");
    phone.value = val;
    return true;
};

//Experian Email Validation

function QASemailLanding() {
    ga('send', 'event', 'Forms', 'Fillin', 'Email');
    if (document.getElementById("email").value != "") {
        var email = document.getElementById("email").value;
    }
    else if (document.getElementById("email_Footer").value != ""){
        var email = document.getElementById("email_Footer").value;
    }
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://api.experianmarketingservices.com/sync/queryresult/EmailValidate/1.0/", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader('Auth-Token', '37bf5fbf-40db-494c-9bea-e6b8e0b23ea7');
    xhttp.send('{"Email":' + JSON.stringify(email) + '}');
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var result = xhttp.responseText;
            var data = JSON.parse(result);
            if (data.hasOwnProperty('Corrections')) {
                var CorrectionEmail = data.Corrections;
                    document.getElementById("newsletter_success_box").style.display = "block";
                    document.getElementById("newsletter_success_box").innerHTML = "You may have made a mistake did you mean <span id='correctEmail' onclick='return theFunction2017();'>" + CorrectionEmail + "</span> ? click email to confirm";
                    document.getElementById("newsletter_success_box_Footer").style.display = "block";
                    document.getElementById("newsletter_success_box_Footer").innerHTML = "You may have made a mistake did you mean <span id='correctEmail' onclick='return theFunction2017();'>" + CorrectionEmail + "</span> ? click email to confirm";
                    return false;
            }
            else if ((data.Certainty == "undeliverable") || (data.Certainty == "unreachable")
                || (data.Certainty == "illegitimate") || (data.Certainty == "disposable")) {
                    document.getElementById("newsletter_success_box").style.display = "block";
                    document.getElementById("newsletter_success_box").innerHTML = "Please check your email address";
                    document.getElementById("newsletter_success_box_Footer").style.display = "block";
                    document.getElementById("newsletter_success_box_Footer").innerHTML = "Please check your email address";
                    return false;
            }
            else {
                    document.getElementById("newsletter_success_box").style.display = "none";
                    document.getElementById("newsletter_success_box_Footer").style.display = "none";
                    return true;
            };
        };
    };
};

//Email when correction is found pass to email field

function theFunction2017() {
    var passEmail = document.getElementById("correctEmail").innerHTML;
    document.getElementById("email").value = passEmail;
    document.getElementById("newsletter_success_box").style.display = "none";
    document.getElementById("email_Footer").value = passEmail;
    document.getElementById("newsletter_success_box_Footer").style.display = "none";
    return false;
};

//display newsletter form submit messge

var NL = location.hash;
if (NL == "#Newssubmit") {
    document.getElementById("cgrForm").style.display = "none";
    document.getElementById("newsletter_success_box").style.display = "block";
};