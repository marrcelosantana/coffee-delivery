import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const ListCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h1 {
    font-family: "Baloo 2";
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 2rem;
  }

  .list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 4rem;
  }

  @media (max-width: 414px) {
    h1 {
      text-align: center;
      margin-bottom: 1rem;
    }

    .list {
      margin-left: 1.5rem;
    }
  }
`;
