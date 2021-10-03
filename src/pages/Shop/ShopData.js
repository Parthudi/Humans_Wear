/* Used as starting data for ShopPage */
import hat1 from './shop-img/hats/brownBrim.png'
import hat2 from './shop-img/hats/blue-beanie.png'
import hat3 from './shop-img/hats/brown-cowboy.png'
import hat4 from './shop-img/hats/grey-brim.png'
import hat5 from './shop-img/hats/green-beanie.png'
import hat6 from './shop-img/hats/palm-tree-cap.png'
import hat7 from './shop-img/hats/red-beanie.png'
import hat8 from './shop-img/hats/wolf-cap.png'
import hat9 from './shop-img/hats/blue-snapback.png'
import hat10 from '../../images/myfinalhat.jpg'

import sne1 from './shop-img/sneakers/adidas-nmd.png'
import sne2 from './shop-img/sneakers/yeezy.png'
import sne3 from './shop-img/sneakers/black-converse.png'
import sne4 from './shop-img/sneakers/white-nike-high-tops.png'
import sne5 from './shop-img/sneakers/nikes-red.png'
import sne6 from './shop-img/sneakers/nike-brown.png'
import sne7 from './shop-img/sneakers/nike-funky.png'
import sne8 from './shop-img/sneakers/timberlands.png'
import sne9 from '../../images/myfinalsneaker.jpg'

import wom1 from './shop-img/womens/blue-tank.png'
import wom2 from './shop-img/womens/floral-blouse.png'
import wom3 from './shop-img/womens/floral-skirt.png'
import wom4 from './shop-img/womens/red-polka-dot-dress.png'
import wom5 from './shop-img/womens/striped-sweater.png'
import wom6 from './shop-img/womens/yellow-track-suit.png'
import wom7 from './shop-img/womens/white-vest.png'
import wom8 from '../../images/womens.png'

import jac1 from './shop-img/jackets/black-shearling.png'
import jac2 from './shop-img/jackets/blue-jean-jacket.png'
import jac3 from './shop-img/jackets/grey-jean-jacket.png'
import jac4 from './shop-img/jackets/brown-shearling.png'
import jac5 from './shop-img/jackets/brown-trench.png'
import jac6 from '../../images/jackets.png'

import men1 from './shop-img/mens/camo-vest.png'
import men2 from './shop-img/mens/floral-shirt.png'
import men3 from './shop-img/mens/long-sleeve.png'
import men4 from './shop-img/mens/pink-shirt.png'
import men5 from './shop-img/mens/roll-up-jean-shirt.png'
import men6 from './shop-img/mens/polka-dot-shirt.png'
import men7 from '../../images/parthudi.jpg'

const SHOP_DATA = [
  {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        // imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        imageUrl: hat1,
        //
        // imageUrl : "./shop-img/hats/brownBrim.png",
        // imageUrl: "./shop-img/hats/brownBrim.png",
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        // imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        imageUrl: hat2,
        //imageUrl: "/images/shop-img/hats/blue-beanie.png",
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        // imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        imageUrl: hat3,
        //imageUrl: "/images/shop-img/hats/brown-cowboy.png",
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        // imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        imageUrl: hat4,
        //imageUrl: "/images/shop-img/hats/grey-brim.png",
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        // imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        imageUrl: hat5,
        //imageUrl: "/images/shop-img/hats/green-beanie.png",
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        // imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        imageUrl: hat6,
        //imageUrl: "/images/shop-img/hats/palm-tree-cap.png",
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        // imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        imageUrl: hat7,
        //imageUrl: "/images/shop-img/hats/red-beanie.png",
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        // imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        imageUrl: hat8,
        //imageUrl: "/images/shop-img/hats/wolf-cap.png",
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        // imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        imageUrl: hat9,
        //imageUrl: "/images/shop-img/hats/blue-snapback.png",
        price: 16
      },
      {
        id: 10,
        name: 'Black Swag Cap',
        imageUrl: hat10,
        price: 32
      }
    ]
  },
  {
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 11,
        name: 'Adidas NMD',
        //  imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        imageUrl: sne1,
        // imageUrl: "/images/shop-img/sneakers/adidas-nmd.png", 
        price: 220
      },
      {
        id: 12,
        name: 'Adidas Yeezy',
        //  imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        imageUrl: sne2,
        // imageUrl: "/images/shop-img/sneakers/yeezy.png",
        price: 280
      },
      {
        id: 13,
        name: 'Black Converse',
        //  imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        imageUrl: sne3,
        // imageUrl: "/images/shop-img/sneakers/black-converse.png",
        price: 110
      },
      {
        id: 14,
        name: 'Nike White AirForce',
        //  imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        imageUrl: sne4,
        // imageUrl: "/images/shop-img/sneakers/white-nike-high-tops.png",
        price: 160
      },
      {
        id: 15,
        name: 'Nike Red HighTops',
        //  imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        imageUrl: sne5,
        // imageUrl: "/images/shop-img/sneakers/nikes-red.png",
        price: 160
      },
      {
        id: 16,
        name: 'Nike Brown HighTops',
        //  imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        imageUrl: sne6,
        // imageUrl: "/images/shop-img/sneakers/nike-brown.png",
        price: 160
      },
      {
        id: 17,
        name: 'Air Jordan Limited',
        //  imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        imageUrl: sne7,
        // imageUrl: "/images/shop-img/sneakers/nike-funky.png",
        price: 190
      },
      {
        id: 18,
        name: 'Timberlands',
        //  imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        imageUrl: sne8,
        // imageUrl: "/images/shop-img/sneakers/timberlands.png",
        price: 200
      },
      {
        id: 19,
        name: "Hrx Sneakers",
        imageUrl: sne9,
        price: 240
      }
    ]
  },

  {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 20,
        name: 'Black Denim Jacket',
        //  imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        imageUrl: jac1,
        //imageUrl: "/images/shop-img/jackets/black-shearling.png",
        price: 125
      },
      {
        id: 21,
        name: 'Blue Jean Jacket',
        //  imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        imageUrl: jac2,
        //imageUrl: "/images/shop-img/jackets/blue-jean-jacket.png",
        price: 90
      },
      {
        id: 22,
        name: 'Grey Jean Jacket',
        //  imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        imageUrl: jac3,
        //imageUrl: "/images/shop-img/jackets/grey-jean-jacket.png",
        price: 90
      },
      {
        id: 23,
        name: 'Brown Shearling',
        //  imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        imageUrl: jac4,
        //imageUrl: "/images/shop-img/jackets/brown-shearling.png",
        price: 165
      },
      {
        id: 24,
        name: 'Tan Trench',
        //  imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        imageUrl: jac5,
        //imageUrl: "/images/shop-img/jackets/brown-trench.png",
        price: 185
      },
      {
        id: 25,
        name: "Denim Jackets",
        imageUrl: jac6,
        price: 235
      }
    ]
  },
  {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 26,
        name: 'Blue Tanktop',
        //  imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        imageUrl: wom1,
        //imageUrl: "/images/shop-img/womens/blue-tank.png",
        price: 25
      },
      {
        id: 27,
        name: 'Floral Blouse',
        //  imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        imageUrl: wom2,
        //imageUrl: "/images/shop-img/womens/floral-blouse.png",
        price: 20
      },
      {
        id: 28,
        name: 'Floral Dress',
        //  imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        imageUrl: wom3,
        //imageUrl: "/images/shop-img/womens/floral-skirt.png",
        price: 80
      },
      {
        id: 29,
        name: 'Red Dots Dress',
        //  imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        imageUrl: wom4,
        //imageUrl: "/images/shop-img/womens/red-polka-dot-dress.png",
        price: 80
      },
      {
        id: 30,
        name: 'Striped Sweater',
        //  imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        imageUrl: wom5,
        //imageUrl: "/images/shop-img/womens/striped-sweater.png",
        price: 45
      },
      {
        id: 31,
        name: 'Yellow Track Suit',
        //  imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        imageUrl: wom6,
        //imageUrl: "/images/shop-img/womens/yellow-track-suit.png",
        price: 135
      },
      {
        id: 32,
        name: 'White Blouse',
        //  imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        imageUrl: wom7,
        //imageUrl: "/images/shop-img/womens/white-vest.png",
        price: 20
      },
      {
        id: 33,
        name: "Red Chief",
        imageUrl: wom8,
        price: 35
      }
    ]
  },

  {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 34,
        name: 'Camo Down Vest',
        //  imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        imageUrl: men1,
        //imageUrl: "/images/shop-img/mens/camo-vest.png",
        price: 325
      },
      {
        id: 35,
        name: 'Floral T-shirt',
        //  imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        imageUrl: men2,
        //imageUrl: "/images/shop-img/mens/floral-shirt.png",
        price: 20
      },
      {
        id: 36,
        name: 'H&M Longsleeve',
        //  imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        imageUrl: men3,
        //imageUrl: "/images/shop-img/mens/long-sleeve.png",
        price: 25
      },
      {
        id: 37,
        name: 'Pink T-shirt',
        //  imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        imageUrl: men4,
        //imageUrl: "/images/shop-img/mens/pink-shirt.png",
        price: 25
      },
      {
        id: 38,
        name: 'Jean Long Sleeve',
        //  imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        imageUrl: men5,
        //imageUrl: "/images/shop-img/mens/roll-up-jean-shirt.png",
        price: 40
      },
      {
        id: 39,
        name: 'Burgundy T-shirt',
        //  imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        imageUrl: men6,
        //imageUrl: "/images/shop-img/mens/polka-dot-shirt.png",
        price: 25
      },
      {
        id: 40,
        name: "Cartoon T-shirt",
        imageUrl: men7,
        price: 55
      }
    ]
  }
];



export default SHOP_DATA;




