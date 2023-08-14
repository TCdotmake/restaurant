const item = [
    'Grilled Cheese',
    'BLT',
    'Spinach Chesse Crepe',
    'Classic Crepe',
    'Quiche',
    'Egg Bites',
    'Ham and Cheese Scone'
];

const text = [
    'Gouda and American cheese on Brioche',
    'Apple smoked bacon, tomato, lettice on Rye',
    'Spinach. Cottage cheese. Crepe.',
    'Satisifying receipt with ham, egg and cheese',
    'Bacon, American Cheese and Spinach',
    'Packed w/ Bacon & Gruyère',
    'Portable, savory, perfect'
];

const savoryArr =[];
for(let n in item){
    savoryArr.push({name:item[n], desc:text[n]});
}

export default savoryArr;