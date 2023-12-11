import React, { FC, useEffect, useState } from "react";
import HoverRating from "./rating";
import { db } from "@/firebase";
import { ref, push, set } from "firebase/database";
import { auth } from "@/firebase";
import useSetLogin from "@/hooks/useSetLogin";
import { useRouter } from "next/router";

interface Data {
  productId: number;
}

const AddComment: FC<Data> = (props) => {
  const { isLogin } = useSetLogin();
  const router = useRouter();
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const user = auth.currentUser;
  const commentData = {
    comment: comment,
    userName: user?.displayName,
    productId: props.productId,
    rating: rating,
  };
  const commentListRef = ref(db, "comments");
  const newcommentRef = push(commentListRef);

  const handleComments = (data: {}) => {
    if (isLogin) {
      set(newcommentRef, data)
        .then(() => {
          console.log("post został dodany do bazy danych.");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      router.push("/signInPage");
    }
  };

  const ratingValue = (data: number) => {
    setRating(data);
  };

  return (
    <div className=" bg-opal rounded-md flex flex-col items-center  w-full md:h-96 gap-8 pt-8 pb-10 md:mt-20 md:mb-0 mb-10 ">
      <h2 className="text-2xl font-bold text-white">Add comment</h2>
      <HoverRating onValueRating={ratingValue} />
      <form className="flex flex-col items-center gap-4 ">
        <textarea
          placeholder="max 100 characters"
          maxLength={100}
          onChange={(e) => setComment(e.target.value)}
          className=" md:p-2 text-center rounded-md md:mb-4 md:w-96 h-32"
        ></textarea>
        <button
          onClick={() => handleComments(commentData)}
          className="transition ease-in-out delay-150 bg-black hover:-translate-y-1 hover:scale-110 hover:bg-green duration-300  text-white p-2 px-8 capitalize w-1/2 m-auto rounded-md"
        >
          add
        </button>
      </form>
    </div>
  );
};
export default AddComment;
