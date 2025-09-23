import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Card = styled.div`
  background-color: ${(props) => props.theme.light};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadow};
  transition: transform 0.3s ease;
  border: 1px solid ${(props) => props.theme.secondary}20;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.primary};
`;

const CardDescription = styled.p`
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};
`;

const CardPrice = styled.p`
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.secondary};
  font-size: 1.2rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SpiceCard = ({
  image,
  title,
  description,
  price,
  ingredients,
  uses,
  onButtonClick,
}) => {
  return (
    <Card>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {ingredients && (
          <div>
            <strong>Contains:</strong> {ingredients}
          </div>
        )}
        {uses && (
          <div style={{ marginTop: "0.5rem" }}>
            <strong>Uses:</strong> {uses}
          </div>
        )}
        <CardPrice>{price}</CardPrice>
        <Button primary onClick={onButtonClick}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export { Card, CardImage, CardContent, CardTitle, CardGrid };
export default SpiceCard;
