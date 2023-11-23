import './App.css';
import Form from "../src/components/Form";
import { Homepage } from './components/Homepage/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/user" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
