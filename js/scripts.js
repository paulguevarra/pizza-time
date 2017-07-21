
function Pizza(size, cheese, cheeseType) {
  this.pizzaSize = size;
  this.cheese = cheese;
  this.cheeseType = cheeseType;
  this.veggies =[]
  this.meats = [];
}
Pizza.prototype.vegOptions = function(veg) {
  this.vegToppings.push(veggie);
}

Pizza.prototype.meatOptions = function(meat) {
  this.meatToppings.push(meat)
}
$(document).ready(function(){
  var inputCheese = $('input[name="cheese"]:checked').val();
  var inputPizzaSize = $('input[name="pizza-size"]:checked').val();
  var inputCheeseType = $('input[name="pizza-size"]:checked').val();
  var newPizza = new Pizza(inputPizzaSize, inputCheese, inputCheeseType);
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
console.log(newPizza);
  })




});
