import Home from "./components/Home";
import Council from "./components/Council";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Group from "./components/Group";
import Counciler from "./components/Counciler";
import Test from "./components/Council/Test";
<<<<<<< HEAD
import Register from "./components/register";
import Login from "./components/login";
=======
import CouncilPro from "./components/CounselorProfile";
>>>>>>> 2e36bd496a28045fe5068188f963a3f989d10136
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
<<<<<<< HEAD
                    <Route path="/register" element={<Register />}/>
                    <Route path="/login" element={<Login />}/>
=======
                    <Route path="/CouncilProfile" element={<CouncilPro />} />
>>>>>>> 2e36bd496a28045fe5068188f963a3f989d10136
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
