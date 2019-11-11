import React from 'react'

import { Button } from 'react-materialize';
import { Card } from 'react-materialize'

import './question.styles.css';

import retina from '../../assets/images/icon-accurate-retina.png';
import support from "../../assets/images/icon-audit-support-retina.png"
import refund from "../../assets/images/icon-max-refund-retina.png"

class Question extends React.Component {
  render() {
    const { question, step, nextStep, prevStep, dataArrayLength, handleChange } = this.props;
    let image;
    {(step === 2) ? image=support : image =refund }
    switch(true) {
      case (step > 1 && step <= dataArrayLength): 
          return (
            <div className="container">
              <Card>
                <div className="container">
                  <div className="section row">
                    <div className="col s12 l12 center align">  
                      
                      <img className="img-responsive" src={image} alt="trustworthy" />
                    </div>
                  </div>
                  <span className="question">{question.question}</span>
                  <form >
                      <input type="text" name="name" onChange={handleChange} value={question.answer} >
                      </input>
                  </form>
                  <div className="row section">
                      <div className="col s12 m6 right">
                          <Button  className="align button left" onClick={nextStep}>Continue</Button>
                      </div>
                      <div className="col s12 m6">
                          <Button className="align button right" onClick={prevStep}>Previous</Button>
                      </div>
                  </div>
                </div>
              </Card>
            </div>
          )
          default: 
          return (
            <div className="container">
              <Card>
              <div className="container">
              <div className="section row">
                <div className="col s12 l12 center align">  
                  <img className="img-responsive"  src={retina} alt="trustworthy"/>
                </div>
              </div>
                <div className="row">
                  <div className="col s12">
                    <span className="question">{question.question}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 center-align">
                  <form onSubmit={this.handleFormSumbit}>
                      <input type="text" name="name" onChange={handleChange} value={question.answer}>
                      </input>
                  </form>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12 m6 left">
                    <Button className="align button" onClick={nextStep}>Continue</Button>
                  </div>
                </div>
              </div>
              </Card>
            </div>
          )
      } 
  }
}

export default Question
