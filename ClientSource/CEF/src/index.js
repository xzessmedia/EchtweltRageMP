import 'semantic-ui-css/semantic.min.css'
import 'react-circular-progressbar/dist/styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, HashRouter as Router } from 'react-router-dom'
import App from './App';
import EWUIComponent_Ausweis from './components/component-ausweis/EWUIComponent_Ausweis';
import EWUIComponent_NumericValueSelector from './components/component-valueselector/EWUIComponent_NumericValueSelector';
import EWUIComponent_Test from './components/component-test/EWUIComponent_Test';
import EWUIComponent_Hud from './components/component-hud/EWUIComponent_Hud';
import EWUIPage_ATM from './pages/page-atm/EWUIPage_ATM';
import EWUIPage_Login from './pages/page-login/EWUIPage_Login';
import * as serviceWorker from './serviceWorker';
import PageCarSpawn from './pages/page-carspawn/PageCarSpawn';
import EWUIComponent_Teleporter from './components/component-teleporter/EWUIComponent_Teleporter';
import PageCharacterSelection from './pages/page-characterselection/PageCharacterSelection';
import EWComponentPhone from './components/component-phone/EWComponentPhone';
import PageCharacterCreator from './pages/page-charactercreator/PageCharacterCreator';





const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/ausweis/:vorname/:nachname" component={EWUIComponent_Ausweis} />
        <Route path="/valueselector" component={EWUIComponent_NumericValueSelector} />
        <Route path="/test" component={EWUIComponent_Test} />
        <Route path="/playerhud" component={EWUIComponent_Hud} />
        <Route path="/phone" component={EWComponentPhone} />
        <Route path="/atm" component={EWUIPage_ATM} />
        <Route path="/login" component={EWUIPage_Login} />
        <Route path="/carspawn" component={PageCarSpawn} />
        <Route path="/teleporter" component={EWUIComponent_Teleporter} />
        <Route path="/characterselection" component={PageCharacterSelection} />
        <Route path="/charactereditor" component={PageCharacterCreator} />
      </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
