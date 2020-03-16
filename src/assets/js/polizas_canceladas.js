//DATATABLE INFORME PROPUESTAS DE CANCELACIÓN
jQuery(document).ready(function ($) {
    addSpinner($('tbody'));
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            var estatus='0';
            $.ajax({
                url: dominio + 'listarcancelaciones/' + rutLogueado+ '/' + estatus,
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
             let dataTableInformePropuestasCancelacion = $('#informePropuestasCancelacion').DataTable({
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
                    filename: 'Informe de propuestas de cancelacion.xls'
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
                    return data.id_poliza + '-' + data.item;
                }
            },
            {
                data: null,
                //className: "uniqueClassName",
                render: function(data, type, row) {
                    return data.moneda;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.monto;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                    return data.cuota;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.nombre_asegurado;
                }
            },  
        ]
  
    });
    new $.fn.dataTable.Buttons(dataTableInformePropuestasCancelacion, {
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

    dataTableInformePropuestasCancelacion.buttons('excel', 0).containers().prependTo($('#propuestasCancelacion .dataTables_length'));
    dataTableInformePropuestasCancelacion.buttons('colvis', 0).containers().appendTo($('.colvisBtns-propuestas-cancelacion'));

    document.querySelector('#propuestasCancelacion .buttons-excel span').classList.add('d-flex', 'align-content-center');
    //dataTable.buttons().container().appendTo($('.colvis-btns'));
    removeSpinner($('tbody'))
   },
   error: function(resp) {
    // var errors = [];
     removeSpinner($('tbody'))
   }
  });
    fecha_corte(0);
});
$('#propuestasCancelacionTab').click(function() { 
    addSpinner($('tbody'));
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            var estatus='0';
            $.ajax({
                url: dominio + 'listarcancelaciones/' + rutLogueado+ '/' + estatus,
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
             let dataTableInformePropuestasCancelacion = $('#informePropuestasCancelacion').DataTable({
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
                    filename: 'Informe de propuestas de cancelacion.xls'
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
                    return data.id_poliza + '-' + data.item;
                }
            },
            {
                data: null,
                //className: "uniqueClassName",
                render: function(data, type, row) {
                    return data.moneda;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.monto;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                    return data.cuota;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.nombre_asegurado;
                }
            },  
        ]
  
    });
    new $.fn.dataTable.Buttons(dataTableInformePropuestasCancelacion, {
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

    dataTableInformePropuestasCancelacion.buttons('excel', 0).containers().prependTo($('#propuestasCancelacion .dataTables_length'));
    dataTableInformePropuestasCancelacion.buttons('colvis', 0).containers().appendTo($('.colvisBtns-propuestas-cancelacion'));

    document.querySelector('#propuestasCancelacion .buttons-excel span').classList.add('d-flex', 'align-content-center');
    //dataTable.buttons().container().appendTo($('.colvis-btns'));
    removeSpinner($('tbody'))
   },
   error: function(resp) {
    // var errors = [];
     removeSpinner($('tbody'))
   }
  });
    fecha_corte(0);
});

$('#polizasCanceladasTab').click(function() { 
    addSpinner($('tbody'));
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            var estatus='1';
            $.ajax({
                url: dominio + 'listarcancelaciones/' + rutLogueado+ '/' + estatus,
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
            let dataTableInformePolizasCanceladas = $('#informePolizasCanceladas').DataTable({  
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
                    filename: 'Informe de pólizas canceladas.xls'
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
                    return data.id_poliza + '-' + data.item;
                }
            },
            {
                data: null,
                //className: "uniqueClassName",
                render: function(data, type, row) {
                    return data.pagador;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.cuota;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                    return data.vencimiento;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.dias;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.moneda;
                }
            }, 
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.valor_cuota;
                }
            },
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.rut_pagado+"-"+data.dig_ver_pagado;
                }
            }, 
            {
                data: null,
                className: "uniqueClassName",
                render: function(data, type, row) {
                    
                        return data.telefono;
                }
            },        
        ]
  
    });
    new $.fn.dataTable.Buttons(dataTableInformePolizasCanceladas, {
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

    dataTableInformePolizasCanceladas.buttons('excel', 0).containers().prependTo($('#polizasCanceladas .dataTables_length'));
    dataTableInformePolizasCanceladas.buttons('colvis', 0).containers().appendTo($('.colvisBtns-polizas-canceladas'));

    document.querySelector('#polizasCanceladas .buttons-excel span').classList.add('d-flex', 'align-content-center');
    //dataTable.buttons().container().appendTo($('.colvis-btns'));
    removeSpinner($('tbody'))
   },
   error: function(resp) {
    // var errors = [];
     removeSpinner($('tbody'))
   }
  });
    fecha_corte(1); 
});    

//CHANGE INFORME DE POLIZAS CANCELADAS SUBTITLE BASED ON NAV PILL SELECTED
jQuery(document).ready(function ($) {
    let propuestasCancelacionTab = document.querySelector('#propuestasCancelacionTab');
    let polizasCanceladasTab = document.querySelector('#polizasCanceladasTab');
    let headerTitle = document.querySelector('.header-title--big');

    polizasCanceladasTab.addEventListener('click', () => {changeTitle('Pólizas canceladas por no pago')});
    propuestasCancelacionTab.addEventListener('click', () => {changeTitle('Propuestas de cancelación')});

    function changeTitle(title) {
        headerTitle.innerHTML = title;
    }

});

function fecha_corte(n) {
    var estatus=n;
    //alert(estatus)
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = '../index.html';
    nombreLogueado = JSON.parse(window.localStorage.getItem('nombre_logueado'));
    $('#nombre_itermediario').html(nombreLogueado);

    rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
    
    $.ajax({
        url: dominio + 'fechacortecancelaciones/' + rutLogueado+ '/' + estatus,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            if(n=='0')
              $('#fecha_corte2').html(edita_fecha(resp.data[0].fecha_corte));
            if(n=='1')
              $('#fecha_corte3').html(edita_fecha(resp.data[0].fecha_corte));  
        },
        error: function(resp) {
            console.log(resp)
        }
    });

}

function edita_fecha(fecha) {
    var fn = fecha.split("-");
    if(fn[1]=='01')
      return fn[2] + " de enero de " + fn[0];
    if(fn[1]=='02')
      return fn[2] + " de febrero de " + fn[0];
    if(fn[1]=='03')
      return fn[2] + " de marzo de " + fn[0];
    if(fn[1]=='04')
      return fn[2] + " de abril de " + fn[0];
    if(fn[1]=='05')
      return fn[2] + " de mayo de " + fn[0];
    if(fn[1]=='06')
      return fn[2] + " de junio de " + fn[0];
    if(fn[1]=='07')
      return fn[2] + " de julio de " + fn[0];
    if(fn[1]=='08')
      return fn[2] + " de agosto de " + fn[0];
    if(fn[1]=='09')
      return fn[2] + " de septiembre de " + fn[0];
    if(fn[1]=='10')
      return fn[2] + " de octubre de " + fn[0]; 
    if(fn[1]=='11')
      return fn[2] + " de noviembre de " + fn[0];
    if(fn[1]=='12')
      return fn[2] + " de diciembre de " + fn[0]; 
}

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



