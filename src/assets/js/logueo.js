 function logueado() {
     
     id_tipo_usuario = JSON.parse(window.localStorage.getItem('id_tipo_usuario'));
    // alert(id_tipo_usuario)
     if(id_tipo_usuario=='3')
     {
        $('#ejecutivo').show();
     }else{
        $('#ejecutivo').hide();
     }
     
     if(id_tipo_usuario=='1')
     {
        $('#gerente_sucursal').removeClass('d-none').addClass('d-block');//muestra el menu que le corresponde
        $('#dashboard').attr('href', '../page-dashboard/gerente-sucursal.html');
        $('#foto_logueado').attr('src', '../assets/images/users/usr_04.png');
        $('#foto_logueado2').attr('src', '../assets/images/users/usr_04.png');
     }
     if(id_tipo_usuario=='11')
     {
        $('#gerente_zonal').removeClass('d-none').addClass('d-block');//muestra el menu que le corresponde
        $('#dashboard').attr('href', '../page-dashboard/gerente-zonal.html');
        $('#foto_logueado').attr('src', '../assets/images/users/usr_06.png');
        $('#foto_logueado2').attr('src', '../assets/images/users/usr_06.png');
       
     }
     if(id_tipo_usuario=='2')
     {
        $('#ejecutivos').removeClass('d-none').addClass('d-block');//muestra el menu que le corresponde
        $('#dashboard').attr('href', '../page-dashboard/ejecutivo.html');
        $('#foto_logueado').attr('src', '../assets/images/users/usr_05.png');
        $('#foto_logueado2').attr('src', '../assets/images/users/usr_05.png');
     }
     if(id_tipo_usuario=='3')
     {
        $('#intermediarios').removeClass('d-none').addClass('d-block');//muestra el menu que le corresponde
        $('#bancarios').removeClass('d-none').addClass('d-block');//muestra para datos bancarios en el perfil
        $('#dashboard').attr('href', '../page-dashboard/intermediario.html');
        $('#foto_logueado').attr('src', '../assets/images/users/usr_06.png');
        $('#foto_logueado2').attr('src', '../assets/images/users/usr_06.png');
       
     }
     if(id_tipo_usuario=='4')
     {
        $('#admin').removeClass('d-none').addClass('d-block');//muestra el menu que le corresponde
        //$('#bancarios').removeClass('d-none').addClass('d-block');//muestra para datos bancarios en el perfil
        //$('#dashboard').attr('href', '../page-dashboard/intermediario.html');
        $('#foto_logueado').attr('src', '../assets/images/users/usr_06.png');
        $('#foto_logueado2').attr('src', '../assets/images/users/usr_06.png');
       
     }
    
 }
 $(document).ready(function(){
    $("#ejecutivo").click(function(){
       //alert("hola") 
        var dominio = 'http://10.156.160.21:8000/api/'; //direccion de la api para consumir
        token = JSON.parse(window.localStorage.getItem('token'));
        if (token === 0) window.location = './index.html';
        rut_logeado = JSON.parse(window.localStorage.getItem('rutLogueado'));
        id_tipo_usuario = JSON.parse(window.localStorage.getItem('id_tipo_usuario'));
        id_empresa = JSON.parse(window.localStorage.getItem('id_empresa'));

        $.ajax({
            url: dominio + 'infoejecutivointer/' + rut_logeado,
            dataType: 'json',
            type: 'GET',
            data: {
   
                token: token
            },
            success: function(resp) {

                $('#nombre_ejecuivo').html(resp.data[0].nombres+" "+resp.data[0].apellidos);
                $('#email_ejecuivo').html(resp.data[0].email);
                $('#oficina_ejecuivo').html(resp.data[0].oficina);
                $('#telefono_ejecuivo').html(resp.data[0].telefono);
                //console.log(resp.data[0])
            },
            error: function(resp) {
                //console.log("hola2"+resp)
            }
        }).done(function(resp) {
            //console.log("hola3"+resp)
        });

    });
 });