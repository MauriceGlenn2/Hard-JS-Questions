/**
 * sort by highest to lowest price
 * given an array of objects, return the oprices sorted by high to low
 * 
 * sortHighToLow([
 * {id:1, price:50}
 * {id:2, price:30}
 * {id:3, price:60}
 * {id:4, price:10}
 * ]) ->
 */

function sortHighToLow(arr) {
  return arr.sort((a, b) => {
   return b.price - a.price;
  });
}
console.log(sortHighToLow([
  {id:1, price:50},
  {id:2, price:0},
  {id:3, price:500}
  ]));