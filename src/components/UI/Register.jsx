import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/Auth.css';

const Register = () => {
  return (
    <section className="auth-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg="4" md="6" sm="8">
            <h2 className="text-center">Register</h2>
            <Form>
              <FormGroup>
                <Input type="text" placeholder="Name" required />
              </FormGroup>
              <FormGroup>
                <Input type="email" placeholder="Email" required />
              </FormGroup>
              <FormGroup>
                <Input type="password" placeholder="Password" required />
              </FormGroup>
              <Button type="submit" className="btn btn-primary btn-block">Register</Button>
              <p className="text-center mt-3">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
