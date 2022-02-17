str="Hello Pepcoders";
console.log(str);

console.log(str[6]);//P

let strSlice=str.slice(3,8)//lo Pe
console.log(strSlice);

let strSubstr=str.substr(2,5)
console.log(strSubstr);//llo P

console.log(str.toLowerCase());//hello pepcoders
console.log(str.toUpperCase());//HELLO PEPCODERS
console.log(str);//Hello Pepcoders actual value of str is not modified, it is the same

//concatenation
let firstStr="Alia"
let secondStr="Bhatt"
console.log(firstStr+" "+secondStr);//Alia Bhatt

//concatenation using method-concat()
console.log(firstStr.concat(secondStr," @08"));//AliaBhatt @08

//trim()-> removes whitespaces at the begining and end of string
let str1="    Ayan Gupta    "
console.log(str1);//    Ayan Gupta 
console.log(str1.length);   //18-->including whitespaces in front and end
console.log(str1.trim());//Ayan Gupta
console.log(str1.trim().length); //10--> whitespaces reduced from front and end

