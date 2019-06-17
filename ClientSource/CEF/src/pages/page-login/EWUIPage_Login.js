import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import './EWUIPage_Login.scss';
import * as rpc from 'rage-rpc';

class EWUIPage_Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isInputWrong: true,
            message: '',
            mp: null
        };
        this.LoginUser = this.LoginUser.bind(this);
    }

    OnPWWrong = () => {
        if (this.state.isInputWrong === true) {
            return (
                <div>
                    <h1>Sorry das Passwort ist leider falsch!
                    Bitte versuche es erneut</h1>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="fullDiv">
                <div className="EWLogin">
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            
                            <p className="EWLoginInfo">
                            <Image src='echtwelt.png'/>
                            <Header as='h2' color='blue' textAlign='center' className="EWLoginTitle">
                                Account Login
                            </Header>
                                Um am Rollenspiel teilzunehmen benötigst du einen Account.
                                Bitte besuche die Homepage unter www.echtwelt-life.de und
                                registriere Dir dort einen kostenlosen Account.<br></br><br></br>
                                <strong>Nachdem du einen Account hast und dieser gewhitelisted wurde, kannst du dich hier anmelden.</strong>
                            </p>
                            <Form size='large' className="EWLoginInfo">
                            
                            <Segment stacked>
                            
                                <Form.Input fluid icon='user' onChange={this.ChangeUsername.bind(this)} iconPosition='left' placeholder='Benutzername' />
                                <Form.Input
                                fluid
                                icon='lock'
                                value={this.state.password}
                                onChange={this.ChangePassword.bind(this)}
                                iconPosition='left'
                                placeholder='Passwort'
                                type='password'
                                />

                                <Button color='blue' fluid size='large' onClick={this.LoginUser}>
                                Anmelden
                                </Button>
                            </Segment>
                            </Form>
                            <Message className="EWLoginInfo">
                            <strong>Noch keinen Account? </strong><br></br>Besuche <span className="EWHomepageURL">www.echtwelt-life.de</span> und erstelle Dir einen kostenlosen Account
                            </Message>
                        </Grid.Column>
                    </Grid>
                </div>
            </div>
        )
    }

    componentDidMount() {
        
    }

    componentWillUnmount() {

    }



    ChangeUsername(e) {
        this.setState({username: e.target.value});
    }
    ChangePassword(e) {
        this.setState({password: e.target.value});
    }
    LoginUser() {
        rpc.callClient('EW-Woltlab-Authentication', JSON.stringify({ username: this.state.username, password: this.state.password}));
    }
}



export default EWUIPage_Login;