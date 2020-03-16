////////////////////////////////////////////////////////nueva oficina///////////////////////////////////
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
                //alert(resp[i].id+" "+resp[i].nombre)
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
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
    id_region=$('#region').val();

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
                //alert(resp[i].id)
               $("#comuna").append('<option value=' + resp.data[i].id + '>' + resp.data[i].nombre + '</option>');
            }
            
        },
        error: function(resp) {
            console.log("hola"+resp)
        }
    })  
    
});

$(document).on('change', '#comuna', function(event) {
    $('#nombre_oficina').val($("#comuna option:selected").text());
});

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
function llamado_oficina() {   
    window.location = '../page-oficinas/nueva_oficina.html';  
}

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
        $('#telefono1').val("")
      }
});

$('#telefono2').change(function() {
 
      if($("#telefono2").val().length != 11) {
        var errorTelefono2 = [];
        errorTelefono2.push('<li>Teléfono inválido (ej: 56999999999).</li>');
        $('#alertTel2').show();
        $('#alertTel2').css({ 'color': 'red' });
        $('#alertTel2').html(errorTelefono2);
        $('#telefono2').val("")
      }
});
$('#telefono2').keypress(function() { 
    //var errorEmailCuenta = [];
    $('#alertTel2').hide();
    $('#errorTelefono2').hide();
}); 

