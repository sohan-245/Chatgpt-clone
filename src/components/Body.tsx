import SearchBox from "./Searchbox"

function Hero(){
    return(
        <>
       <div className="flex-1 flex flex-col justify-center items-center border-2 border-amber-300">
        <div>What are you doing today??</div>
        <SearchBox/>
        <div>Recommendations</div>
       </div>
        </>
    )
}
export default Hero