import React from 'react';
// Bootstrap
import { Form, Button, Row, Col } from 'react-bootstrap';
// Formik
import { useFormik } from 'formik';

type Props = {
  onCancel: () => void,
};

const FeedbackForm: React.FC<Props> = ({ onCancel }) => {
  const formik = useFormik({
    initialValues: {
      rating: '5',
      name: '',
      title: '',
      text: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Row>
        <Form.Group as={Col} md={3}>
          <Form.Label>Rating</Form.Label>
          <Form.Control as="select" name="rating" onChange={formik.handleChange} value={formik.values.rating} >
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          </Form.Control>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group controlId="name" as={Col}>
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" onChange={formik.handleChange} value={formik.values.name} />
        </Form.Group>
        <Form.Group controlId="title" as={Col}>
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" onChange={formik.handleChange} value={formik.values.title} />
        </Form.Group>
      </Row>
      <Form.Group controlId="text" as={Col} className="p-0">
        <Form.Label>Text</Form.Label>
        <Form.Control name="text" as="textarea" onChange={formik.handleChange} value={formik.values.text} />
      </Form.Group>
      <Row className="justify-content-between p-3">
        <Button variant="info" onClick={onCancel}>Cancel</Button>
        <Button type="submit">Submit</Button>
      </Row>
    </form>
  );
};

export default FeedbackForm;