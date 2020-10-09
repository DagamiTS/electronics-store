import React from 'react';
// Bootstrap
import { Row, Col } from 'react-bootstrap';
// Styles
import { Wrapper } from './SpecificationsBlock.styles';

const SpecificationsBlock: React.FC<{ specifications: { [key: string]: string } | undefined }> = ({ specifications }) => {
  let table = null;

  if (specifications) {
    table = Object.keys(specifications).map(key => (
      <Row key={key} className='d-flex justify-content-between'>
        <Col className='text-left'>{key}</Col>
        <Col className='text-right'>{specifications[key]}</Col>
      </Row>
    ));
  }

  return (
    <Row as={Wrapper}>
      <h2>Specifications</h2>
      <Col md={11} className='m-auto'>
        {table}
      </Col>
    </Row>
  );
};

export default SpecificationsBlock;