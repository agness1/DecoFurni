import React, { FC, useEffect, useState } from "react";
import { Button } from "@mui/material";
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
    <div className=" flex flex-col items-center w-1/2 gap-8 pt-8 pb-10 mt-20 ">
      <h2 className=" text-xl text-white">Add comment</h2>
      <HoverRating onValueRating={ratingValue} />
      <form className="flex flex-col gap-4 ">
        <textarea
          placeholder="max 100 characters"
          maxLength={100}
          onChange={(e) => setComment(e.target.value)}
          className="bg-black text-white rounded-md w-72 h-20"
        ></textarea>
        <Button
          onClick={() => handleComments(commentData)}
          className="bg-black text-white hover:bg-green p-2 px-8 capitalize w-1/2 m-auto"
        >
          add
        </Button>
      </form>
    </div>
  );
};
export default AddComment;
