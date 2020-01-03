// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components


// =============================
// COMPONENT CLASS
// =============================
class Auth extends React.Component{
  // ==============
  // STATE
  // ==============
  constructor() {
    super()
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
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
    this.props.createUser(this.props.handleCreate(this.state))
    // }
  }

  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <div className="row">
      <form className="col 6" onSubmit={this.handleSubmit}>
        <label>
          name
          <input type="text" placeholder="name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label><br/>
        <label>
          username
          <input type="text" placeholder="username" id="username" value={this.state.username} onChange={this.handleChange}/>
        </label><br/>
        <label>
          email
          <input type="text" placeholder="email" id="email" value={this.state.email} onChange={this.handleChange} />
        </label><br/>
        <label>
          password
          <input type="password" placeholder="password" id="password" value={this.state.password} onChange={this.handleChange} />
        </label><br/>

        <button className="waves-effect waves-light btn" type="submit" value="Create User">Create User</button>
      </form>
      </div>
    )
  }

}
// =============================
// EXPORT
// =============================
export default Auth;
