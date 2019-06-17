import React from 'react';
import './EWPhoneClock.scss';
class EWPhoneClock extends React.Component {
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
            <strong className="EWPhoneClock">{h}:{(m < 10 ? '0' + m : m)}</strong>
        )
    }
}

export default EWPhoneClock;