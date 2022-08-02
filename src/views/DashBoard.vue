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
                                <h5 class="card-title"><b>Last Order</b></h5>
                            <p class="card-text"><b>RC-</b>0821-0292282</p>
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
                                        <div class="timeline-item">
                                                <h4 class="timeline-header"><b>Inbound</b></h4>
                                                <p>Kamis, 20 Agustus 2018 11.00 PM</p>
                                        </div>
                                    </div>
                                    <div>
                                         <i class="far fa-dot-circle bg-orange"></i>
                                         <div class="timeline-item">
                                            <h4 class="timeline-header"><b>QC Checking</b></h4>
                                            <p>Jumat, 21 Agustus 2018 08.00 PM</p>
                                         </div>
                                    </div>
                                    <div>
                                        <i class="far fa-dot-circle bg-orange"></i>
                                        <div class="timeline-item">
                                            <h4 class="timeline-header"><b>Labeling</b></h4>
                                            <div class="timeline-body">
                                                <p>Jumat, 21 Agustus 2018 09.00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                         <i class="far fa-dot-circle bg-orange"></i>
                                         <div class="timeline-item">
                                            <h4 class="timeline-header"><b>Storing</b></h4>
                                            <div class="timeline-body">
                                                <p>Jumat, 21 Agustus 2018 10.00 PM</p>
                                            </div>
                                         </div>
                                    </div>
                                    <div>
                                        <i class="far fa-dot-circle bg-orange"></i>
                                         <div class="timeline-item">
                                            <h4 class="timeline-header"><b>Packing</b></h4>
                                            <div class="timeline-body">
                                                <p>Jumat, 21 Agustus 2018 11.00 PM</p>
                                            </div>
                                         </div>
                                    </div>
                                    <div>
                                         <i class="far fa-dot-circle bg-indigo"></i>
                                         <div class="timeline-item">
                                            <h4 class="timeline-header"><b>Outbound</b></h4>
                                            <div class="timeline-body">
                                                <p>Jumat, 21 Agustus 2018 14.00 PM</p>
                                            </div>
                                         </div>
                                    </div>
                                    <div>
                                        <i class="far fa-car bg-blue"></i>
                                        <div class="timeline-item">
                                            <h4 class="timeline-header"><b>Delivery</b></h4>
                                            <div class="timeline-body">
                                                <p>Jumat, 21 Agustus 2018 16.00 PM</p>
                                            </div>
                                         </div>
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
    </div>
</template>

<script>
import AddGoogleMap from "../components/AddGoogleMap";
export default{
name: "DashBoard",
components:{
    AddGoogleMap
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
   
</style>