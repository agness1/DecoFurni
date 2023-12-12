import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Link from "next/link";
import Login from "./login";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChairIcon from "@mui/icons-material/Chair";
import HomeIcon from "@mui/icons-material/Home";
import CallIcon from "@mui/icons-material/Call";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function MainNavigation() {
  const [open, setState] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(true)}
        sx={{
          mr: 2,
          display: {
            xs: "block",
            sm: "none",
          },
          position: "absolute",
          left: "0.5rem",

        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <div className="bg-opal h-full w-full p-4 flex flex-col items-center">
          <IconButton sx={{ mb: 2 }}>
            <ArrowBackIosIcon onClick={toggleDrawer(false)} className="mr-24" />
          </IconButton>

          <Divider sx={{ mb: 2 }} />

          <Box sx={{ mb: 2 }}>
            <Link href={"/"}>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon className="text-black" />
                </ListItemIcon>
                <ListItemText primary="Home" className="text-white" />
              </ListItemButton>
            </Link>
            <Link href={"/products"}>
              <ListItemButton>
                <ListItemIcon>
                  <ChairIcon className="text-black" />
                </ListItemIcon>
                <ListItemText primary="Products" className="text-white" />
              </ListItemButton>
            </Link>

            <Link href={"/contact"}>
              <ListItemButton>
                <ListItemIcon>
                  <CallIcon className="text-black" />
                </ListItemIcon>
                <ListItemText primary="Contact" className="text-white" />
              </ListItemButton>
            </Link>

            <Link href={"/shopingCart"}>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingCartIcon className="text-black" />
                </ListItemIcon>
                <ListItemText primary="Shoping Cart" className="text-white" />
              </ListItemButton>
            </Link>
          </Box>

          <Login />
        </div>
      </Drawer>
    </>
  );
}
