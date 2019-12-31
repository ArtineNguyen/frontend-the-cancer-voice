import React from 'react'
import NavBar from '../components/NavBar'
// import Slidebar from '../components/Slidebar'
import AboutUs from '../components/AboutUs'
import Footer from '../pages/Footer'
import About from '../pages/About'
import Blog from '../pages/Blog'
import {Row, Col, Alert, Container } from 'react-bootstrap'
import Countdown from 'react-countdown-now'



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
					<Alert variant="success">
						<Alert.Heading>Hey, nice to see you</Alert.Heading>
						<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
						<hr />
						<p className="mb-0">
							Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
  </p>
					</Alert>
					
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
			{/* <Slidebar /> */}
			<AboutUs />
			<Blog/>
			
			<Container className="services-section spad">
				<Row className="row">
					<Col className="col-sm-4">
						<div className="service-box">
							<h4><i className="fa fa-fire"></i>Our Values</h4>
							<p>Excepteur sint occaecat cupidatat non,  sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
							{/* <a href="#" className="s-readmore">Readmore <i className="fa fa-angle-double-right"></i></a> */}
						</div>
					</Col>
					<Col className="col-sm-4">
						<div className="service-box">
							<h4><i className="fa fa-eye"></i>Our Vision</h4>
							<p>Excepteur sint occaecat cupidatat non, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
							{/* <a href="#" className="s-readmore">Readmore <i className="fa fa-angle-double-right"></i></a> */}
						</div>
					</Col>
					<Col className="col-sm-4">
						<div className="service-box">
							<h4><i className="fa fa-heart"></i>Our Mission</h4>
							<p>Excepteur sint occaecat cupidatat non, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
							{/* <a href="#" className="s-readmore">Readmore <i className="fa fa-angle-double-right"></i></a> */}
						</div>
					</Col>
				</Row>
			</Container>




			<Container className="sermon-section spad">

				<Row className="section-title d-flex justify-content-center align-items-center">
					<span>Together we make better</span>
					<h2>Event Today</h2>
				</Row>
				<Row className="sermon-warp col-md-12 about-content">
					<Col className="sermon-left-bg set-bg">
						<img src="https://images.unsplash.com/photo-1516890896652-41ca1a35787c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1201&q=80"></img>
					</Col>
					<Col className="col-md-8 about-content">
						<div className="sermon-content">
							<h2>Lord Is Sufficient For All Of Our Needs</h2>
							<ul className="sermon-info">
								<li>Sermon From: <span>Vincent John</span></li>
								<li>Categories: <span>God, Pray</span></li>
								<li><span>On Monday 23 DEC, 2018</span></li>
							</ul>
							<p>For God did not send his Son into the world to condemn the world, but to save the world through him.</p>
							<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
							<div className="icon-links">
								<a href=""><i className="fa-link"></i></a>
								<a href=""><i className="fa-zip"></i></a>
								<a href=""><i className="fa-headphone"></i></a>
								<a href=""><i className="fa-import"></i></a>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}

