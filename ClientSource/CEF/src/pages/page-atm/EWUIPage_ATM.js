import React from 'react';
import './EWUIPage_ATM.scss';

import EWUIComponent_ATMLogin from './component-atmlogin/EWUIComponent_ATMLogin';
import EWUIComponent_ATMMain from '../page-atm/component-atmmain/EWUIComponent_ATMMain';

class EWUIPage_ATM extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            money: 0,
            accountnumber: 9994123,
            pincode: 1234,
            amountTries: 0,
            IsLocked: false,
            page: 'login',
            time: new Date()
        };
    }

    componentDidMount() {

    }
    

    routing(page) {
        switch (page) {
            case 'login':
                return <EWUIComponent_ATMLogin/>;
                break;
            case 'main':
                return <EWUIComponent_ATMMain/>;
                break;
            case 'kontostand':

                break;
            case 'auszahlen':

                break;
        
            default:
                break;
        }
    }

    render() {
        return (
            <div className="ATMPage">
                <div className="ATM">
                    <div className="ATMDisplay">
                        {this.routing(this.state.page)}
                    </div>
                </div>
            </div>
        )
    }
}
export default EWUIPage_ATM;