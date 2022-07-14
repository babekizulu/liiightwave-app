import {React, Component} from 'react';
import Empath from '../libs/Empath';

const helloEmpath = `Hello you brilliant creature! My name is Empath, and I was made to generate important questions which we should be asking ourselves and our loved ones every day. The universe can be a busy place, and sometimes we forget to check in on each other. Click 'Next Question' and I'll give you a new question to ask. Sending love to all my friends from the 4 corners of this uniiiverse!`;

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
        const {questionNumber} = this.props;
        return (
            <div className="question-box">
                <p className="question">
                    {questionNumber === null ? helloEmpath : empathSpeak}
                </p>
            </div>
        )
    }
}

export default QuestionBox;

