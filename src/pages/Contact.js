import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

export default function Contact() {
	return (
		<>
			<Container className="footer-top-section spad">
				<Row className="row">
					<Col className="col-sm-6 footer-top-content">
						<div className="section-title title-left">
							<h2>Contact Us</h2>
						</div>
						<h3>Ho Chi Minh</h3>
						<p>16 Hung Thai, Phu My W., D.7</p>
						<p><span>Email:</span> artinenguyen@gmail.com</p>
						<h4>Phone:</h4>
						<h5>(+84) 081 919 9357</h5>
					</Col>
				</Row>
				<div className="map-area" id="map-canvas" url="http://gloriosa.demo.weebpal.com/sites/default/files/menu_block/image/map.jpg	"></div>
			</Container>

			<section className="footer-section">
				<Row className="row">
					<Col className="col-sm-6 copyright">
						<p>Copyright by Artine Nguyen with passionate</p>
					</Col>
				</Row>
			</section>
		</>
	)
}
