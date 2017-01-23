// ==============================================================
// VS 0.1
// Immediately-Invoked Functional Expression (IIFE) to suport
// Author: Rodrigo Martins Silva
// Date Development: 01/22/2017
// ==============================================================

(function($) {
    'use strict'

    var defaults = {};


    $.fn.formfirevalidate = function(options) {

        var bool = true;
        var settings = null;
        var arrSettings = [];

        //enum tipos

        var tiposEnum = {
            typeText: "1",
            typeRadio: "2",
            typeCheckbox: "3",
        };
        Object.freeze(tiposEnum);

        var settings = $.extend({
            field: "TESTE",
            location: 'top',
            backgroundColor: 'blue',
            validateCNPJ: false
        }, options);

        $.each(options, function(i) {

            settings = $.extend({
                field: null,
                location: 'top',
                backgroundColor: 'blue',
                validateCNPJ: false
            }, options[i]);

            arrSettings.push(settings);
        });

        console.log('arrSettings', arrSettings);

        // $.each(this.find(':input'), function() {

        //     var element = $(this);


        //     $.each(settings, function(i) {

        //         // if (settings[i].field == element.attr("id")) {

        //         //     console.log('field: ', settings[i].field);
        //         //     console.log('location: ', settings[i]);

        //         // }
        //     });

        //     // if (element.attr("id") == settings.field) {
        //     //     // console.log("identificado CNPJ", element.attr("id"));

        //     //     // console.log("settings.validateCNPJ: ", settings.validateCNPJ);

        //     //     if (settings.validateCNPJ) {
        //     //         element.select();
        //     //         return false;
        //     //     };

        //     //     console.log("passou aqui");
        //     // };


        //     // if (element.attr("id") == settings.field) {
        //     //     // console.log("identificado CNPJ", element.attr("id"));

        //     //     // console.log("settings.validateCNPJ: ", settings.validateCNPJ);

        //     //     if (settings.validateCNPJ) {
        //     //         element.select();
        //     //         return false;
        //     //     };

        //     //     console.log("passou aqui");
        //     // };
        // })

        return bool;
    };

})(jQuery);