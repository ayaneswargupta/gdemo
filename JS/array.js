
//array-> heterogeneous in nature,  contiguous memory location
arr=["BMW","Jaguar",1,true];
console.log(arr);

console.log(arr[0]);

arr[3]="TATA";
console.log(arr);

//not to be done
arr[5]="MClaren";
console.log(arr);//[ 'BMW', 'Jaguar', 1, 'TATA', <1 empty item>, 'MClaren' ]

//methods
//1. pop-> removes last element from array
arr.pop();
arr.pop();
console.log(arr);

//2.push->inserts elemet at the end of an array
arr.push("Land Rover")
console.log(arr);

//3.shift-> removes 0th element of an array
arr.shift();
console.log(arr);

//4. unshift-> inserts element at 0th index
arr.unshift("maruti")
console.log(arr);

//2D array->array of arrays
arr2D=[[1,2,3],["Ayan",5],[4,5,6]]
console.log(arr2D);

console.table(arr2D);
//┌─────────┬────────┬───┬───┐
// │ (index) │   0    │ 1 │ 2 │
// ├─────────┼────────┼───┼───┤
// │    0    │   1    │ 2 │ 3 │
// │    1    │ 'Ayan' │ 5 │   │
// │    2    │   4    │ 5 │ 6 │
// └─────────┴────────┴───┴───┘
console.log(arr2D[1][2]);//undefined since no value is assigned for arr2D[1][2]

//insert values in 2d array
arr2D[1][2]=9;
console.log(arr2D);//[ [ 1, 2, 3 ], [ 'Ayan', 5 ], [ 4, 5, 6 ] ]


//retrieve a row in an array
let res=arr2D[1];
console.log(res);//[ 'Ayan', 5 ,9]

//retreieve a value in 2d array
console.log(arr2D[1][0]);//Ayan

//length in 2D Array
console.log(arr2D.length);//no of rows->3
console.log(arr2D[2].length); //3 -> no of cols in that row
