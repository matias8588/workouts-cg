import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;

  h1 {
    color: grey;

    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 2rem;

  @media screen and (max-width: 540px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;

  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`;
