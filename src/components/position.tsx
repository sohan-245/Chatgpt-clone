function position(){
    return(
        <div className="w-full h-[120vh] bg-amber-400 flex justify-center"> 
            <div className="static">This is static</div>
            <div className="absolute top-4 right-4">this is absolute</div>
            <div className="fixed bottom-1">this is fixed</div>
            <div className="sticky top-4">this is sticky</div>
        </div>
    )
}
export default position