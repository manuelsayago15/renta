$(function() {//ventas por categoria del dashboard imprimir monedas
  
  var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

  token = JSON.parse(window.localStorage.getItem('token'));
  if (token === 0) window.location = '../index.html';
  //id_oficina = JSON.parse(window.localStorage.getItem('id_oficina'));

  var num='*';
  $.ajax({
      url: dominio + 'polizaventamonedasgtezonal/'+num,
      dataType: 'json',
      type: 'GET',
      data: {

          token: token
      },
      success: function(resp) {
          console.log(resp) 
          if(resp.data.moneda==0){
            removeSpinner($('#ventas-categorias-zonal-tabs')) 
            $('#ventas-categorias-zonal-tabs').append('<p id="ventas-categorias-zonal-tabsp">No hay datos que mostrar.<p>'); 
          }
          var arreglo = Array(0);
          for (var i = 0; i < resp.data.length; i++) {
           arreglo[i] = resp.data[i];
          }
         
          $("#ventas-categorias-tabs").html("");
          $("#ventas-categorias-tabs").append(`<li class="nav-item"><a class="nav-link nav-link--dashboard active" style="cursor:pointer" onclick="mostrar_categorias_graficas_barras(` + resp.data[0].moneda + `)" href="#ventas-categorias-todos" data-toggle="tab" aria-controls="ventas-categorias-todos" aria-selected="true" id="ventas-categorias">`+resp.data[0].unidad+`</a></li>`);
          for (var j = 1; j < resp.data.length; j++) {
         
              $("#ventas-categorias-tabs").append(`<li class="nav-item"><a class="nav-link nav-link--dashboard" style="cursor:pointer" onclick="mostrar_categorias_graficas_barras(` + resp.data[j].moneda + `)" href="#ventas-categorias-todos" data-toggle="tab" aria-controls="ventas-categorias-todos" aria-selected="true" id="ventas-categorias">`+resp.data[j].unidad+`</a></li>`);
 
         }
          mostrar_categorias_graficas_barras(resp.data[0].moneda);
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
  //id_oficina = JSON.parse(window.localStorage.getItem('id_oficina'));
  var num='15';
  $.ajax({
      url: dominio + 'polizaventamonedasgtezonal/'+num,
      dataType: 'json',
      type: 'GET',
      data: {

          token: token
      },
      success: function(resp) {
          console.log(resp) 
          if(resp.data.moneda==0){
            removeSpinner($('#ventas-ultimos-15dias')) 
            $('#ventas-ultimos-15dias').append('<p id="ventas-ultimos-15diasp">No hay datos que mostrar.<p>'); 
          }
          var arreglo15 = Array(0);
          for (var i = 0; i < resp.data.length; i++) {
           arreglo15[i] = resp.data[i];
          }
         
          $("#ventas-ultimos-15dias-tabs").html("");
         
          $("#ventas-ultimos-15dias-tabs").append(`<li class="nav-item"><a class="nav-link nav-link--dashboard active" style="cursor:pointer" onclick="mostrar_15dias_graficas_ondas(`+ resp.data[0].moneda +`)" href="#ventas-ultimos-dias-uf" data-toggle="tab" aria-controls="ventas-ultimos-dias-uf" aria-selected="true" id="ventas-ultimos-15dias-tab">`+resp.data[0].unidad+`</a></li>`);
          
          for (var j = 1; j < resp.data.length; j++) {
 
              $("#ventas-ultimos-15dias-tabs").append(`<li class="nav-item"><a class="nav-link nav-link--dashboard" style="cursor:pointer" onclick="mostrar_15dias_graficas_ondas(`+resp.data[j].moneda +`)" href="#ventas-ultimos-dias-uf" data-toggle="tab" aria-controls="ventas-ultimos-dias-uf" aria-selected="true" id="ventas-ultimos-dias-tab">`+resp.data[j].unidad+`</a></li>`);

          }
          mostrar_15dias_graficas_ondas(resp.data[0].moneda,resp.data[0].unidad);
      },
      error: function(resp) {
          console.log(resp)
      }
  });
 
});

$(function() {//ventas por top ejecutivos del dashboard imprimir monedas

  var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

  token = JSON.parse(window.localStorage.getItem('token'));
  if (token === 0) window.location = '../index.html';
  //id_oficina = JSON.parse(window.localStorage.getItem('id_oficina'));
  var num='*';
  $.ajax({
      url: dominio + 'polizaventamonedasgtezonal/'+num,
      dataType: 'json',
      type: 'GET',
      data: {

          token: token
      },
      success: function(resp) {
          console.log(resp) 
          if(resp.data.moneda==0){
            removeSpinner($('#topOficinas')) 
            $('#topOficinas').append('<p id="topOficinasp">No hay datos que mostrar.<p>'); 
          }

          var arreglo = Array(0);
          for (var i = 0; i < resp.data.length; i++) {
           arreglo[i] = resp.data[i];
          }
         
          $("#topOficinas-tabs").html("");
          $("#topOficinas-tabs").append(`<li class="nav-item"><a class="nav-link nav-link--dashboard active" style="cursor:pointer" onclick="mostrar_top_oficinas_graficas_barras(` + resp.data[0].moneda + `)" href="#ventas-categorias-todos" data-toggle="tab" aria-controls="ventas-categorias-todos" aria-selected="true" id="topOficinas-tab">`+resp.data[0].unidad+`</a></li>`);
          for (var j = 1; j < resp.data.length; j++) {
         
              $("#topOficinas-tabs").append(`<li class="nav-item"><a class="nav-link nav-link--dashboard" style="cursor:pointer" onclick="mostrar_top_oficinas_graficas_barras(` + resp.data[j].moneda + `)" href="#ventas-categorias-todos" data-toggle="tab" aria-controls="ventas-categorias-todos" aria-selected="true" id="topOficinas-tab">`+resp.data[j].unidad+`</a></li>`);
 
         }
         mostrar_top_oficinas_graficas_barras(resp.data[0].moneda);
      },
      error: function(resp) {
          console.log(resp)
      }
  });
 
});

$(function() {//ventas por top corredores del dashboard imprimir monedas

  var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

  token = JSON.parse(window.localStorage.getItem('token'));
  if (token === 0) window.location = '../index.html';
  id_oficina = JSON.parse(window.localStorage.getItem('id_oficina'));
  var num='*';
  $.ajax({
      url: dominio + 'polizaventamonedasgtezonal/'+num,
      dataType: 'json',
      type: 'GET',
      data: {

          token: token
      },
      success: function(resp) {
          console.log(resp)
          if(resp.data.moneda==0){
            removeSpinner($('#topCorredores')) 
            $('#topCorredores').append('<p id="topCorredoresp">No hay datos que mostrar.<p>'); 
          }
          
          var arreglo = Array(0);
          for (var i = 0; i < resp.data.length; i++) {
           arreglo[i] = resp.data[i];
          }
         
          $("#topCorredores-tabs").html("");
          $("#topCorredores-tabs").append(`<li class="nav-item"><a class="nav-link nav-link--dashboard active" style="cursor:pointer" onclick="mostrar_top_corredores_graficas_barras(` + resp.data[0].moneda + `)" href="#ventas-categorias-todos" data-toggle="tab" aria-controls="ventas-categorias-todos" aria-selected="true" id="topCorredores-tab">`+resp.data[0].unidad+`</a></li>`);
          for (var j = 1; j < resp.data.length; j++) {
         
              $("#topCorredores-tabs").append(`<li class="nav-item"><a class="nav-link nav-link--dashboard" style="cursor:pointer" onclick="mostrar_top_corredores_graficas_barras(` + resp.data[j].moneda + `)" href="#ventas-categorias-todos" data-toggle="tab" aria-controls="ventas-categorias-todos" aria-selected="true" id="topCorredores-tab">`+resp.data[j].unidad+`</a></li>`);
 
         }
         mostrar_top_corredores_graficas_barras(resp.data[0].moneda);
      },
      error: function(resp) {
          console.log(resp)
      }
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

function mostrar_categorias_graficas_barras(m){
 
  $('#ventas-categorias-zonal-chart').remove(); //elimina <canvas id="ventas-categorias-chart"><canvas>
  addSpinner($('#ventas-categorias-zonal-tabs'));
  
  var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

  token = JSON.parse(window.localStorage.getItem('token'));
  if (token === 0) window.location = '../index.html';

  var num='*';
  $.ajax({
      url: dominio + 'polizaventasgtezonal/'+num,
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

          $('#ventas-categorias-zonal-tabs').append('<canvas id="ventas-categorias-zonal-chart"><canvas>'); 
      
          var ventasCategoriasUFChartZone = document.querySelector("#ventas-categorias-zonal-chart").getContext('2d');

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
     removeSpinner($('#ventas-categorias-zonal-tabs'))   
      },
      error: function(resp) {
          console.log(resp)
          removeSpinner($('#ventas-categorias-zonal-tabs'))
      }
  });
}

function mostrar_15dias_graficas_ondas(m){
  
$('#ventas-ultimos-15dias-chart').remove(); //elimina <canvas id="ventas-categorias-chart"><canvas>
addSpinner($('#ventas-ultimos-15dias'));

var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

token = JSON.parse(window.localStorage.getItem('token'));
if (token === 0) window.location = '../index.html';

var num='15';
$.ajax({
    url: dominio + 'polizaultimasventasgtezonal/' +num,
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

var num='15';
$.ajax({
  url: dominio + 'polizaventarangogtezonal/'+num,
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

function mostrar_top_oficinas_graficas_barras(m){

$('#topOficinas-chart').remove(); 
addSpinner($('#topOficinas'));

var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

token = JSON.parse(window.localStorage.getItem('token'));
if (token === 0) window.location = '../index.html';
rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));

var num='*';
$.ajax({
    url: dominio + 'polizatopsucursalgtezonal/'+rutLogueado+'/'+num,
    dataType: 'json',
    type: 'GET',
    data: {

        token: token
    },
    success: function(resp) {
        //console.log(resp) 
        var oficinas = Array(0);
        var total = Array(0);

        for (var i=0;i<resp.data.length;i++) {
            if(resp.data[i].id_moneda==m){
              oficinas.push(resp.data[i].nombre);
              total.push(resp.data[i].total);
            }
        }

        $('#topOficinas').append('<canvas id="topOficinas-chart"><canvas>'); 
    
        var ventasCategoriasUFChartZone = document.querySelector("#topOficinas-chart").getContext('2d');

        new Chart(ventasCategoriasUFChartZone, {
        
        type: 'bar',
        data: {
            labels:  oficinas,
            datasets: [
            {
                data:  total,
                backgroundColor: [

                  '#1073C5',
                  '#1073C5',
                  '#1073C5',
                  '#1073C5',
                  '#1073C5',
                  '#1073C5',
                  '#1073C5',
                  '#1073C5',
                  '#1073C5',
                  '#1073C5',
                  '#1073C5',
                  '#1073C5',
                  '#1073C5',
                  '#1073C5',
                  '#1073C5',
                  '#1073C5'
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
   removeSpinner($('#topOficinas'))   
    },
    error: function(resp) {
        console.log(resp)
        removeSpinner($('#topOficinas'))
    }
});

}
function mostrar_top_corredores_graficas_barras(m){
 
$('#topCorredores-chart').remove(); 
addSpinner($('#topCorredores'));

var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

token = JSON.parse(window.localStorage.getItem('token'));
if (token === 0) window.location = '../index.html';

var num='*';
$.ajax({
  url: dominio + 'polizatopintermediariogtezonal/'+num,
  dataType: 'json',
  type: 'GET',
  data: {

      token: token
  },
  success: function(resp) {
      console.log(resp.data.length) 
      var corredor = Array(0);
      var total = Array(0);

      for (var i=0;i<resp.data.length;i++) {
          if(resp.data[i].id_moneda==m){
             corredor.push(resp.data[i].nombres+" "+resp.data[i].apellidos);
             total.push(resp.data[i].total);
          }
      }

      $('#topCorredores').append('<canvas id="topCorredores-chart"><canvas>'); 
  
      var ventasCategoriasUFChartZone = document.querySelector("#topCorredores-chart").getContext('2d');

      new Chart(ventasCategoriasUFChartZone, {
      
      type: 'bar',
      data: {
          labels: corredor,
          datasets: [
          {
              data:  total,
              backgroundColor: [

                '#2DB8DE',
                '#2DB8DE',
                '#2DB8DE',
                '#2DB8DE',
                '#2DB8DE',
                '#2DB8DE',
                '#2DB8DE',
                '#2DB8DE',
                '#2DB8DE',
                '#2DB8DE',
                '#2DB8DE',
                '#2DB8DE',
                '#2DB8DE',
                '#2DB8DE',
                '#2DB8DE',
                '#2DB8DE'
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
 removeSpinner($('#topCorredores'))   
  },
  error: function(resp) {
      console.log(resp)
      removeSpinner($('#topCorredores'))
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