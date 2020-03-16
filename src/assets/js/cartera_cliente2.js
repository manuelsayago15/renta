 function llenarCarteraClientes() {

     token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0)
         window.location = './index.html';
     rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));

     var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

     $.ajax({
         url: dominio + 'polizaclientes/' + rutLogueado,
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
             let dataTable = $('#clientes').DataTable({
                 data: resp,
                 responsive: true,
                 aaSorting: [
                    // [1, "desc"],
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
                 columns: [
                    //{ data: 'nombre_cliente', className: "uniqueClassName" },
                      {
                         data: null,
                         render: function(data, type, row) {
                             // Combinar campos
                             return data.nombre_cliente + ' ' + data.apellido_cliente;
                         }
                     }, 
                     {
                         data: null,
                         className: "uniqueClassName",
                         render: function(data, type, row) {
                            return data.rut_cliente+ '-' +data.dig_ver_cliente;
                         }
                     },
                     {
                         data: null,
                         className: "uniqueClassName",
                         render: function(data, type, row) {
                             
                            return  data.poliza_vigente;
                             
                         }
                     },
                     {
                        data: null,
                        className: "uniqueClassName",
                        render: function(data, type, row) {
                            
                                return data.poliza_no_vigente;
                            
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
 }

  function edita_fecha(fecha) {
     var fn = fecha.split("-");
     return fn[2] + "-" + fn[1] + "-" + fn[0];
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