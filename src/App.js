import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './component/Home/Home';
import ErrorMsg from './component/ErrorMsg/ErrorMsg';
import NavBar from './component/NavBar/NavBar';
import Survices from './component/Survices/Survices';


function App() {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Switch>
       <Route exact path="/">
      <Home></Home>
       </Route>

       <Route path="/home">
        <Home></Home>
       </Route>

       <Route path="/survice">
         <Survices></Survices>
       </Route>

       <Route path="*">
        <ErrorMsg></ErrorMsg>
       </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
