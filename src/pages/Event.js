import React, {useState, useEffect} from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import Countdown from 'react-countdown-now';


export default function Event(props) {
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [body, setbody] = useState('')
    const [event, setEvent] = useState([])
    const[year, setYear] = useState(0)
    const[month, setMonth] = useState(0)
    const[day, setDay] = useState(0)
    const[hour, setHour] = useState(0)
    const[minute, setMinute] = useState(0)
    // currentUser = props.currentUser
    // history = useHistory()

    useEffect(() => {
        getEvent()
    }, [])
    
    const create_event = async()=>{
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/event/create-event`,{
            method: "POST",
            headers:{
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
                "minute":minute
                // "date": date
            })
        })
        if(resp.ok){
            const data = await resp.json()
            getEvent()
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        create_event()
    }

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <h2>Let's join with us </h2>;
        } else {
          // Render a countdown
          return 	(
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
      const  d = new Date(DATETIME);

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
    const renderEvent = event.map(event => {
        return (
            <>
                <h1>{event.title}</h1>
                <img src={event.image} />
                <h2>{event.body}</h2>
                <h2>{event.datetime}</h2>
                {props.currentUser && props.currentUser.id == event.user_id ? (<>
        <Button onClick={()=> deleteEvent(event.id)}>Delete</Button>
        <Link to={`/edit/${event.id}/event`}>Edit event</Link>      
                </>) : ""}
            </>
        )
    })
    const deleteEvent = async(id) => {
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/event/delete/${id}`,{
        method: 'DELETE',    
        headers:{
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
				<div className="el-item">
					<div className="row">
						<div className="col-md-4">
							<div className="el-thubm set-bg" data-setbg="img/event/1.jpg"></div>
						</div>
						<div className="col-md-8">
							<div className="el-content">
								<div className="el-header">
									<div className="el-date">
										<h2>18</h2>
											Dec
									</div>
									<h3>Give To Help Each Child Grow Up Healthy</h3>
									<div className="el-metas">
										<div className="el-meta"><i className="fa fa-user"></i> Vincent John</div>
										<div className="el-meta"><i className="fa fa-calendar"></i> Monday, 08:00 Am </div>
										<div className="el-meta"><i className="fa fa-map-marker"></i> Central District, Riga, LV-1050, Latvia</div>
									</div>
								</div>
								<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
								<a href="" className="site-btn sb-line">Read more</a>
							</div>
						</div>
					</div>
				</div>
				<div className="el-item">
					<div className="row">
						<div className="col-md-4">
							<div className="el-thubm set-bg" data-setbg="img/event/2.jpg"></div>
						</div>
						<div className="col-md-8">
							<div className="el-content">
								<div className="el-header">
									<div className="el-date">
										<h2>20</h2>
											MAY
									</div>
									<h3>Your Support Helps Kids Survive & Thrive</h3>
									<div className="el-metas">
										<div className="el-meta"><i className="fa fa-user"></i> Vincent John</div>
										<div className="el-meta"><i className="fa fa-calendar"></i> Monday, 08:00 Am </div>
										<div className="el-meta"><i className="fa fa-map-marker"></i> Central District, Riga, LV-1050, Latvia</div>
									</div>
								</div>
								<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
								<a href="" className="site-btn sb-line">Read more</a>
							</div>
						</div>
					</div>
				</div>
				<div className="el-item">
					<div className="row">
						<div className="col-md-4">
							<div className="el-thubm set-bg" data-setbg="img/event/3.jpg"></div>
						</div>
						<div className="col-md-8">
							<div className="el-content">
								<div className="el-header">
									<div className="el-date">
										<h2>06</h2>
											Aug
									</div>
									<h3>Lord Is Sufficient For All Of Our Needs</h3>
									<div className="el-metas">
										<div className="el-meta"><i className="fa fa-user"></i> Vincent John</div>
										<div className="el-meta"><i className="fa fa-calendar"></i> Monday, 08:00 Am </div>
										<div className="el-meta"><i className="fa fa-map-marker"></i> Central District, Riga, LV-1050, Latvia</div>
									</div>
								</div>
								<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
								<a href="" className="site-btn sb-line">Read more</a>
							</div>
						</div>
					</div>
				</div>
				<div className="el-item">
					<div className="row">
						<div className="col-md-4">
							<div className="el-thubm set-bg" data-setbg="img/event/4.jpg"></div>
						</div>
						<div className="col-md-8">
							<div className="el-content">
								<div className="el-header">
									<div className="el-date">
										<h2>26</h2>
											oct
									</div>
									<h3>Perseverance Of The Saints</h3>
									<div className="el-metas">
										<div className="el-meta"><i className="fa fa-user"></i> Vincent John</div>
										<div className="el-meta"><i className="fa fa-calendar"></i> Monday, 08:00 Am </div>
										<div className="el-meta"><i className="fa fa-map-marker"></i> Central District, Riga, LV-1050, Latvia</div>
									</div>
								</div>
								<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
								<a href="" className="site-btn sb-line">Read more</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="pagination-area">
				<ul className="pageination-list">
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">Next <i className="fa fa-angle-double-right"></i></a></li>
				</ul>
				<p>Page 1 of 08 results</p>
			</div>
	    </Container>
        {props.currentUser ? <><Container>
            <Form onSubmit={(e)=> handleSubmit(e)}>

                <Container>
                    <div className="section-title title-center">
                        <span>Experience God's Presence</span>
                        <h2>Upcoming Events</h2>
                        <Countdown date={d} renderer={renderer} />
                    </div>
                    {/* <Col className="col-md-6 text-center event-more">
                    <a href="" className="site-btn">view all events</a>
                </Col> */}
                </Container>
                
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
                    <Form.Control className="input" as="time"
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
                <Form.Group >
                    <Form.Control className="input"
                        type="number"
                        onChange={(e) => setMinute(e.target.value)}
                    />
                </Form.Group>
                <Button type="submit">Post</Button>
            </Form>
            </Container>
        </> : ""}
            {renderEvent}
        </div>
    )
}
