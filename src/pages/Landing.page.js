import { PAGES } from '../constants';
import users from '../usersDbData';
import Wrapper from '../styles/styled/Landing.styled';
import { Logo } from '../components';
import '../styles/landing.css'

const [landing, login, main, vote, admin] = PAGES;

const Landing = ({ setPage }) => {
  if (!localStorage.getItem('users')) localStorage.setItem('users', JSON.stringify(users));
  if (!localStorage.getItem('Likud')) localStorage.setItem('Likud', '0');
  if (!localStorage.getItem('YeshAtid')) localStorage.setItem('YeshAtid', '0');
  if (!localStorage.getItem('Haavoda')) localStorage.setItem('Haavoda', '0');
  if (!localStorage.getItem('Merech')) localStorage.setItem('Merech', '0');


  localStorage.setItem('voted', JSON.stringify([]));



  return (
    <Wrapper>
      <div className='flex'>
        <h1>VOTING APP</h1>
        <button onClick={() => setPage(login)}>
          VOTE
        </button>
      </div>
    </Wrapper>
  );
};

export default Landing;
