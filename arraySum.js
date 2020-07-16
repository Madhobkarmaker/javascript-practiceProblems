
var num = [10, 20, 30, 40, 50, 60, 70, 80, 90,];
var sum = 0 ;
for(var i = 0; i < num.length; i++){
    sum = sum + num[i];
}
console.log('total is =', sum);


// using function

var num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110];
function sumOfArray(num){
    var sum = 0;
    for(var i = 0; i < num.length; i++){
        sum = sum + num[i];
    }
    return sum;
}
var total = sumOfArray(num);
console.log('total is =',total);