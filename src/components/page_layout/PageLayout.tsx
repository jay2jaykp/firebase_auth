import React from "react";
import { Container } from "react-bootstrap";

const PageLayout: React.FC = (props) => {
  return <Container fluid="md">{props.children}</Container>;
};

export default PageLayout;
