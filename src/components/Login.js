import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../App.css';

const Login = (props) => {

    const [contador, setContador] = useState('');

    return (
        <>
            <Container className="great-container m-4" style={{ border: '1px silver solid', width: '660px' }}>
                <Row className="m-4 text-center" >
                    <Col xs={6} style={{marginLeft: '130px'}}>
                        <h2 style={{ color: 'silver', marginLeft: '55px'}}>Bienvenido!</h2>
                        <br />
                        <Button style={{ width: '300px' }} onClick={() => setContador(Math.floor(Math.random() * 10) + 1)} variant="primary">
                            Anótate en la fila!
                            </Button>
                        <Row className="mt-4">
                            <Col>
                                <p>Hay {contador} personas antes que tú en la fila</p>
                                <p>Tiempo de espera estimado: {contador * 5} minutos</p>
                            </Col>
                        </Row>
                        <br /><Link to="/">Volver a Inicio</Link>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login