<template>

  <v-container>
    <!-- по хорошему v-form нужно в отдельный компонент сунуть, но так как он маленький, то пусть тут будет -->
    <v-form>
        <v-row class="d-flex justify-center align-center">
          <v-col cols="10">
            <v-text-field
                    v-model="message"
                    :prepend-icon="'mdi-search-web'"
                    filled
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Поиск по автору"
                    type="text"
                    @click:prepend="search"
                    @click:clear="clearMessage"
            ></v-text-field>
          </v-col>
        </v-row>
    </v-form>


    <v-main>
      <v-row class="d-flex justify-center">
        <Card v-for="card in renderCard" :key="card.id" :card="card"/>
      </v-row>
    </v-main>
  </v-container>


</template>

<script>
import Card from "../components/Card";
export default {
    name: 'Main',
    data(){
      return{
        renderCard: this.$store.state.allCard,
        message: '',
      }
    },
    methods:{
      clearMessage () {
        this.message = false
      },
      search () {
        if(!!this.message === false){
          this.renderCard = this.$store.state.allCard
          return
        }
        this.renderCard = this.$store.state.allCard.filter(i=>{
          return i.author.includes(this.message)
        })
      },
    },
    components: {
        Card,
    },
    mounted() {
      this.$store.dispatch('getCard', `${this.$store.state.url}posts`)
    },
}
</script>
