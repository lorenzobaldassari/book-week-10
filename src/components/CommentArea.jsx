import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Button } from "react-bootstrap";


// const apikey=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjRiN2Y2ZTNkZDAwMTQ5NWU0NTMiLCJpYXQiOjE2OTgzMjU2ODcsImV4cCI6MTY5OTUzNTI4N30.REJTaJMw6lxDXD-JhQNGze2k4dKDtBNP7edMET0V4Gw`
class CommentAera extends Component{
    

    state=({
        data:[],
        comment:true
    })
    
    
 
        change=()=>{
            if(this.state.comment===true){
                this.setState({
                    comment:false
                    })
                    }else{
                        this.setState({
                            comment:true
                            })
                    }
        }

    
    render(){
        return(
            <div>
         
                <CommentList id={this.props.id} array={this.state.data}/>
                <Button onClick={this.change}>Recensisci</Button>
                { this.state.comment===false&&<AddComment  Id={this.props.id} />}
               
              
                
                
            </div>
        )
    }
}




export default CommentAera