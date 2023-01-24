import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: "100%";
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;
  margin-bottom: 2rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const LocationContainer = styled.div`
  background: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purpleDark};
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  padding: 0.5rem;
  gap: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  svg {
    color: ${(props) => props.theme.purpleDark};
  }
`;

export const ShoppingCartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .numberOfProducts {
    margin-top: -1.5rem;
    margin-left: -0.7rem;

    background: ${(props) => props.theme.yellowDark};
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    color: ${(props) => props.theme.white};

    font-size: 0.75rem;
  }

  button {
    background: ${(props) => props.theme.yellowLight};
    border: 0;
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    svg {
      color: ${(props) => props.theme.yellowDark};
    }
  }
`;
