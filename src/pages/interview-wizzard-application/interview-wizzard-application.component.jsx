import React from 'react';
import { Navbar } from 'react-materialize';



import QuestionSummary from '../.././components/questionSummary/questionSummary.component';
import Question from '../../components/question/question.component';
import SubmissionPage from '../SubmissionPage/SubmissionPage.component'



//component that controls the state of the rest of the components


class InterWizApp extends React.Component {
    constructor() {
        super() 

        this.state = {
            step: 1,
            dataArray: [
                {'id': 1,'question': 'What is your name?', 'answer': ''}, 
                {'id': 2,'question': 'How old are you?', 'answer': ''},
                {'id:': 3,'question': 'What is your occupation?', 'answer': ''}
            ],
            formSubmitted: false
        }
    }
    

      //handles form submit
    handleFormSubmit = () => {
      this.setState({formSubmitted: true })
    }
  


    //method monitors when to move on to the next component
    nextStep = () => {
        let {step} = this.state;
        this.setState({step: step + 1})
    }

    //method allows us to go back to the previous component
    prevStep = () => {
        let {step} = this.state;
        this.setState({step: step - 1})
    }

    handleChange = (e)=> {

        let {dataArray, step } = this.state;
        let response = e.target.value;

        dataArray[step-1].answer = response;
        this.setState({dataArray})
    } 

    createQuestions = () => {
        let {dataArray, step } = this.state;      
        let question = dataArray.map((obj, index) => {
            return (
                <Question key={index} index={index} question={obj} step={step} nextStep={this.nextStep} prevStep={this.prevStep} dataArrayLength={dataArray.length} handleChange={this.handleChange} />)
        })
        return question[step-1];
    }

    questions = () => {
        const {dataArray} = this.state;
        return (
            <QuestionSummary key={1} data={dataArray} prevStep={this.prevStep} handleFormSubmit={this.handleFormSubmit} />
        )
    }

    componentDidUpdate() {
        const {dataArray, step, formSubmitted} = this.state;
        localStorage.setItem('step', step);
        localStorage.setItem('dataArray', JSON.stringify(dataArray));
        localStorage.setItem('form Submission', formSubmitted);

    }

    componentDidMount() {
        const {dataArray, formSubmitted} = this.state;
        let dataArrStore = localStorage.getItem('dataArray', JSON.stringify(dataArray));
        const submission = localStorage.getItem('form Submission', formSubmitted);

        // if (submission) {
        //     this.setState({dataArray: JSON.parse(dataArrStore)})
        // } 
    }



    render() {
        const {step, dataArray, formSubmitted} = this.state;
        switch(true) {
            case (formSubmitted === true):
                return (
                    <div>
                        <SubmissionPage step={step} dataArray={dataArray} otherProps={this.state} />
                    </div>
                )
            default:
                return ( 
                    <div className="section">
                        <Navbar className="container blue-grey nav-pad" menuIcon={<div></div>} brand={<div className="container center">{`STEP  ${step} OF ${dataArray.length + 1}`}</div>} />
                        {(step <= dataArray.length ) ? 
                            this.createQuestions() : 
                            this.questions()}
                    </div>
                )
            
        }
        
    }
}

export default InterWizApp;

