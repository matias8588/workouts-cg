import React from "react";
import { Content, Text, Wrapper } from "./BannerImg.styles";
import { IBannerImg } from "./types";

const BannerImg = ({ img, title, text }: IBannerImg) => (
  <Wrapper img={img} data-testid="banner-img">
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default BannerImg;
