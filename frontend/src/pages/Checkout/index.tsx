import { MapPin } from "phosphor-react";

import {
  AddressContainer,
  CheckoutContainer,
  OrderContainer,
  Info,
  Form,
  PaymentContainer,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>
        <AddressContainer>
          <Info>
            <MapPin size={22} />
            <div className="description">
              <h5>Endereço de entrega</h5>
              <p>Informe o endereço onde deseja receber o pedido</p>
            </div>
          </Info>

          <Form>
            <input required type="text" id="zip-code" placeholder="CEP" />
            <input
              required
              type="text"
              id="street"
              placeholder="Rua"
              style={{ width: "100%" }}
            />

            <div className="complements">
              <input
                required
                type="text"
                id="number-of-house"
                placeholder="Número"
              />
              <input
                required
                type="text"
                id="complement"
                placeholder="Complemento"
                style={{ width: "100%" }}
              />
            </div>

            <div className="address-remainder">
              <input required type="text" id="district" placeholder="Bairro" />
              <input
                required
                type="text"
                id="city"
                placeholder="Cidade"
                style={{ width: "100%" }}
              />
              <input
                required
                type="text"
                id="uf"
                placeholder="UF"
                style={{ width: "20%" }}
              />
            </div>
          </Form>
        </AddressContainer>

        <PaymentContainer>Conteúdo</PaymentContainer>
      </div>

      <div>
        <h2>Cafés selecionados</h2>
        <OrderContainer>Conteúdo</OrderContainer>
      </div>
    </CheckoutContainer>
  );
}
