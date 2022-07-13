import {React, Component} from "react";
import ElectricBolt from '@mui/icons-material/ElectricBolt';
import { Favorite, Circle } from "@mui/icons-material";

class Navigation extends Component {
    render() {
        const {activateModel, deactivateModel, navEmpath, navModel} = this.props;
        return (
            <div className="navigation-container">
                <button className='circle-btn'>
                    <Circle className='circle'/>
                </button>
                <button className='bolt-play' onMouseDown={() => activateModel()} onMouseUp={() => deactivateModel()} onClick={() => navModel()}>
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

