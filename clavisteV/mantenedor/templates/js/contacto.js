$(document).ready(function () {
    $('form[name="formContacto"]')
        .validate({
            errorElement: 'span',
            errorPlacement: function (error, element) {
                error.addClass('invalid-feedback');
                element.closest('.form-group').append(error);
            },
            highlight: function (element, errorClass, validClass) {
                $(element).addClass('is-invalid');
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass('is-invalid');
            },
            rules: {
                txtNombre: {
                    required: true
                },
                txtEmail: {
                    required: true,
                    email: true
                },
                txttel: {
                    required: true,
                    tel: true
                }
            },
            messages: {
                txtNombre: {
                    required: 'El campo del nombre es requerido'
                },
                txtEmail: {
                    required: 'El campo del correo es requerido',
                    email: 'El campo del correo no tiene un formato válido de correo'
                },
                txttel: {
                    required: 'El campo del fono es requerido',
                    tel: 'El campo del fono no tiene un formato válido de correo'
                }
            }
        })
})