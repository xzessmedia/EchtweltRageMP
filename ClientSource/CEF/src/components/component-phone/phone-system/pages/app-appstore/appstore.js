/*
 * @Author: Tim Koepsel 
 * @Date: 2019-02-09 22:13:45 
 * @Last Modified by: Tim Koepsel
 * @Last Modified time: 2019-02-09 22:22:07
 */

 import React from 'react';
 import './appstore.scss';
 import { Grid, Image } from 'semantic-ui-react'
import EWPhoneStatusbar from '../../components/statusbar/EWPhoneStatusbar';
 
 class Appstore extends React.Component {
     constructor(props) {
         super(props);
 
         this.state = {
            parent: props.parent
         }
     }
 
     render() {
         return (
            <div className="appstore">
                <div>
                    <EWPhoneStatusbar parent={this.state.parent}/>
                </div>
                <h1>Appstore</h1>
                <Grid celled>
                <Grid.Row>
                <Grid.Column width={3}>
                    <Image src='/image.png' />
                </Grid.Column>
                <Grid.Column width={13}>
                    <Image src='/centered-paragraph.png' />
                </Grid.Column>
                </Grid.Row>
            
                <Grid.Row>
                <Grid.Column width={3}>
                    <Image src='/image.png' />
                </Grid.Column>
                <Grid.Column width={10}>
                    <Image src='/paragraph.png' />
                </Grid.Column>
                <Grid.Column width={3}>
                    <Image src='/image.png' />
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
         )
     }
 }
 export default Appstore;
 
 