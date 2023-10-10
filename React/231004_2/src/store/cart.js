import { createSlice } from '@reduxjs/toolkit'

const initialState = []
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action) {
            const { product } = action.payload

            const matchedProductIndex = state.findIndex((item) => {
                return item.id === product.id
            })
            
            if(matchedProductIndex !== -1) {
                console.log(matchedProductIndex)
                state[matchedProductIndex].count += 1
                return
            }

            state.push({...product, count: 1})        
        }, 
        deleteCart(state, action) {
            const { product } = action.payload

            return state.filter((item) => item.id !== product.id)
        }
    }
})

export default cartSlice