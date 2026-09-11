function SearchBox(){
    return(
        <>
        <div className="flex flex-row space-between border-2 m-6 p-1 items-center rounded-4xl w-200 border-gray-300">
        <img src="./plus.png"/>
        <div className=" w-170"><input type="text" placeholder="Ask ChatGpt" /></div>
        <div className="flex flex-row gap-3 m-1 items-center">
        <img src="./mic.png" alt="" style={{height:"20px"}} />
        <img src="./voice.png" alt="" style={{height:"30px", width:"30px"}} />
        </div>
        </div>
        </>
    )
}
export default SearchBox