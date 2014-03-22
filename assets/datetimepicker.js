(function($) {
    window.neuralquery_datetimepicker_initialize = function(field) {
        $('.hasDateTimePicker').each(function() {
            $(this).removeClass('hasDateTimePicker');
            $(this).datetimepicker($.extend({}, field.options));
        });
        
        if (field.other_js_callback) {
            window[field.other_js_callback](field);
        }
    };
})(jQuery);