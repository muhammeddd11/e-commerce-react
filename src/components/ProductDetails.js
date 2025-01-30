import { useEffect, useState } from "react";

export default function ProductDetails({ productID }) {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  console.log(productID);
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
                <p className="price">{product?.price}</p>
                <p className="discount">{product?.discout}</p>
              </div>
              <div className="checkout">
                <input
                  type="range"
                  className="order-quantity"
                  min={0}
                  step={1}
                  max={product.stock}
                  onChange={setQuantity}
                />
                <label className="order">{quantity}</label>
                <button className="check-out">Check out</button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
