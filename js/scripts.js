
function Pizza(size, cheese, cheeseType) {
  this.pizzaSize = size;
  this.cheese = cheese;
  this.cheeseType = cheeseType;
  this.veggies =[]
  this.meats = [];
}
Pizza.prototype.vegOptions = function (veg) {
  this.veggies.push(veg);
}
Pizza.prototype.meatOptions = function (meat) {
  this.meats.push(meat);
}
Pizza.prototype.pizzaCost = function (){
  var pieCost = 0;
  if (this.pizzaSize === "small") {
    pieCost = 9;
  } else if (this.pizzaSize === "medium") {
    pieCost = 11;
  } else if (this.pizzaSize === "large") {
    pieCost = 13;
  } else if (this.pizzaSize === "Extra Large") {
    pieCost = 15;
  }
  if (this.cheese === "no") {
    pieCost -=1;
    this.cheeseType = 'cheese';
  } else if (this.cheese === 'extra') {
    pieCost += 1;
  }
  this.veggies.forEach(function () {
    pieCost += 1;
  });
  this.meats.forEach(function () {
    pieCost += 1;
  });
  return pieCost;
};

$(document).ready(function(){
  var inputCheese = $('input[name="cheese"]:checked').val();
  var inputPizzaSize = $('input[name="pizza-size"]:checked').val();
  var inputCheeseType = $('input[name="cheese-type"]:checked').val();
  var newPizza = new Pizza(inputPizzaSize, inputCheese, inputCheeseType);
  $("input:checkbox[name=veggie-type]:checked").each(function(){
    newPizza.vegOptions($(this).val());
  });
  $('input[name="meat-type"]:checked').each(function(){
    newPizza.meatOptions($(this).val());
  });
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    $(".pizza-size").append("Size: " + newPizza.pizzaSize);
    $(".cheese").append("Cheese: " + newPizza.cheese);
    $(".veggie-toppings").append("With: " + newPizza.veggies);
    $(".meat-toppings").append(newPizza.meats);
    $(".pizza-total").append(newPizza.pizzaCost())
    $(".order").show();
  })




});
