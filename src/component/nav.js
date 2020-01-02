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
        <div className="nav-wrapper">
        <ul>
          <li className="waves-effect waves-light btn" onClick={() => {this.props.handleView('main')}}
          >Home</li>
          <li className="waves-effect waves-light btn" onClick={() => {this.props.handleView('characterMain')}}
          >Characters</li>
          <li className="waves-effect waves-light btn" onClick={() => {this.props.handleView('monsterMain')}}
          >Monsters</li>

        </ul>
      </div>
    )
  }


}
// =============================
// EXPORT
// =============================
export default Nav;
