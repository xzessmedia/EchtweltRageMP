import React from 'react';
import './EWUIComponent_ATMClock.scss';
class EWUIComponent_ATMClock extends React.Component {
    state = {
        time: new Date()
    }

    constructor(props) {	
		super(props)	
    }
    
    componentDidMount() {
		setInterval(this.updateClock, 1000)
    }
    
    updateClock = () => {
        this.setState({
			time: new Date()
		});
    }

    render() {
        const h = this.state.time.getHours()
		const m = this.state.time.getMinutes()
		const s = this.state.time.getSeconds()
        return (
            <h1 className="clock">{h}:{(m < 10 ? '0' + m : m)}:{(s < 10 ? '0' + s : s)}</h1>
        )
    }
}

export default EWUIComponent_ATMClock;