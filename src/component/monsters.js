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
      <div className="innerPage verticalFlex">
        <button className="waves-effect waves-light btn"  onClick={() => {this.props.handleView('addMonsterForm')}}
        >Create a New Monster</button>
      {this.props.view.page === 'monsterMain'
        ? this.props.monsters.map((monster, index) => (
          monster.public === this.props.user.data.username
            ? (
          <article className="card" key={index}>
          Name: {monster.name}<br/>
          Species: {monster.species}<br/>
          Health: {monster.health}<br/>
          Attack: {monster.attack}<br/>
          Defense: {monster.defense}<br/>
          Speed: {monster.speed}<br/>
          Magic: {monster.magic}<br/>
          Ability: {monster.ability}<br/>
          <ul>
            <li className="waves-effect waves-light btn" onClick={() => {this.props.handleView('editMonsterForm', monster)}}>edit monster</li>
            <li className="waves-effect waves-light btn btn-delete" onClick={() => {this.props.removeMonster(monster.id)}}>delete monster</li>
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
export default MonstersDisplay;
