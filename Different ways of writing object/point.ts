// namespace demo {
//     //way1
//     var point1 = {
//         x: 10, y: 20
//     }

//     //way2
//     var point2 = {};
//     point2 = {
//         x: 10, y: 90
//     }

//     //way3
//     var point3: Object = {
//         x: 56, y: 78
//     }
//     point3 = {
//         name: "john"
//     }





    // var rect = {
    //     h: 10,
    //     w: 30,
    //     calcArea: function () {
    //         return this.h * this.w;
    //     }
    // }
    // console.log('rectangle.area= ' + rect.calcArea());

    //function 
    //way 1

    var square = function (x) {
        return x * x;
    }
    var val1=square('2')
    console.log("square ="+val1)
    // var val1=square('Mark')
    // console.log("square ="+val1)

    var val2=square(4);
    console.log("square = "+val2);


    //way3
    var square2:Function
    square2=function(x:number){
        return x*x;
    }
    var val3=square2(6)
    console.log("square = "+val3);










// }  //module