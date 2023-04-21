import React, { Component } from 'react'

class ContactUs extends Component {

        state = {
            firstName : '',
            lastName : '',
            email : '',
            phone : '',
            firstNameErr:'',
            lastNameErr:'',
            emailErr:'',
            phoneErr:''
        }

    //validation
    // firstName >4
    // lastName >1
    // phoneNumber = 10
    // email '@' 

     handleSubmit = (e) => {
        e.preventDefault();
      this.validateForm();
    }

    validateForm = () =>{
        let firstNameErr = '';
        let lastNameErr = '';
        let phoneErr = '';
        let emailErr = '';

        if(this.state.firstName.length<=4){
            firstNameErr = "First name should be atleast 4 character"
        }

        if(this.state.lastName.length < 1){
            lastNameErr = 'last name should be atleast one char'
        }

        if(this.state.phone.length !== 10){
            phoneErr = 'enter a valid phonenumber'
        }

        if(!this.state.email.includes('@')){
            emailErr = "enter a valid email"
        }

        // falsy values
        // '', null, 0 , undefined , false,NaN

        if(firstNameErr || lastNameErr || emailErr || phoneErr){
            this.setState({firstNameErr, lastNameErr, emailErr, phoneErr })
        }else{
            this.setState({firstNameErr, lastNameErr, emailErr, phoneErr })
        }
    }

     handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name] : value })
        console.log(this.state)
    }

render(){
    return (
        <center>
            <h2>Contact Us</h2>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input
                                className='form-control m-1'
                                type="text"
                                placeholder='Enter firstName'
                                name="firstName"
                                onChange={this.handleChange}
                                value={this.state.firstName}
                            />
                            <p className='text-danger'>{this.state.firstNameErr}</p>
                            <input 
                            className='form-control m-1'
                             type="text"
                            placeholder='Enter lastName' 
                            name="lastName"
                            onChange={this.handleChange}
                            value={this.state.lastName}
                            />
                            <p className='text-danger'>{this.state.lastNameErr}</p>
                            <input className='form-control m-1'
                             type="text"
                              placeholder='Enter phone' 
                              name="phone"
                              onChange={this.handleChange}
                              value={this.state.phone}
                              />
                              <p className='text-danger'>{this.state.phoneErr}</p>
                            <input className='form-control m-1'
                             type="text"
                              placeholder='Enter email'
                               name="email"
                               onChange={this.handleChange}
                               value={this.state.email}
                                />
                                <p className='text-danger'>{this.state.emailErr}</p>
                            <button className='btn btn-primary mt-1'>Submit</button>
                        </form>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </div>
        </center>
    )
}
}

export default ContactUs