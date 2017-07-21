
function Pizza(size) {
  this.pizzaSize = size;
  this.cheese = [];
  this.veggies =[]
  this.meats = [];
}
Pizza.prototype.vegOptions = function(veg) {
  this.vegToppings.push(veggie);
}

Pizza.prototype.meatOptions = function(meat) {
  this.meatToppings.push(meat)
}
