import React from "react";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardTitle,
  CardGrid,
} from "../components/SpiceCard";

import { theme } from "../styles/theme";

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

const RecipeCard = styled(Card)`
  height: 100%;
`;

const Recipes = () => {
  const recipes = [
    {
      id: 1,
      title: "Doro Wat (Ethiopian Chicken Stew)",
      description: "Traditional Ethiopian chicken stew with berbere spice",
      region: "Ethiopian",
      difficulty: "Intermediate",
      time: "2 hours",
    },
    {
      id: 2,
      title: "Nigerian Suya Skewers",
      description: "Grilled meat skewers with authentic suya spice blend",
      region: "West African",
      difficulty: "Easy",
      time: "45 minutes",
    },
    {
      id: 3,
      title: "Moroccan Chicken Tagine",
      description:
        "Slow-cooked chicken with ras el hanout and preserved lemons",
      region: "North African",
      difficulty: "Intermediate",
      time: "3 hours",
    },
    {
      id: 4,
      title: "Pilau Rice",
      description: "Fragrant East African rice dish with pilau masala",
      region: "East African",
      difficulty: "Easy",
      time: "1 hour",
    },
  ];

  return (
    <Container>
      <Section>
        <SectionTitle>African Recipe Collection</SectionTitle>
        <p
          style={{
            textAlign: "center",
            marginBottom: "3rem",
            fontSize: "1.2rem",
          }}
        >
          Discover the rich culinary traditions of Africa with our authentic
          recipes
        </p>
        <CardGrid>
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id}>
              <CardContent>
                <CardTitle>{recipe.title}</CardTitle>
                <p>
                  <strong>Region:</strong> {recipe.region}
                </p>
                <p>
                  <strong>Difficulty:</strong> {recipe.difficulty}
                </p>
                <p>
                  <strong>Time:</strong> {recipe.time}
                </p>
                <p>{recipe.description}</p>
                <button
                  style={{
                    background: "none",
                    border: `2px solid ${theme.primary}`,
                    color: theme.primary,
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    marginTop: "1rem",
                    fontWeight: "bold",
                  }}
                >
                  View Recipe
                </button>
              </CardContent>
            </RecipeCard>
          ))}
        </CardGrid>
      </Section>
    </Container>
  );
};

export default Recipes;
