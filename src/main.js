import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as VueGoogleMaps from "vue2-google-maps" 

import "../node_modules/admin-lte/dist/css/adminlte.min.css";
import "../node_modules/admin-lte/dist/js/adminlte.js";
import "../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "../node_modules/admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "../node_modules/admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js";

// import "../node_modules/admin-lte/plugins/jqvmap/jqvmap.min.css";
// import "../node_modules/admin-lte/plugins/jqvmap/jquery.vmap.min.js";
// import "../node_modules/admin-lte/plugins/jqvmap/maps/jquery.vmap.usa.js";
import "../node_modules/admin-lte/plugins/jquery-ui/jquery-ui.min.js";
import "../node_modules/admin-lte/plugins/jquery/jquery.min.js";

// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css"
import "../node_modules/bootstrap-vue/dist/bootstrap-vue.js"

import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/datatables.net-bs4/js/dataTables.bootstrap4.js";
import "../node_modules/datatables.net-bs4/css/dataTables.bootstrap4.min.css";
import "../node_modules/datatables.net-responsive-bs4/css/responsive.bootstrap4.min.css";
import "../node_modules/datatables.net-responsive-bs4/js/responsive.bootstrap4.min.js";
import "../node_modules/datatables.net-buttons-bs4/css/buttons.bootstrap4.min.css";
import "../node_modules/datatables.net-buttons-bs4/js/buttons.bootstrap4.min.js";

import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css' 
import $ from "jquery";
Vue.use(CxltToastr)

Vue.config.productionTip = false

Vue.use(BootstrapVue,IconsPlugin)
$.widget.bridge('uibutton', $.ui.button)

Vue.use(VueGoogleMaps, {
  load: {
    key: "GOOGLE MAP API KEY GOES HERE",
    libraries: "places"
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
