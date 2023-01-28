import { CoffeeBanner } from "../../components/CoffeeBanner";
import { Intro } from "../../components/Intro";
import { coffees } from "../../server";

import { HomeContainer, ListCardContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <ListCardContainer>
        <h1>Nossos cafés</h1>
        <div className="list">
          {coffees.map((coffee) => (
            <CoffeeBanner coffee={coffee} key={coffee.id} />
          ))}
        </div>
      </ListCardContainer>
    </HomeContainer>
  );
}
