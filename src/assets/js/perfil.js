jQuery(document).ready(function ($) {
    
    let imageInput = document.querySelector('#image-upload');
    let imageRemove = document.querySelector('#profilePicRemove');
    let imageSave = document.querySelector('#profilePicSave');
    let reader = new FileReader();

    imageInput.addEventListener('change', readURL);
    imageRemove.addEventListener('click', removePic);
    imageSave.addEventListener('click', savePic);

    //Shows preview of image uploaded to the profile picture and adds save button and remove button under the image field
    function readURL() {
        if (imageInput.files && imageInput.files[0]) {
            let regexp = '^data:image+'
            let alert = document.querySelector('.card--profile-image .alert');
            reader.onload = function (e) {
                if(e.target.result.match(regexp)) {
                    $('#image-uploaded').attr('src', e.target.result);
                    imageRemove.classList.remove('d-none');
                    imageSave.classList.remove('d-none');
                } else {
                    alert.classList.remove('d-none');
                    setTimeout(() => {alert.classList.add('d-none')}, 4000);
                }
            };
            reader.readAsDataURL(imageInput.files[0]);
        }
    }
    //Removes pic from preview
    function removePic(e) {
        e.preventDefault();
        $('#image-uploaded').attr('src', '../assets/images/profile-default.png');
        imageRemove.classList.add('d-none');
    }
    //Removes the remove button and the save button from under the field
    function savePic() {
        imageRemove.classList.add('d-none');
        imageSave.classList.add('d-none');
    }
});

$('input#transferType').click(function () {
console.log($(this));
//guardar_cheque();
 if ($(this).is(":checked")) {
   $('#chequeData').removeClass('d-none');
   $('#bankAccountData').hide();
   $('label.cheque').addClass('redlabel');
   $('label.transfer').removeClass('redlabel');
   $('#nombre_cheque').html($('#nombre').val()+" "+$('#apellido_p').val()+" "+$('#apellido_m').val());
   $('#formaPago').val("C");
 } else { 
     $('#chequeData').addClass('d-none');
     $('#bankAccountData').show();
     $('label.transfer').addClass('redlabel');
     $('label.cheque').removeClass('redlabel');
     $('#formaPago').val("T");
    
 }

})

function perfil(){
    
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
    rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));

    $.ajax({
        url: dominio + 'infousuario/' + rutLogueado,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            //console.log(resp[0])
            $('#nombre').val(resp.data[0].nombres);
            $('#apellido_p').val(resp.data[0].apellidos);
            $('#apellido_m').val("");

            $('#rut').val(resp.data[0].rut+"-"+resp.data[0].dig_verificador);
            $('#fn').val(resp.data[0].fecha_nacimiento); 
            $('#email').val(resp.data[0].email);
            $('#telefono').val(resp.data[0].telefono); 
            $('#email_oculto').val(resp.data[0].email);
            $('#telefono_oculto').val(resp.data[0].telefono); 
            $('#rut_asociado').val(resp.data[0].rut+"-"+resp.data[0].dig_verificador);
        },
        error: function(resp) {
            console.log("hola"+resp)
            //removeSpinner($('tbody'))
        }
    })
}

function tipo_cuenta(){
    
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
    rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));

    $.ajax({
        url: dominio + 'infocuentas/',
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            var selected = $('#tipo_cuenta').val();
            $('#tipo_cuenta').empty();
            $("#tipo_cuenta").append('<option value=' + "-1" + '>' + "Seleccione ..." + '</option>');
 
            for(var i=0;i<resp.data.length;i++) {
               $("#tipo_cuenta").append('<option value=' + resp.data[i].id + '>' + resp.data[i].nombre + '</option>');
            }
            
        },
        error: function(resp) {
            console.log("hola"+resp)
            //removeSpinner($('tbody'))
        }
    })
}
function bancos(){
    
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
   

    $.ajax({
        url: dominio + 'infobancos/',
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            console.log(resp.data.length)
            $('#banco').empty();
            var selected = $('#banco').val();
           
            $("#banco").append('<option value=' + "-1" + '>' + "Seleccione ..." + '</option>');
 
            for(var i=0;i<resp.data.length;i++) {
               $("#banco").append('<option value=' + resp.data[i].id + '>' + resp.data[i].nombre + '</option>');
            }
            
        },
        error: function(resp) {
            console.log("hola"+resp)
            //removeSpinner($('tbody'))
        }
    })
}

function datos_forma_pago(){
    
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
    rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
    $.ajax({
        url: dominio + 'infoformapago/' + rutLogueado,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {
            console.log(resp.data.length)
            if(resp.data.length>0){
            $('#tipo_cuenta').val(resp.data[0].id_tipo_cuenta);
            $('#banco').val(resp.data[0].id_banco);
            $('#numero_cuenta').val(resp.data[0].nro_cuenta);
            $('#email_cuenta').val(resp.data[0].email); 

            $('#tipo_cuenta_oculto').val(resp.data[0].id_tipo_cuenta);
            $('#banco_oculto').val(resp.data[0].id_banco); 
            $('#numero_cuenta_oculto').val(resp.data[0].nro_cuenta);
            $('#email_cuenta_oculto').val(resp.data[0].email); 
        }
               
        },
        error: function(resp) {
            console.log("hola"+resp)
            //removeSpinner($('tbody'))
        }
    })
}


function valida_email() {
  if($("#email").val().length > 0){
    if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
        var errorEmail = [];
        errorEmail.push('<li>Email inválido.</li>');
        $('#alert').show();
        $('#errorEmail').show();
        $('#errorEmail').css({ 'color': 'red' });
        $('#errorEmail').html(errorEmail);
        $('#email').val("")
        return false;
    }
    else{
        return true;
    }
  }
  else{
    var errorEmail = [];
    errorEmail.push('<li>Email es requerido.</li>');
    $('#alert').show();
    $('#errorEmail').show();
    $('#errorEmail').css({ 'color': 'red' });
    $('#errorEmail').html(errorEmail);
    return false;

  }
}
function valida_telefono() {
    if($("#telefono").val().length > 0){
 
      if(($("#telefono").val().length == 11)||($("#telefono").val().length == 12)) {
        return true;
      }
      else{
        var errorTelefono = [];
        errorTelefono.push('<li>Teléfono inválido (ej: 56999999999).</li>');
        $('#alertTel').show();
        $('#alertTel').css({ 'color': 'red' });
        $('#alertTel').html(errorTelefono);
        $('#telefono').val("")
        return false;
      }
    }
    else{
      var errorTelefono = [];
      errorTelefono.push('<li>Teléfono es requerido.</li>');
      $('#alertTel').show();
      $('#alertTel').css({ 'color': 'red' });
      $('#alertTel').html(errorTelefono);
      return false;
  
    }
  }

$('#email').keypress(function() { 
    var errorEmail = [];
    $('#alert').hide();
    $('#errorEmail').hide();
}); 

$('#telefono').keypress(function() { 
    var errorTelefono = [];
    $('#alertTel').hide();
    $('#errorTelefono').hide();
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
    $("#numero_cuenta").on('paste', function(e){
      e.preventDefault();
      //alert('Esta acción está prohibida');
    })
    
    $("#numero_cuenta").on('copy', function(e){
      e.preventDefault();
      //alert('Esta acción está prohibida');
    })
  })

$(document).ready(function(){
    $("#telefono").on('paste', function(e){
      e.preventDefault();
      //alert('Esta acción está prohibida');
    })
    
    $("#telefono").on('copy', function(e){
      e.preventDefault();
      //alert('Esta acción está prohibida');
    })
  })

  $('#profileEditPersonalData').click(function() {
    
    $('#email').removeAttr("disabled");
    $('#telefono').removeAttr("disabled");
    $('#profileSavePersonalData').removeClass('d-none').addClass('d-block');//muestra el menu que le corresponde
    $('#profileCancelarPersonalData').removeClass('d-none').addClass('d-block');//muestra el menu que le corresponde
    $('#profileEditPersonalData').removeClass('d-block').addClass('d-none');//muestra el menu que le corresponde

});


  $('#profileCancelarPersonalData').click(function() {
    $('#email').val($('#email_oculto').val());
    $('#telefono').val($('#telefono_oculto').val()); 
    $('#email').attr('disabled','disabled');
    $('#telefono').attr('disabled','disabled');

    $('#alert').hide();
    $('#errorEmail').hide();
    
    $('#alertTel').hide();
    $('#errorTelefono').hide();
   
    $('#profileSavePersonalData').removeClass('d-block').addClass('d-none');//muestra el menu que le corresponde
    $('#profileCancelarPersonalData').removeClass('d-block').addClass('d-none');//muestra el menu que le corresponde
    $('#profileEditPersonalData').removeClass('d-none').addClass('d-block');//muestra el menu que le corresponde

});

$('#profileSavePersonalData').click(function() {
    $('#profileEditPersonalData').removeClass('d-block').addClass('d-none');
    
    if((valida_email()==true)&&(valida_telefono()==true)){
        var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

        token = JSON.parse(window.localStorage.getItem('token'));
        if (token === 0) window.location = './index.html';
        rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        $.ajax({
            url: dominio + 'actualizarmiusuario',
            dataType: 'json',
            type: 'put',
            data: {
                 rut_usuario: rutLogueado,
                 email: $('#email').val(),
                 telefono: $('#telefono').val(),
                 token: token
            },
            success: function(resp) {
                console.log("lolo"+resp.actualizado)
                if(resp.actualizado >0){
                    swal("Datos actulizados satisfactoriamente!","", "success");
                        
                       setTimeout(llamado,2500);
                }
               
            },
            error: function(resp) {
                console.log(resp)
            }
        });
    }
});

function llamado() {   
    window.location = '../page-perfil/perfil.html';  
}


$('#profileEditBankData').click(function() {
   
    $('#tipo_cuenta').removeAttr("disabled");
    $('#banco').removeAttr("disabled");
    $('#numero_cuenta').removeAttr("disabled");
    $('#email_cuenta').removeAttr("disabled");
    $('#profileEditBankData').hide(); 
    $('#profileSaveBankData').removeClass('d-none').addClass('d-block');//muestra el menu que le corresponde
    $('#profileCancelarBankData').removeClass('d-none').addClass('d-block');//muestra el menu que le corresponde
    $('#profileEditBankData').removeClass('d-block').addClass('d-none');//muestra el menu que le corresponde

}); 
$('#profileCancelarBankData').click(function() {
   
    $('#tipo_cuenta').val($('#tipo_cuenta_oculto').val());
    $('#banco').val($('#banco_oculto').val()); 
    $('#numero_cuenta').val($('#numero_cuenta_oculto').val());
    $('#email_cuenta').val($('#email_cuenta_oculto').val()); 
    $('#tipo_cuenta').attr('disabled','disabled');
    $('#banco').attr('disabled','disabled');
    $('#numero_cuenta').attr('disabled','disabled');
    $('#email_cuenta').attr('disabled','disabled');

    $('#alertTipoCuenta').hide();
    $('#errorTipoCuenta').hide();

    $('#alertBanco').hide();
    $('#errorBanco').hide();
    
    $('#alertNumeroCuenta').hide();
    $('#errorNumeroCuenta').hide();
    
    $('#alertEmailCuenta').hide();
    $('#errorEmailCuenta').hide();

    $('#profileSaveBankData').removeClass('d-block').addClass('d-none');//muestra el menu que le corresponde
    $('#profileCancelarBankData').removeClass('d-block').addClass('d-none');//muestra el menu que le corresponde
    $('#profileEditBankData').removeClass('d-none').addClass('d-block');//muestra el menu que le corresponde

});
 

$('#email_cuenta').keypress(function() { 
    var errorEmailCuenta = [];
    $('#alertCuenta').hide();
    $('#errorEmailCuenta').hide();
}); 

$('#email_cuenta').change(function() {
    
    if($("#email_cuenta").val().indexOf('@', 0) == -1 || $("#email_cuenta").val().indexOf('.', 0) == -1) {
        var errorEmailCuenta = [];
        errorEmailCuenta.push('<li>Email inválido.</li>');
        $('#alertCuenta').show();
        $('#errorEmailCuenta').show();
        $('#errorEmailCuenta').css({ 'color': 'red' });
        $('#errorEmailCuenta').html(errorEmailCuenta);
        $('#email_cuenta').val("")
    }
});

$('#profileSaveBankData').click(function() {
    $('#profileEditBankData').removeClass('d-block').addClass('d-none');
    //alert($('#formaPago').val(),)
    if(validar_forma_pago()==true){
        var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

        token = JSON.parse(window.localStorage.getItem('token'));
        if (token === 0) window.location = './index.html';
        rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        $.ajax({
            url: dominio + 'actualizarmiusuarioformapago',
            dataType: 'json',
            type: 'put',
            data: {
                 rut: rutLogueado,
                 forma_pago:$('#formaPago').val(),
                 id_tipo_cuenta:$('#tipo_cuenta').val(),
                 id_banco:$('#banco').val(),
                 nro_cuenta:$('#numero_cuenta').val(),
                 email: $('#email_cuenta').val(),
                 token: token
            },
            success: function(resp) {
                console.log(resp.actualizado)
                if(resp.actualizado >0){
                    swal("Datos actulizados satisfactoriamente!","", "success");
                        
                       setTimeout(llamado,2500);
                }
               
            },
            error: function(resp) {
                console.log(resp)
            }
        }); 

    }
});

function validar_forma_pago(){
    if($('#tipo_cuenta').val()=='-1'){
        var errorTipoCuenta = [];
        errorTipoCuenta.push('<li>Tipo de cuenta es requerida.</li>');
          $('#alertTipoCuenta').show();
          $('#alertTipoCuenta').css({ 'color': 'red' });
          $('#alertTipoCuenta').html(errorTipoCuenta);
          $('#tipo_cuenta').val("-1")
          return false;
    }
    if($('#banco').val()=='-1'){
        var errorBanco = [];
        errorBanco.push('<li>Banco es requerida.</li>');
          $('#alertBanco').show();
          $('#alertBanco').css({ 'color': 'red' });
          $('#alertBanco').html(errorBanco);
          $('#banco').val("-1")
          return false;
    }
    if($('#numero_cuenta').val()==''){
        var errorNumeroCuenta = [];
        errorNumeroCuenta.push('<li>Número de cuenta es requerida.</li>');
          $('#alertNumeroCuenta').show();
          $('#alertNumeroCuenta').css({ 'color': 'red' });
          $('#alertNumeroCuenta').html(errorNumeroCuenta);
          $('#numero_cuenta').val("")
          return false;
    }
    if($('#email_cuenta').val()==''){
        var errorEmailCuenta = [];
        errorEmailCuenta.push('<li>Email es requerido.</li>');
          $('#alertEmailCuenta').show();
          $('#alertEmailCuenta').css({ 'color': 'red' });
          $('#alertEmailCuenta').html(errorEmailCuenta);
          $('#email_cuenta').val("")
          return false;
    }
    
        return true;
}
$('#profileCancelarFormaPagoCheque').click(function() {
   
    window.location = '../page-perfil/perfil.html';  
    
}); 

$('#profileSaveFormaPagoCheque').click(function() {
   //alert($('#formaPago').val())
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

        token = JSON.parse(window.localStorage.getItem('token'));
        if (token === 0) window.location = './index.html';
        rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        $.ajax({
            url: dominio + 'actualizarmiusuarioformapago',
            dataType: 'json',
            type: 'put',
            data: {
                 rut: rutLogueado,
                 forma_pago:$('#formaPago').val(),
                 id_tipo_cuenta:$('#tipo_cuenta').val(),
                 id_banco:$('#banco').val(),
                 nro_cuenta:$('#numero_cuenta').val(),
                 email: $('#email_cuenta').val(),
                 token: token
            },
            success: function(resp) {
                console.log(resp.actualizado)
                if(resp.actualizado >0){
                    swal("Datos actulizados satisfactoriamente!","", "success");
                        
                       setTimeout(llamado,2500);
                }
               
            },
            error: function(resp) {
                console.log(resp)
            }
        });   
    
}); 


 
