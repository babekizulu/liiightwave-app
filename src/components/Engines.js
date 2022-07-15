import {React, Component} from 'react';
//models
import EnginesModel from '../model/Engines.webm';

class Engines extends Component {
    render() {
        const {engineRef} = this.props;
        console.log('Engines Rendered');
        return(
            <video loop src={EnginesModel} ref={engineRef} className='part'></video>
        );
    };
};

export default Engines;