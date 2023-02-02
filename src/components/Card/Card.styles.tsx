import styled from "styled-components";

export interface IStyledBannerImg {
  img?: string;
}

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  .wrapper-img {
    width: 100%;
  }
  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

export const Image = styled.div<IStyledBannerImg>`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 41%, rgba(0, 0, 0, 0.65) 100%),
    url(${({ img }) => img}), gray;
  background-size: 100%auto, cover;
  background-position: center;
  width: 100%;
  max-width: 720px;
  min-height: 333px;
  transition: all 0.3s;
  object-fit: cover;
  animation: animateThumb 0.5s;
  position: relative;
  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10px;
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #8e8e93;
  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }
  .data-title {
    margin-right: 10px;
  }
`;

export const Text = styled.div`
  z-index: 100;
  width: 100%;
  position: absolute;
  bottom: 20px;
  margin: auto;
  min-height: 100px;
  color: var(--white);
  text-align: center;
`;
