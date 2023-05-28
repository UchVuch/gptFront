<template>
    <section class="roleCard">
        <div class="baseInfo">
            <v-icon class="iconRole">mdi-account</v-icon>
            <div class="titleRole">{{ title }}</div>
            <v-icon @click="openDetail" class="iconDetail">{{ showDetail ? 'mdi-arrow-up-drop-circle-outline' : 'mdi-arrow-down-drop-circle-outline'}}</v-icon>
        </div>
        <div v-if="showDetail" class="detailDialog">
            <div class="detail" v-for="(item, index) in detail">{{ item }}</div>
        </div>

    </section>
</template>

<script>
export default {
    data: () => ({
        showDetail: false,
    }),
    props: {
        detail: {
            type: Array,
        },
        title: {
            type: String,
        },
    },
    methods: {
        openDetail() {
            this.showDetail = !this.showDetail;
        },
    }

}
</script>

<style scoped>
.roleCard {
    display: flex;
    flex-direction: column;
}

.baseInfo {
    display: flex;
    flex-direction: row;
    width: 100%;
}

.iconRole {
    min-width: 48px !important;
    height: 48px !important;
    background-color: pink;
    color: #EDE7F6;
    border-radius: 90px;
    margin-right: 10px;
}
.iconDetail {
    min-width: 48px !important;
    height: 48px !important;
    background-color: rgba(69, 39, 160, 1);
    color: #EDE7F6;
    border-radius: 90px;
    margin-left: 10px;
}

.titleRole {
    margin: 0;
    padding: 0;
    display: flex;
    color: black;
    background: #EDE7F6;
    width: 100%;
    padding: 0px 16px;
    border-radius: 4px;
    align-items: center;
}
.detailDialog{
    margin-left: 58px;
}
.detail {
    height: 48px;
    padding-left: 58px;
    padding: 0;
    display: flex;
    color: black;
    background: #EDE7F6;
    width: 100%;
    padding: 0px 16px;
    border-radius: 4px;
    align-items: center;
    margin-top: 10px;
}
.detail:first-child{
    margin-top: 15px;
}
</style>