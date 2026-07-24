function bintang(params) {
  let totalBintang;
  if (params > 4) {
    totalBintang = "⭐⭐⭐⭐";
  } else if (params > 3) {
    totalBintang = "⭐⭐⭐";
  } else if (params > 2) {
    totalBintang = "⭐⭐";
  } else {
    totalBintang = "⭐";
  }
  return totalBintang;
}

export default function PopUpProduct({
  selectedProduct,
  products,
  setSelectedProduct,
  setSelectedCheckOut,
}) {
  return (
    <section className="popUpBg">
      <div className="popUpItems">
        <div className="images">
          {selectedProduct.images.map((image, index) => (
            <img key={index} src={image} alt={selectedProduct.title} />
          ))}
        </div>
        <figure>
          <img src={selectedProduct.thumbnail} alt={products.title} />
        </figure>
        <div className="containerDescItems">
          <p className="categoryItems">{selectedProduct.category}</p>
          <p className="titleItems">{selectedProduct.title}</p>
          <div className="containerRateandAvailability">
            <div className="ratingDescItems">
              <p>{bintang(selectedProduct.rating)}</p>
              <p>{selectedProduct.rating}</p>
              <p className="totalReview">
                ({selectedProduct.reviews.length} reviews)
              </p>
            </div>
            <p className="availableStatus">
              {selectedProduct.availabilityStatus}
            </p>
          </div>
          <p className="PricePopUp">{selectedProduct.price}</p>
          <p className="descPopUp">{selectedProduct.description}</p>
          <div className="guaranteShipping">
            <div className="shipping">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.5 6H3V17.25H3.375H4.5H4.52658C4.70854 18.5221 5.80257 19.5 7.125 19.5C8.44743 19.5 9.54146 18.5221 9.72342 17.25H15.0266C15.2085 18.5221 16.3026 19.5 17.625 19.5C18.9474 19.5 20.0415 18.5221 20.2234 17.25H21.75V12.4393L18.3107 9H16.5V6ZM16.5 10.5V14.5026C16.841 14.3406 17.2224 14.25 17.625 14.25C18.6721 14.25 19.5761 14.8631 19.9974 15.75H20.25V13.0607L17.6893 10.5H16.5ZM15 15.75V9V7.5H4.5V15.75H4.75261C5.17391 14.8631 6.07785 14.25 7.125 14.25C8.17215 14.25 9.07609 14.8631 9.49739 15.75H15ZM17.625 18C17.0037 18 16.5 17.4963 16.5 16.875C16.5 16.2537 17.0037 15.75 17.625 15.75C18.2463 15.75 18.75 16.2537 18.75 16.875C18.75 17.4963 18.2463 18 17.625 18ZM8.25 16.875C8.25 17.4963 7.74632 18 7.125 18C6.50368 18 6 17.4963 6 16.875C6 16.2537 6.50368 15.75 7.125 15.75C7.74632 15.75 8.25 16.2537 8.25 16.875Z"
                    fill="rgb(89, 89, 237)"
                  ></path>{" "}
                </g>
              </svg>
              <div className="descShipping">
                <p className="titleShipping">Free Shipping</p>
                <p className="notesShipping">On orders over $50</p>
              </div>
            </div>
            <div className="guarante">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4.06189 13C4.02104 12.6724 4 12.3387 4 12C4 7.58172 7.58172 4 12 4C14.5006 4 16.7332 5.14727 18.2002 6.94416M19.9381 11C19.979 11.3276 20 11.6613 20 12C20 16.4183 16.4183 20 12 20C9.61061 20 7.46589 18.9525 6 17.2916M9 17H6V17.2916M18.2002 4V6.94416M18.2002 6.94416V6.99993L15.2002 7M6 20V17.2916"
                    stroke="rgb(89, 89, 237)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <div className="descGuarante">
                <p className="titleGuarante">7 Days Return</p>
                <p className="notesGuarante">No questions asked</p>
              </div>
            </div>
          </div>
          <div className="containerQuantity">
            <p>Quantity:</p>
            <div className="containerQty">
              <button className="btnQtyMin">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14"
                  />
                </svg>
              </button>
              <p>1</p>
              <button className="btnQtyPlus">
                <svg
                  class="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="containerBtn">
            <button
              className="addToCart"
              onClick={() => {
                setSelectedCheckOut((prev) => [...prev, selectedProduct]);
                setSelectedProduct(null);
              }}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
                />
              </svg>
              <p>Add to Cart</p>
            </button>
            <button className="addToWishlist">
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 24 24"
                width="30"
                height="28"
                fill="none"
                stroke="rgb(89, 89, 237)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <p>Add to Wishlist</p>
            </button>
          </div>
        </div>
        <button
          className="btnTutupPopUp"
          onClick={() => setSelectedProduct(null)}
        >
          <svg
            class="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="29"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
