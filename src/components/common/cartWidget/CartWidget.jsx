import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
const {getTotalQuantity}=useContext(CartContext)
const total=getTotalQuantity()
  return (
    <Link to= "/cart">
      <Badge badgeContent={total} showZero color="primary">
        <ShoppingCartIcon color="action" />
      </Badge>
    </Link>
  );
};
export default CartWidget;
 