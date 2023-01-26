import { MapPin, Timer, CurrencyDollar } from "phosphor-react";
import successImg from "../../assets/illustration.png";

import {
  IconContainer,
  Info,
  OrderInfo,
  SuccessContainer,
  SuccessContent,
} from "./styles";

export function Success() {
  return (
    <SuccessContainer>
      <div className="title">
        <h1>Uhu! Pedido confirmado.</h1>
        <p>Agora é só aguardar que logo o café chegará até você.</p>
      </div>

      <SuccessContent>
        <OrderInfo>
          <Info>
            <IconContainer backgroundColor="purple">
              <MapPin size={16} weight="fill" />
            </IconContainer>
            <div className="description">
              <p>
                Entrega em{" "}
                <span style={{ fontWeight: "bold" }}>
                  Rua João Daniel Martinelli, 102
                </span>{" "}
              </p>
              <p style={{ fontWeight: "400" }}>Farrapos - Porto Alegre, RS</p>
            </div>
          </Info>

          <Info>
            <IconContainer backgroundColor="yellow">
              <Timer size={16} weight="fill" />
            </IconContainer>
            <div className="description">
              <p>Previsão de entrega:</p>
              <p>20 min - 30 min</p>
            </div>
          </Info>

          <Info>
            <IconContainer backgroundColor="darkYellow">
              <CurrencyDollar size={16} weight="fill" />
            </IconContainer>
            <div className="description">
              <p>Pagamento na entrega</p>
              <p>Cartão de crédito</p>
            </div>
          </Info>
        </OrderInfo>

        <img src={successImg} alt="" />
      </SuccessContent>
    </SuccessContainer>
  );
}
