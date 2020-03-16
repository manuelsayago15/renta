jQuery(document).ready(function ($) {
    let polizasPorRenovarTab = document.querySelector('#polizasPorRenovarTab');
    let polizasRenovadasTab = document.querySelector('#polizasRenovadasTab');
    let polizasNoRenovadasTab = document.querySelector('#polizasNoRenovadasTab');
    let headerTitle = document.querySelector('.header-title--big');

    polizasPorRenovarTab.addEventListener('click', () => {changeTitle('Informe de pólizas por renovar')});
    polizasRenovadasTab.addEventListener('click', () => {changeTitle('Lista de pólizas renovadas')});
    polizasNoRenovadasTab.addEventListener('click', () => {changeTitle('Lista de pólizas no renovadas')});

    function changeTitle(title) {
        headerTitle.innerHTML = title;
    }

});
/*//DATATABLE INFORME PÓLIZAS POR RENOVAR
jQuery(document).ready(function ($) {
    let dataTableInformePolizasPorRenovar = $('#informePolizasPorRenovar').DataTable({
        responsive: true,
        info: false,
        buttons: {
            name: 'excel',
            buttons: [
                {
                    extend: 'excel',
                    text: '<i class="renta-icon-excel"></i>Excel',
                    className: 'btn-excel mr-2',
                    filename: 'Informe de pólizas por renovar.xls'
                }
            ],
        },
        columnDefs: [
            {
                targets: [9,10,11,12,13,14,15],
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
            aria: {
                sortAscending: ": Activar para ordenar la columna de manera ascendente",
                sortDescending: ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
    new $.fn.dataTable.Buttons(dataTableInformePolizasPorRenovar, {
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

    dataTableInformePolizasPorRenovar.buttons('excel', 0).containers().prependTo($('#polizasPorRenovar .dataTables_length'));
    dataTableInformePolizasPorRenovar.buttons('colvis', 0).containers().appendTo($('.colvisBtns-polizas-por-renovar'));

    document.querySelector('#polizasPorRenovar .buttons-excel span').classList.add('d-flex', 'align-content-center');
});

//DATATABLE INFORME PÓLIZAS RENOVADAS
jQuery(document).ready(function ($) {
    let dataTableInformePolizasRenovadas = $('#informePolizasRenovadas').DataTable({
        responsive: true,
        info: false,
        buttons: {
            name: 'excel',
            buttons: [
                {
                    extend: 'excel',
                    text: '<i class="renta-icon-excel"></i>Excel',
                    className: 'btn-excel mr-2',
                    filename: 'Informe de pólizas renovadas.xls'
                }
            ],
        },
        columnDefs: [
            {
                targets: [9,10,11,12,13,14,15],
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
            aria: {
                sortAscending: ": Activar para ordenar la columna de manera ascendente",
                sortDescending: ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
    new $.fn.dataTable.Buttons(dataTableInformePolizasRenovadas, {
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

    dataTableInformePolizasRenovadas.buttons('excel', 0).containers().prependTo($('#polizasRenovadas .dataTables_length'));
    dataTableInformePolizasRenovadas.buttons('colvis', 0).containers().appendTo($('.colvisBtns-polizas-renovadas'));

    document.querySelector('#polizasRenovadas .buttons-excel span').classList.add('d-flex', 'align-content-center');
});

//DATATABLE INFORME PÓLIZAS NO RENOVADAS
jQuery(document).ready(function ($) {
    let dataTableInformePolizasNoRenovadas = $('#informePolizasNoRenovadas').DataTable({
        responsive: true,
        info: false,
        buttons: {
            name: 'excel',
            buttons: [
                {
                    extend: 'excel',
                    text: '<i class="renta-icon-excel"></i>Excel',
                    className: 'btn-excel mr-2',
                    filename: 'Informe de pólizas no renovadas.xls'
                }
            ],
        },
        columnDefs: [
            {
                targets: [9,10,11,12,13,14,15],
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
            aria: {
                sortAscending: ": Activar para ordenar la columna de manera ascendente",
                sortDescending: ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
    new $.fn.dataTable.Buttons(dataTableInformePolizasNoRenovadas, {
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

    dataTableInformePolizasNoRenovadas.buttons('excel', 0).containers().prependTo($('#polizasNoRenovadas .dataTables_length'));
    dataTableInformePolizasNoRenovadas.buttons('colvis', 0).containers().appendTo($('.colvisBtns-polizas-no-renovadas'));

    document.querySelector('#polizasNoRenovadas .buttons-excel span').classList.add('d-flex', 'align-content-center');
});
*/



/*$(function() {
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

});*/
function edita_fecha2(fecha) {
    var fn = fecha.split("-");
    return fn[2] + "-" + fn[1] + "-" + fn[0];
}
/*function edita_fecha(fecha) {
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
}*/

// //DATATABLE INFORME DE CUOTAS MOROSAS
jQuery(document).ready(function ($) {
   
    $('#grilla').val(1);
    var fecha = new Date();
    var ano_actual = fecha.getFullYear();
    var mes_actual =fecha.getMonth()+1
    
    $("#anio option[value="+ ano_actual +"]").attr("selected",true);
    if((mes_actual>=1)&&(mes_actual<=9))
       $("#mes option[value="+ "0"+mes_actual +"]").attr("selected",true);
    else
    $("#mes option[value="+ mes_actual +"]").attr("selected",true);
    
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            var anio='*';
            var mes='*';
            $.ajax({
                url: dominio + 'listarpolizasporenovar/' + rutLogueado+ '/' + mes+ '/' + anio,
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
        
                let dataTableInformePolizasPorRenovar = $('#informePolizasPorRenovar').DataTable({    
                        destroy: true,
                        data: resp,
                        responsive: true,
                        bFilter: true,
                        bPaginate: true,
                        bInfo: true,
                        buttons: {
                            name: 'excel',
                            buttons: [
                                {
                                    extend: 'excel',
                                    text: '<i class="renta-icon-excel"></i>Excel',
                                    className: 'btn-excel mr-2',
                                    filename: 'Informe de polizas por renovar.xls'
                                }
                            ],
                        },
                        columnDefs: [
                            {
                                targets: [9,10,11,12,13,14,15],
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
                                    return data.rut_asegurado+"-"+data.dig_ver_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.nombre_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.nombre_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.id_plan;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.vigencia_inicio_poliza;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.vigencia_termino_poliza;
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
                                    
                                        return data.monto_asegurado;;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.prima_neta;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.cant_sini_liqui;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.mto_liqui;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.cant_sini_rese;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.mto_rese;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.via_pago;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.convenio;
                                    
                                }
                            },
                            
                        ]
        
             });
             new $.fn.dataTable.Buttons(dataTableInformePolizasPorRenovar, {
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
            dataTableInformePolizasPorRenovar.buttons('excel', 0).containers().prependTo($('#polizasPorRenovar .dataTables_length'));
            dataTableInformePolizasPorRenovar.buttons('colvis', 0).containers().appendTo($('.colvisBtns-polizas-por-renovar'));
            document.querySelector('#polizasPorRenovar .buttons-excel span').classList.add('d-flex', 'align-content-center');
        
        
           //dataTable.buttons().container().appendTo($('.colvis-btns'));
          removeSpinner($('tbody'))
         },
         error: function(resp) {
             // var errors = [];
              removeSpinner($('tbody'))
         }
    });
});

$('#polizasPorRenovarTab').click(function() { 
    addSpinner($('tbody'));
    $('#grilla').val(1);
    var fecha = new Date();
    var ano_actual = fecha.getFullYear();
    var mes_actual =fecha.getMonth()+1
    
    $("#anio option[value="+ ano_actual +"]").attr("selected",true);
    if((mes_actual>=1)&&(mes_actual<=9))
       $("#mes option[value="+ "0"+mes_actual +"]").attr("selected",true);
    else
    $("#mes option[value="+ mes_actual +"]").attr("selected",true);

    if((mes_actual>='1')&&(mes_actual<='9')){
        mes_actual="0"+ mes_actual;
    }
    
    if(($('#mes').val()==mes_actual)&&($('#anio').val()==ano_actual)){
        var anio='*';
        var mes='*';
    }
    else{
        var anio=$('#anio').val();
        var mes=$('#mes').val();
    }
    
    
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
            $.ajax({
                url: dominio + 'listarpolizasporenovar/' + rutLogueado+ '/' + mes+ '/' + anio,
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
               // $('#informePolizasPorRenovar').dataTable().fnClearTable();
               console.log(resp)
                let dataTableInformePolizasPorRenovar = $('#informePolizasPorRenovar').DataTable({
                    destroy: true,
                    data: resp,
                    responsive: true,
                    bFilter: true,
                    bPaginate: true,
                    bInfo: true,
                        buttons: {
                            name: 'excel',
                            buttons: [
                                {
                                    extend: 'excel',
                                    text: '<i class="renta-icon-excel"></i>Excel',
                                    className: 'btn-excel mr-2',
                                    filename: 'Informe de polizas por renovar.xls'
                                }
                            ],
                        },
                        columnDefs: [
                            {
                                targets: [9,10,11,12,13,14,15],
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
                                    return data.rut_asegurado+"-"+data.dig_ver_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.nombre_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.nombre_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.id_plan;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.vigencia_inicio_poliza;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.vigencia_termino_poliza;
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
                                    
                                        return data.monto_asegurado;;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.prima_neta;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.cant_sini_liqui;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.mto_liqui;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.cant_sini_rese;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.mto_rese;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.via_pago;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.convenio;
                                    
                                }
                            },
                            
                        ]
        
             });
             new $.fn.dataTable.Buttons(dataTableInformePolizasPorRenovar, {
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
            dataTableInformePolizasPorRenovar.buttons('excel', 0).containers().prependTo($('#polizasPorRenovar .dataTables_length'));
            dataTableInformePolizasPorRenovar.buttons('colvis', 0).containers().appendTo($('.colvisBtns-polizas-por-renovar'));
            document.querySelector('#polizasPorRenovar .buttons-excel span').classList.add('d-flex', 'align-content-center');
        
        
           //dataTable.buttons().container().appendTo($('.colvis-btns'));
          removeSpinner($('tbody'))
         },
         error: function(resp) {
             // var errors = [];
              removeSpinner($('tbody'))
         }
    });

});

$('#polizasRenovadasTab').click(function() { 
    addSpinner($('tbody'));
    $('#grilla').val(2);
    var fecha = new Date();
    var ano_actual = fecha.getFullYear();
    var mes_actual =fecha.getMonth()+1
    
    $("#anio option[value="+ ano_actual +"]").attr("selected",true);
    if((mes_actual>=1)&&(mes_actual<=9))
       $("#mes option[value="+ "0"+mes_actual +"]").attr("selected",true);
    else
    $("#mes option[value="+ mes_actual +"]").attr("selected",true);

    if((mes_actual>='1')&&(mes_actual<='9')){
        mes_actual="0"+ mes_actual;
    }
    
    if(($('#mes').val()==mes_actual)&&($('#anio').val()==ano_actual)){
        var anio='*';
        var mes='*';
    }
    else{
        var anio=$('#anio').val();
        var mes=$('#mes').val();
    }
    
    
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            //var anio='*';
            //var mes='*';
            $.ajax({
                url: dominio + 'listarpolizasrenovadas/' + rutLogueado+ '/' + mes+ '/' + anio,
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
                //$('#informePolizasRenovadas').dataTable().fnClearTable();
                console.log(resp)
                let dataTableInformePolizasRenovadas = $('#informePolizasRenovadas').DataTable({
                    destroy: true,
                    data: resp,
                    responsive: true,
                    bFilter: true,
                    bPaginate: true,
                    bInfo: true,
                        buttons: {
                            name: 'excel',
                            buttons: [
                                {
                                    extend: 'excel',
                                    text: '<i class="renta-icon-excel"></i>Excel',
                                    className: 'btn-excel mr-2',
                                    filename: 'Informe de pólizas renovadas.xls'
                                }
                            ],
                        },
                        columnDefs: [
                            {
                                targets: [9,10,11,12,13,14,15],
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
                                    return data.rut_asegurado+"-"+data.dig_ver_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.nombre_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.nombre_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.id_plan;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.vigencia_inicio_poliza;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.vigencia_termino_poliza;
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
                                    
                                        return data.monto_asegurado;;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.prima_neta;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.cant_sini_liqui;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.mto_liqui;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.cant_sini_rese;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.mto_rese;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.via_pago;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.convenio;
                                    
                                }
                            },
                            
                        ]
        
             });
             new $.fn.dataTable.Buttons(dataTableInformePolizasRenovadas, {
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
        
            dataTableInformePolizasRenovadas.buttons('excel', 0).containers().prependTo($('#polizasRenovadas .dataTables_length'));
            dataTableInformePolizasRenovadas.buttons('colvis', 0).containers().appendTo($('.colvisBtns-polizas-renovadas'));
        
            document.querySelector('#polizasRenovadas .buttons-excel span').classList.add('d-flex', 'align-content-center');
        
        
           //dataTable.buttons().container().appendTo($('.colvis-btns'));
          removeSpinner($('tbody'))
         },
         error: function(resp) {
             // var errors = [];
              removeSpinner($('tbody'))
         }
    });


});

$('#polizasNoRenovadasTab').click(function() { 
    addSpinner($('tbody'));
    $('#grilla').val(3);
    var fecha = new Date();
    var ano_actual = fecha.getFullYear();
    var mes_actual =fecha.getMonth()+1
    
    $("#anio option[value="+ ano_actual +"]").attr("selected",true);
    if((mes_actual>=1)&&(mes_actual<=9))
       $("#mes option[value="+ "0"+mes_actual +"]").attr("selected",true);
    else
    $("#mes option[value="+ mes_actual +"]").attr("selected",true);

    if((mes_actual>='1')&&(mes_actual<='9')){
        mes_actual="0"+ mes_actual;
    }
    
    if(($('#mes').val()==mes_actual)&&($('#anio').val()==ano_actual)){
        var anio='*';
        var mes='*';
    }
    else{
        var anio=$('#anio').val();
        var mes=$('#mes').val();
    }
    
    
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            //var anio='*';
           // var mes='*';
            $.ajax({
                url: dominio + 'listarpolizasnorenovadas/' + rutLogueado+ '/' + mes+ '/' + anio,
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
                //$('#informePolizasNoRenovadas').dataTable().fnClearTable();
                console.log(resp)
                let dataTableInformePolizasNoRenovadas = $('#informePolizasNoRenovadas').DataTable({
                    destroy: true,
                    data: resp,
                    responsive: true,
                    bFilter: true,
                    bPaginate: true,
                    bInfo: true,
                        buttons: {
                            name: 'excel',
                            buttons: [
                                {
                                    extend: 'excel',
                                    text: '<i class="renta-icon-excel"></i>Excel',
                                    className: 'btn-excel mr-2',
                                    filename: 'Informe de pólizas no renovadas.xls'
                                }
                            ],
                        },
                        columnDefs: [
                            {
                                targets: [9,10,11,12,13,14,15],
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
                                    return data.rut_asegurado+"-"+data.dig_ver_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.nombre_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.nombre_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.id_plan;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.vigencia_inicio_poliza;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.vigencia_termino_poliza;
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
                                    
                                        return data.monto_asegurado;;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.prima_neta;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.cant_sini_liqui;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.mto_liqui;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.cant_sini_rese;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.mto_rese;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.via_pago;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.convenio;
                                    
                                }
                            },
                            
                        ]
        
             });
             new $.fn.dataTable.Buttons(dataTableInformePolizasNoRenovadas, {
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
        
            dataTableInformePolizasNoRenovadas.buttons('excel', 0).containers().prependTo($('#polizasNoRenovadas .dataTables_length'));
            dataTableInformePolizasNoRenovadas.buttons('colvis', 0).containers().appendTo($('.colvisBtns-polizas-no-renovadas'));
        
            document.querySelector('#polizasNoRenovadas .buttons-excel span').classList.add('d-flex', 'align-content-center');
        
        
           //dataTable.buttons().container().appendTo($('.colvis-btns'));
          removeSpinner($('tbody'))
         },
         error: function(resp) {
             // var errors = [];
              removeSpinner($('tbody'))
         }
    });


});
///////////////////////////////////////////////////////////llamados////////////////////////////////////////////
$('#filtrar').click(function() { 
    addSpinner($('tbody'));
   if(($('#anio').val()!="-1")&&($('#mes').val()!="-1")){
        if($('#grilla').val()=='1'){
            polizasPorRenovar();
            //alert("1")
        }
        if($('#grilla').val()=='2'){
            polizasRenovadas();
            //alert("2")
        }
        if($('#grilla').val()=='3'){
            polizasNoRenovadas();
            //alert("3")
        }
   }
   else{
    Swal.fire({
        icon: 'error',
        //title: 'Oops...',
        text: 'Debe seleccionar un mes y un año!',
        //footer: '<a href>Why do I have this issue?</a>'
      })
   }
});

function polizasPorRenovar() { 
    $('#grilla').val(1);
    var fecha = new Date();
    var ano_actual = fecha.getFullYear();
    var mes_actual =fecha.getMonth()+1;
    
    if((mes_actual>='1')&&(mes_actual<='9')){
        mes_actual="0"+ mes_actual;
    }
    
    if(($('#mes').val()==mes_actual)&&($('#anio').val()==ano_actual)){
        var anio='*';
        var mes='*';
    }
    else{
        var anio=$('#anio').val();
        var mes=$('#mes').val();
    }
    
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            $.ajax({
                url: dominio + 'listarpolizasporenovar/' + rutLogueado+ '/' + mes+ '/' + anio,
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
                //$('#informePolizasPorRenovar').dataTable().fnClearTable();
                console.log(resp)
                let dataTableInformePolizasPorRenovar = $('#informePolizasPorRenovar').DataTable({
                    destroy: true,
                    data: resp,
                    responsive: true,
                    bFilter: true,
                    bPaginate: true,
                    bInfo: true,
                        buttons: {
                            name: 'excel',
                            buttons: [
                                {
                                    extend: 'excel',
                                    text: '<i class="renta-icon-excel"></i>Excel',
                                    className: 'btn-excel mr-2',
                                    filename: 'Informe de polizas por renovar.xls'
                                }
                            ],
                        },
                        columnDefs: [
                            {
                                targets: [9,10,11,12,13,14,15],
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
                                    return data.rut_asegurado+"-"+data.dig_ver_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.nombre_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.nombre_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.id_plan;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.vigencia_inicio_poliza;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.vigencia_termino_poliza;
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
                                    
                                        return data.monto_asegurado;;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.prima_neta;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.cant_sini_liqui;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.mto_liqui;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.cant_sini_rese;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.mto_rese;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.via_pago;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.convenio;
                                    
                                }
                            },
                            
                        ]
        
             });
             new $.fn.dataTable.Buttons(dataTableInformePolizasPorRenovar, {
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
            dataTableInformePolizasPorRenovar.buttons('excel', 0).containers().prependTo($('#polizasPorRenovar .dataTables_length'));
            dataTableInformePolizasPorRenovar.buttons('colvis', 0).containers().appendTo($('.colvisBtns-polizas-por-renovar'));
            document.querySelector('#polizasPorRenovar .buttons-excel span').classList.add('d-flex', 'align-content-center');
        
        
           //dataTable.buttons().container().appendTo($('.colvis-btns'));
          removeSpinner($('tbody'))
         },
         error: function(resp) {
             // var errors = [];
              removeSpinner($('tbody'))
         }
    });

}

function polizasRenovadas() { 
    addSpinner($('tbody'));
    $('#grilla').val(2);
    var fecha = new Date();
    var ano_actual = fecha.getFullYear();
    var mes_actual =fecha.getMonth()+1;
    
    if((mes_actual>='1')&&(mes_actual<='9')){
        mes_actual="0"+ mes_actual;
    }
    
    if(($('#mes').val()==mes_actual)&&($('#anio').val()==ano_actual)){
        var anio='*';
        var mes='*';
    }
    else{
        var anio=$('#anio').val();
        var mes=$('#mes').val();
    }
    
    
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            
            $.ajax({
                url: dominio + 'listarpolizasrenovadas/' + rutLogueado+ '/' + mes+ '/' + anio,
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
                //$('#informePolizasRenovadas').dataTable().fnClearTable();
                console.log(resp)
                let dataTableInformePolizasRenovadas = $('#informePolizasRenovadas').DataTable({
                    destroy: true,
                    data: resp,
                    responsive: true,
                    bFilter: true,
                    bPaginate: true,
                    bInfo: true,
                        buttons: {
                            name: 'excel',
                            buttons: [
                                {
                                    extend: 'excel',
                                    text: '<i class="renta-icon-excel"></i>Excel',
                                    className: 'btn-excel mr-2',
                                    filename: 'Informe de pólizas renovadas.xls'
                                }
                            ],
                        },
                        columnDefs: [
                            {
                                targets: [9,10,11,12,13,14,15],
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
                                    return data.rut_asegurado+"-"+data.dig_ver_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.nombre_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.nombre_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.id_plan;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.vigencia_inicio_poliza;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.vigencia_termino_poliza;
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
                                    
                                        return data.monto_asegurado;;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.prima_neta;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.cant_sini_liqui;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.mto_liqui;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.cant_sini_rese;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.mto_rese;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.via_pago;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.convenio;
                                    
                                }
                            },
                            
                        ]
        
             });
             new $.fn.dataTable.Buttons(dataTableInformePolizasRenovadas, {
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
        
            dataTableInformePolizasRenovadas.buttons('excel', 0).containers().prependTo($('#polizasRenovadas .dataTables_length'));
            dataTableInformePolizasRenovadas.buttons('colvis', 0).containers().appendTo($('.colvisBtns-polizas-renovadas'));
        
            document.querySelector('#polizasRenovadas .buttons-excel span').classList.add('d-flex', 'align-content-center');
        
        
           //dataTable.buttons().container().appendTo($('.colvis-btns'));
          removeSpinner($('tbody'))
         },
         error: function(resp) {
             // var errors = [];
              removeSpinner($('tbody'))
         }
    });
}

function polizasNoRenovadas() { 
    addSpinner($('tbody'));
    $('#grilla').val(3);
    var fecha = new Date();
    var ano_actual = fecha.getFullYear();
    var mes_actual =fecha.getMonth()+1;
    
    if((mes_actual>='1')&&(mes_actual<='9')){
        mes_actual="0"+ mes_actual;
    }
    
    if(($('#mes').val()==mes_actual)&&($('#anio').val()==ano_actual)){
        var anio='*';
        var mes='*';
    }
    else{
        var anio=$('#anio').val();
        var mes=$('#mes').val();
    }
    
    
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
          
            $.ajax({
                url: dominio + 'listarpolizasnorenovadas/' + rutLogueado+ '/' + mes+ '/' + anio,
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
                //$('#informePolizasNoRenovadas').dataTable().fnClearTable();
                console.log(resp)
                let dataTableInformePolizasNoRenovadas = $('#informePolizasNoRenovadas').DataTable({
                    destroy: true,
                    data: resp,
                    responsive: true,
                    bFilter: true,
                    bPaginate: true,
                    bInfo: true,
                        buttons: {
                            name: 'excel',
                            buttons: [
                                {
                                    extend: 'excel',
                                    text: '<i class="renta-icon-excel"></i>Excel',
                                    className: 'btn-excel mr-2',
                                    filename: 'Informe de pólizas no renovadas.xls'
                                }
                            ],
                        },
                        columnDefs: [
                            {
                                targets: [9,10,11,12,13,14,15],
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
                                    return data.rut_asegurado+"-"+data.dig_ver_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.nombre_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.nombre_asegurado;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.id_plan;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                        return data.vigencia_inicio_poliza;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.vigencia_termino_poliza;
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
                                    
                                        return data.monto_asegurado;;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.prima_neta;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.cant_sini_liqui;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.mto_liqui;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.cant_sini_rese;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.mto_rese;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.via_pago;
                                    
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    
                                    return data.convenio;
                                    
                                }
                            },
                            
                        ]
        
             });
             new $.fn.dataTable.Buttons(dataTableInformePolizasNoRenovadas, {
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
        
            dataTableInformePolizasNoRenovadas.buttons('excel', 0).containers().prependTo($('#polizasNoRenovadas .dataTables_length'));
            dataTableInformePolizasNoRenovadas.buttons('colvis', 0).containers().appendTo($('.colvisBtns-polizas-no-renovadas'));
        
            document.querySelector('#polizasNoRenovadas .buttons-excel span').classList.add('d-flex', 'align-content-center');
        
        
           //dataTable.buttons().container().appendTo($('.colvis-btns'));
          removeSpinner($('tbody'))
         },
         error: function(resp) {
             // var errors = [];
              removeSpinner($('tbody'))
         }
    });


}

///////////////////////////////////////////////////////////fin llamados////////////////////////////////////////

function listar_anios() {
    var anios = Array(0);
    
    var fecha = new Date();
    var ano = fecha.getFullYear();
    var ano_inicio=ano-15;

    var j=0;
     for(var i=ano;i>=ano_inicio;i--) {   
        anios[j]=i;   
        j++; 
     } 
  
    $('#anio').empty();
    //var selected = $('#anio').val();
           
    $("#anio").append('<option value=' + "-1" + '>' + "Seleccione ..." + '</option>');
 
    for(var j=0;j<15;j++) {
        $("#anio").append('<option value=' +anios[j]+ '>' +anios[j] + '</option>');
    }
}

//CHANGE INFORME DE POLIZAS POR RENOVAR SUBTITLE BASED ON NAV PILL SELECTED
jQuery(document).ready(function ($) {
    let polizasPorRenovarTab = document.querySelector('#polizasPorRenovarTab');
    let polizasRenovadasTab = document.querySelector('#polizasRenovadasTab');
    let polizasNoRenovadasTab = document.querySelector('#polizasNoRenovadasTab');
    let headerTitle = document.querySelector('.header-title--big');

    polizasPorRenovarTab.addEventListener('click', () => {changeTitle('Informe de pólizas por renovar')});
    polizasRenovadasTab.addEventListener('click', () => {changeTitle('Lista de pólizas renovadas')});
    polizasNoRenovadasTab.addEventListener('click', () => {changeTitle('Lista de pólizas no renovadas')});

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




