import styled from "styled-components";

export interface IWrapper {
  backdrop?: string;
}

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;

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

export const Wrapper = styled.div<IWrapper>`
  min-height: 100vh;
  background: ${({ backdrop }) => (backdrop ? `url('${backdrop}')` : "#000")};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animationWorkoutInfo 1s;
  .wrapper-back {
    position: absolute;
    top: 0;
    background-color: #000;
    border-radius: 100%;
    display: flex;
    padding: 2px;
    z-index: 1;
    cursor: pointer;
  }
  .back {
    fill: #fff;
    width: 30px;
    height: 30px;
  }

  @keyframes animationWorkoutInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;

  min-height: 60vh;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  position: relative;
  .media {
    width: 100%;
    border-radius: 5px;
  }
  .player-wrapper {
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  }

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
    .media {
      width: 100%;
      position: relative;
    }
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: white;
  overflow: hidden;
  .wrapper-info {
    display: flex;
    justify-content: flex-start;
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;
