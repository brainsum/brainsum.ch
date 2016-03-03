/* globals window, document */
(function (window, document, undefined) {
    "use strict";

    var _type = ['transform', 'webkitTransform', 'mozTransform', 'msTransform'];
    var _rule = '';
    var _time = 15;

    for (var i = 0, l = _type.length; i < l; i ++) {
        if (document.body.style[_type[i]] !== undefined) {
            _rule = _type[i];
            break;
        }
    }

    /**
     * [MODULE] PARALLAX
     *
     * Creates a multiple layered parallax effect for the big Brainsum logo
     * @private
     */
    var Parallax = {
        initialized: false,
        offset: 20,
        items: null,

        init: function () {
            var self = this;

            if (self.initialized === true) {
                return;
            }
            self.initialized = true;
            self.node = document.getElementById('parallax');
            self.list = self.getLayers('#parallax-back .layer');

            window.addEventListener('scroll', function () {
                var p = self.getDimensions();

                for (var i = 0, l = self.list.length; i < l; i ++) {
                    self.list[i].node.style[_rule] = [
                        "translateY(", self.getLayerY(p, self.list[i].rate), "px)"
                    ].join('')
                }
            }, false);
        },

        getLayers: function (selector) {
            var node = document.querySelectorAll(selector);
            var list = new Array(node.length);

            for (var i = 0, l = node.length; i < l; i ++) {
                list[i] = {
                    node: node[i],
                    rate: Math.random()
                }
            }
            return list;
        },

        getLayerY: function (view, rate) {
            return (view.view - view.node) * rate;
        },

        getDimensions: function () {
            return {
                view: ~~ (window.pageYOffset + (window.innerHeight * .5)),
                node: ~~ (Parallax.node.offsetTop + Parallax.node.offsetHeight)
            }
        }
    };

    /**
     * [MODULE] FEATURED-SPLASH
     *
     * Follows the mouse movement to face it within 3 dimensions
     * @private
     */
    var FeaturedSplash = {
        /** @var {Number} - Maximum turnaround of the image (in degrees) */
        degree: 20,

        /** @var {Boolean} - Prevent multiple event listener addition */
        initialized: false,

        /** @var {HTMLElement} - Wrapper element */
        wrap: undefined,

        /** @var {HTMLElement} - Node to be turn to mouse */
        item: undefined,

        init: function () {
            var self = this;

            if (self.initialized === true) {
                return;
            }
            self.initialized = true;
            self.wrap = document.getElementById('header');
            self.item = document.getElementById('screen');

            self.wrap.addEventListener('mousemove', self.refresh, false);
        },

        refresh: function (e) {
            var p = FeaturedSplash.getDimensions();
            var i = FeaturedSplash.item;

            FeaturedSplash.setTransform(i, {
                x: FeaturedSplash.getX(e.pageX, p),
                y: FeaturedSplash.getY(e.pageY, p)
            });
        },

        round: function (number) {
            return (~~ (number * 1E3) | 0) * .001;
        },

        setTransform: function (node, rotate) {
            node.style[_rule] = [
                ['rotateY(', rotate.x, 'deg)'].join(''),
                ['rotateX(', rotate.y, 'deg)'].join('')
            ].join(' ');
        },

        getDimensions: function () {
            var wrap = this.wrap;
            var item = this.item;

            return {
                wrap: {
                    w: wrap.offsetWidth,
                    h: wrap.offsetHeight,
                    x: wrap.offsetLeft,
                    y: wrap.offsetTop
                },
                item: {
                    x: item.offsetLeft + ~~(item.offsetWidth * .5),
                    y: item.offsetTop + ~~(item.offsetHeight * .5)
                }
            };
        },

        getX: function (x, dimensions) {
            var base = this.degree;
            var wrap = dimensions.wrap;
            var item = dimensions.item;
            var data = 0;

            if (x < item.x) {
                data = (base - (base * x / item.x)) * -1;
            }
            if (x > item.x) {
                data = base * ((x - item.x) / (wrap.w - item.x));
            }
            return this.round(data);
        },

        getY: function (y, dimensions) {
            var base = this.degree;
            var wrap = dimensions.wrap;
            var item = dimensions.item;
            var data = 0;

            if (y < item.y) {
                data = (base - (base * y / item.y));
            }
            if (y > item.y) {
                data = base * ((y - item.y) / (wrap.h - item.y)) * -1;
            }
            return this.round(data);
        }
    };

    // Initializing components

    Parallax.init();
    FeaturedSplash.init();

})(window, document, void 0);