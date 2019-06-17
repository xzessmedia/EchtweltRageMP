import React from 'react';
import './EWAppTaschenrechner.scss';
import { Grid, Image, Button } from 'semantic-ui-react'

class EWAppTaschenrechner extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ergebnis: 0,
            zwischenwert: 0,
            rechenart: null,
            eingabe: 0
        }
    }

    render() {
        return (
            <div>
                <div className="RechnerDisplay">
                    {this.ergebnis}
                </div>
                <Grid>
                    <Grid.Row>
                    <Grid.Column width={2}>
                        <Button size='huge' onClick={()=>this.RechenButton(1)}>1</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Button size='huge' onClick={()=>this.RechenButton(2)}>2</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Button size='huge' onClick={()=>this.RechenButton(3)}>3</Button>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column width={2}>
                    <Button size='huge' onClick={()=>this.RechenButton(4)}>4</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                    <Button size='huge' onClick={()=>this.RechenButton(5)}>5</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Button size='huge' onClick={()=>this.RechenButton(6)}>6</Button>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column width={2}>
                    <Button size='huge' onClick={()=>this.RechenButton(7)}>7</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                    <Button size='huge' onClick={()=>this.RechenButton(8)}>8</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Button size='huge' onClick={()=>this.RechenButton(9)}>9</Button>
                    </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                    <Grid.Column width={2}>
                    <Button size='huge'>*</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                    <Button size='huge' onClick={()=>this.RechenButton(0)}>0</Button>
                    </Grid.Column>
                    <Grid.Column width={2}>
                        <Button size='huge'>#</Button>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }

    RechenButton(zahl) {
        switch (this.state.rechenart) {
            case null:
                if (this.state.eingabe === 0) {
                    this.setState({eingabe: zahl});
                } else {
                    this.setState({eingabe: this.state.eingabe + zahl});
                }
                break;
            case 'addieren':
                if (this.zwischenwert != 0) {
                    this.setState({zwischenwert: this.state.eingabe});
                } else {
                    this.setState({eingabe: this.state.eingabe + zahl});
                }
                break;
            case 'subtrahieren':
            
                break;
            case 'multiplizieren':

                break;
            case 'dividieren':

                break;
        
            default:
                break;
        }
    }

    Addieren() {
        this.setState({
            rechenart: 'addieren' 
        });
    }

    Multiplizieren() {
        this.setState({
            rechenart: 'multiplizieren' 
        });
    }

    Subtrahieren() {
        this.setState({
            rechenart: 'subtrahieren' 
        });
    }

    Dividieren() {
        this.setState({
            rechenart: 'dividieren' 
        });
    }
}

export default EWAppTaschenrechner;