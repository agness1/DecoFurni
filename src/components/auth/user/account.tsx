import React, { FC, useState } from "react";
import { Button } from "@mui/material";
import { auth } from "@/firebase";
import Purchases from "./purchases";
import Modal from "@mui/material/Modal";
import { updateProfile } from "firebase/auth";
import useSetLogin from "@/hooks/useSetLogin";

const Account: FC = () => {
  const user = auth.currentUser;
  const { isLogin } = useSetLogin();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [update, setUpdate] = useState("");
  const [avatar, setAvatar] = useState("");
  const [nick, setNick] = useState("");
  const photoSource = user?.photoURL || '';
  const updateAvatar = () => {
    const update = () => {
      if (isLogin  && user) {
        updateProfile(user, {
          photoURL: avatar,
        }).then(() => {
          handleClose();
        });
      }
    };

    return (
      <>
        <label className="font-bold text-xl p-8">Update your avatar</label>
        <input
          type="text"
          className="border border-black rounded-md"
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="URL"
        ></input>
        <Button
          className="btn-filter"
          onClick={() => {
            update();
          }}
        >
          Update
        </Button>
      </>
    );
  };

  const updateNick = () => {
    const update = () => {
      if (isLogin && user) {
        updateProfile(user, {
          displayName: nick,
        }).then(() => {
          handleClose();
        });
      }
    };

    return (
      <>
        <label className="font-bold text-xl p-8">Update your nick</label>
        <input
          type="text"
          className="border border-black rounded-md"
          onChange={(e) => setNick(e.target.value)}
        ></input>
        <Button
          className="btn-filter"
          onClick={() => {
            update();
          }}
        >
          Update
        </Button>
      </>
    );
  };

  return (
    <section className=" flex flex-col gap-20 items-center  w-9/12 min-h-screen absolute inset-x-0 top-24  m-auto md:border-4 rounded-md pb-8 ">
      <h1 className="md:text-4xl text-2xl font-bold p-4">Your Account</h1>

      <div className="flex gap-4 md:gap-64 w-full justify-center flex-col md:flex-row">
        <div className="flex flex-col justify-around md:items-start items-center  md:p-8 h-60 md:w-1/2 md:shadow-2xl shadow-md">
          <p className="font-bold">nick: {user?.displayName}</p>
          <button
            className="bg-opal text-white  hover:bg-black p-2 px-8 text-sm capitalize rounded-md"
            onClick={() => {
              handleOpen(), setUpdate("nick");
            }}
          >
            Update your Nick
          </button>
          <p className="font-bold">Your e-mail: {user?.email}</p>
        </div>
        <div className="flex  flex-col items-center gap-4 p-4 shadow-md">
          <div className="w-36 h-32 bg-slate-600 rounded-full">
            <img src={photoSource} alt="User Photo" className="w-full h-full" />
          </div>
          <button
            className="bg-opal text-white  hover:bg-black p-2 px-8 mt-8 text-sm capitalize rounded-md"
            onClick={() => {
              handleOpen(), setUpdate("avatar");
            }}
          >
            Update your avatar
          </button>
        </div>
      </div>
      <div className="w-4/5">
        <h2 className="text-3xl font-bold p-4 text-center ">Your Products</h2>
        <div className="w-full shadow-xl"></div>
      </div>
      <Purchases />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form className="bg-white w-1/3 h-1/4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-around rounded-md">
          {update == "avatar" ? updateAvatar() : updateNick()}
        </form>
      </Modal>
    </section>
  );
};

export default Account;
