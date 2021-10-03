export const addItem = ( item , next ) => {
    let bag = [];
    if(typeof window !== "undefined"){
        if(localStorage.getItem("bag")) {
            bag = JSON.parse(localStorage.getItem('bag'));
        }
    }
    bag.push({ ...item, count : 0})
    console.log("bag" , bag);
    bag && bag.map(p => p.id == item.id ? p.count++ : p);

    // REMOVES DUPLICATES FROM ARRAY !!

    //Array.from() ---- this will create a new array,
    //new Set(bag) ---- this will store items in that array
    //this below whole will remove the duplicates from the array if exists;
    bag = Array.from(new Set(bag.map(p => p.id))).map(id => {
        return bag.find(p =>  p.id === id);
    });

    localStorage.setItem("bag", JSON.stringify(bag));
    next();
}

export const itemTotal = () => {
    if(typeof window !== "undefined"){
        if(localStorage.getItem("bag")){
            return JSON.parse(localStorage.getItem('bag')).length;
        }
    }
    return 0;
}

export const getCart = () => {
    if(typeof window !== "undefined"){
        if(localStorage.getItem("bag")) {
            const cart = JSON.parse(localStorage.getItem('bag'));
            if(cart == null || cart == undefined || cart.length == 0){
               return [];
            }else{
               return cart;
            }
        }
    }
    return [];
}

export const updateCart = (id, count) => {
    let bag = [];
    if(typeof window !== "undefined"){
        if(localStorage.getItem("bag")) {
            bag = JSON.parse(localStorage.getItem('bag'));
        }
    }
    bag.map((product, i) => {
        if(product.id == id){
            bag[i].count = count;
        }
    })
    localStorage.setItem("bag" , JSON.stringify(bag));
    window.location.reload();
}

export const removeItemCart = (id) => {
    let bag = [];
    if(typeof window !== "undefined"){
        if(localStorage.getItem("bag")) {
            bag = JSON.parse(localStorage.getItem('bag'));
        }
    }
    bag.map((product, i) => {
        if(product.id === id) {
            bag.splice(i, 1);
        }
    })
    localStorage.setItem("bag" , JSON.stringify(bag));
    window.location.reload();
    return bag; 
}

