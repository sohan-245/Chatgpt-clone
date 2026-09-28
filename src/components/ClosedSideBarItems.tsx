type ImageProps={
    img:string;
    w:string;
    h:string;
}
function Closed({img,w,h}:ImageProps){
    return(
        <>
        <img src={img} style={{width:w, height:h}}/>
        </>
    )
}
export default Closed