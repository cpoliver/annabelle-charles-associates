import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Layout } from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => <Layout>Home</Layout>;

export default IndexPage;

export const Head: HeadFC = () => (
  <title>
    Annabelle Charles Associates Ltd - Independent Beauty & Cosmetic Recruitment
    Agency, London UK
  </title>
);
