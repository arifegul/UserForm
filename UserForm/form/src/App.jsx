import React, { Component } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

let endpoint = "hhttp://localhost:3000/form/server/main.go";

class Form extends Component {
    constructor() {
        super()
        this.state = {
            fullName:'',
            emaiil:'',
            message:''
        }
        this.changefullName = this.changefullName.bind(this)
        this.changeemail = this.changeemail.bind(this)
        this.changemessage = this.changemessage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    changefullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeemail(event){
        this.setState({
            email:event.target.value
        })
    }
    changemessage(event){
        this.setState({
            message:event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const infoform = {
            fullName:this.state.fullName,
            email:this.state.email,
            message:this.state.message
        }

        axios.post(endpoint, infoform)
            .then(response => console.log(response.data))

        this.setState({
            fullName:'',
            email:'',
            message:''
        })
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='app-wrapper'>
                        <div>
                             <h2 className="title">User Form</h2>
                         </div>
                        <form className="form-wrapper" onSubmit = {this.onSubmit}>
                            <input className="input" type = 'text'
                            placeholder = 'Full Name'
                            onChange = {this.changefullName}
                            value = {this.state.fullName}
                            />
                             <input className="input" type = 'text'
                            placeholder = 'E-Mail'
                            onChange = {this.changeemail}
                            value = {this.state.email}
                            />
                             <input className="input" type = 'text'
                            placeholder = 'Message'
                            onChange = {this.changemessage}
                            value = {this.state.message}
                            />

                            <input className="submit" type='submit'
                            value='Send'
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Form;