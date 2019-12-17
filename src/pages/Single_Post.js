import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import Footer from './Footer'
import { Container, Row, Col } from 'react-bootstrap'
import Countdown from 'react-countdown-now';
import { useParams } from 'react-router-dom'


export default function Single_Post() {
    const { id } = useParams()
    const [post, setPost] = useState({})
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
                                    <div className="date">On Sunday 15 May, 2020</div>
                                    <h4>{post.title}</h4>
                                    <p>{post.body}</p>
                                    <img src={post.image_url}/>
                                </div>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            )
        }