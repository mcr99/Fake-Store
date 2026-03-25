import { Link } from "react-router-dom"

function BottonNavbar () {
    return(
        <nav className="flex justify-evenly items-center bg-white border-t border-t-grey/50 py-3 sm:hidden sticky -bottom-1">
            <Link to="/" className="w-16 flex flex-col items-center justify-center py-2 px-5 gap-1 hover:bg-dark/20 hover:rounded-2xl">
            <img src="./icons/home.png" alt="Home icon" />
            <p className="text-xs text-center">HOME</p>
            </Link>
            <Link className="w-16 flex flex-col items-center justify-center py-2 px-5 gap-1 hover:bg-dark/20 hover:rounded-2xl">
            <img src="./icons/compass.png" alt="Compass icon" className="w-11"/>
            <p className="text-xs text-center">EXPLORE</p>
            </Link>
            <Link className="w-16 flex flex-col items-center justify-center py-2 px-5 gap-1 hover:bg-dark/20 hover:rounded-2xl ">
            <img src="./icons/heart.png" alt="Heart icon" className="w-11"/>
            <p className="text-xs text-center">WHISHLIST</p>
            </Link>
            <Link className="w-16 flex flex-col items-center justify-center py-2 px-5 gap-1 hover:bg-dark/20 hover:rounded-2xl">
            <img src="./icons/account.png" alt="Account icon" className="w-11"/>
            <p className="text-xs text-center">PROFILE</p>
            </Link>
        </nav>
    )
}

export default BottonNavbar