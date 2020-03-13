var demo_02_03;
(function (demo_02_03) {
    var personName = "Madhu";
    //    personName=1   //Error 
    console.log(personName.substring(1, 4));
})(demo_02_03 || (demo_02_03 = {}));
//  var person = {
//     name: "Madhu",
//     age: 20
// }
// console.log(person.substring(1,4)); //person  is object
