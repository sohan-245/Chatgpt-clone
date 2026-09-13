import SideBarItem from "./SideBarItem"

function SideBar(){
    return(
        <>
        <div className="flex flex-col gap-1">
           <SideBarItem  img ="/chat.png" title="New Chat"/> 
            <SideBarItem  img ="/search.png" title="Search chats"/> 
            <SideBarItem  img ="/image.png" title="Images"/> 
            <SideBarItem  img ="/plug.png" title="Plugins"/>  
            <SideBarItem  img ="/research.png" title="Deep reasearch"/> 
            <SideBarItem  img ="/price.png" title="See plans and pricing"/> 
            <SideBarItem  img ="/setting.png" title="Setting"/> 
        </div>
        </>
    )
}
export default SideBar