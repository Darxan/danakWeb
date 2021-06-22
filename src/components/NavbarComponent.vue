<template>
<div>
  <Sidebar v-if="sidebar" @close="sidebar = false"/>
  <nav class="navbar sticky">
    {{scrolling}}
      <div class="container navbar__container">
        <div class="navbar_left__box">
           <a @click="sidebar = true" class="border-0" v-if="!sidebar">
              <img src="@/assets/icons/menu.svg" alt="">
           </a>
           <a v-if="sidebar" @click="sidebar = false">
             <img src="@/assets/icons/x.svg" alt="">
           </a>
            <div class="imgBx">
              <router-link to="/"><img src="@/assets/images/danak.png" alt=""></router-link>
              <router-link to="/" style="text-decoration:none;">
                  <h1>{{ $t("danak") }}</h1>
                </router-link>
            </div>  
          </div>
          <div class="btns"> 
              <router-link 
                          to="/about" 
                          class="login"
                          class-active="active"
                          >
                          {{ $t("about") }}
              </router-link>
              <template v-if="!isUserAuthenticated">
                <router-link to="/login" class="login">{{ $t("kirish")}}</router-link>
                <router-link to="/register" class="register" >{{ $t("royxatdan_otish")}}</router-link>
              </template>
              <template v-else>
                <router-link to="/profile" class="login">{{ $t("profile") }}</router-link>
                <button
                  @click="logout"
                  class="register">
                  {{ $t("close") }}
                </button>
              </template>
              <LanguageDropdown />
               <!-- bitta button qo'shildi -->
               <template v-if="isUserAuthenticated">
                <a @click="profile" class="profile_button">
                  <img src="@/assets/icons/user.svg" alt="">
                </a>
                <Profile v-if="profileModal" @close="profileModal = false"/>
               </template>
          </div>
      </div>
    </nav>
</div>
</template>

<script>
import LanguageDropdown from './LanguageComponents.vue'
import Sidebar from './SidebarComponents.vue'
import Profile from './ProfileComponent.vue'
export default {
  name: 'Header',
  data() {
    return {
      sidebar: false,
      profileModal: false
    }
  },
  
  components: {
    LanguageDropdown,
    Sidebar,
    Profile
  },
  computed:{
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
    menuItems(){
      return this.isUserAuthenticated 
      ? [
        {title: 'Profile', path: '/profile' }, 
        {title: 'Logout', path: '/logout'},

        ]
        : [
          {title: 'Login', path: '/login'},
          {title: 'Register', path: '/register'}
        ]
    },
    scrolling(){
      window.addEventListener('scroll', function(){
        const header = document.querySelector('.navbar');
        header.classList.toggle("sticky", window.scrollY > 0);
      });
    }
  },
  methods:{
     logout() {
      this.$store.dispatch("logoutUser").then(() => {
        this.$router.push("/login");
      });
    },
    profile() {
      this.profileModal = !this.profileModal
      // var x = document.getElementById("card");
      // var y = document.getElementById("mySidenav");
      // if (x.style.display === "flex") {
      //   x.style.display = "none";
      // } else {
      //   x.style.display = "flex";
      //   y.style.marginLeft = "-20rem";
      // }
    },
    setLocale(locale) {
      this.locale = locale;
      import(`../locale/${locale}.json`).then((msgs) => {
        this.$i18n.setLocaleMessage(locale, msgs);
        this.$i18n.locale = locale;
      });
    },
  }
}
</script>

<style scoped>
.languages{
  display: flex;
  justify-content: space-between;
  width: 100px;
}
.navbar_left__box{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 34px;
}
</style>
