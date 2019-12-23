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
        <h2 onClick={() => {this.props.handleView('addCharacterForm')}}
        >CharacterForm</h2>
      {this.props.view.page === 'characterMain'
        ? this.props.characters.map((character, index) => (
          <article key={index}> hello, {character.name} who is {character.age} years old {character.species}.
          <ul>
            <li onClick={() => {this.props.handleView('editCharacterForm')}}>edit character</li>
            <li>delete character</li>
          </ul>
          </article>
        ))
        : null
      }
  </div>
)
}
}
// =============================
// EXPORT
// =============================
export default CharactersDisplay;
