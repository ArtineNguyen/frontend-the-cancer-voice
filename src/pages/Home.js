import React from 'react'
import NavBar from '../components/NavBar'
import Slidebar from '../components/Slidebar'
import AboutUs from '../components/AboutUs'
import Footer from '../pages/Footer'
import About from '../pages/About'
import Blog from '../components/Blog'
import {Row, Col, Alert, Container } from 'react-bootstrap'
import ImageSlider from "../components/ImageSlide"



export default function Home(props) {
	const handleOnChange = (e) => {
		const name = e.target
	}
	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state
			return <h2>Let's join with us </h2>;
		}

		else {
			return (
				<>		
					<div className="event-section">
						<Container className="container">
							<Row className="row">
								<Col className="col-md-5 col-lg-6">
									<div className="event-info">
										<div className="event-date">
											<h2>20</h2>
											may
							</div>
										<h3>Sponsor For Us Your Awareness</h3>
										<p><i className="fa fa-calendar"></i> 8:00 Am — 10:00 Am  <i className="fa fa-map-marker"></i> Crescent Mall, Hoang Van Thai St., District 7, HCMC</p>
									</div>
								</Col>
								<Col className="col-md-7 col-lg-6">
									<div className="counter">
										<div className="counter-item"><h4>{days}</h4>Days</div>
										<div className="counter-item"><h4>{hours}</h4>hours</div>
										<div className="counter-item"><h4>{minutes}</h4>Mins</div>
										<div className="counter-item"><h4>{seconds}</h4>secs</div>
									</div>
									<a href="" className="site-btn sb-light-line">Read more</a>
								</Col>
							</Row>
						</Container>
					</div>
				</>
			);
		}
	};

	const DATETIME = "2019-12-20 17:01:33.992795"
	const d = new Date(DATETIME);


	return (
		<>
			<AboutUs />
			{/* <Blog/> */}
			
			<Footer />
		</>
	)
}

