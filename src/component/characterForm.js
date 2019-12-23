// =============================
// DEPENDENCIES
// =============================
// packages
import React from 'react'

// components


// =============================
// COMPONENT CLASS
// =============================
class CharacterForm extends React.Component{

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
      age: 0,
      gender: '',
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
    if (this.props.view.page === 'addCharacterForm') {
      this.props.postNewCharacter(this.props.handleCreate(this.state))
    } else if(this.props.view.page === 'editCharacterForm') {
      this.props.updateCharacter(this.props.handleCreate(this.state))
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.formInputsCharacter.id,
      public: this.props.formInputsCharacter.public,
      name: this.props.formInputsCharacter.name,
      species: this.props.formInputsCharacter.species,
      age: this.props.formInputsCharacter.age,
      gender: this.props.formInputsCharacter.gender,
      health: this.props.formInputsCharacter.health,
      attack: this.props.formInputsCharacter.attack,
      defense: this.props.formInputsCharacter.defense,
      speed: this.props.formInputsCharacter.speed,
      magic: this.props.formInputsCharacter.magic,
      ability: this.props.formInputsCharacter.ability
    })
  }
  // ==============
  // RENDER
  // ==============
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name
          <input type="text" placeholder="name" id="name" value={this.state.name} onChange={this.handleChange}/>
        </label><br/>
        <label>
          species
          <input type="text" placeholder="species" id="species" value={this.state.species} onChange={this.handleChange}/>
        </label><br/>
        <label>
          age
          <input type="number" placeholder="age" id="age"
          value={this.state.age} onChange={this.handleChange} />
        </label><br/>
        <label>
          gender
          <input type="text" placeholder="gender" id="gender"
          value={this.state.gender} onChange={this.handleChange} />
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
export default CharacterForm;
