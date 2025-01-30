export default function Card({ product, handleActive }) {
  return (
    <figure className="card">
      <img src={product.thumbnail} alt={`product ${product.title}`} />
      <div className="products-details">
        <figcaption className="product-name">{product.title}</figcaption>
        <p className="product-category">{product.category}</p>
        <p className="product-price">
          Price: <strong>{product.price}$</strong>
        </p>
        <p className="product-rating">
          Rating: <strong>{product.rating}/5</strong>
        </p>
        <p className="order-policy">
          Minimum quantity:{" "}
          <strong>{product.minimumOrderQuantity} unit(s)</strong>
        </p>
        <button
          className="btn-order"
          onClick={() => handleActive(Number(product.id))}
        >
          Order
        </button>
      </div>
    </figure>
  );
}
