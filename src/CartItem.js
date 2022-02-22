const CartItem = ({id, img, price, item, amount, title}) => {
    const {remove} = useGlobalContext()
    return (
        
        <article className="cart-item">
            <img src={img} alt={title} />
            <div className="tel-info">
                <h3>{title}</h3>
                <h4>${price}</h4>
                <button className="remove-btn">
                    Remove
                </button>
            </div>
            <div className="btn-container">
                
                    <button className="amount-btn" onClick={( =>remove(id))}>
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
                    </button>
                    <p className="amount"> {amount}</p>
                    <button className="amount-btn">
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>

                    </button>
            </div>
        </article>
    )
}

export default CartItem