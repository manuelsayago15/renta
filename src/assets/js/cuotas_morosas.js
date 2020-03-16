$(function() {
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = '../index.html';
    nombreLogueado = JSON.parse(window.localStorage.getItem('nombre_logueado'));
    $('#nombre_itermediario').html(nombreLogueado);
   // alert(nombreLogueado)
    rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
    var num=10;
    $.ajax({
        url: dominio + 'fechacortecuotasmorosas/' + rutLogueado,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            
            $('#fecha_corte').html(edita_fecha(resp.data[0].fecha_corte));
        },
        error: function(resp) {
            console.log(resp)
        }
    });

});
function edita_fecha2(fecha) {
    var fn = fecha.split("-");
    return fn[2] + "-" + fn[1] + "-" + fn[0];
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

// //DATATABLE INFORME DE CUOTAS MOROSAS
jQuery(document).ready(function ($) {
   
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            
            $.ajax({
                url: dominio + 'listarcuotasmorosas/' + rutLogueado,
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
                let dataTableInformecuotasMorosas = $('#informeCuotasMorosas').DataTable({
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
                                    filename: 'Informe de cuotas morosas.xls'
                                }
                            ],
                        },
                        columnDefs: [
                            {
                                targets: [8], //Colocar aquí el índice de las columnas que se desean ocultar por defecto
                                visible: false
                            }
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
                                    return data.nombre_pagador;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.num_cuota;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return edita_fecha2(data.fecha_vecto);
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.dias_morosidad;
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
                                    
                                        return data.rut_pagador+"-"+data.dig_ver_pagador;
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
                                    
                                  return `<a class="enviar-correo-cliente-moroso-btn" href="" data-toggle="modal" data-target=".email-modal"><i class="renta-icon-enviar text-primary"></i></a>`
                                    
                                }
                            },
                            
                        ]
        
             });
             new $.fn.dataTable.Buttons(dataTableInformecuotasMorosas, {
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
                        text: 'Seleccionar',
                    }
                ],
            });
        
            dataTableInformecuotasMorosas.buttons('excel', 0).containers().prependTo($('.dataTables_length'));
            dataTableInformecuotasMorosas.buttons('colvis', 0).containers().appendTo($('.colvisBtns'));
            document.querySelector('.buttons-excel span').classList.add('d-flex', 'align-content-center');
        
        
           //dataTable.buttons().container().appendTo($('.colvis-btns'));
          removeSpinner($('tbody'))
         },
         error: function(resp) {
             // var errors = [];
              removeSpinner($('tbody'))
         }
    });
});

//SHOW MODAL ON INFORME DE CUOTAS MOROSAS
jQuery(document).ready(function ($) {
    $('#informeCuotasMorosas').click(showModal);

    function showModal(e) {
        e.preventDefault();
        if(e.target.classList.contains('renta-icon-enviar')) {
            let clientName = e.target.parentElement.parentElement.parentElement.children[1].innerHTML;
            let montoMoroso = e.target.parentElement.parentElement.parentElement.children[6].innerHTML;
            $('.email-client-name').append(clientName);
            $('.monto-moroso').append(montoMoroso);
        }
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

