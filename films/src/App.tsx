import './App.css';
import Stars from "./components/Stars";

const count:number =5;

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Stars count={count}/>
      </header>
    </div>
  );
}

export default App;
