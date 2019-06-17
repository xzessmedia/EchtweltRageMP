import React from 'react';
import './EWPhoneFivebar.scss';
import { Grid, Image } from 'semantic-ui-react'
import EWPhoneAppIcon from '../appicon/EWPhoneAppIcon';

class EWPhoneFivebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parent: props.parent
        }
    }

    OnCallClicked(e) {
        this.state.parent.NavigatePage('IncomingCall');
    }

    OnKontakteClicked(e) {
        this.state.parent.NavigatePage('App-Adressbuch');
    }

    render() {
        return (
            <div className="EWPhoneFivebar">
                <Grid columns={5}>
                    <Grid.Column>
                        <EWPhoneAppIcon text='Anrufen' execute={()=>this.OnCallClicked(this)} icon='call' size='large' color='EWColorGreen'/>
                    </Grid.Column>
                    <Grid.Column>
                        <EWPhoneAppIcon text='SMS' icon='rocketchat' size='large' color='EWColorBlue'/>
                    </Grid.Column>
                    <Grid.Column>
                        <EWPhoneAppIcon text='E-Mail' icon='mail' size='large' color='EWColorYellow'/>
                    </Grid.Column>
                    <Grid.Column>
                        <EWPhoneAppIcon text='Kontakte' execute={()=>this.OnKontakteClicked(this)} icon='users' size='large' color='EWColorOrange'/>
                    </Grid.Column>
                    <Grid.Column>
                        <EWPhoneAppIcon text='Internet' icon='globe' size='large' color='EWColorBlue'/>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default EWPhoneFivebar;