import SideBarItem from "./SideBarItem"

function SideBar(){
    return(
        <>
        <div className="flex flex-col gap-1">
           <SideBarItem  img ="/chat.png" title="New Chat" w="15px" h="15px"/> 
            <SideBarItem  img ="/search.png" title="Search chats" w="15px" h="15px"/> 
            <SideBarItem  img ="/image.png" title="Images" w="15px" h="15px"/> 
            <SideBarItem  img ="/plug.png" title="Plugins" w="15px" h="15px"/>  
            <SideBarItem  img ="/research.png" title="Deep reasearch" w="15px" h="15px"/> 
            <SideBarItem  img ="/price.png" title="See plans and pricing" w="15px" h="15px"/> 
            <SideBarItem  img ="/setting.png" title="Setting" w="15px" h="15px"/> 
        </div>
        </>
    )
}
export default SideBar