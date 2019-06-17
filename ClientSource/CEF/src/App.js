import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.scss';
import EWUIComponent_Hud from './components/component-hud/EWUIComponent_Hud';



const ButtonExampleButton = () => <Button>Testen</Button>



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  componentDidMount() {

}

  render() {

    return (
      <div>
        <EWUIComponent_Hud/>
      </div>
    );
  }
}

export default App;
