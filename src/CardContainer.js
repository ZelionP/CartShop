const CardContainer = () => {
    return (
        <section className="cart">
            <header>
                <h1>Your bag</h1>
                <div className="cart-details">
                    <p>test</p>
                    <p>test</p>
                    <p>test</p>
                </div>
                <footer>
                    <hr/>
                <div className="cart-total">
                    <h2>total:</h2>
                    <h2>$0</h2>
                </div>
                <button className="clear-btn">
                    Clear Cart
                </button>
                </footer>
            </header>
        </section>
    )
}
export default CardContainer