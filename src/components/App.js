//libraries
import { React, Component, createRef, Fragment} from 'react';
import ModelController from '../libs/ModelController';
//components 
import Header from './Header';
import ModelBox from './ModelBox';
import Navigation from './Navigation'
import EmpathWidget from './EmpathWidget';
//style
import '../scss/App.scss';
//soundscapes
import Soundscape1 from '../audio/heal, love, heal.mp4';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { modelActive: false, soundscape: new Audio(Soundscape1), soundscapePlaying: false, activePage: 'model'};
        this.modelRef = createRef()
    }
    activateModel = () => {
        const { modelActive, soundscapePlaying, soundscape } = this.state;
        new ModelController(modelActive, soundscapePlaying, soundscape).activateModel()
    }

    deactivateModel = () => {
        const { modelActive, soundscapePlaying, soundscape} = this.state;
        new ModelController(modelActive, soundscapePlaying, soundscape).deactivateModel();
    }

    navModel = () => {
        this.setState({activePage: 'model'});
    }

    navEmpath = () => {
        this.setState({activePage: 'empath'});
    };

    render() {
        const {activePage} = this.state;
        return (
            <div className='app-container'>
                <Header />
                    <Fragment>
                        {activePage === 'model' ? <ModelBox modelRef={this.modelRef}/> : <EmpathWidget/>}
                    </Fragment>
                <Navigation activateModel={this.activateModel} deactivateModel={this.deactivateModel} navModel={this.navModel} navEmpath={this.navEmpath}/>
            </div>
        );
    };
};

export default App;

