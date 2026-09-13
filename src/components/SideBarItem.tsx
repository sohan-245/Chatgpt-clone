type TitleProps ={
    title:string;
    img:string;
}

function SideBarItem({title,img}:TitleProps){
    return(
        <div className="hover:bg-gray-100 rounded-sm p-2 flex flex-row items-center gap-2">
            <img src={img} style={{width:"15px",height:"15px"}}/>
            {title}
        </div>
    )
}
export default SideBarItem