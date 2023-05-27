<template>
    <main class="d-flex flex-row">
        <v-icon class="iconAvatar">mdi-account</v-icon>
        <div class="message rounded-lg flex-column pa-5">
            <p v-if="answer" class="d-flex justify-start">{{ role }}</p>
            <p v-else class="d-flex justify-start">{{ name }}</p>
            <h4 class="d-flex justify-start">{{ bodyMessange }}</h4>
        </div>
    </main>
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
.answer{
    color: #000;
}
</style>