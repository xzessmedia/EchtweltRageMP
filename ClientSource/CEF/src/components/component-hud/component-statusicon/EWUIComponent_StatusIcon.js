import React from 'react';
import './EWUIComponent_StatusIcon.scss';
import CircularProgressbar from 'react-circular-progressbar';
import { Icon } from 'semantic-ui-react'

function CustomContentProgressbar(props) {
    const { children, ...otherProps } = props;
  
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%"
        }}
      >
        <div style={{ position: "absolute" }}>
          <CircularProgressbar {...otherProps} />
        </div>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {props.children}
        </div>
      </div>
    );
  }


class EWUIComponent_StatusIcon extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            percentage: props.percentage !== undefined ? props.percentage : 24,
            icon: props.icon !== undefined ? props.icon : 'money',
            iconsize: props.iconsize !== undefined ? props.iconsize : 'small',
            color: props.color !== undefined ? props.color : 'blue',
            status: props.status !== undefined ? props.status : ''
        }
    }

    render() {
        return (
            <div className="EWUIIcon">
            <CustomContentProgressbar percentage={this.state.percentage}>
                <div className="EWIconContent">
                
                <Icon size={this.state.iconsize} color={this.state.color} name={this.state.icon} />
                <p><strong>{this.state.status}</strong></p>
                </div>
            </CustomContentProgressbar>
            </div>
        )
    }
}


export default EWUIComponent_StatusIcon;