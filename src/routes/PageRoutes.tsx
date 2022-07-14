import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import Characters from '../pages/Characters';
import Locations from "../pages/Locations";
import Episodes from '../pages/Episodes';
import PageNotFound from '../pages/PageNotFound';

const PageRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/characters" element={<Characters/>} />
        <Route path="/locations" element={<Locations/>} />
        <Route path="/episodes" element={<Episodes/>} />
        <Route path="/page-not-found" element={<PageNotFound/>} />
        <Route path="*" element={<Navigate to="/page-not-found" replace  />} />
      </Routes>
    </BrowserRouter>

  )
}

export default PageRoutes