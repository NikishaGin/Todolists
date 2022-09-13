import React from 'react'
import './App.css';
import {TodolistList} from "./Components/TodolistList";
import {NavBar} from "./Style/NavBar";


function App() {
    return (
        <div className="App">
            <NavBar/>
            <TodolistList/>
        </div>
    );
}


export default App;
