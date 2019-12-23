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
        <h1>Navigation</h1>
        <ul>
          <li onClick={() => {this.props.handleView('main')}}
          >Home</li>
          <li onClick={() => {this.props.handleView('characterMain')}}
          >Characters</li>
          <li onClick={() => {this.props.handleView('monsterMain')}}
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
