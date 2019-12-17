import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../pages/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import Countdown from 'react-countdown-now';



export default function Home() {
	const handleOnChange = (e) => {
		const name = e.target
	}
	const renderer = ({ days, hours, minutes, seconds, completed }) => {
		if (completed) {
			// Render a completed state
			return <h2>Let's join with us </h2>;
		} else {
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
	const  d = new Date(DATETIME);
		
		
		return (
			<Col>
				<Container className="about-section spad">
					<Row className="row">
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




				<Container className="event-list-section spad">
						<Row className="container">
							<Row className="row">
								<Row>
									<div className="section-title title-center">
										<span>Experience God's Presence</span>
										<h2>Upcoming Events</h2>
										<Countdown date={d} renderer={renderer} />
									</div>
								</Row>
								{/* <Row className="col-md-6 text-right event-more">
									<a href="/event" className="site-btn">View all events</a>
								</Row> */}
							</Row>
							<Col className="event-list">
								<Col className="el-item">
									<Row className="row">
										<Col className="col-md-4">
											<div className="el-thubm set-bg">
												<img src="https://images.unsplash.com/photo-1533222535026-754c501569dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"></img>
											</div>
										</Col>
										<Col className="col-md-8">
											<div className="el-content">
												<div className="el-header">
													<div className="el-date">
														<h2>20</h2>
														may
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
										</Col>
									</Row>
								</Col>
								<div className="el-item">
									<Row className="row">
										<Col className="col-md-4">
											<div className="el-thubm set-bg">
												<img src="https://images.unsplash.com/photo-1533222340060-cdbedaa5760f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1265&q=80"></img>
											</div>
										</Col>
										<Col className="col-md-8">
											<div className="el-content">
												<div className="el-header">
													<div className="el-date">
														<h2>16</h2>
														oct
													</div>
												</div>
											
										
													<h3>Your Support Helps Kids Survive & Thrive</h3>
													<div className="el-metas">
														<div className="el-meta"><i className="fa fa-user"></i> Vincent John</div>
														<div className="el-meta"><i className="fa fa-calendar"></i> Monday, 08:00 Am </div>
														<div className="el-meta"><i className="fa fa-map-marker"></i> Central District, Riga, LV-1050, Latvia</div>
													</div>
												<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
												<a href="" className="site-btn sb-line">Read more</a>
											</div>
										</Col>
									</Row>
								</div>
							</Col>
						</Row>
					</Container>



				<section className="donate-section spad set-bg" data-setbg="img/donate-bg.jpg">
						<div className="container">
							<div className="row">
								<div className="col-md-6 col-lg-7 donate-content">
									<h2>A Children’s Miracle Network Hospital</h2>
									<ul className="donate-info">
										<li>Sermon From: <span>Vincent John</span></li>
										<li>Categories: <span>God, Pray</span></li>
										<li><span>On Monday 23 DEC, 2018</span></li>
									</ul>
									<p>For God did not send his Son into the world to condemn the world, but to save the world through him. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese mollit anim id est laborum. Sed ut perspiciatis unde omnis iste.</p>
								</div>
								<div className="col-md-6 col-lg-5">
									<div className="donate-card">
										<h2>$45.000<span>Remaining to helps</span></h2>
										<div className="donate-progress-bar">
											<div className="pb-inner">
												<span>60%</span>
											</div>
										</div>
										<div className="donate-progress-info">
											<div className="di-left">
												Raised: <span>$50,000</span>
											</div>
											<div className="di-right">
												Goal: <span>$95,000</span>
											</div>
										</div>
										<a href="" className="site-btn sb-full">DONATE NOW</a>
									</div>
								</div>
							</div>
						</div>
					</section>



				<section className="blog-section spad">
						<div className="container">
							<div className="section-title">
								<span>Experience God's Presence</span>
								<h2>LATEST NEWS</h2>
							</div>
							<div className="row">
								<div className="col-sm-6 col-md-4">
									<div className="blog-item">
										<div className="bi-thumb set-bg" data-setbg="img/blog/1.jpg"></div>
										<div className="bi-content">
											<div className="date">On Monday 13 May, 2018</div>
											<h4><a href="single-blog.html">Give To End Childhood illnesses</a></h4>
											<div className="bi-thumb set-bg" data-setbg="img/blog/2.jpg">
											<img src="https://images.unsplash.com/photo-1516890896652-41ca1a35787c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1201&q=80"></img>
										</div>
											<div className="bi-author">by <a href="#">Sofia Joelsson</a></div>
											<a href="#" className="bi-cata">Hope & Faithful</a>
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-md-4">
									<div className="blog-item">
											<div className="bi-content">
											<div className="date">On Monday 13 May, 2018</div>
											<h4><a href="single-blog.html">Meet Our 2018 Patient Ambassadors</a></h4>
											<div className="bi-thumb set-bg" data-setbg="img/blog/2.jpg">
											<img src="https://images.unsplash.com/photo-1516890896652-41ca1a35787c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1201&q=80"></img>
										</div>
											<div className="bi-author">by <a href="#">Sofia Joelsson</a></div>
											<a href="#" className="bi-cata">color Story</a>
										</div>
									</div>
								</div>
								<div className="col-sm-6 col-md-4">
									<div className="blog-item">
										<div className="bi-thumb set-bg" data-setbg="img/blog/3.jpg"></div>
										<div className="bi-content">
											<div className="date">On Monday 13 May, 2018</div>
											<h4><a href="single-blog.html">Why We Give Back To Children's Colorado</a></h4>
											<div className="bi-thumb set-bg" data-setbg="img/blog/2.jpg">
											<img src="https://images.unsplash.com/photo-1516890896652-41ca1a35787c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1201&q=80"></img>
										</div>
											<div className="bi-author">by <a href="#">Sofia Joelsson</a></div>
											<a href="#" className="bi-cata">Sermon & Pray</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>


				<section className="newsletter-section">
						<div className="container">
							<div className="row">
								<div className="col-sm-12 col-md-7">
									<h4>Subscribe And Tell Us Real Story About Your Journey</h4>
								</div>
								<div className="col-sm-8 col-md-5 col-sm-offset-2 col-md-offset-0">
									<form className="newsletter-form">
										<input type="email" placeholder="Enter your email" />
						<button className="nl-send-btn">subscribe</button>
									</form>
								</div>
							</div>
						</div>
					</section>
					<Footer/>
			</Col>
			)
	}

	