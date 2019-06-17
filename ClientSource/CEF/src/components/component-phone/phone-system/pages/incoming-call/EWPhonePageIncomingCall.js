import React from 'react';
import './EWPhonePageIncomingCall.scss';
import { Grid, Image } from 'semantic-ui-react'
import EWPhoneAppIcon from '../../components/appicon/EWPhoneAppIcon';
import EWPhoneClock from '../../components/clock/EWPhoneClock';

class EWPhonePageIncomingCall extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            callingname: 'Unbekannte Nummer',
            callingnumber: '355-342233',
            parent: props.parent
        }
    }

    NavigateBack(e) {
        this.state.parent.NavigatePage('Home');
    }

    render() {
        return (
            <div className="ScreenIncomingCall">
                <div className="Top">
                    <EWPhoneClock/>
                </div>
                <div className="CallingInfo">
                    <small>Eingehender Anruf</small>
                    <h1>{this.state.callingname}</h1>
                    <h2>{this.state.callingnumber}</h2>
                </div>
                <div className="CallControls"> 
                    <Grid className="CenterControl" columns={2}>
                        <Grid.Column className="CallControlItem">
                            <EWPhoneAppIcon execute={()=>this.NavigateBack(this)} text="Annehmen" icon="call" size='large' color='EWColorGreen'/>
                        </Grid.Column>
                        <Grid.Column className="CallControlItem">
                            <EWPhoneAppIcon execute={()=>this.NavigateBack(this)} text="Ablehnen" icon="call" size='large' color='EWColorRed'/>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default EWPhonePageIncomingCall;