import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage'; // Importing the login page
import HomePage from './pages/HomePage'; // Importing the home page

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} /> {/* Adjusting the login component */}
                <Route path="/" element={<HomePage />} /> {/* Adjusting the home component */}
            </Routes>
        </Router>
    );
}

export default App
