import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import './App.css';
import AboutPage from './pages/AboutPage';
import { Header, Footer } from './components';

function App() {
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
                <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage />} 
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
