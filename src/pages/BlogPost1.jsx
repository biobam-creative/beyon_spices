import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/Button";

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
  color: ${(props) => props.theme.secondary};
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

const BlogPost1 = () => {
  return (
    <Container>
      <Section>
        <Breadcrumb>
          <Link to="/">Home</Link> &gt; <Link to="/blog">Blog</Link> &gt;
          Current Article
        </Breadcrumb>

        <ArticleHeader>
          <ArticleTitle>
            5 African Spices You've Never Heard Of (But Your Kitchen Desperately
            Needs){" "}
          </ArticleTitle>
          <ArticleMeta>
            <span>March 15, 2024</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>Food Science</span>
          </ArticleMeta>
        </ArticleHeader>

        <ArticleImage
          src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
          alt="Fresh Nigerian bread on traditional fabric"
        />

        <ArticleContent>
          <p>
            Your spice cabinet probably looks like most British kitchens: black
            pepper, cumin, paprika, maybe some turmeric if you're adventurous.
            These are good spices, useful spices. But they're also safe spices,
            the ones everyone knows and uses. Meanwhile, an entire continent of
            extraordinary flavors sits undiscovered in most UK kitchens.
          </p>

          <p>
            African spices have been transforming meals for thousands of years,
            yet many remain virtually unknown outside their home regions. Today,
            we're introducing you to five African spices that will revolutionize
            your cooking and make you wonder why you waited so long to discover
            them.
          </p>

          <h2>Grains of Paradise (West Africa's Secret Weapon)</h2>

          <p>
            If black pepper and ginger had a sophisticated, complex cousin, it
            would be grains of paradise. This West African spice comes from
            seeds of a plant related to ginger, and it delivers a flavor
            experience that's hard to describe but impossible to forget.
          </p>

          <p>
            The taste starts with a peppery bite, then develops warm citrus
            notes, followed by hints of cardamom and ginger. It's spicy without
            being overwhelming, aromatic without being perfumy. Medieval
            Europeans prized grains of paradise so highly that it was literally
            worth its weight in gold, traded along spice routes as a luxury
            item.
          </p>

          <p>
            In traditional West African cooking, particularly in Ghana and
            Nigeria, grains of paradise seasons everything from soups to grilled
            meats. But here's where it gets interesting for modern UK cooks:
            this spice works beautifully in dishes you already make. Try it in
            roasted vegetables, rub it on chicken before grilling, or add a
            pinch to chocolate desserts for unexpected depth. It elevates gin
            and tonics remarkably well too.
          </p>

          <p>
            Why you've never heard of it: After the spice trade routes shifted
            and black pepper became cheaper and more available, grains of
            paradise faded from European cooking. It never disappeared from
            African kitchens, though, where it remained essential to traditional
            recipes.
          </p>

          <h3>Uziza Seeds (Nigeria's Flavor Powerhouse)</h3>
          <p>
            Imagine black pepper's bold, confident sibling who also happens to
            be slightly sweet and incredibly aromatic. That's uziza seeds. These
            small, dark seeds come from a West African plant and deliver a
            flavor that British spice cabinets simply cannot replicate with
            anything else
          </p>

          <p>
            Uziza has a peppery heat that builds gradually rather than hitting
            immediately. Behind that heat, you'll detect notes of bitter
            chocolate, slight sweetness, and an almost menthol-like freshness.
            It's complex, distinctive, and absolutely addictive once you start
            cooking with it.
          </p>
          <p>
            In Nigerian cuisine, uziza seeds are essential for pepper soups,
            traditional stews, and grilled fish dishes. The seeds are typically
            ground or crushed before use, releasing their aromatic oils. For UK
            cooks, uziza works wonderfully in beef stews, adds dimension to
            tomato-based sauces, and transforms simple grilled meats into
            something memorable.
          </p>
          <p>
            One British chef I know uses uziza in her Sunday roast seasoning and
            swears it's the secret to the compliments she receives. Another
            grinds it into barbecue rubs for summer grilling. Once you
            understand its flavor profile, you'll find yourself reaching for it
            constantly.
          </p>
          <p>
            Why you've never heard of it: Uziza remains primarily a West African
            specialty, little known outside Nigerian and broader African
            communities. It hasn't been commercialized internationally the way
            more familiar spices have, so it stays relatively hidden despite its
            incredible flavor.
          </p>

          <h3>Ethiopian Long Pepper (The Original Black Pepper)</h3>
          <p>
            Before black pepper dominated global spice markets, long pepper was
            the pepper of choice across ancient civilizations from Rome to India
            to Ethiopia. Ethiopian long pepper specifically offers a flavor
            experience that makes regular black pepper seem one-dimensional by
            comparison.
          </p>

          <p>
            Long pepper looks different from the round peppercorns you know. It
            grows in slender, cone-shaped spikes that you can grind whole or
            break apart. The flavor starts hot like black pepper but quickly
            develops sweet, almost chocolatey notes with hints of spice cake and
            nutmeg. It's warming, complex, and incredibly satisfying.
          </p>
          <p>
            In Ethiopian cooking, long pepper appears in berbere spice blends
            and traditional stews. It's one of the secret ingredients that gives
            Ethiopian food its distinctive, layered flavor profile. For everyday
            cooking, try substituting long pepper for black pepper in rich
            dishes like beef stews, chocolate desserts, or even your morning
            coffee for an exotic twist.
          </p>
          <p>
            The sweetness in long pepper means it pairs exceptionally well with
            fruits. Try it on strawberries, pineapple, or in fruit compotes. It
            also shines in warming winter drinks like mulled wine or spiced
            cider.
          </p>
          <p>
            Why you've never heard of it: When European colonizers established
            black pepper plantations in easily accessible regions, black pepper
            became cheaper and more available than long pepper. The simpler,
            more economical option won, and long pepper faded from mainstream
            cooking despite its superior complexity.
          </p>

          <h3>Selim Pepper (West Africa's Smoky Marvel)</h3>
          <p>
            {" "}
            Also called kani pepper or Ethiopian pepper (though it's different
            from Ethiopian long pepper), selim pepper delivers something no
            other spice can: a naturally smoky, resinous flavor with hints of
            coffee and chocolate.
          </p>
          <p>
            The seeds come from pods that look like miniature cocoa pods. When
            you crush them, they release an aroma that combines smokiness,
            slight bitterness, and warmth. It's the kind of smell that makes
            everyone in the kitchen ask, "What is that?"
          </p>
          <p>
            Traditional West African cooks use selim pepper in spice blends for
            grilled meats and rich stews. The smoky quality makes it perfect for
            dishes where you want depth without actual smoking. British cooks
            are discovering it works brilliantly in barbecue rubs, adds
            character to vegetarian dishes that need more body, and transforms
            simple bean stews into something complex and satisfying.
          </p>
          <p>
            One home cook told me she adds selim pepper to her tomato soup, and
            suddenly it tastes like it's been slowly roasted over open flames.
            Another uses it in mushroom dishes to amplify their earthy
            qualities.
          </p>
          <p>
            Why you've never heard of it: Selim pepper grows in specific West
            African regions and hasn't been widely exported or commercialized.
            It remains a specialty ingredient known primarily to those familiar
            with West African cooking traditions.
          </p>

          <h3>Precese (The Flavor Transformer)</h3>
          <p>
            {" "}
            Pronounced "pray-che-say," this Ghanaian spice comes from the dried
            seed pod of a tree native to West Africa. It looks unusual, almost
            like dried, twisted wooden strips, and its flavor is unlike anything
            in typical spice cabinets.
          </p>
          <p>
            Precese tastes simultaneously sweet, bitter, and aromatic with hints
            of licorice, bitter chocolate, and something almost medicinal in the
            best possible way. In Ghanaian cooking, it's essential for palm nut
            soup, light soups, and traditional stews. It's also valued for
            digestive properties and is often used in herbal preparations.
          </p>
          <p>
            For UK cooking, precese requires some experimentation because its
            flavor is genuinely unique. It works beautifully in slow-cooked
            dishes where its complexity can develop. Try adding a piece to beef
            stews, bean dishes, or even vegetable soups. Remove the actual pod
            before serving, like you would a bay leaf, leaving behind its flavor
            influence.
          </p>
          <p>
            Some adventurous British bartenders are discovering precese in craft
            cocktails, where its complex bitterness and sweetness create
            intriguing depth. Others use it in chocolate desserts or coffee
            preparations.
          </p>
          <p>
            Why you've never heard of it: Precese is deeply traditional to
            Ghanaian cooking but hasn't crossed over into mainstream
            international cuisine. Its unusual appearance and complex flavor
            make it harder to market than more straightforward spices.
          </p>

          <h3>Why These Spices Matter</h3>
          <p>
            {" "}
            Beyond their delicious flavors, these African spices represent
            thousands of years of culinary knowledge. They're the ingredients
            that make African cuisine distinctive, complex, and endlessly
            interesting. When you cook with them, you're not just adding flavor.
            You're connecting to traditions, supporting knowledge preservation,
            and expanding your own cooking capabilities.
          </p>
          <p>
            These spices also offer practical advantages. They're often more
            sustainable than mass-produced alternatives, typically grown by
            small-scale farmers using traditional methods that protect soil
            health and biodiversity. When sourced ethically, your purchase
            directly supports African farming communities who've been
            cultivating these spices for generations.
          </p>

          <h3>Getting Started</h3>
          <p>
            {" "}
            If you're ready to explore these flavors, start with one or two
            spices that interest you most. Read about their traditional uses,
            then experiment with small amounts in dishes you already make. Trust
            your palate. African spices are forgiving and versatile, they work
            in more applications than you might expect.
          </p>
          <p>
            The beauty of cooking with new spices is discovering combinations
            and uses that work for your taste and cooking style. There's no
            single "right" way to use these ingredients. West African cooks have
            been improvising and adapting with these spices for centuries. You
            can too.
          </p>
          <p>
            Your spice cabinet doesn't have to be boring. These five African
            spices offer flavors you literally cannot achieve any other way.
            They're not obscure for the sake of being obscure. They're simply
            undiscovered treasures waiting to transform your everyday cooking
            into something extraordinary.
          </p>
          <p>
            Ready to discover these incredible flavors? Explore our collection
            of authentic African spices, ethically sourced directly from the
            farmers who grow them. Your kitchen revolution starts here.
          </p>
        </ArticleContent>

        <CTASection>
          <h2
            style={{
              color: (props) => props.theme.primary,
              marginBottom: "1rem",
            }}
          >
            Taste the Difference Yourself
          </h2>
          <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>
            Ready to discover these incredible flavors? Explore our collection
            of authentic African spices, ethically sourced directly from the
            farmers who grow them. Your kitchen revolution starts here.
          </p>
          <Button primary size="large" style={{ marginRight: "1rem" }}>
            Order Tasty Spices
          </Button>
          <Button>Explore Our Spices</Button>
        </CTASection>
      </Section>
    </Container>
  );
};

export default BlogPost1;
