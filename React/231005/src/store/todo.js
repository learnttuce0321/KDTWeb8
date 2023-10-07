import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action) {
            const { todoTitle } = action.payload
            state.push({id: Date.now(), todoTitle})
        },
        deleteTodo(state, action) {
            const { todoId } = action.payload
            return state.filter(todo => todo.id !== Number(todoId))
        }
    }
})

export default todoSlice