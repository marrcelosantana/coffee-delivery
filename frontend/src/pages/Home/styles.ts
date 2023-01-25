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
`;
