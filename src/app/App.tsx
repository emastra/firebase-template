import { Routes, Route, Outlet } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

function App() {
    return (
        <div className='app-container'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />

                {/* <Route path='*' element={<NotFound />} /> */}
            </Routes>
        </div>
    );
}

export default App;
