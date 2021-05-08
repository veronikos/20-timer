import { Timer } from './components/timer'

function App() {
  return (
    <div className="App">
        <Timer time={6000} step={1000} autoStart={false} />
        <Timer time={90000} step={1000} autoStart={true} />
    </div>
  );
}

export default App;