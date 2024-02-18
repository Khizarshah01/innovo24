import Home from "./components/Home";
import Council from "./components/Council";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Group from "./components/Group";
import Counciler from "./components/Counciler";
import Test from "./components/Council/Test";
import Register from "./components/register";
import Login from "./components/login";

import CouncilPro from "./components/CounselorProfile";

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

                    <Route path="/register" element={<Register />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/CouncilProfile" element={<CouncilPro />} />

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
