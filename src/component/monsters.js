// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components


// =============================
// COMPONENT CLASS
// =============================
class MonstersDisplay extends React.Component{

//// ==============
//// RENDER
//// ==============

  render() {
    return (
      <div>
      {this.props.monsters.map((monsters, index) => (
      <p key={index}> hello, {monsters.name} who is {monsters.age} years old {monsters.species}.</p>
    ))};
      </div>
    )
  }


}
// =============================
// EXPORT
// =============================
export default MonstersDisplay;
