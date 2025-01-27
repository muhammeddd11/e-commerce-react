export default function Header() {
  return (
    <header className="main-header">
      <div className="logo">
        <p className="logo-text">Naal</p>
      </div>
      <div className="search-block">
        <input
          className="search"
          type="text"
          placeholder="Search for product"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon search-icon"
          viewBox="0 0 512 512"
        >
          <path
            d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="10"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M338.29 338.29L448 448"
          />
        </svg>
      </div>
      <div className="profile-block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon cart-icon"
          viewBox="0 0 512 512"
        >
          <circle
            cx="176"
            cy="416"
            r="16"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <circle
            cx="400"
            cy="416"
            r="16"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M48 80h64l48 272h256"
          />
          <path
            d="M160 288h249.44a8 8 0 007.85-6.43l28.8-144a8 8 0 00-7.85-9.57H128"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
          />
        </svg>
        <p className="user-name">Muhammed abdelsamea</p>
        <img src="/user2.png" className="user-img" alt="Naal customer" />
      </div>
    </header>
  );
}
