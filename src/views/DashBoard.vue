<template>
    <div class="content-wrapper">
       <div class="content-fluid">
            <div class="card">
                <div class="breadcrumb float-sm-left card-title">
                    <li class="breadcrumb-item"><a href="#">Pages</a></li>
                    <li class="breadcrumb-item active">Dashboard-Fulfillment-Dashboard</li>
                </div>
                <div class="breadcrumb float-sm-left card-text">
                    <li class="breadcrumb-item active">Dashboard-Fulfillment-Dashboard</li>
                </div>
            </div>
       </div>

        <div class="row">
            <div class="col-sm-3 col-12">
                <div class="info-box">
                    <div class="info-box-content">
                        <span class="info-box-text">Request Pickup</span>
                        <span class="info-box-number">12</span>
                    </div>
                    <span class="info-box-icon bg-default"><i class="fad fa-coins"></i></span>
                </div>
            </div>
            <div class="col-sm-3 col-12">
                <div class="info-box">
                    <div class="info-box-content">
                        <span class="info-box-text">Inbound</span>
                        <span class="info-box-number">20</span>
                    </div>
                    <span class="info-box-icon bg-default"><i class="far fa-globe-asia"></i></span>
                </div>
            </div>
            <div class="col-sm-3 col-12">
                <div class="info-box">
                    <div class="info-box-content">
                        <span class="info-box-text">process</span>
                        <span class="info-box-number">33</span>
                    </div>
                    <span class="info-box-icon bg-default"><i class="far fa-file-certificate"></i></span>
                </div>
            </div>
            <div class="col-sm-3 col-12">
                <div class="info-box">
                    <div class="info-box-content">
                        <span class="info-box-text">Outbond</span>
                        <span class="info-box-number">70</span>
                    </div>
                    <span class="info-box-icon bg-default"><i class="far fa-shopping-cart"></i></span>
                </div>
            </div>
        </div>
        <div class="row">
          <div class="col-lg-12 col-md-12 connectedSortable">
              <div class="col-md-6">
                <div class="card shadow-lg">
                    <div class="card-header">
                        <h3 class="card-title">
                      
                        </h3>
                        <!-- tools card -->
                        <div class="card-tools">
                        <!-- button with a dropdown -->
                        <div class="btn-group">
                            <button type="button" class="btn btn-defaut btn-sm dropdown-toggle" data-toggle="dropdown" data-offset="-52">
                            <i class="fas fa-bars"></i>
                            </button>
                            <div class="dropdown-menu" role="menu">
                            <a href="#" class="dropdown-item">Add new event</a>
                            <a href="#" class="dropdown-item">Clear events</a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">View calendar</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="card-body">
                    </div>
                </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 connectedSortable">

          </div>
        </div>
    </div>
</template>

<script>
export default{
name: "DashBoard"
}
</script>

<style scoped>

</style>
<style>
    .content-wrapper{
            padding-top: 20px;
        }
</style>