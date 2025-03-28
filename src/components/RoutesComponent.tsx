import { Route, Routes } from "react-router-dom"
import About from "../pages/About"
import Hero from "../pages/Hero"

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
    )
}

export default RoutesComponent