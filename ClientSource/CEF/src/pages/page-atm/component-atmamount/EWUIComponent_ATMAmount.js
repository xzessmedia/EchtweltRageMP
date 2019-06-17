import React from 'react';
import './EWUIComponent_ATMAmount.scss';
import { Button } from 'semantic-ui-react';

class EWUIComponent_ATMAmount extends React.Component {
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

export default EWUIComponent_ATMAmount;