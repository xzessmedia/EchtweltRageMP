import React from 'react';
import './EWUIComponent_Inventory.scss';
import { Grid, Image } from 'semantic-ui-react'

class EWComponentInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minijobname: '',
            minijobdescription: '',
        }
    }

    render() {
        return (
            <div className="EWInventory">
                <div className="EWInventoryItems">
                    <h1>Charakter Inventar</h1>
                    <Grid>
                        <Grid.Row columns={3}>
                            <Grid.Column className="EWInventoryItem">
                                <div className="EWInventoryItemIcon">
                                    <Image src="/weapon_stungun.png" size="large">
                                    </Image>
                                    <small className="EWInventoryItemText">Taser</small>
                                </div>
                            </Grid.Column>
                            <Grid.Column  className="EWInventoryItem">
                                2
                            </Grid.Column>
                            <Grid.Column  className="EWInventoryItem">
                                3
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3}>
                            <Grid.Column className="EWInventoryItem">
                                4
                            </Grid.Column>
                            <Grid.Column  className="EWInventoryItem">
                                5
                            </Grid.Column>
                            <Grid.Column  className="EWInventoryItem">
                                6
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3}>
                            <Grid.Column className="EWInventoryItem">
                                7
                            </Grid.Column>
                            <Grid.Column  className="EWInventoryItem">
                                8
                            </Grid.Column>
                            <Grid.Column  className="EWInventoryItem">
                                9
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default EWComponentInventory;