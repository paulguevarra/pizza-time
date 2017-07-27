
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
    return this.cheeseType = 'cheese';
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
  var inputCheese = $('.cheese:checked').val();
  var inputPizzaSize = $('.pizza-size:checked').val();
  var inputCheeseType = $('.cheese-type:checked').val();
  var newPizza = new Pizza(inputPizzaSize, inputCheese, inputCheeseType);
  $(".veggie-type:checked").each(function(){
    newPizza.vegOptions($(this).val());
  });
  $('.meat-type:checked').each(function(){
    newPizza.meatOptions($(this).val());
  });
  $("form#pizza-order").submit(function(event) {
    event.preventDefault();
    var inputCheese = $('.cheese:checked').val();
  var inputPizzaSize = $('.pizza-size:checked').val();
  var inputCheeseType = $('.cheese-type:checked').val();
  var newPizza = new Pizza(inputPizzaSize, inputCheese, inputCheeseType);
  $(".veggie-type:checked").each(function(){
    newPizza.vegOptions($(this).val());
  });
  $('.meat-type:checked').each(function(){
    newPizza.meatOptions($(this).val());
  });
    $(".pizza-size").text(newPizza.pizzaSize);
    $(".cheese").text(newPizza.cheese);
    $(".veggie-toppings").text(newPizza.veggies);
    $(".meat-toppings").text(newPizza.meats);
    $(".pizza-total").text(newPizza.pizzaCost());
    $(".order").show();
  });
  $(".reset").click(function(event){
    event.preventDefault();
    $('input[type=checkbox]').each(function() {this.checked=false});
    $('input[type=radio]').each(function() {this.checked=false});
    $(".order").hide();
  });



});
