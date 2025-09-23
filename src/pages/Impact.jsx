import React from "react";
import styled from "styled-components";
import { Card, CardContent, CardTitle } from "../components/SpiceCard";

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

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const ImpactCard = styled(Card)`
  text-align: center;
  padding: 2rem;
`;

const ImpactNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
  margin-bottom: 1rem;
`;

const Impact = () => {
  const impactStats = [
    { number: "500+", label: "Farmers Supported" },
    { number: "5", label: "African Countries" },
    { number: "100%", label: "Fair Trade" },
    { number: "10,000+", label: "Customers Served" },
  ];

  return (
    <Container>
      <Section>
        <SectionTitle>Our Fair Trade Impact</SectionTitle>

        <ImpactGrid>
          {impactStats.map((stat, index) => (
            <ImpactCard key={index}>
              <CardContent>
                <ImpactNumber>{stat.number}</ImpactNumber>
                <p>{stat.label}</p>
              </CardContent>
            </ImpactCard>
          ))}
        </ImpactGrid>

        <Card>
          <CardContent>
            <CardTitle>Supporting African Communities</CardTitle>
            <p>
              Every purchase from Beyno's directly supports small-scale African
              farmers through our fair-trade partnerships. We work with farming
              cooperatives across Ghana, Ethiopia, Nigeria, Morocco, and Kenya,
              ensuring farmers receive premium prices for their high-quality
              spices.
            </p>
          </CardContent>
        </Card>

        <Card style={{ marginTop: "2rem" }}>
          <CardContent>
            <CardTitle>Sustainable Agriculture Practices</CardTitle>
            <p>
              Our partners use organic farming methods that protect soil health,
              preserve biodiversity, and maintain the traditional growing
              practices that produce the most flavorful spices.
            </p>
          </CardContent>
        </Card>
      </Section>
    </Container>
  );
};

export default Impact;
