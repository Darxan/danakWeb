<template>
  <div v-if="isMounted">
        <section class="section_one mt-9vh">
        <div class="container">
            <div class="row w-100 d-flex align-items-center justify-content-center">
                <div class="col-md-12 text-center my-4 mb-4 d-flex align-items-center justify-content-center flex-column">
                    <h1>{{ $t("pitsa_sayohat") }}</h1><br>
                    <p class="cash text-center">{{ $t("cashback_dokonlar")}}</p>
                </div>
                <div class="col-md-3 mt-5" v-for="item in partnerList" :key="item.id">
                    <div class=" bg-white py-4 px-2 shadow">
                        <a :href="item.url" target="_blank">
                            <div class="text-center markets">
                                <img :src="getImgUrl(item.image)" alt="" style="max-width:120px; max-height: 120px">
                                <p>0.14 % - {{ $t("dan_qaytib_keladi") }} </p>
                                <h3>6.46 % {{ $t("gacha")}}</h3>
                                <h4 class="text-danger">{{ item.name }}</h4>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <a href="#section_two" 
           class="arrow">
           <img src="@/assets/icons/arrow-down.svg" alt=""></i>
        </a>
    </section>
    <!-- birinchi section tugadi -->
    <section class="bg-light my-5 py-5" id="section_two">
         <div class="container pt-3" >
        <div class="text-center mt-5">
            <h2> {{ $t("section_2_title") }} </h2>
            <p> {{ $t("section_2_title_2") }} </p>
        </div>
        <div class="row bg-white " style="border-left: 2px solid green">
            <div class="col-md-2 py-4 d-flex align-items-center justify-content-center" v-for="item in withdrawMethodsList" :key="item.id">
                <div class="card border-0">
                    <div class="d-flex align-items-center justify-content-center border-0">
                        <img :src="getImgUrl(item.image)" 
                            alt=""
                            style="max-width: 120px; max-height: 120px"
                            class="card-img-top">
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <!-- ikkinchi section boshlandi -->
   
    <!-- uchinchi section boshlandi -->
    <section class="section_three">
        <div class="container">
            <h1> {{ $t("section_3_title") }}  <i class="fas fa-heart text-danger"></i>   {{ $t("section_3_title_2qismi") }} </h1>
            <p class="cash mt-5"> {{ $t("section_3_title_2") }} </p>
            <img src="@/assets/images/announcement.svg" alt="" style="max-width: 300px;">
            <div class="social_btns">
                <a href=""><button><i class="fab fa-facebook-f"></i><p style="margin: 0">Facebook</p>&nbsp;<p style="margin: 0">1711</p></button></a>
                <a href=""><button><i class="fab fa-vk"></i><p style="margin: 0">VKontakte</p>&nbsp;<p style="margin: 0">803</p></button></a>
                <a href=""><button><i class="fab fa-twitter"></i><p style="margin: 0">Twitter</p>&nbsp;<p style="margin: 0">1072</p></button></a>
                <a href=""><button><i class="fab fa-odnoklassniki"></i><p style="margin: 0">Одноклас..</p>&nbsp;<p style="margin: 0">702</p></button></a>
            </div>
        </div>
    </section>
    <!-- uchinchi section tugadi -->

    <!-- to'rtinchi section boshlandi -->
    <section class="section_four">
        <div class="container">
        <div class="items">
            <h2> {{ $t("section_4_item_title_1") }} </h2><br>
            <a href="#"> {{ $t("section_4_item1_link1") }} </a><br>
            <a href="#"> {{ $t("section_4_item1_link2") }} </a><br>
            <a href="#"> {{ $t("section_4_item1_link3") }} </a><br>
            <a href="#"> {{ $t("section_4_item1_link4") }} </a><br>
            <a href="#"> {{ $t("section_4_item1_link5") }} </a><br>
        </div>
        <div class="items">
            <h2> {{ $t("section_4_item_title_2") }}</h2><br>
            <a href="#"> {{ $t("section_4_item2_link1") }} </a><br>
            <a href="#"> {{ $t("section_4_item2_link2") }} </a><br>
            <a href="#"> {{ $t("section_4_item2_link3") }} </a><br>
            <a href="#"> {{ $t("section_4_item2_link4") }} </a><br>
            <a href="#"> {{ $t("section_4_item2_link5") }} </a><br>
            <a href="#"> {{ $t("section_4_item2_link6") }} </a><br>
            <a href="#"> {{ $t("section_4_item2_link7") }} </a><br>
            <a href="#"> {{ $t("section_4_item2_link8") }} </a><br>
        </div>
        <div class="items">
            <h2> {{ $t("section_4_item_title_3") }} </h2><br>
            <a href="#"> {{ $t("section_4_item3_link1") }} </a><br>
            <a href="#"> {{ $t("section_4_item3_link2") }} </a><br>
            <a href="#"> {{ $t("section_4_item3_link3") }} </a><br>
            <a href="#"> {{ $t("section_4_item3_link4") }} </a><br>
        </div>
        <div class="items">
            <h2> {{ $t("section_4_item_title_4") }}</h2><br>
            <p> {{ $t("section_4_item4_link") }} </p>
        </div>
    </div>
    </section>
  </div>
</template>

<script>
import { axiosGet } from '@/store/axiosBase'
export default {
  name: 'Home',
  data:() => {
      return {
          partnerList: [],
          isMounted: false,
          withdrawMethodsList: []  
      }
  },
  mounted() {
      axiosGet.get('/api/v1/web/partner/list/').then(response => {
          this.isMounted = true
          this.partnerList = response.data
      }).catch(error => {
          this.$router.reload()
      })
      axiosGet.get('/api/v1/payment/method/list').then(response => {
        this.withdrawMethodsList = response.data.data
      }).catch(error => {
          this.$router.reload()
      })
  },
  methods: {
      getImgUrl(pic) {
        // return require('../assets/'+pic)
        return "https://api.danak.uz"+pic
      },
  },
}
</script>
<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active до версии 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>