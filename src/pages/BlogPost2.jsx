import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";

// Reuse the same styled components from BlogPost1.js
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.section`
  padding: 2rem 0;
`;

const Breadcrumb = styled.nav`
  margin-bottom: 2rem;
  font-size: 0.9rem;

  a {
    color: ${(props) => props.theme.primary};

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ArticleHeader = styled.header`
  text-align: center;
  margin-bottom: 3rem;
`;

const ArticleTitle = styled.h1`
  font-size: 2.5rem;
  color: ${(props) => props.theme.primary};
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  color: ${(props) => props.theme.accent};
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin: 2rem 0;
`;

const ArticleContent = styled.article`
  line-height: 1.8;
  font-size: 1.1rem;

  h2 {
    color: ${(props) => props.theme.primary};
    margin: 2.5rem 0 1rem 0;
    font-size: 1.8rem;
  }

  h3 {
    color: ${(props) => props.theme.secondary};
    margin: 2rem 0 1rem 0;
    font-size: 1.4rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul,
  ol {
    margin: 1.5rem 0;
    padding-left: 2rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  blockquote {
    border-left: 4px solid ${(props) => props.theme.primary};
    padding-left: 1.5rem;
    margin: 2rem 0;
    font-style: italic;
    color: ${(props) => props.theme.secondary};
  }
`;

const CTASection = styled.div`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.primary}15,
    ${(props) => props.theme.accent}15
  );
  padding: 3rem;
  border-radius: 12px;
  text-align: center;
  margin: 3rem 0;
  border: 2px solid ${(props) => props.theme.primary}20;
`;

const BlogPost2 = () => {
  return (
    <Container>
      <Section>
        <Breadcrumb>
          <Link to="/">Home</Link> &gt; <Link to="/blog">Blog</Link> &gt;
          Current Article
        </Breadcrumb>

        <ArticleHeader>
          <ArticleTitle>
            The Real Story Behind Your Spices: Why Fair Trade Matters in African
            Agriculture
          </ArticleTitle>
          <ArticleMeta>
            <span>March 10, 2024</span>
            <span>•</span>
            <span>10 min read</span>
            <span>•</span>
            <span>Culture</span>
          </ArticleMeta>
        </ArticleHeader>

        <ArticleImage
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="Nigerian community gathering"
        />

        <ArticleContent>
          <p>
            Pick up that jar of spices in your kitchen. Cumin, perhaps, or
            coriander. Now ask yourself: where did this actually come from? Who
            grew it? What did they earn for their work? How did it travel from a
            farm somewhere to your kitchen cabinet?
          </p>

          <p>
            For most of us, these questions never arise. Spices appear in
            supermarkets, affordable and abundant, and we buy them without
            thinking much about their origins. But behind every jar of spices
            lies a story, and for African spice farmers, that story isn't always
            a happy one.
          </p>

          <p>
            Today, we're looking at the real journey of spices from African
            farms to UK kitchens, and why fair trade practices aren't just
            feel-good marketing but essential for the survival of traditional
            spice farming.
          </p>

          <h2>The Traditional Spice Trade Problem</h2>
          <p>
            Let's start with how the conventional spice trade actually works.
            It's not pretty, and it's not fair.
          </p>

          <p>
            Most African spice farmers are small-scale producers working family
            land passed down through generations. They grow spices using
            traditional methods, knowledge accumulated over centuries. Their
            work is skilled, labor intensive, and produces the high-quality
            spices that give African cuisine its distinctive character.
          </p>
          <p>
            But here's where the system breaks down. These farmers rarely sell
            directly to companies or consumers. Instead, they sell to local
            middlemen who visit farming villages offering cash for harvested
            spices. These middlemen know farmers need money immediately, they
            have no storage facilities for harvested crops, they lack
            transportation to reach better markets, and they have no information
            about actual market prices in cities or internationally.
          </p>
          <p>
            So the middlemen offer prices far below fair value. Farmers, having
            no alternatives, accept. The middlemen then sell to regional traders
            at higher prices. Those traders sell to exporters at even higher
            prices. The exporters sell to international distributors, who sell
            to retailers, who sell to you.
          </p>

          <p>
            By the time your jar of spices reaches your kitchen, its price has
            increased perhaps ten or fifteen times from what the farmer
            received. Yet the farmer, who did the actual work of growing,
            harvesting, and processing the spices, captured only a tiny fraction
            of that final value.
          </p>
          <p>
            This system has persisted for decades, keeping spice farming
            families in poverty despite producing valuable crops. Many farming
            communities lack access to clean water, healthcare, or education for
            their children, not because they're not working hard enough, but
            because they're trapped in an exploitative supply chain.
          </p>

          <h2>What Fair Trade Actually Means</h2>
          <p>
            Fair trade is often misunderstood as charity or simply paying
            slightly higher prices. It's neither. Fair trade is a different
            business model built on partnership rather than exploitation.
          </p>
          <p>
            In fair trade spice sourcing, companies work directly with farmer
            cooperatives, cutting out the exploitative middlemen. Farmers
            receive guaranteed minimum prices that cover their production costs
            plus a living wage. These aren't charity payments, they're fair
            compensation for skilled work and quality products.
          </p>
          <p>
            But fair trade goes beyond pricing. It includes long-term purchasing
            commitments so farmers can plan for the future rather than living
            harvest to harvest. It provides advance payments when needed, so
            farmers aren't forced to sell immediately at low prices. It offers
            technical support for improving quality and yields sustainably. And
            it ensures safe working conditions and prohibits child labor or
            forced labor.
          </p>

          <p>
            Perhaps most importantly, fair trade includes a social premium,
            additional money paid to farmer cooperatives for community
            development projects. These communities democratically decide how to
            use these funds, typically investing in schools, healthcare clinics,
            clean water infrastructure, or agricultural improvements.
          </p>
          <p>
            This isn't theory. These practices create measurable improvements in
            farming communities. Children attend school instead of working in
            fields. Families access healthcare. Communities build
            infrastructure. Farmers invest in better processing equipment,
            improving both quality and efficiency.
          </p>

          <h2>The Real Impact on Farming Families</h2>
          <p>
            Let me share what fair trade looks like in practice, based on
            partnerships with African spice farming cooperatives.
          </p>
          <p>
            In Ethiopia, a berbere spice farming cooperative used fair trade
            premiums to build a processing facility. Previously, farmers
            processed spices in their homes, limiting quality control and
            production capacity. The new facility provides clean, efficient
            processing space, improving spice quality significantly. This
            improvement allowed the cooperative to access premium markets,
            increasing farmer incomes by 40% over three years.
          </p>
          <p>
            The same cooperative used additional premium funds to establish a
            community school. Previously, children walked five kilometers to the
            nearest school, many dropping out due to distance and costs. Now,
            local children attend school in their own village, and graduation
            rates have tripled.
          </p>

          <p>
            In Ghana, a farming cooperative growing grains of paradise used fair
            trade relationships to invest in sustainable farming training. They
            learned techniques for improving soil health, managing pests without
            harmful chemicals, and increasing yields naturally. Within two
            years, yields increased by 25% while environmental impact decreased.
            Farmers earned more while protecting the land they'll pass to their
            children.
          </p>
          <p>
            In Nigeria, uziza seed producers used fair trade premiums to
            establish a women's empowerment program. Women in the community, who
            do much of the actual spice harvesting and processing work, received
            business training and micro-loans. Many started small enterprises,
            creating additional income sources beyond farming. This economic
            diversification provided stability when crop yields varied due to
            weather.
          </p>
          <p>
            These aren't exceptional cases. They're typical results when fair
            trade principles are genuinely applied. The improvements compound
            over time as communities reinvest in education, health, and
            agricultural development.
          </p>

          <h2>Environmental Benefits Nobody Talks About</h2>
          <p>
            Fair trade spice sourcing also creates environmental benefits that
            conventional supply chains ignore.
          </p>
          <p>
            Small-scale African spice farmers typically use traditional growing
            methods that are inherently more sustainable than industrial
            agriculture. They grow spices alongside other crops in biodiverse
            systems. They use organic fertilizers and natural pest management.
            They protect native plant varieties. They maintain soil health
            through rotation and rest periods.
          </p>
          <p>
            But these sustainable practices only continue when farming is
            economically viable. When farmers earn poverty wages, they're forced
            to maximize short-term yields even if it degrades their land. They
            can't afford to let fields rest or invest in soil improvement. They
            must prioritize immediate survival over long-term sustainability.
          </p>

          <p>
            Fair trade pricing makes sustainable farming economically feasible.
            Farmers can afford to rotate crops properly, maintain biodiversity,
            and protect soil health because they're earning enough to survive
            without exploiting every inch of land constantly.
          </p>
          <p>
            Additionally, many fair trade cooperatives invest social premiums in
            environmental projects like reforestation, water conservation, and
            renewable energy. These investments benefit entire ecosystems, not
            just individual farms.
          </p>

          <h2>How Consumers Make a Difference</h2>
          <p>
            You might think, "This all sounds great, but what can I possibly do
            as one person buying spices?"
          </p>
          <p>
            The conventional spice supply chain persists because it's profitable
            for everyone except farmers. Middlemen, traders, exporters,
            distributors, and retailers all make money from the current system.
            Change only happens when consumers demand it.
          </p>
          <p>
            When you choose fair trade spices, you're doing several things.
            You're providing direct market demand for ethically sourced
            products. You're supporting companies that build alternative supply
            chains. You're demonstrating that consumers will pay fair prices for
            products produced ethically. And you're creating competitive
            pressure on conventional suppliers to improve their practices.
          </p>

          <p>
            This isn't theoretical. Over the past decade, consumer demand for
            ethical coffee transformed that industry. Many coffee farmers now
            receive fair wages and work in better conditions because consumers
            insisted on it. The same transformation can happen in spice markets
            when consumers make informed choices.
          </p>
          <p>
            Beyond purchasing, you can amplify impact by talking about these
            issues. Share information about spice sourcing with friends and
            family. Ask restaurants about their spice suppliers. Request fair
            trade options at supermarkets. Consumer advocacy creates pressure
            that changes industries.
          </p>

          <h2>Moving Forward</h2>
          <p>
            The spice trade doesn't have to be exploitative. Alternative models
            exist and work effectively. Fair trade proves that businesses can
            profit while treating farmers fairly and supporting sustainable
            agriculture.
          </p>
          <p>
            As consumers, we hold more power than we often realize. Every
            purchase is a vote for the kind of world we want to create. Choosing
            fair trade spices means voting for farmer dignity, sustainable
            agriculture, and community development.
          </p>
          <p>
            This isn't about guilt or obligation. It's about recognition that
            our food connects us to people and places around the world. When
            those connections are exploitative, everyone loses. When they're
            built on fairness and respect, everyone benefits, including us,
            because we get better products from sustainable sources.
          </p>

          <p>
            Next time you reach for spices, consider their story. Ask where they
            came from and who grew them. Choose products from companies
            transparent about their sourcing. Support businesses building fair
            relationships with African farmers.
          </p>
          <p>
            Your kitchen can be a place where ethics and flavor come together,
            where every meal you cook supports positive change in African
            farming communities. That's the real power of fair trade, turning
            everyday purchases into meaningful impact.
          </p>
        </ArticleContent>

        <CTASection>
          <h2
            style={{
              color: (props) => props.theme.primary,
              marginBottom: "1rem",
            }}
          >
            {/* Never Miss Saturday Morning Bread Again */}
          </h2>
          <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
            Ready to make every meal count? Explore our collection of ethically
            sourced African spices. Every purchase supports fair wages for
            African farmers and sustainable agriculture practices. Taste the
            difference that fairness makes.
          </p>
          <Button primary size="large" style={{ marginRight: "1rem" }}>
            Order for Our Tasty Spices
          </Button>
          <Button>Learn About Subscriptions</Button>
        </CTASection>
      </Section>
    </Container>
  );
};

export default BlogPost2;
