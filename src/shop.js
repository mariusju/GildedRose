const rules = {
  'Backstage passes to a TAFKAL80ETC concert':  ({quality, sellIn}) => {
    if (sellIn < 0) return 0
    if (quality < 50) quality++
    if (quality < 50 && sellIn < 10) quality++
    if (quality < 50 && sellIn < 5) quality++
    return quality
  },

  'Aged Brie': item => {
    if (item.quality >= 50) return item.quality
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }

    if (item.quality < 50 && item.sellIn < 0) {
      item.quality = item.quality + 1;
    }
    return item.quality
  },

  'Sulfuras, Hand of Ragnaros': item => {
    item.sellIn++
    return item.quality
  },

  'Regular item': item => {
    if (item.quality >= 50) return item.quality
    if (item.quality > 0) {
      item.quality = item.quality - 1;
    }
    if (item.quality > 0 && item.sellIn < 0) {
      item.quality = item.quality - 1;
    }
    return item.quality
  }
}

const change = item => {
  item.sellIn--
  if(rules[item.name]) {
    item.quality = rules[item.name](item)
  }
}


class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      change(this.items[i])
    }
    return this.items;
  }
}

module.exports = Shop;
