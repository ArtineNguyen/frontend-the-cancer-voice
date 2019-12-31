import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
import Countdown from 'react-countdown-now';
import { useParams } from 'react-router-dom'
import Comment from "../components/comment"

export default function Single_Post() {
    const { id } = useParams()
    const [post, setPost] = useState({})
    const [commentInput, setCommentInput] = useState({})
    const getPost = async () => {
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/post/single-post/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
        })
        if (resp.ok) {
            const data = await resp.json()
            setPost(data)
        }
    }

    const handleOnChange = (e) => {
        e.preventDefault()
        console.log(commentInput)
        setCommentInput({...commentInput, [e.target.name]: e.target.value})
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch(`${process.env.REACT_APP_URL_DATABASE}/post/single-post/${id}/comment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Token ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(commentInput)
        })
        const data = await res.json()
        if(data.status === "OK"){
            getPost()
        }
    }

    useEffect(() => {
        getPost()
    }, [])

            return (
                <Container className="blog-section spad">
                    <Row className="section-title d-flex justify-content-center align-items-center">
                        <span>Together we make better</span>
                        <h2>LATEST NEWS</h2>
                    </Row>
                    <Row>
                        <Container className="col-sm-12">
                            <Row className="blog-item">
                                <div className="bi-thumb set-bg" data-setbg="larm-rmah-AEaTUnvneik-unsplash.jpg"></div>
                                <div className="bi-content">
                                    <div className="date">{post.created_at}</div>
                                    <h4>{post.title}</h4>
                                    <p>{post.body}</p>
                                    <img src={post.image_url}/>
                                    <p></p>
                                </div>
                            </Row>
                            <Row className="blog-comment">
                                <form className="w-100" onChange={handleOnChange} onSubmit={handleOnSubmit}>
                                    <input name="content" placeholder="Put your content here..."></input>
                                </form>
                            </Row>
                            <Row className="d-flex flex-column justify-content-center align-items-center p-2">
                                {post.comments && post.comments.map((comment) => {
                                    return <Comment content={comment} />
                                })}
                            </Row>
                        </Container>
                    </Row>
                </Container>
            )
        }