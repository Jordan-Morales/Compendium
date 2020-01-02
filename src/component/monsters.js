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
        <button className="waves-effect waves-light btn"  onClick={() => {this.props.handleView('addMonsterForm')}}
        >MonsterForm</button>
      {this.props.view.page === 'monsterMain'
        ? this.props.monsters.map((monster, index) => (
          <article className="card" key={index}>
          Name: {monster.name}<br/>
          Species: {monster.species}<br/>
          <ul>
            <li onClick={() => {this.props.handleView('editMonsterForm', monster)}}>edit monster</li>
            <li onClick={() => {this.props.removeMonster(monster.id)}}>delete monster</li>
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
export default MonstersDisplay;
