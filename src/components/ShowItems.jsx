function ShowItems (){
    return(
        <section>
            <div className="flex justify-between items-center p-5">
                <div>
                    <h2 className="sm:hidden font-bold">New Arrivals</h2>
                    <h2 className="hidden sm:block font-bold text-xl">Trending Now</h2>
                    <p className="hidden sm:block text-sm text-dark/80">Our most popular items this week</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <button className="text-lightblue sm:hidden font-bold flex justify-center items-center">See All <span className="text-3xl relative -top-0.5">→</span></button>
                    <img src="./icons/sort.png" alt="sort icon"  loading="lazy" className="w-8.5 p-1 hidden sm:block border border-grey rounded-md"/>
                    <label className="hidden sm:block p-1 border border-grey rounded-md text-dark/80">Sort by:
                        <select name="sort" className="outline-none">
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </label>
                </div>
            </div>
            <div className="p-5 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                <article className="bg-white p-5 rounded-lg flex flex-col shadow-md relative">
                    <div className="w-11 absolute bg-white p-2 rounded-full flex items-center justify-center right-5 hover:bg-red-100">
                        <img src="./icons/heart.png" alt="heart icon" className=""/>
                        <img src="./icons/redheart.png" alt="red heart icon" className="hidden"/>
                    </div>
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="img" className="mb-10"/>
                    <p className="text-lightblue text-xs font-bold">MEN'S CLOTHING</p>
                    <p className="font-bold text-sm">Fjallraven-Foldsack No. 1 Backpack</p>
                    <div className="flex justify-between my-5">
                        <p className="font-bold text-lg">$109.95</p>
                        <p>⭐<span className="text-dark/70 font-bold">4.5</span></p>
                    </div>
                    <button className="bg-dark p-1 rounded-lg w-full hover:bg-dark/90">
                        <p className="text-lg text-background">🛒 Add to Cart</p>
                    </button>
                </article>
                {/*####################################################*/}
                <article className="bg-white p-5 rounded-lg flex flex-col shadow-md">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="img" className="mb-10"/>
                    <p className="text-lightblue text-xs font-bold">MEN'S CLOTHING</p>
                    <p className="font-bold text-sm">Fjallraven-Foldsack No. 1 Backpack</p>
                    <div className="flex justify-between my-5">
                        <p className="font-bold text-lg">$109.95</p>
                        <p>⭐<span className="text-dark/70 font-bold">4.5</span></p>
                    </div>
                    <button className="bg-dark p-1 rounded-lg w-full">
                        <p className="text-lg text-background">🛒 Add to Cart</p>
                    </button>
                </article>
                <article className="bg-white p-5 rounded-lg flex flex-col shadow-md">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="img" className="mb-10"/>
                    <p className="text-lightblue text-xs font-bold">MEN'S CLOTHING</p>
                    <p className="font-bold text-sm">Fjallraven-Foldsack No. 1 Backpack</p>
                    <div className="flex justify-between my-5">
                        <p className="font-bold text-lg">$109.95</p>
                        <p>⭐<span className="text-dark/70 font-bold">4.5</span></p>
                    </div>
                    <button className="bg-dark p-1 rounded-lg w-full">
                        <p className="text-lg text-background">🛒 Add to Cart</p>
                    </button>
                </article>
                <article className="bg-white p-5 rounded-lg flex flex-col shadow-md">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="img" className="mb-10"/>
                    <p className="text-lightblue text-xs font-bold">MEN'S CLOTHING</p>
                    <p className="font-bold text-sm">Fjallraven-Foldsack No. 1 Backpack</p>
                    <div className="flex justify-between my-5">
                        <p className="font-bold text-lg">$109.95</p>
                        <p>⭐<span className="text-dark/70 font-bold">4.5</span></p>
                    </div>
                    <button className="bg-dark p-1 rounded-lg w-full">
                        <p className="text-lg text-background">🛒 Add to Cart</p>
                    </button>
                </article>
                <article className="bg-white p-5 rounded-lg flex flex-col shadow-md">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="img" className="mb-10"/>
                    <p className="text-lightblue text-xs font-bold">MEN'S CLOTHING</p>
                    <p className="font-bold text-sm">Fjallraven-Foldsack No. 1 Backpack</p>
                    <div className="flex justify-between my-5">
                        <p className="font-bold text-lg">$109.95</p>
                        <p>⭐<span className="text-dark/70 font-bold">4.5</span></p>
                    </div>
                    <button className="bg-dark p-1 rounded-lg w-full">
                        <p className="text-lg text-background">🛒 Add to Cart</p>
                    </button>
                </article>
                <article className="bg-white p-5 rounded-lg flex flex-col shadow-md">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="img" className="mb-10"/>
                    <p className="text-lightblue text-xs font-bold">MEN'S CLOTHING</p>
                    <p className="font-bold text-sm">Fjallraven-Foldsack No. 1 Backpack</p>
                    <div className="flex justify-between my-5">
                        <p className="font-bold text-lg">$109.95</p>
                        <p>⭐<span className="text-dark/70 font-bold">4.5</span></p>
                    </div>
                    <button className="bg-dark p-1 rounded-lg w-full">
                        <p className="text-lg text-background">🛒 Add to Cart</p>
                    </button>
                </article>
                <article className="bg-white p-5 rounded-lg flex flex-col shadow-md">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="img" className="mb-10"/>
                    <p className="text-lightblue text-xs font-bold">MEN'S CLOTHING</p>
                    <p className="font-bold text-sm">Fjallraven-Foldsack No. 1 Backpack</p>
                    <div className="flex justify-between my-5">
                        <p className="font-bold text-lg">$109.95</p>
                        <p>⭐<span className="text-dark/70 font-bold">4.5</span></p>
                    </div>
                    <button className="bg-dark p-1 rounded-lg w-full">
                        <p className="text-lg text-background">🛒 Add to Cart</p>
                    </button>
                </article>
                <article className="bg-white p-5 rounded-lg flex flex-col shadow-md">
                    <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="img" className="mb-10"/>
                    <p className="text-lightblue text-xs font-bold">MEN'S CLOTHING</p>
                    <p className="font-bold text-sm">Fjallraven-Foldsack No. 1 Backpack</p>
                    <div className="flex justify-between my-5">
                        <p className="font-bold text-lg">$109.95</p>
                        <p>⭐<span className="text-dark/70 font-bold">4.5</span></p>
                    </div>
                    <button className="bg-dark p-1 rounded-lg w-full">
                        <p className="text-lg text-background">🛒 Add to Cart</p>
                    </button>
                </article>
                {/*##################*/}
            </div>
            <div className="sm:flex flex-col items-center justify-center mt-10 mb-20 hidden">
                <button className="border m-5 border-dark/50 p-2 font-bold rounded-lg bg-white hover:bg-dark hover:text-background">Load More Products
                </button>
                <p className="text-dark/75">Showing <span>8</span> of 20 products</p>
            </div>
            <article className="px-5 pt-5 pb-10 bg-background2 sm:hidden my-10">
                <p className="font-bold text-xl my-5">Shop by Category</p>
                <div className="flex justify-between items-center relative text-sm">
                    <div className="flex justify-center">
                        <div className="rounded-full p-2 bg-white shadow-sm">
                            <img src="./icons/clothes-hanger.png" alt="Women" className="w-10 "/>
                        </div>
                        <p className="font-bold absolute top-15">Women</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="rounded-full p-2 bg-white shadow-sm">
                            <img src="./icons/man.png" alt="Men" className="w-10"/>
                        </div>
                        <p className="font-bold absolute top-15">Men</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="rounded-full p-3 bg-white shadow-sm ">
                            <img src="./icons/electronics.png" alt="Electronics" className="w-9"/>
                        </div>
                        <p className="font-bold absolute top-15">Electronics</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="rounded-full p-2 bg-white shadow-sm">
                            <img src="./icons/jewelery.png" alt="Jewelery" className="w-10"/>
                        </div>
                        <p className="font-bold absolute top-15">Jewelery</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default ShowItems
