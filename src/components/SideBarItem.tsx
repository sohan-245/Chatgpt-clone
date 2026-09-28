type TitleProps ={
    title:string;
    img:string;
    w:string;
    h:string;
}

function SideBarItem({title,img,w,h}:TitleProps){
    return(
        <div className="hover:bg-gray-100 rounded-sm p-2 flex flex-row items-center gap-1">
            <img src={img} style={{width:w,height:h}}/>
            {title}
        </div>
    )
}
export default SideBarItem