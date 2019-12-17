import React from 'react'
import { Container, Col } from 'react-bootstrap';

export default function Blog() {
    return (
        	<Container className="blog-section blog-page spad">
                    <div className="section-title">
                        <span>Experience God's Presence</span>
                        <h2>LATEST NEWS</h2>
                    </div>
                    <Row className="row">
                        <Col className="col-sm-4">
                            <div className="blog-item">
                                <div className="bi-thumb set-bg" data-setbg="img/blog/1.jpg"></div>
                                <div className="bi-content">
                                    <div className="date">On Monday 22 May, 2020</div>
                                    <h4><a href="single-blog.html">Give To End Childhood illnesses</a></h4>
                                    <div className="bi-author">by <a href="#">Sofia Joelsson</a></div>
                                    <a href="#" className="bi-cata">Hope & Faithful</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-sm-4">
                            <div className="blog-item">
                                <div className="bi-thumb set-bg" data-setbg="img/blog/2.jpg"></div>
                                <div className="bi-content">
                                    <div className="date">On Monday 15 May, 2020</div>
                                    <h4><a href="single-blog.html">Meet Our 2018 Patient Ambassadors</a></h4>
                                    <div className="bi-author">by <a href="#">Sofia Joelsson</a></div>
                                    <a href="#" className="bi-cata">color Story</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-sm-4">
                            <div className="blog-item">
                                <div className="bi-thumb set-bg" data-setbg="img/blog/3.jpg"></div>
                                <div className="bi-content">
                                    <div className="date">On Monday 13 May, 2018</div>
                                    <h4><a href="single-blog.html">Why We Give Back To Children's Colorado</a></h4>
                                    <div className="bi-author">by <a href="#">Sofia Joelsson</a></div>
                                    <a href="#" className="bi-cata">Sermon & Pray</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-sm-4">
                            <div className="blog-item">
                                <div className="bi-thumb set-bg" data-setbg="img/blog/4.jpg"></div>
                                <div className="bi-content">
                                    <div className="date">On Monday 13 May, 2018</div>
                                    <h4><a href="single-blog.html">Give To End Childhood illnesses</a></h4>
                                    <div className="bi-author">by <a href="#">Sofia Joelsson</a></div>
                                    <a href="#" className="bi-cata">Hope & Faithful</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-sm-4">
                            <div className="blog-item">
                                <div className="bi-thumb set-bg" data-setbg="img/blog/5.jpg"></div>
                                <div className="bi-content">
                                    <div className="date">On Monday 28 May, 2021</div>
                                    <h4><a href="single-blog.html">Meet Our 2018 Patient Ambassadors</a></h4>
                                    <div className="bi-author">by <a href="#">Sofia Joelsson</a></div>
                                    <a href="#" className="bi-cata">color Story</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-sm-4">
                            <div className="blog-item">
                                <div className="bi-thumb set-bg" data-setbg="img/blog/6.jpg"></div>
                                <div className="bi-content">
                                    <div className="date">On Monday 01 May, 2022</div>
                                    <h4><a href="single-blog.html">Why We Give Back To Children's Colorado</a></h4>
                                    <div className="bi-author"> by <a href="#">Sofia Joelsson</a></div>
                                    <a href="#" className="bi-cata">Sermon & Pray</a>
                                </div>
                            </div>
                        </Col>

                    <Col className="pagination-area">
                        <ul className="pageination-list">
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">Next <i className="fa fa-angle-double-right"></i></a></li>
                        </ul>
                        <p>Page 1 of 08 results</p>
                    </Col>
                </Row>
            </Container>
            );
        }
