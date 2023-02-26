import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout";

const AboutPage: React.FC<PageProps> = (props) => (
  <Layout>About ({props.location.pathname})</Layout>
);

export default AboutPage;
