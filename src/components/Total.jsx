export default function Total({ freq, cart }) {
  console.log(cart);
  return (
    <>
      <div className="total-value">
        <span>Summary</span>
        <h5>{cart.length} Items</h5>

        <div>
          {" "}
          <label htmlFor="ship">SHIPPING</label>
          <input
            type="text"
            id="ship"
            placeholder="Standard delivery cost $5.00"
          />
        </div>
        <div>
          {" "}
          <label htmlFor="code"> PROME CODE</label>
          <input type="text" id="code" placeholder="Enter Your Code" />
          <button> APPLY</button>
        </div>

        <div>
          {" "}
          <span>Total Cost</span>{" "}
          <span>
            $
            {cart.reduce(
              (prev, product) =>
                Math.ceil(product.price * freq[product.id]) + prev,
              0
            )}
          </span>
        </div>
        <hr />
        <button>CHECKOUT</button>
      </div>
    </>
  );
}
