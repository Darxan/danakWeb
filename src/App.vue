<template>
  <div id="app">
    <Navbar />
      <router-view :key="$route.fullPath"/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/NavbarComponent.vue'
import Footer from '@/components/FooterComponent.vue'
export default {
  name: 'Layout',
  components:{
    Navbar,
    Footer
  }
}
</script>
