import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout";

const ContactPage: React.FC<PageProps> = (props) => (
  <Layout>Contact ({props.location.pathname})</Layout>
);

export default ContactPage;

export const Head: HeadFC = () => (
  <title>
    Contact Us | Annabelle Charles Associates Ltd - Independent Beauty &
    Cosmetic Recruitment Agency, London UK
  </title>
);
