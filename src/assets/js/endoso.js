

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
    })
    $("#polizaInput").on('paste', function(e){
        e.preventDefault();
      })
  })
function num_per() {

    if (($('#itemInput').val() < 1) || ($('#itemInput').val() > 500)) {
        // var errorItem = [];
        // errorItem.push('<li >Ítem entre 1 y 500.</li>');
        $('#alert').removeClass('d-none').addClass('d-block');
        $('#errorItem').show();
        $('#errorItem').css({ 'color': 'red' });
        // $('#errorItem').html(errorItem);
        $('#itemInput').val("");
        $('.btn-endoso-buscar').removeClass('align-self-end').addClass('align-self-center');
    }
}

function limpiarErrorItem() {
    var errorRut = [];
    $('#alert').hide();
    $('#errorItem').hide();
    $('.btn-endoso-buscar').removeClass('align-self-center').addClass('align-self-end');

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

$('#ejecutivo, .dropdown-executive__top-right').click(function(e) {
    e.preventDefault();
    e.stopPropagation();
    $('.dropdown-executive').toggleClass('d-none');    
})

$("#buscaPoliza").click(function(e){
        e.preventDefault();
      var token=0;
      var poliza=$('#polizaInput').val();
      var item=$('#itemInput').val();
      if((poliza!="")&&(item!="")) {
          token=JSON.parse(window.localStorage.getItem('token'));
          if(token===0) 
            window.location = './index.html';
         rutLogueado=JSON.parse(window.localStorage.getItem('rutLogueado'));
         var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
        $.ajax({
            url: dominio + 'polizas/'+poliza+'/'+item+'/'+rutLogueado,
            dataType: 'json',
            type: 'GET',
            data:{
             token: token
            },
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function(resp) {
                console.log(resp)
                $('#datos').toggleClass('d-none');//hace aparecer los campos
                $('#nombreInput').val(resp.data[0].cliente+" "+resp.data[0].razon_social);
                $('#planInput').val(resp.data[0].id_plan+"-"+resp.data[0].nombre_plan);
                $('#desdeInput').val(edita_fecha(resp.data[0].inicio));
                $('#hastaInput').val(edita_fecha(resp.data[0].termino)); 
                removeSpinner($('#loading'));
            },
            error: function(resp) {
                console.log(resp)
                swal("¡Error!","Número de póliza y/o ítem no se encuentran resgistrados");
                $('#itemInput').val("");
                $('#polizaInput').val("");
                removeSpinner($('#loading'));
            },
        });
      }
      else{
        swal("¡Error!","Número de póliza e ítem son obligatorios"); 
        removeSpinner($('#loading'));
      } 
});

$("#enviar").click(function(e) {
    
        e.preventDefault();
        var files = $('#uploadFile').get(0).dropzone.getAcceptedFiles(); //captura de los archivos en la zona
        
        if (validar() == true) {
        
            if (comprobar() == true) {
            
                token = JSON.parse(window.localStorage.getItem('token'));
                if (token === 0) window.location = './index.html';
                rutLogueado = JSON.parse(window.localStorage.getItem('rutLogueado'));
                dv_logueado = JSON.parse(window.localStorage.getItem('dvLogueado'));
               
                var formData = new FormData();
                formData.append("id_poliza", $('#polizaInput').val());
                formData.append("item_poliza",$('#itemInput').val());
                formData.append("rut_usuario", rutLogueado);
                formData.append("dv_usuario", dv_logueado);
                for (var i = 0; i < dropzone.files.length; i++) {
                    formData.append("directorio" + i, files[i]);
                }
                //formData.append("id_oficina", $('#oficinasSel').val());
                formData.append("token", token);

                var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
                $.ajax({
                    url: dominio + "propuestaendosos",
                    type: "POST",
                    dataType: "json",
                    data: formData,
                    success: function(resp) {
                        removeSpinner($('body'));
                        swal("Datos cargados satisfactoriamente!", "Número de endoso asignado: "+resp.data.id_propuesta, "success");
                        
                         //$('#datos').removeClass('d-none').addClass('d-block');//hace aparecer los campos
                        $('#datos').toggleClass('d-none');//hace aparecer los campos
                        $('#polizaInput').val("");
                        $('#itemInput').val("");
                        $('#nombreInput').val("");
                        $('#planInput').val("");
                        $('#desdeInput').val("");
                        $('#hastaInput').val(""); 
                        limpiaZona();
                    },
                    error: function(resp) {
                        console.log(resp)
                        removeSpinner($('body'));
                    },
                    processData: false,
                    contentType: false,
                });
             } else {
                swal("¡Error!", "Existen archivos con el mismo nombre. Verifique!")
                removeSpinner($('body'));
            }
        } else {
            swal("¡Error!","Todos los campos son obligatorios");
            removeSpinner($('body'));
        }
});

function edita_fecha(fecha){
        var fn = fecha.split("-");
        return fn[2]+"-"+fn[1]+"-"+fn[0];
}
function limpiaZona(){
    dropzone.removeAllFiles();
    $('#uploadFile')[0].dropzone.files.forEach(function(file) { 
        file.previewElement.remove();  
      });
      $('#uploadFile').removeClass('dz-started');
     
}

function validar() {
    var contador = 0;
    if ($('#polizaInput').val() != "") {
        contador++;
    }
    if ($('#itemInput').val() != "") {
        contador++;
    }
    if ($('#nombreInput').val() != "") {
        contador++;
    }
    if ($('#planInput').val() != "") {
        contador++;
    }
    if ($('#desdeInput').val() != "") {
        contador++;
    }
    if ($('#hastaInput').val() != "") {
        contador++;
    }
  
    if (dropzone.getAcceptedFiles().length > 0) {
        contador++;
    }
    if (contador == 7) {
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