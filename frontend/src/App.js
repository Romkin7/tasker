import './sass/main.scss';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <main>
                    <Routes>
                        <Route
                            exact
                            path="/profile"
                            element={<ProfilePage />}
                        />
                        <Route exact path="/" element={<LoginPage />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
