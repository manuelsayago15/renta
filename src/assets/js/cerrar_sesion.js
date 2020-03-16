$(document).ready(function() {

    var dominio = 'http://10.156.160.21:8000/api/';

    token = JSON.parse(window.localStorage.getItem('token'));

    if (token === 0) window.location = '../index.html';
    userData = JSON.parse(window.localStorage.getItem('rutLogueado'));
    //Envio de Formulario
    $('a#cerrar').on('click', function(e) {
        e.preventDefault();
        $.ajax({
            url: dominio + 'logout',
            dataType: 'json',
            type: 'POST',
            data: {
                token: token
            },
            success: function(resp) {
                window.localStorage.clear();
                window.location = '../index.html';
            },
            error: function(resp) {
                window.localStorage.clear();
                window.location = '../index.html';
            }
        });
    });
});