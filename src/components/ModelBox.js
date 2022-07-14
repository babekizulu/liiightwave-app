import {React, Component} from 'react';
import SphereCluster from '../model/SphereCluster.webm';

class ModelBox extends Component {
    render() {
        const {modelRef} = this.props;
        console.log('model box is rendering');
        return (
            <div className='model-box-container'>
                <div className="model-box">
                    <video loop ref={modelRef} src={SphereCluster}></video>
                </div>
            </div>
        );
    };
};

export default ModelBox;