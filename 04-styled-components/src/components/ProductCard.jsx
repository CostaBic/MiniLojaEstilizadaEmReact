import styled from "styled-components";
import { colors, spacing } from "../styles/tokens";
import Button from "./Button.jsx";

const Card = styled.div`
  background-color: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 1rem;
  transition: transform 0.2s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ImgWrap = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const Img = styled.img`
  max-width: 100%;
  height: 180px;
  object-fit: contain;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const Tag = styled.span`
  font-size: 0.7rem;
  font-weight: bold;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  ${({ type }) =>
    type === "promo" &&
    `
      background: #ff4d4d;
      color: #fff;
    `}
  ${({ type }) =>
    type === "new" &&
    `
      background: #4caf50;
      color: #fff;
    `}
`;

const Title = styled.h3`
  font-size: 0.9rem;
  margin: 0.5rem 0;
  min-height: 40px;
`;

const PriceRatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Price = styled.span`
  font-weight: bold;
`;

const Rating = styled.span`
  font-size: 0.8rem;
  color: rgb(133, 133, 133);
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export default function ProductCard({ product, onAddToCart }) {
  const { title, price, image, tag, rating } = product;

  return (
    <Card>
      <ImgWrap>
        <Img src={image} alt={title} />
      </ImgWrap>

      <Meta>
        {tag && <Tag type={tag.toLowerCase()}>{tag}</Tag>}
      </Meta>

      <Title>{title}</Title>

      <PriceRatingContainer>
        <Price>R${price.toFixed(2)}</Price>
        <Rating>⭐ {rating}</Rating>
      </PriceRatingContainer>

      <CardFooter>
        <Button label="Adicionar" onClick={onAddToCart} variant="solid" />
        <Button
          label="Ver detalhes"
          onClick={() => console.log("Ver detalhes:", title)}
          variant="outline"
        />
      </CardFooter>
    </Card>
  );
}
