import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Annabelle Charles Associates Ltd.</h1>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>
    Annabelle Charles Associates Ltd - Independent Beauty & Cosmetic Recruitment
    Agency, London UK
  </title>
);
