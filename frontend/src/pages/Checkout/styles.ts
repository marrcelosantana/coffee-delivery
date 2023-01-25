import styled from "styled-components";

export const CheckoutContainer = styled.form`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
  }
`;

export const AddressContainer = styled.div`
  width: 40rem;
  background: ${(props) => props.theme["gray-background"]};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  margin-bottom: 1rem;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme["yellow-normal"]};
  }

  h5 {
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  input {
    height: 2.625rem;
    background: ${(props) => props.theme["gray-400"]};
    border: 1px solid ${(props) => props.theme["gray-300"]};
    padding: 0 2%;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
  }

  .complements,
  .address-remainder {
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const PaymentContainer = styled.div`
  background: ${(props) => props.theme["gray-background"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
`;

export const PaymentMethods = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  div {
    width: 11.167rem;
    height: 3.188rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    font-size: 0.75rem;
    color: ${(props) => props.theme["base-text"]};
    background-color: ${(props) => props.theme["gray-300"]};
    border: 0;
    border-radius: 8px;
  }
`;

export const OrderContainer = styled.div`
  width: 28rem;
  background-color: ${(props) => props.theme["gray-background"]};
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
  padding: 2.5rem;

  .divider {
    width: 100%;
    border: 0.5px solid ${(props) => props.theme["gray-300"]};
    margin: 0.5rem 0 0.5rem 0;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  .total-items,
  .delivery,
  .final-total {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .final-total {
    font-weight: bold;
    color: ${(props) => props.theme["base-text"]};
    font-size: 1.25rem;
  }

  button {
    width: 100%;
    height: 2.875rem;
    background: ${(props) => props.theme["yellow-normal"]};
    color: white;

    border: 0;
    border-radius: 8px;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`;
