function esNumbero(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    //alert(charCode)
    if(charCode > 31 && (charCode < 48 || charCode > 57)){
            return false;
    }
         
    return true;
}

$(document).ready(function(){
    $("#rutInput").on('paste', function(e){
      e.preventDefault();
      //alert('Esta acción está prohibida');
    })
    
    $("#rutInput").on('copy', function(e){
      e.preventDefault();
      //alert('Esta acción está prohibida');
    })
  })

function validarRut() {

    var rut = $('#rutInput').val();
    var dig_ver;
    var rut_no_dig_ver = 0;

    rut = rut.split(".").join("");
    rut = rut.replace('-', '');

    if (rut.length == 7)
        rut_no_dig_ver = rut.substring(0, 6);
    else if (rut.length == 8)
        rut_no_dig_ver = rut.substring(0, 7);
    else if (rut.length == 9)
        rut_no_dig_ver = rut.substring(0, 8);

    dig_ver = rut.charAt(rut.length - 1);

    if (rut_no_dig_ver == 0) {
        var errorRut = [];
        errorRut.push('<li >Rut inválido.</li>');
        $('#alert').show();
        $('#errorRut').show();
        $('#errorRut').css({ 'color': 'red' });
        $('#errorRut').html(errorRut);
        $('#rutInput').val("");

    }

    if (rut_no_dig_ver.length == 0 || rut_no_dig_ver.length > 8) {
        var errorRut = [];
        errorRut.push('<li >Rut inválido.</li>');
        $('#alert').show();
        $('#errorRut').show();
        $('#errorRut').css({ 'color': 'red' });
        $('#errorRut').html(errorRut);
        $('#rutInput').val("");
    } else {
        if (this.getDV(rut_no_dig_ver) == dig_ver) {
            return true;
        } else {
            var errorRut = [];
            errorRut.push('<li >Rut inválido.</li>');
            $('#alert').show();
            $('#errorRut').show();
            $('#errorRut').css({ 'color': 'red' });
            $('#errorRut').html(errorRut);
            $('#rutInput').val("");
        }
    }

}

function getDV(numero) {
    nuevo_numero = numero.toString().split("").reverse().join("");
    for (i = 0, j = 2, suma = 0; i < nuevo_numero.length; i++, ((j == 7) ? j = 2 : j++)) {
        suma += (parseInt(nuevo_numero.charAt(i)) * j);
    }
    n_dv = 11 - (suma % 11);
    return ((n_dv == 11) ? 0 : ((n_dv == 10) ? "K" : n_dv));
}

$('#email').change(function() {
  if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
    var errorEmail = [];
    errorEmail.push('<li>Email inválido.</li>');
    $('#alertEmail').show();
    $('#errorEmail').show();
    $('#errorEmail').css({ 'color': 'red' });
    $('#errorEmail').html(errorEmail);
    $('#email').val("");    
    }
});


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
        $('#telefono1').val("");
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

$('#crear_liquidador').click(function() {
   
    var rut = $('#rutInput').val();
    var dig_ver;
    var rut_no_dig_ver = 0;

    rut = rut.split(".").join("");
    rut = rut.replace('-', '');

    if (rut.length == 7)
        rut_no_dig_ver = rut.substring(0, 6);
    else if (rut.length == 8)
        rut_no_dig_ver = rut.substring(0, 7);
    else if (rut.length == 9)
        rut_no_dig_ver = rut.substring(0, 8);

    dig_ver = rut.charAt(rut.length - 1);
   alert($('#telefono2').val())
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
    if(validar_campos()==true){
    $.ajax({
        url: dominio + 'crearliquidador/',
        dataType: 'json',
        type: 'Post',
        data: {
            rut: rut_no_dig_ver,
            dig_verificador: dig_ver,
            razon_social: $('#razon_social').val(),
            empresa: $('#nombre_empresa').val(),
            id_region: $('#region').val(),
            email: $('#email').val(),
            telefono: $('#telefono1').val(),
            telefono2: $('#telefono2').val(),
            token: token
        },
        success: function(resp) {
            console.log(resp.actualizado) 
            if(resp.actualizado >0){
                swal("Liquidador guardado satisfactoriamente!","", "success");
                    
                   //setTimeout(llamado_liquidador,2500);
            }            
        },
        error: function(resp) {
            console.log("hola"+resp)
        }
    }) 
   }
});
function busca_liquidador() {
   
    var rut = $('#rutInput').val();
    var dig_ver;
    var rut_no_dig_ver = 0;

    rut = rut.split(".").join("");
    rut = rut.replace('-', '');

    if (rut.length == 7)
        rut_no_dig_ver = rut.substring(0, 6);
    else if (rut.length == 8)
        rut_no_dig_ver = rut.substring(0, 7);
    else if (rut.length == 9)
        rut_no_dig_ver = rut.substring(0, 8);

    dig_ver = rut.charAt(rut.length - 1);
   //alert(rut_no_dig_ver+" "+dig_ver)
    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
    
    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
    
    $.ajax({
        url: dominio + 'liquidador/'+rut_no_dig_ver,
        dataType: 'json',
        type: 'GET',
        data: {
            token: token
        },
        success: function(resp) {
            console.log(resp.actualizado) 
            if(resp.data.length >0){
                swal("Rut asociado a un liquidador!","", "error");
                $('#rutInput').val("");
            }            
        },
        error: function(resp) {
            console.log("hola"+resp)
        }
    }) 

}
function llamado_liquidador() {   
    window.location = '../page-liquidadores/nuevo-liquidador.html';  
}

function validar_campos(){
    if($('#razon_social').val()==''){
        var errorrazon_social = [];
        errorrazon_social.push('<li>Nombre o razón social es requerido.</li>');
          $('#alertrazon_social').show();
          $('#alertrazon_social').css({ 'color': 'red' });
          $('#alertrazon_social').html(errorrazon_social);
          //$('#tipo_cuenta').val("-1")
          return false;
    }
    if($('#nombre_empresa').val()==''){
        var errornombre_empresa = [];
        errornombre_empresa.push('<li>Nombre empresa es requerida.</li>');
          $('#alertnombre_empresa').show();
          $('#alertnombre_empresa').css({ 'color': 'red' });
          $('#alertnombre_empresa').html(errornombre_empresa);
          //$('#region').val("-1")
          return false;
    }
     if($('#rutInput').val()==''){
        var errorRut = [];
        errorRut.push('<li>Rut es requerido.</li>');
          $('#alert').show();
          $('#alert').css({ 'color': 'red' });
          $('#alert').html(errorRut);
          //$('#numero_cuenta').val("")
          return false;
    } 
    if($('#region').val()=='-1'){
        var errorregion = [];
        errorregion.push('<li>Región es requerido.</li>');
          $('#alertregion').show();
          $('#alertregion').css({ 'color': 'red' });
          $('#alertregion').html(errorregion);
          //$('#email_cuenta').val("")
          return false;
    }
    if($('#email').val()==''){
        var errorEmail = [];
        errorEmail.push('<li>Email es requerido.</li>');
          $('#alertEmail').show();
          $('#alertEmail').css({ 'color': 'red' });
          $('#alertEmail').html(errorEmail);
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
    
        return true;
}
$('#razon_social').keypress(function() { 
    //var errorEmailCuenta = [];
    $('#errorrazon_social').hide();
    $('#alertrazon_social').hide();
});
$('#nombre_empresa').keypress(function() { 
    //var errorEmailCuenta = [];
    $('#alertnombre_empresa').hide();
    $('#errornombre_empresa').hide();
});
$('#rutInput').keypress(function() { 
    var errorRut = [];
    $('#alert').hide();
    $('#errorRut').hide();
});
$('#region').change(function() { 
    //var errorEmailCuenta = [];
    $('#alertregion').hide();
    $('#errorregion').hide();
});
$('#email').keypress(function() { 
    //var errorEmailCuenta = [];
    $('#alertEmail').hide();
    $('#errorEmail').hide();
});
$('#telefono1').keypress(function() { 
    //var errorEmailCuenta = [];
    $('#alertTel').hide();
    $('#errorTelefono').hide();
});


