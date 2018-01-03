(function(e, t) {
	var n, r, i = typeof t,
		o = e.document,
		a = e.location,
		s = e.jQuery,
		u = e.$,
		l = {},
		c = [],
		p = "1.9.1",
		f = c.concat,
		d = c.push,
		h = c.slice,
		g = c.indexOf,
		m = l.toString,
		y = l.hasOwnProperty,
		v = p.trim,
		b = function(e, t) {
			return new b.fn.init(e, t, r)
		},
		x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		w = /\S+/g,
		T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		N = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		k = /^[\],:{}\s]*$/,
		E = /(?:^|:|,)(?:\s*\[)+/g,
		S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
		j = /^-ms-/,
		D = /-([\da-z])/gi,
		L = function(e, t) {
			return t.toUpperCase()
		},
		H = function(e) {
			(o.addEventListener || "load" === e.type || "complete" === o.readyState) && (q(), b.ready())
		},
		q = function() {
			o.addEventListener ? (o.removeEventListener("DOMContentLoaded", H, !1), e.removeEventListener("load", H, !1)) : (o.detachEvent("onreadystatechange", H), e.detachEvent("onload", H))
		};
	b.fn = b.prototype = {
		jquery: p,
		constructor: b,
		init: function(e, n, r) {
			var i, a;
			if (!e) {
				return this
			}
			if ("string" == typeof e) {
				if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n) {
					return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
				}
				if (i[1]) {
					if (n = n instanceof b ? n[0] : n, b.merge(this, b.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : o, !0)), C.test(i[1]) && b.isPlainObject(n)) {
						for (i in n) {
							b.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i])
						}
					}
					return this
				}
				if (a = o.getElementById(i[2]), a && a.parentNode) {
					if (a.id !== i[2]) {
						return r.find(e)
					}
					this.length = 1, this[0] = a
				}
				return this.context = o, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : b.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), b.makeArray(e, this))
		},
		selector: "",
		length: 0,
		size: function() {
			return this.length
		},
		toArray: function() {
			return h.call(this)
		},
		get: function(e) {
			return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
		},
		pushStack: function(e) {
			var t = b.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return b.each(this, e, t)
		},
		ready: function(e) {
			return b.ready.promise().done(e), this
		},
		slice: function() {
			return this.pushStack(h.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		map: function(e) {
			return this.pushStack(b.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: d,
		sort: [].sort,
		splice: [].splice
	}, b.fn.init.prototype = b.fn, b.extend = b.fn.extend = function() {
		var e, n, r, i, o, a, s = arguments[0] || {},
			u = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || b.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++) {
			if (null != (o = arguments[u])) {
				for (i in o) {
					e = s[i], r = o[i], s !== r && (c && r && (b.isPlainObject(r) || (n = b.isArray(r))) ? (n ? (n = !1, a = e && b.isArray(e) ? e : []) : a = e && b.isPlainObject(e) ? e : {}, s[i] = b.extend(c, a, r)) : r !== t && (s[i] = r))
				}
			}
		}
		return s
	}, b.extend({
		noConflict: function(t) {
			return e.$ === b && (e.$ = u), t && e.jQuery === b && (e.jQuery = s), b
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? b.readyWait++ : b.ready(!0)
		},
		ready: function(e) {
			if (e === !0 ? !--b.readyWait : !b.isReady) {
				if (!o.body) {
					return setTimeout(b.ready)
				}
				b.isReady = !0, e !== !0 && --b.readyWait > 0 || (n.resolveWith(o, [b]), b.fn.trigger && b(o).trigger("ready").off("ready"))
			}
		},
		isFunction: function(e) {
			return "function" === b.type(e)
		},
		isArray: Array.isArray ||
		function(e) {
			return "array" === b.type(e)
		},
		isWindow: function(e) {
			return null != e && e == e.window
		},
		isNumeric: function(e) {
			return !isNaN(parseFloat(e)) && isFinite(e)
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[m.call(e)] || "object" : typeof e
		},
		isPlainObject: function(e) {
			if (!e || "object" !== b.type(e) || e.nodeType || b.isWindow(e)) {
				return !1
			}
			try {
				if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) {
					return !1
				}
			} catch (n) {
				return !1
			}
			var r;
			for (r in e) {}
			return r === t || y.call(e, r)
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) {
				return !1
			}
			return !0
		},
		error: function(e) {
			throw Error(e)
		},
		parseHTML: function(e, t, n) {
			if (!e || "string" != typeof e) {
				return null
			}
			"boolean" == typeof t && (n = t, t = !1), t = t || o;
			var r = C.exec(e),
				i = !n && [];
			return r ? [t.createElement(r[1])] : (r = b.buildFragment([e], t, i), i && b(i).remove(), b.merge([], r.childNodes))
		},
		parseJSON: function(n) {
			return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = b.trim(n), n && k.test(n.replace(S, "@").replace(A, "]").replace(E, ""))) ? Function("return " + n)() : (b.error("Invalid JSON: " + n), t)
		},
		parseXML: function(n) {
			var r, i;
			if (!n || "string" != typeof n) {
				return null
			}
			try {
				e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
			} catch (o) {
				r = t
			}
			return r && r.documentElement && !r.getElementsByTagName("parsererror").length || b.error("Invalid XML: " + n), r
		},
		noop: function() {},
		globalEval: function(t) {
			t && b.trim(t) && (e.execScript ||
			function(t) {
				e.eval.call(e, t)
			})(t)
		},
		camelCase: function(e) {
			return e.replace(j, "ms-").replace(D, L)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e);
			if (n) {
				if (a) {
					for (; o > i; i++) {
						if (r = t.apply(e[i], n), r === !1) {
							break
						}
					}
				} else {
					for (i in e) {
						if (r = t.apply(e[i], n), r === !1) {
							break
						}
					}
				}
			} else {
				if (a) {
					for (; o > i; i++) {
						if (r = t.call(e[i], i, e[i]), r === !1) {
							break
						}
					}
				} else {
					for (i in e) {
						if (r = t.call(e[i], i, e[i]), r === !1) {
							break
						}
					}
				}
			}
			return e
		},
		trim: v && !v.call("\ufeff\u00a0") ?
		function(e) {
			return null == e ? "" : v.call(e)
		} : function(e) {
			return null == e ? "" : (e + "").replace(T, "")
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (M(Object(e)) ? b.merge(n, "string" == typeof e ? [e] : e) : d.call(n, e)), n
		},
		inArray: function(e, t, n) {
			var r;
			if (t) {
				if (g) {
					return g.call(t, e, n)
				}
				for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) {
					if (n in t && t[n] === e) {
						return n
					}
				}
			}
			return -1
		},
		merge: function(e, n) {
			var r = n.length,
				i = e.length,
				o = 0;
			if ("number" == typeof r) {
				for (; r > o; o++) {
					e[i++] = n[o]
				}
			} else {
				while (n[o] !== t) {
					e[i++] = n[o++]
				}
			}
			return e.length = i, e
		},
		grep: function(e, t, n) {
			var r, i = [],
				o = 0,
				a = e.length;
			for (n = !! n; a > o; o++) {
				r = !! t(e[o], o), n !== r && i.push(e[o])
			}
			return i
		},
		map: function(e, t, n) {
			var r, i = 0,
				o = e.length,
				a = M(e),
				s = [];
			if (a) {
				for (; o > i; i++) {
					r = t(e[i], i, n), null != r && (s[s.length] = r)
				}
			} else {
				for (i in e) {
					r = t(e[i], i, n), null != r && (s[s.length] = r)
				}
			}
			return f.apply([], s)
		},
		guid: 1,
		proxy: function(e, n) {
			var r, i, o;
			return "string" == typeof n && (o = e[n], n = e, e = o), b.isFunction(e) ? (r = h.call(arguments, 2), i = function() {
				return e.apply(n || this, r.concat(h.call(arguments)))
			}, i.guid = e.guid = e.guid || b.guid++, i) : t
		},
		access: function(e, n, r, i, o, a, s) {
			var u = 0,
				l = e.length,
				c = null == r;
			if ("object" === b.type(r)) {
				o = !0;
				for (u in r) {
					b.access(e, n, u, r[u], !0, a, s)
				}
			} else {
				if (i !== t && (o = !0, b.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function(e, t, n) {
					return c.call(b(e), n)
				})), n)) {
					for (; l > u; u++) {
						n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)))
					}
				}
			}
			return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
		},
		now: function() {
			return (new Date).getTime()
		}
	}), b.ready.promise = function(t) {
		if (!n) {
			if (n = b.Deferred(), "complete" === o.readyState) {
				setTimeout(b.ready)
			} else {
				if (o.addEventListener) {
					o.addEventListener("DOMContentLoaded", H, !1), e.addEventListener("load", H, !1)
				} else {
					o.attachEvent("onreadystatechange", H), e.attachEvent("onload", H);
					var r = !1;
					try {
						r = null == e.frameElement && o.documentElement
					} catch (i) {}
					r && r.doScroll &&
					function a() {
						if (!b.isReady) {
							try {
								r.doScroll("left")
							} catch (e) {
								return setTimeout(a, 50)
							}
							q(), b.ready()
						}
					}()
				}
			}
		}
		return n.promise(t)
	}, b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		l["[object " + t + "]"] = t.toLowerCase()
	});

	function M(e) {
		var t = e.length,
			n = b.type(e);
		return b.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
	}
	r = b(o);
	var _ = {};

	function F(e) {
		var t = _[e] = {};
		return b.each(e.match(w) || [], function(e, n) {
			t[n] = !0
		}), t
	}
	b.Callbacks = function(e) {
		e = "string" == typeof e ? _[e] || F(e) : b.extend({}, e);
		var n, r, i, o, a, s, u = [],
			l = !e.once && [],
			c = function(t) {
				for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = u.length, n = !0; u && o > a; a++) {
					if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
						r = !1;
						break
					}
				}
				n = !1, u && (l ? l.length && c(l.shift()) : r ? u = [] : p.disable())
			},
			p = {
				add: function() {
					if (u) {
						var t = u.length;
						(function i(t) {
							b.each(t, function(t, n) {
								var r = b.type(n);
								"function" === r ? e.unique && p.has(n) || u.push(n) : n && n.length && "string" !== r && i(n)
							})
						})(arguments), n ? o = u.length : r && (s = t, c(r))
					}
					return this
				},
				remove: function() {
					return u && b.each(arguments, function(e, t) {
						var r;
						while ((r = b.inArray(t, u, r)) > -1) {
							u.splice(r, 1), n && (o >= r && o--, a >= r && a--)
						}
					}), this
				},
				has: function(e) {
					return e ? b.inArray(e, u) > -1 : !(!u || !u.length)
				},
				empty: function() {
					return u = [], this
				},
				disable: function() {
					return u = l = r = t, this
				},
				disabled: function() {
					return !u
				},
				lock: function() {
					return l = t, r || p.disable(), this
				},
				locked: function() {
					return !l
				},
				fireWith: function(e, t) {
					return t = t || [], t = [e, t.slice ? t.slice() : t], !u || i && !l || (n ? l.push(t) : c(t)), this
				},
				fire: function() {
					return p.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return p
	}, b.extend({
		Deferred: function(e) {
			var t = [
				["resolve", "done", b.Callbacks("once memory"), "resolved"],
				["reject", "fail", b.Callbacks("once memory"), "rejected"],
				["notify", "progress", b.Callbacks("memory")]
			],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return b.Deferred(function(n) {
							b.each(t, function(t, o) {
								var a = o[0],
									s = b.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = s && s.apply(this, arguments);
									e && b.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? b.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, b.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t = 0,
				n = h.call(arguments),
				r = n.length,
				i = 1 !== r || e && b.isFunction(e.promise) ? r : 0,
				o = 1 === i ? e : b.Deferred(),
				a = function(e, t, n) {
					return function(r) {
						t[e] = this, n[e] = arguments.length > 1 ? h.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
					}
				},
				s, u, l;
			if (r > 1) {
				for (s = Array(r), u = Array(r), l = Array(r); r > t; t++) {
					n[t] && b.isFunction(n[t].promise) ? n[t].promise().done(a(t, l, n)).fail(o.reject).progress(a(t, u, s)) : --i
				}
			}
			return i || o.resolveWith(l, n), o.promise()
		}
	}), b.support = function() {
		var t, n, r, a, s, u, l, c, p, f, d = o.createElement("div");
		if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), r = d.getElementsByTagName("a")[0], !n || !r || !n.length) {
			return {}
		}
		s = o.createElement("select"), l = s.appendChild(o.createElement("option")), a = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
			getSetAttribute: "t" !== d.className,
			leadingWhitespace: 3 === d.firstChild.nodeType,
			tbody: !d.getElementsByTagName("tbody").length,
			htmlSerialize: !! d.getElementsByTagName("link").length,
			style: /top/.test(r.getAttribute("style")),
			hrefNormalized: "/a" === r.getAttribute("href"),
			opacity: /^0.5/.test(r.style.opacity),
			cssFloat: !! r.style.cssFloat,
			checkOn: !! a.value,
			optSelected: l.selected,
			enctype: !! o.createElement("form").enctype,
			html5Clone: "<:nav></:nav>" !== o.createElement("nav").cloneNode(!0).outerHTML,
			boxModel: "CSS1Compat" === o.compatMode,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		}, a.checked = !0, t.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !l.disabled;
		try {
			delete d.test
		} catch (h) {
			t.deleteExpando = !1
		}
		a = o.createElement("input"), a.setAttribute("value", ""), t.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), t.radioValue = "t" === a.value, a.setAttribute("checked", "t"), a.setAttribute("name", "t"), u = o.createDocumentFragment(), u.appendChild(a), t.appendChecked = a.checked, t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function() {
			t.noCloneEvent = !1
		}), d.cloneNode(!0).click());
		for (f in {
			submit: !0,
			change: !0,
			focusin: !0
		}) {
			d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1
		}
		return d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip, b(function() {
			var n, r, a, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
				u = o.getElementsByTagName("body")[0];
			u && (n = o.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", u.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", a = d.getElementsByTagName("td"), a[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === a[0].offsetHeight, a[0].style.display = "", a[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === a[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === d.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== u.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
				width: "4px"
			}).width, r = d.appendChild(o.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (u.style.zoom = 1)), u.removeChild(n), n = d = a = r = null)
		}), n = s = u = l = r = a = null, t
	}();
	var O = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		B = /([A-Z])/g;

	function P(e, n, r, i) {
		if (b.acceptData(e)) {
			var o, a, s = b.expando,
				u = "string" == typeof n,
				l = e.nodeType,
				p = l ? b.cache : e,
				f = l ? e[s] : e[s] && s;
			if (f && p[f] && (i || p[f].data) || !u || r !== t) {
				return f || (l ? e[s] = f = c.pop() || b.guid++ : f = s), p[f] || (p[f] = {}, l || (p[f].toJSON = b.noop)), ("object" == typeof n || "function" == typeof n) && (i ? p[f] = b.extend(p[f], n) : p[f].data = b.extend(p[f].data, n)), o = p[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[b.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[b.camelCase(n)])) : a = o, a
			}
		}
	}
	function R(e, t, n) {
		if (b.acceptData(e)) {
			var r, i, o, a = e.nodeType,
				s = a ? b.cache : e,
				u = a ? e[b.expando] : b.expando;
			if (s[u]) {
				if (t && (o = n ? s[u] : s[u].data)) {
					b.isArray(t) ? t = t.concat(b.map(t, b.camelCase)) : t in o ? t = [t] : (t = b.camelCase(t), t = t in o ? [t] : t.split(" "));
					for (r = 0, i = t.length; i > r; r++) {
						delete o[t[r]]
					}
					if (!(n ? $ : b.isEmptyObject)(o)) {
						return
					}
				}(n || (delete s[u].data, $(s[u]))) && (a ? b.cleanData([e], !0) : b.support.deleteExpando || s != s.window ? delete s[u] : s[u] = null)
			}
		}
	}
	b.extend({
		cache: {},
		expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
		noData: {
			embed: !0,
			object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
			applet: !0
		},
		hasData: function(e) {
			return e = e.nodeType ? b.cache[e[b.expando]] : e[b.expando], !! e && !$(e)
		},
		data: function(e, t, n) {
			return P(e, t, n)
		},
		removeData: function(e, t) {
			return R(e, t)
		},
		_data: function(e, t, n) {
			return P(e, t, n, !0)
		},
		_removeData: function(e, t) {
			return R(e, t, !0)
		},
		acceptData: function(e) {
			if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) {
				return !1
			}
			var t = e.nodeName && b.noData[e.nodeName.toLowerCase()];
			return !t || t !== !0 && e.getAttribute("classid") === t
		}
	}), b.fn.extend({
		data: function(e, n) {
			var r, i, o = this[0],
				a = 0,
				s = null;
			if (e === t) {
				if (this.length && (s = b.data(o), 1 === o.nodeType && !b._data(o, "parsedAttrs"))) {
					for (r = o.attributes; r.length > a; a++) {
						i = r[a].name, i.indexOf("data-") || (i = b.camelCase(i.slice(5)), W(o, i, s[i]))
					}
					b._data(o, "parsedAttrs", !0)
				}
				return s
			}
			return "object" == typeof e ? this.each(function() {
				b.data(this, e)
			}) : b.access(this, function(n) {
				return n === t ? o ? W(o, e, b.data(o, e)) : null : (this.each(function() {
					b.data(this, e, n)
				}), t)
			}, null, n, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				b.removeData(this, e)
			})
		}
	});

	function W(e, n, r) {
		if (r === t && 1 === e.nodeType) {
			var i = "data-" + n.replace(B, "-$1").toLowerCase();
			if (r = e.getAttribute(i), "string" == typeof r) {
				try {
					r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : O.test(r) ? b.parseJSON(r) : r
				} catch (o) {}
				b.data(e, n, r)
			} else {
				r = t
			}
		}
		return r
	}
	function $(e) {
		var t;
		for (t in e) {
			if (("data" !== t || !b.isEmptyObject(e[t])) && "toJSON" !== t) {
				return !1
			}
		}
		return !0
	}
	b.extend({
		queue: function(e, n, r) {
			var i;
			return e ? (n = (n || "fx") + "queue", i = b._data(e, n), r && (!i || b.isArray(r) ? i = b._data(e, n, b.makeArray(r)) : i.push(r)), i || []) : t
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = b.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = b._queueHooks(e, t),
				a = function() {
					b.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return b._data(e, n) || b._data(e, n, {
				empty: b.Callbacks("once memory").add(function() {
					b._removeData(e, t + "queue"), b._removeData(e, n)
				})
			})
		}
	}), b.fn.extend({
		queue: function(e, n) {
			var r = 2;
			return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? b.queue(this[0], e) : n === t ? this : this.each(function() {
				var t = b.queue(this, e, n);
				b._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && b.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				b.dequeue(this, e)
			})
		},
		delay: function(e, t) {
			return e = b.fx ? b.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
				var r = setTimeout(t, e);
				n.stop = function() {
					clearTimeout(r)
				}
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, n) {
			var r, i = 1,
				o = b.Deferred(),
				a = this,
				s = this.length,
				u = function() {
					--i || o.resolveWith(a, [a])
				};
			"string" != typeof e && (n = e, e = t), e = e || "fx";
			while (s--) {
				r = b._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u))
			}
			return u(), o.promise(n)
		}
	});
	var I, z, X = /[\t\r\n]/g,
		U = /\r/g,
		V = /^(?:input|select|textarea|button|object)$/i,
		Y = /^(?:a|area)$/i,
		J = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
		G = /^(?:checked|selected)$/i,
		Q = b.support.getSetAttribute,
		K = b.support.input;
	b.fn.extend({
		attr: function(e, t) {
			return b.access(this, b.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				b.removeAttr(this, e)
			})
		},
		prop: function(e, t) {
			return b.access(this, b.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return e = b.propFix[e] || e, this.each(function() {
				try {
					this[e] = t, delete this[e]
				} catch (n) {}
			})
		},
		addClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				u = "string" == typeof e && e;
			if (b.isFunction(e)) {
				return this.each(function(t) {
					b(this).addClass(e.call(this, t, this.className))
				})
			}
			if (u) {
				for (t = (e || "").match(w) || []; s > a; a++) {
					if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : " ")) {
						o = 0;
						while (i = t[o++]) {
							0 > r.indexOf(" " + i + " ") && (r += i + " ")
						}
						n.className = b.trim(r)
					}
				}
			}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a = 0,
				s = this.length,
				u = 0 === arguments.length || "string" == typeof e && e;
			if (b.isFunction(e)) {
				return this.each(function(t) {
					b(this).removeClass(e.call(this, t, this.className))
				})
			}
			if (u) {
				for (t = (e || "").match(w) || []; s > a; a++) {
					if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(X, " ") : "")) {
						o = 0;
						while (i = t[o++]) {
							while (r.indexOf(" " + i + " ") >= 0) {
								r = r.replace(" " + i + " ", " ")
							}
						}
						n.className = e ? b.trim(r) : ""
					}
				}
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e,
				r = "boolean" == typeof t;
			return b.isFunction(e) ? this.each(function(n) {
				b(this).toggleClass(e.call(this, n, this.className, t), t)
			}) : this.each(function() {
				if ("string" === n) {
					var o, a = 0,
						s = b(this),
						u = t,
						l = e.match(w) || [];
					while (o = l[a++]) {
						u = r ? u : !s.hasClass(o), s[u ? "addClass" : "removeClass"](o)
					}
				} else {
					(n === i || "boolean" === n) && (this.className && b._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : b._data(this, "__className__") || "")
				}
			})
		},
		hasClass: function(e) {
			var t = " " + e + " ",
				n = 0,
				r = this.length;
			for (; r > n; n++) {
				if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(X, " ").indexOf(t) >= 0) {
					return !0
				}
			}
			return !1
		},
		val: function(e) {
			var n, r, i, o = this[0];
			if (arguments.length) {
				return i = b.isFunction(e), this.each(function(n) {
					var o, a = b(this);
					1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : b.isArray(o) && (o = b.map(o, function(e) {
						return null == e ? "" : e + ""
					})), r = b.valHooks[this.type] || b.valHooks[this.nodeName.toLowerCase()], r && "set" in r && r.set(this, o, "value") !== t || (this.value = o))
				})
			}
			if (o) {
				return r = b.valHooks[o.type] || b.valHooks[o.nodeName.toLowerCase()], r && "get" in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(U, "") : null == n ? "" : n)
			}
		}
	}), b.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = e.attributes.value;
					return !t || t.specified ? e.value : e.text
				}
			},
			select: {
				get: function(e) {
					var t, n, r = e.options,
						i = e.selectedIndex,
						o = "select-one" === e.type || 0 > i,
						a = o ? null : [],
						s = o ? i + 1 : r.length,
						u = 0 > i ? s : o ? i : 0;
					for (; s > u; u++) {
						if (n = r[u], !(!n.selected && u !== i || (b.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && b.nodeName(n.parentNode, "optgroup"))) {
							if (t = b(n).val(), o) {
								return t
							}
							a.push(t)
						}
					}
					return a
				},
				set: function(e, t) {
					var n = b.makeArray(t);
					return b(e).find("option").each(function() {
						this.selected = b.inArray(b(this).val(), n) >= 0
					}), n.length || (e.selectedIndex = -1), n
				}
			}
		},
		attr: function(e, n, r) {
			var o, a, s, u = e.nodeType;
			if (e && 3 !== u && 8 !== u && 2 !== u) {
				return typeof e.getAttribute === i ? b.prop(e, n, r) : (a = 1 !== u || !b.isXMLDoc(e), a && (n = n.toLowerCase(), o = b.attrHooks[n] || (J.test(n) ? z : I)), r === t ? o && a && "get" in o && null !== (s = o.get(e, n)) ? s : (typeof e.getAttribute !== i && (s = e.getAttribute(n)), null == s ? t : s) : null !== r ? o && a && "set" in o && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r) : (b.removeAttr(e, n), t))
			}
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(w);
			if (o && 1 === e.nodeType) {
				while (n = o[i++]) {
					r = b.propFix[n] || n, J.test(n) ? !Q && G.test(n) ? e[b.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : b.attr(e, n, ""), e.removeAttribute(Q ? n : r)
				}
			}
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!b.support.radioValue && "radio" === t && b.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		propFix: {
			tabindex: "tabIndex",
			readonly: "readOnly",
			"for": "htmlFor",
			"class": "className",
			maxlength: "maxLength",
			cellspacing: "cellSpacing",
			cellpadding: "cellPadding",
			rowspan: "rowSpan",
			colspan: "colSpan",
			usemap: "useMap",
			frameborder: "frameBorder",
			contenteditable: "contentEditable"
		},
		prop: function(e, n, r) {
			var i, o, a, s = e.nodeType;
			if (e && 3 !== s && 8 !== s && 2 !== s) {
				return a = 1 !== s || !b.isXMLDoc(e), a && (n = b.propFix[n] || n, o = b.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
			}
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var n = e.getAttributeNode("tabindex");
					return n && n.specified ? parseInt(n.value, 10) : V.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : t
				}
			}
		}
	}), z = {
		get: function(e, n) {
			var r = b.prop(e, n),
				i = "boolean" == typeof r && e.getAttribute(n),
				o = "boolean" == typeof r ? K && Q ? null != i : G.test(n) ? e[b.camelCase("default-" + n)] : !! i : e.getAttributeNode(n);
			return o && o.value !== !1 ? n.toLowerCase() : t
		},
		set: function(e, t, n) {
			return t === !1 ? b.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && b.propFix[n] || n, n) : e[b.camelCase("default-" + n)] = e[n] = !0, n
		}
	}, K && Q || (b.attrHooks.value = {
		get: function(e, n) {
			var r = e.getAttributeNode(n);
			return b.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
		},
		set: function(e, n, r) {
			return b.nodeName(e, "input") ? (e.defaultValue = n, t) : I && I.set(e, n, r)
		}
	}), Q || (I = b.valHooks.button = {
		get: function(e, n) {
			var r = e.getAttributeNode(n);
			return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
		},
		set: function(e, n, r) {
			var i = e.getAttributeNode(r);
			return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
		}
	}, b.attrHooks.contenteditable = {
		get: I.get,
		set: function(e, t, n) {
			I.set(e, "" === t ? !1 : t, n)
		}
	}, b.each(["width", "height"], function(e, n) {
		b.attrHooks[n] = b.extend(b.attrHooks[n], {
			set: function(e, r) {
				return "" === r ? (e.setAttribute(n, "auto"), r) : t
			}
		})
	})), b.support.hrefNormalized || (b.each(["href", "src", "width", "height"], function(e, n) {
		b.attrHooks[n] = b.extend(b.attrHooks[n], {
			get: function(e) {
				var r = e.getAttribute(n, 2);
				return null == r ? t : r
			}
		})
	}), b.each(["href", "src"], function(e, t) {
		b.propHooks[t] = {
			get: function(e) {
				return e.getAttribute(t, 4)
			}
		}
	})), b.support.style || (b.attrHooks.style = {
		get: function(e) {
			return e.style.cssText || t
		},
		set: function(e, t) {
			return e.style.cssText = t + ""
		}
	}), b.support.optSelected || (b.propHooks.selected = b.extend(b.propHooks.selected, {
		get: function(e) {
			var t = e.parentNode;
			return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
		}
	})), b.support.enctype || (b.propFix.enctype = "encoding"), b.support.checkOn || b.each(["radio", "checkbox"], function() {
		b.valHooks[this] = {
			get: function(e) {
				return null === e.getAttribute("value") ? "on" : e.value
			}
		}
	}), b.each(["radio", "checkbox"], function() {
		b.valHooks[this] = b.extend(b.valHooks[this], {
			set: function(e, n) {
				return b.isArray(n) ? e.checked = b.inArray(b(e).val(), n) >= 0 : t
			}
		})
	});
	var Z = /^(?:input|select|textarea)$/i,
		et = /^key/,
		tt = /^(?:mouse|contextmenu)|click/,
		nt = /^(?:focusinfocus|focusoutblur)$/,
		rt = /^([^.]*)(?:\.(.+)|)$/;

	function it() {
		return !0
	}
	function ot() {
		return !1
	}
	b.event = {
		global: {},
		add: function(e, n, r, o, a) {
			var s, u, l, c, p, f, d, h, g, m, y, v = b._data(e);
			if (v) {
				r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = b.guid++), (u = v.events) || (u = v.events = {}), (f = v.handle) || (f = v.handle = function(e) {
					return typeof b === i || e && b.event.triggered === e.type ? t : b.event.dispatch.apply(f.elem, arguments)
				}, f.elem = e), n = (n || "").match(w) || [""], l = n.length;
				while (l--) {
					s = rt.exec(n[l]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), p = b.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = b.event.special[g] || {}, d = b.extend({
						type: g,
						origType: y,
						data: o,
						handler: r,
						guid: r.guid,
						selector: a,
						needsContext: a && b.expr.match.needsContext.test(a),
						namespace: m.join(".")
					}, c), (h = u[g]) || (h = u[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), b.event.global[g] = !0
				}
				e = null
			}
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, l, c, p, f, d, h, g, m = b.hasData(e) && b._data(e);
			if (m && (c = m.events)) {
				t = (t || "").match(w) || [""], l = t.length;
				while (l--) {
					if (s = rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
						p = b.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = f.length;
						while (o--) {
							a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a))
						}
						u && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || b.removeEvent(e, d, m.handle), delete c[d])
					} else {
						for (d in c) {
							b.event.remove(e, d + t[l], n, r, !0)
						}
					}
				}
				b.isEmptyObject(c) && (delete m.handle, b._removeData(e, "events"))
			}
		},
		trigger: function(n, r, i, a) {
			var s, u, l, c, p, f, d, h = [i || o],
				g = y.call(n, "type") ? n.type : n,
				m = y.call(n, "namespace") ? n.namespace.split(".") : [];
			if (l = f = i = i || o, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + b.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), u = 0 > g.indexOf(":") && "on" + g, n = n[b.expando] ? n : new b.Event(g, "object" == typeof n && n), n.isTrigger = !0, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : b.makeArray(r, [n]), p = b.event.special[g] || {}, a || !p.trigger || p.trigger.apply(i, r) !== !1)) {
				if (!a && !p.noBubble && !b.isWindow(i)) {
					for (c = p.delegateType || g, nt.test(c + g) || (l = l.parentNode); l; l = l.parentNode) {
						h.push(l), f = l
					}
					f === (i.ownerDocument || o) && h.push(f.defaultView || f.parentWindow || e)
				}
				d = 0;
				while ((l = h[d++]) && !n.isPropagationStopped()) {
					n.type = d > 1 ? c : p.bindType || g, s = (b._data(l, "events") || {})[n.type] && b._data(l, "handle"), s && s.apply(l, r), s = u && l[u], s && b.acceptData(l) && s.apply && s.apply(l, r) === !1 && n.preventDefault()
				}
				if (n.type = g, !(a || n.isDefaultPrevented() || p._default && p._default.apply(i.ownerDocument, r) !== !1 || "click" === g && b.nodeName(i, "a") || !b.acceptData(i) || !u || !i[g] || b.isWindow(i))) {
					f = i[u], f && (i[u] = null), b.event.triggered = g;
					try {
						i[g]()
					} catch (v) {}
					b.event.triggered = t, f && (i[u] = f)
				}
				return n.result
			}
		},
		dispatch: function(e) {
			e = b.event.fix(e);
			var n, r, i, o, a, s = [],
				u = h.call(arguments),
				l = (b._data(this, "events") || {})[e.type] || [],
				c = b.event.special[e.type] || {};
			if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
				s = b.event.handlers.call(this, e, l), n = 0;
				while ((o = s[n++]) && !e.isPropagationStopped()) {
					e.currentTarget = o.elem, a = 0;
					while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped()) {
						(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((b.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
					}
				}
				return c.postDispatch && c.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, n) {
			var r, i, o, a, s = [],
				u = n.delegateCount,
				l = e.target;
			if (u && l.nodeType && (!e.button || "click" !== e.type)) {
				for (; l != this; l = l.parentNode || this) {
					if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
						for (o = [], a = 0; u > a; a++) {
							i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? b(r, this).index(l) >= 0 : b.find(r, this, null, [l]).length), o[r] && o.push(i)
						}
						o.length && s.push({
							elem: l,
							handlers: o
						})
					}
				}
			}
			return n.length > u && s.push({
				elem: this,
				handlers: n.slice(u)
			}), s
		},
		fix: function(e) {
			if (e[b.expando]) {
				return e
			}
			var t, n, r, i = e.type,
				a = e,
				s = this.fixHooks[i];
			s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new b.Event(a), t = r.length;
			while (t--) {
				n = r[t], e[n] = a[n]
			}
			return e.target || (e.target = a.srcElement || o), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !! e.metaKey, s.filter ? s.filter(e, a) : e
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, n) {
				var r, i, a, s = n.button,
					u = n.fromElement;
				return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || o, a = i.documentElement, r = i.body, e.pageX = n.clientX + (a && a.scrollLeft || r && r.scrollLeft || 0) - (a && a.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (a && a.scrollTop || r && r.scrollTop || 0) - (a && a.clientTop || r && r.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
			}
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				trigger: function() {
					return b.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
				}
			},
			focus: {
				trigger: function() {
					if (this !== o.activeElement && this.focus) {
						try {
							return this.focus(), !1
						} catch (e) {}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === o.activeElement && this.blur ? (this.blur(), !1) : t
				},
				delegateType: "focusout"
			},
			beforeunload: {
				postDispatch: function(e) {
					e.result !== t && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = b.extend(new b.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? b.event.trigger(i, null, t) : b.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, b.removeEvent = o.removeEventListener ?
	function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	} : function(e, t, n) {
		var r = "on" + t;
		e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
	}, b.Event = function(e, n) {
		return this instanceof b.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && b.extend(this, n), this.timeStamp = e && e.timeStamp || b.now(), this[b.expando] = !0, t) : new b.Event(e, n)
	}, b.Event.prototype = {
		isDefaultPrevented: ot,
		isPropagationStopped: ot,
		isImmediatePropagationStopped: ot,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
		},
		stopImmediatePropagation: function() {
			this.isImmediatePropagationStopped = it, this.stopPropagation()
		}
	}, b.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout"
	}, function(e, t) {
		b.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== r && !b.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), b.support.submitBubbles || (b.event.special.submit = {
		setup: function() {
			return b.nodeName(this, "form") ? !1 : (b.event.add(this, "click._submit keypress._submit", function(e) {
				var n = e.target,
					r = b.nodeName(n, "input") || b.nodeName(n, "button") ? n.form : t;
				r && !b._data(r, "submitBubbles") && (b.event.add(r, "submit._submit", function(e) {
					e._submit_bubble = !0
				}), b._data(r, "submitBubbles", !0))
			}), t)
		},
		postDispatch: function(e) {
			e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && b.event.simulate("submit", this.parentNode, e, !0))
		},
		teardown: function() {
			return b.nodeName(this, "form") ? !1 : (b.event.remove(this, "._submit"), t)
		}
	}), b.support.changeBubbles || (b.event.special.change = {
		setup: function() {
			return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (b.event.add(this, "propertychange._change", function(e) {
				"checked" === e.originalEvent.propertyName && (this._just_changed = !0)
			}), b.event.add(this, "click._change", function(e) {
				this._just_changed && !e.isTrigger && (this._just_changed = !1), b.event.simulate("change", this, e, !0)
			})), !1) : (b.event.add(this, "beforeactivate._change", function(e) {
				var t = e.target;
				Z.test(t.nodeName) && !b._data(t, "changeBubbles") && (b.event.add(t, "change._change", function(e) {
					!this.parentNode || e.isSimulated || e.isTrigger || b.event.simulate("change", this.parentNode, e, !0)
				}), b._data(t, "changeBubbles", !0))
			}), t)
		},
		handle: function(e) {
			var n = e.target;
			return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
		},
		teardown: function() {
			return b.event.remove(this, "._change"), !Z.test(this.nodeName)
		}
	}), b.support.focusinBubbles || b.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = 0,
			r = function(e) {
				b.event.simulate(t, e.target, b.event.fix(e), !0)
			};
		b.event.special[t] = {
			setup: function() {
				0 === n++ && o.addEventListener(e, r, !0)
			},
			teardown: function() {
				0 === --n && o.removeEventListener(e, r, !0)
			}
		}
	}), b.fn.extend({
		on: function(e, n, r, i, o) {
			var a, s;
			if ("object" == typeof e) {
				"string" != typeof n && (r = r || n, n = t);
				for (a in e) {
					this.on(a, n, r, e[a], o)
				}
				return this
			}
			if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) {
				i = ot
			} else {
				if (!i) {
					return this
				}
			}
			return 1 === o && (s = i, i = function(e) {
				return b().off(e), s.apply(this, arguments)
			}, i.guid = s.guid || (s.guid = b.guid++)), this.each(function() {
				b.event.add(this, e, i, r, n)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, n, r) {
			var i, o;
			if (e && e.preventDefault && e.handleObj) {
				return i = e.handleObj, b(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this
			}
			if ("object" == typeof e) {
				for (o in e) {
					this.off(o, n, e[o])
				}
				return this
			}
			return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function() {
				b.event.remove(this, e, r, n)
			})
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		},
		trigger: function(e, t) {
			return this.each(function() {
				b.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, n) {
			var r = this[0];
			return r ? b.event.trigger(e, n, r, !0) : t
		}
	}), function(e, t) {
		var n, r, i, o, a, s, u, l, c, p, f, d, h, g, m, y, v, x = "sizzle" + -new Date,
			w = e.document,
			T = {},
			N = 0,
			C = 0,
			k = it(),
			E = it(),
			S = it(),
			A = typeof t,
			j = 1 << 31,
			D = [],
			L = D.pop,
			H = D.push,
			q = D.slice,
			M = D.indexOf ||
		function(e) {
			var t = 0,
				n = this.length;
			for (; n > t; t++) {
				if (this[t] === e) {
					return t
				}
			}
			return -1
		}, _ = "[\\x20\\t\\r\\n\\f]", F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = F.replace("w", "w#"), B = "([*^$|!~]?=)", P = "\\[" + _ + "*(" + F + ")" + _ + "*(?:" + B + _ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + O + ")|)|)" + _ + "*\\]", R = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + P.replace(3, 8) + ")*)|.*)\\)|)", W = RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"), $ = RegExp("^" + _ + "*," + _ + "*"), I = RegExp("^" + _ + "*([\\x20\\t\\r\\n\\f>+~])" + _ + "*"), z = RegExp(R), X = RegExp("^" + O + "$"), U = {
			ID: RegExp("^#(" + F + ")"),
			CLASS: RegExp("^\\.(" + F + ")"),
			NAME: RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
			TAG: RegExp("^(" + F.replace("w", "w*") + ")"),
			ATTR: RegExp("^" + P),
			PSEUDO: RegExp("^" + R),
			CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
			needsContext: RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
		}, V = /[\x20\t\r\n\f]*[+~]/, Y = /^[^{]+\{\s*\[native code/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /^(?:input|select|textarea|button)$/i, Q = /^h\d$/i, K = /'|\\/g, Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, et = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, tt = function(e, t) {
			var n = "0x" + t - 65536;
			return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(55296 | n >> 10, 56320 | 1023 & n)
		};
		try {
			q.call(w.documentElement.childNodes, 0)[0].nodeType
		} catch (nt) {
			q = function(e) {
				var t, n = [];
				while (t = this[e++]) {
					n.push(t)
				}
				return n
			}
		}
		function rt(e) {
			return Y.test(e + "")
		}
		function it() {
			var e, t = [];
			return e = function(n, r) {
				return t.push(n += " ") > i.cacheLength && delete e[t.shift()], e[n] = r
			}
		}
		function ot(e) {
			return e[x] = !0, e
		}
		function at(e) {
			var t = p.createElement("div");
			try {
				return e(t)
			} catch (n) {
				return !1
			} finally {
				t = null
			}
		}
		function st(e, t, n, r) {
			var i, o, a, s, u, l, f, g, m, v;
			if ((t ? t.ownerDocument || t : w) !== p && c(t), t = t || p, n = n || [], !e || "string" != typeof e) {
				return n
			}
			if (1 !== (s = t.nodeType) && 9 !== s) {
				return []
			}
			if (!d && !r) {
				if (i = J.exec(e)) {
					if (a = i[1]) {
						if (9 === s) {
							if (o = t.getElementById(a), !o || !o.parentNode) {
								return n
							}
							if (o.id === a) {
								return n.push(o), n
							}
						} else {
							if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && y(t, o) && o.id === a) {
								return n.push(o), n
							}
						}
					} else {
						if (i[2]) {
							return H.apply(n, q.call(t.getElementsByTagName(e), 0)), n
						}
						if ((a = i[3]) && T.getByClassName && t.getElementsByClassName) {
							return H.apply(n, q.call(t.getElementsByClassName(a), 0)), n
						}
					}
				}
				if (T.qsa && !h.test(e)) {
					if (f = !0, g = x, m = t, v = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
						l = ft(e), (f = t.getAttribute("id")) ? g = f.replace(K, "\\$&") : t.setAttribute("id", g), g = "[id='" + g + "'] ", u = l.length;
						while (u--) {
							l[u] = g + dt(l[u])
						}
						m = V.test(e) && t.parentNode || t, v = l.join(",")
					}
					if (v) {
						try {
							return H.apply(n, q.call(m.querySelectorAll(v), 0)), n
						} catch (b) {} finally {
							f || t.removeAttribute("id")
						}
					}
				}
			}
			return wt(e.replace(W, "$1"), t, n, r)
		}
		a = st.isXML = function(e) {
			var t = e && (e.ownerDocument || e).documentElement;
			return t ? "HTML" !== t.nodeName : !1
		}, c = st.setDocument = function(e) {
			var n = e ? e.ownerDocument || e : w;
			return n !== p && 9 === n.nodeType && n.documentElement ? (p = n, f = n.documentElement, d = a(n), T.tagNameNoComments = at(function(e) {
				return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
			}), T.attributes = at(function(e) {
				e.innerHTML = "<select></select>";
				var t = typeof e.lastChild.getAttribute("multiple");
				return "boolean" !== t && "string" !== t
			}), T.getByClassName = at(function(e) {
				return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
			}), T.getByName = at(function(e) {
				e.id = x + 0, e.innerHTML = "<a name='" + x + "'></a><div name='" + x + "'></div>", f.insertBefore(e, f.firstChild);
				var t = n.getElementsByName && n.getElementsByName(x).length === 2 + n.getElementsByName(x + 0).length;
				return T.getIdNotName = !n.getElementById(x), f.removeChild(e), t
			}), i.attrHandle = at(function(e) {
				return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== A && "#" === e.firstChild.getAttribute("href")
			}) ? {} : {
				href: function(e) {
					return e.getAttribute("href", 2)
				},
				type: function(e) {
					return e.getAttribute("type")
				}
			}, T.getIdNotName ? (i.find.ID = function(e, t) {
				if (typeof t.getElementById !== A && !d) {
					var n = t.getElementById(e);
					return n && n.parentNode ? [n] : []
				}
			}, i.filter.ID = function(e) {
				var t = e.replace(et, tt);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}) : (i.find.ID = function(e, n) {
				if (typeof n.getElementById !== A && !d) {
					var r = n.getElementById(e);
					return r ? r.id === e || typeof r.getAttributeNode !== A && r.getAttributeNode("id").value === e ? [r] : t : []
				}
			}, i.filter.ID = function(e) {
				var t = e.replace(et, tt);
				return function(e) {
					var n = typeof e.getAttributeNode !== A && e.getAttributeNode("id");
					return n && n.value === t
				}
			}), i.find.TAG = T.tagNameNoComments ?
			function(e, n) {
				return typeof n.getElementsByTagName !== A ? n.getElementsByTagName(e) : t
			} : function(e, t) {
				var n, r = [],
					i = 0,
					o = t.getElementsByTagName(e);
				if ("*" === e) {
					while (n = o[i++]) {
						1 === n.nodeType && r.push(n)
					}
					return r
				}
				return o
			}, i.find.NAME = T.getByName &&
			function(e, n) {
				return typeof n.getElementsByName !== A ? n.getElementsByName(name) : t
			}, i.find.CLASS = T.getByClassName &&
			function(e, n) {
				return typeof n.getElementsByClassName === A || d ? t : n.getElementsByClassName(e)
			}, g = [], h = [":focus"], (T.qsa = rt(n.querySelectorAll)) && (at(function(e) {
				e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || h.push("\\[" + _ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || h.push(":checked")
			}), at(function(e) {
				e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && h.push("[*^$]=" + _ + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || h.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), h.push(",.*:")
			})), (T.matchesSelector = rt(m = f.matchesSelector || f.mozMatchesSelector || f.webkitMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && at(function(e) {
				T.disconnectedMatch = m.call(e, "div"), m.call(e, "[s!='']:x"), g.push("!=", R)
			}), h = RegExp(h.join("|")), g = RegExp(g.join("|")), y = rt(f.contains) || f.compareDocumentPosition ?
			function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function(e, t) {
				if (t) {
					while (t = t.parentNode) {
						if (t === e) {
							return !0
						}
					}
				}
				return !1
			}, v = f.compareDocumentPosition ?
			function(e, t) {
				var r;
				return e === t ? (u = !0, 0) : (r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & r || e.parentNode && 11 === e.parentNode.nodeType ? e === n || y(w, e) ? -1 : t === n || y(w, t) ? 1 : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
			} : function(e, t) {
				var r, i = 0,
					o = e.parentNode,
					a = t.parentNode,
					s = [e],
					l = [t];
				if (e === t) {
					return u = !0, 0
				}
				if (!o || !a) {
					return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : 0
				}
				if (o === a) {
					return ut(e, t)
				}
				r = e;
				while (r = r.parentNode) {
					s.unshift(r)
				}
				r = t;
				while (r = r.parentNode) {
					l.unshift(r)
				}
				while (s[i] === l[i]) {
					i++
				}
				return i ? ut(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
			}, u = !1, [0, 0].sort(v), T.detectDuplicates = u, p) : p
		}, st.matches = function(e, t) {
			return st(e, null, null, t)
		}, st.matchesSelector = function(e, t) {
			if ((e.ownerDocument || e) !== p && c(e), t = t.replace(Z, "='$1']"), !(!T.matchesSelector || d || g && g.test(t) || h.test(t))) {
				try {
					var n = m.call(e, t);
					if (n || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) {
						return n
					}
				} catch (r) {}
			}
			return st(t, p, null, [e]).length > 0
		}, st.contains = function(e, t) {
			return (e.ownerDocument || e) !== p && c(e), y(e, t)
		}, st.attr = function(e, t) {
			var n;
			return (e.ownerDocument || e) !== p && c(e), d || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : d || T.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
		}, st.error = function(e) {
			throw Error("Syntax error, unrecognized expression: " + e)
		}, st.uniqueSort = function(e) {
			var t, n = [],
				r = 1,
				i = 0;
			if (u = !T.detectDuplicates, e.sort(v), u) {
				for (; t = e[r]; r++) {
					t === e[r - 1] && (i = n.push(r))
				}
				while (i--) {
					e.splice(n[i], 1)
				}
			}
			return e
		};

		function ut(e, t) {
			var n = t && e,
				r = n && (~t.sourceIndex || j) - (~e.sourceIndex || j);
			if (r) {
				return r
			}
			if (n) {
				while (n = n.nextSibling) {
					if (n === t) {
						return -1
					}
				}
			}
			return e ? 1 : -1
		}
		function lt(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}
		function ct(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return ("input" === n || "button" === n) && t.type === e
			}
		}
		function pt(e) {
			return ot(function(t) {
				return t = +t, ot(function(n, r) {
					var i, o = e([], n.length, t),
						a = o.length;
					while (a--) {
						n[i = o[a]] && (n[i] = !(r[i] = n[i]))
					}
				})
			})
		}
		o = st.getText = function(e) {
			var t, n = "",
				r = 0,
				i = e.nodeType;
			if (i) {
				if (1 === i || 9 === i || 11 === i) {
					if ("string" == typeof e.textContent) {
						return e.textContent
					}
					for (e = e.firstChild; e; e = e.nextSibling) {
						n += o(e)
					}
				} else {
					if (3 === i || 4 === i) {
						return e.nodeValue
					}
				}
			} else {
				for (; t = e[r]; r++) {
					n += o(t)
				}
			}
			return n
		}, i = st.selectors = {
			cacheLength: 50,
			createPseudo: ot,
			match: U,
			find: {},
			relative: {
				">": {
					dir: "parentNode",
					first: !0
				},
				" ": {
					dir: "parentNode"
				},
				"+": {
					dir: "previousSibling",
					first: !0
				},
				"~": {
					dir: "previousSibling"
				}
			},
			preFilter: {
				ATTR: function(e) {
					return e[1] = e[1].replace(et, tt), e[3] = (e[4] || e[5] || "").replace(et, tt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || st.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && st.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[5] && e[2];
					return U.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && z.test(n) && (t = ft(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					return "*" === e ?
					function() {
						return !0
					} : (e = e.replace(et, tt).toLowerCase(), function(t) {
						return t.nodeName && t.nodeName.toLowerCase() === e
					})
				},
				CLASS: function(e) {
					var t = k[e + " "];
					return t || (t = RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && k(e, function(e) {
						return t.test(e.className || typeof e.getAttribute !== A && e.getAttribute("class") || "")
					})
				},
				ATTR: function(e, t, n) {
					return function(r) {
						var i = st.attr(r, e);
						return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
					}
				},
				CHILD: function(e, t, n, r, i) {
					var o = "nth" !== e.slice(0, 3),
						a = "last" !== e.slice(-4),
						s = "of-type" === t;
					return 1 === r && 0 === i ?
					function(e) {
						return !!e.parentNode
					} : function(t, n, u) {
						var l, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							y = s && t.nodeName.toLowerCase(),
							v = !u && !s;
						if (m) {
							if (o) {
								while (g) {
									p = t;
									while (p = p[g]) {
										if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) {
											return !1
										}
									}
									h = g = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if (h = [a ? m.firstChild : m.lastChild], a && v) {
								c = m[x] || (m[x] = {}), l = c[e] || [], d = l[0] === N && l[1], f = l[0] === N && l[2], p = d && m.childNodes[d];
								while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
									if (1 === p.nodeType && ++f && p === t) {
										c[e] = [N, d, f];
										break
									}
								}
							} else {
								if (v && (l = (t[x] || (t[x] = {}))[e]) && l[0] === N) {
									f = l[1]
								} else {
									while (p = ++d && p && p[g] || (f = d = 0) || h.pop()) {
										if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[x] || (p[x] = {}))[e] = [N, f]), p === t)) {
											break
										}
									}
								}
							}
							return f -= i, f === r || 0 === f % r && f / r >= 0
						}
					}
				},
				PSEUDO: function(e, t) {
					var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
					return r[x] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? ot(function(e, n) {
						var i, o = r(e, t),
							a = o.length;
						while (a--) {
							i = M.call(e, o[a]), e[i] = !(n[i] = o[a])
						}
					}) : function(e) {
						return r(e, 0, n)
					}) : r
				}
			},
			pseudos: {
				not: ot(function(e) {
					var t = [],
						n = [],
						r = s(e.replace(W, "$1"));
					return r[x] ? ot(function(e, t, n, i) {
						var o, a = r(e, null, i, []),
							s = e.length;
						while (s--) {
							(o = a[s]) && (e[s] = !(t[s] = o))
						}
					}) : function(e, i, o) {
						return t[0] = e, r(t, null, o, n), !n.pop()
					}
				}),
				has: ot(function(e) {
					return function(t) {
						return st(e, t).length > 0
					}
				}),
				contains: ot(function(e) {
					return function(t) {
						return (t.textContent || t.innerText || o(t)).indexOf(e) > -1
					}
				}),
				lang: ot(function(e) {
					return X.test(e || "") || st.error("unsupported lang: " + e), e = e.replace(et, tt).toLowerCase(), function(t) {
						var n;
						do {
							if (n = d ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) {
								return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-")
							}
						} while ((t = t.parentNode) && 1 === t.nodeType);
						return !1
					}
				}),
				target: function(t) {
					var n = e.location && e.location.hash;
					return n && n.slice(1) === t.id
				},
				root: function(e) {
					return e === f
				},
				focus: function(e) {
					return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
				},
				enabled: function(e) {
					return e.disabled === !1
				},
				disabled: function(e) {
					return e.disabled === !0
				},
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !! e.checked || "option" === t && !! e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for (e = e.firstChild; e; e = e.nextSibling) {
						if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) {
							return !1
						}
					}
					return !0
				},
				parent: function(e) {
					return !i.pseudos.empty(e)
				},
				header: function(e) {
					return Q.test(e.nodeName)
				},
				input: function(e) {
					return G.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
				},
				first: pt(function() {
					return [0]
				}),
				last: pt(function(e, t) {
					return [t - 1]
				}),
				eq: pt(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: pt(function(e, t) {
					var n = 0;
					for (; t > n; n += 2) {
						e.push(n)
					}
					return e
				}),
				odd: pt(function(e, t) {
					var n = 1;
					for (; t > n; n += 2) {
						e.push(n)
					}
					return e
				}),
				lt: pt(function(e, t, n) {
					var r = 0 > n ? n + t : n;
					for (; --r >= 0;) {
						e.push(r)
					}
					return e
				}),
				gt: pt(function(e, t, n) {
					var r = 0 > n ? n + t : n;
					for (; t > ++r;) {
						e.push(r)
					}
					return e
				})
			}
		};
		for (n in {
			radio: !0,
			checkbox: !0,
			file: !0,
			password: !0,
			image: !0
		}) {
			i.pseudos[n] = lt(n)
		}
		for (n in {
			submit: !0,
			reset: !0
		}) {
			i.pseudos[n] = ct(n)
		}
		function ft(e, t) {
			var n, r, o, a, s, u, l, c = E[e + " "];
			if (c) {
				return t ? 0 : c.slice(0)
			}
			s = e, u = [], l = i.preFilter;
			while (s) {
				(!n || (r = $.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(o = [])), n = !1, (r = I.exec(s)) && (n = r.shift(), o.push({
					value: n,
					type: r[0].replace(W, " ")
				}), s = s.slice(n.length));
				for (a in i.filter) {
					!(r = U[a].exec(s)) || l[a] && !(r = l[a](r)) || (n = r.shift(), o.push({
						value: n,
						type: a,
						matches: r
					}), s = s.slice(n.length))
				}
				if (!n) {
					break
				}
			}
			return t ? s.length : s ? st.error(e) : E(e, u).slice(0)
		}
		function dt(e) {
			var t = 0,
				n = e.length,
				r = "";
			for (; n > t; t++) {
				r += e[t].value
			}
			return r
		}
		function ht(e, t, n) {
			var i = t.dir,
				o = n && "parentNode" === i,
				a = C++;
			return t.first ?
			function(t, n, r) {
				while (t = t[i]) {
					if (1 === t.nodeType || o) {
						return e(t, n, r)
					}
				}
			} : function(t, n, s) {
				var u, l, c, p = N + " " + a;
				if (s) {
					while (t = t[i]) {
						if ((1 === t.nodeType || o) && e(t, n, s)) {
							return !0
						}
					}
				} else {
					while (t = t[i]) {
						if (1 === t.nodeType || o) {
							if (c = t[x] || (t[x] = {}), (l = c[i]) && l[0] === p) {
								if ((u = l[1]) === !0 || u === r) {
									return u === !0
								}
							} else {
								if (l = c[i] = [p], l[1] = e(t, n, s) || r, l[1] === !0) {
									return !0
								}
							}
						}
					}
				}
			}
		}
		function gt(e) {
			return e.length > 1 ?
			function(t, n, r) {
				var i = e.length;
				while (i--) {
					if (!e[i](t, n, r)) {
						return !1
					}
				}
				return !0
			} : e[0]
		}
		function mt(e, t, n, r, i) {
			var o, a = [],
				s = 0,
				u = e.length,
				l = null != t;
			for (; u > s; s++) {
				(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s))
			}
			return a
		}
		function yt(e, t, n, r, i, o) {
			return r && !r[x] && (r = yt(r)), i && !i[x] && (i = yt(i, o)), ot(function(o, a, s, u) {
				var l, c, p, f = [],
					d = [],
					h = a.length,
					g = o || xt(t || "*", s.nodeType ? [s] : s, []),
					m = !e || !o && t ? g : mt(g, f, e, s, u),
					y = n ? i || (o ? e : h || r) ? [] : a : m;
				if (n && n(m, y, s, u), r) {
					l = mt(y, d), r(l, [], s, u), c = l.length;
					while (c--) {
						(p = l[c]) && (y[d[c]] = !(m[d[c]] = p))
					}
				}
				if (o) {
					if (i || e) {
						if (i) {
							l = [], c = y.length;
							while (c--) {
								(p = y[c]) && l.push(m[c] = p)
							}
							i(null, y = [], l, u)
						}
						c = y.length;
						while (c--) {
							(p = y[c]) && (l = i ? M.call(o, p) : f[c]) > -1 && (o[l] = !(a[l] = p))
						}
					}
				} else {
					y = mt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, u) : H.apply(a, y)
				}
			})
		}
		function vt(e) {
			var t, n, r, o = e.length,
				a = i.relative[e[0].type],
				s = a || i.relative[" "],
				u = a ? 1 : 0,
				c = ht(function(e) {
					return e === t
				}, s, !0),
				p = ht(function(e) {
					return M.call(t, e) > -1
				}, s, !0),
				f = [function(e, n, r) {
					return !a && (r || n !== l) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
				}];
			for (; o > u; u++) {
				if (n = i.relative[e[u].type]) {
					f = [ht(gt(f), n)]
				} else {
					if (n = i.filter[e[u].type].apply(null, e[u].matches), n[x]) {
						for (r = ++u; o > r; r++) {
							if (i.relative[e[r].type]) {
								break
							}
						}
						return yt(u > 1 && gt(f), u > 1 && dt(e.slice(0, u - 1)).replace(W, "$1"), n, r > u && vt(e.slice(u, r)), o > r && vt(e = e.slice(r)), o > r && dt(e))
					}
					f.push(n)
				}
			}
			return gt(f)
		}
		function bt(e, t) {
			var n = 0,
				o = t.length > 0,
				a = e.length > 0,
				s = function(s, u, c, f, d) {
					var h, g, m, y = [],
						v = 0,
						b = "0",
						x = s && [],
						w = null != d,
						T = l,
						C = s || a && i.find.TAG("*", d && u.parentNode || u),
						k = N += null == T ? 1 : Math.random() || 0.1;
					for (w && (l = u !== p && u, r = n); null != (h = C[b]); b++) {
						if (a && h) {
							g = 0;
							while (m = e[g++]) {
								if (m(h, u, c)) {
									f.push(h);
									break
								}
							}
							w && (N = k, r = ++n)
						}
						o && ((h = !m && h) && v--, s && x.push(h))
					}
					if (v += b, o && b !== v) {
						g = 0;
						while (m = t[g++]) {
							m(x, y, u, c)
						}
						if (s) {
							if (v > 0) {
								while (b--) {
									x[b] || y[b] || (y[b] = L.call(f))
								}
							}
							y = mt(y)
						}
						H.apply(f, y), w && !s && y.length > 0 && v + t.length > 1 && st.uniqueSort(f)
					}
					return w && (N = k, l = T), x
				};
			return o ? ot(s) : s
		}
		s = st.compile = function(e, t) {
			var n, r = [],
				i = [],
				o = S[e + " "];
			if (!o) {
				t || (t = ft(e)), n = t.length;
				while (n--) {
					o = vt(t[n]), o[x] ? r.push(o) : i.push(o)
				}
				o = S(e, bt(i, r))
			}
			return o
		};

		function xt(e, t, n) {
			var r = 0,
				i = t.length;
			for (; i > r; r++) {
				st(e, t[r], n)
			}
			return n
		}
		function wt(e, t, n, r) {
			var o, a, u, l, c, p = ft(e);
			if (!r && 1 === p.length) {
				if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (u = a[0]).type && 9 === t.nodeType && !d && i.relative[a[1].type]) {
					if (t = i.find.ID(u.matches[0].replace(et, tt), t)[0], !t) {
						return n
					}
					e = e.slice(a.shift().value.length)
				}
				o = U.needsContext.test(e) ? 0 : a.length;
				while (o--) {
					if (u = a[o], i.relative[l = u.type]) {
						break
					}
					if ((c = i.find[l]) && (r = c(u.matches[0].replace(et, tt), V.test(a[0].type) && t.parentNode || t))) {
						if (a.splice(o, 1), e = r.length && dt(a), !e) {
							return H.apply(n, q.call(r, 0)), n
						}
						break
					}
				}
			}
			return s(e, p)(r, t, d, n, V.test(e)), n
		}
		i.pseudos.nth = i.pseudos.eq;

		function Tt() {}
		i.filters = Tt.prototype = i.pseudos, i.setFilters = new Tt, c(), st.attr = b.attr, b.find = st, b.expr = st.selectors, b.expr[":"] = b.expr.pseudos, b.unique = st.uniqueSort, b.text = st.getText, b.isXMLDoc = st.isXML, b.contains = st.contains
	}(e);
	var at = /Until$/,
		st = /^(?:parents|prev(?:Until|All))/,
		ut = /^.[^:#\[\.,]*$/,
		lt = b.expr.match.needsContext,
		ct = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	b.fn.extend({
		find: function(e) {
			var t, n, r, i = this.length;
			if ("string" != typeof e) {
				return r = this, this.pushStack(b(e).filter(function() {
					for (t = 0; i > t; t++) {
						if (b.contains(r[t], this)) {
							return !0
						}
					}
				}))
			}
			for (n = [], t = 0; i > t; t++) {
				b.find(e, this[t], n)
			}
			return n = this.pushStack(i > 1 ? b.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
		},
		has: function(e) {
			var t, n = b(e, this),
				r = n.length;
			return this.filter(function() {
				for (t = 0; r > t; t++) {
					if (b.contains(this, n[t])) {
						return !0
					}
				}
			})
		},
		not: function(e) {
			return this.pushStack(ft(this, e, !1))
		},
		filter: function(e) {
			return this.pushStack(ft(this, e, !0))
		},
		is: function(e) {
			return !!e && ("string" == typeof e ? lt.test(e) ? b(e, this.context).index(this[0]) >= 0 : b.filter(e, this).length > 0 : this.filter(e).length > 0)
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = lt.test(e) || "string" != typeof e ? b(e, t || this.context) : 0;
			for (; i > r; r++) {
				n = this[r];
				while (n && n.ownerDocument && n !== t && 11 !== n.nodeType) {
					if (a ? a.index(n) > -1 : b.find.matchesSelector(n, e)) {
						o.push(n);
						break
					}
					n = n.parentNode
				}
			}
			return this.pushStack(o.length > 1 ? b.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? b.inArray(this[0], b(e)) : b.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			var n = "string" == typeof e ? b(e, t) : b.makeArray(e && e.nodeType ? [e] : e),
				r = b.merge(this.get(), n);
			return this.pushStack(b.unique(r))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), b.fn.andSelf = b.fn.addBack;

	function pt(e, t) {
		do {
			e = e[t]
		} while (e && 1 !== e.nodeType);
		return e
	}
	b.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return b.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return b.dir(e, "parentNode", n)
		},
		next: function(e) {
			return pt(e, "nextSibling")
		},
		prev: function(e) {
			return pt(e, "previousSibling")
		},
		nextAll: function(e) {
			return b.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return b.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return b.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return b.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return b.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return b.sibling(e.firstChild)
		},
		contents: function(e) {
			return b.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : b.merge([], e.childNodes)
		}
	}, function(e, t) {
		b.fn[e] = function(n, r) {
			var i = b.map(this, t, n);
			return at.test(e) || (r = n), r && "string" == typeof r && (i = b.filter(r, i)), i = this.length > 1 && !ct[e] ? b.unique(i) : i, this.length > 1 && st.test(e) && (i = i.reverse()), this.pushStack(i)
		}
	}), b.extend({
		filter: function(e, t, n) {
			return n && (e = ":not(" + e + ")"), 1 === t.length ? b.find.matchesSelector(t[0], e) ? [t[0]] : [] : b.find.matches(e, t)
		},
		dir: function(e, n, r) {
			var i = [],
				o = e[n];
			while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !b(o).is(r))) {
				1 === o.nodeType && i.push(o), o = o[n]
			}
			return i
		},
		sibling: function(e, t) {
			var n = [];
			for (; e; e = e.nextSibling) {
				1 === e.nodeType && e !== t && n.push(e)
			}
			return n
		}
	});

	function ft(e, t, n) {
		if (t = t || 0, b.isFunction(t)) {
			return b.grep(e, function(e, r) {
				var i = !! t.call(e, r, e);
				return i === n
			})
		}
		if (t.nodeType) {
			return b.grep(e, function(e) {
				return e === t === n
			})
		}
		if ("string" == typeof t) {
			var r = b.grep(e, function(e) {
				return 1 === e.nodeType
			});
			if (ut.test(t)) {
				return b.filter(t, r, !n)
			}
			t = b.filter(t, r)
		}
		return b.grep(e, function(e) {
			return b.inArray(e, t) >= 0 === n
		})
	}
	function dt(e) {
		var t = ht.split("|"),
			n = e.createDocumentFragment();
		if (n.createElement) {
			while (t.length) {
				n.createElement(t.pop())
			}
		}
		return n
	}
	var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
		gt = / jQuery\d+="(?:null|\d+)"/g,
		mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"),
		yt = /^\s+/,
		vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		bt = /<([\w:]+)/,
		xt = /<tbody/i,
		wt = /<|&#?\w+;/,
		Tt = /<(?:script|style|link)/i,
		Nt = /^(?:checkbox|radio)$/i,
		Ct = /checked\s*(?:[^=]|=\s*.checked.)/i,
		kt = /^$|\/(?:java|ecma)script/i,
		Et = /^true\/(.*)/,
		St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		At = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			legend: [1, "<fieldset>", "</fieldset>"],
			area: [1, "<map>", "</map>"],
			param: [1, "<object>", "</object>"],
			thead: [1, "<table>", "</table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: b.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
		},
		jt = dt(o),
		Dt = jt.appendChild(o.createElement("div"));
	At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, b.fn.extend({
		text: function(e) {
			return b.access(this, function(e) {
				return e === t ? b.text(this) : this.empty().append((this[0] && this[0].ownerDocument || o).createTextNode(e))
			}, null, e, arguments.length)
		},
		wrapAll: function(e) {
			if (b.isFunction(e)) {
				return this.each(function(t) {
					b(this).wrapAll(e.call(this, t))
				})
			}
			if (this[0]) {
				var t = b(e, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					var e = this;
					while (e.firstChild && 1 === e.firstChild.nodeType) {
						e = e.firstChild
					}
					return e
				}).append(this)
			}
			return this
		},
		wrapInner: function(e) {
			return b.isFunction(e) ? this.each(function(t) {
				b(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = b(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = b.isFunction(e);
			return this.each(function(n) {
				b(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				b.nodeName(this, "body") || b(this).replaceWith(this.childNodes)
			}).end()
		},
		append: function() {
			return this.domManip(arguments, !0, function(e) {
				(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
			})
		},
		prepend: function() {
			return this.domManip(arguments, !0, function(e) {
				(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
			})
		},
		before: function() {
			return this.domManip(arguments, !1, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, !1, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			var n, r = 0;
			for (; null != (n = this[r]); r++) {
				(!e || b.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || b.cleanData(Ot(n)), n.parentNode && (t && b.contains(n.ownerDocument, n) && Mt(Ot(n, "script")), n.parentNode.removeChild(n)))
			}
			return this
		},
		empty: function() {
			var e, t = 0;
			for (; null != (e = this[t]); t++) {
				1 === e.nodeType && b.cleanData(Ot(e, !1));
				while (e.firstChild) {
					e.removeChild(e.firstChild)
				}
				e.options && b.nodeName(e, "select") && (e.options.length = 0)
			}
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return b.clone(this, e, t)
			})
		},
		html: function(e) {
			return b.access(this, function(e) {
				var n = this[0] || {},
					r = 0,
					i = this.length;
				if (e === t) {
					return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t
				}
				if (!("string" != typeof e || Tt.test(e) || !b.support.htmlSerialize && mt.test(e) || !b.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
					e = e.replace(vt, "<$1></$2>");
					try {
						for (; i > r; r++) {
							n = this[r] || {}, 1 === n.nodeType && (b.cleanData(Ot(n, !1)), n.innerHTML = e)
						}
						n = 0
					} catch (o) {}
				}
				n && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function(e) {
			var t = b.isFunction(e);
			return t || "string" == typeof e || (e = b(e).not(this).detach()), this.domManip([e], !0, function(e) {
				var t = this.nextSibling,
					n = this.parentNode;
				n && (b(this).remove(), n.insertBefore(e, t))
			})
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, n, r) {
			e = f.apply([], e);
			var i, o, a, s, u, l, c = 0,
				p = this.length,
				d = this,
				h = p - 1,
				g = e[0],
				m = b.isFunction(g);
			if (m || !(1 >= p || "string" != typeof g || b.support.checkClone) && Ct.test(g)) {
				return this.each(function(i) {
					var o = d.eq(i);
					m && (e[0] = g.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
				})
			}
			if (p && (l = b.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
				for (n = n && b.nodeName(i, "tr"), s = b.map(Ot(l, "script"), Ht), a = s.length; p > c; c++) {
					o = l, c !== h && (o = b.clone(o, !0, !0), a && b.merge(s, Ot(o, "script"))), r.call(n && b.nodeName(this[c], "table") ? Lt(this[c], "tbody") : this[c], o, c)
				}
				if (a) {
					for (u = s[s.length - 1].ownerDocument, b.map(s, qt), c = 0; a > c; c++) {
						o = s[c], kt.test(o.type || "") && !b._data(o, "globalEval") && b.contains(u, o) && (o.src ? b.ajax({
							url: o.src,
							type: "GET",
							dataType: "script",
							async: !1,
							global: !1,
							"throws": !0
						}) : b.globalEval((o.text || o.textContent || o.innerHTML || "").replace(St, "")))
					}
				}
				l = i = null
			}
			return this
		}
	});

	function Lt(e, t) {
		return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
	}
	function Ht(e) {
		var t = e.getAttributeNode("type");
		return e.type = (t && t.specified) + "/" + e.type, e
	}

	function qt(e) {
		var t = Et.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}
	function Mt(e, t) {
		var n, r = 0;
		for (; null != (n = e[r]); r++) {
			b._data(n, "globalEval", !t || b._data(t[r], "globalEval"))
		}
	}
	function _t(e, t) {
		if (1 === t.nodeType && b.hasData(e)) {
			var n, r, i, o = b._data(e),
				a = b._data(t, o),
				s = o.events;
			if (s) {
				delete a.handle, a.events = {};
				for (n in s) {
					for (r = 0, i = s[n].length; i > r; r++) {
						b.event.add(t, n, s[n][r])
					}
				}
			}
			a.data && (a.data = b.extend({}, a.data))
		}
	}
	function Ft(e, t) {
		var n, r, i;
		if (1 === t.nodeType) {
			if (n = t.nodeName.toLowerCase(), !b.support.noCloneEvent && t[b.expando]) {
				i = b._data(t);
				for (r in i.events) {
					b.removeEvent(t, r, i.handle)
				}
				t.removeAttribute(b.expando)
			}
			"script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), b.support.html5Clone && e.innerHTML && !b.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Nt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
		}
	}
	b.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		b.fn[e] = function(e) {
			var n, r = 0,
				i = [],
				o = b(e),
				a = o.length - 1;
			for (; a >= r; r++) {
				n = r === a ? this : this.clone(!0), b(o[r])[t](n), d.apply(i, n.get())
			}
			return this.pushStack(i)
		}
	});

	function Ot(e, n) {
		var r, o, a = 0,
			s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
		if (!s) {
			for (s = [], r = e.childNodes || e; null != (o = r[a]); a++) {
				!n || b.nodeName(o, n) ? s.push(o) : b.merge(s, Ot(o, n))
			}
		}
		return n === t || n && b.nodeName(e, n) ? b.merge([e], s) : s
	}
	function Bt(e) {
		Nt.test(e.type) && (e.defaultChecked = e.checked)
	}
	b.extend({
		clone: function(e, t, n) {
			var r, i, o, a, s, u = b.contains(e.ownerDocument, e);
			if (b.support.html5Clone || b.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(b.support.noCloneEvent && b.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || b.isXMLDoc(e))) {
				for (r = Ot(o), s = Ot(e), a = 0; null != (i = s[a]); ++a) {
					r[a] && Ft(i, r[a])
				}
			}
			if (t) {
				if (n) {
					for (s = s || Ot(e), r = r || Ot(o), a = 0; null != (i = s[a]); a++) {
						_t(i, r[a])
					}
				} else {
					_t(e, o)
				}
			}
			return r = Ot(o, "script"), r.length > 0 && Mt(r, !u && Ot(e, "script")), r = s = i = null, o
		},
		buildFragment: function(e, t, n, r) {
			var i, o, a, s, u, l, c, p = e.length,
				f = dt(t),
				d = [],
				h = 0;
			for (; p > h; h++) {
				if (o = e[h], o || 0 === o) {
					if ("object" === b.type(o)) {
						b.merge(d, o.nodeType ? [o] : o)
					} else {
						if (wt.test(o)) {
							s = s || f.appendChild(t.createElement("div")), u = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[u] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
							while (i--) {
								s = s.lastChild
							}
							if (!b.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !b.support.tbody) {
								o = "table" !== u || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
								while (i--) {
									b.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l)
								}
							}
							b.merge(d, s.childNodes), s.textContent = "";
							while (s.firstChild) {
								s.removeChild(s.firstChild)
							}
							s = f.lastChild
						} else {
							d.push(t.createTextNode(o))
						}
					}
				}
			}
			s && f.removeChild(s), b.support.appendChecked || b.grep(Ot(d, "input"), Bt), h = 0;
			while (o = d[h++]) {
				if ((!r || -1 === b.inArray(o, r)) && (a = b.contains(o.ownerDocument, o), s = Ot(f.appendChild(o), "script"), a && Mt(s), n)) {
					i = 0;
					while (o = s[i++]) {
						kt.test(o.type || "") && n.push(o)
					}
				}
			}
			return s = null, f
		},
		cleanData: function(e, t) {
			var n, r, o, a, s = 0,
				u = b.expando,
				l = b.cache,
				p = b.support.deleteExpando,
				f = b.event.special;
			for (; null != (n = e[s]); s++) {
				if ((t || b.acceptData(n)) && (o = n[u], a = o && l[o])) {
					if (a.events) {
						for (r in a.events) {
							f[r] ? b.event.remove(n, r) : b.removeEvent(n, r, a.handle)
						}
					}
					l[o] && (delete l[o], p ? delete n[u] : typeof n.removeAttribute !== i ? n.removeAttribute(u) : n[u] = null, c.push(o))
				}
			}
		}
	});
	var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i,
		It = /opacity\s*=\s*([^)]*)/,
		zt = /^(top|right|bottom|left)$/,
		Xt = /^(none|table(?!-c[ea]).+)/,
		Ut = /^margin/,
		Vt = RegExp("^(" + x + ")(.*)$", "i"),
		Yt = RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
		Jt = RegExp("^([+-])=(" + x + ")", "i"),
		Gt = {
			BODY: "block"
		},
		Qt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Kt = {
			letterSpacing: 0,
			fontWeight: 400
		},
		Zt = ["Top", "Right", "Bottom", "Left"],
		en = ["Webkit", "O", "Moz", "ms"];

	function tn(e, t) {
		if (t in e) {
			return t
		}
		var n = t.charAt(0).toUpperCase() + t.slice(1),
			r = t,
			i = en.length;
		while (i--) {
			if (t = en[i] + n, t in e) {
				return t
			}
		}
		return r
	}
	function nn(e, t) {
		return e = t || e, "none" === b.css(e, "display") || !b.contains(e.ownerDocument, e)
	}
	function rn(e, t) {
		var n, r, i, o = [],
			a = 0,
			s = e.length;
		for (; s > a; a++) {
			r = e[a], r.style && (o[a] = b._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = b._data(r, "olddisplay", un(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && b._data(r, "olddisplay", i ? n : b.css(r, "display"))))
		}
		for (a = 0; s > a; a++) {
			r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"))
		}
		return e
	}
	b.fn.extend({
		css: function(e, n) {
			return b.access(this, function(e, n, r) {
				var i, o, a = {},
					s = 0;
				if (b.isArray(n)) {
					for (o = Rt(e), i = n.length; i > s; s++) {
						a[n[s]] = b.css(e, n[s], !1, o)
					}
					return a
				}
				return r !== t ? b.style(e, n, r) : b.css(e, n)
			}, e, n, arguments.length > 1)
		},
		show: function() {
			return rn(this, !0)
		},
		hide: function() {
			return rn(this)
		},
		toggle: function(e) {
			var t = "boolean" == typeof e;
			return this.each(function() {
				(t ? e : nn(this)) ? b(this).show() : b(this).hide()
			})
		}
	}), b.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = Wt(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": b.support.cssFloat ? "cssFloat" : "styleFloat"
		},
		style: function(e, n, r, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var o, a, s, u = b.camelCase(n),
					l = e.style;
				if (n = b.cssProps[u] || (b.cssProps[u] = tn(l, u)), s = b.cssHooks[n] || b.cssHooks[u], r === t) {
					return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : l[n]
				}
				if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(b.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || b.cssNumber[u] || (r += "px"), b.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) {
					try {
						l[n] = r
					} catch (c) {}
				}
			}
		},
		css: function(e, n, r, i) {
			var o, a, s, u = b.camelCase(n);
			return n = b.cssProps[u] || (b.cssProps[u] = tn(e.style, u)), s = b.cssHooks[n] || b.cssHooks[u], s && "get" in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || b.isNumeric(o) ? o || 0 : a) : a
		},
		swap: function(e, t, n, r) {
			var i, o, a = {};
			for (o in t) {
				a[o] = e.style[o], e.style[o] = t[o]
			}
			i = n.apply(e, r || []);
			for (o in t) {
				e.style[o] = a[o]
			}
			return i
		}
	}), e.getComputedStyle ? (Rt = function(t) {
		return e.getComputedStyle(t, null)
	}, Wt = function(e, n, r) {
		var i, o, a, s = r || Rt(e),
			u = s ? s.getPropertyValue(n) || s[n] : t,
			l = e.style;
		return s && ("" !== u || b.contains(e.ownerDocument, e) || (u = b.style(e, n)), Yt.test(u) && Ut.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
	}) : o.documentElement.currentStyle && (Rt = function(e) {
		return e.currentStyle
	}, Wt = function(e, n, r) {
		var i, o, a, s = r || Rt(e),
			u = s ? s[n] : t,
			l = e.style;
		return null == u && l && l[n] && (u = l[n]), Yt.test(u) && !zt.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
	});

	function on(e, t, n) {
		var r = Vt.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}
	function an(e, t, n, r, i) {
		var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
			a = 0;
		for (; 4 > o; o += 2) {
			"margin" === n && (a += b.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= b.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= b.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += b.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += b.css(e, "border" + Zt[o] + "Width", !0, i)))
		}
		return a
	}
	function sn(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = Rt(e),
			a = b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i)) {
				return i
			}
			r = a && (b.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}
	function un(e) {
		var t = o,
			n = Gt[e];
		return n || (n = ln(e, t), "none" !== n && n || (Pt = (Pt || b("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = ln(e, t), Pt.detach()), Gt[e] = n), n
	}
	function ln(e, t) {
		var n = b(t.createElement(e)).appendTo(t.body),
			r = b.css(n[0], "display");
		return n.remove(), r
	}
	b.each(["height", "width"], function(e, n) {
		b.cssHooks[n] = {
			get: function(e, r, i) {
				return r ? 0 === e.offsetWidth && Xt.test(b.css(e, "display")) ? b.swap(e, Qt, function() {
					return sn(e, n, i)
				}) : sn(e, n, i) : t
			},
			set: function(e, t, r) {
				var i = r && Rt(e);
				return on(e, t, r ? an(e, n, r, b.support.boxSizing && "border-box" === b.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), b.support.opacity || (b.cssHooks.opacity = {
		get: function(e, t) {
			return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
		},
		set: function(e, t) {
			var n = e.style,
				r = e.currentStyle,
				i = b.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
				o = r && r.filter || n.filter || "";
			n.zoom = 1, (t >= 1 || "" === t) && "" === b.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
		}
	}), b(function() {
		b.support.reliableMarginRight || (b.cssHooks.marginRight = {
			get: function(e, n) {
				return n ? b.swap(e, {
					display: "inline-block"
				}, Wt, [e, "marginRight"]) : t
			}
		}), !b.support.pixelPosition && b.fn.position && b.each(["top", "left"], function(e, n) {
			b.cssHooks[n] = {
				get: function(e, r) {
					return r ? (r = Wt(e, n), Yt.test(r) ? b(e).position()[n] + "px" : r) : t
				}
			}
		})
	}), b.expr && b.expr.filters && (b.expr.filters.hidden = function(e) {
		return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !b.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || b.css(e, "display"))
	}, b.expr.filters.visible = function(e) {
		return !b.expr.filters.hidden(e)
	}), b.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		b.cssHooks[e + t] = {
			expand: function(n) {
				var r = 0,
					i = {},
					o = "string" == typeof n ? n.split(" ") : [n];
				for (; 4 > r; r++) {
					i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0]
				}
				return i
			}
		}, Ut.test(e) || (b.cssHooks[e + t].set = on)
	});
	var cn = /%20/g,
		pn = /\[\]$/,
		fn = /\r?\n/g,
		dn = /^(?:submit|button|image|reset|file)$/i,
		hn = /^(?:input|select|textarea|keygen)/i;
	b.fn.extend({
		serialize: function() {
			return b.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = b.prop(this, "elements");
				return e ? b.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !b(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Nt.test(e))
			}).map(function(e, t) {
				var n = b(this).val();
				return null == n ? null : b.isArray(n) ? b.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(fn, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(fn, "\r\n")
				}
			}).get()
		}
	}), b.param = function(e, n) {
		var r, i = [],
			o = function(e, t) {
				t = b.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (n === t && (n = b.ajaxSettings && b.ajaxSettings.traditional), b.isArray(e) || e.jquery && !b.isPlainObject(e)) {
			b.each(e, function() {
				o(this.name, this.value)
			})
		} else {
			for (r in e) {
				gn(r, e[r], n, o)
			}
		}
		return i.join("&").replace(cn, "+")
	};

	function gn(e, t, n, r) {
		var i;
		if (b.isArray(t)) {
			b.each(t, function(t, i) {
				n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
			})
		} else {
			if (n || "object" !== b.type(t)) {
				r(e, t)
			} else {
				for (i in t) {
					gn(e + "[" + i + "]", t[i], n, r)
				}
			}
		}
	}
	b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		b.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), b.fn.hover = function(e, t) {
		return this.mouseenter(e).mouseleave(t || e)
	};
	var mn, yn, vn = b.now(),
		bn = /\?/,
		xn = /#.*$/,
		wn = /([?&])_=[^&]*/,
		Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Nn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Cn = /^(?:GET|HEAD)$/,
		kn = /^\/\//,
		En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		Sn = b.fn.load,
		An = {},
		jn = {},
		Dn = "*/".concat("*");
	try {
		yn = a.href
	} catch (Ln) {
		yn = o.createElement("a"), yn.href = "", yn = yn.href
	}
	mn = En.exec(yn.toLowerCase()) || [];

	function Hn(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(w) || [];
			if (b.isFunction(n)) {
				while (r = o[i++]) {
					"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
				}
			}
		}
	}
	function qn(e, n, r, i) {
		var o = {},
			a = e === jn;

		function s(u) {
			var l;
			return o[u] = !0, b.each(e[u] || [], function(e, u) {
				var c = u(n, r, i);
				return "string" != typeof c || a || o[c] ? a ? !(l = c) : t : (n.dataTypes.unshift(c), s(c), !1)
			}), l
		}
		return s(n.dataTypes[0]) || !o["*"] && s("*")
	}
	function Mn(e, n) {
		var r, i, o = b.ajaxSettings.flatOptions || {};
		for (i in n) {
			n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i])
		}
		return r && b.extend(!0, e, r), e
	}
	b.fn.load = function(e, n, r) {
		if ("string" != typeof e && Sn) {
			return Sn.apply(this, arguments)
		}
		var i, o, a, s = this,
			u = e.indexOf(" ");
		return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), b.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && b.ajax({
			url: e,
			type: a,
			dataType: "html",
			data: n
		}).done(function(e) {
			o = arguments, s.html(i ? b("<div>").append(b.parseHTML(e)).find(i) : e)
		}).complete(r &&
		function(e, t) {
			s.each(r, o || [e.responseText, t, e])
		}), this
	}, b.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		b.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), b.each(["get", "post"], function(e, n) {
		b[n] = function(e, r, i, o) {
			return b.isFunction(r) && (o = o || i, i = r, r = t), b.ajax({
				url: e,
				type: n,
				dataType: o,
				data: r,
				success: i
			})
		}
	}), b.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: yn,
			type: "GET",
			isLocal: Nn.test(mn[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Dn,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText"
			},
			converters: {
				"* text": e.String,
				"text html": !0,
				"text json": b.parseJSON,
				"text xml": b.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? Mn(Mn(e, b.ajaxSettings), t) : Mn(b.ajaxSettings, e)
		},
		ajaxPrefilter: Hn(An),
		ajaxTransport: Hn(jn),
		ajax: function(e, n) {
			"object" == typeof e && (n = e, e = t), n = n || {};
			var r, i, o, a, s, u, l, c, p = b.ajaxSetup({}, n),
				f = p.context || p,
				d = p.context && (f.nodeType || f.jquery) ? b(f) : b.event,
				h = b.Deferred(),
				g = b.Callbacks("once memory"),
				m = p.statusCode || {},
				y = {},
				v = {},
				x = 0,
				T = "canceled",
				N = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === x) {
							if (!c) {
								c = {};
								while (t = Tn.exec(a)) {
									c[t[1].toLowerCase()] = t[2]
								}
							}
							t = c[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === x ? a : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return x || (e = v[n] = v[n] || e, y[e] = t), this
					},
					overrideMimeType: function(e) {
						return x || (p.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e) {
							if (2 > x) {
								for (t in e) {
									m[t] = [m[t], e[t]]
								}
							} else {
								N.always(e[N.status])
							}
						}
						return this
					},
					abort: function(e) {
						var t = e || T;
						return l && l.abort(t), k(0, t), this
					}
				};
			if (h.promise(N).complete = g.add, N.success = N.done, N.error = N.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = b.trim(p.dataType || "*").toLowerCase().match(w) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? 80 : 443)) == (mn[3] || ("http:" === mn[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = b.param(p.data, p.traditional)), qn(An, p, n, N), 2 === x) {
				return N
			}
			u = p.global, u && 0 === b.active++ && b.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Cn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (b.lastModified[o] && N.setRequestHeader("If-Modified-Since", b.lastModified[o]), b.etag[o] && N.setRequestHeader("If-None-Match", b.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && N.setRequestHeader("Content-Type", p.contentType), N.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
			for (i in p.headers) {
				N.setRequestHeader(i, p.headers[i])
			}
			if (p.beforeSend && (p.beforeSend.call(f, N, p) === !1 || 2 === x)) {
				return N.abort()
			}
			T = "abort";
			for (i in {
				success: 1,
				error: 1,
				complete: 1
			}) {
				N[i](p[i])
			}
			if (l = qn(jn, p, n, N)) {
				N.readyState = 1, u && d.trigger("ajaxSend", [N, p]), p.async && p.timeout > 0 && (s = setTimeout(function() {
					N.abort("timeout")
				}, p.timeout));
				try {
					x = 1, l.send(y, k)
				} catch (C) {
					if (!(2 > x)) {
						throw C
					}
					k(-1, C)
				}
			} else {
				k(-1, "No Transport")
			}
			function k(e, n, r, i) {
				var c, y, v, w, T, C = n;
				2 !== x && (x = 2, s && clearTimeout(s), l = t, a = i || "", N.readyState = e > 0 ? 4 : 0, r && (w = _n(p, N, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (T = N.getResponseHeader("Last-Modified"), T && (b.lastModified[o] = T), T = N.getResponseHeader("etag"), T && (b.etag[o] = T)), 204 === e ? (c = !0, C = "nocontent") : 304 === e ? (c = !0, C = "notmodified") : (c = Fn(p, w), C = c.state, y = c.data, v = c.error, c = !v)) : (v = C, (e || !C) && (C = "error", 0 > e && (e = 0))), N.status = e, N.statusText = (n || C) + "", c ? h.resolveWith(f, [y, C, N]) : h.rejectWith(f, [N, C, v]), N.statusCode(m), m = t, u && d.trigger(c ? "ajaxSuccess" : "ajaxError", [N, p, c ? y : v]), g.fireWith(f, [N, C]), u && (d.trigger("ajaxComplete", [N, p]), --b.active || b.event.trigger("ajaxStop")))
			}
			return N
		},
		getScript: function(e, n) {
			return b.get(e, t, n, "script")
		},
		getJSON: function(e, t, n) {
			return b.get(e, t, n, "json")
		}
	});

	function _n(e, n, r) {
		var i, o, a, s, u = e.contents,
			l = e.dataTypes,
			c = e.responseFields;
		for (s in c) {
			s in r && (n[c[s]] = r[s])
		}
		while ("*" === l[0]) {
			l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"))
		}
		if (o) {
			for (s in u) {
				if (u[s] && u[s].test(o)) {
					l.unshift(s);
					break
				}
			}
		}
		if (l[0] in r) {
			a = l[0]
		} else {
			for (s in r) {
				if (!l[0] || e.converters[s + " " + l[0]]) {
					a = s;
					break
				}
				i || (i = s)
			}
			a = a || i
		}
		return a ? (a !== l[0] && l.unshift(a), r[a]) : t
	}
	function Fn(e, t) {
		var n, r, i, o, a = {},
			s = 0,
			u = e.dataTypes.slice(),
			l = u[0];
		if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1]) {
			for (i in e.converters) {
				a[i.toLowerCase()] = e.converters[i]
			}
		}
		for (; r = u[++s];) {
			if ("*" !== r) {
				if ("*" !== l && l !== r) {
					if (i = a[l + " " + r] || a["* " + r], !i) {
						for (n in a) {
							if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
								i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
								break
							}
						}
					}
					if (i !== !0) {
						if (i && e["throws"]) {
							t = i(t)
						} else {
							try {
								t = i(t)
							} catch (c) {
								return {
									state: "parsererror",
									error: i ? c : "No conversion from " + l + " to " + r
								}
							}
						}
					}
				}
				l = r
			}
		}
		return {
			state: "success",
			data: t
		}
	}
	b.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return b.globalEval(e), e
			}
		}
	}), b.ajaxPrefilter("script", function(e) {
		e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
	}), b.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var n, r = o.head || b("head")[0] || o.documentElement;
			return {
				send: function(t, i) {
					n = o.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, t) {
						(t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
					}, r.insertBefore(n, r.firstChild)
				},
				abort: function() {
					n && n.onload(t, !0)
				}
			}
		}
	});
	var On = [],
		Bn = /(=)\?(?=&|$)|\?\?/;
	b.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = On.pop() || b.expando + "_" + vn++;
			return this[e] = !0, e
		}
	}), b.ajaxPrefilter("json jsonp", function(n, r, i) {
		var o, a, s, u = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
		return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = b.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
			return s || b.error(o + " was not called"), s[0]
		}, n.dataTypes[0] = "json", a = e[o], e[o] = function() {
			s = arguments
		}, i.always(function() {
			e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, On.push(o)), s && b.isFunction(a) && a(s[0]), s = a = t
		}), "script") : t
	});
	var Pn, Rn, Wn = 0,
		$n = e.ActiveXObject &&
	function() {
		var e;
		for (e in Pn) {
			Pn[e](t, !0)
		}
	};

	function In() {
		try {
			return new e.XMLHttpRequest
		} catch (t) {}
	}
	function zn() {
		try {
			return new e.ActiveXObject("Microsoft.XMLHTTP")
		} catch (t) {}
	}
	b.ajaxSettings.xhr = e.ActiveXObject ?
	function() {
		return !this.isLocal && In() || zn()
	} : In, Rn = b.ajaxSettings.xhr(), b.support.cors = !! Rn && "withCredentials" in Rn, Rn = b.support.ajax = !! Rn, Rn && b.ajaxTransport(function(n) {
		if (!n.crossDomain || b.support.cors) {
			var r;
			return {
				send: function(i, o) {
					var a, s, u = n.xhr();
					if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields) {
						for (s in n.xhrFields) {
							u[s] = n.xhrFields[s]
						}
					}
					n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
					try {
						for (s in i) {
							u.setRequestHeader(s, i[s])
						}
					} catch (l) {}
					u.send(n.hasContent && n.data || null), r = function(e, i) {
						var s, l, c, p;
						try {
							if (r && (i || 4 === u.readyState)) {
								if (r = t, a && (u.onreadystatechange = b.noop, $n && delete Pn[a]), i) {
									4 !== u.readyState && u.abort()
								} else {
									p = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (p.text = u.responseText);
									try {
										c = u.statusText
									} catch (f) {
										c = ""
									}
									s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
								}
							}
						} catch (d) {
							i || o(-1, d)
						}
						p && o(s, c, p, l)
					}, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, b(e).unload($n)), Pn[a] = r), u.onreadystatechange = r) : r()
				},
				abort: function() {
					r && r(t, !0)
				}
			}
		}
	});
	var Xn, Un, Vn = /^(?:toggle|show|hide)$/,
		Yn = RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
		Jn = /queueHooks$/,
		Gn = [nr],
		Qn = {
			"*": [function(e, t) {
				var n, r, i = this.createTween(e, t),
					o = Yn.exec(t),
					a = i.cur(),
					s = +a || 0,
					u = 1,
					l = 20;
				if (o) {
					if (n = +o[2], r = o[3] || (b.cssNumber[e] ? "" : "px"), "px" !== r && s) {
						s = b.css(i.elem, e, !0) || n || 1;
						do {
							u = u || ".5", s /= u, b.style(i.elem, e, s + r)
						} while (u !== (u = i.cur() / a) && 1 !== u && --l)
					}
					i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
				}
				return i
			}]
		};

	function Kn() {
		return setTimeout(function() {
			Xn = t
		}), Xn = b.now()
	}
	function Zn(e, t) {
		b.each(t, function(t, n) {
			var r = (Qn[t] || []).concat(Qn["*"]),
				i = 0,
				o = r.length;
			for (; o > i; i++) {
				if (r[i].call(e, t, n)) {
					return
				}
			}
		})
	}
	function er(e, t, n) {
		var r, i, o = 0,
			a = Gn.length,
			s = b.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if (i) {
					return !1
				}
				var t = Xn || Kn(),
					n = Math.max(0, l.startTime + l.duration - t),
					r = n / l.duration || 0,
					o = 1 - r,
					a = 0,
					u = l.tweens.length;
				for (; u > a; a++) {
					l.tweens[a].run(o)
				}
				return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
			},
			l = s.promise({
				elem: e,
				props: b.extend({}, t),
				opts: b.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Xn || Kn(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = b.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if (i) {
						return this
					}
					for (i = !0; r > n; n++) {
						l.tweens[n].run(1)
					}
					return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for (tr(c, l.opts.specialEasing); a > o; o++) {
			if (r = Gn[o].call(l, e, c, l.opts)) {
				return r
			}
		}
		return Zn(l, c), b.isFunction(l.opts.start) && l.opts.start.call(e, l), b.fx.timer(b.extend(u, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
	}
	function tr(e, t) {
		var n, r, i, o, a;
		for (i in e) {
			if (r = b.camelCase(i), o = t[r], n = e[i], b.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = b.cssHooks[r], a && "expand" in a) {
				n = a.expand(n), delete e[r];
				for (i in n) {
					i in e || (e[i] = n[i], t[i] = o)
				}
			} else {
				t[r] = o
			}
		}
	}
	b.Animation = b.extend(er, {
		tweener: function(e, t) {
			b.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			var n, r = 0,
				i = e.length;
			for (; i > r; r++) {
				n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
			}
		},
		prefilter: function(e, t) {
			t ? Gn.unshift(e) : Gn.push(e)
		}
	});

	function nr(e, t, n) {
		var r, i, o, a, s, u, l, c, p, f = this,
			d = e.style,
			h = {},
			g = [],
			m = e.nodeType && nn(e);
		n.queue || (c = b._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, p = c.empty.fire, c.empty.fire = function() {
			c.unqueued || p()
		}), c.unqueued++, f.always(function() {
			f.always(function() {
				c.unqueued--, b.queue(e, "fx").length || c.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === b.css(e, "display") && "none" === b.css(e, "float") && (b.support.inlineBlockNeedsLayout && "inline" !== un(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", b.support.shrinkWrapBlocks || f.always(function() {
			d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
		}));
		for (i in t) {
			if (a = t[i], Vn.exec(a)) {
				if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show")) {
					continue
				}
				g.push(i)
			}
		}
		if (o = g.length) {
			s = b._data(e, "fxshow") || b._data(e, "fxshow", {}), "hidden" in s && (m = s.hidden), u && (s.hidden = !m), m ? b(e).show() : f.done(function() {
				b(e).hide()
			}), f.done(function() {
				var t;
				b._removeData(e, "fxshow");
				for (t in h) {
					b.style(e, t, h[t])
				}
			});
			for (i = 0; o > i; i++) {
				r = g[i], l = f.createTween(r, m ? s[r] : 0), h[r] = s[r] || b.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
			}
		}
	}
	function rr(e, t, n, r, i) {
		return new rr.prototype.init(e, t, n, r, i)
	}
	b.Tween = rr, rr.prototype = {
		constructor: rr,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (b.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = rr.propHooks[this.prop];
			return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = rr.propHooks[this.prop];
			return this.pos = t = this.options.duration ? b.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
		}
	}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = b.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				b.fx.step[e.prop] ? b.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[b.cssProps[e.prop]] || b.cssHooks[e.prop]) ? b.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, b.each(["toggle", "show", "hide"], function(e, t) {
		var n = b.fn[t];
		b.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
		}
	}), b.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(nn).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = b.isEmptyObject(e),
				o = b.speed(t, n, r),
				a = function() {
					var t = er(this, b.extend({}, e), o);
					a.finish = function() {
						t.stop(!0)
					}, (i || b._data(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)

		},
		stop: function(e, n, r) {
			var i = function(e) {
					var t = e.stop;
					delete e.stop, t(r)
				};
			return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					n = null != e && e + "queueHooks",
					o = b.timers,
					a = b._data(this);
				if (n) {
					a[n] && a[n].stop && i(a[n])
				} else {
					for (n in a) {
						a[n] && a[n].stop && Jn.test(n) && i(a[n])
					}
				}
				for (n = o.length; n--;) {
					o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1))
				}(t || !r) && b.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = b._data(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = b.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, b.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) {
					o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1))
				}
				for (t = 0; a > t; t++) {
					r[t] && r[t].finish && r[t].finish.call(this)
				}
				delete n.finish
			})
		}
	});

	function ir(e, t) {
		var n, r = {
			height: e
		},
			i = 0;
		for (t = t ? 1 : 0; 4 > i; i += 2 - t) {
			n = Zt[i], r["margin" + n] = r["padding" + n] = e
		}
		return t && (r.opacity = r.width = e), r
	}
	b.each({
		slideDown: ir("show"),
		slideUp: ir("hide"),
		slideToggle: ir("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		b.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), b.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? b.extend({}, e) : {
			complete: n || !n && t || b.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !b.isFunction(t) && t
		};
		return r.duration = b.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in b.fx.speeds ? b.fx.speeds[r.duration] : b.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			b.isFunction(r.old) && r.old.call(this), r.queue && b.dequeue(this, r.queue)
		}, r
	}, b.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return 0.5 - Math.cos(e * Math.PI) / 2
		}
	}, b.timers = [], b.fx = rr.prototype.init, b.fx.tick = function() {
		var e, n = b.timers,
			r = 0;
		for (Xn = b.now(); n.length > r; r++) {
			e = n[r], e() || n[r] !== e || n.splice(r--, 1)
		}
		n.length || b.fx.stop(), Xn = t
	}, b.fx.timer = function(e) {
		e() && b.timers.push(e) && b.fx.start()
	}, b.fx.interval = 13, b.fx.start = function() {
		Un || (Un = setInterval(b.fx.tick, b.fx.interval))
	}, b.fx.stop = function() {
		clearInterval(Un), Un = null
	}, b.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, b.fx.step = {}, b.expr && b.expr.filters && (b.expr.filters.animated = function(e) {
		return b.grep(b.timers, function(t) {
			return e === t.elem
		}).length
	}), b.fn.offset = function(e) {
		if (arguments.length) {
			return e === t ? this : this.each(function(t) {
				b.offset.setOffset(this, e, t)
			})
		}
		var n, r, o = {
			top: 0,
			left: 0
		},
			a = this[0],
			s = a && a.ownerDocument;
		if (s) {
			return n = s.documentElement, b.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {
				top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
				left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
			}) : o
		}
	}, b.offset = {
		setOffset: function(e, t, n) {
			var r = b.css(e, "position");
			"static" === r && (e.style.position = "relative");
			var i = b(e),
				o = i.offset(),
				a = b.css(e, "top"),
				s = b.css(e, "left"),
				u = ("absolute" === r || "fixed" === r) && b.inArray("auto", [a, s]) > -1,
				l = {},
				c = {},
				p, f;
			u ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), b.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (l.top = t.top - o.top + p), null != t.left && (l.left = t.left - o.left + f), "using" in t ? t.using.call(e, l) : i.css(l)
		}
	}, b.fn.extend({
		position: function() {
			if (this[0]) {
				var e, t, n = {
					top: 0,
					left: 0
				},
					r = this[0];
				return "fixed" === b.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), b.nodeName(e[0], "html") || (n = e.offset()), n.top += b.css(e[0], "borderTopWidth", !0), n.left += b.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - n.top - b.css(r, "marginTop", !0),
					left: t.left - n.left - b.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				var e = this.offsetParent || o.documentElement;
				while (e && !b.nodeName(e, "html") && "static" === b.css(e, "position")) {
					e = e.offsetParent
				}
				return e || o.documentElement
			})
		}
	}), b.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, n) {
		var r = /Y/.test(n);
		b.fn[e] = function(i) {
			return b.access(this, function(e, i, o) {
				var a = or(e);
				return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? b(a).scrollLeft() : o, r ? o : b(a).scrollTop()) : e[i] = o, t)
			}, e, i, arguments.length, null)
		}
	});

	function or(e) {
		return b.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
	}
	b.each({
		Height: "height",
		Width: "width"
	}, function(e, n) {
		b.each({
			padding: "inner" + e,
			content: n,
			"": "outer" + e
		}, function(r, i) {
			b.fn[i] = function(i, o) {
				var a = arguments.length && (r || "boolean" != typeof i),
					s = r || (i === !0 || o === !0 ? "margin" : "border");
				return b.access(this, function(n, r, i) {
					var o;
					return b.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? b.css(n, r, s) : b.style(n, r, i, s)
				}, n, a ? i : t, a, null)
			}
		})
	}), e.jQuery = e.$ = b, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
		return b
	})
})(window);
var JSON;
if (!JSON) {
	JSON = {}
}(function() {
	function f(n) {
		return n < 10 ? "0" + n : n
	}
	if (typeof Date.prototype.toJSON !== "function") {
		Date.prototype.toJSON = function(key) {
			return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
		};
		String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(key) {
			return this.valueOf()
		}
	}
	var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
		gap, indent, meta = {
			"\b": "\\b",
			"\t": "\\t",
			"\n": "\\n",
			"\f": "\\f",
			"\r": "\\r",
			'"': '\\"',
			"\\": "\\\\"
		},
		rep;

	function quote(string) {
		escapable.lastIndex = 0;
		return escapable.test(string) ? '"' + string.replace(escapable, function(a) {
			var c = meta[a];
			return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
		}) + '"' : '"' + string + '"'
	}
	function str(key, holder) {
		var i, k, v, length, mind = gap,
			partial, value = holder[key];
		if (value && typeof value === "object" && typeof value.toJSON === "function") {
			value = value.toJSON(key)
		}
		if (typeof rep === "function") {
			value = rep.call(holder, key, value)
		}
		switch (typeof value) {
		case "string":
			return quote(value);
		case "number":
			return isFinite(value) ? String(value) : "null";
		case "boolean":
		case "null":
			return String(value);
		case "object":
			if (!value) {
				return "null"
			}
			gap += indent;
			partial = [];
			if (Object.prototype.toString.apply(value) === "[object Array]") {
				length = value.length;
				for (i = 0; i < length; i += 1) {
					partial[i] = str(i, value) || "null"
				}
				v = partial.length === 0 ? "[]" : gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]" : "[" + partial.join(",") + "]";
				gap = mind;
				return v
			}
			if (rep && typeof rep === "object") {
				length = rep.length;
				for (i = 0; i < length; i += 1) {
					if (typeof rep[i] === "string") {
						k = rep[i];
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ": " : ":") + v)
						}
					}
				}
			} else {
				for (k in value) {
					if (Object.prototype.hasOwnProperty.call(value, k)) {
						v = str(k, value);
						if (v) {
							partial.push(quote(k) + (gap ? ": " : ":") + v)
						}
					}
				}
			}
			v = partial.length === 0 ? "{}" : gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}" : "{" + partial.join(",") + "}";
			gap = mind;
			return v
		}
	}
	if (typeof JSON.stringify !== "function") {
		JSON.stringify = function(value, replacer, space) {
			var i;
			gap = "";
			indent = "";
			if (typeof space === "number") {
				for (i = 0; i < space; i += 1) {
					indent += " "
				}
			} else {
				if (typeof space === "string") {
					indent = space
				}
			}
			rep = replacer;
			if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
				throw new Error("JSON.stringify")
			}
			return str("", {
				"": value
			})
		}
	}
	if (typeof JSON.parse !== "function") {
		JSON.parse = function(text, reviver) {
			var j;

			function walk(holder, key) {
				var k, v, value = holder[key];
				if (value && typeof value === "object") {
					for (k in value) {
						if (Object.prototype.hasOwnProperty.call(value, k)) {
							v = walk(value, k);
							if (v !== undefined) {
								value[k] = v
							} else {
								delete value[k]
							}
						}
					}
				}
				return reviver.call(holder, key, value)
			}
			text = String(text);
			cx.lastIndex = 0;
			if (cx.test(text)) {
				text = text.replace(cx, function(a) {
					return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
				})
			}
			if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
				j = eval("(" + text + ")");
				return typeof reviver === "function" ? walk({
					"": j
				}, "") : j
			}
			throw new SyntaxError("JSON.parse")
		}
	}
}());

function b64_423(c) {
	var d = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "_");
	var b = new String();
	for (var e = 0; e < c.length; e++) {
		for (var a = 0; a < 64; a++) {
			if (c.charAt(e) == d[a]) {
				var f = a.toString(2);
				b += ("000000" + f).substr(f.length);
				break
			}
		}
		if (a == 64) {
			if (e == 2) {
				return b.substr(0, 8)
			} else {
				return b.substr(0, 16)
			}
		}
	}
	return b
}
function b2i(b) {
	var a = 0;
	var d = 128;
	for (var c = 0; c < 8; c++, d = d / 2) {
		if (b.charAt(c) == "1") {
			a += d
		}
	}
	return String.fromCharCode(a)
}
function b64_decodex(b) {
	var d = new Array();
	var c;
	var a = "";
	for (c = 0; c < b.length; c += 4) {
		a += b64_423(b.substr(c, 4))
	}
	for (c = 0; c < a.length; c += 8) {
		d += b2i(a.substr(c, 8))
	}
	return d
}
function utf8to16(f) {
	var a, j, k, h, g, b, c, d, e;
	a = [];
	h = f.length;
	j = k = 0;
	while (j < h) {
		g = f.charCodeAt(j++);
		switch (g >> 4) {
		case 0:
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
			a[k++] = f.charAt(j - 1);
			break;
		case 12:
		case 13:
			b = f.charCodeAt(j++);
			a[k++] = String.fromCharCode(((g & 31) << 6) | (b & 63));
			break;
		case 14:
			b = f.charCodeAt(j++);
			c = f.charCodeAt(j++);
			a[k++] = String.fromCharCode(((g & 15) << 12) | ((b & 63) << 6) | (c & 63));
			break;
		case 15:
			switch (g & 15) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				b = f.charCodeAt(j++);
				c = f.charCodeAt(j++);
				d = f.charCodeAt(j++);
				e = ((g & 7) << 18) | ((b & 63) << 12) | ((c & 63) << 6) | (d & 63) - 65536;
				if (0 <= e && e <= 1048575) {
					a[k] = String.fromCharCode(((e >>> 10) & 1023) | 55296, (e & 1023) | 56320)
				} else {
					a[k] = "?"
				}
				break;
			case 8:
			case 9:
			case 10:
			case 11:
				j += 4;
				a[k] = "?";
				break;
			case 12:
			case 13:
				j += 5;
				a[k] = "?";
				break
			}
		}
		k++
	}
	return a.join("")
}
var PassportSC = {
	cookieHandle: function() {
		if (!this.cookie) {
			this.parsePassportCookie()
		}
		if (this.cookie && this.cookie.userid != "") {
			return this.cookie.userid
		} else {
			return ""
		}
	},
	parsePassportCookie: function() {
		var c = document.cookie.split("; ");
		for (var d = 0; d < c.length; d++) {
			if (c[d].indexOf("sginf=") == 0) {
				var e = c[d].substr(6);
				break
			}
			if (c[d].indexOf("sginfo=") == 0) {
				var e = c[d].substr(7);
				break
			}
			if (c[d].indexOf("passport=") == 0) {
				var e = c[d].substr(9);
				break
			}
		}
		if (d == c.length) {
			this.cookie = false;
			return
		}
		try {
			var a = unescape(e).split("|");
			if (a[0] == "1" || a[0] == "2") {
				var f = utf8to16(b64_decodex(a[3]));
				this._parsePassportCookie(f);
				return
			}
		} catch (b) {}
	},
	_parsePassportCookie: function(j) {
		var e;
		var b;
		var a;
		this.cookie = new Object;
		e = 0;
		b = j.indexOf(":", e);
		while (b != -1) {
			var c;
			var d;
			var f;
			c = j.substring(e, b);
			lenEnd_offset = j.indexOf(":", b + 1);
			if (lenEnd_offset == -1) {
				break
			}
			d = parseInt(j.substring(b + 1, lenEnd_offset));
			f = j.substr(lenEnd_offset + 1, d);
			if (j.charAt(lenEnd_offset + 1 + d) != "|") {
				break
			}
			this.cookie[c] = f;
			e = lenEnd_offset + 2 + d;
			b = j.indexOf(":", e)
		}
		relation_userid = this._parserRelation();
		if (relation_userid != null && relation_userid.length > 0) {
			this.cookie[c] = relation_userid
		}
		try {
			this.cookie.service = new Object;
			var g = this.cookie.service;
			g.mail = 0;
			g.alumni = 0;
			g.chinaren = 0;
			g.blog = 0;
			g.pp = 0;
			g.club = 0;
			g.crclub = 0;
			g.group = 0;
			g.say = 0;
			g.music = 0;
			g.focus = 0;
			g["17173"] = 0;
			g.vip = 0;
			g.rpggame = 0;
			g.pinyin = 0;
			g.relaxgame = 0;
			var h = this.cookie.serviceuse;
			if (h.charAt(0) == 1) {
				g.mail = "sohu"
			} else {
				if (h.charAt(2) == 1) {
					g.mail = "sogou"
				} else {
					if (this.cookie.userid.indexOf("@chinaren.com") > 0) {
						g.mail = "chinaren"
					}
				}
			}
			if (h.charAt(1) == 1) {
				g.alumni = 1
			}
			if (h.charAt(3) == 1) {
				g.blog = 1
			}
			if (h.charAt(4) == 1) {
				g.pp = 1
			}
			if (h.charAt(5) == 1) {
				g.club = 1
			}
			if (h.charAt(7) == 1) {
				g.crclub = 1
			}
			if (h.charAt(8) == 1) {
				g.group = 1
			}
			if (h.charAt(10) == 1) {
				g.music = 1
			}
			if (h.charAt(11) == 1 || this.cookie.userid.lastIndexOf("@focus.cn") > 0) {
				g.focus = 1
			}
			if (h.charAt(12) == 1 || this.cookie.userid.indexOf("@17173.com") > 0) {
				g["17173"] = 1
			}
			if (h.charAt(13) == 1) {
				g.vip = 1
			}
			if (h.charAt(14) == 1) {
				g.rpggame = 1
			}
			if (h.charAt(15) == 1) {
				g.pinyin = 1
			}
			if (h.charAt(16) == 1) {
				g.relaxgame = 1
			}
		} catch (k) {}
	},
	_parserRelation: function() {
		var f = this.cookie.relation;
		if (f != null && f.length > 0) {
			var a = f.split(";");
			for (var b = 0; b < a.length; b++) {
				var d = a[b].split(",");
				var c = d[2].split("#");
				for (var e = 0; e < c.length; e++) {
					if (PassportSC.appid == c[e]) {
						return d[0]
					}
				}
			}
		}
		return ""
	}
};
$.extend({
	params: function(d) {
		var b = 0;
		var c = [];
		if (d) {
			var a;
			for (a in d) {
				c[b] = a + "=" + d[a];
				b++
			}
		}
		return c.join("&")
	},
	requestJson: function(a, e, c, d, b) {
		if (c) {
			for (var f in c) {
				c[f] = $.filterXssWord(c[f])
			}
		}
		$.ajax({
			url: a,
			type: "post",
			dataType: "json",
			data: c,
			contentType: "application/x-www-form-urlencoded; charset=utf-8",
			success: function(g, h) {
				if (g == "" || g == null || g == undefined) {
					console.log(a);
					alert("返回数据格式错误");
					return
				}
				e(g)
			},
			error: function(g, j, h) {
				if (j == "error") {
					if (h == "Not Found") {}
					if (g.status == 500) {}
					if (g.status == 0) {} else {
						console.log(h)
					}
				} else {}
			}
		})
	},
	requestJsonp: function(a, b, f, d, e, c, g) {
		$.ajax({
			url: a,
			type: e || "post",
			dataType: "jsonp",
			data: d,
			jsonp: b || "callback",
			scriptCharset: "gbk",
			jsonpCallback: g,
			success: function(h) {
				f(h)
			},
			error: function(h, k, j) {
				if (k == "error") {
					if (j == "Not Found") {}
					if (h.status == 500) {}
					if (h.status == 0) {} else {
						console.log(j)
					}
				} else {}
			}
		})
	},
	filterXssWord: function(d) {
		if (!(typeof d == "string")) {
			return d
		}
		var b = [{
			echar: /</g,
			ochar: "&lt;"
		}, {
			echar: />/g,
			ochar: "&gt;"
		}, {
			echar: /"/g,
			ochar: "&quot;"
		}, {
			echar: /(^\s*)|(\s*$)/g,
			ochar: ""
		}, {
			echar: /'/g,
			ochar: "&acute;"
		}];
		if (d) {
			var a = 0;
			for (a = 0; a < b.length; a++) {
				var c = b[a].echar;
				d = d.replace(c, b[a].ochar)
			}
		}
		return d
	},
	stringToJson: function(a) {
		return JSON.parse(a)
	},
	getDocumentSize: function() {
		var b, e;
		if (window.innerHeight && window.scrollMaxY) {
			b = window.innerWidth + window.scrollMaxX;
			e = window.innerHeight + window.scrollMaxY
		} else {
			if (document.body && (document.body.scrollHeight > document.body.offsetHeight)) {
				b = document.body.scrollWidth;
				e = document.body.scrollHeight
			} else {
				if (document.body) {
					b = document.body.offsetWidth;
					e = document.body.offsetHeight
				}
			}
		}
		var a, d;
		if (window.innerHeight) {
			a = window.innerWidth;
			d = window.innerHeight
		} else {
			if (document.documentElement && document.documentElement.clientHeight) {
				a = document.documentElement.clientWidth;
				d = document.documentElement.clientHeight
			} else {
				if (document.body) {
					a = document.body.clientWidth;
					d = document.body.clientHeight
				}
			}
		}
		var c = (b < a) ? a : b;
		var f = (e < d) ? d : e;
		return {
			pageWidth: c,
			pageHeight: f,
			winWidth: a,
			winHeight: d
		}
	},
	getBrowserInfo: function() {
		var b = navigator.userAgent.toLowerCase();
		var d = (b.match(/\b(chrome|opera|safari|msie|firefox)\b/) || ["", "mozilla"])[1];
		var c = "(?:" + d + "|version)[\\/: ]([\\d.]+)";
		var a = (b.match(new RegExp(c)) || [])[1];
		return {
			brower: d,
			ver: a
		}
	},
	findAttr: function(c, a, b) {
		if (!c || !a) {
			return null
		}
		if (!b) {
			b = 1000
		}
		while (c && $.trim(c.attr(a)) == "" && b-- > 0) {
			c = c.parent()
		}
		return $.trim(c.attr(a)) == "" ? null : c
	}
});
var haoqq = {};
haoqq.namespace = function(c) {
	if (typeof c !== "string") {
		c = "anonymous"
	}
	var a = c.split(".");
	var e = haoqq;
	var d = e;
	var b, f;
	for (b = 0, f = a.length; b < f; ++b) {
		if (a[b]) {
			e = d[a[b]] = d[a[b]] || {};
			d = e
		}
	}
	return d
};
String.prototype.replaceAll = function(c, b, a) {
	if (!RegExp.prototype.isPrototypeOf(c)) {
		return this.replace(new RegExp(c, (a ? "gi" : "g")), b)
	} else {
		return this.replace(c, b)
	}
};
String.prototype.toDate = function() {
	var h = this;
	if (this.indexOf("-") < 0) {
		var c = this.substring(0, 4);
		var d = this.substring(4, 6);
		var a = this.substring(6, 8);
		h = c + "-" + d + "-" + a
	}
	var g = h.split("-");
	var e = parseInt(g[0]);
	var f = 1;
	var b = 1;
	if (g[1].indexOf("0") == 0) {
		f = parseInt(g[1].substring(1, 2)) - 1
	} else {
		f = parseInt(g[1]) - 1
	}
	if (g[2].indexOf("0") == 0) {
		b = parseInt(g[2].substring(1, 2))
	} else {
		b = parseInt(g[2])
	}
	return new Date(e, f, b)
};
String.prototype.endWith = function(a) {
	if (a == null || a == "" || this.length == 0 || a.length > this.length) {
		return false
	}
	if (this.substring(this.length - a.length) == a) {
		return true
	} else {
		return false
	}
	return true
};
String.prototype.startWith = function(a) {
	if (a == null || a == "" || this.length == 0 || a.length > this.length) {
		return false
	}
	if (this.substr(0, a.length) == a) {
		return true
	} else {
		return false
	}
	return true
};

function StringBuffer() {
	this._strs = new Array
}
StringBuffer.prototype.append = function(a) {
	this._strs.push(a)
};
StringBuffer.prototype.toString = function() {
	return this._strs.join("")
};
(function(a) {
	a.Singleton = function(b) {
		var c;
		return function() {
			return c || (c = b.apply(this, arguments))
		}
	}
})(haoqq.namespace("common"));
(function(b) {
	var a = {
		addListener: function(d, f) {
			var c, e;
			c = (e = this.listeners[d]) != null ? e : this.listeners[d] = [];
			return c.push(f)
		},
		modListener: function(c, d) {
			this.removeListener(c);
			return this.addListener(c, d)
		},
		removeListener: function(c) {
			var d;
			return (d = this.listeners[c]) != null ? d.length = 0 : void 0
		},
		trigger: function() {
			var e, c, f;
			var g = true;
			e = Array.prototype.shift.call(arguments);
			c = (f = this.listeners[e]) != null ? f : this.listeners[e] = [];
			for (var d = 0; d < c.length; d++) {
				if (c[d].apply(this, arguments) === false) {
					g = false
				}
			}
			return g
		},
		extendEvent: function(d) {
			for (var c in this) {
				d[c] = this[c]
			}
			d.listeners = [];
			return d
		}
	};
	b.Event = a
})(haoqq.namespace("common"));
(function(b) {
	var a = function() {
			a.prototype.loadImg = function() {
				this.trigger("loadImg")
			}
		};
	b.getTriggerInstance = haoqq.common.Singleton(function() {
		return haoqq.common.Event.extendEvent(new a())
	});
	b.createTrigger = function() {
		return haoqq.common.Event.extendEvent(new a())
	}
})(haoqq.namespace("imgloadtrigger"));
(function(c, b, a, e) {
	var d = c(b);
	c.fn.lazyload = function(g) {
		var f = this;
		var l;
		var h = {
			threshold: 0,
			failure_limit: 0,
			event: "scroll",
			effect: "show",
			container: b,
			data_attribute: "original",
			skip_invisible: true,
			appear: null,
			load: null,
			reload: false
		};

		function k() {
			var n = 0;
			f.each(function() {
				var o = c(this);
				if (h.skip_invisible && !o.is(":visible")) {
					return
				}
				if (c.abovethetop(this, h) || c.leftofbegin(this, h)) {} else {
					if (!c.belowthefold(this, h) && !c.rightoffold(this, h)) {
						o.trigger("appear");
						n = 0
					} else {
						if (++n > h.failure_limit) {
							return false
						}
					}
				}
			})
		}
		if (g) {
			if (e !== g.failurelimit) {
				g.failure_limit = g.failurelimit;
				delete g.failurelimit
			}
			if (e !== g.effectspeed) {
				g.effect_speed = g.effectspeed;
				delete g.effectspeed
			}
			c.extend(h, g);
			var m = c.getBrowserInfo();
			if ((m.brower == "msie" && m.ver < 8)) {
				h.effect = "show"
			}
		}
		l = (h.container === e || h.container === b) ? d : c(h.container);
		if (0 === h.event.indexOf("scroll")) {
			l.bind(h.event, function(n) {
				return k()
			})
		}
		this.each(function() {
			var n = this;
			var o = c(n);
			n.loaded = false;
			o.one("appear", function() {
				if (!this.loaded) {
					if (h.appear) {
						var p = f.length;
						h.appear.call(n, p, h)
					}
					c("<img />").bind("load", function() {
						o.hide().attr("src", o.data(h.data_attribute))[h.effect](h.effect_speed);
						n.loaded = true;
						var q = c.grep(f, function(s) {
							return !s.loaded
						});
						f = c(q);
						if (h.load) {
							var r = f.length;
							h.load.call(n, r, h)
						}
					}).attr("src", o.data(h.data_attribute))
				}
			});
			if (0 !== h.event.indexOf("scroll")) {
				o.bind(h.event, function(p) {
					if (!n.loaded) {
						o.trigger("appear")
					}
				})
			}
		});
		d.bind("resize", function(n) {
			k()
		});
		d.bind("nowload", function(n) {
			k()
		});
		var j = haoqq.imgloadtrigger.getTriggerInstance();
		j.addListener("loadImg", k);
		if ((/iphone|ipod|ipad.*os 5/gi).test(navigator.appVersion)) {
			d.bind("pageshow", function(n) {
				if (n.originalEvent.persisted) {
					f.each(function() {
						c(this).trigger("appear")
					})
				}
			})
		}
		c(b).load(function() {
			k()
		});
		if (h.reload) {
			k()
		}
		return this
	};
	c.belowthefold = function(g, h) {
		var f;
		if (h.container === e || h.container === b) {
			f = d.height() + d.scrollTop()
		} else {
			f = c(h.container).offset().top + c(h.container).height()
		}
		return f <= c(g).offset().top - h.threshold
	};
	c.rightoffold = function(g, h) {
		var f;
		if (h.container === e || h.container === b) {
			f = d.width() + d.scrollLeft()
		} else {
			f = c(h.container).offset().left + c(h.container).width()
		}
		return f <= c(g).offset().left - h.threshold
	};
	c.abovethetop = function(g, h) {
		var f;
		if (h.container === e || h.container === b) {
			f = d.scrollTop()
		} else {
			f = c(h.container).offset().top
		}
		return f >= c(g).offset().top + h.threshold + c(g).height()
	};
	c.leftofbegin = function(g, h) {
		var f;
		if (h.container === e || h.container === b) {
			f = d.scrollLeft()
		} else {
			f = c(h.container).offset().left
		}
		return f >= c(g).offset().left + h.threshold + c(g).width()
	};
	c.inviewport = function(f, g) {
		return !c.rightoffold(f, g) && !c.leftofbegin(f, g) && !c.belowthefold(f, g) && !c.abovethetop(f, g)
	};
	c.extend(c.expr[":"], {
		"below-the-fold": function(f) {
			return c.belowthefold(f, {
				threshold: 0
			})
		},
		"above-the-top": function(f) {
			return !c.belowthefold(f, {
				threshold: 0
			})
		},
		"right-of-screen": function(f) {
			return c.rightoffold(f, {
				threshold: 0
			})
		},
		"left-of-screen": function(f) {
			return !c.rightoffold(f, {
				threshold: 0
			})
		},
		"in-viewport": function(f) {
			return c.inviewport(f, {
				threshold: 0
			})
		},
		"above-the-fold": function(f) {
			return !c.belowthefold(f, {
				threshold: 0
			})
		},
		"right-of-fold": function(f) {
			return c.rightoffold(f, {
				threshold: 0
			})
		},
		"left-of-fold": function(f) {
			return !c.rightoffold(f, {
				threshold: 0
			})
		}
	})
})(jQuery, window, document);
(function(b, a, d, f) {
	var e = d(b);
	var c = function(h, g) {
			var k = d(h);
			var j = function(m) {
					if (d.inviewport(k, g)) {
						var l = k.parent();
						k.replaceWith(k.text());
						l.find("img.sync").lazyload();
						e.off("resize scroll", j)
					}
				};
			e.on("resize scroll ready", j)
		};
	d.fn.lazyrender = function(g) {
		var h = {};
		d.extend(h, g);
		d.each(this, function(j, k) {
			new c(k, h)
		})
	}
})(window, document, jQuery);
jQuery.extend({
	getLunarObj: function(p) {
		var h = new Array(19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42448, 83315, 21200, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46496, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19415, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448);
		var l = new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");
		var r = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
		var q = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");

		function j(v) {
			var t, u = 348;
			for (t = 32768; t > 8; t >>= 1) {
				u += (h[v - 1900] & t) ? 1 : 0
			}
			return (u + e(v))
		}
		function e(t) {
			if (a(t)) {
				return ((h[t - 1900] & 65536) ? 30 : 29)
			} else {
				return (0)
			}
		}
		function a(t) {
			return (h[t - 1900] & 15)
		}
		function m(u, t) {
			return ((h[u - 1900] & (65536 >> t)) ? 30 : 29)
		}
		function f(t) {
			var x, w = 0,
				v = 0;
			var u = new Date(1900, 0, 31);
			var y = (t - u) / 86400000;
			this.dayCyl = y + 40;
			this.monCyl = 14;
			for (x = 1900; x < 2050 && y > 0; x++) {
				v = j(x);
				y -= v;
				this.monCyl += 12
			}
			if (y < 0) {
				y += v;
				x--;
				this.monCyl -= 12
			}
			this.year = x;
			this.yearCyl = x - 1864;
			w = a(x);
			this.isLeap = false;
			for (x = 1; x < 13 && y > 0; x++) {
				if (w > 0 && x == (w + 1) && this.isLeap == false) {
					--x;
					this.isLeap = true;
					v = e(this.year)
				} else {
					v = m(this.year, x)
				}
				if (this.isLeap == true && x == (w + 1)) {
					this.isLeap = false
				}
				y -= v;
				if (this.isLeap == false) {
					this.monCyl++
				}
			}
			if (y == 0 && w > 0 && x == w + 1) {
				if (this.isLeap) {
					this.isLeap = false
				} else {
					this.isLeap = true;
					--x;
					--this.monCyl
				}
			}
			if (y < 0) {
				y += v;
				--x;
				--this.monCyl
			}
			this.month = x;
			this.day = y + 1
		}
		function n(u) {
			var t = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "腊月"];
			return t[u - 1]
		}
		function k(t) {
			var u = ["十", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
			if (t <= 10) {
				return "初" + u[t]
			} else {
				if (t < 20) {
					return "十" + u[t - 10]
				} else {
					if (t == 20) {
						return "二十"
					} else {
						if (t < 30) {
							return "廿" + u[t - 20]
						} else {
							return "三" + u[t - 30]
						}
					}
				}
			}
		}
		function s(u) {
			var t = u - 1900 + 36;
			return (r[t % 10] + q[t % 12])
		}
		function o(t) {
			return l[(t - 4) % 12]
		}
		function g(t) {
			var u = ["日", "一", "二", "三", "四", "五", "六"];
			return u[t.getDay()]
		}
		var c = {};
		c.week = g(p);
		var b = new f(p);
		c.lunarmonth = n(b.month);
		var d = Math.floor(b.day);
		c.lunarday = k(d);
		c.lunar = b.year + "-" + b.month + "-" + d;
		c.ganzhi = s(b.year);
		c.animal = o(b.year);
		return c
	}
});
jQuery.extend({
	getLunar: function(A) {
		var k = new Array(19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42448, 83315, 21200, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46496, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19415, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448);
		var u = new Array("鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪");
		var C = new Array("甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸");
		var B = new Array("子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥");
		var g = A.getFullYear();
		var m = A.getMonth();
		var v = A.getDate();

		function j(D) {
			return (C[D % 10] + B[D % 12])
		}
		function l(F) {
			var D, E = 348;
			for (D = 32768; D > 8; D >>= 1) {
				E += (k[F - 1900] & D) ? 1 : 0
			}
			return E + h(F)
		}
		function h(D) {
			if (a(D)) {
				return ((k[D - 1900] & 65536) ? 30 : 29)
			} else {
				return (0)
			}
		}
		function a(D) {
			return (k[D - 1900] & 15)
		}
		function z(E, D) {
			return ((k[E - 1900] & (65536 >> D)) ? 30 : 29)
		}
		function r(D) {
			var H, G = 0,
				F = 0;
			var E = new Date(1900, 0, 31);
			var I = parseInt((D - E) / 86400000);
			this.dayCyl = I + 40;
			this.monCyl = 14;
			for (H = 1900; H < 2050 && I > 0; H++) {
				F = l(H);
				I -= F;
				this.monCyl += 12
			}
			if (I < 0) {
				I += F;
				H--;
				this.monCyl -= 12
			}
			this.year = H;
			this.yearCyl = H - 1864;
			G = a(H);
			this.isLeap = false;
			for (H = 1; H < 13 && I > 0; H++) {
				if (G > 0 && H == (G + 1) && this.isLeap == false) {
					--H;
					this.isLeap = true;
					F = h(this.year)
				} else {
					F = z(this.year, H)
				}
				if (this.isLeap == true && H == (G + 1)) {
					this.isLeap = false
				}
				I -= F;
				if (this.isLeap == false) {
					this.monCyl++
				}
			}
			if (I == 0 && G > 0 && H == G + 1) {
				if (this.isLeap) {
					this.isLeap = false
				} else {
					this.isLeap = true;
					--H;
					--this.monCyl
				}
			}
			if (I < 0) {
				I += F;
				--H;
				--this.monCyl
			}
			this.month = H;
			this.day = I + 1
		}
		function b() {
			return (g + "年" + (m + 1) + "月" + v + "日")
		}
		function e() {
			var D = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
			return D[A.getDay()]
		}
		function w(D, I) {
			var G = new Array("日", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
			var F = new Array("初", "十", "廿", "卅", "　");
			var H;
			if (D > 10) {
				H = "十" + G[D - 10]
			} else {
				H = G[D]
			}
			H += "月";
			var E;
			switch (I) {
			case 10:
				E = "初十";
				break;
			case 20:
				E = "二十";
				break;
			case 30:
				E = "三十";
				break;
			default:
				E = F[Math.floor(I / 10)];
				E += G[I % 10]
			}
			return {
				month: H,
				day: E
			}
		}
		function y(F, E) {
			var D = new Date((31556925974.7 * (F - 1900) + d[E] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
			return (D.getUTCDate())
		}
		function o() {
			var F = {};
			var E = new Date(g, m, v);
			var I = new r(E);
			if (m < 2) {
				F.ganzhiY = j(g - 1900 + 36 - 1)
			} else {
				F.ganzhiY = j(g - 1900 + 36)
			}
			F.ganzhiM = j((g - 1900) * 12 + m + 12);
			var D = y(g, 2);
			var H = y(g, m * 2);
			var G = Date.UTC(g, m, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
			if (m == 1 && v >= D) {
				F.ganzhiY = j(g - 1900 + 36)
			}
			if (v >= H) {
				F.ganzhiM = j((g - 1900) * 12 + m + 13)
			}
			F.ganzhiD = j(G + v - 1);
			F.animal = u[(g - 4) % 12];
			return F
		}
		function p() {
			var D = new Date(g, m, v);
			var E = new r(D);
			return w(E.month, E.day)
		}
		var d = new Array(0, 21208, 42467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758);
		var q = new Array("小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至");
		var t = new Array("0101*春节", "0115 元宵节", "0505 端午节", "0707 七夕情人节", "0715 中元节", "0815 中秋节", "0909 重阳节", "1208 腊八节", "1224 小年");
		var x = new Array("0101*元旦", "0214 情人节", "0308 妇女节", "0312 植树节", "0315 消费者权益日", "0401 愚人节", "0501 劳动节", "0504 青年节", "0512 护士节", "0601 儿童节", "0701 建党节", "0801 建军节", "0910 教师节", "1001*国庆节", "1006 老人节", "1024 联合国日", "1111 光棍节", "1225 圣诞节");
		var n = 2014;
		var s = new Array("0101 休假", "0131 休假", "0201 休假", "0202 休假", "0203 休假", "0204 休假", "0205 休假", "0206 休假", "0405 休假", "0406 休假", "0407 休假", "0406 休假", "0501 休假", "0502 休假", "0503 休假", "0531 休假", "0601 休假", "0602 休假", "0906 休假", "0907 休假", "0908 休假", "1001 休假", "1002 休假", "1003 休假", "1004 休假", "1005 休假", "1006 休假", "1007 休假");

		function f() {
			var M = new Date(g, m, v);
			var G = new r(M);
			var D = new Array(3);
			var K = "",
				P = "",
				I = "",
				N = "",
				O = false,
				F, E;
			for (var H = 0, J = t.length; H < J; H++) {
				if (t[H].match(/^(\d{2})(.{2})([\s\*])(.+)$/)) {
					F = Number(RegExp.$1) - G.month;
					E = Number(RegExp.$2) - G.day;
					if (F == 0 && E == 0) {
						N = RegExp.$4
					}
				}
			}
			for (var H = 0, J = x.length; H < J; H++) {
				if (x[H].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)) {
					F = Number(RegExp.$1) - (m + 1);
					E = Number(RegExp.$2) - v;
					if (F == 0 && E == 0) {
						I = RegExp.$4
					}
				}
			}
			if (g == n) {
				for (var H = 0, J = s.length; H < J; H++) {
					if (s[H].match(/^(\d{2})(\d{2})([\s\*])(.+)$/)) {
						F = Number(RegExp.$1) - (m + 1);
						E = Number(RegExp.$2) - v;
						if (F == 0 && E == 0) {
							O = true
						}
					}
				}
			}
			F = new Date((31556925974.7 * (g - 1900) + d[m * 2 + 1] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
			E = F.getUTCDate();
			if (E == v) {
				P = q[m * 2 + 1]
			}
			F = new Date((31556925974.7 * (g - 1900) + d[m * 2] * 60000) + Date.UTC(1900, 0, 6, 2, 5));
			E = F.getUTCDate();
			if (E == v) {
				P = q[m * 2]
			}
			var L = {};
			L.isRestDay = O;
			L.solarTerms = P;
			L.solarFestival = I;
			L.lunarFestival = N;
			return L
		}
		var c = {};
		c.date = b();
		c.lunar = p();
		c.week = e();
		c.ganzhi = o();
		c.festival = f();
		if (2013 == g && 11 == m && 21 == v) {
			c.festival.solarTerms = ""
		} else {
			if (2013 == g && 11 == m && 22 == v) {
				c.festival.solarTerms = "冬至"
			}
		}
		return c
	}
});
(function(a) {
	a.fn.extend({
		autocomplete: function(b) {
			var c = true;
			b = a.extend({}, a.Autocompleter.defaults, {
				url: b.dataUrl || null,
				data: b.data || null,
				delay: c ? a.Autocompleter.defaults.delay : 10,
				enginModel: b.enginModel,
				enginController: b.enginController
			}, b);
			b.highlight = b.highlight ||
			function(d) {
				return d
			};
			b.formatMatch = b.formatMatch || b.formatItem;
			return this.each(function() {
				new a.Autocompleter(this, b)
			})
		},
		result: function(b) {
			return this.bind("result", b)
		},
		search: function(b) {
			return this.trigger("search", [b])
		},
		setOptions: function(b) {
			return this.trigger("setOptions", [b])
		},
		unautocomplete: function() {
			return this.trigger("unautocomplete")
		}
	});
	a.Autocompleter = function(m, l) {
		var b = {
			UP: 38,
			DOWN: 40,
			DEL: 46,
			TAB: 9,
			RETURN: 13,
			ESC: 27,
			COMMA: 188,
			PAGEUP: 33,
			PAGEDOWN: 34,
			BACKSPACE: 8
		};
		var c = a(m).attr("autocomplete", "off").addClass(l.inputClass);
		var f;
		var v = "";
		var g = 0;
		var t;
		var p = {
			mouseDownOnSelect: false
		};
		var u = a.Autocompleter.Select(l, m, e, p);
		var w;
		/opera/.test(navigator.userAgent.toLowerCase()) && a(m.form).bind("submit.autocomplete", function() {
			if (w) {
				w = false;
				return false
			}
		});
		c.bind((/opera/.test(navigator.userAgent.toLowerCase()) ? "keypress" : "keydown") + ".autocomplete", function(y) {
			g = 1;
			t = y.keyCode;
			switch (y.keyCode) {
			case b.UP:
				y.preventDefault();
				if (u.visible()) {
					u.prev()
				} else {
					s(0, true)
				}
				break;
			case b.DOWN:
				y.preventDefault();
				if (u.visible()) {
					u.next()
				} else {
					s(0, true)
				}
				break;
			case b.PAGEUP:
				y.preventDefault();
				if (u.visible()) {
					u.pageUp()
				} else {
					s(0, true)
				}
				break;
			case b.PAGEDOWN:
				y.preventDefault();
				if (u.visible()) {
					u.pageDown()
				} else {
					s(0, true)
				}
				break;
			case l.multiple && a.trim(l.multipleSeparator) == "," && b.COMMA:
			case b.TAB:
			case b.RETURN:
				if (e()) {
					y.preventDefault();
					w = true;
					return false
				}
				break;
			case b.ESC:
				u.hide();
				break;
			default:
				clearTimeout(f);
				f = setTimeout(s, l.delay);
				break
			}
		}).focus(function() {
			g++
		}).blur(function() {
			g = 0;
			if (!p.mouseDownOnSelect) {
				r()
			}
		}).click(function() {
			if (g++ > 1 && !u.visible()) {
				s(0, true)
			}
		}).bind("search", function() {
			var y = (arguments.length > 1) ? arguments[1] : null;

			function z(D, C) {
				var B;
				if (C && C.length) {
					for (var A = 0; A < C.length; A++) {
						if (C[A].result.toLowerCase() == D.toLowerCase()) {
							B = C[A];
							break
						}
					}
				}
				if (typeof y == "function") {
					y(B)
				} else {
					c.trigger("result", B && [B.data, B.value])
				}
			}
			a.each(k(c.val()), function(A, B) {
				j(B, z, z)
			})
		}).bind("setOptions", function() {
			a.extend(l, arguments[1])
		}).bind("unautocomplete", function() {
			u.unbind();
			c.unbind();
			a(m.form).unbind(".autocomplete")
		}).bind("input", function() {
			if (g++ > 1) {
				s(0, true)
			}
		});

		function e() {
			var C = u.selected();
			if (!C) {
				return false
			}
			var z = C.name;
			v = z;
			if (l.multiple) {
				var E = k(c.val());
				if (E.length > 1) {
					var B = l.multipleSeparator.length;
					var D = a(m).selection().start;
					var y, A = 0;
					a.each(E, function(F, G) {
						A += G.length;
						if (D <= A) {
							y = F;
							return false
						}
						A += B
					});
					E[y] = z;
					z = E.join(l.multipleSeparator)
				}
				z += l.multipleSeparator
			}
			c.val(z);
			q();
			c.trigger("result", [C.data, C.value]);
			if (l.callback) {
				l.callback(C.name, C.value)
			}
			return true
		}
		function s(A, z) {
			if (t == b.DEL) {
				u.hide();
				return
			}
			var y = c.val();
			if (z && y == v) {
				return
			}
			v = y;
			y = h(y);
			if (y.length >= l.minChars) {
				c.addClass(l.loadingClass);
				if (!l.matchCase) {
					y = y.toLowerCase()
				}
				j(y, d, q)
			} else {
				x();
				u.hide();
				l.callback("", "")
			}
		}
		function k(y) {
			if (!y) {
				return [""]
			}
			if (!l.multiple) {
				return [a.trim(y)]
			}
			return a.map(y.split(l.multipleSeparator), function(z) {
				return a.trim(y).length ? a.trim(z) : null
			})
		}
		function h(y) {
			if (!l.multiple) {
				return y
			}
			var A = k(y);
			if (A.length == 1) {
				return A[0]
			}
			var z = a(m).selection().start;
			if (z == y.length) {
				A = k(y)
			} else {
				A = k(y.replace(y.substring(z), ""))
			}
			return A[A.length - 1]
		}
		function o(y, z) {
			if (l.autoFill && (h(c.val()).toLowerCase() == y.toLowerCase()) && t != b.BACKSPACE) {
				c.val(c.val() + z.substring(h(v).length));
				a(m).selection(v.length, v.length + z.length)
			}
		}
		function r() {
			clearTimeout(f);
			f = setTimeout(q, 200)
		}
		function q() {
			var y = u.visible();
			u.hide();
			clearTimeout(f);
			x();
			if (l.mustMatch) {
				c.search(function(z) {
					if (!z) {
						if (l.multiple) {
							var A = k(c.val()).slice(0, -1);
							c.val(A.join(l.multipleSeparator) + (A.length ? l.multipleSeparator : ""))
						} else {
							c.val("");
							c.trigger("result", null)
						}
					}
				})
			}
		}
		function d(z, y) {
			if (y && y.length && g) {
				x();
				u.display(y, z);
				o(z, y[0].value);
				u.show()
			} else {
				q()
			}
		}
		function j(B, E, A) {
			if (!l.matchCase) {
				B = B.toLowerCase()
			}
			var D = {};
			if ((typeof l.url == "string") && (l.url.length > 0)) {
				var F = {
					timestamp: +new Date()
				};
				a.each(l.extraParams, function(G, H) {
					F[G] = typeof H == "function" ? H() : H
				});
				if (l.forSearch === true) {
					var z = l.enginController.getCurChannel();
					var C = l.enginController.getCurEngin();
					var y = l.enginModel.getSmartInfo(z, C);
					if (y.type == "jsonp") {
						window.sogou = window.sogou || {};
						window.sogou.sug = window.sogou.sug ||
						function(I) {
							var H = I[1] || [];
							var G = l.enginModel.getSmartDataHandler && l.enginModel.getSmartDataHandler(H, z, C) || n(H);
							if (G.length == 0) {
								l.callback("", "-1")
							}
							E(B, G)
						};
						a.requestJsonp(y.smartUrl, y.jsonpName, function(G) {}, l.enginModel.getSmartPostParam(h(B), z, C), l.postType, a.noop, y.jpCallbackName)
					} else {
						if (y.type == "json") {
							a.requestJson(y.smartUrl, function(H) {
								var G = l.enginModel.getSmartDataHandler && l.enginModel.getSmartDataHandler(H, z, C) || n(H);
								if (G.length == 0) {
									l.callback("", "-1")
								}
								E(B, G)
							}, l.enginModel.getSmartPostParam(h(B), z, C), l.postType)
						}
					}
				} else {
					if (l.jsonp) {
						a.requestJsonp(l.url, l.jsonpName, function(H) {
							var G = l.parse && l.parse(H) || n(H);
							if (G.length == 0) {
								l.callback("", "-1")
							}
							E(B, G)
						}, {
							w: h(B),
							limit: l.max
						}, l.postType)
					} else {
						a.requestJson(l.url, function(H) {
							var G = l.parse && l.parse(H) || n(H);
							if (G.length == 0) {
								l.callback("", "-1")
							}
							E(B, G)
						}, {
							autoword: h(B),
							limit: l.max
						}, l.postType)
					}
				}
			} else {
				u.emptyList();
				A(B)
			}
		}
		function n(B) {
			var z = [];
			var A = B.datalist;
			for (var y = 0; y < A.length; y++) {
				var C = A[y];
				if (C) {
					z[z.length] = {
						name: C.name,
						value: C.value,
						result: l.formatResult && l.formatResult(C, C[0]) || C.value
					}
				}
			}
			return z
		}
		function x() {
			c.removeClass(l.loadingClass)
		}
	};
	a.Autocompleter.defaults = {
		inputClass: "ac_input",
		resultsClass: "ac_results",
		loadingClass: "ac_loading",
		minChars: 1,
		delay: 400,
		matchCase: false,
		matchSubset: true,
		matchContains: false,
		cacheLength: 10,
		max: 100,
		mustMatch: false,
		extraParams: {},
		selectFirst: true,
		formatItem: function(b) {
			return b[0]
		},
		formatMatch: null,
		autoFill: false,
		width: 0,
		callback: function(b, c) {},
		multiple: false,
		multipleSeparator: ", ",
		highlight: function(c, b) {
			return c.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + b.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^<>]*>)(?![^&;]+;)", "gi"), "<strong>$1</strong>")
		},
		scroll: true,
		scrollHeight: 180,
		jsonp: false,
		jsonpName: "callback",
		forSearch: false,
		postType: "POST"
	};
	a.Autocompleter.Select = function(f, k, q, m) {
		var j = {
			ACTIVE: "ac_over"
		};
		var t, d = -1,
			r, n = "",
			s = true,
			h, p;

		function o() {
			if (!s) {
				return
			}
			h = a("<div/>").hide().addClass(f.resultsClass).css("position", "absolute").appendTo(document.body);
			p = a("<ul/>").appendTo(h).mouseover(function(u) {
				if (l(u).nodeName && l(u).nodeName.toUpperCase() == "LI") {
					d = a("li", p).removeClass(j.ACTIVE).index(l(u));
					a(l(u)).addClass(j.ACTIVE)
				}
			}).click(function(u) {
				a(l(u)).addClass(j.ACTIVE);
				q();
				k.focus();
				("function" == typeof window.__send) && __send("click", "module=wc_0_suggest", false, true);
				return false
			}).mousedown(function() {
				m.mouseDownOnSelect = true
			}).mouseup(function() {
				m.mouseDownOnSelect = false
			});
			if (f.width > 0) {
				h.css("width", f.width)
			}
			s = false
		}
		function l(v) {
			var u = v.target;
			while (u && u.tagName != "LI") {
				u = u.parentNode
			}
			if (!u) {
				return []
			}
			return u
		}
		function c(u) {
			t.slice(d, d + 1).removeClass(j.ACTIVE);
			e(u);
			var w = t.slice(d, d + 1).addClass(j.ACTIVE);
			if (f.scroll) {
				var v = 0;
				t.slice(0, d).each(function() {
					v += this.offsetHeight
				});
				if ((v + w[0].offsetHeight - p.scrollTop()) > p[0].clientHeight) {
					p.scrollTop(v + w[0].offsetHeight - p.innerHeight())
				} else {
					if (v < p.scrollTop()) {
						p.scrollTop(v)
					}
				}
			}
		}
		function e(u) {
			d += u;
			if (d < 0) {
				d = t.size() - 1
			} else {
				if (d >= t.size()) {
					d = 0
				}
			}
		}
		function b(u) {
			return f.max && f.max < u ? f.max : u
		}
		function g() {
			p.empty();
			for (var v = 0; v < r.length; v++) {
				if (!r[v]) {
					continue
				}
				var u = a("<li/>").html(f.highlight((r[v]).name, n)).addClass(v % 2 == 0 ? "ac_even" : "ac_odd").appendTo(p)[0];
				a.data(u, "ac_data", r[v])
			}
			t = p.find("li");
			if (f.selectFirst) {
				t.slice(0, 1).addClass(j.ACTIVE);
				d = 0
			}
			if (a.fn.bgiframe) {
				p.bgiframe()
			}
		}
		return {
			display: function(v, u) {
				o();
				r = v;
				n = u;
				g()
			},
			next: function() {
				c(1)
			},
			prev: function() {
				c(-1)
			},
			pageUp: function() {
				if (d != 0 && d - 8 < 0) {
					c(-d)
				} else {
					c(-8)
				}
			},
			pageDown: function() {
				if (d != t.size() - 1 && d + 8 > t.size()) {
					c(t.size() - 1 - d)
				} else {
					c(8)
				}
			},
			hide: function() {
				h && h.hide();
				t && t.removeClass(j.ACTIVE);
				d = -1
			},
			visible: function() {
				return h && h.is(":visible")
			},
			current: function() {
				return this.visible() && (t.filter("." + j.ACTIVE)[0] || f.selectFirst && t[0])
			},
			show: function() {
				var w = a(k).offset();
				h.css({
					width: typeof f.width == "string" || f.width > 0 ? f.width : (a(k).width() + 4),
					top: w.top + k.offsetHeight,
					left: w.left
				}).show();
				if (f.scroll) {
					p.scrollTop(0);
					p.css({
						maxHeight: f.scrollHeight,
						overflow: "auto"
					});
					if (/msie/.test(navigator.userAgent.toLowerCase()) && typeof document.body.style.maxHeight === "undefined") {
						var u = 0;
						t.each(function() {
							u += this.offsetHeight
						});
						var v = u > f.scrollHeight;
						p.css("height", v ? f.scrollHeight : u);
						if (!v) {
							t.width(p.width() - parseInt(t.css("padding-left")) - parseInt(t.css("padding-right")))
						}
					}
				}
			},
			selected: function() {
				var u = t && t.filter("." + j.ACTIVE).removeClass(j.ACTIVE);
				return u && u.length && a.data(u[0], "ac_data")
			},
			emptyList: function() {
				p && p.empty()
			},
			unbind: function() {
				h && h.remove()
			}
		}
	};
	a.fn.selection = function(j, c) {
		if (j !== undefined) {
			return this.each(function() {
				if (this.createTextRange) {
					var k = this.createTextRange();
					if (c === undefined || j == c) {
						k.move("character", j);
						k.select()
					} else {
						k.collapse(true);
						k.moveStart("character", j);
						k.moveEnd("character", c);
						k.select()
					}
				} else {
					if (this.setSelectionRange) {
						this.setSelectionRange(j, c)
					} else {
						if (this.selectionStart) {
							this.selectionStart = j;
							this.selectionEnd = c
						}
					}
				}
			})
		}
		var g = this[0];
		if (g.createTextRange) {
			var d = document.selection.createRange(),
				h = g.value,
				b = "<->",
				e = d.text.length;
			d.text = b;
			var f = g.value.indexOf(b);
			g.value = h;
			this.selection(f, f + e);
			return {
				start: f,
				end: f + e
			}
		} else {
			if (g.selectionStart !== undefined) {
				return {
					start: g.selectionStart,
					end: g.selectionEnd
				}
			}
		}
	}
})(jQuery);
(function(a) {
	var b = function() {
			this.cache = {}
		};
	b.prototype.add = function(c, d) {
		this.cache[c] == null ? this.cache[c] = d : void 0
	};
	b.prototype.remove = function(c, d) {
		this.cache[c] = null
	};
	b.prototype.set = function(c, d) {
		this.cache[c] = d
	};
	b.prototype.get = function(c) {
		return this.cache[c]
	};
	b.prototype.clear = function() {
		this.cache = {}
	};
	b.prototype.size = function() {
		var c = 0;
		for (var d in this.cache) {
			if (this.cache[d] != null) {
				c++
			}
		}
		return c
	};
	a.getCacheInstance = haoqq.common.Singleton(function() {
		return new b()
	});
	a.createCache = function() {
		return new b()
	}
})(haoqq.namespace("util"));
(function(b) {
	var a = function() {
			a.prototype.start = function() {
				if ( !! this.__start) {
					return
				}
				var c = [].slice.call(arguments, 0);
				this.init(c);
				this.initEvent(c);
				this.run(c);
				this.__start = 1
			};
			a.prototype.expInit = function() {
				haoqq.common.Event.extendEvent(this)
			};
			a.prototype.expStart = function() {
				var c = [].slice.call(arguments, 0);
				this.trigger(this.getEtag(), c)
			};
			a.prototype.getEtag = function() {
				var c = haoqq.util.getCacheInstance();
				var d = c.get("labno");
				if (!d) {
					var f = $("#ab_exp_lab_fileds").find("input");
					if (f.length > 0) {
						var e = [];
						f.each(function() {
							e.push($(this).val())
						});
						d = e.join("#");
						c.set("labno", d)
					}
				}
				return d
			};
			a.prototype.init = function() {};
			a.prototype.initEvent = function() {};
			a.prototype.run = function() {}
		};
	b.Template = a
})(haoqq.namespace("common"));
(function(c) {
	var b = {
		set: function(f, h, g, d, j) {
			if (g == "long") {
				var e = new Date();
				e.setTime(e.getTime() + (3650 * 24 * 60 * 60 * 1000));
				g = e.toUTCString()
			} else {
				if (typeof g == "object") {
					g = g.toUTCString()
				}
			}
			document.cookie = (f + "=" + h + (g ? "; expires=" + g : "") + (d ? ";domain=" + d : "") + (j ? ";path=" + j : ""))
		},
		get: function(e) {
			var h = null;
			if (document.cookie && document.cookie != "") {
				var g = document.cookie.split(";");
				for (var f = 0; f < g.length; f++) {
					var d = $.trim(g[f]);
					if (d.substring(0, e.length + 1) == (e + "=")) {
						h = decodeURIComponent(d.substring(e.length + 1));
						break
					}
				}
			}
			return h
		},
		del: function(e, d, f) {
			this.set(e, null, new Date(1970, 1, 1), d, f)
		}
	};
	var a = (function() {
		var e, j, l;
		if (typeof window.localStorage == "object") {
			var f = window.localStorage;
			e = function(d) {
				return f.getItem(d)
			};
			j = function(d, n) {
				f.setItem(d, n)
			};
			l = function(d) {
				f.removeItem(d)
			}
		} else {
			if (document.body.addBehavior) {
				var k = document.body,
					m = "faxin";
				var h = function() {
						try {
							k.load(m)
						} catch (d) {}
					};
				var g = function() {
						try {
							k.save(m)
						} catch (d) {}
					};
				k.addBehavior("#default#userData");
				e = function(d) {
					h();
					return k.getAttribute(d)
				};
				j = function(d, n) {
					h();
					k.setAttribute(d, n);
					g()
				};
				l = function(d) {
					h();
					k.removeAttribute(d);
					g()
				}
			}
		}
		if (!l) {
			return b
		} else {
			return {
				get: e,
				set: j,
				del: l
			}
		}
	})();
	c.Storage = function() {
		return a
	};
	c.Cookie = function() {
		return b
	}
}(haoqq));
(function(b) {
	b.filterFuckWord = function(f) {
		if (!(typeof f == "string")) {
			return f
		}
		var d = [{
			echar: /</g,
			ochar: "&lt;"
		}, {
			echar: />/g,
			ochar: "&gt;"
		}, {
			echar: /"/g,
			ochar: "&quot;"
		}, {
			echar: /(^\s*)|(\s*$)/g,
			ochar: ""
		}, {
			echar: /'/g,
			ochar: "&acute;"
		}];
		if (f) {
			var c = 0;
			for (c = 0; c < d.length; c++) {
				var e = d[c].echar;
				f = f.replace(e, d[c].ochar)
			}
		}
		return f
	};
	b.len = function a(f) {
		var d = 0;
		var c = f.split("");
		for (var e = 0; e < c.length; e++) {
			if (c[e].charCodeAt(0) < 299) {
				d++
			} else {
				d += 2
			}
		}
		return d
	};
	b.getUrl = function(c) {
		if (!/^(http|https|ftp):\/\//.test(c)) {
			c = "http://" + c
		}
		return c
	};
	b.getFavIcon = function(c) {
		return c.replace(/(.+?:\/\/.+?\/).*$/g, "$1") + "/favicon.ico"
	};
	b.isAncestor = function(c, d) {
		if (!d || !c) {
			return false
		}
		while (d && d !== c) {
			d = d.parentNode
		}
		return d === c
	};
	b.readGet = function() {
		var d = window.location.href.replace(/&amp;/g, "&").replace(/\#.*$/, "");
		var c = {};
		var g, f;
		if (d.indexOf("?") > -1) {
			uriArr = d.split("?");
			paraStr = uriArr[1]
		} else {
			return c
		}
		if (paraStr.indexOf("&") > -1) {
			g = paraStr.split("&")
		} else {
			g = new Array(paraStr)
		}
		for (var h = 0; h < g.length; h++) {
			try {
				g[h] = g[h].indexOf("=") > -1 ? g[h] : g[h] + "=";
				f = g[h].split("=");
				c[f[0]] = decodeURIComponent(f[1].replace(/\+/g, " "))
			} catch (j) {}
		}
		return c
	};
	b.getBrowser = function() {
		if (typeof window._bro_v != "undefined") {
			return window._bro_v
		}
		var d;
		var c = navigator.userAgent.toLowerCase();
		if (window.ActiveXObject) {
			d = "msie " + c.match(/msie (\d+)/)[1]
		} else {
			if (window.opera) {
				d = "opera " + (typeof window.opera.version == "function" ? window.opera.version().match(/\d+/)[0] : c.match(/opera.(\d+)/)[1])
			}
		}
		if (!d) {
			d = (c.match(/firefox\/([\d]+)/)) ? "firefox " + RegExp.$1 : (c.match(/chrome\/(\d+)/)) ? "chrome " + RegExp.$1 : (c.match(/version\/(\d+).*safari/)) ? "safari " + RegExp.$1 : null
		}
		window._bro_v = d;
		return d
	};
	b.convertDate = function(e) {
		var c = e.split("-");
		var f = c[1].indexOf("0") == 0 ? c[1].substring(1) : c[1];
		var d = c[2].indexOf("0") == 0 ? c[2].substring(1) : c[2];
		return f + "月" + d + "日"
	};
	b.getUiid = function() {
		var e = new Date().getUTCMilliseconds();
		var d = (Math.round(Math.random() * 2147483647) * e) % 10000000000;
		var c = (new Date()).valueOf().toString().substr(5) + d;
		return c
	};
	b.getACSRFToken = function(d) {
		if (!d) {
			return ""
		}
		var f = 8618;
		for (var e = 0, c = d.length; e < c; ++e) {
			f += d.charAt(e).charCodeAt()
		}
		return f & 2147483647
	};
	b.paramsLocation = function(g) {
		var d = window.location.href;
		var e = {};
		if (g) {
			if (d.indexOf("?") > 0) {
				var l = d.substring(d.indexOf("?") + 1, d.length);
				var f = l.split("&");
				for (var h = 0; h < f.length; h++) {
					if (f[h] && (f[h]).length > 1) {
						var c = f[h].split("=");
						if (!g[c[0]]) {
							e[c[0]] = c[1]
						}
					}
				}
				e = $.extend(e, g);
				d = d.substring(0, d.indexOf("?") + 1);
				var j = 0;
				for (var k in e) {
					if (j == 0) {
						d = d + k + "=" + e[k]
					} else {
						d = d + "&" + k + "=" + e[k]
					}
					j++
				}
			} else {
				e = $.extend(e, g);
				d = d + "?";
				var j = 0;
				for (var k in e) {
					if (j == 0) {
						d = d + k + "=" + e[k]
					} else {
						d = d + "&" + k + "=" + e[k]
					}
					j++
				}
			}
		}
		return d
	};
	b.arrayContains = function(d, g, e) {
		var c = d.length;
		e = (typeof e !== "number") ? c : e;
		e = Math.min(e, c);
		e = e < 0 ? 0 : e;
		for (var f = 0; f < e; ++f) {
			if (g == d[f]) {
				return true
			}
		}
		return false
	}
}(haoqq.namespace("util")));
(function(a) {
	var b = {
		_support: (function() {
			return "placeholder" in document.createElement("input")
		})(),
		init: function(c) {
			if (!b._support) {
				var d = $("input");
				b.create(d, c)
			}
		},
		create: function(f, d) {
			var c;
			var d = d || "placeholder";
			if (!f.length) {
				f = [f]
			}
			for (var e = 0; e < f.length; e++) {
				c = $(f[e]);
				if (!b._support && c.attr("placeholder")) {
					b._setValue(c, d);
					c.focus(function(g) {
						if ($(this).val() === $(this).attr("placeholder")) {
							$(this).val("");
							$(this).removeClass(d)
						}
					});
					c.blur(function(g) {
						if ($(this).val() === "") {
							b._setValue($(this), d)
						}
					})
				}
			}
		},
		_setValue: function(d, c) {
			if (d.attr("type") == "password") {
				d.val("")
			} else {
				d.val(d.attr("placeholder"))
			}
			d.addClass(c)
		}
	};
	a.PlaceHolder = function() {
		return b
	}
}(haoqq));
(function(b) {
	var a = function() {
			this.datas = []
		};
	var c = a.prototype;
	c.size = function() {
		return this.datas.length
	};
	c.isEmpty = function() {
		return this.size() === 0
	};
	c.contains = function(e) {
		return this.datas.indexOf(e) !== -1
	};
	c.indexOf = function(f) {
		for (var e in this.datas) {
			if (this.datas[e] === f) {
				return e
			}
		}
		return -1
	};
	c.lastIndexOf = function(f) {
		for (var e = this.size(); e >= 0; e--) {
			if (this.datas[e] === f) {
				return e
			}
		}
	};
	c.toArray = function() {
		return this.datas
	};
	c.outOfBound = function(e) {
		return e < 0 || e > (this.size() - 1)
	};
	c.get = function(e) {
		if (this.outOfBound(e)) {
			return null
		}
		return this.datas[e]
	};
	c.set = function(e, f) {
		this.datas[e] = f
	};
	c.add = function(e) {
		this.datas.push(e)
	};
	c.insert = function(e, f) {
		if (this.outOfBound(e)) {
			return
		}
		this.datas.splice(e, 0, f)
	};
	c.remove = function(e) {
		if (this.outOfBound(e)) {
			return false
		}
		this.datas.splice(e, 1);
		return true
	};
	c.removeValue = function(e) {
		if (this.contains(e)) {
			this.remove(this.indexOf(e));
			return true
		}
		return false
	};
	c.clear = function() {
		this.datas.splice(0, this.size())
	};
	c.addAll = function(f) {
		if (!f instanceof a) {
			return false
		}
		for (var e in f.datas) {
			this.add(f.get(e))
		}
		return true
	};
	c.insertAll = function(e, f) {
		if (this.outOfBound(e)) {
			return false
		}
		if (!f instanceof a) {
			return false
		}
		var g = e;
		for (var e in f.datas) {
			this.insert(g++, f.get(e))
		}
		return true
	};

	function d(f, e) {
		return f - e
	}
	c.sort = function(e) {
		if (e) {
			this.datas.sort(d);
			return
		}
		this.datas.sort()
	};
	c.toString = function() {
		return "[" + this.datas.join() + "]"
	};
	c.valueOf = function() {
		return this.toString()
	};
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(g) {
			var f = this;
			for (var e = 0; e < f.length; e++) {
				if (f[e] == g) {
					return e
				}
			}
			return -1
		}
	}
	b.ArrayList = function() {
		return new a()
	}
}(haoqq.namespace("util")));
(function(b) {
	var a = function(h, j, o, f, n) {
			if (!h || !j) {
				return null
			}
			this.selectedIndex = -1;
			this.showing = false;
			var k = this;
			this.options = j[0].getElementsByTagName("li");
			this.links = j[0].getElementsByTagName("a");
			this.maxIndex = this.options.length;
			this.defaultValue = h.html();
			this.onShow = f ||
			function(p) {
				return true
			};
			this.onClick = n || $.noop;

			function l() {
				return this.selectedIndex
			}
			function g(p) {
				this.selectedIndex = p;
				if (p === -1) {
					h.html(this.defaultValue)
				} else {
					h.html(this.links[p].innerHTML)
				}
				return true
			}
			function e() {
				this.showing ? this.close() : this.show()
			}
			this.show = function() {
				if (this.onShow(j)) {
					j.show();
					this.showing = true
				}
			};
			this.close = function() {
				j.hide();
				this.showing = false
			};

			function m() {
				h.click(function(p) {
					k.toggle();
					p.preventDefault();
					p.stopPropagation();
					if (n) {
						n()
					}
				});
				if (o) {
					o.click(function(p) {
						k.toggle();
						p.preventDefault();
						p.stopPropagation();
						if (n) {
							n()
						}
					})
				}
				j.click(function(r) {
					r.preventDefault();
					r.stopPropagation();
					var s = r.target;
					while (s.tagName != "LI") {
						if (s === document.body) {
							return
						}
						s = s.parentNode
					}
					k.close();
					var q = k.options;
					for (var p = 0; p < q.length; ++p) {
						if (q[p] === s) {
							if (p === k.selectedIndex) {
								return
							}
							k.setSelectIdx(p);
							if (typeof(k.onchange) == "function") {
								k.onchange()
							}
							return
						}
					}
				});
				$(document).click(function(p) {
					var q = p.target;
					if (!haoqq.util.isAncestor(h[0], q)) {
						k.close()
					}
				})
			}
			function c(p) {
				var q = this.options[p].getAttribute("optionvalue");
				if (typeof(q) == "undefined") {
					q = ""
				}
				return q
			}
			function d(p) {
				var q, r;
				for (q = 0, r = this.options.length; q < r; ++q) {
					if (this.options[q].getAttribute("optionvalue") === p) {
						return q
					}
				}
				return -1
			}
			m();
			this.setSelectIdx = g;
			this.getSelectIdx = l;
			this.getOptions = c;
			this.getOptionIndex = d;
			this.toggle = e
		};
	b.SelectView = a
}(haoqq));
(function(b) {
	var a = function(c) {
			this.config = c || {};
			this.container = c.container || null;
			if (!this.container) {
				return
			}
			this.changeTimeout = c.changeTimeout || 30000;
			this.syncChange = c.syncChange || false;
			this.stopAutoWhenHover = c.stopAutoWhenHover || true;
			this.intervalId = 0;
			this.currentClassName = c.currentClassName || "current";
			this.tabChangeType = (c.tabChangeType && c.tabChangeType == "hover") ? "hover" : "click";
			this.tabTagName = c.tabTagName || "li";
			this.currentIndex = c.currentIndex || 0;
			this.isAllowClickCurTab = c.isAllowClickCurTab || false;
			this.prevButton = c.prevButton || null;
			this.nextButton = c.nextButton || null;
			this.panelShow = (typeof(c.panelShow) == "function") ? c.panelShow : function(d) {
				d.show()
			};
			this.panelHide = (typeof(c.panelHide) == "function") ? c.panelHide : function(d) {
				d.hide()
			};
			this.onMouseEnterTab = (typeof(c.onMouseEnterTab) == "function") ? c.onMouseEnterTab : function() {};
			this.onMouseLeaveTab = (typeof(c.onMouseLeaveTab) == "function") ? c.onMouseLeaveTab : function() {};
			this.onClickTab = (typeof(c.onClickTab) == "function") ? c.onClickTab : function() {};
			this.beforeChangeTab = (typeof(c.beforeChangeTab) == "function") ? c.beforeChangeTab : function() {};
			this.afterChangeTab = (typeof(c.afterChangeTab) == "function") ? c.afterChangeTab : function() {};
			this.onTabAutoChange = (typeof(c.onTabAutoChange) == "function") ? c.onTabAutoChange : function() {};
			this.onClickPrevOrNextChange = (typeof(c.onClickPrevOrNextChange) == "function") ? c.onClickPrevOrNextChange : function() {};
			if (c.tabs.length > 0) {
				this.tabs = c.tabs
			} else {
				this.tabs = $(this.container).children(this.tabTagName)
			}
			if (c.tabPanels && c.tabPanels.length > 0) {
				this.tabPanels = c.tabPanels
			}
			a.prototype.syncChangeTab = function() {
				if (!this.syncChange) {
					return
				}
				if (this.intervalId > 0) {
					window.clearInterval(this.intervalId)
				}
				var d = this;
				if (!this.tabPanels || !this.tabPanels instanceof Array) {
					return
				}
				if (this.stopAutoWhenHover) {
					this.tabPanels.each(function() {
						$(this).unbind("mouseover");
						$(this).unbind("mouseout");
						$(this).mouseover(function(f) {
							f.stopPropagation();
							if (d.intervalId > 0) {
								window.clearInterval(d.intervalId)
							}
						}).mouseout(function(f) {
							f.stopPropagation();
							d.syncChangeTab()
						})
					})
				}
				this.intervalId = window.setInterval(function() {
					var e = d.getCurrentIndex();
					var f = d.tabs;
					if ((e + 1) >= f.length) {
						d.currentIndex = 0
					} else {
						d.currentIndex = e + 1
					}
					d.setCurrent(d.currentIndex);
					d.onTabAutoChange(d.currentIndex)
				}, this.changeTimeout)
			};
			a.prototype.setCurrent = function(d) {
				var f = this.tabs;
				if (!f || d < -1 || d >= f.length) {
					return
				}
				for (var e = 0; e < f.length; ++e) {
					if (e == d) {
						$(f[e]).addClass(this.currentClassName)
					} else {
						$(f[e]).removeClass(this.currentClassName)
					}
				}
				this.currentIndex = d;
				if (!this.tabPanels || !this.tabPanels instanceof Array) {
					return
				}
				for (e = 0; e < this.tabPanels.length; ++e) {
					e == d ? this.panelShow($(this.tabPanels[e])) : this.panelHide($(this.tabPanels[e]))
				}
			};
			a.prototype.getTabIndex = function(f) {
				var e = this.tabs;
				if (!f || !e) {
					return -1
				}
				for (var d = 0; d < e.length; ++d) {
					if (e[d] === ($(f))[0]) {
						return d
					}
				}
				return -1
			};
			a.prototype.getCurrentIndex = function() {
				return this.currentIndex
			};
			a.prototype.initEventsListener = function() {
				var e = this;

				function d(k) {
					if (!k) {
						return -1
					}
					var h = $(k);
					for (var g = 0; g < e.tabs.length; ++g) {
						if (e.tabs[g] === h[0]) {
							return g
						}
					}
					var f = h.parentsUntil(e.container);
					for (var j = 0; j < f.length; ++j) {
						for (var g = 0; g < e.tabs.length; ++g) {
							if (e.tabs[g] === f[j]) {
								return g
							}
						}
					}
					return -1
				}
				$(e.container).click(function(g) {
					var h = g.target;
					if ("click" != e.tabChangeType) {
						return
					}
					var f = d(h);
					if (f == -1) {
						return
					}
					e.onClickTab(f, g);
					if (f != e.currentIndex || !e.isAllowClickCurTab) {
						g.preventDefault()
					}
					if (e.beforeChangeTab(f, g) === false) {
						return
					}
					e.setCurrent(f);
					e.syncChangeTab();
					e.afterChangeTab(f, g)
				});
				$(e.container).mouseover(function(g) {
					var h = g.target;
					var f = d(h);
					if (f == -1) {
						return
					}
					e.onMouseEnterTab(f, g);
					if ("hover" != e.tabChangeType) {
						return
					}
					g.preventDefault();
					if (e.beforeChangeTab(f, g) === false) {
						return
					}
					e.setCurrent(f);
					e.afterChangeTab(f, g)
				});
				$(e.container).mouseout(function(g) {
					var h = g.target;
					var f = d(h);
					if (f == -1) {
						return
					}
					e.onMouseLeaveTab(f, g);
					if ("hover" != e.tabChangeType) {
						return
					}
					if (f == e.getCurrentIndex()) {
						g.preventDefault()
					}
				});
				if (this.prevButton && this.nextButton) {
					this.nextButton.click(function(h) {
						h.preventDefault();
						var f = e.getCurrentIndex();
						var g = e.tabs;
						if ((f + 1) >= g.length) {
							e.currentIndex = 0
						} else {
							e.currentIndex = f + 1
						}
						e.setCurrent(e.currentIndex);
						e.onClickPrevOrNextChange(e.currentIndex)
					});
					this.prevButton.click(function(h) {
						h.preventDefault();
						var f = e.getCurrentIndex();
						var g = e.tabs;
						if (f === 0) {
							e.currentIndex = g.length - 1
						} else {
							e.currentIndex = f - 1
						}
						e.setCurrent(e.currentIndex);
						e.onClickPrevOrNextChange(e.currentIndex)
					})
				}
			};
			this.initEventsListener();
			this.syncChangeTab()
		};
	b.TabView = function(c) {
		return new a(c)
	}
}(haoqq.namespace("tab")));
(function(b) {
	var a = function() {
			var c = null,
				f = null,
				e = null,
				g = null;
			window.ptlogin2_onResize = h;
			window.ptlogin2_onClose = d;
			window.ptlogin2_onLoginFinish = function(j) {
				d();
				if (j && j.errorMsg) {
					window.console && console.log("errorCode:%s,errorMsg:%s", j.errorCode, j.errorMsg)
				} else {
					location.reload()
				}
			};

			function h(j, k) {
				c.style.width = j + "px";
				c.style.height = k + "px";
				f.style.top = (document.documentElement.clientHeight - k) / 2 + $(window).scrollTop() + "px";
				f.style.left = (document.documentElement.clientWidth - j) / 2 + "px";
				return
			}
			function d() {
				f.style.display = "none";
				(typeof(e) === "function") && e(false)
			}
			this.open = function(j) {
				if (!c) {
					f = document.createElement("div");
					f.style.display = "none";
					f.style.position = "absolute";
					f.style.zIndex = "9999";
					f.style.border = "1px solid #ccc";
					f.style.background = "#fff";
					c = document.createElement("iframe");
					c.setAttribute("scrolling", "no");
					c.setAttribute("frameBorder", 0);
					document.body.appendChild(f);
					f.appendChild(c);
					h(490, 390)
				}
				if (!g) {
					g = $("<img/>", {
						src: "http://p2.qq.sogoucdn.com/u/haoqq/v1img/loginclose.jpg"
					}).css({
						position: "absolute",
						right: 0,
						top: "-25px",
						cursor: "pointer"
					});
					g.appendTo($(f));
					g.click(function(k) {
						window.ptlogin2_onClose()
					})
				}
				f.style.display = "block";
				c.src = "http://account.sogou.com/connect/login?client_id=2009&domain=hao.qq.com&ru=" + encodeURIComponent(location.origin + "/jump.html") + "&provider=qq";
				e = j
			}
		};
	b.Ptlogin2 = a
}(haoqq));
(function(a) {
	var b = {
		div: null,
		show: function() {
			if (this.div == null) {
				this.div = document.createElement("div");
				$(this.div).css({
					"background-color": "#FFFFFF",
					position: "absolute",
					opacity: "0.5",
					top: "0",
					"z-index": "1000",
					display: "none"
				});
				document.body.appendChild(this.div);
				$(this.div).click(function() {
					window.ptlogin2_onClose()
				})
			}
			this.div.style.width = document.body.clientWidth + "px";
			this.div.style.height = document.body.clientHeight + "px";
			this.div.style.display = "block"
		},
		hide: function() {
			if (this.div) {
				this.div.style.display = "none"
			}
		}
	};
	a.PageMask = function() {
		return b
	}
}(haoqq));
(function(a) {
	var b = function() {};
	b.prototype = new haoqq.common.Template();
	b.prototype.init = function(c) {
		this.config = c[0];
		this.loopBlock = this.config.loopBlock;
		this.prevButton = this.config.prevButton;
		this.nextButton = this.config.nextButton;
		this.curIndex = this.config.curIndex || 0;
		this.total = this.loopBlock.length;
		this.loopWay = this.config.loopWay || "show";
		this.loopMethod = this.config.loopMethod;
		this.stopWhenHover = this.config.stopWhenHover || false;
		this.loopInterval = this.config.loopInterval || 10000;
		this.timer = 0;
		this.afterChange = this.config.afterChange;
		this.config = null
	};
	b.prototype.initEvent = function() {
		var c = this;
		if (this.nextButton) {
			this.nextButton.click(function(d) {
				d.preventDefault();
				c.change()
			})
		}
		if (this.prevButton) {
			this.prevButton.click(function(d) {
				d.preventDefault();
				c.change(true)
			})
		}
		if (this.stopWhenHover) {
			this.loopBlock.each(function() {
				$(this).hover(function() {
					c.stop()
				}, function() {
					c.reStart()
				})
			})
		}
	};
	b.prototype.run = function() {
		this.reStart()
	};
	b.prototype.reStart = function() {
		var c = this;
		if (this.timer > 0) {
			window.clearInterval(this.timer)
		}
		this.timer = window.setInterval(function() {
			c.change()
		}, this.loopInterval)
	};
	b.prototype.stop = function() {
		if (this.timer > 0) {
			window.clearInterval(this.timer)
		}
		this.timer = 0
	};
	b.prototype.change = function(c) {
		var d = -1;
		if (c === true) {
			d = this.getPrevNo()
		} else {
			d = this.getNextNo()
		}
		if ($.isFunction(this.loopMethod)) {
			this.loopMethod(this.loopBlock, d);
			return
		}
		for (var e = 0; e < this.total; e++) {
			if (e === d) {
				if (this.loopWay === "fade") {
					$(this.loopBlock[e]).fadeIn("slow")
				} else {
					$(this.loopBlock[e]).show()
				}
				continue
			}
			if (this.loopWay === "fade") {
				$(this.loopBlock[e]).fadeOut("slow")
			} else {
				$(this.loopBlock[e]).hide()
			}
		}
		if ($.isFunction(this.afterChange)) {
			this.afterChange(d)
		}
	};
	b.prototype.getNextNo = function() {
		if (++this.curIndex >= this.total) {
			this.curIndex = 0;
			return 0
		}
		return this.curIndex
	};
	b.prototype.getPrevNo = function() {
		if (--this.curIndex < 0) {
			this.curIndex = this.total - 1;
			return this.curIndex
		}
		return this.curIndex
	};
	a.getLoopViewInstance = haoqq.common.Singleton(function() {
		return new b()
	});
	a.createLoopView = function() {
		return new b()
	}
}(haoqq.namespace("util")));
Validator = {
	isUrl: function(a) {
		return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
	}
};
(function(d, b, a, f) {
	var e = d(b);
	var c = new Date();
	d.fn.calendar = function(p) {
		var j = this;
		var o = c.getFullYear();
		var h = c.getMonth();
		var n = c.getDate();
		var k = {
			effect: "show",
			container: d("#wannianli"),
			callback: d.noop(),
			showOnCreate: false
		};
		if (p) {
			d.extend(k, p)
		}
		function l(y, F) {
			var z = new Date(y, F, 1);
			var D = z.getFullYear();
			var A = z.getMonth();
			var E = false;
			if (A == c.getMonth() && D == c.getFullYear()) {
				E = true
			}
			var C = d.getFirstDayOfMonth(D, A, 1);
			var I = d.getLastDayOfMonth(D, A, 1);
			var x = 0;
			var u = k.container.find("table").find("tr").empty();
			var B = d.getWeek(C);
			for (var w = B; w > 0; w--) {
				var G = d.getLastDayOfMonth(D, A - 1, w);
				m(G, x, false, false, "before");
				x++
			}
			var v = C.getDate();
			var t = I.getDate();
			for (var w = v; w <= t; w++) {
				var H = new Date(D, A, w);
				if (E && w == c.getDate()) {
					n = w;
					m(H, x, true, true, "")
				} else {
					if (!E && w === 1) {
						n = 1;
						m(H, x, false, true, "")
					} else {
						m(H, x, false, false, "")
					}
				}
				x++
			}
			var s = 42 - x;
			for (var w = 0; w < s; w++) {
				var G = d.getFirstDayOfMonth(D, A + 1, w + 1);
				m(G, x, false, false, "after");
				x++
			}
			g()
		}
		function m(v, A, C, t, s) {
			var H = v.getDate();
			var z = d.getLunar(v);
			var u = z.lunar.day;
			if (u === "初一") {
				u = z.lunar.month
			}
			var y = false;
			if (z.festival.lunarFestival !== "") {
				u = z.festival.lunarFestival;
				y = true
			} else {
				if (z.festival.solarFestival !== "") {
					u = z.festival.solarFestival;
					y = true
				} else {
					if (z.festival.solarTerms !== "") {
						u = z.festival.solarTerms;
						y = true
					}
				}
			}
			var F = Math.floor(A / 7);
			var x = k.container.find("table").find("tr:eq(" + F + ")");
			var G = d("<td></td>");
			var w = d("<div class='num-box'></div>");
			var D = d("<em></em>").text(H);
			var B = d("<span></span>").text(u.length > 3 ? (u.substring(0, 3) + "...") : u).attr("title", u);
			if (s === "") {
				var E = v.getDay();
				if (E === 0 || E === 6) {
					w.addClass("zhoumo")
				}
				if (y) {
					w.addClass("chinaday")
				}
				if (z.festival.isRestDay) {
					w.removeClass("chinaday").addClass("jiaqi")
				}
				if (C) {
					w.addClass("today")
				}
				if (t) {
					w.addClass("select")
				}
			} else {
				w.addClass(s)
			}
			x.append(G);
			G.append(w);
			w.append(D);
			w.append(B)
		}
		function g() {
			var s = new Date(o, h, n);
			var v = s.getFullYear(),
				w = s.getMonth() + 1,
				u = s.getDate();
			k.container.find(".smal-data").text(v + "." + w);
			k.container.find(".big-data").text(u);
			var t = d.getLunar(s);
			k.container.find(".nongli").find("p:eq(0)").text(t.ganzhi.ganzhiY + "年");
			k.container.find(".nongli").find("p:eq(1)").text(t.ganzhi.ganzhiM + "月 " + t.ganzhi.ganzhiD + "日");
			d.requestJson("wnl/getCalendar.php", function(A) {
				if (A && A.code == "0") {
					for (var z = 0, x = A.data.length; z < x; z++) {
						var C = k.container.find("div.rili-info ul:eq(" + z + ")");
						C.find("li").remove();
						C.attr("title", A.data[z]);
						var B = String(A.data[z]).split(",");
						for (var y = 0; y < 5; y++) {
							C.append(d("<li/>").text(B[y]))
						}
					}
				}
			}, {
				g_tk: haoqq.util.getACSRFToken(g_cookie.get("uiid")),
				year: v,
				month: w,
				day: u
			}, "post")
		}
		l(o, h);
		var q = function() {
				var t = j.offset().left;
				var s = j.offset().top + j.height();
				k.container.css({
					left: t,
					top: s
				}).show()
			};

		function r() {
			j.click(function(s) {
				s.stopPropagation();
				s.preventDefault();
				if (k.container.is(":visible")) {
					k.container.hide()
				} else {
					q()
				}
			});
			d(a).click(function(s) {
				var t = s.target;
				if (!haoqq.util.isAncestor(k.container[0], t)) {
					k.container.hide()
				}
			});
			k.container.find("table").click(function(v) {
				var y = v.target;
				v.stopPropagation();
				var x = findUpTag(y, "TD");
				if (x) {
					var w = d(x).find("div:eq(0)");
					if (w.hasClass("before")) {
						l(o, --h)
					} else {
						if (w.hasClass("after")) {
							l(o, ++h)
						} else {
							var u = d(this).find("td");
							for (var t = 0, s = u.length; t < s; t++) {
								d(u[t]).find("div:eq(0)").removeClass("select")
							}
							d(x).find("div:eq(0)").addClass("select");
							n = d(x).find("em").text();
							g()
						}
					}
				}
			});
			k.container.find("div.rili-info").find("a.rl-prev").click(function(s) {
				s.preventDefault();
				l(o, --h)
			});
			k.container.find("div.rili-info").find("a.rl-next").click(function(s) {
				s.preventDefault();
				l(o, ++h)
			})
		}
		findUpTag = function(t, s) {
			if (!t || !s) {
				return null
			}
			s = s.toUpperCase();
			while (t && t.tagName != s) {
				t = t.parentNode
			}
			return t
		};
		r();
		k.showOnCreate && q();
		return this
	};
	d.getWeek = function(g) {
		return g.getDay()
	};
	d.getFirstDayOfMonth = function(j, k, l) {
		var g = new Date(j, k, 1);
		var h = 1000 * 60 * 60 * 24 * (l - 1);
		return new Date(g.getTime() + h)
	};
	d.getLastDayOfMonth = function(j, l, m) {
		var h = ++l;
		var k = new Date(j, h, 1);
		var g = 1000 * 60 * 60 * 24 * m;
		return new Date(k.getTime() - g)
	}
})(jQuery, window, document);
(function(a) {
	var b = function() {};
	b.prototype = new haoqq.common.Template();
	b.prototype.init = function() {
		var c = new Date();
		this.lObj = $.getLunar(c);
		$("#weekday").text(c.getDate());
		$("#lunarday").text("农历" + this.lObj.lunar.month + this.lObj.lunar.day);
		var d = new StringBuffer();
		d.append(c.getFullYear());
		d.append(".");
		d.append(c.getMonth() + 1);
		d.append(".");
		d.append(c.getDate());
		d.append(" ");
		d.append(this.lObj.week);
		$("#dateday").text(d.toString());
		c = null;
		d = null;
		delete this.lObj;
		$("#calendarArea").one("click", function(f) {
			f.stopPropagation();
			$(this).calendar({
				showOnCreate: true
			});
			haoqq.getStatisInstance().reportClick(f, "module=日历展开关闭", {})
		})
	};
	b.prototype.initEvent = function() {};
	b.prototype.run = function() {};
	a.getCalendarInstance = haoqq.common.Singleton(function() {
		return new b()
	});
	a.createCalendar = function() {
		return new b()
	}
}(haoqq.namespace("calendar")));
(function(a) {
	var b = {
		cityData: {
			"A 安徽": {
				capital: "H 合肥",
				cities: ["A 安庆", "B 亳州", "B 蚌埠", "C 巢湖", "C 池州", "C 滁州", "F 阜阳", "H 合肥", "H 淮北", "H 淮南", "H 黄山", "L 六安", "M 马鞍山", "S 宿州", "T 铜陵", "W 芜湖", "X 宣城"]
			},
			"A 澳门": {
				capital: "A 澳门",
				cities: ["A 澳门"]
			},
			"B 北京": {
				capital: "B 北京",
				cities: ["B 北京"]
			},
			"C 重庆": {
				capital: "C 重庆",
				cities: ["C 重庆", "F 奉节", "F 涪陵"]
			},
			"F 福建": {
				capital: "F 福州",
				cities: ["F 福州", "L 龙岩", "N 南平", "N 宁德", "P 浦城", "P 莆田", "Q 泉州", "S 三明", "X 厦门", "Z 漳州"]
			},
			"G 广东": {
				capital: "G 广州",
				cities: ["C 潮州", "D 东莞", "D 电白", "F 佛冈", "F 佛山", "G 广州", "G 高要", "H 惠州", "H 河源", "J 揭阳", "J 江门", "M 梅县", "M 梅州", "M 茂名", "N 南雄", "Q 清远", "S 汕头", "S 汕尾", "S 深圳", "S 韶关", "Y 云浮", "Y 阳江", "Z 中山", "Z 湛江", "Z 珠海", "Z 肇庆"]
			},
			"G 广西": {
				capital: "N 南宁",
				cities: ["B 北海", "B 百色", "C 崇左", "F 防城港", "G 桂林", "G 贵港", "H 河池", "H 贺州", "L 来宾", "L 柳州", "N 南宁", "Q 钦州", "W 梧州", "Y 玉林"]
			},
			"G 甘肃": {
				capital: "L 兰州",
				cities: ["B 白银", "D 定西", "G 甘南", "J 嘉峪关", "J 酒泉", "J 金昌", "L 临夏", "L 兰州", "P 平凉", "Q 庆阳", "T 天水", "W 武威", "Z 张掖"]
			},
			"G 贵州": {
				capital: "G 贵阳",
				cities: ["A 安顺", "B 毕节", "G 贵阳", "L 六盘水", "T 铜仁", "Z 遵义"]
			},
			"H 河北": {
				capital: "S 石家庄",
				cities: ["B 保定", "C 承德", "C 沧州", "H 衡水", "H 邯郸", "L 廊坊", "Q 秦皇岛", "S 石家庄", "T 唐山", "X 邢台", "Z 张家口"]
			},
			"H 河南": {
				capital: "Z 郑州",
				cities: ["A 安阳", "H 鹤壁", "J 济源", "J 焦作", "K 开封", "L 洛阳", "L 漯河", "N 南阳", "P 平顶山", "P 濮阳", "S 三门峡", "S 商丘", "X 信阳", "X 新乡", "X 许昌", "Z 周口", "Z 郑州", "Z 驻马店"]
			},
			"H 海南": {
				capital: "H 海口",
				cities: ["C 澄迈", "D 东方", "D 儋州", "D 定安", "H 海口", "L 临高", "Q 琼海", "S 三亚", "T 屯昌", "W 万宁", "W 文昌"]
			},
			"H 湖北": {
				capital: "W 武汉",
				cities: ["E 鄂州", "H 黄冈", "H 黄石", "J 荆门", "J 荆州", "M 麻城", "Q 潜江", "S 神农架", "S 十堰", "S 随州", "T 天门", "W 武汉", "X 仙桃", "X 咸宁", "X 襄阳", "X 孝感", "Y 宜昌", "Z 枣阳"]
			},
			"H 湖南": {
				capital: "C 长沙",
				cities: ["C 常德", "C 郴州", "C 长沙", "H 怀化", "H 衡阳", "L 娄底", "N 南岳", "S 桑植", "S 邵阳", "X 湘潭", "J 永州", "Y 岳阳", "Y 沅陵", "Y 益阳", "Z 张家界", "Z 株洲"]
			},
			"H 黑龙江": {
				capital: "H 哈尔滨",
				cities: ["D 大兴安岭", "D 大庆", "H 哈尔滨", "H 鹤岗", "H 黑河", "J 佳木斯", "J 鸡西", "M 漠河", "M 牡丹江", "Q 七台河", "Q 齐齐哈尔", "S 双鸭山", "S 绥化", "S 绥芬河", "Y 伊春"]
			},
			"J 吉林": {
				capital: "C 长春",
				cities: ["B 白城", "B 白山", "C 长春", "H 桦甸", "J 集安", "J 吉林", "L 辽源", "S 四平", "S 松原", "T 通化"]
			},
			"J 江苏": {
				capital: "N 南京",
				cities: ["C 常州", "D 东台", "G 赣榆", "G 高邮", "H 淮安", "L 连云港", "N 南京", "N 南通", "S 宿迁", "S 苏州", "T 泰州", "W 无锡", "X 徐州", "X 盱眙", "Y 扬州", "Y 盐城", "Z 镇江"]
			},
			"J 江西": {
				capital: "N 南昌",
				cities: ["F 抚州", "G 广昌", "G 贵溪", "G 赣州", "J 吉安", "J 九江", "J 景德镇", "L 庐山", "N 南昌", "P 萍乡", "S 上饶", "X 新余", "Y 宜春", "Y 玉山", "Y 鹰潭"]
			},
			"L 辽宁": {
				capital: "S 沈阳",
				cities: ["A 鞍山", "B 本溪", "C 朝阳", "D 丹东", "D 大连", "F 抚顺", "F 阜新", "H 葫芦岛", "J 锦州", "L 辽阳", "P 盘锦", "S 沈阳", "T 铁岭", "W 瓦房店", "Y 营口"]
			},
			"N 内蒙古": {
				capital: "H 呼和浩特",
				cities: ["B 包头", "C 赤峰", "E 鄂尔多斯", "H 呼伦贝尔", "H 呼和浩特", "T 通辽", "W 乌海"]
			},
			"N 宁夏": {
				capital: "Y 银川",
				cities: ["G 固原", "S 石嘴山", "W 吴忠", "Y 银川"]
			},
			"Q 青海": {
				capital: "X 西宁",
				cities: ["H 海东", "X 西宁"]
			},
			"S 上海": {
				capital: "S 上海",
				cities: ["S 上海"]
			},
			"S 四川": {
				capital: "C 成都",
				cities: ["B 巴中", "C 成都", "D 德阳", "D 达州", "E 峨眉山", "G 广元", "G 广安", "L 乐山", "L 泸州", "M 眉山", "M 绵阳", "N 内江", "N 南充", "P 攀枝花", "S 遂宁", "Y 宜宾", "Y 雅安", "Z 自贡", "Z 资阳"]
			},
			"S 山东": {
				capital: "J 济南",
				cities: ["B 滨州", "D 东营", "D 德州", "H 菏泽", "J 济南", "J 济宁", "L 临沂", "L 聊城", "L 莱芜", "Q 青岛", "R 日照", "T 泰安", "W 威海", "W 潍坊", "Y 烟台", "Z 枣庄", "Z 淄博"]
			},
			"S 山西": {
				capital: "T 太原",
				cities: ["C 长治", "D 大同", "J 晋中", "J 晋城", "L 临汾", "L 吕梁", "S 朔州", "T 太原", "X 忻州", "Y 运城", "Y 阳泉"]
			},
			"S 陕西": {
				capital: "X 西安",
				cities: ["A 安康", "B 宝鸡", "H 汉中", "S 商洛", "T 铜川", "W 渭南", "X 咸阳", "X 西安", "Y 延安", "Y 榆林"]
			},
			"T 台湾": {
				capital: "T 台北",
				cities: ["T 台北"]
			},
			"T 天津": {
				capital: "T 天津",
				cities: ["T 天津"]
			},
			"X 新疆": {
				capital: "W 乌鲁木齐",
				cities: ["A 阿克苏", "H 和田", "H 哈密", "K 克拉玛依", "K 喀什", "Q 奇台", "T 吐鲁番", "W 乌鲁木齐"]
			},
			"X 西藏": {
				capital: "L 拉萨",
				cities: ["A 阿里", "C 昌都", "L 拉萨", "L 林芝", "N 那曲", "R 日喀则", "S 山南"]
			},
			"X 香港": {
				capital: "X 香港",
				cities: ["X 香港"]
			},
			"Y 云南": {
				capital: "K 昆明",
				cities: ["B 保山", "K 昆明", "L 临沧", "L 丽江", "Q 曲靖", "R 瑞丽", "S 思茅", "Y 玉溪", "Z 昭通"]
			},
			"Z 浙江": {
				capital: "H 杭州",
				cities: ["D 洞头", "H 杭州", "H 湖州", "J 嘉兴", "J 金华", "L 丽水", "N 宁波", "N 宁海", "P 平湖", "Q 衢州", "S 嵊州", "S 绍兴", "T 台州", "W 温州", "Z 舟山"]
			}
		},
		getProvinceList: function() {
			var d = [];
			for (var c in this.cityData) {
				if (this.cityData.hasOwnProperty(c)) {
					d.push(c)
				}
			}
			return d
		},
		getCitylistByProvince: function(c) {
			var e = this.cityData[c];
			return e ? e.cities : []
		},
		getCapitalCity: function(d) {
			var c = this.cityData[d];
			return c ? c.capital.substr(2) : ""
		},
		getCityIndex: function(k, j) {
			if (!j) {
				var c = -1;
				var g;
				for (var j in this.cityData) {
					c++;
					g = this.getCityIndex(k, j);
					if (g !== -1) {
						return {
							provinceIndex: c,
							cityIndex: g
						}
					}
				}
				return {
					provinceIndex: -1,
					cityIndex: -1
				}
			}
			var h = this.cityData[j];
			if (!h) {
				return -1
			}
			var d = h.cities;
			var f = new RegExp(" " + k + "$");
			for (var e = 0; e < d.length; ++e) {
				if (f.test(d[e])) {
					return e
				}
			}
			return -1
		}
	};
	a.CityData = function() {
		return b
	}
}(haoqq.namespace("city")));
(function(b) {
	var a = function() {
			this.arrayList = haoqq.util.ArrayList();
			this.max_cache = 3;
			this.cache_key_l = "wlCity";
			this.cache_key_default = "wlCity_default";
			a.prototype.getDefaultCity = function() {
				var c = g_storge.get(this.cache_key_default);
				if (!c) {
					c = ""
				}
				return c
			};
			a.prototype.reloadData = function() {
				var d = this;
				for (var c = 0; c < this.max_cache; c++) {
					(function(e) {
						var f = g_storge.get(d.cache_key_l + e);
						if (f) {
							d.arrayList.add(f)
						}
					})(c)
				}
			};
			a.prototype.readLatestCitys = function() {
				return this.arrayList.toArray()
			};
			a.prototype.flush = function() {
				var c = 0;
				var d = this;
				for (var c = 0; c < this.max_cache; c++) {
					g_storge.del(d.cache_key_l + c)
				}
				for (c = 0; c < this.arrayList.size(); c++) {
					(function(e, f) {
						g_storge.set(d.cache_key_l + e, f)
					})(c, this.arrayList.get(c))
				}
			};
			a.prototype.saveLatestCitys = function(d) {
				try {
					if (this.checkCityExsit(d)) {
						return
					}
					if (this.arrayList.size() < this.max_cache) {
						g_storge.set(this.cache_key_default, d);
						this.arrayList.add(d);
						this.flush()
					}
				} catch (c) {}
			};
			a.prototype.deleteCity = function(d) {
				var c = this.arrayList.indexOf(d);
				if (c >= 0) {
					this.arrayList.removeValue(d);
					this.flush()
				}
			};
			a.prototype.checkCityExsit = function(d) {
				var c = false;
				if (this.arrayList.indexOf(d) >= 0) {
					g_storge.set(this.cache_key_default, d);
					return true
				}
				return c
			}
		};
	b.CityStore = function() {
		return new a()
	}
}(haoqq.namespace("city")));
(function(b) {
	var c = function(h, f) {
			if (!h || !f) {
				return
			}
			var e, j, g;
			g = [];
			h.options.length = 0;
			for (e = 0, j = f.length; e < j; ++e) {
				var d = document.createElement("OPTION");
				d.value = d.text = f[e];
				h.add(d)
			}
		};
	var a = function(f) {
			function g(l) {
				var k = e.getCityIndex(e.getCapitalCity(l), l);
				if (k !== -1) {
					j.selectedIndex = k
				}
			}
			var f = f || {},
				d = f.provinceSelect,
				j = f.citySelect,
				e = f.model || new b.CityData();
			var h = this;
			this.getSelectedCity = function() {
				var k = j.options[j.selectedIndex].value;
				return k ? k.substr(2) : ""
			};
			this.getSelectedProvince = function() {
				var k = provinces.options[d.selectedIndex].value;
				return k ? k.substr(2) : ""
			};
			this.setDefaultCity = function(l) {
				var k = e.getCityIndex(l);
				if (k.provinceIndex !== -1) {
					d.selectedIndex = k.provinceIndex;
					c(j, e.getCitylistByProvince(d.options[d.options.selectedIndex].value));
					if (k.cityIndex !== -1) {
						j.selectedIndex = k.cityIndex
					}
				}
			};
			(function() {
				c(d, e.getProvinceList());
				var k = d.options[d.options.selectedIndex].value;
				c(j, e.getCitylistByProvince(k));
				g(k);
				$(d).change(function() {
					var l = d.options[d.options.selectedIndex].value;
					c(j, e.getCitylistByProvince(l));
					g(l)
				})
			})()
		};
	b.CityView = a
}(haoqq.namespace("city")));
(function(a) {
	var b = function() {
			var e = {
				"无风向微风": "无持续风向 微风"
			};
			var c = {
				"晴": "0 0px",
				"多云": "0 -40px",
				"暴雪": "0 -480px",
				"大雪-暴雪": "0 -480px",
				"暴雨": "0 -360px",
				"大雨-暴雨": "0 -360px",
				"暴雨-大暴雨": "0 -360px",
				"大暴雨-特大暴雨": "0 -360px",
				"大暴雪": "0 -480px",
				"飑": "0 -880px",
				"大雪": "0 -440px",
				"中雪-大雪": "0 -440px",
				"大雨": "0 -320px",
				"中雨-大雨": "0 -320px",
				"浮层": "0 -920px",
				"雷阵雨": "0 -160px",
				"雷阵雨并伴有冰雹": "0 -200px",
				"霾": "0 -920px",
				"轻雾": "0 -840px",
				"雾": "0 -840px",
				"冰雹": "0 -680px",
				"沙尘暴": "0 -760px",
				"强沙尘暴": "0 -760px",
				"特大暴雪": "0 -520px",
				"小雪": "0 -600px",
				"小雨": "0 -240px",
				"扬沙": "0 -720px",
				"浮尘": "0 -920px",
				"龙卷风": "0 -800px",
				"弱高吹雪": "0 -600px",
				"阴": "0 -80px",
				"雨夹雪": "0 -400px",
				"冻雨": "0 -960px",
				"阵雪": "0 -560px",
				"阵雨": "0 -120px",
				"中雪": "0 -640px",
				"小雪-中雪": "0 -640px",
				"小雨-中雨": "0 -280px",
				"中雨": "0 -280px"
			};
			var h = {
				"晴": "0",
				"多云": "18",
				"暴雪": "2",
				"大雪-暴雪": "2",
				"暴雨": "3",
				"大雨-暴雨": "3",
				"暴雨-大暴雨": "3",
				"大暴雨-特大暴雨": "3",
				"大暴雪": "4",
				"飑": "5",
				"大雪": "6",
				"中雪-大雪": "6",
				"大雨": "7",
				"中雨-大雨": "7",
				"雷阵雨": "9",
				"雷阵雨并伴有冰雹": "10",
				"霾": "11",
				"轻雾": "11",
				"雾": "11",
				"强沙尘暴": "12",
				"特大暴雪": "13",
				"小雪": "14",
				"小雨": "15",
				"扬沙": "16",
				"浮尘": "17",
				"龙卷风": "5",
				"弱高吹雪": "14",
				"阴": "1",
				"雨夹雪": "19",
				"冻雨": "19",
				"阵雪": "20",
				"阵雨": "21",
				"中雪": "22",
				"小雪-中雪": "22",
				"小雨-中雨": "23",
				"中雨": "23"
			};
			var j = {
				chuanyi: {
					1: ["炎热", "薄型T恤衫"],
					2: ["热舒适", "短套装、T恤夏季服装"],
					3: ["舒适", "长袖服装"],
					4: ["凉舒适", "薄型套装等春秋过渡装"],
					5: ["温凉", "夹衣或西服套装加薄羊毛衫"],
					6: ["凉", "厚外套加毛衣等春秋服装"],
					7: ["冷", "棉衣加羊毛衫等冬季服装"],
					8: ["寒冷", "厚羽绒服等隆冬服装"]
				},
				shushi: {
					0: ["舒适", "白天不太热也不太冷，风力不大，会感到比较清爽和舒适"],
					1: ["较舒适", "暖，会感到有点儿闷热，但大部分人仍会有比较舒适的感觉"],
					2: ["较不舒适", "热，会感到有些热，较不舒适"],
					3: ["很不舒适", "很热，会感到很闷热，很不舒适"],
					4: ["极不舒适", "酷热，会感到酷热难耐，极为不适，请注意防暑降温"],
					6: ["较舒适", "凉，早晚会感觉偏凉，但大部分人仍会有比较舒适的感觉"],
					7: ["较不舒适", "冷，感觉偏冷，不很舒适，请注意添加衣物，以防感冒"],
					8: ["很不舒适", "寒冷，感觉很冷，不舒适，请注意保暖防寒"],
					9: ["极不舒适", "十分寒冷，感觉十分寒冷，极不舒适，请注意保暖防寒"]
				},
				chenlian: {
					1: ["适宜", "天气晴朗，空气清新，是您晨练的大好时机，建议不同年龄段的人们积极参加户外健身活动。"],
					2: ["较适宜", "早晨气象条件较适宜晨练，但风力稍大，晨练时请注意选择避风的地点，避免迎风锻炼。"],
					3: ["较不宜", "风力较大，较不宜晨练，建议年老体弱人群适当减少晨练时间，若坚持室外锻炼，请选择避风的地点。"],
					4: ["不宜", "风力较大，较不宜晨练，建议年老体弱人群适当减少晨练时间，若坚持室外锻炼，请选择避风的地点。"],
					5: ["很不宜", "风力较大，很不宜晨练。"]
				},
				xiche: {
					1: ["适宜", "适宜洗车，未来持续两天无雨天气较好，适合擦洗汽车"],
					2: ["较适宜", "较适宜洗车，未来一天无雨，风力较小，较适合擦洗汽车"],
					3: ["较不宜", "较不宜洗车，擦洗一新的汽车可能会蒙上污垢"],
					4: ["不宜", "不宜洗车，路上的泥水可能会再次弄脏您的爱车"]
				},
				kqwr: {
					1: ["空气质量优", "非常有利于空气污染物稀释、扩散和清除，可在室外正常活动"],
					2: ["空气质量良", "有利于空气污染物稀释、扩散和清除，可在室外正常活动"],
					3: ["空气质量中", "对空气污染物稀释、扩散和清除无明显影响，易感人群应适当减少室外活动时间"],
					4: ["空气质量较差", "较不利于空气污染物稀释、扩散和清除，请适当减少室外活动时间"],
					5: ["空气质量差", "不利于空气污染物稀释、扩散和清除，请尽量避免在室外长时间活动"]
				}
			};
			var g = {
				1: {
					name: "空气质量优",
					title: "空气质量令人满意，基本无空气污染",
					content: "各类人群可正常活动"
				},
				2: {
					name: "空气质量良",
					title: "空气质量可接受，某些污染物可能对异常敏感人群健康有较弱影响",
					content: "极少数异常敏感人群应减少户外活动"
				},
				3: {
					name: "轻度污染",
					title: "易感人群症状有轻度加剧，健康人群出现刺激症状",
					content: "儿童、老年人及心脏病、呼吸系统疾病患者应减少长时间、高强度的户外锻炼"
				},
				4: {
					name: "中度污染",
					title: "易感人群症状加剧，可能对健康人群心脏、呼吸系统有影响",
					content: "儿童、老年人及心脏病、呼吸系统疾病患者避免长时间、高强度的户外锻炼，一般人群适量减少户外运动"
				},
				5: {
					name: "重度污染",
					title: "心脏病和肺病患者症状显著加剧，健康人群运动耐受力降低",
					content: "儿童、老年人及心脏病、肺病患者应停留在室内，停止户外运动，一般人群减少户外运动"
				},
				6: {
					name: "严重污染",
					title: "健康人群运动耐受力降低，有明显症状，提前出现某些疾病",
					content: "儿童、老年人和病人应停留在室内，避免体力消耗，一般人群避免户外活动"
				}
			};
			var d = {
				1: "excellent",
				2: "good",
				3: "mild",
				4: "medium",
				5: "severe",
				6: "serious"
			};
			var f = function(k) {
					k = parseInt(k);
					if (k <= 50) {
						k = 1
					} else {
						if (k > 50 && k <= 100) {
							k = 2
						} else {
							if (k > 100 && k <= 150) {
								k = 3
							} else {
								if (k > 150 && k <= 200) {
									k = 4
								} else {
									if (k > 200 && k <= 300) {
										k = 5
									} else {
										if (k > 300) {
											k = 6
										}
									}
								}
							}
						}
					}
					return k
				};
			this.getWeatherIcon25 = function(k) {
				var l = c[k];
				if (typeof(l) !== "undefined") {
					return l
				}
				return "0 0px"
			};
			this.getWeatherIcon32 = function(k) {
				var l = h[k];
				if (typeof(l) !== "undefined") {
					return l
				}
				return 0
			};
			this.getAireClass = function(k, l) {
				if (l) {
					k = f(k)
				} else {
					if (parseInt(k) >= 3) {
						k = parseInt(k) + 1
					}
				}
				return d[k]
			};
			this.getAireInfoDes = function(k) {
				k = f(k);
				return g[k]
			};
			this.getZhiShu = function(k, l) {
				return j[l][k] ? j[l][k] : ["", ""]
			};
			this.weaFormat = function(k) {
				return e[k] ? e[k] : k
			}
		};
	a.WeatherModel = b
}(haoqq.namespace("weather")));
(function(b) {
	var a = function(c) {};
	a.prototype = new haoqq.common.Template();
	a.prototype.init = function(c) {
		this.topWeatherArea = $("#topWeatherArea");
		this.weatherArea = $("#weatherArea");
		this.addCityArea = $("#addCityArea");
		this.citySelect = new haoqq.city.CityView({
			provinceSelect: $("#provinceSelect")[0],
			citySelect: $("#citySelect")[0]
		});
		this.cityStore = haoqq.city.CityStore();
		this.weatherModle = new haoqq.weather.WeatherModel();
		this.currentCity = ""
	};
	a.prototype.initEvent = function(d) {
		var c = this;
		this.topWeatherArea.click(function(f) {
			f.preventDefault();
			f.stopPropagation();
			$("#wannianli").hide();
			c.toggleWeatherDiv();
			haoqq.getStatisInstance().reportClick(f, "dhv1.head.wea.detail", {
				type: "weather"
			});
			haoqq.getDjlStatisInstance().reportClick(f, "dhv1.head.wea.detail")
		});
		$(document).click(function(f) {
			var g = f.target;
			if (!haoqq.util.isAncestor(c.weatherArea[0], g)) {
				c.weatherArea.hide()
			}
		});
		this.initAddCityEvent();
		this.weatherArea.find(".tipsKS-info").find(".K-info").click(function(g) {
			g.stopPropagation();
			g.preventDefault();
			var f = "http://tianqi.sogou.com/air/" + c.cityCode;
			var h = {};
			f = f + $.param(h);
			haoqq.getStatisInstance().reportClick(g, "dhv1.head.wea.pm", {
				type: "weather"
			});
			haoqq.getDjlStatisInstance().reportClick(g, "dhv1.head.wea.pm");
			window.open(f)
		})
	};
	a.prototype.run = function(d) {
		this.cityStore.reloadData();
		var c = this.cityStore.getDefaultCity() || "";
		this.getWeathData(c, true)
	};
	a.prototype.toggleWeatherDiv = function() {
		if (this.weatherArea.is(":visible")) {
			this.weatherArea.hide()
		} else {
			var d = this.topWeatherArea.offset().left;
			var c = 65;
			this.weatherArea.css({
				left: d,
				top: c
			}).show();
			this.addCityArea.css({
				left: d,
				top: c
			})
		}
	};
	a.prototype.getWeathData = function(f, e, d) {
		var c = this;
		$.requestJson("./tianqi/getWeather.php", function(g) {
			c.fillDate.call(c, g, e, d);
			var h = +new Date;
			if (window.Pingback) {
				Pingback.send("extra", "module=wc_0_天气加载完成&tag=" + (h - _speedMark), false, true)
			} else {
				window._weatherLoadedTime = h
			}
		}, {
			c: f
		}, "post")
	};
	a.prototype.fillDate = function(d, f, e) {
		if (!d || d.code != "0") {
			if (f) {
				this.topWeatherArea.hide()
			} else {
				alert("当前查询的人太多了，请稍候再试：）")
			}
			return
		}
		this.currentCity = d.city;
		this.cityCode = d.cityCode;
		var g = d.baseInfo;
		var c = d.AQI;
		this.saveCityLocal(d.city);
		this.fillBaseData(d.cityCode, g, d.indexs, d.current);
		this.fillKqData(c, d.indexs);
		this.initCityTab();
		if (typeof e === "function") {
			e()
		}
	};
	a.prototype.fillBaseData = function(l, t, g, r) {
		var h = this.topWeatherArea.find("ul:eq(0)");
		var k = this.topWeatherArea.find("ul:eq(1)");
		h.find("li:eq(0)").find("span").text(this.currentCity);
		var m = this.weatherModle.getZhiShu(g.zs_kqwr, "kqwr");
		if (m) {
			h.find("li:eq(1)").find("span").text(m[0])
		}
		var e = this.weatherModle.getWeatherIcon25(r.weather);
		this.topWeatherArea.find("span.weapic").css("background-position", e);
		k.find("li:eq(0)").find("span").text(r.weather);
		k.find("li:eq(1)").find("span").text(r.tempLatest + "℃");
		var q = this.weatherArea.find(".todayList");
		q.find(".today-dc").find(".ssn").text(r.tempLatest);
		q.find(".today-f").text(r.wind);
		q.find(".today-s").text("湿度 " + g.sk_hd);
		var c = t[0];
		var j = t[1];
		var d = t[2];
		var f = this.weatherArea.find(".dayWea-list");
		var o = f.find("a:eq(0)");
		var s = f.find("a:eq(1)");
		var p = f.find("a:eq(2)");
		var u = "http://tianqi.sogou.com/" + l + "/";
		this.weatherArea.find(".more").attr("href", u).attr("target", "_blank");
		o.attr("href", u);
		var n = this.weatherModle.getWeatherIcon25(c.weather);
		o.find(".weaImg").css("background-position", n);
		o.find(".wea").text(c.weather);
		o.find(".ce").text(c.tempLow + "~" + c.tempHigh + "℃");
		s.attr("href", u);
		n = this.weatherModle.getWeatherIcon25(j.weather);
		s.find(".weaImg").css("background-position", n);
		s.find(".wea").text(j.weather);
		s.find(".ce").text(j.tempLow + "~" + j.tempHigh + "℃");
		p.attr("href", u);
		n = this.weatherModle.getWeatherIcon25(d.weather);
		p.find(".date").text(this.getWeekInfo(d.day));
		p.find(".weaImg").css("background-position", n);
		p.find(".wea").text(d.weather);
		p.find(".ce").text(d.tempLow + "~" + d.tempHigh + "℃")
	};
	a.prototype.fillKqData = function(g, c) {
		var o = false;
		if ($.trim(g.idx) != "" && parseInt(g.idx) >= 0) {
			o = true
		} else {
			o = false
		}
		var h = this.weatherArea.find(".tipsKS-info");
		var n = this.weatherArea.find(".tipsKS-info-nokq");
		if (o) {
			var k = h.find(".K-info");
			k.find("dt").text("空气质量指数：" + g.idx);
			var m = this.weatherModle.getAireInfoDes(g.idx);
			k.attr("title", m.content);
			this.topWeatherArea.find("ul:eq(0)").find("li:eq(1)").find("span").text(m.name);
			if ($.trim(g.pm25) == "") {
				k.find("dd:eq(0)").text("PM2.5：--")
			} else {
				k.find("dd:eq(0)").text("PM2.5：" + g.pm25 + " µg/m3")
			}
			if ($.trim(g.pm10) == "") {
				k.find("dd:eq(1)").text("PM10：--")
			} else {
				k.find("dd:eq(1)").text("PM10：" + g.pm10 + " µg/m3")
			}
			if ($.trim(g.so2) == "") {
				k.find("dd:eq(2)").text("二氧化硫：--")
			} else {
				k.find("dd:eq(2)").text("二氧化硫：" + g.so2 + " µg/m3")
			}
			if ($.trim(g.no2) == "") {
				k.find("dd:eq(3)").text("二氧化氮：--")
			} else {
				k.find("dd:eq(3)").text("二氧化氮：" + g.no2 + " µg/m3")
			}
			var f = h.find(".S-info");
			var j = this.weatherModle.getZhiShu(c.zs_cy, "chuanyi");
			var l = this.weatherModle.getZhiShu(c.zs_ssd, "shushi");
			var e = this.weatherModle.getZhiShu(c.zs_cl, "chenlian");
			var d = this.weatherModle.getZhiShu(c.zs_xc, "xiche");
			f.find("dd:eq(0)").text("穿衣指数：" + j[0]).attr("title", j[1]);
			f.find("dd:eq(1)").text("舒适指数：" + l[0]).attr("title", l[1]);
			f.find("dd:eq(2)").text("晨练指数：" + e[0]).attr("title", e[1]);
			f.find("dd:eq(3)").text("洗车指数：" + d[0]).attr("title", d[1]);
			this.weatherArea.css("height", "368");
			this.addCityArea.css("height", "368");
			n.hide();
			h.show()
		} else {
			var f = n.find(".S-info");
			var j = this.weatherModle.getZhiShu(c.zs_cy, "chuanyi");
			var l = this.weatherModle.getZhiShu(c.zs_ssd, "shushi");
			var e = this.weatherModle.getZhiShu(c.zs_cl, "chenlian");
			var d = this.weatherModle.getZhiShu(c.zs_xc, "xiche");
			f.find("dd:eq(0)").text("穿衣指数：" + j[0]).attr("title", j[1]);
			f.find("dd:eq(1)").text("舒适指数：" + l[0]).attr("title", l[1]);
			f.find("dd:eq(2)").text("晨练指数：" + e[0]).attr("title", e[1]);
			f.find("dd:eq(3)").text("洗车指数：" + d[0]).attr("title", d[1]);
			this.weatherArea.css("height", "328");
			this.addCityArea.css("height", "328");
			h.hide();
			n.show()
		}
	};
	a.prototype.initCityTab = function() {
		var e = 0;
		var f = this.cityStore.readLatestCitys();
		var c = this;
		var d = this.weatherArea.find("ul.cityList");
		d.empty();
		for (e = 0; e < f.length; e++) {
			(function(n, l) {
				var m = "dhv1.head.wea.city";
				var k = l + 1;
				if (!n) {
					return
				}
				var g = $("<li></li>");
				if (n === c.currentCity) {
					g.addClass("select")
				}
				var h = $("<a></a>").attr({
					href: "javascript:void(0)",
					target: "_self"
				}).addClass("cityName pur").text(n);
				h.click(function(o) {
					o.stopPropagation();
					o.preventDefault();
					c.getWeathData($(this).text(), false);
					haoqq.getStatisInstance().reportClick(o, $(this).attr("pbflag"), {
						type: "weather"
					});
					haoqq.getDjlStatisInstance().reportClick(o, $(this).attr("pbflag"))
				});
				var j = $("<a></a>").attr({
					href: "javascript:void(0)",
					target: "_self"
				}).addClass("closed");
				j.click(function(q) {
					q.stopPropagation();
					q.preventDefault();
					var o = $(this).parent().parent().find("li").length;
					if (o <= 1) {
						alert("必须保留一个城市");
						return
					}
					c.weatherArea.find(".cityAdd").show();
					haoqq.getStatisInstance().reportClick(q, $(this).attr("pbflag"), {
						type: "weather"
					});
					haoqq.getDjlStatisInstance().reportClick(q, $(this).attr("pbflag"));
					c.cityStore.deleteCity(h.text());
					var p = $(this).parent().index();
					var r = "";
					if (p == (o - 1)) {
						r = $(this).parent().prev().find("a").text()
					} else {
						r = $(this).parent().next().find("a").text()
					}
					$(this).parent().remove();
					c.getWeathData(r)
				});
				d.append(g);
				g.append(h);
				g.append(j)
			})(f[e], e)
		}
		if (f.length >= 3) {
			c.weatherArea.find(".cityAdd").hide()
		}
	};
	a.prototype.initAddCityEvent = function() {
		var c = this;
		this.weatherArea.find(".cityAdd").click(function(l) {
			l.stopPropagation();
			l.preventDefault();
			var k = c.cityStore.readLatestCitys();
			var j = c.addCityArea.find(".cityList");
			j.empty();
			for (var h = 0; h < k.length; h++) {
				var f = $("<li></li>").addClass("select");
				var g = $("<a></a>").addClass("cityName").text(k[h]);
				j.append(f);
				f.append(g)
			}
			c.addCityArea.show();
			haoqq.getStatisInstance().reportClick(l, "dhv1.head.wea.add", {
				type: "weather"
			});
			haoqq.getDjlStatisInstance().reportClick(l, "dhv1.head.wea.add")
		});
		var d = function(f) {
				f.stopPropagation();
				f.preventDefault();
				c.addCityArea.hide();
				c.weatherArea.show()
			};
		this.addCityArea.find("a.back").click(function(f) {
			f.stopPropagation();
			f.preventDefault();
			d(f);
			haoqq.getStatisInstance().reportClick(f, "dhv1.head.wea.addret", {
				type: "weather"
			});
			haoqq.getDjlStatisInstance().reportClick(f, "dhv1.head.wea.addret")
		});
		this.addCityArea.find("a.cancel").click(function(f) {
			f.stopPropagation();
			f.preventDefault();
			d(f);
			haoqq.getStatisInstance().reportClick(f, "dhv1.head.wea.addcan", {
				type: "weather"
			});
			haoqq.getDjlStatisInstance().reportClick(f, "dhv1.head.wea.addcan")
		});
		this.addCityArea.find("a.ensure").click(function(f) {
			f.stopPropagation();
			f.preventDefault();
			var g = c.citySelect.getSelectedCity();
			if (c.cityStore.checkCityExsit.call(c.cityStore, g)) {
				alert("城市：" + g + "已经存在");
				return
			}
			haoqq.getStatisInstance().reportClick(f, "dhv1.head.wea.addcer", {
				type: "weather"
			});
			haoqq.getDjlStatisInstance().reportClick(f, "dhv1.head.wea.addcer");
			d(f);
			c.getWeathData(g, false)
		})
	};
	a.prototype.getWeekInfo = function(d) {
		var e = ["日", "一", "二", "三", "四", "五", "六"];
		d = d.toDate();
		var c = e[d.getDay()];
		return "星期" + c
	};
	a.prototype.saveCityLocal = function(c) {
		this.cityStore.saveLatestCitys(c)
	};
	b.getWeatherCtrInstance = haoqq.common.Singleton(function() {
		return new a()
	});
	b.createweatherCtr = function() {
		return new a()
	}
})(haoqq.namespace("weather"));
(function(a) {
	var b = function() {};
	b.prototype = new haoqq.common.Template();
	b.prototype.init = function() {
		this.SKIN_KEY = "uskin";
		this.DEFAULT_SKIN = "skin";
		this.list = haoqq.util.ArrayList();
		this.curSkin = g_cookie.get(this.SKIN_KEY);
		this.panel = $("#theme-panel");
		this.skinList = $("#skinList");
		this.userMrg = haoqq.user.getUserManagerInstance();
		var c = this;
		this.userMrg.addListener("dataloaded", function() {
			c.run()
		});
		this.totalPage = 0;
		this.curPage = 1;
		this.reloadList();
		this.totalPage = Math.ceil(this.list.size() / 6);
		this.setPageTab();
		this.changPage()
	};
	b.prototype.initEvent = function() {
		var c = this;
		this.panel.find("div.help").find("a:eq(0)").click(function(f) {
			f.preventDefault();
			c.curSkin = c.DEFAULT_SKIN;
			c.changeSkin(c.DEFAULT_SKIN);
			c.hidePanel();
			c.saveSkin(c.curSkin)
		});
		this.panel.find(".cancel").click(function(f) {
			f.preventDefault();
			c.hidePanel();
			c.curSkin = g_cookie.get(c.SKIN_KEY) || c.DEFAULT_SKIN;
			c.changeSkin(c.curSkin)
		});
		this.panel.find(".save").click(function(f) {
			f.preventDefault();
			c.saveSkin(c.curSkin);
			c.hidePanel()
		});
		this.panel.find("div.pages").find("a.prev").click(function(f) {
			f.preventDefault();
			if (c.curPage <= 1) {
				return
			}
			c.curPage--;
			c.changPage();
			c.setPageTab();
			haoqq.imgloadtrigger.getTriggerInstance().loadImg()
		});
		this.panel.find("div.pages").find("a.next").click(function(f) {
			f.preventDefault();
			if (c.curPage >= c.totalPage) {
				return
			}
			c.curPage++;
			c.changPage();
			c.setPageTab();
			haoqq.imgloadtrigger.getTriggerInstance().loadImg()
		});
		for (var d = 0; d < this.list.size(); d++) {
			this.list.get(d).click(function(f) {
				f.preventDefault();
				c.curSkin = $(this).attr("_skin");
				c.changeSkin(c.curSkin)
			})
		}
	};
	b.prototype.run = function() {
		this.changeSkin(g_cookie.get("uskin") || this.DEFAULT_SKIN)
	};
	b.prototype.reloadList = function() {
		var c = this;
		this.list.clear();
		this.skinList.find("li").each(function() {
			if (c.curSkin) {
				if (c.curSkin === $(this).attr("_skin")) {
					$(this).addClass("select")
				} else {
					$(this).removeClass("select")
				}
			} else {
				if (c.DEFAULT_SKIN === $(this).attr("_skin")) {
					$(this).addClass("select")
				}
			}
			c.list.add($(this))
		})
	};
	b.prototype.setPageTab = function() {
		var c = this.panel.find("div.pages");
		if (this.totalPage == 1) {
			c.find("a.prev").addClass("font-grey");
			c.find("a.next").addClass("font-grey")
		} else {
			if (this.curPage == 1) {
				c.find("a.prev").addClass("font-grey");
				c.find("a.next").removeClass("font-grey")
			} else {
				if (this.curPage >= this.totalPage) {
					c.find("a.next").addClass("font-grey");
					c.find("a.prev").removeClass("font-grey")
				} else {
					c.find("a.prev").removeClass("font-grey");
					c.find("a.next").removeClass("font-grey")
				}
			}
		}
		c.find("span").text(this.curPage + "/" + this.totalPage)
	};
	b.prototype.changPage = function() {
		var e = this.curPage * 6;
		var c = e - 6;
		for (var d = 0; d < this.list.size(); d++) {
			if (d >= c && d < e) {
				this.list.get(d).show()
			} else {
				this.list.get(d).hide()
			}
		}
	};
	b.prototype.changeSkin = function(d) {
		uskin.href = g_cssDomain + d + ".css?ver=" + g_version;
		for (var c = 0; c < this.list.size(); c++) {
			if (d === this.list.get(c).attr("_skin")) {
				this.list.get(c).addClass("select")
			} else {
				this.list.get(c).removeClass("select")
			}
		}
	};
	b.prototype.togglePanel = function() {
		if (this.panel.is(":visible")) {
			this.hidePanel();
			this.curSkin = g_cookie.get(this.SKIN_KEY) || this.DEFAULT_SKIN;
			this.changeSkin(this.curSkin)
		} else {
			this.showPanel()
		}
	};
	b.prototype.showPanel = function() {
		var c = $.getBrowserInfo();
		if (c.brower == "msie" && c.ver == "6.0") {
			$(".gotop-infobox").css("margin-top", "277px")
		} else {
			$(".gotop-infobox").css("top", "277px")
		}
		this.panel.show();
		this.panel.animate({
			height: "200px"
		}, 350, "linear", function() {
			haoqq.imgloadtrigger.getTriggerInstance().loadImg()
		})
	};
	b.prototype.hidePanel = function() {
		var c = $.getBrowserInfo();
		this.panel.animate({
			height: 0
		}, 350, "linear", function() {
			$(this).hide();
			if (c.brower == "msie" && c.ver == "6.0") {
				$(".gotop-infobox").css("margin-top", "156px")
			} else {
				$(".gotop-infobox").css("top", "156px")
			}
		})
	};
	b.prototype.saveSkin = function(c) {
		g_cookie.set(this.SKIN_KEY, c, "long");
		$.requestJson("profile/user_new.php?p=saveuserprofile", function(d) {
			return
		}, {
			g_tk: haoqq.util.getACSRFToken(g_cookie.get("uiid")),
			type: 2,
			data: c
		}, "post")
	};
	a.getSkinManagerInstance = haoqq.common.Singleton(function() {
		return new b()
	});
	a.createSkinManager = function() {
		return new b()
	}
}(haoqq.namespace("skin")));
(function(b) {
	var a = function() {};
	a.prototype = new haoqq.common.Template();
	a.prototype.init = function() {
		this.cache = haoqq.util.getCacheInstance();
		this.hasLogin = false
	};
	a.prototype.initEvent = function() {};
	a.prototype.run = function() {
		this.checkLogin()
	};
	a.prototype.getUserProfile = function(e) {
		var c = this,
			d = haoqq.util.getACSRFToken(PassportSC.cookieHandle() || "");
		$.requestJson("profile/user_new.php?p=getuserprofile", function(f) {
			(typeof e === "function") && e(f);
			c.trigger("dataloaded", f)
		}, {
			g_tk: d
		}, "post")
	};
	a.prototype.login = function() {
		var c = this;
		var e = new haoqq.Ptlogin2();
		var d = new haoqq.PageMask();
		d.show();
		e.open(function() {
			d.hide();
			c.checkLogin();
			c.trigger("login")
		})
	};
	a.prototype.logout = function() {
		$("<iframe/>", {
			src: "http://account.hao.qq.com/sso/logout_redirect?domain=hao.qq.com"
		}).css("display", "none").appendTo($(document.body));
		g_cookie.del("uiid", "", "/");
		this.checkLogin();
		this.trigger("logout")
	};
	a.prototype.checkLogin = function() {
		var c = PassportSC.cookieHandle();
		if (!c) {
			this.hasLogin = false
		} else {
			this.hasLogin = true
		}
	};
	a.prototype.hasLoged = function() {
		if (undefined === this.hasLogin) {
			this.checkLogin()
		}
		return !!this.hasLogin
	};
	b.getUserManagerInstance = haoqq.common.Singleton(function(c) {
		return haoqq.common.Event.extendEvent(new a())
	});
	b.createUserManager = function() {
		return haoqq.common.Event.extendEvent(new a())
	}
}(haoqq.namespace("user")));
(function(b) {
	var a = function() {};
	a.prototype = new haoqq.common.Template();
	a.prototype.init = function() {
		var c = this;
		this.userMrg = haoqq.user.getUserManagerInstance();
		this.userMrg.addListener("login", function(d) {
			c.requestUserInfo()
		});
		this.userMrg.addListener("logout", this.logout);
		this.isWideScreen = window.screen.width > 1024 ? true : false;
		if (this.isWideScreen) {
			this.rightSideArea = $("#wideScreenSide")
		} else {
			this.rightSideArea = $("#norScreenSide")
		}
		this.rightSideArea.show()
	};
	a.prototype.initEvent = function() {
		var c = this;
		$("#loginOutArea a").click(function(d) {
			d.preventDefault();
			c.userMrg.login();
			window.Pingback && Pingback.send("extra", "module=login", false, true)
		});
		$("#loginedArea a.exit").click(function(d) {
			d.preventDefault();
			c.userMrg.logout()
		})
	};
	a.prototype.run = function() {
		this.userMrg.start();
		if (this.userMrg.hasLoged()) {
			this.requestUserInfo()
		} else {
			this.logout()
		}
	};
	a.prototype.requestUserInfo = function() {
		var c = this;
		c.userMrg.getUserProfile(function(h) {
			if (!h || h.code != "0") {
				return
			}
			function g() {
				$(this).off("error", g).attr("src", "http://cache.soso.com/img/i/faces/u1.gif")
			}
			$("#loginedArea img").on("error", g).attr("src", h.qqlogon);
			$("#loginedArea a.user-name").text(h.qqnick);
			$("#loginOutArea").hide();
			$("#loginedArea").show();
			if (c.isWideScreen) {
				var f = c.rightSideArea.find(".qzone");
				var e = c.rightSideArea.find(".weibo");
				var d = c.rightSideArea.find(".qmail");
				if (h.qzone != "0") {
					f.find("span").text(h.qzone > 10 ? "10+" : h.qzone)
				} else {
					f.find("span").text("")
				}
				if (h.qweibo != "0") {
					e.find("span").text(h.qweibo > 10 ? "10+" : h.qweibo)
				} else {
					e.find("span").text("")
				}
				if (h.qmail != "0") {
					d.find("span").text(h.qmail > 10 ? "10+" : h.qmail)
				} else {
					d.find("span").text("")
				}
				f.show();
				e.show();
				d.show()
			} else {
				var f = c.rightSideArea.find(".qzone");
				var e = c.rightSideArea.find(".weibo");
				var d = c.rightSideArea.find(".qmail");
				if (h.qzone != "0") {
					f.find(".red-notice").show()
				} else {
					f.find(".red-notice").hide()
				}
				if (h.qweibo != "0") {
					e.find(".red-notice").show()
				} else {
					e.find(".red-notice").hide()
				}
				if (h.qmail != "0") {
					d.find(".red-notice").show()
				} else {
					d.find(".red-notice").hide()
				}
				f.show();
				e.show();
				d.show()
			}
		})
	};
	a.prototype.logout = function() {
		var c = haoqq.user.getQqViewInstance();
		$("#loginedArea").hide();
		$("#loginOutArea").show();
		c.rightSideArea.find(".qzone").hide();
		c.rightSideArea.find(".weibo").hide();
		c.rightSideArea.find(".qmail").hide()
	};
	b.getQqViewInstance = haoqq.common.Singleton(function() {
		return new a()
	});
	b.createQqView = function() {
		return new a()
	}
}(haoqq.namespace("user")));

(function(b) {
	var a = function() {};
	a.prototype = new haoqq.common.Template();

	function c(d) {
		if (++d > 2) {
			return 0
		}
		return d
	}
	a.prototype.init = function() {
		var d = this;
		this.hasInitMyNav = false;
		var f = $("#mzTab li");
		var e = {
			container: $("#mzTab"),
			currentClassName: "select",
			tabChangeType: "click",
			currentIndex: 0,
			isAllowClickCurTab: false,
			tabs: f,
			tabPanels: $(".hot-site .mz_div"),
			onClickTab: function(h, k) {
				switch (h) {
				case 1:
					var g = $("#tpl-chaoW-txzq");
					break;
				case 2:
					var g = $("#tpl-chaoW-yxzq");
					break
				}
				if ("undefined" !== typeof g && g.length) {
					var j = g.parent(".mz_div");
					g.replaceWith(g.text());
					j.find("img.sync").lazyload({
						effect: "fadeIn"
					});
					try {
						var l = haoqq.mz.getMzViewInstance();
						l.initGame()
					} catch (k) {}
				}
				if ($(f[h]).hasClass("select")) {
					return
				}
			},
			afterChangeTab: function(g, h) {
				if (g == 3) {
					var j = haoqq.mz.getMyNavInstance();
					if (!d.hasInitMyNav) {
						j.start();
						j.renderPage();
						d.hasInitMyNav = true
					}
				}
				haoqq.imgloadtrigger.getTriggerInstance().loadImg()
			}
		};
		haoqq.tab.TabView(e);
		this.timer = 0;
		this.cur1 = 0;
		this.cur2 = 0;
		this.cur3 = 0
	};
	a.prototype.initEvent = function() {
		var d = this;
		$(".chaoW-mz li.jw-zindex").hover(function(g) {
			var f = $(this).find("div.moreUl");
			if (f) {
				d.timer = setTimeout(function() {
					d.showUl(f);
					haoqq.getStatisInstance().reportClick(g, "dhv1.hover.mz", {});
					haoqq.getDjlStatisInstance().reportClick(g, "dhv1.hover.mz")
				}, 300)
			}
		}, function(g) {
			clearTimeout(d.timer);
			var h = g.relatedTarget;
			var f = $(this).find("div.moreUl");
			if (f && !haoqq.util.isAncestor($(this)[0], h)) {
				d.hideUl(f)
			}
		});
		$("div.moreUl").mouseout(function(f) {
			var g = f.relatedTarget;
			if (!haoqq.util.isAncestor($(this).parent().parent()[0], g)) {
				d.hideUl($(this))
			}
		})
	};
	a.prototype.run = function() {};
	a.prototype.showUl = function(d) {
		d.parent().show()
	};
	a.prototype.hideUl = function(d) {
		d.parent().hide()
	};
	a.prototype.initGame = function() {
		var d = this;
		$("#simpleGameDiv .more").click(function(g) {
			g.preventDefault();
			d.cur1 = c(d.cur1);
			var f = $("#simpleGameDiv .yxzq-lit-cot");
			f.hide();
			$(f[d.cur1]).show();
			haoqq.imgloadtrigger.getTriggerInstance().loadImg()
		});
		$("#webGameDiv .more").click(function(g) {
			g.preventDefault();
			d.cur2 = c(d.cur2);
			var f = $("#webGameDiv .yxzq-wp-cot");
			f.hide();
			$(f[d.cur2]).show();
			haoqq.imgloadtrigger.getTriggerInstance().loadImg()
		});
		$("#netGameDiv .more").click(function(g) {
			g.preventDefault();
			d.cur3 = c(d.cur3);
			var f = $("#netGameDiv .yxzq-wp-cot");
			f.hide();
			$(f[d.cur3]).show();
			haoqq.imgloadtrigger.getTriggerInstance().loadImg()
		})
	};
	b.getMzViewInstance = haoqq.common.Singleton(function() {
		return new a()
	});
	b.createMzView = function() {
		return new a()
	}
}(haoqq.namespace("mz")));
(function(b) {
	var a = function() {};
	a.prototype = new haoqq.common.Template();
	a.prototype.init = function() {
		this.his = [];
		this.PAGE_HIS_LENGTH = 5
	};
	a.prototype.initEvent = function() {
		var c = this;
		$("#clearHis").click(function(d) {
			d.preventDefault();
			c.clearPageHis($(this))
		})
	};
	a.prototype.run = function() {
		this.readPageHis();
		this.updateHisView()
	};
	a.prototype.updateHisView = function() {
		var k = $("#historyArea");
		$("#historyArea li").remove();
		var d = false;
		for (var j = 0; j < this.his.length; j++) {
			if (this.his[j] === "" || this.his[j] == "undefined" || !this.his[j]) {
				continue
			}
			var e = this.his[j].split("||");
			if (!e[0] || !e[1]) {
				continue
			}
			var g = $("<li>");
			k.append(g);
			var f = $("<img height='16' width='16'/>");
			setIconUrl(e[1], f);
			var c = $("<a></a>").attr({
				href: e[1],
				target: "_blank"
			}).text(e[0]);
			g.append(f);
			g.append(c);
			d = true
		}
		if (d) {
			$("#clearHis").show()
		} else {
			$("#clearHis").hide()
		}
	};
	a.prototype.updatePageHis = function(d, c) {
		this.savePageHis(d, c);
		this.updateHisView()
	};
	a.prototype.savePageHis = function(e, d) {
		var h = e + "||" + d;
		for (var g in this.his) {
			if (this.his[g] == h) {
				return
			}
		}
		var c = [];
		c[0] = h;
		for (var f = 0; f < this.PAGE_HIS_LENGTH - 1; f++) {
			c[f + 1] = this.his[f]
		}
		this.his = c;
		for (var f = 0; f < this.PAGE_HIS_LENGTH; f++) {
			g_storge.set("his" + f, this.his[f])
		}
	};
	a.prototype.clearPageHis = function(d) {
		$("#historyArea li").remove();
		this.his = [];
		d.hide();
		for (var c = 0; c < this.PAGE_HIS_LENGTH; c++) {
			g_storge.del("his" + c)
		}
	};
	a.prototype.readPageHis = function() {
		for (var c = 0; c < this.PAGE_HIS_LENGTH; c++) {
			this.his[c] = g_storge.get("his" + c) || ""
		}
	};
	b.getHistoryInstance = haoqq.common.Singleton(function() {
		return new a()
	});
	b.createHistory = function() {
		return new a()
	}
}(haoqq.namespace("mz")));
(function(b) {
	var c = function() {};
	c.prototype = new haoqq.common.Template();
	c.prototype.channelEunm = ["web","sucai", "news", "video", "image", "baike", "music", "map", "wenwen", "gouwu", "weibo"];
	c.prototype.channelMap = {
		web: "1",
		news: "2",
		video: "3",
		image: "4",
		baike: "5",
		music: "6",
		map: "7",
		wenwen: "8",
		gouwu: "9",
		weibo: "a",
		sucai: "b"
	};
	c.prototype.enginMap = {
		soso: "1",
		baidu: "2",
		google: "3",
		etao: "4",
		sina: "5",
		soku: "6",
		taobao: "7",
		tmall: "8",
		jd: "9",
		sougou: "a",
		youdao: "b",
		pangu: "c",
		zhanku: "d",
		nitu: "e"
	};
	c.prototype.getLegalEngin = function(d) {
		if (!this.enginMap[d]) {
			return "sougou"
		}
		return d
	};
	var a = {
		commonJson: function(g, e, f) {
			var d = [];
			if (!g) {
				return d
			}
			for (i = 0; i < g.length; i++) {
				if (i >= 10) {
					break
				}
				d[d.length] = {
					name: g[i],
					value: i,
					result: i
				}
			}
			return d
		},
		mapDataJson: function(h, f, g) {
			var e = [];
			if (!h) {
				return e
			}
			var d = h.detail;
			for (i = 0; i < d.length; i++) {
				e[e.length] = {
					name: d[i].name,
					value: i,
					result: i
				}
			}
			return e
		}
	};
	c.prototype.configuration = {
		web: {
			enginEunm: ["baidu", "soso", "google", "youdao", "sougou"],
			smartUrl: "http://w.sugg.sogou.com/sugg/ajaj_json.jsp",
			smartType: "jsonp",
			jsonpName: "cb",
			getPostData: function(f, d, e) {
				return {
					type: "web",
					key: f
				}
			},
			dataParser: function(f, d, e) {
				return a.commonJson(f, d, e)
			},
			baidu: {
				url: "http://www.baidu.com/s?",
				name: "百度",
				key: "wd",
				logoClassNmae: "baidu"
			},
			soso: {
				url: "http://www.soso.com/q?",
				name: "搜搜",
				logoClassNmae: "soso"
			},
			sougou: {
				url: "http://www.sogou.com/tx?",
				name: "搜狗",
				key: "query",
				isdefault: true,
				logoClassNmae: "sougou",
				params: {
					hdq: "sogou-site-c91e3483cf4f9005-0001"
				},
				suggParams: {
					hdq: "sogou-site-c91e3483cf4f9005-0001",
					sourceid: "sugg"
				},
				hotParams: {
					hdq: "sogou-site-c91e3483cf4f9005-0002"
				}
			},
			google: {
				url: "http://www.google.com.hk/search?",
				name: "谷歌",
				key: "q",
				logoClassNmae: "google"
			},
			youdao: {
				url: "http://www.youdao.com/search?",
				name: "有道",
				key: "q",
				params: {
					ue: "utf8"
				},
				logoClassNmae: "youdao",
				defaultUrl: "http://www.youdao.com"
			}
		},
		sucai: {
			enginEunm: ["zhanku", "nitu"],
			smartUrl: "",
			smartType: "jsonp",
			jsonpName: "cb",
			getPostData: function(f, d, e) {
				return {
					type: "web",
					key: f
				}
			},
			dataParser: function(f, d, e) {
				return a.commonJson(f, d, e)
			},
			zhanku: {
				url: "http://www.zcool.com.cn/tosearch.do?",
				name: "站酷",
				key: "world",
				isdefault: true,
				logoClassNmae: "zhanku"
			},
			nitu: {
				url: "http://soso.nipic.com/?",
				name: "昵图网",
				key: "q",
				logoClassNmae: "nitu"
			}
		},
		news: {
			enginEunm: ["sougou", "soso", "baidu", "google"],
			smartUrl: "http://w.sugg.sogou.com/sugg/ajaj_json.jsp",
			smartType: "jsonp",
			jsonpName: "cb",
			getPostData: function(f, d, e) {
				return {
					type: "news",
					key: f
				}
			},
			dataParser: function(f, d, e) {
				return a.commonJson(f, d, e)
			},
			sougou: {
				url: "http://news.sogou.com/news?",
				name: "搜狗",
				key: "query",
				isdefault: true,
				logoClassNmae: "sougou_news",
				params: {
					p: 18040300
				},
				suggParams: {
					p: 18040300,
					sourceid: "sugg"
				}
			},
			soso: {
				url: "http://news.soso.com/n.q",
				name: "搜搜",
				logoClassNmae: "soso",
				params: {
					ty: "c"
				}
			},
			baidu: {
				url: "http://news.baidu.com/ns?",
				name: "百度",
				key: "word",
				logoClassNmae: "baidu"
			},
			google: {
				url: "http://www.google.com.hk/search?",
				name: "谷歌",
				key: "q",
				logoClassNmae: "google",
				params: {
					tbm: "nws",
					hl: "zh-CN"
				}
			}
		},
		video: {
			enginEunm: ["sougou", "soso", "soku", "baidu"],
			smartUrl: "http://vs.sugg.sogou.com/sugg/ajaj_json.jsp",
			smartType: "jsonp",
			jsonpName: "cb",
			getPostData: function(f, d, e) {
				return {
					type: "vc",
					key: f
				}
			},
			dataParser: function(f, d, e) {
				return a.commonJson(f, d, e)
			},
			sougou: {
				url: "http://v.sogou.com/v?",
				name: "搜狗",
				key: "query",
				isdefault: true,
				logoClassNmae: "sougou_video",
				params: {
					p: 18040600
				},
				suggParams: {
					p: 18050600
				}
			},
			soso: {
				url: "http://video.soso.com/search/?",
				name: "搜搜",
				logoClassNmae: "soso"
			},
			soku: {
				url: "http://www.soku.com/v?",
				name: "Soku",
				key: "keyword",
				logoClassNmae: "soku"
			},
			baidu: {
				url: "http://video.baidu.com/v?",
				name: "百度",
				key: "word",
				logoClassNmae: "baidu"
			}
		},
		image: {
			enginEunm: ["sougou", "soso", "baidu", "google"],
			smartUrl: "http://vs.sugg.sogou.com/sugg/ajaj_json.jsp",
			smartType: "jsonp",
			jsonpName: "cb",
			getPostData: function(f, d, e) {
				return {
					type: "pic",
					key: f
				}
			},
			dataParser: function(f, d, e) {
				return a.commonJson(f, d, e)
			},
			sougou: {
				url: "http://pic.sogou.com/pics?",
				name: "搜狗",
				key: "query",
				isdefault: true,
				logoClassNmae: "sougou_img",
				params: {
					p: 18040500
				},
				suggParams: {
					p: 18050500
				}
			},
			soso: {
				url: "http://image.soso.com/image.cgi?",
				name: "搜搜",
				logoClassNmae: "soso",
				params: {
					sc: "img"
				}
			},
			baidu: {
				url: "http://image.baidu.com/i?",
				name: "百度",
				key: "word",
				logoClassNmae: "baidu",
				params: {
					tn: "baiduimage"
				}
			},
			google: {
				url: "http://www.google.com.hk/search?",
				name: "谷歌",
				key: "q",
				logoClassNmae: "google",
				params: {
					tbm: "isch",
					hl: "zh-CN"
				}
			}
		},
		baike: {
			enginEunm: ["sougou", "baidu"],
			smartUrl: "http://w.sugg.sogou.com/sugg/ajaj_json.jsp",
			smartType: "jsonp",
			jsonpName: "cb",
			getPostData: function(f, d, e) {
				return {
					type: "baike",
					key: f
				}
			},
			dataParser: function(f, d, e) {
				return a.commonJson(f, d, e)
			},
			sougou: {
				url: "http://baike.soso.com/Search.e?",
				name: "搜狗",
				key: "sp",
				isdefault: true,
				logoClassNmae: "sougou_baike"
			},
			baidu: {
				url: "http://baike.baidu.com/search/word?",
				name: "百度",
				key: "word",
				logoClassNmae: "baidu"
			}
		},
		music: {
			enginEunm: ["sougou", "soso", "baidu"],
			smartUrl: "http://vs.sugg.sogou.com/sugg/ajaj_json.jsp",
			smartType: "jsonp",
			jsonpName: "cb",
			getPostData: function(f, d, e) {
				return {
					type: "music",
					key: f
				}
			},
			dataParser: function(f, d, e) {
				return a.commonJson(f, d, e)
			},
			sougou: {
				url: "http://mp3.sogou.com/music.so?",
				name: "搜狗",
				key: "query",
				isdefault: true,
				logoClassNmae: "sougou_yinyue",
				params: {
					p: 18040200
				},
				suggParams: {
					p: 18050200
				}
			},
			soso: {
				url: "http://cgi.music.soso.com/fcgi-bin/m.q?",
				name: "搜搜",
				logoClassNmae: "soso"
			},
			baidu: {
				url: "http://music.baidu.com/search?",
				name: "百度",
				key: "key",
				logoClassNmae: "baidu"
			}
		},
		map: {
			enginEunm: ["sougou", "soso", "baidu", "google"],
			smartUrl: "http://w.sugg.sogou.com/sugg/ajaj_json.jsp",
			smartType: "jsonp",
			jsonpName: "cb",
			getPostData: function(f, d, e) {
				return {
					key: f,
					type: "web"
				}
			},
			dataParser: function(f, d, e) {
				return a.mapDataJson(f, d, e)
			},
			sougou: {
				url: "http://map.sogou.com/?",
				name: "搜狗",
				key: "lq",
				isdefault: true,
				logoClassNmae: "sougou_map"
			},
			soso: {
				url: "http://map.soso.com?",
				name: "搜搜",
				logoClassNmae: "soso",
				params: {
					pid: "haoqq.map"
				}
			},
			baidu: {
				url: "http://map.baidu.com/m?",
				name: "百度",
				key: "word",
				logoClassNmae: "baidu"
			},
			google: {
				url: "http://maps.google.com.hk/maps?",
				name: "谷歌",
				key: "q",
				logoClassNmae: "google"
			}
		},
		wenwen: {
			enginEunm: ["sougou", "baidu"],
			smartUrl: "http://vs.sugg.sogou.com/sugg/ajaj_json.jsp",
			smartType: "jsonp",
			jsonpName: "cb",
			getPostData: function(f, d, e) {
				return {
					type: "zhishi",
					key: f
				}
			},
			dataParser: function(f, d, e) {
				return a.commonJson(f, d, e)
			},
			sougou: {
				url: "http://wenwen.sogou.com/z/Search.e",
				name: "搜狗",
				key: "query",
				isdefault: true,
				logoClassNmae: "sougou_wenwen",
				params: {
					sp: function(d) {
						return "S" + d
					}
				}
			},
			baidu: {
				url: "http://zhidao.baidu.com/search?",
				name: "百度",
				key: "word",
				logoClassNmae: "baidu"
			}
		},
		gouwu: {
			enginEunm: ["sougou", "etao", "taobao", "tmall", "jd"],
			smartUrl: "http://w.sugg.sogou.com/sugg/ajaj_json.jsp",
			smartType: "jsonp",
			jsonpName: "cb",
			getPostData: function(f, d, e) {
				return {
					type: "shop",
					key: f
				}
			},
			dataParser: function(f, d, e) {
				return a.commonJson(f, d, e)
			},
			sougou: {
				url: "http://gouwu.sogou.com/shop?",
				name: "搜狗",
				key: "query",
				isdefault: true,
				logoClassNmae: "sougou_buy",
				params: {
					p: 18041500
				},
				suggParams: {
					p: 18041500,
					sourceid: "sugg"
				}
			},
			etao: {
				url: "http://s.etao.com/search?",
				name: "一淘",
				key: "q",
				logoClassNmae: "yt"
			},
			taobao: {
				url: "http://s.taobao.com/search?",
				name: "淘宝",
				key: "q",
				logoClassNmae: "taobao"
			},
			tmall: {
				url: "http://list.tmall.com/search_product.htm?",
				name: "天猫",
				key: "q",
				logoClassNmae: "tm",
				getQueryUrl:function(d){return this.url+"q="+d}
			},
			jd: {
				url: "http://search.jd.com/Search?",
				name: "京东",
				key: "keyword",
				logoClassNmae: "jd",
				params: {
					enc: "utf-8"
				}
			}
		},
		weibo: {
			enginEunm: ["sina"],
			smartUrl: "http://w.sugg.sogou.com/sugg/ajaj_json.jsp",
			smartType: "jsonp",
			jsonpName: "cb",
			getPostData: function(f, d, e) {
				return {
					type: "web",
					key: f
				}
			},
			dataParser: function(f, d, e) {
				return a.commonJson(f, d, e)
			},
			sina: {
				url: "http://weixin.sogou.com/?p=99041200",
				name: "微信",
				isdefault: true,
				logoClassNmae: "wxss",
				getQueryUrl: function(d) {
					if (d) {
						return "http://weixin.sogou.com/weixin?p=99041200&type=2&ie=utf8&query=" + encodeURIComponent(d)
					} else {
						return this.url
					}
				}
			}
		}
	};
	c.prototype.getSmartInfo = function(f, g) {
		var j = this.configuration[f].smartUrl;
		var d = this.configuration[f].smartType;
		var e = this.configuration[f].jsonpName;
		var h = this.configuration[f].jpCallbackName;
		return {
			smartUrl: j,
			type: d,
			jsonpName: e,
			jpCallbackName: h
		}
	};
	c.prototype.getSmartPostParam = function(f, d, e) {
		return this.configuration[d].getPostData(f, d, e)
	};
	c.prototype.getSmartDataHandler = function(f, d, e) {
		return this.configuration[d].dataParser(f, d, e)
	};
	c.prototype.setParam = function(d, e) {
		this.params[d] = encodeURIComponent(e);
		return this
	};
	c.prototype.getParam = function(d, e) {
		return this.params[d]
	};
	c.prototype.hasEngin = function(g, e) {
		var f = this.configuration[g].enginEunm;
		for (var d = 0; d < f.length; d++) {
			if (f[d] === e) {
				return true
			}
		}
		return false
	};
	c.prototype.getDefaultEngin = function(g) {
		var f = this.configuration[g].enginEunm;
		var d = this.configuration[g];
		for (var e = 0; e < f.length; e++) {
			if (typeof d[f[e]].isdefault === "function") {
				if (f[e] && d[f[e]].isdefault() === true) {
					return f[e]
				}
			} else {
				if (f[e] && d[f[e]].isdefault === true) {
					return f[e]
				}
			}
		}
		return "sougou"
	};
	c.prototype.overrideParam = function(h, k, g, e, j) {
		var d = this.configuration[h][k];
		if (d) {
			var f = d[g];
			if (f) {
				f[e] = j
			}
		}
	};
	c.prototype.getQueryUrl = function(e, l, m, n) {
		if (!m || m == "undefined") {
			m = "soso"
		}
		if (!l || l == "undefined") {
			l = "web"
		}
		var j = {};
		var h = this.configuration[l][m];
		if (!h) {
			return ""
		}
		if (h.getQueryUrl && (typeof h.getQueryUrl === "function")) {
			return h.getQueryUrl.call(h, e)
		}
		if (e == "" && l == "wenwen" && m == "soso") {
			return "http://wenwen.soso.com"
		}
		if (!e && h.defaultUrl) {
			return h.defaultUrl
		}
		var g = h.params;
		if ("sugg" == n) {
			g = h.suggParams || g
		} else {
			if ("hotword" == n) {
				g = h.hotParams || g
			}
		}
		for (var f in g) {
			if (typeof(g[f]) === "function") {
				j[f] = g[f](e)
			} else {
				if (typeof(f) === "string") {
					j[f] = g[f]
				}
			}
		}
		for (f in this.params) {
			j[f] = this.params[f]
		}
		j.ie = "utf-8";
		if (j[h.key || "w"] === undefined) {
			j[h.key || "w"] = e
		}
		var d = h.url.indexOf("?") === -1 ? h.url + "?" : h.url;
		return d + $.param(j)
	};
	c.prototype.init = function() {
		this.params = {}
	};
	c.prototype.initEvent = function() {};
	c.prototype.run = function() {};
	b.getEnginModelInstance = haoqq.common.Singleton(function() {
		return new c()
	});
	b.createEnginModel = function() {
		return new c()
	}
}(haoqq.namespace("search")));
(function(b) {
	var a = function() {};
	a.prototype = new haoqq.common.Template();
	a.prototype.DEFAULTENGIN = "web";
	a.prototype.init = function(c) {
		this.param = c || {};
		if (!c[0].searchModel || !c[0].container) {
			return
		}
		this.searchModel = c[0].searchModel;
		this.container = c[0].container;
		this.searchEngineLogo = $("#searchEngineLogo");
		this.onSelectChange = (typeof(c[0].onSelectChange) == "function") ? c[0].onSelectChange : function() {};
		this.curChannel = this.DEFAULTENGIN
	};
	a.prototype.initEvent = function() {};
	a.prototype.run = function() {};
	a.prototype.changeView = function(h, g) {
		var d = this;
		this.container.empty();
		var j = this.searchModel.configuration;
		var c = j[h];
		var f = c.enginEunm;
		for (var e = 0; e < f.length; e++) {
			(function(m) {
				var k = $("<li>");
				var l = $("<a>");
				var n = c[m];
				l.attr({
					href: "javascript:;",
					target: "_self",
					"class": "enginePic " + n.logoClassNmae,
					title: "切换到'" + n.name + "'引擎",
					engine: m
				}).click(function(o) {
					var p = $(this).attr("engine");
					d.searchEngineLogo.removeClass();
					d.searchEngineLogo.addClass("enginePic " + c[p].logoClassNmae);
					searchEngineLogo.focus();
					d.onSelectChange(o, p, h)
				});
				d.container.append(k);
				k.append(l)
			})(f[e]);
			if (g == f[e]) {
				d.searchEngineLogo.removeClass();
				d.searchEngineLogo.addClass("enginePic " + c[g].logoClassNmae)
			}
		}
		d.curChannel = h
	};
	b.getSelectViewInstance = haoqq.common.Singleton(function() {
		return new a()
	});
	b.createSelectView = function() {
		return new a()
	}
}(haoqq.namespace("search")));
(function(b) {
	var a = function() {};
	a.prototype = new haoqq.common.Template();
	a.prototype.parseSearchChannel = function(d) {
		var c = g_storge.get(this.CHANNEL_STORAGE_KEY + "_" + d);
		try {
			var g = JSON.parse(c);
			if (+g.expires > new Date) {
				return g.rawData
			}
		} catch (f) {
			return c
		}
		return null
	};
	a.prototype.saveSearchChannel = function(e, f, d) {
		var c = {
			expires: +new Date + (d || 7 * 86400 * 1000),
			rawData: escape(f)
		};
		g_storge.set(this.CHANNEL_STORAGE_KEY + "_" + e, JSON.stringify(c))
	};
	a.prototype.delSearchChannel = function(c) {
		g_storge.del(this.CHANNEL_STORAGE_KEY + "_" + c)
	};
	a.prototype.init = function() {
		var e = this;
		this.form = $("#searchForm");
		this.queryInput = $("#searchInput");
		this.SEL_BACK = 2065;
		this.CHANNEL_STORAGE_KEY = "searchChannel";
		this.DEFAULT_ENGINE_KEY = "deen";
		this.CURRENT_ENGINE_KEY = "cuen";
		this.CURRENT_CHANNEL_KEY = "cuch";
		var g = new Date(),
			c = "today_sel_back";
		if (+g > +new Date(2014, 8, 21) && +g < +new Date(2014, 9, 1)) {
			var f = +g_storge.get(c);
			if (!f || +g - f > 3600 * 1000 * 24) {
				g_storge.del("sel_back");
				g_storge.set(c, +new Date(2014, g.getMonth(), g.getDate()))
			}
		}
		if (this.SEL_BACK != g_storge.get("sel_back")) {
			g_storge.del(this.CHANNEL_STORAGE_KEY + "_web");
			g_storge.set("sel_back", this.SEL_BACK)
		}
		if (this.parseSearchChannel("web") == "pangu") {
			this.delSearchChannel("web")
		}
		if (this.parseSearchChannel("baike") == "soso") {
			this.delSearchChannel("baike")
		}
		if (this.parseSearchChannel("wenwen") == "soso") {
			this.delSearchChannel("wenwen")
		}
		this.enginModel = new haoqq.search.getEnginModelInstance();
		this.enginModel.start();
		this.channels = this.enginModel.channelEunm;
		this.searchSelectView = new haoqq.search.getSelectViewInstance();
		this.curChannel = this.channels[0];
		this.curEngin = this.parseSearchChannel(this.curChannel) || this.enginModel.getDefaultEngin(this.curChannel);
		window.spb_vars && (spb_vars[this.DEFAULT_ENGINE_KEY] = this.curEngin);
		window.spb_vars && (spb_vars[this.CURRENT_ENGINE_KEY] = this.curEngin);
		window.spb_vars && (spb_vars[this.CURRENT_CHANNEL_KEY] = this.searchSelectView.DEFAULTENGIN);
		this.curEngin = this.enginModel.getLegalEngin(this.curEngin);
		this.form[0].action = this.enginModel.getQueryUrl("", this.curChannel, this.curEngin);
		this.channelTab = new haoqq.tab.TabView({
			container: $("#search"),
			currentClassName: "select",
			tabChangeType: "click",
			currentIndex: 0,
			isAllowClickCurTab: false,
			tabs: $("#searchTab li"),
			onMouseEnterTab: function(d, h) {},
			onMouseLeaveTab: function(d, h) {},
			beforeChangeTab: function(h, l) {
				var k = e.channels[h];
				var d = e.parseSearchChannel(k);
				var j;
				if (d && e.enginModel.hasEngin(k, d)) {
					j = d
				} else {
					j = e.enginModel.getDefaultEngin(k)
				}
				if (!j || !k) {
					return false
				}
				e.searchSelectView.changeView(k, j);
				e.curEngin = j;
				e.curChannel = k;
				window.spb_vars && (spb_vars[e.CURRENT_CHANNEL_KEY] = k);
				window.spb_vars && (spb_vars[e.CURRENT_ENGINE_KEY] = j);
				e.queryInput.focus();
				return true
			}
		});
		this.searchSelectView.start({
			searchModel: this.enginModel,
			container: $("#enginChange"),
			onSelectChange: function(k, j, h) {
				e.curEngin = j;
				window.spb_vars && (window.spb_vars[e.CURRENT_ENGINE_KEY] = j);
				window.spb_vars && (window.spb_vars[e.CURRENT_CHANNEL_KEY] = h);
				if ("web" == h && "google" == j) {
					g_storge.set("bd_st", 0);
					e.saveSearchChannel("web", "sougou")
				} else {
					if ("web" == h && "baidu" == j) {
						var l = g_storge.get("bd_st") | 0;
						if (l < 1) {
							g_storge.set("bd_st", ++l)
						} else {
							if ("baidu" != e.parseSearchChannel("web")) {
								e.saveSearchChannel("web", j)
							}
						}
					} else {
						e.saveSearchChannel(e.curChannel, j);
						g_storge.set("bd_st", 0)
					}
				}
				e.hideEngineList();
				var d = "dhv1.so.change." + e.enginModel.enginMap[j] + e.enginModel.channelMap[e.curChannel];
				haoqq.getStatisInstance().reportClick(k, d, {
					type: "search"
				});
				haoqq.getDjlStatisInstance().reportClick(k, d)
			}
		});
		this.searchWay = {
			input_c: "input",
			input_e: "input",
			smart: "smart",
			hotword: "hotword"
		};
		this.searchType = {
			input_c: "1",
			input_e: "2",
			smart: "1",
			hotword: ""
		}
	};
	a.prototype.initEvent = function() {
		var c = this;
		c.queryInput.autocomplete({
			dataUrl: "donothing",
			width: 565,
			max: 10,
			forSearch: true,
			selectFirst: false,
			postType: "post",
			scrollHeight: 330,
			enginModel: c.enginModel,
			enginController: c,
			callback: function(d, e) {
				if (e !== "" && e !== "-1" && e !== undefined) {
					c.doQuery(d, c.curChannel, c.curEngin, "smart", "sugg")
				}
			}
		});
		$("#searchEngineLogo").hover(function(d) {
			timer = setTimeout(function() {
				c.showEngineList();
				var e = "dhv1.hover.so." + c.enginModel.channelMap[c.curChannel];
				haoqq.getStatisInstance().reportClick(d, e, {
					type: "search"
				});
				haoqq.getDjlStatisInstance().reportClick(d, e)
			}, 300)
		}, function(f) {
			clearTimeout(timer);
			var g = f.relatedTarget;
			var d = $("#enginChange");
			if (d && !haoqq.util.isAncestor(d[0], g)) {
				c.hideEngineList()
			}
		});
		$("#enginChange").hover($.noop, function(d) {
			var f = d.relatedTarget;
			if (!haoqq.util.isAncestor($("#searchEngineLogo")[0], f)) {
				c.hideEngineList()
			}
		});
		this.queryInput.keypress(function(d) {
			if (d.keyCode == 13) {
				c.doQuery(c.queryInput.val(), c.curChannel, c.curEngin, "input_e");
				return false
			}
		});
		this.form[0].onsubmit = function(d) {
			c.doQuery(c.queryInput.val(), c.curChannel, c.curEngin, "input_c");
			return false
		};
		this.showEngineList = function() {
			$("#enginChange").show()
		};
		this.hideEngineList = function() {
			$("#enginChange").hide()
		};
		this.queryInput.mouseover(function(d) {
			$(this).focus()
		})
	};
	a.prototype.run = function() {
		this.searchSelectView.changeView(this.curChannel, this.curEngin)
	};
	a.prototype.getCurChannel = function() {
		return this.curChannel
	};
	a.prototype.getCurEngin = function() {
		return this.curEngin
	};
	a.prototype.overrideParam = function(e, g, d, c, f) {
		this.enginModel.overrideParam(e, g, d, c, f)
	};
	a.prototype.doQuery = function(d, h, j, l, m) {
		var p = this;
		var f = haoqq.util.readGet();
		var c = f.unc;
		if (j == "soso" && c && c != "") {
			this.enginModel.setParam("unc", c)
		} else {
			if (j == "soso") {
				c = "u500874_s1_h1";
				this.enginModel.setParam("unc", c)
			}
		}
		if (typeof Pingback != "undefined") {
			Pingback.send("extra", "&module=searchword&tag=" + encodeURIComponent(d) + "&channel=" + h + "&engine=" + j + "&source=" + l, false, true)
		}
		var o = "";
		if (j == "soso") {
			var e = haoqq.user.getUserManagerInstance();
			var k = e.hasLoged();
			if (l === "smart") {
				o = "dh.so.smart"
			} else {
				if (l.indexOf("input") >= 0) {
					o = "dh.so.p"
				} else {
					if (l === "hotword") {
						o = "dh.so.hotkey"
					}
				}
			}
			if (k) {
				o += ".q"
			}
			this.enginModel.setParam("cid", o)
		}
		var n = "dhv1.so." + this.searchWay[l] + "." + this.enginModel.enginMap[j] + this.enginModel.channelMap[h] + this.searchType[l];
		haoqq.getDjlStatisInstance().reportClick(null, n);
		if (j == "soso" && h == "baike") {
			d = "S" + d
		}
		if (h === "gouwu" && j === "tmall") {
			var g = window.open();
			$.requestJson("utils/toolboxs.php", function(t) {
				var s = t.code;
				if (s == "0") {
					var r = p.enginModel.getQueryUrl(t.result, h, j, m);
					window.setTimeout(function() {
						g.location = r
					}, 0)
				}
			}, {
				tn: "en_gbk",
				w: d
			}, "post")
			
		} else {
			var q = this.enginModel.getQueryUrl(d, h, j, m);
			
			window.open(q)
		}
	};
	b.getSearchCtrInstance = haoqq.common.Singleton(function() {
		return new a()
	});
	b.createSearchCtr = function() {
		return new a()
	}
}(haoqq.namespace("search")));
(function(b) {
	var a = function() {};
	a.prototype = new haoqq.common.Template();
	a.prototype.init = function(c) {
		this.hotArtcleOpen = $("#hotArtcleOpen");
		this.hotArtcleClosed = $("#hotArtcleClosed");
		this.ulClosed = $("#ulClosed");
		this.ilClosed = $("#ulClosed li");
		this.ulOpen = $("#ulOpen");
		this.ilOpen = $("#ulOpen li");
		this.search = haoqq.search.getSearchCtrInstance()
	};
	a.prototype.initEvent = function(f) {
		var e = this;
		var d = this.hotArtcleClosed;
		var c = this.hotArtcleOpen;
		var g = 0;
		this.ilClosed.each(function() {
			$(this).find("a").mouseover(function(h) {
				g = setTimeout(function() {
					d.hide(0);
					c.show(0);
					haoqq.getStatisInstance().reportClick(h, "dhv1.hover.hotwords", {
						type: "search"
					});
					haoqq.getDjlStatisInstance().reportClick(h, "dhv1.hover.hotwords")
				}, 300)
			}).mouseout(function(h) {
				clearTimeout(g)
			}).click(function(h) {
				h.preventDefault();
				e.search.doQuery($(this).attr("_qw"), "web", "sougou", "hotword")
			})
		});
		this.hotArtcleOpen.mouseout(function(j) {
			var h = j.toElement || j.relatedTarget;
			if (!this.contains(h)) {
				c.hide();
				d.show()
			}
		});
		this.ilOpen.each(function() {
			$(this).find("a").click(function(j) {
				j.preventDefault();
				var h = e.search.getCurEngin();
				return e.search.doQuery($(this).attr("_qw"), "web", "sougou", "hotword", "hotword")
			})
		})
	};
	a.prototype.run = function(c) {
		this.roll();
		this.getHotWord()
	};
	a.prototype.roll = function() {
		var d = this.ulClosed;
		var c;
		d.hover(function() {
			clearInterval(c)
		}, function() {
			c = setInterval(function() {
				var e = d.find("li:first").height();
				d.find("li:first").animate({
					marginTop: -e
				}, 500, function() {
					d.find("li").css("marginTop", "0");
					d.find("li:first").appendTo(d)
				})
			}, 5000)
		}).trigger("mouseleave")
	};
	a.prototype.getHotWord = function() {
		var d = this.ilClosed;
		var c = this.ilOpen;
		var e = function(j) {
				if (!j || j.code != "0") {
					return
				}
				var h = j.words;
				for (var g = 0; g < h.length; g++) {
					var f = h[g].split(",");
					if (f.length == 0) {
						continue
					} else {
						var l = f[0];
						if (l.length > 9) {
							l = l.substring(0, 9)
						}
						if (f.length == 1) {
							$(d[g]).find("a").attr("_qw", f[0]).text(l);
							$(c[g]).find("a").attr("_qw", f[0]).text(l)
						} else {
							if (f.length >= 2) {
								var k = "new";
								if (f[1] == "u") {
									k = "up arrow"
								} else {
									if (f[1] == "d") {
										k = "down arrow"
									}
								}
								$(d[g]).find("a").attr("_qw", f[0]).text(l);
								$(c[g]).find("a").attr("_qw", f[0]).text(l)
							}
						}
					}
				}
				g_storge.set("hotwords_readtime", +new Date())
			};
		$.ajax({
			url: "http://top.sogou.com/top_index.js",
			cache: false,
			dataType: "script",
			scriptCharset: "gbk",
			success: function(f) {
				e({
					words: window.sogou_top_words || [],
					code: "0"
				})
			}
		})
	};
	a.prototype.getHotNewsLink = function() {
		return "hotwords/gethotwords.php"
	};
	b.getHotWordInstance = haoqq.common.Singleton(function() {
		return new a()
	});
	b.createHotWord = function() {
		return new a()
	}
}(haoqq.namespace("search")));




(function(a) {
	var b = function() {};
	b.prototype = new haoqq.common.Template();
	b.prototype.init = function() {
		var d = $("#module5 ul.chaoW-tab-list li");
		var c = {
			container: $("#module5"),
			currentClassName: "select",
			tabChangeType: "click",
			currentIndex: 0,
			isAllowClickCurTab: false,
			tabs: d,
			tabPanels: $("#module5 .rgt-pages-pay"),
			onClickTab: function(g, h) {
				var f = $("#module5").find(".rgt-pages-pay").eq(g).find("textarea");
				if (f.length) {
					f.replaceWith(f.text())
				}
			}
		};
		haoqq.tab.TabView(c)
	};
	b.prototype.initEvent = function() {};
	b.prototype.run = function() {};
	a.getRechargeViewInstance = haoqq.common.Singleton(function() {
		return new b()
	});
	a.createRechargeView = function() {
		return new b()
	}
}(haoqq.namespace("module")));
(function(b) {
	var a = function() {};
	a.prototype = new haoqq.common.Template();
	a.prototype.init = function() {
		this.firstLoad = true;
		var c = this;
		var e = $("#mainTab ul li.navTab");
		var d = {
			container: $("#mainTab ul"),
			currentClassName: "select",
			tabChangeType: "click",
			currentIndex: 0,
			isAllowClickCurTab: false,
			tabs: e,
			tabPanels: $(".containerPanel"),
			onClickTab: function(f, g) {
				if ($(e[f]).hasClass("select")) {
					return
				}
			},
			afterChangeTab: function(f, g) {
				haoqq.imgloadtrigger.getTriggerInstance().loadImg()
			}
		};
		haoqq.tab.TabView(d)
	};
	a.prototype.initEvent = function() {};
	a.prototype.run = function() {};
	b.getNavTabViewInstance = haoqq.common.Singleton(function() {
		return new a()
	});
	b.createNavTabView = function() {
		return new a()
	}
}(haoqq.namespace("nav")));
(function(e) {
	var d = function() {};
	var c = 5;
	var a = 4;
	d.prototype = new haoqq.common.Template();
	var b = function(g) {
			var k = [];
			for (var m = 0; m < c; ++m) {
				k.push(m + 1)
			}
			for (var m = 0, f = g.length; m < f; ++m) {
				if (+g[m] > c || haoqq.util.arrayContains(g, g[m], m)) {
					for (var l = 0, h = k.length; l < h; ++l) {
						if (!haoqq.util.arrayContains(g, k[l])) {
							g[m] = k[l];
							break
						}
					}
				}
			}
			return g
		};
	d.prototype.init = function() {
		var f = this;
		this.editPanel = $("#moduleEditPanel");
		this.mask = new haoqq.PageMask();
		this.userMrg = haoqq.user.getUserManagerInstance();
		this.userMrg.addListener("dataloaded", function() {
			f.run()
		});
		this.defaultOrder = b([1, 2, 4, 5]);
		this.customKey = "custom";
		this.baseHeight = 1165;
		this.originHeight = 260;
		if ($("#picTopic").is(":visible")) {
			var g = 78;
			this.originHeight = this.originHeight - g
		}
	};
	d.prototype.initEvent = function() {
		var f = this;
		$(".rightSeciton .caption").hover(function(g) {
			$(this).find(".rgt-cap-tool").show();
			$(this).find(".rgt-cap-tool-grey").hide()
		}, function(g) {
			$(this).find(".rgt-cap-tool").hide();
			$(this).find(".rgt-cap-tool-grey").show()
		});
		$(".rightSeciton .caption .rgt-cap-tool").click(function(k) {
			k.preventDefault();
			var g = $(this).parent().parent();
			var j = g.offset().left - f.editPanel.width() - 2;
			var h = g.offset().top - 1;
			f.editPanel.css({
				left: j,
				top: h
			}).show();
			f.mask.show();
			haoqq.getStatisInstance().reportClick(k, "dhv1.pac.edit.detail", {});
			haoqq.getDjlStatisInstance().reportClick(k, "dhv1.pac.edit.detail")
		});
		f.editPanel.find(".icon-close2").click(function(h) {
			h.preventDefault();
			var g;
			try {
				g = g_cookie.get(f.customKey).split("|", a);
				g = b(g)
			} catch (h) {
				g = f.defaultOrder
			}
			f.setEditPanel(g);
			f.moveModule();
			f.editPanel.hide();
			f.mask.hide();
			haoqq.getStatisInstance().reportClick(h, "dhv1.pac.edit.close", {});
			haoqq.getDjlStatisInstance().reportClick(h, "dhv1.pac.edit.close")
		});
		f.editPanel.find(".save").click(function(g) {
			g.preventDefault();
			if (f.editPanel.find("li.side-now").length !== a) {
				alert("请选择" + a + "个模块");
				return
			}
			f.editPanel.hide();
			f.mask.hide();
			f.saveCustom(f.editPanel.find("li.side-now"));
			haoqq.getStatisInstance().reportClick(g, "dhv1.pac.edit.save", {});
			haoqq.getDjlStatisInstance().reportClick(g, "dhv1.pac.edit.save")
		});
		f.editPanel.find(".restore").click(function(g) {
			g.preventDefault();
			f.setEditPanel(f.defaultOrder);
			f.moveModule();
			f.editPanel.hide();
			f.mask.hide();
			f.saveCustom(f.editPanel.find("li.side-now"));
			haoqq.getStatisInstance().reportClick(g, "dhv1.pac.edit.default", {});
			haoqq.getDjlStatisInstance().reportClick(g, "dhv1.pac.edit.default")
		});
		f.editPanel.find(".icon-xuan").click(function(h) {
			h.preventDefault();
			var g = $(this).parent();
			if (g.hasClass("side-now")) {
				g.removeClass("side-now");
				g.find("p").find("span:eq(1)").hide();
				haoqq.getStatisInstance().reportClick(h, "dhv1.pac.edit.cancel", {});
				haoqq.getDjlStatisInstance().reportClick(h, "dhv1.pac.edit.cancel")
			} else {
				haoqq.getStatisInstance().reportClick(h, "dhv1.pac.edit.confirm", {});
				haoqq.getDjlStatisInstance().reportClick(h, "dhv1.pac.edit.confirm");
				if (f.editPanel.find("li.side-now").length >= a) {
					alert("最多只能选择" + a + "个模块");
					return
				} else {
					g.addClass("side-now");
					g.find("p").find("span:eq(1)").show()
				}
			}
			f.moveModule()
		});
		f.editPanel.find(".a-prve2").click(function(l) {
			l.preventDefault();
			var k = $(this).parent().parent().parent();
			var j = k.prevAll();
			for (var h = 0; h < j.length; h++) {
				var g = $(j[h]);
				if (g.hasClass("side-now")) {
					g.before(k);
					break
				}
			}
			f.moveModule();
			haoqq.getStatisInstance().reportClick(l, "dhv1.pac.edit.up", {});
			haoqq.getDjlStatisInstance().reportClick(l, "dhv1.pac.edit.up")
		});
		f.editPanel.find(".a-next2").click(function(l) {
			l.preventDefault();
			var k = $(this).parent().parent().parent();
			var h = k.nextAll();
			for (var j = 0; j < h.length; j++) {
				var g = $(h[j]);
				if (g.hasClass("side-now")) {
					g.after(k);
					break
				}
			}
			f.moveModule();
			haoqq.getStatisInstance().reportClick(l, "dhv1.pac.edit.down", {});
			haoqq.getDjlStatisInstance().reportClick(l, "dhv1.pac.edit.down")
		})
	};
	d.prototype.run = function() {
		var f;
		try {
			f = g_cookie.get(this.customKey).split("|", a);
			f = b(f)
		} catch (g) {
			f = this.defaultOrder
		}
		this.setEditPanel(f);
		this.moveModule()
	};
	d.prototype.moveModule = function() {
		var j = this.editPanel.find("li.side-now");
		$("#componentArea .customModule").hide();
		for (var h = j.length - 1; h >= 0; h--) {
			var f = $(j[h]).attr("_ref");
			var g = $("#module" + f);
			$("#componentArea").prepend(g);
			g.show()
		}
		var k = this.getModuleHeight($("#componentArea .customModule:visible"));
		var l = Math.ceil((k - this.baseHeight) / 26) * 26;
		$("#adaptModule ul.list").height(this.originHeight - l);
		haoqq.imgloadtrigger.getTriggerInstance().loadImg();
		this.trigger("modChange")
	};
	d.prototype.getModuleHeight = function(h) {
		var g = 0;
		for (var f = 0; f < h.length; f++) {
			g += $(h[f]).height()
		}
		return g
	};
	d.prototype.saveCustom = function(h) {
		var f = "";
		for (var g = 0; g < h.length; g++) {
			if (g == 0) {
				f += $(h[g]).attr("_ref")
			} else {
				f += ("|" + $(h[g]).attr("_ref"))
			}
		}
		g_cookie.set(this.customKey, f, "long");
		$.requestJson("profile/user_new.php?p=saveuserprofile", function(j) {
			j && (j.code == 0) && console.log("save module order succeed!");
			return
		}, {
			g_tk: haoqq.util.getACSRFToken(g_cookie.get("uiid")),
			type: 1,
			data: f
		}, "post")
	};
	d.prototype.setEditPanel = function(j) {
		var f = j.length;
		if (f !== a) {
			j = this.defaultOrder
		} else {
			for (var h = 0; h < f; h++) {
				var k = +j[h];
				if (!new RegExp("^[1-" + c + "]$", "").test(k)) {
					j = this.defaultOrder
				}
			}
		}
		var l = this.editPanel.find("ul.side-ul");
		l.find("li.side-now").removeClass("side-now").find("p").find("span:eq(1)").hide();
		for (var h = f - 1; h >= 0; h--) {
			var g = l.find("li[_ref='" + j[h] + "']");
			g.addClass("side-now");
			g.find("p").find("span:eq(1)").show();
			l.prepend(g)
		}
	};
	e.getComponentInstance = haoqq.common.Singleton(function() {
		return haoqq.common.Event.extendEvent(new d())
	});
	e.createComponent = function() {
		return haoqq.common.Event.extendEvent(new d())
	}
}(haoqq.namespace("component")));


(function(a) {
	var b = function() {};
	b.prototype = new haoqq.common.Template();
	b.prototype.init = function() {
		this.pageVer = "v1";
		this.expTag = this.getEtag();
		this.clickUrl = "clickStatis.htm?";
		this.pvUrl = "pvStatis.htm?";
		this.ver = $("#context").attr("version");
		this.fver = $("#context").attr("floderVer");
		this.binfo = $.getBrowserInfo();
		this.uskin = g_cookie.get("uskin");
		this.defaultUnc = "u500874_s1_h1";
		window.spb_vars = window.spb_vars || {
			ptype: "index",
			pcode: "haoqq"
		}
	};
	b.prototype.initEvent = function() {};
	b.prototype.run = function() {};
	b.prototype.doReport = function(d) {
		var c = new Image();
		c.onload = c.onerror = c.onabort = function() {
			c = c.onload = c.onerror = c.onabort = null
		};
		c.src = d
	};
	b.prototype.reportClick = function() {};
	b.prototype.sgReportClick = function(f, d, g) {
		var c = {
			tag: d,
			page_v: this.pageVer,
			labno: this.expTag,
			o_url: location.href,
			unc: g.unc || g_unc || this.defaultUnc,
			cid: g.cid || "",
			type: g.type || "link",
			eid: g.dataid || "",
			t_url: g.href || "",
			ch: g.channel || "",
			eg: g.engin || "",
			src: g.source || "",
			em: g.email || "",
			px: f && f.pageX || "0",
			py: f && f.pageY || "0",
			sh: window.screen.height,
			sw: window.screen.width,
			bw: $(window).width(),
			bh: $(window).height(),
			fv: this.fver,
			v: this.ver,
			bi: this.binfo.brower,
			bv: this.binfo.ver,
			skin: this.uskin,
			rn: Math.round(Math.random() * 100000)
		};
		window.spb_vars && spb_vars.pingback && spb_vars.pingback(0, "tag=" + d, "click")
	};
	b.prototype.reportPv = function() {
		return;
		var c = {
			o_url: location.href,
			page_v: this.pageVer,
			labno: this.expTag,
			labno: this.expTag,
			unc: g_unc || this.defaultUnc,
			sh: window.screen.height,
			sw: window.screen.width,
			bw: $(window).width(),
			bh: $(window).height(),
			fv: this.fver,
			v: this.ver,
			bi: this.binfo.brower,
			bv: this.binfo.ver,
			skin: this.uskin,
			rn: Math.round(Math.random() * 100000)
		};
		window.spb_vars && spb_vars.pingback && spb_vars.pingback(0, c, "page")
	};
	a.getStatisInstance = haoqq.common.Singleton(function() {
		return new b()
	});
	a.createStatis = function() {
		return new b()
	}
}(haoqq));
(function(a) {
	var b = function() {};
	b.prototype = new haoqq.common.Template();
	b.prototype.init = function() {};
	b.prototype.reportClick = function(d, c) {};
	a.getDjlStatisInstance = haoqq.common.Singleton(function() {
		return new b()
	});
	a.createDjlStatis = function() {
		return new b()
	}
}(haoqq));