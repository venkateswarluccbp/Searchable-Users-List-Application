import {Component} from 'react'
import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Esther Howard',
    role: 'Software Developer',
  },
  {
    uniqueNo: 2,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Floyd Miles',
    role: 'Software Developer',
  },
  {
    uniqueNo: 3,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Jacob Jones',
    role: 'Software Developer',
  },
  {
    uniqueNo: 4,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'Devon Lane',
    role: 'Software Developer',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    userDetailsList: initialUserDetailsList,
  }

  onChangeSearchInput = e => {
    this.setState({
      searchInput: e.target.value,
    })
  }

  deleteUSer = uniqueNo => {
    const {userDetailsList} = this.state
    const filterUserData = userDetailsList.filter(
      eachUser => eachUser.uniqueNo !== uniqueNo,
    )
    this.setState({
      userDetailsList: filterUserData,
    })
  }

  render() {
    const {searchInput, userDetailsList} = this.state
    console.log(searchInput)
    const searchUserResult = userDetailsList.filter(each =>
      each.name.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Users List</h1>
        <input
          type="search"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <ul className="list-container">
          {searchUserResult.map(eachUser => (
            <UserProfile
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUSer={this.deleteUSer}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
