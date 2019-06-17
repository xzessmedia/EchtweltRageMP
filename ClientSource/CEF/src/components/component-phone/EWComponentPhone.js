import React from 'react';
import './EWComponentPhone.scss';

import EWPhonePageHome from './phone-system/pages/home/EWPhonePageHome';
import EWPhoneIncomingCall from './phone-system/pages/incoming-call/EWPhonePageIncomingCall';
import EWPhonePageKontakte from './phone-system/pages/adressbuch/EWPhonePageKontakte';
import Appstore from './phone-system/pages/app-appstore/appstore';
class EWComponentPhone extends React.Component {
    constructor(props) {
        super(props);



        this.state = {
            props: props,
            energy: props.energy != null ? props.energy : 100,
            currentpage: 'Home' //props.match != undefined ? props.match.params.page : 'Home',
        }
        this.HandlePage = this.HandlePage.bind(this);
        this.NavigatePage = this.NavigatePage.bind(this);
        this.GetEnergy = this.GetEnergy.bind(this);
    }

    HandlePage() {
        switch (this.state.currentpage) {
            case 'Home':
                return (<EWPhonePageHome parent={this}/>);
            case 'IncomingCall':
                return (<EWPhoneIncomingCall parent={this}/>);
            case 'App-Adressbuch':
                return (<EWPhonePageKontakte parent={this}/>);
            case 'Appstore':
                return (<Appstore parent={this}/>);
            default:
                break;
        }
    }

    GetEnergy() {
        return this.state.energy;
    }

    NavigatePage(page) {
        this.setState({
            currentpage: page
        });
    }

    render() {
        
        return (
            <div className="EWPhone">
                <div className="EWPhoneDisplay">
                    <div className="EWPhoneDisplayScreen">
                        {this.HandlePage()}
                    </div>
                </div>
            </div>
        )
    }
}

export default EWComponentPhone;