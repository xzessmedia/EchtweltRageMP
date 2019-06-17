import React from 'react';
import './EWUIComponent_ATMKeyboard.scss';
import { Grid, Image, Button } from 'semantic-ui-react'

class EWUIComponent_ATMKeyboard extends React.Component {

    render() {
        return (
            <div className="ATMNumpad">
                <Grid>
                    <Grid.Row>
                    <Grid.Column width={2}>
                        <Button size='huge'>1</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Button size='huge'>2</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Button size='huge'>3</Button>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column width={2}>
                    <Button size='huge'>4</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                    <Button size='huge'>5</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Button size='huge'>6</Button>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column width={2}>
                    <Button size='huge'>7</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                    <Button size='huge'>8</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Button size='huge'>9</Button>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column width={2}>
                    <Button size='huge'>*</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                    <Button size='huge'>0</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Button size='huge'>#</Button>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default EWUIComponent_ATMKeyboard;