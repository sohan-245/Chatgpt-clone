import ClosedSideBarItems from './ClosedSideBarItems'
function ClosedSideBar(){
    return(
        <>
              <div className="flex flex-col gap-3 m-4">
           <ClosedSideBarItems img ="/chat.png"/> 
            <ClosedSideBarItems  img ="/search.png"/> 
            <ClosedSideBarItems  img ="/image.png" /> 
            <ClosedSideBarItems  img ="/plug.png" />  
            <ClosedSideBarItems img ="/research.png"/> 
            <ClosedSideBarItems  img ="/price.png"/> 
            <ClosedSideBarItems  img ="/setting.png"/> 
        </div>
        </>
    )
}
export default ClosedSideBar