import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;

  .coffee-image {
    width: 4rem;
    height: 4rem;
  }
`;

export const CoffeeInfo = styled.div`
  .title {
    font-size: 1rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-top: 5px;

  .number-of-coffees {
    width: 4.5rem;
    height: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 2%;

    background: ${(props) => props.theme["gray-300"]};
    border-radius: 8px;

    button {
      background: none;
      border: 0;
      color: ${(props) => props.theme["purple-dark"]};
    }
  }

  .remove-coffee {
    button {
      width: 4.5rem;
      height: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      gap: 0.2rem;
      border-radius: 8px;
      font-size: 10px;

      border: 0;
      background: ${(props) => props.theme["gray-300"]};
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

export const CoffeePrice = styled.div``;
