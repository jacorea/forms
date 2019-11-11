import React, { Component } from 'react'
import {Navbar} from 'react-materialize'

class SubmissionPage extends Component {
  render() {
    return (
      <div className="section">
      <Navbar 
        menuIcon
        className="container blue-grey nav-pad"  
        brand={<div className="container center">Confirmation</div>} 
      />
        <div className="container">
          <div className="row">
            <div className="section">
                <h3 className="text align center">Your Form has successfully been submitted!</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SubmissionPage
