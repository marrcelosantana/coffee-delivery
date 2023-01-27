import { Minus, Plus, Trash } from "phosphor-react";
import coffeeImg from "../../assets/coffees/expresso-tradicional.png";

import {
  Actions,
  CoffeeCardContainer,
  CoffeeInfo,
  CoffeePrice,
} from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={coffeeImg} alt="" className="coffee-image" />

      <CoffeeInfo>
        <div>
          <span className="title">Expresso Tradicional</span>
          <Actions>
            <div className="number-of-coffees">
              <button>
                <Minus weight="bold" size={12} />
              </button>
              <span>1</span>
              <button>
                <Plus weight="bold" size={12} />
              </button>
            </div>

            <div className="remove-coffee">
              <button>
                <Trash size={14} color="#8047F8" />
                <span>REMOVER</span>
              </button>
            </div>
          </Actions>
        </div>
      </CoffeeInfo>

      <CoffeePrice>
        <span className="coffee-price">R$ 9,90</span>
      </CoffeePrice>
    </CoffeeCardContainer>
  );
}
