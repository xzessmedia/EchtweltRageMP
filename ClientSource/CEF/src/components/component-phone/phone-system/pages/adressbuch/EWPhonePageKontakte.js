import React from 'react';
import './EWPhonePageKontakte.scss';

import EWPhoneControlBar from '../../components/appcontrolbar/EWPhoneControlBar';
import EWPhoneStatusbar from '../../components/statusbar/EWPhoneStatusbar';
import { Button, Image, List, Icon } from 'semantic-ui-react'

class EWPhonePageKontakte extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            parent: props.parent
        };
    }

    render() {
        return (
            <div className="PageKontakteScreen">
                <div>
                    <EWPhoneStatusbar parent={this.state.parent}/>
                </div>
                <div className="KontaktePage">
                    <h1>Kontakte</h1>
                    <List divided verticalAlign='middle'>
                        <List.Item>
                        <List.Content floated='right'>
                            <Button circular color='green' icon="call"></Button>
                            <Button circular color='blue' icon='rocketchat'></Button>
                            <Button circular color='orange' icon='mail'></Button>
                            <Button circular icon='edit'></Button>
                        </List.Content>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lena.png' />
                        <List.Content>Lena</List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Content floated='right'>
                            <Button circular color='green' icon="call"></Button>
                            <Button circular color='blue' icon='rocketchat'></Button>
                            <Button circular color='orange' icon='mail'></Button>
                            <Button circular icon='edit'></Button>
                        </List.Content>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' />
                        <List.Content>Lindsay</List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Content floated='right'>
                            <Button circular color='green' icon="call"></Button>
                            <Button circular color='blue' icon='rocketchat'></Button>
                            <Button circular color='orange' icon='mail'></Button>
                            <Button circular icon='edit'></Button>
                        </List.Content>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/mark.png' />
                        <List.Content>Mark</List.Content>
                        </List.Item>
                        <List.Item>
                        <List.Content floated='right'>
                            <Button circular color='green' icon="call"></Button>
                            <Button circular color='blue' icon='rocketchat'></Button>
                            <Button circular color='orange' icon='mail'></Button>
                            <Button circular icon='edit'></Button>
                        </List.Content>
                        <Image avatar src='https://react.semantic-ui.com/images/avatar/small/molly.png' />
                        <List.Content>Molly</List.Content>
                        </List.Item>
                    </List>
                </div>
                <div className="BottomAppControl">
                    <EWPhoneControlBar parent={this.state.parent}/>
                </div>
            </div>
        )
    }
}

export default EWPhonePageKontakte;