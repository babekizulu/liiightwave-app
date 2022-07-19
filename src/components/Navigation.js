//libraries
import {React, Component} from "react";
//Icons
import ElectricBolt from '@mui/icons-material/ElectricBolt';
import { Favorite, CircleTwoTone } from "@mui/icons-material";


class Navigation extends Component {
    activateCurrent = () => {
        const {activatePart1, activatePart2, engineRef, crewModRef, scrollPosition, height} = this.props;
        console.log('Activate Current');
    }

    deactivateCurrent = () => {
        const {deactivatePart1, deactivatePart2, engineRef, crewModRef, scrollPosition, height} = this.props;
        console.log('Deactivate Current');
    }
    
    render() {
        const {activateModel, deactivateModel, navEmpath, navModel, navParts} = this.props;
        return (
            <div className="navigation-container">
                <button 
                    className='circle-btn'
                    onMouseDown={this.activateCurrent}
                    onMouseUp={this.deactivateCurrent}
                    onTouchStart={this.activateCurrent}
                    onTouchEnd={this.deactivateCurrent}
                    onClick={() => navParts()}
                >
                    <CircleTwoTone className='circle'/>
                </button>
                <button 
                    className='bolt-play' 
                    onMouseDown={() => activateModel()} 
                    onMouseUp={() => deactivateModel()} 
                    onClick={() => navModel()}
                    onTouchStart={() => activateModel()}
                    onTouchEnd={() => deactivateModel()}
                >
                    <ElectricBolt className='bolt'/>
                </button>
                <button className='empath-btn' onClick={() => navEmpath()}>
                    <Favorite className='empath'/>
                </button>
            </div>
        );
    };
};

export default Navigation;

