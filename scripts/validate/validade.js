(function($) {
    'use strict';
    $.fn.helpValidation = function(settings) {

        if (settings) {

            var fields = settings.params;

            $.each(fields, function(i) {
                console.log('settings', fields[i]);
            })

            console.log("firing settings", settings);
            return false;
        }

        console.log("passou aqui");

        return this.each(function() {
            console.log('field form', $(this));
        });

        return true;
    };
})(jQuery);