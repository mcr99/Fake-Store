import { Link } from "react-router-dom"
import { useState } from "react"

function Header(){
    const [changeHamburger, setChangeHamburger] = useState(true)

    function changeHamburgerToggle(){
        setChangeHamburger(!changeHamburger)
    }

    return(
    <header className="bg-white">
        <div className="flex justify-between xl:mx-[5%] 2xl:mx-[10%] shadow-xs">
            <div className="flex items-center justify-between w-[50%] sm:w-auto">
                <button className="w-11 h-11 sm:hidden">
                    <p className="font-bold text-2xl " onClick={changeHamburgerToggle}>☰</p>
                </button>
                <img src="./images/shopping.png" alt="shopping bag icon" loading="lazy" className="hidden sm:block w-11 p-3"/>
                <p className="text-lightblue font-bold text-xl flex sm:text-dark mr-5">LUXE <span className="hidden sm:block text-lightblue">.</span> </p>
                <nav className="hidden sm:flex  items-center gap-2 ">
                <Link to="/" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full p-2 rounded-lg">Electronics</Link>
                <Link to="/" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full p-2 rounded-lg">Jewelry</Link>
                <Link to="/" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full p-2 rounded-lg">Men's</Link>
                <Link to="/" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full p-2 rounded-lg">Women's</Link>
            </nav>
            </div>
            
            <div className="flex items-center gap-1 p-2">
                <label className="lg:bg-background flex rounded-2xl ">
                    <img src="./images/search.png" alt="search icon"  loading="lazy" className="w-11 h-11 p-3"/>
                    <input type="text" placeholder="Search products..." className="rounded-r-2xl focus:outline-none hidden lg:block lg:w-[60%]" />
                </label>
                <img src="./images/heart.png" alt="heart icon" loading="lazy" className="w-11 h-11 p-2.5 hidden md:block"/>
                <div className="relative">
                    <img src="./images/grocery-store.png" alt="shopping cart" loading="lazy" className="w-11 h-11 p-2 hidden md:block" />
                    <img src="./images/shopping-bag.png" alt="shopping bag icon"  loading="lazy" className="w-11 h-11 p-2 md:hidden"/>
                    <div className="absolute bg-lightblue p-1 rounded-full right-2 top-3 md:py-0 md:right-0 md:top-1 text-background">
                        <p className="hidden md:flex relative text-xs font-bold">3</p>
                        </div>
                </div>
                <img src="./images/user.png" alt="user logo" loading="lazy" className="w-11 h-11 p-2 hidden md:block" />
            </div>
            
            
        </div>
        <nav className={`${changeHamburger ? `hidden` : `block`} flex flex-col items-center  gap-2 sm:hidden`}>
            <Link to="/electronics" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full">Electronics</Link>
            <Link to="/jewelry" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full">Jewelry</Link>
            <Link to="/men" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full">Men's</Link>
            <Link to="/women" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full">Women's</Link>
        </nav>

    </header>
    )
    
}

export default Header