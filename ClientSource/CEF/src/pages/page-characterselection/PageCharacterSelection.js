/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-17 18:42:02 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-26 22:52:22
 */
import React from 'react';
import './PageCharacterSelection.scss';
import { Segment, Image, List, Button, Modal, Header, Input, Statistic } from 'semantic-ui-react'
import * as rpc from 'rage-rpc';

import ButterToast, { Cinnamon, POS_BOTTOM, POS_RIGHT } from 'butter-toast';
 

class PageCharacterSelection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            maxAllowedChars: 2
        }
        this.deleteCharacter = this.deleteCharacter.bind(this);
        this.switchToCharacterEditor = this.switchToCharacterEditor.bind(this);
        this.selectCharacter = this.selectCharacter.bind(this);
    }

    componentDidMount() {
        rpc.register('ReceiveCharacterData', (receiveddata) => {
            this.setState({
                data: receiveddata.data,
                maxAllowedChars: receiveddata.maxAllowedChars,
                inputFirstname: null,
                inputLastname: null
            });
        });
    }

    ChangeFirstname(e) {
        this.setState({inputFirstname: e.target.value});
    }

    ChangeLastname(e) {
        this.setState({inputLastname: e.target.value});
    }

    deleteCharacter() {
        if (this.state.data.length === 0) {
            ButterToast.raise({
                content: <Cinnamon.Crisp scheme={Cinnamon.Crisp.SCHEME_BLUE}
                    content={() => <div>Du hast keine vorhandenen Charaktere und kannst daher auch keinen Charakter löschen.</div>}
                    title="Fehler"/>
            });
            //return;
        }
        
        rpc.callClient('EW-CloseBrowser', true);
    }

    switchToCharacterEditor() {
        rpc.callClient('EW-Character-Create', JSON.stringify({
            firstname: this.state.inputFirstname,
            lastname: this.state.inputLastname
        }))
    }

    selectCharacter(item) {
        rpc.callServer('EW-Character-Selected', item);
    }

    render() {
        const renderCharacters = this.state.data.map((item, index) => (
            <List.Item onClick={()=> this.selectCharacter(item)}>
                    <Image avatar src='ewicon.png' />
                    <List.Content>
                    <List.Header>{item.firstname + ' ' + item.lastname}</List.Header>
                    <small><strong>Bargeld: </strong> {item.handmoney}$ | <strong>Beruf: </strong> {item.job}</small>
                    </List.Content>
            </List.Item>
        ));
        return (
            <div className="CharacterSelectionPage">
                <Segment>
                <h1>Deine Charaktere</h1>
                <p>Wähle einen Charakter aus oder erstelle Dir einen neuen Charakter</p>
                <p>{JSON.stringify(this.state)}</p>
                <List selection verticalAlign='middle'>
                    {renderCharacters}
                </List>
                <div className="centerContent">
                    <Statistic>
                        <Statistic.Value>{(this.state.maxAllowedChars - this.state.data.length)}</Statistic.Value>
                        <Statistic.Label>Freie Charaktere</Statistic.Label>
                    </Statistic>
                </div>
                <hr/>
                <div className="centerContent">
                <Modal trigger={<Button inverted primary>Neuen Charakter erstellen</Button>}>
                <Modal.Header>Neuer RP Charakter</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                    <Input onChange={this.ChangeFirstname.bind(this)} label='Vorname' />
                    <Input onChange={this.ChangeLastname.bind(this)} label='Familienname' />
                    <Button inverted primary onClick={this.switchToCharacterEditor}>Weiter zum Charakter Editor</Button>
                </Modal.Description>
                </Modal.Content>
                </Modal>
                <Modal trigger={<Button inverted color='red'>Charakter löschen</Button>}>
                <Modal.Header>Vorhandenen Charakter löschen</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                    <Header>Sicherheitsbestätigung</Header>
                    <p>Wenn du deinen Charakter wirklich vollständig entfernen möchtest, gebe zur Bestätigung den Vor- und Nachnamen des Charakters ein und betätige den Löschen Button</p>
                    <Input onChange={this.ChangeFirstname.bind(this)} label='Vorname' />
                    <Input onChange={this.ChangeLastname.bind(this)} label='Familienname' />
                    <Button inverted color='red' onClick={this.deleteCharacter}>Charakter unwideruflich löschen</Button>
                </Modal.Description>
                </Modal.Content>
                </Modal>
                </div>
            </Segment>
            <ButterToast position={{vertical: POS_BOTTOM, horizontal: POS_RIGHT}}/>
            </div>
        )
    }
}
export default PageCharacterSelection;

