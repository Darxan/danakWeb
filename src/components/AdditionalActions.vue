<template>
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
</template>

<script>
    export default {
        data:() => {
            return {
                cards: [
                    {id: 1, img: 'images/human.png', name: "Do'stlaringizni taklif qiling va ular uchun naqd pul olish", paragraph: "Havola yordamida ro'yxatdan o'tgandan so'ng, do'stingiz 'Megabonus' sodiqlik dasturida 'Savdogar' darajasini oladi. Do'stingiz har safar ...", link_name: "'Do'stlardan keladigan daromad' haqida batafsil", link: 'https://youtube.com'},
                    {id: 2, img: 'images/human.png', name: "Do'stlaringizni taklif qiling va ular uchun naqd pul olish", paragraph: "Havola yordamida ro'yxatdan o'tgandan so'ng, do'stingiz 'Megabonus' sodiqlik dasturida 'Savdogar' darajasini oladi. Do'stingiz har safar ...", link_name: "'Do'stlardan keladigan daromad' haqida batafsil", link: 'https://youtube.com'},
                    {id: 3, img: 'images/human.png', name: "Do'stlaringizni taklif qiling va ular uchun naqd pul olish", paragraph: "Havola yordamida ro'yxatdan o'tgandan so'ng, do'stingiz 'Megabonus' sodiqlik dasturida 'Savdogar' darajasini oladi. Do'stingiz har safar ...", link_name: "'Do'stlardan keladigan daromad' haqida batafsil", link: 'https://youtube.com'},
                ],
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
</style>