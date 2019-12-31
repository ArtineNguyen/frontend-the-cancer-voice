import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


export default function comment(props) {
    // const [comment, setComment] = useState([])
    const getComment = async () => {
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/comment/render-comment`, {
            headers: {
                Authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            },
        })
        if (resp.ok) {
            const data = await resp.json()
            // setComment(data)
        }

    }
    const deleteComment = async(id) => {
        const resp = await fetch(`${process.env.REACT_APP_URL_DATABASE}/comment/delete/${id}`,{
        method: 'DELETE',    
        headers:{
                Authorization: localStorage.getItem('token'),
                "Content-Type": "application/json",
            }
        })
        if (resp.ok) getComment()
    }
    return (
        <div>
            {props.content.body}
            <Button onClick={()=> deleteComment(props.content.id)}>Delete</Button>
        </div>
    )
}
