import CartItem from "./CartItem"
import { useGlobalContext } from "./contexts"
const CardContainer = () => {
    const {clearCart,state} = useGlobalContext()
    return (
        <section className="cart">
            <header>
                <h1>Your bag</h1>
                <div className="cart-details">
                    {
                        state.cart.map(item => {
                            return <CartItem key={item.id} {...item}/>
                        })
                    }
                </div>
                <footer>
                    <hr/>
                <div className="cart-total">
                    <h2>total:</h2>
                    <h2>$0</h2>
                </div>
                <button className="clear-btn" onClick={clearCart}>
                    Clear Cart
                </button>
                </footer>
            </header>
        </section>
    )
}
export default CardContainer