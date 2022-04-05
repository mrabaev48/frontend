import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PositionsPage from "./pages/Positions/PositionsPage";
import PositionPage from "./pages/Position/PositionPage";
import {setupStore} from "./store/store";
import {Provider} from "react-redux";


function App() {
    const store = setupStore();
    return (
        <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<PositionsPage/>}/>
                        <Route path={'/:positionId'} element={<PositionPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
