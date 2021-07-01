<template>
  <div id="mySidenav" class="sidenav">
    <div class="aside">
      <router-link tag="a" 
                 class="col" 
                 class-active="active"
                 exact
                 v-for="item in sidebarMenus"
                 :key="item.id"
                 :to="item.path"
                 >
                <div @click="close">
                    <img :src="getImgUrl(item.imgUrl)" alt="">
                <span >{{ item.title }}</span>
                </div>
    </router-link>
    <div class="mobile">
      <router-link tag="a" to="/about" class="col mobile" class-active="active">
        <div @click="close">
          <img src="@/assets/images/logout.png" alt="" width="20">
          <span>{{ $t("about") }}</span>
        </div>
      </router-link>
    </div>
    <template v-if="!isUserAuthenticated">
      <div class="mobile">
        <router-link tag="a" to="/login" class="col" class-active="active">
          <div @click="close">
            <span>{{ $t("kirish")}}</span>
          </div>
        </router-link>
        <router-link tag="a" to="/register" class="col" class-active="active">
          <div @click="close">
            <span>{{ $t("royxatdan_otish") }}</span>
          </div>
        </router-link>
      </div>
    </template>

    <template v-else>
      <div class="logout mobile" @click="close">
          <button
          @click="logout"
          class="">
          {{ $t("close") }}
        </button>
      </div>
    </template>
    </div>
</div>
</template>

<script>
export default {
    data:() =>{
        return {
            sidebarMenus:[
                {id:1, title: 'Bosh sahifa', imgUrl: 'icons/home.svg', path: '/'},
                {id:2, title: 'About', imgUrl: 'icons/home.svg', path: '/about'},
                {id:3, title: 'My wallets', imgUrl: 'icons/home.svg', path:'/user-wallets'},
                {id:4, title: 'To\'lov tarixi', imgUrl: 'icons/home.svg', path:'/transaction/history'},
                {id:5, title: 'Mening hamyonim', imgUrl: 'icons/home.svg', path:'/mywallet'},
                {id:6, title: 'Sozlamalar', imgUrl: 'icons/home.svg', path:'/'},
            ]
        }
    },
    methods:{
        getImgUrl(pic) {
          return require('../assets/'+pic)
        },
        close(){
          this.$emit('close');
        },
        logout() {
        this.$store.dispatch("logoutUser").then(() => {
        this.$router.push("/login");
      });
    },
    },
    computed: {
      isUserAuthenticated() {
        return this.$store.getters.isUserAuthenticated;
      },
    }
}
</script>

<style scoped>
/* SIDEBAR BEGIN */
#mySidenav li:hover,
#mySidenav li:active{
    background-color: indianred;
    cursor: pointer;
}
.mobile {
  display: none;
}
@media (max-width: 700px) and (min-width: 300px){
  .mobile {
    display: block;
  }
}
.sidenav {
    height: 100vh;
    width: 310px;
    position: fixed;
    z-index: 3;
    top: 4%;
    left: 0;
    background: #fff;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    padding-bottom: 60px;
    box-shadow: 2px 5px 3px 0 rgb(0 0 0 / 6%);
    display: flex; 
    flex-direction: column;
  }
  
  .sidenav a {
    text-decoration: none;
    background: #fff;
    color: black;
    width: 100%;
    padding: .3rem;
    padding-left: 2rem;
    letter-spacing: 0.3px;
    font: 400 16px/54px 'Rubble', 'Proxima Nova', sans-serif;
    display: flex;
    align-items: center;
  }
  .sidenav a span {
      padding-left: 1rem;
  }
  .sidenav a:hover {    
    border-right: 4px solid tomato;
    background: #fbf5cc;
  }

  .sidenav .logout {
    background: #fff;
    color: black;
    width: 100%;
    padding: .3rem;
    padding-left: 2rem;
    letter-spacing: 0.3px;
    font: 400 16px/54px 'Rubble', 'Proxima Nova', sans-serif;
  }
  .sidenav .logout:hover {
    border-right: 4px solid tomato;
    background: #fbf5cc;
  }
  .sidenav .logout button {
    border: none;
    background: none;
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 1rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  @media (max-width: 600px) and (min-width: 300px){
    .sidenav {
        width: 100%;
    }
  }
/* SIDEBAR END  */

</style>