jQuery(document).ready(function ($) {

  $(function() {//lista la tabla-grilla del dashboard
                
    token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
        window.location = '../index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        
            var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            var numero='5';
            $.ajax({
                url: dominio + 'propuestas/' + rutLogueado+'/'+numero,
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
                    let dataTableDashboardCorredores = $('#top-intermediarios').DataTable({
                        data: resp,
                        responsive: true,
                        bFilter: false,
                        bPaginate: false,
                        bInfo: false,
                        aaSorting: [
                            [1, "desc"],
                            [0, "asc"]
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
                                    // Combinar campos
                                    return data.id_propuesta + '-' + data.item;
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    return edita_fecha(data.fecha);
                                }
                            },
                            { data: 'id_plan', className: "uniqueClassName" },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    if (data.nombre_cliente === null)
                                        return data.rut_cliente + '-' + data.dig_ver_cliente;
                                    else
                                        return data.nombre_cliente;
                                }
                            },
                            { data: 'prima_neta', className: "uniqueClassName" },
        
                            {
                                data: 'estatusitem',
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    if (data === 'P') {
                                        return `<img title="En proceso" class="img-fluid dt-icons" src="../assets/images/bandeja-iconos/pendiente.png">`
                                    }
                                    if (data === 'R') {
                                        return `<img title="Rechazado" class="img-fluid dt-icons" src="../assets/images/bandeja-iconos/eliminar.png">`
                                    }
                                }
                            },
                            {
                                data: 'tipo_propuesta',
                                className: "uniqueClassName",
                                render: function(data, type, row) {
                                    if (data === 'CF') {
                                        return `<img title="Carga formulario" class="img-fluid dt-icons" src="../assets/images/bandeja-iconos/formulario.png">`
                                    }
                                    if (data === 'FW') {
                                        return `<img title="Formulario web" class="img-fluid dt-icons" src="../assets/images/bandeja-iconos/web.png">`
                                    }
                                    if (data === 'CFE') {
                                        return `<img title="Endoso" class="img-fluid dt-icons" src="../assets/images/bandeja-iconos/Endoso.png">`
                                    }
                                }
                            },
                            {
                                data: null,
                                className: "uniqueClassName",
                                render: function(data, type, row) {
        
                                    return cuentaDias(data.fecha);
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
 
 
  $(function() {//proximos vencimientos del dashboard

    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = '../index.html';
    rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
    var num=10;
    $.ajax({
        url: dominio + 'polizavencimiento/' + rutLogueado+'/'+num,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            //console.log(resp.data[0]) 
            console.log(resp) 
            $('#inicio_diez').html(edita_fecha(resp.data[0].fecha_inicio));
            $('#fin_diez').html(edita_fecha(resp.data[0].fecha_fin));
            $('#total_diez').html(resp.data[0].total);

            $('#inicio_veinte').html(edita_fecha(resp.data[1].fecha_inicio));
            $('#fin_veinte').html(edita_fecha(resp.data[1].fecha_fin));
            $('#total_veinte').html(resp.data[1].total);

            $('#inicio_treinta').html(edita_fecha(resp.data[2].fecha_inicio));
            $('#fin_treinta').html(edita_fecha(resp.data[2].fecha_fin));
            $('#total_treinta').html(resp.data[2].total);

            $('#inicio_cuarenta').html(edita_fecha(resp.data[3].fecha_inicio));
            $('#fin_cuarenta').html(edita_fecha(resp.data[3].fecha_fin));
            $('#total_cuarenta').html(resp.data[3].total);
        },
        error: function(resp) {
            console.log(resp)
        }
    });

   
  });

  $(function() {//ventas por categoria del dashboard imprimir monedas

    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = '../index.html';
    rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
    var num='*';
    $.ajax({
        url: dominio + 'polizaventamonedas/' + rutLogueado+'/'+num,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            console.log(resp) 
            if(resp.data.moneda==0){
                removeSpinner($('#ventas-categorias-todos')) 
                $('#ventas-categorias-todos').append('<p id="ventas-categorias-todosp">No hay datos que mostrar.<p>'); 
              }
            var arreglo = Array(0);
            for (var i = 0; i < resp.data.length; i++) {
             arreglo[i] = resp.data[i];
            }
           
            $("#ventas-categorias-tabs").html("");
            $("#ventas-categorias-tabs").append(`<li class="nav-item"><a class="nav-link nav-link--dashboard active" style="cursor:pointer" onclick="mostrar_graficas_barras(` + resp.data[0].moneda + `)" href="#ventas-categorias-todos" data-toggle="tab" aria-controls="ventas-categorias-todos" aria-selected="true" id="ventas-categorias-tab">`+resp.data[0].unidad+`</a></li>`);
            for (var j = 1; j < resp.data.length; j++) {
           
                $("#ventas-categorias-tabs").append(`<li class="nav-item"><a class="nav-link nav-link--dashboard" style="cursor:pointer" onclick="mostrar_graficas_barras(` + resp.data[j].moneda + `)" href="#ventas-categorias-todos" data-toggle="tab" aria-controls="ventas-categorias-todos" aria-selected="true" id="ventas-categorias-tab">`+resp.data[j].unidad+`</a></li>`);
   
           }
            mostrar_graficas_barras(resp.data[0].moneda);
        },
        error: function(resp) {
            console.log(resp)
        }
    });
   
  });

  $(function() {//ventas por ultimos 15 dias del dashboard imprimir monedas

    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = '../index.html';
    rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
    var num='15';
    $.ajax({
        url: dominio + 'polizaventamonedas/' + rutLogueado+'/'+num,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            console.log(resp) 
            if(resp.data.moneda==0){
                removeSpinner($('#ventas-ultimos-dias-tabs')) 
                $('#ventas-ultimos-dias-tabs').append('<p id="ventas-ultimos-dias-tabsp">No hay datos que mostrar.<p>'); 
              }
            var arreglo15 = Array(0);
            for (var i = 0; i < resp.data.length; i++) {
             arreglo15[i] = resp.data[i];
            }
           
            $("#ventas-ultimos-dias-tabs").html("");
           
            $("#ventas-ultimos-dias-tabs").append(`<li class="nav-item"><a class="nav-link nav-link--dashboard active" style="cursor:pointer" onclick="mostrar_graficas_ondas(`+ resp.data[0].moneda +`)" href="#ventas-ultimos-dias-uf" data-toggle="tab" aria-controls="ventas-ultimos-dias-uf" aria-selected="true" id="ventas-ultimos-dias-uf-tab">`+resp.data[0].unidad+`</a></li>`);
            
            for (var j = 1; j < resp.data.length; j++) {
   
                $("#ventas-ultimos-dias-tabs").append(`<li class="nav-item"><a class="nav-link nav-link--dashboard" style="cursor:pointer" onclick="mostrar_graficas_ondas(`+resp.data[j].moneda +`)" href="#ventas-ultimos-dias-uf" data-toggle="tab" aria-controls="ventas-ultimos-dias-uf" aria-selected="true" id="ventas-ultimos-dias-uf-tab">`+resp.data[j].unidad+`</a></li>`);

            }
            mostrar_graficas_ondas(resp.data[0].moneda);
        },
        error: function(resp) {
            console.log(resp)
        }
    });
   
  });

});

function edita_fecha(fecha) {
    var fn = fecha.split("-");
    return fn[2] + "-" + fn[1] + "-" + fn[0];
}
function edita_fecha2(fecha) {
    var fn = fecha.split("-");
    return fn[2] + "-" + fn[1];
}

function cuentaDias(fecha) {
    var fecha_inicio = fecha;

    var fecha_v = moment(fecha_inicio);
    var hoy = moment();

    var dias = hoy.diff(fecha_v, 'days');
    var n = "";

    if ((dias >= 0) && (dias <= 2)) {
        n = `<div style="background-color:#34A853; color:#fff; height: 25px; width: 25px; border-radius: 50%; margin: 0 auto;"><strong>` + dias + `</strong></div>`
    }
    if ((dias >= 3) && (dias <= 4)) {
        n = `<div style="background-color:#FBBC05; color:#fff; height: 25px; width: 25px; border-radius: 50%; margin: 0 auto;"><strong>` + dias + `</strong></div>`
    }
    if (dias >= 5) {
        n = `<div style="background-color:red; color:#fff; height: 25px; width: 25px; border-radius: 50%; margin: 0 auto;"><strong>` + dias + `</strong></div>`
    }
    return n;

}

function mostrar_graficas_barras(m){
   
    $('#ventas-categorias-chart').remove(); //elimina <canvas id="ventas-categorias-chart"><canvas>
    addSpinner($('#ventas-categorias-todos'));
    
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = '../index.html';
    rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
    var num='*';
    $.ajax({
        url: dominio + 'polizaventas/' + rutLogueado+'/'+num,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            console.log(resp) 
            var macroplan = Array(0);
            var total = Array(0);

            for (var i=0;i<resp.length;i++) {
                if(resp[i].id_moneda==m){
                   macroplan.push(resp[i].macroplan);
                   total.push(resp[i].total);
                }
            }

            $('#ventas-categorias-todos').append('<canvas id="ventas-categorias-chart"><canvas>'); //crea <canvas id="ventas-categorias-chart"><canvas>
        
            var ventasCategoriasUFChartZone = document.querySelector("#ventas-categorias-chart").getContext('2d');

            new Chart(ventasCategoriasUFChartZone, {
            
            type: 'bar',
            data: {
                labels:  macroplan,
                datasets: [
                {
                    data:  total,
                    backgroundColor: [

                        '#30658E',
                        '#30658E',
                        '#30658E',
                        '#30658E',
                        '#30658E',
                        '#30658E',
                        '#30658E',
                        '#30658E',
                        '#30658E',
                        '#30658E',
                        '#30658E',
                        '#30658E',
                        '#30658E',
                        '#30658E',
                        '#30658E',
                        '#30658E'
                    ]
                  }
               ]
          },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [
                  {
                    ticks: {
                      callback: function(valor, index, valores) {
                        return Number(valor).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                      }
                    },
                    scaleLabel: {
                      display: false,
                      labelString: 'Cantidades'
                    }
                  }
                ],
              }

        }
       });
       removeSpinner($('#ventas-categorias-todos'))   
        },
        error: function(resp) {
            console.log(resp)
            removeSpinner($('#ventas-categorias-todos'))
        }
    });
  
}

function mostrar_graficas_ondas(m){
    
    $('#ventas-ultimos-15dias-chart').remove(); //elimina <canvas id="ventas-categorias-chart"><canvas>
    addSpinner($('#ventas-ultimos-15dias'));

    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = '../index.html';
    rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
    var num='15';
    $.ajax({
        url: dominio + 'polizaultimasventas/' + rutLogueado+'/'+num,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            console.log(resp.data.length)
            console.log(resp.data)
            var dias = Array(0);
            var total = Array(0);

            for (var i=0;i<resp.data.length;i++) {
                if(resp.data[i].id_moneda==m){
                    dias.push(edita_fecha2(resp.data[i].fecha_proc));
                    total.push(resp.data[i].total);
              }
            }

            $('#ventas-ultimos-15dias').append('<canvas id="ventas-ultimos-15dias-chart"><canvas>'); //crea <canvas id="ventas-ultimos-15dias-chart"><canvas>
        
            var ventasUltimos15DiasChartZone = document.querySelector("#ventas-ultimos-15dias-chart").getContext('2d');

            var speedData = {
                labels: dias,
                datasets: [{
                  label: false,
                  backgroundColor: '#EDEEFA',
                  borderColor: '#30658E',
                  data: total,
                }]
              };
              
              var chartOptions = {
                legend: {
                  display: false,
                  position: 'top',
                  labels: {
                    boxWidth: 80,
                    fontColor: 'black'
                  }
                },
                scales: {
                    yAxes: [
                      {
                        ticks: {
                          callback: function(valor, index, valores) {
                            return Number(valor).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                          }
                        },
                        scaleLabel: {
                          display: false,
                          labelString: 'Cantidades'
                        }
                      }
                    ],
                  }
              };
              
              var lineChart = new Chart(ventasUltimos15DiasChartZone, {
                type: 'line',
                data: speedData,
                options: chartOptions
              });
            
       removeSpinner($('#ventas-ultimos-15dias'))     
        },
        error: function(resp) {
            console.log(resp)
            removeSpinner($('#ventas-ultimos-15dias'))  
        }
    });
   menor_mayor(m);
}
function  menor_mayor(m){
    
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = '../index.html';
    rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
    var num='15';
    $.ajax({
        url: dominio + 'polizaventarango/' + rutLogueado+'/'+num,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            console.log(resp.data[0]) 
            //alert(new Intl.NumberFormat("de-DE").format(resp.data[0].prima_mayor));
            for (var i = 0; i < resp.data.length; i++) {
             if(resp.data[i].moneda==m){
                $('#fecha_mayor').html(edita_fecha(resp.data[i].fecha_mayor)+",");
                $('#cantidad_mayor').html(new Intl.NumberFormat("de-DE").format(resp.data[i].prima_mayor));
                $('#unidad_mayor').html(resp.data[i].unidad);

                $('#fecha_menor').html(edita_fecha(resp.data[i].fecha_menor)+",");
                $('#cantidad_menor').html(new Intl.NumberFormat("de-DE").format(resp.data[i].prima_menor));
                $('#unidad_menor').html(resp.data[i].unidad);
             }
            } 
        },
        error: function(resp) {
            console.log(resp)
        }
    });

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
