import introImg from "../../assets/intro-img.png";
import { ShoppingCartSimple, Timer, Package, Coffee } from "phosphor-react";

import {
  IconContainer,
  IntroContainer,
  IntroInfo,
  Item,
  ItemsContainer,
} from "./styles";

export function Intro() {
  return (
    <IntroContainer>
      <IntroInfo>
        <h1>Encontre o café perfeito para qualquer hora do dia!</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora.
        </p>

        <ItemsContainer>
          <div className="left-items">
            <Item>
              <IconContainer backgroundColor="darkYellow">
                <ShoppingCartSimple weight="fill" color="white" size={16} />
              </IconContainer>
              <span>Compra simples e segura</span>
            </Item>

            <Item>
              <IconContainer backgroundColor="yellow">
                <Timer weight="fill" color="white" size={16} />
              </IconContainer>
              <span>Entrega rápida e rastreada</span>
            </Item>
          </div>

          <div className="right-items">
            <Item>
              <IconContainer backgroundColor="gray">
                <Package weight="fill" color="white" size={16} />
              </IconContainer>
              <span>Embalagem mantém o café intacto</span>
            </Item>

            <Item>
              <IconContainer backgroundColor="purple">
                <Coffee weight="fill" color="white" size={16} />
              </IconContainer>
              <span>O café chega fresquinho até você</span>
            </Item>
          </div>
        </ItemsContainer>
      </IntroInfo>
      <img src={introImg} alt="" />
    </IntroContainer>
  );
}
