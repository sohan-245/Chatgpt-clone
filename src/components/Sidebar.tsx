function SideBar(){
    return(
        <>
        <div className="flex flex-col gap-1">
        <div className="bg-gray-100 rounded-sm p-2 flex flex-row items-center gap-3">
            <img src="./chat.png" style={{width:"15px",height:"15px"}}/>
            New chat
        </div>

        <div className="hover:bg-gray-100 rounded-sm p-2 flex flex-row items-center gap-2">
            <img src="./search.png" alt="" style={{width:"18px",height:"20px"}}/>
            Search chats
        </div>

        <div className="hover:bg-gray-100 rounded-sm p-2 flex flex-row items-center gap-3">
            <img src="./image.png" alt="" style={{width:"15px",height:"18px"}}/>
            Images
            </div>

        <div className="hover:bg-gray-100 rounded-sm p-2 flex flex-row items-center gap-3">
            <img src="./plug.png" alt="" style={{width:"15px",height:"18px"}}/>
            Plugins
        </div>
        <div className="hover:bg-gray-100 rounded-sm p-2 items-center gap-3 flex flex-row">
            <img src="./research.png" alt="" style={{width:"15px",height:"18px"}}/>
            Deep Research
        </div>
        <div className="hover:bg-gray-100 rounded-2xl p-2 items-center gap-3 flex flex-row">
            <img src="./price.png" alt="" style={{width:"15px",height:"18px"}}/>
            See Plans and pricing
        </div>
        <div className="hover:bg-gray-100 rounded-2xl p-2 items-center gap-3 flex flex-row">
            <img src="./setting.png" alt="" style={{width:"15px",height:"18px"}}/>
            Setting
        </div>
        </div>
        </>
    )
}
export default SideBar