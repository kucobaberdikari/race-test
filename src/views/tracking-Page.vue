<template>
    <div class="content-wrapper">
        <div class="card card-new">
            <div class="breadcrumb float-sm-left card-title">
                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                <li class="breadcrumb-item active">Dashboard-Fulfillment-Dashboard</li>
            </div>
            <div class="breadcrumb float-sm-left card-text">
                <li class="breadcrumb-item active">Dashboard-Fulfillment-Dashboard</li>
            </div>
        </div>  
        <div class="card">
            <div class="card-body">
                <h4 class="text-center ">Mencari Pengiriman Parcel</h4>
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                        <form action="simple-results.html">
                            <div class="input-group">
                                <input type="search" class="form-control form-control-lg" placeholder="Type your keywords here">
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-lg btn-dark">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    name: 'trackingPage',
    components: {},
    data(){}
}
</script>


<style scoped>
    .row{
        padding-bottom: 200px;
    }
    .btn-dark{
        background-color: #344767;
        
    }
    .card-body{
        margin-top: 100px;
    }
    .card{
        margin:0,10px;
    }
</style>