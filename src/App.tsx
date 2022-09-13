import React from 'react'
import './App.css';
import {TodolistList} from "./Components/TodolistList";
import {NavBar} from "./Style/NavBar";
import {ErrorSnackBar} from "./Style/ErrorSnackBar";



function App() {
    return (
        <div className="App">
            <ErrorSnackBar/>
            <NavBar/>
            <TodolistList/>
        </div>
    );
}


export default App;
