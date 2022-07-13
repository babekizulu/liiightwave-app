class ModelController {
    constructor(modelActive, soundscapePlaying, soundscape) {
        this.modelActive = modelActive;
        this.soundscapePlaying = soundscapePlaying;
        this.soundscape = soundscape;
    }

    activateModel() {
        const modelActive = this.modelActive;
        const soundscapePlaying = this.soundscapePlaying;
        const soundscape = this.soundscape;
        
        if (!modelActive && !soundscapePlaying) {
            this.setState({ modelActive: true });
            this.setState({ soundscapePlaying: true});
            this.modelRef.current.play();
            soundscape.play();
        }
    }

    deactivateModel() {
        const modelActive = this.modelActive;
        const soundscapePlaying = this.soundscapePlaying;
        const soundscape = this.soundscape;

        if(modelActive && soundscapePlaying) {
            this.setState({modelActive: false});
            this.setState({soundscapePlaying: false});
            this.modelRef.current.pause();
            soundscape.pause();
        }
    }
}

export default ModelController;