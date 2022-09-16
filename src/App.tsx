import React from 'react'
import './App.css';
import {TodolistList} from "./Components/TodolistList";
import {NavBar} from "./Style/NavBar";
import {ErrorSnackBar} from "./Style/ErrorSnackBar";
import {Login} from "./Components/Login";
import {Navigate, Route, Routes} from "react-router-dom";
import {useFormik} from "formik";



function App() {
    return (
        <div className="App">
            <ErrorSnackBar/>
            <NavBar/>
            <Routes>
                <Route path={'/'} element={<TodolistList/>}/>
                <Route path={'login'} element={<Login/>}/>

                <Route path={'/404'} element={<h1>404: Page not found</h1>}/>
                <Route path="*" element={<Navigate to={'/404'}/>} />
            </Routes>
        </div>
    );
}


export default App;
