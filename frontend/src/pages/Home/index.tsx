import { CoffeeCard } from "../../components/CoffeeCard";
import { Intro } from "../../components/Intro";
import { HomeContainer, ListCardContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <ListCardContainer>
        <h1>Nossos cafés</h1>
        <div className="list">
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </ListCardContainer>
    </HomeContainer>
  );
}
