<template>
    <div>
        <section class="mt-9vh">
            <div class="container">
                <div class="text">
                    <h1 class="m-t2"> {{ $t("doxod_ot_druzey") }} </h1>
                    <p> {{ $t("doxod_ot_druzey_2") }} </p>
                </div>
                <div class="links">
                    <a :href="link.link" v-for="link in links" :key="link.id"> {{ link.title }} </a>
                </div>


                <div class="card_container">
                    <div class="card_1">
                        <div class="cards">
                            <div class="container text-center">
                                <div class="texts">
                                    <h2 class="p-2"> {{ $t("privedi_druga") }} </h2>
                                    <p class="p-2"> {{ $t("privedi_druga_2") }} </p>
                                    <p> {{ $t("ssilka_dlya_vashix_druzey") }} </p>
                                </div>
                                <div class="content">
                                    <div>
                                        <h1 class="margin copy_text" id="copy_text"><input type="text" v-model="url"  id="myInput" readonly="true"></h1>
                                        <div class="tooltip">
                                            <button @click="myFunction()" @mouseout="outFunc()" class="copy_button">
                                            <span class="tooltiptext" id="myTooltip"> {{ $t("copy") }} </span> {{ $t("copy_url") }} </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cards">
                            <p>{{ $t("doxod_ot_druzey_etom_razdele") }} 
                            </p>
                        </div>
                        <div class="cards text-center p-4">
                            <div class="texts p-1">
                                <h1> {{ $t("create_cashback_link") }} </h1>
                                <p>{{ $t("create_link") }}</p>
                            </div>
                            <div class="inputs p-3">
                                <input type="text" placeholder="Укажите ссылку на товар">
                                <button class="copy_button">{{$t("create")}}</button>
                            </div>
                        </div> 
                    </div>
                    <div class="card_2">
                        <div class="cards text-center">
                            <p class="font-bold p-4"> {{ $t("istoriya_viiplati") }} </p>
                            <h1 class="font-bold font-50">50%</h1>
                            <p class="font-bold p-3"> {{ $t("istoriya_viiplati_2") }} </p>

                            <router-link to="/about" class="font-bold c-link u-none"> {{ $t("podrobnee") }} </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Information/>
    </div>
</template>

<script>
import Information from '@/components/InformationComponent'
    export default {
        data() {
            return {
                url: 'http://danak.uz',
                links: [
                    {id: 1, link: 'youtube.com', title: this.$i18n.t("kak_eto_rabotaet")},
                    {id: 2, link: 'youtube.com', title: this.$i18n.t("chto_takoe_cashback_link")},
                    {id: 3, link: 'youtube.com', title: this.$i18n.t("kak_privesti_druzey")}
                ]
            }
        },
        components: {
            Information
        },
        methods: {
            myFunction() {
                var copyText = document.getElementById("myInput");
                copyText.select();
                copyText.setSelectionRange(0, 99999);
                document.execCommand("copy");
                
                var tooltip = document.getElementById("myTooltip");
                tooltip.innerHTML = "Copied !";
            },

            outFunc() {
                var tooltip = document.getElementById("myTooltip");
                tooltip.innerHTML = "Copy";
            }
        }
    }
</script>

<style scoped>

section {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-content: center;
}
section .container {
    width: 78%;
    height: 100%;
}
section .container .text {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-content: center;  
    flex-direction: column;
}
section .container .text h1, p{
    padding-top: .6rem;
    padding-bottom: .6rem;
}
section .container .links {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    height: auto;
}
section .container .links a {
    text-decoration: none;
    margin-bottom: 1rem;
}
section .container .card_container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
}
section .container .card_container .card_1 {
    width: 68%;
    border-radius: 6px;
    height: auto;
}
/* section .container .card_container .card_1, section .container .card_container .card_2 {
    margin: .7rem;
} */
section .container .card_container .card_1 .cards:nth-child(1), section .container .card_container .card_1 .cards:nth-child(3) {
    height: auto;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    display: flex;  
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
section .container .card_container .card_1 .cards:nth-child(3){
    margin-top: 1.5rem;
}
section .container .card_container .card_1 .cards:nth-child(3) .inputs {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70%;
    height: auto;
}
section .container .card_container .card_1 .cards:nth-child(3) .inputs input {
    outline: none;
    padding: .4rem .6rem;
    box-shadow: none;
    border: 1px solid #eaeaea;
    border-radius: 6px;
    width: 60%;
    margin: 1rem;
}
section .container .card_container .card_1 .cards:nth-child(3) .inputs button {
        margin: 1rem;
}
section .container .card_container .card_1 .cards:nth-child(2){
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #eaeaea;
    margin-top: 1.5rem;
    border-radius: 6px;
    width: 100%;
}

section .container .card_container .card_1 .cards:nth-child(2) p {
    padding: 3rem;
}
.content {
    display: flex;
    justify-content: center;
    align-items: center;
}
.content div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    opacity: 1;
    padding: 1rem;
}
.margin {
    margin: 1rem;
}
.copy_text {
    padding: 10px 20px;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding-left: 50px;
    margin-right: 12px;
    color: #000;
    font: 20px 'Conv_Proxima Nova Regular', sans-serif;
    letter-spacing: 0.2px;
    position: relative;
    width: 205px;
}
.copy_text::before {
    display: block;
    content: '';
    position: absolute;
    top: 11px;
    left: 12px;
    width: 23px;
    height: 23px;
    background: url('../assets/images/copy.svg') no-repeat;
    background-size: cover;
}
.copy_button {
    padding: 10px 20px;
    background: #009551;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    position: relative;
}
.copy_text input {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
    box-shadow: none;
}
.tooltip {
  position: relative;
  display: block;
  z-index: 1;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 140px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
.card_container .card_2 {
    width: 28%;
    height: auto;
}
.card_container .card_2 .cards {
    width: 100%;
    border: 1px solid #eaeaea;
    height: auto;
    border-radius: 6px;
    padding: 1rem;
}
@media (max-width: 1120px) {
    section .container .card_container .card_1, section .container .card_container .card_2 {
        width: 100%;
    }
    section .container .card_container .card_2 {
        margin-top: 1.5rem;
    }
    section .container .card_container .card_1 .cards:nth-child(3) .inputs {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }


}
</style>