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
            <div class="card-header">

            </div>
            <div class="card-body">
                <table class="table table-bordered table-striped table-responsive-md" id="table1">
                    <thead>
                        <tr>
                            <th>SERVICE</th>
                            <th>IDENTIFIER</th>
                            <th>TYPE</th>
                            <th>LAST IMPORTED</th>
                            <th>LAST EXPORTED</th>
                            <th>SYNC STOCK</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="data in datas" :key="data.identifier" >
                            <td>{{data.service}}</td>
                            <td>{{data.identifier}}</td>
                            <td>{{data.type}}</td>
                            <td>{{data.last_imp}}</td>
                            <td>{{data.last_exp}}</td>
                            <td>{{data.sync_stock}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import IntegrationDummy from "../components/data-dummy/Integration-Dummy.json";
    import $ from "jquery";
    export default{
        name:'IntegrationS',
        components:{},
        data(){
            return{
                datas:IntegrationDummy,
            }
        },
        mounted(){
            $('#table1').dataTable({
                "responsive": false,"lengthChange": false,
            });
            },  
    }
</script>

<style scoped>
    
</style>