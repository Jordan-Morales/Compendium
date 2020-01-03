// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components


// =============================
// COMPONENT CLASS
// =============================
class MonsterForm extends React.Component{
  // ==============
  // STATE
  // ==============
  constructor() {
    super()
    this.state = {
      id: null,
      public: false,
      name: '',
      species: '',
      health: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      magic: 0,
      ability: ''
    }
  }

  // ==============
  // HANDLERS
  // ==============
  // handles form change
  handleChange = (e) => {
    this.setState({[e.target.id] : e.target.value})
  }
  // handleCheckChange = (e) => {
  //   const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
  //   let partialState = {};
  //   partialState[this.state.public] = value;
  //   this.setState(partialState);
  // }

  // handles submit
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.view.page === 'addMonsterForm') {
      this.props.postNewMonster(this.props.handleCreate(this.state))
    } else if(this.props.view.page === 'editMonsterForm') {
      this.props.updateMonster(this.props.handleCreate(this.state))

    }
  }

  componentDidMount() {
    if (this.props.formInputsMonster) {
      this.setState({
        id: this.props.formInputsMonster.id,
        public: this.props.formInputsMonster.public,
        name: this.props.formInputsMonster.name,
        species: this.props.formInputsMonster.species,
        health: this.props.formInputsMonster.health,
        attack: this.props.formInputsMonster.attack,
        defense: this.props.formInputsMonster.defense,
        speed: this.props.formInputsMonster.speed,
        magic: this.props.formInputsMonster.magic,
        ability: this.props.formInputsMonster.ability
      })
    }
  }
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <form className="innerPage" onSubmit={this.handleSubmit}>
        <label>
          name
          <input type="text" placeholder="name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label><br/>
        <label>
          species
          <input type="text" placeholder="species" id="species" value={this.state.species} onChange={this.handleChange}/>
        </label><br/>
        <label>
          health
          <input type="number" placeholder="health" id="health" value={this.state.health} onChange={this.handleChange} />
        </label><br/>
        <label>
          attack
          <input type="number" placeholder="attack" id="attack" value={this.state.attack} onChange={this.handleChange} />
        </label><br/>
        <label>
          defense
          <input type="number" placeholder="defense" id="defense" value={this.state.defense} onChange={this.handleChange} />
        </label><br/>
        <label>
          speed
          <input type="number" placeholder="speed" id="speed" value={this.state.speed} onChange={this.handleChange} />
        </label><br/>
        <label>
          magic
          <input type="number" placeholder="magic" id="magic" value={this.state.magic} onChange={this.handleChange} />
        </label><br/>
        <label>
          ability
          <input type="text" placeholder="ability" id="ability" value={this.state.ability} onChange={this.handleChange} />
        </label><br/>

        <input type="submit" value="Complete"/>
      </form>
    )
  }
}
// =============================
// EXPORT
// =============================
export default MonsterForm;
