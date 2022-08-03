<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
      <NavBar />
    <SideBar />
    <router-view/>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
export default{
  name : 'App',
  components: {NavBar,SideBar}
}
</script>
<style>

</style>
