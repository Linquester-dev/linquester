import { Route , Switch } from "react-router-dom"
import Navbar from "./LandingPage/Nav"
// import Footer from './LandingPage/Footer'
// import Working from './LandingPage/Working'
// import Home from "./LandingPage/Home"
// import About from './LandingPage/AboutUs/About'
// import Login from './components/Login'
function App() {
    return (
        <Switch>
           <Route path="/navbar" component={Navbar}/>
        </Switch>
        // <BrowserRouter>
        //   <Navbar/>
        //   <Home/>
        //   <Working/>
        //   <About/>
        //     <Footer/> 
        //     <Route path="/login" component={Login}/>
        // </BrowserRouter>
    );
}

export default App;
