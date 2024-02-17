import Home from "./components/Home";
import Council from "./components/Council";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Group from "./components/Group";
import Counciler from "./components/Counciler";
function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/group" element={<Group/>}/>
                    <Route path="/council" element={<Council />} />
                    <Route path="/Councilers" element={<Counciler />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
