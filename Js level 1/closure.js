var myfunctions = []

for (var i = 0; i < 2; i++) {
    let func = function () {

        console.log(i)
    }
    myfunctions.push(func)
  
}

var func1=myfunctions[0]
func1();

var func12=myfunctions[1]
func2();
