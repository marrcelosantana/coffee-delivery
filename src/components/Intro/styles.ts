import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 414px) {
    margin-top: 2rem;
    .introImg {
      display: none;
    }
  }
`;

export const IntroInfo = styled.div`
  width: 36.75rem;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    font-family: "Baloo 2";
    color: ${(props) => props.theme["base-title"]};
    line-height: 3.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 2rem;
  }

  @media (max-width: 414px) {
    h1 {
      font-size: 2rem;
      line-height: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const ItemsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-items,
  .right-items {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 0.875rem;
    width: 50%;
    gap: 1rem;

    @media (max-width: 414px) {
      font-size: 0.625rem;
    }
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const BACKGROUND_ITEM_COLORS = {
  yellow: "yellow-normal",
  darkYellow: "yellow-dark",
  gray: "base-text",
  purple: "purple-normal",
} as const;

interface BackgroundItemProps {
  backgroundColor: keyof typeof BACKGROUND_ITEM_COLORS;
}

export const IconContainer = styled.div<BackgroundItemProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;

  background: ${(props) =>
    props.theme[BACKGROUND_ITEM_COLORS[props.backgroundColor]]};
`;
