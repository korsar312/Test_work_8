<template>
        <v-card
                class="ma-2"
                width="300"
                min-height="323"
        >

            <v-card-title class="text-h5">{{item.title}}</v-card-title>

            <v-card-subtitle>{{item.body}}</v-card-subtitle>

            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

            <v-card-subtitle v-if="download">{{item.author}}</v-card-subtitle>

        </v-card>

</template>

<script>
    export default {
        name: "Card",
        data(){
            return{
                item: this.card,
                download: !!this.card.author
            }
        },
        watch:{
        },
        mounted() {
                                        // я мог бы добавить skeleton loader, но это тестовая работа, поэтому не буду
            if(this.download){
                return
            }
            fetch(`${this.$store.state.url}users/${this.item.userId}`)
                .then(response => response.json())
                .then(json => {
                    this.item.author = json.name
                    this.download = true
                })
        },
        props:{
            card:{
                type:Object,
                default(){return{}}
            }
        }
    }
</script>

<style scoped>

</style>