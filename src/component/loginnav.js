// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components


// =============================
// COMPONENT CLASS
// =============================
class LoginNav extends React.Component{


//// ==============
//// RENDER
//// ==============

  render() {
    return (
      <div className="login loginnav-wrapper">

      <li className="waves-effect waves-light btn" onClick={() => {this.props.handleView('createUser')}}
      >Create Account</li>
      <li className="waves-effect waves-light btn" onClick={() => {this.props.handleView('loginUser')}}
      >Login</li>
      </div>
    )
  }


}
// =============================
// EXPORT
// =============================
export default LoginNav;
