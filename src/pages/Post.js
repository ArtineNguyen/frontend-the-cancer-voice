import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

export default function Post(props) {
    const [title, setTitle] = useState('')
    const [body, setbody] = useState('')
    const [img, setImg] = useState('')
    const [post, setPost] = useState([])
    // currentUser = props.currentUser
    // history = useHistory()
    // if (!currentUser) history.pushState('/')
    useEffect(() => {
        getPost()
    }, [])  
    const create_post = async () => {
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/post/create`, {
            method: "POST",
            headers: {
                Authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "title": title,
                "body": body,
                "img": img
            })
        })
        if (resp.ok) {
            const data = await resp.json()
            getPost()
        }
    }
    const handleSubmit = (p) => {
        p.preventDefault()
        create_post()
    }
    const getPost = async () => {
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/post/render-post`, {
            headers: {
                Authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
        })
        if (resp.ok) {
            const data = await resp.json()
            setPost(data)
        }
    }
    const renderPost = post.map(post => {
        return (
            <>
                <Link to ={`/post/${post.id}`}><h1>{post.title}</h1></Link>
                <img src={post.image} />
                <h2>{post.body}</h2>
                {props.currentUser && props.currentUser.id == post.user_id ? (<>
        <Button onClick={()=> deletePost(post.id)}>Delete</Button>
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>            
                </>) : ""}
            </>
        )
    })
    const deletePost = async(id) => {
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/post/delete/${id}`,{
        method: 'DELETE',    
        headers:{
                Authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            }
        })
        if (resp.ok) getPost()
    }
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
                                    <Link to="/post/8"><h4>Give To End Childhood illnesses</h4></Link>
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
                {props.currentUser ? <> <Form onSubmit={(p) => handleSubmit(p)}>
                <Form.Group>
                    <Form.Label>Input Title</Form.Label>
                    <Form.Control className="input"
                        type="text"
                        onChange={(p) => setTitle(p.target.value)}
                    />
                 </Form.Group>
                <Form.Group>
                    <Form.Label>Input body</Form.Label>
                    <Form.Control className="input"
                        type="text"
                        onChange={(p) => setbody(p.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Input image URL</Form.Label>
                    <Form.Control className="input"
                        type="url"
                        onChange={(p) => setImg(p.target.value)}
                    />
                </Form.Group>
                <Button type="submit">Post</Button> 
            </Form></> : ""}
            {renderPost}
        </Container>
    )
}
