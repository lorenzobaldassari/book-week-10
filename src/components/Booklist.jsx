import {useState } from "react";
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


const Booklist =()=>{

const [tipo,setTipo]= useState(index)
// eslint-disable-next-line no-unused-vars
const [original,setOriginal]= useState(index)
const [name,setName]= useState(``)
const [singleBookId,setSingleBookId]= useState(``)
    
      const Fantasy = ()=>{
        setTipo(fantasy)
       }
       const Horror = ()=>{
        setTipo(horror)
       }
       const Romance = ()=>{
        setTipo(romance)
       }
       const Scifi = ()=>{
        setTipo(scifi)
       }
       const History = ()=>{
        setTipo(history)
       }
    
         
          const  search= (e)=>{
               e.preventDefault()
               setTipo(original)
                
               
            const a =original.filter(a=>{
                return a.title.toLowerCase().includes(name.toLowerCase())
            })
                setTipo(a)
          }

         const handleInputChange=(value)=>{  
                      setName(value)
                  }

         const  setComment=(val)=>{
                    setSingleBookId(val)
                }




             
           
          
        return(
            <Container fluid>
               
                <Row className="mb-4">
                    <div className="d-flex justify-content-center">
                   <Form className="d-flex justify-content-center" onSubmit={search}>
                      <div className="me-3">
                    <Form.Group className="mb-3">
                         
                        <Form.Control  placeholder="Creca"  onChange={(e)=>handleInputChange(e.target.value)} />
                     </Form.Group>
                    </div>
                <div>

                <Button variant="dark" type="submit">Vai!</Button>
                </div>
            </Form>
                </div>           
                 <div className="mb-3 d-flex justify-content-center">
                    <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={Fantasy}>Fantasy</Button>              
                    <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={Horror}>Horror</Button>              
                    <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={Romance}>Romance</Button>              
                    <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={Scifi}>Scifi</Button>              
                    <Button className='mx-2 w-25 fw-semibold' variant="warning" onClick={History}>History</Button>                                                  
               </div>
                    <Col className="col-8">
                         <Row className="g-4">
                            {
                                
                              tipo.slice(-4).map((book,i)=>{
                                    return (<SingleBook setComment={setComment} key={book.asin}
                                         id={parseInt(book.asin)}  img={book.img} title={book.title} price={book.price}
                                        />
                                        )
                                        
                                })
                                
                            }
                            
                         </Row>

                    </Col>
                    <Col className="col-4">
                            <CommentAera  id={singleBookId} />
                    </Col>
                </Row>
            </Container>
        )
    }

export default Booklist