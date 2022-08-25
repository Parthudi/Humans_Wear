import React, {memo} from 'react'
import MenuItems from '../menuItems/menuItems'
import Men from '../../images/parthudi.jpg'
import Hat from '../../images/myfinalhat.jpg'
import Sneaker from '../../images/myfinalsneaker.jpg'
import Jacket from '../../images/jackets.png'
import Women from '../../images/womens.png'
import {Container} from "@material-ui/core"
import './directory.css';

const sections = [{
      title: 'hats',
      imageUrl: Hat ,
      id: 1,
      linkUrl: 'shop/hats',
      thought: 'Grab your coat, and get your hat, Leave your worry on the doorstep Just direct your feet, To the sunny side of the street.'
    },
    {
      title: 'jackets',
      imageUrl: Jacket,
      id: 2,
      linkUrl: 'shop/jackets',
      thought: `So much for you to learn, Empress. Beware the inactivated card." One Arcana's powers lay dormant - until he or she killed another player. "Who is it?" "Don't ask, if you ever want to know.`
    },
    {
      title: 'sneakers',
      imageUrl: Sneaker ,
      id: 3,
      linkUrl: 'shop/sneakers',
      thought: `I don't know what he laced them with but I've been tripping all day.`
    },
    {
      title: 'womens',
      imageUrl: Women,
      size: 'large1',
      id: 4,
      linkUrl: 'shop/womens',
      thought: `I’m a woman.. I’m smart. I never lose an argument. I can cook. I like to read fashion magazines. I love to be right. Men don’t understand us. We must have secret powers, because I don’t understand us, either.`
    },
    {
      title: 'mens',
      imageUrl: Men ,
      size: 'large1',
      id: 5,
      linkUrl: 'shop/mens',
      thought: 'Here’s a tense situation: Past, present, and future all meet in a bar.'
  }]

  const Directory = memo(() => (
    sections.map((section) => (
      <Container>
        <MenuItems 
            title={section.title} 
            key={section.id} 
            image={section.imageUrl}
            siz={section.size}
            linku={section.linkUrl}
            thought={section.thought}
          />
      </Container>
    )
  )));

export default Directory