import {useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Button } from "react-bootstrap";


// const apikey=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjRiN2Y2ZTNkZDAwMTQ5NWU0NTMiLCJpYXQiOjE2OTgzMjU2ODcsImV4cCI6MTY5OTUzNTI4N30.REJTaJMw6lxDXD-JhQNGze2k4dKDtBNP7edMET0V4Gw`
const CommentAera= ({id})=>{

    // eslint-disable-next-line no-unused-vars
    const[data, setData]= useState([])
    const[comment,setComment]= useState(true)
    
    
 
       const change=()=>{
            if(comment===true){
                    setComment(false)
            }else{  setComment(true)
            }
        }

    
    
        return(
            <div>
         
                <CommentList id={id} array={data}/>
                <Button onClick={change}>Recensisci</Button>
                {comment===false&&<AddComment  Id={id} />}
               
              
                
                
            </div>
        )
    }





export default CommentAera