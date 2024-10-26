import { BrowserRouter, Route, Routes } from "react-router-dom"
import Contact from "./pages/contact"
import Home from "./pages/home"
import Service from "./pages/service"
import About from "./pages/about"
import NavbarMain from "./component/navbar"
import FooterMain from "./component/footer"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarMain></NavbarMain>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <FooterMain></FooterMain>
      </BrowserRouter>
    </>
  )
}
export default App