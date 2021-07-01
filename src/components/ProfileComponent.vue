<template>
<!-- profil card boshlandi -->
<div class="profile_card" id="card" v-if="userData">
    <div class="header_profile">
        <i class="far fa-user-circle user_icon"></i>
        <p>{{ userData.username }}</p>
        <a href="#"><img src="@/assets/icons/settings.svg" alt=""></a>
        <a @click="closeProfileModal"><img src="@/assets/icons/log-out.svg" alt=""></a>
    </div>
    <div class="profile_texts">
        <h1>{{ $t("cashback_ustasi") }}</h1>
        <p>{{ $t("sadoqat_darajasi") }}</p>
        <p><strong>{{ $t("darajani_oshirish") }}</strong><br><br>
            {{ $t("maksimal_daraja") }}
        </p>
        <div class="profile_link">
            <p>{{ $t("chiqarilgan_summa") }}<strong>$ {{ userData.all_transaction }}</strong></p>
            <a href="#"><img src="@/assets/icons/arrow-right-circle.svg" alt="">
            </a>
        </div>
    </div>
    <div class="profile_body">
            <img src="finger.svg" alt="">
            <p>{{ $t("qanday_ishlashi") }}</p>
            <a href="#"><i class="fas fa-chevron-right"></i></a>
        <img src="finger.svg" alt="">
        <p>U qanday ishlaydi?</p>
        <a href="#"><i class="fas fa-chevron-right"></i></a>
    </div>
    <div class="cashback">
        <h1>{{ $t("naqd_pul") }}</h1>
        <p>{{ $t("tasdiqlash") }}</p>
        <h2 class="grey_number">$ {{ userData.estimated }}</h2>
        <p class="border_bottom"></p>
        <p>{{ $t("yechib_olish_uchun_mavjud") }}:</p>
        <h2 class="black_number">$ {{ userData.all }}</h2>
        <button
            class="btn btn-success btn-sm px-4"
            @click="withdrawHandler">
          {{$t("pulni_olish")}}
        </button>
    </div>
</div>
<!-- profil card muvaffaqiyatli yakunlandi -->
</template>

<script>
import { axiosGet } from '@/store/axiosBase'
export default {
    data:() =>{
        return {
          userData: null
        }
    },
    async mounted(){
        let response = await  axiosGet('/api/v1/user/profile/information')
        if(response.status === 200){
            this.userData = response.data.data
        }
    },
    methods:{
        closeProfileModal(){
            this.$emit('close')
        },
        withdrawButton(){
        if(this.userData.all > '0.10'){
            return true
        } else {return false}
        },
        withdrawHandler(){
            this.$emit('close')
            this.$router.push({path: '/transaction/create'})
        }
    },
    
}
</script>

<style  scoped>
/* PROFILE BEGIN */
.profile_card {
    position: absolute;
    width: 320px;
    height: 60vh;
    top: 110%;
    right: 8%;
    background: #fff;
    box-shadow: 0 2px 24px 0 rgb(17 27 45 / 11%);
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    display: flex;
}
.header_profile {
    width: 82%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header_profile .user_icon{
    font-size: 35px;
    color: #8f8f8f;
}
.header_profile p {
    font-size: 12px;
    font-family: verdana;
    font-weight: 600;
}
.header_profile .profile_icons {
    font-size: 20px;
    color: black;
}
.profile_texts {
    width: 82%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 30%;
    flex-direction: column;
    overflow: hidden;
    margin-top: -1rem;
}
.profile_texts  h1 {
    font: bold 24px 'Rubble', 'Proxima Nova', sans-serif;
    letter-spacing: 0.3px;
    color: #000;
}
.profile_texts p {
    font: 400 13px/1.38 'Rubble', 'Proxima Nova', sans-serif;
    letter-spacing: 0.4px;
    color: #4b4b4b;
}
.profile_texts .profile_link {
    width: 100%;
    display: flex; 
    justify-content: space-between;
    align-items: center;
}
.profile_texts .profile_link p{
    color: black;
}
.profile_texts .profile_link a {
    color: black;
    font-size: 20px;
}
.profile_body {
    height: 48px;
    width: 320px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #e9f2fd;
    margin-top: -1rem;  
}
.profile_body img {
    margin-left: -1rem;
}
.profile_body a {
    color: black;
    font-size: 20px;
}
.cashback {
    width: 82%;
    overflow: hidden;
    height: 33%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 0rem;
}
.cashback h1 {
    font: bold 18px 'Rubble', 'Proxima Nova', sans-serif;
    margin-bottom: 15px;
    line-height: 1.33;
    color: #000;
    letter-spacing: normal;
}
.cashback p {
    line-height: 1.23;
    letter-spacing: 0.4px;
    font: 400 13px 'Rubble', 'Proxima Nova', sans-serif;
    color: #4b4b4b;
}
.cashback h2 {
    color: #8f8f8f;
    font: bold 24px 'Rubble', 'Proxima Nova', sans-serif;
    line-height: 1;
    letter-spacing: normal;
    font-weight: 600;
    width: 100%;
}
.border_bottom {
    width: 100%;
    border: 01px dashed #8f8f8f;
}
.cashback .black_number {
    color: black
}
/* .cashback button {
    display: block;
    height: 46px;
    width: 100%;
    border-radius: 4px;
    background: #e6e6e6;
    border: 1px solid transparent;
    text-align: center;
    color: #000;
    letter-spacing: 0.2px;
    font: 400 16px/32px 'Rubble', 'Proxima Nova', sans-serif;
    padding: 6px 12px;   
    cursor: pointer;
}
.cashback bottom:hover{
    background-color: greenyellow;
} */
/* profile card tugadiiiii */

</style>