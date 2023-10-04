
import { Outlet } from 'react-router-dom';
import Header from './12Router/Header'

function App() {
    return (
        <>
            <Header />
            <Outlet />
            {/* <Router /> */}
        </>
    );
}

export default App;
