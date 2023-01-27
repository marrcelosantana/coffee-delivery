import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCartSimple } from "phosphor-react";

import {
  HeaderContainer,
  HeaderContent,
  LocationContainer,
  ShoppingCartContainer,
} from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <HeaderContent>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <span>Fortaleza, CE</span>
        </LocationContainer>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <ShoppingCartContainer>
            <button type="button">
              <ShoppingCartSimple size={22} weight="fill" />
            </button>

            <div className="numberOfProducts">
              <span>3</span>
            </div>
          </ShoppingCartContainer>
        </Link>
      </HeaderContent>
    </HeaderContainer>
  );
}
