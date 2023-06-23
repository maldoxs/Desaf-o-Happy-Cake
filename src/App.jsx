import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contacto from "./views/Contacto";

import Naavbar from "./Components/Naavbar";
import NotFound from "./Components/NotFound";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Naavbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
