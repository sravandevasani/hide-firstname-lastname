import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstName: false, showLastName: false}

  onClickHideFirstName = () => {
    this.setState(prevState => {
      if (prevState.showFirstName === true) {
        return {showFirstName: false}
      }
      return {showFirstName: true}
    })
  }

  onClickHideLastName = () => {
    this.setState(prevState => {
      if (prevState.showLastName === true) {
        return {showLastName: false}
      }
      return {showLastName: true}
    })
  }

  render() {
    const {showFirstName, showLastName} = this.state

    const hideFirstName = showFirstName ? 'firstname-hide' : null

    const hideLastName = showLastName ? 'lastname-hide' : null

    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="content-container">
            <div className="margin">
              <button
                onClick={this.onClickHideFirstName}
                className="button"
                type="button"
              >
                Show/Hide FirstName
              </button>
              <p className={`firstname-heading ${hideFirstName}`}>Joe</p>
            </div>
            <div>
              <button
                onClick={this.onClickHideLastName}
                className="button"
                type="button"
              >
                Show/Hide Lastname
              </button>
              <p className={`secondname-heading ${hideLastName}`}>Jonas</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
