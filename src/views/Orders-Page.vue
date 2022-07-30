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
                        <b-tab no-body title="All" active>
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
                                        <td>{{data.status}}</td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Inbound">
                           <table class="table table-bordered table-striped" id="table1">
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
                                        <td>{{data.status2}}</td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Proses">
                           <table class="table table-bordered table-striped" id="table1">
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
                                        <td>{{data.status2}}</td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Outbond">
                           <table class="table table-bordered table-striped" id="table1">
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
                                        <td>{{data.status2}}</td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Dikirim">
                           <table class="table table-bordered table-striped" id="table1">
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
                                        <td>{{data.status}}</td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Sampai">
                            <table class="table table-bordered table-striped">
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
                                        <td>{{data.status2}}</td>
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
    }
}
</script>

<style scoped>
</style>