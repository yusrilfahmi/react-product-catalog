export default function PopUpCheckOut({
  setIsCartOpen,
  selectedCheckOut
}){
  return (
    <div className="bgCart">
          <div className="containerPopUpCheckOut">
            <div className="checkOutAtas">
              <div className="headerCart">
                <p>Your Cart</p>
                <button
                  className="closeCart"
                  onClick={() => setIsCartOpen(false)}
                >
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
                      d="M6 18 17.94 6M18 18 6.06 6"
                    />
                  </svg>
                </button>
              </div>
              <section className="sectionCartCheckOut">
                {selectedCheckOut.map((elements) => {
                  return (
                    <div className="articleCartCheckOut">
                      <div className="containerImgandDesc">
                        <figure>
                          <img src={elements.thumbnail} alt="" />
                        </figure>
                        <div className="descCartCheckOut">
                          <p className="titleCartCheckOut">{elements.title}</p>
                          <p className="priceCartCheckOut">{elements.price}</p>
                          <div className="btnQtyCheckOut"></div>
                          <div className="containerQtyCheckOut">
                            <button className="btnQtyMinCheckOut">
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
                            <div className="angkaCheckOut">
                              <button>1</button>
                            </div>
                            <button className="btnQtyPlusCheckOut">
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
                      </div>
                      <button className="btnDelCartCheckOutItems">
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
                              d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6"
                              stroke="#b3b3b3"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>{" "}
                          </g>
                        </svg>
                      </button>
                    </div>
                  );
                })}
              </section>
            </div>
            <div className="checkOutBawah">
              <div className="totalCartCheckOut">
                <p className="totalCart">Total</p>
                <p className="totalPriceCart">44.97</p>
              </div>
              <button className="btnCartCheckOut">Checkout</button>
            </div>
          </div>
        </div>
  )
}