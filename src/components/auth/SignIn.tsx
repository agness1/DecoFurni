import React, { FC } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useState, useEffect } from "react";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form"
import useSetLogin from "@/hooks/useSetLogin";

interface IFormInput {
  email: string
  password: string
}
const SignIn: FC = () => {
  

const {isLogin} = useSetLogin()

console.log(isLogin)

  //const[isLogin, setIsLogin] = useState(false)
  const { register, handleSubmit, formState: {errors} } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  const handleError = (errors: any) => {};


  const [email, setEmail]   = useState('');
  const [password, setPassword] = useState('');
  
  const signIn = () => {
   // e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((usercredential) => {
      console.log(usercredential)
    }).catch((error) => {
      console.log(error)
    })
   
  }

/*useEffect (() => {
  onAuthStateChanged(auth, (user) => {
  if (user) {
   console.log('zalogowany')
   setIsLogin(true)
  } else {
   console.log('wylogowany')
   setIsLogin(false)
  }
});
}, [])*/

const registerOptions = {
  name: { required: "Name is required" },
  email: { required: "Email is required" },
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must have at least 8 characters"
    }
  }
};



  return (
    <div className="flex items-center justify-center h-screen bg-slate-200">
     {isLogin ? <div className="bg-white shadow-2xl p-8 h-3/5 w-1/3 rounded-md flex flex-col justify-center items-center gap-4">
        <h1 className="text-2xl">You are logged in!</h1>
        <Link href={"/"}><Button className="bg-opal text-white  rounded-lg mt-4 hover:bg-black hover:text-white lowercase">Home page</Button></Link>
        
      </div> : <form onSubmit={handleSubmit((data) => {
  onSubmit(data);
  signIn(); 
})} className="flex flex-col justify-center items-center gap-4 bg-white shadow-2xl p-8 h-3/5 w-1/3 rounded-md relative">
        <Link href={"/"}>
          <CloseIcon className="absolute left-4 top-4 hover:scale-125 hover:text-black text-opal" />
        </Link>
        <label className="text-xl text-opal">Email</label>
        <input
          type="email"
          {...register('email', registerOptions.email)}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 rounded-lg w-1/2 h-10"
        />
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
        <label className="text-xl text-opal">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          {...register('password', registerOptions.password)}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg w-1/2 h-10 border-2"
        />
         <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
        <div className="flex gap-4 w-full justify-center mt-4">
         
          <button
          onClick={signIn}
            type="submit"
            
            className="p-2 bg-opal text-white w-1/3 rounded-lg mt-4 cursor-pointer hover:bg-black hover:text-white"
          >
            SignIn
            </button>
          
          <Link href={"/signUpPage"}><Button className="bg-opal text-white w-1/3 rounded-lg mt-4 hover:bg-black hover:text-white lowercase">
          Sign up
          </Button></Link>
        </div>
      </form> }
     
    </div>
  );
};

export default SignIn;

