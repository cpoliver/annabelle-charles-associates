import * as React from "react";
import { Button, Text, Heading, Stack, ListItem, List } from "@chakra-ui/react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout";
import * as Section from "../components/Section";

export const Head: HeadFC = () => (
  <title>
    Annabelle Charles Associates Ltd - Independent Beauty & Cosmetic Recruitment
    Agency, London UK
  </title>
);

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <WeBuildTeams />
    <WhoWeAre />
    <AboutUs />
    <OurHistory />
    <ExcellentService />
    <OurClients />
    <FindingTopTalent />
    <WhatWeOffer />
  </Layout>
);

export default IndexPage;

const WeBuildTeams: React.FC = () => (
  <Section.Container>
    <Section.Heading>We build teams</Section.Heading>
    <Section.Subheading>That outshine!</Section.Subheading>
    <Section.Body>
      <Section.Content>
        The flourishing beauty industry with no signs of easing up is always in
        need of talent that can continue to innovate, launch, and market ideas
        that keeps the wheel of growth moving. As one of the leading beauty
        recruitment agencies in the UK, we encourage a flexible recruitment and
        employment approach to help add value to companies and get people their
        dream beauty job! Our beauty recruitment force comprises industry
        insiders who have worked with iconic names in the business. Our tireless
        efforts have helped connect skill with the opportunity to play our part
        in the blooming of this multifaceted industry.
      </Section.Content>
    </Section.Body>
  </Section.Container>
);

const WhoWeAre: React.FC = () => (
  <Section.Container>
    <Section.Heading>Who we are</Section.Heading>
    <Section.Subheading>
      We are an independent recruitment agency that helps employers to connect
      with exceptional talent at all levels.
    </Section.Subheading>
    <Section.Body>
      <Section.Image src="https://www.annabellecharles.co.uk/wp-content/uploads/2020/05/services-img-1.jpg" />
      <Section.Content>
        We combine intuition and thoughtful analysis to offer our clients and
        candidates across the UK with our personalised services. Our beauty and
        aesthetics recruitment agency uses a thorough recruitment process to
        bring out a skillset that proves to be invaluable for your business. We
        know all about the multifaceted industry, from cosmetics, dietary
        supplements, household products, to other lifestyle essentials.
      </Section.Content>
    </Section.Body>
  </Section.Container>
);

const AboutUs: React.FC = () => (
  <Section.Container>
    <Section.Heading>About us</Section.Heading>
    <Section.Subheading>
      We are a professional beauty and personal care recruitment agency founded
      on the premise to offer the best personal services to both clients and
      candidates
    </Section.Subheading>
    <Section.Body>
      <Section.Image src="https://www.annabellecharles.co.uk/wp-content/uploads/2020/09/mk.jpg" />
      <Section.Content>
        With 20 years of hands-on experience in engaging job seekers and
        employers, we have helped companies to fast track their way to success.
        Annabelle Charles Associate has expanded over the years without
        deviating from the core principles that set us apart. Our recruiting
        approach is eyed through a human lens that recognises that the
        connections we establish and the relations we build are from the heart
        and based on integrity and honesty, values that make us the leading
        beauty recruitment agency in London.
      </Section.Content>
    </Section.Body>
  </Section.Container>
);

const OurHistory: React.FC = () => (
  <Section.Container>
    <Section.Heading>Our history</Section.Heading>
    <Section.Body>
      <Section.Content>
        It all started from a much less glamorous sector where Annabelle began
        her career as a recruiter for a garlic bread factory with 5:30 a.m. site
        inductions. Even the challenging working conditions didn&apos;t deter
        Annabelle&apos;s conviction from providing the best service and support
        levels. She then moved into a commercial setting where she collaborated
        with both the public and private sectors, recruiting high-level staff
        for the UK&apos;s leading banks and energy providers. Annabelle&apos;s
        work proved that she is someone who can successfully build her own
        business, a thought that was reminded to her by several of her clients,
        and so she did! With a strong consumer passion for all things Beauty,
        Annabelle moved on in leaps and bounds working with Fashion and
        Lifestyle brands. Her clients and candidates' success is how she
        measures hers!
      </Section.Content>
    </Section.Body>
  </Section.Container>
);

const ExcellentService: React.FC = () => (
  <Section.Container>
    <Section.Heading>Excellent service</Section.Heading>
    <Section.Subheading>
      Annabelle is a strong believer in providing an excellent service at an
      affordable price
    </Section.Subheading>
    <Section.Body>
      <Section.Image src="https://www.annabellecharles.co.uk/wp-content/uploads/2020/09/whiteshoe.jpg" />
      <Section.Content>
        <Stack spacing={8}>
          <Text>
            Rejecting the price disparity in the market, Annabelle offers you
            her excellent service at a consistent and affordable price. With
            integrity comes the appreciation of treating all your clients as one
            and being fair to all by offering competitive market rates. As an
            independent beauty and lifestyle recruitment agency, we provide
            fantastic value for money by providing one fair and simple fee
            across all positions and departments.
          </Text>
          <Button w="fit-content">Read more</Button>
        </Stack>
      </Section.Content>
    </Section.Body>
  </Section.Container>
);

const OurClients: React.FC = () => (
  <Section.Container>
    <Section.Heading>Our clients</Section.Heading>
    <Section.Subheading>
      To help you find your right candidate match, we take our time to
      understand your business culture, brand values, and requirements.
    </Section.Subheading>
    <Section.Body>
      <Section.Image src="https://www.annabellecharles.co.uk/wp-content/uploads/2020/09/face1.jpg" />
      <Section.Content>
        <Stack spacing={8}>
          <Text>
            Building long-term relations requires prudence to get accustomed to
            your company goals and visions to find you a candidate who can help
            you and him/herself by thriving in your company&apos;s environment
            and helping you reach your goals. We equally value our candidates by
            offering the aesthetics and beauty consultant jobs in London, giving
            you a chance to secure your dream job in a place you feel you will
            be appreciated!
          </Text>
          <Button w="fit-content">Read more</Button>
        </Stack>
      </Section.Content>
    </Section.Body>
  </Section.Container>
);

const FindingTopTalent: React.FC = () => (
  <Section.Container>
    <Section.Heading>Finding top talent</Section.Heading>
    <Section.Body gap={4}>
      <Stack spacing={8}>
        <Section.Image src="https://www.annabellecharles.co.uk/wp-content/uploads/2020/09/144.jpg" />
        <Heading size="md" as="h5" textTransform="uppercase">
          Beauty, cosmetic care
        </Heading>
      </Stack>
      <Stack spacing={8}>
        <Section.Image src="https://www.annabellecharles.co.uk/wp-content/uploads/2020/09/12.jpg" />
        <Heading size="md" as="h5" textTransform="uppercase">
          Fields we recruit in
        </Heading>
      </Stack>
      <Stack spacing={8}>
        <Section.Image src="https://www.annabellecharles.co.uk/wp-content/uploads/2020/09/13.jpg" />
        <Heading size="md" as="h5" textTransform="uppercase">
          Surveys & reports
        </Heading>
      </Stack>
    </Section.Body>
  </Section.Container>
);

const WhatWeOffer: React.FC = () => (
  <Section.Container>
    <Section.Heading>What we offer</Section.Heading>
    <Section.Body>
      <Stack spacing={8}>
        We help you in recruiting qualified candidates from entry to management
        and director level for various categories. We are known for providing
        transparent services to both clients and candidates. Using a thorough
        and detailed recruitment process tailored to meet individual businesses
        and particular skill set, we help you save time and money. We recommend
        candidates who match your criteria and will prove to be a valuable
        addition to your business.
        <Stack>
          <Section.Subheading>
            World-class beauty, lifestyle & fashion recruitment
          </Section.Subheading>
          <Text>
            Knowing we are contributing to your successful future makes us proud
            and more determined to connect you to industries you truly deserve.
            We prize ourselves on our integrity and honesty. Therefore, we take
            the recruitment responsibilities upon us seriously, offering you
            dedicated and loyal services instead of making unfulfilled promises.
          </Text>
          <Text>
            It is imperative to understand your core values to be able to draw
            out a strategy that pulls out top talent for you. To make it
            possible, we set up a meeting with you to collaborate on ideas and
            consider your perception for moving the process ahead. To bring you
            with the very best candidates, we follow a thorough screening
            process with at least one reference before suggesting the candidate
            to you. With our extensive networking system and well-connected
            people to the industry gurus, all our candidates come from trusted
            and reputable organisations.
          </Text>
        </Stack>
        <Clients />
        <PositionsWePlace />
      </Stack>
    </Section.Body>
  </Section.Container>
);

const Clients: React.FC = () => (
  <Stack>
    <Section.Subheading>Clients</Section.Subheading>
    <Text>
      We are so grateful to be working with some amazing brands including the
      following:
    </Text>
    <List flex={1}>
      {/* TODO: handle wrapping, add logos */}
      <ListItem>Elemis</ListItem>
      <ListItem>Caudalie</ListItem>
      <ListItem>Pai</ListItem>
      <ListItem>Berry&apos;s</ListItem>
      <ListItem>Inline Health & Beauty</ListItem>
      <ListItem>Lipcote & Co</ListItem>
      <ListItem>Gerrard International</ListItem>
      <ListItem>Titanic Spa</ListItem>
      <ListItem>Bellisima Exclusive</ListItem>
      <ListItem>Prestige Personal Care</ListItem>
      <ListItem>Project Brand</ListItem>
      <ListItem>British Beauty Council</ListItem>
    </List>
  </Stack>
);

const PositionsWePlace: React.FC = () => (
  <Stack>
    <Section.Subheading>Positions we place</Section.Subheading>
    <Text>
      Rejecting the price disparity in the market, Annabelle offers you her
      excellent service at a consistent and affordable price. With integrity
      comes the appreciation of treating all your clients as one and being fair
      to all by offering competitive market rates. As an independent beauty and
      lifestyle recruitment agency, we provide fantastic value for money by
      providing one fair and simple fee across all positions and departments.
    </Text>
    {/* TODO: handle wrapping */}
    <List flex={1}>
      <ListItem>Digital marketing</ListItem>
      <ListItem>E-commerce</ListItem>
      <ListItem>Planning & purchasing</ListItem>
      <ListItem>Graphic design</ListItem>
      <ListItem>Production management</ListItem>
      <ListItem>Formulation chemistry</ListItem>
      <ListItem>Project management</ListItem>
      <ListItem>Spa & beauty therapy</ListItem>
      <ListItem>Finance</ListItem>
      <ListItem>Accountancy</ListItem>
      <ListItem>Human resources</ListItem>
      <ListItem>Product development managment</ListItem>
      <ListItem>Administration</ListItem>
      <ListItem>Sales & account management</ListItem>
    </List>
  </Stack>
);
