
function SearchNotFound({setSearch}){
    return(
        <main className="my-20 p-10 flex flex-col justify-center items-center">
            <p className="text-center font-bold text-2xl">Oops! We don't have that in stock yet</p>
            <img src="./icons/not-found.png" alt=" not found icon"/>
            <button className="bg-lightblue text-background px-3 py-2 rounded-2xl font-bold hover:bg-lightblue/80" onClick={()=>setSearch({})}>See All Products</button>
        </main>
    )
}

export default SearchNotFound