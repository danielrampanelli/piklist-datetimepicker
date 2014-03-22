(function($) {
    window.neuralquery_datetimepicker_initialize = function(field) {
        $(':input[name="' + field.name + '"]').each(function() {
            if (!$(this).hasClass('hasDateTimePicker')) {
                $(this).addClass('hasDateTimePicker');
                $(this).datetimepicker($.extend({}, field.options));
            }
        });
        
        if (field.other_js_callback) {
            window[field.other_js_callback](field);
        }
    };
})(jQuery);