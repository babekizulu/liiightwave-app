//libraries
import { React, Component, createRef, Fragment } from 'react';
//components 
import Header from './Header';
import ModelBox from './ModelBox';
import Navigation from './Navigation'
import EmpathWidget from './EmpathWidget';
import PartsWidget from './PartsWidget';
import Instructions from './Instructions';
//style
import '../scss/App.scss';
//soundscapes
import Soundscape1 from '../audio/Amani Mk1 Soundscape.wav';
import SoundPart1 from '../audio/AM1 Engines.wav';
import SoundPart2 from '../audio/AM1 Crew Module.wav';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            modelActive: false, 
            soundscape: new Audio(Soundscape1), 
            soundPart1: new Audio(SoundPart1), 
            soundPart2: new Audio(SoundPart2),  
            soundscapePlaying: false, 
            activePage: 'instructions'
        };
        this.modelRef = createRef();
        this.engineRef = createRef();
        this.crewModRef = createRef();
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

    activatePart1 = () => {
        const {modelActive, soundscapePlaying, soundPart1} = this.state;
        if (!modelActive && !soundscapePlaying) {
            this.setState({ modelActive: true });
            console.log('Model Active State: True');
            this.setState({ soundscapePlaying: true });
            console.log('Soundscape Playing State: true');
            try {
                this.engineRef.current.play();
            } catch (err) {
                console.log(`Engine Model Ref Error: ${err}`);
            }
            try {
                soundPart1.play();
            } catch (err) {
                console.log(`Engine Audio Error: ${err}`);
            }
            console.log('part 1 activated');
        };
    };

    activatePart2 = () => {
        const {modelActive, soundscapePlaying, soundPart2} = this.state;
        if (!modelActive && !soundscapePlaying) {
            this.setState({ modelActive: true });
            console.log('Model Active State: True');
            this.setState({ soundscapePlaying: true });
            console.log('Soundscape Playing State: true');
            try {
                this.crewModRef.current.play();
            } catch (err) {
                console.log(`Crew Module Ref Error: ${err}`);
            }
            try {
                soundPart2.play();
            } catch (err) {
                console.log(`Crew Module Audio Error: ${err}`)
            }
            console.log('part 2 activated');
        };
    };

    deactivatePart1 = () => {
        const {modelActive, soundscapePlaying, soundPart1} = this.state;
        if (modelActive && soundscapePlaying) {
            this.setState({ modelActive: false });
            this.setState({ soundscapePlaying: false });
            this.engineRef.current.pause();
            soundPart1.pause();
            console.log('part 1 deactivated');
        };
    };

    deactivatePart2 = () => {
        const {modelActive, soundscapePlaying, soundPart2} = this.state;
        if (modelActive && soundscapePlaying) {
            this.setState({ modelActive: false });
            this.setState({ soundscapePlaying: false });
            this.crewModRef.current.pause();
            soundPart2.pause();
            console.log('part 2 deactivated');
        };
    };

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

    navParts = () => {
        this.setState({ activePage: 'parts'});
    }

    navigate = () => {
        const {activePage} = this.state;

        if (activePage === 'instructions') {
            return (
                <Instructions/>
            )
        }

        if (activePage === 'model') {
            return (
                <ModelBox modelRef={this.modelRef} />
            );
        };

        if (activePage === 'empath') {
            return (
                <EmpathWidget />
            );
        };

        if (activePage === 'parts') {
            return (
                <PartsWidget 
                    engineRef={this.engineRef} 
                    crewModRef={this.crewModRef}
                    activatePart1={this.activatePart1}
                    activatePart2={this.activatePart2}
                    deactivatePart1={this.deactivatePart1}
                    deactivatePart2={this.deactivatePart2}

                />
            );
        };
    };

    handleScroll = e => {
        console.log(e);
    }

    render() {
        const {scrollPosition, height} = this.state;
        return (
            <div className='app-container'>
                <Header />
                <Fragment>
                    {this.navigate()}
                </Fragment>
                <Navigation 
                    activateModel={this.activateModel} 
                    deactivateModel={this.deactivateModel} 
                    navModel={this.navModel} 
                    navEmpath={this.navEmpath} 
                    navParts={this.navParts}
                    engineRef={this.engineRef}
                    crewModRef={this.crewModRef}
                    scrollPosition={scrollPosition}
                    height={height}
                />
            </div>
        );
    };
};

export default App;

