'use strict';

module.exports = {
  lifecycles: {
    async beforeUpdate(params, data) {
      if (data.price) {
        data.minPrice = await data.price;
      } else {
        data.sizePrice.sort((a, b) => a.price - b.price);
        data.minPrice = await data.sizePrice[0].price;
      }
    },

    beforeCreate(data) {
      if (data.price) {
        data.minPrice = data.price;
      } else {
        data.sizePrice.sort((a, b) => a.price - b.price);
        data.minPrice = data.sizePrice[0].price;
      }
    },
  },
};
