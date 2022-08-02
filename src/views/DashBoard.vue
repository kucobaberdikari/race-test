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
          <div class="col-lg-6 connectedSortable">
                <div class="card shadow-lg">
                    <div class="card-header">
                        <div class="col-md-6 float-left">
                            <dt>Last Order</dt>
                            <dd>RC-0821-0292282</dd>
                        </div>

                        <!-- tools card -->
                        <div class="card-tools float-right">
                            <div class="btn-group">
                                <button type="button" class="btn btn-defaut btn-sm dropdown-toggle" data-toggle="dropdown" data-offset="-52">
                                <i class="far fa-ellipsis-v"></i>
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
                        <div class="col-md- 8 float-left">
                            <div class="row">
                                <div class="timeline">
                                    <div>
                                        <i class="far fa-dot-circle bg-indigo"></i>
                                        <div class="timeline-body ">
                                            <dt>Inbound</dt>
                                            <dd>Kamis, 20 Agustus 2018 11.00 PM</dd>
                                        </div>
                                    </div>
                                    <div>
                                         <i class="far fa-dot-circle bg-orange"></i>
                                         <div class="timeline-body">
                                            <dt>QC Checking</dt>
                                            <dd>Jumat, 21 Agustus 2018 08.00 PM</dd>
                                         </div>
                                    </div>
                                    <div>
                                        <i class="far fa-dot-circle bg-orange"></i>
                                        <div class="timeline-body">
                                            <dt>Labeling</dt>
                                            <dd>Jumat, 21 Agustus 2018 09.00 PM</dd>
                                        </div>
                                    </div>
                                    <div>
                                         <i class="far fa-dot-circle bg-orange"></i>
                                         <div class="timeline-body">
                                            <dt>Storing</dt>
                                            <dd>Jumat, 21 Agustus 2018 10.00 PM</dd>
                                         </div>
                                    </div>
                                    <div>
                                        <i class="far fa-dot-circle bg-orange"></i>
                                         <div class="timeline-body">
                                            <dt>Packing</dt>
                                            <dd>Jumat, 21 Agustus 2018 11.00 PM</dd>
                                         </div>
                                    </div>
                                    <div>
                                         <i class="far fa-dot-circle bg-indigo"></i>
                                         <div class="timeline-body">
                                            <dt>Outbound</dt>
                                            <dd>Jumat, 21 Agustus 2018 14.00 PM</dd>
                                         </div>
                                    </div>
                                    <div>
                                       <i class="fal fa-car-alt bg-blue"></i>
                                        <div class="timeline-body">
                                            <dt>Delivery</dt>
                                            <dd>Jumat, 21 Agustus 2018 16.00 PM</dd>
                                         </div>
                                    </div>
                                    <div>
                                        <i class="far fa-circle bg-dark"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
          <div class="col-lg-6 connectedSortable">
                <div class="card shadow-lg">
                    <div class="card-body">
                       <AddGoogleMap />
                    </div>
                </div>
          </div>
        </div>
        <div class="row">
            <div class="col-lg-7 connectedSortable">
                <div class="card shadow-lg">
                    <div class="card-body">
                        <div class="card-title">
                            <b>Stock overview</b>
                        </div>
                        <div class="card-text">
                            <div class="col-4 text-center">
                                <div id="sparkline-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 connectedSortable">
                  <div class="card shadow-lg">
                    <div class="card-body">
                        <h4 class="card-title">Expired Stock's</h4>
                        <div class="card-text">
                            <canvas id="pieChart" >

                            </canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AddGoogleMap from "../components/AddGoogleMap";
export default{
name: "DashBoard",
components:{
    AddGoogleMap
},
data(){
    return{
        
    }
}
}
</script>

<style scoped>

</style>
<style>
    .content-wrapper{
        padding-top: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .col-md-6 .float-left{
        margin-left: -15px;
    }
    .timeline-item{
        padding: 10px;
    }
    .timeline-body{
        margin-left: 60px;
    }
    .card{
        border-radius: 30px;
    }
</style>