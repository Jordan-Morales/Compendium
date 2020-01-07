import React from 'react';
import axios from 'axios';

import CharactersDisplay from './component/characters'
import MonstersDisplay from './component/monsters'
import CharacterForm from './component/characterForm'
import MonsterForm from './component/monsterForm'
import Nav from './component/nav'
import LoginNav from './component/loginnav'
import Auth from './component/auth'
import Login from './component/login'
// import ErrorBoundary from './component/errorBoundary'


let proxyURL = 'https://cors-anywhere.herokuapp.com/'
let charactersAPI = 'https://compendium-api.herokuapp.com/api/characters';
let monsterAPI = 'https://compendium-api.herokuapp.com/api/monsters';
let manipulateCharacterAPI = 'https://compendium-api.herokuapp.com/api/character';
let manipulateMonsterAPI = 'https://compendium-api.herokuapp.com/api/monster';
let userAPI = 'https://compendium-api.herokuapp.com/user';

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
      monsters: [],
      user: {
        data: {},
        status: 'invalid login'
      }
    }
  }

handleView = (view, data) => {
  let pageTitle = '';
  let formInputsCharacter = {
    id: null,
    public: '',
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
  let formInputsMonster = {
    id: null,
    public: '',
    name: '',
    species: '',
    health: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    magic: 0,
    ability: ''
  }
  switch (view) {
    case 'main':
      pageTitle = 'Landing Page'
      break;
    case 'createUser':
      pageTitle = 'Create User'
      break;
    case 'loginUser':
      pageTitle = 'Login User'
      break;
    case 'characterMain':
        pageTitle = 'Character Main'
        break;
    case 'addCharacterForm':
        pageTitle = 'Character Form'
        break;
    case 'editCharacterForm':
        pageTitle = 'Edit Character Form'
        formInputsCharacter = {
          id: data.id,
          public: data.public,
          name: data.name,
          species: data.species,
          age: data.age,
          gender: data.gender,
          health: data.health,
          attack: data.attack,
          defense: data.defense,
          speed: data.speed,
          magic: data.magic,
          ability: data.ability
        }
        break;
    case 'monsterMain':
        pageTitle = 'Monster Main'
        break;
    case 'addMonsterForm':
        pageTitle = 'Monster Form'
        break;
    case 'editMonsterForm':
        pageTitle = 'Edit Monster Form'
        formInputsMonster = {
          id: data.id,
          public: data.public,
          name: data.name,
          species: data.species,
          health: data.health,
          attack: data.attack,
          defense: data.defense,
          speed: data.speed,
          magic: data.magic,
          ability: data.ability
        }
        break;
    default:
      break;
  }
  this.setState({
    view: {
      page: view,
      pageTitle: pageTitle
    },
    formInputsCharacter: formInputsCharacter,
    formInputsMonster: formInputsMonster
  })
}


handleCreate = (createdData) => {
  transferData = createdData;
  console.log(createdData);
}
handleLogin = (data) => {
  transferData = data;
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
      "public": this.state.user.data.username,
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
      this.handleView('characterMain')
      this.pullCharacters()
      console.log(err);
    }).catch((err) => {
      console.log(transferData);
      console.log(err);
    })
  }

updateCharacter = (id) => {
    id = parseInt(id)
    axios.put(`${manipulateCharacterAPI}/${id}`,
    {
      "id": transferData.id,
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
      this.handleView('characterMain')
      this.pullCharacters()
      console.log(err);
    }).catch((err) => {
      console.log(transferData);
      console.log(err);
    })
  }

removeCharacter = (id) => {
  id = parseInt(id)
  axios.delete(`${manipulateCharacterAPI}/${id}`,
  {
    data: {
      "id": {id}
    }
  })
  .then((err, res) => {
    this.setState(prevState => {
        const characters = prevState.characters.filter(character => character.id !== id)
        return { characters }
      })
      console.log(err);
  }).catch((err) => {
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

// Working Monster Post
postNewMonster = () => {
    axios.post(`${manipulateMonsterAPI}`,
    {
      "public": this.state.user.data.username,
      "name": transferData.name,
      "species": transferData.species,
      "health": parseInt(transferData.health),
      "attack": parseInt(transferData.attack),
      "defense": parseInt(transferData.defense),
      "speed": parseInt(transferData.speed),
      "magic": parseInt(transferData.magic),
      "ability": transferData.ability
    })
    .then((err, res) => {
      this.handleView('monsterMain')
      this.pullMonster()
      console.log(err);
    }).catch((err) => {
      console.log(transferData);
      console.log(err);
    })
  }

updateMonster = (id) => {
    id = parseInt(id)
    axios.put(`${manipulateMonsterAPI}/${id}`,
    {
      "id": transferData.id,
      "public": transferData.public,
      "name": transferData.name,
      "species": transferData.species,
      "health": parseInt(transferData.health),
      "attack": parseInt(transferData.attack),
      "defense": parseInt(transferData.defense),
      "speed": parseInt(transferData.speed),
      "magic": parseInt(transferData.magic),
      "ability": transferData.ability
    })
    .then((err, res) => {
      this.handleView('monsterMain')
      this.pullMonster()
      console.log(err);
    }).catch((err) => {
      console.log(transferData);
      console.log(err);
    })
  }

removeMonster = (id) => {
  id = parseInt(id)
  axios.delete(`${manipulateMonsterAPI}/${id}`,
  {
    data: {
      "id": {id}
    }
  })
  .then((err, res) => {
    this.setState(prevState => {
        const monsters = prevState.monsters.filter(monster => monster.id !== id)
        return { monsters }
      })
      console.log(err);
  }).catch((err) => {
    console.log(err);
  })
}


loginUser = () => {
    // console.log(user);
    axios.post(`${proxyURL}${userAPI}Login`,
    {
      "username": transferData.username,
      "password": transferData.password
    })
    .then(res => {
      const user = res.data;
      this.setState({
        user: user
      })
    })
  }

createUser = () => {
    axios.post(`${userAPI}`,
    {
      "name": transferData.name,
      "username": transferData.username,
      "email": transferData.email,
      "password": transferData.password
    })
    .then((err, res) => {
      this.loginUser(transferData);
      this.handleView('main')
      console.log(err);
    }).catch((err) => {
      console.log(transferData);
      console.log(err);
    })
  }

logout = () => {
  this.setState ({
    user: {
      status: 'invalid login'
    }
  })
}
  componentDidMount() {
    this.pullCharacters();
    this.pullMonster();
  }

  render(){
    return(
      <div className="book">

            <LoginNav
            handleView={this.handleView}
            user={this.state.user}
            logout={this.logout}
            />

        <div className="page">

        {this.state.view.page === 'createUser'
          ? <Auth
          handleCreate={this.handleCreate}
          createUser={this.createUser}/>
          : null
        }
        {this.state.view.page === 'loginUser'
          ? <Login
          view={this.state.view}
          handleView={this.handleView}
          handleLogin={this.handleLogin}
          loginUser={this.loginUser}/>
          : null
        }

        <div className="mainSection">



        {(this.state.view.page === 'main' && this.state.user.status === "invalid login")
          ?
          <div className="homePage">
          <h1>Masterful Compenium</h1>
          <p>Please create an account and login to get access to the compendium</p>
          </div>
          : null
        }
        {(this.state.view.page === 'main' && this.state.user.status === "login failed")
          ?
          <div className="homePage">
          <h1>Masterful Compenium</h1>
          <span className="error">something went wrong</span>
          </div>
          : null
        }
        {(this.state.view.page === 'main' && this.state.user.status === "valid login")
          ?

          <div className="homePage">
          <h1>Masterful Compenium</h1>
          <p>Welcome
          {(this.state.user.data === undefined) ? <span>somethi9ng went wrong</span> :
                  <span className="username">
          {this.state.user.data.username}
          </span>}
          , please create your character or monster by using available input forms.</p>
          </div>
          : null
        }



        {(this.state.view.page === 'characterMain' && this.state.user.status === "valid login")
          ? <CharactersDisplay
          characters={this.state.characters}
          view={this.state.view}
          handleView={this.handleView}
          removeCharacter={this.removeCharacter}
          user={this.state.user}
          />
          : null
        }
        {(this.state.view.page === 'monsterMain' && this.state.user.status === "valid login")
          ? <MonstersDisplay
          monsters={this.state.monsters}
          view={this.state.view}
          handleView={this.handleView}
          removeMonster={this.removeMonster}
          user={this.state.user}
          />
          : null
        }
        {(this.state.view.page === 'addCharacterForm' && this.state.user.status === "valid login")
          ? <CharacterForm
          view={this.state.view}
          handleCreate={this.handleCreate}
          postNewCharacter={this.postNewCharacter}
          />
          : null
        }
        {(this.state.view.page === 'editCharacterForm' && this.state.user.status === "valid login")
          ? <CharacterForm
          view={this.state.view}
          handleCreate={this.handleCreate}
          updateCharacter={this.updateCharacter}
          formInputsCharacter={this.state.formInputsCharacter}
          />
          : null
        }
        {(this.state.view.page === 'addMonsterForm' && this.state.user.status === "valid login")
          ? <MonsterForm
          view={this.state.view}
          handleCreate={this.handleCreate}
          postNewMonster={this.postNewMonster}
          />
          : null
        }
        {(this.state.view.page === 'editMonsterForm' && this.state.user.status === "valid login")
          ? <MonsterForm
          view={this.state.view}
          handleCreate={this.handleCreate}
          updateMonster={this.updateMonster}
          formInputsMonster={this.state.formInputsMonster}
          />
          : null
        }
      </div>

      </div>

        <Nav
        handleView={this.handleView}
        />
        <footer>
        <a className="icon" href="https://github.com/Jordan-Morales/"><ion-icon name="logo-github" size="large"></ion-icon></a>
        <a className="icon" href="https://www.linkedin.com/in/jordanmorales/"><ion-icon name="logo-linkedin" size="large"></ion-icon></a>
        </footer>
      </div>

    )
  }

}

export default App;
