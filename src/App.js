import React ,{Component} from 'react';

import './App.css'
// import Routing from '../src/routing';
import FirebaseLogin from '../src/components/firebaseLogin';
import Hooks from './components/hooks'
class App extends Component {
    
  render() {
    return (
      <div className="App">
        {/* <Routing /> */}
        
        <Hooks />
      </div>
    );
  }

}

export default App;
