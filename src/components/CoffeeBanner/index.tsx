import { ShoppingCartSimple, Minus, Plus } from "phosphor-react";
import { useEffect, useState } from "react";
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
  const [coffeeQuantity, setCoffeeQuantity] = useState(coffee.quantity);

  function increaseQuantity() {
    setCoffeeQuantity(coffeeQuantity + 1);
    coffee.quantity = coffeeQuantity;
  }

  function decreaseQuantity() {
    setCoffeeQuantity(coffeeQuantity - 1);
    coffee.quantity = coffeeQuantity;
  }

  useEffect(() => {
    console.log(coffee);
  }, [coffee.quantity]);

  return (
    <CardContainer>
      <img src={coffee.bannerUrl} alt="" />
      <div className="tagsContainer">
        {coffee.tags.map((tag) => (
          <div className="coffee-status" key={tag}>
            {tag}
          </div>
        ))}
      </div>
      <CoffeeInfo>
        <h2>{coffee.name}</h2>
        <p>{coffee.description}</p>
      </CoffeeInfo>

      <ActionsContainer>
        <Price>
          <p>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(coffee.price)}
          </p>
        </Price>
        <ButtonsContainer>
          <div className="number-of-coffees">
            <button disabled={coffee.quantity <= 0} onClick={decreaseQuantity}>
              <Minus weight="bold" size={14} />
            </button>
            <span>{coffee.quantity}</span>
            <button onClick={increaseQuantity}>
              <Plus weight="bold" size={14} />
            </button>
          </div>

          <Link to={`/checkout/${coffee.id}`}>
            <ShoppingCartButton>
              <ShoppingCartSimple weight="fill" color="white" size={22} />
            </ShoppingCartButton>
          </Link>
        </ButtonsContainer>
      </ActionsContainer>
    </CardContainer>
  );
}
