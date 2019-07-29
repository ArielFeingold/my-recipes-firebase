import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../components/Navigation';


const App = () => (
  <React.Fragment>
    <CssBaseline />
      <Router>
        <Navigation />
      </Router>
  </React.Fragment>
);

export default App;
