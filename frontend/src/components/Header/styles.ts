import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: "100%";
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5% 15%;

  @media (max-width: 414px) {
    padding: 2% 5%;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const LocationContainer = styled.div`
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  font-size: 0.875rem;
  padding: 0.5rem;
  gap: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  svg {
    color: ${(props) => props.theme["purple-normal"]};
  }
`;

export const ShoppingCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: ${(props) => props.theme["yellow-light"]};
    border: 0;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }
  }

  .numberOfProducts {
    margin-top: -2rem;
    margin-left: -0.75rem;

    background: ${(props) => props.theme["yellow-dark"]};
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    color: ${(props) => props.theme.white};

    font-size: 0.75rem;
  }
`;
