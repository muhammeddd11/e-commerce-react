import { useEffect, useState } from "react";

export default function ProductDetails({
  productID,
  handleCloseDetail,
  addToCart,
}) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function () {
      async function getProductDetails() {
        setIsLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${productID}`);
        const data = await res.json();
        setProduct(data);
        setIsLoading(false);
      }
      getProductDetails();
    },
    [productID]
  );
  return (
    <>
      {!isLoading && product && (
        <section className="product-details">
          <div className="container product-details-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon close-icon"
              viewBox="0 0 512 512"
              onClick={handleCloseDetail}
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M368 368L144 144M368 144L144 368"
              />
            </svg>
            <div className="img-section">
              <img src={`${product?.thumbnail}`} alt={`${product?.title}`} />
            </div>
            <div className="more-info">
              <div className="text-info">
                <p className="description">{product?.description}</p>
                <p className="stock">{product?.stock}</p>
                <p className="barnd-name">{product?.brand}</p>
                <p className="warranty-information">
                  {product?.warrantyInformation}
                </p>
                <p className="shipping-information">
                  {product?.shippingInformation}
                </p>
                <p className="availability-in-stock">
                  {product?.availabilityStatus}
                </p>
                <p className="return-policy">{product?.returnPolicy}</p>
                <p className="price">{product?.price}$</p>
                <p className="discount">{product?.discout}</p>
              </div>
              <div className="add-cart">
                <div className="quantity">
                  <input
                    type="range"
                    className="order-quantity"
                    value={quantity}
                    min={0}
                    step={1}
                    max={product.stock}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  />
                  <label className="order">
                    <strong>{quantity} </strong>unit(s)
                  </label>
                </div>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
