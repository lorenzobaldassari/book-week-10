import { Component } from "react";
import  SingleBook from './SingleBook'
import {Row,Container,Col } from 'react-bootstrap';
import fantasy from '../books/fantasy.json'
import Button from 'react-bootstrap/Button';
import history from '../books/history.json'
import horror from '../books/horror.json'
import romance from '../books/romance.json'
import scifi from '../books/scifi.json'
import Form from 'react-bootstrap/Form';
import CommentAera from "./CommentArea";
let index=[]


class Booklist extends Component{



    state={
        tipo:index,
        original:index,
        name:''
      }
    
       Fantasy = ()=>{
          this.setState({tipo:fantasy,
            original:fantasy})
          console.log(`ok`)
         }
          Horror = ()=>{
          this.setState({tipo:horror,
        original:horror})
         }
          Romance = ()=>{
          this.setState({tipo:romance,
            original:romance})
         }
          Scifi = ()=>{
          this.setState({tipo:scifi,
            original:scifi})
         }
          History = ()=>{
          this.setState({tipo:history,
            original:history})
         }
    
         
           search= (e)=>{
               e.preventDefault()
              
               this.setState({
                   ...this.state,
                   tipo:this.state.original
                })
               
            const a = this.state.original.filter(a=>{
                return a.title.toLowerCase().includes( this.state.name.toLowerCase())
            })
           
                this.setState({
                    ...this.state,
                    tipo:a
                })
          }

          handleInputChange=(value)=>{
              this.setState({                  
                      ...this.state,
                      name:value    
                  })}


                  setComment=(val)=>{
                    this.setState({
                        singleBookId:val
                    })
                  }
    render(){




             
           
          
        return(
            <Container fluid>
               
                <Row>
                    <Col className="col-8">
                    <div className="d-flex justify-content-center">
                   <Form className="d-flex justify-content-center" onSubmit={this.search}>
                      <div className="me-3">
                    <Form.Group className="mb-3">
                         
                        <Form.Control  placeholder="Creca"  onChange={(e)=>this.handleInputChange(e.target.value)} />
                     </Form.Group>
                    </div>
                <div>

                <Button variant="dark" type="submit">Vai!</Button>
                </div>
            </Form>
                </div>           
                 <div className="mb-3 d-flex justify-content-center">
                    <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={this.Fantasy}>Fantasy</Button>              
                    <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={this.Horror}>Horror</Button>              
                    <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={this.Romance}>Romance</Button>              
                    <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={this.Scifi}>Scifi</Button>              
                    <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={this.History}>History</Button>                                                  
               </div>
                         <Row className="g-4">
                            {
                                this.state.tipo.slice(-4).map((book,i)=>{
                                    return (<SingleBook setComment={this.setComment} key={book.asin} id={parseInt(book.asin)}  img={book.img} title={book.title} price={book.price}
                                        />
                                        )
                                        
                                })
                                
                            }
                            
                         </Row>

                    </Col>
                    <Col className="col-4">
                            <CommentAera  id={this.state.singleBookId} />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Booklist