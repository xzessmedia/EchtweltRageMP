import React from 'react';
import './EWPhoneControlBar.scss';

import { Grid, Image, Button } from 'semantic-ui-react'
class EWPhoneControlBar extends React.Component {
    

    constructor(props) {	
        super(props)	

        this.state = {
            parent: props.parent
        };
    }
    
    GoBack(e) {

    }

    Home(e) {
        this.state.parent.NavigatePage('Home');
    }

    render() {
        return (
            <div className="AppControlContent">
                <Grid className="fullWidth" columns={3}>
                    <Grid.Column>
                        <Button circular icon='bars'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Button onClick={()=>this.Home(this)} circular icon='square outline'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Button onClick={()=>this.GoBack(this)} circular icon='angle left'/>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default EWPhoneControlBar;