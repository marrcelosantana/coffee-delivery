import styled from "styled-components";

export const CheckoutContainer = styled.div`
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
  /* height: 37rem; */
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

export const Form = styled.form`
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

export const PaymentContainer = styled.div``;

export const OrderContainer = styled.div`
  width: 28rem;
  height: 31.125rem;
  background-color: ${(props) => props.theme["gray-background"]};
  border-radius: 6px 44px;

  padding: 2.5rem;
`;
