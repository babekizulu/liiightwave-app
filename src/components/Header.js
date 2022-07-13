//libraries
import {React, Component} from 'react';
//components

class Header extends Component {
    render() {
        return (
            <div className='header-container'>
                <div className="icon-container">
                    <span className='circle-1'></span>
                    <span className='circle-2'></span>
                    <span className='circle-3'></span>
                </div>
            </div>
        );
    };
};

export default Header;