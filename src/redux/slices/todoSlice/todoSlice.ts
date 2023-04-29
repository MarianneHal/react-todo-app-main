import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Todo } from '@/components/todo/interface/todo.interface'
import axios from 'axios'

type TodosState = {
    todos: Todo[]
}

const initialState: TodosState = {
    todos: [],
}

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodo: (state: TodosState, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload)
        },
        removeTodo(state: TodosState, action: PayloadAction<Todo>) {
            state.todos = state.todos.filter((todo) => todo.time !== action.payload.time)
        },
    },
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
