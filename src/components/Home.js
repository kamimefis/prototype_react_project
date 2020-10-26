import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../App.css';


const Home = (props) => {
    return (
        <>
            <Container className="great-container m-4" style={{ border: '1px silver solid', width: '660px' }} >
                <Row className="m-4">
                    <h2 className="center-text" style={{ color: "grey", marginLeft: '100px' }}>Welcome to My_Home!</h2>
                </Row>
                <Container className="m-4" >
                    <Row style={{ marginLeft: '100px' }}>
                        <Col xs={6} >
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control style={{ width: '300px' }} type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label required="required">Password</Form.Label>
                                    <Form.Control style={{ width: '300px' }} type="password" placeholder="Password" />
                                </Form.Group>
                            </Form>
                            <Link to="/login"><Button style={{ width: '300px' }} variant="primary" type="submit">
                                Login
                                </Button></Link><br />
                            <Row className="center-text">
                                <Col style={{ marginLeft: '50px' }}>
                                    <Link to="/password">Forgot Password?</Link><br />
                                    <Link to="/create-account">Create an Account</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Home