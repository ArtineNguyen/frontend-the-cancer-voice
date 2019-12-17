import React from 'react'
import NavBar from '../components/NavBar'
import { Container, Row, Col, Navbar, Form } from 'react-bootstrap'


export default function About() {
    return (
		<div>
			<Container>
                <Row className="justify-content-md-left">
					<Col className="xs={6} md={4} about-img1w">
                        <img src="https://images.unsplash.com/photo-1504439158909-5a2f08876082?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt=""></img>
                    </Col>
                    <Col className="xs={12} md={8} about-content">
                        <h3>No one fights cancer alone</h3>
                        <p>A diagnosis that turns the lives of the entire family upside down.</p>
                        <p>The objective of The Cancer Voice VietNam is to put a spotlight on the types of cancer that largely affect children, survivorship issues and – importantly – to help raise funds for cure and family support.</p>
						<p>Our Mission</p>
						<p>We are a group of volunteers who aim to make The Cancer Voice be heard around VietNam.</p>
						<p>We are fighting together with the children who got cancer.</p>
                        <a href="/login" className="site-btn sb-wide">join with us</a>
                    </Col>
                </Row>
            </Container>
			<Container>
			<Row className="services-section spad justify-content-md-center">
				<Col className="col-sm-4">
					<div className="service-box">
						<h4><i className="fa fa-fire"></i>What can we do together</h4>
						<p>Be a volunteer.<br></br> No one should fight cancer alone.</p>
						<a href="#" className="s-readmore">Readmore <i className="fa fa-angle-double-right"></i></a>
					</div>
				</Col>
				<Col className="col-sm-4">
					<div className="service-box">
						<h4><i className="fa fa-eye"></i><i className="fa fa-eye"></i>Our Vision</h4>
						<p>Together we can make a difference</p>
						<a href="#" className="s-readmore">Readmore <i className="fa fa-angle-double-right"></i></a>
					</div>
				</Col>
				<Col className="col-sm-4">
					<div className="service-box">
						<h4><i className="fa fa-heart"></i>Be the sponsor</h4>
						<p>To educate every Vietnamese Family</p>
						<a href="#" className="s-readmore">Readmore<i className="fa fa-angle-double-right"></i></a>
					</div>
				</Col>
			</Row>
			</Container>

	<section className="pastors-section spad">
		<div className="container">
			<div className="section-title">
				<span>Together we can make difference</span>
				<h2>Our Team</h2>
			</div>
			<div className="row">
				<div className="col-sm-6 col-md-3">
					<div className="pastor">
						<div className="pastor-img set-bg" data-setbg="img/pastors/1.jpg"></div>
						<h3>Cielo</h3>
						<p>Founders Corporate</p>
					</div>
				</div>
				<div className="col-sm-6 col-md-3">
					<div className="pastor">
						<div className="pastor-img set-bg" data-setbg="img/pastors/2.jpg"></div>
						<h3>Jammy</h3>
						<p>Founders corporate</p>
					</div>
				</div>
				<div className="col-sm-6 col-md-3">
					<div className="pastor">
						<div className="pastor-img set-bg" data-setbg="img/pastors/3.jpg"></div>
						<h3>Artine Nguyen</h3>
						<p>Member</p>
					</div>
				</div>
				<div className="col-sm-6 col-md-3">
					<div className="pastor">
						<div className="pastor-img set-bg" data-setbg="img/pastors/4.jpg"></div>
						<h3>Hieu Nguyen</h3>
						<p>Member</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<Container className="newsletter-section">
			<Row className="row">
				<Col className="col-sm-12 col-md-7">
					<h4>Subscribe And Tell Us Real Story About Your Journey</h4>
				</Col>
				<Col className="col-sm-8 col-md-5 col-sm-offset-2 col-md-offset-0">
					<Form className="newsletter-form">
						<input type="email" placeholder="Enter your email"/>
						<button className="nl-send-btn">Subscribe</button>
					</Form>
				</Col>
			</Row>
		</Container>
		</div>
	)
	}
