<template>
<div>
  <Sidebar v-if="sidebar" @close="sidebar = false"/>
  <nav class="navbar sticky">
    {{scrolling}}
      <div class="container navbar__container">
        <div class="content">
        <div class="navbar_left__box">
           <!-- <a @click="sidebar = true" class="border-0" v-if="!sidebar">
              <img src="@/assets/icons/menu.svg" alt="">
           </a> 
           <a v-if="sidebar" @click="sidebar = false">
             <img src="@/assets/icons/x.svg" alt="">
           </a> -->
           <button @click="toggleMenu()" class="hamburger">
            <span class="hamburger-line hamburger-line-1"></span>
            <span class="hamburger-line hamburger-line-2"></span>
            <span class="hamburger-line hamburger-line-3"></span>
           </button>
           </div>
            <div class="imgBx">
              <router-link to="/" class="link_for_image"><img src="@/assets/images/danak.png" alt=""></router-link>
              <router-link to="/" style="text-decoration:none;" class="link_for_danak">
                  <h1 class="c-black">Danak</h1>
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
    toggleMenu(){
      const menu = document.querySelector('.hamburger');
      menu.classList.toggle('active');
      if(this.sidebar === true){
        this.sidebar = false;
      } 
      else {
        this.sidebar = true;  
      }
    }
  }
}
</script>

<style scoped>
  .hamburger {
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  background-color: transparent;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: black;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.1s ease-out;
}

.hamburger-line:not(:first-child) {
  margin-top: 7px;
}

/* To properly translate the element, you should input inside the translateY the sum of the height of your line + margin between 2 lines. In this case, 4px height + 7px margin = 11px */
.hamburger.active .hamburger-line-1 {
  transform: translateY(11px) rotate(-135deg);
}

.hamburger.active .hamburger-line-2 {
  opacity: 0;
  transform: translateX(-50%);
}

/* To properly translate the element, you should input inside the translateY the sum of the height of your line + margin between 2 lines. In this case, 4px height + 7px margin = 11px */
.hamburger.active .hamburger-line-3 {
  transform: translateY(-11px) rotate(-225deg);
}
.languages{
  display: flex;
  justify-content: space-between;
  width: 100px;
}
.navbar_left__box{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center ;
  width: 34px;
  cursor: pointer;
}
.content {
    display: flex;
    width: 18%;
    justify-content: space-between; 
    overflow: hidden;
    align-items: center;
}
</style>
