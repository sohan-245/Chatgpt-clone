import SearchBox from "./Searchbox"

function Hero(){
    return(
        <>
       <div className="flex-1 flex flex-col justify-center items-center">
        <div className="text-2xl">Where should we begin??</div>
        <SearchBox/>
        <button className="rounded-3xl border-gray-300 border-2 p-2">What can you do?</button>
       </div>
        </>
    )
}
export default Hero