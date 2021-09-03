import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        url: 'https://jsonplaceholder.typicode.com/',
        allCard:[],
    },
    mutations: {

    },
    actions: {
        getCard(state, url){
            fetch(url)
                .then(response => response.json())
                .then(json => this.state.allCard.push(...json))
        }
    },
});