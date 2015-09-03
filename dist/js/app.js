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
    divider: 10,

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

})(window, document);