import React from 'react'
import '../styles/Vote.css';
import { PAGES } from '../constants';

const Vote = ({ setPage }) => {
  let isFinnishVoting = false;
  const [landing, login, main, vote, admin] = PAGES;
  const userData = JSON.parse(localStorage.getItem('userData'));
  const voted = JSON.parse(localStorage.getItem('voted'));
  // if ((voted.length === 0) || !(voted.find((name) => name === userData.name))) {
  //   const party = localStorage.getItem('Likud');
  //   voted.push(userData.name);
  //   localStorage.setItem('Likud', Number(party) + 1);
  //   localStorage.setItem('voted', JSON.stringify(voted));
  // }else{
  //   console.log('YOU ALREADY VOTED');
  // }

  const clickHandler = (e) => {
    if ((voted.length > 0) && (voted.find((name) => name === userData.name))) {
      console.log('YOU ALREADY VOTED');
      setPage(landing);
    }
    let party = '';
    switch(e.target.getAttribute('class')) {
      case 'party-likud':
        party = localStorage.getItem('Likud');
        voted.push(userData.name);
        localStorage.setItem('Likud', Number(party) + 1);
        localStorage.setItem('voted', JSON.stringify(voted));
        break;
      case 'party-yeshatid':
        party = localStorage.getItem('YeshAtid');
        voted.push(userData.name);
        localStorage.setItem('YeshAtid', Number(party) + 1);
        localStorage.setItem('voted', JSON.stringify(voted));
        break;
      case 'party-haavoda':
        party = localStorage.getItem('Haavoda');
        voted.push(userData.name);
        localStorage.setItem('Haavoda', Number(party) + 1);
        localStorage.setItem('voted', JSON.stringify(voted));
        break;
      case 'party-merech':
        const party = localStorage.getItem('Merech');
        voted.push(userData.name);
        localStorage.setItem('Merech', Number(party) + 1);
        localStorage.setItem('voted', JSON.stringify(voted));
        break;
      default:
        throw new Error('SOMETHING WENT WRONG VOTING SWITCH CASE');
        break;
    
  }
  
  return (
    <div className='vote'>
      <button onClick={clickHandler} className='party-likud'></button>
      <button onClick={clickHandler} className='party-yeshatid'></button>
      <button onClick={clickHandler} className='party-haavoda'></button>
      <button onClick={clickHandler} className='party-merech'></button>
      {}
    </div>
  )
  }
}

export default Vote;