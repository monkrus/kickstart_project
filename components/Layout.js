import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head"; //helper to move the tag
import Header from "./Header";

export default props => {
  return (
    <Container>
      <link
        rel="stylesheet"
        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"
      />

      <Header />
      {props.children}
    </Container>
  );
};
