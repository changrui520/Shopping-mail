/*
 trade Compressed by uglify 
 Author:Fengwp 
 Date: 2014-07-22 
 */
!function (a, b, c) {
    var d = function (b, c) {
        this.opts = a.extend({
            content: b.title || "",
            width: null,
            oTop: 5,
            oLeft: 5,
            zIndex: 100,
            id: null,
            "class": null,
            docClosed: !0,
            event: "hover",
            position: "top",
            close: !1,
            onShow: null,
            onHide: null
        }, c), this.$obj = a(b), this.init()
    };
    d.prototype = {
        init: function () {
            this.insertStyles('.Jtips{position:relative;float:left}.Jtips .Jtips-close{position:absolute;width:10px;height:10px;color:#f60;font:12px/10px "simsun";cursor:pointer}.Jtips .Jtips-arr{position:absolute;background-image:url(http://misc.360buyimg.com/purchase/trade/skin/i/arrow.gif);background-repeat:no-repeat;overflow:hidden}.Jtips.Jtips-top{padding-bottom:5px}.Jtips.Jtips-top .Jtips-close{right:10px;top:12px}.Jtips.Jtips-top .Jtips-arr{left:10px;bottom:0;width:11px;height:6px;background-position:0 -5px}.Jtips.Jtips-bottom{padding-top:5px}.Jtips.Jtips-bottom .Jtips-close{right:10px;top:17px}.Jtips.Jtips-bottom .Jtips-arr{top:0;left:10px;width:11px;height:6px;background-position:0 0}.Jtips.Jtips-left{padding-right:5px}.Jtips.Jtips-left .Jtips-close{right:16px;top:12px}.Jtips.Jtips-left .Jtips-arr{right:0;top:10px;width:6px;height:11px;background-position:-5px 0}.Jtips.Jtips-right{padding-left:5px}.Jtips.Jtips-right .Jtips-close{right:10px;top:12px}.Jtips.Jtips-right .Jtips-arr{top:10px;left:0;width:6px;height:11px;background-position:0 0}.Jtips .Jtips-con{padding:7px 30px 7px 10px;background:#fffdee;border:1px solid #edd28b;color:#333;-moz-box-shadow:0 0 2px 2px #eee;-webkit-box-shadow:0 0 2px 2px #eee;box-shadow:0 0 2px 2px #eee}.Jtips .Jtips-con a,.Jtips .Jtips-con a:visited{color:#005fab;text-decoration:none}.Jtips .Jtips-con a:hover{text-decoration:underline}');
            var a = this;
            a.bindEvent()
        }, insertStyles: function (b) {
            if (!a("#tipsCSS").length) {
                var d = c.getElementsByTagName("head"), e = c.createElement("style"), f = c.createElement("link");
                if (/\.css$/.test(b)) f.rel = "stylesheet", f.type = "text/css", f.id = "tipsCSS", f.href = b, d.length ? d[0].appendChild(f) : c.documentElement.appendChild(f); else {
                    if (e.setAttribute("type", "text/css"), e.setAttribute("id", "tipsCSS"), e.styleSheet) e.styleSheet.cssText = b; else {
                        var g = c.createTextNode(b);
                        e.appendChild(g)
                    }
                    d.length && d[0].appendChild(e)
                }
            }
        }, bindEvent: function () {
            var b = this;
            this._hide = this.remove(), "hover" === this.opts.event ? this.$obj.bind("mouseenter", function () {
                b.show()
            }).bind("mouseleave", function () {
                b.hide()
            }) : this.$obj.bind("click", function (d) {
                b.show(), b.opts.docClosed && (a(c).bind("click", b._hide), d.stopPropagation())
            })
        }, bindClose: function (a) {
            var b = this;
            a.find(".Jtips-close").bind("click", function () {
                b._hide()
            })
        }, getPosition: function () {
            var a = this.$obj;
            return {w: a.outerWidth(), h: a.outerHeight(), oTop: a.offset().top, oLeft: a.offset().left}
        }, setPosition: function (b, c) {
            var d = this.getPosition(), e = (a("body").eq(0).width(), a("body").eq(0).height(), {});
            b.css({position: "absolute", "z-index": this.opts.zIndex}), e = {
                left: {
                    top: d.oTop - 10 + this.opts.oTop,
                    left: d.oLeft - this.tips.outerWidth() - this.opts.oLeft
                },
                right: {left: d.oLeft + d.w + this.opts.oLeft, top: d.oTop - 10 + this.opts.oTop},
                top: {left: d.oLeft - 10 + this.opts.oLeft, top: d.oTop - this.tips.outerHeight() - this.opts.oTop},
                bottom: {left: d.oLeft - 10 + this.opts.oLeft, top: d.oTop + d.h + this.opts.oTop}
            }, b.css(e[c])
        }, show: function () {
            var d = this.opts.close ? '<div class="Jtips-close">&times;</div>' : "",
                e = a("<div" + (this.opts.id ? " id='" + this.opts.id + "'" : "") + ' class="Jtips Jtips-' + this.opts.position + (this.opts["class"] ? " " + this.opts["class"] : "") + '"><div class="Jtips-arr"></div>' + d + '<div class="Jtips-con">' + this.opts.content + "</div></div>"),
                f = this;
            a(".Jtips").remove(), b.clearTimeout(f.timer), this.tips = e, a("body").eq(0).append(e), this.tips.css("width", this.opts.width || e.width()).find(".Jtips-con").css("width", (this.opts.width || e.width()) - 42), this.setPosition(e, this.opts.position), this.bindClose(e), "hover" === this.opts.event ? this.tips.bind("mouseenter", function () {
                b.clearTimeout(f.timer)
            }).bind("mouseleave", function () {
                f.timer = setTimeout(f._hide, 399)
            }) : this.tips.bind("mouseenter", function () {
                a(c).unbind("click", f._hide)
            }).bind("mouseleave", function () {
                a(c).bind("click", f._hide)
            }), a(window).resize(function () {
                f.setPosition(e, f.opts.position)
            }), "function" == typeof this.opts.onShow && this.opts.onShow.apply(this.$obj, [this.tips])
        }, hide: function () {
            this.timer = setTimeout(this._hide, 399)
        }, remove: function () {
            var a = this;
            return function () {
                "function" == typeof a.opts.onHide ? a.opts.onHide.apply(a.$obj, [a.tips]) && a.tips.remove() : a.tips.remove()
            }
        }
    }, a.fn.Jtips = function (b) {
        return this.each(function () {
            var c = new d(this, b);
            a(this).data("Jtips", c)
        })
    }
}(jQuery, window, document);