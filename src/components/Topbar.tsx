function TopBar(){
    return(
        <>
        <div className="flex flex-row justify-between items-center m-2">
        <div className="text-1xl"><strong>Chatgpt</strong></div>
        <div className="flex flex-row gap-4 items-center">
            <button className="border-black border-2 bg-black text-white rounded-3xl p-2">Log in</button>
            <button className="border-gray-200 border-2 rounded-3xl p-2">Sign up for free</button>
        </div>
        </div>
        </>
    )
}
export default TopBar