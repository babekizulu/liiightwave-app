//libraries
import {React, Component} from 'react';
//icons
import {Info, ElectricBolt, Favorite, Build} from '@mui/icons-material';

class Instructions extends Component {
    render() {
        return (
            <div className='instructions-container'>
                <div className="instructions-icon-container">
                    <Info size='large' className='instructions-icon'/>
                </div>

                <div className="instructions-list-container">
                    <ul>
                        <li>
                            The <ElectricBolt className='lightning-instruction-icon'/> icon navigates you to the main 3D model viewer. You can click and hold this icon to play the 3D model and it's associated audio
                        </li>
                        <br/>
                        <li>
                            The <Build className='parts-instruction-icon'/> icon navigates you to the Parts viewer. Each Part has a <Build className='parts-instruction-icon'/> icon underneath it. Click and hold this icon to play a Part.
                        </li>
                        <br/>
                        <li>
                            The <Favorite className='empath-instruction-icon'/> icon navigates you to Empath. Click  <button className='empathize-btn'>Next Question</button>  to generate a new Empath question.
                        </li>
                    </ul>
                </div>

                <div className="begin">
                    <h3>CLICK THE <ElectricBolt className='lightning-instruction-icon'/> ICON TO BEGIN</h3>
                </div>
            </div>
        )
    }
}

export default Instructions;