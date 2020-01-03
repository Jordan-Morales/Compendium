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
      <div className="innerPage">
        <button className="waves-effect waves-light btn" onClick={() => {this.props.handleView('addCharacterForm')}}
        >CharacterForm</button>
      {this.props.view.page === 'characterMain'
        ? this.props.characters.map((character, index) => (
          <article className="card" key={index}>
          Name: {character.name}<br/>
          Age: {character.age}<br/>
          Species: {character.species}<br/>
          <ul>
            <li onClick={() => {this.props.handleView('editCharacterForm', character)}}>edit character</li>
            <li onClick={() => {this.props.removeCharacter(character.id)}}>delete character</li>
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
