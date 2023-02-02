import styled from "styled-components";

export const Content = styled.div`
  background-color: #000;
  padding-top: 20px;
  position: sticky;
  top: 0;
  z-index: 99999;
`;

export const ImgLogo = styled.img`
  width: 50px;
  color: var(--white);

  @media screen and (max-width: 600px) {
    width: 100px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin-left: 50px;
  justify-content: start;
  align-items: baseline;
  .logo {
    width: 60px;
  }
  .link {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 600px) {
    margin: 0;
    justify-content: center;
  }
`;

export const Title = styled.h1`
  color: var(--white);
  margin-left: 20px;
`;
