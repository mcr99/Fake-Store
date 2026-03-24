import { Link } from "react-router-dom"

function Footer (){
    return(
        <footer className="p-5 bg-white ">
            <section className="gap-5 my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:mx-[5%] 2xl:mx-[10%]">
                <article>
                    <Link to="/" className="flex items-center">
                        <img src="./icons/shopping.png" alt="shopping bag icon" loading="lazy" className="w-11 p-3"/>
                        <p className="text-lightblue font-bold text-xl flex sm:text-dark mr-5">LUXE <span className=" text-lightblue">.</span> </p>
                    </Link>
                    <p className="text-dark/70">Your one-stop destination for premium lifestule products, from jewelry to electronics. Quality guaranteed</p>
                    <div className="flex gap-5 my-5">
                        <div className="p-2 bg-background shadow-xl rounded-full hover:ring-1">
                            <img src="./icons/share.png" alt="share icon" className="w-4 h-4"/>
                        </div>
                        <div className="p-2 bg-background shadow-xl rounded-full hover:ring-1">
                            <img src="./icons/at.png" alt="at icon" className="w-4 h-4"/>
                        </div>
                    </div>
                </article>
                <article>
                    <p className="font-bold px-2 my-3">CATEGORIES</p>
                    <ul className="flex flex-col gap-1">
                        <li> 
                            <Link to="/electronics" className="hover:bg-dark hover:text-background py-1 px-2 rounded-2xl text-dark/70">Electronics</Link>
                        </li>
                        <li> 
                            <Link to="/jewelry" className="hover:bg-dark hover:text-background py-1 px-2 rounded-2xl text-dark/70">Jewelry</Link>
                        </li>
                        <li> 
                            <Link to="/men" className="hover:bg-dark hover:text-background py-1 px-2 rounded-2xl text-dark/70">Men's Fashion</Link>
                        </li>
                        <li> 
                            <Link to="/women" className="hover:bg-dark hover:text-background py-1 px-2 rounded-2xl text-dark/70">Women's Fashion</Link>
                        </li>
                    </ul>
                </article>
                <article>
                    <p className="font-bold px-2 my-3">SUPPORT</p>
                    <ul className="flex flex-col gap-1">
                        <li>
                            <Link to="" className="hover:bg-dark hover:text-background py-1 px-2 rounded-2xl text-dark/70">Help Center</Link>
                        </li>
                        <li>
                            <Link to="" className="hover:bg-dark hover:text-background py-1 px-2 rounded-2xl text-dark/70">Shipping Policy</Link>
                        </li>
                        <li>
                            <Link to="" className="hover:bg-dark hover:text-background py-1 px-2 rounded-2xl text-dark/70">Returns & Refunds</Link>
                        </li>
                        <li>
                            <Link to="" className="hover:bg-dark hover:text-background py-1 px-2 rounded-2xl text-dark/70">Order Tracking</Link>
                        </li>
                    </ul>
                </article>
                <form className="p-2">
                    <p className="font-bold my-3">NEWSLETTER</p>
                    <p className="text-dark/70 my-3">Get the latest updates on new arrivals and sales.</p>
                    <div className="flex flex-col w-full gap-2">
                        <input type="email" placeholder="Your email address" className="bg-background p-2 rounded-lg"/>
                        <button className="bg-lightblue p-2 text-background font-bold hover:bg-lightblue/80 rounded-lg">Subscribe</button>
                    </div>
                </form>
            </section>
            <section className="flex flex-col sm:flex-row justify-between border-t border-grey p-5 gap-5 xl:mx-[5%] 2xl:mx-[10%]">
                    <p className="text-center text-dark/70">© 2024 Luxe Store. Powered by <a href="https://fakestoreapi.com/" target="_blank">FakeStore API.</a></p>
                    <div className="flex gap-5 text-dark/70">
                        <Link>Terms of Service</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Cookies</Link>
                    </div>
            </section>
        </footer>
    )
}

export default Footer