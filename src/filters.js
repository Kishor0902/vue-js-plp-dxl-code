const dollars = num => `$${num / 100}`;

const jsonStringFilter = jsonStr => {
 // console.log(JSON.parse(jsonStr).highestPrice  ) ; 
  return '$'+JSON.parse(jsonStr).salePrice;
}

const saleMessageFilter = jsonStr => {
  return JSON.parse(jsonStr).saleMessage;
}

const swatchImageUrlFilter = jsonStr => {
  let swatches = (JSON.parse(jsonStr));
 //console.log(swatches.length)
  let swatchUrls = [];
  for(let swatch of swatches ){
   // console.log(swatch)
    if(swatchUrls.length < 6){
      swatchUrls.push(swatch.swatchImageUrl);
    }
    
  }
   //console.log(swatchUrls);
  return swatchUrls;
}

const productImageUrlFilter = jsonStr => {
  let productsCodes = (JSON.parse(jsonStr));
 console.log(productsCodes.length)
   let productURLs = [];
  for(let product of productsCodes ){
    console.log(product);
  }
   console.log(productURLs);
  return productURLs; 
}

export { dollars };
export { jsonStringFilter,saleMessageFilter,swatchImageUrlFilter,productImageUrlFilter };

export default {
  dollars,
  jsonStringFilter,
  saleMessageFilter,
  swatchImageUrlFilter,
  productImageUrlFilter
};
