function SearchBox(){
    return(
        <>
        <div className="flex flex-row space-between border-2 m-6 p-2 items-center rounded-4xl w-205 border-gray-300 gap-3">
                <img src="./plus.png" style={{height:"17px",width:"20px"}}/>
        <div><input type="text" placeholder="Ask ChatGpt" className="w-173 outline-none"  /></div>
        <div className="flex flex-row gap-3 m-1 items-center">
        <img src="./mic.png" alt="" style={{height:"20px"}} />
        <img src="./voice.png" alt="" style={{height:"30px", width:"30px"}} />
        </div>
        </div>
        </>
    )
}
export default SearchBox