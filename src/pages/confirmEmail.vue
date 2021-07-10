<template>
    <div>
        <section>
            <div class="cards shadow">
                <div class="img">
                    <img src="../assets/logo/danak.svg" alt="" width="200">
                </div>
                <div class="texts text-center">
                    <p style="width: 200px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur, autem!</p>
                    <br>
                    <button class="btn btn-success p-2">confirm email</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    width: 100%;
}
section {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center
}
.card {
    width: auto;
    height: auto;
    border-radius: 6px
}
.img, .texts {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem 3rem;
}
</style>