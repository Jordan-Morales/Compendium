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

// matchName = () => {
//   if (this.character.public === this.props.user.data.username) {
//     return;
//   } else {
//     console.log('no-go');
//   }
// };

//// ==============
//// RENDER
//// ==============

  render() {
    return (
      <div className="innerPage verticalFlex">
        <button className="waves-effect waves-light btn" onClick={() => {this.props.handleView('addCharacterForm')}}
        >Create a New Charater</button>
      {this.props.view.page === 'characterMain'
        ? this.props.characters.map((character, index) => (
          character.public === this.props.user.data.username
            ? (
              <article className="card" key={index}>
              Name: {character.name}<br/>
              Age: {character.age}<br/>
              Species: {character.species}<br/>
              Gender: {character.gender}<br/>
              Health: {character.health}<br/>
              Attack: {character.attack}<br/>
              Defense: {character.defense}<br/>
              Speed: {character.speed}<br/>
              Magic: {character.magic}<br/>
              Ability: {character.ability}<br/>
              <ul>
                <li className="waves-effect waves-light btn" onClick={() => {this.props.handleView('editCharacterForm', character)}}>edit character</li>
                <li className="waves-effect waves-light btn btn-delete" onClick={() => {this.props.removeCharacter(character.id)}}>delete character</li>
              </ul>
              </article>
            )
            : null
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
