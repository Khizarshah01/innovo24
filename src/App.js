import Home from "./components/Home";
import Council from "./components/Council";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Group from "./components/Group";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/" element={<Group/>}/>
                    <Route path="/council" element={<Council />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
