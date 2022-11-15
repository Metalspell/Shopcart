import CarItem from "../cart_item/CartItem";
import { Wrapper } from "./Cart.styled";
import { CartItemType } from "../../general_component/App";

type Props = {
  cartItems: CartItemType[];
  addItemToCart: (value: CartItemType) => void;
  removeItemFromCart: (value: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addItemToCart, removeItemFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ?
        <p>No items in cart</p>
        :
        null
      }
      {cartItems.map(item => (
        <CarItem
          key={item.id}
          item={item}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}

        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
}

export default Cart;