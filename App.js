import Signin from './signin';
import Signup from './signup';
import CreateView from './create-and-view';
import Card from './card';
import Create from './create';
import Board from './board';
import List from './list';
import View from './view';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/signin" component={Signin}></Route>
          <Route path="/create-and-view" component={CreateView}></Route>
          <Route path="/create" component={Create}></Route>
          <Route path="/board" component={Board}></Route>
          <Route path="/list" component={List}></Route>
          <Route path="/card" component={Card}></Route>
          <Route path="/view" component={View}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
