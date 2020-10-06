//
// Object Literals
// ------------------------------

const fruit = {};

fruit.name = 'Orange';

console.log(fruit.name);

const topHat = {
  type: 'Top',
  color: 'Royal Blue',
  size: 12,

  // restrictions on Naming
  'bil-style': 'curved',
};

console.log(topHat.type);
console.log(topHat['type']);
console.log(topHat.bil_style);

const arrayOfKeys = Object.keys(topHat);
console.log(arrayOfKeys);

for (let keyValue of arrayOfKeys) {
  console.log(topHat[keyValue]);
}

//
// Object Parts
// ------------------------------

// {}
// properties - inside of object
// { key: 'value' }
// . - get values (object.type)
// [] - (object['type'])

//
// Object Constructors
// ------------------------------

// blueprinting
function Hat(type, color, size) {
  this.type = type;
  this.color = color;
  this.size = size;
  this.isWearing = true;
}

// instance
// blueprint
// constructor
// new (keyword)

console.log(topHat);
const ballCap = new Hat('ball cap', null, 13);
ballCap.isWearing = false;
console.log(ballCap);
// instance of Hat
const newsyHat = new Hat('newsy', 'teal', 11);
console.log(newsyHat);
