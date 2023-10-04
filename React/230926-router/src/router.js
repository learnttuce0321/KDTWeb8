import {createBrowserRouter} from 'react-router-dom'
import Header from './Header'
import App from './App'
import KDT from './KDT'
import CodingOn from './Codingon'
import New from './New'

const router = createBrowserRouter([
    {
        path: '',
        element: <App />
    },
    {
        path: 'student/kdt',
        element: <KDT />,
    },
    {
        path: 'student/codingon',
        element: <CodingOn />,
    },
    {
        path: 'student/new',
        element: <New />
    }
])

export default router