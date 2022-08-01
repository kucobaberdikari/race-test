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
        <div class="row">
            <div class="col-md-12">
                <b-card no-body>
                    <b-tabs pills card class="col-md-12" content-class="mt-3" justified>
                        <b-tab no-body title="All " active>
                            <table class="table table-bordered table-striped table-responsive-md" id="table1">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Invoice</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Gudang</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in data" :key="data.id">
                                        <td>{{data.id}}</td>
                                        <td>{{data.invoice}}</td>
                                        <td>{{data.total}}</td>
                                        <td v-if="data.status === 'Inbound'"> <span class="badge badge-warning">{{data.status}}</span></td>
                                        <td v-else-if="data.status === 'proses'"> <span class="badge badge-primary">{{data.status}}</span></td>
                                        <td v-else-if="data.status === 'Outbound'"> <span class="badge badge-success">{{data.status}}</span></td>
                                        <td v-else-if="data.status === 'Dikirim'"> <span class="badge badge-info">{{data.status}}</span></td>
                                        <td v-else-if="data.status === 'Sampai'"> <span class="badge badge-secondary">{{data.status}}</span></td>
                                        <td v-else><span class="badge bagde-default">{{data.status}}</span></td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Inbound">
                           <table class="table table-bordered table-striped" id="table2">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Invoice</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Gudang</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in data" :key="data.id">
                                        <td>{{data.id}}</td>
                                        <td>{{data.invoice}}</td>
                                        <td>{{data.total}}</td>
                                        <td><span class="badge badge-warning">{{data.status}}</span></td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Proses">
                           <table class="table table-bordered table-striped" id="table3">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Invoice</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Gudang</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     <tr v-for="data in data" :key="data.id">
                                        <td>{{data.id}}</td>
                                        <td>{{data.invoice}}</td>
                                        <td>{{data.total}}</td>
                                        <td><span class="badge badge-primary">{{data.status}}</span></td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Outbond">
                           <table class="table table-bordered table-striped" id="table4">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Invoice</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Gudang</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in data" :key="data.id">
                                        <td>{{data.id}}</td>
                                        <td>{{data.invoice}}</td>
                                        <td>{{data.total}}</td>
                                        <td><span class="badge badge-success">{{data.status}}</span></td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Dikirim">
                           <table class="table table-bordered table-striped" id="table5">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Invoice</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Gudang</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in data" :key="data.id">
                                        <td>{{data.id}}</td>
                                        <td>{{data.invoice}}</td>
                                        <td>{{data.total}}</td>
                                        <td><span class="badge badge-info">{{data.status}}</span></td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Sampai">
                            <table class="table table-bordered table-striped" id="table6">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Invoice</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Gudang</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                               <tbody>
                                     <tr v-for="data in data" :key="data.id">
                                        <td>{{data.id}}</td>
                                        <td>{{data.invoice}}</td>
                                        <td>{{data.total}}</td>
                                        <td><span class="badge badge-secondary">{{data.status}}</span></td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </div> 
    </div>
</template>

<script>
import OrdersDummy from "../components/data-dummy/Orders-Dummy.json";
import $ from "jquery";
export default{
    name: 'OrdersPage',
    components: {},
    data(){
        return{
            data:OrdersDummy,
        }
    },
    mounted(){
       $('#table1').dataTable({
         "responsive": false,"lengthChange": false,
     });
      $.ajax({

        })
    },
//    computed(){

//    },
}
</script>

<style scoped>
</style>