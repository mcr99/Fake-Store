import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import ErrorWindow from "../components/ErrorWindow"
import LoadingSpinner from "../components/LoadingSpinner"


function Products () {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        async function getProduct(){
            try {
                setLoading(true)
                const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
                setProduct(data)
            }catch (error){
                console.log("Something went wrong: ", error)
                setErrorMessage(`${error}`)
            }finally{
                setLoading(false)
            }
        }
        getProduct()
    }, [id])

    if (errorMessage) {
        return <ErrorWindow
        errorM={errorMessage}/>
    }

    if (loading) {
        return(
            <LoadingSpinner/>
        )
    }

    return (
        <main className="mt-10 lg:mt-20 xl:mx-[5%] 2xl:mx-[10%] p-5">
            <div className="flex justify-between my-10">
                <Link to="/" className="bg-lightblue px-2 py-1 rounded-lg hover:bg-lightblue/80 text-lg text-background font-bold">Go back</Link>
                <button className="bg-lightblue px-2 py-1 rounded-lg hover:bg-lightblue/80 cursor-pointer">
                    <p className="text-lg text-background font-bold"> Add to Cart</p>
                </button>
            </div>
            <section className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-20">
                <div className="flex justify-center items-center">
                    <img src={product.image} alt="img" />
                </div>
                <article className="w-full flex flex-col gap-3">
                    <p className="text-lightblue uppercase text-xs font-bold">{product.category}</p>
                    <p className="text-dark font-bold text-lg">{product.title}</p>
                    <p className="text-dark/90"> <span className="text-dark font-bold">Description:</span>{product.description}</p>
                    <div className="flex justify-between items-center font-bold">
                        <p className="text-xl my-5">${product.price}</p>
                        <p>⭐{product.rating?.rate}</p>
                    </div>
                    <p></p>
                    <p></p>
                </article>
            </section>
        </main>
    )
}

export default Products