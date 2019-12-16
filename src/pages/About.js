import React from 'react'
import NavBar from '../components/NavBar'
import { Container, Row, Col, Navbar } from 'react-bootstrap'


export default function About() {
    return (
		<div>
			<Container>
                <Row className="justify-content-md-center">
					<Col class="xs={6} md={4} about-img1w">
                        <img src="https://images.unsplash.com/photo-1504439158909-5a2f08876082?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" alt=""></img>
                    </Col>
                    <Col class="xs={12} md={8} about-content">
                        <h2>No one fights cancer alone</h2>
                        <p>A diagnosis that turns the lives of the entire family upside down.</p>
                        <p>The objective of The Cancer Voice VietNam is to put a spotlight on the types of cancer that largely affect children, survivorship issues and – importantly – to help raise funds for cure and family support.</p>
						<h3>Our Mission</h3>
						<p>We are a group of volunteers who aim to make The Cancer Voice be heard around VietNam.</p>
						<p>We are fighting together with the children who got cancer.</p>
                        <a href="" class="site-btn sb-wide">join with us</a>
                    </Col>
                </Row>
            </Container>

			<Col class="services-section spad">
				<Row class="col-sm-4">
					<div class="service-box">
						<h4><i class="fa fa-fire"></i>WHAT WE CAN DO TOGETHER?</h4>
						<p>Excepteur sint occaecat cupidatat non, <br></br> sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
						<a href="#" class="s-readmore">Readmore <i class="fa fa-angle-double-right"></i></a>
					</div>
				</Row>
				<div class="col-sm-4">
					<div class="service-box">
						<h4><i class="fa fa-eye"></i>Our Vision</h4>
						<p>Excepteur sint occaecat cupidatat non, <br></br> sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
						<a href="#" class="s-readmore">Readmore <i class="fa fa-angle-double-right"></i></a>
					</div>
				</div>
				<div class="col-sm-4">
					<div class="service-box">
						<h4><i class="fa fa-heart"></i>Our Mission</h4>
						<p>Excepteur sint occaecat cupidatat non, <br></br> sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
						<a href="#" class="s-readmore">Readmore<i class="fa fa-angle-double-right"></i></a>
					</div>
				</div>
			</Col>

	<section class="pastors-section spad">
		<div class="container">
			<div class="section-title">
				<span>Experience God's Presence</span>
				<h2>Our Pastors</h2>
			</div>
			<div class="row">
				<div class="col-sm-6 col-md-3">
					<div class="pastor">
						<div class="pastor-img set-bg" data-setbg="img/pastors/1.jpg"></div>
						<h3>Aaron Ballance</h3>
						<p>Pastor</p>
					</div>
				</div>
				<div class="col-sm-6 col-md-3">
					<div class="pastor">
						<div class="pastor-img set-bg" data-setbg="img/pastors/2.jpg"></div>
						<h3>Billy Graham</h3>
						<p>Lead Pastor</p>
					</div>
				</div>
				<div class="col-sm-6 col-md-3">
					<div class="pastor">
						<div class="pastor-img set-bg" data-setbg="img/pastors/3.jpg"></div>
						<h3>Lead Pastor</h3>
						<p>Pastor</p>
					</div>
				</div>
				<div class="col-sm-6 col-md-3">
					<div class="pastor">
						<div class="pastor-img set-bg" data-setbg="img/pastors/4.jpg"></div>
						<h3>Pat Robertson</h3>
						<p>Protestant Clergy</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	
	<section class="newsletter-section">
		<div class="container">
			<div class="row">
				<div class="col-sm-12 col-md-7">
					<h4>Subscribe And Tell Us Real Story About Your Journey</h4>
				</div>
				<div class="col-sm-8 col-md-5 col-sm-offset-2 col-md-offset-0">
					<form class="newsletter-form">
						<input type="email" placeholder="Enter your email"/>>
						<button class="nl-send-btn">Subscribe</button>
					</form>
				</div>
			</div>
		</div>
		</section> 
		</div>
	)
	}
