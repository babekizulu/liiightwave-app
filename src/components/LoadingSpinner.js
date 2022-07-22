//libraries
import {React, Component} from 'react';
//spinner
import Spinner from './spinner.gif';

class LoadingSpinner extends Component {
    render() {
        return(
            <div className='loading-spinner-container'>
                <img src={Spinner} alt="Spinner" />
            </div>
        );
    };
};

export default LoadingSpinner;