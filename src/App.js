import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './componentes/Login';
import Robots from './componentes/Robots';
import RobotDetail from './componentes/RobotDetail';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/robots" element={<Robots />} />
                <Route path="/robots/:id" element={<RobotDetail />} />
            </Routes>
        </Router>
    );
};

export default App;



