 function llenarBandeja() {

     token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
         window.location = './index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
     id_oficina = JSON.parse(window.localStorage.getItem('id_oficina'));
     var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

     $.ajax({
         url: dominio + 'propuestasucursal/' +id_oficina,
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
             let dataTable = $('#propuestas').DataTable({
                 data: resp,
                 responsive: true,
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
                         data: null,
                         className: "uniqueClassName",
                         render: function(data, type, row) {
                             if (data.id_poliza != ' ' && data.tipo_propuesta == 'CFE') {
                                 return data.id_poliza + "-" + data.item;
                             } else {
                                 return `<img class="img-fluid dt-icons" src="../assets/images/bandeja-iconos/fondo_blanco.png">`
                             }

                         }
                      },
                      {
                        data: null,
                        className: "uniqueClassName",
                        render: function(data, type, row) {
                           
                                return data.nombres_ejecutivo + " " + data.apellidos_ejecutivo; 
                        }
                      },
                      {
                        data: null,
                        className: "uniqueClassName",
                        render: function(data, type, row) {
                           
                                return data.nombres_intermediario + " " + data.apellidos_intermediario;
                        }
                      },

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
                     {
                         data: null,
                         className: "uniqueClassName",
                         render: function(data, type, row) {
                             if (data.tipo_propuesta == 'CFE') {
                                 return `<a style="cursor:pointer" onclick="listarArchivos(` + data.id_propuesta + `,` + data.rut_cliente + `,` + 1 + `)" ><img class="img-fluid dt-icons" title="` + data.tipo_propuesta + `" src="../assets/images/bandeja-iconos/clip.png"></a>`
                             } else {
                                 return `<a style="cursor:pointer" onclick="listarArchivos(` + data.id_propuesta + `,` + data.rut_intermediario + `,` + 2 + `)" ><img class="img-fluid dt-icons" title="` + data.tipo_propuesta + `" src="../assets/images/bandeja-iconos/clip.png"></a>`
                             }
                         }
                     },

                 ]

             });

             dataTable.buttons().container().appendTo($('.colvis-btns'));
             removeSpinner($('tbody'))
         },
         error: function(resp) {
            removeSpinner($('tbody'))
             // var errors = [];
         }
     });
 }

 function edita_fecha(fecha) {
     var fn = fecha.split("-");
     return fn[2] + "-" + fn[1] + "-" + fn[0];
 }
 var id_propuesta_p;
 var rut_p;
 var tipo_p;

 function listarArchivos(idPropuesta, rut, tipo) {

     id_propuesta_p = idPropuesta;
     rut_p = rut;
     tipo_p = tipo;

     var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
     //var tipo_propuesta='P';
     if (tipo == 1) {
         var t = 'E';
     } else {
         var t = 'P';
     }
     //var tipo_propuesta=tipo;
     token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0) window.location = './index.html';
     userData = JSON.parse(window.localStorage.getItem('rutLogueado'));

     $.ajax({
         url: dominio + 'listardocpropuestas/' + idPropuesta + '/' + rut + '/' + t,
         dataType: 'json',
         type: 'GET',
         data: {

             token: token
         },
         success: function(resp) {
             console.log(resp.data.length)
         },
         error: function(resp) {
             //console.log("hola"+resp)
         }
     }).done(function(resp) {
         var arreglo = Array(0);
         for (var i = 0; i < resp.data.length; i++) {
             arreglo[i] = resp.data[i];
             //alert(arreglo[resp.data.length])
         }

         $("#exampleModalCenter").modal("show");

         $("#lista").html("");
         $.each(arreglo, function(index, elem) {

             $("#lista").append(`<li><a style="cursor:pointer" href="http://10.156.160.21:8000/api/descargadocpropuestas/` + idPropuesta + `/` + rut + `/` + t + `/` + elem + `?token=` + token + `"  data-toggle="modal" data-target="">` + elem + ` </a></li>`);

         });
         $('#descarga').attr('href', `http://10.156.160.21:8000/api/descargadocpropuestas/` + idPropuesta + `/` + rut + `/` + t + `/` + arreglo[resp.data.length - 1] + `?token=` + token);
     });
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

 function contadorSabadosYDomingos(fechaInicial, fechaFinal) {

     var dtInicial = new Date(fechaInicial);
     var dtFinal = new Date(fechaFinal);
     if (dtInicial.getDay() === 5 || dtInicial.getDay() === 6) { // si la propuesta es introducida un sabado o un domingo 
         var contadorDias = -1;
     } else {
         var contadorDias = 0;
     }

     //var contadorDias = 0;//si la propuesta es introducida un dia de lunes a viernes 
     while (dtInicial <= dtFinal) {
         if (dtInicial.getDay() === 5 || dtInicial.getDay() === 6) {
             console.log("dia contado:" + dtInicial);
             contadorDias++;
         }
         dtInicial = new Date(dtInicial.getTime() + 86400000); // se agrega un dia

     }
     return contadorDias;
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