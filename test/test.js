const { expect } = require('chai');
const cloneDeep = require('lodash/cloneDeep')
const range = require('lodash/range')
const isEqual = require('lodash/isEqual')
const random = require('random-seed').create('seed');

const Shop = require('../src/shop.js');
const ShopOld = require('../src/shopOld.js');
const Item = require('../src/item.js');

describe('Refactoring Kata', function () {
  console.clear()


  it('expect true to be true', function () {
    const results = []
    for (let j = 0; j < 100; j++){

      const q1 = random(50)
      const q2 = random(50)
      const q3 = random(50)
      const q4 = random(50)
      const q5 = random(50)
      const q6 = random(50)
      const q7 = random(50)

      const shopOld = new ShopOld([
        new Item('Regular item', q1, q2),
        new Item('Sulfuras, Hand of Ragnaros', q3, 80),
        new Item('Aged Brie', q4, q5),
        new Item('Backstage passes to a TAFKAL80ETC concert', q6, q7),
      ])

      const shop = new Shop([
        new Item('Regular item', q1, q2),
        new Item('Sulfuras, Hand of Ragnaros', q3, 80),
        new Item('Aged Brie', q4, q5),
        new Item('Backstage passes to a TAFKAL80ETC concert', q6, q7),
      ])

      for (let i = 0; i < 20; i++) {
        expect(shopOld.updateQuality()).to.deep.equal(shop.updateQuality())
      }
    }
  });

});
