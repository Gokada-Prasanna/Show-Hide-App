// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstNameButtonClickStatus: false, lastNameButtonClickStatus: false}

  firstNameChangeState = () => {
    this.setState(prevState => ({
      firstNameButtonClickStatus: !prevState.firstNameButtonClickStatus,
    }))

    const {firstNameButtonClickStatus} = this.state
    console.log(firstNameButtonClickStatus)
  }

  lastNameChangeState = () => {
    this.setState(prevState => ({
      lastNameButtonClickStatus: !prevState.lastNameButtonClickStatus,
    }))

    const {lastNameButtonClickStatus} = this.state
    console.log(lastNameButtonClickStatus)
  }

  getFirstName = () => {
    const {firstNameButtonClickStatus} = this.state

    return firstNameButtonClickStatus ? <p className="nameText">Joe</p> : null
  }

  getLastName = () => {
    const {lastNameButtonClickStatus} = this.state

    return lastNameButtonClickStatus ? <p className="nameText">Jonas</p> : null
  }

  render() {
    const firstNameText = this.getFirstName()
    const lastNameText = this.getLastName()

    return (
      <div className="bgContainer">
        <h1 className="heading">Show/Hide</h1>
        <div className="cardsContainer">
          <div className="cardContainer">
            <button
              type="button"
              className="button"
              onClick={this.firstNameChangeState}
            >
              Show/Hide Firstname
            </button>
            {firstNameText}
          </div>
          <div className="cardContainer">
            <button
              type="button"
              className="button"
              onClick={this.lastNameChangeState}
            >
              Show/Hide Lastname
            </button>
            {lastNameText}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
