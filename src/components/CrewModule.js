import {React, Component} from 'react';
import CrewModuleModel from '../model/CrewModule.webm';

class CrewModule extends Component {
    render() {
        const {crewModRef} = this.props;
        console.log('Crew Module Rendered');
        return (
            <video loop src={CrewModuleModel} ref={crewModRef} className='part'></video>
        );
    };
};

export default CrewModule;