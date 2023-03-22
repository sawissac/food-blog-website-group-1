import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContextProvider from "./context/appContext";
import ProfilePage from "./pages/Profile";
import HomePage from "./pages/Home";
import UserPage from "./pages/Login";
import DetailPage from "./pages/Detail";
import AuthContextProvider from "./context/authContext";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <AppContextProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/user/:type" element={<UserPage />} />
              <Route path="/detail/:id" element={<DetailPage />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </div>
        </AppContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
