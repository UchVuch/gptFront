<template>
    <section class="d-flex flex-row">
        <v-icon v-if="answer" class="iconAnswer">mdi-account</v-icon>
        <v-icon v-else class="iconQuestion">mdi-account</v-icon>
        <div v-if="answer" class="answer rounded-lg flex-column pa-5">
            <p class="d-flex justify-start">{{ role }}</p>
            <h4 class="d-flex justify-start">{{ bodyMessange }}</h4>
        </div>
        <div v-else class="question rounded-lg flex-column pa-5">
            <p class="d-flex justify-start">{{ name }}</p>
            <h4 class="d-flex justify-start">{{ bodyMessange }}</h4>
        </div>
    </section>
</template>

<script>
    export default {
        props:{
            answer:{
                type: Boolean,
            },
            bodyMessange:{
                type: String,
            },
            role:{
                type: String
            },
            name:{
                type: String
            }
        }
        
    }
</script>

<style scoped>
section{
    display: flex;
}
.answer{
    width: 100%;
    display: flex;
    background: white;
    color: #000;
}
main{
    display: flex;
}
.message{
    width: 100%;
    display: flex;
    background: white;
}
.iconAvatar{
    width: 52px;
    height: 48px;
    background-color: pink;
    color: white;
    border-radius: 90px;
    margin-right: 10px;
}
.iconQuestion{
    width: 52px;
    height: 48px;
    background-color: pink;
    color: white;
    border-radius: 90px;
    margin-right: 10px;
}
</style>