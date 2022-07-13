import {React, Component} from 'react';
import qNum from '../libs/qNum';
import Empath from '../libs/Empath';
import Questions from '../libs/Questions';

class EmpathWidget extends Component {
    state = {questionNumber: 50, empathSpeak: Questions[50].question};

    componentDidMount() {
        this.displayQuestion();
    }

    generateQuestion = () => {
        this.setState({questionNumber: qNum})
    };

    displayQuestion = () => {
        const {questionNumber} = this.state;
        const question = new Empath(questionNumber).empathize();
        this.setState({empathSpeak: question});
    };

    render() {
        const {questionNumber, empathSpeak} = this.state;
        console.log(questionNumber, empathSpeak);
        return (
            <div>
                <div className="question-box">
                    <p className="question">
                        {empathSpeak}
                    </p>
                </div>
                <div className="empathizeBtnContainer">
                    <button className="empathizeBtn" onClick={this.generateQuestion}>
                        Empathize
                    </button>
                </div>
            </div>
        )
    }
}

export default EmpathWidget;

