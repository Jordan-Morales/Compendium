// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components


// =============================
// COMPONENT CLASS
// =============================
class Login extends React.Component{
  // ==============
  // STATE
  // ==============
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  // ==============
  // HANDLERS
  // ==============
  // handles form change
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }

  // handles submit
  handleSubmit = (e) => {
    e.preventDefault()
    // if (this.props.view.page === 'createUser') {
    this.props.loginUser(this.props.handleLogin(this.state));
    // }
  }

  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          username
          <input type="text" placeholder="username" id="username" value={this.state.username} onChange={this.handleChange}/>
        </label><br/>
        <label>
          password
          <input type="password" placeholder="password" id="password" value={this.state.password} onChange={this.handleChange} />
        </label><br/>

        <input type="submit" value="Login"/>
      </form>
    )
  }

}
// =============================
// EXPORT
// =============================
export default Login;
