import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Collector from './component/Collector';
import QrReaderComponet from './component/QrReaderComponet';
import CollectorConfirmation from './component/CollectorConfirmation';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <div>
            <Switch>
              <Route exact path="/" component={Collector} />
              <Route exact path="/scanner" component={QrReaderComponet} />
              <Route exact path="/collector-confirmation" component={CollectorConfirmation} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}
export default App;
