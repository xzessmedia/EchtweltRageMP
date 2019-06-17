import React from 'react';
import './EWUIComponent_ATMLogin.scss';
import EWUIComponent_ATMClock from '../component-atmclock/EWUIComponent_ATMClock';
import EWUIComponent_ATMKeyboard from '../component-atmkeyboard/EWUIComponent_ATMKeyboard';
import { Input, Button } from 'semantic-ui-react'

class EWUIComponent_ATMLogin extends React.Component {
    state = {
        money: 0,
        accountnumber: 9994123,
        pincode: 1234,
        amountTries: 0,
        IsLocked: false
    }
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="ATMLogin">
                <div className="ATMClock"><EWUIComponent_ATMClock/></div>
                <div className="ATMFont">
                    <h1 className="ATMFont">Herzlich Willkommen,</h1>
                    <p className="ATMFont">Kontonummer: {this.state.accountnumber}</p>
                    <p className="ATMFont">Bitte geben Sie Ihre Geheimzahl ein</p>
                    <Input className="ATMInput"
                        action={{ color: 'darkblue', labelPosition: 'left', icon: 'lock', content: 'Geheimzahl' }}
                        actionPosition='left'
                        placeholder='****'
                        defaultValue='****'
                    />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="ATMcenter">
                        <EWUIComponent_ATMKeyboard/>
                    </div>
                    {/* <div className="ATMButtonBar">
                        <Button className="ATMInput" size='massive' color='black'>Weiter</Button>
                    </div> */}
                </div>
            </div>
        )
    }
}
export default EWUIComponent_ATMLogin;