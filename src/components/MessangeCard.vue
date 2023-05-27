<template>
    <section v-if="answer" class="d-flex flex-row">
        <v-icon class="iconAvatarAnswer">mdi-account</v-icon>
        <div class="answer rounded-lg flex-column pa-5">
            <p class="d-flex justify-start">{{ role }}</p>
            <h4 class="d-flex justify-start">{{ bodyMessange }}</h4>
        </div>
    </section>
    <section v-else class="d-flex flex-row">
        <v-icon class="iconAvatarQuestion">mdi-account</v-icon>
        <div class="question rounded-lg flex-column pa-5">
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
main{
    display: flex;
}

.answer{
    width: 100%;
    display: flex;
    background: rgba(209, 196, 233, 1);
}
.question{
    width: 100%;
    display: flex;
    background: rgba(237, 231, 246, 1);
}
.iconAvatarAnswer{
    width: 52px;
    height: 48px;
    background-color: rgba(25, 118, 210, 1);
    color: white;
    border-radius: 90px;
    margin-right: 10px;
}
.iconAvatarQuestion{
    width: 52px;
    height: 48px;
    background-color: rgba(130, 177, 255, 1);
    color: white;
    border-radius: 90px;
    margin-right: 10px;
}
.answer{
    color: #000;
}
p{
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.6);
}
h4{
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.87);
}
</style>