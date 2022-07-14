import {React, Component} from 'react';

class NextQuestion extends Component {

    render() {
        const {generateQuestion} = this.props;
        return(
            <div className="empathize-btn-container">
                <button className="empathize-btn" onClick={() => generateQuestion()}>
                    NEXT QUESTION
                </button>
            </div>
        );
    };
};

export default NextQuestion;

