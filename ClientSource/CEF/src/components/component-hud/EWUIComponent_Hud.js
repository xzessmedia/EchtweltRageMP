import React from 'react';
import { Segment, Image, Icon } from 'semantic-ui-react'
import './EWUIComponent_Hud.scss';
import EWUIComponent_StatusIcon from './component-statusicon/EWUIComponent_StatusIcon';
import EWComponentPhone from '../component-phone/EWComponentPhone';
import CircularProgressbar from 'react-circular-progressbar';



class EWUIComponent_Hud extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ewversion: '0.0.0.1 beta',
            money: props.money != null ? props.money : 500,
            food: props.food != null ? props.food : 1.0,
            thirst: props.thirst != null ? props.thirst : 1.0,
            voice: props.voice != null ? props.voice : 'Normal',
            job: props.job != null ? props.job : 'Arbeitslos',
            minijob: props.minijob != null ? props.minijob : 'Keiner',
            currency: props.currency != null ? props.currency : '$'
        }
    }

    componentDidMount() {

    }

    OnInitHud(data) {
        data = JSON.parse(data);
        this.setState({
                ewversion: data.ewversion,
                money: data.money,
                food: data.food,
                thirst: data.thirst,
                voice: data.voice,
                currency: data.currency
            });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="EWHud">
            <Image src="watermark.png" size='tiny' centered />
            <small>INTERNAL NON PUBLIC</small>
            <div className="EWHudTopRight">
            
            <p></p>
            <div className="textAlignRight textGreen">
            <p><strong>{this.state.money} $</strong>&ensp;<Icon name='money' size='large'/></p>
            </div>
            
            </div>
            <div className="EWHudBar">
                <EWUIComponent_StatusIcon percentage={50} color='green' icon='food'  iconsize='large' />
                <EWUIComponent_StatusIcon percentage={50} color='orange' icon='gulp'  iconsize='large' />
                <EWUIComponent_StatusIcon percentage={100} color='blue' icon='bolt'  iconsize='large' />
                <EWUIComponent_StatusIcon percentage={100} color='blue' icon='audible'  iconsize='large' />
                {/* <EWUIComponent_StatusIcon percentage={100} color='blue' icon='google'  iconsize='large' />
                <EWUIComponent_StatusIcon percentage={20} color='blue' icon='facebook'  iconsize='large' /> */}
                {/* <EWUIComponent_StatusIcon percentage={100} color='blue' icon='gulp'  iconsize='large' status='Durst' /> */}
            </div>
            </div>
        )
    }
}


export default EWUIComponent_Hud;