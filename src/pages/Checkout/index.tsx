import {
  MapPin,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from "phosphor-react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CoffeeCard } from "../../components/CoffeeCard";

import {
  AddressContainer,
  CheckoutContainer,
  OrderContainer,
  Info,
  Form,
  PaymentContainer,
  PaymentMethods,
  Footer,
} from "./styles";

type CoffeeParams = {
  id: string;
};

export function Checkout() {
  const params = useParams<CoffeeParams>();

  useEffect(() => {
    console.log("Checkout ID: " + params.id);
  });

  return (
    <CheckoutContainer>
      <div>
        <h2>Complete seu pedido</h2>

        <AddressContainer>
          <Info>
            <MapPin size={22} />
            <div className="description">
              <h5>Endereço de entrega</h5>
              <p>Informe o endereço onde deseja receber o pedido.</p>
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
                placeholder="Complemento (Opcional)"
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

        <PaymentContainer>
          <Info>
            <CurrencyDollar size={22} color="#4B2995" />
            <div className="description">
              <h5>Pagamento</h5>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar.
              </p>
            </div>
          </Info>

          <PaymentMethods>
            <div>
              <CreditCard size={14} color="#4B2995" />
              <span>CARTÃO DE CRÉDITO</span>
            </div>

            <div>
              <Bank size={14} color="#4B2995" />
              <span>CARTÃO DE DÉBITO</span>
            </div>

            <div>
              <Money size={14} color="#4B2995" />
              <span>DINHEIRO</span>
            </div>
          </PaymentMethods>
        </PaymentContainer>
      </div>

      <div>
        <h2>Cafés selecionados</h2>

        <OrderContainer>
          <CoffeeCard />
          <div className="divider" />

          <CoffeeCard />
          <div className="divider" />

          <Footer>
            <div className="total-items">
              <span>Total de itens</span>
              <span>R$ 19,80</span>
            </div>

            <div className="delivery">
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div className="final-total">
              <span>Total</span>
              <span>R$ 23,30</span>
            </div>

            <Link
              to={`/success/${params.id}`}
              style={{ textDecoration: "none" }}
            >
              <button>CONFIRMAR PEDIDO</button>
            </Link>
          </Footer>
        </OrderContainer>
      </div>
    </CheckoutContainer>
  );
}
