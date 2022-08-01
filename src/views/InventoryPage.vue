<template>
  <div class="content-wrapper" >
    <div class="card">
        <div class="breadcrumb float-sm-left card-title">
          <li class="breadcrumb-item"><a href="#">Pages</a></li>
          <li class="breadcrumb-item active">Dashboard-Fulfillment-Dashboard</li>
        </div>
        <div class="breadcrumb float-sm-left card-text">
        <li class="breadcrumb-item active">Dashboard-Fulfillment-Dashboard</li>
        </div>
    </div>                  

    <div class="row ">
        <div class="col-sm-4 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">Total Products</span>
                <span class="info-box-number">90</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box --> 
        </div>
        <div class="col-sm-4 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">Total Stock</span>
                <span class="info-box-number">80</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
            </div>
        <div class="col-sm-4 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">Expired Stock</span>
                <span class="info-box-number">10</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
            </div>
    </div>
    
    <div class="row row1">
        <div class=" col-sm-4 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">Incoming Stock</span>
                <span class="info-box-number">200</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
        </div>
        <div class=" col-sm-4 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">Beta</span>
                <span class="info-box-number">0</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
            </div>
        <div class=" col-sm-4 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>
              <div class="info-box-content">
                <span class="info-box-text">Beta</span>
                <span class="info-box-number">0</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
            </div>
    </div>


    <div class="card">
   <div class="card-header">
   </div>
   <div class="card-body">
      <table class="table table-bordered table-striped table-responsive-md" id="table1">
         <thead>
            <tr>
               <!-- <th>No</th> -->
               <th>Seller</th>
               <th>Tipe Barcode</th>
               <th>Qty SKU</th>
               <th>Qty Stock</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="data in datas" :key="data.id">
               <!-- <td class="hidden">{{data.id}}</td> -->
               <td>
                <div class="d-flex px-3 py-1">
                  <div>
                    <i class="fa-thin fa-store"></i>
                  </div>
                  <div class="d-flex flex-column justify content-center">
                    <p class="h6 mb-0 text-sm mb-1">{{data.seller}}</p>
                    <a href="#" class="text-sm text-secondary mb-0">{{data.telepon}}</a>
                  </div>
                </div>

               </td>
               <td>{{data.barcode}}</td>
               <td>{{data.SKU}}</td>
               <td>{{data.stock}}</td>
            </tr>
         </tbody>
      </table>
   </div>
</div>

   <!-- <button type="button" class="open-button " @click="openForm" >Chat</button> -->
   <!-- <ChatBox v-show="ChatVisible" @close="closeChat" /> -->

  <!-- <div class="p-3 bg-secondary progress-bar-striped" style="min-height: 170px;">
    <b-button variant="primary" @click="makeToast('primary')" class="mb-2">Primary</b-button>
  </div> -->
</div>
</template>


<script>
import Inventorydummy from "../components/data-dummy/Inventory-Dummy.json";
import $ from "jquery";
export default{
    name: 'InventoryPage',
    components: {},
    data(){
        return{
            datas:Inventorydummy,
        }
    },
    mounted(){
       $('#table1').dataTable({
         "responsive": false,"lengthChange": false,
         
     });  
    }
}

</script>

<style scoped>
  .row{
    margin:0;
    padding: 0;
  }
  /* .row1{
    padding-bottom: 30px;
  } */
  .col-sm-4 .border .tes{
    padding-left: 0;
    text-align: left;
    
  }
  .card{
    border-radius: 15px;
  }
</style>