(function($) {
    "use strict";
    
    /*--
    Select Stick
    -----------------------------------*/
    $('select').select2();
    $('b[role="presentation"]').hide();
    $('.select2-selection__arrow').append('<i class="icofont-simple-down"></i>');

})(jQuery);