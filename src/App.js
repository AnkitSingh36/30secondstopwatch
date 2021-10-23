import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
    let [timer, setTimer] = useState(30);
    let [disable, setDisable] = useState(false);
    let interval;

    function handleSubmit(e) {
        e.preventDefault();
        interval = setInterval(() => {
            setTimer((timer) = timer - 1);
        }, 1000);
        return () => clearInterval(interval);
    }

    useEffect(() => {
        if (timer >= 1) {
            //setDisable((disable) = true);
        }
        if (timer === 0) {
            //setDisable((disable) = false);
            clearInterval(interval);
        }
    }, [timer]);

    function reset() {
        setTimer((timer) = 30);
        return clearInterval(interval);
    }

  return (
    <div className="App">
          <header className="App-header">
              <form onSubmit={handleSubmit}>
              <p>{timer}</p>
                  <div>
                      <button disabled={disable} type='submit'>Start</button>
                      <button onClick={reset}>Reset</button>
                  </div>
              </form>
      </header>
    </div>
  );
}

export default App;
