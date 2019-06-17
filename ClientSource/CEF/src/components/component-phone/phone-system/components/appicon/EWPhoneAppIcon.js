import React from 'react';
import { Grid, Image,Icon, Progress } from 'semantic-ui-react'
import './EWPhoneAppIcon.scss';

class EWPhoneAppIcon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            icon: props.icon != null ? props.icon : 'call',
            text: props.text != null ? props.text : 'Anrufen',
            size: props.size != null ? props.size : 'large',
            color: props.color != null ? props.color : 'EWColorGreen',
            execute: props.execute != null ? props.execute : () => {  }
        }
    }

    OnClickIcon(e) {
        this.state.execute();
    }

    render() {
        return (
            <div className="CenterItem">
                <div onClick={()=>this.OnClickIcon(this)} className={"EWPhoneAppIcon " + this.state.color}>
                <Icon name={this.state.icon} size={this.state.size} />
                </div>
                <p className="EWPhoneAppText"><small>{this.state.text}</small></p>
            </div>
        )
    }
}

export default EWPhoneAppIcon;