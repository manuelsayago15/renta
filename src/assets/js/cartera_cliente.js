jQuery(document).ready(function($) {
    const clienteHistorialButton = document.querySelector('#clienteHistorialButton');
    const clienteComentarioButton = document.querySelector('#clienteComentarioButton');
    const clienteRegresarButtons = document.querySelectorAll('.cliente-regresar-btn');
    const datosCliente = document.querySelector('#datosCliente');
    const clienteHistorial = document.querySelector('#clienteHistorial');
    const clienteComentario = document.querySelector('#clienteComentario');
    const verCliente = document.querySelector('#verCliente');

    clienteHistorialButton.addEventListener('click', showHistorial);
    clienteComentarioButton.addEventListener('click', showComentarios);
    for (let regresarBtn of clienteRegresarButtons) {
        regresarBtn.addEventListener('click', showDatos);
    }

    function showHistorial() {
        datosCliente.classList.add('d-none');
        clienteComentario.classList.add('d-none');
        clienteHistorial.classList.remove('d-none');
        verCliente.classList.add('d-none');
    }

    function showComentarios() {
        datosCliente.classList.add('d-none');
        clienteComentario.classList.remove('d-none');
        clienteHistorial.classList.add('d-none');
        verCliente.classList.add('d-none');
    }

    function showDatos() {
        datosCliente.classList.remove('d-none');
        clienteComentario.classList.add('d-none');
        clienteHistorial.classList.add('d-none');
        verCliente.classList.remove('d-none');
    }
});
$('#regresarLista').click(function() {

    window.location = '../page-cartera/listar-clientes.html';

});

//DATATABLE CARTERA DE CLIENTES
/*jQuery(document).ready(function ($) {
    let dataTableCarteraClientes = $('#carteraClientes').DataTable({
        responsive: true,
        bLengthChange: false,
        bInfo: false,
        language: {
            processing: "Procesando...",
            search: "Buscar:",
            lengthMenu: "Mostrar _MENU_ registros",
            info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
            infoFiltered: "(filtrado de un total de _MAX_ registros)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron resultados",
            emptyTable: "Ningún dato disponible en esta tabla.",
            aria: {
                sortAscending: ": Activar para ordenar la columna de manera ascendente",
                sortDescending: ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
});*/

//DATATABLE HISTORIAL DEL CLIENTE
jQuery(document).ready(function($) {
    let dataTableHistorialCliente = $('#historialCliente').DataTable({
        responsive: true,
        bLengthChange: false,
        bInfo: false,
        bFilter: false,
        language: {
            processing: "Procesando...",
            search: "Buscar:",
            lengthMenu: "Mostrar _MENU_ registros",
            info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
            infoFiltered: "(filtrado de un total de _MAX_ registros)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron resultados",
            emptyTable: "Ningún dato disponible en esta tabla.",
            aria: {
                sortAscending: ": Activar para ordenar la columna de manera ascendente",
                sortDescending: ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
});
//DATATABLE COMENTARIOS DEL CLIENTE
jQuery(document).ready(function($) {
    let dataTableComentariosCliente = $('#comentariosCliente').DataTable({
        responsive: true,
        bLengthChange: false,
        bInfo: false,
        bFilter: false,
        language: {
            processing: "Procesando...",
            search: "Buscar:",
            lengthMenu: "Mostrar _MENU_ registros",
            info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
            infoFiltered: "(filtrado de un total de _MAX_ registros)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron resultados",
            emptyTable: "Ningún dato disponible en esta tabla.",
            aria: {
                sortAscending: ": Activar para ordenar la columna de manera ascendente",
                sortDescending: ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
});



jQuery(document).ready(function($) {
    addSpinner($('tbody'));
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0)
        window.location = './index.html';
    rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));

    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

    $.ajax({
        url: dominio + 'listarcarteraclientes/' + rutLogueado,
        dataType: 'json',
        type: 'GET',
        data: {
            token: token
        },
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function(resp) {
            console.log(resp)
            let dataTableCarteraClientes = $('#carteraClientes').DataTable({
                destroy: true,
                data: resp,
                responsive: true,
                info: false,
                bLengthChange: false,
                bInfo: false,
                aaSorting: [
                    [1, "asc"],
                    //[0, "asc"]
                ],

                buttons: [
                    { extend: 'colvisRestore', text: 'Mostrar Todo', className: 'btn-primary' },
                    { extend: 'colvis', text: 'Seleccionar' }
                ],
                language: {
                    processing: "Procesando...",
                    search: "Buscar:",
                    lengthMenu: "Mostrar _MENU_ registros",
                    info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
                    infoFiltered: "(filtrado de un total de _MAX_ registros)",
                    infoPostFix: "",
                    loadingRecords: "Cargando...",
                    zeroRecords: "No se encontraron resultados",
                    emptyTable: "Ningún dato disponible en esta tabla.",

                    paginate: {
                        first: "Primera",
                        previous: "Anterior",
                        next: "Siguiente",
                        last: "Última"
                    },
                    aria: {
                        sortAscending: ": Activar para ordenar la columna de manera ascendente",
                        sortDescending: ": Activar para ordenar la columna de manera descendente"
                    }
                },
                columns: [{
                        data: null,
                        className: "uniqueClassName",
                        render: function(data, type, row) {
                            return data.rut_cliente + '-' + data.dig_ver_cliente;
                        }
                    },
                    {
                        data: null,
                        render: function(data, type, row) {
                            // Combinar campos
                            return `<a class="text-primary underline" href="../page-cartera/ver-cliente.html">` + data.nombre_cliente + ' ' + data.apellido_cliente + `</a>`;
                        }
                    },
                    {
                        data: null,
                        className: "uniqueClassName",
                        render: function(data, type, row) {

                            return data.telefono;

                        }
                    },
                    {
                        data: null,
                        className: "uniqueClassName",
                        render: function(data, type, row) {

                            return data.celular;

                        }
                    },
                    {
                        data: null,
                        className: "uniqueClassName",
                        render: function(data, type, row) {

                            return data.email;

                        }
                    },
                    {
                        data: null,
                        render: function(data, type, row) {

                            return data.calle_dir_cont + ' ' + data.num_dir_cont;

                        }
                    },
                    {
                        data: null,
                        className: "uniqueClassName",
                        render: function(data, type, row) {

                            return `<a href="../page-cartera/ver-cliente.html"><i class="renta-icon-eye text-primary"></i></a>`;


                        }
                    },
                ]

            });

            dataTable.buttons().container().appendTo($('.colvis-btns'));
            removeSpinner($('tbody'))
        },
        error: function(resp) {
            // var errors = [];
            removeSpinner($('tbody'))
        }
    });
});

function edita_fecha(fecha) {
    var fn = fecha.split("-");
    return fn[2] + "-" + fn[1] + "-" + fn[0];
}


function addSpinner(el, static_pos) {
    var spinner = el.children('.spinner');
    if (spinner.length && !spinner.hasClass('spinner-remove')) return null;
    !spinner.length && (spinner = $('<div class="spinner' + (static_pos ? '' : ' spinner-absolute') + '"/>').appendTo(el));
    animateSpinner(spinner, 'add');
}

function removeSpinner(el, complete) {
    var spinner = el.children('.spinner');
    spinner.length && animateSpinner(spinner, 'remove', complete);
}

function animateSpinner(el, animation, complete) {
    if (el.data('animating')) {
        el.removeClass(el.data('animating')).data('animating', null);
        el.data('animationTimeout') && clearTimeout(el.data('animationTimeout'));
    }
    el.addClass('spinner-' + animation).data('animating', 'spinner-' + animation);
    el.data('animationTimeout', setTimeout(function() { animation == 'remove' && el.remove();
        complete && complete(); }, parseFloat(el.css('animation-duration')) * 1000));
}