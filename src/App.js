import React from 'react';
import axios from 'axios';
let proxyURL = 'https://cors-anywhere.herokuapp.com/'
let charactersAPI = 'https://compendium-api.herokuapp.com/api/characters';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: []
    }
  }

  // pullCharacters = () => {
  //   fetch('http://localhost:3010/characters/', {
  //     mode: 'no-cors'
  //   })
  //   .then(response => console.log(JSON.stringify(response, null, 4)))
  //   .then(json => console.log(json))
  // }
  componentDidMount() {
    axios.get(`${proxyURL}${charactersAPI}`)
    .then(res => {
      const characters = res.data;
      this.setState({
        characters: characters.data
      })
    })
  }

  render(){
    return(
      <div>
      {this.state.characters.map((character, index) => (
      <p> hello, {character.name} who is {character.age} years old {character.species}.</p>
    ))};
      </div>
    )
  }

}



export default App;
