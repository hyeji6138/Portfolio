import { configureStore, createSlice } from '@reduxjs/toolkit';
import { projects } from './Data.js';

let showModal = createSlice({
    name: 'showModal',
    initialState: false,
    reducers: {
        setModal(state, value) {
            return value.payload;
        }
    }
})

let project = createSlice({
    name: 'project',
    initialState: {},
    reducers: {
        setProject(state, value) {
            return projects[value.payload];
        }
    }
})

export let { setModal } = showModal.actions
export let {setProject} = project.actions
export default configureStore({
    reducer: {
        showModal: showModal.reducer,
        project: project.reducer,
    }
})