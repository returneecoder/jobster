import main from '../assets/images/main.svg';
import Logo  from '../components/Logo'
import Wrapper from '../assets/wrappers/LandingPage'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
   <Wrapper>
      <nav>
       <Logo/>
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>'m baby ascot vape kitsch la croix waistcoat pour-over vegan butcher disrupt tonx jawn. Twee palo santo cloud bread put a bird on it, vegan next level lomo jawn. Heirloom fit organic adaptogen pinterest slow-carb wayfarers austin hexagon narwhal, blue bottle hella shoreditch vinyl mukbang. Fam cardigan pork belly hell of.</p>
          <Link to="/Register" className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
      </Wrapper>
  );
};



export default Landing