jQuery(document).ready(function ($) {
    const userMssg = document.querySelector('.user-message');

    $('.activos-table-wrapper').click(disableUser);
    $('.inactivos-table-wrapper').click(activateUser);

    function disableUser(e) {
        if (e.target.classList.contains('activeUser')) {
            const activeUserName = e.target.parentElement.parentElement.children[0].innerHTML;
            Swal.fire({
                title: `¿Está seguro que quiere desactivar a ${activeUserName}?`,
                showCancelButton: true,
                confirmButtonColor: '#f53030',
                confirmButtonText: 'Si, quiero'
            }).then((result) => {
                if (result.value) {
                    userMssg.innerHTML = `Se desactivó a <span class="font-weight-bold">${activeUserName}</span>`;
                    userMssg.classList.remove('d-none');
                    setTimeout(() => { userMssg.classList.add('d-none') }, 3000);
                }
            })
        }
    }
    function activateUser(e) {
        e.preventDefault();
        if (e.target.classList.contains('disabledUser')) {
            const disabledUserName = e.target.parentElement.parentElement.children[0].innerHTML;
            Swal.fire({
                title: `¿Está seguro que desea activar a ${disabledUserName}?`,
                showCancelButton: true,
                confirmButtonColor: '#f53030',
                confirmButtonText: 'Si, quiero'
            }).then((result) => {
                if (result.value) {
                    userMssg.innerHTML = `Se reactivó a <span class="font-weight-bold">${disabledUserName}</span>`;
                    userMssg.classList.remove('d-none');
                    setTimeout(() => { userMssg.classList.add('d-none') }, 3000);
                }
            })
        }
    }
});
jQuery(document).ready(function ($) {
    
    $('input#adminSwitch').click(function () {
        $('#activosLabel').toggleClass('redlabel');
        $('#inactivosLabel').toggleClass('redlabel');
        $('.activos-table-wrapper').toggleClass('d-none');
        $('.inactivos-table-wrapper').toggleClass('d-none');
        
        if ($(this).is(":checked")) {
            oficinas_inactivas();
        } 
        else 
            {
                oficinas_activas();
            }
    })  
}); 

function oficinas_activas(){
    token = JSON.parse(window.localStorage.getItem('token'));
       if (token === 0)
          window.location = '../index.html';
       rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
       var estatus='1';
              var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            
              $.ajax({
                  url: dominio + 'oficinas/'+estatus,
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
                      let dataTableOficinassActivas = $('#adminOficinassActivas').DataTable({
                          destroy: true, 
                          data: resp,
                          responsive: true,
                          bFilter: true,
                          bPaginate: true,
                          bInfo: true,
                          //paging: false,
                          //searching: false,
                          aaSorting: [
                              [1, "desc"],
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
                                  render: function(data, type, row) {
                                      // Combinar campos
                                      return data.oficina;
                                  }
                              },
                              {
                                  data: null,
                                  render: function(data, type, row) {
                                      return data.direccion;
                                  }
                              },
                              {
                                data: null,
                                render: function(data, type, row) {
                                    return data.comuna;
                                }
                              },
                              {
                                data: null,
                                render: function(data, type, row) {
                                    return data.zona;
                                }
                              },
                              {
                                  data: null,
                                  render: function(data, type, row) {
                                      
                                    return data.fono;
                                      
                                  }
                              },
                              {
                                data: null,
                                render: function(data, type, row) {
                                    
                                  return data.fono2;
                                    
                                }
                              },
          
                              {
                                  data: null,
                                  className: "uniqueClassName",
                                  render: function(data, type, row) {
                                      
                                      return `<a style="cursor:pointer" onclick="editar_oficina(`+ data.id +`)"><i class="far fa-edit fa-lg text-primary"></i></a>`
                                     
                                  }
                              },
                              {
                                  data: null,
                                  className: "uniqueClassName",
                                  render: function(data, type, row) {
                                    return `<a style="cursor:pointer" onclick="inactivar_oficina(`+ data.id +`)"><i class="far fas fa-ban fa-lg text-primary activeUser"></i></a>`  
                                  }
                              },  
                          ]
               });
          
             //dataTable.buttons().container().appendTo($('.colvis-btns'));
            removeSpinner($('tbody'))
           },
           error: function(resp) {
               // var errors = [];
                removeSpinner($('tbody'))
           }
      });
} 

function oficinas_inactivas(){
    token = JSON.parse(window.localStorage.getItem('token'));
       if (token === 0)
          window.location = '../index.html';
       rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
          var estatus='0';
              var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            
              $.ajax({
                  url: dominio + 'oficinas/'+estatus,
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
                      let dataTableOficinasInactivas = $('#adminOficinasInactivas').DataTable({
                          destroy: true, 
                          data: resp,
                          responsive: true,
                          bFilter: true,
                          bPaginate: true,
                          bInfo: true,
                          //paging: false,
                          //searching: false,
                          aaSorting: [
                              [1, "desc"],
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
                                  render: function(data, type, row) {
                                      // Combinar campos
                                      return data.oficina;
                                  }
                              },
                              {
                                  data: null,
                                  render: function(data, type, row) {
                                      return data.direccion;
                                  }
                              },
                              {
                                data: null,
                                render: function(data, type, row) {
                                    return data.comuna;
                                }
                              },
                              {
                                data: null,
                                render: function(data, type, row) {
                                    return data.zona;
                                }
                              },
                              {
                                  data: null,
                                  render: function(data, type, row) {
                                      
                                    return data.fono;
                                      
                                  }
                              },
                              {
                                data: null,
                                render: function(data, type, row) {
                                    
                                  return data.fono2;
                                    
                                }
                              },
                              {
                                  data: null,
                                  className: "uniqueClassName",
                                  render: function(data, type, row) {
                                      
                                      return `<a class="disabledUser text-success" style="cursor:pointer" onclick="activar_oficina(`+ data.id +`)">Reactivar</a>`
                                     
                                  }
                              }, 
                          ]
               });
          
             //dataTable.buttons().container().appendTo($('.colvis-btns'));
            removeSpinner($('tbody'))
           },
           error: function(resp) {
               // var errors = [];
                removeSpinner($('tbody'))
           }
      });
} 

$('#crear_oficina').click(function() {
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
    //id_region=$('#region').val();
    if(validar_campos()==true){
    
    $.ajax({
        url: dominio + 'crearoficina/',
        dataType: 'json',
        type: 'Post',
        data: {
            nombre: $('#nombre_oficina').val(),
            direccion: $('#direccion').val(),
            id_comuna: $('#comuna').val(),
            telefono: $('#telefono1').val(),
            telefono2: $('#telefono2').val(),
            horario_atencion: $('#horario').val(),
            token: token
        },
        success: function(resp) {
            console.log(resp.actualizado) 
            if(resp.actualizado >0){
                swal("Oficina guardada satisfactoriamente!","", "success");
                    
                   setTimeout(llamado_oficina,2500);
            }            
        },
        error: function(resp) {
            console.log("hola"+resp)
        }
    }) 
   }

});

function activar_oficina(id){
    
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
    
    $.ajax({
        url: dominio + 'actualizarestatusoficina/',
        dataType: 'json',
        type: 'PUT',
        data: {
            id_oficina: id,
            estatus: '1',
            token: token
        },
        success: function(resp) {
            console.log(resp.actualizado) 
            if(resp.actualizado >0){
                swal("Oficina activada satisfactoriamente!","", "success");
                  
                   setTimeout(llamado_oficina,2500);
            }            
        },
        error: function(resp) {
            console.log("hola"+resp)
        }
    })    
}
function inactivar_oficina(id){
    
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
    
    $.ajax({
        url: dominio + 'actualizarestatusoficina/',
        dataType: 'json',
        type: 'PUT',
        data: {
            id_oficina: id,
            estatus: '0',
            token: token
        },
        success: function(resp) {
            console.log(resp.actualizado) 
            if(resp.actualizado >0){
                swal("Oficina inactivada satisfactoriamente!","", "success");
                  
                   setTimeout(llamado_oficina,2500);
            }  
            else {
                swal(resp.error,"", "error");
                 //alert(resp.error) 
                setTimeout(llamado_oficina,2500);
            }         
        },
        error: function(resp) {
            console.log("hola"+resp.error)
           
        }
    })    
}
function llamado_oficina(){
    
    window.location = '../page-admin/admin-oficinas.html';
    
}
////////////////////////////////////////////////////////editar oficina///////////////////////////////////

function editar_oficina(id){
    
    window.location = '../page-oficinas/edita_oficina.php?id='+id;
    
}

