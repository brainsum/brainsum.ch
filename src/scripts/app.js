/* globals window, document */
(function (window, document) {
  "use strict";

  /**
   * Config object, for general settings.
   * @type {Object}
   */
  var _ = {
    /**
     * The lower this is, the faster the background scrolls.
     * @type {Number}
     */
    divider: 20,

    /**
     * Reference to the background element.
     * @type {Node}
     */
    elem: document.getElementById('parallax-back'),

    /**
     * Initialize offset variable, which will be updated onscroll.
     * @type {Float}
     */
    offset: null
  };

  window.onscroll = function() {
    _.offset = window.pageYOffset;
    _.elem.style.marginTop = (_.offset / _.divider) + "px";
  };

  /**
   * [MODULE] FEATURED-SPLASH
   *
   * Follows the mouse to face it in 3 dimensions
   */
  var FeaturedSplash = {
    /** @var {HTMLElement} - Container element to relative to */
    container: undefined,

    /** @var {HTMLElement} - Image which should transforms by mouse */
    image: undefined,

    init: function () {
      this.container = document.getElementById('header');
      this.image = document.getElementById('screen');

      console.log(this.container.offsetWidth, this.container.offsetHeight);
    }
  };

  // Appending event listeners

  FeaturedSplash.init();

})(window, document);