import React from "react";
import { H1, ShareTitleStyle } from "../common/share_styles";

const ContactMe = () => {
  return (
    <>
      <H1> Contact Me </H1>
      <ShareTitleStyle>
        <a
          href="https://www.linkedin.com/in/lina-yang-6610b393"
          target="_blank"
          rel="nofollow noopener"
        >
          LinkedIn
        </a>
        ・
        <a
          href="https://github.com/t886515/"
          target="_blank"
          rel="nofollow noopener"
        >
          GitHub
        </a>
        ・
        <a
          href="mailto:lina.c.yang.55@gmail.com"
          target="_blank"
          rel="nofollow noopener"
        >
          Email
        </a>
      </ShareTitleStyle>
    </>
  );
};

export default ContactMe;
