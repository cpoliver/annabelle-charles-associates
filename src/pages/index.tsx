import * as React from "react";
import { Text } from "@chakra-ui/react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout";
import { Section } from "../components/Section";

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Section>
      <Section.Heading>Excellent service</Section.Heading>
      <Section.Subheading>
        We are an independent recruitment agency that helps employers to connect
        with exceptional talent at all levels.
      </Section.Subheading>
      <Section.Body>
        <Section.Image src="https://www.annabellecharles.co.uk/wp-content/uploads/2020/05/services-img-1.jpg" />
        <Section.Content>
          We combine intuition and thoughtful analysis to offer our clients and
          candidates across the UK with our personalised services. Our beauty
          and aesthetics recruitment agency uses a thorough recruitment process
          to bring out a skillset that proves to be invaluable for your
          business. We know all about the multifaceted industry, from cosmetics,
          dietary supplements, household products, to other lifestyle
          essentials.
        </Section.Content>
      </Section.Body>
    </Section>
  </Layout>
);

export default IndexPage;

export const Head: HeadFC = () => (
  <title>
    Annabelle Charles Associates Ltd - Independent Beauty & Cosmetic Recruitment
    Agency, London UK
  </title>
);
