import React, { FC, useEffect, useState } from "react";
import { Button } from "@mui/material";
import HoverRating from "./rating";
import { db } from "@/firebase";
import { ref, push, set } from "firebase/database";
import { auth } from "@/firebase";

interface Data {
  productId: number
}

const AddComment: FC<Data> = (props) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0)
  const user = auth.currentUser;
  const commentData = {
    comment: comment,
    userName: user?.displayName,
    productId: props.productId,
    rating: rating
  };
  const commentListRef = ref(db, "comments");
  const newcommentRef = push(commentListRef);

  const handleComments = (data: {}) => {
    set(newcommentRef, data)
      .then(() => {
        console.log("Nowy post został pomyślnie dodany do bazy danych.");
      })
      .catch((error) => {
        console.error("Wystąpił błąd podczas dodawania posta:", error);
      });
  };

const ratingValue = (data: number) => {
setRating(data)
}

  return (
    <div className=" flex flex-col items-center w-1/2 gap-4 pt-8 pb-10 ">
      <HoverRating onValueRating={ratingValue} />
      <h2 className=" text-xl">Add comment</h2>
      <form className="flex flex-col gap-4 ">
        <textarea
          placeholder="max 100 characters"
          maxLength={100}
          onChange={(e) => setComment(e.target.value)}
          className="bg-black text-white rounded-md"
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
