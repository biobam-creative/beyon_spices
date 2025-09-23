import React from "react";
import styled from "styled-components";
import SpiceCard, { CardGrid } from "../components/SpiceCard";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.primary};
`;

const RegionTitle = styled.h3`
  font-size: 2rem;
  color: ${(props) => props.theme.secondary};
  margin: 3rem 0 1.5rem;
  border-bottom: 2px solid ${(props) => props.theme.primary};
  padding-bottom: 0.5rem;
`;

const Products = () => {
  const spiceCategories = {
    ethiopian: [
      {
        id: 1,
        name: "Berbere Spice Blend",
        description:
          "Traditional Ethiopian spice mix with complex heat and depth",
        ingredients:
          "Bird's eye chili, fenugreek, coriander, cardamom, nigella, and more",
        uses: "Perfect for doro wat, vegetarian stews, meat marinades",
        price: "£8.50 per 100g jar",
        image:
          "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
      {
        id: 2,
        name: "Mitmita Blend",
        description: "Fiery Ethiopian seasoning for traditional dishes",
        ingredients: "Bird's eye chili, cardamom, cloves, cinnamon",
        uses: "Kitfo (Ethiopian steak tartare), lentil dishes",
        price: "£7.50 per 50g jar",
        image:
          "https://images.unsplash.com/photo-1598615434895-68a81ce7d56e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ],
    westAfrican: [
      {
        id: 3,
        name: "Suya Spice Mix",
        description: "Nigerian street food seasoning blend",
        ingredients: "Groundnuts, ginger, garlic, chili, onion powder",
        uses: "Grilled meats, roasted vegetables, snack seasoning",
        price: "£6.00 per 75g jar",
        image:
          "https://images.unsplash.com/photo-1594048504379-5f5e3ad65b4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      },
    ],
  };

  const handleAddToCart = (productId) => {
    alert(`Added product ${productId} to cart!`);
  };

  return (
    <Container>
      <Section>
        <SectionTitle>Our African Spice Collection</SectionTitle>

        <RegionTitle>Ethiopian Spice Blends</RegionTitle>
        <CardGrid>
          {spiceCategories.ethiopian.map((product) => (
            <SpiceCard
              key={product.id}
              image={product.image}
              title={product.name}
              description={product.description}
              ingredients={product.ingredients}
              uses={product.uses}
              price={product.price}
              onButtonClick={() => handleAddToCart(product.id)}
            />
          ))}
        </CardGrid>

        <RegionTitle>West African Specialties</RegionTitle>
        <CardGrid>
          {spiceCategories.westAfrican.map((product) => (
            <SpiceCard
              key={product.id}
              image={product.image}
              title={product.name}
              description={product.description}
              ingredients={product.ingredients}
              uses={product.uses}
              price={product.price}
              onButtonClick={() => handleAddToCart(product.id)}
            />
          ))}
        </CardGrid>
      </Section>
    </Container>
  );
};

export default Products;
