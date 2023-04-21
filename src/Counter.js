import React, {Component, Fragment} from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        // this.state = {
        //     counter:0
        // }
    }

    state = {
        counter:0,
    }

    handleIncrement = () => {
        //never mutate the state directly
        // if you want to mutate the state use setState
        this.setState({
            counter : this.state.counter + 1 
        })
    }

    handleDecrement = () =>{
        this.setState({
            counter:this.state.counter - 1  
        })
    }

    render(){
        return(
            <>
                <h2>Counter App</h2>
                <h4>Count : {this.state.counter}</h4>
                <button className="btn btn-primary" onClick={this.handleIncrement}>Increment</button>
                <button className="btn btn-danger ms-1" onClick={this.handleDecrement}>Decrement</button>
            </>
        )
    }
}

export default Counter