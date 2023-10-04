import {createBrowserRouter} from 'react-router-dom'
import Product from './Product'
import App from './App'
import Cart from './Cart'

const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: '',
                element: <Product />
            },
            {
                path: 'cart',
                element: <Cart />
            }
        ]
    },
])

export default router