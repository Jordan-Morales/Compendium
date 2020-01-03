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
      <div className="nav">
        <div className="nav-wrapper rotated">
          <button className="waves-effect waves-light btn" onClick={() => {this.props.handleView('main')}}
          >Home</button>
          </div>
        <div className="nav-wrapper rotated">
          <button className="waves-effect waves-light btn" onClick={() => {this.props.handleView('characterMain')}}
          >Characters</button>
          </div>
        <div className="nav-wrapper rotated">
          <button className="waves-effect waves-light btn" onClick={() => {this.props.handleView('monsterMain')}}
          >Monsters</button>
        </div>
      </div>
    )
  }


}
// =============================
// EXPORT
// =============================
export default Nav;
