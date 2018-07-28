// Example.js
// Main.js

;(function($){
  
  var onChange = function onChange(evt) {
    var $target = $(evt.target);
    var isChecked = $target.is(':checked');

    $('.grid-overlay').toggleClass('active', isChecked);
  };

  var init = function() {
    var $tooltips = $('[data-toggle="tooltip"]').tooltip(),   
      $controller = $('.controller').on('change', 'input', onChange)
      $sources = $('.source');

    $controller.toggleClass('active');

    $sources.each(function() {
      var $source = $(this);
      $('.grid-overlay', $source).css({ height: $source.height() });
    });
  };
  
  // listen for window load event to ensure all images have loaded
  
  $(window).on('load', init);
})(window.jQuery);
//# sourceMappingURL=main.js.map
