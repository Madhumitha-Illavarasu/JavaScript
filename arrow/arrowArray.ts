// let arr=[1,22,3,4,5,6,7,8,9,10]

// for(var i=0;i<arr.length;i++){
//    let val=arr[i];
//   let func=(val):void =>{
//     if(val % 2 === 0){
//         console.log(` ${val} is even`)
//    }
//     else {
//         console.log(` ${val} is odd`)

//     }

//   }
//   func(arr[i]);
// }

//arrow with parameter


// let person=(name:string)=>{
// console.log(name);
// }
// person("madhu");


// let person = (name?: string) => {
//     console.log("hello " + (name || 'unknown'));
// }
// person("madhu");
// person();


//ways of writing functions


let add = function(x: number, y: number): number{
    return x+y;
}
console.log(add(10,20))


let add1 = (x: number, y: number): number=>{
    return x+y;
}
console.log(add1(100,200))
