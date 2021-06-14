<template>
  <!-- header boshlandi -->
    <nav class="navbar">
        <div class="container navbar__container">
            <div class="imgBx">
              <router-link to="/"><img src="@/assets/images/danak.png" alt=""></router-link>
              <router-link to="/" style="text-decoration:none;">
                 <h1>Danak</h1>
                </router-link>
            </div>  
            <div class="btns"> 
                <router-link to="/about" class="login">About</router-link>
                <template v-if="!isUserAuthenticated">
                  <router-link to="/login" class="login">Kirish</router-link>
                  <router-link to="/register" class="register" >Ro'yxatdan o'tish</router-link>
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
            </div>
        </div>
    </nav>
    <!-- header tugadi -->
</template>

<script>
import LanguageDropdown from './LanguageComponents.vue'
export default {
  name: 'Header',
  data() {
    return {
    
    }
  },
  
  components: {
    LanguageDropdown
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
  },
  methods:{
     logout: function() {
      this.$store.dispatch("logoutUser").then(() => {
        this.$router.push("/login");
      });
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
</style>
