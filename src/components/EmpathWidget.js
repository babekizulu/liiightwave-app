//libraries
import {React, Component} from 'react';
import qNum from '../libs/qNum';
//components
import NextQuestion from './NextQuestion';
import QuestionBox from './QuestionBox';

class EmpathWidget extends Component {
    state = {questionNumber: null};

    generateQuestion = () => {
        const number = qNum();
        this.setState({questionNumber: number});
    };

    render() {
        const {questionNumber} = this.state;
        console.log(`Question Number: ${questionNumber}`);
        return (
            <div className='empath-widget'>
                <QuestionBox questionNumber={questionNumber}/>
                <NextQuestion generateQuestion={this.generateQuestion}/>
            </div>
        );
    };
}

export default EmpathWidget;

