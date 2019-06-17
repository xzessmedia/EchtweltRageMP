/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-14 21:52:12 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-17 11:51:58
 */

 import React from 'react';
 import './EWUIComponent_Teleporter.scss';
 import { Segment, List, Grid, Image, Button, Icon, Input } from 'semantic-ui-react'

 import * as rpc from 'rage-rpc';
 
 class EWUIComponent_Teleporter extends React.Component {
     constructor(props) {
         super(props);
 
         this.state = {
            relatedPlayer: null,
            players: [],
            locations: []
         }

         this.Cancel = this.Cancel.bind(this);
         this.SendTeleportRequest = this.SendTeleportRequest.bind(this);
         this.TeleportLocationRequest = this.TeleportLocationRequest.bind(this);
     }

     componentDidMount() {
        rpc.register('Teleporter-ReceiveData', (data) => {
            this.setState({
                relatedPlayer: data.relatedPlayer,
                players: data.players,
                locations: data.locations,
                debugdata: JSON.stringify(data)
            });
        });
     }

     Cancel() {
         rpc.callClient('EW-CloseBrowser', true);
     }

     SendTeleportRequest(item, direction) {
         item.direction = direction;
         item.relatedPlayer = this.state.relatedPlayer;
         rpc.callClient('EW-CloseBrowser', true);
         rpc.callServer('EW-Teleporter-TeleportDirection', JSON.stringify(item));
     }

     TeleportLocationRequest() {
        var item = {};
        item.targetlocation = this.state.inputLocation;
        item.relatedPlayer = this.state.relatedPlayer;
        rpc.callClient('EW-CloseBrowser', true);
        rpc.callServer('EW-Teleporter-TeleportLocation', JSON.stringify(item));
    }

     changeLocation(e) {
        this.setState({inputLocation: e.target.value});
     }
     
 
     render() {

        const renderPlayers = this.state.players.map((item, index) => {
            return (
                <List.Item>
                    <List.Content floated='right'>
                        <Button onClick={()=>{this.SendTeleportRequest(item, 'hin')}}>Teleport Hin</Button>
                        <Button onClick={()=>{this.SendTeleportRequest(item, 'her')}}>Teleport Her</Button>
                    </List.Content>
                    <List.Content>Name: {item.NameTag}</List.Content>
                    <List.Description>SocialClub: {item.SocialClub}</List.Description>
                    </List.Item>
            );
        });

        const renderLocations = this.state.locations.map((item, index) => {
            return (
                <List.Item>
                    <List.Content floated='right'>
                        <Button onClick={()=>{this.SendTeleportRequest(item, 'hin')}}>Teleport Hin</Button>
                    </List.Content>
                    <List.Content>{item.LocationName}</List.Content>
                    </List.Item>
            );
        })


         return (
             <Segment>
                 
                <Grid divided='vertically'>
                <Grid.Row columns={2}>
                <Grid.Column>
                <h3>Teleport Spieler</h3>
                <List divided verticalAlign='middle'>
                    {renderPlayers}
                </List>
                </Grid.Column>
                <Grid.Column>
                    <h3>Teleport Location</h3>
                    <List divided verticalAlign='middle'>
                        {renderLocations}
                    </List>
                    <Input label='x,y,z' placeholder='300, -210, 21' onChange={this.changeLocation.bind(this)} />
                    <Button >Teleport zu Position</Button>
                </Grid.Column>
                </Grid.Row>
                </Grid>
                <Segment>
                    <h2>Debug</h2>
                    {this.state.debugdata}
                </Segment>
                <Button onClick={this.Cancel}>Abbrechen</Button>
             </Segment>
         )
     }
 }
 export default EWUIComponent_Teleporter;
 
 