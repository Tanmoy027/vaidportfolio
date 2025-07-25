/*!
 * jQuery meanMenu v2.0.8
 * @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
 *
 */
! function(e) {
    "use strict";
    e.fn.meanmenu = function(n) {
        var a = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        n = e.extend(a, n);
        var t = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function() {
            var e = n.meanMenuTarget,
                a = n.meanMenuContainer,
                s = n.meanMenuClose,
                i = n.meanMenuCloseSize,
                l = n.meanMenuOpen,
                m = n.meanRevealPosition,
                o = n.meanRevealPositionDistance,
                r = n.meanRevealColour,
                c = n.meanScreenWidth,
                u = n.meanNavPush,
                h = ".meanmenu-reveal",
                d = n.meanShowChildren,
                v = n.meanExpandableChildren,
                f = n.meanExpand,
                p = n.meanRemoveAttrs,
                g = n.onePage,
                C = n.meanDisplay,
                A = n.removeElements,
                M = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (M = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var P = "",
                $ = function() {
                    if ("center" === m) {
                        var e = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px";
                        P = "left:" + e + ";right:auto;", M ? jQuery(".meanmenu-reveal").animate({
                            left: e
                        }) : jQuery(".meanmenu-reveal").css("left", e)
                    }
                },
                _ = !1,
                w = !1;
            "right" === m && (P = "right:" + o + ";left:auto;"), "left" === m && (P = "left:" + o + ";right:auto;"), $();
            var E = "",
                W = function() {
                    jQuery(E).is(".meanmenu-reveal.meanclose") ? E.html(s) : E.html(l)
                },
                x = function() {
                    jQuery(".mean-bar,.mean-push").remove(), jQuery(a).removeClass("mean-container"), jQuery(e).css("display", C), _ = !1, w = !1, jQuery(A).removeClass("mean-remove")
                },
                b = function() {
                    var n = "background:" + r + ";color:" + r + ";" + P;
                    if (t <= c) {
                        jQuery(A).addClass("mean-remove"), w = !0, jQuery(a).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + n + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                        var s = jQuery(e).html();
                        jQuery(".mean-nav").html(s), p && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                            jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                        }), jQuery(e).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", u), jQuery(e).hide(), jQuery(".meanmenu-reveal").show(), jQuery(h).html(l), E = jQuery(h), jQuery(".mean-nav ul").hide(), d ? v ? (jQuery(".mean-nav ul ul").each(function() {
                            jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + f + "</a>")
                        }), jQuery(".mean-expand").on("click", function(e) {
                            e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).prev("ul").slideUp(300, function() {}), jQuery(this).parent().removeClass("dropdown-opened")) : (jQuery(this).prev("ul").slideDown(300, function() {}), jQuery(this).parent().addClass("dropdown-opened")), jQuery(this).toggleClass("mean-clicked")
                        })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), E.removeClass("meanclose"), jQuery(E).click(function(e) {
                            e.preventDefault(), !1 === _ ? (E.css("text-align", "center"), E.css("text-indent", "0"), E.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), _ = !0) : (jQuery(".mean-nav ul:first").slideUp(), _ = !1), E.toggleClass("meanclose"), W(), jQuery(A).addClass("mean-remove")
                        }), g && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                            jQuery(".mean-nav ul:first").slideUp(), _ = !1, jQuery(E).toggleClass("meanclose").html(l)
                        })
                    } else x()
                };
            M || jQuery(window).resize(function() {
                t = window.innerWidth || document.documentElement.clientWidth, x(), t <= c ? (b(), $()) : x()
            }), jQuery(window).resize(function() {
                t = window.innerWidth || document.documentElement.clientWidth, M ? ($(), t <= c ? !1 === w && b() : x()) : (x(), t <= c && (b(), $()))
            }), b()
        })
    }
}(jQuery);