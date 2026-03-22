function NewCollection(){
    return(
        <section className="flex flex-col bg-[url('/images/model2.jpg')] sm:bg-[url('/images/room.jpg')] h-125 bg-center bg-cover bg-no-repeat p-10 text-white justify-center items-center  sm:items-start lg:m-5 lg:rounded-2xl relative overflow-hidden">
            <div className="w-full h-full bg-black/70 absolute -m-10"></div>
            <div className="w-full sm:w-[50%] flex flex-col gap-5 z-10">
                <p className="text-lightblue text-center sm:text-start font-bold text-lg p-1 rounded-2xl lg:text-xl">New Collection 2024</p>
                <h1 className="text-2xl text-center font-bold sm:text-start sm:flex sm:flex-col sm:text-4xl lg:text-6xl"><span> Redefine Your</span> <span className="sm:text-lightblue"> Everyday Style </span></h1>
                <p className="text-center sm:text-start lg:text-lg">Discover out curated collection of premium essentials designed for the modern lifestyle</p>
                <div className="flex flex-col gap-2 w-full sm:flex-row">
                    <button className="bg-lightblue p-2 rounded-lg cursor-pointer">Shop Collection</button>
                    <button className="bg-dark/80 p-2 rounded-lg cursor-pointer">View Lookbook</button>
                </div>
            </div>
        </section>
    )
}

export default NewCollection