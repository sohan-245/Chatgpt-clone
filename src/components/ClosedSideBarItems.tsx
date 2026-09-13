type ImageProps={
    img:string;
}
function Closed({img}:ImageProps){
    return(
        <>
        <img src={img} style={{width:"25px",height:"25px"}}/>
        </>
    )
}
export default Closed