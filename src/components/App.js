//libraries
import { React, Component, createRef, Fragment } from 'react';
//components 
import Header from './Header';
import ModelBox from './ModelBox';
import Navigation from './Navigation'
import EmpathWidget from './EmpathWidget';
//style
import '../scss/App.scss';
//soundscapes
import Soundscape1 from '../audio/Amani Mk1 Soundscape.wav';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { modelActive: false, soundscape: new Audio(Soundscape1), soundscapePlaying: false, activePage: 'model' };
        this.modelRef = createRef()
    }
    activateModel = () => {
        const { modelActive, soundscapePlaying, soundscape } = this.state;
        if (!modelActive && !soundscapePlaying) {
            this.setState({ modelActive: true });
            this.setState({ soundscapePlaying: true });
            this.modelRef.current.play();
            soundscape.play();
        }
    }

    deactivateModel = () => {
        const { modelActive, soundscapePlaying, soundscape } = this.state;
        if (modelActive && soundscapePlaying) {
            this.setState({ modelActive: false });
            this.setState({ soundscapePlaying: false });
            this.modelRef.current.pause();
            soundscape.pause();
        }
    }

    navModel = () => {
        this.setState({ activePage: 'model' });
    }

    navEmpath = () => {
        this.setState({ activePage: 'empath' });
    };

    render() {
        const { activePage } = this.state;
        return (
            <div className='app-container'>
                <Header />
                <Fragment>
                    {activePage === 'model' ? <ModelBox modelRef={this.modelRef} /> : <EmpathWidget />}
                </Fragment>
                <Navigation activateModel={this.activateModel} deactivateModel={this.deactivateModel} navModel={this.navModel} navEmpath={this.navEmpath} />
            </div>
        );
    };
};

export default App;

