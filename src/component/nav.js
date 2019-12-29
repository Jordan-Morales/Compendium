// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components


// =============================
// COMPONENT CLASS
// =============================
class Nav extends React.Component{


//// ==============
//// RENDER
//// ==============

  render() {
    return (
      <div>
        <div className="login nav-wrapper">

        <li className="waves-effect waves-light btn" onClick={() => {this.props.handleView('createUser')}}
        >Create Account</li>
        <li className="waves-effect waves-light btn" onClick={() => {this.props.handleView('loginUser')}}
        >Login</li>
        </div>
        <div className="nav-wrapper">
        <h1>Navigation</h1>
        <ul>
          <li className="waves-effect waves-light btn" onClick={() => {this.props.handleView('main')}}
          >Home</li>
          <li className="waves-effect waves-light btn" onClick={() => {this.props.handleView('characterMain')}}
          >Characters</li>
          <li className="waves-effect waves-light btn" onClick={() => {this.props.handleView('monsterMain')}}
          >Monsters</li>

        </ul>
      </div>
      </div>
    )
  }


}
// =============================
// EXPORT
// =============================
export default Nav;
