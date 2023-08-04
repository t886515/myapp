import { useState } from "react";
import style from "styled-components";
import {
  FlexWrapper,
  FadeInTransition,
  ShareTitleStyle,
} from "../common/share_styles.js";

const HomeWrapper = style(FlexWrapper)`
  width: 100%;
  
`;

const HomeNameTitle = style(FlexWrapper)`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  
  background-image: url('https://lina-personal-website-static-images.s3.amazonaws.com/C360_2017-12-30-22-09-46-212.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  opacity: 0.85;
`;

const HomeMyName = style.h1`
  margin: 0;
  font-weight: normal;
  line-height: 1;
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 100px;
  color: white;
`;

const HomeMyTitles = style(ShareTitleStyle)`
  color: white;
`;

function Home() {
  const [count, setCount] = useState(0);

  return (
    <HomeWrapper direction="column">
      <HomeNameTitle direction="column">
        <FadeInTransition>
          <HomeMyName> LINA YANG </HomeMyName>
          <HomeMyTitles>
            SOFTWARE ENGINEER・FULL-STACK WEB DEVELOPER
          </HomeMyTitles>
        </FadeInTransition>
      </HomeNameTitle>
    </HomeWrapper>
  );
}

export default Home;
