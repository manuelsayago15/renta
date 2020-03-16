function validarRut() {
    var rut = $('#rutInput').val();
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
    
    
            // alert(rut_no_dig_ver +"+ "+dig_ver)
     if(rut_no_dig_ver.length == 0 || rut_no_dig_ver.length > 8 ) {
           swal("Error! el rut es inválido")
            $('#rutInput').val("")
        return false;
    } else {
        if(getDV(rut_no_dig_ver) == dig_ver) {
            
            // alert("El Rut es valido")
              return true;
        }
        else{
            swal("Error! el rut es inválido")
            $('#rutInput').val("")
            return false;  
        }
    }
}
function getDV(numero) {
    nuevo_numero = numero.toString().split("").reverse().join("");
    for(i=0,j=2,suma=0; i < nuevo_numero.length; i++, ((j==7) ? j=2 : j++)) {
        suma += (parseInt(nuevo_numero.charAt(i)) * j); 
    }
    n_dv = 11 - (suma % 11);
    return ((n_dv == 11) ? 0 : ((n_dv == 10) ? "K" : n_dv));
}