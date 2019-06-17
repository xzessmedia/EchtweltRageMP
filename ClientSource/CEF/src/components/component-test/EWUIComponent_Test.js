import React from 'react';
import './EWUIComponent_Test.scss';
import EWComponentPhone from '../component-phone/EWComponentPhone';
import { Button } from 'semantic-ui-react'
// tslint:disable-next-line
import * as rpc from 'rage-rpc';

class TestKomponente extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            energy: 100
        }
        this.timerUpdate = this.timerUpdate.bind(this);
        this.OnButtonTest = this.OnButtonTest.bind(this);
    }
    componentDidMount() {
        this.interval = setInterval(() => this.timerUpdate()
        , 1000);
    }
    timerUpdate() {
        this.setState({ energy: (this.state.energy - 1) });
        this.forceUpdate();
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }
    render() {
        return (
            <div>
                <p>{this.state.energy}</p>
                <EWComponentPhone energy={this.state.energy}/>
                <Button onClick={this.OnButtonTest} >Weglegen</Button>
            </div>
        )
    }
    OnButtonTest() {
        // tslint:disable-next-line
        rpc.callClient('EW-Test-Finish', true);
    }
}
export default TestKomponente;