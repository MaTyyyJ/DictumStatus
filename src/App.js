import React from 'react';

import StatusPageHeader from './components/StatusPageHeader.js';
import StatusCard from './components/StatusCard.js';

import './css/App.css';
import Statuses from "./components/Monitoring.js";

function App() {
    return (
        <>
            <StatusPageHeader/>
            <StatusCard/>
            <Statuses/>
        </>
    );
}

export default App;