import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Countdown from 'react-countdown-now';


export default function Event(props) {
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [body, setbody] = useState('')
    const [event, setEvent] = useState([])
    const [year, setYear] = useState(0)
    const [month, setMonth] = useState(0)
    const [day, setDay] = useState(0)
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [linkGoogle, setLinkGoogle] = useState("")
    // currentUser = props.currentUser
    // history = useHistory()

    useEffect(() => {
        getEvent()
    }, [])

    const create_event = async () => {
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/event/create-event`, {
            method: "POST",
            headers: {
                Authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "title": title,
                "body": body,
                "img": img,
                "year": year,
                "day": day,
                "month": month,
                "hour": hour,
                "minute": minute,
                "link_google" : linkGoogle
                // "date": date
            })
        })
        if (resp.ok) {
            const data = await resp.json()
            getEvent()

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        create_event()
    }

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <h2>Let's join with us </h2>;
        } else {
            // Render a countdown
            return (
                <div className="counter test">
                    <div className="counter-item"><h4>{days}</h4>Days</div>
                    <div className="counter-item"><h4>{hours}</h4>hours</div>
                    <div className="counter-item"><h4>{minutes}</h4>Mins</div>
                    <div className="counter-item"><h4>{seconds}</h4>secs</div>
                </div>
            );
        }
    };

    const DATETIME = "2019-12-20 17:01:33.992795"
    const d = new Date(DATETIME);

    const getEvent = async () => {
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/event/render-event`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (resp.ok) {
            const data = await resp.json()
            setEvent(data)
        }
    }
    console.log(event, "ven")
    const renderEvent = event.map(event => {
        return (
            <>
                <Col xs={6} md={4}>
                    <img className="el-thubm set-bg" src={event.image}/>
                </Col>
                <Col md={8}>
                    <div className="el-content">
                        <div className="el-header">
                            <div xs={6} md={4} className="el-date">
                                <h2>18</h2>
                                Dec
									</div>
                            <h3 xs={6} md={4} >{event.title}</h3>
                            <div className="el-metas">
                                <div className="el-meta"><i className="fa fa-user"></i> {event.user_id && event.user_id.name}</div>
                                <div className="el-meta"><i className="fa fa-calendar"></i> {event.datetime}</div>
                            </div>
                        </div>
                        <p>{event.body}</p>
                        <a href={event.form_google} className="site-btn sb-line">Read more</a>
                    </div>
                </Col>
                {props.currentUser && props.currentUser.id == event.user_id ? (<>
                    <Button onClick={() => deleteEvent(event.id)}>Delete</Button>
                    <Link to={`/edit/${event.id}/event`}>Edit event</Link>
                </>) : ""}
            </>
        )
    })
    const deleteEvent = async (id) => {
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/event/delete/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            }
        })
        if (resp.ok) getEvent()
    }

    return (
        <div>
            <Container className="event-list-section spad">
                <Row className="section-title title-left">
                    <Col md={{ span: 6, offset: 3 }}>
                        <span>Experience God's Presence</span>
                        <h2>Upcoming Events</h2>
                    </Col>
                </Row>
                <div className="event-list">
                    <div xs={12} md={8} className="el-item">
                        <Row>
                        {renderEvent}
                        </Row>
                    </div>
                </div>

            </Container>
            {props.currentUser ? <><Container>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Container>
                        <Form.Group>
                            <Form.Label>Input Title</Form.Label>
                            <Form.Control className="input"
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Input body</Form.Label>
                            <Form.Control className="input" as="textarea" rows="5"
                                type="text"
                                onChange={(e) => setbody(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Input image URL</Form.Label>
                            <Form.Control className="input"
                                type="url"
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Input year</Form.Label>
                            <Form.Control className="input"
                                type="number"
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label as={Col}>Input month</Form.Label>
                            <Form.Control className="input"
                                type="number"
                                onChange={(e) => setMonth(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label >Input day</Form.Label>
                            <Form.Control className="input"
                                type="number"
                                onChange={(e) => setDay(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label as={Col}>Input hour</Form.Label>
                            <Form.Control className="input"
                                type="number"
                                onChange={(e) => setHour(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label as={Col}>Input Minutes</Form.Label>
                            <Form.Control className="input"
                                type="number"
                                onChange={(e) => setMinute(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label as={Col}>Link Form</Form.Label>
                            <Form.Control className="input"
                                type="url"
                                onChange={(e) => setLinkGoogle(e.target.value)}
                            />
                        </Form.Group>
                        <Button type="submit">Post</Button>
                    </Container>
                </Form>
            </Container></> : ""}
        </div>
    )
}
