import { FunctionComponent } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter } from 'react-router-dom';

// store
import { history } from '../../store/configureStore';

// styles
import './app.scss';

const App: FunctionComponent<{}> = () => (
  <BrowserRouter>
    <ConnectedRouter history={history}>
      <div className="App">App</div>
    </ConnectedRouter>
  </BrowserRouter>
);

export default App;
