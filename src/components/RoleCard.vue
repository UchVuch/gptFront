<template>
    <section class="roleCard">
        <div class="baseInfo">
            <v-icon class="iconRole">mdi-account</v-icon>
            <div class="titleRole"></div>
        </div>

    </section>
</template>

<script>
    export default {
        props: {
        dialog: {
            type: Map[String],
        },
        title: {
            type: String,
        },
    }
        
    }
</script>

<style scoped>
    .roleCard{
        display: flex;
        flex-direction: column;
    }
    .baseInfo{
        display: flex;
        flex-direction: row;
    }
    .iconRole{
        width: 48px;
        height: 48px;
        background-color: pink;
        color: white;
        border-radius: 90px;
        margin-right: 10px;
    }
</style>