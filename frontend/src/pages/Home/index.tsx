import { CoffeeBanner } from "../../components/CoffeeBanner";
import { Intro } from "../../components/Intro";
import { HomeContainer, ListCardContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <ListCardContainer>
        <h1>Nossos cafés</h1>
        <div className="list">
          <CoffeeBanner />
          <CoffeeBanner />
          <CoffeeBanner />
          <CoffeeBanner />
          <CoffeeBanner />
          <CoffeeBanner />
          <CoffeeBanner />
          <CoffeeBanner />
        </div>
      </ListCardContainer>
    </HomeContainer>
  );
}
