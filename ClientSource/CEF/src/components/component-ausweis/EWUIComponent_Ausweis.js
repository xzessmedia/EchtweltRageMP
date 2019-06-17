import React from 'react';
import './EWUIComponent_Ausweis.scss';
import { Card, Icon, Image, Button } from 'semantic-ui-react'

var ausweisDaten = {
    vorname: 'Uwe',
    nachname: 'Wurst'
};

function InitAusweis(vorname, nachname) {
    ausweisDaten.vorname = vorname;
    ausweisDaten.nachname = nachname;
}

const EWUIComponentAusweisCard = (desc) => (
    <Card>
    <Image src='/images/avatar/large/matthew.png' />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>{this.desc}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

function RenderAusweis(vorname, nachname) {
    return (
        <Card>
            <Image src='/images/avatar/large/matthew.png' />
            <Card.Content>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>{this.desc}</Card.Description>
            </Card.Content>
            <Card.Content extra>
            {this.vorname}
            </Card.Content>
        </Card>
    )
}

const EWUIComponentAusweis = ({match}) => (
    <div className="EWAusweis">
        <div className="EWAusweisTitelBar">
            <h1 className="EWAusweisTitel">International ID Card <br></br>Ausweis</h1>
        </div>
        <div className="EWAusweisInfoText">
            <div className="ui statistic" id="element1">
                <div className="label">Name/Surname/Nom</div>
                <div className="value">{match.params.nachname != null ? match.params.nachname : ausweisDaten.nachname}</div>
            </div>
            <div className="ui statistic" id="element2">
                <div className="label">Vorname/Given names/Prénoms</div>
                <div className="value">{match.params.vorname != null ? match.params.vorname : ausweisDaten.vorname}</div>
            </div>
            <div className="EWAusweisBarcode">
                {(match.params.nachname != null ? match.params.nachname : ausweisDaten.nachname) + (match.params.vorname != null ? match.params.vorname : ausweisDaten.vorname)}
            </div>
        </div>
        
    </div>
)

export default EWUIComponentAusweis;