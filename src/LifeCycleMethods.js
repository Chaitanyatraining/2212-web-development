import React, { Component } from 'react'
import Counter from './Counter';

class LifeCycleMethods extends Component {
    constructor(){
        super()
        console.log('constructor Executed')
    }

    state = {
       usersdata:[]
    }

    static getDerivedStateFromProps(){
        console.log('static getDerievedStateFromProps executed');
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount Executed');
        this.getData();
    }

    getData = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data)
    }

  render() {
    console.log('render executed')
    return (
      <div>
        <h2>LifeCycleMethods</h2>
      </div>
    )
  }
}

export default LifeCycleMethods