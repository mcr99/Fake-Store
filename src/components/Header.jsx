import { Link } from "react-router-dom"
import { useState } from "react"

function Header(){
    const [changeHamburger, setChangeHamburger] = useState(true)

    function changeHamburgerToggle(){
        setChangeHamburger(!changeHamburger)
    }

    return(
    <header>
        <div className="flex justify-between bg-background">
            <div className="flex items-center justify-between w-[50%] sm:w-auto">
                <button className="w-11 h-11 sm:hidden">
                    <p className="font-bold text-2xl " onClick={changeHamburgerToggle}>☰</p>
                </button>
                <img src="./images/shopping.png" alt="shopping bag icon" loading="lazy" className="hidden sm:block w-11 p-3"/>
                <p className="text-lightblue font-bold text-xl flex sm:text-dark mr-5">LUXE <span className="hidden sm:block text-lightblue">.</span> </p>
                <nav className="hidden sm:flex  items-center bg-background gap-2 ">
                <Link to="/" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full p-2">Electronics</Link>
                <Link to="/" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full p-2">Jewelry</Link>
                <Link to="/" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full p-2">Men's</Link>
                <Link to="/" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full p-2">Women's</Link>
            </nav>
            </div>
            
            <div className="flex items-center">
                <img src="./images/search.png" alt="search icon"  loading="lazy" className="w-11 h-11 p-3"/>
                <img src="./images/shopping-bag.png" alt="shopping bag icon"  loading="lazy" className="w-11 h-11 p-2"/>
                <div className="absolute bg-lightblue p-1 rounded-full right-2 top-2"></div>
            </div>
            
            
        </div>
        <nav className={`${changeHamburger ? `hidden` : `block`} flex flex-col items-center bg-background gap-2 sm:hidden`}>
            <Link to="/electronics" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full">Electronics</Link>
            <Link to="/jewelry" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full">Jewelry</Link>
            <Link to="/men" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full">Men's</Link>
            <Link to="/women" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full">Women's</Link>
        </nav>

    </header>
    )
    
}

export default Header