import Controls from './components/Controls'
import Deck from './components/Deck'
//import CardContextProvider from './contexts/CardContext';
import {StateProvider} from './store/store'
//import Home from './Home';
import Hand from './components/Hand'

function App() {
 // const title = "iX Cards Test"
  return (
    <div className="App">
      <h1 style = {{ 'textAlign': 'center'}}>iX Cards Test</h1>
      <div className="main-wrapper">
        <StateProvider>
        
            <Deck/>
            <Controls/>
            <Hand/>
        </StateProvider>

      </div>
    </div>
  );
}

export default App;
