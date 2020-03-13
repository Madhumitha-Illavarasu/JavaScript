class Cabinet<ClothingType>{
    contents: ClothingType[] = [];
    add(object: ClothingType) {
        this.contents.push(object)
    }
    remove() {
        return this.contents.pop()
    }
}



interface Sock {
    color: string;
}
interface Tshirt {
    size: "s"| "m" | "l"
}


const sockCabinet=new Cabinet<Sock>()
sockCabinet.add({color:"white"});
console.log(sockCabinet)

const tshirtCabinet =new Cabinet<Tshirt>();
tshirtCabinet.add({size:"m"})
console.log(tshirtCabinet)
const mixedCabinet=new Cabinet<Sock | Tshirt>();




