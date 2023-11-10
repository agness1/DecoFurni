
import React, {FC} from "react"
import Button from "@mui/material/Button";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form"
import useSetLogin from "@/hooks/useSetLogin";
interface IFormInput {
  email: string
  password: string
  name: string
}
const SignUp: FC = () => {

useSetLogin()

  const[isLogin, setIsLogin] = useState(false)
 
    const [email, setEmail]   = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')
    
    const signUp = () => {
      createUserWithEmailAndPassword(auth, email, password)
      .then((usercredential) => {
          updateProfile(usercredential.user, {
        displayName: name, photoURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
      }).then(() => {
        console.log('zaktualizowano nazwe')
        // ...
      }).catch((error) => {
        console.log('nie udalo sie zaktualizowac nazwy')
        // ...
      });
      }).catch((error) => {
        console.log(error)
      })
    }

    useEffect (() => {
      onAuthStateChanged(auth, (user) => {
      if (user) {
       console.log('zalogowany')
       setIsLogin(true)
      } else {
       console.log('wylogowany')
       setIsLogin(false)
      }
    });
    }, [])

  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)


    return (
      <div className="flex items-center justify-center h-screen bg-slate-200">
       {isLogin ? <div className="bg-white shadow-2xl p-8 h-3/5 w-1/3 rounded-md flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl">You are logged in!</h1>
        <Link href={"/"}><Button className="bg-opal text-white  rounded-lg mt-4 hover:bg-black hover:text-white lowercase">Home page</Button></Link>
      </div> : <form onSubmit={handleSubmit((data) => {
  onSubmit(data);
  signUp(); 
})} className="flex flex-col justify-center items-center gap-4 bg-white shadow-2xl p-8 h-3/5 w-1/3 rounded-md relative">
          <Link href={"/"}>
            <CloseIcon className="absolute left-4 top-4 hover:scale-125 hover:text-black text-opal" />
          </Link>
          <h1>Create Account</h1>
          <label className="text-xl text-opal">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 rounded-lg w-1/2 h-10"
          />
          <label className="text-xl text-opal">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 rounded-lg w-1/2 h-10"
          />
          <label className="text-xl text-opal">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg w-1/2 h-10 border-2"
          />
          <div className="flex gap-4 w-full justify-center mt-4">
            <button
              type="submit"
              className="p-2 bg-opal text-white w-1/3 rounded-lg mt-4 cursor-pointer hover:bg-black hover:text-white"
            >
                Sign Up
                </button>
            
<Link href={"/signInPage"}><Button className="bg-opal text-white w-1/3 rounded-lg mt-4 hover:bg-black hover:text-white lowercase">
Sign In
            </Button></Link>


          </div>
        </form> }
      </div>
)
}
export default SignUp