// 3 types of function

//a. default funtion
//fucntion defn
function fname(params)
{
    console.log("Hi");
}
//function invoke
fname(10);

//print the entire func defn
console.log(""+fname);

//b. exprssion func
//here fexpr represents a function
let fexpr=function (param1){
    console.log(param1*param1);
}
console.log(""+fexpr);
fexpr(2);

//Here we can return function to variable









//c. IIFE-Invoke Immediate function expression
let iife=(function (param){
    console.log("IIFE"+param);
})(10);

