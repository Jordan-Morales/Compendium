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
// let user = 'https://compendium-api.herokuapp.com/api/user';

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
    case 'characterForm':
        pageTitle = 'Character Form'
        break;
    case 'monsterMain':
        pageTitle = 'Monster Main'
        break;
    case 'monsterForm':
        pageTitle = 'Monster Form'
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
    {this.state.view.page === 'characterForm'
      ? <CharacterForm
      view={this.state.view}
      />
      : null
    }
    {this.state.view.page === 'monsterForm'
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
