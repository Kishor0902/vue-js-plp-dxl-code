import Vue from 'vue';
import Vuex from 'vuex';
import PLPJson from './PLP.json';
Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    forSale: [
      { invId: 1, name: 'An Item', image: '//placehold.it/200', price: 999 },
      { invId: 2, name: 'Thing', image: '//placehold.it/200', price: 1499 },
      { invId: 3, name: 'Doo-dad', image: '//placehold.it/200', price: 499 },
      { invId: 4, name: 'Other thing', image: '//placehold.it/200', price: 299 },
    ],
    //productRecords: [],
    pricingData:[],

    inCart: [],
  },
  getters: {
    forSale: state => state.forSale,
    inCart: state => state.inCart,
    productRecords: state => state.productRecords,
  },
  mutations: {
    POPULATE_PRODUCTS(state){
      //console.log("POPULATE_PRODUCTS called .......");
      state.productRecords = PLPJson.contents[0].MainContent[0].contents[0].records;},
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
  },
  actions: {
    addToCart(context, invId) { 
      console.log(PLPJson.contents[0].MainContent[0].contents[0].records);
      context.commit('ADD_TO_CART', invId); },
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
    populateProducts(context) {
      console.log("populateProducts called ...");
      context.commit('POPULATE_PRODUCTS');
    }
  },
});
