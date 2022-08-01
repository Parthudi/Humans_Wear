export const addAddress = ( item , next ) => {
    let address = [];
    if(typeof window !== "undefined"){
        if(localStorage.getItem("address")) {
            address = JSON.parse(localStorage.getItem('address'));
        }
    }
    address.push({ ...item})
    // address && address.map(p => p.id == item.id ? p.count++ : p);

    // REMOVES DUPLICATES FROM ARRAY !!

    //Array.from() ---- this will create a new array,
    //new Set(address) ---- this will store items in that array
    //this below whole will remove the duplicates from the array if exists;

    // address = Array.from(new Set(address.map(p => p.id))).map(id => {
    //     return address.find(p =>  p.id === id);
    // });

    localStorage.setItem("address", JSON.stringify(address));
    window.location.reload();
    next();
};

export const itemTotal = () => {
    if(typeof window !== "undefined"){
        if(localStorage.getItem("address")){
            return JSON.parse(localStorage.getItem('address')).length;
        }
    }
    return 0;
}

export const getAddress = () => {
    if(typeof window !== "undefined"){
        if(localStorage.getItem("address")) {
            const cart = JSON.parse(localStorage.getItem('address'));
            if(cart == null || cart == undefined || cart.length == 0){
               return [];
            }else{
               return cart;
            }
        }
    }
    return [];
};

export const updateAddress = (id, count) => {
    let address = [];
    if(typeof window !== "undefined"){
        if(localStorage.getItem("address")) {
            address = JSON.parse(localStorage.getItem('address'));
        }
    }
    address.map((product, i) => {
        if(product.id == id){
            address[i].count = count;
        }
    })
    localStorage.setItem("address" , JSON.stringify(address));
    window.location.reload();
};

export const removeAddress = (id) => {
    let address = [];
    if(typeof window !== "undefined"){
        if(localStorage.getItem("address")) {
            address = JSON.parse(localStorage.getItem('address'));
        }
    }
    address.map((product, i) => {
        if(i == id) {
            address.splice(i, 1);
        }
    })
    localStorage.setItem("address" , JSON.stringify(address));
    return address; 
};

