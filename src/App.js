import React from 'react';
import axios from 'axios';

import CharactersDisplay from './component/characters'
import MonstersDisplay from './component/monsters'

let proxyURL = 'https://cors-anywhere.herokuapp.com/'
let charactersAPI = 'https://compendium-api.herokuapp.com/api/characters';
let monsterAPI = 'https://compendium-api.herokuapp.com/api/monsters';
let user = 'https://compendium-api.herokuapp.com/api/user';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      monsters: []
    }
  }

pullCharacters = () => {
    axios.get(`${proxyURL}${charactersAPI}`)
    .then(res => {
      const characters = res.data;
      this.setState({
        characters: characters.data
      })
    })
  }

pullMonster = () => {
    axios.get(`${proxyURL}${monsterAPI}`)
    .then(res => {
      const monsters = res.data;
      this.setState({
        monsters: monsters.data
      })
    })
  }

// pullUser = () => {
//     axios.get(`${proxyURL}${user}`)
//     .then(res => {
//       const user = res.data;
//       this.setState({
//         user: user.data
//       })
//     })
//   }
  componentDidMount() {
    this.pullCharacters();
    this.pullMonster();

  }

  render(){
    return(
      <div>

      <CharactersDisplay
      characters={this.state.characters}/>
      <MonstersDisplay
      monsters={this.state.monsters}/>
      </div>
    )
  }

}



export default App;
