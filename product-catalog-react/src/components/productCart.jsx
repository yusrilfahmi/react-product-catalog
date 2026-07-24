
export default function ProductCart({
  title,
  price,
  description,
  category,
  thumbnail,
  rating,
  products,
  setSelectedProduct,
}) {
  return (
    <div className="cart">
      <figure>
        <img src={thumbnail} alt={title} />
      </figure>
      <div className="headerDesc">
        <p className="category">{category}</p>
        <p className="rating">{rating}</p>
      </div>
      <p className="title">{title}</p>
      <p className="description">{description}</p>

      <div className="footerDesc">
        <p className="price">{price}</p>

        <button
          className="btnCheckOut"
          onClick={() => setSelectedProduct(products)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="9" cy="20" r="1"></circle>
            <circle cx="20" cy="20" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          Add to Cart
        </button>
      </div>
      <div className="favItems">
        <svg
          xmlns="http://w3.org"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="#0e0e0e"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      </div>
    </div>
  );
}
