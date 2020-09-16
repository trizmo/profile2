import React, { Component } from 'react'
import axios from 'axios'
import { Input, Button, Spinner } from 'reactstrap'

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      contact: null,
      message: null,
      isSending: false,
      resMessage: null,
    };
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInput(event) {
    const name = event.target.name
    const value = event.target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit() {
    this.setState({
      isSending: true
    }, () => {
      axios
        .post('/api/mail', this.state)
        .then(res => {
          console.log(res)
          if (res.status === 200) {
            this.setState({
              isSending: false,
              resMessage: res.data
            })
          }
        })
    })
  }



  render() {
    return (
      <div className='contact-wrapper component-wrapper column-center-center' id="contact">
        <h3>CONTACT</h3>
        {this.state.resMessage ? (
          <p>{this.state.resMessage}</p>
        ) : (
            <div className=''>
              <Input type="text" name="name" placeholder="Name" onChange={this.handleInput}></Input>
              <Input type="text" name="contact" placeholder="Email or Phone" onChange={this.handleInput}></Input>
              <Input type="textarea" name="message" placeholder="Message" onChange={this.handleInput}></Input>
              {this.state.isSending ? (<Spinner />) : (
                <Button onClick={() => this.handleSubmit()}>Submit</Button>
              )}
            </div>
          )}
      </div>
    )
  }
}
