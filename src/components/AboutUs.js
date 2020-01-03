import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import ImageSlider from "./ImageSlide"

export default function AboutUs() {
    return (
            <Container className="about-section spad">
				<Row className="row">
					<ImageSlider />
				</Row>
				
				<Row>
					<Col className="col-md-6 about-content">
						<h2>No one fights cancer alone</h2>
						<p>A diagnosis that turns the lives of the entire family upside down.</p>
						<p>The objective of The Cancer Voice VietNam is to put a spotlight on the types of cancer that largely affect children, survivorship issues and – importantly – to help raise funds for cure and family support.</p>
						<a href="/login" className="site-btn sb-wide">join with us</a>
					</Col>
					<Col className="col-md-6 about-img">
						<img src="https://images.unsplash.com/photo-1576485055783-a7a5d64192f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2075&q=80" alt=""></img>
					</Col>
				</Row>
			</Container>
    )
}
