export default function AsideBar() {
  return (
    <aside className="aside-bar">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon close-icon"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="32"
          d="M368 368L144 144M368 144L144 368"
        />
      </svg>
      <div className="categories">
        <a href="#" className="btn">
          Category01
        </a>
        <a href="#" className="btn">
          Category02
        </a>
        <a href="#" className="btn">
          Category03
        </a>
        <a href="#" className="btn">
          Category04
        </a>
        <a href="#" className="btn">
          Category05
        </a>
        <a href="#" className="btn">
          Category06
        </a>
      </div>
    </aside>
  );
}
