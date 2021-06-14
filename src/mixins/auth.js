import facebookLogin from 'facebook-login-vuejs';
export default ({
    
    data() {
        return {
            googleSignInParams: {
                client_id: '91323451042-qhv2n2miqpkv7mdggp1pbkkmiodft1nf.apps.googleusercontent.com'
            }
        }
    },
    
    components: {
        facebookLogin
    },
    methods: {
    onSignInSuccess (googleUser) {
      this.$store.dispatch('googleAuth', {access_token: googleUser.qc.access_token})
    },
    onSignInError (error) {
      // `error` contains any error occurred.
      console.log('OH NOES', error)
    },  
    facebookAuthentication(resp) {
      this.loading = true;
      const token = resp.response.authResponse.access_token;
      console.log('token', token)
      this.$store.dispatch('facebookAuth', {access_token: token})
    },
    onFacebookInError(error) {
      this.$store.dispatch("SET_ERROR", error);
    },
    onLogout(){
        this.$store.dispatch("logoutUser").then(() => {
        this.$router.push("/login");
      });
    }
  },

})