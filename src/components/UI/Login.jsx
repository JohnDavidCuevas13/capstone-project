import React from 'react';
import { Container, Row, Col, Form, FormGroup, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/Auth.css';

const Login = () => {
  return (
    <section className="auth-section">
      <Container>
        <Row className="justify-content-center">
          <Col lg="4" md="6" sm="8">
            <h2 className="text-center">Login</h2>
            <Form>
              <FormGroup>
                <Input type="email" placeholder="Email" required />
              </FormGroup>
              <FormGroup>
                <Input type="password" placeholder="Password" required />
              </FormGroup>
              <Button type="submit" className="btn btn-primary btn-block">Login</Button>
              <p className="text-center mt-3">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
