import React from "react";
import styled from "styled-components";
import {
  Card,
  CardContent,
  CardTitle,
  CardGrid,
} from "../components/SpiceCard";

import founder from "../assets/founder.jpg";

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

const HeroSection = styled.section`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.primary}15,
    ${(props) => props.theme.accent}15
  );
  padding: 4rem 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.primary};
  margin-bottom: 1rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  color: ${(props) => props.theme.secondary};
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const ValueCard = styled(Card)`
  text-align: center;
  padding: 2rem 1.5rem;
  border-top: 4px solid ${(props) => props.theme.primary};
`;

const ValueIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.primary};
`;

const ValueTitle = styled.h3`
  color: ${(props) => props.theme.primary};
  margin-bottom: 1rem;
`;

const Timeline = styled.div`
  position: relative;
  margin: 3rem 0;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${(props) => props.theme.primary};
    border-radius: 2px;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: -1rem;
    top: 0.5rem;
    width: 12px;
    height: 12px;
    background: ${(props) => props.theme.primary};
    border-radius: 50%;
    border: 3px solid ${(props) => props.theme.light};
  }
`;

const TimelineYear = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const ImpactStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  text-align: center;
`;

const StatItem = styled.div`
  padding: 2rem 1rem;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: ${(props) => props.theme.secondary};
  font-weight: 600;
`;

const FounderSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  align-items: center;
  margin: 3rem 0;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FounderImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.accent}
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  margin: 0 auto;
`;

const About = () => {
  const coreValues = [
    {
      icon: "🤝",
      title: "Ethical Sourcing",
      description: "Fair wages and working conditions for all partners",
    },
    {
      icon: "⭐",
      title: "Quality Excellence",
      description: "Only the finest, hand-selected spices reach our customers",
    },
    {
      icon: "🌍",
      title: "Cultural Authenticity",
      description:
        "Preserving traditional spice knowledge and preparation methods",
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description:
        "Supporting organic and environmentally responsible farming practices",
    },
    {
      icon: "👥",
      title: "Community Impact",
      description:
        "Building lasting relationships that benefit African farming communities",
    },
    {
      icon: "📚",
      title: "Education",
      description: "Teaching UK consumers about African culinary traditions",
    },
  ];

  const milestones = [
    {
      year: "2023",
      event:
        "Established partnerships with organic spice farmers across five African countries",
    },
    {
      year: "2023",
      event: "Developed direct-trade relationships ensuring fair pricing",
    },
    {
      year: "2023",
      event: "Launched quality control processes maintaining premium standards",
    },
    {
      year: "2023",
      event: "Created educational content about African spice traditions",
    },
    {
      year: "2023",
      event: "Built supply chain infrastructure for UK distribution",
    },
  ];

  const impactStats = [
    { number: "5", label: "African Countries" },
    { number: "500+", label: "Farmers Supported" },
    { number: "100%", label: "Fair Trade" },
    { number: "Organic", label: "Farming Practices" },
  ];

  return (
    <Container>
      <HeroSection className="pattern-bg">
        <HeroTitle>Our Story</HeroTitle>
        <HeroSubtitle>
          Beyno's African Spice Company was founded on the belief that food has
          the power to connect cultures while creating positive social impact.
          Named after the traditional African concept of "Beyno" meaning
          community and togetherness, our company bridges the gap between
          African spice producers and UK consumers who crave authentic flavors.
        </HeroSubtitle>
      </HeroSection>

      <Section>
        <SectionTitle>Our Mission & Vision</SectionTitle>
        <CardGrid>
          <Card>
            <CardContent>
              <CardTitle>Our Mission</CardTitle>
              <p>
                To introduce the rich variety of African spice flavors to UK
                kitchens while guaranteeing premium quality and fair production
                practices that support African farmers and encourage sustainable
                agriculture.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardTitle>Our Vision</CardTitle>
              <p>
                To become the UK's leading supplier of ethically sourced African
                spices, creating a sustainable supply chain that benefits both
                consumers seeking authentic flavors and African farming
                communities seeking fair economic opportunities.
              </p>
            </CardContent>
          </Card>
        </CardGrid>
      </Section>

      <Section style={{ backgroundColor: "#f8f4e9" }}>
        <SectionTitle>Our Core Values</SectionTitle>
        <ValuesGrid>
          {coreValues.map((value, index) => (
            <ValueCard key={index}>
              <ValueIcon>{value.icon}</ValueIcon>
              <ValueTitle>{value.title}</ValueTitle>
              <p>{value.description}</p>
            </ValueCard>
          ))}
        </ValuesGrid>
      </Section>

      <Section>
        <SectionTitle>Our Impact</SectionTitle>

        <ImpactStats>
          {impactStats.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </ImpactStats>

        <CardGrid>
          <Card>
            <CardContent>
              <CardTitle>Supporting African Communities</CardTitle>
              <p>
                Every purchase from Beyno's directly supports small-scale
                African farmers through our fair-trade partnerships. We work
                with farming cooperatives across Ghana, Ethiopia, Nigeria,
                Morocco, and Kenya, ensuring farmers receive premium prices for
                their high-quality spices.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardTitle>Sustainable Agriculture Practices</CardTitle>
              <p>
                Our partners use organic farming methods that protect soil
                health, preserve biodiversity, and maintain the traditional
                growing practices that produce the most flavorful spices.
              </p>
            </CardContent>
          </Card>
        </CardGrid>
      </Section>

      <Section style={{ backgroundColor: "#f8f4e9" }}>
        <SectionTitle>Founder & Leadership Team</SectionTitle>
        <FounderSection>
          <FounderImage>
            <img
              src={founder}
              style={{ height: "180px", width: "180px", borderRadius: "50%" }}
            />
          </FounderImage>
          <div>
            <h3
              style={{
                color: (props) => props.theme.primary,
                marginBottom: "1rem",
              }}
            >
              Founder & CEO
            </h3>
            <p>
              With deep roots in African culinary traditions and a passion for
              ethical business practices, our founder established Beyno's to
              share the incredible diversity of African spices while ensuring
              the farmers who grow them receive fair compensation for their
              expertise and labor.
            </p>
            <p>
              The name "Beyno" reflects our commitment to community and
              togetherness - values that guide every aspect of our business from
              farmer relationships to customer service.
            </p>
          </div>
        </FounderSection>
      </Section>

      <Section>
        <SectionTitle>Our Journey</SectionTitle>
        <Timeline>
          {milestones.map((milestone, index) => (
            <TimelineItem key={index}>
              <TimelineYear>{milestone.year}</TimelineYear>
              <p>{milestone.event}</p>
            </TimelineItem>
          ))}
        </Timeline>
      </Section>

      <Section style={{ backgroundColor: "#f8f4e9" }}>
        <SectionTitle>Why Choose Beyno's?</SectionTitle>
        <CardGrid>
          <Card>
            <CardContent>
              <CardTitle>Authentic African Flavors</CardTitle>
              <p>
                We bring you the true taste of Africa with spices sourced
                directly from their regions of origin, preserving traditional
                flavors and preparation methods.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardTitle>Ethical Supply Chain</CardTitle>
              <p>
                Our direct partnerships with African farmers ensure fair wages
                and support sustainable agricultural practices that benefit both
                people and planet.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardTitle>Premium Quality</CardTitle>
              <p>
                Every spice is hand-selected and undergoes rigorous quality
                control to meet the highest standards of freshness and flavor.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <CardTitle>Cultural Connection</CardTitle>
              <p>
                We're more than a spice company - we're a bridge between
                cultures, sharing the rich culinary heritage of Africa with UK
                kitchens.
              </p>
            </CardContent>
          </Card>
        </CardGrid>
      </Section>
    </Container>
  );
};

export default About;
