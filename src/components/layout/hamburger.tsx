import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Link from "next/link";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ChairIcon from '@mui/icons-material/Chair';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DescriptionIcon from "@mui/icons-material/Description";
import Button from "@mui/material/Button";


export default function MainNavigation() {
  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [open, setState] = useState(false);

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
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
                sm: "none"
              },
              position: "absolute",
              left: "1rem"
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
           
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "#dbc8ff"
              }}
              
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <Link href={'/'}>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
               
                </Link>
                <Link href={'/products'}>
                <ListItemButton>
                  <ListItemIcon>
                    <ChairIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Products" />
                </ListItemButton>
                </Link>
                

                <Link href={"/contact"}>
                  <ListItemButton>
                    <ListItemIcon>
                      <CallIcon sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                  </ListItemButton>
                </Link>

                <Link href={"/shopingCart"}>
                  <ListItemButton>
                    <ListItemIcon>
                      <ShoppingCartIcon sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText primary="Bag" />
                  </ListItemButton>
                </Link>
              </Box>

              

              <Box
                sx={{
                  width: '5rem',
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translate(-50%, 0)"
                }}
              >
                <Button className="btn-filter">
                  Register
                </Button>
                <Button className="btn-filter">
                  Login
                </Button>
              </Box>
            </Box>
          </Drawer>
        
        </>
         
      
    
  );
}