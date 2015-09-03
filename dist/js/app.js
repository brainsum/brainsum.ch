(function (window, document) {
  "use strict";

  window.onscroll = function() {
    // holds the number of pixels from the top of the page
    // that the viewport is currently at (as in, if you scroll
    // down ten pixels from the top, this value is 10)
    var offset = window.pageYOffset,
        divider = 10,
        back = document.getElementById('parallax-back');

    // set the top margin of the cover image to the offset divided
    // by some value. For example, below, for evert 1.5 pixels
    // the main content moves, the image moves one
    back.style.marginTop = (offset / divider) + "px";
  };

})(window, document);