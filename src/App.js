import logo from './logo.svg';
import './App.css';
import Signup from "./Components/Signup"
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Login from './Components/Login'
import {AuthProvider} from './Context/AuthContext'
import Feed from './Components/Feed'
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile';
import Ioa from './Components/Ioa'


function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Switch>
    <Route path="/login" component={Login}/>
    <Route path="/signup" component={Signup}/>
    <PrivateRoute path="/profile/:id" component={Profile}></PrivateRoute>
    <PrivateRoute path ="/" component={Feed}></PrivateRoute>
    </Switch>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
 