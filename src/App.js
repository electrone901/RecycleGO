import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Navbar from './component/Navbar';
import Collector from './component/Collector';
import QrReaderComponet from './component/QrReaderComponet';
import CollectorConfirmation from './component/CollectorConfirmation';
import Dashboard from './component/Dashboard';
import Verification from './component/Verification';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Navbar />
          <div>
            <Switch>
              <Route exact path="/" component={Collector} />
              <Route exact path="/scanner" component={QrReaderComponet} />
              <Route exact path="/collector-confirmation" component={CollectorConfirmation} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/verification" component={Verification} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
