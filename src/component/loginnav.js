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
      {this.props.user.status === 'valid login'
      ?
        <button className="waves-effect waves-light btn btn-btm" onClick={this.props.logout}>
        LogOut
        </button>

      : null
    }
    {this.props.user.status === 'valid login'
    ? null
    :
      <button className="waves-effect waves-light btn btn-btm" onClick={() => {this.props.handleView('createUser')}}
      >Create Account</button>
    }
      <button className="waves-effect waves-light btn btn-btm" onClick={() => {this.props.handleView('loginUser')}}
      >Login</button>
      </div>

    )
  }


}
// =============================
// EXPORT
// =============================
export default LoginNav;
