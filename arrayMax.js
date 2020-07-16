var marks = [63, 20, 80, 40, 50, 90, 70];
var max = marks[0];
for(var i = 0 ; i < marks.length; i++){
    var element = marks[i];
    if(element > max){
        max = element ; 
    }
}
console.log("max is", max);