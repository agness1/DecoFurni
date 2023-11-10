import React, { FC, useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "@/firebase";
import Rating from "@mui/material/Rating";

interface Data {
  path: any;
}

const AllComments: FC<Data> = (props) => {
  const [comments, setComments] = useState([]);
  const [isCommented, setIsCommented] = useState(true)
  const path = props.path;

  const usersCommentsRef = ref(db, `comments`);

  useEffect(() => {
    onValue(usersCommentsRef, (snapshot) => {
      const commentsDatas = snapshot.val();
      setComments(commentsDatas);
      console.log(commentsDatas);
    });
  }, []);

  const displayComments = () => {
    if (comments) {
      return Object.values(comments).map((item: any, index: any) => {
        if (item.productId == path) {
          return (
            <div key={index}>
              <Rating
                name="half-rating-read"
                defaultValue={item.rating}
                precision={0.5}
                readOnly
              />
              <p className="font-bold">{item.userName}</p>
              <p>{item.comment}</p>
            </div>
          );
        } /* else setIsCommented(false)*/
      });
    } 
  };

  return <div className="bg-slate-300 w-11/12 p-4 rounded-md ">  {isCommented ? displayComments() : <h1>No comments yet</h1>} </div>;
};
export default AllComments;
