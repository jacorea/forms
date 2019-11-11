import React, { Component } from 'react'
import {Button} from 'react-materialize'

import './questionSummary.styles.css'

export class QuestionSummary extends Component {
    
    render() {
        const {data, prevStep, handleFormSubmit} = this.props
        return (
          <div className="container">
              {data.map((question,index)=>{
                return (
                    <div>
                        <div className="row">
                            <div className="col s12 center-align">
                                <span className="question">{question.question}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 center-align">
                                <span className="answer">{question.answer}</span>
                            </div>
                        </div>
                    </div>
                    )
                })
              }
            <div className="container">  
                <div className="row section">
                    <div className="col s12 m6 right">
                        <Button  className="align button left" onClick={handleFormSubmit}>Submit</Button>
                    </div>
                    <div className="col s12 m6">
                        <Button className="align button right" onClick={prevStep}>Previous</Button>
                    </div>
                </div>
            </div>
          </div>
        )
    }
}

export default QuestionSummary
