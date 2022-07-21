import {React, Component} from 'react';
//components
import Engines from './Engines';
import CrewModule from './CrewModule';
//icons
import {Build} from '@mui/icons-material';

class PartsWidget extends Component {
    render() {
        const {engineRef, crewModRef, activatePart1, activatePart2, deactivatePart1, deactivatePart2} = this.props;
        return (
            <div className='parts-container'>
                <div className="part-box">
                    <Engines engineRef={engineRef}/>
                    <button className='part-icon-btn'>
                        <Build 
                        className='part-icon' 
                        size="large"
                        onMouseDown={activatePart1}
                        onMouseUp={deactivatePart1}
                        onTouchStart={activatePart1}
                        onTouchEnd={deactivatePart1}
                        ></Build>
                    </button>
                </div>
                <div className="part-box">
                    <CrewModule crewModRef={crewModRef}/>
                    <button className='part-icon-btn'>
                        <Build 
                        className='part-icon' 
                        size="large"
                        onMouseDown={activatePart2}
                        onMouseUp={deactivatePart2}
                        onTouchStart={activatePart2}
                        onTouchEnd={deactivatePart2}
                        ></Build>
                    </button>
                </div>
            </div>
        );
    };
};

export default PartsWidget;
