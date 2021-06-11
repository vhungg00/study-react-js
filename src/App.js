import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  const [Number, setNumber] = React.useState(0)
  
  return (
    <div className="App">
     <div className="jumbotron">
  <h1 className="display-3">Demo state</h1>
  <h3>{Number}</h3>
 <button type="button" className="btn btn-primary" onClick={() => setNumber(Number +1 )}> Tăng </button>
 <button type="button" className="btn btn-info"  onClick={() => setNumber(Number - 1 )}>Gỉam </button>
</div>

    </div>
  );
}

export default App;
