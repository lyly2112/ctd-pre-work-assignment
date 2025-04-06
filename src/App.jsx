import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CharactersPage from "./pages/CharactersPage";
import ComicsPage from "./pages/ComicsPage";

function App() {
    return (
        <Router>
            <div>
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/characters"
                            element={<CharactersPage />}
                        />
                        <Route path="/comics" element={<ComicsPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
