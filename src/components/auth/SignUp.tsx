import React, { FC } from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/router';
interface IFormInput {
  email: string;
  password: string;
  name: string;
}
const SignUp: FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((usercredential) => {
        updateProfile(usercredential.user, {
          displayName: name,
          photoURL:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
        })
          .then(() => {
            router.push('/')
          })
          .catch((error) => {
            console.log("nie udalo sie zaktualizowac nazwy");
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const handleError = (errors: any) => {};

  const registerOptions = {
    name: { required: "Nick is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters",
      },
    },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-200">
      
        <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
            signUp();
          })}
          className="flex flex-col justify-center items-center gap-4 bg-white shadow-2xl p-8 md:h-3/5 md:w-1/3 rounded-md relative"
        >
          <Link href={"/"}>
            <CloseIcon className="absolute left-4 top-4 hover:scale-125 hover:text-black text-opal" />
          </Link>
          <h1 className="font-bold text-opal">Create Account</h1>
          <label className="text-xl text-opal">Name</label>
          <input
            type="text"
            {...register("name", registerOptions.name)}
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-2 rounded-lg md:w-1/2 h-10"
          />
          <small className="text-danger">
            {errors?.name && errors.name.message}
          </small>
          <label className="text-xl text-opal">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", registerOptions.email)}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 rounded-lg md:w-1/2 h-10"
          />
          <small className="text-danger">
            {errors?.email && errors.email.message}
          </small>
          <label className="text-xl text-opal">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", registerOptions.password)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-lg md:w-1/2 h-10 border-2"
          />
          <small className="text-danger">
            {errors?.password && errors.password.message}
          </small>
          <div className="flex gap-4 w-full justify-center mt-4">
            <Button
              type="submit"
              className=" bg-opal text-white w-1/3 rounded-lg mt-4 cursor-pointer hover:bg-black hover:text-white capitalize"
            >
              Sign Up
            </Button>

            <Link href={"/signInPage"}>
              <Button className="bg-opal text-white w-1/3 rounded-lg mt-4 hover:bg-black hover:text-white capitalize">
                Sign In
              </Button>
            </Link>
          </div>
        </form>
      
    </div>
  );
};
export default SignUp;
