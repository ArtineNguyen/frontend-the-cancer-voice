import React, { useState } from 'react'
import { Form, Button, Container, Col, Row } from 'react-bootstrap'
export default function Forgot() {
    const [email, setEmail] = useState('')
    const [state, setState] = useState('')

    const sendEmail = async () => {
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/forgot-password`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ 'email': email })
        })
        if (resp.ok) {
            const data = await resp.json();
            if (data.success) {
                setState(data.right)
            }
            if (!data.success) {
                setState(data.wrong)
            }
        }
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        sendEmail()
    }
    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={6} md={6}>
                <Form>
                    <Form.Group onChange={e => setEmail(e.target.value)} onSubmit={(e) => handelSubmit(e)} controlId="formBasicEmail">
                        <input className="input" type="name" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <input className="input" type="email" placeholder="Enter Your Email" />
                    </Form.Group>
                    <Button className="jutified-center" variant="primary" type="submit">
                        Send New Password
                    </Button>
                </Form>
                </Col>
            </Row>
        </Container>
    )
}
