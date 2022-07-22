//libraries
import {React, Component} from 'react';
//components
import Model from './Model';

class ModelBox extends Component {

    render() {
        const {modelRef} = this.props;
        console.log('model box is rendering');
        return (
            <div className='model-box-container'>
                <div className="model-box">
                    <Model modelRef={modelRef}/>
                </div>
            </div>
        );
    };
};

export default ModelBox;