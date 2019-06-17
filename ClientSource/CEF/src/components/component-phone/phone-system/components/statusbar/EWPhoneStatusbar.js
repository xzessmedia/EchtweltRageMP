import React from 'react';
import { Grid, Image, Progress } from 'semantic-ui-react'
import EWPhoneClock from '../clock/EWPhoneClock';
import './EWPhoneStatusbar.scss';

class EWPhoneStatusbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parent: props.parent,
            energy: props.energy != null ? props.energy : 100
        }
    }

    render() {
        return (
            <div className="EWPhoneStatusbar">
                <Grid columns={5}>
                    <Grid.Column>
                        <EWPhoneClock/>
                    </Grid.Column>
                    <Grid.Column>
                        EWMobile
                    </Grid.Column>
                    <Grid.Column>

                    </Grid.Column>
                    <Grid.Column>
                        <Image src="phonenetwork.png" size='mini'/>
                    </Grid.Column>
                    <Grid.Column>
                    {this.state.energy}%
                    <Progress percent={this.state.energy} size='tiny'></Progress>
                    
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default EWPhoneStatusbar;