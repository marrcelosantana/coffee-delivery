import coffeImg from "../../assets/coffees/expresso-tradicional.png";
import { ShoppingCartSimple, Minus, Plus } from "phosphor-react";

import {
  ActionsContainer,
  ButtonsContainer,
  CardContainer,
  CoffeeInfo,
  Price,
  ShoppingCartButton,
} from "./styles";

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src={coffeImg} alt="" />
      <div className="coffee-status">TRADICIONAL</div>
      <CoffeeInfo>
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </CoffeeInfo>

      <ActionsContainer>
        <Price>
          <span>R$</span>
          <p>9,90</p>
        </Price>
        <ButtonsContainer>
          <div className="number-of-coffees">
            <button>
              <Minus weight="bold" size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus weight="bold" size={14} />
            </button>
          </div>
          <ShoppingCartButton>
            <ShoppingCartSimple weight="fill" color="white" size={22} />
          </ShoppingCartButton>
        </ButtonsContainer>
      </ActionsContainer>
    </CardContainer>
  );
}
