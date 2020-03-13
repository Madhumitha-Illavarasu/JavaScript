window.onload=function(){
    var obj=new Customer();
    obj.init('Name','output');
};

var arr=[];
var pos; 

class Customer{
    name : HTMLInputElement;   
    private output:HTMLSpanElement;
    init(name:string,output:string)
    {
         this.name=<HTMLInputElement>document.getElementById(name);
         this.output=<HTMLSpanElement>document.getElementById(output)
        this.wireEvent() 
    }
wireEvent(){
document.getElementById('add').addEventListener('click',event=>{this.output.innerHTML=this.add(this.name.value)});
document.getElementById('delete').addEventListener('click',event=>{this.output.innerHTML=this.delete(this.name.value)});

}



add(x:string){
    arr.push(x)
    for(var i=0;i<arr.length;i++){
        console.log("Array has ")
        console.log(arr[i])
    }
    return x;
}
delete(x:string){
    for(var i=0;i<arr.length;i++){
           if(arr[i]===x){
               pos=i
               break
           }
    }
    arr.splice(pos,1)
    for(var i=0;i<arr.length;i++){
        console.log("Array items after deleting")
        console.log(arr[i])
    }
    return x;

}
}