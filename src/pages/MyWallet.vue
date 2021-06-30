<template>
    <div>
        <section class="section_2">
            <div class="container">
                <div class="text">
                <h1>Pulni tortib olish usullari <a href="#"> Pul mablag'larini olishning eng yaxshi usuli qayerda?</a></h1>
                <p>Pul olish uchun mablag 'yetarli emas</p>
             </div>
                <div class="section_2_cards">
                    <div class="cards" v-for="card in cards" :key="card.id">
                        <img :src="getImgUrl(card.img)" alt="">
                        <h1><i class="fas fa-check-circle"></i> {{ card.code }} </h1>
                        <div class="card_footer">
                            <div class="texts">
                                <p> {{ card.title }} </p>
                                <h1> {{ card.number }} </h1>
                            </div>
                            <div class="border"></div>
                            <div class="texts">
                                <p> {{ card.title_2 }} </p>
                                <h1> {{ card.number_2 }} </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
    export default {
  data () {
    return {
        cards: [
            {id: 1, img: "images/ali.png", code: "****9171", title: "Xulosa", title_2: "komissiya", number: "$1.5", number_2: "0%"},
            {id: 1, img: "images/ali.png", code: "****9171", title: "Xulosa", title_2: "komissiya", number: "$1.5", number_2: "0%"},
            {id: 1, img: "images/ali.png", code: "****9171", title: "Xulosa", title_2: "komissiya", number: "$1.5", number_2: "0%"},
            {id: 1, img: "images/ali.png", code: "****9171", title: "Xulosa", title_2: "komissiya", number: "$1.5", number_2: "0%"},
            {id: 1, img: "images/ali.png", code: "****9171", title: "Xulosa", title_2: "komissiya", number: "$1.5", number_2: "0%"},
            {id: 1, img: "images/ali.png", code: "****9171", title: "Xulosa", title_2: "komissiya", number: "$1.5", number_2: "0%"},
        ]
    }
  },
  methods: {
    getImgUrl(pic) {
        return require('../assets/'+pic)
    },
  }
        
    }
</script>

<style scoped>
.section_2 {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    height: auto;
}
.section_2 .container {
    width: 82%;
    display: flex; 
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
}
.section_2 .container .text {
    margin-left: 2rem;
}
.section_2 .container h1 {
    font-family: sans-serif;
    font-size: 24px;
}
.section_2 .container h1 a {
    text-decoration: none;  
    color: #3498db;
    font-size: 14px;
}
.section_2 .container h1 a:hover {
    text-decoration: underline;
}
.section_2 .container p {
    font-size: 12px;
    color: #a6aeb7;
    line-height: 1.2;
    margin: 8px 0 0;
    font-family: sans-serif;
}
.section_2 .container .section_2_cards {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    padding: 3rem 0rem;
}
.section_2 .container .section_2_cards h1 {
    font-size: 16px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: normal;
    color: #282828;
}
.section_2 .container .section_2_cards h1 i {
    color: #af0;
}
.section_2 .container .section_2_cards .cards {
    width: 180px;
    height: 220px;
    display: flex;
    justify-content: space-around;
    border-radius: 8px;
    border: solid 1px #f2f2f2;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    transition: .3s;
    cursor: pointer;
    margin: .8rem;
}
.section_2 .container .section_2_cards .cards:hover {
    transition: .3s;
    box-shadow: 0 2px 8px 0 rgb(3 31 92 / 10%);
}
.section_2 .container .section_2_cards .cards img {
    width: 100px;
}
.section_2 .container .section_2_cards .cards .card_footer {
    display: flex;
    width: 95%;
    justify-content: space-between;
    align-items: center;
}
.section_2 .container .section_2_cards .cards .card_footer .border {
    width: 1px;
    height: 50px;
    background: #f2f2f2;
}
.section_2 .container .section_2_cards .cards .card_footer .texts p {
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0;
    color: #a6aeb7;
    margin-bottom: 4px;
}

@media (max-width: 650px){
    .section_1 .container .section_cards {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: none;
        height: 100%;
        width: 100%;
        align-items: center;
        margin-top: 2rem;
    }
    .section_1 .container .section_cards .items {
        box-shadow: 0 4px 32px 0 rgb(3 31 92 / 10%);    
    }
}

</style>