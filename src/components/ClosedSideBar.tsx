import ClosedSideBarItems from './ClosedSideBarItems'
function ClosedSideBar(){
    return(
        <>
              <div className="flex flex-col gap-4 m-4">
           <ClosedSideBarItems img ="/chat.png" w="15px" h="15px"/> 
            <ClosedSideBarItems  img ="/search.png"  w="15px" h="15px"/> 
            <ClosedSideBarItems  img ="/image.png"  w="15px" h="15px"/> 
            <ClosedSideBarItems  img ="/plug.png"  w="15px" h="15px"/>  
            <ClosedSideBarItems img ="/research.png"  w="15px" h="15px"/> 
            <ClosedSideBarItems  img ="/price.png"  w="15px" h="15px"/> 
            <ClosedSideBarItems  img ="/setting.png"  w="15px" h="15px"/> 
        </div>
        </>
    )
}
export default ClosedSideBar