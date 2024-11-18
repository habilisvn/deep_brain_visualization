import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login'; // Importing the login page

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} /> {/* Adjusting the login component */}
            </Routes>
        </Router>
    );
}

export default App
