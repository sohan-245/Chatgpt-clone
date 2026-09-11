import SearchBox from "./Searchbox"

function Hero(){
    return(
        <>
       <div className="flex-1 flex flex-col justify-center items-center border-2 border-amber-300">
        <div>Where should we begin??</div>
        <SearchBox/>
        <div>What can you do?</div>
       </div>
        </>
    )
}
export default Hero