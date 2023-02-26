import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout";

const CandidatesPage: React.FC<PageProps> = (props) => (
  <Layout>Candidates ({props.location.pathname})</Layout>
);

export default CandidatesPage;
