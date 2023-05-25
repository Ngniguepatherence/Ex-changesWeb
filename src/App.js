import { BrowserRouter, Route,Routes } from "react-router-dom";
import React from "react";
import Navigation from "./components/Menu";
import Home from "./components/Home";

const App = () =>{

    return (
        <div className="App">
            <Navigation/>
            <BrowserRouter>
            <Navigation/>
                <Routes>
                    <Route exact path="/" Component={Home} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;