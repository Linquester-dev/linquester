import { Routes, Route, BrowserRouter } from "react-router-dom";
import Working from "./LandingPage/Working";

//import About from "./LandingPage/AboutUs";
import Footer from "./components/Footer";
import Home from "./Home";
import Navbar from "./components/Navbar";
// import Login from "./components/Login";
function App() {
    return (
        <>
            {/* <About /> */}
            <BrowserRouter>
                <Routes>
                    <Route path={`/`} element={<Home />} />
                </Routes>
            </BrowserRouter>
            <Navbar />

            <Working />
            <Footer />
            {/* <Login /> */}
        </>
    );
}

export default App;
