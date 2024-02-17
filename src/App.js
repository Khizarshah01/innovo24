import Home from "./components/Home";
import Council from "./components/Council";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Group from "./components/Group";
import Counciler from "./components/Counciler";
import Test from "./components/Council/Test";
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
                    <Route path="/Test" element={<Test />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
