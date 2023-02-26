import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout";

const PositionsPage: React.FC<PageProps> = (props) => (
  <Layout>Positions ({props.location.pathname})</Layout>
);

export default PositionsPage;
