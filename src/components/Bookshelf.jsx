import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fantasy from '../books/fantasy.json'
import history from '../books/history.json'
import horror from '../books/horror.json'
import romance from '../books/romance.json'
import scifi from '../books/scifi.json'
import {Container,Row, Col} from "react-bootstrap"
import './bookshelf.css'
import { Component } from 'react';


let index=[]


class Bookshelf extends Component  {
  state={
    tipo:index
  }
  
  render(){
    
    // let index=horror
    
   const Fantasy = ()=>{
    this.setState({tipo:fantasy})
   }
   const Horror = ()=>{
    this.setState({tipo:horror})
   }
   const Romance = ()=>{
    this.setState({tipo:romance})
   }
   const Scifi = ()=>{
    this.setState({tipo:scifi})
   }
   const History = ()=>{
    this.setState({tipo:history})
   }
  
  
  return (
      <Container fluid>
        
         <div className="mb-3 d-flex justify-content-center">
            <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={Fantasy}>Fantasy</Button>              
            <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={Horror}>Horror</Button>              
            <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={Romance}>Romance</Button>              
            <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={Scifi}>Scifi</Button>              
            <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={History}>History</Button>                                                  
        </div>
        <Row className='g-3'>
          {this.state.tipo.map((book)=>{
          return(
          <Col key={book.asin} sm={6} md={4} lg={3} xxl={2} className='colXs'>
      <Card  className='cardBox'>
        <div className='imgBox w-100 d-flex justify-content-center align-items-center'>

      <Card.Img variant="top" className='w-100 h-100' src={book.img} />
        </div>
      <Card.Body className='d-flex flex-column justify-content-between align-items-center'>
        <Card.Title className='cardTitle truncate-3'>{book.title}</Card.Title>
        <Card.Text className='cardText truncate-4'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="success">BUY for {book.price} $</Button>
      </Card.Body>

      </Card>  
          </Col>
          )
       } )}
        </Row>
      </Container> 
      
        
      
    )
}}

export default Bookshelf




