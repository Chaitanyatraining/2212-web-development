import React, { Component } from 'react'

class Pagination extends Component {

    state = {
        usersData: [],
        pageNumber: ''
    }

    componentDidMount() {
        this.getUserData();
    }

    getUserData = async () => {
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
            {
                method: 'GET',
                headers: {
                    'app-id': '633e33e98efd49504c9c7643'
                }
            }
        )
        const { data } = await response.json()
        console.log(data)
        this.setState({ usersData: data })
    }

    componentDidUpdate(prevsProps, prevsState){
        if(prevsState.pageNumber !== this.state.pageNumber){
            this.getUserData();
        }
    }

    handleBtnClick = (num) =>{
        this.setState({pageNumber: num})
    }

    render() {
        return (
            <>
                <div className='container text-center'>
                    <h2>Pagination</h2>
                    <div className='row'>
                      {
                        this.state.usersData.length ? (
                            <div className='row'>
                               {
                                this.state.usersData.map((user)=>(
                                    <div className='col-md-6 border my-1 p-3'>
                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <img src={user.picture} alt={user.firstName} />
                                            </div>
                                            <div className='col-md-9'>
                                                <h5>{user.id}</h5>
                                                <p>{user.title} {user.firstName} {user.lastName}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                               }
                            </div> 
                        ) : <p>Loading</p>
                      }  
                </div>

                {[1,2,3,4,5,6,7,8,9].map((num)=>(
                    <button className='btn btn-primary m-1' onClick={this.handleBtnClick(num)}>{num}</button>
                ))}
            </div >
            </>
        )
    }
}

export default Pagination