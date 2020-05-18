import React, { useState, useEffect, Component } from 'react';
import { render } from "react-dom";
import TaskRow from '../components/TaskRow';
import 'bootstrap/dist/css/bootstrap.css'
import '../assets/styles/App.css';


const App = () => {
    return(
        <div className="container">
            <TaskRow/>
        </div> 
    )
}

export default App;