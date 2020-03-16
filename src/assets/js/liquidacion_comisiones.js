//DATATABLE COMISIONES PÓLIZAS EN UF
jQuery(document).ready(function ($) {
    let dataTableComisionesPolizasUf = $('#polizasUfDt').DataTable({
        responsive: true,
        bFilter: false,
        bPaginate: false,
        bInfo: false,
        language: {
            processing: "Procesando...",
            search: "Buscar:",
            lengthMenu: "Mostrar _MENU_ registros",
            info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
            infoFiltered: "(filtrado de un total de _MAX_ registros)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron resultados",
            emptyTable: "Ningún dato disponible en esta tabla.",
            aria: {
                sortAscending: ": Activar para ordenar la columna de manera ascendente",
                sortDescending: ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
});

//DATATABLE COMISIONES PÓLIZAS EN CLP
jQuery(document).ready(function ($) {
    let dataTableComisionesPolizasCLP = $('#polizasClpDt').DataTable({
        responsive: true,
        bFilter: false,
        bPaginate: false,
        bInfo: false,
        language: {
            processing: "Procesando...",
            search: "Buscar:",
            lengthMenu: "Mostrar _MENU_ registros",
            info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
            infoFiltered: "(filtrado de un total de _MAX_ registros)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron resultados",
            emptyTable: "Ningún dato disponible en esta tabla.",
            aria: {
                sortAscending: ": Activar para ordenar la columna de manera ascendente",
                sortDescending: ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
});

//DATATABLE COMISIONES PÓLIZAS EN USD
jQuery(document).ready(function ($) {
    let dataTableComisionesPolizasUSD = $('#polizasUsdDt').DataTable({
        responsive: true,
        bFilter: false,
        bPaginate: false,
        bInfo: false,
        language: {
            processing: "Procesando...",
            search: "Buscar:",
            lengthMenu: "Mostrar _MENU_ registros",
            info: "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            infoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
            infoFiltered: "(filtrado de un total de _MAX_ registros)",
            infoPostFix: "",
            loadingRecords: "Cargando...",
            zeroRecords: "No se encontraron resultados",
            emptyTable: "Ningún dato disponible en esta tabla.",
            aria: {
                sortAscending: ": Activar para ordenar la columna de manera ascendente",
                sortDescending: ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
});

//PAGE LIQUIDACION COMISIONES FUNCTIONS
jQuery(document).ready(function ($) {
    const agregarDocumento = document.querySelector('#agregarDocumento');
    const liquidacionComisionesData = document.querySelector('#liquidacionComisionesData');
    const liquidacionCargaDocumento = document.querySelector('#liquidacionCargaDocumento');
    const documentoEnviado = document.querySelector('#documentoEnviado');
    const liquidacionRegresarBtns = document.querySelectorAll('.liquidacion-regresar-btn');
    const liquidacionCancelarBtn = document.querySelector('#liquidacionCancelarBtn');
    const enviarDocumentoBtn = document.querySelector('#enviarDocumentoBtn');

    agregarDocumento.addEventListener('click', mostrarCargaDeDocumento);
    enviarDocumentoBtn.addEventListener('click', mostrarDocumentoEnviado);
    liquidacionCancelarBtn.addEventListener('click', regresarAlInicio);
    for (let regresarBtn of liquidacionRegresarBtns) {
        regresarBtn.addEventListener('click', regresarAlInicio);
    }

    function mostrarCargaDeDocumento() {
        liquidacionComisionesData.classList.add('d-none');
        liquidacionCargaDocumento.classList.remove('d-none');
    }

    function regresarAlInicio() {
        liquidacionComisionesData.classList.remove('d-none');
        liquidacionCargaDocumento.classList.add('d-none');
        documentoEnviado.classList.add('d-none');
    }

    function mostrarDocumentoEnviado() {
        liquidacionCargaDocumento.classList.add('d-none');
        documentoEnviado.classList.remove('d-none');
    }
});

