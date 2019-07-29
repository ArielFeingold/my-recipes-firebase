import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';

import NavigationBar from '../components/NavigationBar';

let userAuth = true

// useEffect(() => {
//   // TODO: Update the userAuth from loaclStorage
// });


const App = () => (
  <React.Fragment>
    <CssBaseline />
      <Router>
        <NavigationBar isAuth={userAuth}/>
      </Router>
  </React.Fragment>
);

export default App;
