<template>
    <div>
        <section class="mt-9vh">
            <div class="container">
                <div class="text">
                    <h1 class="m-t2">Доход от друзей</h1>
                    <p>Здесь Вы можете увидеть доход от друзей, приведённых Вами. Пожалуйста, свяжитесь с нами, если у вас есть вопросы.</p>
                </div>
                <div class="links">
                    <a :href="link.link" v-for="link in links" :key="link.id"> {{ link.title }} </a>
                </div>


                <div class="card_container">
                    <div class="card_1">
                        <div class="cards">
                            <div class="container text-center">
                                <div class="texts">
                                    <h2>Приведи друга и заработай</h2>
                                    <p>Каждый друг, который зарегистрируется по вашей ссылке,
                                    принесет вам доход до 50% от суммы своего кэшбэка</p>
                                    <p>Ссылка для ваших друзей:</p>
                                </div>
                                <div class="content">
                                    <div>
                                        <h1 class="margin copy_text" id="copy_text"><input type="text" v-model="url"  id="myInput" readonly="true"></h1>
                                        <div class="tooltip">
                                            <button @click="myFunction()" @mouseout="outFunc()" class="copy_button">
                                            <span class="tooltiptext" id="myTooltip">Copy</span>Copy url</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cards"></div>
                        <div class="cards"></div>
                    </div>
                    <div class="card_2">
                    
                    </div>
                </div>
                <!-- <div class="copied" id="copied">
                    <h1>Url Copied</h1>
                </div> -->
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
                    {id: 1, link: 'youtube.com', title: 'Как это работает?'},
                    {id: 2, link: 'youtube.com', title: 'Что такое кэшбэк-ссылка?'},
                    {id: 3, link: 'youtube.com', title: 'Как привести друзей?'}
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
    width: 70%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    overflow: hidden;
    height: auto;
}
section .container .links a {
    margin: 3rem; 
}
section .container .card_container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: auto;
}
section .container .card_container .card_1 {
    width: 68%;    
    padding: 43px 10px 40px;
    border: 1px solid #eaeaea;
    border-radius: 6px;
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
    z-index: 100;
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
  display: inline-block;
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
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -75px;
  opacity: 0;
  transition: opacity 0.3s;
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
</style>