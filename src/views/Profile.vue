<template>
  <div class="about">
    <h1>This is an profile page {{ msg }}</h1>
  </div>
</template>
<script>
export default({
    name: 'profile',
    data(){
        return {
            msg: "Profile"
        }
    }
})
</script>
