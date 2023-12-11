import React, { FC } from "react";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/router";
interface IFormInput {
  email: string;
  password: string;
}
const SignIn: FC = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  const handleError = (errors: any) => {};

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const registerOptions = {
    name: { required: "Name is required" },
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
          signIn();
        })}
        className="flex flex-col justify-center items-center gap-4 bg-white shadow-2xl p-8 md:h-3/5 md:w-1/3 rounded-md relative"
      >
        <Link href={"/"}>
          <CloseIcon className="absolute left-4 top-4 hover:scale-125 hover:text-black text-opal" />
        </Link>
        <label className="text-xl text-opal">Email</label>
        <input
          type="email"
          {...register("email", registerOptions.email)}
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-2 rounded-lg md:w-1/2 h-10 p-4 border-opal "
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
          className="rounded-lg md:w-1/2 h-10 border-2 p-4 border-opal "
        />
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
        <div className="flex gap-4 w-full justify-center mt-4">
          <button
            onClick={signIn}
            type="submit"
            className=" bg-opal text-white w-32 rounded-lg mt-4 cursor-pointer hover:bg-black hover:text-white capitalize p-2"
          >
            Sign In
          </button>

          <Link href={"/signUpPage"}>
            <button className="bg-opal text-white w-24 rounded-lg mt-4 hover:bg-black hover:text-white lowercase p-2">
              Sign up
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
