<template>
  <div class="content-wrapper" >
   <div class="card card-new">
      <div class="breadcrumb float-sm-left card-title">
          <li class="breadcrumb-item"><a href="#">Pages</a></li>
          <li class="breadcrumb-item active">Dashboard-Fulfillment-Dashboard</li>
      </div>
      <div class="breadcrumb float-sm-left card-text">
        <li class="breadcrumb-item active">Dashboard-Fulfillment-Dashboard</li>
      </div>
   </div>                  


    <div class="card card-new">
   <div class="card-header"> 
   </div>
   <div class="card-body">
      <table class="table table-bordered table-striped table-responsive-sm datatable dtr-inline" id="table1">
         <thead>
            <tr >
               <th>No</th>
               <th>Invoice</th>
               <th>Customer</th>
               <th>Addres</th>
               <th>Status</th>
               <th>Courier</th>
               <th>Exported</th>
               <th>Order Date</th>
               <th>Created Date</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="data in datas" :key="data.id" id="table1">
               <td>{{data.id}}</td>
               <td>{{data.kd_inbound}}</td>
               <td>{{data.costumer}}</td>
               <td>{{data.alamat}}</td>
               <td ><p class=" bg-info dta-dmy">{{data.status}}</p></td>
               <td>{{data.kurir}}</td>
               <td>{{data.exported}}</td>
               <td>{{data.order_date}}</td>
               <td>{{data.created}}</td>
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
import Outbonddummy from "../components/data-dummy/Outbond-Dummy.json";
import $ from "jquery";
export default{
    name: 'OutboundPage',
    components: {}, 
    mounted(){
       $('#table1').dataTable({
         "responsive": false,"lengthChange": false,
     });
    },  
    data(){
      return{
         datas:Outbonddummy
      }
    }
}
</script>

<style>
.dta-dmy{
   border-radius: 5px;
}
</style>