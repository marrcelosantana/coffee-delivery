import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCartSimple } from "phosphor-react";

import {
  HeaderContainer,
  HeaderContent,
  LocationContainer,
  ShoppingCartContainer,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <HeaderContent>
        <LocationContainer>
          <MapPin size={24} weight="fill" />
          <span>Fortaleza, CE</span>
        </LocationContainer>

        <ShoppingCartContainer>
          <button type="button">
            <ShoppingCartSimple size={24} weight="fill" />
          </button>

          <div className="numberOfProducts">
            <span>3</span>
          </div>
        </ShoppingCartContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
