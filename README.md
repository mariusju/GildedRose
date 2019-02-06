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
- The `quality` of an item is never more than `50`
- **Aged Brie** actually increases in `quality` the older it gets
- **Sulfuras**, being a legendary item, never has to be sold or decreases in `quality`
- **Sulfuras** is a legendary item and as such its `quality` is 80 and it never alters
- **Backstage passes**, like aged brie, increases in `quality` as it's `sellIn` value approaches; `quality` increases by `2` when there are `10` days or less and by `3` when there are `5` days or less but `quality` drops to `0` after the concert

## New requirements

- We need to allow selling **Conjured** items
- **Conjured** items degrade in `quality` twice as fast as normal items

## Tips

- **Don't judge, accept it**. Our goal is to implement new feature,
  clean code is just a tool to make it easier applying changes in a future.
  Don’t complain if you don’t intend to improve the code.
- **Start small. Work in iterations**. Don't try to rewrite all the code at once.
  With each step you take, make overall quality better.
  Follow the good scout rule https://deviq.com/boy-scout-rule/.
- **When in doubt, write a test**. Try using the https://techterms.com/definition/goldenmaster.

## References

- https://techterms.com/definition/goldenmaster
- https://github.com/emilybache/GildedRose-Refactoring-Kata#text-based-approval-testing
- https://gearheart.io/blog/how-work-legacy-code-code-refactoring-techniques-2/
- https://blog.thecodewhisperer.com/permalink/surviving-legacy-code-with-golden-master-and-sampling
