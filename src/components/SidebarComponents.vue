<template>
  <div>  
    <!-- sidebar boshlandi yangi o'zgarish -->
    <div>
      <div id="mySidenav" class="sidenav">
        <!-- <a href=""><i class="fal fa-home-lg-alt"></i><span>Bosh sahifa</span></a>
        <a href=""><i class="fal fa-home-lg-alt"></i><span>About</span></a>
        <a href=""><i class="fal fa-home-lg-alt"></i><span>Mening naqd pulim</span></a>
        <a href=""><i class="fal fa-home-lg-alt"></i><span>To'lov tarixi</span></a>
        <a href=""><i class="fal fa-home-lg-alt"></i><span>Mening hamyonim</span></a>
        <a href=""><i class="fal fa-home-lg-alt"></i><span>About</span></a>
        <a href=""><i class="fal fa-home-lg-alt"></i><span>Sozlamalar</span></a> -->
        <a :href="item.link" v-for="item in products">
          <img :src="item.title" alt="">
          <span> {{ item.title }} </span>
        </a>
      </div>
  </div> 


  </div>
</template>

<script>
export default {
  data:() => {
    return {
      products: [
                    {
                        image: '@/assets/logo/home.png',
                        title: 'iPhone XR',
                        link: 'https://youtube.com',
                    },
                    {
                        image: '@/assets/logo/home.png',
                        title: 'iPhone XR',
                        link: 'https://youtube.com',
                    },
                    {
                        image: '@/assets/logo/home.png',
                        title: 'iPhone XR',
                        link: 'https://youtube.com',
                    },
                    {
                        image: '@/assets/logo/home.png',
                        title: 'iPhone XR',
                        link: 'https://youtube.com',
                    },
                    {
                        image: '@/assets/logo/home.png',
                        title: 'iPhone XR',
                        link: 'https://youtube.com',
                    },
                    {
                      image: '@/assets/logo/home.png',
                        title: 'iPhone XR',
                        link: 'https://youtube.com',
                    },
                    
                ],    
    }
  },
    
  };
</script>

<style scoped>
  
</style>