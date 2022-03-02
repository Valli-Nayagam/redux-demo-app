import logo from './logo.svg';
import './App.css';
import Mainpage from './components/Mainpage';
import { Provider } from 'react-redux'
import store from './redux/store'
import Table from './components/Table';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Mainpage></Mainpage>
        <Table></Table>
      </div>
    </Provider>
  );
}

export default App;
