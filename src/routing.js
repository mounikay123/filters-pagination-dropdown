import React, { Component } from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Pagination from './components/pagination';
import Pagination2 from './components/pagination2';
import ClickButton from './components/clickButton';
import FiltersInTable from './components/filterSInTable';


import FilterTable2 from './components/simpleWaySearching';
import Firebaselogin2 from './components/firebaselogin2';
import FirebaseLogin from './components/firebaseLogin';
import FirebaseData from './components/firebaseData';
import HarshPage from './components/harshPage';
// import Simple from './components/simple';
 class Routing extends Component {
    render() {
        return (
           <BrowserRouter>
           <Switch>
           
               <Route exact={true} path="/" component={FirebaseData} />
               <Route  path="/" component={FirebaseLogin} />
               <Route path="/login2" component={Firebaselogin2} />
               <Route path="/" component={ClickButton} />
               <Route  path="/home" component={Home} />
               <Route  path="/login" component={Login} />
               <Route  path="/pagination" component={Pagination} />


           </Switch>
           </BrowserRouter>
        )
    }
}
export default Routing;