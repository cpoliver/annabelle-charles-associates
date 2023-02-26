import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout";

const CvWritingPage: React.FC<PageProps> = (props) => (
  <Layout>CvWriting ({props.location.pathname})</Layout>
);

export default CvWritingPage;
