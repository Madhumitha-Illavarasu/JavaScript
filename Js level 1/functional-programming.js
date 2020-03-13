
// function sum(a,b,...others) {
//      console.log(a)  
//      console.log(others)  

//      console.log(arguments)
//  }
//  console.log(sum(1,2,3,4,5))

// function sum() {
//         let idx = 0,
//             result = 0,
//             len = arguments.length
//         while (idx < len) {
//             result += arguments[idx]
//             idx++
//         }
//         return result
//     }


// function greet() {
//         console.log("hello..")
//     }
//     let sayHello = greet()
//     sayHello();


// function greet(f) {
//     console.log(">>>>>>>>>>>>>>>>>>")
//     if (f)
//         f()

//     else
//         console.log("greetings")
//     console.log("<<<<<<<<<<<<<<<<<<")
// }

// greet();

// let tn = function () {
//     console.log("vanakkam")
// }
// // tn();
// greet(tn)




// function greet(nil) {
//     console.log(">>>>>>>>>")
//     if (nil)
//         nil()
//     else
//         console.log("Happy")


//     console.log("<<<<<<<<<<")
// }


// let hello = function () {
//     console.log("aanandham")
// }
// greet(hello)



// ppl 3
// function teach() {
//     console.log("teaching javascript...")
//     let learn = function () {
//         console.log("learning javascript...")
//         console.log("learning ends")
//     }
//     console.log("teaching ends")
// }

// let learnFunc = teach();
// learnFunc();






function f1(ban1) {
    console.log(">>>>>")
    if (ban1) {
        ban1()
    }
    else if (ban2) {
        ban2()
    }
    console.log("<<<<<")
}

let ban1 = function () {
    console.log("f1")
}
let ban2 = function () {
    console.log("f2")
}
f1(ban1)
f1(ban2)