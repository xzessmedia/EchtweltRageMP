import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './EWUIComponent_NumericValueSelector.scss';




class EWUIComponent_NumericValueSelector extends Component {
  render() {
    return (
      <div className="EWUIComponent_NumericValueSelector">
        <a class="ui blue ribbon label">Anzahl</a>
        <div className="InfoText">
        <p>Gebe hier die gewünschte Geldmenge ein:</p>
        <div class="ui right labeled input Fullsize"><input type="text" placeholder="Menge"/><div class="ui basic label"> $</div></div><br></br>
        <button class="ui primary button Fullsize">OK</button>
        </div>
      </div>
    );
  }
}

export default EWUIComponent_NumericValueSelector;


