function SearchBox(){
    return(
        <>
        <div className="flex flex-row space-between border-2 m-5 p-5">
        <div>icon 1</div>
        <div className="border-2 w-100"><input type="text" /></div>
        <div className="flex flex-row gap-3 m-1">
        <div>icon 2</div>
        <div>icon 3</div>
        </div>
        </div>
        </>
    )
}
export default SearchBox