import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out what's trending !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/shake-1.jpg'
              text='Explore the classic Milkshakes!'
              label='Summer Special'
              path='/services'
            />
            <CardItem
              src='images/smoothie-2.png'
              text='Cool down with some swanky Smoothies!'
              label='Smoothies'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tea-3.png'
              text='Explore the all-time favourite!'
              label='Classic Beverages'
              path='/services'
            />
            <CardItem
              src='images/Moito-4.png'
              text='Get freshened up for a new adventure!'
              label='Fresh Wave'
              path='/products'
            />
            <CardItem
              src='images/coffee-5.png'
              text='A cup of Coffee a day keeps all the problems away!'
              label='All time Classics'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;