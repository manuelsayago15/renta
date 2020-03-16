/*jQuery(document).ready(function ($) {
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
                    liquidadores_activos();
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
                    liquidadores_inactivos();
                }
            })
        }
    }
});*/

jQuery(document).ready(function ($) {
    
    $('input#adminSwitch').click(function () {
        $('#activosLabel').toggleClass('redlabel');
        $('#inactivosLabel').toggleClass('redlabel');
        $('.activos-table-wrapper').toggleClass('d-none');
        $('.inactivos-table-wrapper').toggleClass('d-none');
        
        if ($(this).is(":checked")) {
            liquidadores_inactivos();
        } 
        else 
            {
                liquidadores_activos();
            }
    })  
}); 

function liquidadores_activos(){
    token = JSON.parse(window.localStorage.getItem('token'));
       if (token === 0)
          window.location = '../index.html';
       rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
          var estatus='1';
              var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            
              $.ajax({
                  url: dominio + 'liquidadores/'+estatus,
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
                      let dataTableOficinassActivas = $('#adminLiquidadoressActivos').DataTable({
                          destroy: true, 
                          data: resp.data,
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
                                     
                                      return data.razon_social;
                                  }
                              },
                              {
                                  data: null,
                                  className: "uniqueClassName",
                                  render: function(data, type, row) {
                                      return data.rut+"-"+data.dig_verificador;
                                  }
                              },
                              {
                                data: null,
                                render: function(data, type, row) {
                                    return data.empresa;
                                }
                              },
                              {
                                data: null,
                                render: function(data, type, row) {
                                    return data.region;
                                }
                              },
                              {
                                  data: null,
                                  render: function(data, type, row) {
                                      
                                    return data.email;
                                      
                                  }
                              },
                              {
                                data: null,
                                render: function(data, type, row) {
                                  if(data.telefono2!=null)  
                                    return data.telefono+" "+data.telefono2;
                                  else
                                  return data.telefono;
                                    
                                }
                              },
                              {
                                  data: null,
                                  className: "uniqueClassName",
                                  render: function(data, type, row) {
                                      //var rut=data.rut+'-'+data.dig_verificador;
                                      return `<a style="cursor:pointer" onclick="editar_liquidador(`+ data.rut+','+data.dig_verificador +`)"><i class="far fa-edit fa-lg text-primary"></i></a>`
                                     
                                  }
                              },
                              {
                                  data: null,
                                  className: "uniqueClassName",
                                  render: function(data, type, row) {
                                    //var rs=data.razon_social;
                                    return `<a style="cursor:pointer" onclick="inactivar_liquidador(`+ data.rut+','+data.dig_verificador +`)"><i class="far fas fa-ban fa-lg text-primary activeUser"></i></a>`  
                                  }
                              },  
                          ]
               });
          
            // dataTable.buttons().container().appendTo($('.colvis-btns'));
            removeSpinner($('tbody'))
           },
           error: function(resp) {
               // var errors = [];
                removeSpinner($('tbody'))
           }
      });
} 

function liquidadores_inactivos(){

    token = JSON.parse(window.localStorage.getItem('token'));
       if (token === 0)
          window.location = '../index.html';
      // rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
          var estatus='0';
              var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
            
              $.ajax({
                  url: dominio + 'liquidadores/'+estatus,
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
                      let dataTableOficinasInactivas = $('#adminLiquidadoresInactivos').DataTable({
                          destroy: true, 
                          data: resp.data,
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
                                      return data.razon_social;
                                  }
                              },
                              {
                                  data: null,
                                  render: function(data, type, row) {
                                      return data.rut+"-"+data.dig_verificador;
                                  }
                              },
                              {
                                data: null,
                                render: function(data, type, row) {
                                    return data.empresa;
                                }
                              },
                              {
                                data: null,
                                render: function(data, type, row) {
                                    return data.region;
                                }
                              },
                              {
                                  data: null,
                                  render: function(data, type, row) {
                                      
                                    return data.email;
                                      
                                  }
                              },
                              {
                                data: null,
                                render: function(data, type, row) { 
                                if(data.telefono2!=null)  
                                    return data.telefono+" "+data.telefono2;
                                else
                                    return data.telefono;
                                    
                                }
                              },
                              {
                                  data: null,
                                  className: "uniqueClassName",
                                  render: function(data, type, row) {
                                      
                                      return `<a class="disabledUser text-success" style="cursor:pointer" onclick="activar_liquidador(`+ data.rut+`)">Reactivar</a>`
                                     
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

function activar_liquidador(rut){
    //alert(rut)
    const userMssg = document.querySelector('.user-message');
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
   
    //const disabledUserName = e.target.parentElement.parentElement.children[0].innerHTML;
    Swal.fire({
        title: `¿Está seguro que desea activar a `+rut+`?`,
        showCancelButton: true,
        confirmButtonColor: '#f53030',
        confirmButtonText: 'Si, quiero'
    }).then((result) => {
        if (result.value) {
            $.ajax({
                url: dominio + 'actualizarestatusliquidador/',
                dataType: 'json',
                type: 'PUT',
                data: {
                    rut: rut,
                    estatus: '1',
                    token: token
                },
                success: function(resp) {
                    console.log(resp.actualizado) 
                    liquidadores_inactivos();
                    if(resp.actualizado >0){
                        userMssg.innerHTML = `Se reactivó a <span class="font-weight-bold">`+rut+`</span>`;
                       userMssg.classList.remove('d-none');
                       setTimeout(() => { userMssg.classList.add('d-none') }, 3000);
                      
                    }            
                },
                error: function(resp) {
                    console.log("hola"+resp)
                }
            })    
           
        }
    })
   
}
function inactivar_liquidador(rut){
    //alert(rs)
    //var rut=r;
    //var razon_social=rs;
    const userMssg = document.querySelector('.user-message');
    //const activeUserName = e.target.parentElement.parentElement.children[0].innerHTML;
    
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
    
    Swal.fire({
        title: `¿Está seguro que quiere desactivar a `+rut+`?`,
        showCancelButton: true,
        confirmButtonColor: '#f53030',
        confirmButtonText: 'Si, quiero'
    }).then((result) => {
        if (result.value) {

            $.ajax({
                url: dominio + 'actualizarestatusliquidador/',
                dataType: 'json',
                type: 'PUT',
                data: {
                    rut: rut,
                    estatus: '0',
                    token: token
                },
                success: function(resp) {
                    console.log(resp.actualizado) 
                    liquidadores_activos();
                    if(resp.actualizado >0){
                        userMssg.innerHTML = `Se desactivó a <span class="font-weight-bold">`+rut+`</span>`;
                        userMssg.classList.remove('d-none');
                        setTimeout(() => { userMssg.classList.add('d-none') }, 3000);
                        
                    }  
                    else {
                        swal(resp.error,"", "error");
                         //alert(resp.error) 
                        setTimeout(llamado_liquidador,2500);
                    }         
                },
                error: function(resp) {
                    console.log("hola"+resp.error)
                   
                }
            })

           
        }
    })
    
}
function llamado_liquidador(){
    
    window.location = '../page-admin/admin-liquidadores.html';
    
    
}
////////////////////////////////////////////////////////editar oficina///////////////////////////////////

function editar_liquidador(rut,dv){
    //alert(rut+" "+dv)
    var rut=rut+"-"+dv
    window.location = '../page-liquidadores/edita_liquidadores.php?rut='+rut;
    
}

