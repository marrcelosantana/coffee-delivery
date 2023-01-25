import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme["gray-background"]};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1%;
  gap: 1rem;

  img {
    margin-top: -12%;
  }

  .coffeeStatus {
    background: ${(props) => props.theme["yellow-light"]};
    font-size: 0.75rem;
    color: ${(props) => props.theme["yellow-dark"]};
    padding: 0.5rem 2rem;
    font-weight: bold;
    border-radius: 8px;
  }
`;

export const CoffeeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 1rem;

  h2 {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-title"]};
    font-family: "Baloo 2";
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
  }

  @media (max-width: 414px) {
    margin-bottom: 0.2rem;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 5%;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  span {
    font-size: 0.875rem;
  }

  p {
    font-size: 2rem;
    font-family: "Baloo 2";
    font-weight: bold;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .numberOfCoffees {
    width: 4.5rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: ${(props) => props.theme["gray-300"]};
    border-radius: 8px;

    button {
      background: none;
      border: 0;
      color: ${(props) => props.theme["purple-dark"]};
    }
  }
`;

export const ShoppingCartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  background: ${(props) => props.theme["purple-dark"]};
  border-radius: 8px;
`;
