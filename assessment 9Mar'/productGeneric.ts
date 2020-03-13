class Product<ProductType>{
    contents: ProductType[] = [];
    add(object: ProductType) {
        this.contents.push(object)
        console.log(object)
    }
    remove() {
        return this.contents.pop()
    }
}

interface Shoes {
    size: "s"| "m" | "l"
    make:"Bata"|"Adidas"
}
interface Chair {
    size: "s"| "m" | "l"
    manufacturer:string
}

const shoeObj=new Product<Shoes>()
shoeObj.add({size:"s",make:"Bata"});
console.log(shoeObj)

const chairObj =new Product<Chair>();
chairObj.add({size:"l",manufacturer:"ABC"})
console.log(chairObj)

