
function Hamburger(bun, cheeses, sauces, patty,  veggies) {
    this.bun = bun;
    this.sauces = sauces; 
    this.patty = patty; 
    this.veggies = veggies; 
    this.cheeses = cheeses ;

  
    this.describe = function() {
        let description = `Here's your tasty meal: ${this.patty} patty burger on a ${this.bun} bun`;
        if (this.cheeses.length) {
            description += `, with cheese (${this.cheeses.join(', ')})`;
        }
        if (this.sauces.length) {
            description += `, sauces (${this.sauces.join(', ')})`;
        }
        if (this.veggies.length) {
            description += `, and veggies (${this.veggies.join(', ')})`;
        }
        description += '.';
        return description;
    };
}


const myHamburger = new Hamburger(
    'whole grain',
   
['gouda', 'blue cheese'],
['ketchup', 'barbecue'],
'chicken',
    2,
    ['spinach', 'avocado', 'red onions', 'jalapenos']
);


document.getElementById('labthree').textContent = myHamburger.describe();




