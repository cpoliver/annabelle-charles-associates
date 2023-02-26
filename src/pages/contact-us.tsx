import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout";

const ContactPage: React.FC<PageProps> = (props) => (
  <Layout>Contact ({props.location.pathname})</Layout>
);

export default ContactPage;
