import { combineReducers } from '@reduxjs/toolkit'
import todosReducer from '@/redux/slices/todoSlice/todoSlice'

export const rootReducer = combineReducers({
    todos: todosReducer,
})

export type RootState = ReturnType<typeof rootReducer>
