import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <h1>Login Form</h1>
          <form>
          <label>Enter Username </label>
          <input type="text"name="uname"></input><br></br>
          <label>Enter Password</label>
          <input type="text" name="pass"></input><br></br>
          <button type="submit">submit</button>
        </form>
      </div>
      
    )
  }
}
