function sum(){
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
console.log(sum);
}

sum(1,2,7)
sum(5,10,10,20,50)
