import BottonNavbar from "./components/bottonNavbar";
import Footer from "./components/footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import Products from "./pages/Products";
import { useEffect } from "react";
import ComingSoon from "./pages/ComingSoon";




function App() {
  const {pathname} = useLocation();

  useEffect(()=> {
    window.scroll(0,0)
  }, [pathname])

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products/:id" element={<Products/>}></Route>
      <Route path="/coming-soon" element={<ComingSoon/>}></Route>
    </Routes>
    <Footer/>
    <BottonNavbar/>
    </>
  )
}

export default App