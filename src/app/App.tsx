import { Routes, Route, Outlet } from 'react-router-dom';

import Home from '../pages/Home';

function App() {
    return (
        <div className='app-container'>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/login' element={<MDEditorPage />} />

                <Route path='*' element={<NotFound />} /> */}
            </Routes>
        </div>
    );
}

export default App;
