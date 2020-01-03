// import React, { useState } from 'react';
// import { useHistory, Link } from 'react-router-dom'
// import { Row, Col, Container } from 'react-bootstrap'
// import Countdown from 'react-countdown-now';

// export default function Coutdown_Time(props) {
//     const [event, setEvent] = useState([])
//     const [year, setYear] = useState(0)
//     const [month, setMonth] = useState(0)
//     const [day, setDay] = useState(0)
//     const [hour, setHour] = useState(0)
//     const [minute, setMinute] = useState(0)
//     const DATETIME = "2019-12-20 17:01:33.992795"
//     const d = new Date(DATETIME);
//     const renderer = ({ days, hours, minutes, seconds, completed }) => {
//         if (completed) {
//             // Render a completed state
//             return <h2>Let's join with us </h2>
//         }
//         else {
//             // Render a countdown
//             return (
//                 <div class="event-section">
//                     <Container>
//                         <Row>
//                             <Col class="col-md-5 col-lg-6">
//                                 <div class="event-info">
//                                     <div class="event-date">
//                                         <h2>20</h2>
//                                         may
//                                 </div>
//                                     <h3>Sponsor a Child</h3>
//                                     <p><i class="fa fa-calendar"></i> 8:00 Am — 10:00 Am <i class="fa fa-map-marker"></i> We'll send to you the location soon!</p>
//                                 </div>
//                             </Col>
//                             <Col class="col-md-7 col-lg-6">
//                                 <div class="counter"><div class="counter-item"><h4>{days}</h4>Days</div><div class="counter-item"><h4>{hours}</h4>hours</div><div class="counter-item"><h4>{minutes}</h4>Mins</div><div class="counter-item"><h4>{seconds}</h4>secs</div></div>
//                                 <a class="site-btn sb-light-line">Read more</a>
//                             </Col>
//                         </Row>
//                     </Container>
//                 </div>
//             )
//         }
