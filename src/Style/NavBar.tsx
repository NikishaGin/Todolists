import React from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import {Menu} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../Store";
import {RequestStatusType} from "../Store/app-reducers";

export const NavBar = () => {

    const status = useSelector<AppRootStateType, RequestStatusType>(state => state.app.status)

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>

                {status === 'loading' && <LinearProgress />}
            </AppBar>
        </>
    );
};

