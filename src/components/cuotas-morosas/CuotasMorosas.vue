<template>
  <div id="wrapper">
    <Topbar></Topbar>
    <SideMenu></SideMenu>
    <div class="content-page">
      <div class="content">
        <div class="container-fluid">
          <div class="page-title-box">
            <div class="row align-items-center">
              <div class="col-sm-6">
                <h4 class="page-title">Informe de cuotas morosas</h4>
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Gestión</a></li>
                  <li class="breadcrumb-item"><a href="javascript:void(0);">Informe de cuotas morosas</a></li>
                  <li class="breadcrumb-item active"><span></span></li>
                </ol>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="mt-0 header-title">Intermediario</h4>
              <h5 class="text-primary text-uppercase font-weight-bold">Lidia Nuñes y CIA Limitada</h5>
              <div class="d-md-flex justify-content-between">
                <div class="alert alert--mr alert-success flex-grow-1 mb-0">Pólizas actualizadas al día <span class="font-weight-bold">18 de Febrero 2020</span></div>
                <div class="colvisBtns"></div>
              </div>
              <div class="table-responsive mb-0 mt-4 activos-table-wrapper">
                <table class="table table-striped table-small-font table-sm" id="informeCuotasMorosas" style="width: 100%">
                  <thead>
                    <tr>
                      <th class="font-weight-bold" data-priority="1">N° Póliza - Item</th>
                      <th class="font-weight-bold" data-priority="1">Pagador</th>
                      <th class="font-weight-bold" data-priority="2">Cuota</th>
                      <th class="font-weight-bold" data-priority="1">Vencimiento</th>
                      <th class="font-weight-bold" data-priority="3">Días</th>
                      <th class="font-weight-bold" data-priority="3">Moneda</th>
                      <th class="font-weight-bold" data-priority="2">Valor cuota</th>
                      <th class="font-weight-bold" data-priority="3">RUT pagador</th>
                      <th class="font-weight-bold" data-priority="2">Teléfono</th>
                      <th class="font-weight-bold" data-priority="1">Enviar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>963819-1</td>
                      <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                      <td>11</td>
                      <td>05/02/2020</td>
                      <td>19</td>
                      <td>U.F</td>
                      <td>1.91</td>
                      <td>6.087.706-8</td>
                      <td>992232295</td>
                      <td><a class="enviar-correo-cliente-moroso-btn" href="" data-toggle="modal" data-target=".email-modal"><i class="renta-icon-enviar text-primary"></i></a></td>
                    </tr>
                    <tr>
                      <td>963819-1</td>
                      <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                      <td>11</td>
                      <td>05/02/2020</td>
                      <td>19</td>
                      <td>U.F</td>
                      <td>1.91</td>
                      <td>6.087.706-8</td>
                      <td>992232295</td>
                      <td><a class="enviar-correo-cliente-moroso-btn" href="" data-toggle="modal" data-target=".email-modal"><i class="renta-icon-enviar text-primary"></i></a></td>
                    </tr>
                    <tr>
                      <td>963819-1</td>
                      <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                      <td>11</td>
                      <td>05/02/2020</td>
                      <td>19</td>
                      <td>U.F</td>
                      <td>1.91</td>
                      <td>6.087.706-8</td>
                      <td>992232295</td>
                      <td><a class="enviar-correo-cliente-moroso-btn" href="" data-toggle="modal" data-target=".email-modal"><i class="renta-icon-enviar text-primary"></i></a></td>
                    </tr>
                    <tr>
                      <td>963819-1</td>
                      <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                      <td>11</td>
                      <td>05/02/2020</td>
                      <td>19</td>
                      <td>U.F</td>
                      <td>1.91</td>
                      <td>6.087.706-8</td>
                      <td>992232295</td>
                      <td><a class="enviar-correo-cliente-moroso-btn" href="" data-toggle="modal" data-target=".email-modal"><i class="renta-icon-enviar text-primary"></i></a></td>
                    </tr>
                    <tr>
                      <td>963819-1</td>
                      <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                      <td>11</td>
                      <td>05/02/2020</td>
                      <td>19</td>
                      <td>U.F</td>
                      <td>1.91</td>
                      <td>6.087.706-8</td>
                      <td>992232295</td>
                      <td><a class="enviar-correo-cliente-moroso-btn" href="" data-toggle="modal" data-target=".email-modal"><i class="renta-icon-enviar text-primary"></i></a></td>
                    </tr>
                    <tr>
                      <td>963819-1</td>
                      <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                      <td>11</td>
                      <td>05/02/2020</td>
                      <td>19</td>
                      <td>U.F</td>
                      <td>1.91</td>
                      <td>6.087.706-8</td>
                      <td>992232295</td>
                      <td><a class="enviar-correo-cliente-moroso-btn" href="" data-toggle="modal" data-target=".email-modal"><i class="renta-icon-enviar text-primary"></i></a></td>
                    </tr>
                    <tr>
                      <td>963819-1</td>
                      <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                      <td>11</td>
                      <td>05/02/2020</td>
                      <td>19</td>
                      <td>U.F</td>
                      <td>1.91</td>
                      <td>6.087.706-8</td>
                      <td>992232295</td>
                      <td><a class="enviar-correo-cliente-moroso-btn" href="" data-toggle="modal" data-target=".email-modal"><i class="renta-icon-enviar text-primary"></i></a></td>
                    </tr>
                    <tr>
                      <td>963819-1</td>
                      <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                      <td>11</td>
                      <td>05/02/2020</td>
                      <td>19</td>
                      <td>U.F</td>
                      <td>1.91</td>
                      <td>6.087.706-8</td>
                      <td>992232295</td>
                      <td><a class="enviar-correo-cliente-moroso-btn" href="" data-toggle="modal" data-target=".email-modal"><i class="renta-icon-enviar text-primary"></i></a></td>
                    </tr>
                    <tr>
                      <td>963819-1</td>
                      <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                      <td>11</td>
                      <td>05/02/2020</td>
                      <td>19</td>
                      <td>U.F</td>
                      <td>1.91</td>
                      <td>6.087.706-8</td>
                      <td>992232295</td>
                      <td><a class="enviar-correo-cliente-moroso-btn" href="" data-toggle="modal" data-target=".email-modal"><i class="renta-icon-enviar text-primary"></i></a></td>
                    </tr>
                    <tr>
                      <td>963819-1</td>
                      <td class="font-weight-bold text-uppercase">De La Jara Anguita Veronica</td>
                      <td>11</td>
                      <td>05/02/2020</td>
                      <td>19</td>
                      <td>U.F</td>
                      <td>1.91</td>
                      <td>6.087.706-8</td>
                      <td>992232295</td>
                      <td><a class="enviar-correo-cliente-moroso-btn" href="" data-toggle="modal" data-target=".email-modal"><i class="renta-icon-enviar text-primary"></i></a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="modal fade email-modal" tabindex="-1" role="dialog" aria-labelledby="Modal de email" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="font-weight-bold modal-title mt-0">Envío de correo a clientes morosos</h4>
                      <button class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body">
                      <h5 class="font-weight-bold">Vista previa</h5><img class="img-fluid" src="assets/images/logo-renta-nacional.png" alt="Logo Renta Nacional">
                      <p>Estimado(a) <span class="font-weight-bold email-client-name"></span></p>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi cupiditate. Ut optio porro, est minus.</p>
                      <p>Quas beatae ipsa delectus temporibus ab veritatis labore? Pariatur natus cum quibusdam cumque tempore.</p>
                      <p class="font-weight-bold"><span class="font-weight-normal">Monto moroso:</span> UF <span class="monto-moroso"></span></p>
                      <p class="font-weight-bold mb-0">[nombre-usuario]</p>
                      <p class="mb-0">[cargo-usuario]</p>
                      <p class="mb-0">Teléfono: [fono-usuario]</p>
                    </div>
                    <div class="modal-footer">
                      <button class="btn text-primary underline" data-dismiss="modal" aria-hidden="true">Cancelar</button>
                      <button class="btn btn-primary">Enviar correo</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>