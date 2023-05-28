<template>
    <div v-if="answer" class="d-flex flex-row">
        <v-icon class="iconAnswer">mdi-account</v-icon>
        <div class="answer rounded-lg flex-column pa-5">
            <p class="d-flex justify-start">{{ role }}</p>
            <h4 class="d-flex justify-start">{{ bodyMessange }}</h4>
        </div>
    </div>
    <div v-else class="d-flex flex-row">
        <v-icon class="iconQuestion">mdi-account</v-icon>
        <div class="question rounded-lg flex-column pa-5">
            <p class="d-flex justify-start">{{ name }}</p>
            <h4 class="d-flex justify-start">{{ bodyMessange }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        answer: {
            type: Boolean,
        },
        bodyMessange: {
            type: String,
        },
        role: {
            type: String
        },
        name: {
            type: String
        }
    }

}
</script>

<style scoped>
.answer{
    width: 100%;
    display: flex;
    background: rgb(110, 64, 203) !important;
}
.iconAnswer {
    width: 52px;
    height: 48px;
    background-color: rgba(25, 118, 210, 1);
    color: white;
    border-radius: 90px;
    margin-right: 10px;
}
.iconQuestion {
    width: 52px;
    height: 48px;
    background-color: rgba(130, 177, 255, 1);
    color: white;
    border-radius: 90px;
    margin-right: 10px;
}
p {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.6);
}

h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.1px;
    color: rgba(0, 0, 0, 0.87);
}
</style>