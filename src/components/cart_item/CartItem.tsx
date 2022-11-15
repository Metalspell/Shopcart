import { Button } from "@mui/material";
import { Wrapper } from "./CartItem.styles";
import { CartItemType } from "../../general_component/App";
import Item from "../item/Item";

type Props = {
  item: CartItemType;
  addItemToCart: (value: CartItemType) => void;
  removeItemFromCart: (value: number) => void;
}

const CarItem: React.FC<Props> = ({ item, addItemToCart, removeItemFromCart }) => {
  return (
    <Wrapper>
      <div>
        <h3>
          {item.title}
        </h3>
        <div className="info">
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
          <Button
            size='small'
            disableElevation
            variant='contained'
            onClick={() => removeItemFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addItemToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img src={item.image} alt={item.title} />
    </Wrapper>
  );
}

export default CarItem;