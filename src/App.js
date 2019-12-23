import React from 'react';
import axios from 'axios';

import CharactersDisplay from './component/characters'
import MonstersDisplay from './component/monsters'
import CharacterForm from './component/characterForm'
import MonsterForm from './component/monsterForm'
import Nav from './component/nav'


let proxyURL = 'https://cors-anywhere.herokuapp.com/'
let charactersAPI = 'https://compendium-api.herokuapp.com/api/characters';
let monsterAPI = 'https://compendium-api.herokuapp.com/api/monsters';
let manipulateCharacterAPI = 'https://compendium-api.herokuapp.com/api/character';
let manipulateMonsterAPI = 'https://compendium-api.herokuapp.com/api/monster';
// let user = 'https://compendium-api.herokuapp.com/api/user';

let transferData = {};

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      view: {
        page: 'main',
        pageTitle: 'Landing Page',
      },
      characters: [],
      monsters: []
    }
  }

handleView = (view) => {
  let pageTitle = '';
  switch (view) {
    case 'main':
      pageTitle = 'Landing Page'
      break;
    case 'characterMain':
        pageTitle = 'Character Main'
        break;
    case 'addCharacterForm':
        pageTitle = 'Character Form'
        break;
    case 'editCharacterForm':
        pageTitle = 'Edit Character Form'
        break;
    case 'monsterMain':
        pageTitle = 'Monster Main'
        break;
    case 'addMonsterForm':
        pageTitle = 'Monster Form'
        break;
    case 'editMonsterForm':
        pageTitle = 'Edit Monster Form'
        break;
    default:
      break;
  }
  this.setState({
    view: {
      page: view,
      pageTitle: pageTitle
    }
  })
}


handleCreate = (createdData) => {
  transferData = createdData;
  console.log(createdData);
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
// Working Character Post
postNewCharacter = () => {
    axios.post(`${manipulateCharacterAPI}`,
    {
      "public": transferData.public,
      "name": transferData.name,
      "species": transferData.species,
      "age": parseInt(transferData.age),
      "gender": transferData.gender,
      "health": parseInt(transferData.health),
      "attack": parseInt(transferData.attack),
      "defense": parseInt(transferData.defense),
      "speed": parseInt(transferData.speed),
      "magic": parseInt(transferData.magic),
      "ability": transferData.ability
    })
    .then((err, res) => {
      console.log(err);
    }).catch((err) => {
      console.log(transferData);
      console.log(err);
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

postNewMonster = () => {
    axios.post(`${proxyURL}${manipulateMonsterAPI}`)
    .then(res => {
      const characters = res.data;
      this.setState({
        characters: characters.data
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
      <Nav
      handleView={this.handleView}
      />
    {this.state.view.page === 'main'
      ?
      <div className="homePage">
      <h1>Welcome to my Masterful Compenium</h1>

      </div>
      : null
    }
    {this.state.view.page === 'characterMain'
      ? <CharactersDisplay
      characters={this.state.characters}
      view={this.state.view}
      handleView={this.handleView}
      />
      : null
    }
    {this.state.view.page === 'monsterMain'
      ? <MonstersDisplay
      monsters={this.state.monsters}
      view={this.state.view}
      handleView={this.handleView}
      />
      : null
    }
    {this.state.view.page === 'addCharacterForm'
      ? <CharacterForm
      view={this.state.view}
      handleCreate={this.handleCreate}
      postNewCharacter={this.postNewCharacter}
      />
      : null
    }
    {this.state.view.page === 'addMonsterForm'
      ? <MonsterForm
      view={this.state.view}
      />
      : null
    }
      </div>
    )
  }

}



export default App;
