 jQuery(document).ready(function ($) {
    $('input#checkLogin').click(function () {
        console.log($(this));
        if ($(this).is(":checked")) {
            $('#passportInput').show();
            $('#rutInput').hide();
            $('label.passport').addClass('redlabel');
            $('label.rut').removeClass('redlabel');
        } else {
            $('#passportInput').hide();
            $('#rutInput').show();
            $('label.rut').addClass('redlabel');
            $('label.passport').removeClass('redlabel');
        }
    })
    $("#rutInput").rut({ formatOn: 'keyup' });

}); 



