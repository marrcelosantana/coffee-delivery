import styled from "styled-components";

export const SuccessContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;

  .title {
    h1 {
      color: ${(props) => props.theme["yellow-dark"]};
      font-size: 2rem;
      font-family: "Baloo 2";
    }

    p {
      font-size: 1.25rem;
      line-height: 1.625;
    }
  }
`;

export const SuccessContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrderInfo = styled.div`
  border: 1px solid ${(props) => props.theme["purple-normal"]};
  border-radius: 6px 36px;

  padding: 2.5rem;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  .description {
    p + p {
      font-weight: bold;
    }
  }
`;

const BACKGROUND_ITEM_COLORS = {
  yellow: "yellow-normal",
  darkYellow: "yellow-dark",
  purple: "purple-normal",
} as const;

interface BackgroundItemProps {
  backgroundColor: keyof typeof BACKGROUND_ITEM_COLORS;
}

export const IconContainer = styled.div<BackgroundItemProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) =>
    props.theme[BACKGROUND_ITEM_COLORS[props.backgroundColor]]};
`;
