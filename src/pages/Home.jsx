import NewCollection from "../components/NewCollection"
import ShowItems from "../components/ShowItems"


function Home(){
    return(
        <main className="mt-15 lg:mt-20 xl:mx-[5%] 2xl:mx-[10%]">
            <NewCollection/>
            <ShowItems/>
        </main>
    )
}

export default Home