/*var con=new Object()
    con.url="hhtp",
    con.iuy="hgt"*/


    //Array
var arr=new Array()
arr.push("madhu")
arr[1]="val1"
arr[2]="value2"


var arr1=[
    "item1","item2","item3"
]

//REg exp
var re=new RegExp("\\d{10}")
var num=1293456789
if(re.test(num)){
  console.log("Valid")
}
else{
    console.log("inValid")

}
var re1=/\d{10}/
var num="fdsf"
if(re1.test(num)){
  console.log("Valid")
}
else{
    console.log("inValid")

}