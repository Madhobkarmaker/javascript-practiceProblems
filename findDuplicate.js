var num = [3, 5, 7, 9, 1, 3, 9, 1, 2, 6 ];
var check = [];
for(var i = 0; i < num.length; i++){
    var index = check.indexOf(num[i]);
    if(index == -1){
        check.push(num[i]);
    }
}
console.log(check);