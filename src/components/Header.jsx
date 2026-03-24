import { Link } from "react-router-dom"
import { useState } from "react"

function Header(){
    const [changeHamburger, setChangeHamburger] = useState(true)
    const [changeSearch, setChangeSearch] = useState(true)

    function changeHamburgerToggle(){
        setChangeHamburger(!changeHamburger)
    }

    function changeSearchToggle(){
        setChangeSearch(!changeSearch)
    }

    return(
    <header className="bg-white absolute top-0">
        <div className={`${changeHamburger ? `hidden` : `block`} fixed bg-black/30 w-screen h-screen z-20 sm:hidden`} onClick={changeHamburgerToggle}></div>
        <div className={`${changeSearch ? `hidden` : `block`} fixed bg-black/30 w-screen h-screen z-20 `} onClick={changeSearchToggle}></div>
        <div className="fixed z-30 w-full bg-white">
        <div className="flex justify-between xl:mx-[5%] 2xl:mx-[10%] shadow-xs">
            <div className="flex items-center justify-between w-[50%] sm:w-auto">
                <button className="w-11 h-11 sm:hidden">
                    <p className="font-bold text-2xl cursor-pointer" onClick={changeHamburgerToggle}>☰</p>
                </button>
                <Link to="/" className="flex items-center justify-center">
                    <img src="./icons/shopping.png" alt="shopping bag icon" loading="lazy" className="hidden sm:block w-11 p-3"/>
                    <p className="text-lightblue font-bold text-xl flex sm:text-dark mr-5">LUXE <span className="hidden sm:block text-lightblue">.</span> </p>
                </Link>
                
                <nav className="hidden sm:flex  items-center gap-2 ">
                <Link to="/electronics" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full p-2 rounded-lg">Electronics</Link>
                <Link to="/jewelry" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full p-2 rounded-lg">Jewelry</Link>
                <Link to="/men" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full p-2 rounded-lg">Men's</Link>
                <Link to="/women" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full p-2 rounded-lg">Women's</Link>
            </nav>
            </div>
            
            <div className="flex justify-center items-center gap-1 p-2 ">
                <button className="lg:bg-background flex rounded-2xl lg:w-60 items-center text-grey" onClick={changeSearchToggle}>
                    <img src="./icons/search.png" alt="search icon"  loading="lazy" className="w-11 h-11 p-3 cursor-pointer" />
                    <p className="rounded-r-2xl focus:outline-none hidden lg:block lg:w-[60%]">Search products...</p>
                </button>
                <img src="./icons/heart.png" alt="heart icon" loading="lazy" className="w-11 h-11 p-2.5 hidden md:block cursor-pointer"/>
                <div className="relative cursor-pointer">
                    <img src="./icons/grocery-store.png" alt="shopping cart" loading="lazy" className="w-11 h-11 p-2 hidden md:block" />
                    <img src="./icons/shopping-bag.png" alt="shopping bag icon"  loading="lazy" className="w-11 h-11 p-2 md:hidden cursor-pointer"/>
                    <div className="absolute bg-lightblue p-1 rounded-full right-2 top-3 md:py-0 md:right-0 md:top-1 text-background">
                        <p className="hidden md:flex relative text-xs font-bold">3</p>
                        </div>
                </div>
                <img src="./icons/user.png" alt="user logo" loading="lazy" className="w-11 h-11 p-2 hidden md:block cursor-pointer" />
            </div>
            
            
        </div>
        <nav className={`${changeHamburger ? `hidden` : `block`} flex flex-col items-center  gap-2 sm:hidden`}>
            <Link to="/electronics" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full" onClick={changeHamburgerToggle}>Electronics</Link>
            <Link to="/jewelry" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full" onClick={changeHamburgerToggle}>Jewelry</Link>
            <Link to="/men" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full" onClick={changeHamburgerToggle}>Men's</Link>
            <Link to="/women" className="h-11 flex items-center justify-center font-bold text-dark hover:bg-dark hover:text-background w-full" onClick={changeHamburgerToggle}>Women's</Link>
        </nav>
        <div className={`${changeSearch ? `hidden` : `block`} absolute w-full h-15 bg-white top-0 flex  justify-center items-center`}>
            <label className="lg:bg-background flex rounded-2xl border z-10 bg-background md:w-[50%]">
                <img src="./icons/search.png" alt="search icon"  loading="lazy" className="w-11 h-11 p-3 cursor-pointer"/>
                <input type="text" placeholder="Search products..." className="rounded-r-2xl focus:outline-none" />
            </label>
        </div>
        
        </div>
    </header>
    )
    
}

export default Header