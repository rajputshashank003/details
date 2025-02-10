import { Route, Routes } from "react-router-dom"
import About from "./About"
import Hero from "./Hero"

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Hero/>} />
            <Route path="/about" element={<About/>} />
        </Routes>
    )
}

export default RoutesComponent