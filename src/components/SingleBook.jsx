import { useState } from 'react';

import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import fantasy from '../books/fantasy.json'


console.log(fantasy)
const SingleBook= (props)=>{

    const [selected,setSelected]= useState(false)
    
        const activate =()=>{
        if(selected===false){
        setSelected(true)
        props.setComment(props.id)

        }
           else{
            setSelected(false)
            props.setComment("nessun Commento")}
        }
    
 

   
    

           

        return(
            <Col  sm={6} md={4} lg={3} xxl={3} className='colXs'>
                
            <Card onClick={activate}  className={selected===true ? 'redBorder cardBox' : ' cardBox'}>
                  <div className='imgBox w-100 d-flex justify-content-center align-items-center'>
      
                    <Card.Img variant="top" className='w-100 h-100' src={props.img} />
                  </div>
                  <Card.Body className='d-flex flex-column justify-content-between align-items-center'>
                    <Card.Title className='cardTitle truncate-3'>{props.title}</Card.Title>
                    <Card.Text className='cardText truncate-4'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                   </Card.Text>
                 </Card.Body>
            </Card>  
                </Col>
              ) 

    
}

export default SingleBook