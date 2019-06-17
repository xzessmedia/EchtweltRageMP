/*
 * @Author: Tim Koepsel 
 * @Date: 2019-03-02 15:09:01 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-03-02 15:32:18
 */


 import React from 'react';
 import './PageCharacterCreator.scss';
 import { Segment, Header, Icon, Grid, Menu, Button } from 'semantic-ui-react'
import GenderSelector from './Components/GenderSelector/GenderSelector';

 class PageCharacterCreator extends React.Component {
     constructor(props) {
         super(props);
 
         this.state = {
            selectedGender: null
         }
     }

     handleItemClick = (e, { name }) => this.setState({ activeItem: name })

     SelectGender() {

     }
 
     render() {
        const { activeItem } = this.state;
         return (
             <Segment>
                <Header as='h2'>
                    <Icon name='user' />
                    <Header.Content>
                    Charakter Editor
                    <Header.Subheader>Erstelle deinen individuellen Rollenspiel Charakter</Header.Subheader>
                    </Header.Content>
                </Header>
                
                <h2>Geschlecht:</h2>
                <GenderSelector result={this.selectedGender} />
             </Segment>
         )
     }
 }
 export default PageCharacterCreator;
 
 