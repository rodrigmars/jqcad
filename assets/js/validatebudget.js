(function($) {

    "use strict";

    $(function() {

        $('#cnpj').mask('00.000.000/0000-00', { reverse: true })
            .on("click", function(e) {
                e.stopPropagation();
                this.select();
            }).on("keypress", function(e) {
                if (e.which == 13 || e.keyCode == 13) {};
            });

        var form = $("form[name='frmCadastro']");

        var fields = {
            razaoSocial: $("#razaoSocial"),
            idade: $("#idade"),
            cnpj: $("#cnpj"),
        };

        function LockKeyBoard(e, regExp) {
            if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
                // Allow: Ctrl+A
                (e.keyCode == 65 && e.ctrlKey === true) ||
                // Allow: home, end, left, right
                (e.keyCode >= 35 && e.keyCode <= 39)) return true;

            var code = e.charCode || e.keyCode;
            var charValue = String.fromCharCode(code);
            return regExp.test(charValue);
        };

        fields.razaoSocial.on("keypress", function(e) {
            if (!LockKeyBoard(e, /^[a-zA-Z0-9\s.\-_']+$/i)) e.preventDefault();
        }).on("click", function(e) {
            e.stopPropagation();
            this.select();
        });

        fields.idade.on("keypress", function(e) {
            if (!LockKeyBoard(e, /^[0-9]+$/)) e.preventDefault();
        }).on("click", function(e) {
            e.stopPropagation();
            this.select();
        });

        $.validator.addMethod("AlphaNumericCharacters", function(value, element) {
            return this.optional(element) || /^[a-zA-Z0-9\s.\-_']+$/i.test(value);
        }, "Informe apenas caracteres válidos como letras e números.");

        $.validator.addMethod("ValidateEmail", function(value, element) {
            return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);
        }, "Informe um E-mail válido.");

        $.validator.addMethod("password", function(value, element) {
            return this.optional(element) || /^[A-Za-z0-9!@#$%^&*()_]{6,16}$/i.test(value);
        }, "A senha deve ter entre 6-8 caracteres.");

        // $.validator.addMethod("notEqual", function(value, element, param) {
        //     return this.optional(element) || value == param;
        // }, "Senha incorreta.");

        $.validator.addMethod("cnpj", function(value, element) {
            $("small[id-help='cnpj']").text("").css("color", "");
            return $(element).validacpfcnpj();

        }, "CNPJ inválido!");

        // $.validator.setDefaults({
        //     onkeyup: function(element) {
        //         if (element.name == fields.cnpj.attr("id")) {
        //             return false;
        //         }
        //     }
        // });

        form.validate({
            debug: false,
            errorElement: 'small',
            errorLabelContainer: '.has-error',
            rules: {
                razaoSocial: {
                    required: true,
                    minlength: 5,
                    maxlength: 100,
                    AlphaNumericCharacters: true
                },
                cnpj: {
                    required: true,
                    cnpj: true,
                },
                email: {
                    required: true,
                    email: true,
                },
                idade: {
                    required: true,
                    digits: true,
                },
            },
            messages: {
                razaoSocial: {
                    required: "Campo obrigatório.",
                    minlength: "Mínimo de {0} caracteres permitidos.",
                    maxlength: "Máximo de {0} caracteres permitidos.",
                },
                cnpj: {
                    required: "CNPJ obrigatório."
                },
                email: {
                    required: "Campo obrigatório.",
                    email: "Informe um E-mail válido."
                },
                idade: {
                    required: "Campo obrigatório.",
                    digits: "Informe apenas números.",
                }
            },
        });

        $("#btnConfirma").on("click", function() {

            if (form.valid()) {

                $.ajax({
                    url: '',
                    type: 'POST',
                    data: new FormData(form.get(0)),
                    processData: false,
                    contentType: false,
                }).done(function(data) {

                    console.log("Cadastro realizado com sucesso", data);

                }).fail(function(data) {
                    console.log("Ocorreu um erro", data);

                }).always(function() {
                    console.log("Ocorreu um erro", data);
                });
            };

        });
    });
})(jQuery);