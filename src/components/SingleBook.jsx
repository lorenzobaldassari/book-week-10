import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col,Row,Container } from 'react-bootstrap';
import fantasy from '../books/fantasy.json'
import CommentArea from './CommentArea.jsx'


console.log(fantasy)
class SingleBook extends Component{

    state={
        selected:false
    }

    
        activate =()=>{
        if(this.state.selected===false){
        this.setState({
            selected:true,
        })
        this.props.setComment(this.props.id)

        }
           else{
            this.setState({
                selected:false
            })
            this.props.setComment("niente")}
        }
    
            // ser=()=>
            // { this.props.setComment(this.props.id)}

    render()
    {

           

        return(
            <Col  sm={6} md={4} lg={3} xxl={3} className='colXs'>
                
            <Card onClick={this.activate}  className={this.state.selected===true ? 'redBorder cardBox' : ' cardBox'}>
                  <div className='imgBox w-100 d-flex justify-content-center align-items-center'>
      
                    <Card.Img variant="top" className='w-100 h-100' src={this.props.img} />
                  </div>
                  <Card.Body className='d-flex flex-column justify-content-between align-items-center'>
                    <Card.Title className='cardTitle truncate-3'>{this.props.title}</Card.Title>
                    <Card.Text className='cardText truncate-4'>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                   </Card.Text>
                   {/* <Button variant="success">BUY for {this.props.price} $</Button> */}
                   {/* <CommentArea id={this.props.id}/> */}
                 </Card.Body>
            </Card>  
                </Col>
              ) 

    }
}

export default SingleBook