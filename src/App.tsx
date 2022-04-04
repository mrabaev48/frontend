import React from 'react';
import './App.css';
import PositionList from "./components/positions/PositionList/PositionList";
import {Position} from "./models/Position";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PositionsPage from "./pages/Positions/PositionsPage";
import PositionPage from "./pages/Position/PositionPage";



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<PositionsPage/>}/>
                    <Route path={'/:positionId'} element={<PositionPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
