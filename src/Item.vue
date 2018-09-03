<template>
  <div class="col-md-4">
    <div class="card">
      <img :src="image" :alt="name" class="card-img-top">
      <div class="card-body">
        <p class="card-text" v-html="productBadges"></p>
        <p class="card-title" v-html="name"></p>
        <p class="card-text" v-html="price"></p>
        <p class="sale-msg" v-html="saleMessage"></p>
      <!--   <p class="card-text" v-for="purl in productImageUrl" v-on:click="productImageUrlChange(purl)" >{{purl}}</p> -->
      <div class="circle">
       <div v-for="(sw,index) in mutableSwatchList"  v-if="index < 6" class="circle-img">
            <img :src="sw.swatchImageUrl" @click="productImageUrlChange(index)">
	    </div>
      </div>
        <div class="row justify-content-end">
          <!-- <button class="btn btn-primary" @click="addToCart(invId)">Add to cart</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dollars } from './filters';
import { jsonStringFilter,productImageUrlFilter } from './filters';


export default {
  name: 'item',
  props: ['invId', 'name', 'image', 'price','saleMessage','productBadges','swatchImageUrls','swatch'],
  data: function () {
        return {
            mutableSwatchList: JSON.parse(this.swatch)
        }
    },
  filters: {
    dollars,
    jsonStringFilter,
    productImageUrlFilter
  },
  computed:{
    swatchObject(){
      return JSON.parse(this.swatch);
    }
  },
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
    },
    productImageUrlChange(index){
      console.log(index);
      console.log(this.mutableSwatchList[index]);
      this.image=this.mutableSwatchList[index].productImageUrl;


    }
    
  },
};
</script>

<style scoped>
.card {
margin: 0 0 15px 0;
height: 510px;

}

.circle-img
{
     height: 29px;
    width: 26px;
    border-radius: 50%;
    border: 1px solid #c9c8c8;
    display: inline-block;
    padding: 0 0 1px 2px;
      margin-right: 5px; 
      cursor: pointer;
}
.circle img
{
  height: 20px;
  width: 20px;
  border-radius: 50%;

}
.circle img:hover
{
  transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transition: .3s linear;
  -webite-transition: .3s linear;
}

.card-text .card-card-title{
  font-size: 8px !important; 
}
p
{
  margin: 0px;
  padding: 0px;
} 
.sale-msg
{
  color:#d22042;
}

</style>