import React from 'react';
import './EWPhonePageHome.scss';
import EWPhoneStatusbar from '../../components/statusbar/EWPhoneStatusbar';
import EWPhoneFivebar from '../../components/fivebar/EWPhoneFivebar';
import EWPhoneAppIcon from '../../components/appicon/EWPhoneAppIcon';

import { Grid, Image } from 'semantic-ui-react'
class EWPhonePageHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parent: props.parent
        }
    }


    AppsStore() {
        this.state.parent.NavigatePage('Appstore');
    }

    AudibleApp() {
        alert('test');
    }

    render() {
        return (
            <div className="EWPhoneHomescreen">
                <div className="Top">
                    <EWPhoneStatusbar energy={this.state.parent.GetEnergy()} parent={this.state.parent} />
                </div>
                <div className="Dashboard">
                    <Grid columns={5}>
                        <Grid.Row>
                            <Grid.Column>
                            <EWPhoneAppIcon execute={()=>this.TestApp()} text="TestApp" icon="fire" size='large' color='EWColorBlack'/>
                            </Grid.Column>
                            <Grid.Column>
                            <EWPhoneAppIcon execute={()=>this.AppsStore()} text="Appstore" icon="sitemap" size='large' color='EWColorOrange'/>    
                            </Grid.Column>
                            <Grid.Column>
                                
                            </Grid.Column>
                            <Grid.Column>
                            <EWPhoneAppIcon execute={()=>this.AudibleApp()} text="Audible" icon="audible" size='large' color='EWColorOrange'/>    
                            </Grid.Column>
                            <Grid.Column>
                                
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                <div className="Bottom">
                    <EWPhoneFivebar parent={this.state.parent}/>
                </div>
            </div>
        )
    }
}

export default EWPhonePageHome;