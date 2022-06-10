import { v4 as uuidv4 } from 'uuid';
import card1 from '../../public/images/cards/card1.jpg';
import card2 from '../../public/images/cards/card2.jpg';
import card3 from '../../public/images/cards/card3.jpg';
import card4 from '../../public/images/cards/card4.jpg';
import card5 from '../../public/images/cards/card5.jpg';
import card6 from '../../public/images/cards/card6.jpg';
import card7 from '../../public/images/cards/card7.jpg';

import cardBundle1 from '../../public/images/cards/cardBundle1.jpg';
import cardBundle2 from '../../public/images/cards/cardBundle2.jpg';
import cardBundle3 from '../../public/images/cards/cardBundle3.jpg';

export const productsData = [
  {
    id: uuidv4(),
    img: card1,
    title: 'USB-C to HDMI Adapter',
    price: 26.99,
    tag: 'oneProduct',
  },
  {
    id: uuidv4(),
    img: card2,
    title: 'USB-C to HDMI Adapter',
    price: 26.99,
    tag: 'oneProduct',
  },
  {
    id: uuidv4(),
    img: card3,
    title: 'USB-C to HDMI Adapter',
    price: 19.99,
    tag: 'oneProduct',
  },
  {
    id: uuidv4(),
    img: card4,
    title: 'USB-C to HDMI Adapter',
    price: 19.99,
    tag: 'oneProduct',
  },
  {
    id: uuidv4(),
    img: card5,
    title: 'USB-C to HDMI Adapter',
    price: 29.99,
    tag: 'oneProduct',
  },
  {
    id: uuidv4(),
    img: card6,
    title: 'USB-C to HDMI Adapter',
    price: 29.99,
    tag: 'oneProduct',
  },
  {
    id: uuidv4(),
    img: card7,
    title: 'USB-C to HDMI Adapter',
    price: 29.99,
    tag: 'oneProduct',
  },
  {
    id: uuidv4(),
    img: cardBundle1,
    title: 'The Commuter - USB-C Bundle',
    price: 99.99,
    tag: 'bundle',
    sale: 'Sale 5%',
    priceSale: '$94.99',
  },
  {
    id: uuidv4(),
    img: cardBundle2,
    title: 'The Creator - USB-C Bundle',
    price: 106.99,
    tag: 'bundle',
    sale: 'Sale 6%',
    priceSale: '$100.99',
  },
  {
    id: uuidv4(),
    img: cardBundle3,
    title: 'The Curator - USB-C Bundle',
    price: 106.99,
    tag: 'bundle',
    sale: 'Sale 6%',
    priceSale: '$100.99',
  },
];
