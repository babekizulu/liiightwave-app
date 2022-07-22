//libraries
import {React, Component, Fragment} from 'react';
//component
import LoadingSpinner from './LoadingSpinner';
//model
import AmaniMk1 from '../model/AmaniMk1.webm';

class Model extends Component {
    state = {loading: true};

    componentDidMount() {
        this.setState({loading: false});
    }

    render() {
        const {modelRef} = this.props;
        const {loading} = this.state;
        return(
            <Fragment>
                {loading ? <LoadingSpinner/> : <video loop ref={modelRef} src={AmaniMk1}></video>}
            </Fragment>
        );
    }
}

export default Model;