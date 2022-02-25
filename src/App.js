import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  // Switch
} from 'react-router-dom';

import Login from "./components/Login";
import index from "./components/index";


function App() {
  return (
    <div className="App">
      <Login/>
      {/* <Router>
        <Login/>
        {/* <Switch> */}
          {/* <Route exact path='/' component={Login}/> */}
        {/* </Switch> */}
      {/* </Router> */}
<h1>fdoighuifh</h1>
    </div>
  );
}

export default App;
