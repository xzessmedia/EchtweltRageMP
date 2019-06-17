import React from 'react';
import './EWUIComponent_ATMMain.scss';
import { Button } from 'semantic-ui-react';
import EWUIComponent_ATMClock from '../component-atmclock/EWUIComponent_ATMClock';

class EWUIComponent_ATMMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <div>
                <div className="ATMClock"><EWUIComponent_ATMClock/></div>
                <div>
                    <h1>Test</h1>
                </div>
            </div>
        );
    }

}

export default EWUIComponent_ATMMain;