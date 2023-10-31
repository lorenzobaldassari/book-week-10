import {useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment= (props)=> {

  const[commentObj,setCommentObj]= useState({
    comment:`ciao`,
    rate:`2`,
    elementId:props.Id
  })

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(commentObj),
          headers: {
            'Content-type': 'application/json',
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhOWM5ZmY2ZTNkZDAwMTQ5NWU1ZGYiLCJpYXQiOjE2OTgzMzk5OTksImV4cCI6MTY5OTU0OTU5OX0.gwIIoGT9mPP0rY1ydq5GzBjs_5BJTceiMVSoCpr8NlM",
          },
        }
      )
      if (response.ok) {
        alert('Recensione inviata!')
        setCommentObj({
          comment: '',
          rate: 1,
          elementId:props.Id,
        })
      } else {
        throw new Error('Qualcosa è andato storto')
      }
    } catch (error) {
      alert(error)
    }
  }

 
    return (
      <div className="my-3">
        <Form onSubmit={sendComment}>
          <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
        <Form.Control as="textarea" rows={8}
              type="textArea"
              className='bb'
              value={commentObj.comment}
              onChange={(e) =>
                setCommentObj({
                  ...commentObj,
                  comment: e.target.value,
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Valutazione</Form.Label>
            <Form.Control
              as="select"
              value={commentObj.rate}
              onChange={(e) =>    
                setCommentObj({
                  ...commentObj,
                  rate: e.target.value,
                })
              }
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Invia
          </Button>
        </Form>
      </div>
    )
  }


export default AddComment
