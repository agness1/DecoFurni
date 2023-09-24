import React, { FC } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from "next/link";
import MainNavigation from "./hamburger";



const Navigation: FC = ({}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
      <> 
      <nav className="hidden justify-between px-20 sm:flex h-12 items-center bg-transparent relative md:absolute w-full">
          <div className="flex gap-14 items-center">
          <p className="font-bold text-2xl pr-10">DecoFurni</p>
        <div className="flex items-center">
      <Button
      
        id="basic-button"
        sx={{
          color: "black",
          padding: "0",
          textTransform: "none",
          fontSize: "1.25rem"
          
         
        }}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Products
        <KeyboardArrowDownIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link href={"/products/sofas"}>Sofas</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href={"/products/lamps"}>Lamps</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href={"/products/chairs"}>Chairs</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href={"/products/wardrobes"}>Wardrobes</Link></MenuItem>
      </Menu>
    </div> 
    <Link href="" className="text-xl"> Contact </Link>   
          </div>
          
    <div className="flex gap-10">
      <Link href=""> <FavoriteIcon/> </Link>
    <Link href=""><ShoppingCartIcon/> </Link>
    <Link href=""> <AccountCircleIcon/> </Link>  
    </div>
  
    
        </nav>
        <MainNavigation/>
      </>
       
    )
};
export default Navigation