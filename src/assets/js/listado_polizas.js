//DATATABLE LISTADO POLIZAS VIGENTES
jQuery(document).ready(function ($) {
    addSpinner($('tbody'));
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            var estatus='1';
            $.ajax({
                url: dominio + 'listarpolizavigencia/' + rutLogueado+ '/' + estatus,
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
   
              let dataTablePolizasVigentes = $('#informePolizasVigentes').DataTable({
              destroy: true,
              data: resp,
              responsive: true,
              info: false,
              buttons: {
              name: 'excel',
              buttons: [
                {
                    extend: 'excel',
                    text: '<i class="renta-icon-excel"></i>Excel',
                    className: 'btn-excel mr-2',
                    filename: 'Informe de pólizas vigentes.xls'
                }
             ],
            },
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
        columns: [
            {
                data: null,
                //className: "uniqueClassName",
                render: function(data, type, row) {
                    if(data.nombre_cliente!=null){
                        return data.nombre_cliente + ' ' + data.apellido_cliente;
                    }
                    else{
                        return data.razon_social;
                    }
                    
                }
            },
            {
                data: null,
                //className: "uniqueClassName",
                render: function(data, type, row) {
                    return data.rut_cliente+'-'+data.dig_ver_cliente;
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
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                    return data.telefono;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.id_poliza+'-'+data.item;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.prima;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return `<i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title='Póliza'></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title='Endoso'></i>`;
                }
            },      
        ]
  
    });
    new $.fn.dataTable.Buttons(dataTablePolizasVigentes, {
        name: 'colvis',
        buttons: [
            {
                extend: 'columnVisibility',
                text: 'Mostrar Todo',
                className: 'btn-primary',
                visibility: true
            },
            {
                extend: 'colvis',
                text: 'Seleccionar'
            }
        ],
    });

    dataTablePolizasVigentes.buttons('excel', 0).containers().prependTo($('#polizasVigentes .dataTables_length'));
    dataTablePolizasVigentes.buttons('colvis', 0).containers().appendTo($('.colvisBtns-polizas-vigentes'));

    document.querySelector('#polizasVigentes .buttons-excel span').classList.add('d-flex', 'align-content-center');
    removeSpinner($('tbody'))
    },
      error: function(resp) {
      // var errors = [];
      removeSpinner($('tbody'))
   }
   
  });

});
$('#polizasVigentesTab').click(function() { 
    addSpinner($('tbody'));
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            var estatus='1';
            $.ajax({
                url: dominio + 'listarpolizavigencia/' + rutLogueado+ '/' + estatus,
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
   
              let dataTablePolizasVigentes = $('#informePolizasVigentes').DataTable({
              destroy: true,
              data: resp,
              responsive: true,
              info: false,
              buttons: {
              name: 'excel',
              buttons: [
                {
                    extend: 'excel',
                    text: '<i class="renta-icon-excel"></i>Excel',
                    className: 'btn-excel mr-2',
                    filename: 'Informe de pólizas vigentes.xls'
                }
             ],
            },
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
        columns: [
            {
                data: null,
                //className: "uniqueClassName",
                render: function(data, type, row) {
                    if(data.nombre_cliente!=null){
                        return data.nombre_cliente + ' ' + data.apellido_cliente;
                    }
                    else{
                        return data.razon_social;
                    }
                }
            },
            {
                data: null,
                //className: "uniqueClassName",
                render: function(data, type, row) {
                    return data.rut_cliente+'-'+data.dig_ver_cliente;
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
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                    return data.telefono;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.id_poliza+'-'+data.item;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.prima;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return `<i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title='Póliza'></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title='Endoso'></i>`;
                }
            },      
        ]
  
    });
    new $.fn.dataTable.Buttons(dataTablePolizasVigentes, {
        name: 'colvis',
        buttons: [
            {
                extend: 'columnVisibility',
                text: 'Mostrar Todo',
                className: 'btn-primary',
                visibility: true
            },
            {
                extend: 'colvis',
                text: 'Seleccionar'
            }
        ],
    });

    dataTablePolizasVigentes.buttons('excel', 0).containers().prependTo($('#polizasVigentes .dataTables_length'));
    dataTablePolizasVigentes.buttons('colvis', 0).containers().appendTo($('.colvisBtns-polizas-vigentes'));

    document.querySelector('#polizasVigentes .buttons-excel span').classList.add('d-flex', 'align-content-center');
    removeSpinner($('tbody'))
    },
      error: function(resp) {
      // var errors = [];
      removeSpinner($('tbody'))
   }
   
  });

});
$('#polizasNoVigentesTab').click(function() { 
    addSpinner($('tbody'));
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            var estatus='0';
            $.ajax({
                url: dominio + 'listarpolizavigencia/' + rutLogueado+ '/' + estatus,
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
              let dataTablePolizasNoVigentes = $('#informePolizasNoVigentes').DataTable({
              destroy: true,
              data: resp,
              responsive: true,
              info: false,
              buttons: {
              name: 'excel',
              buttons: [
                {
                    extend: 'excel',
                    text: '<i class="renta-icon-excel"></i>Excel',
                    className: 'btn-excel mr-2',
                    filename: 'Informe de pólizas no vigentes.xls'
                }
             ],
            },
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
        columns: [
            {
                data: null,
                //className: "uniqueClassName",
                render: function(data, type, row) {
                    // Combinar campos
                    return data.nombre_cliente + ' ' + data.apellido_cliente;
                }
            },
            {
                data: null,
                //className: "uniqueClassName",
                render: function(data, type, row) {
                    return data.rut_cliente+'-'+data.dig_ver_cliente;
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
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                    return data.telefono;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.id_poliza+'-'+data.item;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.prima;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return `<i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Póliza"></i><i class="renta-icon-file-downlaod text-primary" data-toggle="tooltip" data-placement="top" data-original-title="Endoso"></i>`;
                }
            },      
        ]
  
    });
    new $.fn.dataTable.Buttons(dataTablePolizasNoVigentes, {
        name: 'colvis',
        buttons: [
            {
                extend: 'columnVisibility',
                text: 'Mostrar Todo',
                className: 'btn-primary',
                visibility: true
            },
            {
                extend: 'colvis',
                text: 'Seleccionar'
            }
        ],
    });

    dataTablePolizasNoVigentes.buttons('excel', 0).containers().prependTo($('#polizasNoVigentes .dataTables_length'));
    dataTablePolizasNoVigentes.buttons('colvis', 0).containers().appendTo($('.colvisBtns-polizas-no-vigentes'));

    document.querySelector('#polizasNoVigentes .buttons-excel span').classList.add('d-flex', 'align-content-center');
    removeSpinner($('tbody'))
    },
      error: function(resp) {
      // var errors = [];
      removeSpinner($('tbody'))
   }
   
  });

});

//CHANGE LISTADO DE POLIZAS SUBTITLE BASED ON NAV PILL SELECTED
jQuery(document).ready(function ($) {
    let polizasVigenteTab = document.querySelector('#polizasVigentesTab');
    let polizasNoVigentesTab = document.querySelector('#polizasNoVigentesTab');
    let headerTitle = document.querySelector('.header-title--big');

    polizasVigenteTab.addEventListener('click', () => {changeTitle('Pólizas Vigentes')});
    polizasNoVigentesTab.addEventListener('click', () => {changeTitle('Pólizas No Vigentes')});

    function changeTitle(title) {
        headerTitle.innerHTML = title;
    }
});

function addSpinner(el, static_pos)
{
  var spinner = el.children('.spinner');
  if (spinner.length && !spinner.hasClass('spinner-remove')) return null;
  !spinner.length && (spinner = $('<div class="spinner' + (static_pos ? '' : ' spinner-absolute') + '"/>').appendTo(el));
  animateSpinner(spinner, 'add');
}

function removeSpinner(el, complete)
{
  var spinner = el.children('.spinner');
  spinner.length && animateSpinner(spinner, 'remove', complete);
}

function animateSpinner(el, animation, complete)
{
  if (el.data('animating')) {
    el.removeClass(el.data('animating')).data('animating', null);
    el.data('animationTimeout') && clearTimeout(el.data('animationTimeout'));
  }
  el.addClass('spinner-' + animation).data('animating', 'spinner-' + animation);
  el.data('animationTimeout', setTimeout(function() { animation == 'remove' && el.remove(); complete && complete(); }, parseFloat(el.css('animation-duration')) * 1000));
}


