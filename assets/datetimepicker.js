(function($) {
    $.widget('neuralquery.datetimepickerproxy', {
        
        options: {
            timestamp: false
        },
        
        _create: function() {
            var me = this;
            
            var input = $('<input/>')
                .attr('type', 'text')
                .attr('value', this.element.val())
                .insertAfter(this.element);
            
            input.datetimepicker(this.options);
            
            this.picker = input.data('DateTimePicker');
            
            input.on('change', function() {
                me.changed(me.picker.getDate());
            });
            
            input.on('dp.change', function() {
                me.changed(me.picker.getDate());
            });
            
            this.set(this.element.val());
        },
        
        set: function(value) {
            if (value) {
                if (this.options.timestamp) {
                    this.picker.setDate(moment.unix(parseInt(value)));
                } else {
                    this.picker.setDate(moment(value, this.options.format));
                }
            }
        },
        
        changed: function(moment) {
            this.element.val('');
            
            console.log(moment);
            
            if (moment) {
                this.element.val(moment.format(this.options.format));
                
                if (this.options.timestamp) {
                    this.element.val(moment.unix());
                }
            }
        }
        
    });
    
    window.neuralquery_datetimepicker_initialize = function(field) {
        $(':input[name="' + field.name + '"]').each(function() {
            if (!$(this).hasClass('hasDateTimePicker')) {
                $(this).addClass('hasDateTimePicker');
                $(this).datetimepickerproxy(field.options);
            }
        });
        
        if (field.other_js_callback) {
            window[field.other_js_callback](field);
        }
    };
})(jQuery);