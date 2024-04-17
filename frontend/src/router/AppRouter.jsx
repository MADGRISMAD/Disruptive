import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { ContentLibrary} from "../pages/ContentLibrary";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/content-library" element={<ContentLibrary />} />
        </Routes>
    );
};
