//number- int float everything
var a=10.8;
console.log(a);
console.log(typeof a);

//string
// both " " and '' and `` will come under string
a="ayan";
console.log(a);
console.log(typeof a);


a='a';
console.log(a);
console.log(typeof a);

a=`a`;
console.log(a);
console.log(typeof a);

a=`1st line
next line`
console.log(a);

a=100;
//works only with `` not with " " or ''
console.log(`half of ${a} is ${a/2}`);

//boolean
a=true;
console.log(a);
console.log(typeof a);

//redeclaration and reinitialization allowed in var
var a=100;
console.log(a);
var a="ayan";
console.log(a);

//redeclaration  not allowed in let
// we can reinitilize but not redeclare
let a=100;
console.log(a);
let a="ayan"; //It will give SyntaxError: Identifier 'a' has already been declared
console.log(a);

//in const both redlcaration or reinitialization not allowed
const variable=100;
console.log(a);
variable="ayan"; //It will give TypeError: Assignment to constant variable.
console.log(a);

