// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components


// =============================
// COMPONENT CLASS
// =============================
class CharactersDisplay extends React.Component{

//// ==============
//// RENDER
//// ==============

  render() {
    return (
      <div>
      {this.props.characters.map((character, index) => (
      <p key={index}> hello, {character.name} who is {character.age} years old {character.species}.</p>
    ))};
      </div>
    )
  }


}
// =============================
// EXPORT
// =============================
export default CharactersDisplay;
