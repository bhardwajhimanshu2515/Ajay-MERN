import React from "react";

class Forms extends React.Component{
    constructor(props){
        super(props)
        this.state={
            number:0
        }
    }

    handleChange(e){
        this.setState({number:e.target.value})
        console.log(e.target.value)
    }

    handleClick(e){
        console.log(this.state.number)
    }

    render(){
        return(
            <div id="container">
                <input type="number" placeholder="enter a fuckin num" onChange={(e)=>{
                  this.handleChange(e)  
                }} />
                <button onClick={(e)=>{
                   this.handleClick()
                }}>Daba na</button>
                <p>{this.state.number}</p>
            </div>
        )
    }
} 

export default Forms;