import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
    return (
        <div>
    <Container className="footer-top-section spad">
			<Row className="row">
				<Col className="col-sm-6 footer-top-content">
					<div class="section-title title-left">
						<h2>Contact Us</h2>
					</div>
					<h3>Ho Chi Minh</h3>
					<p>16 Hung Thai, Phu My W., D.7</p>
					<p><span>Email:</span> artinenguyen@gmail.com</p>
					<h4>Phone:</h4>
					<h5>(+84) 081 919 9357</h5>
				</Col>
			</Row>
		<div class="map-area" id="map-canvas"></div>
	</Container>

	<section class="footer-section">
			<Row className="row">
				<Col className="col-sm-6 copyright">
					<p>Copyright by Artine Nguyen with passionate</p>
				</Col>
			</Row>
	</section>
        </div>
    )
}
