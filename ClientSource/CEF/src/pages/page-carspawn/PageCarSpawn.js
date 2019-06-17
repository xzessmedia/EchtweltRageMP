import React from 'react';
import './PageCarSpawn.scss';
import * as rpc from 'rage-rpc';
import { Segment,Image, Item, Button } from 'semantic-ui-react'

class CarSpawnItem {
    Hash;
    VehicleName;
    Description;
}
class PageCarSpawn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            position: null,
            data: []
        }

        this.SpawnVehicle = this.SpawnVehicle.bind(this);
        this.Cancel = this.Cancel.bind(this);
    }

    componentDidMount() {
        rpc.register('ReceiveSpawnData', (spawndata) => {
            this.setState({
                position: spawndata.playerposition,
                data: spawndata.carlist 
            });
        });
    }

    SpawnVehicle(item) {
        var data = {
            playerposition: this.state.position,
            item: item
        };
        rpc.callServer('EW-CarSpawn-SpawnVehicle', JSON.stringify(data));
        rpc.callClient('EW-CloseBrowser', true);
    }

    Cancel() {
        rpc.callClient('EW-CloseBrowser', true);
    }

    render() {
        const VehicleItems = this.state.data.map((item, index) => {
            return (<Item>
                {/* <Item.Image size='tiny' src='/images/wireframe/image.png' /> */}

                <Item.Content>
                    <Item.Header as='a'>{item.VehicleName}</Item.Header>
                    <Item.Meta>{item.Description}</Item.Meta>
                    <Item.Description>
                        
                    </Item.Description>
                    <Item.Extra><Button onClick={()=>{this.SpawnVehicle(item)}}>Fahrzeug holen</Button></Item.Extra>
                </Item.Content>
            </Item>);
        });
        return (
            <div className="SpawnerScreen">
                <Segment className="SpawnerWindow">
                    <h1>Fahrzeugspawner</h1>
                    <Item.Group>
                        {VehicleItems}
                    </Item.Group>
                    <div>
                        <Button onClick={this.Cancel}>Abbrechen</Button>
                    </div>
                </Segment>
            </div>
        )
    }
}
export default PageCarSpawn;

