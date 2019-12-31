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
    console.log(post, "post")
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
    const renderPost = () => {
        return post.map(post => {
            return (
                <>
                    <Col className="col-sm-4">
                        <div className="blog-item">
                            <div className="bi-thumb set-bg" style={{backgroundImage: `url(${post.image})`}}></div>
                            <div className="bi-content">
                                <div className="date">{post.created_at}</div>
                                <Link to={`/post/${post.id}`}><h4>{post.title}</h4></Link>
                                <div className="bi-author">by <span><strong>{post.user_id && post.user_id.name}</strong></span></div>
                                <div><p>{post.view_count}</p></div>
                            </div>
                        </div>
                        variant="light"
                    </Col>
                    {props.currentUser && props.currentUser.id == post.user_id ? (<>
                        <Button onClick={() => deletePost(post.id)}>Delete</Button>
                        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
                    </>) : ""}
                </>
            )
        })
    }
    const deletePost = async (id) => {
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/post/delete/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            }
        })
        if (resp.ok) getPost()
    }
    const commentPost = async (id) => {

    }
    return (
        <Container className="blog-section blog-page spad">
            <div className="section-title">
                <span>Experience God's Presence</span>
                <h2>LATEST NEWS</h2>
            </div>

            <Row className="row">
                
                {renderPost()}
            </Row>
            {props.currentUser ? <> <Form onSubmit={(p) => handleSubmit(p)}>
                <div className="col align-self-center">
                    <Form.Group>
                        <Form.Label>Input Title</Form.Label>
                        <Form.Control className="input"
                            type="text"
                            onChange={(p) => setTitle(p.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Input body</Form.Label>
                        <Form.Control className="input" as="textarea" rows="10" type="text" onChange={(p) => setbody(p.target.value)}
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
                </div>
            </Form></> : ""}
            

        </Container>
    )
}
