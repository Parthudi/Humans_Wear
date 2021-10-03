export const wishListAddItems = ( item , next ) => {
    let wishlist = [];
    if(typeof window !== "undefined"){
        if(localStorage.getItem("wishlist")) {
            wishlist = JSON.parse(localStorage.getItem('wishlist'));
        }
    }
    wishlist.push({ ...item, count : 0})
    wishlist && wishlist.map(p => p.id == item.id ? p.count++ : p);

    // REMOVES DUPLICATES FROM ARRAY !!

    //Array.from() ---- this will create a new array,
    //new Set(wishlist) ---- this will store items in that array
    //this below whole will remove the duplicates from the array if exists;
    wishlist = Array.from(new Set(wishlist.map(p => p.id))).map(id => {
        return wishlist.find(p =>  p.id === id);
    });

    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    next();
}

export const wishListItemTotal = () => {
    if(typeof window !== "undefined"){
        if(localStorage.getItem("wishlist")){
            return JSON.parse(localStorage.getItem('wishlist')).length;
        }
    }
    return 0;
}

export const wishListGetItems = () => {
    if(typeof window !== "undefined"){
        if(localStorage.getItem("wishlist")) {
            const cart = JSON.parse(localStorage.getItem('wishlist'));
            if(cart == null || cart == undefined || cart.length == 0){
               return [];
            }else{
               return cart;
            }
        }
    }
    return [];
}

export const wishListUpdateItem = (id, count) => {
    let wishlist = [];
    if(typeof window !== "undefined"){
        if(localStorage.getItem("wishlist")) {
            wishlist = JSON.parse(localStorage.getItem('wishlist'));
        }
    }
    wishlist.map((product, i) => {
        if(product.id == id){
            wishlist[i].count = count;
        }
    })
    localStorage.setItem("wishlist" , JSON.stringify(wishlist));
    window.location.reload();
}

export const wishListRemoveItem = (id) => {
    console.log("id : ", id);
    let wishlist = [];
    if(typeof window !== "undefined"){
        if(localStorage.getItem("wishlist")) {
            wishlist = JSON.parse(localStorage.getItem('wishlist'));
        }
    }
    wishlist.map((product, i) => {
        if(product.id === id) {
            wishlist.splice(i, 1);
        }
    })
    localStorage.setItem("wishlist" , JSON.stringify(wishlist));
    window.location.reload();
    return wishlist; 
}

