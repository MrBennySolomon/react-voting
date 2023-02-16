import { PAGES } from '../constants';
import users from '../usersDbData';
import Wrapper from '../styles/styled/Landing.styled';
import { Logo } from '../components';

const [landing, login, main, vote, admin] = PAGES;

const Landing = ({ setPage }) => {
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('Likud', '0');
  localStorage.setItem('YeshAtid', '0');
  localStorage.setItem('Ahvoda', '0');
  localStorage.setItem('Yemina', '0');


  localStorage.setItem('voted', JSON.stringify([]));



  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Love <span>finding</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi laboriosam eaque quisquam dicta, ea natus earum commodi molestiae autem soluta fuga illum enim, eum esse!
          </p>
          <button onClick={() => setPage(login)} className='btn btn-hero'>
            Log In
          </button>
        </div>
        <img src={main} alt='love finding app' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
