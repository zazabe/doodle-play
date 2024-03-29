//Copyright (c) 2011. Adobe Systems Incorporated.
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
//   * Redistributions of source code must retain the above copyright notice,
//     this list of conditions and the following disclaimer.
//   * Redistributions in binary form must reproduce the above copyright notice,
//     this list of conditions and the following disclaimer in the documentation
//     and/or other materials provided with the distribution.
//   * Neither the name of Adobe Systems Incorporated nor the names of its
//     contributors may be used to endorse or promote products derived from this
//     software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
//
// AdobePatentID="B1316"
// AdobePatentID="B1317"
// AdobePatentID="B1318"
//
window.Modernizr = function (c, b, e) {
    function s(a, r) {
        for (var g in a) if (j[a[g]] !== e) return r === "pfx" ? a[g] : !0;
        return !1
    }
    var k = {},
        m = b.documentElement;
    b.head || b.getElementsByTagName("head");
    var q = b.createElement("modernizr"),
        j = q.style,
        c = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
        q = {},
        p = [],
        r = function (a, r, g, f) {
            var d, n = b.createElement("div");
            if (parseInt(g, 10)) for (; g--;) d = b.createElement("div"), d.id = f ? f[g] : "modernizr" + (g + 1), n.appendChild(d);
            g = ["&shy;<style>", a, "</style>"].join("");
            n.id = "modernizr";
            n.innerHTML += g;
            m.appendChild(n);
            a = r(n, a);
            n.parentNode.removeChild(n);
            return !!a
        },
        n, d = {}.hasOwnProperty,
        l;
    typeof d !== e && typeof d.call !== e ? l = function (a, r) {
        return d.call(a, r)
    } : l = function (a, r) {
        return r in a && typeof a.constructor.prototype[r] === e
    };
    (function (a, d) {
        var g = a.join(""),
            f = d.length;
        r(g, function (g) {
            for (var g = g.childNodes, a = {}; f--;) a[g[f].id] = g[f];
            k.csstransforms3d = a.csstransforms3d.offsetLeft === 9
        }, f, d)
    })([, ["@media (", c.join("transform-3d),("), "modernizr){#csstransforms3d{left:9px;position:absolute}}"].join("")], [, "csstransforms3d"]);
    q.csstransforms3d = function () {
        var a = !! s(["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"]);
        a && "webkitPerspective" in m.style && (a = k.csstransforms3d);
        return a
    };
    for (var v in q) l(q, v) && (n = v.toLowerCase(), k[n] = q[v](), p.push((k[n] ? "" : "no-") + n));
    j.cssText = "";
    q = null;
    k._version = "2.0.6";
    k._prefixes = c;
    k.testProp = function (a) {
        return s([a])
    };
    k.testStyles = r;
    return k
}(this, this.document);
(function (c) {
    function b(b) {
        var c = k.style,
            j;
        for (i = 0; i < b.length; i++) if (j = b[i], c[j] !== void 0) return !0;
        return !1
    }
    window.AdobeEdge = window.AdobeEdge || {};
    if (typeof c.Edge === "undefined") c.Edge = window.AdobeEdge;
    var e = c.Edge;
    e.version = "0.1.6";
    e.cloneJSONObject = function (b) {
        var k, j;
        if (c.isArray(b)) {
            k = [];
            var p, r = b.length;
            for (p = 0; p < r; p++) j = b[p], k[p] = typeof j === "object" ? e.cloneJSONObject(j) : j
        } else for (p in k = {}, b) p != "prototype" && (j = b[p], k[p] = typeof j === "object" ? e.cloneJSONObject(j) : j);
        return k
    };
    e.Notifier = function () {
        this.observers = [];
        this.notificationLevel = this.suppressNotifications = 0
    };
    c.extend(e.Notifier.prototype, {
        addObserver: function (b) {
            if (b) {
                for (var c = this.observers.length, k = 0; k < c; k++) if (this.observers[k].observer == b) return;
                this.observers[c] = {
                    observer: b
                }
            }
        },
        removeObserver: function (b) {
            if (b) for (var c = 0; c < this.observers.length; c++) if (this.observers[c].observer == b) if (this.notificationLevel === 0) {
                this.observers.splice(c, 1);
                break
            } else this.observers[c].deleted = !0
        },
        notifyObservers: function (b, c) {
            if (b && !this.suppressNotifications) {
                c || (c = {});
                c.methodName = b;
                this.notificationLevel++;
                var k;
                for (k = 0; k < this.observers.length; k++) {
                    var e = this.observers[k];
                    if (e = e && !e.deleted ? e.observer : void 0) if (typeof e == "function") e(b, this, c);
                    else if (e[b]) e[b](this, c)
                }
                this.notificationLevel--;
                if (this.notificationLevel === 0) for (k = this.observers.length - 1; k >= 0; k--) this.observers[k].deleted && this.observers.splice(k, 1)
            }
        },
        enableNotifications: function () {
            if (--this.suppressNotifications < 0) this.suppressNotifications = 0, e.Debug.reportError("Unbalanced enableNotifications() call!\n")
        },
        disableNotifications: function () {
            ++this.suppressNotifications
        }
    });
    e.trimString = function (b) {
        return b.replace(/^\s+|\s+$/g, "")
    };
    var s = {
        log: function () {},
        trace: function () {}
    };
    if (typeof window.console == "undefined") window.console = s;
    var k = document.createElement("div"),
        s = e.supported = e.supported || {};
    s.cssTransform = b(["transformProperty", "WebkitTransform", "MozTransform", "OTransform", "msTransform"]);
    s.cssTransform3d = Modernizr.csstransforms3d;
    e.isSupported = b
})(jQuery);
(function (c, b) {
    function e() {
        b.Notifier.call(this);
        this.animationID = "animID-" + e.nextID++
    }
    function s(r, n, d) {
        b.Animation.call(this);
        if (typeof r === "function") this.handler = r;
        else if (typeof r === "string") this.eventType = r;
        this.handlerContext = d;
        this.data = n;
        this.isTrigger = !0
    }
    function k(r, n, d, l) {
        b.Notifier.call(this);
        this.animation = r;
        this.position = 0;
        this.duration = -1;
        this.easing = typeof l === "function" ? l : l && c.easing[l] ? l : k.defaultEasing;
        if (n !== void 0) this.position = n;
        if (d !== void 0) this.duration = d;
        this.timeline = null;
        this.dScale = 1;
        this.dDuration = 0;
        this.done = !1
    }
    function m(b) {
        this.variables = {};
        b && c.extend(this, b)
    }
    function q(r) {
        b.Animation.call(this);
        c.extend(this, b.Timeline.config);
        c.extend(this, r);
        this.startPosition = this.timerStart = this.timer = 0;
        this.currentPosition = -1;
        this.playing = !1;
        this.duration = 0;
        this.interval = 1E3 / this.fps;
        this.objects = []
    }
    var j = {};
    e.nextID = 1;
    c.extend(e.prototype, b.Notifier.prototype, {
        constructor: e,
        _setup: function () {},
        _update: function () {},
        getDuration: function () {
            return 0
        }
    });
    c.extend(s.prototype, e.prototype, {
        constructor: s,
        _update: function (b) {
            if (!this.fired) this.fired = !0, this.handler ? this.handler.call(this.handlerContext, b, this.data) : this.eventType && this.timeline && this.timeline.notifyObservers(this.eventType, {
                elapsed: b,
                data: this.data
            })
        },
        setup: function (b, n, d) {
            var c = typeof n.executeTriggers === "undefined" || n.executeTriggers === null;
            this.fired = n.startingFromCurrent && c || !c && !n.executeTriggers ? n.playDirection !== "reverse" ? b.currentPosition >= d : b.currentPosition <= d : n.playDirection !== "reverse" ? b.currentPosition > d : b.currentPosition < d;
            this.timeline = b
        }
    });
    k.defaultEasing = "linear";
    c.extend(k.prototype, b.Notifier.prototype, {
        constructor: k,
        _setup: function (b, c) {
            this.timeline = b;
            var d = this.duration,
                l = null;
            this.animation && this.animation.getDuration && (l = this.animation.getDuration());
            this.dScale = d !== -1 && d !== 0 ? l / d : 1;
            this.dDuration = d !== -1 ? d : l;
            this.done = !1;
            this.animation && this.animation.setup && this.animation.setup(b, c, this.position)
        },
        _update: function (b, n) {
            if (!this.done) {
                var d = b,
                    l = this.dDuration;
                if (this.animation) {
                    var k;
                    l === 0 ? k = d >= 0 ? 1 : 0 : (d >= l && (d = l), d <= 0 && (d = 0), k = c.easing[this.easing](d / l, d, 0, 1, l));
                    this.animation.update(d * this.dScale, k, n)
                }(n.playDirection === "reverse" ? d <= 0 : d >= l) && this.complete()
            }
        },
        complete: function () {
            this.done = !0;
            this.timeline && this.timeline._updateComplete(this)
        },
        getPosition: function () {
            return this.position
        },
        setPosition: function (b) {
            this.position = b
        },
        getDuration: function () {
            return this.duration !== -1 ? this.duration : this.animation && this.animation.getDuration ? this.animation.getDuration() : 0
        },
        setDuration: function (b) {
            this.duration = b >= 0 ? b : -1
        }
    });
    q.config = {
        dropFrames: !0,
        fps: 60,
        pauseThreshold: 250
    };
    var p = [];
    q.tick = function () {
        var b = p.slice(0);
        p = [];
        for (var c = b.length, d = (new Date).getTime(), l = 0; l < c; l++) {
            var k = b[l];
            typeof k !== "undefined" && k.call(null, d)
        }
    };
    c.extend(q.prototype, e.prototype, {
        constructor: q,
        play: function (b) {
            this.notifyObservers("play");
            this.stop();
            this.sort();
            this.playing = !0;
            if (this.context) this.context.playDirection = void 0, this.context.executeTriggers = void 0;
            var c = this.getContext(b);
            c.timeline = this;
            b !== void 0 && typeof b.startPos === "number" && this.currentPosition !== b.startPos ? (c.startingFromCurrent = !1, this.currentPosition = b.startPos) : c.startingFromCurrent = !0;
            this._setup(this, c);
            this.timerStart = (new Date).getTime();
            this.startPosition = this.currentPosition;
            var d = this,
                l;
            this.lastUpdateTime = this.timerStart;
            this.timerFunc = l = c.externalClock ?
            function (b) {
                d._handleTimer(c, l, b)
            } : function () {
                d._handleTimer(c, l)
            };
            c.firstUpdate = !0;
            this._handleTimer(c, l);
            c.firstUpdate = !1
        },
        stop: function (b) {
            b && b.dontNotify || this.notifyObservers("stop");
            this.timer && clearTimeout(this.timer);
            this.timerStart = this.timer = 0;
            this.playing = !1;
            if (this.timerFunc) for (b = 0; b < p.length; b++) p[b] === this.timerFunc && (p[b] = void 0)
        },
        seek: function (b, c) {
            this.notifyObservers("seek");
            this.sort();
            this.stop();
            var d = this.currentPosition;
            if (typeof b === "number") this.currentPosition = b;
            var l = this.getContext(c);
            l.timeline = this;
            l.startingFromCurrent = d === this.currentPosition ? !0 : !1;
            this._setup(this, l);
            l.firstUpdate = !0;
            this._updateSeek(this.currentPosition, 1, l, d);
            l.firstUpdate = !1
        },
        add: function (b, c, d, l) {
            this.objects.push(new k(b, c, d, l));
            this.sorted = !1
        },
        sort: function () {
            if (!this.sorted) this.objects.sort(function (b, c) {
                return b.position - c.position
            }), this.sorted = !0
        },
        getDuration: function () {
            for (var b = 0, c = this.objects, d = this.objects.length, l = Math.max, k = 0; k < d; k++) var a = c[k],
                b = l(b, a.position + a.getDuration());
            return b
        },
        getCurrentPosition: function () {
            return this.currentPosition
        },
        getContext: function (b) {
            this.context ? c.extend(this.context, b) : this.context = new m(b);
            return this.context
        },
        _update: function (b, c, d) {
            this.sort();
            this.currentContext = d;
            this.notifyObservers("preUpdate", {
                elapsed: b,
                easingConst: c
            });
            var l = this.objects,
                k = this.triggers,
                a = l.length,
                h = k.length,
                g = d.playDirection !== "reverse";
            this.currentDirection = g ? "forward" : "reverse";
            for (var f = !1, m = !0, x = d.executeTriggers, q = typeof x === "undefined" || typeof x === "null", e, j, B = 0; B < h; B++) {
                var w = k[g ? B : h - B - 1],
                    C = w.animation.isTrigger && !(d.startingFromCurrent && d.firstUpdate);
                if ((q && C || x || !d.firstUpdate) && !w.animation.fired && (g ? b >= w.position : b <= w.position + w.duration)) {
                    for (var C = this.currentPosition = w.position, u = this._getState(), f = 0; f < a; f++) if (e = l[g ? f : a - f - 1], !e.animation.isTrigger && (g ? C >= e.position : C <= e.position + e.duration)) j = C - e.position, !j && !e.duration && !g && j--, e._update(j, d);
                    f = !0;
                    w.animation._update(C, d);
                    if (!this._equalState(u)) {
                        m = !1;
                        break
                    }
                }
            }
            if (!f) for (f = 0; f < a; f++) if (e = l[g ? f : a - f - 1], !e.animation.isTrigger && (g ? b >= e.position : b <= e.position + e.duration)) j = b - e.position, !j && !e.duration && !g && j--, e._update(j, d);
            this.notifyObservers("postUpdate", {
                elapsed: b,
                easingConst: c,
                context: d
            });
            this.notifyObservers("update", {
                elapsed: b,
                easingConst: c
            });
            this.currentContext = null;
            return m
        },
        _getState: function () {
            return {
                pos: this.currentPosition,
                dir: this.context.playDirection,
                playing: this.playing
            }
        },
        _equalState: function (b) {
            var c = !! b.playing,
                d = !! this.playing;
            return b.pos === this.currentPosition && b.dir === this.context.playDirection && c === d
        },
        _handleTimer: function (b, c, d) {
            var d = d || (new Date).getTime(),
                k = d - this.timerStart;
            d - this.lastUpdateTime > this.pauseThreshold && (this.timerStart += d - this.lastUpdateTime + this.interval, k = d - this.timerStart);
            var m = b.playDirection === "reverse",
                m = this.startPosition + (m ? -k : k);
            if (this.playing) {
                this.currentPosition = m = Math.max(0, Math.min(m, this.duration));
                var a = this._update(m, 1, b);
                this.lastUpdateTime = d || (new Date).getTime();
                m = b.playDirection === "reverse";
                if (!m ? this.currentPosition < this.duration : this.currentPosition > 0) {
                    if (a && this.playing) b.externalClock ? p.push(c) : this.timer = setTimeout(c, this.interval)
                } else this.stop(), this.notifyObservers("complete", {
                    elapsed: k
                })
            }
        },
        _setup: function (c, k) {
            b.Animation.prototype._setup.call(this, c);
            this.triggers = [];
            for (var d = this.objects, l = this.objects.length, m = 0; m < l; m++) {
                var a = d[m];
                a._done = !1;
                a._setup(this, k);
                a.animation.isTrigger && this.triggers.push(a)
            }
            this.duration = this.getDuration()
        },
        _updateComplete: function (b) {
            b._done = !0
        }
    });
    q.prototype._updateSeek = q.prototype._update;
    b.Animation = e;
    b.TimelineObject = k;
    b.Timeline = q;
    b.Timeline.createTimeline = function (c) {
        return new b.Timeline(c)
    };
    b.Timeline.createTween = function (b) {
        var c = j[b];
        if (c) return c.func.apply(c.context, Array.prototype.slice.call(arguments, 1));
        return null
    };
    b.Timeline.addTweenType = function (b, c, d) {
        j[b] = {
            func: c,
            context: d
        }
    };
    b.Timeline.createTrigger = function (b, c) {
        return new s(b, c, arguments[arguments.length - 1])
    };
    b.Timeline.createTimelineFromData = function (c) {
        for (var k = jQuery.Edge.Timeline.createTimeline(), d = c.length, l = 0; l < d; l++) {
            var m = c[l],
                a = null;
            m.timeline ? a = b.Timeline.createTimelineFromData(m.timeline) : m.tween ? a = b.Timeline.createTween.apply(null, m.tween) : m.trigger && (a = m.trigger.slice(0, 2), a.push(this), a = b.Timeline.createTrigger.apply(null, a));
            a && k.add(a, m.position, m.duration, m.easing)
        }
        return k
    }
})(jQuery, jQuery.Edge);
(function (c, b) {
    function e(k, m, e, j, p) {
        b.Animation.call(this);
        this.name = "prop tween";
        this.sourceElements = this.elements = m;
        this.deferElementResolution = !0;
        this.tweenType = s[k];
        this.updateTriggered = !1;
        this.property = e;
        this.fromValue = void 0;
        this.toValue = j;
        this.duration = 1E3;
        this.fromValues = this.tokens = this.valueTemplate = null;
        p && c.extend(this, p);
        this.deferElementResolution = this.deferElementResolution || typeof m == "string" && m.search(/\$\{[^\{\}]+\}/) != -1;
        if (!this.deferElementResolution) this.elements = this.resolveElementSelector(m);
        var p = this.toValues = [],
            r = this.parseValue(j);
        c.isArray(j) || (j = [j]);
        if (!r || r.length === 0) r = j;
        m = r.length;
        for (k = 0; k < m; k++) {
            var e = r[k],
                n = {};
            if (typeof e == "string") {
                if (n.value = parseFloat(e.replace(/[a-zA-Z%]+$/, "")), n.unit = e.replace(/^-?[0-9]*(\.[0-9]+)?/, ""), isNaN(n.value)) n.value = e, n.unit = ""
            } else typeof e == "number" && (e = parseFloat(e)), n.value = e, n.unit = "";
            p.push(n)
        }
        j.length > 1 && !this.valueTemplate && alert("Multiple values specified for attribute tween, but no template was provided!");
        j.length > 1 && (!this.fromValue || !c.isArray(this.fromValue)) && alert("Multiple values specified for attribute tween, but no from values specified!");
        if (this.fromValue) {
            j = this.fromValues = [];
            if ((k = this.parseValue(this.fromValue)) && k.length > 0) this.fromValue = k;
            else if (!c.isArray(this.fromValue)) this.fromValue = [this.fromValue];
            m = this.fromValue.length;
            for (k = 0; k < m; k++) e = this.fromValue[k], typeof e == "string" ? (j[k] = parseFloat(e.replace(/[a-zA-Z%]+$/, "")), isNaN(j[k]) && (j[k] = e)) : (typeof e == "number" && (e = parseFloat(e)), j[k] = e);
            this.toValues.length != this.fromValues.length && alert("Number of 'from' and 'to' values does not match for " + this.tweenType + " tween.")
        }
        if (this.filter) {
            if (!c.isArray(this.filter)) this.filter = [this.filter];
            j = this.filter;
            m = j.length;
            for (k = 0; k < m; k++) typeof j[k] == "string" && (j[k] = Math[j[k]]), typeof j[k] != "function" && (j[k] = null)
        }
        if (this.valueTemplate) this.tokens = this.parseTemplate(this.valueTemplate)
    }
    var s = {
        style: 0,
        attribute: 1,
        property: 2
    };
    e.Token = function (b, c) {
        this.value = b;
        this.isPlaceholder = c
    };
    e.parseVariableName = function (c) {
        var m = c;
        if (typeof c == "string" && c.search(/\$\{/) != -1) {
            var m = c.search(/\$\{/),
                e = c.search(/\}/);
            (m = c.slice(m + 2, e)) || alert("Invalid variable name: " + m);
            typeof m == "string" && (m = b.trimString(m), m = m.replace(/[\"\']/g, ""))
        }
        return m
    };
    e.substituteVariables = function (b, c) {
        for (var q = b; c && typeof q == "string" && q.search(/\$\{/) != -1;) var j = e.parseVariableName(q),
            q = typeof c[j] == "undefined" ? void 0 : q.replace(/\$\{[^\}]*\}/, c[j]);
        return q
    };
    c.extend(e.prototype, b.Animation.prototype, {
        constructor: e,
        setup: function () {
            this.updateTriggered = !1
        },
        update: function (b, c, e) {
            var j = this.getElementSet(e);
            if (!this.updateTriggered) this.updateTriggered = !0, this.setupForAnimation(e);
            var p = this,
                r = this.tweenType,
                n = this.property,
                d;
            j.each(function () {
                var l = p.getPropertyTweenData(this, r, n);
                if (l.animationID == p.animationID) {
                    var j = l.fromValues,
                        a = l.toValues,
                        l = l.tokens,
                        h = p.filter,
                        g = j.length,
                        f = [];
                    for (d = 0; d < g; d++) {
                        var t = j[d],
                            x = a[d],
                            t = typeof t == "string" ? c == 0 && p.duration > 0 ? t : x.value : t + (x.value - t) * c;
                        h && h[d] && (t = h[d](t, p, this, n, x.unit, b, e));
                        typeof t === "number" && t < 1 && (t = t.toFixed(6));
                        f.push(t + x.unit)
                    }
                    j = "";
                    j = p.formatValue(f);
                    if (!(j.length > 0)) if (l) {
                        j = l.length;
                        a = [];
                        for (d = 0; d < j; d++) h = l[d], h.isPlaceholder ? a.push(f[h.value]) : a.push(h.value);
                        j = a.join("")
                    } else j = f.join("");
                    p.setValue.call(this, r, n, j);
                    p.notifyObservers("onUpdate", {
                        elapsed: b,
                        easingConst: c,
                        property: n,
                        value: j,
                        element: this
                    })
                }
            })
        },
        setValue: function (b, m, e) {
            switch (b) {
            case 0:
                c(this).css(m, e);
                break;
            case 1:
                this.setAttribute(m, e);
                break;
            case 2:
                this[m] = e
            }
        },
        getDuration: function () {
            return this.duration
        },
        resolveElementSelector: function (b) {
            b = e.substituteVariables(this.elements, b.variables);
            if (!b) b = this.elements;
            /^\${/.test(b) && (b = "bad_selector");
            return c(b)
        },
        getElementSet: function (b) {
            var c = this.animationID;
            if (!b.animData) b.animData = {};
            var e = b.animData[c];
            e || (e = b.animData[c] = this.deferElementResolution ? this.resolveElementSelector(b) : this.elements);
            return e
        },
        getValue: function (b, e) {
            var q;
            switch (e) {
            case 0:
                q = c(this).css(b);
                break;
            case 1:
                q = this.getAttribute(b);
                break;
            case 2:
                q = this[b] + ""
            }
            return q
        },
        setupForAnimation: function (b) {
            var c = this,
                e = this.tweenType,
                j = this.property;
            this.getElementSet(b).each(function () {
                var b = c.getPropertyTweenData(this, e, j);
                b.animationID = c.animationID;
                b.toValues = c.toValues;
                b.tokens = c.tokens;
                if (c.fromValues) b.fromValues = c.fromValues;
                else {
                    var r = c.getValue.call(this, j, e);
                    r === void 0 && (r = "0");
                    var n = c.parseValue(r);
                    if (n && n.length > 0) for (var b = b.fromValues = [], r = n.length, d = 0; d < r; d++) {
                        var l = n[d];
                        b[d] = typeof l == "string" ? parseFloat(l.replace(/[a-zA-Z%]+$/, "")) : l;
                        isNaN(b[d]) && (b[d] = l)
                    } else b.fromValues = [parseFloat(r.replace(/[a-zA-Z%]+$/, ""))]
                }
            })
        },
        parseTemplate: function (b) {
            for (var c = b.length, q = [], j = 0, p = /@@[0-9]+@@/g, r = null; j < c && (r = p.exec(b));) r.index != j && q.push(new e.Token(b.substring(j, r.index), !1)), q.push(new e.Token(parseInt(r[0].replace(/@@/g, ""), 10), !0)), j = p.lastIndex;
            j < c && q.push(new e.Token(b.substring(j, c), !1));
            return q
        },
        parseValue: function () {
            return []
        },
        formatValue: function () {
            return ""
        },
        getPropertyTweenData: function (b, e, q) {
            var j = c.data(b, "tweenData");
            j || (j = {}, c.data(b, "tweenData", j));
            (b = j[e]) || (b = j[e] = {});
            (e = b[q]) || (e = b[q] = {
                animationID: -1
            });
            return e
        }
    });
    b.PropertyTween = e;
    b.Timeline.addTweenType("style", function (b, c, q, j) {
        return new e("style", b, c, q, j)
    });
    b.Timeline.addTweenType("attribute", function (b, c, q, j) {
        return new e("attribute", b, c, q, j)
    });
    b.Timeline.addTweenType("property", function (b, c, q, j) {
        return new e("property", b, c, q, j)
    })
})(jQuery, jQuery.Edge);
(function (c, b, e) {
    function s(g, a, c, u, f) {
        b.PropertyTween.call(this, g, a, c, u, f);
        this.name = "transformTween"
    }
    var k, m, q = Math.asin,
        j = Math.sin,
        p = Math.cos,
        r = Math.tan,
        n = Math.atan2,
        d = Math.PI / 180,
        l = 180 / Math.PI;
    s.removeData = function (b) {
        var g = c.data(b, s.dataName);
        g && (g.timeline && k.unRegister(g.timeline, g.id), $ele.removeData(b, s.dataName))
    };
    var v = function (b) {
            var g = 0;
            typeof b == "string" ? g = parseFloat(b.replace(/[a-zA-Z%]+$/, "")) : typeof b == "number" && (g = b);
            return g
        };
    s.getNumber = v;
    s.applyTransform = function (g, a, f, u) {
        g = c(g);
        typeof AdobeEdge.applyCount !== "undefined" && AdobeEdge.applyCount++;
        var o = "webkitAppearance" in document.documentElement.style,
            h = !0;
        u && (h = !u.dontForceZ);
        var l = b.supported.cssTransform3d;
        if (o) {
            u = "translate(" + a.translateX + "," + a.translateY + ")";
            o = v(a.translateZ);
            if ((o !== 0 || h) && l) u += " translateZ(" + a.translateZ + ")";
            u += " rotate(" + a.rotateZ + ") ";
            l && (o = v(a.rotateY), o !== 0 && (u += " rotateY(" + a.rotateY + ")"), o = v(a.rotateX), o !== 0 && (u += " rotateX(" + a.rotateX + ")"));
            u += " skew(" + a.skewX + "," + a.skewY + ") scale(" + a.scaleX + "," + a.scaleY + ") ";
            o = v(a.scaleZ);
            o != 1 && l && (u += " scaleZ(" + a.scaleZ + ")");
            a = "-webkit-transform"
        } else h = v(a.rotateY), u = v(a.rotateX), h = a.scaleX * p(d * h), l = a.scaleY * p(d * u), u = "translate(" + a.translateX + "," + a.translateY + ")", u += " rotate(" + a.rotateZ + ")", u += " skew(" + a.skewX + ", " + a.skewY + ")", u += " scale(" + h + "," + l + ")", g.css("-moz-transform", u), g.css("-o-transform", u), g.css("-ms-transform", u), a = "msTransform";
        g.css(a, u);
        f && f.observers.length && f.notifyObservers("onUpdate", {
            elapsed: 0,
            easingConst: 0,
            property: a,
            value: u,
            element: g[0]
        })
    };
    var a = function (b) {
            if (b !== 0 && Math.abs(b) < 1.0E-6) return b.toFixed(6);
            return b.toString()
        };
    s.dataName = "EdgeTransformData";
    var h = 1;
    c.extend(s.prototype, e.prototype, {
        constructor: s,
        setup: function () {
            this.updateTriggered = !1
        },
        setValue: function (b, a, g) {
            c.data(this, s.dataName)[a] = g
        },
        getValue: function () {
            c.data(this, s.dataName)
        },
        setupForAnimation: function (b) {
            var a = this;
            this.getElementSet(b).each(function () {
                var b = c.data(this, s.dataName);
                b || (b = a.buildTransformData(this), c.data(this, s.dataName, b))
            });
            e.prototype.setupForAnimation.call(this, b)
        },
        update: function (b, a, g) {
            e.prototype.update.call(this, b, a, g);
            var u = this,
                f = this.property,
                d = this.tweenType;
            this.getElementSet(g).each(function () {
                if (u.getPropertyTweenData(this, d, f).animationID == u.animationID) {
                    var b = c.data(this, s.dataName);
                    b.timeline = g.timeline;
                    b.tween = u;
                    k.Register(g.timeline, b.id, b)
                }
            })
        },
        buildTransformData: function (g) {
            var c = b.parseCanonicalTransform(g);
            if (c === null) {
                var c = {},
                    f = b.getTransformProps(g);
                c.translateX = "0px";
                c.translateY = "0px";
                c.translateZ = "0px";
                c.scaleX = 1;
                c.scaleY = 1;
                c.scaleZ = 1;
                c.rotateX = "0deg";
                c.rotateY = "0deg";
                c.rotateZ = "0deg";
                c.skewXZ = 0;
                c.skewXY = 0;
                c.skewYZ = 0;
                c.skewX = "0deg";
                c.skewY = "0deg";
                c.matrix && delete c.matrix;
                if (f) c.translateX = a(f.translation[0]) + "px", c.translateY = a(f.translation[1]) + "px", c.translateZ = a(f.translation[2]) + "px", c.scaleX = a(f.scale[0]), c.scaleY = a(f.scale[1]), c.scaleZ = a(f.scale[2]), c.rotateX = a(f.rotation[0] * l) + "deg", c.rotateY = a(f.rotation[1] * l) + "deg", c.rotateZ = a(f.rotation[2] * l) + "deg", c.skewXY = f.skew[0], c.skewXZ = f.skew[1], c.skewYZ = f.skew[2], c.skewX = a(Math.atan(f.skew[0]) * l) + "deg"
            }
            c === null && (c = {});
            c.id = "transform_" + h++;
            c.element = g;
            c.onFinalUpdate = k.prototype._applyTransform;
            return c
        },
        buildDefaultTransformData: function (b) {
            data = {
                translateX: "0px",
                translateY: "0px",
                translateZ: "0px",
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
                rotateX: "0deg",
                rotateY: "0deg",
                rotateZ: "0deg",
                skewXZ: 0,
                skewXY: 0,
                skewYZ: 0,
                skewX: "0deg",
                skewY: "0deg"
            };
            data.id = "transform_" + h++;
            data.element = b;
            data.onFinalUpdate = k.prototype._applyTransform;
            return data
        }
    });
    var g = {
        translate3d: 0,
        translate: 0,
        translateX: 0,
        translateY: 0,
        translateZ: 0,
        rotate: 1,
        rotateZ: 1,
        rotateX: 1,
        rotateY: 1,
        rotate3d: 1,
        skew: 2,
        skewX: 2,
        skewY: 2,
        scale3d: 3,
        scale: 3,
        scaleX: 3,
        scaleY: 3,
        scaleZ: 3,
        perspective: 4
    };
    b.getTransformProps = function (a, g) {
        var c = typeof g == "string" ? g : b.getTransform(a),
            f = "webkitAppearance" in document.documentElement.style;
        if (c && c != "none" && f) f = new b.CSSMatrix, f.setMatrixValue(c), c = m.fromCSSMatrix(f);
        else if (c && c != "none") c = m.fromCSSMatrixString(c);
        else return;
        return b.decomposeTransform(c)
    };
    b.getTransform = function (b) {
        var a = "webkitAppearance" in document.documentElement.style,
            b = c(b),
            g = b[0].style,
            f;
        if (a)(f = b.get(0).style.webkitTransform) || (f = b.css("-webkit-transform"));
        if (f) return f;
        (f = b.get(0).style.msTransform) || (f = b.css("-ms-transform"));
        f || (f = b.css("msTransform"));
        if (!f) f = g.MozTransform;
        f || (f = g["-moz-transform"]);
        f || (f = b.css("-moz-transform"));
        if (!f) f = g.oTransform;
        f || (f = b.css("-o-transform"));
        if (!f) f = g.transform;
        f || (f = b.css("transform"));
        return f || ""
    };
    b.parseCanonicalTransform = function (a, c) {
        var f = (typeof c == "string" ? c : b.getTransform(a)).match(/(\w+\s*\([^\)]*\))/g);
        if (!f) return null;
        var d = {},
            o = {
                translateX: "0px",
                translateY: "0px",
                translateZ: "0px",
                scaleX: 1,
                scaleY: 1,
                scaleZ: 1,
                rotateX: "0deg",
                rotateY: "0deg",
                rotateZ: "0deg",
                skewXZ: 0,
                skewXY: 0,
                skewYZ: 0,
                skewX: "0deg",
                skewY: "0deg"
            },
            h;
        for (h = 0; h < f.length; h++) {
            var l = f[h].match(/\w+/);
            if (d[l[0]] || g[l[0]] < 0) return null;
            var e = f[h].match(/\([^\)]*\)/),
                e = e[0].replace(/[\(\)]/g, ""),
                e = e.split(",");
            switch (l[0]) {
            case "matrix":
                return null;
            case "translate3d":
                o.translateX = e[0];
                o.translateY = e.length > 1 ? e[1] : "0px";
                o.translateZ = e.length > 2 ? e[2] : "0px";
                d.translate3d = d.translate = d.translateX = d.translateY = d.translateZ = !0;
                break;
            case "translate":
                o.translateX = e[0];
                o.translateY = e.length > 1 ? e[1] : "0px";
                d.translate3d = d.translate = d.translateX = d.translateY = !0;
                break;
            case "translateX":
                o.translateX = e[0];
                d.translate3d = d.translate = d.translateX = !0;
                break;
            case "translateY":
                o.translateY = e[0];
                d.translate3d = d.translate = d.translateY = !0;
                break;
            case "translateZ":
                o.translateZ = e[0];
                d.translate3d = d.translateZ = !0;
                break;
            case "rotate3d":
                return d.rotate3d = d.rotate = d.rotateX = d.rotateY = d.rotateZ = !0, null;
            case "rotateX":
                o.rotateX = e[0];
                d.rotate3d = d.rotateX = !0;
                break;
            case "rotateY":
                o.rotateY = e[0];
                d.rotate3d = d.rotateY = !0;
                break;
            case "rotateZ":
            case "rotate":
                o.rotateZ = e[0];
                d.rotate3d = d.rotate = d.rotateZ = !0;
                break;
            case "skew":
                o.skewX = e[0];
                o.skewY = e.length > 1 ? e[1] : "0px";
                d.skew = d.skewX = d.skewY = !0;
                break;
            case "skewX":
                o.skewX = e[0];
                d.skew = d.skewX = !0;
                break;
            case "skewY":
                o.skewY = e[0];
                d.skew = d.skewY = !0;
                break;
            case "scale3d":
                o.scaleX = e[0];
                o.scaleY = e.length > 1 ? e[1] : "0px";
                o.scaleZ = e.length > 2 ? e[2] : "0px";
                d.scale3d = d.scale = d.scaleX = d.scaleY = d.scaleZ = !0;
                break;
            case "scale":
                o.scaleX = e[0];
                o.scaleY = e.length > 1 ? e[1] : "0px";
                d.scale = d.scaleX = d.scaleY = !0;
                break;
            case "scaleX":
                o.scaleX = e[0];
                d.scale3d = d.scale = d.scaleX = !0;
                break;
            case "scaleY":
                o.scaleY = e[0];
                d.scale3d = d.scale = d.scaleY = !0;
                break;
            case "scaleZ":
                o.scaleZ = e[0];
                d.scale3d = d.scaleZ = !0;
                break;
            case "perspective":
                d.perspective = !0
            }
        }
        return o
    };
    b.TransformTween = s;
    k = function (b) {
        this.handlers = {};
        this.timeline = b
    };
    k.Register = function (b, a, g) {
        var c = b.updateFinalizer;
        if (typeof c == "undefined") c = new k(b), b.updateFinalizer = c, b.addObserver(c);
        c.handlers[a] = g
    };
    k.unRegister = function (b, a) {
        var g = b.updateFinalizer;
        typeof g != "undefined" && delete g.handlers[a]
    };
    c.extend(k.prototype, {
        _finalizeUpdate: function (b, a) {
            var g = {
                elapsed: b,
                context: a
            },
                c;
            for (c in this.handlers) if (this.handlers.hasOwnProperty(c)) {
                var f = this.handlers[c];
                if (f.onFinalUpdate) f.onFinalUpdate(g)
            }
            this.handlers = {}
        },
        postUpdate: function (b, a) {
            this._finalizeUpdate(a.elapsed, a.context)
        },
        complete: function () {
            this.timeline && this.timeline.removeObserver(this);
            this.timeline.updateFinalizer = void 0
        },
        _applyTransform: function (b) {
            var a = c.data(this.element, s.dataName);
            a && b && s.applyTransform(this.element, a, a.tween, b.context)
        }
    });
    s.UpdateFinalizer = k;
    if (typeof CSSMatrix == "undefined") if (typeof WebKitCSSMatrix != "undefined") b.CSSMatrix = WebKitCSSMatrix;
    else {
        if (typeof MozCSSMatrix != "undefined") b.CSSMatrix = MozCSSMatrix
    } else b.CSSMatrix = CSSMatrix;
    var f = function (b, a) {
            for (var g = 0, c = b.length, f = 0; f < c; f++) g += b[f] * a[f];
            return g
        },
        t = function (b) {
            for (var a = 0, g = b.length, c = 0; c < g; c++) a += b[c] * b[c];
            return Math.sqrt(a)
        },
        x = function (b) {
            var a = b.length,
                g = t(b),
                c = Array(a);
            g === 0 && (g = 1);
            for (var f = 0; f < a; f++) c[f] = b[f] / g;
            return c
        },
        y = function (b, a, g, c) {
            var f = Array(3);
            f[0] = g * b[0] + c * a[0];
            f[1] = g * b[1] + c * a[1];
            f[2] = g * b[2] + c * a[2];
            return f
        };
    m = function (b) {
        var a, g;
        if (b) for (a = 0; a < 4; a++) {
            this[a] = Array(4);
            for (g = 0; g < 4; g++) this[a][g] = b[a][g]
        } else for (a = 0; a < 4; a++) {
            this[a] = Array(4);
            for (g = 0; g < 4; g++) this[a][g] = 0;
            this[a][a] = 1
        }
        this.size = 4
    };
    m.fromCSSMatrix = function (b) {
        var a = new m;
        a[0][0] = b.m11;
        a[0][1] = b.m12;
        a[0][2] = b.m13;
        a[0][3] = b.m14;
        a[1][0] = b.m21;
        a[1][1] = b.m22;
        a[1][2] = b.m23;
        a[1][3] = b.m24;
        a[2][0] = b.m31;
        a[2][1] = b.m32;
        a[2][2] = b.m33;
        a[2][3] = b.m34;
        a[3][0] = b.m41;
        a[3][1] = b.m42;
        a[3][2] = b.m43;
        a[3][3] = b.m44;
        return a
    };
    var z = function (b) {
            var a = {};
            a.num = parseFloat(b);
            a.units = b.match(/[a-zA-Z%]+$/);
            if (typeof a.unit == "array") a.units = a.units[0];
            return a
        };
    s.splitUnits = z;
    var A = function (b) {
            b = b.toLowerCase();
            if (typeof b != "string") return 0;
            b = z(b);
            b.units == "deg" && (b.num *= d);
            return b.num
        };
    m.fromCSSMatrixString = function (b) {
        var a = new m,
            b = b.match(/(\w+\s*\([^\)]*\))/g);
        if (typeof b == "undefined" || b === null) return a;
        var g;
        for (g = 0; g < b.length; g++) {
            var c = b[g].match(/\w+/),
                f = b[g].match(/\([^\)]*\)/),
                f = f[0].replace(/[\(\)]/g, ""),
                f = f.split(","),
                d, h;
            switch (c[0]) {
            case "matrix":
                c = new m;
                f.length == 6 && (c[0][0] = parseFloat(f[0]), c[0][1] = parseFloat(f[1]), c[1][0] = parseFloat(f[2]), c[1][1] = parseFloat(f[3]), c[3][0] = parseFloat(f[4]), c[3][1] = parseFloat(f[5]), a.preMultiplyBy(c));
                break;
            case "translate3d":
                c = z(f[0]).num;
                d = f.length > 1 ? z(f[1]).num : 0;
                h = f.length > 2 ? z(f[2]).num : 0;
                a.translate3d(c, d, h);
                break;
            case "translate":
                c = z(f[0]).num;
                d = f.length > 1 ? z(f[1]).num : 0;
                a.translate3d(c, d, 0);
                break;
            case "translateX":
                f = z(f[0]).num;
                a.translate3d(f, 0, 0);
                break;
            case "translateY":
                f = z(f[0]).num;
                a.translate3d(0, f, 0);
                break;
            case "translateZ":
                f = z(f[0]).num;
                a.translate3d(0, 0, f);
                break;
            case "rotate3d":
                if (f.length >= 3) c = z(f[0]).num, d = z(f[1]).num, h = z(f[2]).num, f = A(f[3]), a.rotate3d(c, d, h, f, !0);
                break;
            case "rotateX":
                f = A(f[0]);
                a.rotateX(f);
                break;
            case "rotateY":
                f = A(f[0]);
                a.rotateY(f);
                break;
            case "rotateZ":
            case "rotate":
                f = A(f[0]);
                a.rotateZ(f);
                break;
            case "skew":
                c = A(f[0]);
                f = A(f[1]);
                a.skew(c, f);
                break;
            case "skewX":
                f = A(f[0]);
                a.skew(f, 0);
                break;
            case "skewY":
                f = A(f[0]);
                a.skew(0, f);
                break;
            case "scale3d":
                c = parseFloat(f[0]);
                d = f.length > 1 ? parseFloat(f[1]) : 1;
                f = f.length > 2 ? parseFloat(f[2]) : 1;
                a.scale(c, d, f);
                break;
            case "scale":
                c = parseFloat(f[0]);
                d = f.length > 1 ? parseFloat(f[1]) : 1;
                a.scale(c, d, 1);
                break;
            case "scaleX":
                f = parseFloat(f[0]);
                a.scale(f, 1, 1);
                break;
            case "scaleY":
                f = parseFloat(f[0]);
                a.scale(1, f, 1);
                break;
            case "scaleZ":
                f = parseFloat(f[0]);
                a.scale(1, 1, f);
                break;
            case "perspective":
                f = parseFloat(f[0]), a.perspective(f)
            }
        }
        return a
    };
    c.extend(m.prototype, {
        identity: function () {
            for (var b = 0; b < 4; b++) {
                this[b] = Array(4);
                for (var a = 0; a < 4; a++) this[b][a] = 0;
                this[b][b] = 1
            }
            return this
        },
        determinant: function () {
            var b = this[0][0],
                a = this[0][1],
                g = this[0][2],
                f = this[0][3],
                c = this[1][0],
                d = this[1][1],
                h = this[1][2],
                e = this[1][3],
                l = this[2][0],
                n = this[2][1],
                r = this[2][2],
                x = this[2][3],
                k = this[3][0],
                j = this[3][1],
                m = this[3][2],
                t = this[3][3];
            return f * h * n * k - g * e * n * k - f * d * r * k + a * e * r * k + g * d * x * k - a * h * x * k - f * h * l * j + g * e * l * j + f * c * r * j - b * e * r * j - g * c * x * j + b * h * x * j + f * d * l * m - a * e * l * m - f * c * n * m + b * e * n * m + a * c * x * m - b * d * x * m - g * d * l * t + a * h * l * t + g * c * n * t - b * h * n * t - a * c * r * t + b * d * r * t
        },
        normalizeTransform: function () {
            if (this[3][3] === 0) return !1;
            for (var b = 0; b < 4; b++) for (var a = 0; a < 4; a++) this[b][a] /= this[3][3];
            return !0
        },
        transpose: function () {
            for (var b = new m, a = 0; a < 4; a++) for (var g = 0; g < 4; g++) b[a][g] = this[g][a];
            return b
        },
        toCSSMatrix: function () {
            var a = new b.CSSMatrix;
            a.m11 = this[0][0];
            a.m12 = this[0][1];
            a.m13 = this[0][2];
            a.m14 = this[0][3];
            a.m21 = this[1][0];
            a.m22 = this[1][1];
            a.m23 = this[1][2];
            a.m24 = this[1][3];
            a.m31 = this[2][0];
            a.m32 = this[2][1];
            a.m33 = this[2][2];
            a.m34 = this[2][3];
            a.m41 = this[3][0];
            a.m42 = this[3][1];
            a.m43 = this[3][2];
            a.m44 = this[3][3];
            return a
        },
        _inverse: function () {
            return this
        },
        inverse: function () {
            if (b.CSSMatrix !== void 0) {
                var a = this.toCSSMatrix().inverse();
                return m.fromCSSMatrix(a)
            }
            return this._inverse()
        },
        rotate3d: function (a, g, f, c, h) {
            var e = new b.Matrix4x4;
            h || (c *= d);
            c && (h = Math.sqrt(a * a + g * g + f * f), h !== 0 && (a /= h, g /= h, f /= h, h = j(c), c = p(c), e[0][0] = 1 + (1 - c) * (a * a - 1), e[1][0] = -f * h + (1 - c) * a * g, e[2][0] = g * h + (1 - c) * a * f, e[3][0] = 0, e[0][1] = f * h + (1 - c) * a * g, e[1][1] = 1 + (1 - c) * (g * g - 1), e[2][1] = -a * h + (1 - c) * g * f, e[3][1] = 0, e[0][2] = -g * h + (1 - c) * a * f, e[1][2] = a * h + (1 - c) * g * f, e[2][2] = 1 + (1 - c) * (f * f - 1), e[3][2] = 0, e[0][3] = 0, e[1][3] = 0, e[2][3] = 0, e[3][3] = 1));
            return this.preMultiplyBy(e)
        },
        rotateX: function (b) {
            return this.rotate3d(1, 0, 0, b)
        },
        rotateY: function (b) {
            return this.rotate3d(0, 1, 0, b)
        },
        rotateZ: function (b) {
            return this.rotate3d(0, 0, 1, b)
        },
        translate3d: function (a, g, f) {
            var c = new b.Matrix4x4;
            c[3][0] += a;
            c[3][1] += g;
            c[3][2] += f;
            return this.preMultiplyBy(c)
        },
        scale: function (a, g, f) {
            if (a != 1 || g != 1 || f != 1) {
                var c = new b.Matrix4x4;
                c[0][0] = a;
                c[1][1] = g;
                c[2][2] = f;
                return this.preMultiplyBy(c)
            }
            return this
        },
        skew: function (a, g, f) {
            f || (a *= d, g *= d);
            a !== 0 && (f = new b.Matrix4x4, f[1][0] = r(a), this.preMultiplyBy(f));
            g !== 0 && (a = new b.Matrix4x4, a[0][1] = r(g), this.preMultiplyBy(a));
            return this
        },
        perspective: function (a) {
            if (a !== 0) {
                var g = new b.Matrix4x4;
                g[2][3] = 1 / a;
                this.preMultiplyBy(g)
            }
            return this
        },
        skewByFactors: function (a, g, f) {
            a = new b.Matrix4x4;
            a[2][1] = f;
            this.preMultiplyBy(a);
            a.identity();
            a[2][0] = f;
            this.preMultiplyBy(a);
            a.identity();
            a[1][0] = f;
            this.preMultiplyBy(a);
            return this
        },
        applyPerspective: function (a, g, f, c) {
            var d = new b.Matrix4x4;
            d[0][3] = a;
            d[1][3] = g;
            d[2][3] = f;
            d[3][3] = c;
            this.preMultiplyBy(d);
            return this
        },
        preMultiplyBy: function (a) {
            var b = a[0][0],
                g = a[0][1],
                f = a[0][2],
                c = a[0][3],
                d = a[1][0],
                h = a[1][1],
                e = a[1][2],
                l = a[1][3],
                n = a[2][0],
                r = a[2][1],
                x = a[2][2],
                k = a[2][3],
                j = a[3][0],
                m = a[3][1],
                t = a[3][2],
                a = a[3][3],
                y = this[0][0],
                v = this[0][1],
                q = this[0][2],
                p = this[0][3],
                z = this[1][0],
                s = this[1][1],
                A = this[1][2],
                K = this[1][3],
                L = this[2][0],
                N = this[2][1],
                M = this[2][2],
                O = this[2][3],
                J = this[3][0],
                G = this[3][1],
                D = this[3][2],
                R = this[3][3];
            this[0][0] = b * y + g * z + f * L + c * J;
            this[0][1] = b * v + g * s + f * N + c * G;
            this[0][2] = b * q + g * A + f * M + c * D;
            this[0][3] = b * p + g * K + f * O + c * R;
            this[1][0] = d * y + h * z + e * L + l * J;
            this[1][1] = d * v + h * s + e * N + l * G;
            this[1][2] = d * q + h * A + e * M + l * D;
            this[1][3] = d * p + h * K + e * O + l * R;
            this[2][0] = n * y + r * z + x * L + k * J;
            this[2][1] = n * v + r * s + x * N + k * G;
            this[2][2] = n * q + r * A + x * M + k * D;
            this[2][3] = n * p + r * K + x * O + k * R;
            this[3][0] = j * y + m * z + t * L + a * J;
            this[3][1] = j * v + m * s + t * N + a * G;
            this[3][2] = j * q + m * A + t * M + a * D;
            this[3][3] = j * p + m * K + t * O + a * R;
            return this
        }
    });
    b.Matrix4x4 = m;
    b.decomposeTransform = function (a) {
        var b = {},
            g = new m(a);
        if (!g.normalizeTransform()) return null;
        b = new m(a);
        for (a = 0; a < 3; a++) b[a][3] = 0;
        b[3][3] = 1;
        if (b.determinant(b) === 0) return window.edge_authoring_mode && alert("Bad perspective matrix"), null;
        var c = Array(4),
            a = Array(4);
        if (g[0][3] !== 0 || g[1][3] !== 0 || g[2][3] !== 0) {
            c[0] = g[0][3];
            c[1] = g[1][3];
            c[2] = g[2][3];
            c[3] = g[3][3];
            a = b.inverse();
            if (!a) return !1;
            a = a.transpose().rightMultiply(c);
            g[0][3] = g[1][3] = g[2][3] = 0;
            g[3][3] = 1
        } else a[0] = a[1] = a[2] = 0, a[3] = 1;
        b = Array(3);
        b[0] = g[3][0];
        g[3][0] = 0;
        b[1] = g[3][1];
        g[3][1] = 0;
        b[2] = g[3][2];
        g[3][2] = 0;
        c = Array(3);
        c[0] = Array(3);
        c[1] = Array(3);
        c[2] = Array(3);
        for (var d = 0; d < 3; d++) c[d][0] = g[d][0], c[d][1] = g[d][1], c[d][2] = g[d][2];
        g = Array(3);
        g[0] = t(c[0]);
        c[0] = x(c[0]);
        d = Array(3);
        d[0] = f(c[0], c[1]);
        c[1] = y(c[1], c[0], 1, -d[0]);
        g[1] = t(c[1]);
        c[1] = x(c[1]);
        g[1] !== 0 && (d[0] /= g[1]);
        d[1] = f(c[0], c[2]);
        c[2] = y(c[2], c[0], 1, -d[1]);
        d[2] = f(c[1], c[2]);
        c[2] = y(c[2], c[1], 1, -d[2]);
        g[2] = t(c[2]);
        g[2] !== 0 && (c[2] = x(c[2]));
        g[2] !== 0 && (d[1] /= g[2], d[2] /= g[2]);
        var h;
        h = c[1];
        var e = c[2],
            l = Array(3);
        h.length != 3 || e.length != 3 ? h = null : (l[0] = h[1] * e[2] - h[2] * e[1], l[1] = h[2] * e[0] - h[0] * e[2], l[2] = h[0] * e[1] - h[1] * e[0], h = l);
        if (f(c[0], h) < 0) for (h = 0; h < 3; h++) g[h] *= -1, c[h][0] *= -1, c[h][1] *= -1, c[h][2] *= -1;
        h = Array(3);
        h[1] = q(-c[0][2]);
        p(h[1]) !== 0 ? (h[0] = n(c[1][2], c[2][2]), h[2] = n(c[0][1], c[0][0])) : (h[0] = n(-c[2][0], c[1][1]), h[2] = 0);
        return b = {
            translation: b,
            rotation: h,
            scale: g,
            skew: d,
            perspective: a
        }
    };
    b.Timeline.addTweenType("transform", function (a, b, g, c) {
        return new s("transform", a, b, g, c)
    })
})(jQuery, jQuery.Edge, jQuery.Edge.PropertyTween);
(function (c, b, e) {
    function s() {
        if (!q) {
            var a = document.createElement("div"),
                a = m(a),
                b;
            a.css("background-color", "rgb(100, 100, 100)");
            b = a.css("background-color");
            j = /rgb/.test(b);
            a.css("background-color", "hsl(100, 100, 100)");
            b = a.css("background-color");
            p = /hsl/.test(b);
            a.css("background-color", "rgba(100, 100, 100,.5)");
            b = a.css("background-color");
            r = /rgba/.test(b);
            a.css("background-color", "hsla(100, 100, 100,.5)");
            b = a.css("background-color");
            n = /hsla/.test(b);
            q = !0
        }
    }
    function k(a, c, d, h, e) {
        b.PropertyTween.call(this, a, c, d, h, e);
        this.name = "colorTween";
        s()
    }
    var m = c,
        q = !1,
        j = !1,
        p = !1,
        r = !1,
        n = !1;
    m.extend(k.prototype, e.prototype, {
        constructor: k,
        getValue: function (a) {
            return m(this).css(a)
        },
        setValue: function (a, b, c) {
            m(this).css(b, c)
        },
        parseValue: function (a) {
            var c = b.parseColorValue(a);
            if (c && c.colorFunction && c.values) {
                var a = c.values,
                    c = c.colorFunction,
                    d = /hsl/gi;
                if (c.match(/rgb/gi)) if (this.animationColorSpace && this.animationColorSpace == "HSL") c = {
                    r: a[0],
                    g: a[1],
                    b: a[2]
                }, (c = b.rgbToHSL(c)) ? a.length > 3 ? (a = a[3], a = [c.h, c.s, c.l, a]) : a = [c.h, c.s, c.l] : a = [];
                else if (this.animationColorSpace) {
                    if (this.animationColorSpace != "RGB") return a
                } else this.animationColorSpace = "RGB";
                else if (c.match(d)) if (this.animationColorSpace && this.animationColorSpace == "RGB") c = {
                    h: a[0],
                    s: a[1],
                    l: a[2]
                }, (c = b.hslToRGB(c)) ? a.length > 3 ? (a = a[3], a = [c.r, c.g, c.b, a]) : a = [c.r, c.g, c.b] : a = [];
                else if (this.animationColorSpace) {
                    if (this.animationColorSpace != "HSL") return a
                } else this.animationColorSpace = "HSL";
                a.length == 3 && (a[3] = 1);
                return a
            }
        },
        formatValue: function (a) {
            s();
            if (a) {
                var c;
                if (this.animationColorSpace == "HSL" && n) c = "hsl", a = a.length == 4 && n ? c + "a(" + a[0] + "," + a[1] + "%," + a[2] + "%," + a[3] + ")" : c + "(" + a[0] + "," + a[1] + "%," + a[2] + "%)";
                else if (r) c = "rgb", a = a.length == 4 && r ? c + "a(" + a[0] + "%," + a[1] + "%," + a[2] + "%," + a[3] + ")" : c + "(" + a[0] + "%," + a[1] + "%," + a[2] + "%)";
                else {
                    c = a[0];
                    var d = a[1],
                        h = a[2];
                    if (this.animationColorSpace == "HSL") a = b.hslToRGB({
                        h: a[0],
                        g: a[1],
                        b: a[2]
                    }), c = a.r, d = a.g, h = a.b;
                    c *= 2.55;
                    d *= 2.55;
                    h *= 2.55;
                    a = "#" + (Math.floor(c) * 65536 + Math.floor(d) * 256 + Math.floor(h)).toString(16)
                }
                return a
            }
        }
    });
    b.ColorTween = k;
    b.parseColorValue = function (a) {
        if (a) {
            var b = [],
                c, d, h = /^\s*#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])\s*$/;
            (d = /^\s*#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})\s*$/.exec(a)) ? (b = [parseInt(d[1], 16) / 255 * 100, parseInt(d[2], 16) / 255 * 100, parseInt(d[3], 16) / 255 * 100], c = "rgb") : (d = h.exec(a)) ? (b = [parseInt(d[1] + d[1], 16) / 255 * 100, parseInt(d[2] + d[2], 16) / 255 * 100, parseInt(d[3] + d[3], 16) / 255 * 100], c = "rgb") : a == "transparent" && (b = [0, 0, 0, 0], c = "rgb");
            c || (c = a.match(/\w+/), m.isArray(c) ? c = c[0] : c || (c = ""), (d = a.match(/\([^\)]*\)/)) && d.length > 0 && (d = d[0].replace(/[\(\)]/g, "")));
            a = /rgb/gi;
            h = /hsl/gi;
            if (b.length === 0) if (c.match(a)) if ((h = /^\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*(?:,\s*([0-9](?:\.[0-9]+)?)\s*)?$/.exec(d)) && h.length >= 4) {
                for (a = 0; a < 3; a++) b[a] = h[a + 1] / 255 * 100;
                h.length > 4 && (h[4] || (h[4] = 1), b[3] = h[4])
            } else {
                if ((d = /^\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*,\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*,\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*(?:,\s*([0-9](?:\.[0-9]+)?)\s*)?$/.exec(d)) && d.length >= 4) {
                    if (d.length >= 5) d.length = 5, d[4] || (d[4] = 1);
                    for (a = 0; a < d.length - 1; a++) b[a] = d[a + 1]
                }
            } else if (c.match(h) && (d = /^\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*,\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*,\s*([0-9]{1,3}(?:\.[0-9]+)?)\s*%\s*(?:,\s*([0-9](?:\.[0-9]+)?)\s*)?$/.exec(d)) && d.length >= 4) {
                if (d.length >= 5) d.length = 5, d[4] || (d[4] = 1);
                for (a = 0; a < d.length - 1; a++) b[a] = d[a + 1]
            }
            if (b) for (a = 0; a < b.length; a++) b[a] = Math.round(b[a] * 1E4) / 1E4;
            return {
                colorFunction: c,
                values: b
            }
        }
    };
    var d = 1 / 3,
        l = 1 / 6,
        v = 2 / 3,
        a = function (a) {
            return a < 0 ? a + 1 : a > 1 ? a - 1 : a
        },
        h = function (a, b, c, d) {
            return d < l ? a + c * d : d < 0.5 ? b : d < v ? a + c * (v - d) : a
        };
    b.hslToRGB = function (b) {
        if (b === null || b.s < 0 || b.s > 100 || b.l < 0 || b.l > 100) return null;
        for (; b.h > 360;) b.h -= 360;
        for (; b.h < 0;) b.h = 360 + b.h;
        var c = {},
            e = b.h / 360,
            l = b.s / 100,
            b = b.l / 100;
        if (l === 0) c.r = c.g = c.b = 1;
        else {
            var l = b <= 0.5 ? b * (1 + l) : b + l - b * l,
                b = 2 * b - l,
                n = a(e + d),
                r = a(e),
                e = a(e - d),
                k = (l - b) * 6;
            c.r = h(b, l, k, n);
            c.g = h(b, l, k, r);
            c.b = h(b, l, k, e)
        }
        c.r = Math.min(c.r * 100, 100);
        c.g = Math.min(c.g * 100, 100);
        c.b = Math.min(c.b * 100, 100);
        c.r = Math.round(c.r * 1E4) / 1E4;
        c.g = Math.round(c.g * 1E4) / 1E4;
        c.b = Math.round(c.b * 1E4) / 1E4;
        return c
    };
    b.rgbToHSL = function (a) {
        if (a === null || a.r < 0 || a.r > 100 || a.g < 0 || a.g > 100 || a.b < 0 || a.b > 100) return null;
        var b = {
            h: 0,
            s: 0,
            l: 0
        },
            c = a.r / 100,
            d = a.g / 100,
            a = a.b / 100,
            h = Math.max(c, d, a),
            e = Math.min(c, d, a);
        b.l = (h + e) / 2;
        if (h == e || b.l <= 0) return b;
        var l = h - e;
        b.s = b.l <= 0.5 ? l / (h + e) : l / (2 - h - e);
        b.h = h == a ? 4 + (c - d) / l : h == d ? 2 + (a - c) / l : (d - a) / l;
        b.h *= 60;
        if (b.h > 360) b.h -= 360;
        else if (b.h < 0) b.h = 360 + b.h;
        b.s = Math.min(b.s * 100, 100);
        b.l = Math.min(b.l * 100, 100);
        b.h = Math.round(b.h * 1E4) / 1E4;
        b.s = Math.round(b.s * 1E4) / 1E4;
        b.l = Math.round(b.l * 1E4) / 1E4;
        return b
    };
    b.colorToSupported = function (a) {
        s();
        if (!r && /rgba/.test(a) || !j && /rgb/.test(a) || !n && /hsla/.test(a) || !p && /hsl/.test(a)) {
            var c = b.parseColorValue(a).values;
            if (c.length >= 4 && c[3] < 0.5) return "transparent";
            var d = c[0],
                h = c[1],
                e = c[2];
            if (/hsl/.test(a)) a = b.hslToRGB({
                h: c[0],
                g: c[1],
                b: c[2]
            }), d = a.r, h = a.g, e = a.b;
            d *= 2.55;
            h *= 2.55;
            e *= 2.55;
            d = Math.floor(d);
            h = Math.floor(h);
            e = Math.floor(e);
            d = (d > 15 ? "" : "0") + d.toString(16);
            h = (h > 15 ? "" : "0") + h.toString(16);
            e = (e > 15 ? "" : "0") + e.toString(16);
            a = "#" + d + h + e
        }
        return a
    };
    b.Timeline.addTweenType("color", function (a, b, c, d) {
        return new k("color", a, b, c, d)
    })
})(jQuery, jQuery.Edge, jQuery.Edge.PropertyTween);
(function (c, b) {
    function e(b, c, d, e, k) {
        q.call(this, b, c, "motion", void 0, k);
        this.name = "motionTween";
        this.path = d;
        this.keyframes = [];
        this.keyframes.push({
            t: 0,
            l: 0,
            upper: {
                x: e[0][0],
                y: e[0][1]
            },
            lower: {
                x: e[0][0],
                y: e[0][1]
            }
        });
        if (e) for (b = 2; b < e.length; b++) this.keyframes.push({
            t: e[b][0],
            l: e[b][1],
            upper: {
                x: e[b][2],
                y: e[b][3]
            },
            lower: {
                x: e[b][4],
                y: e[b][5]
            }
        });
        this.keyframes.push({
            t: 1,
            l: 1,
            upper: {
                x: e[1][0],
                y: e[1][1]
            },
            lower: {
                x: e[1][0],
                y: e[1][1]
            }
        })
    }
    function s(b, c, d) {
        var e = {};
        try {
            if (b[0] === c[0] && b[1] === c[1]) return e.x = c[0], e.y = c[1], e
        } catch (k) {}
        var a = d * d,
            h = a * d,
            g = 2 * h - 3 * a + 1,
            d = h - 2 * a + d,
            f = -2 * h + 3 * a,
            a = h - a;
        e.x = g * b[0] + d * b[2] + f * c[0] + a * c[4];
        e.y = g * b[1] + d * b[3] + f * c[1] + a * c[5];
        return e
    }
    function k(b, c) {
        var d = b.x - c.x,
            e = b.y - c.y;
        return Math.sqrt(d * d + e * e)
    }
    function m(b, c, d, e, j) {
        var a = Math.floor(d[e].b),
            h = (d[e].b + d[e + 1].b) / 2 - a,
            g = s(b, c, h),
            f = 0;
        if (k({
            x: (d[e].x + d[e + 1].x) / 2,
            y: (d[e].y + d[e + 1].y) / 2
        }, g) > j) g.b = h + a, d.splice(e + 1, 0, g), f = m(b, c, d, e + 1, j), f = f + m(b, c, d, e, j) + 1;
        return f
    }
    var q = b.TransformTween,
        j = q.UpdateFinalizer;
    if (!(typeof c.Edge === "undefined" || typeof c.Edge.Timeline === "undefined" || typeof c.Edge.PropertyTween === "undefined")) {
        var p = function (b) {
                if (b !== 0 && Math.abs(b) < 1.0E-6) return b.toFixed(6);
                return b.toString()
            };
        c.extend(e.prototype, q.prototype, {
            constructor: e,
            setup: function () {
                this.updateTriggered = !1
            },
            getValue: function () {},
            setupForAnimation: function (b) {
                q.prototype.setupForAnimation.call(this, b);
                if (!this.points) {
                    this.setUpPoints();
                    this.setUpLen2bMap();
                    var b = this.keyframes,
                        c, d;
                    for (c = 0; c < b.length - 1; c++) {
                        var e = [0, 0, b[c].upper.x * 3, b[c].upper.y * 3, b[c].lower.x * 3, b[c].lower.y * 3],
                            j = [1, 1, b[c + 1].upper.x * 3, b[c + 1].upper.y * 3, (1 - b[c + 1].lower.x) * 3, (1 - b[c + 1].lower.y) * 3],
                            a = [];
                        for (d = 0; d < 5; d++) {
                            var h = d / 4,
                                g = {
                                    b: h
                                },
                                f = s(e, j, h);
                            g.x = f.x;
                            g.y = f.y;
                            g.b = h;
                            a[d] = g
                        }
                        a: {
                            d = a;
                            h = k(d[d.length - 1], d[0]);
                            g = void 0;
                            f = {
                                x: d[d.length - 1].x - d[0].x,
                                y: d[d.length - 1].y - d[0].y
                            };
                            for (g = 1; g < d.length - 1; g++) {
                                var t;
                                t = {
                                    x: d[g].x - d[0].x,
                                    y: d[g].y - d[0].y
                                };
                                t = t.x * f.x + t.y * f.y;
                                var p = h * k(d[g], d[0]);
                                if (Math.abs(Math.acos(t / p)) > 0.0050) {
                                    d = !1;
                                    break a
                                }
                            }
                            d = !0
                        }
                        if (d) a.splice(1, 3);
                        else for (d = 0; d < 4; d++) m(e, j, a, 3 - d, 0.01);
                        e = b[c];
                        d = 1;
                        j = void 0;
                        for (j = 0; j < a.length - 1; j++) a[j + 1].x - a[j].x > 0 && (d = Math.min(d, a[j + 1].x - a[j].x));
                        d = Math.ceil(1 / d);
                        h = 1 / d;
                        g = [{
                            t: 0,
                            e: 0
                        }];
                        for (j = f = 0; j < d; j++) {
                            for (t = j * h; t > a[f + 1].x && f < a.length - 2;) f++;
                            p = a[f + 1].y;
                            a[f + 1].x - a[f].x > 0 && (p = a[f].y + (t - a[f].x) * (a[f + 1].y - a[f].y) / (a[f + 1].x - a[f].x));
                            g[j] = {
                                t: t,
                                e: p
                            }
                        }
                        g[g.length - 1].t < 1 && (g[g.length] = {
                            t: 1,
                            e: 1
                        });
                        e.easingTable = g
                    }
                }
            },
            computeEasing: function (b) {
                var c = this.keyframes;
                b /= this.getDuration();
                var d = 0,
                    e;
                for (e = 0; e < c.length - 1; e++) if (d = e, b <= c[e + 1].t) break;
                e = c[d].easingTable;
                var j = c[d + 1].l - c[d].l,
                    b = (b - c[d].t) / (c[d + 1].t - c[d].t),
                    a = Math.floor(b / (e[1].t - e[0].t)),
                    a = Math.min(e.length - 2, Math.max(a, 0));
                return c[d].l + (e[a].e + (b - e[a].t) * (e[a + 1].e - e[a].e) / (e[a + 1].t - e[a].t)) * j
            },
            update: function (b, k, d) {
                if (!this.updateTriggered) this.updateTriggered = !0, this.setupForAnimation(d);
                var k = this.getElementSet(d),
                    l = this,
                    m = this.property,
                    a = this.tweenType,
                    h = this.computeEasing(b),
                    b = this._findSegment(h),
                    g = this.path,
                    h = this._easeToB(h);
                h -= b;
                var h = Math.min(1, Math.max(0, h)),
                    f = s(g[b], g[b + 1], h);
                k.each(function () {
                    if (l.getPropertyTweenData(this, a, m).animationID === l.animationID) {
                        var b = c.data(this, q.dataName);
                        b.timeline = d.timeline;
                        b.tween = l;
                        l.setValue.call(this, void 0, "translateX", p(f.x) + "px");
                        e.prototype.setValue.call(this, void 0, "translateY", p(f.y) + "px");
                        j.Register(d.timeline, b.id, b)
                    }
                })
            },
            _findSegment: function (b) {
                b = this.len2b(b * this.points[this.points.length - 1].l);
                b = Math.floor(b);
                return Math.min(Math.max(b, 0), this.path.length - 2)
            },
            _easeToB: function (b) {
                return this.len2b(b * this.points[this.points.length - 1].l)
            },
            setUpLen2bMap: function () {
                for (var b = 0, c = this.points, d = 0; d < c.length - 1; d++) c[d].l = b, b += k(c[d], c[d + 1]);
                var d = c[c.length - 1].l = b,
                    b = this.getDuration() * 60 / 1E3,
                    e = d / b;
                this.len2bStep = e;
                for (var b = 0, j = this.len2bMap = [], a = 0; b <= d;) {
                    for (; a < c.length - 1 && b > c[a + 1].l;) a += 1;
                    if (a >= c.length - 1) break;
                    j.push({
                        l: b,
                        b: c[a].b + (b - c[a].l) * (c[a + 1].b - c[a].b) / (c[a + 1].l - c[a].l)
                    });
                    b += e
                }
                j[j.length - 1].b < c[c.length - 1].b && j.push({
                    l: c[c.length - 1].l,
                    b: c[c.length - 1].b
                })
            },
            setUpPoints: function () {
                var b = this.path;
                this.points = [];
                var c, d;
                for (c = 0; c < b.length - 1; c++) for (d = 0; d < 5; d++) if (d < 4 || c === b.length - 2) {
                    var e = d / 4,
                        j = {
                            b: c + e
                        },
                        e = s(b[c], b[c + 1], e);
                    j.x = e.x;
                    j.y = e.y;
                    this.points.push(j)
                }
                for (c = 1; c < b.length; c++) {
                    j = b.length - c - 1;
                    for (d = 0; d < 4; d++) m(b[j], b[j + 1], this.points, 3 - d + j * 4, 2)
                }
                return this.points
            },
            len2b: function (b) {
                this.len2bMap || this.setUpLen2bMap();
                var c = Math.floor(b / this.len2bStep),
                    d = 0,
                    d = this.len2bMap;
                return d = c >= d.length - 1 ? d[d.length - 1].b : (b - d[c].l) * (d[c + 1].b - d[c].b) / (d[c + 1].l - d[c].l) + d[c].b
            }
        });
        b.Timeline.addTweenType("motion", function (b, c, d, j) {
            return new e("motion", b, c, d, j)
        })
    }
})(jQuery, window.AdobeEdge);
(function (c, b, e, s) {
    function k(a) {
        for (; a && typeof a.originalEvent !== "undefined";) a = a.originalEvent;
        return a
    }
    function m(a) {
        for (var b = {}, d, e; a;) {
            d = c.data(a, g);
            for (e in d) if (d[e]) b[e] = b.hasVirtualBinding = !0;
            a = a.parentNode
        }
        return b
    }
    function q() {
        y && (clearTimeout(y), y = 0);
        y = setTimeout(function () {
            H = y = 0;
            w.length = 0;
            C = !1;
            u = !0
        }, c.vmouse.resetTimerDuration)
    }
    function j(a, b, d) {
        var e, f;
        if (!(f = d && d[a])) {
            if (d = !d) a: {
                for (d = b.target; d;) {
                    if ((f = c.data(d, g)) && (!a || f[a])) break a;
                    d = d.parentNode
                }
                d = null
            }
            f = d
        }
        if (f) {
            e = b;
            var d = e.type,
                h, j;
            e = c.Event(e);
            e.type = a;
            f = e.originalEvent;
            h = c.event.props;
            if (f) for (j = h.length; j;) a = h[--j], e[a] = f[a];
            if (d.search(/mouse(down|up)|click/) > -1 && !e.which) e.which = 1;
            if (d.search(/^touch/) !== -1 && (a = k(f), d = a.touches, a = a.changedTouches, d = d && d.length ? d[0] : a && a.length ? a[0] : s)) {
                f = 0;
                for (len = t.length; f < len; f++) a = t[f], e[a] = d[a]
            }
            c(b.target).trigger(e)
        }
        return e
    }
    function p(a) {
        var b = c.data(a.target, f);
        if (!C && (!H || H !== b)) if (b = j("v" + a.type, a)) b.isDefaultPrevented() && a.preventDefault(), b.isPropagationStopped() && a.stopPropagation(), b.isImmediatePropagationStopped() && a.stopImmediatePropagation()
    }
    function r(a) {
        var b = k(a).touches,
            d;
        if (b && b.length === 1 && (d = a.target, b = m(d), b.hasVirtualBinding)) H = E++, c.data(d, f, H), y && (clearTimeout(y), y = 0), B = u = !1, d = k(a).touches[0], z = d.pageX, A = d.pageY, j("vmouseover", a, b), j("vmousedown", a, b)
    }
    function n(a) {
        u || (B || j("vmousecancel", a, m(a.target)), B = !0, q())
    }
    function d(a) {
        if (!u) {
            var b = k(a).touches[0],
                d = B,
                e = c.vmouse.moveDistanceThreshold;
            B = B || Math.abs(b.pageX - z) > e || Math.abs(b.pageY - A) > e;
            flags = m(a.target);
            B && !d && j("vmousecancel", a, flags);
            j("vmousemove", a, flags);
            q()
        }
    }
    function l(a) {
        if (!u) {
            u = !0;
            var b = m(a.target),
                c;
            j("vmouseup", a, b);
            if (!B && (c = j("vclick", a, b)) && c.isDefaultPrevented()) c = k(a).changedTouches[0], w.push({
                touchID: H,
                x: c.clientX,
                y: c.clientY
            }), C = !0;
            j("vmouseout", a, b);
            B = !1;
            q()
        }
    }
    function v(a) {
        var a = c.data(a, g),
            b;
        if (a) for (b in a) if (a[b]) return !0;
        return !1
    }
    function a() {}
    function h(b) {
        var e = b.substr(1);
        return {
            setup: function () {
                v(this) || c.data(this, g, {});
                c.data(this, g)[b] = !0;
                x[b] = (x[b] || 0) + 1;
                x[b] === 1 && F.bind(e, p);
                c(this).bind(e, a);
                if (o) x.touchstart = (x.touchstart || 0) + 1, x.touchstart === 1 && F.bind("touchstart", r).bind("touchend", l).bind("touchmove", d).bind("scroll", n)
            },
            teardown: function () {
                --x[b];
                x[b] || F.unbind(e, p);
                o && (--x.touchstart, x.touchstart || F.unbind("touchstart", r).unbind("touchmove", d).unbind("touchend", l).unbind("scroll", n));
                var f = c(this),
                    h = c.data(this, g);
                h && (h[b] = !1);
                f.unbind(e, a);
                v(this) || f.removeData(g)
            }
        }
    }
    var g = "virtualMouseBindings",
        f = "virtualTouchID",
        b = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
        t = "clientX clientY pageX pageY screenX screenY".split(" "),
        x = {},
        y = 0,
        z = 0,
        A = 0,
        B = !1,
        w = [],
        C = !1,
        u = !1,
        o = "addEventListener" in e,
        F = c(e),
        E = 1,
        H = 0;
    c.vmouse = {
        moveDistanceThreshold: 10,
        clickDistanceThreshold: 10,
        resetTimerDuration: 1500
    };
    for (var I = 0; I < b.length; I++) c.event.special[b[I]] = h(b[I]);
    o && e.addEventListener("click", function (a) {
        var b = w.length,
            d = a.target,
            e, g, h, j, k;
        if (b) {
            e = a.clientX;
            g = a.clientY;
            threshold = c.vmouse.clickDistanceThreshold;
            for (h = d; h;) {
                for (j = 0; j < b; j++) if (k = w[j], h === d && Math.abs(k.x - e) < threshold && Math.abs(k.y - g) < threshold || c.data(h, f) === k.touchID) {
                    a.preventDefault();
                    a.stopPropagation();
                    return
                }
                h = h.parentNode
            }
        }
    }, !0)
})(jQuery, window, document);
(function (c, b) {
    function e(a) {
        var b = {
            Symbol: this,
            element: this.element,
            performDefaultAction: !0
        };
        c.extend(b, a);
        return b
    }
    function s() {
        var a = {},
            b = this.options.data.variables;
        if (b) for (var d in b) if (b.hasOwnProperty(d)) a[d] = b[d].defaultValue;
        c.extend(a, I.call(this));
        return a
    }
    function k(a) {
        var d = a,
            D = e.call(this, {
                markup: d
            });
        this.notifyObservers("onPreInjectMarkup", D);
        d = D.markup;
        a = e.call(this, {
            markup: d
        });
        if (D.performDefaultAction) {
            var f, D = this.variableValues;
            f = this.options.data.content;
            if (!d && f) if (f.ref) d = "", c(f.ref).each(function (a, b) {
                d += c(b).html()
            });
            else if (f.markup) d = f.markup;
            else if (f.dom) {
                var g = b.DeclareMarkup;
                if (g) {
                    var h = f.dom,
                        j = f.symbolInstances,
                        h = JSON.parse(JSON.stringify(f.dom)),
                        j = [];
                    f.symbolInstances && (j = JSON.parse(JSON.stringify(f.symbolInstances)));
                    var k = h.length;
                    for (f = 0; f < k; f++) S.call(this, h[f], j);
                    g.DOMNodeSeek(c(this.element)[0], this.getSymbolTypeName());
                    g.renderDOM(h, c(this.element)[0], D, this.getSymbolTypeName(), j, this.composition);
                    if (this.idLookup) for (var l in this.idLookup) this.idLookup.hasOwnProperty(l) && (c(l).data("originalId", this.idLookup[l]), c(l).data("symParent", this));
                    j && j.length > 0 && Z.call(this, j);
                    g.DOMNodeCompleted(c(this.element)[0])
                }
            }
            d && (d = E(d, D), c(d).appendTo(this.element))
        }
        this.notifyObservers("onPostInjectMarkup", a)
    }
    function m(a) {
        if (!a.tween && a.tw !== null && typeof a.tw !== "undefined") a.tween = a.tw;
        if (a.tween && a.tween.length > 3) {
            var b = a.tween[4];
            if (b) {
                if (!b.fromValue && b.f !== null) b.fromValue = b.f;
                if (!b.valueTemplate && b.vt !== null) b.valueTemplate = b.vt
            }
        }
        if (!a.position && a.p !== null && typeof a.p !== "undefined") a.position = a.p;
        if (!a.duration && a.d !== null && typeof a.d !== "undefined") a.duration = a.d;
        if (!a.easing && a.e !== null && typeof a.e !== "undefined") a.easing = a.e;
        if (!a.trigger && a.tr !== null && typeof a.tr !== "undefined") a.trigger = a.tr
    }
    function q(a, c) {
        this.states = c;
        this.timelines = a;
        this.baseState = this.options.data.baseState;
        if (!this.baseState) this.baseState = "Base State";
        var d = this,
            e = function (a, c, J, G, f, e, g) {
                f = "#" + J.id;
                J && (c = b.Effectors.applyDelta(d, G, J, a, d.effectors[f], c.duration, c, e, g)) && (a += c);
                return a
            },
            f;
        for (f in this.timelines) if (this.timelines.hasOwnProperty(f)) for (var g = this.timelines[f], h = 0; h < g.timeline.length; h++) {
            var j = g.timeline[h];
            m(j);
            if (d.effectors && j.tween && j.tween.length > 2) {
                var k = j.tween[2],
                    l = j.tween[4],
                    j = E(j.tween[1], d.variableValues);
                if (d.effectors[j] && b.Effectors.affectsProperty(d, k, d.effectors[j])) l.filter = e
            }
        }
        return this
    }
    function j(a) {
        var c = a[0];
        if (c[0] === "element") {
            var d = E(c[1], this.variableValues);
            d !== c[1] && (c = b.cloneJSONObject(c), c[1] = d)
        }
        if (d = u[c[0]])(a = $.call(this, c[0], c[1], a.slice(1))) && d.apply(this, [a].concat(c.slice(1)))
    }
    function p(a) {
        for (var b = a.length, c = 0; c < b; c++) j.call(this, a[c])
    }
    function r(a) {
        c.extend(this, a)
    }
    function n() {
        var a = {
            variables: this.variableValues
        },
            b = this.options.data.initialState;
        if (!b) b = this.options.data.baseState;
        if (!o.useCSSAnimation) if (b) {
            var c = T.call(this, null, b, a);
            U.call(this, c)
        } else for (c in this.timelines) if (this.timelines.hasOwnProperty(c)) {
            a = this.getAutoPlay(c);
            if (typeof a === "undefined" && (b = this.getTimelineData(c))) a = b.autoPlay;
            (typeof a === "undefined" || a === "true" || a === !0) && this.seekTimeline(c, 0)
        }
    }
    function d() {
        return "Default Timeline"
    }

    function l(a, b, d) {
        var f = {};
        c.extend(f, d);
        d = e.call(this, {
            tlName: b,
            tlOptions: f
        });
        this.notifyObservers(a, d);
        if (d.performDefaultAction) return d.tlOptions;
        else f = d.tlOptions, b = {
            Symbol: this,
            timelineName: b,
            tlOptions: f,
            performDefaultAction: !0
        }, a = a.replace(/onPre/, "onPost"), this.notifyObservers(a, b)
    }
    function v(a, b) {
        if (typeof b === "string") {
            var c = this.getTimelineData(a);
            if (!c || !c.labels) return 0;
            return c.labels[b]
        }
        return b
    }
    function a(a, b) {
        if (this.timelineObservers && this.timelineObservers[a]) {
            var c = this.timelineObservers[a];
            if (c) {
                var d, f = c.length;
                for (d = 0; d < f; d++) b.addObserver(c[d].observer)
            }
        }
    }
    function h() {
        if (this.baseState) return this.states[this.baseState];
        else for (var a in this.states) if (this.states[a].baseState) return this.baseState = a, this.states[this.baseState];
        return this.states[this.defaultBaseState]
    }
    function g(a) {
        var c = b.cloneJSONObject(h.call(this)),
            d;
        for (d in a) a.hasOwnProperty(d) && (c[d] || (c[d] = []), c[d] = c[d].concat(a[d]));
        return c
    }
    function f(a) {
        var b = this.getTimelineData(a);
        if (!b) return null;
        return this._getTimeline(a, b.toState, b.fromState)
    }
    function t(a, b, d, f) {
        var b = {
            timeline: b,
            data: d
        },
            e, g, h;
        for (h in a.effectors) if (a.effectors.hasOwnProperty(h) && (g = a.$(h))) {
            d = {};
            g.data("efxCollector", d);
            for (e = c(g).data("efxInst"); e;) f ? e.effector.postRender(g[0], e, d, b) : e.effector.preRender(g[0], e, d, b), e = e.nextInst
        }
    }
    function x(a) {
        var c = b.Timeline.createTimeline(),
            d = this;
        b.Effectors && c.addObserver({
            preUpdate: function (a, b) {
                t(d, a, b, !1)
            },
            postUpdate: function (a, b) {
                t(d, a, b, !0)
            }
        });
        for (var f = a.length, e = 0; e < f; e++) {
            var g = a[e],
                h = null;
            g.timeline ? h = x.call(this, g.timeline) : g.tween ? h = b.Timeline.createTween.apply(null, g.tween) : g.trigger && (h = g.trigger.slice(0, 2), h.push(this), h = b.Timeline.createTrigger.apply(null, h));
            h && c.add(h, g.position, g.duration, g.easing)
        }
        return c
    }
    function y(a, b, c) {
        var d = b + "Cache";
        this[d] || (this[d] = {});
        var e = null;
        this[d][a] ? e = this[d][a] : (b = this.getTimelineData(a)[b], e = T.call(this, a, b, c), !aa.call(this, a) && !ba.call(this, b) && (this[d][a] = e));
        U.call(this, e, c)
    }
    function z(a, b) {
        y.call(this, a, "toState", b)
    }
    function A(a, b, c) {
        var d = this.timelineCache[P.call(this, a)] == null,
            e = this.getTimelineData(a);
        if (e) {
            var f = e.toState,
                e = e.fromState;
            c || (c = {});
            !d && c.skipFromState ? c.assumeStateUnchanged = !0 : (y.call(this, a, "fromState", c), c.assumeStateUnchanged = !1);
            if (a && (a = this._getTimeline(a, f, e))) a.getDuration(), a.seek(b, c)
        }
    }
    function B(a) {
        if (a && (a = this.getTimelineData(a))) for (var a = a.timeline, b = a.length, c = 0; c < b; c++) {
            var d = a[c];
            d.tween && (d = E(d.tween[1], this.variableValues), ca.call(this, d))
        }
    }
    function w(a) {
        return b.compositionDefns[a].symbolData
    }
    function C(a) {
        var d, e = b.compositionDefns[a];
		
		//TODO: hi Adobe, can you help me to remove this Doodle Hack ??
		if (true){//e && !e.launched && e.okToLaunch && e.launchCalled && (e.launched = !0, !window.edge_authoring_mode || window.edge_remote_authoring)) {
            window.edge_remote_authoring ? (b.autoPlay = !1, d = new b.Composition(a, {
                stage: "." + a
            }, {}), window.BYOD.initialize()) : d = new b.Composition(a, {
                stage: "." + a
            }, {});
            if ("webkitAppearance" in document.documentElement.style) {
                var e = document,
                    f = e.createElement("style"),
                    g = c("head")[0];
                g && (g.insertBefore(f, g.firstChild), typeof e.styleSheets[0] !== "undefined" && e.styleSheets[0].insertRule("." + a + ", ." + a + " *{-webkit-transform:translateX(0px);}", 0))
            }
            d.ready(function () {
		        (!window.edge_authoring_mode || window.edge_remote_authoring) && d.play()
            })
        }
    }
    var u = b.triggerDict = {
        element: function (a, b, c) {
            a && (b === "document" ? this.$(document).bind(c, a) : this.$(b).bind(c, a))
        },
        timeline: function (a, b, c) {
            if (a && b) {
                var d = this.getTimelineData(b),
                    e = d.toState,
                    d = d.fromState,
                    f = {};
                f[c] = a;
                this._getTimeline(b, e, d).addObserver(f)
            }
        },
        symbol: function (a, b, c) {
            a && (b = {}, b[c] = a, this.addObserver(b))
        }
    },
        o = b.Symbol = function (a, d) {
            b.Notifier.call(this);
            c.extend(this, b.Symbol.config);
            this.widgetEventPrefix = "edgeSym_";
            this.element = null;
            this.options = {
                data: null,
                initialState: null
            };
            this.effectors = {};
            this.states = {};
            this.timelines = {};
            this.timelineCache = {};
            this.timelineStateMap = {};
            this.autoPlay = {};
            this.defaultBaseState = "Base State";
            this.baseState = null;
            this._init(a, d)
        };
    b.symbol = o;
    b.Symbol.config = b.Symbol.config || {};
    var F = b.PropertyTween,
        E = F.substituteVariables;
    o._substituteVariables = E;
    o._parseVariableName = F.parseVariableName;
    var H = b.symbolDefns = {};
    b.baseDataName = "edgeBaseData";
    var I, S, Y, Z, $, T, U, V, P, aa, ba, ca, W, X;
    Z = function (a) {
        if (a) {
            this.aSymbolInstances = [];
            for (var b = a.length, d = 0; d < b; d++) {
                var e = "#" + a[d].id;
                c(e)[0] && this.composition && (this.composition.convertElementToSymbol(e, a[d].symbolName, {
                    autoPlay: a[d].autoPlay,
                    variables: a[d].variables
                }), this.aSymbolInstances.push(e))
            }
        }
    };
    S = function (a, b) {
        if (a) {
            var d = c(this.element)[0].id,
                e = a.id;
            if (!e || e === "") e = o._makeUniqueID();
            for (var d = d + "_" + e, f = b.length, g = 0; g < f; g++) if (b[g].id === a.id) b[g].id = d;
            this.idLookup = this.idLookup || {};
            this.idLookup["#" + d] = e;
            this.setVariable("_" + e, "#" + d);
            a.oldId = a.id;
            a.id = d;
            if (a.c) {
                e = a.c.length;
                for (d = 0; d < e; d++) S.call(this, a.c[d], b)
            }
        }
    };
    Y = function () {
        return o.getParentSymbol(this.element)
    };
    X = function (a) {
        if (a) {
            if (!this.aSymbolInstances) this.aSymbolInstances = [];
            this.aSymbolInstances.push(a.getSymbolElement())
        }
    };
    $ = function (a, b, d) {
        var e = this[d[0]],
            f = this;
        if (typeof e === "function") if (d.slice(1), a === "element") return function () {
            try {
                var a = Array.prototype.slice.call(arguments);
                a.unshift(f);
                if (a.length >= 2 && typeof a[0] === "object" && typeof a[1] === "object" && a[1].type === "compositionReady" && typeof a[1].compId === "string" && typeof a[0].composition === "object" && a[1].compId !== a[0].composition.compId) return null;
                return e.apply(f, a)
            } catch (b) {}
        };
        else if (a === "timeline") return function (d, g) {
            try {
                var h;
                h = g && g.methodName && /^trig_/.test(g.methodName) ? c.Event("trigger") : c.Event(a);
                g && c.extend(h, g);
                h.timeline = d;
                var D = Array.prototype.slice.call(arguments);
                D.splice(0, 0, h, b);
                D.unshift(f);
                return e.apply(f, D)
            } catch (j) {}
        };
        else if (a === "symbol") return function (b, d) {
            try {
                var g, h;
                g = d && d.methodName ? c.Event(d.methodName) : c.Event(a);
                if (d && (c.extend(g, d), d.variableValue)) h = d.variableValue;
                var G = Array.prototype.slice.call(arguments);
                G.splice(0, 0, g, h);
                G.unshift(f);
                return e.apply(f, G)
            } catch (D) {}
        };
        return null
    };
    I = function () {
        return {
            symbolSelector: "#" + c(this.element)[0].id
        }
    };
    P = function (a, b, c) {
        var d = null;
        if (!b || !c) d = this.getTimelineData(a);
        if (d) {
            if (!b) b = d.toState;
            if (!c) c = d.fromState
        }
        return a + "-" + (b ? b : "") + "-" + (c ? c : "")
    };
    V = function (a, b, c) {
        return this.timelineCache[P.call(this, a, b, c)]
    };
    T = function (a, b) {
        var d = {};
        if (b) {
            var e = this.states[b];
            if (e) {
                var f = {},
                    g, h, j;
                if (a) {
                    var k = this.getTimelineData(a).timeline,
                        l = k.length;
                    for (g = 0; g < l; g++) j = k[g], j.tween && (h = E(j.tween[1], this.variableValues), h = j.tween[0] + ":" + h + ":" + j.tween[2], f[h] || (f[h] = []), f[h].push(j))
                }
                for (var m in e) if (m !== "prototype") {
                    f = e[m];
                    for (g = 0; g < f.length; g++) if (k = f[g], h = E(m, this.variableValues), k[0] === "style" || k[0] === "transform" || k[0] === "color") {
                        d[h] || (d[h] = []);
                        j = k[2];
                        if (k[3] && k[3].valueTemplate) if (l = F.prototype.parseTemplate.call(null, k[3].valueTemplate)) {
                            var o = l.length,
                                n = [],
                                r = k[2];
                            c.isArray(r) || (r = [r]);
                            for (var q = 0; q < o; q++) j = l[q], j.isPlaceholder ? n.push(r[j.value]) : n.push(j.value);
                            j = n.join("")
                        } else j = k[2].join("");
                        d[h].push({
                            decl: k,
                            value: j
                        })
                    }
                }
                return d
            }
        }
    };
    U = function (a) {
        var d = this,
            e, f = function () {
                var a = c(this),
                    f = {},
                    g = b.TransformTween.prototype.buildDefaultTransformData.call(null, this);
                c.extend(f, g, e);
                c.data(this, b.TransformTween.dataName, f);
                b.TransformTween.applyTransform(a, f, void 0, {
                    dontForceZ: !d.gpuAccelerate
                });
                (f = c.data(this, "ui_visibility")) && a.css("visibility", f)
            },
            g;
        for (g in a) if (a.hasOwnProperty(g)) {
            var h = a[g],
                j = h.length;
            e = null;
            for (var k = 0; k < j; k++) {
                var l = h[k].decl,
                    m = l[1];
                if (l[0] === "transform") e || (e = {}), e[m] = h[k].value;
                else {
                    var l = h[k].decl,
                        o = h[k].value;
                    l[0] === "color" && (o = b.colorToSupported(o));
                    c(g).css(m, o)
                }
            }
            e && b.TransformTween && c(g).each(f)
        }
    };
    ca = function (a) {
        c(a).each(function () {
            var a = c.data(this, "edgeBaseData");
            if (!a) a = {}, c.data(this, "edgeBaseData", a), a.transformData = b.TransformTween.prototype.buildTransformData.call(null, this)
        })
    };
    aa = function (a) {
        for (var a = this.getTimelineData(a).timeline, b = a.length, c = 0; c < b; c++) {
            var d = a[c];
            if (d.tween && typeof d.tween[1] === "string" && d.tween[1].search(/\$\{/) !== -1) return !0
        }
        return !1
    };
    ba = function (a) {
        if (!a) return !1;
        a = this.states[a];
        if (!a) return !1;
        for (var b in a) if (a.hasOwnProperty(b) && b.search(/\$\{/) !== -1) return !0;
        return !1
    };
    c.extend(o.prototype, b.Notifier.prototype, {
        constructor: o,
        _init: function (a, b) {
            if (b && (c.extend(this.options, b), c.isArray(b.observers) && b.observers.length)) for (var d = b.observers.length, f = 0; f < d; f++) this.addObserver(b.observers[f]);
            if (!this.options.data) return null;
            this.element = a;
            this.composition = this.options.composition;
            f = e.call(this);
            this.notifyObservers("onPreSymbolInit", f);
            d = e.call(this);
            if (f.performDefaultAction) {
                f = c(a);
                f.data("edgeSymbol", this);
                if (!f[0].id) f[0].id = o._makeUniqueID();
                var g = this,
                    h = this.options.data;
                this.variableValues = s.call(this);
                c.extend(this.variableValues, this.options.variables);
                this.options.opts && c.extend(this.variableValues, this.options.opts.variables);
                var j = I.call(this);
                this.setVariable("_stage", j.symbolSelector);
                this.setVariable("_" + f[0].id, j.symbolSelector);
                f.find("*").each(function (a, b) {
                    b.id && g.setVariable("_" + b.id, "#" + b.id)
                });
                h.content && k.call(this);
                h.actions && c.extend(this, h.actions);
                if (h.effectors) {
                    this.effectors = {};
                    for (var l in h.effectors) h.effectors.hasOwnProperty(l) && (this.effectors[E(l, this.variableValues)] = h.effectors[l])
                }
                h.timelines && q.call(this, h.timelines, h.states);
                h.bindings && h.bindings.length && p.call(this, h.bindings);
                if (typeof this.options.opts.autoPlay === "object") for (var m in this.options.opts.autoPlay) this.options.opts.autoPlay.hasOwnProperty(m) && this.setAutoPlay(this.options.opts.autoPlay[m], m);
                l = f[0].nodeName === "BODY";
                h.content && h.content.dom && !l && (l = f.css("position"), l !== "absolute" && l !== "relative" && f.css("position", "relative"));
                this.gpuAccelerate = h.gpuAccelerate;
                if (typeof this.gpuAccelerate === "undefined") this.gpuAccelerate = !0;
                if (/Macintosh/.test(navigator.userAgent)) this.gpuAccelerate = !1;
                this.getComposition().compReadyCalled && n.call(this);
                l = f[0].style.webkitTransform;
                if (this.gpuAccelerate && f[0].style && (typeof l === "undefined" || l === "" || l === "none")) f[0].style.webkitTransform = "translateZ(0)";
                else if (!f[0].style.zIndex && window.edge_authoring_mode) f[0].style.zIndex = 0;
                this.notifyObservers("onPostSymbolInit", d);
                this.notifyObservers("creationComplete", d);
                return this
            } else this.notifyObservers("onPostSymbolInit", d)
        },
        _flushCache: function () {
            var a = this.timelines,
                b;
            for (b in a) if (a.hasOwnProperty(b)) {
                var c = b,
                    d = this.timelines[c];
                (d = V.call(this, c, d.toState, d.fromState)) && d.updateFinalizer && d.updateFinalizer && d.removeObserver(d.updateFinalizer);
                var d = c,
                    e = this.timelines[d];
                if (e = V.call(this, d, e.toState, e.fromState)) {
                    if (!this.timelineObservers) this.timelineObservers = {};
                    this.timelineObservers[d] = e.observers.slice(0)
                }
                this.timelineCache[P.call(this, c)] = null;
                this.timelineStateMap = {};
                this.toStateCache = this.fromStateCache = null
            }
        },
        play: function (a, b, c) {
            var e = d.call(this),
                g = {
                    dontNotify: !0
                },
                h = f.call(this, e);
            h && h.stop(g);
            return this.playTimeline(e, a, b, c)
        },
        playTimeline: function (a, b, d, g) {
            var h = l.call(this, "onPreSymbolPlay", a, g);
            if (typeof h !== void 0) {
                var b = v.call(this, a, b),
                    j;
                if (typeof a === "string" && this.timelines) {
                    var k = f.call(this, a);
                    if (k) {
                        if (typeof b === "undefined" || b === null) k.getCurrentPosition() >= k.getDuration() && (b = 0);
                        B.call(this, a);
                        j = g || {};
                        c.extend(j, {
                            variables: this.variableValues,
                            startPos: b
                        });
                        j.executeTriggers = d;
                        c.extend(j, h);
                        k.currentDirection = "forward"
                    }
                    this._play(a, j)
                }
                this.notifyObservers("onPostSymbolPlay", e.call(this, {
                    timeline: a,
                    tlOptions: j
                }));
                return this
            }
        },
        playReverse: function (a, b, c) {
            return this.playTimelineReverse(d.call(this), a, b, c)
        },
        playTimelineReverse: function (a, b, d, g) {
            var h = l.call(this, "onPreSymbolPlayReverse", a, g);
            if (typeof h !== void 0) {
                g = g || {};
                o.startClock();
                g.externalClock = !0;
                b = v.call(this, a, b);
                if (typeof a === "string") {
                    g = f.call(this, a);
                    if (typeof b === "undefined" || b === null) b = g.currentPosition, b === 0 && (b = g.getDuration());
                    b = {
                        variables: this.variableValues,
                        playDirection: "reverse",
                        startPos: b
                    };
                    c.extend(b, h);
                    b.executeTriggers = d;
                    g.currentDirection = "reverse";
                    g.play(b)
                }
                this.notifyObservers("onPostSymbolPlayReverse", e(this, {
                    timeline: a,
                    tlOptions: h
                }));
                return this
            }
        },
        seek: function (a, b) {
            return this.seekTimeline(d.call(this), a, b)
        },
        seekTimeline: function (a, b, d) {
            d = l.call(this, "onPreSymbolSeek", a, d);
            if (typeof d === void 0) return null;
            b = v.call(this, a, b);
            if (typeof a === "string") {
                B.call(this, a);
                var f = {
                    variables: this.variableValues
                };
                c.extend(f, d);
                this.timelines && A.call(this, a, b, f)
            }
            this.notifyObservers("onPostSymbolSeek", e.call(this, {
                timeline: a,
                tlOptions: d
            }));
            return null
        },
        stop: function (a, b) {
            return this.stopTimeline(d.call(this), a, b)
        },
        stopTimeline: function (a, b, d) {
            d = l.call(this, "onPreSymbolStop", a, d);
            if (typeof d === void 0) return null;
            if (typeof a === "string") {
                var e = {
                    variables: this.variableValues
                };
                c.extend(e, d);
                this.timelines && (typeof b === "undefined" ? (a = f.call(this, a)) && a.stop(void 0) : (typeof b === "string" && (b = v.call(this, a, b)), A.call(this, a, b, e)))
            }
        },
        getPosition: function () {
            return this.getTimelinePosition(d.call(this))
        },
        getTimelinePosition: function (a) {
            if (typeof a === "string" && (a = f.call(this, a))) return a.getCurrentPosition()
        },
        getDuration: function () {
            return this.getTimelineDuration(d.call(this))
        },
        getTimelineDuration: function (a) {
            if (typeof a === "string" && (a = f.call(this, a))) return a.getDuration()
        },
        isPlaying: function () {
            return this.isTimelinePlaying(d.call(this))
        },
        isTimelinePlaying: function (a) {
            if (typeof a === "string") {
                if (!f.call(this, a).playing) return !1;
                return !0
            }
        },
        isPlayDirectionReverse: function () {
            return this.isTimelinePlayDirectionReverse(d.call(this))
        },
        isTimelinePlayDirectionReverse: function (a) {
            if (typeof a === "string") {
                a = f.call(this, a);
                if (a.currentContext) {
                    if (a.currentContext.playDirection === "reverse") return !0
                } else if (a.currentDirection === "reverse") return !0;
                return !1
            }
        },
        getLabelPosition: function (a) {
            return v.call(this, d.call(this), a)
        },
        lookupSelector: function (a) {
            if (typeof a === "string") try {
                return E("${_" + a + "}", this.variableValues)
            } catch (b) {}
        },
        getComposition: function () {
            return this.composition
        },
        getSymbolElementNode: function () {
            return c(this.element)[0]
        },
        getSymbolElement: function () {
            return c(this.element)
        },
        getSymbolTypeName: function () {
            return this.options.data.typeName
        },
        setAutoPlay: function (a, b) {
            if (!b || b.length === 0) b = d.call(this);
            this.autoPlay[b] = void 0
        },
        getAutoPlay: function (a) {
            if (!a || a.length === 0) a = d.call(this);
            return this.autoPlay[a]
        },
        _playAuto: function (a) {
            for (var b in this.timelines) if (this.timelines.hasOwnProperty(b)) {
                var c = this.getAutoPlay(b);
                if (typeof c === "undefined") {
                    var d = this.getTimelineData(b);
                    if (d) c = d.autoPlay
                }(typeof c === "undefined" || c === "true" || c === !0) && this.playTimeline(b, 0, void 0, {
                    firstUpdate: !0
                })
            }
            if (a && this.aSymbolInstances) {
                b = this.aSymbolInstances.length;
                for (c = 0; c < b; c++)(d = o.get(this.aSymbolInstances[c])) && d._playAuto(a)
            }
        },
        getVariable: function (a) {
            return this.variableValues[a]
        },
        setVariable: function (a, b) {
            this.variableValues[a] = b;
            if (a) {
                var c = this.getVariable(a),
                    c = e.call(this, {
                        variableValue: c
                    });
                this.notifyObservers("variableChanged:" + a, c)
            }
        },
        destroy: function () {
            c(this.ele).removeData("edgeSymbol");
            return this
        },
        getTimelineData: function (a) {
            return this.timelines[a]
        },
        _getTimeline: function (c, d, e) {
            var f = P.call(this, c, d, e);
            if (this.timelineCache[f]) return this.timelineCache[f];
            if (!this.getTimelineData(c)) return null;
            var h = this.getTimelineData(c).timeline;
            if (d || e) h = b.cloneJSONObject(h);
            for (var j = h.length, k = {}, l = {}, o, n, r = 0, q, t = 0; t < j; t++) if (n = h[t], m(n), n.tween && (o = n.tween[1], k[o] || (k[o] = []), k[o].push(n), o = n.tween[0] + ":" + n.tween[1] + ":" + n.tween[2], l[o] || (l[o] = []), l[o].push(n)), n.tween || n.trigger) q = n.duration || 0, r = Math.max(r, n.position + q);
            n = function (a, b) {
                return a.position - b.position
            };
            for (o in l) l.hasOwnProperty(o) && l[o].sort(n);
            var p, B, s, z, u, y, v;
            if (d) for (p in d = g.call(this, this.states[d]), d) if (d.hasOwnProperty(o)) {
                t = d[p];
                q = k[p];
                B = t.length;
                for (y = 0; y < B; y++) {
                    n = t[y];
                    s = n[0];
                    z = n[1];
                    u = n[2];
                    u = -1;
                    j = q.length;
                    for (v = 0; q && v < j; v++) if (n = q[v], o = n.tween, o[0] === s && o[2] === z && (u === -1 || n.position + n.duration > u)) u = n.position + n.duration
                }
            }
            d = {};
            if (e) for (p in e = this.states[e], e) if (e.hasOwnProperty(p)) {
                t = e[p];
                q = k[p];
                B = t.length;
                for (y = 0; y < B; y++) {
                    n = t[y];
                    s = n[0];
                    z = n[1];
                    u = n[2];
                    d[s + ":" + p + ":" + z] = u;
                    var w = null,
                        A = -1,
                        j = 0;
                    if (q) j = q.length;
                    for (v = 0; q && v < j; v++) if (n = q[v], o = n.tween, o[0] === s && o[2] === z && (A === -1 || n.position < A)) w = n, A = n.position;
                    if (w && (w.tween.length < 4 || !w.tween[4] || typeof w.tween[4].fromValue === "undefined")) w.tween[4] || (w.tween[4] = {}), w.tween[4].fromValue = u
                }
            }
            for (o in l) if (l.hasOwnProperty(o) && l[o][0].position > 0) if (e = d[o], l[o][0].tween && l[o][0].tween[0] === "motion") n = l[o][0], k = n.tween[2][0][0] + "px", e = n.tween[2][0][1] + "px", k = {
                id: "generated",
                tween: ["transform", n.tween[1], "translateX", k,
                {
                    fromValue: k
                }],
                position: 0,
                duration: Math.max(0, n.position - 1)
            }, h.push(k), k = {
                id: "generated",
                tween: ["transform", n.tween[1], "translateY", e,
                {
                    fromValue: e
                }],
                position: 0,
                duration: Math.max(0, n.position - 1)
            }, h.push(k);
            else if (e !== void 0) n = b.cloneJSONObject(l[o][0]), n.tween[3] = n.tween[4].fromValue = e, e = n.position, n.position = 0, n.duration = Math.max(0, e - 1), h.push(n);
            l = this.getTimelineData(c);
            typeof l.duration === "number" && r < l.duration && (n = {
                id: "rest",
                tween: ["style", "${_stage}", "-edge_resting", "100%",
                {
                    fromValue: "0%"
                }],
                position: r,
                duration: l.duration - r
            }, h.push(n));
            h = x.call(this, h);
            a.call(this, c, h);
            return this.timelineCache[f] = h
        },
        _play: function (a, b) {
            o.startClock();
            b.externalClock = !0;
            b.dontForceZ = !this.gpuAccelerate;
            var d = this.getTimelineData(a);
            if (d && (d = d.toState, a)) {
                var e = f.call(this, a);
                if (e) {
                    if (d && !(typeof b === "object" && typeof b.playDirection === "string" && b.playDirection === "reverse")) {
                        if (!this.tlPlayHandler) {
                            var h = this;
                            this.tlPlayHandler = {};
                            this.tlPlayHandler.onComplete = function () {
                                z.call(h, this.timelineName, this.opts);
                                this.tl.removeObserver(h.tlPlayHandler)
                            }
                        }
                        c.extend(this.tlPlayHandler, {
                            tl: e,
                            timelineName: a,
                            opts: b
                        });
                        e.addObserver(this.tlPlayHandler)
                    }
                    e.play(b)
                }
            }
        },
        _executeSymbolAction: function (a, c) {
            if (!(typeof c !== "object" || c.length < 3)) {
                var d = c[0],
                    e = b.Symbol.get(this.$(c[1]));
                if (e && d) {
                    var f = c[2];
                    if (!f || typeof f !== "object") f = null;
                    e[d].apply(e, f)
                }
            }
        },
        eSA: function (a, b) {
            this._executeSymbolAction(a, b)
        },
        _executeMediaAction: function (a, b) {
            if (!(typeof b !== "object" || b.length < 3)) {
                var c = b[0],
                    d = this.$(b[1])[0];
                if (d && c) {
                    var e = b[2];
                    if (!e || typeof e !== "object") e = null;
                    if (c === "play") {
                        if (e && e.length > 0 && typeof e[0] === "number") d.currentTime = e[0];
                        d.play()
                    } else c === "pause" && d.pause()
                }
            }
        },
        eMA: function (a, b) {
            this._executeMediaAction(a, b)
        },
        createChildSymbol: function (a, b, c, d) {
            if (a && b && a !== this.getSymbolTypeName() && (b = this.$(b)) && b[0]) if (a = W.call(this.getComposition(), a, b, c, d)) return X.call(this, a[0]), a[0]
        },
        deleteSymbol: function (a) {
            var a = a || {},
                b;
            this.composition && (b = this.composition.getSymbols());
            if (b) {
                var d = e.call(this, {});
                this.notifyObservers("onPreRemove", d);
                this.notifyObservers("beforeDeletion", d);
                if (d.performDefaultAction) {
                    var f;
                    if (this.aSymbolInstances) {
                        var h = this.aSymbolInstances.length;
                        for (f = 0; f < h; f++) this.composition.removeSymbol(this.aSymbolInstances[f], a)
                    }
                    f = this.element;
                    c(f).removeData("edgeSymbol");
                    a._keepElement ? c(f).empty() : c(f).remove();
                    for (f = b.length; f >= 0; f--) b[f] === this && b.splice(f, 1);
                    this.element = null;
                    this.notifyObservers("onPostRemove", d)
                }
            }
        },
        getSymbol: function (a) {
            a = this.$(a);
            return o.get(a)
        },
        getChildSymbols: function () {
            var a = [];
            if (this.aSymbolInstances) for (var b = 0; b < this.aSymbolInstances.length; b++) {
                var c = this.getSymbol(this.aSymbolInstances[b]);
                c && a.push(c)
            }
            return a
        },
        getParentSymbol: function () {
            return Y.call(this)
        },
        $: function (a) {
            var b = a;
            typeof a === "string" && (a.search(/\$\{/) === -1 ? (b = this.lookupSelector(a), typeof b === "undefined" && (b = a)) : b = E(a, this.variableValues));
            return c(b)
        }
    });
    o.prototype.getParameter = o.prototype.getVariable;
    o.prototype.setParameter = o.prototype.setVariable;
    o.get = function (a) {
        return c(a).data("edgeSymbol")
    };
    o.getDefaultEasing = function () {
        return b.TimelineObject.defaultEasing
    };
    o.getParentSymbol = function (a) {
        for (var a = c(a).parents(), b = a.length, d = 0; d < b; d++) {
            var e = o.get(a[d]);
            if (e) return e
        }
        return null
    };
    o.startClock = function () {
        if (!o.timerFunc) {
            var a = 1E3 / b.Timeline.config.fps;
            o.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
            function (b) {
                window.setTimeout(b, a)
            };
            o.timerFunc = function () {
                b.Timeline.tick();
                o.requestAnimationFrame.call(window, o.timerFunc)
            };
            o.requestAnimationFrame.call(window, o.timerFunc)
        }
    };
    var Q = function (a, c, d, e, f, h, g) {
            var k = b.getCompositionSymbolDefns(a)[c];
            if (k) {
                if (!k.actions) k.actions = {};
                g = o._makeUniqueID();
                k.actions[g] = f;
                if (!k.bindings) k.bindings = [];
                d = [
                    [h, d, e], g];
                k.bindings.push(d);
                if (null != b.compositions && (a = b.compositions[a], null != a && (a = a.getSymbols(), null != a))) {
                    k = a.length;
                    for (h = 0; h < k; h++) {
                        var e = a[h],
                            l = e.getSymbolTypeName();
                        c === l && (l = {}, l[g] = f, r.call(e, l), j.call(e, d))
                    }
                }
            } else b.logError("$.Edge.Symbol." + g + ": symbol not found")
        };
    o.bindElementAction = function (a, b, c, d, e) {
        Q(a, b, c, d, e, "element", "bindElementAction")
    };
    o.bindTimelineAction = function (a, b, c, d, e) {
        Q(a, b, c, d, e, "timeline", "bindTimelineAction")
    };
    o.bindTriggerAction = function (a, c, d, e, f) {
        var h = b.getCompositionSymbolDefns(a)[c];
        if (h) if (h = h.timelines[d].timeline) {
            var g = "trig_" + b.Symbol._makeUniqueID();
            h.push({
                trigger: [g, d],
                position: e,
                duration: 0,
                id: g
            });
            Q(a, c, d, g, f, "timeline", "bindTriggerAction")
        } else b.logError("$.Edge.Symbol.bindTriggerAction: timeline not found");
        else b.logError("$.Edge.Symbol.bindTriggerAction: symbol not found")
    };
    o.bindSymbolAction = function (a, b, c, d) {
        Q(a, b, "", c, d, "symbol", "bindSymbolAction")
    };
    o.bindVariableAction = function (a, b, c, d) {
        Q(a, b, "", "variableChanged:" + c, d, "symbol", "bindVariableAction")
    };
    o.bindVariableActionToSymbol = function (a, b, c) {
        if (a = o.get(a)) {
            var b = o._parseVariableName(b),
                d = "variableChanged:" + b,
                b = o._makeUniqueID(),
                d = [
                    ["symbol", "", d], b],
                e = {};
            e[b] = c;
            r.call(a, e);
            j.call(a, d)
        }
    };
    var K = (new Date).getTime(),
        L = function () {
            for (var a = "eid_" + K++; c("#" + a).length > 0;) a = "eid_" + K++;
            return a
        };
    o._makeUniqueID = L;
    b.importSymbolDefinitions = function () {};
    b.registerFonts = function (a) {
        if (a) {
            var d, e, f, h;
            if (!b.fonts) b.fonts = {};
            for (var g in a) if (a.hasOwnProperty(g) && !b.fonts[g] && (f = a[g]) && f !== "") {
                d = !1;
                for (var j in b.fonts) b.fonts.hasOwnProperty(j) && b.fonts[j] === f && (d = !0);
                if (!d) if (b.fonts[g] = f, d = f.indexOf("http://use.typekit.com/"), d > 0) {
                    if (e = f.indexOf('"', d + 1), e > 0) d = f.substring(d, e), f = document.createElement("script"), f.src = d, f.type = "text/javascript", document.getElementsByTagName("head")[0].appendChild(f), h = function () {
                        try {
                            window.Typekit.load()
                        } catch (a) {
                            setTimeout(h, 100)
                        }
                    }, setTimeout(h, 100)
                } else f.indexOf("<script") < 0 && c("head").append(f)
            }
        }
    };
    var N = 0;
    b.P = function (a, b, c, d, e) {
        var f = b,
            h = "";
        this.p = a;
        this.tt = c || "style";
        if (e) this.u = e;
        else if (!this.u) this.u = "px";
        if (typeof b === "number") h = this.u, f = b + h;
        this.vt = d;
        if (b != null) this.st[this.s] || (this.st[this.s] = []), this.st[this.s][this.st[this.s].length] = this.vt ? [this.tt, this.p, f,
        {
            valueTemplate: this.vt
        }] : [this.tt, this.p, f], this.last = b;
        return this
    };
    b.T = function (a, b, c, d, e) {
        var f = {},
            h = "",
            h = b;
        if (!e) e = this.last;
        if (typeof b === "number") h = this.u, e && (e += h), h = b + h;
        if (e) f.f = e;
        if (this.vt) f.vt = this.vt;
        if (!d) d = this.lastE;
        d || (d = "linear");
        c == null && (c = 0);
        this.tl[this.tl.length] = {
            id: "dg" + ++N,
            tw: [this.tt, this.s, this.p, h, f],
            p: Math.floor(a * 1E3),
            d: Math.floor(c * 1E3),
            e: d
        };
        this.last = b;
        this.lastE = d;
        return this
    };
    b.A = function (a, c, d) {
        if (!c) c = this.tl, d = this.st;
        return {
            tl: c,
            st: d,
            s: a,
            A: b.A,
            P: b.P,
            T: b.T
        }
    };
    b.compositions = b.compositions || {};
    b.compositionDefns = b.compositionDefns || {};
    b.compositionFonts = b.compositionFonts || {};
    b.compositionReadyHandler = b.compositionReadyHandler || {};
    b.registerSymbolDefns = function (a, c) {
		if (a && !(a.length <= 0) && b.compositionDefns[a]) {
            var d, e;
            for (d in c) if (c.hasOwnProperty(d)) {
                var f = c[d];
                f.typeName = d;
                if (f.v) f.version = f.v;
                if (f.b) f.build = f.b;
                if (f.bS) f.baseState = f.bS;
                if (f.iS) f.initialState = f.iS;
                if (f.gpu != null) f.gpuAccelerate = f.gpu;
                if (f.cn) f.content = f.cn;
                if (f.content) {
                    var h = f.content;
                    if (h.sI != null) h.symbolInstances = f.content.sI;
                    if (h.symbolInstances) for (var g = 0; g < h.symbolInstances.length; g++) {
                        var j = h.symbolInstances[g];
                        if (j.sN != null) j.symbolName = j.sN;
                        if (j.a != null) j.autoPlay = j.a;
                        if (j.x != null) j.variables = j.x;
				    }
                }
                if (f.x) f.variables = f.x;
                if (f.s) f.states = f.s;
                if (f.tl) f.timelines = f.tl;
                for (e in f.timelines) if (f.timelines.hasOwnProperty(e)) {
                    h = f.timelines[e];
                    if (h.fS) h.fromState = h.fS;
                    if (h.tS) h.toState = h.tS;
                    if (h.d != null) h.duration = h.d;
                    if (h.a != null) h.autoPlay = h.a;
                    if (h.l) h.labels = h.l;
                    if (h.tt) h.timeline = h.tt
		        }
            }
        }
    };
    b.registerCompositionDefn = function (a, c, d, f) {
        window.edge_authoring_mode && window.edge_symbol_import_mode && window.edge_comp_id ? b.importSymbolDefinitions(window.edge_comp_id, c, d, f) : a && a.length > 0 && !b.compositionDefns[a] && (b.compositionDefns[a] = {
            symbolData: c,
            resources: f,
            readyToLaunch: !1
        }, b.registerSymbolDefns(a, c), b.compositionFonts[a] = d, b.registerFonts(d))
    };
    b.getCompositionSymbolDefns = w;
    b.getCompositionResources = function (a) {
        return b.compositionDefns[a].resources
    };
    b.getComposition = function (a) {
        if (a) return b.compositions[a]
    };
    b.registerCompositionReadyHandler = function (a, c, d) {
        d = d || {};
        if ((!window.edge_authoring_mode || d._tool || window.edge_remote_authoring) && a && c) b.compositions[a] ? b.compositions.ready(c) : (b.compositionReadyHandler[a] = b.compositionReadyHandler[a] || [], b.compositionReadyHandler[a].push(c))
    };
    W = function (a, b, d, f) {
        if (a && b && this.symbolInstances && this.symbolDefns[a]) {
            var e = [],
                h = this;
            c(b).each(function () {
                var b = c(this),
                    g = document.createElement("div");
                (d || d === 0) && b.children().eq(d)[0] ? (b = b.children(), d < 0 ? b.eq(d).after(g) : b.eq(d).before(g)) : b.append(g);
                b = {};
                b.variables = f;
                if (g = h.convertElementToSymbol(g, a, b)) h.instanceReady(g), e.push(g)
            });
            if (this.readyCalled) for (b = 0; b < e.length; b++) e[b]._playAuto(!0);
            return e
        }
    };
    var M, O = b.Composition = function (a, d, f) {
            f = f || {};
            if (!window.edge_authoring_mode || f._tool || window.edge_remote_authoring) {
                b.Notifier.call(this);
                c.extend(this, b.Composition.config);
                c.extend(this, f);
                var e, h = !1,
                    g = 0,
                    j, k = this,
                    f = b.compositionReadyHandler[a];
                e = b.compositionDefns[a].resources;
                symbolData = this.symbolDefns = w(a);
                this.compId = a;
                g = this._createEvent();
                this.notifyObservers("onPreCompInit", g);
                var l = this._createEvent();
                if (g.performDefaultAction) {
                    this.symbolInstances = [];
                    this.imageRequestCount = 0;
                    this.imageRequestList = [];
                    this.readyList = [];
                    this.readyCalled = !1;
                    this.$loadCalled = window.AdobeEdge.loaded;
                    b.compositions[a] = this;
                    this.compReadyCalled = !1;
                    if (e) for (g = 0; g < e.length; g++) this.requestImage(e[g]);
                    M(H);
                    for (j in d) if (d.hasOwnProperty(j) && (e = c(d[j]), e.size() > 0)) {
                        h = !0;
                        break
                    }
                    h || (h = c("body"), c(h).addClass(a));
                    for (j in d) d.hasOwnProperty(j) && (e = c(d[j]), e.each(function () {
                        k.convertElementToSymbol(this, j)
                    }));
                    window.AdobeEdge.loaded ? k.imageRequestCount <= 0 && k.callReadyList() : c(window).load(function () {
                        k.$loadCalled = !0;
                        k.imageRequestCount <= 0 && k.callReadyList()
                    });
                    if (f) for (g = 0; g < f.length; g++) this.ready(f[g])
                }
                this.notifyObservers("onPostCompInit", l)
            }
        };
    b.Composition.config = b.Composition.config || {};
    c.extend(O.prototype, b.Notifier.prototype, {
        play: function (a) {
            if (!window.edge_authoring_mode || a) if (typeof b.autoPlay === "undefined" || b.autoPlay) for (var a = this.symbolInstances.length, c = 0; c < a; c++) this.symbolInstances[c]._playAuto()
        },
        getSymbols: function (a) {
            if (!a) return this.symbolInstances;
            var b = [];
            if (!this.symbolInstances) return b;
            if (this.symbolDefns.hasOwnProperty(a)) for (var c = this.symbolInstances.length, d = 0; d < c; d++) this.symbolInstances[d].getSymbolTypeName() === a && b.push(this.symbolInstances[d]);
            return b
        },
        ready: function (a) {
            this.readyCalled ? a.call() : this.readyList && this.readyList.push(a)
        },
        getCompId: function () {
            return this.compId
        },
        requestImage: function (a) {
            function b() {
                d.imageRequestCount--;
                d.imageRequestCount <= 0 && d.$loadCalled && setTimeout(function () {
                    d.callReadyList()
                }, 0)
            }
            this.imageRequestCount++;
            var d = this,
                f = new Image;
            this.imageRequestList.push(f);
            c(f).load(b);
            c(f).error(b);
            f.src = a;
            return null
        },
        restoreDisplay: function (a, b) {
            var d = this;
            b || c(".edgeLoad-" + d.compId).each(function (a, b) {
                c(b).removeClass("edgeLoad-" + d.compId);
                var f = c(b).data("dispOrig");
                b.style.display = typeof f !== "undefined" ? f : "block"
            })
        },
        installEffectors: function (a, d, f) {
            var e = d.effectors,
                h = this,
                a = a[0] || a;
            !f && e && e["#" + a.id] && b.Effectors.attach(h, a, e["#" + a.id]);
            c(a).children().each(function (a, c) {
                e && e["#" + c.id] && b.Effectors.attach(h, c, e["#" + c.id]);
                h.installEffectors(c, d, !0)
            })
        },
        instanceReady: function (a) {
            var d = c(a.element);
            d && (b.Effectors && this.installEffectors(d, a), this.restoreDisplay(d))
        },
        callReadyList: function () {
            if (!this.readyCalled) {
                this.imageRequestList = [];
                this.readyCalled = !0;
                if (b.preloadComplete && b.preloadComplete[this.compId]) b.preloadComplete[this.compId]([this.compId]);
                for (var a = 0; a < this.symbolInstances.length; a++) n.call(this.symbolInstances[a]), this.instanceReady(this.symbolInstances[a]);
                if (!this.compReadyCalled) this.compReadyCalled = !0, a = c.Event("compositionReady"), a.compId = this.getCompId(), c(document).trigger(a);
                for (; this.readyList.length > 0;) this.readyList.shift().call();
                a = c.Event("loaded");
                a.compId = this.getCompId();
                c(document).trigger(a)
            }
        },
        getStage: function () {
            return o.get(c("." + this.getCompId()))
        },
        createSymbolChild: function (a, b, c, d) {
            if ((a = W.call(this, a, b, c, d)) && a.length > 0) if ((c = o.get(b)) || (c = o.getParentSymbol(b)), c) for (b = 0; b < a.length; b++) X.call(c, a[b]);
            return a
        },
        convertElementToSymbol: function (a, b, d) {
            if (a && c(a) && this.symbolInstances && this.symbolDefns[b]) return d = d || {}, d.regenerateID = d.regenerateID || !0, a = new o(c(a), {
                data: this.symbolDefns[b],
                composition: this,
                opts: d
            }), this.symbolInstances.push(a), a
        },
        removeSymbol: function (a, b) {
            if (this.symbolInstances) {
                var c = o.get(a);
                c && c.deleteSymbol(b)
            }
        },
        _createEvent: function (a) {
            var b = {
                composition: this,
                compId: this.compId,
                performDefaultAction: !0
            };
            c.extend(b, a);
            return b
        }
    });
    b.launchComposition = function (a) {
        var c = b.compositionDefns[a];
		if (c) c.launchCalled = !0, C(a)
    };
    b.okToLaunchComposition = function (a) {
        var c = b.compositionDefns[a];
        if (c) c.okToLaunch = !0, C(a)
    };
    M = function (a) {
        for (var b in a) if (a.hasOwnProperty(b) && a[b].timelines) for (var c in a[b].timelines) if (a[b].timelines.hasOwnProperty(c)) for (var d = a[b].timelines[c].timeline, f = d.length, e = 0; e < f; e++) {
            var h = d[e];
            if (!h.id) h.id = L()
        }
    };
    b.play = function (a) {
        if (!window.edge_authoring_mode || a) if (typeof b.autoPlay === "undefined" || b.autoPlay) for (var a = this.symbolInstances.length, c = 0; c < a; c++) {
            var d = (void 0)[c],
                f = d.options.data.autoPlay;
            typeof f === "string" && f !== "true" ? d.play(f) : (typeof f === "undefined" || f === !0 || f === "true") && d.play("Default Timeline")
        }
    };
    b.logDebug = function () {};
    b.logInfo = function () {};
    b.logWarn = function () {};
    b.logError = function () {};
    b.logFatal = function () {};
    c.extend(b.TimelineObject.prototype, {
        compute: function (a, b, d, f) {
            if (!this.dDuration) {
                var e = this.duration,
                    h = null;
                this.animation && this.animation.getDuration && (h = this.animation.getDuration());
                this.dScale = e !== -1 && e !== 0 ? h / e : 1;
                this.dDuration = e !== -1 ? e : h
            }
            e = this.dDuration;
            e = e === 0 ? 1 : e;
            d >= e && (d = e);
            d <= 0 && (d = 0);
            if (this.animation) return e = c.easing[this.easing](d / e, d, 0, 1, e), this.animation.compute(a, b, d * this.dScale, e, f)
        }
    });
    c.extend(b.Timeline.prototype, {
        compute: function (a, b, d, f) {
            for (var e = this.objects, h = e.length, g = [], j = {
                obj: null,
                end: 0
            }, k = {
                obj: null,
                start: this.getDuration()
            }, l = 0; l < h; l++) {
                var m = e[l];
                if (!m.animation.isTrigger && b === m.animation.property && a === m.animation.elements) if (d >= m.position && d <= m.position + m.duration) {
                    if (m = m.compute(a, b, d - m.position, f)) c.isArray(m) || (m = [m]), g = m
                } else if (d < m.position) {
                    if (m.position <= k.start) k.start = m.position, k.obj = m
                } else if (d > m.position + m.duration && m.position + m.duration >= j.end) j.end = m.position, j.obj = m
            }
            if (!g || c.isArray(g) && g.length === 0) if (j.obj && j.obj.animation.toValue) g = j.obj.animation.toValue;
            else if (k.obj && k.obj.animation.fromValue) g = k.obj.animation.fromValue;
            c.isArray(g) || (g = [g]);
            return g
        }
    });
    c.extend(F.prototype, {
        compute: function (a, b, c, d) {
            c = this.property;
            if (a !== this.elements || b !== c) return null;
            for (var a = this.fromValues, b = this.toValues, c = this.filter, e = a.length, f = [], h = 0; h < e; h++) {
                var g = a[h],
                    j = b[h];
                g += (j.value - g) * d;
                c && c[h] && (g = c[h](g));
                f.push(g + j.unit)
            }
            return f
        }
    });
    c.extend(b.TransformTween.prototype, {
        compute: F.prototype.compute
    })
})(jQuery, jQuery.Edge);
(function (c, b) {
    if (typeof b.DeclareMarkup == "undefined") {
        var e = function () {
                function s(a, b, d) {
                    c(a).get(0) && c(a).css(b, d)
                }
                function k(a, b, d) {
                    c(a).get(0) && c(a).attr(b, d)
                }
                function m(a) {
                    var b;
                    typeof a == "string" && (b = v(a));
                    if (!b || !b.units) a += "px";
                    return a
                }
                function q(a, e, g, f, j, l, n) {
                    var q = document.getElementById(e),
                        r = !1;
                    q || (r = !0, q = document.createElement(a));
                    q.id = e;
                    q.style.position = "absolute";
                    a = c(q);
                    a.data("domDef", g);
                    a.addClass(e + "_id");
                    if (r) {
                        if (g.display) q.style.display = g.display;
                        if (!window.edge_authoring_mode) a.data("dispOrig", q.style.display), q.style.display = "none", a.addClass("edgeLoad-" + l.compId)
                    }
                    g.className && a.addClass(g.className);
                    a.css("left", m(g.rect[0]));
                    a.css("top", m(g.rect[1]));
                    g.rect[2] > 0 && a.css("width", m(g.rect[2]));
                    g.rect[3] > 0 && a.css("height", m(g.rect[3]));
                    g.overflow && (a.css("overflow", g.overflow), (g.overflow == "hidden" || g.overflow == "scroll") && a.css("text-overflow", "clip"));
                    g.cl && (g.cl.length == 1 ? a.css("clip", g.cl[0]) : a.css("clip", "rect(" + m(g.cl[0]) + " " + m(g.cl[1]) + " " + m(g.cl[2]) + " " + m(g.cl[3]) + ")"));
                    g.cn && a.attr("controls", g.cn);
                    g.ap && a.attr("autoplay", g.ap);
                    g.lp && a.attr("loop", g.lp);
                    if (g.sr) if (g.sr.length == 1) a.attr("src", g.sr[0]);
                    else for (e = 0; e < g.sr.length; e++) {
                        var p = document.createElement("source");
                        c(p).attr("src", g.sr[e]);
                        q.appendChild(p)
                    }
                    g.cu && a.css("cursor", g.cu);
                    g.uc && a.addClass(g.uc);
                    g.br && (g.br.length == 1 ? a.css("border-radius", m(g.br[0])) : (a.css("border-top-left-radius", g.br[0]), a.css("border-top-right-radius", g.br[1]), a.css("border-bottom-right-radius", g.br[2]), a.css("border-bottom-left-radius", g.br[3])));
                    if (g.tf) {
                        for (var e = [], p = [
                            [3, 0],
                            [3, 0],
                            [2, 0],
                            [3, 1],
                            [2, "50%"]
                        ], w = 0; w < p.length; w++) {
                            e[w] = [];
                            g.tf[w] || (g.tf[w] = []);
                            for (var C = 0; C < p[w][0]; C++) g.tf[w][C] || (g.tf[w][C] = p[w][1]), e[w][C] = g.tf[w][C]
                        }
                        p = typeof e[4][0] == "string" ? e[4][0] + " " + e[4][1] : e[4][0] + "px " + e[4][1] + "px";
                        a.css("-webkit-transform-origin", p);
                        a.css("-moz-transform-origin", p);
                        a.css("-ms-transform-origin", p);
                        a.css("-o-transform-origin", p);
                        "webkitAppearance" in document.documentElement.style ? (p = "", p += e[0][2] != 0 ? "translate3d(" + m(e[0][0]) + "," + m(e[0][1]) + "," + m(e[0][2]) + ")" : "translate(" + m(e[0][0]) + "," + m(e[0][1]) + ")", e[1][1] != 0 || e[1][2] != 0 ? (p += " rotateZ(" + e[1][0] + "deg)", p += " rotateX(" + e[1][0] + "deg)", p += " rotateY(" + e[1][0] + "deg)") : p += " rotate(" + e[1][0] + "deg)", p += " skew(" + e[2][0] + "deg," + e[2][1] + "deg)", p += e[3][2] != 1 ? " scale3d(" + e[3][0] + "," + e[3][1] + "," + e[3][2] + ")" : " scale(" + e[3][0] + "," + e[3][1] + ")", c(q).css("-webkit-transform", p)) : (p = "translate(" + m(e[0][0]) + "," + m(e[0][1]) + ") rotate(" + e[1][0] + "deg)  skewX(" + e[2][0] + "deg) skewY(" + e[2][1] + "deg) scale(" + e[3][0] + "," + g.tf[3][1] + ")", a.css("-moz-transform", p), a.css("-ms-transform", p), a.css("-o-transform", p))
                    }
                    g.opacity && a.css("opacity", g.opacity);
                    g.stroke && ((e = g.stroke[0]) || (e = 0), (p = g.stroke[1]) ? typeof p == "string" && (p = [p]) : p = ["rgba(0,0,0,0)"], (w = g.stroke[2]) || (w = "none"), a.css("border", "" + e + "px " + w + " " + b.colorToSupported(p[0])));
                    if (g.fill && (e = g.fill[0], typeof e == "string" && (e = [e]), (p = g.fill[1]) || (p = "solid"), p == "solid" && e && a.css("background-color", b.colorToSupported(e[0])), g.fill[1])) if (e = g.fill[1], typeof e == "string" ? e = [e] : typeof e == "object" && ((p = e[window.EdgeScreenProfile.name]) || (p = e["default"]), e = p), g.tag && g.tag == "img") e[0] && d(n, e[0], q, "src", k);
                    else {
                        if (e[0]) {
                            g = d(n, e[0], q, "background-image", s, function (a) {
                                return a ? (a = a.replace("'", "\\'"), "url(" + a + ")") : a
                            });
                            if (e[1] || e[2]) {
                                var u, n = "px";
                                e[1] && typeof e[1] == "string" ? u = v(e[1]) : typeof e[2] == "string" && (u = v(e[2]));
                                if (u && u.units) n = u.units;
                                e[1] || (e[1] = "0" + n);
                                e[2] || (e[2] = "0" + n);
                                a.css("background-position", m(e[1]) + " " + m(e[2]))
                            }
                            l.requestImage(g)
                        }
                        e[3] || a.css("background-repeat", "no-repeat");
                        e[4] && e[4] != "scroll" && a.css("background-attachment", e[4])
                    }
                    a.css("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)");
                    if (f && r) {
                        if (!f.appendChild) return q;
                        f.firstChild && j >= 0 && f.children && j < f.children.length ? f.insertBefore(q, f.children[j]) : f.appendChild(q)
                    }
                    return q
                }
                function j(a, h, g, f, j, k, l) {
                    r(h, f);
                    var m = null,
                        n = "div";
                    if (h.tag) n = h.tag;
                    switch (h.t) {
                    case "rect":
                    case "elipse":
                    case "group":
                        m = q(n, a, h, g, j, k, f, l);
                        break;
                    case "image":
                        m = q(n, a, h, g, j, k, f, l);
                        break;
                    case "video":
                    case "audio":
                        m = q(n, a, h, g, j, k, f, l);
                        e.DOMMediaNodeCreated(m);
                        break;
                    case "text":
                        m = q(n, a, h, g, j, k, f, l);
                        a = c(m);
                        h.font && (h.font[0] && h.font[0] !== "" && a.css("font-family", h.font[0]), typeof h.font[1] != "object" && (h.font[1] = [h.font[1]]), h.font[1][1] || (h.font[1][1] = "px"), h.font[1][0] && h.font[1][0] !== "" && a.css("font-size", h.font[1][0] + h.font[1][1]), h.font[2] && h.font[2] !== "" && a.css("color", b.colorToSupported(h.font[2])), h.font[3] && h.font[3] !== "" && a.css("font-weight", h.font[3]), h.font[4] && h.font[4] !== "" && a.css("text-decoration", h.font[4]), h.font[5] && h.font[5] !== "" && a.css("font-style", h.font[5]));
                        h.align && a.css("text-align", h.align);
                        if (h.position) m.style.position = h.position;
                        (!h.rect[2] || h.rect[2] <= 0) && (!h.rect[3] || h.rect[3] <= 0) && a.css("white-space", "nowrap");
                        m.appendChild(document.createTextNode(""));
                        d(f, h.text, m, "text", function (a, b, d) {
                            c(a).get(0) && c(a).html(d)
                        })
                    }
                    return m
                }
                function p(a, b, c, d, k, l, m) {
                    if (c = j(a, b, d, k, l || 0, m)) {
                        e.nodeSymbolInstanceLookup[a] ? e.DOMNodeStarted(c, d, b, e.nodeSymbolInstanceLookup[a].symbolName, e.nodeSymbolInstanceLookup[a].autoPlay, e.nodeSymbolInstanceLookup[a].variables) : e.DOMNodeStarted(c, d, b);
                        if (b.c) for (a = 0; a < b.c.length; a++) d = b.c[a], p(d.id, d, b, c, k, a, m);
                        e.DOMNodeCompleted(c)
                    }
                    return c
                }
                var r, n, d, l = b.PropertyTween,
                    v = b.TransformTween.splitUnits;
                n = function (a, b) {
                    var c = a;
                    a && b && (c = l.substituteVariables(a, b), typeof c === "undefined" && (c = a));
                    return c
                };
                d = function (a, b, c, d, j, k) {
                    var a = n(b, a),
                        l = function (a, b, e) {
                            k && (e = k(e));
                            j(c, d, e)
                        };
                    a && a != b && !window.edge_authoring_mode && (e.nodeVariableBindings[b] || (e.nodeVariableBindings[b] = []), e.nodeVariableBindings[b].push({
                        ele: c,
                        action: l
                    }));
                    l(null, null, a);
                    return a
                };
                r = function (a) {
                    if (a.type) a.t = a.type;
                    if (a.t) a.t = a.t.toLowerCase();
                    a.type = a.t;
                    if (a.cs) a.className = a.cs;
                    a.children ? a.c = a.children : a.children = a.c;
                    a.rect ? a.r = a.rect : a.rect = a.r;
                    if (!a.rect) a.rect = [];
                    for (; a.rect.length < 4;) a.rect[a.rect.length] = 0;
                    a.borderRadius ? a.br = a.borderRadius : a.borderRadius = a.br;
                    a.clip ? a.cl = a.clip : a.clip = a.cl;
                    a.controls ? a.cn = a.controls : a.controls = a.cn;
                    a.source ? a.sr = a.source : a.source = a.sr;
                    a.cursor ? a.cu = a.cursor : a.cursor = a.cu;
                    a.autoplay ? a.ap = a.autoplay : a.autoplay = a.ap;
                    a.loop ? a.lp = a.loop : a.loop = a.lp;
                    a.font ? a.n = a.font : a.font = a.n;
                    a.transform ? a.tf = a.transform : a.transform = a.tf;
                    if (a.tf) {
                        for (; a.tf.length < 5;) a.tf[a.tf.length] = 0;
                        for (; a.transform.length < 8;) a.tf[a.tf.length] = 1
                    }
                    a.opacity ? a.o = a.opacity : a.opacity = a.o;
                    a.userClass ? a.uc = a.userClass : a.userClass = a.uc;
                    if (a.stroke) a.s = a.stroke;
                    a.stroke = a.s;
                    if (a.fill) a.f = a.fill;
                    a.fill = a.f;
                    if (a.display) a.v = a.display;
                    a.display = a.v
                };
                return {
                    stageLookup: {},
                    nodeLookup: {},
                    nodeSymbolInstanceLookup: {},
                    DOMNodeSeek: function () {},
                    DOMNodeReset: function () {},
                    DOMNodeStarted: function () {},
                    DOMNodeCompleted: function () {},
                    DOMMediaNodeCreated: function () {},
                    renderDOM: function (a, c, d, f, j, k) {
                        e.nodeVariableBindings = {};
                        for (f = 0; f < a.length; f++) r(a[f], d);
                        e.nodeSymbolInstanceLookup = {};
                        if (j) for (f = 0; f < j.length; f++) e.nodeSymbolInstanceLookup[j[f].id] = j[f];
                        for (f = 0; f < a.length; f++) a[f] && (j = p(a[f].id, a[f], null, null, d, 0, k)) && c.appendChild(j);
                        for (var l in e.nodeVariableBindings) if (e.nodeVariableBindings.hasOwnProperty(l)) {
                            a = e.nodeVariableBindings[l];
                            for (f = 0; f < a.length; f++) b.Symbol.bindVariableActionToSymbol(c, l, a[f].action)
                        }
                    },
                    buildSceneGraphNode: p,
                    createElement: j
                }
            }();
        b.DeclareMarkup = e
    }
})(jQuery, jQuery.Edge);