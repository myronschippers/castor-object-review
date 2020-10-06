# Object Review for Castor

## Description

A review of JavaScript objects.

## Object Literal

```JS
const fruit = {
  name: 'Orange',
  price: 1.5,
};
```

## Object Constructor

```JS
function Fruit(nameOfFruit, pricePer) {
  this.name = nameOfFruit;
  this.price = pricePer;
}

const myFruit = new Fruit('Orange', 1.5);
```