import { useState } from "react"
import type { FormEvent } from "react"

function CreateUserPage(){
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [error,setError]=useState('')
const [IsSubmitting,setIsSubmitting]=useState(false)

const handlesubmit = async (event : FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    setError('')
    setIsSubmitting(true)
    console.log(name)
    console.log(email)
    console.log(password)
}

    return(
        <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col border border-gray p-10 m-8 gap-5 rounded-2xl">
            <strong className="mx-auto">Enter your details</strong>
        <form className="flex flex-col gap-5" onSubmit={handlesubmit}>   
        <div>
            <strong>Name:</strong><br/>
            <input type="text" placeholder="Enter name" className="border border-gray rounded-sm w-full p-1" value={name} onChange={(event) => setName(event.target.value)}/>
        </div>
        <div>
            <strong>Email:</strong><br/> 
            <input type="email" placeholder="Enter email" className="border border-gray rounded-sm w-full p-1" value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div>
            <strong>Password:</strong><br/>
            <input type="password" placeholder="Enter passsword" className="border border-gray rounded-sm w-full p-1" value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        <div>
            <button className="border border-blue-500 rounded-2xl p-1 w-full bg-blue-500 text-white" type="submit">Create account</button>
        </div>
        </form>
        </div>
       </div>
    )
}
export default CreateUserPage