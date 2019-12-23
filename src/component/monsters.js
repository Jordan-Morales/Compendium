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
      <h2 onClick={() => {this.props.handleView('monsterForm')}}
      >MonsterForm</h2>
      {this.props.monsters.map((monsters, index) => (
      <article key={index}> hello, {monsters.name} who is {monsters.age} years old {monsters.species}.
      <ul>
        <li>edit character</li>
        <li>delete character</li>
      </ul>
      </article>
    ))};
      </div>
    )
  }


}
// =============================
// EXPORT
// =============================
export default MonstersDisplay;
