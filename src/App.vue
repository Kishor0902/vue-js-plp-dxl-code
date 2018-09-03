<template>
  <div id="app" class="container my-5">
    <div class="row mb-3">
      <div class="col-md-9">
        <h1>My online store</h1>
      </div>
      <div class="col-md-3">
        <ShoppingCart />
      </div>
    </div>

    <div class="row">
    <div class="col-md-3">
        Filters
    </div>
    <div class="col-md-9" style="display:inblock">
      <div class="row">
           <!--  <Item
        v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :image="item.image"
        :price="item.price" />  -->
<Item
        v-for="item in productRecords"
        :key="item.attributes['record.id'][0]"
        :invId="item.attributes['product.defaultImageUrl'][0]"
        :name="item.attributes['product.description'][0]"
        :image="item.attributes['product.defaultImageUrl'][0]"
        :productBadges="item.attributes['product.badges']"
        :price="item.attributes['product.priceData'][0] | jsonStringFilter "
        :saleMessage="item.attributes['product.priceData'][0] | saleMessageFilter "
        :swatchImageUrls="item.attributes['product.colorCode'][0] | swatchImageUrlFilter" 
        :swatch="item.attributes['product.colorCode'][0]" />
       </div>
    </div>  

    </div>
  </div>
</template>

<script>
import Item from './Item.vue';
import PLPJson from './PLP.json';
import ShoppingCart from './ShoppingCart.vue';
import { jsonStringFilter } from './filters';
import { saleMessageFilter,swatchImageUrlFilter,productImageUrlFilter } from './filters';

export default {
   name: 'app',
   data: ()=>{ return {
     productRecords: [],
   }
   },
   created: function (){
     this.productRecords = PLPJson.contents[0].MainContent[0].contents[0].records;
   },
   filters: {
    jsonStringFilter,
    saleMessageFilter,
    swatchImageUrlFilter,
    productImageUrlFilter
  },
  computed: {
    forSale() { 
        console.log(this.$store.getters.forSale);
      return this.$store.getters.forSale;
       },
   /*  productRecords() { 
     // console.log("Inside computed..." + this.$store);
      this.$store.dispatch('populateProducts');
      //console.log(this.$store.getters.productRecords);
      
      return this.$store.getters.productRecords; 
      } */
  },
  components: {
    Item,
    ShoppingCart,
  },
};
</script>
