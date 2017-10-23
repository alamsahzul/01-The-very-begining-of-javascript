function sum(){ 
    var i, sum = 0;
    for(i = 0; i < arguments.length; i++) { 
        sum += arguments[i];
        if(i==arguments.length){
            console.log('This is the end')
        }
    }
console.log('Total Sum: ',sum);
} 

sum(1,2,7)
sum(5,10,10,20,0)
