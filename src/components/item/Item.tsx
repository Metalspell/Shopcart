import { Button } from "@mui/material";

import { CartItemType } from "../../general_component/App";
import { Wrapper } from "./Item.styled";

type Props = {
  item: CartItemType;
  addItemToCart: (item: CartItemType) => void
}

const Item: React.FC<Props> = ({ item, addItemToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
      <h3>${item.price}</h3>
      <Button onClick={()=>addItemToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
}

export default Item;