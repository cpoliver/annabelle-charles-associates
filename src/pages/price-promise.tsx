import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout";

const PricePromisePage: React.FC<PageProps> = (props) => (
  <Layout>PricePromise ({props.location.pathname})</Layout>
);

export default PricePromisePage;
