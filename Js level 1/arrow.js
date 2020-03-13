function getArrow() {
    console.log(this)
    let arrow = () => {
        console.log(this)
    }
    return arrow
}

// let arrow = getArrow();
// arrow();


let po = { name: 'po' }
let arrow = getArrow.call(po);
arrow()

let kid = { name: 'Ria' }
let arrow = getArrow.call(kid)
arrow()
