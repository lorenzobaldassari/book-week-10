import {useEffect, useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';






const CommentList=({array,id})=>{
 
    const [reservation,setReservation]= useState([])
    const [loading,setLoading]= useState(true)

    const getComment=()=>{
        let index
            if(id!==``)
            {index=id}
            else{
                index=`nessun commento`
            }

        fetch(`https://striveschool-api.herokuapp.com/api/comments/${index}`,{headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNmNhZWY2ZTNkZDAwMTQ5NWU0NzMiLCJpYXQiOjE2OTgzMjc3MjYsImV4cCI6MTY5OTUzNzMyNn0.tiIIVH3G0CZxJMnN5wdW_wBXmeiHiRSF4i4GjMz16jA"
            }}
       )
        .then((response)=>{
            if(response.ok){
                return  response.json()
            }else{
                throw new Error(`errore nel recuper informazioni`)
            }
        })
        .then((data)=>{
            setReservation(data)
            setLoading(false)
        })
        .catch(error=>{
            console.log(`ERROR`,error)
            setLoading(false)
        })}
        // componentDidUpdate(prevProps,prevState){
        //     if(prevProps.id !== this.props.id){
        //         this.getComment()
        //     }
        // }

        useEffect(()=>{
            getComment()
        },[id])



       
        return(<>
                
            <h2>Recensioni</h2>
            <ListGroup className="mb-3">
                {
                    reservation.map((comment)=>{    
                       return <ListGroup.Item variant="primary" key={comment._id}>{comment.comment}*--*{comment.rate}</ListGroup.Item>         
                    })
                }
            </ListGroup>
                </>
        )
    }





export default CommentList