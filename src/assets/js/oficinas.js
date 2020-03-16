jQuery(document).ready(function ($) {

    $(function() {//busc oficinas/sucursales
          
      oficina = JSON.parse(window.localStorage.getItem('oficina'));
        console.log(oficina)
        //alert(oficina.length)
        if(oficina.length==1){
           var selected = $('#oficinasSel').val();
           $.each(oficina, function(key, registro) {
              $("#oficinasSel").append('<option value=' + registro.id + '>' + registro.nombre + '</option>');
           });
        }
        else{
            var selected = $('#oficinasSel').val();
            $('#oficinasSel').empty();
            $("#oficinasSel").append('<option value=' + "" + '>' + "Seleccione ..." + '</option>');
     
            $.each(oficina, function(key, registro) {
               $("#oficinasSel").append('<option value=' + registro.id + '>' + registro.nombre + '</option>');
            });
        }
     
    });
  
  });

  $("#oficinasSel").change(function() {
     
     var id_oficina= $("#oficinasSel").val();
     if(id_oficina=="-1")
     {
      $('#sucursal').html("");
      $('#direccion').html("");
      $('#comuna').html("");

      $('#fono1').html("");
      $('#fono2').html("");
      window.location = '../page-oficinas/oficinas.html';
     }
     
     var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
     
     token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0) window.location = './index.html';
     //userData = JSON.parse(window.localStorage.getItem('rutLogueado'));

     $.ajax({
         url: dominio + 'oficina/' + id_oficina,
         dataType: 'json',
         type: 'GET',
         data: {

             token: token
         },
         success: function(resp) {
             console.log(resp[0])
             $('#sucursal').html(resp[0].nombre);
             $('#direccion').html(resp[0].direccion);
             $('#comuna').html(resp[0].comuna);

             $('#fono1').html("(+56 2) "+resp[0].fono+" / ");
             $('#fono2').html(resp[0].fono2);
            
         },
         error: function(resp) {
             console.log("hola"+resp)
             //removeSpinner($('tbody'))
         }
     })
     lista_miembros_oficinas()
 });
 function lista_miembros_oficinas(){
    
   addSpinner($('tbody')); 
   var id_oficina= $("#oficinasSel").val();              
   token = JSON.parse(window.localStorage.getItem('token'));
   if (token === 0)
      window.location = '../index.html';
   rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
      
          var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

          $.ajax({
              url: dominio + 'infoficina/' + id_oficina,
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
              console.log(resp.data)
                  let dataTableDashboardCorredores = $('#oficinas').DataTable({
                      data: resp,
                      responsive: true,
                      bFilter: true,
                      bPaginate: true,
                      bInfo: true,
                      aaSorting: [
                          [1, "desc"]
                          
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
                              
                                  return `<img class="rounded-circle" src="../assets/images/profile-default-circle.png" alt="Usuario" height="38px"/><span class="pl-2">`+data.nombre+`</span>`;
                                 
                              }
                          },
                          {
                              data: null,
                              className: "uniqueClassName",
                              render: function(data, type, row) {
                                 if(data.cargo=='Gerente Zonal'){
                                    return `<span class="badge badge--bigger badge-pill badge-primary">Gerente Zonal</span>`;
                                 }
                                 if(data.cargo=='Gerente Sucursal'){
                                       return `<span class="badge badge--bigger badge-pill badge-blue">Gerente Sucursal</span>`;
                                 }   
                                 if(data.cargo=='Ejecutivo'){
                                          return `<span class="badge badge--bigger badge-pill badge-dark-blue">Ejecutivo</span>`;
                                 }
                              }
                          },
                          {
                              data: null,
                              className: "uniqueClassName",
                              render: function(data, type, row) {
                                 
                                 return `<a href="mailto:`+data.email+`">`+data.email+`</a>`;
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
  