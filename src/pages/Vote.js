import React from 'react'
import '../styles/Vote.css';
import { PAGES } from '../constants';

const userData = JSON.parse(localStorage.getItem('userData'));
const [landing, login, main, vote, admin] = PAGES;


const Vote = () => {
  const voted = JSON.parse(localStorage.getItem('voted'));
  if ((voted.length === 0) || !(voted.find((name) => name === userData.name))) {
    const party = localStorage.getItem('Likud');
    voted.push(userData.name);
    localStorage.setItem('Likud', Number(party) + 1);
    localStorage.setItem('voted', JSON.stringify(voted));

    return (
      <div className='vote-page'></div>
    )
  }else{
    console.log('YOU ALREADY VOTED');
  }
  

  
}

export default Vote;