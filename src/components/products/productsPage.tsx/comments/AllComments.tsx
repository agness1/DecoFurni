import React, { FC, useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "@/firebase";
import Rating from "@mui/material/Rating";

interface Data {
  path: any;
}

const AllComments: FC<Data> = (props) => {
  const [comments, setComments] = useState([]);
  const path = props.path;

  const usersCommentsRef = ref(db, `comments`);

  useEffect(() => {
    onValue(usersCommentsRef, (snapshot) => {
      const commentsDatas = snapshot.val();
      setComments(commentsDatas);
    });
  }, []);

  const displayComments = () => {
    if (comments) {
      return Object.values(comments).map((item: any, index: any) => {
        if (item.productId == path) {
          return (
            <div key={index} className="p-4 ">
              <Rating
                name="half-rating-read"
                defaultValue={item.rating}
                precision={0.5}
                readOnly
              />
              <p className="font-bold text-white">{item.userName}</p>
              <p className="text-white p-2 overflow-scroll md:overflow-auto">
                {item.comment}
              </p>
              <hr></hr>
            </div>
          );
        }
      });
    }
  };

  return (
    <div className="bg-opal w-full  md:p-4  p-2 rounded-md md:mt-20 md:mb-0 mb-10">
      {" "}
      <h1 className="text-center font-bold p-2 text-white text-2xl">All Comments</h1>
      {displayComments()}{" "}
    </div>
  );
};
export default AllComments;
