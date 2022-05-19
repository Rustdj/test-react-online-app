import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {ItemBadge} from "../mui/item-badge";
import '../main-style/App.css';
import { useSelector } from "react-redux";


export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges() {
  const items = useSelector(state => state.cart.itemsInCart)
  
  return (
    <IconButton aria-label="cart">
      <ItemBadge quantity={items.length} />
        <ShoppingCartIcon/>
    </IconButton>
  );
}
