(function ($) {
  'use strict';
  $('document').ready(function () {
    setTimeout(() => {
      document.getElementById('root').requestFullscreen();
    }, 3000);
    $('#aside').on('shown.bs.modal', function () {
      $('body').removeClass('modal-open').find('.modal-backdrop').remove();
    })
  })
})(jQuery);
