import BottonNavbar from "./components/bottonNavbar";
import ErrorWindow from "./components/ErrorWindow";
import Footer from "./components/footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";




function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    <Footer/>
    <BottonNavbar/>
    </>
  )
}

export default App