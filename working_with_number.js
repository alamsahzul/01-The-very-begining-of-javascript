
function sum(){
  var total_sum = 0;
  for(var i = 0; i < arguments.length; i++) {
    total_sum += arguments[i];
  }
console.log("The Result is",total_sum);
}

sum(1,2,7)
sum(5,10,10,20,50)
