import './App.css';
import Axistable from '../src/Axistable';
import Axis from './Axis';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/axistable" element={ <Axistable/>} />
        <Route path="/axis" element={ <Axis/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
