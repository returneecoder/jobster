import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";


const Error =() =>{
return (
  <Wrapper className="full-page">
    <div>
      <img src={img} alt="not found" />
      <h3>Error Page</h3>
      <p>I'm baby thundercats mixtape twee try-hard chia. Bruh yuccie poutine, sus letterpress cardigan chartreuse craft beer paleo hell of meggings semiotics. Tbh everyday carry humblebrag kinfolk, cred direct trade art party kombucha tilde yr VHS fanny pack ennui gluten-free. Roof party cornhole actually, chicharrones dreamcatcher live-edge same af. Master cleanse poke wayfarers craft beer hoodie. Listicle iPhone lyft williamsburg skateboard echo park pabst, 90's af yr. Neutra banh mi crucifix sustainable edison bulb PBR&B.</p>
      <Link to="/">back home</Link>
    </div>
  </Wrapper>
);
}

export default Error