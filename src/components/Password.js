import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Password = () => {
    return (
        <Container className="great-container m-4" style={{ border: '1px silver solid', width: '660px' }}>
            <h2 className="center-text" style={{ color: "grey", marginLeft: '40px' }}>Forgot your password?</h2>
            <Row className="m-4">
                <Col xs={6}>
                    <Form style={{marginLeft: '100px'}}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address *</Form.Label>
                            <Form.Control style={{ width: '300px' }} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll' send you a link to reset your password
                            </Form.Text>
                        </Form.Group>
                        <Link to= "/">
                            <Button style={{ width: '300px' }} onClick={() => alert("We have sent you an email to reset your password")} variant="primary" type="submit">
                                Reset Password
                            </Button>
                        </Link>    
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Password