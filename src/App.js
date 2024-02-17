import Home from "./components/Home";
import Council from "./components/Council";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
       <BrowserRouter>
          <div>
<Routes> 

            <Home />
            <Route path="/council" element={<Council/>}/>
</Routes>
          </div>
        </BrowserRouter>
        
    );
}

export default App;
