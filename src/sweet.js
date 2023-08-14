const item = [
    'Scone',
    'Bear Claw',
    'Muffin',
    'Cream Filled Crepe',
    'Nutella & Bananna Crepe',
    'Three Cookies',
    'Pound Cake'
];
const text = [
    'Chocolate, Lemon or Caramel Apple',
    'Rawr! Cream cheese...',
    'Blueberry, Bananna Nut or Chocoloate',
    'Filled with sweet cream cheese and fruit toppings',
    'A rich and smooth classic recipe',
    'Mix and match',
    'Lemon, Cranberry Orange or Spiced Rum'
];

const sweetArr =[];
for(let n in item){
    sweetArr.push({name:item[n], desc:text[n]});
}

export default sweetArr;
