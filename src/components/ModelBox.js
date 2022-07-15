import {React, Component} from 'react';
import AmaniMk1 from '../model/AmaniMk1.webm';

class ModelBox extends Component {
    render() {
        const {modelRef} = this.props;
        console.log('model box is rendering');
        return (
            <div className='model-box-container'>
                <div className="model-box">
                    <video loop ref={modelRef} src={AmaniMk1}></video>
                </div>
            </div>
        );
    };
};

export default ModelBox;