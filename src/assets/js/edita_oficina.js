////////////////////////////////////////////////////////edita oficina///////////////////////////////////
$(document).ready(function(){
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
               $("#region").append('<option value=' + resp[i].id + '>' + resp[i].nombre + '</option>');
            }
            
        },
        error: function(resp) {
            console.log("hola"+resp)
            //removeSpinner($('tbody'))
        }
    })  
})

$('#region').change(function() { 
   var id_region=$('#region').val()
   //alert(id_region)
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';

    $.ajax({
        url: dominio + 'inforegioncomunas/'+id_region,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            console.log(resp.length)
            $('#comuna').empty();
            var selected = $('#comuna').val();
           
            $("#comuna").append('<option value=' + "-1" + '>' + "Seleccione ..." + '</option>');
 
            for(var i=0;i<resp.data.length;i++) {
               $("#comuna").append('<option value=' + resp.data[i].id + '>' + resp.data[i].nombre + '</option>');
            }
            
        },
        error: function(resp) {
            console.log("hola"+resp)
        }
    })  
    
});

function busca_comuna(id) { 

     var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
     
     token = JSON.parse(window.localStorage.getItem('token'));
     if (token === 0) window.location = './index.html';
 
     $.ajax({
         url: dominio + 'comuna/'+id,
         dataType: 'json',
         type: 'GET',
         data: {
 
             token: token
         },
         success: function(resp) {
             console.log(resp.data[0].comuna)
             
            $("#comuna").append('<option value=' + resp.data[0].id_comuna + '>' + resp.data[0].comuna + '</option>');
            $("#region").append('<option value=' + resp.data[0].id_region + '>' + resp.data[0].region + '</option>');
            regiones(resp.data[0].id_region,resp.data[0].id_comuna);
             
         },
         error: function(resp) {
             console.log("hola"+resp)
         }
     })  
     
 }
 function regiones(id_region,id_comuna){
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
                if(resp[i].id==id_region){

                    $("#region").append('<option value=' + resp[i].id + '>' + resp[i].nombre + '</option>');
                    $("#region option[value="+ id_region +"]").attr("selected",true);
                }
                else{
                    $("#region").append('<option value=' + resp[i].id + '>' + resp[i].nombre + '</option>');
                  }
            }
           comunas(id_region,id_comuna);
        },
        error: function(resp) {
            console.log("hola"+resp)
            //removeSpinner($('tbody'))
        }
    })  
 }

 function comunas(id_region,id_comuna){
    
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';

    $.ajax({
        url: dominio + 'inforegioncomunas/'+id_region,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            console.log(resp.length)
            $('#comuna').empty();
            var selected = $('#comuna').val();
           
            $("#comuna").append('<option value=' + "-1" + '>' + "Seleccione ..." + '</option>');
 
            for(var i=0;i<resp.data.length;i++) {
                if(resp.data[i].id==id_comuna){

                    $("#comuna").append('<option value=' + resp.data[i].id + '>' + resp.data[i].nombre + '</option>');
                    $("#comuna option[value="+ id_comuna +"]").attr("selected",true);
                }
                else{
                    $("#comuna").append('<option value=' + resp.data[i].id + '>' + resp.data[i].nombre + '</option>');
                  }
            }
            
        },
        error: function(resp) {
            console.log("hola"+resp)
        }
    })  
 }


 $(document).on('change', '#comuna', function(event) {
    $('#nombre_oficina').val($("#comuna option:selected").text());
}); 

$('#edita_oficina').click(function() {
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
    //id_region=$('#region').val();
    if(validar_campos()==true){
    
    $.ajax({
        url: dominio + 'actualizaroficina/',
        dataType: 'json',
        type: 'PUT',
        data: {
            id_oficina: $('#id_oficina').val(),
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
                swal("Oficina editada satisfactoriamente!","", "success");
                    
                   setTimeout(llamado_oficina,2500);
            }            
        },
        error: function(resp) {
            console.log("hola"+resp)
        }
    }) 
   }

});
function llamado_oficina() {   
    window.location = '../page-admin/admin-oficinas.html';  
}

$(document).ready(function() {

    var id=$('#id_oficina').val()
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = '../index.html'; 

    $.ajax({
        url: dominio + 'oficina/' + id,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) { 
            console.log(resp[0].nombre)
            $('#direccion').val(resp[0].direccion)
            $('#region').val(resp[0].id_zona)
            $('#comuna').val(resp[0].id_comuna)
            $('#nombre_oficina').val(resp[0].nombre)
            $('#telefono1').val(resp[0].fono)
            $('#telefono2').val(resp[0].fono2)
            $('#horario').val(resp[0].horario_atencion)
            busca_comuna(resp[0].id_comuna)   
            
        },
        error: function(resp) {
            console.log("hola"+resp)
           
        }
    })

})

function validar_campos(){
    if($('#direccion').val()==''){
        var errordireccion = [];
        errordireccion.push('<li>Direccioón es requerida.</li>');
          $('#alertdireccion').show();
          $('#alertdireccion').css({ 'color': 'red' });
          $('#alertdireccion').html(errordireccion);
          //$('#tipo_cuenta').val("-1")
          return false;
    }
    if($('#region').val()=='-1'){
        var errorregion = [];
        errorregion.push('<li>Región es requerida.</li>');
          $('#alertregion').show();
          $('#alertregion').css({ 'color': 'red' });
          $('#alertregion').html(errorregion);
          //$('#region').val("-1")
          return false;
    }
    if($('#comuna').val()=='-1'){
        var errorcomuna = [];
        errorcomuna.push('<li>Comuna es requerida.</li>');
          $('#alertcomuna').show();
          $('#alertcomuna').css({ 'color': 'red' });
          $('#alertcomuna').html(errorcomuna);
          //$('#numero_cuenta').val("")
          return false;
    }
    if($('#nombre_oficina').val()==''){
        var errorNombreOficina = [];
        errorNombreOficina.push('<li>Nombre es requerido.</li>');
          $('#alertNombreOficina').show();
          $('#alertNombreOficina').css({ 'color': 'red' });
          $('#alertNombreOficina').html(errorNombreOficina);
          //$('#email_cuenta').val("")
          return false;
    }
    if($('#telefono1').val()==''){
        var errorTelefono = [];
        errorTelefono.push('<li>Teléfono 1 es requerido.</li>');
          $('#alertTel').show();
          $('#alertTel').css({ 'color': 'red' });
          $('#alertTel').html(errorTelefono);
          //$('#email_cuenta').val("")
          return false;
    }
    if($('#horario').val()==''){
        var errorhorario = [];
        errorhorario.push('<li>Horario es requerido.</li>');
          $('#alerthorario').show();
          $('#alerthorario').css({ 'color': 'red' });
          $('#alerthorario').html(errorhorario);
          //$('#email_cuenta').val("")
          return false;
    }
    
        return true;
}
$('#direccion').keypress(function() { 
    //var errorEmailCuenta = [];
    $('#errordireccion').hide();
    $('#alertdireccion').hide();
});
$('#region').change(function() { 
    //var errorEmailCuenta = [];
    $('#alertregion').hide();
    $('#errorregion').hide();
});
$('#comuna').change(function() { 
    //var errorEmailCuenta = [];
    $('#alertcomuna').hide();
    $('#errorcomuna').hide();
});
$('#nombre_oficina').keypress(function() { 
    //var errorEmailCuenta = [];
    $('#alertNombreOficina').hide();
    $('#errorNombreOficina').hide();
});
$('#telefono1').keypress(function() { 
    //var errorEmailCuenta = [];
    $('#alertTel').hide();
    $('#errorTelefono').hide();
});
$('#horario').keypress(function() { 
    //var errorEmailCuenta = [];
    $('#alerthorario').hide();
    $('#errorhorario').hide();
});

function esNumbero(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    //alert(charCode)
    if(charCode > 31 && (charCode < 48 || charCode > 57)){
            return false;
    }
         
    return true;
}

$(document).ready(function(){
    $("#telefono1").on('paste', function(e){
      e.preventDefault();
      //alert('Esta acción está prohibida');
    })
    
    $("#telefono1").on('copy', function(e){
      e.preventDefault();
      //alert('Esta acción está prohibida');
    })
  })

$(document).ready(function(){
    $("#telefono2").on('paste', function(e){
      e.preventDefault();
      //alert('Esta acción está prohibida');
    })
    
    $("#telefono2").on('copy', function(e){
      e.preventDefault();
      //alert('Esta acción está prohibida');
    })
  })

  $('#telefono1').change(function() {
    
      if($("#telefono1").val().length != 11) {
        var errorTelefono = [];
        errorTelefono.push('<li>Teléfono inválido (ej: 56999999999).</li>');
        $('#alertTel').show();
        $('#alertTel').css({ 'color': 'red' });
        $('#alertTel').html(errorTelefono);
        //$('#telefono1').val("")
      }
});

$('#telefono2').change(function() {
 
      if($("#telefono2").val().length != 11) {
        var errorTelefono2 = [];
        errorTelefono2.push('<li>Teléfono inválido (ej: 56999999999).</li>');
        $('#alertTel2').show();
        $('#alertTel2').css({ 'color': 'red' });
        $('#alertTel2').html(errorTelefono2);
        //$('#telefono2').val("")
      }
});
$('#telefono2').keypress(function() { 
    //var errorEmailCuenta = [];
    $('#alertTel2').hide();
    $('#errorTelefono2').hide();
}); 

