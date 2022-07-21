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
                            <ElectricBolt className='lightning-instruction-icon'/> - liiightwave viewer. Click and hold to play the liiightwave
                        </li>
                        <br/>
                        <li>
                            <Build className='parts-instruction-icon'/> - liiightwave parts viewer. Click and hold this icon to play a liiightwave part
                        </li>
                        <br/>
                        <li>
                            <Favorite className='empath-instruction-icon'/> - empath widget. Click 'Next Question' to generate a new empath question.
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