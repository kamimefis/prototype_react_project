import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const CreateAccount = (props) => {
    return (
        <Container className="great-container m-4" style={{ border: '1px silver solid', width: '660px' }}>
            <h2 style={{ color: 'silver', marginLeft: '170px', marginTop: '20px' }}>Create an account</h2>
            <Row className="m-4">
                <Col xs={6} style={{ marginLeft: '140px' }}>
                    <Form >
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Name and Last name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="UserName" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Email address" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Confirm Password" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row className="m-4" >
                <Col style={{ marginLeft: '120px' }}>
                <Link to="/">
                    <Button style={{ width: '300px' }} size="lg" onClick={() => alert("Your account has been successfully created!")} variant="primary" type="submit">
                        Sign up
                    </Button>
                </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateAccount