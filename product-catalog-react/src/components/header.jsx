import profile from "../assets/profile.jpeg";

export default function Header({ setIsCartOpen, isCartOpen }) {
  return (
    <header className="header">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="220"
          height="60"
          viewBox="0 0 220 60"
          fill="none"
        >
          <g>
            <rect x="6" y="16" width="36" height="32" rx="7" fill="#e9e7e7" />

            <path
              d="M16 18
           C16 10 32 10 32 18"
              stroke="#ffffff"
              stroke-width="3"
              fill="none"
              stroke-linecap="round"
            />

            <circle cx="16" cy="18" r="2" fill="white" />
            <circle cx="32" cy="18" r="2" fill="white" />

            <path
              d="M16 18V24M32 18V24"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>

          <text
            x="56"
            y="40"
            font-family="Poppins, Arial, sans-serif"
            font-size="28"
            font-weight="700"
            fill="#FFFFFF"
          >
            Shoply.
          </text>
        </svg>
      </div>
      <div className="containerPencarian">
        <div className="pencarian">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>

          <input
            className="inputSearch"
            type="text"
            placeholder=" Cari produk favoritmu..."
          />
        </div>
        <div className="containerFavItems">
          <div className="favItemCheckout">
            <svg
              xmlns="http://w3.org"
              viewBox="0 0 24 24"
              width="30"
              height="28"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <div className="bgTotalFavItems">
            <p>1</p>
          </div>
        </div>
        <div className="containerBelanja">
          <div className="bgTotalCheckOut">
            <p>1</p>
          </div>
          <button
            className="keranjangCheckOut"
            onClick={() => setIsCartOpen(true)}
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
          </button>
          {isCartOpen && <div className="arrowCheckOut"></div>}
        </div>
        <div className="profile">
          <figure>
            <img src={profile} alt="" />
          </figure>
        </div>
      </div>
    </header>
  );
}
