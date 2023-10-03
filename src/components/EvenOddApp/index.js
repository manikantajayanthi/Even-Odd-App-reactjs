import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {randomNumber: 0}

  incrementButton = () => {
    // const {randomNumber} = this.state
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state
    const numberType = randomNumber % 2 ? 'Odd' : 'Even'

    return (
      <div className="bg-container">
        <h1 className="main-heading">Count {randomNumber} </h1>
        <p className="count-type-description">Count is {numberType}</p>
        <button type="button" className="button" onClick={this.incrementButton}>
          Increment
        </button>
        <p className="note">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
