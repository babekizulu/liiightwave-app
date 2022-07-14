import {React, Component} from 'react';
import Empath from '../libs/Empath';

class QuestionBox extends Component {
    state = {empathSpeak: ''};

    componentDidMount() {
        this.displayQuestion();
    }

    componentDidUpdate(previousProps) {
        const {questionNumber} = this.props;
        if (questionNumber !== previousProps.questionNumber) {
            this.displayQuestion();
        };
    };
    
    displayQuestion = () => {
        const {questionNumber} = this.props;
        const question = new Empath(questionNumber);
        const speak = question.empathize();
        this.setState({empathSpeak: speak});
    }

    componentWillUnmount() {
        this.setState({empathSpeak: ''});
    }

    render() {
        const {empathSpeak} = this.state;
        return (
            <div className="question-box">
                <p className="question">
                    {empathSpeak}
                </p>
            </div>
        )
    }
}

export default QuestionBox;

