<template>
    <div>
        <section>
            <div class="container">
                <div class="text">
                    <h1>Доход от друзей</h1>
                    <p>Здесь Вы можете увидеть доход от друзей, приведённых Вами. Пожалуйста, свяжитесь с нами, если у вас есть вопросы.</p>
                </div>
                <div class="links" v-for="link in links" :key="link.id">
                    <a :href="link.link"> {{ link.title }} </a>
                </div>
                <div class="card_container">
                    <div class="card_1">
                        <div class="cards">
                            <div class="container">
                                <div class="texts">
                                    <h2>Приведи друга и заработай</h2>
                                    <p>Каждый друг, который зарегистрируется по вашей ссылке,
                                    принесет вам доход до 50% от суммы своего кэшбэка</p>
                                </div>
                                <div class="inputs">
                                    <p></p>
                                    <div class="input">
                                        <h1>
                                            <p></p>
                                        </h1>
                                        <button>Копировать</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="cards"></div>
                        <div class="cards"></div>
                    </div>
                    <div class="card_2">
                        <div class="cards"></div>
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
                links: [
                    {id: 1, link: 'youtube.com', title: 'Как это работает?'},
                    {id: 2, link: 'youtube.com', title: 'Что такое кэшбэк-ссылка?'},
                    {id: 3, link: 'youtube.com', title: 'Как привести друзей?'}
                ]
            }
        },
        components: {
            Information
        }
    }
</script>

<style scoped>
section {
    width: 100%;
    height: auto;
}

</style>