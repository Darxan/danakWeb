<template>
    <div v-if="isMounted">
        <!-- <section class="section_1">
            <div class="container">
                <h1>Mening hamyonim</h1>
                <p>Bu erda siz to'plangan mablag'larni qaytarib olishingiz va to'lovlar tarixini ko'rishingiz mumkin. Agar sizda biron bir savol bo'lsa, biz bilan bog'laning.</p>
                 <div class="section_cards">
                     <div class="items">
                        <p>
                            Danak hamyoningizda
                        </p>
                        <h1>$ 0.75</h1>
                        <p>Pulni 1,5 dollardan olish mumkin</p>
                    </div>
                    
                    <div class="items">
                       <p>
                           Tasdiqlashni kutmoqdaman
                       </p>
                       <h1>
                           $ 0.00
                       </h1>
                       <p><a href="#">Naqd pul qanday ishlaydi?</a></p>
                   </div>
                 </div>
            </div>
        </section> -->
        <section class="section_table pt-5 pb-5 flex-column">
            <div class="container ">
                <h1 class="w-100 text-center align-items-center">Transaction history </h1>
                <!-- <div class="section_table_header">
                    <div class="inputs">
                    <div class="items">
                        <p>Davr</p>
                        <input type="date" id="birthday" name="birthday">
                    </div>
                    <div class="items">
                        <p>Do'kon</p>
                        <select>
                          <option>Hamma do'konlar</option>
                        </select>
                    </div>
                    <div class="items">
                        <p>Davr</p>
                        <select>
                          <option>Barcha holatlar</option>
                        </select>
                    </div>
                </div>
                <div class="links">
                    <a href="">Otsutstvuet keshbek?</a>
                </div> 
                </div>-->
                <div class="section_table_body">
                    <table id="customers">
                        <tr>
                            <th>Card number</th>
                            <th>Data</th>
                            <th>Withdraw method</th>
                            <th>Summa</th>
                            <th>Status</th>
                        </tr>
                        <tr v-for="transaction in transactionList" :key="transaction.id">
                            <td>{{ maskCardNumber(transaction.client_card) }}</td>
                            <td>{{ transaction.payment_time }}</td>
                            <td>{{ transaction.pay_method_type }}</td>
                            <td>$ {{ transaction.amount }}</td>
                            <td v-if="transaction.payment_status == 0">IN PROGRESS</td>
                            <td v-if="transaction.payment_status == 1">Completed</td>
                        </tr>
                    </table>
                </div>
            <Pagination />
            </div>
        </section>


        <section class="section_cards_2">
            <div class="container">
                <h1>Qo'shimcha funktsiyalar</h1>
                <div class="card_container">
                    <div class="card" v-for="card in cards" :key="card.id">
                        <div class="img_block">
                            <img :src="getImgUrl(card.img)" alt="">
                        </div>
                        <div class="description">
                        <p class="title">
                            {{ card.name }}
                        </p>
                        <p class="descr_text">
                            {{ card.paragraph }}
                        </p>
                    </div>
                        <p><a :href="card.link">{{ card.link_name }}</a></p>
                    </div>
                </div>
            </div>
        </section>
        <!-- to'rtinchi section boshlandi -->
    <section class="section_four">
        <div class="container">
        <div class="items">
            <h2>Ko'proq saqlash</h2><br>
            <a href="#">Aliexpress-da ikki marta naqd pul bekor qilindi!</a><br>
            <a href="#">Aliexpress uchun qo'shimcha chegirmalar: foydali sotib oling</a><br>
            <a href="#">Aliexpress-da sotib olayotganda naqd pul: asosiy narsa haqida qisqacha</a><br>
            <a href="#">Aliexpress uchun keshbekni yuklab olish va uni qanday o'rnatish yaxshiroq</a><br>
            <a href="#">AliExpressning cash back plaginlari nima va uning afzalliklari qanday?</a><br>
        </div>
        <div class="items">
            <h2>Bizga yordam beraylik</h2><br>
            <a href="#">Sodiqlik dasturi Danak</a><br>
            <a href="#">Android dastur Danak</a><br>
            <a href="#">iOS dasturi Danak</a><br>
            <a href="#">Brauzerlar uchun kengaytirish</a><br>
            <a href="#">Yordam</a><br>
            <a href="#">Savol bering</a><br>
            <a href="#">Blog</a><br>
            <a href="#">Sayt xaritasi</a><br>
        </div>
        <div class="items">
            <h2>Biz bilan ishlash</h2><br>
            <a href="#">"Do'stingizni olib keling" dasturi</a><br>
            <a href="#">Bizni reklama qilish</a><br>
            <a href="#">Do'konlar uchun maslahatlar</a><br>
            <a href="#">"Megabonus" da reklama qilingan»</a><br>
        </div>
        <div class="items">
            <h2>Biz haqimizda</h2><br>
            <p>Biz ishonamizki, jamg'arma pulni ehtiyotkorlik bilan sarflashda olingan foydadir, shuning uchun biz yangi vositani taklif qilamiz. Yuzlab do'konlarni, texnologiyani va dizaynni birlashtirib, xaridlaringizni chindan ham iqtisodiy qilish uchun ajoyib keshbek xizmatini yaratdik. Bizning xizmat yordamida butun dunyo bo'ylab sevimli do'konlar va xizmatlar yuzlab sotib olish miqdori 40% qaytish mumkin.</p>
        </div>
    </div>
    </section>
    </div>
</template>

<script>
import Pagination from '@/components/PaginationComponent.vue'
import { axiosGet } from '@/store/axiosBase.js'
    export default {
        data:() =>{
            return {
                transactionData: null,
                isMounted: false,
                cards: [
                    {id: 1, img: 'images/human.png', name: "Do'stlaringizni taklif qiling va ular uchun naqd pul olish", paragraph: "Havola yordamida ro'yxatdan o'tgandan so'ng, do'stingiz 'Megabonus' sodiqlik dasturida 'Savdogar' darajasini oladi. Do'stingiz har safar ...", link_name: "'Do'stlardan keladigan daromad' haqida batafsil", link: 'https://youtube.com'},
                    {id: 2, img: 'images/human.png', name: "Do'stlaringizni taklif qiling va ular uchun naqd pul olish", paragraph: "Havola yordamida ro'yxatdan o'tgandan so'ng, do'stingiz 'Megabonus' sodiqlik dasturida 'Savdogar' darajasini oladi. Do'stingiz har safar ...", link_name: "'Do'stlardan keladigan daromad' haqida batafsil", link: 'https://youtube.com'},
                    {id: 3, img: 'images/human.png', name: "Do'stlaringizni taklif qiling va ular uchun naqd pul olish", paragraph: "Havola yordamida ro'yxatdan o'tgandan so'ng, do'stingiz 'Megabonus' sodiqlik dasturida 'Savdogar' darajasini oladi. Do'stingiz har safar ...", link_name: "'Do'stlardan keladigan daromad' haqida batafsil", link: 'https://youtube.com'},
                ],
            }
        },

       async mounted () {
           let resoponse = await axiosGet('/api/v1/transaction/history');
           if(resoponse.status == 200){
               this.isMounted = true
               this.transactionData = resoponse.data
           }
        },
        computed:{
            transactionList(){
                return this.transactionData.results
            },
        },
        methods:{
            maskCardNumber(numbers){
               let result =""
               for (let index = 0; index < numbers.length; index++) {
                   if(index > 4 && index < 14 && numbers[index] != " ") result += '*'
                   else result += numbers[index]
               }
               return result
            },
            getImgUrl(pic) {
                return require('../assets/'+pic)
            },
        },
        components: {
            Pagination,
        },
    }
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.section_table {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f9fafb;
    height: auto;
    padding-top: 2rem;
    padding-bottom: 3rem;
}

.section_table .container .section_table_header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.section_table .container .section_table_header .inputs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60rem;
}
.section_table .container .section_table_header .inputs .items {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    height: 3rem;
}
.section_table .container .section_table_header .inputs .items p {
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
    color: #a6aeb7;
    margin-bottom: 5px;
}
.section_table .container {
    width: 78%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
}
.section_table_body {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-top: 2rem;
    border-radius: 8px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    height: auto;
}    
#customers {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 90%;
    height: 90%;
  }
  
  #customers td, #customers th {
    padding: 15px;
  }
  #customers tr {
      border-bottom: 1px solid #f2f2f2;
      padding-left: 1rem;
      padding-right: 1rem;
  }
  
  #customers th {
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: left;    
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
    color: #a6aeb7;
    margin-bottom: 5px;
  }
  #customers tr td {
    padding: 16px 12px;
    font: 14px/1;
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
    color: #282828;
    font-size: 14px;

  }
  #customers tr td a {
    color: #3498db;
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
    text-decoration: none;
  }

.section_cards_2{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
}
.section_cards_2 .container {
    width: 78%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 90%;
}
.section_cards_2 .container h1 {
    font-size: 28px;
    line-height: 1.14;
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
    color: #000;
    margin: 0;
}
.section_cards_2 .container .card_container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: 90%;
}
.section_cards_2 .container .card_container .card {    
    border-radius: 12px;
    box-shadow: 0 4px 32px 0 rgb(3 31 92 / 6%);
    border: solid 1px #eff1f6;
    background: #fff;
    width: 350px;
    padding: 27px 32px 38px;
    position: relative;
    margin: 1.5rem;
    
}
.section_cards_2 .container .card_container .card .img_block {
    height: 138px;
    text-align: center;
}
.section_cards_2 .container .card_container .card .img_block img {
    width: auto;
    height: 100%;   
}
.section_cards_2 .container .card_container .card .description {
    margin: 25px 0 18px;
}
.section_cards_2 .container .card_container .card .description  .title{
    font-size: 18px;
    line-height: 1.22;
    font-weight: bold;
    color: #282828;
    text-align: center;
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
    margin: 0;
}  
.section_cards_2 .container .card_container .card .description .descr_text {
    margin: 16px 0 0;
    text-align: center;
    font-size: 14px;
    line-height: 1.43;
    color: #282828;
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
}
.section_cards_2 .container .card_container .card a {
    text-decoration: underline;
    color: #3498db;
    cursor: pointer;
    font-family: 'Rubble', 'Proxima Nova', sans-serif;
}
.section_1 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.section_1 .container {
    width: 82%;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    height: 40vh;
    padding: 2rem 2rem;
}
.section_1 .container h1 {
    font-size: 36px;    
    font-weight: 300;
    line-height: 1.22;
    text-transform: none;
    margin-bottom: 12px;
    font-family: sans-serif;
}
.section_1 .container p {
    font-size: 14px;
    line-height: 1.43;
    font-family: sans-serif;
}
.section_1 .container .section_cards{
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 32px 0 rgb(3 31 92 / 10%);
    border-radius: 8px;
}
.section_1 .container .section_cards .items {
    width: 250px;
    height: 7rem;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column;
    padding: 16px 36px 5px 32px;
    background: #fff;
    border-left: 5px solid #009551;
    border-radius: 8px;
    position: relative;
    z-index: 2;
}

.section_1 .container .section_cards .items:nth-child(2){
    border-left: none;
    background: #f6f8fa;
    z-index: 1;
    width: 235px;
    padding: 16px 36px 5px 32px;
    margin-left: -15px;
}
.section_1 .container .section_cards .items p {
    font-size: 12px;
    line-height: 15px;
    color: #a6aeb7;
    margin-bottom: 8px;
    text-align: left;
}
.section_1 .container .section_cards .items:nth-child(2) p a {
    text-decoration: none;  
    color: #3498db;
    font-size: 14px;
}
.section_1 .container .section_cards .items:nth-child(2) p a:hover {
    text-decoration: underline;
}
.section_1 .container .section_cards .items h1 {
    margin-right: 12px;
    font-size: 24px;
    line-height: 1.25;
    font-weight: 600;
    vertical-align: middle;
    font-family: sans-serif;
}
.section_1 .container .section_cards .items:nth-child(2) h1{
    font-weight: 600;
    color: #a6aeb7;
}
@media (max-width: 1000px){
    .section_table_body {
        width: auto;
    }
}
</style>







