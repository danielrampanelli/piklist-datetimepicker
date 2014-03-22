(function($) {
    window.neuralquery_datetimepicker_initialize = function(field) {
        $('.hasDateTimePicker').each(function() {
            $(this).removeClass('hasDateTimePicker');
            $(this).datetimepicker({
                pick12HourFormat: false,
                sideBySide: true
            });
        });
    };
})(jQuery);