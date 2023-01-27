import { ShoppingCartSimple, Minus, Plus } from "phosphor-react";
import { Link } from "react-router-dom";
import { Coffee } from "../../models/Coffee";

import {
  ActionsContainer,
  ButtonsContainer,
  CardContainer,
  CoffeeInfo,
  Price,
  ShoppingCartButton,
} from "./styles";

interface CoffeeBannerProps {
  coffee: Coffee;
}

export function CoffeeBanner({ coffee }: CoffeeBannerProps) {
  return (
    <CardContainer>
      <img src={coffee.bannerUrl} alt="" />
      <div className="coffee-status">{coffee.tags[0]}</div>
      <CoffeeInfo>
        <h2>{coffee.name}</h2>
        <p>{coffee.description}</p>
      </CoffeeInfo>

      <ActionsContainer>
        <Price>
          <span>R$</span>
          <p>{coffee.price}</p>
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

          <Link to="/checkout">
            <ShoppingCartButton>
              <ShoppingCartSimple weight="fill" color="white" size={22} />
            </ShoppingCartButton>
          </Link>
        </ButtonsContainer>
      </ActionsContainer>
    </CardContainer>
  );
}
