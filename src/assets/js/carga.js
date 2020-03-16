//Solo permite introducir numeros.
function esNumbero(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    //alert(charCode)
    if(charCode > 31 && (charCode < 48 || charCode > 57)){
            return false;
    }
         
    return true;
}

$(document).ready(function(){
    $("#itemInput").on('paste', function(e){
      e.preventDefault();
      //alert('Esta acción está prohibida');
    })
    
    $("#itemInput").on('copy', function(e){
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

function limpiarErrorRut() {
    var errorRut = [];
    $('#alert').hide();
    $('#errorRut').hide();

}

function num_per() {

    if (($('#itemInput').val() < 1) || ($('#itemInput').val() > 500)) {
        var errorItem = [];
        errorItem.push('<li >Ítem entre 1 y 500.</li>');
        $('#alert').show();
        $('#errorItem').show();
        $('#errorItem').css({ 'color': 'red' });
        $('#errorItem').html(errorItem);
        $('#itemInput').val("");
    }
}

function limpiarErrorItem() {
    var errorRut = [];
    $('#alert').hide();
    $('#errorItem').hide();

}

function buscaProductos() {

    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
    userData = JSON.parse(window.localStorage.getItem('rutLogueado'));

    $.ajax({
        url: dominio + 'productosplanes',
        dataType: 'json',
        type: 'GET',
        data: {
            token: token
        },
        success: function(resp) {
            $.each(resp, function(key, registro) {
                $("#productoSel").append('<option value=' + registro.id + '>' + registro.nombre + '</option>');
            });
        },
        error: function(resp) {
            console.log(resp)
        }
    });
}

function buscaOficinas() {

    oficina = JSON.parse(window.localStorage.getItem('oficina'));
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
}

function buscaPlanes() {

    var producto = $('#productoSel').val();

    var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir

    token = JSON.parse(window.localStorage.getItem('token'));
    if (token === 0) window.location = './index.html';
    userData = JSON.parse(window.localStorage.getItem('rutLogueado'));

    $.ajax({
        url: dominio + 'planes/' + producto,
        dataType: 'json',
        type: 'GET',
        data: {

            token: token
        },
        success: function(resp) {

            var selected = $('#planeSel').val();
            $('#planeSel').empty();
            $("#planeSel").append('<option value=' + "" + '>' + "Seleccione ..." + '</option>');
            $.each(resp, function(key, registro) {
                $("#planeSel").append('<option value=' + registro.id_plan + '>' + registro.nombre_plan + '</option>');
            });
        },
        error: function(resp) {
            console.log(resp)
        }
    });
}
let fileTemplate = `
  <div class="dropzone-preview-template">
      <div id="template-preview" class="dz-preview dz-nofile-preview">
          <div class="small">
              <span data-dz-name></span> 
              <span>(<span class="dz-size" data-dz-size></span>)</span>
              <span data-dz-errormessage class="text-danger error-message"></span>
              <span class="dz-success-mark text-success"><i class="typcn typcn-tick"></i></span>
              <span class="dz-error-mark text-danger d-none d-lg-inline"><i class="typcn typcn-delete-outline"></i></span>
          </div>
      </div>
      <span class="dz-preview dz-bar d-none d-xl-inline"><span class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></span></span>
  </div>
`;
let dzSectionInnerText = document.querySelector('.dropfiles-section.inner-text p');
let dzSectionButton = document.querySelector('.dropfiles-section.inner-text button');

Dropzone.autoDiscover = false;

var dropzone = new Dropzone('#uploadFile', {
    url: "#",
    clickable: ['#examinar','#uploadFile'],
    method: "POST",
    paramName: "archivos",
    uploadMultiple: true,
    addRemoveLinks: true,
    filesizeBase: 1024,
    acceptedFiles: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/msword, .jpeg, .jpg, image/png, application/pdf, application/xls, application/excel, application/vnd.ms-excel, application/vnd.ms-excel; charset=binary, application/msexcel, application/x-excel, application/x-msexcel, application/x-ms-excel, application/x-dos_ms_excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    maxFilesize: 25,
    dictFileTooBig: "El archivo es muy grande. Tamaño máximo permitido: {{maxFilesize}}MB.",
    dictDefaultMessage: "Cargue sus archivos aquí",
    dictFallbackMessage: "Su navegador no soporta la carga de archivos mediante arrastre de los mismos.",
    dictFallbackText: "Por favor utilice el siguiente formulario para subir sus archivos.",
    dictInvalidFileType: "Intenta cargar archivos que su tipo no es permitido.",
    dictCancelUpload: "Cancelar carga",
    dictCancelUploadConfirmation: "¿Está seguro que desea cancelar esta carga?",
    dictRemoveFile: "x",
    previewTemplate: fileTemplate,
    init: function() {
         this.on("error", function (archivos, errorMessage) {
            if (archivos.status === 'error' && errorMessage != 'Server responded with 0 code.') {
                dropzone.removeFile(archivos);
                //alert(errorMessage)
                swal("¡Error!", errorMessage);
            } else if (errorMessage === 'Server responded with 0 code.'){
                let errorMark = file.previewElement.children[0].children[0].children[4];
                errorMark.style.opacity = '1';
            }
        }); 

        this.on("success", function(archivos, response) {
            var succesMark = document.querySelectorAll('.dz-success-mark');
            succesMark.forEach(function(element) {
                element.style.opacity = '1';

            })
        });
        this.on("addedfile", function (archivos) {
            //To disable uploading of folders
            if (archivos.type === "") {
                dropzone.removeFile(archivos);
            }
            // To change text message on top of dropzone and show button when a file is added to dropzone
            dzSectionInnerText.innerHTML = 'Puedes subir más archivos arrastrándolos a la zona inferior o dando click aquí:';
            dzSectionButton.classList.remove('d-none');
        });
        this.on("removedfile", function(archivos) {
            // To change message back to its original text when the dropzone has no files 
            let uploadZone = document.querySelector('#uploadFile');
            if(uploadZone.children.length === 1) {
                dzSectionInnerText.innerHTML = 'Elija los archivos que desea cargar en su propuesta';
                dzSectionButton.classList.add('d-none');
            } 
        });



    }
});

function comprobar() {
    var files = new Array();
    files = $('#uploadFile').get(0).dropzone.getAcceptedFiles(); //captura de los archivos en la zona
    var archs = new Array();
    var i;
    var k;
    var p;
    for (p = 0; p < dropzone.files.length; p++) {
        archs[p] = files[p].name;
    }
    for (i = 0; i < dropzone.files.length - 1; i++) {
        for (k = i + 1; k < dropzone.files.length; k++) {
            if (archs[i] == archs[k]) {
                return false;
            }
        }
    }
    return true;
}


$(function() {
    $("#formulario").on("submit", function(e) {
        e.preventDefault();
        var files = $('#uploadFile').get(0).dropzone.getAcceptedFiles(); //captura de los archivos en la zona

        var rut_no_dig_ver = 0;
        var dig_ver = 0;
        //var dv_logueado=0;
        //dv_logueado = JSON.parse(window.localStorage.getItem('dvUsuario'));
        //alert(dv_logueado)
        if (validar() == true) {

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
            if (comprobar() == true) {

                token = JSON.parse(window.localStorage.getItem('token'));
                if (token === 0) window.location = './index.html';
                rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
                dv_logueado = JSON.parse(window.localStorage.getItem('dvLogueado'));
                console.log(dv_logueado)
                var formData = new FormData();
                formData.append("rut_intermediario", rutLogueado);
                formData.append("dv_intermediario", dv_logueado);
                //formData.append("directorio", JSON.stringify(files));

                for (var i = 0; i < dropzone.files.length; i++) {
                    formData.append("directorio" + i, files[i]);
                }

                formData.append("rut_cliente", rut_no_dig_ver);
                formData.append("dig_ver_cliente", dig_ver);
                formData.append("id_oficina", $('#oficinasSel').val());
                formData.append("id_plan", $('#planeSel').val());
                formData.append("num_items", $('#itemInput').val());
                formData.append("token", token);

                var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
                $.ajax({
                    url: dominio + "propuestas",
                    type: "post",
                    dataType: "json",
                    data: formData,
                    success: function(resp) {
                        removeSpinner($('body'));
                        swal("Datos cargados satisfactoriamente!", "Número de propuesta asignado: "+resp.data.id_propuesta, "success");
                        //window.location = './page-carga-formularios.html';
                        $('#rutInput').val("");
                        $('#productoSel').val("");
                        $('#planeSel').val("");
                        $('#itemInput').val("");
                        //$('#oficinasSel').val("");
                        limpiaZona();
                    },
                    error: function(resp) {
                        removeSpinner($('body'));
                        console.log(resp)
                    },
                    cache: false,
                    contentType: false,
                    processData: false
                });
            } else {
                swal("¡Error!", "Existen archivos con el mismo nombre. Verifique sus datos");
                removeSpinner($('body'));
            }
        } else {
            swal("¡Error!","Todos los campos son obligatorios");
            removeSpinner($('body'));
        }
    });

});

function limpiaZona(){
    dropzone.removeAllFiles();
    $('#uploadFile')[0].dropzone.files.forEach(function(file) { 
        file.previewElement.remove();  
      });
      $('#uploadFile').removeClass('dz-started');
     
}

function validar() {
    var contador = 0;
    if ($('#rutInput').val() != "") {
        contador++;
    }
    if ($('#itemInput').val() != "") {
        contador++;
    }
    if ($('#productoSel').val() != "") {
        contador++;
    }
    if ($('#oficinasSel').val() != "") {
        contador++;
    }
    if ($('#planeSel').val() != "") {
        contador++;
    }
    if (dropzone.getAcceptedFiles().length > 0) {
        contador++;
    }
    if (contador == 6) {
        return true;
    } else {
        return false;
    }
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