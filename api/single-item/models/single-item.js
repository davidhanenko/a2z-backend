'use strict';

module.exports = {
  lifecycles: {
    afterUpdate(result, data) {
      if (result.price) {
        result.minPrice = result.price;
      } else {
        result.size_price.sort((a, b) => a.price - b.price);
        result.minPrice = result.size_price[0].price;
      }
    },

    afterCreate(result, data) {
      if (result.price) {
        result.minPrice = result.price;
      } else {
        result.size_price.sort((a, b) => a.price - b.price);
        result.minPrice = result.size_price[0].price;
      }
    },
  },
};
