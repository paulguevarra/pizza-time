
function Pizza(size, cheese, cheeseType) {
  this.pizzaSize = size;
  this.cheese = cheese;
  this.cheeseType = cheeseType;
  this.veggies =[]
  this.meats = [];
}
Pizza.prototype.vegOptions = function (veg) {
  this.vegToppings.push(veggie);
}
Pizza.prototype.meatOptions = function (meat) {
  this.meatToppings.push(meat);
}
Pizza.prototype.pizzaCost = function (){
  var pieCost = 0;
  if (this.pizzaSize === "small") {
    pieCost = 8;
  } else if (this.pizzaSize === "medium") {
    pieCost = 10;
  } else if (this.pizzaSize === "large") {
    pieCost = 13;
  } else if (this.pizzaSize === "Extra Large") {
    pieCost = 15;
  }
  this.veggies.forEach(function () {
    cost += 1;
  });
  this.meats.forEach(function () {
    cost += 1;
  });
  return pieCost;
};

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
