import React from 'react';
import { Card } from '../card/card.component';

import './card-list.component.scss';

// props is any parameter that I pass into component, when I use the component somewhere
// anonymous function can be writen like this also 
// props => ( some_code that will be returned ) because () can mark everything inbetween them as one expression
export const CardList = (props) => {
  return (
    <div className='card-list'>
      { props.monsters.map(monster => (
        <Card key={monster.id} monster={monster}/>)
      )}
    </div>
  )
};