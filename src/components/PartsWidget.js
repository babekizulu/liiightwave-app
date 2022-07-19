import {React, Component} from 'react';
//components
import Engines from './Engines';
import CrewModule from './CrewModule';

class PartsWidget extends Component {
    render() {
        const {engineRef, crewModRef, handleScroll} = this.props;
        return (
            <div className='parts-container' onScroll={handleScroll}>
                <div className="part-box">
                    <Engines engineRef={engineRef}/>
                </div>
                <div className="part-box">
                    <CrewModule crewModRef={crewModRef}/>
                </div>
            </div>
        );
    };
};

export default PartsWidget;
