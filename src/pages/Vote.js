import React from 'react'
import '../styles/Vote.css';
import { PAGES } from '../constants';

const Vote = ({ setPage }) => {
  const [landing, login, main, vote, admin] = PAGES;
  const userData = JSON.parse(localStorage.getItem('userData'));
  const voted = JSON.parse(localStorage.getItem('voted'));
  if ((voted.length === 0) || !(voted.find((name) => name === userData.name))) {
    const party = localStorage.getItem('Likud');
    voted.push(userData.name);
    localStorage.setItem('Likud', Number(party) + 1);
    localStorage.setItem('voted', JSON.stringify(voted));
  }else{
    console.log('YOU ALREADY VOTED');
  }
  
  return (
    <div className='vote'>
      <div className='party1'></div>
      <div className='party2'></div>
      <div className='party3'></div>
      <div className='party4'></div>
    </div>
  )

  
}

export default Vote;