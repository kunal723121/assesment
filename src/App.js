import Navbar from "./Components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signinpage from "./Components/Signinpage"
import Signup from "./Components/Signup"
import { Auth } from "./Components/Auth"
let App=()=>{
    return <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Auth><Navbar/></Auth>}/>
            <Route path="/nav" element={<Auth><Navbar/></Auth>}/>
            <Route path="/signin" element={<Auth><Signinpage/></Auth>}/>
            <Route path="/signup" element={<Auth><Signup/></Auth>}/>
        </Routes>
        </BrowserRouter>
    </div>
}
export default App