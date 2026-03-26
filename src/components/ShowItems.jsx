import axios from "axios"
import { useEffect, useState } from "react"
import LoadingSpinner from "./LoadingSpinner"
import ErrorWindow from "./ErrorWindow"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import SearchNotFound from "./SearchNotFound"


function ShowItems (){

    // to get the api

    const [products, setProducts] = useState([])
    const [errorMessage, setErrorMessage] = useState(null) 
    const [limit, setLimit] = useState(20)
    const [changeFlex, setChangeFlex] = useState(true) 
    const [changeHidden, setChangeHidden] = useState(true) 
    const [loading, setLoading] = useState(true) 
    const [search, setSearch] = useSearchParams()
    const searchItem = search.get("search") || ""
    const categoryItems = search.get("category") || ""
    const navigate = useNavigate()

    const handledCategory = (category) => {
        navigate(`/?category=${category}`)
    }

    const filteredProducts = products.filter(p => {
        const matchesCategory = categoryItems ? p.category.toLowerCase() === categoryItems.toLowerCase() : true
        const matchesSearch = p.title.toLowerCase().includes(searchItem.toLowerCase())
        return matchesCategory && matchesSearch
    })

    useEffect(()=> {
        async function getProducts() {
            try {
                setLoading(true)
                const {data} = await axios.get("https://fakestoreapi.com/products")
                setProducts(data)
            } catch (error){
                console.error("Something went wrong: ", error)
                setErrorMessage(`${error}`)
            }
            finally {
                setLoading(false)
            }
        }
        getProducts()
    }, [])

    // show 4 items for mobile and 8 for higher screens and click the option to show all


    useEffect(() => {
        const mobile = window.innerWidth < 640;
        setLimit(mobile ? 4 : 8)
    }, [])

    const visibleProducts = searchItem ? filteredProducts : filteredProducts.slice(0, limit)

    const showAll = () => setLimit(products.length)

    //go back to the top when changing category
        useEffect(() => {
        window.scrollTo(0,0)
    }, [categoryItems, searchItem])

    // hide load more button

    function changeFlexToggle(){
        setChangeFlex(!changeFlex)
    }
    
    // hide see all

    function changeHiddenToggle(){
        setChangeHidden(!changeHidden)
    }

    // error message

    if (errorMessage) {
        return<ErrorWindow 
        errorM={errorMessage}
        />
    }

    //loading spinner

    if (loading) {
        return(
            <LoadingSpinner/>
        )
    }


    return(
        <section>
            <div className="flex justify-between items-center p-5">
                <div>
                    <h2 className="sm:hidden font-bold">New Arrivals</h2>
                    <h2 className="hidden sm:block font-bold text-xl">Trending Now</h2>
                    <p className="hidden sm:block text-sm text-dark/80">Our most popular items this week</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                    {!searchItem && !categoryItems && (
                        <button className={`${changeHidden ? `` : `hidden`} text-lightblue sm:hidden font-bold flex justify-center items-center cursor-pointer hover:text-lightblue/80`} onClick={() => {showAll(); changeHiddenToggle()}}>See All <span className="text-3xl relative -top-0.5">→</span></button>
                    )}
                    
                    <img src="./icons/sort.png" alt="sort icon"  loading="lazy" className="w-8.5 p-1 hidden sm:block border border-grey rounded-md"/>
                    <Link to="/coming-soon">
                    <label className="hidden sm:block p-1 border border-grey rounded-md text-dark/80">Sort by:
                        <select name="sort" className="outline-none">
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </label>
                    </Link>
                </div>
            </div>
            {visibleProducts.length === 0 && searchItem ? (
                    <SearchNotFound setSearch={setSearch}/>
                ) : (
            <div className="p-5 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
                {visibleProducts.map((product)=>(
                    <Link to={`/products/${product.id}`} className="bg-white p-5 rounded-lg flex flex-col shadow-md relative hover:ring-2 hover:ring-[#cccccc]" key={product.id}>
                    <div className="w-11 absolute bg-white p-2 rounded-full flex items-center justify-center right-5 hover:bg-black/10">
                        <img src="./icons/heart.png" alt="heart icon" loading="lazy"/>
                        <img src="./icons/redheart.png" alt="red heart icon" className="hidden" loading="lazy"/>
                    </div>
                    <div className="overflow-hidden mb-10">
                        <img src={product.image} alt={product.title} className="aspect-square" loading="lazy" />
                    </div>
                    <p className="text-dark/70 sm:text-lightblue text-xs font-bold uppercase">{product.category}</p>
                    <div className="grow">
                        <p className="font-bold text-sm">{product.title}</p>
                    </div>
                    <div className="flex justify-between my-5">
                        <p className="font-bold text-lg text-lightblue sm:text-dark">${product.price}</p>
                        <p>⭐<span className="text-dark/70 font-bold">{product.rating.rate}</span></p>
                    </div>
                    <button className="bg-dark p-1 rounded-lg w-full hover:bg-dark/90 cursor-pointer">
                        <p className="text-lg text-background">🛒 Add to Cart</p>
                    </button>
                </Link>
                ))}
            </div>
            )}
            {!searchItem && !categoryItems && (
                <div className={`${changeFlex ? `sm:flex`: ``} flex-col items-center justify-center mt-10 mb-20 hidden`}>
                <button className="border m-5 border-dark/50 p-2 font-bold rounded-lg bg-white hover:bg-dark hover:text-background" onClick={ ()=> {showAll(); changeFlexToggle()}}>Load More Products
                </button>
                <p className="text-dark/75">Showing <span>8</span> of 20 products</p>
            </div>
            )}
            
            <article className="px-5 pt-5 pb-10 bg-background2 sm:hidden my-10">
                <p className="font-bold text-xl my-5">Shop by Category</p>
                <div className="flex justify-between items-center relative text-sm">
                    <button className="flex justify-center" onClick={() => handledCategory("women's clothing")}>
                        <div className="rounded-full p-2 bg-white shadow-sm">
                            <img src="./icons/clothes-hanger.png" alt="Women" className="w-10 " loading="lazy"/>
                        </div>
                        <p className="font-bold absolute top-15">Women</p>
                    </button>
                    <button className="flex justify-center" onClick={() => handledCategory("men's clothing")}>
                        <div className="rounded-full p-2 bg-white shadow-sm">
                            <img src="./icons/man.png" alt="Men" className="w-10" loading="lazy"/>
                        </div>
                        <p className="font-bold absolute top-15">Men</p>
                    </button>
                    <button className="flex justify-center" onClick={() => handledCategory("electronics")}>
                        <div className="rounded-full p-3 bg-white shadow-sm ">
                            <img src="./icons/electronics.png" alt="Electronics" className="w-9" loading="lazy"/>
                        </div>
                        <p className="font-bold absolute top-15">Electronics</p>
                    </button>
                    <button className="flex justify-center" onClick={() => handledCategory("jewelery")}>
                        <div className="rounded-full p-2 bg-white shadow-sm">
                            <img src="./icons/jewelery.png" alt="Jewelery" className="w-10" loading="lazy"/>
                        </div>
                        <p className="font-bold absolute top-15">Jewelery</p>
                    </button>
                </div>
            </article>
        </section>
    )
}

export default ShowItems
