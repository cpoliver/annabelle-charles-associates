import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout";

const ClientsPage: React.FC<PageProps> = (props) => (
  <Layout>Clients ({props.location.pathname})</Layout>
);

export default ClientsPage;
