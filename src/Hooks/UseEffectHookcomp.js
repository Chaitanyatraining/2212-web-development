import React, { useEffect, useState } from 'react'

function UseEffectHookcomp() {
    const [userData, setUserData] = useState([]);

    useEffect(()=>{
        // componentDidMount and componentDidUpdate
        getData();
    },[])

    // useEffect will take two arguments
    // 1) callback function 
    // 2) dependancy array

    // if you are not passing the depandency array, the useEffect will be called when the state is 
    // updated

    // if you pass the dependancy array as an empty array, the useEffect will be called for the first time when the component
    // is mounted on the DOM.

   const getData = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        setUserData(data);
    }

  return (
    <center>
        <h2>UseEffectHookcomp</h2>
        <table className='hover'>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
          {
           userData ? (
            userData.map((user)=>(
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))
            ) : <p>Loading...</p>
          }
        </table>
    </center>
  )
}

export default UseEffectHookcomp