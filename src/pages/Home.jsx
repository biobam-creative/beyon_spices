import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import {
  Card,
  CardContent,
  CardTitle,
  CardGrid,
} from "../components/SpiceCard";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(44, 24, 16, 0.7), rgba(44, 24, 16, 0.7)),
    url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80");
  background-size: cover;
  background-position: center;
  color: ${(props) => props.theme.light};
  padding: 6rem 0;
  text-align: center;
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
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

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Testimonial = styled.blockquote`
  background-color: ${(props) => props.theme.light};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadow};
  position: relative;
  border-left: 4px solid ${(props) => props.theme.primary};
`;

const Home = () => {
  const testimonials = [
    {
      id: 1,
      text: "Beyno's berbere spice blend transformed my Ethiopian cooking. The quality and authenticity are unmatched - it tastes exactly like what I remember from Addis Ababa.",
      author: "Almaz T., Ethiopian Community London",
    },
    {
      id: 2,
      text: "As a chef, I'm always searching for authentic ingredients. Beyno's spices have elevated my African-fusion menu and my customers can taste the difference.",
      author: "Marcus D., Restaurant Owner, Birmingham",
    },
    {
      id: 3,
      text: "I love knowing that my spice purchases are supporting African farmers directly. The harissa blend is phenomenal!",
      author: "Sarah L., Home Cook, Manchester",
    },
  ];

  const features = [
    {
      id: 1,
      title: "Ethically Sourced",
      description:
        "Direct partnerships with African farmers ensuring fair wages",
    },
    {
      id: 2,
      title: "Premium Quality",
      description: "Hand-selected spices meeting the highest standards",
    },
    {
      id: 3,
      title: "Authentic Flavors",
      description: "Traditional spices used across African cuisines",
    },
    {
      id: 4,
      title: "Sustainable Practices",
      description:
        "Supporting organic agriculture and environmental responsibility",
    },
  ];

  return (
    <>
      <HeroSection>
        <Container>
          <HeroTitle>Authentic African Flavors, Ethically Sourced</HeroTitle>
          <HeroSubtitle>
            Discover the rich culinary heritage of Africa with our premium
            spices, responsibly sourced to support African farmers and
            sustainable agriculture
          </HeroSubtitle>
          <Button primary>Shop African Spices</Button>
        </Container>
      </HeroSection>

      <Section className="pattern-bg">
        <Container>
          <SectionTitle>Why Choose Beyno's African Spices?</SectionTitle>
          <CardGrid>
            {features.map((feature) => (
              <Card key={feature.id}>
                <CardContent>
                  <CardTitle>{feature.title}</CardTitle>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </CardGrid>
        </Container>
      </Section>

      <Section style={{ backgroundColor: "#f8f4e9" }}>
        <Container>
          <SectionTitle>What Our Customers Say</SectionTitle>
          <TestimonialGrid>
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.id}>
                <p>{testimonial.text}</p>
                <cite>- {testimonial.author}</cite>
              </Testimonial>
            ))}
          </TestimonialGrid>
        </Container>
      </Section>
    </>
  );
};

export default Home;
