class AddNumber{
    private x :number
    constructor(start=0){
        this.x=start
    }
    public add(index=1){
        this.x=this.x+index;
        return this;
    }
    public print(){
        console.log(this.x)
        return this;
    }
    public sub(index1=1){
        this.x=this.x-index1
        return this
    }
}

new AddNumber(2).add(2)
.print()
.add()
.print()
.sub()
.print()
