import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
    return (
        <div>
    <Container className="footer-top-section spad">
			<Row className="row">
				<Col className="col-sm-6 footer-top-content">
					<div className="section-title title-left">
						<h2>Contact Us</h2>
					</div>
					<h3>Ho Chi Minh</h3>
					<p><i class="fas fa-map-marked-alt m-2"></i>16 Hung Thai, Phu My W., D.7</p>
					<p><i class="fas fa-envelope-open-text m-2"></i><span>Email:</span> artinenguyen@gmail.com</p>
					<h4>Phone:</h4>
					<h5><i class="fas fa-phone m-2"></i> (+84) 081 919 9357</h5>
				</Col>
			</Row>
		<div className="map-area" id="map-canvas">
			<img style={{width:"100vw"}} src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"/>
		</div>
	</Container>

	<section className="footer-section">
			<Row className="row">
				<Col className="col-sm-12 copyright">
					<p>Copyright by Artine Nguyen with passionate</p>
				</Col>
			</Row>
	</section>
        </div>
    )
}
