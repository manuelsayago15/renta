new Vue({
    el: '#main',
    created: function() {
        window.localStorage.setItem('id_oficina', JSON.stringify(0));
        window.localStorage.setItem('token', JSON.stringify(0));
        window.localStorage.setItem('oficina', JSON.stringify(0));
        window.localStorage.setItem('rutLogueado', JSON.stringify(0));
        window.localStorage.setItem('dvLogueado', JSON.stringify(0));
        window.localStorage.setItem('id_tipo_usuario', JSON.stringify(0));
        window.localStorage.setItem('id_empresa', JSON.stringify(0));
        window.localStorage.setItem('nombre_logueado', JSON.stringify(0));
    },
    data: {
        rut: '',
        pasaporte: '',
        password: '',
        errors: []
    },

    methods: {
        iniciarSesion: function() {
            var errors = [];
            
            if (this.validarCamposVacios()) {
              if (this.rut != "") {
                var rut =this.rut;
                var dig_ver;
                var rut_no_dig_ver=0;
            
                rut = rut.split(".").join("");
                rut = rut.replace('-', '');
    
                if (rut.length == 7)
                    rut_no_dig_ver = rut.substring(0, 6);
                else if (rut.length == 8)
                    rut_no_dig_ver = rut.substring(0, 7);
                else if (rut.length == 9)
                    rut_no_dig_ver = rut.substring(0, 8);
    
                dig_ver = rut.charAt(rut.length - 1);
              }
              else
                {
                 if (this.pasaporte!= "") {
                     rut_no_dig_ver = this.pasaporte;
                     dig_ver = 'p';
                 }
                }
           
                var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
               // $('#content').html('<div class="loading"><img src="assets/images/loader.gif"/><br/></div>');
                $.ajax({
                    url: dominio + 'login',
                    dataType: 'json',
                    type: 'POST',
                    data: {
                        identificacion: rut_no_dig_ver,
                        password: $('#passwordInput').val(),
                        dig_verificador: dig_ver
                    },
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    success: function(resp) {
                       
                        var arrDatos = [];
                        var id = resp.user.id;
                        var rut_logueado = resp.user.identificacion;
                        var dv_logueado = resp.user.dig_verificador;
                        var id_tipo_usuario=resp.user.id_tipo_usuario;
                        var nombre_logueado=resp.user.nombres+" "+resp.user.apellidos;
                        var id_empresa=resp.user.id_empresa;
                        var id_oficina=resp.oficina[0].id;

                        window.sessionStorage.setItem('token', resp.token);
                        window.localStorage.setItem('token', JSON.stringify(resp.token));
                        window.localStorage.setItem('id_oficina', JSON.stringify(id_oficina));
                        window.localStorage.setItem('id_tipo_usuario', JSON.stringify(id_tipo_usuario));
                        window.localStorage.setItem('nombre_logueado', JSON.stringify(nombre_logueado));
                        window.localStorage.setItem('id_empresa', JSON.stringify(id_empresa));
                        window.localStorage.setItem('rutLogueado', JSON.stringify(rut_logueado));
                        window.localStorage.setItem('dvLogueado', JSON.stringify(dv_logueado));
                        window.localStorage.setItem('oficina', JSON.stringify(resp.oficina));
                        $('#content').fadeIn(1000000);
                        if(id_tipo_usuario=='1'){
                            window.location = './page-dashboard/gerente-sucursal.html';
                        }
                        if(id_tipo_usuario=='11'){
                            window.location = './page-dashboard/gerente-zonal.html';
                        }
                        if(id_tipo_usuario=='2'){
                            window.location = './page-dashboard/ejecutivo.html';
                        }
                        if(id_tipo_usuario=='3'){
                            window.location = './page-dashboard/intermediario.html';
                        }
                        if(id_tipo_usuario=='4'){
                            window.location = './page-admin/admin-liquidadores.html';
                        }
                       
                    },
                    error: function(resp) {
                        var errors = [];
                        errors.push('<li>Credenciales inválidas.</li>');
                        $('#alert').show();
                        $('#message').show();
                        $('#errors').show();
                        $('#alert').addClass("alert alert-danger alert-dismissible fade show");
                        $('#message').html("Por favor, valide (los) siguiente(s) error(es):");
                        $('#errors').html(errors);
                        $('#rutInput').val("");
                        $('#passportInput').val("");
                        $('#passwordInput').val("");
                       // $('#content').fadeToggle();
                       removeSpinner($('body'))
                    }
                }); 
                return false;
            }
        },
        validarCamposVacios: function() {

            if (((this.rut) || (this.pasaporte)) && (this.password)) {
                return true;
            }
            this.errors = [];

            if ((!this.rut) && (!this.pasaporte)) {
                this.errors.push("El rut o pasaporte es obligatorio");
            }
            if (!this.password) {
                this.errors.push("La contraseña es obligatoria");
            }
        },
        limpiar_errors: function() {

            this.errors = [];
            $('#alert').hide();
            $('#message').hide();
            $('#errors').hide();
        },
        limpiar_campos: function() {

            this.errors = [];
            this.rut = '';
            this.pasaporte = '';
            this.password = '';

        },
        validarRut: function() {
            var rut =this.rut;
            var dig_ver;
            var rut_no_dig_ver=0;
            this.errors = [];
        
            rut = rut.split(".").join("");
            rut = rut.replace('-', '');

            if (rut.length == 7)
                rut_no_dig_ver = rut.substring(0, 6);
            else if (rut.length == 8)
                rut_no_dig_ver = rut.substring(0, 7);
            else if (rut.length == 9)
                rut_no_dig_ver = rut.substring(0, 8);

            dig_ver = rut.charAt(rut.length - 1);

            if(rut_no_dig_ver==0)
            {
                this.errors = [];
                this.errors.push("Rut inválido");
                this.rut='';
                //this.rut.focus();
            }

           if(rut_no_dig_ver.length == 0 || rut_no_dig_ver.length > 8 )
            {
            this.errors = [];
            this.errors.push("Rut introducido inválido");
            this.rut='';
            this.password='';
            //this.rut.focus();
          } 
          else 
             {
              if(this.getDV(rut_no_dig_ver) == dig_ver)
              {
                return true;
              }
              else
                {
                    this.errors = [];
                    this.errors.push("Rut introducido inválido");
                    this.rut='';
                    this.password='';
                    //this.rut.focus();
                }
            }
      },
       getDV: function(numero) {
        nuevo_numero = numero.toString().split("").reverse().join("");
        for(i=0,j=2,suma=0; i < nuevo_numero.length; i++, ((j==7) ? j=2 : j++)) {
            suma += (parseInt(nuevo_numero.charAt(i)) * j); 
        }
        n_dv = 11 - (suma % 11);
        return ((n_dv == 11) ? 0 : ((n_dv == 10) ? "K" : n_dv));
     }
    }
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