import React from 'react';
import axios from 'axios';
// let proxyURL = 'https://cors-anywhere.herokuapp.com/'
let charactersAPI = 'http://localhost:3010/characters/';

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
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      const characters = res.data;
      this.setState({
        characters: characters
      })
    })
  }

  render(){
    return(
      <div>
          <ul>
        { this.state.characters.map(character => <li>{character.name}</li>)}
      </ul>
      </div>
    )
  }

}



export default App;
