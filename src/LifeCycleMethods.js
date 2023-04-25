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
        this.setState({usersdata:data})
        console.log(this.state.usersdata)
    }

  render() {
    return (
      <div>
        <h2>LifeCycleMethods</h2>
        <table>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
          {
            this.state.usersdata ? (
              this.state.usersdata.map((user)=>(
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            ) : <p>Loading...</p>
          }
        </table>
      </div>
    )
  }
}

export default LifeCycleMethods