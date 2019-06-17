import React from 'react';
import './EWUIComponent_Window.scss';
import { Button } from 'semantic-ui-react';

class EWUIComponent_Window extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Neues Fenster',
            canClose: true
        };
    }

    renderCloseButton() {
        if (this.state.canClose === true) {
            return <Button className="EWUICloseButton" onClick={this.CloseWindow}>X</Button>;
        }
    }

    render() {
        return (
            <div className="EWUIWindow">
                <div className="EWUIWindowTitle">{this.state.title}
                    {this.renderCloseButton}
                </div>
            </div>
        );
    }

    CloseWindow() {

    }
}

export default EWUIComponent_Window;