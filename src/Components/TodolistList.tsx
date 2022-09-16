import React, {useCallback, useEffect} from 'react';
import {AppRootStateType, useTypedDispatch} from "../Store";
import {useSelector} from "react-redux";
import {
    addTodolistThunk,
    changeTodolistFilterAC, changeTodolistTitleThunk,
    fetchTodolistsThunk,
    FilterValuesType, removeTodolistTC,
    TodolistDomainType
} from "../Store/todolists-reducer";
import {addTaskTC, changeTaskStatusThunk, changeTaskTitleThunk, removeTaskTC} from "../Store/tasks-reducer";
import {TaskStatuses, TaskType} from "../api/todolists-api";
import Grid from "@mui/material/Grid";
import {AddItemForm} from "./AddItemForm";
import Paper from "@mui/material/Paper";
import {Todolist} from "./Todolist";
import Container from "@mui/material/Container";

export type TasksStateType = {
    [key: string]: Array<TaskType>
}

export const TodolistList = () => {

    const dispatch = useTypedDispatch()

    const todolists = useSelector<AppRootStateType, Array<TodolistDomainType>>(state => state.todolists)
    const tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)


    useEffect(() => {
        dispatch(fetchTodolistsThunk())
    }, [])


    const removeTask = useCallback(function (id: string, todolistId: string) {
        dispatch(removeTaskTC(id, todolistId));
    }, []);

    const addTask = useCallback(function (title: string, todolistId: string) {
        dispatch(addTaskTC(title, todolistId));
    }, []);

    const changeStatus = useCallback(function (id: string, status: TaskStatuses, todolistId: string) {
        dispatch(changeTaskStatusThunk(id, status, todolistId));

    }, []);

    const changeTaskTitle = useCallback(function (id: string, newTitle: string, todolistId: string) {
        dispatch(changeTaskTitleThunk(id, newTitle, todolistId));
    }, []);

    const changeFilter = useCallback(function (value: FilterValuesType, todolistId: string) {
        const action = changeTodolistFilterAC(todolistId, value);
        dispatch(action);
    }, []);

    const removeTodolist = useCallback(function (todolistId: string) {
        dispatch(removeTodolistTC(todolistId));

    }, []);

    const changeTodolistTitle = useCallback(function (id: string, title: string) {
        dispatch(changeTodolistTitleThunk(id, title));

    }, []);

    const addTodolist = useCallback((title: string) => {
        dispatch(addTodolistThunk(title));
    }, [dispatch]);

    return (
        <>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <AddItemForm addItem={addTodolist}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = tasks[tl.id];

                            return <Grid item key={tl.id}>
                                <Paper style={{padding: '10px'}}>
                                    <Todolist
                                        todolist={tl}
                                        tasks={allTodolistTasks}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeStatus}
                                        removeTodolist={removeTodolist}
                                        changeTaskTitle={changeTaskTitle}
                                        changeTodolistTitle={changeTodolistTitle}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>

        </>
    );
};

