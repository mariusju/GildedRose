# Refactoring Kata

Based on https://github.com/NotMyself/GildedRose

## Setup

```bash
git clone git@github.com:mastertheblaster/refactoring-kata.git
cd refactoring-kata
npm install
npm start
```

## Intro

- We do have a `shop` selling the items
- All items have a `sellIn` value which denotes the number of days we have to sell the item
- All items have a `quality` value which denotes how valuable the item is
- At the end of each day our system lowers both values for every item

## Existing functionality

- Once the sell by date has passed, `quality` degrades twice as fast
- The `quality` of an item is never negative
- **Aged Brie** actually increases in `quality` the older it gets
- The `quality` of an item is never more than `50`
- **Sulfuras**, being a legendary item, never has to be sold or decreases in `quality`
- **Backstage passes**, like aged brie, increases in `quality` as it's `sellIn` value approaches; `quality` increases by `2` when there are `10` days or less and by `3` when there are `5` days or less but `quality` drops to `0` after the concert
- **Sulfuras** is a legendary item and as such its Quality is 80 and it never alters

## New requirements

- We need to allow selling **Conjured** items
- **Conjured** items degrade in `quality` twice as fast as normal items
