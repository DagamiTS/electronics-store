import React from 'react';
// Bootstrap
import { Container, Row } from 'react-bootstrap';
// Images
import logoPng from '../../assets/img/logo.png';
// Styles
import { Wrapper } from './Footer.styles';

const Footer = () => (
  <Wrapper>
    <Container fluid className="bg-dark">
      <Container>
        <Row className="justify-content-between align-content-center p-3">
          <img src={logoPng} alt="Logo" />
          <a href="https://github.com/DagamiTS" className="mt-4" target="_blank" rel="noopener noreferrer">My GitHub Page</a>
          <span className="mt-4">© Efremov. 2020.</span>
        </Row>
      </Container>
    </Container>
  </Wrapper>
);

export default Footer;