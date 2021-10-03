import React, { Component } from 'react'
import MenuItems from '../menuItems/menuItems'
import Men from '../../images/parthudi.jpg'
import Hat from '../../images/myfinalhat.jpg'
import Sneaker from '../../images/myfinalsneaker.jpg'
import Jacket from '../../images/jackets.png'
import Women from '../../images/womens.png'
import './directory.css'

class Directory extends Component {
        state = {
         sections : [
                {
                  title: 'hats',
                  imageUrl: Hat ,
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl:  Jacket,
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: Sneaker ,
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: Women,
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: Men ,
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
              
        }
    render() {
         let menuitem =  this.state.sections.map((section) => {
                 return   <MenuItems 
                                title={section.title} 
                                key={section.id} 
                                image={section.imageUrl}
                                siz={section.size}
                                linku={section.linkUrl}/>
             })

        return(
            <div className='directory-menu'>
                        {menuitem}
            </div>
        )
    }
}

export default Directory