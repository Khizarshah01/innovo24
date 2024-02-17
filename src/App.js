import Home from "./components/Home";
import Council from "./components/Council";

function App() {
    return (
        <div className="App">
            <Home />
            <Council path="/council" />
        </div>
    );
}

export default App;
