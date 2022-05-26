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
        // imageUrl : "./shop-img/hats/brownBrim.png",
        // imageUrl: "./shop-img/hats/brownBrim.png",
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: hat2,
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: hat3,
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: hat4,
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: hat5,
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: hat6,
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: hat7,
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: hat8,
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: hat9,
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
        imageUrl: sne1,
        price: 220
      },
      {
        id: 12,
        name: 'Adidas Yeezy',
        imageUrl: sne2,
        price: 280
      },
      {
        id: 13,
        name: 'Black Converse',
        imageUrl: sne3,
        price: 110
      },
      {
        id: 14,
        name: 'Nike White AirForce',
        imageUrl: sne4,
        price: 160
      },
      {
        id: 15,
        name: 'Nike Red HighTops',
        imageUrl: sne5,
        price: 160
      },
      {
        id: 16,
        name: 'Nike Brown HighTops',
        imageUrl: sne6,
        price: 160
      },
      {
        id: 17,
        name: 'Air Jordan Limited',
        imageUrl: sne7,
        price: 190
      },
      {
        id: 18,
        name: 'Timberlands',
        imageUrl: sne8,
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
        imageUrl: jac1,
        price: 125
      },
      {
        id: 21,
        name: 'Blue Jean Jacket',
        imageUrl: jac2,
        price: 90
      },
      {
        id: 22,
        name: 'Grey Jean Jacket',
        imageUrl: jac3,
        price: 90
      },
      {
        id: 23,
        name: 'Brown Shearling',
        imageUrl: jac4,
        price: 165
      },
      {
        id: 24,
        name: 'Tan Trench',
        imageUrl: jac5,
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
        imageUrl: wom1,
        price: 1
      },
      {
        id: 27,
        name: 'Floral Blouse',
        imageUrl: wom2,
        price: 20
      },
      {
        id: 28,
        name: 'Floral Dress',
        imageUrl: wom3,
        price: 80
      },
      {
        id: 29,
        name: 'Red Dots Dress',
        imageUrl: wom4,
        price: 80
      },
      {
        id: 30,
        name: 'Striped Sweater',
        imageUrl: wom5,
        price: 45
      },
      {
        id: 31,
        name: 'Yellow Track Suit',
        imageUrl: wom6,
        price: 135
      },
      {
        id: 32,
        name: 'White Blouse',
        imageUrl: wom7,
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
        imageUrl: men1,
        price: 325
      },
      {
        id: 35,
        name: 'Floral T-shirt',
        imageUrl: men2,
        price: 20
      },
      {
        id: 36,
        name: 'H&M Longsleeve',
        imageUrl: men3,
        price: 25
      },
      {
        id: 37,
        name: 'Pink T-shirt',
        imageUrl: men4,
        price: 25
      },
      {
        id: 38,
        name: 'Jean Long Sleeve',
        imageUrl: men5,
        price: 40
      },
      {
        id: 39,
        name: 'Burgundy T-shirt',
        imageUrl: men6,
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




