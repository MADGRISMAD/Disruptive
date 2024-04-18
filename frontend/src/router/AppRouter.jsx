import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { ContentLibrary} from "../pages/ContentLibrary";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import {AdminPage} from "../pages/AdminPage";
export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/content-library" element={<ContentLibrary />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminPage />} />
        </Routes>
    );
};
