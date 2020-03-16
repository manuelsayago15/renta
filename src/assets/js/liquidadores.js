jQuery(document).ready(function ($) {
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
   

    $.ajax({
        url: dominio + 'inforegiones/',
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            console.log(resp.length)
            $('#region').empty();
            var selected = $('#region').val();
           
            $("#region").append('<option value=' + "-1" + '>' + "Seleccione ..." + '</option>');
 
            for(var i=0;i<resp.length;i++) {
                //alert(resp[i].id+" "+resp[i].nombre)
               $("#region").append('<option value=' + resp[i].id + '>' + resp[i].nombre + '</option>');
            }
            
        },
        error: function(resp) {
            console.log("hola"+resp)
            //removeSpinner($('tbody'))
        }
    })  
});

$("#region").change(function() {
     
    var id= $("#region").val();
    
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';

    $.ajax({
        url: dominio + 'liquidadoregion/' + id,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            console.log(resp[0])
            let dataTableDashboardCorredores = $('#liquidadores').DataTable({
                destroy: true,
                data: resp,
                responsive: true,
                bFilter: true,
                bPaginate: true,
                bInfo: true,
                aaSorting: [
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
                    {
                        data: null,
                        //className: "uniqueClassName",
                        render: function(data, type, row) {
                            // Combinar campos
                            return data.razon_social;
                        }
                    },
                    {
                        data: null,
                        //className: "uniqueClassName",
                        render: function(data, type, row) {
                            return data.rut+"-"+data.dig_verificador;
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
                            
                            return data.telefono2;
                        }
                    },
                    
                    {
                        data: null,
                        className: "uniqueClassName",
                        render: function(data, type, row) {
                           
                           return `<a class="text-primary underline" href="mailto:`+data.email+`">`+data.email+`</a>`;
                        }
                    }
                    
                ]
        });

         removeSpinner($('tbody'))
           
        },
        error: function(resp) {
            console.log("hola"+resp)
            //removeSpinner($('tbody'))
        }
    })
    
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
  