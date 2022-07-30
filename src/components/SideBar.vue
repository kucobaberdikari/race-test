<template>
  <aside class=" main-sidebar sidebar-dark-primary elevation-4 sidebar-no-expand">
      <!-- <button class="close" type="button" data-dismiss="control-sidebar" aria-label="close" data-controlsidebar-slide="true">
        <span aria-hidden="true">&times;</span>
      </button> -->
  <!-- Brand Logo -->
  <div class="brand-link">
         <button class="close" type="button" data-widget="pushmenu" aria-label="close" >
              <span aria-hidden="true">&times;</span>
          </button>
     <a href="#" class="brand-link" >
      <img src="../assets/images/newlogo.png" alt="logo" class="brand-image">
      <span class="brand-text font-weight-light"><b>Race Fullfilment</b></span>
    </a>
     <!-- <a class="pushmenu" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a> -->
  </div>


  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="true">
        <li class="nav-item">
          <a href="/" class="nav-link">
          <i class="nav-icon fas fa-th-large"></i>
            <p> Dashboard </p>
          </a>
        </li>
        <li class="nav-header"><b>STOCK</b></li>
        <li class="nav-item">
          <a href="/inventory" class="nav-link">
            <i class="nav-icon fas fa-dolly-flatbed"></i>
            <p> Inventory</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="/produk/add" class="nav-link">
            <i class="nav-icon fas fa-boxes"></i>
            <p> products </p>
          </a>
        </li>
        <li class="nav-header"><b>SHIPMENT</b></li>
        <li class="nav-item">
          <a href="/inbound" class="nav-link">
             <i class="nav-icon fas fa-arrow-alt-to-bottom"></i>
            <p>Inbound</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="/outbound" class="nav-link">
            <i class="nav-icon fas fa-arrow-alt-to-top"></i>
            <p>Outbound</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="/tracking" class="nav-link">
            <i class="nav-icon fad fa-location"></i>
            <p>Tracking</p>
          </a>
        </li>
        <li class="nav-item">
          <a href="/orders" class="nav-link">
            <i class="nav-icon fas fa-history"></i>
            <p>Orders</p>
          </a>
        </li>
        <li class="nav-header"><b>SETTING</b> </li>
         <li class="nav-item">
          <a href="/integrations" class="nav-link">
            <i class="nav-icon fas fa-file-code"></i>
            <p>Integrations</p>
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>
</template>

<script>
// import DashboardSharpIcon from '@mui/icons-material/Dashboard';
export default{
name: "SideBar",
components: {
  // DashboardSharpIcon,
}
}
</script>

<style scoped>
  .brand-link{
    padding: 20px 20px 20px 0px;
    
  }
</style>