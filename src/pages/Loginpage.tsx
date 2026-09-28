
function Loginpage(){
    return(
        <>
       <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col border border-gray p-8 m-5 gap-5 rounded-2xl">
            <strong className="mx-auto">Enter your details</strong>
        <div>
            <strong>Name:</strong><br/>
            <input type="text" placeholder="Enter name" className="border border-gray rounded-sm w-full p-1"/>
        </div>
        <div>
            <strong>Email:</strong><br/> 
            <input type="email" placeholder="Enter email" className="border border-gray rounded-sm w-full p-1"/>
        </div>
        <div>
            <strong>Password:</strong><br/>
            <input type="password" placeholder="Enter passsword" className="border border-gray rounded-sm w-full p-1"/>
        </div>
        <div>
            <button className="border border-blue-500 rounded-2xl p-1 w-full bg-blue-500 text-white">Sign in</button>
        </div>
        <p>Don't have an account? <a href=""  className="text-blue-500 hover:underline">Sign up</a></p>
        </div>
       </div>
        </>
    )
}
export default Loginpage