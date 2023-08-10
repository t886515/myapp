import React from "react";
import { Card, InsideCard, InsideCardImage } from "../common/card_1";

const Project = ({ imgSrc, content }) => {
  return (
    <Card>
      <InsideCardImage src={imgSrc} />
      <InsideCard>{content}</InsideCard>
    </Card>
  );
};

export default Project;
