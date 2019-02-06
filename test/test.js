const { expect } = require('chai');

const Shop = require('../src/shop.js');
const Item = require('../src/item.js');

describe('Refactoring Kata', function () {

  it('expect true to be true', function () {
    const shop = new Shop([new Item('foo', 0, 0)]);
    const items = shop.updateQuality();
    expect(items[0].name).to.equal('should work');
  });

});
