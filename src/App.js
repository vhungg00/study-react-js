import logo from './logo.svg';
import './App.css';
import React from 'react';
function App() {
  const [Number, setNumber] = React.useState(0)
  const [arr, setarr] = React.useState([2, 5, 38, 6, 39, 29, 60, 40, 66, 65])
  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="display-3">Demo state</h1>
        <h3>{Number}</h3>
        <button type="button" className="btn btn-primary" onClick={() => setNumber(Number + 1)}> Tăng </button>
        <button type="button" className="btn btn-info" onClick={() => setNumber(Number - 1)}>Gỉam </button>
      </div>
      <div class="alert alert-secondary" role="alert">
        {
          arr.map(val => {
            return (
              <strong>{val} </strong>

            );
          })
        }

      </div>

    </div>
  );
}

export default App;
