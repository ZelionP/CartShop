import CartItem from "./CartItem";
import { useGlobalContext } from "./context";
const CartContainer = () => {
  const { clearCart, state } = useGlobalContext();
  return (
    <section className="cart">
      <header>
        <h1>Your Bag</h1>
      </header>
      <div className="cart-details">
        {state.cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>total: </h4>
          <h4>$0</h4>
        </div>
        <button className="clear-btn" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
